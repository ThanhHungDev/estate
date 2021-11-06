import React, { useEffect, useState } from 'react'
import Modal from "react-modal"


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

function ModalLogin({ modelOpen, setModelOpen, CONFIG }) {

    return (
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
                <a className="btn btn__login ml-1" href={ `${CONFIG.WEB.LOGIN}?rredirect=1` }>
                    Đi đến đăng nhập
                </a>
            </div>
        </Modal>
    )
}


export default ModalLogin