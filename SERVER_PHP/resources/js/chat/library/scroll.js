import $ from "jquery"

/// hàm để handle người dùng scroll
export function handleScrollMessage(props ){
    console.log("có vào đây không handleScrollMessa")
    const domScroll = document.getElementById("js-scroll-to-bottom")
    const domWriter = document.getElementById("js-is-write-message")
    //// trước khi kiểm tra tin nhắn chưa đọc thì phải handle scroll đã
    /// trường hợp mới mở block tin nhắn mà chiều cao làm cho nó flow tin nhắn thì phải cho chạy trước
    handleClassFollowingInput(domScroll)
    /// dữ liệu ban đầu
    const { auth, active, conversations, CONFIG, socket } = props
    const { messages }                                    = active
    const hasNoneRead                                     = messages.some(mess => !mess.read && mess?.user != auth?.id )
    /// nếu có class follow-conversation => người dùng đang theo dõi chat
    if( domWriter && domWriter.classList.contains("follow-conversation") ){
        console.warn('trường hợp did mouse mà đang follow tin nhắn')
        hasNoneRead && socket.emit(CONFIG.EVENT.READ__MESSAGE__ALL, active)
    }
}

export function didMouseScroll(props, isUpdate = false ){
    
    const domScroll = document.getElementById("js-scroll-to-bottom")
    const domWriter = document.getElementById("js-is-write-message")
    // console.error("có vào đây không didMouseScrol", isUpdate)
    /// dữ liệu ban đầu
    const { auth, active, conversations, CONFIG, socket } = props
    const { messages }                                    = active
    if(!messages || !messages.length) return false
    const noneRead = messages.find( mess => !mess.read && mess?.user != auth?.id )
    /// nếu tất cả tin nhắn đều đã đọc thì scroll đến cuối của list tin nhắn
    if( !noneRead ){
        // console.warn("do cái này")
        scrollToBottomBlockMessage()
    }
    /// tồn tại tin nhắn chưa đọc
    else {
        if( domScroll && domScroll.scrollHeight <= domScroll.clientHeight ){
            /// trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll
            // console.warn('trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll')
            socket.emit(CONFIG.EVENT.READ__MESSAGE__ALL, active)
            return
        } else if( 
            !isUpdate 
            &&  (
                (domWriter && !domWriter.classList.contains('follow-conversation'))
                || !domWriter
            )
        ){
            /// nếu là lần đầu tiên khi mới tạo list message thì phải scroll đến dom chưa đọc, nhưng lõ may người dùng đang scroll đến tin nhắn nào đó thì không cho scroll
            // console.warn("ban đầu mới vẽ ra thì chưa có class follow-conversation nên là không follow thì chỉ scroll đến cái chưa đọc", messages)
            /// nghĩa là khi update không còn chạy vào đây nữa + nếu update thì sẽ có class didmouse
            const eleNoneRead = document.getElementById(`mess__${noneRead._id}${noneRead.keyUpdate}`)
            eleNoneRead && eleNoneRead.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            // eleNoneRead && console.log("có scroll đến cái chưa đọc")
            return
        }else if( isUpdate && domWriter && domWriter.classList.contains('follow-conversation') ){
            // console.warn("có follow thì cho scroll đến cuối => khi scroll đến cuối thì sẽ bị triger emit socket đã đọc")
            scrollToBottomBlockMessage()
            return
        }else{
            // console.warn("không đúng cái nào cả ", isUpdate)
            return
        }
    }
}

function handleClassFollowingInput(elementScroll){
    const DELTA     = 10
    const domWriter = document.getElementById("js-is-write-message")

    if (elementScroll.scrollHeight - elementScroll.scrollTop - elementScroll.clientHeight < DELTA ) {
        // do something at end of scroll
        domWriter && domWriter.classList.add("follow-conversation")
    }else if(domWriter && domWriter.classList.contains('follow-conversation')){
        // do something at end of scroll
        domWriter && domWriter.classList.remove("follow-conversation")
    }
}

function scrollToBottomBlockMessage(){
    console.warn("scrollToBottomBlockMessage")
    const domScroll = document.getElementById("js-scroll-to-bottom")
    domScroll.scrollTop = domScroll.scrollHeight
    if( $(domScroll).find("img").length ){
        $(domScroll).find("img").one("load", function() {
            
            domScroll.scrollTop = domScroll.scrollHeight
        })
    }
    
}
