import React, { useEffect } from "react"
import { connect } from "react-redux"
import ExpandShowMore from "../../ExpandShowMore"
import Images from '../Partial/UploadImage/Images'

function ConfirmApartment( props ){

    function renderTypePost(type){
        const { CONFIG } = props
        if( type == CONFIG.CONSTANT.POST_TYPE.SALE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> để bán </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.BUY ){
            return <p className="d-block v">Bạn đăng bài <span className="text-color-pink"> để mua </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.LEASE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> cho thuê </span></p>
        }
        return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> tìm nơi thuê </span></p>
    }

    function renderLocationConfirm(key = 'commune', values){
        if( !values ){
            values = data
        }
        const { locations, CONFIG } = props
        if( values[key] ){
            if( locations ){
                const datas = locations[key]
                const loc = datas.find(item => item.id == values[key] )
                return loc['text']
            }
        }
        return false
    }

    function renderLocation(){
        
        let loc = []
        loc.push(data.home_number ?? "")
        loc.push(data.street ?? "")

        let commune = renderLocationConfirm('commune')
        if( commune ){
            loc.push(commune)
        }

        let district = renderLocationConfirm('district')
        if( district ){
            loc.push(district)
        }
        
        let province = renderLocationConfirm('province') 
        if( province ){
            loc.push(province)
        }
        
        return loc.join(' ')
    }

    function renderContentTitle(){
        if( !data.title || !data.content ){
            return null
        }
        return (
            <li>
                <a className="h6 text-capitalize font-weight-bold">Nội dung hiện thị trong tìm kiếm</a>
                <div className="row pt-2">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Tiêu đề Bài đăng</th>
                                        <td>{ data.title }</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Nội dung bài đăng</th>
                                        <td dangerouslySetInnerHTML={{ __html: data.content }}  ></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

    function renderAreaPrice(){

        const contents = [
            { text: 'Tổng Diện Tích', value: data.area },
            { text: 'Tổng Giá', value: data.price },
            { text: 'Chiều ngang', value: data.horizontal },
            { text: 'Chiều dài', value: data.vertical },
        ]
        
        if( contents.every( item => !item.value ) ){
            return null
        }
        return (
            <li>
                <a className="h6 text-capitalize font-weight-bold">Diện Tích / Giá</a>
                <div className="row pt-2">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    {
                                        contents.filter(item => !item.value )
                                        .map( item => {
                                            return(
                                                <tr>
                                                    <th scope="row">{ item.text }</th>
                                                    <td>{ item.value }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

    function renderInforProjectApartment(){
        const { CONFIG } = props
        
        if( !data.project ){
            return null
        }
        if( data.project.id ){
            return(
                <li>
                    <a className="h6 text-capitalize font-weight-bold">Thông tin bất động sản</a>
                    <h3 className="d-block pt-2 font-weight-light h5"><span className="h6 text-muted">Dự án:</span><a className="text-color-warning" target='_blank' href={ `${CONFIG.REACT_ASSET}/apartment/project/${data.project.id}` }>{ data.project.name }</a></h3>
                    
                    <ExpandShowMore content={data.project.short_introduction} />
                </li>
            )
        }
        const loc = []
        
        let commune = renderLocationConfirm('commune', data.project )
        if( commune ){
            loc.push(commune)
        }

        let district = renderLocationConfirm('district', data.project )
        if( district ){
            loc.push(district)
        }
        
        let province = renderLocationConfirm('province', data.project) 
        if( province ){
            loc.push(province)
        }
        
        return(
            <li>
                <a className="h6 text-capitalize font-weight-bold">Thông tin bất động sản</a>
                <div className="d-block font-weight-light text-muted pt-2">{ data.project.label }</div>
                <div className="d-block font-weight-light text-muted pt-2">{ loc.join(' ') }</div>
            </li>
        )
    }
    const { data, CONFIG } = props
    
    return (
        <div className="confirm">
            <div className="row">
                <div className="col-12">
                    <ul className="timeline">
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Bạn đăng bài để</a>
                            { renderTypePost(data.type ) }
                        </li>
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Thông tin liên hệ</a>
                            <div className="row pt-2">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Họ Tên</th>
                                                    <td>{ data.name }</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Số Điện Thoại</th>
                                                    <td>{ data.phone_verify }</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Vị trí</th>
                                                    <td>{ renderLocation() }</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Cá Nhân Hay Môi giới</a>
                            { 
                                data.role == CONFIG.CONSTANT.USER_TYPE.PERSON
                                ? <p className="d-block font-weight-light text-muted pt-2">Bạn là <span className="text-color-pink"> Cá Nhân </span></p>
                                : <p className="d-block font-weight-light text-muted pt-2">Bạn là <span className="text-color-pink"> Môi giới </span></p>
                            }
                        </li>
                        {
                            data.title
                            ? renderContentTitle()
                            : null
                        }
                        { renderAreaPrice() }
                        
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Hình ảnh / Video Minh hoạ</a>
                            <div className="main-upload">
                                <div className="galleries">
                                {
                                    data.images?.length
                                    ? <Images images={ data.images.map( img => img.IMAGE_RESIZE ) } />
                                    : null
                                }
                                </div>
                            </div>
                        </li>
                        { renderInforProjectApartment() }
                    </ul>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        locations: state.location
    }
}
export default connect(mapStateToProps)(ConfirmApartment)