import React from 'react'
import { connect } from 'react-redux'
import Conversation from './Sidebar/Conversation'
import SearchBox from './Sidebar/SearchBox'



function Sidebar( props ){
    const { conversations, id } = props
    console.log(conversations, "conversationsconversations sidebar")
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
                    !!conversations && conversations.map( conv => <Conversation key={conv._id} active={ conv.users.some(u => u.id == id ) } online={ !!conv.online } conversation={conv} /> )
                }
                </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CONFIG       : state.config,
        conversations: state.conversation,
    }
}
export default connect(mapStateToProps)(Sidebar)
