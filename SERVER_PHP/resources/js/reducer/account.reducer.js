import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import Config from './config'
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    config    : Config,
});
export default Reducer