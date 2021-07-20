import React from "react"
import { Switch, Route } from 'react-router-dom'

import Abort404 from "./404"
import Apartment from "./SavePost/Apartment"

function SavePost( props ){

    const {form, history, match, category } = props
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <Apartment category={category} />
        default:
            return null;
    }
}


export default SavePost