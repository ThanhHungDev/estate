import React from "react"
import Apartment from "./SavePost/Apartment"
import DwellingHouse from "./SavePost/DwellingHouse"

function SavePost( props ){

    const {form, history, match, category, OLD } = props
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <Apartment category={category} OLD={ OLD }/>
        case 'nha-rieng':
            return <DwellingHouse category={category} OLD={ OLD }/>
        default:
            return null;
    }
}


export default SavePost