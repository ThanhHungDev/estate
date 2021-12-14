import React from 'react'
import { connect } from 'react-redux'
import Message from './Chat/Message'
import Sidebar from './Chat/Sidebar'
import useWindowSize from "../hook/resize"


function Chats( props ){

    const { CONFIG, match } = props
    const device = useWindowSize()
    return (
        <div className="chats-page wrapper-page-chat d-flex" style={{ height: (device.calcHeightSubtractHeader) + "px" }}>
            <Sidebar id={match.params.id}/>
            <Message id={match.params.id}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(Chats)
