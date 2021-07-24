import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'


const UserPostInfomation = forwardRef((props, ref) => {
    /// init state

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                // if( !type ){
                //     /// có lỗi
                //     setIsValid( 1 )
                // }else{
                //     setIsValid( null )
                //     props.nextStep()
                // }
            }
        }),
    )
    return(
        <div className="user-type position-relative">
            nhập thông tin user UserPostInfomation
        </div>
    )
})

export default UserPostInfomation