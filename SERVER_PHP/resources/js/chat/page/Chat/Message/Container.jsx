import React, { useEffect, useState } from "react"
import messageAPI from "../../../../service/message.api"
import { concatMesssagesToChannel } from "../../../../action/message.action"
import Messages from "./Messages"
const STATE__STATUS = {
    LOADDING: 0,
    SUSSESS : 1,
    ERROR: 2,
    
}
const Container = ({ id, conversations, CONFIG, auth, dispatch }) => {

    const active = conversations.find(conv => {
		const [ user ] = conv.users
		return user.id == id
	})
    const { messages } = active

    useEffect(()=>{
        console.log("Container message  call api nà", messages[0]?._id )
        //// list channel name
        messageAPI.getMessageUser({ id, channelid: active._id,  next: messages[0]?._id || '' })
        .then( response => {
            dispatch(concatMesssagesToChannel(active._id, response.data, CONFIG.CONSTANT.STATE__STATUS.SUCCESS))
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            dispatch(concatMesssagesToChannel(active._id, [], CONFIG.CONSTANT.STATE__STATUS.ERROR))
        })
    }, [ id ])

    if( active.status == CONFIG.CONSTANT.STATE__STATUS.LOADDING ) return <div className="message__content--progress">
        <div className="progress progress-blue">
            <div className="progress-loadding"></div>
        </div>
    </div>
    // if( status == CONFIG.CONSTANT.STATE__STATUS.LOADDING ) return <div className="message__content--error">
    //     { error }
    // </div>
    return <Messages id={id} active={active} conversations={conversations} CONFIG={CONFIG} auth={ auth }/>
}

export default Container
