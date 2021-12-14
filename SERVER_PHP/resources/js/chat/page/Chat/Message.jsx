import React from 'react'
import { connect } from 'react-redux'
import useWindowSize from '../../hook/resize'
import Container from './Message/Container'
import MyInfo from './Message/MyInfo'


function Message( props ){

    console.log(conversations, "conversationsconversations Message")
    const { conversations, id } = props
    const { isPcDevice } = useWindowSize()
    const isActiveExist = !!id
    /// message nó sẽ không hiện thị khi chế độ moblie không có active
    if(!isPcDevice && !isActiveExist) return null

    return (
        <div className="message">
            {
                isPcDevice && !isActiveExist
                ? <MyInfo />
                : <Container id={id} />
            }
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CONFIG       : state.config,
        conversations: state.conversation,
    }
}
export default connect(mapStateToProps)(Message)
