import React, { useEffect, useState } from 'react'
import Modal from "react-modal"
import Reports from "./Reports"


Modal.setAppElement("#root__comment")

function ModalReport({ modelOpen, setModelOpen, comment, CONFIG, SOCKET }) {
    
    const reports = [
        { _id: 1, label: 'Chủ nghĩa cực đoan bạo lực', select: false },
        { _id: 2, label: 'Hành vi thù địch', select: false },
        { _id: 3, label: 'Hoạt động bất hợp pháp và hàng hóa bị kiểm soát', select: false },
        { _id: 4, label: 'Nội dung bạo lực và ghê rợn', select: false },
        { _id: 5, label: 'Sự an toàn của trẻ vị thành niên', select: false },
        { _id: 6, label: 'Nội dung lừa đảo chiếm đoạt tài sản', select: false },
        { _id: 7, label: 'vấn đề khác', select: false },
    ]

    const [ reportsChecked, setReportsChecked ] = useState([])

    const changeCheckedItem = reportChecked => {
        setReportsChecked( [...reportChecked ] )
    }
    
    const sendReport = () => {
        setModelOpen(!modelOpen)
        if( SOCKET.connected ){
            /// get list resson
            const reasons = reports.filter( report => reportsChecked.includes(report._id) ).map(report => report.label )
            SOCKET.emit(CONFIG.EVENT.REPORT__COMMENT, { ... comment, inkey: CONFIG.LOCATION.pathname, reasons })
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
                    <Reports changeCheckedItem={changeCheckedItem} reports={ reports } />
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