// FUNCTIONAL COMPONENT
import React from "react"

import ButtonBack from "./ButtonBack.jsx"

const HeadInfo = props => {

	const { user, active, CONFIG } = props
	const { id, avatar, name } = user
	const { online } = active
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
	)
}

export default HeadInfo