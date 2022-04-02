import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './logo.module.scss'
import { classLister } from "../../constants/utils";


interface LogoProps {
    href?: string
    title?: string
    className?: string | string[] // get class of style of logo component or css global
    styleCustom?: object | undefined // file import module scss
}

const Logo: React.FC<LogoProps> = ({ href, title, className, styleCustom }: LogoProps) => {
    
    const classList = []
    if(!!styleCustom){
        const classes = classLister(styleCustom)    
        if(Array.isArray(className)) classList.push(className.map(c => classes(c)).join(' ').toString())
        else classList.push(classes(className))
    }
    
    return <Link href={href || "/"}>
        <a className={`${style.logo} ${ classList.filter(item => item).join(" ").toString() }`}>
            <Image src='/logo.png' width={44} height={44} alt={title}/>
            <h3 className="logo__application_name d-none">{ title }</h3>
        </a>
    </Link>
}
Logo.defaultProps = {
    href: "/",
    title: process.env.APP_ALTERNATE_NAME?.toString() || '',
    className: ['logo']
}

export default Logo