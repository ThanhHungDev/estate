import React from "react"
import { connect } from "react-redux"

import { searchConversation } from "../../../../action/search.action"



function SearchBox( props ){
    let refSearch = React.createRef()

    const handleSearch = event => {

        /// dettect if key = enter and not (shift + enter) => send
        if ( event.keyCode == 13 ) {
            const search = refSearch.current.value
            props.dispatch(searchConversation(search))
        }
    }
    return (
        <div className="sidebar__content--search">
            <span className="icon-search">
                <i className="fa fa-search"></i>
            </span>
            <input
            ref={ refSearch }
            defaultValue="" placeholder="Tìm kiếm"
            onKeyDown={ handleSearch }
            />
        </div>
    )
}

export default connect()(SearchBox)
