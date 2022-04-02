import React, { useState, useRef } from 'react'
import { Carousel } from 'antd'
import style from "./slider.module.scss"

const Slider = () => {

    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79'
    }

    return <Carousel autoplay className={ style.slider }>
        <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
    </Carousel>
}
export default Slider






// const SimpleSlider = (props: any) => {
//   const ref = useRef<any>({});

//   const next = () => {
//     ref.current.slickNext();
//   };

//   const previous = () => {
//     ref.current.slickPrev();
//   };

//   const settings = {
//     className: 'section-outstanding__slider',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     infinite: false,
//     rows: 2,
//     responsive: [
//       {
//         breakpoint: 1198,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           rows: 2
//         }
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           rows: 1
//         }
//       }
//     ]
//   }
//   return <div className="homeslider">
//     <div id="slider" className="slider">
//       <Slider ref={ref} {...settings}>
//         <div className="js__onload--show {{ $key ? 'd-none' : null }}">
//           <div className="slider__item">
//             <div className="slider__item-img">
//               <img src="https://topbds.vn/img/slider/slider3.webp" alt="{{ $slider->alt }}" width="200" height="175" />
//             </div>
//             <div className="slider__item-content">
//               <div>
//                 <h4 className="slider__item-topic">
//                   Giá cả hợp lý
//                   <time>— 2 tháng trước</time>
//                 </h4>
//                 <h3 className="slider__item-title">
//                   Giúp khách hàng có cái nhìn tổng quan và thẩm định được giá trị bất động sản
//                 </h3>
//               </div>
//               <div className="slider__item-des">Với một quy trình tư vấn chuyên nghiệp, chúng tôi Bất Động Sản nhà đất bảo lộc sẽ giúp khách hàng thẩm định và định giá được bất đông sản đáp ứng nhu cầu nhà ở của khách hàng nhanh nhất.</div>
//               <div className="action py-3">
//                 <a className="btn-hero btn-hero-light-green itext-sm" href="tel:+84343086424">
//                   +84343086424
//                 </a>
//                 <a className="btn-hero btn-hero-outline-light-green itext-sm" href="https://topbds.vn/contact">
//                   Gửi Yêu Cầu Tư Vấn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="js__onload--show {{ $key ? 'd-none' : null }}">
//           <div className="slider__item">
//             <div className="slider__item-img">
//               <img src="https://topbds.vn/img/slider/slider3.webp" alt="{{ $slider->alt }}" width="200" height="175" />
//             </div>
//             <div className="slider__item-content">
//               <div>
//                 <h4 className="slider__item-topic">
//                   Giá cả hợp lý
//                   <time>— 2 tháng trước</time>
//                 </h4>
//                 <h3 className="slider__item-title">
//                   Giúp khách hàng có cái nhìn tổng quan và thẩm định được giá trị bất động sản
//                 </h3>
//               </div>
//               <div className="slider__item-des">Với một quy trình tư vấn chuyên nghiệp, chúng tôi Bất Động Sản nhà đất bảo lộc sẽ giúp khách hàng thẩm định và định giá được bất đông sản đáp ứng nhu cầu nhà ở của khách hàng nhanh nhất.</div>
//               <div className="action py-3">
//                 <a className="btn-hero btn-hero-light-green itext-sm" href="tel:+84343086424">
//                   +84343086424
//                 </a>
//                 <a className="btn-hero btn-hero-outline-light-green itext-sm" href="https://topbds.vn/contact">
//                   Gửi Yêu Cầu Tư Vấn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   </div>
// }

// export default SimpleSlider;