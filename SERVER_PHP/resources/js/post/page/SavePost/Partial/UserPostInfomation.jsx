import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import V from "../../../validator/user.infor"
import SelectLocation from '../SelectLocation'

Validator.setLocale(Validator.languages.vi)
/// custom message for your form
Validator.setMessages(V.messages)

const UserPostInfomation = forwardRef((props, ref) => {

    const refLocation = useRef()

    const { AUTH, CONFIG } = props


    /// setting giá trị mặc định
    const [ values, setValues ] = useState({
        name        : AUTH.name,
        phone_verify: AUTH.phone_verify,
        province    : AUTH.province_id ?? 0,
        district    : AUTH.district_id ?? 0,
        commune     : AUTH.commune_id ?? 0,
        home_number : AUTH.home_number ?? '',
        street      : AUTH.street ?? '',
    })
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }

    useEffect( () => {

        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ] )

    const handleChange = (event) => {
        
        if(event.persist){
            event.persist()
        }

        setValues({ ...values, [event.target.name]: event.target.value })
        setTouched({ ...touched, [event.target.name]: true })
    }

    const getDataSelectChange = data => {
        setValues({ ...values, ...data })
    }

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                console.log( values , "validateFromStep")
                refLocation.current.validateData()
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
            <SelectLocation ref={ refLocation }  CONFIG={CONFIG} OLD={AUTH} passingDataParent={ getDataSelectChange } />
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="form-group required">
                        <label htmlFor="home_number">Số Nhà </label>
                        <input type="text" id="home_number" placeholder="0674"
                            className={"form-control " + ( hasErr("home_number") ? "is-invalid" : ( touched['home_number'] && "is-valid" ) )}
                            name="home_number"
                            value={ values.home_number }
                            onChange={handleChange}
                        />
                        { hasErr('home_number') && <div className="invalid-feedback"> { errors.getError('home_number') } </div> }
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="form-group required">
                        <label htmlFor="street">Tên Đường</label>
                        <input type="text" id="street" placeholder="Hàng 5 - Ấp Lộc Hoà"
                            className={"form-control " + ( hasErr("street") ? "is-invalid" : ( touched['street'] && "is-valid" ) )}
                            name="street"
                            value={ values.street }
                            onChange={ handleChange }
                        />
                        { hasErr('street') && <div className="invalid-feedback"> { errors.getError('street') } </div> }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default UserPostInfomation