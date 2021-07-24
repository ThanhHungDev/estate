import React, { useState, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

import HeaderApartment from "./Apartment/HeaderApartment"
import FooterApartment from "./Apartment/FooterApartment"
import UserPostInfomation from "./Partial/UserPostInfomation"
import TypePost from "./Partial/TypePost"


/// lưu căn hộ chung cư
function Apartment( props ){

    const [ form, setForm ] = useState({})
    const [ state, updateState] = useState({})

    // let refRolePost = React.createRef()
    const refType = useRef()

    // Do something on step change
    const onStepChange = (stats) => {

        console.log(form, "onStepChange đã cập nhật dữ liệu mới");
        updateState( {
            ...stats,
            ...state,
            ...form
        } )
    }

    const setInstance = SW => updateState({
        ...form,
        ...state,
        SW,
    })

    const continueStep = (childData) => {
        

        // const type = refType.validateFromStep()
        console.log( "vào continueStep ==> nhảy vào thằng con validate nếu thành công thì cho next step")
        refType.current.validateFromStep()
        // if( SW.currentStep == 2 ){
        //     /// validate đúng thì mới đc next step
        //     // refRolePost.submitStepRolePost()
        // }else{
        //     SW.nextStep()
        // }
        
    }
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state
    const { CONFIG } = props
    return (
        <div className="apartment">
            { SW && <HeaderApartment SW={SW} /> }
            
            <div className="apartment__wrapper">
                <StepWizard
                    // isHashEnabled
                    onStepChange={onStepChange}
                    instance={setInstance}
                >
                    <TypePost ref={ refType } CONFIG={CONFIG}/>
                    <UserPostInfomation />
                    
                    <Step2 />
                    <Step3 />
                </StepWizard>
            </div>
            <FooterApartment parentCallback={continueStep}/>
        </div>
    )
}

function Step1(props){

    return <div>
        <p>step 1<button onClick={props.nextStep}>Next Step</button></p>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
    </div>
    
}
function Step2(props){

    return <div>
        <p>step 2<button onClick={props.nextStep}>Next Step</button></p>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
    </div>
}
function Step3(props){

    return <div>
        <p>step 3<button onClick={props.nextStep}>Next Step</button></p>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
    </div>
}


let mapStateToProps = (state) => {
    return {
        CATEGORIES: state.categories,
        CONFIG: state.config
    }
}
export default connect(mapStateToProps)(Apartment)