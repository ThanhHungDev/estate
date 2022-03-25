import React from 'react'
import md5 from "js-md5"

export default props =>
    props.images.map( url =>
        <div key={ md5(url || '') } className='animated fadeIn image__block-item'>
            <div className="position-relative">
                {
                    props.removeImage
                    ? <i onClick={() => props.removeImage( url )} className="btn__delete-image fal fa-times-circle"></i>
                    : null
                }
                
                <img src={ url } alt='' />
            </div>
        </div>
    )