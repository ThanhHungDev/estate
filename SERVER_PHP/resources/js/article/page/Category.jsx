import React, { useState } from "react"
import { Link } from "react-router-dom"


function Category({ category, CONFIG }){
    
    const [ src, setSrc ] = useState(category.background)

    const onError = () => {
        setSrc( CONFIG.image_error )
        return null;
    }
    const href = category.parent ? `/save/${category.id}` : `/category/${category.id}`
    
    return (
        <div className="categories__item">
            <Link className="categories__item-link-img" to={ href }>
                <img className="lazyload"
                    src={ CONFIG.lazyload_base64 }
                    onError={ onError }
                    data-src={src}
                    data-sdrc={src}
                    alt={ category.name } width="300" height="300"/>
            </Link>
            
            <Link to={ href }> 
                <h5 className="categories__item-link-text">{ category.name }</h5>
            </Link>
        </div>
    )
}


export default Category
