import React from "react"

const FooterApartment = props => {

    const continueStepInFooter = () => {
        props.parentCallback()
    }
    const fetchApiSaveFooter = () => {
        props.fetchApiSave()
    }
    if( props.currentStep == 7 ){
        return (
            <div className="footer__fixed-step">
                <button className="btn apartment__footer" onClick={fetchApiSaveFooter}>
                    Gọi api nè
                </button>
            </div>
        )
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