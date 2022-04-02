import React from 'react'
import md5 from "js-md5"
import ReactPlayer from 'react-player/lazy'

export default props => 
    props.videos.map( url =>
        <div key={ md5(url) } className='animated fadeIn video__block-item'>
            <div className="position-relative">
                
                <i onClick={() => props.removeVideo( url )} className="btn__delete-image fal fa-times-circle"></i>
                {/* // Lazy load the YouTube player */}
                <ReactPlayer url={ url } /> 
                {/* <Player>
                    <source src= />
                </Player> */}
            </div>
        </div>
    )