import React, { useEffect, useState } from 'react'
import Modal from "react-modal"
import Validator from "hero-validate"
import V from "../../validator/user.login"
import loginAPI from "../../../service/login.api"
import { setterJwt } from '../../../action/jwt.action'


Modal.setAppElement("#react__root")

function ModalLoginToDefault({ modelOpen, setModelOpen, CONFIG, datas, dispatch }) {

    const [ alert, setAlert ] = useState(null)
    const [values, setValues]   = useState({
        password: "",
    })
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ]   = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    /// add function when value change
    const handleChange = (event) => {
        event.persist()
        setValues({ ...values, [event.target.name]: event.target.value })
        setTouched({ ...touched, [event.target.name]: true })
        setAlert(null)
    }

    /// hook react
    useEffect(() => {

        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])


    const loginDefault = () => {
        const formData = { email: datas.mobile, password: values.password, remember: true }

        loginAPI
        .loginDefault(formData) /// thêm cái remember để lưu nhớ lại
        .then( response => {
            const { data } = response
            window.JWT_TOKEN = data
            //// setter for token
            dispatch(setterJwt(data))
            window.location.reload()
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            }else{
                console.log("ERROR:: ",error)
            }
            setValues({ password: "" })
            setTouched({ password: false })
            setAlert('Tài khoản hoặc mật khẩu không chính xác!')
        })
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
                <i className="icon far fa-bell-on"></i>
                <span className="title">Thông báo! </span>
                <a className="cursor-pointer" onClick={ () => { setModelOpen(!modelOpen) } }>
                    <i className="close fal fa-times"></i>
                </a>
            </div>
            <div className="modal__body page__login">
                <h3 className="h5">Bảo mật tài khoản người dùng!</h3>
                <div className="font-weight-light py-3 text-color-gray">
                    Tài khoản <span className="text-color-violet">{ datas.mobile }</span> đã được <span className="text-color-red"> kích hoạt </span>. 
                    Để bảo vệ tài khoản người dùng. Vui lòng cung cấp mật khẩu!
                </div>
                <div className="page__login__form form__chat page__login--faster">
                    {
                        alert && 
                        <div className="alert alert-warning mt-3">
                            <p><b>{ alert }</b></p>
                        </div>
                    }
                    <div className="form-group my-0">
                        <div className={"input-group " + ( hasErr("password") ? "input-group-error" : "" )} >
                            <i className="icon fad fa-users"></i>
                            <input type="password" autoCorrect="off" autoCapitalize="none"
                                className="input-control"
                                name="password" value={ values.password } onChange={ handleChange }
                                placeholder="Nhập password"
                            />
                        </div>
                        { hasErr('password') && <label className="error" htmlFor="password">{ errors.getError("password") }</label> }
                    </div>
                </div>
                
            </div>
            <div className="modal__footer">
                <a className="btn btn__close mr-1" onClick={ () => { setModelOpen(!modelOpen) } }>
                    Bõ qua
                </a>
                <a className="btn btn__login ml-1" onClick={ loginDefault }>
                    Đăng nhập
                </a>
            </div>
        </Modal>
    )
}


export default ModalLoginToDefault