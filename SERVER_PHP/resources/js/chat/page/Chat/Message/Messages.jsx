import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"

import BtnLoadMore from "./BtnLoadMore"
import HeadInfo from "./HeadInfo"
import Input from "./Input"
import MessageItem from "./MessageItem"

import { 
    handleScrollMessage,
    didMouseScroll,
} from "../../../library/scroll"


// id active conversations CONFIG auth dispatch
const Messages = props => {
    const { auth, active, conversations, CONFIG, socket } = props
    const [ user ] = active?.users
    const { messages } = active

    useEffect(() => {
        !!socket && didMouseScroll(props)
    })
    return (
        <div className="message__content animated fadeIn  delay-2s">
            <HeadInfo id={props.id} user={user} CONFIG={CONFIG}/>
            
            <div className="wrapper-list-message" id="js-scroll-to-bottom" onScroll={ event => !!socket && handleScrollMessage( props ) }>
                <BtnLoadMore active={active} /> 
                { 
                    !!messages && messages.map( message =>
                        <MessageItem
                            key={`message-chat-${active._id}${message._id}${message.keyUpdate}`}
                            auth={auth}
                            message={message}
                            active={active}
                        />
                    )
                }
            </div>
            <Input active={ active } />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        socket : state.socket,
    }
}
export default connect(mapStateToProps)(Messages)
