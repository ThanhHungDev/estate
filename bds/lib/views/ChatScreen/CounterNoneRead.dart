import 'package:bds/blocs/authentication/authentication_bloc.dart';
import 'package:bds/models/MessageResource.dart';
import 'package:flutter/material.dart';
import 'package:bds/globals.dart' as GLOBALS;
import 'package:flutter_bloc/flutter_bloc.dart';

class CounterNoneRead extends StatelessWidget {
  final int MAX__COUNTER = 9;
  final List<MessageResource> messages;
  CounterNoneRead({Key key, @required this.messages}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // kiểm tra nếu sao đó thì return null
    final AuthenticationAuthenticated auth =
        BlocProvider.of<AuthenticationBloc>(context).state;
    final noneRead = messages
        .where((mess) => !mess.read && mess.user != auth.user.id)
        .toList();
    if (noneRead.length == 0) {
      return Container(child: Text(''));
    }
    final counter = noneRead.length > MAX__COUNTER
        ? "$MAX__COUNTER+"
        : "${noneRead.length}";

    return Container(
      width: 40,
      height: 45,
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        gradient: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            GLOBALS.primaryColor,
            GLOBALS.primaryLightColor,
          ],
        ),
      ),
      child: GestureDetector(
        onTap: () async {
          print("click nè");
        },
        child: Center(
          child: Text(counter),
        ),
      ),
    );
  }
}
