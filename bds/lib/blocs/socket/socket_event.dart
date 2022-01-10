part of 'socket_bloc.dart';

abstract class SocketEvent extends Equatable {
  const SocketEvent();

  @override
  List<Object> get props => [];
}

class ConnectSocketEvent extends SocketEvent {}

class ConnectedSocketEvent extends SocketEvent {
  // final IO.Socket socket;
  // ConnectedSocketEvent(this.socket);
}

class StartedSocketEvent extends SocketEvent {
  final String jwt;
  StartedSocketEvent(this.jwt);
}

class DisconnectSocketEvent extends SocketEvent {}

class AddNewMessageSocketEvent extends SocketEvent {
  final String conversationid;
  final Message message;
  AddNewMessageSocketEvent({this.conversationid, this.message});
}

class EmitSocketEvent extends SocketEvent {}
