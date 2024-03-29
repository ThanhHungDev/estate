import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import Config from './config'
import Auth from './auth'
import Category from './category'
import Location from "./location"
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    config    : Config,
    auth      : Auth,
    categories: Category,
    location  : Location,
});
export default Reducer