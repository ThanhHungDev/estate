import React, { useEffect, useState } from 'react'
import Modal from "react-modal"
import Validator from "hero-validate"
import V from "../../validator/user.login"
import loginAPI from "../../../service/login.api"
import { setterJwt } from '../../../action/jwt.action'


Modal.setAppElement("#react__root")

function ModalLoginToUpdate({ modelOpen, setModelOpen, CONFIG, datas, dispatch }) {

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
            <div className="modal__body page__login">
                <h3 className="h5">Bảo mật tài khoản người dùng!</h3>
                <div className="font-weight-light py-3 text-color-gray">
                    Tài khoản <span className="text-color-violet">{ datas.mobile }</span> đã được <span className="text-color-red"> sử dụng trước đó </span>. 
                    Để bảo vệ tài khoản người dùng. Vui lòng cập nhật tài khoản!
                </div>
                
            </div>
            <div className="modal__footer">
                <a className="btn btn__close mr-1" onClick={ () => { setModelOpen(!modelOpen) } }>
                    Bõ qua
                </a>
                <a className="btn btn__login ml-1" href={ `${CONFIG.WEB.UPDATE_USER_INFO}${datas.id}?token=${datas.token}`  }>
                    Trang update
                </a>
            </div>
        </Modal>
    )
}


export default ModalLoginToUpdate