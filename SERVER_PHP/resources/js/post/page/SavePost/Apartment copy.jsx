import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

import HeaderApartment from "./Apartment/HeaderApartment"
import FooterApartment from "./Apartment/FooterApartment"
import RolePost from "./Partial/RolePost"


/// lưu căn hộ chung cư
function Apartment( props ){

    const [state, updateState] = useState({})
    let refRolePost = React.createRef()

    /// khi component con gọi lên cha để update dữ liệu
    const updateForm = fields => {

        console.log(this.state, {
            ...state,
            ...fields,
        })

        updateState({
            ...state,
            ...fields,
        })
    };

    // Do something on step change
    const onStepChange = (stats) => {
        console.log(state, stats);
        updateState( {
            ...stats,
            ...state,
        } )
    }

    const setInstance = SW => updateState({
        ...state,
        SW,
    })

    const continueStep = (childData) => {
        console.log("vào continueStep")

        refRolePost.submitStepRolePost()
        // SW.nextStep()
    }
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state
    
    return (
        <div className="apartment">
            { SW && <HeaderApartment SW={SW} /> }
            
            <div className="apartment__wrapper">
                <StepWizard
                    isHashEnabled
                    onStepChange={onStepChange}
                    instance={setInstance}
                >
                    <RolePost ref={ins => { refRolePost = ins }}  saveFieldsToParent={updateForm}/>
                    <Step1 />
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