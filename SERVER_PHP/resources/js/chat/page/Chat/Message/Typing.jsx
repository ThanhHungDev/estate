import React from "react"

const Typing = props => {

    const { active } = props
    if(!active) return null
    const [ user ] = active?.users

    return (
        <div id="js-typing" className="typing" channel={ active?._id }>
            <span>[ <strong className="typing__named">{ user?.name }</strong> ] đang nhập </span>
            <div className="ticontainer">
                <div className="tiblock">
                    <div className="tidot"></div>
                    <div className="tidot"></div>
                    <div className="tidot"></div>
                </div>
            </div>
        </div>
    );
}

export default Typing
