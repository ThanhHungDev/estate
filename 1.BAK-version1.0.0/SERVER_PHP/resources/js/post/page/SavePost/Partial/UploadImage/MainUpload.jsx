import React, { useState, useEffect } from 'react'
import md5 from "js-md5"

import Images from './Images'
import Videos from './Videos'
import Buttons from './Buttons'
// import ShowLightbox from "./ShowLightbox"
import fileAPI from "../../../../../service/file.api"

export default props => {
    const { CONFIG, OLD } = props

    const [ uploading, setUploading ] = useState(null)
    const [ images, setImages ] = useState(OLD.images || [])
    const [ videos, setVideos ] = useState([])

    function onChange(e, isVideo = false ){
        setUploading(true)

        const formData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("file[]", e.target.files[i])
        }
        if(!isVideo){
            /// là lưu ảnh 
            formData.append("type", CONFIG.IMAGE.POST)
        }else{
            formData.append("type", CONFIG.VIDEO.VPOST)
        }
        
        /// set Image

        fileAPI.uploadFile(formData)
        .then( response => {
            setUploading(null)
            const { data } = response
            if( data.length ){
                if(!isVideo){
                    /// là lưu ảnh không trùng
                    const imgs = [...images, ...data ].sort().filter(function(item, pos, ary) {
                        return !pos.IMAGE_RESIZE || item.IMAGE_RESIZE != ary[pos - 1].IMAGE_RESIZE;
                    })
                    setImages( imgs )
                }else{
                    console.log(data, "video đã về")
                    const vids = [...videos, ...data ].sort().filter(function(item, pos, ary) {
                        return !pos.root || item.root != ary[pos - 1].root;
                    })
                    setVideos( vids )
                }
                
            }
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                let { data, status, headers } = error.response
                let { errors } = data
                let firsKeyError = Object.keys(errors)[0]
                alert("upload lỗi : " + errors[firsKeyError] )
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request)
                alert("upload lỗi không nhận được phản hồi" )
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
                alert("Đã xảy ra sự cố khi thiết lập upload." )
            }
            setUploading(null)
        })
    }
    function removeImage(src) {
        setImages( images.filter(image => md5(image.IMAGE_RESIZE) != md5(src)) )
    }
    function removeVideo(src) {
        setVideos( videos.filter(video => md5(video.root) != md5(src)) )
    }

    useEffect( () => {
        
        props.childChangeImagesParent(images)
        props.childChangeVideosParent(videos)
    })

    return (
        <div className="main-upload">
            
            <Buttons images={images.map( img => img.IMAGE_RESIZE )} videos={videos} onChange={ onChange } />

            <div className={ "progress progress-success bg-color-indeterminate " + ( uploading ? '' : 'reset__background-color' ) }>
                <div className="progress-loadding"></div>
            </div>
            <div className="galleries">
            {
                images.length
                ? <Images images={ images.map( img => img.IMAGE_RESIZE ) } removeImage={ removeImage } />
                : null
            }
            </div>
            {/* <ShowLightbox images={ images.map( img => img.root ) } /> */}
            <div className="galleries">
            {
                videos.length
                ? <Videos videos={videos.map( img => img.root )} removeVideo={ removeVideo } />
                : null
            }
            </div>            
        </div>
    )
}
