import 'package:bds/models/AuthResource.dart';
import 'package:bds/models/MessageResource.dart';
import 'package:bds/models/UserResource.dart';
import 'package:flutter/material.dart';

class MessageItem extends StatelessWidget {
  final MessageResource message;
  final AuthResource auth;
  final UserResource user;
  MessageItem({this.message, this.auth, this.user}); //modified
  @override
  Widget build(BuildContext context) {
    UserResource _user = user;
    print(message.user.toString() + " == " + auth.id.toString());
    if (message.user == auth.id) {
      // change user
      _user = new UserResource(
          id: auth.id, name: auth.name, email: auth.email, avatar: auth.avatar);
    }
    return Align(
      alignment:
          message.user == auth.id ? Alignment.topLeft : Alignment.topRight,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(11),
          color:
              message.user == auth.id ? Colors.grey.shade200 : Colors.blue[200],
        ),
        padding: EdgeInsets.symmetric(vertical: 8.0, horizontal: 15.0),
        margin: EdgeInsets.symmetric(vertical: 2.0, horizontal: 0),
        child: Text(
          message.body,
          style: TextStyle(fontSize: 15),
        ),
      ),
    );
  }
}
