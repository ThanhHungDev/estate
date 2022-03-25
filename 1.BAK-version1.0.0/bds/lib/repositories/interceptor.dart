import 'dart:io';

import 'package:bds/app.dart';
import 'package:dio/dio.dart';
import 'package:shared_preferences/shared_preferences.dart';

class AuthTokenInterceptor extends Interceptor {
  @override
  void onRequest(
      RequestOptions options, RequestInterceptorHandler handler) async {
    print('REQUEST[${options.method}] => PATH: ${options.path}');
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String token = prefs.getString('auth');
    options.headers.addAll({"Authorization": "Bearer $token"});
    return super.onRequest(options, handler);
  }

  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    print(
      'RESPONSE[${response.statusCode}] => PATH: ${response.requestOptions.path}',
    );
    return super.onResponse(response, handler);
  }

  @override
  void onError(DioError err, ErrorInterceptorHandler handler) async {
    print(
      'ERROR[${err.response?.statusCode}] => PATH: ${err.requestOptions.path}',
    );
    if (err.response?.statusCode == HttpStatus.forbidden ||
        err.response?.statusCode == HttpStatus.unauthorized) {
      // thay đổi state
      App.navigatorKey.currentState.pushReplacementNamed('/');
    }
    return super.onError(err, handler);
  }
}
