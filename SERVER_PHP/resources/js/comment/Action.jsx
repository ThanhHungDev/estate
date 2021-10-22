import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import Input from './Input'

function Action({ comment }) {
    const [ reply, setReply ] = useState(false)

    const { level } = comment

    useEffect(() => {

    })



    let actionHTML = (
        <div className="float-left">
            <div className="d-flex flex-row px-3">
                <button className="btn btn__action btn__action--like">
                    <i className="fal fa-thumbs-up"></i><span className="ml-1">Thích</span>
                </button>
                <button className="btn btn__action btn__action--reply" onClick={ () => { setReply(!reply) } }>
                    <i className="fal fa-reply"></i><span className="ml-1">Trả lời</span>
                </button>
                <button className="btn btn__action btn__action--report">
                    <i className="fal fa-exclamation-triangle"></i><span className="ml-1">Báo cáo Vi phạm</span>
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <div className="bg-white clearfix">
                { !level && actionHTML }
                <small className="date text-black-50 text-right float-right p-1">
                    <Moment format="LLLL">{comment?.createdAt}</Moment>
                </small>
            </div>
            { reply && <div><Input comment={comment} setReply={setReply}/></div> }
            
        </div>
    )
}


export default Action