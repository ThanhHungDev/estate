import React, { useEffect, useState } from "react"

import MessageChatImage from "./MessageChatImage.jsx"
import MessageInfo from "./MessageInfo.jsx"


const MessageItem = props => {
    const STYLE__IMAGE  = 'IMAGE'
    const MAX_CHARACTER = 600

    /// get data from parent send
    const { auth, message, active } = props

    /// không biết auth thì làm gì có cái message này mà hiện
    if( !auth.JWT ) return null

    const { style, body, user, _id, keyUpdate } = message
    
    if( !body && style != STYLE__IMAGE ) return null

    const [ full, setFull ] = useState(!!body && body.length < MAX_CHARACTER)
    useEffect(() => { }, [full])
    const content = full ? body : body.substring(0, MAX_CHARACTER)
    const type    = auth.id == user

    return (
        <div id={`mess__${_id}${keyUpdate}`} className="component-message-chat">

            <div className={`${ type && 'messright'} mess__content`}>
                <figure className="mess__content-avatar">
                    <img src={ type ? auth?.avatar : active?.users[0]?.avatar } alt={ type ? auth?.name : active?.users[0]?.name } />
                </figure>
                <div className="mess__content-main">
                    <MessageChatImage message={message}/>
                    {
                        content && 
                        <div className={`${style} mess__content-text`}>
                            { content }
                            { !full && <a className="readmore" onClick={ () => setFull(!full) }>hiện đầy đủ</a> }
                        </div>
                    }
                    <MessageInfo message={message} />
                </div>
            </div>
        </div>
    );
}

export default MessageItem