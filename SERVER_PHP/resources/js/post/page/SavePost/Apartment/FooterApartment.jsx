import React from "react"

const FooterApartment = props => {

    const continueStepInFooter = () => {
        console.log("vào continueStepInFooter of FooterApartment")
        props.parentCallback()
    }

    return (
        <div className="footer__fixed-step">
            <button className="btn apartment__footer" onClick={continueStepInFooter}>
                Bấm để Tiếp Tục
            </button>
        </div>
    )
}

export default FooterApartment