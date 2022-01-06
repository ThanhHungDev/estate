import 'package:bds/models/ErrorResource.dart';
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
    final auth = prefs.getString('auth'); // nếu không có thì trả về là null
    if (auth == null) {
      yield AuthenticationUnauthenticated();
      return;
    }
    final user = UserResource.fromJwt(prefs.getString('auth'));
    // check hết hạn chưa nếu hết hạn rồi thì xóa cũ đi rồi yield ra trạng thái không login
    if (user.period()) {
      // xóa cái cũ đi
      await prefs.setString('auth', null);
      yield AuthenticationUnauthenticated();
      return;
    }
    yield AuthenticationAuthenticated(user);
  }

  Stream<AuthenticationState> _loggedIn(LoggedIn event) async* {
    yield AuthenticationLoading();
    final auth =
        await (new LoginRepository()).login(event.email, event.password);
    if (auth is ErrorResource) {
      // quăng ra lỗi
      yield AuthenticationError(auth);
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
    await prefs.remove('auth');
  }

  Future<void> _cleanIfFirstUseAfterUninstall() async {
    final prefs = await SharedPreferences.getInstance();
    final firstRun = prefs.getBool('first_run');
    if (firstRun ?? true) {
      await prefs.remove('auth');
      await prefs.setBool('first_run', false);
    }
  }
}
