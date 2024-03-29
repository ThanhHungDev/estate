import 'package:bds/models/message.dart';
import 'package:bds/models/user.dart';
import 'package:flutter/material.dart';

class MessageItem extends StatelessWidget {
  final Message message;
  final User auth;
  final User user;
  MessageItem({this.message, this.auth, this.user}); //modified
  @override
  Widget build(BuildContext context) {
    print("${message.user.toString()} == ${auth.id.toString()}");
    User people = message.user == auth.id ? auth : user;
    people.setType(message.user == auth.id);

    return Column(children: [
      Align(
        alignment: people.type ? Alignment.topRight : Alignment.topLeft,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(11),
            color: people.type ? Colors.grey.shade200 : Colors.blue[200],
          ),
          padding: EdgeInsets.symmetric(vertical: 8.0, horizontal: 15.0),
          margin: EdgeInsets.symmetric(vertical: 2.0, horizontal: 0),
          child: Text(
            message.body,
            style: TextStyle(fontSize: 15),
          ),
        ),
      ),
      Row(
        mainAxisAlignment:
            people.type ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: [
          Icon(
            message.read ? Icons.check_circle : Icons.check_circle_outline,
            size: 13,
            color: Colors.grey.shade600,
          ),
          SizedBox(
            width: 5,
          ),
          Text(
            message.read ? 'Đã xem' : 'chưa xem',
            style: TextStyle(fontSize: 10),
          )
        ],
      )
    ]);
  }
}
