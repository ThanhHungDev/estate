import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import Input from './Input'
import ModalLogin from './ModalLogin'
import ModalReport from "./ModelReport"

function Action({ comment, AUTH, CONFIG, SOCKET }) {
    const [ modelOpen, setModelOpen ] = useState(false)
    const [ modelreport, setModelreport ] = useState(false)

    const [ like, setLike ]     = useState([])
    const [ reply, setReply ]   = useState(false)
    const [ report, setReport ] = useState([])

    const { level } = comment

    useEffect(() => {
        setLike(comment.like)
        setReport(comment.report)
    }, [ comment ])

    const clickLike = () => {
        
        if(!AUTH.JWT){
            setModelOpen( true )
        }
        //// call socket LIKE
        console.log("call socket LIKE", comment._id )
        if( SOCKET.connected ){
            SOCKET.emit(CONFIG.EVENT.LIKE__COMMENT, { ... comment, inkey: CONFIG.LOCATION.pathname })
        }
    }

    const clickReply = () => {
        setReply(!reply)
        if(!AUTH.JWT){
            setModelOpen( true )
        }
    }
    const clickReport = () => {
        if(!AUTH.JWT){
            setModelOpen( true )
        }else{
            setModelreport( true )
        }
    }


    const likeActive = like.some( l => l.user == AUTH.id ) && 'active'
    const reportActive = 1
    let actionHTML = (
        <div className="float-left">
            <div className="d-flex flex-row px-3">
                <button className={`btn btn__action btn__action--like ${ likeActive }`} onClick={ clickLike }>
                    <i className="fal fa-thumbs-up"></i><span className="ml-1">Thích { !!like.length && `(${like.length})` }</span>
                </button>
                <button className="btn btn__action btn__action--reply" onClick={ clickReply }>
                    <i className="fal fa-reply"></i><span className="ml-1">Trả lời</span>
                </button>
                <button className="btn btn__action btn__action--report" onClick={ clickReport }>
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
            <ModalLogin modelOpen={modelOpen} setModelOpen={setModelOpen} CONFIG={CONFIG} />
            <ModalReport modelOpen={modelreport} setModelOpen={setModelreport} comment={comment} CONFIG={CONFIG} SOCKET={SOCKET}/>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        AUTH  : state.auth,
        CONFIG: state.config,
        SOCKET : state.socket,
    }
}

export default connect(mapStateToProps)(Action)