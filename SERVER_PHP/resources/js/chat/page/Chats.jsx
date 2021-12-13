import React from 'react'
import { connect } from 'react-redux'
import Message from './Chat/Message'
import Sidebar from './Chat/Sidebar'



function Chats( props ){

    const { CONFIG, device } = props
    return (
        <div className="chats-page wrapper-page-chat d-flex" style={{ height: (device.calcHeightSubtractHeader) + "px" }}>
            <Sidebar />
            <Message />
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        device: state.device,
        auth  : state.auth,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(Chats)
