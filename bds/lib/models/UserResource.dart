import 'package:jwt_decode/jwt_decode.dart';

class UserResource {
  // "iat": 1641271553,
  // "exp": 1642481153,
  // "nbf": 1641271553,
  // "jti": "bsIT69MOrOnoewO4",
  // "sub": 3,
  // "prv": "23bd5c8949f600adb39e701c400872db7a5976f7",
  // "id": 3,
  // "name": "Trương người đăng",
  // "email": "userpost@gmail.com",
  // "avatar": "/images/avatar.jpg",
  // "role_id": 2,
  // "sale_type": 1,
  // "phone_verify": null,
  // "commune_id": null,
  // "district_id": 0,
  // "province_id": 0,
  // "commune": null,
  // "district": null,
  // "province": null,
  // "street": null,
  // "home_number": null,
  // "time_verify": "2022-01-04 11:45:47"
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
