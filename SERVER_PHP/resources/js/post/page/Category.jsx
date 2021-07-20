import React, { useState } from "react"


function Category( props ){

    const { category, config } = props
    const [ src, setSrc ] = useState(category.background)

    function onError() {
        setSrc( config.image_error )
        return null;
    }

    console.log(config)
    
    return (
        <div className="categories__item">
            <a className="categories__item-link-img" href={ `${config.REACT_ASSET}/${category.slug}` }>
                <img className="lazyload"
                src={ config.lazyload_base64 }
                onError={ onError }
                data-src={src}
                data-sdrc={src}
                alt={ category.title } width="300" height="300"/>
            </a>
            <a href={ `${config.REACT_ASSET}/${category.slug}` }>
                <h5 className="categories__item-link-text">{ category.title }</h5>
            </a>
        </div>
    )
}


export default Category
