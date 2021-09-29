import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Validator from "hero-validate"
import formatUnitHelper from "../../../../service/convert.number.stringvnd"
import V from "../../../validator/user.price-area"
/// create rule for your form
Validator.setLocale(Validator.languages.vi)

const AreaPrice = forwardRef((props, ref) => {

    const [values, setValues]   = useState({ area: "", price: "", horizontal: "", vertical: "" })
    const [touched, setTouched] = useState({})
    const [errors, setErrors]   = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    /// add function when value change
    const handleChange = (event) => {
        event.persist()
        
        setTouched({ ...touched, [event.target.name]: true })
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    /// hook react
    useEffect(() => {
        
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                
                const errors = Validator.validate( values, V.rules)
                if( errors.hasError ){
                    Object.keys(touched).map((key, index) => {
                        touched[key] = true
                    })
                    setTouched(touched)
                    setValues({ ...values })
                    return false
                }else{
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )
    function renderFeedbackPrice(){
        if(values.price){
            return <div className="d-block valid-feedback"> Số tiền: { ` ${formatUnitHelper.formatNumberToDotStringVND(parseInt(values.price) || 0, "VND")} ( ${ formatUnitHelper.convertNumber2StringVND(values.price) })` }</div>
        }
        return null
    }
    return(
        <div className="user-information position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn cần cung cấp diện tích và giá:</h5>

            <div className="mycustom-form-group-radio">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="area">Tổng Diện tích </label>
                            <div className="unit_field unit__area">
                                <input id="area" type="number"
                                    className={ "form-control " + ( hasErr('area') ? 'is-invalid' : 'is-valid' ) }
                                    name="area" value={ values.area } onChange={ handleChange }
                                />
                            </div>
                            { errors.getError('area') && <div className="invalid-feedback">{ errors.getError("area") }</div> }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="price">Giá </label>
                            <div className="unit_field unit__price">
                                <input id="price" type="number"
                                    className={ "form-control " + ( hasErr('price') ? 'is-invalid' : 'is-valid' ) }
                                    name="price" value={ values.price } onChange={ handleChange }
                                />
                            </div>
                            { errors.getError('price') && <div className="invalid-feedback">{ errors.getError("price") }</div> }
                            { renderFeedbackPrice() }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="horizontal">Chiều ngang </label>
                            <div className="unit_field unit__horizontal">
                                <input id="horizontal" type="number"
                                    className={ "form-control " + ( hasErr('horizontal') ? 'is-invalid' : 'is-valid' ) }
                                    name="horizontal" value={ values.horizontal } onChange={ handleChange }
                                />
                            </div>
                            { errors.getError('horizontal') && <div className="invalid-feedback">{ errors.getError("horizontal") }</div> }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="vertical">Chiều dài </label>
                            <div className="unit_field unit__vetical">
                                <input id="vertical" type="number"
                                    className={ "form-control " + ( hasErr('vertical') ? 'is-invalid' : 'is-valid' ) }
                                    name="vertical" value={ values.vertical } onChange={ handleChange }
                                />
                            </div>
                            { errors.getError('vertical') && <div className="invalid-feedback">{ errors.getError("vertical") }</div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AreaPrice