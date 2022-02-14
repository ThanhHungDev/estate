import React from "react"
import { useParams } from "react-router-dom"
import DefaultActicle from "./topic/DefaultActicle"

function NewArticle(props){
    const { CONFIG, CATEGORIES, AUTH, OLD } = props
    const { id } = useParams()
    const category = CATEGORIES.find( cate => cate.id == id )
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <DefaultActicle category={category} { ...props }/>
        // case 'nha-rieng':
        //     return <DwellingHouse category={category} OLD={ OLD }/>
        default:
            return <DefaultActicle category={category} { ...props }/>
    }
}


export default NewArticle