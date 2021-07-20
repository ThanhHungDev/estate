import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

import HeaderApartment from "./Apartment/HeaderApartment"

/// lưu căn hộ chung cư
function Apartment( props ){

    const [state, updateState] = useState({})
    const transitions = {}
    // https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/transitions.less

    // Do something on step change
    // const onStepChange = (stats) => {
    //     console.log(stats);
    // };
    // https://github.com/jcmcneal/react-step-wizard
    // <h2>Step {this.props.currentStep}</h2>
    // <p>Total Steps: {this.props.totalSteps}</p>
    // <p>Is Active: {this.props.isActive}</p>
    // <!-- Functions -->
    // <p><button onClick={this.props.previousStep}>Previous Step</button></p>
    // <p><button onClick={this.props.nextStep}>Next Step</button></p>
    // <p><button onClick={()=>this.props.goToStep(2)}>Step 2</button></p>
    // <p><button onClick={this.props.firstStep}>First Step</button></p>
    // <p><button onClick={this.props.lastStep}>Last Step</button></p>

    const setInstance = SW => updateState({
        ...state,
        SW,
    });

    useEffect(()=>{
        console.log(state, "mới chạy")
    })
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state
    
    return (
        <div>
            { SW && <HeaderApartment SW={SW} /> }
            
            <StepWizard
                // onStepChange={onStepChange}
                instance={setInstance}
            >
                <Step1 />
                <Step2 />
                <Step3 />
            </StepWizard>
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