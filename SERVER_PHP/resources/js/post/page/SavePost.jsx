import React from "react"
import Apartment from "./SavePost/Apartment"

function SavePost( props ){

    const {form, history, match, category, OLD } = props
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <Apartment category={category} OLD={ OLD }/>
        default:
            return null;
    }
}


export default SavePost