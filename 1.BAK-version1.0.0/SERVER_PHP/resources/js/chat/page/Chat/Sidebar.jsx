import React from 'react'
import { connect } from 'react-redux'
import useWindowSize from '../../hook/resize'
import Conversation from './Sidebar/Conversation'
import SearchBox from './Sidebar/SearchBox'



function Sidebar( props ){
    const { conversations, id, auth } = props
    const { isPcDevice } = useWindowSize()
    // check is have channel active ? 
    const isActiveExist = !!id
    /// sidebar nó sẽ không hiện thị khi chế độ moblie có active
    if(!isPcDevice && isActiveExist) return null

    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <SearchBox />
                <div className="sidebar__content--conversation">
                {
                    !!conversations && conversations.map( conv => <Conversation key={conv._id} active={ conv.users.some(u => u.id == id ) } online={ !!conv.online } conversation={conv} auth={auth}/> )
                }
                </div>
            </div>
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
export default connect(mapStateToProps)(Sidebar)
