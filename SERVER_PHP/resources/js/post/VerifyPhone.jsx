import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
// import jwt_decode from "jwt-decode"
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"
import 'firebase/auth';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics"

// Add the Firebase products that you want to use
import firebaseConfig from "../firebase.config"
import userAPI from "../service/user.api"
import { setterAuth } from "../action/index"

firebase.initializeApp(firebaseConfig);


function VerifyPhone( props ){
    const [ screenCode, setScreenCode ] = useState(null)
    const [ invalidCode, setInvalidCode ] = useState(null)
    const [ invalidPhone, setInvalidPhone ] = useState(null)
    const [ isvalidRecaptcha, setIsvalidRecaptcha ] = useState(null)
    const [ alert, setAlert ] = useState(null)
    const [ isProgress, setIsProgress ] = useState(null)

    const [ backupPhone, setBackupPhone ] = useState('')

    let refPhone = React.createRef()
    let refCode = React.createRef()



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

        let AUTH_PHONE_FIREBASE = localStorage.getItem('AUTH_PHONE_FIREBASE')
        if( AUTH_PHONE_FIREBASE ){
            AUTH_PHONE_FIREBASE = JSON.parse(AUTH_PHONE_FIREBASE)
        }
        //// hàm chạy 1 lần duy nhất gọi đến api update
        if( !props.AUTH.phone_verify &&  AUTH_PHONE_FIREBASE){
            /// ẩn button send đồng thời show progress bar loading
            setIsProgress(true)
            userAPI.verifyPhone({ phone_verify: `${AUTH_PHONE_FIREBASE.phoneNumber}` })
            .then( response => {
                console.log(response, "response props.AUTH")
                firebase.auth().signOut()
                // .then(() => {
                //     // Sign-out successful.
                // }).catch((error) => {
                //     // An error happened.
                // });
                location.reload()
                setIsProgress(null)
                /// thành công thì refresh trang
                // const { user, phone, jwt } = response.data
                // /// lưu jwt vào localStorage
                // localStorage.setItem('jwt', jwt)
                // /// dispatch auth
                // props.dispatch(setterAuth(jwt_decode(jwt)))
            })
            .catch(error => {
                console.log("ERROR:: ",error);
                setIsProgress(null)
                console.log(error, props.AUTH)
            });
        }
    }, []);

    function isVietnamesePhoneNumber(number) {
        return /([\+84|84|\+81|81]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,9})\b/.test(number);
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
        isProgress && setIsProgress(null)
    }
    function validateCode(){
        /// thay đổi liên tục
        let strInValid = null
        if( !refCode.current.value && !refCode.current.value.length < 4 ){
            strInValid = "Mã code chứa ít nhất 4 ký tự"
        }
        if( !refCode.current.value ){
            strInValid = "Mã code buộc phải nhập"
        }
        setInvalidCode(strInValid)
    }

    function sendSignInPhone(event) {
        
        const number = refPhone.current.value
        validatePhone()
        console.log(invalidPhone)
        
        if( !invalidPhone && isvalidRecaptcha ){
            console.log("có xác thực")
            /// lưu trữ trạng thái phone trước khi reset về dạng không có nhập phone nào
            setBackupPhone(refPhone.current.value)
            refPhone.current.value = ''
            //// cho recaptcha tạo mới lại
            recapchaVerifier.render()
            /// set hidden button 
            setIsProgress(true)
            /// gửi reqquest lên firebase
            firebase
            .auth()
            .signInWithPhoneNumber(number, window.recapchaVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult
                console.log(confirmationResult)
                setAlert(null)
                setScreenCode(true)
                setIsProgress(null)
            })
            .catch(function (error) {
                console.log(error)
                setAlert(error.message)
            });
        }else if(!isvalidRecaptcha) {
            setAlert("bạn cần xác thực recaptcha")
        }
    }
    function sendVerifyCode() {
        const code = refCode.current.value

        window.confirmationResult
            .confirm(code)
            .then(function (result) {
                const user = result.user
                setAlert(null)
                //// lưu vào localStorage
                localStorage.setItem('AUTH_PHONE_FIREBASE', JSON.stringify(user))
                /// send axios cập nhật tài khoản đã được update
                return userAPI.verifyPhone({ phone_verify: `${backupPhone}` })
            })
            .then( response => {
                console.log(response, "đang vào hàm sendVerifyCode")
                if( response.code == 200 ){
                    /// dispatch jwt new
                }
                firebase.auth().signOut()
                location.reload()
            })
            .catch(function (error) {
                setAlert("xác minh code không thành công")
            });
    }

    if(screenCode){
        /// screen code là đúng thì đưa ra màn hình nhập mã code
        return <div className="wrapper-verify">
            <div className="verify verify__notification">
                <div className="verify__header">
                    <i className="icon fad fa-sms"></i>
                    <span className="title">Nhập mã code! </span>
                </div>
                <div className="verify__body">
                    <div className="notification form-group">
                        {
                            alert && 
                            <div className="alert alert-danger" role="alert"> { alert } </div>
                        }
                        <div className={ "input-group " + (invalidCode && 'input-group-error' )}>
                            <i className="icon fad fa-shield"></i>
                            <input type="text" autoCorrect="off" autoCapitalize="none" 
                            ref={refCode}
                            onChange={ validateCode }
                            className="input-control" 
                            placeholder="nhập mã code vừa được gửi qua điện thoại" />
                        </div>
                        <div className="error">{ invalidCode }</div>
                        {
                            ( !invalidCode && !isProgress) &&
                            <button type="submit" 
                            onClick={ sendVerifyCode }
                            className="btn btn-login aqua-gradient-rgba">
                                Xác Thực Mã Code
                            </button>
                        }
                        {
                            isProgress &&
                            <div className="progress progress-success bg-color-indeterminate">
                                <div className="progress-loadding"></div>
                            </div>
                        }
                        <button type="submit" 
                            onClick={ () => { location.reload() } }
                            className="btn btn-login bg-gradient-purple">
                                Không nhận được mã code
                            </button>
                    </div>
                </div>
            </div>
        </div>
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
                        placeholder="+84 ... Nhập số điện thoại" />
                    </div>
                    <div className="error">{ invalidPhone }</div>
                    <div id="recaptcha-container"></div>
                    {
                        (!invalidPhone && !isProgress) &&
                        <button type="submit" 
                        onClick={ sendSignInPhone }
                        className="btn btn-login aqua-gradient-rgba">
                            Xác Thực
                        </button>
                    }
                    {
                        isProgress &&
                        <div className="progress progress-success bg-color-indeterminate">
                            <div className="progress-loadding"></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        CONFIG: state.config,
        AUTH  : state.auth,
    }
}
export default connect(mapStateToProps)(VerifyPhone)
