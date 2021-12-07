import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Validator from "hero-validate"
import V from "../validator/user.login"

/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

function LoginFast( props ){


    const [values, setValues]   = useState({ 
        email   : "",
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
    }

    /// hook react
    useEffect(() => {
        
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])


    const { CONFIG, device } = props
    console.log(device)
    return (
        <div className="select__login" className="page page__login" style={{ minHeight: (device.calcHeightSubtractHeader) + "px" }}>
            <div className="page__login__bg"></div>
            <form className="page__login__form form my-0">
                <h2 className="form__title">Thông tin thành viên </h2>

                <div className="form-group">

                    <div className={"input-group " + ( hasErr("username") ? "input-group-error" : "" )} >
                        <i className="icon fad fa-lock-open-alt"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none"
                            className="input-control" value={ values.username }
                            name="username" value={ values.username } onChange={ handleChange }
                            placeholder="Nhập Tên"
                        />
                    </div>
                    { hasErr('username') && <label className="error" htmlFor="username">{ errors.getError("username") }</label> }

                    <div className={"input-group " + ( hasErr("email") ? "input-group-error" : "" )} >
                        <i className="icon fad fa-envelope"></i>
                        <input type="email" autoCorrect="off" autoCapitalize="none"
                            className="input-control" value={ values.email }
                            name="email" value={ values.email } onChange={ handleChange }
                            placeholder="Nhập email hoặc số điện thoại"
                        />
                    </div>
                    { hasErr('email') && <label className="error" htmlFor="email">{ errors.getError("email") }</label> }
                    
                    <div className="forgot-password">
                        <a href={ CONFIG.WEB.FORGOT } className="forgot-link">Điều khoản sử dụng <i className="fad fa-question-circle"></i> </a>
                    </div>

                    <button type="submit" className={"btn btn-login aqua-gradient-rgba " + (errors.hasError && 'disable') }>Trò Chuyện Nhanh</button>
                    <hr />
                    <div className="text-left">
                        Nếu bạn đã có tài khoản vui lòng đăng nhập để sử dụng dịch vụ tốt nhất
                    </div>
                    <a className={"btn btn-login aqua-gradient-rgba"}>Đăng nhập tài khoản</a>
                </div>
            </form>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        device: state.device,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(LoginFast)

