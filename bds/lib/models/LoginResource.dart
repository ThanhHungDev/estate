class LoginResource {
  final String JWT;
  final String error;

  const LoginResource(this.JWT, this.error);

  LoginResource.fromJson(Map<String, dynamic> json)
      : JWT = (json["data"] as String),
        error = "";

  LoginResource.withError(String errorValue)
      : JWT = "",
        error = errorValue;
}
