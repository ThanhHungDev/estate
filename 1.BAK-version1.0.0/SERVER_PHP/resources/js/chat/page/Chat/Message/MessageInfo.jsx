import React from "react"
import Moment from 'react-moment'
// import moment from 'moment-timezone'
// moment.tz.setDefault("Asia/Tokyo")

const MessageInfo = props => {

    const { message }                           = props,
          { read, createdAt, updatedAt, error } = message

    // const timeCreate = moment("2014-02-27T10:00:00").format('DD-MM-YYYY');

    if( error ){
        return (
            <div className="messread error">
                <time className="d-inline">{error}</time> <i className="hero-icon fal fa-exclamation-circle"></i>
            </div>
        )
        
    }else if( !createdAt ){
        return (
            <div className="messread">
                {/* đang gửi */}
                <time className="d-inline">đang gửi...</time> <i className="hero-icon fal fa-circle"></i>
            </div>
        )
    }else if( !read ){
        {/* đã gửi */}
        return (
            <div className="messread">
                <Moment className="d-inline" format="LLLL">{createdAt}</Moment> <i className="hero-icon far fa-check-circle"></i>
            </div>
        )
    }else{
        return (
            <div className="messread">
                <Moment className="d-inline" format="LLLL">{updatedAt}</Moment> <i className="hero-icon fas fa-check-circle"></i>
            </div>
        )
    }
}

export default MessageInfo