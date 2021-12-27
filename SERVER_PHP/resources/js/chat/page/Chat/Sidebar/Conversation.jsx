import React from "react"
import { Link } from "react-router-dom";


function Conversation(props) {
    const { conversation, active, online } = props
    const [ user ] = conversation?.users

    return <Link to={"/" + user?.id }>
        <div className="conversation">
            <div className={`${ active && 'conversation__active' } ${ online && 'conversation__online' } conversation__item`}>
                <figure className="conversation__item-avatar">
                    <img src="http://babysitter.trust-growth.co.jp/uploads/avatar.jpg" alt=""/>
                </figure>
                <div className="conversation__info">
                    <span className="conversation__info-name">{ user?.name }</span>
                </div>
            </div>
        </div>
    </Link>
}

export default Conversation
