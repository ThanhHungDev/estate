import React from "react"

const ConversationNotFound = props => {
    const { auth }                = props,
          { avatar, email, name } = auth
    return (
        
        <div className="component-myinfor-pc animated fadeIn delay-3s">
            <div className="myinfor">
                <figure className="myinfor__avatar">
                    <img src={avatar} alt={ name }/>
                </figure>
                <div className="myinfor__welcome">
                    Chào mừng<br />
                    <span className='myinfor__welcome-name'>{ name }</span>
                    <br />
                    <span className='myinfor__welcome-email'>Bạn đang đăng nhập với tài khoản mail là : { email  }</span>
                </div>
            </div>
            <div className="contract">
                hiện tại không tìm thấy user bạn mong muốn
            </div>
        </div>
    )
}

export default ConversationNotFound