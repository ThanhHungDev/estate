part of 'socket_bloc.dart';

abstract class SocketState extends Equatable {
  const SocketState();

  @override
  List<Object> get props => [];
}

class SocketInitial extends SocketState {}

class ConnectingSocketState extends SocketState {}

class ConnectedSocketState extends SocketState {}

class DisconnectSocketState extends SocketState {}
