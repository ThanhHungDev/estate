import 'dart:io';

import 'package:bds/blocs/conversation/conversation_bloc.dart';
import 'package:bds/event_socket.dart';
import 'package:bds/models/message.dart';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:bds/globals.dart' as GLOBALS;
part 'socket_event.dart';
part 'socket_state.dart';

class SocketBloc extends Bloc<SocketEvent, SocketState> {
  IO.Socket socket;
  final ConversationBloc convBloc;
  SocketBloc({this.convBloc}) : super(SocketInitial()) {
    print("contructor socket nè");
  }

  @override
  Stream<SocketState> mapEventToState(SocketEvent event) async* {
    if (event is StartedSocketEvent) {
      yield* _socketStarted(event.jwt);
    } else if (event is ConnectedSocketEvent) {
      print("đã connect được thành công ${this.socket.id}");
      yield ConnectedSocketState();
    } else if (event is DisconnectSocketEvent) {
      print("mất kết nối với máy chủ");
      yield DisconnectSocketState();
    } else if (event is EmitSocketEvent) {
      print("emit thử");
    } else if (event is AddNewMessageSocketEvent) {
      print("có người nhắn tin, tin nhắn mới :D ");
      // yield AddMesssageSocketState();
      convBloc.add(AddMessageConversationEvent(
        conversationid: event.conversationid,
        message: event.message,
      ));
    }
  }

  Stream<SocketState> _socketStarted(jwt) async* {
    await _cleanIfExist();
    yield* _initStartup(jwt);
  }

  Stream<SocketState> _initStartup(jwt) async* {
    print("=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>đang connecting ...");
    await _createSocketListenner(jwt);
    if (!socket.connected) {
      yield ConnectingSocketState();
      socket.connect();
      return;
    }
  }

  Future<void> _cleanIfExist() async {
    if (socket != null && socket.connected) {
      // hủy kết nối cũ đang có
      socket.close();
      socket = null;
    }
  }

  Future<void> _createSocketListenner(jwt) async {
    socket = IO.io(
      GLOBALS.REALTIME_URL,
      IO.OptionBuilder()
          .setTransports(['websocket'])
          .setQuery({'token': jwt})
          .setExtraHeaders({'token': jwt}) // optional
          .setTimeout(3000)
          .disableAutoConnect()
          // .disableReconnection()
          .build(),
    );
    // socket.onConnecting((data) => add(_OnlineConnectingEvent()));
    socket.onConnect((data) {
      print("Successfully socket connected! ====>" +
          socket.id +
          " " +
          EventSocket.ADD__MESSAGE);
      // lưu lại trạng thái connect mới của socket
      if (socket.connected) {
        print("connected ở đây sẽ thành công " + socket.connected.toString());
        // thử emit lên mới 1 sự kiện trong JOIN__CHATTING
        socket.emit(EventSocket.JOIN__CHATTING);
      }
      return this.add(ConnectedSocketEvent());
    });
    socket.onDisconnect((error) {
      print("onDisconnect ${socket.connected.toString()} ${error.toString()}");
      return this.add(DisconnectSocketEvent());
    });
    socket.onError((error) {
      print("************ Error ************");
      print("************ Error ************");
      print(error);
      print("************ Error ************");
    });
    socket.onConnectError((error) {
      print(
          "connect_error ${socket.connected.toString()} ${error.toString()}"); // not authorized
    });
    socket.onConnectTimeout((error) {
      print(
          "onConnectTimeout ${socket.connected.toString()} ${error.toString()}");
    });
    socket.on("reconnect", (data) {
      print(
          "reconnect success ${socket.connected.toString()} ${data.toString()}");
      socket.emit(EventSocket.RECONNECT__CHATTING, []);
    });
    socket.on(EventSocket.RESPONSE__ADD__MESSAGE, (response) {
      final Map<String, dynamic> json = response as Map<String, dynamic>;
      print(json.toString());
      final int code = json['code'];
      // { user, message, style, attachment, channel, keyUpdate, createdAt, _id }
      final Map<String, dynamic> data = json['data'];
      final String socketid = json['socketid'];

      /// socket add vào hệ thống 1 message mới
      if (code != HttpStatus.ok) {
        print("đang bị lỗi gì đó nên không cần làm gì cả");
      } else if (code == HttpStatus.ok &&
          socketid.toString() == socket.id.toString()) {
        print("==============g cần làm gì cả");
        return this.add(
          AddNewMessageSocketEvent(
            conversationid: data['channel'],
            message: Message.fromJson(data),
          ),
        );
      } else if (code == HttpStatus.ok &&
          socketid.toString() != socket.id.toString()) {
        print("===nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnm gì cả");
        return this.add(
          AddNewMessageSocketEvent(
            conversationid: data['channel'],
            message: Message.fromJson(data),
          ),
        );
      }
    });
  }

  @override
  Future<void> close() {
    socket.close();
    return super.close();
  }
}
