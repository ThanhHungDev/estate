import React, { useEffect, useState } from 'react'
import Modal from "react-modal"
import Reports from "./Reports"


Modal.setAppElement("#root__comment")

function ModalReport({ modelOpen, setModelOpen, comment, CONFIG, SOCKET }) {
    const [ reportsChecked, setReportsChecked ] = useState([])

    const changeCheckedItem = reportChecked => {
        setReportsChecked( [...reportChecked ] )
    }
    
    const sendReport = () => {
        setModelOpen(!modelOpen)
        if( SOCKET.connected ){
            SOCKET.emit(CONFIG.EVENT.REPORT__COMMENT, { ... comment, inkey: CONFIG.LOCATION.pathname, reports: reportsChecked })
        }
    }

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
                <i className="icon far fa-bomb"></i>
                <span className="title">Thông báo! </span>
                <a className="cursor-pointer" onClick={ () => { setModelOpen(!modelOpen) } }>
                    <i className="close fal fa-times"></i>
                </a>
            </div>
            <div className="modal__body">
                <h3 className="h6">Bạn cần chọn hoặc viết thêm lý do <span className="text-color-red">bình luận</span> vi phạm!</h3>
                <div className="">
                    <Reports changeCheckedItem={changeCheckedItem}/>
                </div>

            </div>
            <div className="modal__footer">
                <a className="btn btn__close mr-1" onClick={ () => { setModelOpen(!modelOpen) } }>
                    Huỷ
                </a>
                <a className="btn btn__login ml-1" onClick={ sendReport }>
                    Gửi báo cáo
                </a>
            </div>
        </Modal>
    )
}


export default ModalReport