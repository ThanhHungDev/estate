import 'package:flutter/material.dart';

class Input extends StatefulWidget {
  const Input() : super();

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
    String text = _inputController.text;
    _inputController.clear();
    setState(() {
      _canSend = false;
    });
    print("gửi dữ liệu lên bloc ${text}");
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
