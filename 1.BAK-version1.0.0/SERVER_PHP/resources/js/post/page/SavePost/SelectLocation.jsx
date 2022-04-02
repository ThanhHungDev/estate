import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"
import Validator from "hero-validate"
import Select from 'react-select'
import V from "../../validator/user.location"

const SelectLocation = forwardRef((props, ref) => {

    const { OLD } = props
    const DISTRICT_NULL = [ {id: 0, text: 'Chọn Quận / Huyện'} , ... props.locations.district]
    const COMMUNE_NULL  = [ {id: 0, text: 'Chọn Phường, xã, thị trấn'} , ... props.locations.commune]

    console.log(OLD, "OLD")
    /// init state
    const [ districts, setDistricts ] = useState(DISTRICT_NULL)
    const [ communes, setCommunes ]   = useState(COMMUNE_NULL)

    /// setting giá trị mặc định
    const [ values, setValues ] = useState({
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
        setErrors( Validator.validate(values, V.rules) )
    }, [ values ] )

    function castOptionSelect(locations, targetName = 'commune' ){
        return locations.map( item => { return { value: item.id, label: item.text, currentTarget: { value: item.id }, target: { name: targetName, value: item.id } }})
    }

    function onDistrictChange(e){

        const districtValue   = e.currentTarget.value

        if( districtValue == 0 ){
            /// set cho cái communes về mặc định như ban đầu
            setCommunes(COMMUNE_NULL)
            setValues({ ... values, district: 0, commune: 0 })
        }else 
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

    const districtOptions = [ ... districts ]
    const communeOptions  = [ ... communes ].filter( item => !item.district || item.district ==  values.district )

    
    return (
        <div className="row">
            <div className="col-12 col-sm-6">
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
            <div className="col-12 col-sm-6">
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
