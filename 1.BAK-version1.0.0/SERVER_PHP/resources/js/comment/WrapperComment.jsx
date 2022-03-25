import React, { useEffect } from 'react'
import Main from './Main'

function WrapperComment(props) {
    useEffect(()=>{
        console.log("WrapperComment")
    })
    return (
        <div className="product__data">
            <div className="block">
                <h3 className="block__title"> Bình Luận </h3>
                <div className="block__data--content shadow p-3 mb-5 bg-white rounded">
                    <Main />
                </div>
        </div>
    </div>
    )
}

export default WrapperComment