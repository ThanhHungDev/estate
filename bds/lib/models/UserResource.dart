import 'package:bds/globals.dart' as GLOBALS;

class UserResource {
  final int id;
  final String name;
  final String email;
  final String avatar;

  UserResource({this.id, this.name, this.email, this.avatar});

  factory UserResource.fromJson(Map<String, dynamic> json) => UserResource(
        id: json["id"],
        name: json["name"],
        email: json["email"],
        avatar: json["avatar"],
      );

  String getAvatar() => GLOBALS.APP_URL + avatar;
}
