import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import useWindowSize from '../chat/hook/resize'

import Categories from './page/Categories'
import EditArticle from './page/EditArticle'
import NewArticle from "./page/NewArticle"


function App( { AUTH, CATEGORIES, CONFIG } ){

    console.log(AUTH, "authauthauthauth")
    // kiểm tra nếu mà post có đăng nhập chưa?
    if( !AUTH.JWT ){
        window.location.href = CONFIG.ACCOUNT_ROUTE.BASENAME + CONFIG.ACCOUNT_ROUTE.AUTHPHONE + "?rredirect=1"
        return null
    }

    const device = useWindowSize()

    return (
        <div className="AppComponent post" id="Application" style={{ minHeight: (device.calcHeightSubtractHeader) + "px" }}>
            <BrowserRouter basename={CONFIG.WEB.USER_POST}>
                
                <Switch>
                    <Route exact path="/" render={ props => <Categories {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH}/> }/>
                    <Route path="/category/:id" render={ props => <Categories {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH}/> }/>

                    {/* <Route path="/apartment/project/:id" component={ ApartmentProjectDetail } /> */}
                    <Route path="/edit/:id" render={ props => <EditArticle {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH} /> }/>
                    <Route path="/save/:id" render={ props => <NewArticle {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH} /> }/>
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        AUTH      : state.auth,
        CATEGORIES: state.categories,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(App)
