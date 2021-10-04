import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'

import MainUpload from './UploadImage/MainUpload'

const MIN_GALLERY = 1;


const GalleryPost = forwardRef((props, ref) => {
    const { CONFIG, OLD } = props

    const [ error, setError ] = useState(null)
    /// init state
    const [ images, setImages ] = useState( OLD.images || [] )
    const [ videos, setVideos ] = useState( [] )
    

    console.log( images )
    // function onChangeRadio(e){

    //     setRole(e.currentTarget.value)
    // }
    function childChangeImagesParent(images){
        
        setImages(images)
    }
    function childChangeVideosParent(videos){
        setVideos(videos)
    }

    useEffect( () => {
        if( (images.length + videos.length ) < MIN_GALLERY ){
            setError("Bạn chưa đăng đủ số lượng ảnh hoặc video")
        }else{
            setError(null)
        }
    })
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                
                if( (images.length + videos.length ) < MIN_GALLERY ){
                    setError("Bạn chưa đăng đủ số lượng ảnh hoặc video")
                    return false
                }
                
                setError(null)
                return { images, videos }
            }
        }),
    )
    return(
        <div className="user-type position-relative">
            <h5 className={ "user-type__title pt-2 pb-4 " + (error ? 'text-color-red' : '') }>Bạn Cần đăng ít nhất { MIN_GALLERY } ảnh: </h5>

            {
                error && 
                <div className="text-color-red">{ error }</div>
            }
            <div className="upload-image">
                <MainUpload CONFIG={CONFIG} childChangeImagesParent={childChangeImagesParent} childChangeVideosParent={childChangeVideosParent} OLD={{ images, videos }}/>
            </div>
            
            

            <div className="alert alert-info mt-3">
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