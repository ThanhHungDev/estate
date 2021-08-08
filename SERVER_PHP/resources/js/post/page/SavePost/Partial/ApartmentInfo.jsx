import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import Select from 'react-select'

import locationAPI from "../../../../service/location.api"

const userPostInfomationScheme = {
    province   : "required|numeric|min:1|max:100000",
    district   : "required|numeric|min:1|max:100000",
    commune    : "required|numeric|min:1|max:100000",
    home_number: "required|string|min:2|max:50",
    street     : "required|string|min:2|max:200",
}
Validator.setLocale(Validator.languages.vi)
/// custom message for your form
Validator.setMessages({
    province: "Bạn chưa chọn Tỉnh Thành",
    district: "Bạn chưa chọn Quận Huyện",
    commune: "Bạn chưa chọn Phường xã thị trấn",
});

const ApartmentInfo = forwardRef((props, ref) => {
    const { AUTH } = props


    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                const errors = Validator.validate(formState.values, userPostInfomationScheme)
                if( errors.hasError ){
                    const { touched } = formState
                    Object.keys(touched).map(function(key, index) {
                        touched[key] = true
                    })
                    setFormState({ ... formState })
                    return false
                }else{
                    /// lưu lại và next step
                    return formState.values
                }
            }
        }),
    )

    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="project">Tên khu dân cư / dự án </label>
                        <input type="text" className="form-control" id="project" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group required">
                        <label htmlFor="province">Chọn Tỉnh Thành</label>
                        {/* <Select 
                            id="province" 
                            name='province'
                            className={ " " + ( hasErr('province') && 'is-invalid' ) }
                            value={ 
                                !formState.values.province
                                ? 0
                                : provinces
                                .find( p => {
                                    return p.value == formState.values.province
                                }) 
                            }
                            onChange={ handleChange }
                            options={ 
                                provinces
                                .map( p => {
                                    return { 
                                        value: p.id, 
                                        label: p.text, 
                                        currentTarget: { value: p.id }, 
                                        target: { name: 'province', value: p.id } 
                                    }
                                }) 
                            } />
                        {
                            formState.errors.getError('province') && 
                            <div className="invalid-feedback"> { formState.errors.getError('province') } </div>
                        } */}
                        <input type="text" className="form-control" id="province" />
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default ApartmentInfo