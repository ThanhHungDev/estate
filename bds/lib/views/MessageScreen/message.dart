import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/conversation/conversation_bloc.dart';
import 'package:bds/views/MessageScreen/Messages.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MessagePage extends StatefulWidget {
  final String title;
  final String id;
  // contructor
  MessagePage({Key key, this.title, this.id}) : super(key: key);

  @override
  _MessagePageState createState() => _MessagePageState();
}

class _MessagePageState extends State<MessagePage> {
  @override
  void initState() {
    print("trang detail được khởi tạo initState ");
    super.initState();
  }

  @override
  void didChangeDependencies() async {
    print("trang detail được build xong didChangeDependencies");

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
    print("trang detal được build sau initState");
    final AuthenticationAuthenticated auth =
        BlocProvider.of<AuthenticationBloc>(context).state;
    final isAuth = auth is AuthenticationAuthenticated;
    if (!isAuth) {
      return Scaffold(
          body: Center(
        child: Text("hung đẹp trai không vào chat được"),
      ));
    }
    print("detail data nè " + auth.user.id.toString() + " ${auth.user.email}");
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
              return __buildLoading();
            } else if (state is GetConversationError) {
              return Container(
                child: Center(
                  child: Text("Fetch dữ liệu bị sai"),
                ),
              );
            }

            final data = (state as GetConversationSuccess);
            final idConversation = widget.id;
            final conversation = data.conversations
                .where((conv) => conv.id == idConversation)
                .toList()[0];
            print(conversation);
            return Container(
              child: ChatScreen(conversation),
            );
          },
        ),
      ),
    );
  }
}
