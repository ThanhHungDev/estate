part of 'login_bloc.dart';

abstract class LoginEvent extends Equatable {
  const LoginEvent();

  @override
  List<Object> get props => [];
}

class FetchLoginEvent extends LoginEvent {
  final String email;
  final String password;

  FetchLoginEvent(this.email, this.password);
}
