import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/conversation/conversation_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:bds/pages/conversation/conversations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ConversationPage extends StatefulWidget {
  final String title;
  // contructor
  ConversationPage({Key key, this.title}) : super(key: key);

  @override
  _ConversationPageState createState() => _ConversationPageState();
}

class _ConversationPageState extends State<ConversationPage> {
  @override
  void initState() {
    print("trang chat được khởi tạo initState ");
    final AuthenticationAuthenticated auth =
        BlocProvider.of<AuthenticationBloc>(context).state;
    BlocProvider.of<SocketBloc>(context)
      ..add(StartedSocketEvent(auth.user.jwt));
    BlocProvider.of<ConversationBloc>(context)..add(GetConversationEvent());
    super.initState();
  }

  @override
  void didChangeDependencies() async {
    print("trang chat được build xong didChangeDependencies");
    super.didChangeDependencies();
  }

  Widget __buildLoading() {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    print("trang chat được build sau initState");
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
      body: BlocListener<ConversationBloc, ConversationState>(
        listener: (context, state) {
          // if (state is ConversationInitial) {

          // }
        },
        child: BlocBuilder<ConversationBloc, ConversationState>(
          builder: (context, state) {
            if (state is ConversationInitial) {
              return __buildLoading();
            } else if (state is GetConversationError) {
              return Container(
                child: Center(
                  child: Text("Fetch dữ liệu bị sai"),
                ),
              );
            } else if (state is GetConversationSuccess) {
              return Conversations(conversations: state.conversations);
            }
            return Container(
              child: Text("không biết"),
            );
          },
        ),
      ),
    );
  }
}
