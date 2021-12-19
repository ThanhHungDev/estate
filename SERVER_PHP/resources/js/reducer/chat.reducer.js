import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import Config from './config'
import Auth from './auth'
import Conversation from './conversation'
import Socket from './socket'
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    config: Config,
    auth  : Auth,
    conversation: Conversation,
    socket : Socket,
});
export default Reducer