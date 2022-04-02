import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from '../reducer/chat.reducer'

import * as moment from 'moment'
moment.locale('vi')
import App from "./App"


const store = createStore(Reducer)
store.subscribe(function(){
    console.log('có thay đổi trong Redux!!', store.getState());
})

// if ( process.env.DEBUG_CONSOLE != '1' ){
//     console.log = function no_console() {};
// }

if (typeof (Storage) !== 'undefined' && document.getElementById('react__root')) {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
    , document.getElementById('react__root'))
}else{
    alert("Trình duyệt của bạn đã cũ và không được hộ trợ. Mong bạn nâng cấp")
}
