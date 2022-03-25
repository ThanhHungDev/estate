import React from 'react'
import { connect } from 'react-redux'



function Register( props ){
    return (
        <div className="chats-page">
            đây là page chat đăng ký 
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth      : state.auth,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(Register)
