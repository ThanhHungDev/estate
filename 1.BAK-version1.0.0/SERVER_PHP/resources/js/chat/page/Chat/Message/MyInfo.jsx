import React from "react"

const MyInfo = props => {
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
                <div className="fieldset">
                    <div className="legend"> đây là chỗ này </div>
                    <ol>
                        <li> chỉ mục 1 </li>
                        <li> chỉ mục 2 </li>
                        <li> chỉ mục 3
                            <ul>
                                <li> mô tả 1 </li>
                                <li> mô tả 2 </li>
                                <li> mô tả 3 </li>
                                <li> mô tả 4 </li>
                            </ul>
                            <a className="fieldset__link" href="#">xem hướng dẫn</a>
                        </li>
                        <li>sfdsfsf</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MyInfo
