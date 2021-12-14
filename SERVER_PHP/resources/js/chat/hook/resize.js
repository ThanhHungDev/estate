import { useLayoutEffect, useState } from "react"

const WIDTH_MOBILE_DEVICE = 768
const MIN_HEIGHT_DEVICE   = 400

const isPcDevice = () => {
    
    if( getWidthDevice() <= WIDTH_MOBILE_DEVICE ){
        return false
    }
    return true
}

const getWidthDevice = () => {

    return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
}
const getHeightDevice = () => {

    let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

    return height < MIN_HEIGHT_DEVICE ? MIN_HEIGHT_DEVICE : height
}

const calcHeightSubtractHeight = () => {

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
        heightMenu = (tophead.offsetHeight || 0) + (menuSticky?.offsetHeight || 0 ) + 50
    } catch (error) {}

    return height - heightMenu
}


const calcHeightSubtractHeader = () => {

    const height = getHeightDevice()

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
        heightMenu = (tophead.offsetHeight || 0) + (menuSticky?.offsetHeight || 0 )
    } catch (error) {}

    return height - heightMenu
}


const useWindowSize = () => {
    const [size, setSize] = useState({
        isPcDevice              : isPcDevice(),
        widthDevice             : getWidthDevice(),
        heightDevice            : getHeightDevice(),
        calcHeightSubtractHeight: calcHeightSubtractHeight(),
        calcHeightSubtractHeader: calcHeightSubtractHeader(),
    })
    useLayoutEffect(() => {
        function updateSize() {
            console.log("có updateSize")
            setSize({
                isPcDevice              : isPcDevice(),
                widthDevice             : getWidthDevice(),
                heightDevice            : getHeightDevice(),
                calcHeightSubtractHeight: calcHeightSubtractHeight(),
                calcHeightSubtractHeader: calcHeightSubtractHeader(),
            })
        }
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}

export default useWindowSize
