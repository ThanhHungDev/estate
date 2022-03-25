import React from 'react'
import { connect } from 'react-redux'
import useWindowSize from '../../hook/resize'
import Container from './Message/Container'
import ConversationNotFound from './Message/ConversationNotFound'
import MyInfo from './Message/MyInfo'


function Message( props ){

    const { auth, CONFIG, conversations, id } = props
    
    const { isPcDevice } = useWindowSize()
    const isActiveExist = !!id
    /// message nó sẽ không hiện thị khi chế độ moblie không có active
    if(!isPcDevice && !isActiveExist) return null
    /// kiểm tra nếu id không tồn tại trong conversation thì cho return page user not found
    if( !!id && !conversations.some( conv => conv.user.includes(parseInt(id)||0) )){
        return <ConversationNotFound auth={ auth }/>
    }
    return (
        <div className="message">
            {
                isPcDevice && !isActiveExist
                ? <MyInfo auth={ auth }/>
                : <Container id={id} conversations={conversations} CONFIG={CONFIG} auth={ auth } dispatch={ props.dispatch }/>
            }
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth         : state.auth,
        CONFIG       : state.config,
        conversations: state.conversation,
    }
}
export default connect(mapStateToProps)(Message)
