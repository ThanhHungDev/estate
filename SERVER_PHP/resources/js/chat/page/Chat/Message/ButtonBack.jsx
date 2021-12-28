import React from "react"
import { Redirect } from "react-router-dom"
import { useHistory } from 'react-router-dom'


const ButtonBack = props => {
    const history = useHistory();

    const backLink = event => {
        history.push(`/`);
    }
    return <button className="btn-back-mobile" onClick={ backLink }>
        <i className="hero-icon fas fa-angle-double-left"></i>
    </button>
}

export default ButtonBack
