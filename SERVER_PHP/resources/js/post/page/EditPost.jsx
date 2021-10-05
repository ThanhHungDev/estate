import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import ImagesApartment from './SavePost/Partial/UploadImage/ImagesApartment'
import userAPI from "../../service/user.api"
import ExpandShowMore from "./ExpandShowMore"
import Apartment from "./SavePost/Apartment"

function EditPost( props ){

    const history = useHistory()
    const { id } = useParams()
    const [ post, setPost ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        if( !post && !error ){
            /// fetch api 
            /// call api get province
            userAPI.getProductUserById(id)
            .then( response => {
                const { data } = response
                console.log(data)
                
                setPost(data)
            })
            .catch(error => {
                setError( error )
                console.log("ERROR:: ",error)
            });
        }
    }) 

    if( error ){
        return (
            <div className="post__edit--error">
                <div className="alert alert-warning mt-3">
                    <p><b>Không tìm thấy bài đăng hoặc không có quyền chỉnh sửa!</b></p>
                </div>
                <h5 className="h5 text-color-pink pt-2 pb-4">Hệ thống không thể cấp phép chỉnh sửa: </h5>
                <div className="alert alert-info mt-3">
                    <p><b>Xin lỗi về sự cố vừa sảy ra:</b></p>
                    <ul>
                        <li>Nếu bạn phát hiện điều bất thường do lỗi hệ thống vui lòng báo cáo với điều này đến quản trị viên để được hưởng ưu đãi <span className="text-color-red"> VIP </span></li> 
                    </ul>
                </div>
            </div>
        )
    }
    
    return <div>
        { post?.title }
    </div>
}


export default EditPost