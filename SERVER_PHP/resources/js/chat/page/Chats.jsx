import React from 'react'
import { connect } from 'react-redux'



function Chats( props ){
    return (
        <div className="chats-page">
            đây là page chat
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth      : state.auth,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(Chats)
