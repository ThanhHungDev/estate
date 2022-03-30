import React, { useEffect, useState, useRef } from 'react'
import SvgTimes from '../../components/Awesome/duotone/Times'
import ActiveLink from '../../components/Link/ActiveLink'
import Logo from '../Logo'
import style from "./nav.module.scss"
import NavSearch from './NavSearch'
// import PropTypes from 'prop-types'

// Nav.propTypes = {
// }

const Nav: React.FC = () => {
    const [ toggle, setToggle ] = useState<boolean>(false)
    const lastScrollRef = useRef<any>(null)
    const stickyRef = useRef<any>(null)
    const showRef = useRef<any>(null)
    const menuRef = useRef<any>(null)


    const showNavMobile = (event: any) => {
        setToggle(!toggle)
    }
    

    const stickyMenu = async (sticky : any) => {
        const winScroll = (document.body.scrollTop || document.documentElement.scrollTop)
        if (typeof sticky === 'undefined' || !Number.isSafeInteger(sticky)) sticky = 0
        if ( !lastScrollRef.current ) lastScrollRef.current = 0
        const domheight = document.getElementById("just-for-height")
        if (winScroll && winScroll >= sticky) {
            domheight && domheight.setAttribute("style", `height: ${menuRef.current.clientHeight}px`)
            stickyRef.current = true
        } else {
            domheight && domheight.setAttribute("style", `height: 0`)
            showRef.current = false
            stickyRef.current = false
        }
        
        if (sticky && stickyRef.current) {
            let isShow = false
            /// detect case f5 browser
            if( 
                (winScroll > 0 && lastScrollRef.current == 0)
                || 
                lastScrollRef.current && winScroll < lastScrollRef.current
            ){
                /// is f5
                isShow = true
            }
            showRef.current = isShow
        }
        lastScrollRef.current = winScroll
        setTimeout(()=> {
            // console.log(winScroll + "----->" + sticky + "----->" + stickyRef.current, showRef.current);
            const dom = document.getElementById("header__sticky")
            if(stickyRef.current) dom?.classList.add(style.sticky)
            else dom?.classList.remove(style.sticky)

            if(showRef.current) dom?.classList.add(style.show)
            else dom?.classList.remove(style.show)
        }, 0)
    }
    
    const handleNavigation = (event : any) => {
        // if (!window.IS_ROBOT ) {
            const sticky = menuRef.current?.offsetTop + 1; // menu.outerHeight()
            // console.log(sticky)
            // if ($(window).width() > 767) {
                stickyMenu(sticky)
            // }
        // }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e))

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e))
        };
    }, []);

    return <>
        <div ref = { menuRef } id="header__sticky" className={ style.headerpage }>
            <div className={style.header}>
                <Logo />
                <div id="menu" className={style.menu}>
                    <div className="d-flex justify-content-center">
                        <div className="form-search-grow mobile">
                            <div className="position-relative">
                            </div>
                        </div>
                    </div>
                    <div className={style.wrapperNavigate}>
                        <NavSearch />
                        <ul className={`${style.navigate} ${toggle && style.showMobile}`}>
                            { 
                                toggle && <li className={`${style.navigateBtnTimeClose} mobile text-right`}>
                                    <SvgTimes onClick={ showNavMobile } width={32} height={32}/>
                                </li>
                            }
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
                        <i className={ style.burger } onClick={ showNavMobile }>
                            <span></span>
                        </i>
                        { toggle && <div className={`${style.backdrop}`} onClick={ showNavMobile }></div> }
                    </div>
                </div>
                
            </div>
        </div>
        <div id="just-for-height"></div>
    </>
}

export default Nav;