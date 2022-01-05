part of 'authentication_bloc.dart';

abstract class AuthenticationEvent extends Equatable {
  const AuthenticationEvent();

  @override
  List<Object> get props => [];
}

class AppStarted extends AuthenticationEvent {}

class LoggedIn extends AuthenticationEvent {
  final String email;
  final String password;

  LoggedIn(this.email, this.password);
}

class LoggedOut extends AuthenticationEvent {}

class OnboardingStepCompleted extends AuthenticationEvent {}

class UserDeleted extends AuthenticationEvent {}