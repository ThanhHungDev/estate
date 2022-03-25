// FUNCTIONAL COMPONENT
import React from "react"


const CountNoneRead = props => {

    const MAX_COUNT_NONE_READ = 9

    const { number } = props
    if( !number ) return null
    if( number > MAX_COUNT_NONE_READ ){
        return <i className="noneread">{ MAX_COUNT_NONE_READ }+</i> 
    }
    return <i className="noneread">{ number }</i> 
}
export default CountNoneRead