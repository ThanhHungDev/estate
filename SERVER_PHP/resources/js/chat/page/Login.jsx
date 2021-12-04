import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Validator from "hero-validate"
import V from "../validator/user.login"

/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

function Login( props ){


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
    return (
        <div className="select__login" className="page page__login" style={{ minHeight: (device.calcHeightSubtractHeight + 45) + "px" }}>
            <div className="page__login__bg"></div>
            <form className="page__login__form form">
                <h2 className="form__title">đăng nhập</h2>

                <div className="form-group">

                    <div className={"input-group " + ( hasErr("email") ? "input-group-error" : "" )} >
                        <i className="icon fad fa-envelope"></i>
                        <input type="email" autoCorrect="off" autoCapitalize="none"
                            className="input-control" value={ values.email }
                            name="email" value={ values.email } onChange={ handleChange }
                            placeholder="Nhập  địa chỉ mail"
                        />
                    </div>
                    { hasErr('email') && <label className="error" htmlFor="email">{ errors.getError("email") }</label> }

                    <div className={"input-group " + ( hasErr("password") ? "input-group-error" : "" )} >
                        <i className="icon fad fa-lock-open-alt"></i>
                        <input type="password" autoCorrect="off" autoCapitalize="none"
                            className="input-control" value={ values.password }
                            name="password" value={ values.password } onChange={ handleChange }
                            placeholder="Nhập Mật khẩu"
                        />
                    </div>
                    { hasErr('password') && <label className="error" htmlFor="password">{ errors.getError("password") }</label> }
                    
                    <div className="forgot-password">
                        <a href={ CONFIG.WEB.FORGOT } className="forgot-link">Quên password <i className="fad fa-question-circle"></i> </a>
                    </div>

                    <label className="container-checkbox">
                        ghi nhớ đăng nhập
                        <input name="remember" type="checkbox" />
                        <span className="checkmark"></span>
                    </label>

                    <button type="submit" className={"btn btn-login aqua-gradient-rgba " + (errors.hasError && 'disable') }>
                        Đăng nhập
                    </button>
                </div>
                <h4 className="description">
                    chưa có tài khoản? Bạn muốn &nbsp;
                    <a href={ CONFIG.WEB.REGISTER } className="register-inline">
                        đăng ký
                    </a>
                </h4>
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
export default connect(mapStateToProps)(Login)

