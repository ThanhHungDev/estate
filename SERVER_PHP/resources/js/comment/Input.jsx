import React, { useState, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"

function Input({ AUTH, comment, SOCKET, CONFIG, setReply, dispatch }) {

    const refComment = useRef()


    const sendComment = () => {
        console.log(comment, refComment.current.value )
        if( SOCKET.connected ){
            const commentObject = {
                inkey: CONFIG.LOCATION.pathname,
                body : refComment.current.value
            }
            refComment.current.value = ''
            if( comment && comment._id ){
                commentObject.parent = comment._id
            }
            SOCKET.emit(CONFIG.EVENT.ADD__COMMENT, commentObject)
            if( !!setReply ){
                /// có truyền vào ( level 1 )
                setReply(false)
            }
        }
    }
    
    if( !AUTH || !AUTH.id ){
        /// chưa được login thì không cho hiện
        return null
    }
    return (
        <div className="bg-light p-2">
            <div className="d-flex flex-row align-items-start">
                <img className="rounded-circle" src={ AUTH?.avatar } width="40" />
                <textarea ref={refComment} className="form-control ml-1 shadow-none textarea"></textarea>
            </div>
            <div className="mt-2 text-right">
                <button className="btn btn-primary btn-sm shadow-none" type="button" onClick={ sendComment }>
                    Gửi Bình Luận
                </button>
                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"  onClick={ () => { refComment.current.value = '' } }>
                    Huỷ Bình luận
                </button>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        CONFIG : state.config,
        AUTH   : state.auth,
        COMMENT: state.comment,
        SOCKET : state.socket,
    }
}
export default connect(mapStateToProps)(Input)
