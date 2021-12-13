import React from "react"
import { connect } from "react-redux"


function Conversation(props) {

    return (
        <div className="conversation">
            <div className="conversation__active conversation__online conversation__item">
                <figure className="conversation__item-avatar">
                    <img src="http://babysitter.trust-growth.co.jp/uploads/avatar.jpg" alt=""/>
                </figure>
                <div className="conversation__info">
                    <span className="conversation__info-name">Quản Trị Viên Hộ Trợ</span>
                </div>
            </div>
        </div>
    )
}

export default connect()(Conversation)
