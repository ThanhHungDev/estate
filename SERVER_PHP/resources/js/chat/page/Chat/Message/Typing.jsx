import React from "react"

const Typing = props => {

    const DF_LIMIT_NAME = 20
    /// get infor from parent
    const { active } = props
    if(!active) return null

    const [ user ]               = active?.users,
          { name, id } = user
    if(name.length > DF_LIMIT_NAME){
        name = name.substring(0 , DF_LIMIT_NAME )
    }
    name = `[ ${name}...] đang nhập`

    return (
        <div id="js-typing" className="typing" channel={ id }>
            <span>{name}</span>
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
