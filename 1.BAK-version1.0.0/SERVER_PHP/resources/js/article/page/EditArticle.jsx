import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DefaultActicle from "./topic/DefaultActicle"
import userAPI from "../../service/user.api"
import errorHelper from "../../service/error.helper"

function EditArticle(props){
    
    // const { CONFIG, CATEGORIES, AUTH } = props
    const { id } = useParams() // id này không phải là category id đâu. Nó là id product để fetch về
    const [ production, setProduction ] = useState(null)
    const [ progress, setProgress ] = useState(true)
    const [ error, setError ] = useState(null)
    

    useEffect(async () => {
        /// call api get province
        const response = await userAPI.getProductUserById(id)
        setProgress(false)
        console.log(response)
        if( response.status >= 300 ){
            setError(response)
            return false
        }
        setProduction(response?.data?.product)
        return false

    }, [])
    if( progress ) return <ProgressLoading />
    if( error ) return <EditArticleError error={ error } />

    const category = props.CATEGORIES.find( cat => cat.id == production?.category_id )
    if( !category ) return <EditArticleError error={ errorHelper.internalServerError('không tìm thấy chủ đề của bài đăng!') } />
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <DefaultActicle category={category}  OLD={ production } { ...props }/>
        default:
            return <DefaultActicle category={category} OLD={ production } { ...props }/>
    }
}


const EditArticleError = ({ error }) => {
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
                <p><b>Chi tiết lỗi cụ thể:</b></p>
                <ul>
                    <li>{ error.data?.message }</li> 
                </ul>
                
            </div>
        </div>
    )
}
const ProgressLoading = () => {
    return <div className="d-block">
        <p> Đang tải dữ liệu </p>
        <div className="progress progress-purple">
            <div className="progress-loadding"></div>
        </div>
    </div>
}

export default EditArticle