import 'package:bds/models/ConversationResource.dart';
import 'package:bds/views/ConversationScreen/CounterNoneRead.dart';
import 'package:flutter/material.dart';

class Conversations extends StatefulWidget {
  final List<ConversationResource> conversations;
  const Conversations({Key key, @required this.conversations})
      : super(key: key);

  @override
  _ConversationsState createState() => _ConversationsState();
}

class _ConversationsState extends State<Conversations> {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: widget.conversations.length,
      itemBuilder: (context, index) {
        final conversation = widget.conversations[index];
        final noneRead = CounterNoneRead(messages: conversation.messages);
        return Card(
          child: ListTile(
            title: Text(conversation.getConversationName()),
            subtitle: Text(conversation.getStrLastestMesssage()),
            leading: CircleAvatar(
              backgroundImage: NetworkImage(conversation.getAvatar()),
            ),
            trailing: noneRead,
            onTap: () {
              print(conversation.id.toString());
              Navigator.of(context)
                  .pushNamed('/detail', arguments: {'id': conversation.id});
            },
          ),
        );
      },
    );
  }
}
