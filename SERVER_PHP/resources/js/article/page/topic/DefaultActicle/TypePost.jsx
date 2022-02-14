import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'


const TypePost = forwardRef((props, ref) => {
    const { CONFIG } = props
    /// init state
    const [ posttype, setPosttype ] = useState( props.OLD.posttype || CONFIG.CONSTANT.POST_TYPE.SALE )
    const [ isValid, setIsValid ] = useState( null )
    

    function onChangeRadio(e){

        setPosttype(e.currentTarget.value)
        setIsValid( null )
    }
    

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                if( !posttype ){
                    /// có lỗi
                    setIsValid( 1 )
                    return false
                }else{
                    setIsValid( null )
                    return posttype
                }
            }
        }),
    )

    return(
        <div className="user-type position-relative pb-4">
            <h5 className="user-type__title pt-2 pb-4">Bạn đăng bài để: </h5>
            {
                isValid && 
                <div className="alert alert-danger" role="alert"> Bạn cần chọn kiểu đăng bài </div>
            }
            <label htmlFor="sale" className="container__radio d-block"> Bạn đăng bài <span className="text-color-pink"> để bán </span>
                <input id="sale" type="radio" value={CONFIG.CONSTANT.POST_TYPE.SALE} checked={ posttype == CONFIG.CONSTANT.POST_TYPE.SALE } onChange={onChangeRadio} />
                <span className="checkmark"></span>
            </label>
            <label htmlFor="buy" className="container__radio d-block"> Bạn đăng bài <span className="text-color-blue-grey"> để mua </span> 
                <input id="buy" type="radio" value={CONFIG.CONSTANT.POST_TYPE.BUY} checked={ posttype == CONFIG.CONSTANT.POST_TYPE.BUY } onChange={onChangeRadio} />
                <span className="checkmark"></span>
            </label>
            <label htmlFor="lease" className="container__radio d-block"> Bạn đăng bài <span className="text-color-pink"> cho thuê </span>  
                <input id="lease" type="radio" value={CONFIG.CONSTANT.POST_TYPE.LEASE} checked={ posttype == CONFIG.CONSTANT.POST_TYPE.LEASE } onChange={onChangeRadio}/>
                <span className="checkmark"></span>
            </label>
            <label htmlFor="rent" className="container__radio d-block"> Bạn đăng bài <span className="text-color-blue-grey"> tìm nơi thuê </span>
                <input id="rent" type="radio" value={CONFIG.CONSTANT.POST_TYPE.RENT} checked={ posttype == CONFIG.CONSTANT.POST_TYPE.RENT } onChange={onChangeRadio}/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
})

export default TypePost