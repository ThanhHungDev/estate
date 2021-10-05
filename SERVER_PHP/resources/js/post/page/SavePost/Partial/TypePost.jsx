import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'


const TypePost = forwardRef((props, ref) => {
    const { CONFIG } = props
    /// init state
    const [ type, setType ] = useState( props.OLD.type || CONFIG.CONSTANT.POST_TYPE.SALE )
    const [ isValid, setIsValid ] = useState( null )
    

    function onChangeRadio(e){

        setType(e.currentTarget.value)
        setIsValid( null )
    }
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                if( !type ){
                    /// có lỗi
                    setIsValid( 1 )
                    return false
                }else{
                    setIsValid( null )
                    return type
                }
            }
        }),
    )

    return(
        <div className="user-type position-relative">
            <h5 className="user-type__title pt-2 pb-4">Bạn đăng bài để: </h5>
            {
                isValid && 
                <div className="alert alert-danger" role="alert"> Bạn cần chọn kiểu đăng bài </div>
            }
            <label htmlFor="sale" className="container__radio d-block"> Bạn đăng bài <span className="text-color-pink"> để bán </span>
                <input id="sale" name='type' type="radio" value={CONFIG.CONSTANT.POST_TYPE.SALE} checked={ type == CONFIG.CONSTANT.POST_TYPE.SALE } onChange={onChangeRadio} />
                <span className="checkmark"></span>
            </label>
            <label htmlFor="buy" className="container__radio d-block"> Bạn đăng bài <span className="text-color-blue-grey"> để mua </span> 
                <input id="buy" name='type' type="radio" value={CONFIG.CONSTANT.POST_TYPE.BUY} checked={ type == CONFIG.CONSTANT.POST_TYPE.BUY } onChange={onChangeRadio} />
                <span className="checkmark"></span>
            </label>
            <label htmlFor="lease" className="container__radio d-block"> Bạn đăng bài <span className="text-color-pink"> cho thuê </span>  
                <input id="lease" name='type' type="radio" value={CONFIG.CONSTANT.POST_TYPE.LEASE} checked={ type == CONFIG.CONSTANT.POST_TYPE.LEASE } onChange={onChangeRadio}/>
                <span className="checkmark"></span>
            </label>
            <label htmlFor="rent" className="container__radio d-block"> Bạn đăng bài <span className="text-color-blue-grey"> tìm nơi thuê </span>
                <input id="rent" name='type' type="radio" value={CONFIG.CONSTANT.POST_TYPE.RENT} checked={ type == CONFIG.CONSTANT.POST_TYPE.RENT } onChange={onChangeRadio}/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
})

export default TypePost