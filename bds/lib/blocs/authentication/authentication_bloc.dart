import 'package:bds/models/UserResource.dart';
import 'package:bds/repositories/login.dart';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:shared_preferences/shared_preferences.dart';

part 'authentication_event.dart';
part 'authentication_state.dart';

class AuthenticationBloc
    extends Bloc<AuthenticationEvent, AuthenticationState> {
  AuthenticationBloc() : super(AuthenticationUninitialized());

  @override
  Stream<AuthenticationState> mapEventToState(
      AuthenticationEvent event) async* {
    print("có vào bloc trước");
    if (event is AppStarted) {
      yield* _appStarted();
    } else if (event is LoggedIn) {
      yield* _loggedIn(event);
    } else if (event is LoggedOut) {
      yield* _loggedOut(event);
    } else if (event is OnboardingStepCompleted) {
      yield* _initStartup();
    }
  }

  Stream<AuthenticationState> _appStarted() async* {
    await _cleanIfFirstUseAfterUninstall();

    yield* _initStartup();
  }

  Stream<AuthenticationState> _initStartup() async* {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    if (prefs.getString('auth') == null) {
      yield AuthenticationUnauthenticated();
      return;
    }
    final user = UserResource.fromJwt(prefs.getString('auth'));

    /// check hết hạn chưa nếu hết hạn rồi thì xóa cũ đi rồi yield ra trạng thái không login
    if (user.period()) {
      /// xóa cái cũ đi
      await prefs.setString('auth', null);
      yield AuthenticationUnauthenticated();
      return;
    }
    yield AuthenticationAuthenticated(user);
  }

  Stream<AuthenticationState> _loggedIn(LoggedIn event) async* {
    yield AuthenticationLoading();
    final UserResource auth =
        await (new LoginRepository()).login(event.email, event.password);
    if (auth == null) {
      /// quăng ra lỗi
      yield AuthenticationError();
      return;
    }

    /// lưu trạng thái này vào local references
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth', auth.jwt);
    yield* _initStartup();
  }

  Stream<AuthenticationState> _loggedOut(LoggedOut event) async* {
    yield AuthenticationLoggingOut();

    /// lưu trạng thái này vào local references
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth', null);
  }

  Future<void> _cleanIfFirstUseAfterUninstall() async {
    final prefs = await SharedPreferences.getInstance();

    if (prefs.getBool('first_run') ?? true) {
      await prefs.setString('auth', null);
      await prefs.setBool('first_run', false);
    }
  }
}
