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
                <time>{error}</time>
                <i className='hero-icon hero-shield-alert-outline'></i>
            </div>
        )
        
    }else if( !createdAt ){
        return (
            <div className="messread">
                {/* đang gửi */}
                <time>送信...</time>
                <i className='hero-icon hero-check-circle-outline'></i>
            </div>
        )
    }else if( !read ){
        {/* đã gửi */}
        return (
            <div className="messread">
                <Moment format="LLLL">{createdAt}</Moment>
                <i className='hero-icon hero-check-circle-outline'></i>
            </div>
        )
    }else{
        return (
            <div className="messread">
                <Moment format="LLLL">{updatedAt}</Moment>
                <i className='hero-icon hero-check-circle'></i>
            </div>
        )
    }
}

export default MessageInfo