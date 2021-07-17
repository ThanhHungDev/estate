import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

function VerifyPhone( props ){
    const [ validatePhone, setValidatePhone ] = useState(1)
    const [ verifyCapcha, setVerifyCapcha ] = useState(0)

    const onChange = async () => {
        setVerifyCapcha(1)
        setValidatePhone(0)
    }

    return <div className="wrapper-verify">
        <div className="verify verify__notification">
            <div className="verify__header">
                <i className="icon fad fa-sms"></i>
                <span className="title">Xác Thực Số Điện Thoại! </span>
            </div>
            <div className="verify__body">
                <div className="notification form-group">
                    <div className={ "input-group " + (!validatePhone && 'input-group-error' )}>
                        <i className="icon fad fa-envelope"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none" 
                        className="input-control jquery__append-out" placeholder="+81 ... Nhập số điện thoại" />
                    </div>
                    <div className="error"></div>
                    <div className="wrapper-recapcha">
                        <ReCAPTCHA
                            sitekey={KEY_CAPTCHA}
                            onChange={onChange}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-login aqua-gradient-rgba">
                        Xác Thực
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default VerifyPhone