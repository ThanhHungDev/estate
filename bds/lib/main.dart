import 'package:bds/app.dart';
import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/conversation/conversation_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
// import 'package:bds/globals.dart' as GLOBALS;

void main() {
  runApp(MultiBlocProvider(
    providers: [
      BlocProvider<AuthenticationBloc>(
        create: (context) => AuthenticationBloc()..add(AppStarted()),
      ),
      BlocProvider<SocketBloc>(
        // lazy: false,
        create: (BuildContext context) => SocketBloc(),
      ),
      BlocProvider<ConversationBloc>(
        create: (BuildContext context) => ConversationBloc(),
      ),
    ],
    child: App(),
  ));
}
