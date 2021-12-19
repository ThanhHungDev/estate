
export function handleScrollMessage(event, props){

    const domWriter = document.getElementById("js-is-write-message")
        
    //// trước khi kiểm tra tin nhắn chưa đọc thì phải handle scroll đã
    handleClassFollowingInput(event)
    /// sau khi handle xong thì nếu có class follow-conversation => người dùng đang đứng ở cuối chat
    /// => mình sẽ kiểm tra tin nhắn chưa đọc
    if( domWriter && domWriter.classList.contains("follow-conversation") ){
        /// nếu tồn tại scroll message block, 
        /// đồng thời đang scroll ở cuối cùng 
        /// thì emit đã đọc message
        let { auth, conversations } = props
        let channelActiveChat       = conversations.find(channel => channel.isActive)
        let messages                = channelActiveChat && channelActiveChat.message

        if( messages.some(message => !message.read && !message.type) ){
            
            let access      = auth.tokens.access,
                channelId   = channelActiveChat.id 
            emitReadAllMessageChannel(access, channelId)
        }
    }
}


export function handleScrollListMessageEventUpdate(props){

    let domScroll = document.getElementById("js-scroll-to-bottom"),
        domWriter = document.getElementById("js-is-write-message")

    if( domWriter && domScroll && domScroll.scrollHeight <= domScroll.clientHeight){

        console.log("khi được update nhưng vì không đủ mesage để scroll thì mình emit luôn không cần scroll")
        let { auth, conversations } = props
        
        let channelActiveChat = conversations.find(channel => channel.isActive)
        let messages = channelActiveChat && channelActiveChat.message

        if(!messages || !messages.length){
            return false
        }
        let messFirstNoneRead = messages.find( mess => !mess.read && !mess.type )
        if( messFirstNoneRead ){
            /// không thể scroll => emit tin nhắn
            let access    = auth.tokens.access,
                channelId = channelActiveChat.id
            emitReadAllMessageChannel(access, channelId)
        }
    }else if(
        domScroll && 
        domWriter && 
        domWriter.classList.contains('follow-conversation')
    ){
        console.log("scroll đến cuối componentDidUpdate")
        scrollToBottomBlockMessage()
    }
}

export function handleDrawedBlockMessageNoneRead(props){

    /// khi vẽ block message ra, thì cho block scroll đến message chưa đọc đầu tiên
    /// message first none read
    let { auth, conversations, device } = props
    
    let channelActiveChat = conversations.find(channel => channel.isActive)
    let messages = channelActiveChat && channelActiveChat.message

    if(!messages || !messages.length){
        return false
    }
    let messFirstNoneRead = messages.find( mess => !mess.read && !mess.type )
    if( messFirstNoneRead ){
        //// có trường hợp khi block message không có scroll (tức là số lượng tin nhắn < block scroll thì không thể scroll )
        //// điều này dẫn đến việc không thể chạy vào sự kiện lắn nghe scroll để emit tin nhắn đã đọc được
        //// cần if else tại đây 
        let domScroll = document.getElementById("js-scroll-to-bottom")
        
        if(domScroll && domScroll.scrollHeight <= domScroll.clientHeight){
            
            /// không thể scroll => emit tin nhắn
            let access    = auth.tokens.access,
                channelId = channelActiveChat.id
            emitReadAllMessageChannel(access, channelId)
        }else{
            const DELTA_HEIGHT_DOM_NONE_READ = device.calcHeightMessageBlock - 150
            //// khi có thể scroll thì cứ scrol đến tin nhắn chưa đọc
            scrollToMessageNoneReadBlockMessage(messFirstNoneRead, DELTA_HEIGHT_DOM_NONE_READ)
        }
    }else{
        /// không có mess chưa đọc thì luôn luôn trỏ tới cuối cùng
        console.log("không có mess chưa đọc thì luôn luôn trỏ tới cuối cùng scroll đến cuối componentDidMount")
        scrollToBottomBlockMessage()
    }
}

function handleClassFollowingInput(evtScroll){

    let domWriter = document.getElementById("js-is-write-message")
        
    let elementScroll = evtScroll.target
    if (elementScroll.scrollHeight - elementScroll.scrollTop === elementScroll.clientHeight) {
        // do something at end of scroll
        domWriter && domWriter.classList.add("follow-conversation")
        
    }else if(domWriter && domWriter.classList.contains('follow-conversation')){
        // do something at end of scroll
        domWriter.classList.remove("follow-conversation")
    }
}

function scrollToBottomBlockMessage(){

    if(
        !document.getElementById('js-is-loading-more') ||
        (document.getElementById('js-is-loading-more') && !document.getElementById('js-is-loading-more').classList.contains('follow'))
    ){
        let domScroll = document.getElementById("js-scroll-to-bottom")

        domScroll.scrollTop = domScroll.scrollHeight
        if( $(domScroll).find("img").length ){
            $(domScroll).find("img").one("load", function() {
                
                domScroll.scrollTop = domScroll.scrollHeight
            })
        }
    }
    
}
function scrollToMessageNoneReadBlockMessage(messFirstNoneRead, DELTA_HEIGHT_DOM_NONE_READ = 0){

    let domScroll = document.getElementById("js-scroll-to-bottom")

    //// scroll to message none read
    let eleNoneRead = document.getElementById("mess__" + messFirstNoneRead._id + messFirstNoneRead.keyUpdate)
    if( eleNoneRead ){
        
        let scrollTopNoneRead = eleNoneRead.offsetTop - DELTA_HEIGHT_DOM_NONE_READ
        if( scrollTopNoneRead < 0 ){
            scrollTopNoneRead = 0
        }
        // console.log("scroll đến dom chưa đọc", scrollTopNoneRead)
        domScroll.scrollTop = scrollTopNoneRead
    }
}
