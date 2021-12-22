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

    const [ error, setError ] = useState('')
    const [ status, setStatus ] = useState(STATE__STATUS.LOADDING)
    useEffect(()=>{
        console.log("Container message  call api nà", messages[0]?._id )
        //// list channel name
        messageAPI.getMessageUser({ id, channelid: active._id,  next: messages[0]?._id || '' })
        .then( response => {
            setStatus(STATE__STATUS.SUSSESS)
            if(response.data.length){
                dispatch(concatMesssagesToChannel(active._id, response.data))
            }
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            setStatus(STATE__STATUS.ERROR)
            setError('Tải dữ liệu không thành công')
        })
    }, [ id ])

    if( status == STATE__STATUS.LOADDING ) return <div className="message__content--progress">
        <div className="progress progress-blue">
            <div className="progress-loadding"></div>
        </div>
    </div>
    if( status == STATE__STATUS.ERROR ) return <div className="message__content--error">
        { error }
    </div>
    return <Messages id={id} active={active} conversations={conversations} CONFIG={CONFIG} auth={ auth } dispatch={ dispatch }/>
}

export default Container
