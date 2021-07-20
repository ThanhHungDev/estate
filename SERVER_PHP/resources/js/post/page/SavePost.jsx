import React from "react"
import { Switch, Route } from 'react-router-dom'

import Abort404 from "./404"
import GeneralSavePost from "./SavePost/GeneralSavePost"

function SavePost( props ){

    const {form, history, match, category } = props
    console.log(match, category )
    
    return (
                        
        <div className="wrapper__save-post">
            <div> {  category.title }</div>
        </div>
    )
}


export default SavePost