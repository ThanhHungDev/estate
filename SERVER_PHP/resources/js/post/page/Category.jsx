import React, { useState } from "react"
import { Link } from "react-router-dom"


function Category( props ){

    const { category, config } = props
    const [ src, setSrc ] = useState(category.background)

    function onError() {
        setSrc( config.image_error )
        return null;
    }
    
    return (
        <div className="categories__item">
            <Link className="categories__item-link-img" to={ `/${category.slug}` }>
                <img className="lazyload"
                    src={ config.lazyload_base64 }
                    onError={ onError }
                    data-src={src}
                    data-sdrc={src}
                    alt={ category.name } width="300" height="300"/>
            </Link>
            
            <Link to={ `/${category.slug}` }> {/* ${config.REACT_ASSET} */}
                <h5 className="categories__item-link-text">{ category.name }</h5>
            </Link>
        </div>
    )
}


export default Category
