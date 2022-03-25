import React, { useEffect, useRef, useState } from "react"


function SeeMore({ content }){
    const readmRef = useRef(null)

    const [ need, setNeed ] = useState(true)
    const [ expand, setExpand ] = useState(false)

    useEffect(() => {
        const overflow = isEllipsisActive(readmRef.current)
        if( !overflow ) setNeed(false)
    }, [])
    const isEllipsisActive = e => {
        return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth
    }

    const button = need
                        ? <a className="readm__btn" onClick={ () => { setExpand( !expand ) } }>
                            { expand ? "Hiện thu gọn" : "Hiện đầy đủ" }
                        </a>
                        : null
    const treedot = need
                        ? <span className={ !expand ? 'd-block' : 'd-none' }>&#8230;</span>
                        : null
    return (
        <div className="readm">
            <div ref={readmRef} className={ `readm__content ${!expand && 'less'}` } dangerouslySetInnerHTML={{__html: content }} />
            { treedot }
            { button }
        </div>
    )
}


export default SeeMore