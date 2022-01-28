import React, { useEffect, useState } from 'react'
import Validator from "hero-validate"
import { connect } from 'react-redux'
import OtherLogin from './OtherLogin'
import V from "../validator/auth.code"
import { useLocation } from 'react-router-dom'
Validator.setLocale(Validator.languages.vi)

function Code({ CONFIG }){
    
    const location = useLocation()
    const phone = new URLSearchParams(location.search).get("phone") || ''

    const [ progress, setProgress ] = useState(false)
    const [ alert, setAlert ] = useState( window?.SESSION__VERIFY__CODE || null )
    const [values, setValues]   = useState({  code: "" })
    const [touched, setTouched] = useState({})
    const [errors, setErrors]   = useState(Validator.getEmpty())

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
                            : <button type="submit" className="btn btn-login aqua-gradient-rgba">Xác minh code </button>

    return (
        <div className="page__login__form form">

            <h2 className="form__title">
                đăng nhập
                <div className="d-block text-xs font-medium pt-2">
                    Nhập
                    <i className="text-color-secondary-color-dark"> Số điện thoại </i>
                    sau đó nhập mã <strong className="text-color-pink"> code </strong>
                    <i className="text-color-secondary-color-dark"> trong tin nhắn sms </i>
                    để đăng nhập không cần tài khoản.
                </div>
            </h2>
            { alert && <div className="alert alert-danger mt-2" role="alert"> { alert } </div> }
            <form action={ CONFIG.WEB.POST_VERIFY_CODE } method="POST" onSubmit={ onSubmit } >
                <input type="hidden" name="_token" value={ window.csrf_token } />
                <div className="form-group">
                    
                    <div className={"input-group " + ( hasErr("code") && "input-group-error" ) }>
                        <i className="icon fad fa-code"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none" 
                            className="input-control"
                            name="code" value={ values.code } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Nhập mã code"
                        />
                    </div>
                    { hasErr('code') && <label id="code-error" className="error pb-3" htmlFor="code">{ errors.getError("code") }</label> }
                    <input type="hidden" name="phone" value={ phone } />
                    { buttonSubmit }
                </div>
            </form>

            <OtherLogin CONFIG={CONFIG} />
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(Code)