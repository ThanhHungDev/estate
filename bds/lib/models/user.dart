import 'package:bds/globals.dart' as GLOBALS;
import 'package:jwt_decode/jwt_decode.dart';

class User {
  String jwt;
  bool type;
  final int id;
  final String name;
  final String email;
  final String avatar;

  User({this.id, this.name, this.email, this.avatar});
  void setType(bool type) {
    this.type = type;
  }

  factory User.fromJwt(String token) {
    Map<String, dynamic> payload = Jwt.parseJwt(token);

    User user = new User(
      id: payload['id'],
      name: payload['name'],
      email: payload['email'],
      avatar: payload['avatar'],
    );
    user.setJwt(token);
    return user;
  }

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json["id"],
      name: json["name"],
      email: json["email"],
      avatar: json["avatar"],
    );
  }

  String getAvatar() => GLOBALS.APP_URL + avatar;

  void setJwt(String token) {
    this.jwt = token;
  }

  bool isAuth() => jwt != null;
  bool period() {
    return Jwt.isExpired(this.jwt);
  }
}
