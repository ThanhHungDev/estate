import React, { useEffect, useState } from 'react'
import Validator from "hero-validate"
import { connect } from 'react-redux'
import OtherLogin from './OtherLogin'
import V from "../validator/auth.account"

Validator.setLocale(Validator.languages.vi)


function Account({ CONFIG }){ 

    const [ progress, setProgress ] = useState(false)
    const [ alert, setAlert ]       = useState( window?.SESSION__ACCOUNT__LOGIN__CODE || '' )
    const [ values, setValues ]     = useState({  email: "", password: "" })
    const [ touched, setTouched ]   = useState({})
    const [ errors, setErrors ]     = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    /// add function when value change
    const handleChange = (event) => {
        event.persist()
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const handleBlur = event  => {
        setAlert(null)
        event.persist()
        setTouched({ ...touched, [event.target.name]: true })
    }

    /// hook react
    useEffect(() => {
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched, alert, progress ])

    const onSubmit = event => {
        const errors = Validator.validate( values, V.rules)
        if( errors.hasError ){
            Object.keys(values).map((key, index) => { touched[key] = true })
            console.log(touched, "errors.hasError")
            setTouched(touched)
            setValues({ ...values })
            event.preventDefault()
        }else{
            setProgress( true )
        }
    }

    const buttonSubmit = progress
                            ? <div className="progress progress-blue"> <div className="progress-loadding"></div> </div>
                            : <button type="submit" className="btn btn-login aqua-gradient-rgba"> Đăng nhập </button>
    return (
        <div className="page__login__form form">

            <h2 className="form__title">
                Đăng nhập
                <span className="d-block text-xs font-medium pt-2">
                    <i className="text-color-secondary-color-dark"> Đã từng tạo tài khoản </i>
                    Xác thực qua email và password
                </span>
            </h2>

            { alert && <div className="alert alert-danger mt-2" role="alert"> { alert } </div> }
            <form action={ CONFIG.WEB.POST_LOGIN } method="POST" onSubmit={ onSubmit } >
                <input type="hidden" name="_token" value={ window.csrf_token } />
                <div className="form-group">
                    
                    <div className={"input-group " + ( hasErr("email") && "input-group-error" ) }>
                        <i className="icon fad fa-envelope"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none" 
                            className="input-control"
                            name="email" value={ values.email } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Địa chỉ email"
                        />
                    </div>
                    { hasErr('email') && <label id="email-error" className="error pb-3" htmlFor="email">{ errors.getError("email") }</label> }

                    <div className={"input-group " + ( hasErr("password") && "input-group-error" ) }>
                        <i className="icon fad fa-lock-open-alt"></i>
                        <input type="password" autoCorrect="off" autoCapitalize="none" 
                            className="input-control"
                            name="password" value={ values.password } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Mật khẩu"
                        />
                    </div>
                    { hasErr('password') && <label id="password-error" className="error pb-3" htmlFor="password">{ errors.getError("password") }</label> }

                    <div className="forgot-password">
                        <a href="_" className="forgot-link">Quên password <i className="fad fa-question-circle"></i> </a>
                    </div>
                    <label className="container-checkbox">
                        Ghi nhớ đăng nhập
                        <input name="remember" type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    
                    { buttonSubmit }
                </div>
            </form>
            
            { <OtherLogin CONFIG={CONFIG} /> }
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(Account)