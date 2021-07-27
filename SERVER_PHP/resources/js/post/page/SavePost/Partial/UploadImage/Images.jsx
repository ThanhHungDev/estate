import React from 'react'
import md5 from "js-md5"

export default props =>
    props.images.map( url =>
        <div key={ md5(url) } className='fadein'>
            <div
                onClick={() => props.removeImage( url )}
                className='delete'
            >
                <i className="fal fa-times-circle"></i>
            </div>
            <img src={ url } alt='' />
        </div>
    )