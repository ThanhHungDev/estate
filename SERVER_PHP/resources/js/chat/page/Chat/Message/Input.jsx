import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Emojis from "./Emojis.jsx"
import Typing from "./Typing.jsx"
import { 
    saveFile,
    retrieveImageFromClipboardAsBlob,
} from "../../../library/file.upload.js"
import { 
    handleTypeEmoji,
    sendMessageToChannel,
} from "../../../library/keyboard.helper"

const showListEmoji = event => {

    if (document.getElementById("js-emojis")) {
        console.log("có vào đây rồi")
        document.getElementById("js-emojis").classList.add("show-temp");
    }
}


const Input = props => {

    const { active, conversations, auth, socket, CONFIG } = props
    if (!auth.JWT || !conversations.length) return null

    const [ isSend, setIsSend ] = useState(false)
    useEffect(()=>{
        window.addEventListener(
            "paste",
            function (event) {
                // Handle the event
                retrieveImageFromClipboardAsBlob(event)
            },
            false
        )
        window.onclick = function (event) {
            if (event.target) {
                if (event.target.classList.contains('component-emoji')) {
                    return;
                }
            }
            const emojis = document.getElementById("js-emojis")
            if (emojis) {
                emojis.classList.remove("show")
                setTimeout(function () {
                    if (emojis.classList.contains("show-temp")) {
                        emojis.classList.remove("show-temp")
                        emojis.classList.add("show")
                    }
                }, 0);
            }
        };
    }, [isSend, active._id]) 

    const handleSendMessageDown = event => {
        /// dettect if key = enter and not (shift + enter) => send
        const isSendMessage = (event.keyCode == 13 && !event.shiftKey) && (event.keyCode == 13 && !event.altKey)
        if (isSendMessage) {
            sendMessageToChannel(props)
            setIsSend(true)
            return false
        }
        /// if keyCode is space check emoji exist key then replace
        event.keyCode == 32 && handleTypeEmoji(props)
    }

    const handleSendMessageUp = event => {
        if(isSend){
            setIsSend(false)
            document.getElementById("js-input-chat").value = ""
        }
    }

    const handleSendChatClick = () => {
        //// send class is write message
        document.getElementById("js-is-write-message").classList.add("follow-conversation") 
        ///send typing ( trong active là 1 conversation nên sẽ có channel id và channel name ... )
        !!socket && socket.emit(CONFIG.EVENT.TYPING, props.active)
    }

    return (
        <div id="js-is-write-message" className="blockinput">
            <Typing active={active} />
            <div id="js-image--block" className="image-block"></div>
            <input id="image-file" type="file" className="d-none" accept=".xls,.xlsx,.csv,image/*,.pdf,.doc,.docx" onChange={ () => saveFile(props) } />
            <textarea
                rows='1'
                id="js-input-chat"
                onKeyDown={ handleSendMessageDown }
                onKeyUp={ handleSendMessageUp }
                onClick={ handleSendChatClick }
                placeholder={!!socket ? "Nhập tin nhắn" : "không thể kết nối với máy chủ"}
            ></textarea>
            <i className="fa-icon fas fa-paper-plane" onClick={ () => { sendMessageToChannel(props) } }></i>
            <i
                className="fa-icon far fa-smile emoticon"
                onClick={ showListEmoji }
            ></i>
            <i
                className="fa-icon fal fa-photo-video file"
                onClick={ () => { document.getElementById("image-file").click() } }
            ></i>
            {/* <i className="hero-icon hero-heart-multiple-outline react" onClick={ handleSendEmojiReact }></i> */}
            <Emojis emojis={CONFIG.EMOJIS}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        auth         : state.auth,
        conversations: state.conversation,
        socket       : state.socket,
        CONFIG       : state.config,
    }
}
export default connect(mapStateToProps)(Input)