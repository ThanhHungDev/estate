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
import usePrevious from "../../../hook/previous"


// id active conversations CONFIG auth dispatch
const Messages = props => {
    const { auth, active, conversations, CONFIG, socket } = props
    const [ user ] = active?.users
    const { messages } = active
    const oldmess = usePrevious(messages)
    const oldconv = usePrevious(active)

    useEffect(() => {
        // console.warn("có vào hàm useEffect didMouseScroll ", messages)
        /// trường hợp 1 là trong cùng 1 channel đang đứng mà số lượng mess mới = cũ thì cho scoll đến dom 
        /// trường hợp 2 là khác channel thì cũng cho scroll đến dom 
        !!socket && didMouseScroll(props, (oldmess.length != messages.length && oldconv._id == active._id) || !( !!oldconv._id && oldconv._id != active._id ) )
    }, [ messages, socket, active._id ])
    
    return (
        <div className="message__content animated fadeIn  delay-2s">
            <HeadInfo id={props.id} user={user} active={active} CONFIG={CONFIG}/>
            
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
