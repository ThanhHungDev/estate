import $ from "jquery"

/// hàm để handle người dùng scroll
export function handleScrollMessage(props, follow ){
    const { value, setFollow } = follow
    const domScroll = document.getElementById("js-scroll-to-bottom")
    console.log("có vào đây không handleScrollMessage ", domScroll.scrollHeight - domScroll.scrollTop , domScroll.clientHeight)
    //// trước khi kiểm tra tin nhắn chưa đọc thì phải check xem scroll đã ở cuối chưa, nếu chưa ở cuối thì thay đổi giá trị follow thành false và ngược
    if (domScroll.scrollHeight - domScroll.scrollTop - domScroll.clientHeight < 10 ) {
        // do something at end of scroll
        console.error("end of scroll")
        !value && setFollow(true)
    }else if( value ){
        // khi đang không ở dưới cùng mà cái value follow bị == true => sai thì cập nhật lại cho đúng là false
        console.error("top of scroll")
        setFollow(false)
    }
    console.error("see of scroll", value)
    234324fsdfds
    đang làm đến đây
    /// dữ liệu ban đầu
    const { auth, active, conversations, CONFIG, socket } = props
    const { messages }                                    = active
    const hasNoneRead                                     = messages.some(mess => !mess.read && mess?.user != auth?.id )
    /// nếu giá trị follow == true => người dùng đang theo dõi chat
    if( value ){
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
        console.warn("do cái này")
        scrollToBottomBlockMessage()
    }
    /// tồn tại tin nhắn chưa đọc
    else {
        if( domScroll && domScroll.scrollHeight <= domScroll.clientHeight ){
            /// trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll
            console.warn('trường hợp này là đang update tin nhắn mà vì không đủ mesage để scroll thì mình emit luôn không cần scroll')
            socket.emit(CONFIG.EVENT.READ__MESSAGE__ALL, active)
        } else if( !isUpdate && domWriter && !domWriter.classList.contains('follow-conversation') ){
            /// nếu là lần đầu tiên khi mới tạo list message thì phải scroll đến dom chưa đọc, nhưng lõ may người dùng đang scroll đến tin nhắn nào đó thì không cho scroll
            console.warn("ban đầu mới vẽ ra thì chưa có class follow-conversation nên là không follow thì chỉ scroll đến cái chưa đọc")
            /// nghĩa là khi update không còn chạy vào đây nữa + nếu update thì sẽ có class didmouse
            scrollToMessageNoneReadBlockMessage(noneRead)
            return
        }else if( isUpdate && domWriter && domWriter.classList.contains('follow-conversation') ){
            console.warn("có follow thì cho scroll đến cuối => khi scroll đến cuối thì sẽ bị triger emit socket đã đọc")
            scrollToBottomBlockMessage()
        }else{
            console.warn("không đúng cái nào cả ", isUpdate)
        }
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

function scrollToMessageNoneReadBlockMessage(mess){
    
    const domScroll = document.getElementById("js-scroll-to-bottom")
    //// scroll to message none read
    const eleNoneRead = document.getElementById(`mess__${mess._id}${mess.keyUpdate}`)
    // const index = (eleNoneRead?.offsetTop < DELTA_HEIGHT_DOM_NONE_READ) ? 0 : (eleNoneRead?.offsetTop - DELTA_HEIGHT_DOM_NONE_READ)
    // eleNoneRead && ( domScroll.scrollTop = index )
    eleNoneRead && eleNoneRead.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
