import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import ImagesApartment from './SavePost/Partial/UploadImage/ImagesApartment'
import userAPI from "../../service/user.api"
import ExpandShowMore from "./ExpandShowMore"
import Apartment from "./SavePost/Apartment"
import SavePost from "./SavePost"

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
                const { product, user, images } = data

                const {
                    category_id,
                    commune_id,
                    content,
                    direction,
                    direction_balcony,
                    extensions,
                    horizontal,
                    vertical,
                    negotiate,
                    posttype,
                    price,
                    text_content,
                    title,
                    type,
                    area,
                } = product

                const {
                    // commune_id,
                    home_number,
                    role,
                    sale_type,
                    street,
                } = user

                const post = { 
                    edit: id,
                    category_id: category_id,
                    type: posttype.toString(), 
                    role: role, 
                    title: title, 
                    content: content, 
                    contentText: text_content,
                    images: images,
                    area: area,
                    horizontal: horizontal,
                    price: price,
                    vertical: vertical,
                    bathroom: extensions.bathroom,
                    direction: direction,
                    direction_balcony: direction_balcony,
                    negotiate: negotiate,
                    room: extensions.room,
                    wc: extensions.wc,
                    project: extensions.project
                }
                setPost(post)
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

    const category = props.CATEGORIES.find( cat => cat.id == post?.category_id )
    
    if( !category ){
        return null
    }

    return <SavePost {...props } category={category} OLD={ post }/>
}


let mapStateToProps = (state) => {
    return {
        auth      : state.auth,
        CATEGORIES: state.categories,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(EditPost)