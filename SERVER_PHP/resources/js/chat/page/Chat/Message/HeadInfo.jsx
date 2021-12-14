// FUNCTIONAL COMPONENT
import React from "react"
import { connect } from "react-redux"

import ButtonBack from "./ButtonBack.jsx"

const HeadInfo = props => {

		const { CONFIG, conversations } = props
		const active = conversations.find(conv => conv.user.id == props.id )
		if ( !active ) return null

		const { id, avatar, name, online } = active.user

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
						<span className={(online ? "active-now" : '') + " time-online"}>
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