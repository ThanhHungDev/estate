import React from 'react'
import md5 from "js-md5"
import { Player } from 'video-react'

export default props =>
    props.videos.map( url =>
        <div key={ md5(url) } className='animated fadeIn video__block-item'>
            <div className="position-relative">
                
                <i onClick={() => props.removeVideo( url )} className="btn__delete-image fal fa-times-circle"></i>
                <Player>
                    <source src={ url } />
                </Player>
            </div>
        </div>
    )