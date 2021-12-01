
const WIDTH_MOBILE_DEVICE    = 768
const MIN_HEIGHT_DEVICE = 400


function isPcDevice() {
    
    if( getWidthDevice() <= WIDTH_MOBILE_DEVICE ){
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

    return height < MIN_HEIGHT_DEVICE ? MIN_HEIGHT_DEVICE : height
}

function calcHeightSubtractHeight( ){

    let height = getHeightDevice()

    let tophead = document.getElementsByClassName('tophead')
    if(tophead.length){
        tophead = tophead[0]
    }
    let menuSticky = document.getElementsByClassName('headerpage')
    if(menuSticky.length){
        menuSticky = menuSticky[0]
    }
    let heightMenu = 0
    try {
        heightMenu = tophead.offsetHeight + menuSticky.offsetHeight + 50
    } catch (error) {}

    return height - heightMenu
}

let DEVICE = {
    isPcDevice              : isPcDevice(),
    widthDevice             : getWidthDevice(),
    heightDevice            : getHeightDevice() + 150,
    calcHeightSubtractHeight: calcHeightSubtractHeight(),
}

export default function (state = DEVICE, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}