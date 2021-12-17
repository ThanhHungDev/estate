import React, { useEffect, useState } from "react"
import messageAPI from "../../../../service/message.api"
import HeadInfo from "./HeadInfo"
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
        messageAPI.getMessageUser({ id: props.id })
        .then( response => {
            setStatus(STATE__STATUS.SUSSESS)
            console.log("daataa nè", response)
            // const users = response.users
            // const comments = response.data.map( com => {
            //     const childrens = com.childrens.map( child => { return { ... child, user: { ... users.find( u => u.id == child.user )  } } })
            //     return { ... com, childrens, user: { ... users.find( u => u.id == com.user )  } }
            // })
            // dispatch(setterComment(comments))
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
    return (
        <div className="message__content">
            <HeadInfo id={props.id}/>

        </div>
    )
}

export default Container
