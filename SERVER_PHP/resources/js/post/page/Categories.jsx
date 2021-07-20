import React from "react"
import { connect } from "react-redux"

import Category from "./Category"


function Categories( props ){

    const { CATEGORIES, CONFIG } = props
    // const {form, history, match} = props
    
    return (
        <div className="categories">
            <div className="categories__wrapper">
                <div className="container">
                    <div className="categories__header">
                        Chọn loại Bất động sản muốn đăng
                    </div>
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


let mapStateToProps = (state) => {
    return {
        CATEGORIES: state.categories,
        CONFIG: state.config
    }
}
export default connect(mapStateToProps)(Categories)
