class Message {
  String id;
  bool read;
  bool readAdmin;
  List<dynamic> attachment;
  int user;
  String body;
  String channel;
  String style;
  DateTime createdAt;
  DateTime updatedAt;

  Message({
    this.id,
    this.read,
    this.readAdmin,
    this.attachment,
    this.user,
    this.body,
    this.channel,
    this.style,
    this.createdAt,
    this.updatedAt,
  }) : super();

  factory Message.fromJson(Map<String, dynamic> json) => Message(
        id: json["_id"],
        read: json["read"] ?? false,
        readAdmin: json["readAdmin"] ?? false,
        attachment: List<dynamic>.from(json["attachment"].map((att) => att)),
        user: json["user"],
        body: json["body"],
        channel: json["channel"],
        style: json["style"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: json["updatedAt"] == null
            ? DateTime.parse(json["createdAt"])
            : DateTime.parse(json["updatedAt"]),
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "read": read,
        "readAdmin": readAdmin,
        "attachment": List<dynamic>.from(attachment.map((att) => att)),
        "user": user,
        "body": body,
        "channel": channel,
        "style": style,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
      };
}
