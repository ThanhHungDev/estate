import 'package:bds/models/conversation.dart';
import 'package:bds/models/user.dart';
import 'package:bds/pages/message/input.dart';
import 'package:bds/pages/message/message_item.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  final Conversation conversation;
  final User auth;
  ChatScreen({this.conversation, this.auth}) : super();
  //modified
  @override //new
  State createState() => new ChatScreenState(); //new
}

// Add the ChatScreenState class definition in main.dart.
class ChatScreenState extends State<ChatScreen> with TickerProviderStateMixin {
  ScrollController _controller;

  @override
  void dispose() {
    _controller.removeListener(_scrollListener);
    super.dispose();
  }

  @override
  void initState() {
    _controller = ScrollController();
    _controller.addListener(_scrollListener);
    super.initState();
  }

  @override
  void didChangeDependencies() {
    print("trang list message được build xong didChangeDependencies");
    super.didChangeDependencies();
  }

  _scrollListener() {
    if (_controller.offset >= _controller.position.maxScrollExtent &&
        !_controller.position.outOfRange) {
      print("reach the bottom");
      // emit đã đọc tin nhắn
      setState(() {});
    }
    if (_controller.offset <= _controller.position.minScrollExtent &&
        !_controller.position.outOfRange) {
      print("reach the top");
      setState(() {});
    }
  }

  Widget _buildTextComposer() {
    return new IconTheme(
      data: IconThemeData(color: Theme.of(context).accentColor),
      child: Input(conversation: widget.conversation),
    );
  }

  @override //new
  Widget build(BuildContext context) {
    print(widget.auth);
    return SafeArea(
      child: Column(
        children: <Widget>[
          new Expanded(
            child: new ListView.builder(
              controller: _controller,
              padding: new EdgeInsets.all(8.0),
              reverse: true,
              shrinkWrap: true,
              itemBuilder: (BuildContext context, int index) {
                return MessageItem(
                  message: widget.conversation.messages[index],
                  auth: widget.auth,
                  user: widget.conversation.users[0],
                );
              },
              itemCount: widget.conversation.messages.length,
            ),
          ),
          Container(
            decoration: new BoxDecoration(color: Theme.of(context).cardColor),
            child: _buildTextComposer(),
          ),
        ],
      ),
    );
  }
}
