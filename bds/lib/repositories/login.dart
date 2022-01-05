import 'dart:io';
import 'package:bds/models/UserResource.dart';
import 'package:dio/dio.dart';
import 'package:bds/globals.dart';
// import 'package:shared_preferences/shared_preferences.dart';

class LoginRepository {
  final postLogin = "$APP_URL/api/v1/login";
  final Dio _dio = new Dio(BaseOptions(
    baseUrl: APP_URL, //"http://localhost",
    receiveDataWhenStatusError: true,
    connectTimeout: 60 * 1000, // 60 seconds
    receiveTimeout: 60 * 1000, // 60 seconds
    headers: {
      'Connection': 'keep-alive',
    },
  ));

  Future<UserResource> login(String email, String password) async {
    try {
      Map<String, dynamic> _data = Map();
      _data['email'] = email;
      _data['password'] = password;
      Response response =
          await _dio.post(postLogin, data: _data).catchError((e) {
        print(e.response?.statusCode);
      });
      _dio.clear();
      if (response != null && response.statusCode == HttpStatus.ok) {
        Map<String, dynamic> json = response.data;
        return UserResource.fromJwt(json['data']);
      } else {
        print(response);
        return null;
      }
    } on DioError catch (error) {
      // if (error.type == DioErrorType.connectTimeout) {
      //   throw Exception("Connection  Timeout Exception");
      // }
      // throw Exception(error.message);
      print(error.message);
      return null;
    }
  }
}
