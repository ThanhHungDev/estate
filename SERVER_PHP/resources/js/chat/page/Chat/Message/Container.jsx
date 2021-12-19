import React, { useEffect, useState } from "react"
import messageAPI from "../../../../service/message.api"
import Messages from "./Messages"
const STATE__STATUS = {
    LOADDING: 0,
    SUSSESS : 1,
    ERROR: 2,
    
}
const Container = props => {

    const [ error, setError ] = useState('')
    const [ status, setStatus ] = useState(STATE__STATUS.LOADDING)
    const [ messages, setMessages ] = useState([])
    useEffect(()=>{
        console.log("Container message  call api nà", props.id )
        //// list channel name
        messageAPI.getInitMessage({ id: props.id })
        .then( response => {
            setStatus(STATE__STATUS.SUSSESS)
            console.log("daataa nè", response)
            setMessages(response.data)
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            setStatus(STATE__STATUS.ERROR)
            setError('Tải dữ liệu không thành công')
        })
    }, [ props.id ])

    if( status == STATE__STATUS.LOADDING ) return <div className="message__content--progress">
        <div className="progress progress-blue">
            <div className="progress-loadding"></div>
        </div>
    </div>
    if( status == STATE__STATUS.ERROR ) return <div className="message__content--error">
        { error }
    </div>
    const active = props.conversations.find(conv => {
		const [ user ] = conv.users
		return user.id == props.id
	})
    return <Messages id={props.id} active={active} conversations={props.conversations} CONFIG={props.CONFIG} auth={ props.auth }/>
}

export default Container
