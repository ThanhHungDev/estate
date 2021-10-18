import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
/// soccket 
import socketIOClient from "socket.io-client"
import Main from './Main'

class App extends Component {

    constructor(props) {
        super(props)
        const { auth, CONFIG } = props
        const param = {
            autoConnect: false,
            query: {
                token: auth?.jwt ?? '',
                pathname: CONFIG.LOCATION.pathname ?? "/",
            }
        }
        const socket = socketIOClient(CONFIG.REALTIME_URL, param )
        socket.open();// synonym to socket.connect()
        console.log("connected ở đây không thành công đâu " + socket.connected)
        socket.on('connect', function() {
            console.log("Successfully connected!")
            if(socket.connected){
                console.log("connected ở đây sẽ thành công " + socket.connected)
                /// thử emit lên mới 1 comment
            }
        })
        .on('error', (err) => {
            console.log("************ Error ************")
            console.log("************ Error ************")
            console.log(err)
            console.log("************ Error ************")
               // Show the toaster with the error
               // Try re-connect
               // close the socket connection
        })
        .on('connect_error', (error) => {
            // console.error(`Connection error: ${error}`)
            // console.error(error instanceof Error); // true
            console.error(error.message); // not authorized
            // console.error(error.data); // { content: "Please retry later" }
        })
        /// check if comment none fetch or comment length empty

    }

    render() {
        
        return (
            <div className="AppComponent" id="Application">
                <Main />
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(App)