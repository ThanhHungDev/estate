import 'package:jwt_decode/jwt_decode.dart';

class UserResource {
  final String jwt;
  final int id;
  final String name;
  final String email;
  final String avatar;
  final int role_id;

  const UserResource(
      this.jwt, this.id, this.name, this.email, this.avatar, this.role_id);

  factory UserResource.fromJwt(String token) {
    Map<String, dynamic> payload = Jwt.parseJwt(token);

    return new UserResource(
      token,
      payload['id'],
      payload['name'],
      payload['email'],
      payload['avatar'],
      payload['role_id'],
    );
  }
  bool period() {
    return Jwt.isExpired(this.jwt);
  }
}
