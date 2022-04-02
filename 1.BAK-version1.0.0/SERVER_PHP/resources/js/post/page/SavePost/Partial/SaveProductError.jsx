import React from 'react'


function SaveProductError( props ){

    return (
        <div className="post__saved--success">
            <div className="alert alert-warning mt-3">
                <p><b>Đăng bài thất bại!</b></p>
            </div>
            <h5 className="h5 text-color-warning pt-2 pb-4">Hệ thống đang ghi nhận đăng bài thất bại: </h5>
            <div className="alert alert-info mt-3">
                <p><b>Xin lỗi về sự cố vừa sảy ra:</b></p>
                <ul>
                    <li>Quản trị viên sẽ khắc phục lỗi trên sớm nhất có thể</li>
                    <li>Vui lòng báo cáo về sự cố bạn vừa gặp phải đến admin để được hộ trợ tốt nhất. Nếu sự cố là chính xác bạn sẽ được nhận các ưu đãi dành cho <span className="text-color-red"> VIP </span> </li>
                    <li>Lỗi cụ thể: { props.error }</li>
                </ul>
            </div>
        </div>
    )
}
export default SaveProductError