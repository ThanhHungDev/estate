import 'package:flutter/material.dart';

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
    return Scaffold(
        body: Center(
      child: Text("hung"),
    ));
  }
}
