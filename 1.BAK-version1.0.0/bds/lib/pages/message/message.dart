import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/conversation/conversation_bloc.dart';
import 'package:bds/pages/message/messages.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MessagePage extends StatelessWidget {
  final String title;
  final String id;
  // contructor
  MessagePage({Key key, this.title, this.id}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    print("trang detal được build sau initState");
    final AuthenticationAuthenticated dataAuth =
        BlocProvider.of<AuthenticationBloc>(context).state;
    final auth = dataAuth.user;
    print("detail data nè " + auth.id.toString() + " ${auth.email}");
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chat detail'),
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
        listener: (context, state) {},
        child: BlocBuilder<ConversationBloc, ConversationState>(
          builder: (context, state) {
            if (state is ConversationInitial) {
              return Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height,
                child: Center(
                  child: CircularProgressIndicator(),
                ),
              );
            } else if (state is GetConversationError) {
              return Container(
                child: Center(
                  child: Text("Fetch dữ liệu bị sai"),
                ),
              );
            }

            final data = (state as GetConversationSuccess);
            if (data.conversations.length == 0) {
              return Container(
                child: Center(
                  child: Text("không có conversation trong hệ thống"),
                ),
              );
            }
            final idConversation = id;
            final conversation = data.conversations
                .where((conv) => conv.id == idConversation)
                .toList()[0];
            return Container(
              child: ChatScreen(conversation: conversation, auth: auth),
            );
          },
        ),
      ),
    );
  }
}
