import React from 'react'
import { connect } from "react-redux"

function Input({ AUTH, comment, dispatch }) {
    if( !AUTH || !AUTH.id ){
        /// chưa được login thì không cho hiện
        return null
    }
    return (
        <div className="bg-light p-2">
            <div className="d-flex flex-row align-items-start">
                <img className="rounded-circle" src={ AUTH?.avatar } width="40" />
                <textarea className="form-control ml-1 shadow-none textarea"></textarea>
            </div>
            <div className="mt-2 text-right">
                <button className="btn btn-primary btn-sm shadow-none" type="button">Gửi Bình luận</button>
                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Huỷ Bình luận</button>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        CONFIG : state.config,
        AUTH   : state.auth,
        COMMENT: state.comment,
    }
}
export default connect(mapStateToProps)(Input)
