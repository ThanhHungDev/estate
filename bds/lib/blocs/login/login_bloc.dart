import 'package:bds/models/UserResource.dart';
import 'package:bds/repositories/login.dart';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

part 'login_event.dart';
part 'login_state.dart';

class LoginBloc extends Bloc<LoginEvent, LoginState> {
  LoginBloc() : super(LoginInitial());
  @override
  Stream<LoginState> mapEventToState(LoginEvent event) async* {
    if (event is FetchLoginEvent) {
      yield LoginLoading();
      final UserResource auth =
          await (new LoginRepository()).login(event.email, event.password);
      yield LoginLoaded(auth);
    }
  }
}
