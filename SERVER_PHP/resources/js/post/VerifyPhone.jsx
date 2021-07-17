import React, { useState, useEffect } from "react"
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"
import 'firebase/auth';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics"

// Add the Firebase products that you want to use
import firebaseConfig from "../firebase.config"

firebase.initializeApp(firebaseConfig);


function VerifyPhone( props ){
    const [ invalidPhone, setInvalidPhone ] = useState(null)
    const [ isvalidRecaptcha, setIsvalidRecaptcha ] = useState(null)
    const [ alert, setAlert ] = useState(null)

    let refPhone = React.createRef();

    /// init
    // Initialize Firebase
    
    // Tương tự như componentDidMount và componentDidUpdate:
    useEffect(() => {
        window.recapchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        {
            callback: function(response) {
                console.log("có thể bấm")
                setIsvalidRecaptcha(true)
            }
        })
        recapchaVerifier.render();
    }, []);

    function isVietnamesePhoneNumber(number) {
        return /([\+84|84|81|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,9})\b/.test(number);
    }
    function validatePhone(){
        /// thay đổi liên tục
        let strInValid = null
        if( !isVietnamesePhoneNumber(refPhone.current.value) ){
            strInValid = "không phải số điện thoại ở việt nam"
        }
        if( !refPhone.current.value ){
            strInValid = "Số điẹn thoại buộc phải nhập"
        }
        setInvalidPhone(strInValid)
    }

    function sendSignInPhone(event) {
        
        const number = refPhone.current.value
        validatePhone()
        console.log(invalidPhone)
        
        if( !invalidPhone && isvalidRecaptcha ){
            console.log("có xác thực")

            refPhone.current.value = ''
            recapchaVerifier.render()
            firebase
            .auth()
            .signInWithPhoneNumber(number, window.recapchaVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                let coderesult = confirmationResult;
                console.log(coderesult);
            })
            .catch(function (error) {
                console.log(error);
                setAlert(error.message)
            });
        }else if(!isvalidRecaptcha) {
            
            setAlert("bạn cần xác thực recaptcha")
        }


        
    }
    function verify() {
        var code = $("#verification").val();
        coderesult.confirm(code).then(function (result) {
            var user = result.user;
            console.log(user);
            $("#successOtpAuth").text("Auth is successful");
            $("#successOtpAuth").show();
        }).catch(function (error) {
            $("#error").text(error.message);
            $("#error").show();
        });
    }


    return <div className="wrapper-verify">
        <div className="verify verify__notification">
            <div className="verify__header">
                <i className="icon fad fa-sms"></i>
                <span className="title">Xác Thực Số Điện Thoại! </span>
            </div>
            <div className="verify__body">
                <div className="notification form-group">
                    {
                        alert && 
                        <div className="alert alert-warning" role="alert"> { alert } </div>
                    }
                    
                    <div className={ "input-group " + (invalidPhone && 'input-group-error' )}>
                        
                        <i className="icon fad fa-phone-alt"></i>
                        <input type="text" autoCorrect="off" autoCapitalize="none" 
                        ref={refPhone}
                        onChange={ validatePhone }
                        className="input-control" 
                        placeholder="+81 ... Nhập số điện thoại" />
                    </div>
                    <div className="error">{ invalidPhone }</div>
                    <div id="recaptcha-container"></div>
                    
                    {
                        !invalidPhone && 
                        <button type="submit" 
                        onClick={ sendSignInPhone }
                        className="btn btn-login aqua-gradient-rgba">
                            Xác Thực
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default VerifyPhone