part of 'socket_bloc.dart';

abstract class SocketEvent extends Equatable {
  const SocketEvent();

  @override
  List<Object> get props => [];
}

class ConnectSocketEvent extends SocketEvent {}

class ConnectedSocketEvent extends SocketEvent {}

class StartedSocketEvent extends SocketEvent {}
