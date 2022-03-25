import React from "react"
import { Link } from "react-router-dom"
import CountNoneRead from "./CountNoneRead"


function Conversation(props) {
    const { conversation, active, online, auth } = props
    // nếu conversation trong đây có thuộc tính hidden = true là của search box đó. thì return null luôn
    if( conversation.hidden ) return null
    const [ user ] = conversation?.users
    const last = conversation?.messages?.slice(-1)[0]
    const waitRead = (conversation?.messages || []).filter(message => !message.read && message.user != auth.id ).length

    return <Link to={"/" + user?.id }>
        <div className="conversation">
            <div className={`${ active && 'conversation__active' } ${ online && 'conversation__online' } conversation__item`}>
                <figure className="conversation__item-avatar">
                    <img src={ user?.avatar } alt=""/>
                </figure>
                <div className="conversation__info">
                    <span className="conversation__info-name">{ user?.name }</span>
                    { last && <span className="conversation__info-messlast">{ last.body }</span> }
                </div>
                <CountNoneRead number={waitRead} />
            </div>
        </div>
    </Link>
}

export default Conversation
