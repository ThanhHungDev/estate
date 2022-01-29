import React from "react"
import { useParams } from "react-router-dom"

function SavePost({ CONFIG, CATEGORIES, AUTH, OLD }){
    const { id } = useParams()
    const category = CATEGORIES.find( cate => cate.id = id )
    
    switch (category.slug) {
        // case 'can-ho-chung-cu':
        //     return <Apartment category={category} OLD={ OLD }/>
        // case 'nha-rieng':
        //     return <DwellingHouse category={category} OLD={ OLD }/>
        default:
            return <div>lưu mới bài viết của { category.name }</div>
    }
}


export default SavePost