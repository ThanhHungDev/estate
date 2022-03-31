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
    const [ sticky, setSticky ] = useState<number>(28)
    const [ menuHeight, setMenuHeight ] = useState<number>(75)
    const lastScrollRef = useRef<any>(null)
    const menuRef = useRef<any>(null)


    const showNavMobile = (event: any) => {
        setToggle(!toggle)
    }
    

    const stickyMenu = (sticky: number) => {
        console.log(sticky)
        const winScroll = typeof window != 'undefined' ? document.documentElement.scrollTop  : (document.body.scrollTop || document.documentElement.scrollTop)
        if (!lastScrollRef.current) lastScrollRef.current = 0

        let isSticky, isShow

        const domheight = document.getElementById("just-for-height")
        if (winScroll && winScroll >= sticky) {
            isSticky = true
        } else {
            // 
            isShow = false
            isSticky = false
        }

        if (sticky) {
            /// detect case f5 browser
            if( 
                (winScroll > 0 && !lastScrollRef.current)
                || 
                lastScrollRef.current && winScroll < lastScrollRef.current && winScroll > sticky
            ){
                /// is f5
                isShow = true
            }
        }
        lastScrollRef.current = winScroll
        console.log(window.scrollY + "----->" + sticky + "----->" + isSticky, isShow)
        const dom = document.getElementById("header__sticky")
        if(isSticky){
            domheight && domheight.setAttribute("style", `height: ${menuHeight}px`)
            dom?.classList.add(style.sticky)
        } 
        else {
            dom?.classList.remove(style.sticky)
            domheight && domheight.setAttribute("style", `height: 0`)
        }

        if(isShow) dom?.classList.add(style.show)
        else dom?.classList.remove(style.show)
    }
    
    // ES6 code
    const throttle = (func: any, delay: any) => {
        let lastCall = 0
        console.log(typeof window != 'undefined' ? document.documentElement.scrollTop  : 0, "window.scrollY")
        return function () {
            const now = new Date().getTime()

            if (now - lastCall < delay) return

            lastCall = now
            return func(sticky)
        }
    }
    const tHandler = throttle(stickyMenu, 200)

    // https://stackoverflow.com/questions/68751736/throttle-window-scroll-event-in-react-with-settimeout
    useEffect(() => {
        const sticky = (document.getElementById("header__sticky")?.offsetTop || 28) + 1
        const menuHeight = document.getElementById("header__sticky")?.clientHeight || 75
        setSticky(sticky)
        setMenuHeight(menuHeight)
        window.addEventListener("scroll", tHandler)
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", tHandler)
        }
    }, [])
    useEffect(() => {
        console.log("vào 3 lần")
    })
    

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