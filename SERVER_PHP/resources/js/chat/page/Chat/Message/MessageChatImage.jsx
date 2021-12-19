// FUNCTIONAL COMPONENT
import React from "react"

const MessageChatImage = props => {

    //// over time => none download
    const TIME_DIE_FILE   = 24 * 60 * 60 * 1000
    const { attachments } = props
    return (
        <div className="IMAGE" >
            {
                attachments.map(( attach , index) => {

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
                                <i className="hero-icon hero-cloud-download-outline"></i>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MessageChatImage