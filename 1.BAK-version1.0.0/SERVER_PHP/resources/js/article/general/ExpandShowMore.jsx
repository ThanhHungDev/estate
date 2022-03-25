import React, { useState, useEffect } from "react"


function ExpandShowMore( props ){

    const [ expand, setExpand ] = useState(false)
    
    return (
        <div className="expand">
            <div className={ "expand__content " + (expand ? "show" : "hide") } dangerouslySetInnerHTML={{__html: props.content }} />
            <div className="expand__show">
                <a onClick={ () => { setExpand( !expand ) } }> Bấm để Ẩn / Hiện </a>
            </div>
        </div>
    )
}


export default ExpandShowMore