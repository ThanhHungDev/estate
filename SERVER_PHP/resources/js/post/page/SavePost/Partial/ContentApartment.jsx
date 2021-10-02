import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Validator from "hero-validate"
import V from "../../../validator/user.content-apartment"
/// create rule for your form
Validator.setLocale(Validator.languages.vi)

const ContentApartment = forwardRef((props, ref) => {

    const [ values, setValues]   = useState({ title: "", content: "" })
    const [ touched, setTouched] = useState({})
    const [ errors, setErrors]   = useState(Validator.getEmpty())

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
        console.log( values , "usefect ")
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                
                const errors = Validator.validate( values, V.rules)
                if( errors.hasError ){
                    Object.keys(values).map((key, index) => {
                        touched[key] = true
                    })
                    setTouched(touched)
                    setValues({ ...values })
                    return false
                }else{
                    console.log("có vào đay lưu lại và next step ")
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )
    
    return(
        <div className="user-information position-relative">

            <h5 className="user-type__title pt-2 pb-4">Bạn cần nhập thông tin tiêu đề và nội dung:</h5>
            <div className="mycustom-form-group">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group required">
                            <label htmlFor="title">Tiêu đề sản phẩm</label>
                            <input type="text" id="title" name="title" placeholder="Nhập tiêu đề ... vd: Bán căn hộ xxxxxx tại dự án xxxxxx"
                                className={"form-control " + ( hasErr("title") ? "is-invalid" : ( touched['title'] && "is-valid" ) )}
                                defaultValue={ values.title }
                                onChange={handleChange}
                            />
                            { hasErr('title') && <div className="d-block invalid-feedback"> { errors.getError('title') } </div> }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group required">
                            <label htmlFor="content">Nội dung mô tả</label>
                            <textarea id="content" rows="3" name="content"
                            className={"form-control " + ( hasErr("content") ? "is-invalid" : ( touched['content'] && "is-valid" ) )}
                            placeholder="Mô tả đặc điểm bất động sản... "
                            onChange={handleChange}
                            defaultValue={ values.content }
                            ></textarea>
                            { hasErr('content') && <div className="d-block invalid-feedback"> { errors.getError('content') } </div> }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default ContentApartment