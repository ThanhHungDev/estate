import { setterSocket } from '../../action/socket.action'

export function createSocketListenner(socket, props, CONFIG){
    socket.on('connect', function () {
        console.log("Successfully connected!")
        /// lưu lại trạng thái connect mới của socket
        props.dispatch(setterSocket(socket))
        if (socket.connected) {
            console.log("connected ở đây sẽ thành công " + socket.connected)
            /// thử emit lên mới 1 sự kiện trong JOIN__CHATTING
            socket.emit(CONFIG.EVENT.JOIN__CHATTING)
        }
    })
    .on( CONFIG.EVENT.RESPONSE__JOIN__CHATTING, function (response) {
        console.log("Thành công join chat!", response)
        const { code, data } = response
        //// data is comment resource
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
        console.error("connect_error " + socket.connected, error.message); // not authorized
        // console.error(error.data); // { content: "Please retry later" }
        socket.disconnect()
        props.dispatch(setterSocket(null))
    })
    /// check if comment none fetch or comment length empty
}