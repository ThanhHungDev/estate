import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Validator from "hero-validate"
import formatUnitHelper from "../../../../service/convert.number.stringvnd"
import V from "../../../validator/user.price-area"
/// create rule for your form
Validator.setLocale(Validator.languages.vi)

const AreaPrice = forwardRef((props, ref) => {

    const [values, setValues]   = useState({ title: "", content: "", area: "", price: "", horizontal: "", vertical: "" })
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
        let dataValues = { ...values, [event.target.name]: event.target.value }
        setValues({ ...values, ...calcAreaPrice(event.target.name, dataValues) })
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
    function renderFeedbackPrice(){
        if(values.price){
            return <div className="d-block valid-feedback"> Số tiền: { ` ${formatUnitHelper.formatNumberToDotStringVND(parseInt(values.price) || 0, "VND")} ( ${ formatUnitHelper.convertNumber2StringVND(values.price) })` }</div>
        }
        return null
    }

    function calcAreaPrice( keyName = null, xdata ){
        
        if( !keyName ){
            return xdata
        }
        let { area, horizontal, vertical } = xdata
        
        /// check exist 2 variable = empty
        if( [ area, horizontal, vertical ].filter(item => !!parseInt(item)).length < 2 ){
            return xdata
        }

        if( keyName == "area"){

            if( horizontal ){
                vertical = Math.round( parseInt( area ) / parseInt( horizontal ) )
            }else {
                horizontal = Math.round(parseInt( area ) / parseInt( vertical ))
            } 
        }else if( keyName == 'horizontal' ){
            
            if( area ){
                vertical = Math.round( parseInt( area ) / parseInt( horizontal ) )
            }else {
                area = Math.round( parseInt( horizontal ) * parseInt( vertical ) )
            } 
        }else if( keyName == 'vertical' ){

            if( area ){
                horizontal = Math.round( parseInt( area ) / parseInt( vertical ) )
            } else {
                area = Math.round( parseInt( horizontal ) * parseInt( vertical ) )
            } 
        }
        return { area: area.toString(), horizontal: horizontal.toString(), vertical: vertical.toString() }
    }
    function renderCalcAverageArea(){
        const { area, price } = values
        if( area && price ){
            let priceUnit = price / area
            if( priceUnit > 1000 ){
                priceUnit = Math.floor( priceUnit / 1000 ) * 1000 
                return <small className="form-text text-muted">khoảng { formatUnitHelper.formatNumberToDotStringVND(parseInt(priceUnit) || 0, "VND") } / m² </small>
            }
        }
        return null
    }
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
            <h5 className="user-type__title pt-2 pb-4">Bạn cần cung cấp diện tích và giá:</h5>

            <div className="mycustom-form-group">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="area">Tổng Diện tích </label>
                            <div className="unit_field unit__area">
                                <input id="area" type="number"
                                    className={"form-control " + ( hasErr("area") ? "is-invalid" : ( touched['area'] && "is-valid" ) )}
                                    name="area" defaultValue={ values.area } onChange={ handleChange }
                                />
                            </div>
                            { hasErr('area') && <div className="d-block invalid-feedback">{ errors.getError("area") }</div> }
                            { renderCalcAverageArea() }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="price">Giá </label>
                            <div className="unit_field unit__price">
                                <input id="price" type="number"
                                    className={"form-control " + ( hasErr("price") ? "is-invalid" : ( touched['price'] && "is-valid" ) )}
                                    name="price" defaultValue={ values.price } onChange={ handleChange }
                                />
                            </div>
                            { hasErr('price') && <div className="d-block invalid-feedback">{ errors.getError("price") }</div> }
                            { renderFeedbackPrice() }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="horizontal">Chiều ngang </label>
                            <div className="unit_field unit__horizontal">
                                <input id="horizontal" type="number"
                                    className={"form-control " + ( hasErr("horizontal") ? "is-invalid" : ( touched['horizontal'] && "is-valid" ) )}
                                    name="horizontal" defaultValue={ values.horizontal } onChange={ handleChange }
                                />
                            </div>
                            { hasErr('horizontal') && <div className="d-block invalid-feedback">{ errors.getError("horizontal") }</div> }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group required">
                            <label htmlFor="vertical">Chiều dài </label>
                            <div className="unit_field unit__vetical">
                                <input id="vertical" type="number"
                                    className={"form-control " + ( hasErr("vertical") ? "is-invalid" : ( touched['vertical'] && "is-valid" ) )}
                                    name="vertical" defaultValue={ values.vertical } onChange={ handleChange }
                                />
                            </div>
                            { hasErr('vertical') && <div className="d-block invalid-feedback">{ errors.getError("vertical") }</div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AreaPrice