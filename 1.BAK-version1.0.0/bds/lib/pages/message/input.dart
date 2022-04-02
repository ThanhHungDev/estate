import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:bds/event_socket.dart';
import 'package:bds/models/User.dart';
import 'package:bds/models/conversation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Input extends StatefulWidget {
  final Conversation conversation;
  final User auth;
  const Input({this.conversation, this.auth}) : super();

  @override
  _InputState createState() => _InputState();
}

class _InputState extends State<Input> {
  bool _canSend = false;
  final TextEditingController _inputController = new TextEditingController();

  BoxDecoration myBoxDecoration() {
    return BoxDecoration(
      border: Border.all(width: 1.0, color: Colors.black38),
      borderRadius: BorderRadius.all(Radius.circular(10.0)),
    );
  }

  void _handleSubmitted() {
    final socket = BlocProvider.of<SocketBloc>(context).socket;

    if (socket.connected) {
      final message = _inputController.text;
      final style = "";
      final attachment = [];
      final channel = widget.conversation.id;
      final keyUpdate = DateTime.now().toString();
      print("đã gửi " + message);

      /// random
      if (attachment.length == 0 &&
          message.toString().length == 0 &&
          style.toString().length == 0) {
        print("không gửi");
      } else {
        socket.emit(EventSocket.ADD__MESSAGE, {
          'keyUpdate': keyUpdate, // random
          'message': message, // function calc
          'style': style, // function calc
          'attachment': attachment, // function calc
          'channel': channel,
        });
        //emit xong phải đẩy vào hệ thống 1 messgae mơi nữa
      }
    }
    _inputController.clear();
    setState(() {
      _canSend = false;
    });
  }

  Widget _buildTextInput() {
    return Container(
      margin: const EdgeInsets.all(8.0),
      padding: const EdgeInsets.only(left: 8.0),
      decoration: myBoxDecoration(),
      child: new Row(
        children: <Widget>[
          new Flexible(
            child: new TextField(
              controller: _inputController,
              onChanged: (String text) {
                setState(() {
                  _canSend = text.length > 0;
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
              onPressed: _canSend ? () => _handleSubmitted() : null,
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: <Widget>[
        new Container(
          margin: const EdgeInsets.only(bottom: 8.0),
          child: new IconButton(
              icon: new Icon(Icons.photo_camera),
              onPressed: () => print("bấm vô cammera")),
        ),
        new Container(
          margin: const EdgeInsets.only(bottom: 8.0),
          child: new IconButton(
              icon: new Icon(Icons.photo_library),
              onPressed: () => print("bấm vô galery")),
        ),
        Expanded(
          child: _buildTextInput(),
        ),
      ],
    );
  }
}
