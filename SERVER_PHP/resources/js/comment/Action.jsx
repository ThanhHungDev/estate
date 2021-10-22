import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Modal from "react-modal"
import Moment from 'react-moment'

import Input from './Input'

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
// }
Modal.setAppElement("#root__comment")

function Action({ comment, AUTH, CONFIG }) {
    const [ modelOpen, setModelOpen ] = useState(false)

    const [ reply, setReply ] = useState(false)

    const { level } = comment

    useEffect(() => {

    })

    const clickReply = () => {
        setReply(!reply)
        if(!AUTH.JWT){
            setModelOpen( true )
        }
    }


    let actionHTML = (
        <div className="float-left">
            <div className="d-flex flex-row px-3">
                <button className="btn btn__action btn__action--like">
                    <i className="fal fa-thumbs-up"></i><span className="ml-1">Thích</span>
                </button>
                <button className="btn btn__action btn__action--reply" onClick={ clickReply }>
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
            <Modal
                isOpen={modelOpen}
                onRequestClose={ () => { setModelOpen(!modelOpen) } }
                contentLabel="My dialog"
                // style={customStyles}
                className="modal d-inline-block overflow-auto h-auto modal__notification"
                overlayClassName="Overlay"
            >
                <div className="modal__header">
                    <i className="icon far fa-bell-on"></i>
                    <span className="title">Thông báo! </span>
                    <a className="cursor-pointer" onClick={ () => { setModelOpen(!modelOpen) } }>
                        <i className="close fal fa-times"></i>
                    </a>
                </div>
                <div className="modal__body">
                    <h3 className="h5">Bạn cần đăng nhập vào hệ thống!</h3>
                    <div className="font-weight-light py-3 text-color-gray">Tính năng này cần đăng nhập vào hệ thống để mọi người có thể biết ai đang bình luận</div>

                </div>
                <div className="modal__footer">
                    <a className="btn btn__close mr-1" onClick={ () => { setModelOpen(!modelOpen) } }>
                        Bõ qua
                    </a>
                    <a className="btn btn__login ml-1" href={CONFIG.WEB.LOGIN}>
                        Đi đến đăng nhập
                    </a>
                </div>
            </Modal>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        AUTH  : state.auth,
        CONFIG: state.config,
    }
}

export default connect(mapStateToProps)(Action)