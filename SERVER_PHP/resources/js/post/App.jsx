import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import SelectCategory from './SelectCategory'
import VerifyPhone from "./VerifyPhone"


function App( props ){

    const { auth } = props

    console.log(auth, "aaaaaaaaaaa")
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
            <SelectCategory />
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth   : state.auth,
    }
}
export default connect(mapStateToProps)(App)
