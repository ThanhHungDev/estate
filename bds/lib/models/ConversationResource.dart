import 'package:bds/models/MessageResource.dart';
import 'package:bds/models/UserResource.dart';
import 'package:bds/globals.dart' as GLOBALS;

class ConversationResource {
  String id;
  String name;
  List<int> user;
  int sort;
  bool backup;
  DateTime updatedAt;
  DateTime createdAt;
  List<MessageResource> messages;
  List<UserResource> users;

  ConversationResource({
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

  static List<ConversationResource> fromList(List<dynamic> json) {
    List<ConversationResource> convs = [];
    for (var i = 0; i < json.length; i++) {
      convs.add(ConversationResource.fromJson(json[i]));
    }
    return convs;
  }

  factory ConversationResource.fromJson(Map<String, dynamic> json) =>
      ConversationResource(
        id: json["_id"],
        name: json["name"],
        user: List<int>.from(json["user"].map((x) => x)),
        sort: json["sort"],
        backup: json["backup"],
        updatedAt: DateTime.parse(json["updated_at"]),
        createdAt: DateTime.parse(json["created_at"]),
        messages: List<MessageResource>.from(
            json["messages"].map((mess) => MessageResource.fromJson(mess))),
        users: List<UserResource>.from(
            json["users"].map((u) => UserResource.fromJson(u))),
      );
  MessageResource getLastestMessage() =>
      this.messages.length != 0 ? messages[messages.length - 1] : null;
  String getStrLastestMesssage() {
    MessageResource lastest = this.getLastestMessage();
    return lastest == null ? '' : lastest.body;
  }

  String getAvatar() => GLOBALS.APP_URL + users[0].avatar;
  String getConversationName() => users[0].name;
}
