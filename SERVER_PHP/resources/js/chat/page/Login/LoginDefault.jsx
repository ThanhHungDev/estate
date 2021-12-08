import React, { useState, useEffect } from 'react'
import Validator from "hero-validate"
import V from "../../validator/user.login"
import loginAPI from "../../../service/login.api"

/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

function LoginDefault( props ){


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

    const loginDefault = () => {
        
        loginAPI
        .loginDefault(values)
        .then( response => {
            const { data } = response
            console.log( data )
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            }else{
                console.log("ERROR:: ",error)
            }
        })
    }


    const { CONFIG } = props
    return (
        <div className="col-hero-12 col-hero-sm-6 mt-2">
            <h2 className="form__title">Đăng nhập tài khoản</h2>
            <div className="form-group my-0">
                <div className={"input-group " + ( hasErr("email") ? "input-group-error" : "" )} >
                    <i className="icon fad fa-users"></i>
                    <input type="email" autoCorrect="off" autoCapitalize="none"
                        className="input-control"
                        name="email" value={ values.email } onChange={ handleChange }
                        placeholder="Nhập email"
                    />
                </div>
                { hasErr('email') && <label className="error" htmlFor="email">{ errors.getError("email") }</label> }

                <div className={"input-group " + ( hasErr("password") ? "input-group-error" : "" )} >
                    <i className="icon fad fa-lock-open-alt"></i>
                    <input type="password" autoCorrect="off" autoCapitalize="none"
                        className="input-control" value={ values.password }
                        name="password" onChange={ handleChange }
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                { hasErr('password') && <label className="error" htmlFor="password">{ errors.getError("password") }</label> }

                <div className="forgot-password">
                    <a href={ CONFIG.WEB.FORGOT } target="_blank" rel="noopener noreferrer" className="forgot-link">
                        Quên mật khẩu <i className="fad fa-question-circle"></i>
                    </a>
                </div>

                <button onClick={ loginDefault }
                    className={"btn btn-login aqua-gradient-rgba " + (errors.hasError && 'disable') }>
                    Đăng nhập
                </button>
                <h4 className="description">
                    chưa có tài khoản? Bạn muốn 
                    <a href={ CONFIG.WEB.REGISTER } className="register-inline"> đăng ký </a>
                </h4>
            </div>
        </div>
    )
}


export default LoginDefault

