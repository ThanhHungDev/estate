import React from 'react'
import { connect } from 'react-redux'
import LoginDefault from './Login/LoginDefault'
import LoginFast from './Login/LoginFast'

function Login( props ){

    const { CONFIG, device } = props
    return (
        <div className="select__login" className="page page__login" style={{ minHeight: (device.calcHeightSubtractHeader) + "px" }}>
            <div className="page__login__bg"></div>
            <div className="page__login__form form__chat page__login--faster">
                <div className="row-hero position-relative">
                    <LoginFast CONFIG={ CONFIG } />
                    <div className="divition"></div>
                    <LoginDefault CONFIG={ CONFIG } />
                </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        device: state.device,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(Login)

