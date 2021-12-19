import React, { useEffect } from "react"
import { connect } from "react-redux"
import Emojis from "./Emojis.jsx"
import Typing from "./Typing.jsx"
import { 
    saveFile,
    retrieveImageFromClipboardAsBlob,
} from "../../../library/file.upload.js"
import { 
    handleSendMessageDown,
    handleSendMessageUp,
    handleSendMessageSubmit,
} from "../../../library/keyboard.helper"

const showListEmoji = event => {

    if (document.getElementById("js-emojis")) {
        document.getElementById("js-emojis").classList.add("show-temp");
    }
}


const Input = props => {

    useEffect(()=>{
        window.addEventListener(
            "paste",
            function (event) {
                // Handle the event
                retrieveImageFromClipboardAsBlob(event)
            },
            false
        );
    }, [])

    // const handleSendEmojiReact = () => {
    //     const DF_TYPE_EMOJI = "EMOJI"
    
    //     let message = " 💝 "
    //     let style = DF_TYPE_EMOJI
    //     submitMessageChat(message, style, null)
    // }

    const handleSendChatClick = () => {
        //// send class is write message
        document.getElementById("js-is-write-message").classList.add("follow-conversation")
        ///send typing ( trong active là 1 conversation nên sẽ có channel id và channel name ... )
        socket.emit(CONFIG.EVENT.TYPING, props.active)
    }

    const { conversations, auth, socket, CONFIG } = props
    if (!auth.JWT || !socket || !conversations.length) return null

    const active = conversations.find(conv => conv.isActive)


    return (
        <div id="js-is-write-message" className="blockinput follow-conversation">
            <Typing active={active} />
            <div id="js-image--block" className="image-block"></div>
            <input id="image-file" type="file" className="d-none" accept=".xls,.xlsx,.csv,image/*,.pdf,.doc,.docx" onChange={ saveFile } />
            <textarea
                rows='1'
                id="js-input-chat"
                onKeyDown={ handleSendMessageDown }
                onKeyUp={ handleSendMessageUp }
                onClick={ handleSendChatClick }
                placeholder="Nhập tin nhắn"
            ></textarea>
            <i className="fa-icon fas fa-paper-plane" onClick={ handleSendMessageSubmit }></i>
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