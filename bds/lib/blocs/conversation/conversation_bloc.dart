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
    }
  }
}
