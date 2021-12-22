import React, { useEffect, useState } from "react"
import BtnLoadMore from "./BtnLoadMore"
import HeadInfo from "./HeadInfo"
import Input from "./Input"
import MessageItem from "./MessageItem"

import { handleScrollMessage } from "../../../library/scroll"

// id active conversations CONFIG auth dispatch
const Messages = props => {
    const { auth, active, conversations, CONFIG } = props
    const [ user ] = active?.users
    const { messages } = active
    return (
        <div className="message__content animated fadeIn  delay-2s">
            <HeadInfo id={props.id} user={user} CONFIG={CONFIG}/>
            <div className="wrapper-list-message" id="js-scroll-to-bottom" onScroll={ event => handleScrollMessage( event, props ) }>
                <BtnLoadMore active={active} /> 
                { 
                    !!messages && messages.map( message =>
                        <MessageItem
                            key={ message._id }
                            auth={auth}
                            message={message}
                            active={active}
                        />
                        // <div key={message._id}>{ JSON.stringify(message) }</div>
                    )
                }
            </div>
            <Input active={ active } />
        </div>
    )
}

export default Messages
