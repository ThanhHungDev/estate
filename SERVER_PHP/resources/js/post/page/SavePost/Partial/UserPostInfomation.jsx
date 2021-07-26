import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"

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

const UserPostInfomation = forwardRef((props, ref) => {
    const { AUTH } = props

    const PROVINCE_NULL = [ {id: 0, text: 'Chọn Tỉnh Thành'} ]
    const DISTRICT_NULL = [ {id: 0, text: 'Chọn Quận / Huyện'} ]
    const COMMUNE_NULL  = [ {id: 0, text: 'Chọn Phường, xã, thị trấn'} ]
    /// init state
    const [ provinces, setProvinces ] = useState(PROVINCE_NULL)
    const [ districts, setDistricts ] = useState(DISTRICT_NULL)
    const [ communes, setCommunes ] = useState(COMMUNE_NULL)


    const [formState, setFormState] = useState({
        isValid: false,
        values : {
			province: 0,
			district: 0,
			commune : 0,
            home_number: '',
            street: '',
		},
        touched: {
            province: false,
			district: false,
			commune : false,
            home_number: false,
            street: false,
        },
        errors : Validator.getEmpty(),
    })

    const handleChange = (event) => {
        event.persist()

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }))

        /// check nếu là province change thì gọi riêng
        if( event.target.name == 'province' ){
            onProvinceChange(event)
        }
        /// check nếu là district change thì gọi riêng 
        if( event.target.name == 'district' ){
            onDistrictChange(event)
        }
        /// check nếu là commune change thì gọi riêng
        if( event.target.name == 'district' ){
            onCommuneChange(event)
        }
    }

    const hasErr = (name) => {
        return formState.touched[name] && formState.errors.isError(name)
    }

    useEffect( ()=> {

        if(provinces.length <= 1 ){
            /// call api get province
            locationAPI.getProvinces()
            .then( response => {
                const { data } = response
                setProvinces( [ ...provinces, ... data ])
            })
            .catch(error => {
                console.log("ERROR:: ",error)
            });
        }
        const errors = Validator.validate(formState.values, userPostInfomationScheme)
		const newState = {
            ...formState,
            isValid: errors.hasError,
            errors,
        }
        setFormState(newState)

    }, [ formState.values, districts, provinces, communes ] )

    function onProvinceChange(e){

        const provinceValue   = e.currentTarget.value

        if( provinceValue == 0 ){
            /// set cho cái district về mặc định như ban đầu
            setDistricts(DISTRICT_NULL)
            setCommunes(COMMUNE_NULL)
            setFormState({
                ...formState,
                values: {
                    ...formState.values,
                    ["province"]: 0,
                    ["district"]: 0,
                    ["commune"]: 0,
                },
            })
        }else {
            const loadding = DISTRICT_NULL.map( d => {
                d.text = 'Vui lòng chờ tải dữ liệu ...' // <b class="spinner"><i></i><i></i><i></i><i></i></b>
                return d
            })
            /// reset select 2 district to none loading
            setDistricts(loadding)

            /// fetch api DISTRICT all
            if( districts.length <= 1  ){
                /// chưa fetch api bao giờ thì fetch thôi
                locationAPI.getDistricts()
                .then( response => {
                    const { data } = response
                    ///
                    setDistricts( [ ...districts, ... data ])
                })
                .catch(error => {
                    console.log("ERROR:: locationAPI.getDistricts-- ",error)
                })
            }
        }
    }
    function onDistrictChange(e){

        const districtValue   = e.currentTarget.value

        if( districtValue == 0 ){
            /// set cho cái communes về mặc định như ban đầu
            setCommunes(COMMUNE_NULL)
            setFormState({
                ...formState,
                values: {
                    ...formState.values,
                    ["district"]: 0,
                    ["commune"]: 0,
                },
            })
        }else {
            const loadding = COMMUNE_NULL.map( c => {
                c.text = 'Vui lòng chờ tải dữ liệu ...' // <b class="spinner"><i></i><i></i><i></i><i></i></b>
                return c
            })
            /// reset select 2 district to none loading
            setCommunes(loadding)

            /// fetch api COMMUNE all
            if( communes.length <= 1  ){
                /// chưa fetch api bao giờ thì fetch thôi
                locationAPI.getCommunes()
                .then( response => {
                    const { data } = response
                    ///
                    setCommunes( [ ...communes, ... data ])
                })
                .catch(error => {
                    console.log("ERROR:: locationAPI.getCommunes-- ",error)
                })
            }
        }
    }
    function onCommuneChange(e){

        const communeValue   = e.currentTarget.value

        if( communeValue == 0 ){
            /// set cho cái communes về mặc định như ban đầu
            setCommunes(COMMUNE_NULL)
            setFormState({
                ...formState,
                values: {
                    ...formState.values,
                    ["commune"]: 0,
                }, 
            })
        }
    }

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
    console.log("trước khi render ra html", formState)
    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Họ Tên </label>
                        <input type="text" className="form-control" id="name" defaultValue={AUTH.name} readOnly />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="phone">Số Điện Thoại </label>
                        <input type="text" className="form-control" id="phone" defaultValue={AUTH.phone_verify} readOnly />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="province">Chọn Tỉnh Thành</label>
                        <select id="province" 
                            name='province'
                            className={ "custom-select mr-sm-2 " + ( hasErr('province') && 'is-invalid' ) }
                            value={formState.values.gender}
                            onChange={handleChange}>
                            { provinces.map( p => <option key={p.id} value={p.id} > { p.text } </option> ) }
                        </select>
                        {
                            formState.errors.getError('province') && 
                            <div className="invalid-feedback"> { formState.errors.getError('province') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="district">Chọn Quận / Huyện</label>
                        <select id="district" 
                            name='district'
                            className={ "custom-select mr-sm-2 " + ( hasErr('district') && 'is-invalid' ) }
                            value={formState.values.gender}
                            onChange={handleChange}>
                            { 
                                districts
                                .filter( d => !d.province || d.province ==  formState.values.province )
                                .map( d => <option key={d.id} value={d.id} > { d.text } </option> ) 
                            }
                        </select>
                        {
                            formState.errors.getError('district') && 
                            <div className="invalid-feedback"> { formState.errors.getError('district') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="commune">Phường, Xã, Thị Trấn</label>
                        <select id="commune" 
                            name='commune'
                            className={ "custom-select mr-sm-2 " + ( hasErr('commune') && 'is-invalid' ) }
                            value={formState.values.gender}
                            onChange={handleChange}>
                            { 
                                communes
                                .filter( c => !c.district || c.district ==  formState.values.district )
                                .map( c => <option key={c.id} value={c.id} > { c.text } </option> ) 
                            }
                        </select>
                        {
                            formState.errors.getError('commune') && 
                            <div className="invalid-feedback"> { formState.errors.getError('commune') } </div>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="home_number">Số Nhà </label>
                        <input type="text" id="home_number" placeholder="0674"
                            className={hasErr("home_number") ? "is-invalid form-control" : "form-control"}
                            name="home_number"
                            value={formState.values.home_number}
                            onChange={handleChange}
                        />
                        {
                            formState.errors.getError('home_number') && 
                            <div className="invalid-feedback"> { formState.errors.getError('home_number') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="form-group required">
                        <label htmlFor="street">Tên Đường </label>
                        <input type="text" id="street" placeholder="Hàng 5 - Ấp Lộc Hoà"
                            className={hasErr("street") ? "is-invalid form-control" : "form-control"}
                            name="street"
                            value={formState.values.street}
                            onChange={handleChange}
                        />
                        {
                            formState.errors.getError('street') && 
                            <div className="invalid-feedback"> { formState.errors.getError('street') } </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default UserPostInfomation