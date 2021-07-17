import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import jwt_decode from "jwt-decode";
 


import Header from './Header'
import VerifyPhone from "./VerifyPhone"



function App( props ){

    const auth = jwt_decode(jwt);
    console.log("start react post", auth)
    if( !auth ){
        return (
            <div className='guest'>
                tài khoản xác thực không thành công! <br />
                báo với admin hệ thống nếu bạn cảm thấy có bất thường
            </div>
        )
    }
    if( !auth.phone_verify ){
        return <VerifyPhone />
    }
    return (
        <div className="AppComponent post" id="Application">
            <Header />
        </div>
    )
}


export default App;

if (document.getElementById('react__root')) {
    ReactDOM.render(<App />, document.getElementById('react__root'));
}
