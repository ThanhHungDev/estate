// FUNCTIONAL COMPONENT
import React from "react"
import { connect } from "react-redux"

import ButtonBack from "./ButtonBack.jsx"

const HeadInfo = props => {

		const { CONFIG, conversations } = props
		const active = conversations.find(conv => {
			const [ user ] = conv.users
			return user.id == props.id
		})
		if ( !active ) return null
		const [ user ] = active.users
		const { id, avatar, name, online } = user
		console.log( props.id, "đây là head")
		return (
			<div className="component-head-info" >
				<ButtonBack />
				<div className="user-active-chat">
					<a className="avatar-link" href="/">
						<figure className="state-avatar active-online">
							<img src={ avatar } alt="" />
						</figure>
					</a>
					<div className="text-info">
						<a href="/" className="name">{ name }</a>
						<span className={`time-online ${online && "active-now"}`}>
							{ online ? "Đang trực tuyến" : "Đang ngoại tuyến" }
						</span>
					</div>
				</div>
			</div>
		);
    
}



let mapStateToProps = (state) => {
	return {
		CONFIG       : state.config,
        conversations: state.conversation,
	}
}
export default connect(mapStateToProps)(HeadInfo)