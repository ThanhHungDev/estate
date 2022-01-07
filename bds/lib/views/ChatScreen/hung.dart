import 'package:bds/blocs/socket/socket_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Hung extends StatelessWidget {
  const Hung({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ElevatedButton(
        onPressed: () {
          BlocProvider.of<SocketBloc>(context).add(EmitSocketEvent());
        },
        child: Text('Try it'),
      ),
    );
  }
}
