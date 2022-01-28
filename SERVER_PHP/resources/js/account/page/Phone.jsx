import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import Validator from "hero-validate"
import { connect } from 'react-redux'
import OtherLogin from './OtherLogin'
import V from "../validator/auth.phone"
import userAPI from "../../service/user.api"


function Phone({ CONFIG }){
    const history = useHistory()

    const [ progress, setProgress ] = useState(false)
    const [ alert, setAlert ] = useState(null)
    const [values, setValues]   = useState({ 
        phone      : window?.OLD?.phone || ""
    })
    const [touched, setTouched] = useState({})
    const [errors, setErrors]   = useState(Validator.getEmpty())
    const recaptchaRef = React.useRef()

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
        }
        const token = recaptchaRef.current.getValue()
        setAlert(token ? null : "Tích chọn capcha!")
        event.preventDefault()
        if( !token ) return false
        setProgress(true)
        userAPI.sendCode(values.phone, token)
        .then( response => {
            console.log(response, "response props.AUTH")
            setProgress(false)
            if( response.status == 200 ){
                history.push( `${CONFIG.ACCOUNT_ROUTE.VERIFYPHONE}?phone=${response?.data?.phone}`)
            }
        })
        .catch(error => {
            setProgress(false)
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                setAlert(error.response?.data?.message)
                console.log(error.response?.data?.message, "error.response?.data?.messageerror.response?.data?.messageerror.response?.data?.message")
            }else{
                console.log("ERROR:: ",error)
                setAlert("Lỗi hệ thống, vui lòng chọn các xác thực khác bên dưới")
            }
        })
    }


    const buttonSubmit = progress
                            ? <div className="progress progress-blue"> <div className="progress-loadding"></div> </div>
                            : <button type="submit" className="btn btn-login aqua-gradient-rgba">  Đăng nhập code </button>
    
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
            <form action="/" method="POST" onSubmit={ onSubmit } >
                <div className="form-group">
                    
                    <div className={"input-group " + ( hasErr("phone") && "input-group-error" ) }>
                        <i className="icon fad fa-phone"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none" 
                            className="input-control"
                            name="phone" value={ values.phone } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    { hasErr('phone') && <label id="phone-error" className="error pb-3" htmlFor="phone">{ errors.getError("phone") }</label> }

                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={ window.KEY_CAPTCHA }
                        // onChange={ onChange }
                    />
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
export default connect(mapStateToProps)(Phone)