import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import Register from './page/Register'
import Login from './page/Login'
import Chats from './page/Chats'




function App( props ){

    const { auth, CONFIG } = props

    return (
        <div className="AppComponent chat" id="Application">
            <BrowserRouter basename={CONFIG.WEB.CHAT}>
                
                <Switch>
                    <Route exact path="/dang-ky" component={ Register } />
                    <Route exact path="/dang-nhap" component={ Login } />
                    <PrivateRoute auth={ !!auth.JWT } path='/dashboard' component={ Chats } />
                    <PrivateRoute auth={ false } path='/' component={ Chats } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(App)
