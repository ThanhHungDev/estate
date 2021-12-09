import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Validator from "hero-validate"
import V from "../../validator/user.login.fast"
import loginAPI from "../../../service/login.api"
import { setterJwt } from '../../../action/jwt.action'

/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

function LoginFast( props ){

    const [ alert, setAlert ] = useState(null)
    const [values, setValues]   = useState({ 
        name : "",
        mobile: "",
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

    const loginFast = () => {
        
        loginAPI
        .loginFast({ ... values, remember: true }) /// thêm cái remember để lưu nhớ lại
        .then( response => {
            const { data } = response
            window.JWT_TOKEN = data
            //// setter for token
            props.dispatch(setterJwt(data))
            /// lưu mọi thứ vào local storage
            localStorage.setItem(CONFIG.LOCALSTORAGE.FREE__USER, data)
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
            setTouched({ name: false, mobile: false })
            setAlert('Đã sảy ra lỗi, vui lòng thử lại sau!')
        })
    }

    const { CONFIG } = props
    return (
        <div className="col-hero-12 col-hero-sm-6 mt-2">
            <h2 className="form__title">
                Sử dụng nhanh
                <span className="d-block text-xs font-medium pt-2">
                <i className="text-color-warning-color-dark">Chưa có tài khoản</i>  nhưng vẫn muốn trò chuyện
                </span>
            </h2>
            {
                alert && 
                <div className="alert alert-warning mt-3">
                    <p><b>{ alert }</b></p>
                </div>
            }
            <div className="form-group my-0">
                <div className={"input-group " + ( hasErr("name") ? "input-group-error" : "" )} >
                    <i className="icon fad fa-users"></i>
                    <input type="text" autoCorrect="off" autoCapitalize="none"
                        className="input-control"
                        name="name" value={ values.name } onChange={ handleChange }
                        placeholder="Nhập Tên"
                    />
                </div>
                { hasErr('name') && <label className="error" htmlFor="name">{ errors.getError("name") }</label> }

                <div className={"input-group " + ( hasErr("mobile") ? "input-group-error" : "" )} >
                    <i className="icon fad fa-user-shield"></i>
                    <input type="text" autoCorrect="off" autoCapitalize="none"
                        className="input-control"
                        name="mobile" value={ values.mobile } onChange={ handleChange }
                        placeholder="Nhập số điện thoại hoặc email"
                    />
                </div>
                { hasErr('mobile') && <label className="error" htmlFor="mobile">{ errors.getError("mobile") }</label> }

                <div className="forgot-password">
                    <a href={ CONFIG.WEB.POLICY } target="_blank" rel="noopener noreferrer" className="forgot-link">Điều khoản sử dụng <i className="fad fa-question-circle"></i> </a>
                </div>

                <button onClick={ loginFast }
                    className={"btn btn-login aqua-gradient-rgba " + (errors.hasError && 'disable') }>Trò Chuyện Nhanh</button>
            </div>
        </div>
    )
}


export default connect()(LoginFast)

