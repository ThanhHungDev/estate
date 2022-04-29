import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Carousel } from 'antd'
import style from "./slider.module.scss"
import { ISlider } from '../../pages'

type SliderProps = {
  data: ISlider[]
}

const Slider = ({ data }: SliderProps) => {

  return <div className={style.slider}>
    <Carousel autoplay>
      {
        data.length && data.map(slide => {
          return (
            <div key={slide._id} className={style.sliderItem}>
              <div className={style.sliderItemImage}>
                <Image src={slide.src} alt={slide.alt} width="640" height="560"/>
              </div>
              <div className={style.sliderItemContent}>
                <div>
                  <h4 className={style.sliderItemTopic}>
                    Giá cả hợp lý
                    <time>— 2 tháng trước</time>
                  </h4>
                  <h3 className={style.sliderItemTitle}>
                    Giúp khách hàng có cái nhìn tổng quan và thẩm định được giá trị bất động sản
                  </h3>
                </div>
                <div className={style.sliderItemDes}>Với một quy trình tư vấn chuyên nghiệp, chúng tôi Bất Động Sản nhà đất bảo lộc sẽ giúp khách hàng thẩm định và định giá được bất đông sản đáp ứng nhu cầu nhà ở của khách hàng nhanh nhất.</div>
                <div className="action py-3">
                  <a className="btn-hero btn-hero-light-green itext-sm" href="tel:+84343086424">
                    +84343086424
                  </a>
                  <a className="btn-hero btn-hero-outline-light-green itext-sm" href="https://topbds.vn/contact">
                    Gửi Yêu Cầu Tư Vấn
                  </a>
                </div>
              </div>
            </div>
          )
        })
      }
    </Carousel>
  </div>
}

export default Slider


