import React, { useState, useEffect } from "react"
import { connect } from "react-redux"


function SelectCategory( props ){

    const { CATEGORIES, CONFIG } = props
    
    return (
        <div className="categories">
            <div className="categories__wrapper">
                <div className="container">
                    <div className="row categories__row">
                        {
                            CATEGORIES.map( cat => <Category key={cat.id} category={cat} config={CONFIG} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


function Category( props ){

    const { category, config } = props
    const [ src, setSrc ] = useState(category.background)

    function onError() {
        setSrc( config.image_error )
        return null;
    }
    
    return (
        <div className="categories__item">
            <a className="categories__item-link-img" href="{{ Route('TAG_THEME_VIEW', [ 'slug' => $tag->slug ]) }}">
                <img className="lazyload"
                src={ config.lazyload_base64 }
                onError={ onError }
                data-src={src}
                data-sdrc={src}
                alt={ category.title } width="300" height="300"/>
            </a>
            <a href="{{ Route('TAG_THEME_VIEW', [ 'slug' => $tag->slug ]) }}">
                <h5 className="categories__item-link-text">{ category.title }</h5>
            </a>
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        CATEGORIES: state.categories,
        CONFIG: state.config
    }
}
export default connect(mapStateToProps)(SelectCategory)
