import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from '../reducer/account.reducer'
import App from "./App"

const store = createStore(Reducer)
store.subscribe(function(){
    console.log('có thay đổi trong Redux!!', store.getState());
})

if (typeof (Storage) !== 'undefined' && document.getElementById('account__root')) {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
    , document.getElementById('account__root'))
}else{
    alert("Trình duyệt của bạn đã cũ và không được hộ trợ. Mong bạn nâng cấp")
}
