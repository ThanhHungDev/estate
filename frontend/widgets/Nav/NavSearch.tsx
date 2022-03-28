import React from 'react'
import style from "./NavSearch.module.scss"

import SvgSearchengin from '../../components/Awesome/brands/Searchengin'

const NavSearch = () => {
    return <form className={ style.search } action="https://topbds.vn/tim-kiem" autoComplete="off">
            <input type="text" placeholder="tìm kiếm..." name="q" autoComplete="off" />
            <button className={ style.searchBtn } type="submit">
                <SvgSearchengin />
            </button>
    </form>
}
export default NavSearch