import React from "react"
import { Link, useParams } from "react-router-dom"
import Category from "./Category"


function Categories( { CATEGORIES, CONFIG } ){

    // const {form, history, match} = props
    const { id } = useParams()
    const categories = CATEGORIES.filter( cate => id ? cate.parent == id : !cate.parent ).sort( (first, second ) => first.id - second.id )
    
    return (
        <div className="categories">
            <div className="categories__wrapper">
                <div className="container">
                    <div className="categories__header position-relative">
                        {
                            id && <Link className="btn categories__btn--prev" to={ "/" }> <i className="fas fa-chevron-left"></i> </Link>
                        }
                        <span>Chọn chủ đề bạn muốn đăng</span>
                    </div>
                    <div className="row categories__row">
                        {
                            categories.map( 
                                cat => <Category key={cat.id} category={cat} CONFIG={CONFIG} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Categories
