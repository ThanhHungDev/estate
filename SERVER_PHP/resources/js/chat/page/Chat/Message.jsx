import React from 'react'
import { connect } from 'react-redux'



function Message( props ){

    const { device, conversations } = props
    const { isPcDevice } = device
    const isActiveExist = !!conversations && conversations.some( conv => conv.isActive )
    /// message nó sẽ không hiện thị khi chế độ moblie không có active
    if(!isPcDevice && !isActiveExist){
        /// no have channel active
        return null
    }

    return (
        <div className="message">
            <div className="message__content">
                đây là message
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CONFIG       : state.config,
        device       : state.device,
        conversations: state.conversations,
    }
}
export default connect(mapStateToProps)(Message)
