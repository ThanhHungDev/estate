import 'package:bds/views/ChatScreen/chat.dart';
import 'package:bds/views/HomeScreen/home.dart';
import 'package:bds/views/MessageScreen/message.dart';
// import 'package:bds/views/LoadingPage/loading.dart';
import 'package:flutter/material.dart';

class App extends StatelessWidget {
  static final navigatorKey = GlobalKey<NavigatorState>();
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    const title = "Hùng demo bất động sản nha";
    return MaterialApp(
      navigatorKey: navigatorKey,
      title: 'Page login',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: "/",
      onGenerateRoute: (RouteSettings settings) {
        switch (settings.name) {
          case '/':
            return MaterialPageRoute(
                builder: (context) => HomePage(
                      title: title,
                    ));
            break;
          case '/chat':
            return MaterialPageRoute(
                builder: (context) => ConversationPage(
                      title: title,
                    ));
          case '/detail':
            return MaterialPageRoute(builder: (context) => MessagePage());
          default:
            return MaterialPageRoute(
                builder: (context) => ConversationPage(
                      title: title,
                    ));
        }
      },
    );
  }
}
