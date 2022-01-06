import 'package:bds/models/EventSocket.dart';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:bds/globals.dart' as GLOBALS;
part 'socket_event.dart';
part 'socket_state.dart';

class SocketBloc extends Bloc<SocketEvent, SocketState> {
  IO.Socket socket;
  SocketBloc() : super(SocketInitial()) {
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
      print("Successfully socket connected! ====>" + socket.id);
      // lưu lại trạng thái connect mới của socket
      if (socket.connected) {
        print("connected ở đây sẽ thành công " + socket.connected.toString());
        // thử emit lên mới 1 sự kiện trong JOIN__CHATTING
        socket.emit(EventSocket.JOIN__CHATTING);
      }
      return this.add(ConnectedSocketEvent());
    });
    socket.onDisconnect((error) {
      return this.add(DisconnectSocketEvent());
      print("onDisconnect ${socket.connected.toString()} ${error.toString()}");
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
  }

  @override
  Future<void> close() {
    socket.close();
    return super.close();
  }
}
