import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Validator from "hero-validate"
import formatUnitHelper from "../../../../service/convert.number.stringvnd"
import V from "../../../validator/user.price-area"
import Select from 'react-select'
/// create rule for your form
Validator.setLocale(Validator.languages.vi)
Validator.setMessages(V.messages)

const OrtherInfor = forwardRef((props, ref) => {

    const { OLD } = props

    const DIRECTIONS = Object.keys(props.CONFIG.CONSTANT.DIRECTION).map((key, index) => { return { id: props.CONFIG.CONSTANT.DIRECTION[key]?.VALUE, text: props.CONFIG.CONSTANT.DIRECTION[key]?.TEXT } })
    const NEGOTIATES = Object.keys(props.CONFIG.CONSTANT.NEGOTIATE).map((key, index) => { return { id: props.CONFIG.CONSTANT.NEGOTIATE[key]?.VALUE, text: props.CONFIG.CONSTANT.NEGOTIATE[key]?.TEXT } })
    const ROOMS      = Object.keys(props.CONFIG.CONSTANT.ROOM).map((key, index) => { return { id: props.CONFIG.CONSTANT.ROOM[key]?.VALUE, text: props.CONFIG.CONSTANT.ROOM[key]?.TEXT } })
    const WCS        = Object.keys(props.CONFIG.CONSTANT.WC).map((key, index) => { return { id: props.CONFIG.CONSTANT.WC[key]?.VALUE, text: props.CONFIG.CONSTANT.WC[key]?.TEXT } })
    const BATHROOMS  = Object.keys(props.CONFIG.CONSTANT.BATHROOM).map((key, index) => { return { id: props.CONFIG.CONSTANT.BATHROOM[key]?.VALUE, text: props.CONFIG.CONSTANT.BATHROOM[key]?.TEXT } })
    
    const [ values, setValues ]   = useState({ 
        direction        : OLD.direction ?? props.CONFIG.CONSTANT.DIRECTION.DEFAULT.VALUE,
        direction_balcony: OLD.direction_balcony ?? props.CONFIG.CONSTANT.DIRECTION.DEFAULT.VALUE,
        negotiate        : OLD.negotiate ?? props.CONFIG.CONSTANT.NEGOTIATE.YES.VALUE,
        room             : OLD.room ?? props.CONFIG.CONSTANT.ROOM.DEFAULT.VALUE,
        wc               : OLD.wc ?? props.CONFIG.CONSTANT.WC.DEFAULT.VALUE,
        bathroom         : OLD.bathroom ?? props.CONFIG.CONSTANT.BATHROOM.DEFAULT.VALUE,
    })
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ]   = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    /// add function when value change
    const handleChange = (event) => {
        
        if(event.persist){
            event.persist()
        }

        setValues({ ...values, [event.target.name]: event.target.value })
        setTouched({ ...touched, [event.target.name]: true })
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
    function castOptionSelect(options, targetName = 'direction' ){
        return options.map( item => { return { value: item.id, label: item.text, currentTarget: { value: item.id }, target: { name: targetName, value: item.id } }})
    }

    return(
        <div className="user-information position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn nên cung cấp thông tin thêm <span className="text-color-warning">( Không bắt buộc )</span>:</h5>

            <div className="mycustom-form-group">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="direction">Hướng cửa chính </label>
                            <Select 
                                id="direction" 
                                name='direction'
                                className={ " " + ( hasErr('direction') && 'is-invalid' ) }
                                value={ castOptionSelect(DIRECTIONS, 'direction').find( item => item.value == values.direction ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(DIRECTIONS, 'direction') }
                            />
                            { hasErr('direction') && <div className="d-block invalid-feedback">{ errors.getError("direction") }</div> }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="direction_balcony">Hướng cửa sổ </label>
                            <Select 
                                id="direction_balcony" 
                                name='direction_balcony'
                                className={ " " + ( hasErr('direction_balcony') && 'is-invalid' ) }
                                value={ castOptionSelect(DIRECTIONS, 'direction_balcony').find( item => item.value == values.direction_balcony ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(DIRECTIONS, 'direction_balcony') }
                            />
                            { hasErr('direction_balcony') && <div className="d-block invalid-feedback">{ errors.getError("direction_balcony") }</div> }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="negotiate"> Thương lượng </label>
                            <Select 
                                id="negotiate" 
                                name='negotiate'
                                className={ " " + ( hasErr('negotiate') && 'is-invalid' ) }
                                value={ castOptionSelect(NEGOTIATES, 'negotiate').find( item => item.value == values.negotiate ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(NEGOTIATES, 'negotiate') }
                            />
                            { hasErr('negotiate') && <div className="d-block invalid-feedback">{ errors.getError("negotiate") }</div> }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="vertical"> Số phòng ngủ </label>
                            <Select 
                                id="room" 
                                name='room'
                                className={ " " + ( hasErr('room') && 'is-invalid' ) }
                                value={ castOptionSelect(ROOMS, 'room').find( item => item.value == values.room ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(ROOMS, 'room') }
                            />
                            { hasErr('room') && <div className="d-block invalid-feedback">{ errors.getError("room") }</div> }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="vertical"> Số nhà vệ sinh </label>
                            <Select 
                                id="wc" 
                                name='wc'
                                className={ " " + ( hasErr('wc') && 'is-invalid' ) }
                                value={ castOptionSelect(WCS, 'wc').find( item => item.value == values.wc ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(WCS, 'wc') }
                            />
                            { hasErr('wc') && <div className="d-block invalid-feedback">{ errors.getError("wc") }</div> }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="vertical"> Số nhà tắm </label>
                            <Select 
                                id="bathroom" 
                                name='bathroom'
                                className={ " " + ( hasErr('bathroom') && 'is-invalid' ) }
                                value={ castOptionSelect(BATHROOMS, 'bathroom').find( item => item.value == values.bathroom ) }
                                onChange={ handleChange }
                                options={ castOptionSelect(BATHROOMS, 'bathroom') }
                            />
                            { hasErr('bathroom') && <div className="d-block invalid-feedback">{ errors.getError("bathroom") }</div> }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
})

export default OrtherInfor