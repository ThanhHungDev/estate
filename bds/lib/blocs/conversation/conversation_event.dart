part of 'conversation_bloc.dart';

abstract class ConversationEvent extends Equatable {
  const ConversationEvent();

  @override
  List<Object> get props => [];
}

class GetConversationEvent extends ConversationEvent {}

class AddMessageConversationEvent extends ConversationEvent {
  final String conversationid;
  final Message message;
  AddMessageConversationEvent({this.conversationid, this.message});
}
