import React from 'react'
import { connect } from 'react-redux'
import useWindowSize from '../../hook/resize'
import Container from './Message/Container'
import MyInfo from './Message/MyInfo'


function Message( props ){

    const { auth, CONFIG, conversations, id } = props
    const { isPcDevice } = useWindowSize()
    const isActiveExist = !!id
    /// message nó sẽ không hiện thị khi chế độ moblie không có active
    if(!isPcDevice && !isActiveExist) return null

    return (
        <div className="message">
            {
                isPcDevice && !isActiveExist
                ? <MyInfo />
                : <Container id={id} conversations={conversations} CONFIG={CONFIG} auth={ auth }/>
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
