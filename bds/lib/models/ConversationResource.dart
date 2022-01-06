import 'package:bds/models/UserResource.dart';

class Conversation {
  final String _id;
  final bool backup;
  final String name;
  final int sort;
  final List<int> user;
  final List<UserResource> users;
  final String updatedAt;
  final String createdAt;

  Conversation(
    this._id,
    this.backup,
    this.name,
    this.sort,
    this.user,
    this.users,
    this.updatedAt,
    this.createdAt,
  ) : super();
}



// // user
// // :
// // [1, 1011]

// // users
// // :
// // [{…}]








// user ====> 

// active
// :
// 2
// avatar
// :
// "/images/avatar.jpg"
// background
// :
// "/images/background/flores-amarillas-wallpaper.jpeg"
// commune_id
// :
// null
// contact
// :
// null
// created_at
// :
// "2022-01-02T13:37:37.000000Z"
// email
// :
// "admin@gmail.com"
// email_verified_at
// :
// null
// home_number
// :
// null
// id
// :
// 1
// name
// :
// "Quản trị viên"
// phone
// :
// null
// phone_verify
// :
// null
// role
// :
// 1
// role_id
// :
// 1
// sale_type
// :
// 1
// street
// :
// null
// time_verify
// :
// "2022-01-02 13:38:52"
// updated_at
// :
// "2022-01-02T13:37:37.000000Z"
// new entry
// : 