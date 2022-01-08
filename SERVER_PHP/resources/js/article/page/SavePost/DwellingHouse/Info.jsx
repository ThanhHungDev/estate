import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import AsyncCreatableSelect from 'react-select/async-creatable'
import SelectLocation from '../SelectLocation'

Validator.setLocale(Validator.languages.vi)

const Info = forwardRef((props, ref) => {

    const { CONFIG, OLD } = props
    const refLocation = useRef()

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                const locations = refLocation.current?.validateData()
                if( !locations ){
                    return false
                }else{
                    
                    return { project: { ...locations } }
                }
                
            }
        })
    )

    const getDataSelectChange = data => {
        
    }

    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-12 pt-2">
                    <SelectLocation ref={ refLocation }  CONFIG={CONFIG} OLD={OLD} passingDataParent={ getDataSelectChange } />
                </div>
                <div className="col-12">
                    <div className="alert alert-info mt-3">
                        <p><b>Tìm chung cư bạn sẽ đăng tin:</b></p>
                        <ul>
                            <li>Bạn có thể nhập tìm kiếm căn hộ bạn muốn đăng tin hoặc thêm mới căn hộ</li>
                            <li>Trong trường hợp bạn không tìm thấy căn hộ chung cư bạn muốn bán thì có thể <span className="text-color-red">thêm mới căn hộ</span>.</li>
                        </ul>
                        <p><b>Thêm mới chung cư bạn sẽ đăng tin:</b></p> 
                        <ul>
                            <li>Trong trường hợp bạn đăng căn hộ mới chưa có trên hệ thống, vui lòng nhập vị trí căn hộ bạn sẽ đăng tin.</li>
                        </ul>
                        <p><b>Thông tin căn hộ không bắt buộc:</b></p>
                        <ul>
                            <li>Chúng tôi không bắt buộc bạn phải nhập thông tin căn hộ, nhưng nếu bạn nhập thông tin căn hộ thì hệ thống sẽ hiện thị bài đăng của bạn nhiều hơn đến người dùng</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default Info