import React from 'react'
import { Link } from "react-router-dom"
import SeeMore from '../../../general/SeeMore'


function SaveArticleSuccess({ production }){

    return (
        <div className="post__saved--success">
            <div className="alert alert-success mt-3">
                <p><b>Đăng bài thành công!</b></p>
            </div>
            <h5 className="h5 text-color-warning pt-2 pb-4">Cảm ơn bạn đã đăng bài trên nền tảng của chúng tôi: </h5>
            <div className="alert alert-info mt-3">
                <p><b>Đăng bài thành công:</b></p>
                <ul>
                    <li>Chúng tôi sẽ cho phép bài đăng của bạn xuất hiện ngay trên kết quả tìm kiếm của chúng tôi</li>
                    <li>Bài đăng vẫn sẽ được chúng tôi kiểm duyệt về nội dung sau 1 tuần, nếu có bất kỳ khiếu nại sảy ra chúng tôi sẽ có thể gỡ bài đăng của bạn</li>
                </ul>
                <p><b>Để kết quả tìm kiếm được xuất hiện tối ở google:</b></p>
                <ul>
                    <li>Bạn có thể liên hệ với quản trị viên để được tư vấn về giải pháp quảng cáo</li>
                </ul>
                <p><b>Không:</b></p>
                <ul>
                    <li>Sử dụng nội dung sai quy định</li>
                    <li>Chèn nội dung thông tin không đúng quy định vào hình ảnh <span className="text-color-red">Sai quy định có thể bay account nhé!!! </span></li>
                </ul>
            </div>
            <h5 className="h5 text-color-warning pt-2 pb-4">
                Xem lại bài viết
                <Link to={ `/edit/${production?.id}`} className='article__btn--edit'>chỉnh sửa</Link>
            </h5>
            <div className="alert alert-dark mt-3">
                <Link target='_blank' className="h4 d-block alert-heading" to={ `/edit/${production?.id}` }>{ production?.title }</Link>
                <div>
                    <SeeMore content={production?.content}/>
                </div>
            </div>
        </div>
    )
}
export default SaveArticleSuccess