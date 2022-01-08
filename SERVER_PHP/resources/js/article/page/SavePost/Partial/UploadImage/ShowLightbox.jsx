import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export default function ShowLightbox( props ){
    const { images } = props

    const [ photoIndex, setPhotoIndex ] = useState(0)
    const [ isOpen, setIsOpen ] = useState(false)


    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true) }>
                Open Lightbox
            </button>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(true) }
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length) }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length) }
                />
            )}
        </div>
    )
}

