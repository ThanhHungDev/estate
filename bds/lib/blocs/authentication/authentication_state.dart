part of 'authentication_bloc.dart';

abstract class AuthenticationState extends Equatable {
  const AuthenticationState();

  @override
  List<Object> get props => [];
}

class AuthenticationUninitialized extends AuthenticationState {}

class AuthenticationUnauthenticated extends AuthenticationState {}

class AuthenticationAuthenticated extends AuthenticationState {
  final UserResource user;
  AuthenticationAuthenticated(this.user);
}

class AuthenticationLoading extends AuthenticationState {}

class AuthenticationError extends AuthenticationState {}

class AuthenticationLoggingOut extends AuthenticationState {}
