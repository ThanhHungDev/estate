import React from 'react'
import Image from 'next/image'
import style from './Tophead.module.scss'
import * as PAGE from "../../constants/page"



const Tophead = () => {

  return <div className={ style.tophead }>
      <div className={ style.social }>
        <a className="social__link" href={ PAGE.SITE_FB } title="follow facebook với chúng tôi">
            <Image src="/font/font-awe/svgs/brands/facebook-f.svg" alt="facebook Logo" width={14} height={14} />
        </a>
        <a className="social__link" href="{{ env('SITE_YOUTUBE')}}" title="follow youtube với chúng tôi">
            <Image src="/font/font-awe/svgs/brands/youtube.svg" alt="youtube Logo" width={14} height={14} />
        </a>
        <a className="social__link" href="{{ env('SITE_INSTAGRAM')}}" title="follow instagram với chúng tôi">
            <Image src="/font/font-awe/svgs/brands/instagram.svg" alt="instagram Logo" width={14} height={14} />
        </a >
        <a className="social__link" href="{{ env('SITE_GOOGLE')}}" title="follow google với chúng tôi">
            <Image src="/font/font-awe/svgs/brands/google-plus-g.svg" alt="google Logo" width={14} height={14} />
        </a >
    </div>
    <ul className={ style.contact }>
        <li>
            <a target="_blank" href={`mailto:${ PAGE.COMPANY_MAIL }`} className={ style.infor }>
                <Image src="/font/font-awe/svgs/duotone/info-square.svg" alt="google Logo" width={14} height={14} />
                <span>{ PAGE.COMPANY_MAIL }</span>
            </a>
        </li>
        <li>
            <a target="_blank" href={`tel:${ PAGE.PHONE }`} className={ style.phone }>
                <Image src="/font/font-awe/svgs/duotone/phone-square-alt.svg" alt="google Logo"  width={14} height={14} />
                <span>{ PAGE.PHONE }</span>
            </a>
        </li>
    </ul >
  </div>
    
    

}

export default Tophead