import 'package:bds/models/ConversationResource.dart';
import 'package:bds/models/MessageResource.dart';
import 'package:bds/views/ChatScreen/CounterNoneRead.dart';
import 'package:flutter/material.dart';

class Messages extends StatefulWidget {
  final List<MessageResource> messages;
  const Messages({Key key, @required this.messages}) : super(key: key);

  @override
  _MessagesState createState() => _MessagesState();
}

class _MessagesState extends State<Messages> {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: widget.messages.length,
      itemBuilder: (context, index) {
        final message = widget.messages[index];
      },
    );
  }
}
