import React from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

/// lưu căn hộ chung cư
function Apartment( props ){

    const { CATEGORIES, CONFIG } = props
    const {form, history, match} = props

    console.log(match)
    
    return (
        <div className="">
            lưu căn hộ chung cư
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CATEGORIES: state.categories,
        CONFIG: state.config
    }
}
export default connect(mapStateToProps)(Apartment)