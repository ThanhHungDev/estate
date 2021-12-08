import React, { useState, useEffect } from 'react'
import Validator from "hero-validate"
import V from "../../validator/user.login.fast"
import loginAPI from "../../../service/login.api"

/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

function LoginFast( props ){


    const [values, setValues]   = useState({ 
        name   : "",
        username: "",
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

    const loginFast = () => {
        
        loginAPI
        .loginFast(values)
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
            <h2 className="form__title">Sử dụng nhanh</h2>
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

                <div className={"input-group " + ( hasErr("phone") ? "input-group-error" : "" )} >
                    <i className="icon fad fa-user-shield"></i>
                    <input type="text" autoCorrect="off" autoCapitalize="none"
                        className="input-control"
                        name="phone" value={ values.phone } onChange={ handleChange }
                        placeholder="Nhập số điện thoại hoặc email"
                    />
                </div>
                { hasErr('phone') && <label className="error" htmlFor="phone">{ errors.getError("phone") }</label> }

                <div className="forgot-password">
                    <a href={ CONFIG.WEB.POLICY } target="_blank" rel="noopener noreferrer" className="forgot-link">Điều khoản sử dụng <i className="fad fa-question-circle"></i> </a>
                </div>

                <button onClick={ loginFast }
                    className={"btn btn-login aqua-gradient-rgba " + (errors.hasError && 'disable') }>Trò Chuyện Nhanh</button>
            </div>
        </div>
    )
}


export default LoginFast

