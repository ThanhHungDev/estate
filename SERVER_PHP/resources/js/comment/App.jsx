import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
/// soccket 
import socketIOClient from "socket.io-client"
import { setterSocket } from '../action/socket.action'
import WrapperComment from "./WrapperComment"

class App extends Component {

    constructor(props) {
        super(props)
        const { AUTH, CONFIG } = props
        const param = {
            autoConnect: false,
            query: {
                token: AUTH?.jwt ?? '',
                pathname: CONFIG.LOCATION.pathname ?? "/",
            }
        }
        const socket = socketIOClient(CONFIG.REALTIME_URL, param )
        socket.open();// synonym to socket.connect()
        console.log("connected ở đây không thành công đâu " + socket.connected)
        socket.on('connect', function() {
            console.log("Successfully connected!")
            /// lưu lại trạng thái connect mới của socket
            props.dispatch(setterSocket(socket))
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

            /// lưu vào redux là socket false
            props.dispatch(setterSocket(socket))
        })
        
        .on('connect_error', (error) => {
            // console.error(`Connection error: ${error}`)
            // console.error(error instanceof Error); // true
            console.error("connect_error", error.message); // not authorized
            // console.error(error.data); // { content: "Please retry later" }
        })
        /// check if comment none fetch or comment length empty

    }

    render() {
        
        return (
            <div className="AppComponent" id="Application">
                <WrapperComment />
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        AUTH  : state.auth,
        CONFIG: state.config,
    }
}
export default connect(mapStateToProps)(App)