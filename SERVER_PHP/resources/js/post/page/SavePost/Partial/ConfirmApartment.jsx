import React, { useEffect } from "react"
import Images from '../Partial/UploadImage/Images'

function ConfirmApartment( props ){

    function renderTypePost(type){
        const { CONFIG } = props
        if( type == CONFIG.CONSTANT.POST_TYPE.SALE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> để bán </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.BUY ){
            return <p className="d-block v">Bạn đăng bài <span className="text-color-blue-grey"> để mua </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.LEASE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> cho thuê </span></p>
        }
        return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-blue-grey"> tìm nơi thuê </span></p>
    }

    function renderLocationConfirm(key = 'commune'){
        const { data, CONFIG } = props
        if( data[key] ){
            /// có thông số commune hoặc district  hoặc province
            const { locations } = data
            if( locations ){
                const datas = locations[key]
                const loc = datas.find(item => item.id == data[key] )
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
    const { data, CONFIG } = props
    console.log(data, "có vào confirm ")
    
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
                            <div className="d-block font-weight-light text-muted pt-2">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="name">Họ Tên </label>
                                            <input type="text" className="form-control" id="name" defaultValue={data.name} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="phone">Số Điện Thoại </label>
                                            <input type="text" className="form-control" id="phone" defaultValue={data.phone_verify} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="phone">Vị trí</label>
                                            <input type="text" className="form-control" id="phone" value={renderLocation()} readOnly />
                                        </div>
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
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Thông tin bất động sản</a>
                            <div className="d-block font-weight-light text-muted pt-2">{ data.project?.name }</div>
                            {
                                data.project
                                ? <div className="alert alert-info mt-3" dangerouslySetInnerHTML={{ __html: data.project?.short_introduction }} ></div>
                                : null
                            }
                        </li>
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
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Thêm Diện Tích/Giá</a>
                            
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="area">Tổng Diện tích </label>
                                        <input type="text" className="form-control" id="area" defaultValue={ data.area } readOnly />
                                    </div>
                                </div>
                                
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="price">Giá </label>
                                        <input type="text" className="form-control" id="price" defaultValue={ data.price } readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="form-group required">
                                        <label htmlFor="horizontal">Chiều ngang </label>
                                        <input type="text" className="form-control" id="horizontal" defaultValue={ data.horizontal } readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="form-group required">
                                        <label htmlFor="vertical">Chiều dài </label>
                                        <input type="text" className="form-control" id="vertical" defaultValue={ data.vertical } readOnly />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ConfirmApartment