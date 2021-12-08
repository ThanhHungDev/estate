import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import Chats from './page/Chats'
import PrivateRoute from './PrivateRoute'
import ProtectedRoute from './ProtectedRoute'




function App( props ){

    const { auth, CONFIG } = props

    return (
        <div className="AppComponent chat" id="Application">
            <BrowserRouter basename={CONFIG.WEB.CHAT}>
                
                <Switch>
                    <Route exact path="/dang-ky" component={ Register } />
                    <ProtectedRoute auth={ !!auth.JWT } exact path="/dang-nhap" component={ Login } />
                    <PrivateRoute auth={ !!auth.JWT } path='/dashboard' component={ Chats } />
                    <PrivateRoute auth={ !!auth.JWT } path='/' component={ Chats } />
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
