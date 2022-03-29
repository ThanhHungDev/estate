import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import style from "./NavSearch.module.scss"

import SvgSearchengin from '../../components/Awesome/brands/Searchengin'

const NavSearch = () => {

    const queryRef = useRef<any>(null)
    const router = useRouter()

    // chưa handle được vì khi ban đầu search là undefined
    // useEffect(() => {
    //     const { search } = router.query
    //     if( !! search ) queryRef.current.value = search
    // }, [])

    const handleSubmitSearch = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(queryRef.current.value, "form search push")
        router.push({ 
            pathname: '/search', 
            query: { search: queryRef.current.value }
        })
    }
    return <form className={ style.search } action="/search" autoComplete="off" onSubmit={ handleSubmitSearch }>
            <input ref={queryRef} type="text" placeholder="tìm kiếm..." name="q" autoComplete="off" />
            <button className={ style.searchBtn } type="submit">
                <SvgSearchengin />
            </button>
    </form>
}
export default NavSearch