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
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.AUTHPHONE} render={ props => <Phone { ...props } CONFIG={CONFIG} /> } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.VERIFYPHONE } render={ props => <Code { ...props } CONFIG={CONFIG} /> } /> 
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.AUTHLOCAL } render={ props => <Account { ...props } CONFIG={CONFIG} /> } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.REGISTER } render={ props => <Register { ...props } CONFIG={CONFIG} /> } title="Đăng ký tài khoản"/>
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.FORGOT } render={ props => <Register { ...props } CONFIG={CONFIG} /> } />
                    <Route exact path={CONFIG.ACCOUNT_ROUTE.CHANGEPASS } render={ props => <Register { ...props } CONFIG={CONFIG} /> } />
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
