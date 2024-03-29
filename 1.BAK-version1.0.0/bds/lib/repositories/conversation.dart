import 'dart:io';

import 'package:bds/models/conversation.dart';
import 'package:bds/models/error.dart';
import 'package:bds/repositories/interceptor.dart';
import 'package:dio/dio.dart';
import 'package:bds/globals.dart';
// import 'package:shared_preferences/shared_preferences.dart';

class ConversationRepository {
  final String uriApiGetConversations = "$REALTIME_URL/api/message/init";
  final Dio _dio = new Dio(BaseOptions(
    baseUrl: REALTIME_URL,
    receiveDataWhenStatusError: true,
    connectTimeout: 60 * 1000, // 60 seconds
    receiveTimeout: 60 * 1000, // 60 seconds
    headers: {
      'Connection': 'keep-alive',
    },
  ));

  Future<dynamic> getConversations() async {
    try {
      Response response = await (_dio..interceptors.add(AuthTokenInterceptor()))
          .get(uriApiGetConversations, queryParameters: {"user": "23424"});
      _dio.clear();
      Map<String, dynamic> json = response.data;
      if (json['code'] != HttpStatus.ok) {
        return Error(json['code'], json['message']);
      }
      return Conversation.fromList(json['data']);
    } on DioError catch (error) {
      return Error(HttpStatus.internalServerError, error.message);
    }
  }
}
