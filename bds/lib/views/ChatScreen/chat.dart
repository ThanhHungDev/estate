import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:bds/views/ChatScreen/app_bar.dart';
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
  void initState() {
    print("trang chat được khởi tạo initState ");
    super.initState();
  }

  @override
  void didChangeDependencies() {
    print("trang chat được build xong didChangeDependencies");
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    final AuthenticationAuthenticated auth =
        BlocProvider.of<AuthenticationBloc>(context).state;
    final isAuth = auth is AuthenticationAuthenticated;
    if (!isAuth) {
      return Scaffold(
          body: Center(
        child: Text("hung đẹp trai không vào chat được"),
      ));
    }
    print("có data nè " + auth.user.id.toString() + " ${auth.user.email}");

    return BlocProvider(
      lazy: false,
      create: (context) => SocketBloc()..add(StartedSocketEvent(auth.user.jwt)),
      child: Scaffold(
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
          body: BlocBuilder<SocketBloc, SocketState>(
            builder: (context, state) {
              print("có vào builder socket " + state.toString());
              return Container(
                child: Text("vaof chat nef " +
                    (BlocProvider.of<SocketBloc>(context).socket?.id)
                        .toString()),
              );
            },
          )),
    );
  }
}
