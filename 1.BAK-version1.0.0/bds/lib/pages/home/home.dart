import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class HomePage extends StatefulWidget {
  // contructor
  HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
      child: BlocListener<AuthenticationBloc, AuthenticationState>(
        cubit: BlocProvider.of<AuthenticationBloc>(context),
        listener: (context, state) {
          print("có vào listenner AuthenticationBloc");
          if (state is AuthenticationAuthenticated) {
            /// điều hướng ở đây
            // Navigator.pushNamed(context, '/chat');
            /// push không cho back
            Navigator.pushReplacementNamed(context, '/chat');
          }
        },
        child: BlocBuilder<AuthenticationBloc, AuthenticationState>(
          cubit: BlocProvider.of<AuthenticationBloc>(context),
          builder: (context, state) {
            print("có vào builder auth " + state.toString());
            if (state is AuthenticationUninitialized ||
                state is AppStarted ||
                state is AuthenticationUnauthenticated) {
              return __buildFormLogin();
            } else if (state is AuthenticationLoading) {
              return __buildFormLoading();
            } else if (state is AuthenticationAuthenticated &&
                state.user.period()) {
              return __buildFormLogin();
            } else {
              return Container(
                child: Text("tao chịu" + state.toString()),
              );
            }
          },
        ),
      ),
    ));
  }

  @override
  void dispose() {
    super.dispose();
    // BlocProvider.of<LoginBloc>(context).close();
  }

  Widget __buildFormLogin() {
    TextEditingController emailController =
        TextEditingController(text: 'usercustom@gmail.com');
    TextEditingController passwordController =
        TextEditingController(text: '123456');
    TextStyle style = TextStyle(fontFamily: 'Montserrat', fontSize: 20.0);
    final emailField = TextField(
      obscureText: false,
      style: style,
      controller: emailController,
      decoration: InputDecoration(
          contentPadding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
          hintText: "Email",
          border:
              OutlineInputBorder(borderRadius: BorderRadius.circular(32.0))),
    );
    final passwordField = TextField(
      obscureText: true,
      style: style,
      controller: passwordController,
      decoration: InputDecoration(
          contentPadding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
          hintText: "Password",
          border:
              OutlineInputBorder(borderRadius: BorderRadius.circular(32.0))),
    );
    final loginButon = Material(
      elevation: 5.0,
      borderRadius: BorderRadius.circular(30.0),
      color: Color(0xff01A0C7),
      child: MaterialButton(
        minWidth: MediaQuery.of(context).size.width,
        padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
        onPressed: () {
          print("bám vô đây");
          final email = emailController.text;
          final password = passwordController.text;
          // final loginBloc = BlocProvider.of<LoginBloc>(context);
          BlocProvider.of<AuthenticationBloc>(context)
              .add(LoggedIn(email, password));
        },
        child: Text("Login",
            textAlign: TextAlign.center,
            style: style.copyWith(
                color: Colors.white, fontWeight: FontWeight.bold)),
      ),
    );
    return Center(
      child: Container(
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.all(36.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              SizedBox(
                height: 155.0,
                child: Image.asset(
                  "assets/img/logo.png",
                  fit: BoxFit.contain,
                ),
              ),
              SizedBox(height: 45.0),
              emailField,
              SizedBox(height: 25.0),
              passwordField,
              SizedBox(
                height: 35.0,
              ),
              loginButon,
              SizedBox(
                height: 15.0,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget __buildFormLoading() {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}
