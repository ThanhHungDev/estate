import { addNewMessage } from "../../action/message.action";





export function handleTypeEmoji( props ) {
    const { CONFIG } = props
    const input = document.getElementById("js-input-chat")
    if (input) {
        const content = input.value
        /// get word last
        const words       = content.split(" ");
        const wordLastest = words[words.length - 1]
        //// check have sysbol 
        const emojisCall = CONFIG.EMOJIS.filter(item => item.sign == wordLastest)
        if (emojisCall.length) {
            /// add icon 
            input.value = content.substring(0, content.lastIndexOf(" ")) + " " + emojisCall[0].symbol
        }
    }
}

const getDataSendMessage = props => {
    const { CONFIG } = props
    const DF_TYPE_IMAGE = "IMAGE"
    const DF_TYPE_EMOJI = "EMOJI"

    const imagesDom = document.getElementById("js-image--block")
    const images    = imagesDom.getElementsByClassName("remove-image")
    const message   = document.getElementById("js-input-chat").value
    /// check if dom remove-image have image => send messge image
    /// setter text messge of image
    if (images.length) message = message.trim()
    /// if not have message => not send to server
    if(!images.length && !message) return false
    /// private message spam
    if(message.length > CONFIG.MAX_CHARACTER_MESSAGE){
        alert("Tin nhắn vượt giới hạn cho phép!")
        return false
    }
    /// setter input send message text null
    document.getElementById("js-input-chat").value = ''
    const style = images.length 
                                ? DF_TYPE_IMAGE 
                                : ( CONFIG.EMOJIS.some(emoji => emoji.symbol == message))
                                    ? DF_TYPE_EMOJI
                                    : ""
    /// have image => setter data send image to server
    const attachment = []
    if (images.length) {
        for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
            if(!images[index_image_send].classList.contains('js-sign-url')){
                attachment.push(
                    {
                        url : images[index_image_send].getAttribute('data-url'),
                        type: images[index_image_send].getAttribute('data-type'),
                        time: (new Date).getTime()
                    }
                )
            }
        }
    }
    /// reset img list to empty
    document.getElementById("js-image--block").innerHTML = ''
    //// return data
    return { style, message, attachment }
}

export function sendMessageToChannel(props){
    
    const { message, style, attachment }   = getDataSendMessage(props)
    const { CONFIG, socket, active, auth } = props
    const channel = active._id /// lấy channel active id từ component cha
    const keyUpdate = (new Date).getTime()/// random
    socket.emit(CONFIG.EVENT.ADD__MESSAGE, { 
        keyUpdate, /// random
        message, // function calc
        style, // function calc
        attachment, // function calc
        channel
    })
    /// add tạm vô hệ thống để tạo độ nhạy của dữ liệu
    props.dispatch(addNewMessage(channel, { 
        type: true, /// true là chính nó
        read: false, /// chưa đọc
        body: message, /// tin nhắn
        style, /// định dạng kiểu
        attachment, /// các file đi kèm
        keyUpdate,/// random
        user: auth.id,
    }))
    return false
}