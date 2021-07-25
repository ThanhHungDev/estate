import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'


const GalleryPost = forwardRef((props, ref) => {
    const { CONFIG } = props
    /// init state
    const [ role, setRole ] = useState(CONFIG.CONSTANT.USER_TYPE.PERSON)
    

    function onChangeRadio(e){

        setRole(e.currentTarget.value)
    }
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                return role
            }
        }),
    )
    return(
        <div className="user-type position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn Cần đăng ít nhất 3 ảnh: </h5>

            
            

            <div className="alert alert-info">
                <p><b>Yêu cầu cho video:</b></p>
                <ul>
                    <li>Độ dài video không vượt quá 3 phút</li>
                    <li>Giới hạn 1 video/tin đăng và 10 tin đăng có video/ tháng</li>
                </ul>
                <p><b>Để cho thuê nhanh hơn:</b></p>
                <ul>
                    <li>Chụp hình khổ ngang: phòng ngủ, phòng khách, bếp, ban công</li>
                </ul>
                <p><b>Không:</b></p>
                <ul>
                    <li>Sử dụng hình ảnh trùng lặp hoặc lấy từ Internet</li>
                    <li>Chèn số điện thoại/email/logo vào hình</li>
                </ul>
            </div>



        </div>
    )
})

export default GalleryPost