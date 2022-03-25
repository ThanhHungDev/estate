import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import Chats from './page/Chats'
import PrivateRoute from './PrivateRoute'
import ProtectedRoute from './ProtectedRoute'


/// soccket 
import socketIOClient from "socket.io-client"
import { createSocketListenner } from './library/socket'
import { setterSocket } from '../action/socket.action'
// import Peer from 'peerjs'


function App( props ){

    const { auth, CONFIG } = props

    useEffect( () => {
        const param = {
            autoConnect: false,
            query: {
                token: auth?.jwt ?? '',
                pathname: CONFIG.LOCATION.pathname ?? "/",
            }
        }
        const socket = socketIOClient(CONFIG.REALTIME_URL, param)
        createSocketListenner(socket, props, CONFIG) 
        socket.open()// synonym to socket.connect()
        // console.log("connected ở đây không thành công đâu " + socket.connected)
        // console.log("cos chayj voaf ")
        // const peer = new Peer('td064exm0gc00000', {
        //     host: '127.0.0.1',
        //     port: 9000,
        //     path: '/myapp'
        // })
        // peer.on('open', id => console.warn(id, "fgdfgfdg"))
        return () => {
            socket.disconnect()
            props.dispatch(setterSocket(null))
        }
        
    }, [])

    return (
        <div className="AppComponent chat" id="Application">
            <BrowserRouter basename={CONFIG.WEB.CHAT}>
                
                <Switch>
                    <Route exact path="/dang-ky" component={ Register } />
                    <ProtectedRoute auth={ !!auth.JWT } exact path="/dang-nhap" component={ Login } />
                    <PrivateRoute auth={ !!auth.JWT } path='/:id' component={ Chats } />
                    <PrivateRoute auth={ !!auth.JWT } path='/' component={ Chats } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth         : state.auth,
        CONFIG       : state.config,
        conversations: state.conversation,
    }
}
export default connect(mapStateToProps)(App)
