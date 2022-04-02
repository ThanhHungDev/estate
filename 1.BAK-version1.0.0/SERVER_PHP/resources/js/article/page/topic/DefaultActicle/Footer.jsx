import React from "react"

const Footer = ({ isSubmit , continueStepCallback, fetchApiSave }) => {

    if( isSubmit ){
        return (
            <div className="footer__fixed-step">
                <button className="btn apartment__footer" onClick={ () => fetchApiSave() }>Đăng Bài</button>
            </div>
        )
    }

    return (
        <div className="footer__fixed-step">
            <button className="btn apartment__footer" onClick={ () => continueStepCallback() }>
                Bấm để Tiếp Tục
            </button>
        </div>
    )
}

export default Footer