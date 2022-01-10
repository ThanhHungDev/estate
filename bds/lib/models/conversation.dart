import 'package:bds/models/message.dart';
import 'package:bds/models/user.dart';
import 'package:bds/globals.dart' as GLOBALS;

class Conversation {
  String id;
  String name;
  List<int> user;
  int sort;
  bool backup;
  DateTime updatedAt;
  DateTime createdAt;
  List<Message> messages;
  List<User> users;

  Conversation({
    this.id,
    this.name,
    this.user,
    this.sort,
    this.backup,
    this.updatedAt,
    this.createdAt,
    this.messages,
    this.users,
  }) : super();

  static List<Conversation> fromList(List<dynamic> json) {
    List<Conversation> convs = [];
    for (var i = 0; i < json.length; i++) {
      convs.add(Conversation.fromJson(json[i]));
    }
    return convs;
  }

  factory Conversation.fromJson(Map<String, dynamic> json) => Conversation(
        id: json["_id"],
        name: json["name"],
        user: List<int>.from(json["user"].map((x) => x)),
        sort: json["sort"],
        backup: json["backup"],
        updatedAt: DateTime.parse(json["updated_at"]),
        createdAt: DateTime.parse(json["created_at"]),
        messages: List<Message>.from(
                json["messages"].map((mess) => Message.fromJson(mess)))
            .reversed
            .toList(),
        users: List<User>.from(json["users"].map((u) => User.fromJson(u))),
      );
  Message getFirstMessage() => this.messages.length != 0 ? messages[0] : null;
  String getStrEndMesssage() {
    Message first = this.getFirstMessage();
    return first == null ? '' : first.body;
  }

  String getAvatar() => GLOBALS.APP_URL + users[0].avatar;
  String getConversationName() => users[0].name;
}
