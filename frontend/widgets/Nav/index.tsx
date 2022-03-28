import React from 'react'
import ActiveLink from '../../components/Link/ActiveLink'
import Logo from '../Logo'
import style from "./nav.module.scss"
import NavSearch from './NavSearch'
// import PropTypes from 'prop-types'

// Nav.propTypes = {
// }

const Nav: React.FC = () => {
    return <div id="header__sticky" className={style.headerpage}>
        <div className={style.header}>
            <Logo />
            <div id="menu" className={style.menu}>
                {/* <div className="d-flex justify-content-center">
                    <div className="form-search-grow mobile">
                        <div className="position-relative">
                        </div>
                    </div>
                    <i id="js_btn_header_toggle__menu" className="burger float-right mx-3">
                        <span></span>
                    </i>
                </div> */}
                <div className={style.wrapperNavigate}>
                    <NavSearch />
                    <ul className={style.navigate}>
                        <ActiveLink activeClassName={style.active} href="/">
                            <li className={`${style.navigateLink}`}>
                                <a><span className="title">Trang Chủ</span></a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName={style.active} href="/news">
                            <li className={`${style.navigateLink}`}>
                                <a><span className="title">Tin Tức</span></a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName={style.active} href="/about">
                            <li className={`${style.navigateLink}`}>
                                <a><span className="title">Liên Hệ</span></a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName={style.active} href="/register">
                            <li className={`${style.navigateLink}`}>
                                <a><span className="title">Đăng ký</span></a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName={style.active} href="/login">
                            <li className={`${style.navigateLink}`}>
                                <a><span className="title">Đăng nhập</span></a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName={style.active} href="/user/post">
                            <li className={`${style.navigateLink} ${style.navigateBtnLink}`}>
                                <a><span className="title">Đăng tin</span></a>
                            </li>
                        </ActiveLink>
                        <li className="navigate__link text-right mobile">
                            <i id="js_menu__mobile_close" className="burger active">
                                <span></span>
                            </i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Nav;