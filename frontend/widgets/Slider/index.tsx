import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Carousel } from 'antd'
import style from "./slider.module.scss"
import { ISlider } from '../../pages'
import moment from "moment"

type SliderProps = {
  data: ISlider[]
}

const Slider = ({ data }: SliderProps) => {

  return <div className={style.slider}>
    <Carousel autoplay={true} effect="fade" autoplaySpeed={2000}>
      {
        data.length && data.map(slide => {
          return (
            <div key={slide._id} className={style.sliderItem}>
              <div className={style.sliderItemImage}>
                <Image src={slide.src} alt={slide.alt} width="800" height="700"/>
              </div>
              <div className={style.sliderItemContent}>
                <div>
                  <h4 className={style.sliderItemTopic}>
                    { slide.alt}
                    <time>— { moment(slide.updatedAt).fromNow() }</time>
                  </h4>
                  <h3 className={style.sliderItemTitle}>{slide.title} </h3>
                </div>
                <div className={style.sliderItemDes}>{slide.content}</div>
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


