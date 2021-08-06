import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Validator from "hero-validate"
import formatUnitHelper from "../../../../service/convert.number.stringvnd"
/// create rule for your form
const rules = {
    area: "required|min:2|max:20",
    price: {
        required: true,
        max: 16,
        mycustom: function (value) {
            const number = parseInt(value.replace(/[^0-9]/g, "")) || 0
            if (number % 1000 != 0 ) {
                return "tiền phải là bội số của 1000vnd"
            }
            return true
        },
    },
    horizontal: "required|min:1|max:20",
    vertical: "required|min:1|max:20"
}
Validator.setLocale(Validator.languages.vi)
/// custom message for your form
// Validator.setMessages({
//     area: "Diện tí",
//     password: {
//         min: "sdfsdf password min"
//     }
// })

const AreaPrice = forwardRef((props, ref) => {

    const [values, setValues] = useState({ area: "", price: "", horizontal: "", vertical: "" })
    const [touched, setTouched] = useState({area: false, price: false, horizontal: false, vertical: false })
    const [errors, setErrors] = useState(Validator.getEmpty())

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
        
        setErrors( Validator.validate(values, rules) )
        console.log( "values1", touched )
    }, [values])
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                
                const errors = Validator.validate( values, rules)
                if( errors.hasError ){
                    
                    Object.keys(touched).map(function(key, index) {
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
    return(
        <div className="user-information position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn cần cung cấp diện tích và giá:</h5>

            <div className="mycustom-form-group-radio">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="area">Tổng Diện tích </label>
                            <div className="unit_field unit__area">
                                <input
                                    id="area"
                                    type="number"
                                    className={ 
                                        touched["area"]
                                        ? errors.isError("area") ? "is-invalid form-control" : "is-valid form-control"
                                        : "form-control"}
                                    name="area"
                                    value={ values.area }
                                    onChange={ handleChange }
                                />
                            </div>
                            { hasErr("area") && (
                                <div className="d-block invalid-feedback">{ errors.getError("area") }</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="price">Giá </label>
                            <div className="unit_field unit__price">
                                <input
                                    id="price"
                                    type="number"
                                    className={ 
                                        touched["price"]
                                        ? errors.isError("price") ? "is-invalid form-control" : "is-valid form-control"
                                        : "form-control"}
                                    name="price"
                                    value={ values.price }
                                    onChange={ handleChange }
                                />
                            </div>
                            { hasErr("price") && (
                                <div className="d-block invalid-feedback">{ errors.getError("price") }</div>
                            )}
                            {
                                values.price
                                ? <div className="d-block valid-feedback">
                                    Số tiền: 
                                    {
                                    ` ${formatUnitHelper.formatNumberToDotStringVND(parseInt(values.price) || 0, "VND")} ( ${ formatUnitHelper.convertNumber2StringVND(values.price) })`
                                    }</div>
                                : null
                            }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="price">Chiều ngang </label>
                            <div className="unit_field unit__horizontal">
                                <input
                                    id="horizontal"
                                    type="number"
                                    className={ 
                                        touched["horizontal"]
                                        ? errors.isError("horizontal") ? "is-invalid form-control" : "is-valid form-control"
                                        : "form-control"}
                                    name="horizontal"
                                    value={ values.horizontal }
                                    onChange={ handleChange }
                                />
                            </div>
                            { hasErr("horizontal") && (
                                <div className="d-block invalid-feedback">{ errors.getError("horizontal") }</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="price">Chiều dài </label>
                            <div className="unit_field unit__vetical">
                                <input
                                    id="vertical"
                                    type="number"
                                    className={ 
                                        touched["vertical"]
                                        ? errors.isError("vertical") ? "is-invalid form-control" : "is-valid form-control"
                                        : "form-control"}
                                    name="vertical"
                                    value={ values.vertical }
                                    onChange={ handleChange }
                                />
                            </div>
                            { hasErr("vertical") && (
                                <div className="d-block invalid-feedback">{ errors.getError("vertical") }</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AreaPrice