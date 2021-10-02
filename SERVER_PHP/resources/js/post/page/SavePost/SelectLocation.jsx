import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"
import Validator from "hero-validate"
import Select from 'react-select'
import locationAPI from "../../../service/location.api"
import V from "../../validator/user.location"
import { setterLocation } from "../../../action/index"

const SelectLocation = forwardRef((props, ref) => {

    const { OLD } = props
    
    const PROVINCE_NULL = [ {id: 0, text: 'Chọn Tỉnh Thành'} ]
    const DISTRICT_NULL = [ {id: 0, text: 'Chọn Quận / Huyện'} ]
    const COMMUNE_NULL  = [ {id: 0, text: 'Chọn Phường, xã, thị trấn'} ]

    /// init state
    const [ provinces, setProvinces ] = useState(PROVINCE_NULL)
    const [ districts, setDistricts ] = useState(DISTRICT_NULL)
    const [ communes, setCommunes ]   = useState(COMMUNE_NULL)

    /// setting giá trị mặc định
    const [ values, setValues ] = useState({
        province: OLD.province_id ?? 0,
        district: OLD.district_id ?? 0,
        commune : OLD.commune_id ?? 0
    })
    const [touched, setTouched] = useState({})
    const [errors, setErrors]   = useState(Validator.getEmpty())

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
            
            if(props.locations && props.locations.province ){
                const newProvinces = [ ...provinces, ... props.locations.province ]
                callback ? callback(newProvinces) : setProvinces(newProvinces)
            }else{
                /// call api get province
                locationAPI.getProvinces()
                .then( response => {
                    const { data } = response
                    const newProvinces = [ ...provinces, ... data ]
                    // props.dispatch(setterLocation(newProvinces, 'province'))
                    callback ? callback(newProvinces) : setProvinces(newProvinces)
                })
                .catch(error => {
                    console.log("ERROR:: ",error)
                });
            }
        }
    }

    function callApiDistrict(callback){
        if( districts.length <= 1 ){
            if(props.locations && props.locations.district ){
                const newDistricts = [ ...districts, ... props.locations.district ]
                callback ? callback(newDistricts) : setDistricts(newDistricts)
            }else{
                /// chưa fetch api bao giờ thì fetch thôi
                locationAPI.getDistricts()
                .then( response => {
                    const { data } = response
                    const newDistricts = [ ...districts, ... data ]
                    props.dispatch(setterLocation(data, 'district'))
                    callback ? callback(newDistricts) : setDistricts(newDistricts)
                })
                .catch(error => {
                    console.log("ERROR:: locationAPI.getDistricts-- ",error)
                })
            }
        }
    }
    function callApiCommune(callback){
        if( communes.length <= 1 ){
            if(props.locations && props.locations.commune ){
                const newCommunes = [ ...communes, ... props.locations.commune ]
                callback ? callback(newCommunes) : setCommunes(newCommunes)
            }else{
                /// chưa fetch api bao giờ thì fetch thôi
                locationAPI.getCommunes()
                .then( response => {
                    const { data } = response
                    const newCommunes = [ ...communes, ... data ]
                    props.dispatch(setterLocation(data, 'commune'))
                    callback ? callback(newCommunes) : setCommunes(newCommunes)
                })
                .catch(error => {
                    console.log("ERROR:: locationAPI.getCommunes-- ",error)
                })
            }
            
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

        /// truyền data ra component cha
        props.passingDataParent({ 
            ...values, 
            [event.target.name]: event.target.value, 
        })
    }

    useImperativeHandle(
        ref,
        () => ({
            validateData(){
                
                const errors = Validator.validate( values, V.rules)
                if( errors.hasError ){
                    Object.keys(values).map((key, index) => {
                        touched[key] = true
                    })
                    setTouched(touched)
                    setValues({ ...values })
                    return false
                }else{
                    console.log("có vào đay lưu lại và next step rong SelectLocation")
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )


    const provinceOptions = [ ... provinces ]
    const districtOptions = [ ... districts ].filter( item => !item.province || item.province ==  values.province )
    const communeOptions  = [ ... communes ].filter( item => !item.district || item.district ==  values.district )

    
    return (
        <div className="row">
            <div className="col-12 col-sm-4">
                <div className="form-group required">
                    <label htmlFor="province"> Tỉnh Thành </label>
                    {
                        provinceOptions.length <= 1 && values.province
                        ? <input className="form-control" defaultValue={ OLD.province.text } readOnly />  /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                        : <Select 
                            id="province" 
                            name='province'
                            className={ " " + ( hasErr('province') && 'is-invalid' ) }
                            value={ castOptionSelect(provinceOptions, 'province' ).find( item => item.value == values.province ) }
                            onChange={ handleChange }
                            options={ castOptionSelect(provinceOptions, 'province' ) } 
                        />
                    }
                    { hasErr('province') && <div className="invalid-feedback"> { errors.getError('province') } </div>  }
                </div>
            </div>
            <div className="col-12 col-sm-4">
                <div className="form-group required">
                    <label htmlFor="district">Quận / Huyện</label>
                    {
                        districtOptions.length <= 1 && values.district
                        ? <input className="form-control" defaultValue={ OLD.district.text } readOnly /> /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                        : <Select 
                            id="district" 
                            name='district'
                            className={ " " + ( hasErr('district') && 'is-invalid' ) }
                            value={ castOptionSelect(districtOptions, 'district' ).find( item => item.value == values.district ) }
                            onChange={ handleChange }
                            options={ castOptionSelect(districtOptions, 'district' ) }
                        />
                    }
                    { hasErr('district') && <div className="invalid-feedback"> { errors.getError('district') } </div>  }
                </div>
            </div>
            <div className="col-12 col-sm-4">
                <div className="form-group required">
                    <label htmlFor="commune">Phường, Xã, Thị Trấn</label>
                    {
                        communes.length <= 1 && values.commune
                        ? <input className="form-control" defaultValue={ OLD.commune.text } readOnly />  /// thẻ input này chỉ để load ra dữ liệu cho người dùng thấy trước thôi
                        : <Select 
                            id="commune" 
                            name='commune'
                            className={ " " + ( hasErr('commune') && 'is-invalid' ) }
                            value={ castOptionSelect(communeOptions, 'commune' ).find( item => item.value == values.commune ) }
                            onChange={ handleChange }
                            options={ castOptionSelect(communeOptions, 'commune' ) }
                        />
                    }
                    { hasErr('commune') && <div className="invalid-feedback"> { errors.getError('commune') } </div> }
                </div>
            </div>
        </div>
    )
})



let mapStateToProps = (state) => {
    return {
        locations: state.location
    }
}
export default connect( mapStateToProps, null, null, { forwardRef: true })(SelectLocation)
