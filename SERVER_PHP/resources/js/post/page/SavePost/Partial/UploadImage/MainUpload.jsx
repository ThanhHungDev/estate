import React, { useState, useEffect } from 'react'
import md5 from "js-md5"

import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import fileAPI from "../../../../../service/file.api"

export default props => {
    const { CONFIG } = props

    const [ uploading, setUploading ] = useState(null)
    const [ images, setImages ] = useState([])
    const [ videos, setVideos ] = useState([])

    function onChange(e){
        setUploading(true)

        const formData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("file[]", e.target.files[i])
        }
        formData.append("type", CONFIG.IMAGE.POST)
        /// set Image

        fileAPI.uploadFile(formData)
        .then( response => {
            setUploading(null)
            const { data } = response
            if( data.length ){
                const imgs = [...images, ...data ].sort().filter(function(item, pos, ary) {
                    return !pos.IMAGE_RESIZE || item.IMAGE_RESIZE != ary[pos - 1].IMAGE_RESIZE;
                })
                setImages( imgs )
            }
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            setUploading(null)
        })
    }
    function removeImage(src) {
        setImages( images.filter(image => md5(image.IMAGE_RESIZE) != md5(src)) )
    }

    useEffect( () => {
        
        props.childChangeImagesParent(images)
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
        </div>
    )
}
