import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Chats from './page/Chats'




function App( props ){

    const { auth, CONFIG } = props
    return (
        <div className="AppComponent chat" id="Application">
            <BrowserRouter basename={CONFIG.WEB.CHAT}>
                
                <Switch>
                    <Route exact path="/" component={ Chats } />
                    <Route path="/:id" component={ Chats } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth      : state.auth,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(App)
