import 'package:bds/models/message.dart';
import 'package:bds/models/conversation.dart';
import 'package:bds/models/error.dart';
import 'package:bds/repositories/conversation.dart';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

part 'conversation_event.dart';
part 'conversation_state.dart';

class ConversationBloc extends Bloc<ConversationEvent, ConversationState> {
  ConversationBloc() : super(ConversationInitial());
  @override
  Stream<ConversationState> mapEventToState(ConversationEvent event) async* {
    if (event is GetConversationEvent) {
      print("get list conversation");
      dynamic conversations =
          await (new ConversationRepository()).getConversations();
      if (conversations is Error) {
        yield GetConversationError();
        return;
      }
      yield GetConversationSuccess(conversations);
    } else if (event is AddMessageConversationEvent) {
      final conversations =
          (state as GetConversationSuccess).conversations.map((conv) {
        if (conv.id == event.conversationid) {
          // message đang bị ngược => tin nhắn mới nhất nằm ở vị trí 0
          conv.messages.insert(0, event.message);
          return Conversation.clone(conv);
        }
        return Conversation.clone(conv);
      }).toList();

      yield GetConversationSuccess(conversations);
    }
  }
}
