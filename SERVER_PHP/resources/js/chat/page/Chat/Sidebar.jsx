import React from 'react'
import { connect } from 'react-redux'
import Conversation from './Sidebar/Conversation'
import SearchBox from './Sidebar/SearchBox'



function Sidebar( props ){
    const { device, conversations } = props
    // check is have channel active ? 
    const isActiveExist = !!conversations && conversations.some( conv => conv.isActive )
    if(isActiveExist){
        /// have channel active
        /// no show sidebar
        return null
    }

    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <SearchBox />
                <div className="sidebar__content--conversation">
                {
                    !!conversations && conversations.map( conv => <Conversation /> )
                }
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                </div>
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
export default connect(mapStateToProps)(Sidebar)
