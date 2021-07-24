import React from "react"

const FooterApartment = props => {

    const continu = () => {
        console.log("vào continu of FooterApartment")
        props.parentCallback()
    }

    return (
        <button className="btn apartment__footer" onClick={continu}>
            Bấm để Tiếp Tục
        </button>
    )
}

export default FooterApartment