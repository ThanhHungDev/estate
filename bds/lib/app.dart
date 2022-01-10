import 'package:bds/pages/conversation/chat.dart';
import 'package:bds/pages/home/home.dart';
import 'package:bds/pages/message/message.dart';
// import 'package:bds/pages/LoadingPage/loading.dart';
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
        final arguments = settings.arguments as Map;
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
            {
              return MaterialPageRoute(
                  builder: (context) =>
                      MessagePage(title: title, id: arguments['id']));
            }

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
