import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/// soccket 
import socketIOClient from "socket.io-client"

class App extends Component {

    constructor(props) {
        super(props)
        const param = { query: 'token=' + JWT_TOKEN }
        const socket = socketIOClient('http://localhost:3000', param )
        console.log("connected ở đây không thành công đâu " + socket.connected);
        socket.on('connect', function() {
            console.log("Successfully connected!");
            if(socket.connected){
                console.log("connected ở đây sẽ thành công " + socket.connected);
            }
        })
        .on('error', function(error) {
            console.log(error, "có lỗi ")
        })
    }

    render() {
        
        return (
            <div className="AppComponent" id="Application">
                đây là app react soccket
            </div>
        )
    }
}
export default App;