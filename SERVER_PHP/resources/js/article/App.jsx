import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Categories from './page/Categories'
import SavePost from "./page/SavePost"


function App( { AUTH, CATEGORIES, CONFIG } ){

    console.log(AUTH, "authauthauthauth")

    return (
        <div className="AppComponent post" id="Application">
            <BrowserRouter basename={CONFIG.WEB.USER_POST}>
                
                <Switch>
                    <Route exact path="/" render={ props => <Categories {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH}/> }/>
                    <Route path="/category/:id" render={ props => <Categories {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH}/> }/>

                    {/* <Route path="/edit/:id" component={ EditPost } />
                    <Route path="/apartment/project/:id" component={ ApartmentProjectDetail } /> */}
                    <Route path="/save/:id" render={ props => <SavePost {...props } CONFIG={ CONFIG } CATEGORIES={ CATEGORIES } AUTH={AUTH} /> }/>
                    
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
