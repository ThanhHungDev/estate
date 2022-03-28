part of 'conversation_bloc.dart';

abstract class ConversationState extends Equatable {
  const ConversationState();

  @override
  List<Object> get props => [];
}

class ConversationInitial extends ConversationState {}

class GetConversationError extends ConversationState {}

class GetConversationSuccess extends ConversationState {
  final List<Conversation> conversations;
  GetConversationSuccess(this.conversations) : super();
  @override
  List<Object> get props => [conversations];
}