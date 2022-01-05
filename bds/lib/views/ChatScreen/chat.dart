import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ChatPage extends StatefulWidget {
  final String title;
  // contructor
  ChatPage({Key key, this.title}) : super(key: key);

  @override
  _ChatPageState createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  @override
  Widget build(BuildContext context) {
    final blocAuth = BlocProvider.of<AuthenticationBloc>(context);
    final AuthenticationAuthenticated auth = blocAuth.state;
    final isAuth = auth is AuthenticationAuthenticated;
    if (!isAuth) {
      return Scaffold(
          body: Center(
        child: Text("hung đẹp trai không vào chat được"),
      ));
    }

    print("có data nè " + auth.user.id.toString() + " ${auth.user.email}");
    final blocSocket = BlocProvider.of<SocketBloc>(context);
    blocSocket.add(StartedSocketEvent(auth.user.jwt));
    return Scaffold(
      appBar: AppBar(
        title: const Text('List chat'),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.add_alert),
            tooltip: 'Show Snackbar',
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('This is a snackbar')));
            },
          )
        ],
      ),
      body: BlocListener<SocketBloc, SocketState>(
          cubit: blocSocket,
          listener: (context, state) {
            print("có vào listenner SocketBloc");
          },
          child: BlocBuilder<SocketBloc, SocketState>(
            cubit: BlocProvider.of<SocketBloc>(context),
            builder: (context, state) {
              print("có vào builder socket" + state.toString());
              return Container(
                child:
                    Text("vaof chat nef " + (blocSocket.socket?.id).toString()),
              );
            },
          )),
    );
  }
}
