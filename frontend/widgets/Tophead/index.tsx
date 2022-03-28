import React from 'react'
import style from './Tophead.module.scss'
import * as PAGE from "../../constants/page"
import AccessibleIcon from "../../components/Awesome/brands/AccessibleIcon"
import Youtube from "../../components/Awesome/brands/Youtube"
import Instagram from "../../components/Awesome/brands/Instagram"
import GooglePlusG from "../../components/Awesome/brands/GooglePlusG"
import InfoSquare from "../../components/Awesome/duotone/InfoSquare"
import PhoneSquareAlt from "../../components/Awesome/duotone/PhoneSquareAlt"


const Tophead = () => {

    return <div className={style.tophead}>
        <div className={style.social}>
            <a className={style.link} href={PAGE.SITE_FB} title="follow facebook với chúng tôi">
                <AccessibleIcon width={ 14 } height={ 14 } fill='currentcolor'/>
            </a>
            <a className={style.link} href="{{ env('SITE_YOUTUBE')}}" title="follow youtube với chúng tôi">
                <Youtube  width={ 14 } height={ 14 } fill='currentcolor'/>
            </a>
            <a className={style.link} href="{{ env('SITE_INSTAGRAM')}}" title="follow instagram với chúng tôi">
                <Instagram width={ 14 } height={ 14 } fill='currentcolor'/>
            </a >
            <a className={style.link} href="{{ env('SITE_GOOGLE')}}" title="follow google với chúng tôi">
                <GooglePlusG width={ 18 } height={ 18 } fill='currentcolor'/>
            </a >
        </div>
        <ul className={style.contact}>
            <li>
                <a target="_blank" href={`mailto:${PAGE.COMPANY_MAIL}`} className={style.infor}>
                    <InfoSquare width={ 18 } height={ 18 } fill='currentcolor'/>
                    <span>{PAGE.COMPANY_MAIL}</span>
                </a>
            </li>
            <li>
                <a target="_blank" href={`tel:${PAGE.PHONE}`} className={style.phone}>
                    <PhoneSquareAlt width={ 18 } height={ 18 } fill='currentcolor'/>
                    <span>{PAGE.PHONE}</span>
                </a>
            </li>
        </ul >
    </div>



}

export default Tophead