import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from '../reducer/comment.reducer'
import App from "./App"


import moment from 'moment'
moment.locale('vi')

const store = createStore(Reducer)
store.subscribe(function(){
    console.log('có thay đổi trong Redux!!', store.getState());
})

// if ( process.env.DEBUG_CONSOLE != '1' ){
//     console.log = function no_console() {};
// }

if (typeof (Storage) !== 'undefined' && document.getElementById('root__comment')) {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
    , document.getElementById('root__comment'))
}else{
    alert("Trình duyệt của bạn đã cũ và không được hộ trợ. Mong bạn nâng cấp")
}
