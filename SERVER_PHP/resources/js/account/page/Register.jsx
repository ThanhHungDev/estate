import React, { useRef } from 'react'
import { connect } from 'react-redux'
import OtherLogin from './OtherLogin'


function Register({ CONFIG }){
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    return (
        <form action="/" method="POST"  className="page__login__form form">

            <h2 className="form__title">
                Đăng nhập
                <span class="d-block text-xs font-medium pt-2">
                    <i class="text-color-secondary-color-dark"> Đã từng tạo tài khoản </i>
                    Xác thực qua email và password
                </span>
            </h2>
            
            <div className="form-group">

                <div className="input-group">
                    <i className="icon fad fa-envelope"></i>
                    <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" 
                        className="input-control" placeholder="Địa chỉ email" 
                        ref={ emailRef }
                        />
                </div>
                <div className="input-group">
                    <i className="icon fad fa-lock-open-alt"></i>
                    <input name="password" ref="password" type="password" 
                        autoCorrect="off" autoCapitalize="none" placeholder="Mật khẩu"
                        className="input-control" 
                        ref={ passwordRef }
                        />
                </div>
                <div className="forgot-password">
                    <a href="{{ Route('FORGOT') }}" className="forgot-link">Quên password <i className="fad fa-question-circle"></i> </a>
                </div>
                <label className="container-checkbox">
                    Ghi nhớ đăng nhập
                    <input name="remember" type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <button type="submit" className="btn btn-login aqua-gradient-rgba">
                    Đăng nhập
                </button>
            </div>
            { <OtherLogin CONFIG={CONFIG} /> }
        </form>
    )
}



let mapStateToProps = (state) => {
    return {
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(Register)