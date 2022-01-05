import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:bds/models/UserResource.dart';
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
    return BlocProvider(
      create: (context) => SocketBloc(auth.user.jwt)..add(StartedSocketEvent()),
      child: _renderChat(context),
    );
  }

  Scaffold _renderChat(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('AppBar Demo'),
          actions: <Widget>[
            IconButton(
              icon: const Icon(Icons.add_alert),
              tooltip: 'Show Snackbar',
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('This is a snackbar')));
              },
            ),
            IconButton(
              icon: const Icon(Icons.navigate_next),
              tooltip: 'Go to the next page',
              onPressed: () {
                Navigator.push(context, MaterialPageRoute<void>(
                  builder: (BuildContext context) {
                    return Scaffold(
                      appBar: AppBar(
                        title: const Text('Next page'),
                      ),
                      body: const Center(
                        child: Text(
                          'This is the next page',
                          style: TextStyle(fontSize: 24),
                        ),
                      ),
                    );
                  },
                ));
              },
            ),
          ],
        ),
        body: Center(
          child: Text("hung đẹp trai chat"),
        ));
  }
}
