import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import Select from 'react-select'
import V from "../../../validator/user.infor"
import locationAPI from "../../../../service/location.api"

Validator.setLocale(Validator.languages.vi)
/// custom message for your form
Validator.setMessages(V.messages)

const UserPostInfomation = forwardRef((props, ref) => {
    const { AUTH, CONFIG } = props

    const PROVINCE_USER = AUTH.province 
    const DISTRICT_USER = AUTH.district
    const COMMUNE_USER  = AUTH.commune

    const PROVINCE_NULL = [ {id: 0, text: 'Chọn Tỉnh Thành'} ]
    const DISTRICT_NULL = [ {id: 0, text: 'Chọn Quận / Huyện'} ]
    const COMMUNE_NULL  = [ {id: 0, text: 'Chọn Phường, xã, thị trấn'} ]

    /// init state
    const [ provinces, setProvinces ] = useState(PROVINCE_NULL)
    const [ districts, setDistricts ] = useState(DISTRICT_NULL)
    const [ communes, setCommunes ] = useState(COMMUNE_NULL)


    /// setting giá trị mặc định
    const [ values, setValues ] = useState({
        province   : AUTH.province_id ?? 0,
        district   : AUTH.district_id ?? 0,
        commune    : AUTH.commune_id ?? 0,
        home_number: AUTH.home_number ?? '',
        street     : AUTH.street ?? '',
    })
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }

    useEffect( () => {

        if( values.commune ){
            /// chắc chắn thông tin district và province cũng đã có sẵn rồi nên mình fetch hết về để nếu ng ta có chỉnh thì chỉnh nhanh luôn
            /// nhưng thường sẽ không chỉnh đâu mà họ sẽ next qua luôn
            callApiLocation()
        }else{
            callApiProvince()
        }
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, districts, provinces, communes ] )

    function callApiProvince(callback){

        if( provinces.length <= 1 ){
            /// call api get province
            locationAPI.getProvinces()
            .then( response => {
                const { data } = response
                const newProvinces = [ ...provinces, ... data ]
                callback ? callback(newProvinces) : setProvinces(newProvinces)
            })
            .catch(error => {
                console.log("ERROR:: ",error)
            });
        }
    }

    function callApiDistrict(callback){
        if( districts.length <= 1 ){
            /// chưa fetch api bao giờ thì fetch thôi
            locationAPI.getDistricts()
            .then( response => {
                const { data } = response
                const newDistricts = [ ...districts, ... data ]
                callback ? callback(newDistricts) : setDistricts(newDistricts)
            })
            .catch(error => {
                console.log("ERROR:: locationAPI.getDistricts-- ",error)
            })
        }
    }
    function callApiCommune(callback){
        if( communes.length <= 1 ){
            /// chưa fetch api bao giờ thì fetch thôi
            locationAPI.getCommunes()
            .then( response => {
                const { data } = response
                const newCommunes = [ ...communes, ... data ]
                callback ? callback(newCommunes) : setCommunes(newCommunes)
            })
            .catch(error => {
                console.log("ERROR:: locationAPI.getCommunes-- ",error)
            })
        }
    }
    function callApiLocation(){
        callApiProvince( function( provinces ){
            setProvinces(provinces)
            callApiDistrict(function( districts ){
                setDistricts(districts)
                callApiCommune( function( communes ){
                    setCommunes(communes)
                })
            })
        })
    }

    function castOptionSelect(locations, targetName = 'commune' ){
        return locations.map( item => { return { value: item.id, label: item.text, currentTarget: { value: item.id }, target: { name: targetName, value: item.id } }})
    }

    function onProvinceChange(e){

        const provinceValue   = e.currentTarget.value

        if( provinceValue == 0 ){
            /// set cho cái district về mặc định như ban đầu
            setDistricts(DISTRICT_NULL)
            setCommunes(COMMUNE_NULL)
            setValues({ ... values, province: 0, district: 0, commune: 0 })
        }else 
        /// fetch api DISTRICT all
        if( provinceValue != 0 && districts.length <= 1  ){
            const loadding = DISTRICT_NULL.map( d => {
                d.text = 'Vui lòng chờ tải dữ liệu ...' // <b class="spinner"><i></i><i></i><i></i><i></i></b>
                return d
            })
            /// reset select 2 district to none loading
            setDistricts(loadding)
            callApiDistrict()
        } else
        /// có dữ liệu sẵn
        {
            /// khỏi làm gì cả tự render lại là chạy đúng rồi
            console.log("khỏi làm gì cả tự render lại là chạy đúng rồi")
        } 
    }
    function onDistrictChange(e){

        const districtValue   = e.currentTarget.value

        if( districtValue == 0 ){
            /// set cho cái communes về mặc định như ban đầu
            setCommunes(COMMUNE_NULL)
            setValues({ ... values, district: 0, commune: 0 })
        }else 
        /// fetch api COMMUNE all
        if( districtValue != 0 && communes.length <= 1  ){
            const loadding = COMMUNE_NULL.map( c => {
                c.text = 'Vui lòng chờ tải dữ liệu ...' // <b class="spinner"><i></i><i></i><i></i><i></i></b>
                return c
            })
            /// reset select 2 district to none loading
            setCommunes(loadding)
            callApiCommune()
        } else
        /// có dữ liệu sẵn
        {
            /// khỏi làm gì cả tự render lại là chạy đúng rồi
            console.log("khỏi làm gì cả cái districts tự render lại là chạy đúng rồi")
        } 
    }
    function onCommuneChange(e){

        const communeValue   = e.currentTarget.value
        if( communeValue == 0 ){
            /// set cho cái communes về mặc định như ban đầu
            setCommunes(COMMUNE_NULL)
            setValues({ ... values, commune: 0 })
        }
    }
    
    

    const handleChange = (event) => {
        
        if(event.persist){
            event.persist()
        }

        // /// check nếu là province change thì gọi riêng
        if( event.target.name == 'province' ){
            values.district = 0
            values.commune = 0
            onProvinceChange(event)
        }
        /// check nếu là district change thì gọi riêng 
        if( event.target.name == 'district' ){
            values.commune = 0
            onDistrictChange(event)
        }
        /// check nếu là commune change thì gọi riêng
        if( event.target.name == 'commune' ){
            onCommuneChange(event)
        }
        setValues({ ...values, [event.target.name]: event.target.value })
        setTouched({ ...touched, [event.target.name]: true })
    }

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                console.log( touched, values )
                const errors = Validator.validate(values, V.rules)
                if( errors.hasError ){
                    
                    Object.keys(values).map( (key, index) => {
                        touched[key] = true
                    })
                    
                    setErrors( errors )
                    setTouched(touched)
                    return false
                }else{
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )




    const provinceOptions = [ ... provinces ]
    const districtOptions = [ ... districts ].filter( item => !item.province || item.province ==  values.province )
    const communeOptions = [ ... communes ].filter( item => !item.district || item.district ==  values.district )
    console.log(districtOptions, "có render lại")
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
                        <label htmlFor="province"> Tỉnh Thành </label>
                        {
                            provinceOptions.length <= 1 && values.province
                            ? <input className="form-control" defaultValue={ PROVINCE_USER.text } readOnly />  /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                            : <Select 
                                id="province" 
                                name='province'
                                className={ " " + ( hasErr('province') && 'is-invalid' ) }
                                value={ castOptionSelect(provinceOptions, 'province' ).find( item => item.value == values.province ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(provinceOptions, 'province' ) } 
                            />
                        }
                        {
                            errors.getError('province') && <div className="invalid-feedback"> { errors.getError('province') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="district">Chọn Quận / Huyện</label>
                        {
                            districtOptions.length <= 1 && values.district
                            ? <input className="form-control" defaultValue={ DISTRICT_USER.text } readOnly /> /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                            : <Select 
                                id="district" 
                                name='district'
                                className={ " " + ( hasErr('district') && 'is-invalid' ) }
                                value={ castOptionSelect(districtOptions, 'district' ).find( item => item.value == values.district ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(districtOptions, 'district' ) }
                            />
                        }
                        {
                            errors.getError('district') && <div className="invalid-feedback"> { errors.getError('district') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="commune">Phường, Xã, Thị Trấn</label>
                        {
                            communes.length <= 1 && values.commune
                            ? <input className="form-control" defaultValue={ COMMUNE_USER.text } readOnly />  /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                            : <Select 
                                id="commune" 
                                name='commune'
                                className={ " " + ( hasErr('commune') && 'is-invalid' ) }
                                value={ castOptionSelect(communeOptions, 'commune' ).find( item => item.value == values.commune ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(communeOptions, 'commune' ) }
                            />
                        }
                        {
                            errors.getError('commune') && <div className="invalid-feedback"> { errors.getError('commune') } </div>
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
                            value={ values.home_number }
                            onChange={handleChange}
                        />
                        {
                            errors.getError('home_number') && <div className="invalid-feedback"> { errors.getError('home_number') } </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="form-group required">
                        <label htmlFor="street">Tên Đường { values.street }</label>
                        <input type="text" id="street" placeholder="Hàng 5 - Ấp Lộc Hoà"
                            className={ hasErr("street") ? "is-invalid form-control" : "form-control" }
                            name="street"
                            value={ values.street }
                            onChange={ handleChange }
                        />
                        {
                            errors.getError('street') && <div className="invalid-feedback"> { errors.getError('street') } </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default UserPostInfomation