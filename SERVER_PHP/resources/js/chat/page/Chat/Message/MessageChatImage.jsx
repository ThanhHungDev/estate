// FUNCTIONAL COMPONENT
import React from "react"

const MessageChatImage = props => {
    const STYLE__IMAGE  = 'IMAGE'
    //// over time => none download
    const TIME_DIE_FILE   = 24 * 60 * 60 * 1000
    const { style, attachment } = props?.message
    if( style != STYLE__IMAGE ) return null
    return (
        <div className="IMAGE" >
            {
                attachment.map(( attach , index) => {

                    const { time, url, type } = attach,
                          fileLive            = time - TIME_DIE_FILE < (new Date).getTime()
                    let   imgsrc              = "/image/folder.jpg"

                    if( time && type == 'img' && fileLive ){
                        imgsrc = url
                    }
                    
                    return (
                        <div key={ index } className="wrapper-attachment">
                            <img src={ imgsrc } alt=''/>
                            <a href={ url } className="download-file-attachment" target="_blank" download>
                                <i class="far fa-cloud-download-alt"></i>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MessageChatImage