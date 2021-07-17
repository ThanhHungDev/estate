
const WIDTH_MOBILE_DEVICE    = 768
const MIN_HEIGHT             = 500
/// default variable is of pc
var HEIGHT_HEADER_CHAT     = 80
var HEIGHT_INPUT_SEND_CHAT = 68


function isPcDevice() {
    
    if( getWidthDevice() <= WIDTH_MOBILE_DEVICE ){
        /// default variable is of pc
        HEIGHT_HEADER_CHAT     = 40
        HEIGHT_INPUT_SEND_CHAT = 50

        return false
    }
    return true
}

function getWidthDevice(){

    return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
}
function getHeightDevice(){

    let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

    return height > MIN_HEIGHT ? height : MIN_HEIGHT
}

function calcHeightChat(){

    let height = getHeightDevice()
    // if(isPcDevice()){
    //     return height
    // }
    let menu_dom = document.getElementsByClassName('main-wrapper-header')
    if(menu_dom.length){
        menu_dom = menu_dom[0]
    }
    let heightMenu = 0
    try {
        heightMenu = menu_dom.offsetHeight
    } catch (error) {
        heightMenu = 0
    }

    return height - heightMenu
    // return height
}

function calcHeightMessageBlock(){
    
    // if(isPcDevice()){
        
    //     return calcHeightChat() - HEIGHT_HEADER_CHAT - HEIGHT_INPUT_SEND_CHAT
    // }
    return calcHeightChat() - HEIGHT_HEADER_CHAT - HEIGHT_INPUT_SEND_CHAT
}

function calcHeightConversationsSidebar(){
    let height = calcHeightChat() 
    if(isPcDevice()){
        
        return height - HEIGHT_HEADER_CHAT
    }
    return height
}
let DEVICE = {
    isPcDevice            : isPcDevice(),
    widthDevice           : getWidthDevice(),
    heightDevice          : getHeightDevice(),
    calcHeightChat        : calcHeightChat(),
    calcHeightMessageBlock: calcHeightMessageBlock(),
    heightHeaderChat      : HEIGHT_HEADER_CHAT,
    calcHeightConversation: calcHeightConversationsSidebar(),
}

export default function (state = DEVICE, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}