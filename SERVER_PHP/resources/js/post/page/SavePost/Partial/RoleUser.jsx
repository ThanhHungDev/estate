import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'


const RoleUser = forwardRef((props, ref) => {
    const { CONFIG, OLD } = props
    /// init state
    const [ role, setRole ] = useState( OLD.type || CONFIG.CONSTANT.USER_TYPE.PERSON )
    

    function onChangeRadio(e){

        setRole(e.currentTarget.value)
    }
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                return role
            }
        }),
    )
    return(
        <div className="user-type position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn Là Cá Nhân Hay Môi giới: </h5>

            <div className="mycustom-form-group-radio">
                <label htmlFor="person" className="container__radio d-block"> Cá Nhân
                    <input id="person" name='role' type="radio" value={CONFIG.CONSTANT.USER_TYPE.PERSON} checked={ role == CONFIG.CONSTANT.USER_TYPE.PERSON } onChange={onChangeRadio} />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="company" className="container__radio d-block"> Môi Giới
                    <input id="company" name='role' type="radio" value={CONFIG.CONSTANT.USER_TYPE.COMPANY} checked={ role == CONFIG.CONSTANT.USER_TYPE.COMPANY } onChange={onChangeRadio} />
                    <span className="checkmark"></span>
                </label>
            </div>
            

            <div className="alert alert-info mt-2">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <p><b>Quy định dành cho "Cá nhân":</b></p>
                        <ul>
                            <li>Khi cá nhân đăng bán, Bài viết của bạn sẽ lên trang chủ nhưng chỉ được đăng <strong className="text-danger">1 bài viết</strong></li>
                            <li>Nếu bạn đăng nhiều bài hãy liên hệ quản trị viên để chứng thực bạn có nhiều tài sản cá nhân</li>
                        </ul>
                        <p><b>Quy định dành cho "Môi giới":</b></p>
                        <ul>
                            <li>Bài viết của bạn sẽ được hiện thị trong trang tìm kiếm <strong className="text-danger">không vào khung giờ vàng</strong> </li>
                            <li>Là Công ty/Cá nhân kinh doanh bất động sản</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
})

export default RoleUser