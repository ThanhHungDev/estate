import React from 'react'
import md5 from "js-md5"

export default props =>
<div className="information__photo">
    <div id="photos__responsive-images" className="information__photo-group">
        {
            props.images.map( img => {
                return (
                    <a key={ md5(img.url) } className="information__photo-item" href={ img.url }>
                        <img src={ img.url }
                            // onerror="this.onerror=null;this.src=`{{ asset(Config::get('app.image_error')) }}`;" 
                            />
                    </a>
                )
            })
        }
    </div>
</div>