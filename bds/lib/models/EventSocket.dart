class EventSocket {
  static const String CONNECTION = "connection";
  static const String RESPONSE__CONNECTION = "response__connection";
  static const String DISCONNECT = "disconnect";
  static const String RESPONSE__DISCONNECT = "response__disconnect";
  static const String JOIN__COMMENT = "join__comment";
  static const String RESPONSE__JOIN__COMMENT = "response__join__comment";
  static const String ADD__COMMENT = "add__comment";
  static const String RESPONSE__ADD__COMMENT = "response__add__comment";
  static const String LIKE__COMMENT = "like__comment";
  static const String RESPONSE__LIKE__COMMENT = "response__like__comment";
  static const String REPORT__COMMENT = "report__comment";
  static const String RESPONSE__REPORT__COMMENT = "response__report__comment";
  static const String JOIN__CHATTING = "join__chatting";
  static const String RESPONSE__JOIN__CHATTING = "response__join__chatting";
  static const String TYPING = "typing";
  static const String RESPONSE__TYPING = "response__typing";
  static const String ADD__MESSAGE = "add__message";
  static const String RESPONSE__ADD__MESSAGE = "response__add__message";
  static const String READ__MESSAGE__ALL = "read__message__all";
  static const String RESPONSE__READ__MESSAGE__ALL =
      "response__read__message__all";
  static const String RECONNECT__CHATTING = "reconnect__chatting";
  static const String RESPONSE__RECONNECT__CHATTING =
      "response__reconnect__chatting";

  const EventSocket() : super();
}
