import $ from "jquery"

/// hàm để handle người dùng scroll
export function handleScrollMessage(props ){

    const domScroll = document.getElementById("js-scroll-to-bottom")
    const domWriter = document.getElementById("js-is-write-message")
    //// trước khi kiểm tra tin nhắn chưa đọc thì phải handle scroll đã
    /// trường hợp mới mở block tin nhắn mà chiều cao làm cho nó flow tin nhắn thì phải cho chạy trước
    handleClassFollowingInput(domScroll)
    /// dữ liệu ban đầu
    const { auth, active, conversations, CONFIG, socket } = props
    const { messages }                                    = active
    const hasNoneRead                                     = messages.some(message => !message.read && !message.type)
    /// nếu có class follow-conversation => người dùng đang theo dõi chat
    if( domWriter && domWriter.classList.contains("follow-conversation") ){
        console.warn('trường hợp did mouse mà đang follow tin nhắn')
        hasNoneRead && socket.emit(CONFIG.EVENT.READ__MESSAGE__ALL, active)
    }
}

export function didMouseScroll(props){
    
    const domScroll = document.getElementById("js-scroll-to-bottom")
    const domWriter = document.getElementById("js-is-write-message")
    /// dữ liệu ban đầu
    const { auth, active, conversations, CONFIG, socket } = props
    const { messages }                                    = active
    if(!messages || !messages.length) return false
    const noneRead = messages.find( mess => !mess.read && !mess.type )
    /// nếu tất cả tin nhắn đều đã đọc thì scroll đến cuối của list tin nhắn
    if( !noneRead ) scrollToBottomBlockMessage()
    /// tồn tại tin nhắn chưa đọc
    else {
        if( domScroll && domScroll.scrollHeight <= domScroll.clientHeight ){
            /// trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll
            console.warn('trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll')
            socket.emit(CONFIG.EVENT.READ__MESSAGE__ALL, active)
        } else if( domWriter && !domWriter.classList.contains('follow-conversation') ){
            console.warn("ban đầu mới vẽ ra thì chưa có class follow-conversation nên là không follow thì chỉ scroll đến cái chưa đọc")
            scrollToMessageNoneReadBlockMessage(noneRead, 150)
        }else if( domWriter && domWriter.classList.contains('follow-conversation') ){
            console.warn("có follow thì cho scroll đến cuối => khi scroll đến cuối thì sẽ bị triger emit socket đã đọc")
            scrollToBottomBlockMessage()
        }
    }
}

function handleClassFollowingInput(elementScroll){

    const domWriter     = document.getElementById("js-is-write-message")

    if (elementScroll.scrollHeight - elementScroll.scrollTop === elementScroll.clientHeight) {
        // do something at end of scroll
        domWriter && domWriter.classList.add("follow-conversation")
    }else if(domWriter && domWriter.classList.contains('follow-conversation')){
        // do something at end of scroll
        domWriter && domWriter.classList.remove("follow-conversation")
    }
}

function scrollToBottomBlockMessage(){

    if(
        !document.getElementById('js-is-loading-more') ||
        (document.getElementById('js-is-loading-more') && !document.getElementById('js-is-loading-more').classList.contains('follow'))
    ){
        const domScroll = document.getElementById("js-scroll-to-bottom")

        domScroll.scrollTop = domScroll.scrollHeight
        if( $(domScroll).find("img").length ){
            $(domScroll).find("img").one("load", function() {
                
                domScroll.scrollTop = domScroll.scrollHeight
            })
        }
    }
    
}
function scrollToMessageNoneReadBlockMessage(mess, DELTA_HEIGHT_DOM_NONE_READ = 0){

    const domScroll = document.getElementById("js-scroll-to-bottom")
    //// scroll to message none read
    const eleNoneRead = document.getElementById("mess__" + mess._id + mess.keyUpdate)
    eleNoneRead && ( domScroll.scrollTop = eleNoneRead.offsetTop < DELTA_HEIGHT_DOM_NONE_READ ? eleNoneRead.offsetTop - DELTA_HEIGHT_DOM_NONE_READ : 0 )
}
