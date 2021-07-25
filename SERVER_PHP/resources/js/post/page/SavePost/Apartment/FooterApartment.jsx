import React from "react"

const FooterApartment = props => {

    const continueStepInFooter = () => {
        console.log("vào continueStepInFooter of FooterApartment")
        props.parentCallback()
    }

    return (
        <button className="btn apartment__footer" onClick={continueStepInFooter}>
            Bấm để Tiếp Tục
        </button>
    )
}

export default FooterApartment