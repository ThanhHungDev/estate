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
    options.headers.addAll({"Authorization": "Bearer dsadsa$token"});
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

      /// xóa token cũ đi
      // SharedPreferences prefs = await SharedPreferences.getInstance();
      // await prefs.remove('auth');
      // chưa cung cấp token auth
      App.navigatorKey.currentState.pushReplacementNamed('/');
    }
    return super.onError(err, handler);
  }
}


// function setup(instance) {
//     instance.interceptors.request.use(
//         function (config) {
//             console.log("vào setup trước")
//             config.headers.Authorization = `Bearer ${jwtHelper.jwt}`
//             return config
//         },
//         function (err) {
//             console.log("vào setup error trước")
//             return Promise.reject(err)
//         }
//     )
// }

// function checkToken(instance) {
//     instance.interceptors.response.use(
//         response => {
//             console.log("vào checkToken")
//             // if (response.headers['content-type'].startsWith('application/json')) {
//             //     response.data = camelcaseKeys(response.data, { deep: true })
//             // }
//             return response
//         },
//         error => {
//             console.log("vào error checkToken")
//             if (
//                 error.response.status === 401 &&
//                 !window.location.pathname.includes('login')
//             ){
//                 let CONFIG = {}
//                 if( typeof window.CONFIG_APP != 'undefined' ){
//                     /// thì sao? 
//                     try {
//                         CONFIG = JSON.parse(window.CONFIG_APP)
//                     } catch (error) {}
//                 }
//                 // window.location.href = CONFIG.WEB.LOGOUT
//             }
//             return Promise.reject(error)
//         }
//     )
// }
