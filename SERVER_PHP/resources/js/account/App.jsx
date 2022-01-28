import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import useWindowSize from '../chat/hook/resize'

import Abort404 from './page/404'
import Account from './page/Account'
import Code from './page/Code'
import Phone from './page/Phone'
import Register from './page/Register'

function App({ CONFIG }){
    const device = useWindowSize()
    return (
        <div className="AppComponent account" id="Application" style={{ minHeight: (device.calcHeightSubtractHeader) + "px" }}>
            <BrowserRouter basename={CONFIG.ACCOUNT_ROUTE.BASENAME}>
                
                <Switch>
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.AUTHPHONE} component={ Phone } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.VERIFYPHONE } component={ Code } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.AUTHLOCAL } component={ Account } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.REGISTER } component={ Register } />
                    <Route path="*" component={ Abort404 } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(App)
