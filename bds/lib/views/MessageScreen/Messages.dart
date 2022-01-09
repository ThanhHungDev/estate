import 'package:bds/models/ConversationResource.dart';
import 'package:bds/models/MessageResource.dart';
import 'package:bds/models/UserResource.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  final ConversationResource conversation;
  ChatScreen(this.conversation) : super();
  //modified
  @override //new
  State createState() => new ChatScreenState(); //new
}

// Add the ChatScreenState class definition in main.dart.
class ChatScreenState extends State<ChatScreen> with TickerProviderStateMixin {
  final TextEditingController _textController = new TextEditingController();
  bool _isComposing = false;
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
      //"reach the bottom"
      setState(() {});
    }
    if (_controller.offset <= _controller.position.minScrollExtent &&
        !_controller.position.outOfRange) {
      // "reach the top";
      setState(() {});
    }
  }

  BoxDecoration myBoxDecoration() {
    return BoxDecoration(
      border: Border.all(width: 1.0, color: Colors.black38),
      borderRadius: BorderRadius.all(Radius.circular(10.0)),
    );
  }

  Widget _buildTextInput() => Container(
        margin: const EdgeInsets.all(8.0),
        padding: const EdgeInsets.only(left: 8.0),
        decoration: myBoxDecoration(),
        child: new Row(
          children: <Widget>[
            new Flexible(
              child: new TextField(
                controller: _textController,
                onChanged: (String text) {
                  setState(() {
                    _isComposing = text.length > 0;
                  });
                },
                keyboardType: TextInputType.multiline,
                maxLines: 10,
                minLines: 1,
                decoration:
                    new InputDecoration.collapsed(hintText: "Send a message"),
              ),
            ),
            new Container(
              child: new IconButton(
                  icon: new Icon(Icons.send),
                  onPressed: _isComposing
                      ? () => _handleSubmitted(_textController.text)
                      : null),
            ),
          ],
        ),
      );

  Widget _buildTextComposer() {
    return new IconTheme(
      data: IconThemeData(color: Theme.of(context).accentColor),
      child: new Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          new Container(
            margin: const EdgeInsets.only(bottom: 8.0),
            child: new IconButton(
                icon: new Icon(Icons.photo_camera),
                onPressed: () => _handleTouchOnCamera()),
          ),
          new Container(
            margin: const EdgeInsets.only(bottom: 8.0),
            child: new IconButton(
                icon: new Icon(Icons.photo_library),
                onPressed: () => _handleTouchOnGalleryPhoto()),
          ),
          Expanded(
            child: _buildTextInput(),
          ),
        ],
      ),
    );
  }

  void _handleSubmitted(String text) {
    _textController.clear();
    setState(() {
      _isComposing = false;
    });
    print("gửi dữ liệu lên bloc");
  }

  void _handleTouchOnCamera() {}

  void _handleTouchOnGalleryPhoto() {}

  @override //new
  Widget build(BuildContext context) {
    return new Column(
      children: <Widget>[
        new Flexible(
          child: new ListView.builder(
            controller: _controller,
            padding: new EdgeInsets.all(8.0),
            reverse: true,
            itemBuilder: (_, int index) =>
                ChatMessage(message: widget.conversation.messages[index]),
            itemCount: widget.conversation.messages.length,
          ),
        ),
        // new Divider(height: 1.0),
        new Container(
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

class ChatMessage extends StatelessWidget {
  final MessageResource message;
  ChatMessage({this.message}); //modified
  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: const EdgeInsets.symmetric(vertical: 10.0),
      child: new Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          new Container(
            margin: const EdgeInsets.only(right: 16.0),
            child: new CircleAvatar(child: new Text('H')),
          ),
          new Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              new Text("ẻwewrwr", style: Theme.of(context).textTheme.subhead),
              new Container(
                margin: const EdgeInsets.only(top: 5.0),
                child: new Text(message.body),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
