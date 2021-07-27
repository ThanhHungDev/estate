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

    function onChange(e){
        setUploading(true)

        const formData = new FormData()
        // const images = []
        for (let i = 0; i < e.target.files.length; i++) {

            formData.append("file[]", e.target.files[i])
            // images.push(e.target.files[i])
        }
        formData.append("type", CONFIG.IMAGE.POST)
        /// set Image

        fileAPI.uploadFile(formData)
        .then( response => {
            setUploading(null)
            const { data } = response
            if( data.length ){
                const imgs = data.map( d => d.IMAGE_RESIZE )
                setImages( imgs )
            }
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            setUploading(null)
        })
    }
    function removeImage(src) {
        setImages( images.filter(image => md5(image) != md5(src)) )
    }

    useEffect( () => {
        console.log("vào eff")
    })
    return (
        <div className="main-upload">
            {
                uploading && <div className="progress progress-success bg-color-indeterminate">
                    <div className="progress-bar"></div>
                </div>
            }
            <Buttons onChange={ onChange } />
            {
                images.length
                ? <Images images={ images } removeImage={ removeImage } />
                : null
            }
        </div>
    )
}
