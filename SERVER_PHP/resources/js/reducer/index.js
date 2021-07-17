import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import Channels from './channels.js';
import SocketReducer from "./socket.js"
import Auth from "./auth.js"
import Booking from "./booking.js"
import Device from "./device.js"
import Connect from "./connect.js"
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    channels: Channels,
    socket  : SocketReducer,
    users   : Auth,
    booking : Booking,
    device  : Device,
    connect : Connect,
});
export default Reducer