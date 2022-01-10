import 'package:bds/models/AuthResource.dart';
import 'package:bds/models/ConversationResource.dart';
import 'package:bds/views/MessageScreen/InputComposer.dart';
import 'package:bds/views/MessageScreen/MessageItem.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  final ConversationResource conversation;
  final AuthResource auth;
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
    super.dispose();
  }

  @override
  void initState() {
    _controller = ScrollController();
    _controller.addListener(_scrollListener);
    super.initState();
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
      child: InputComposer(),
    );
  }

  @override //new
  Widget build(BuildContext context) {
    return new Column(
      children: <Widget>[
        new Flexible(
          child: new ListView.builder(
            controller: _controller,
            padding: new EdgeInsets.all(8.0),
            reverse: true,
            itemBuilder: (_, int index) {
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
          child: SafeArea(
            bottom: true,
            child: _buildTextComposer(),
          ),
        ),
      ],
    );
  }
}
