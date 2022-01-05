import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:bds/globals.dart' as GLOBALS;
part 'socket_event.dart';
part 'socket_state.dart';

class SocketBloc extends Bloc<SocketEvent, SocketState> {
  IO.Socket socket;
  SocketBloc() : super(SocketInitial()) {
    print("contructor socket nef");
  }

  @override
  Stream<SocketState> mapEventToState(SocketEvent event) async* {
    print("có vào bloc socket trước " + state.toString());
    if (event is StartedSocketEvent) {
      print("đang trong quá trình connect vào hệ thống chat");
      this.socket = IO.io(
        GLOBALS.REALTIME_URL,
        IO.OptionBuilder()
            .setTransports(['websocket'])
            .setQuery({'token': event.jwt})
            .setExtraHeaders({'token': event.jwt}) // optional
            .setTimeout(3000)
            .disableAutoConnect()
            .disableReconnection()
            .build(),
      );
      // socket.onConnecting((data) => add(_OnlineConnectingEvent()));
      socket.onConnect((data) {
        print("thành công connect socket rồi nha");
        return this.add(ConnectedSocketEvent());
      });
      socket.onConnectError((data) => {print(data.toString())});
      // socket.onConnectTimeout((data) => add(_OnlineConnectTimeoutEvent(data)));
      // socket.onDisconnect((data) => add(_OnlineDisconnectEvent()));
      socket.onError((data) => {print(data.toString())});
      // socket.on('joined', (data) => add(_OnlineJoinedEvent.fromJson(data)));
      yield* _socketStarted();
    } else if (event is ConnectedSocketEvent) {
      print("đã connect được thành công ${this.socket.id}");
      yield ConnectedSocketState();
    }
  }

  Stream<SocketState> _socketStarted() async* {
    // await _cleanIfFirstUseAfterUninstall();
    yield* _initStartup();
  }

  Stream<SocketState> _initStartup() async* {
    if (!socket.connected) {
      print("đang connecting ...");
      yield ConnectingSocketState();
      socket.connect();
      return;
    }
  }

  @override
  Future<void> close() {
    socket.dispose();
    // return super.close();
  }
}
