export function submitMessageChat(message, style, attachment) {
    // console.log({ message, style, attachment })
    const DF_TYPE_IMAGE = "IMAGE"
    const DF_TYPE_EMOJI = "EMOJI"

    if (!message.trim()) {
        if (style == DF_TYPE_IMAGE) {
            message = ''// style
        } else {
            return false
        }
    }
    if (!style) {
        let emojiChat = config.EMOJIS.filter(emoji => emoji.symbol == message.trim())
        if (emojiChat.length) {
            style = DF_TYPE_EMOJI
        }
    }
    
    let { user, conversations } = this.props,
        instance = this
    /// nếu token hết hạn thì phải f5 trình duyệt
    let diff = ((new Date).getTime() - new Date(user.tokens.period).getTime()) / 1000
    if (diff >= user.tokens.expire) {
        /// fetch new token
        alert("ログインセッションの有効期限が切れています。ブラウザをリロードしてください")
        location.reload()
    }

    let channelActive = conversations.find(channel => channel.isActive)
    /// get channel id and token user 
    let channelId   = channelActive.id,
        tokenAccess = user.tokens.access
    sendMessageToChannel(
        message, 
        style, 
        attachment, 
        channelId, 
        tokenAccess, 
        instance
    )
}


export function handleSendMessageSubmit() {
    const DF_TYPE_IMAGE = "IMAGE"

    let style = ""
    let urlAttachment = []
    
    let imagesDom = document.getElementById("js-image--block")
    let images    = imagesDom.getElementsByClassName("remove-image")
    let message   = document.getElementById("js-input-chat").value
    /// check if dom remove-image have image => send messge image
    /// setter text messge of image
    if (images.length) {
        message = message.trim()
    }
    if(!images.length && !message){
        /// if not have message => not send to server
        return false
    }
    /// setter input send message text null
    document.getElementById("js-input-chat").value = ''
    /// have image => setter data send image to server
    if (images.length) {
        style = DF_TYPE_IMAGE
        
        urlAttachment = []
        for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
            if(!images[index_image_send].classList.contains('js-sign-url')){
                urlAttachment.push(
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
    //// send message
    this.submitMessageChat(message, style, urlAttachment)
}

export function handleSendMessageDown(event){
    const DF_TYPE_IMAGE = "IMAGE"

    /// dettect if key = enter and not (shift + enter) => send
    if (event.keyCode == 13 && event.ctrlKey) {

        let style         = ""
        let urlAttachment = []
        let imagesDom     = document.getElementById("js-image--block")
        let images        = imagesDom.getElementsByClassName("remove-image")

        if (images.length) {

            style         = DF_TYPE_IMAGE

            for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
                if(!images[index_image_send].classList.contains('js-sign-url')){
                    urlAttachment.push(
                        {
                            url : images[index_image_send].getAttribute('data-url'),
                            type: images[index_image_send].getAttribute('data-type'),
                            time: (new Date).getTime()
                        }
                    )
                }
            }
        }
        document.getElementById("js-image--block").innerHTML = ''
        this.submitMessageChat(event.target.value, style, urlAttachment)
        this.setState({ sendChat: true })
        document.getElementById("js-input-chat").value = ""
        return false
    }
    /// if keyCode is space check emoji exist key then replace
    if (event.keyCode == 32) {
        let input = document.getElementById("js-input-chat")
        if (input) {
            let content = input.value
            /// get word last
            let words = content.split(" ");
            let wordLastest = words[words.length - 1]
            //// check have sysbol 
            let emojisCall = config.EMOJIS.filter(item => item.sign == wordLastest)
            if (emojisCall.length) {
                /// add icon 
                let lastIndex = content.lastIndexOf(" ")
                input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol
            }
        }
    }
};

export function handleSendMessageUp() {
    if (this.state.sendChat) {
        this.setState({ sendChat: false });
        document.getElementById("js-input-chat").value = "";
    }
}

export function handleSendChatClick() {

    //// send class is write message
    document.getElementById("js-is-write-message").classList.add("follow-conversation")

    ///send typing 
    let { user, conversations } = this.props
    let channelActive = conversations.find(channel => channel.isActive )
    let channelId     = channelActive.id,
        channelName   = channelActive.channelName,
        tokenAccess   = user.tokens.access

    sendTypingMessageToChannel( channelId, channelName, tokenAccess )
}