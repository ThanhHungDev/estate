import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function OtherLogin({ CONFIG }){
    const location = useLocation()
    
    const renderLoginType = () => {
        const authphone = location.pathname != CONFIG.ACCOUNT_ROUTE.AUTHPHONE 
                            ? <Link type='button' className="otherlogin__item otherlogin__item--phone" to={ CONFIG.ACCOUNT_ROUTE.AUTHPHONE }>
                                <i className="fas fa-phone"></i>
                                <span>Điện thoại</span>
                            </Link>
                            : null
        const authEmail = location.pathname != CONFIG.ACCOUNT_ROUTE.AUTHLOCAL
                            ?  <Link type='button' className="otherlogin__item otherlogin__item--phone" to={ CONFIG.ACCOUNT_ROUTE.AUTHLOCAL }>
                                <i className="fas fa-mail-bulk"></i>
                                <span>Địa chỉ mail</span>
                            </Link>
                            : null
        return <div className="otherlogin__social">{ authphone } { authEmail }</div>
    }
    return (
        <div>
            <div className="otherlogin">
                <p className="text-xs text-color-grey text-center py-2">Hoặc đăng nhập bằng: </p>
                <div className="otherlogin__social">
                    <a href={ `${CONFIG.ACCOUNT_ROUTE.BASENAME}/auth/redirect/facebook`} className="otherlogin__item otherlogin__item--facebook">
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                    </a>
                    <a href={ `${CONFIG.ACCOUNT_ROUTE.BASENAME}/auth/redirect/google`} className="otherlogin__item otherlogin__item--google">
                        <i className="fab fa-google"></i>
                        <span>Google</span>
                    </a>
                </div>
                { renderLoginType() }
            </div>
            <h4 className="description">
                Chưa có tài khoản? Bạn muốn <Link className="register-inline" to={ CONFIG.ACCOUNT_ROUTE.REGISTER }>đăng ký</Link>
            </h4>
        </div>
    )
}


export default OtherLogin