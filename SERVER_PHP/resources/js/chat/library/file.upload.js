const handleErrorUploadFile = () => {
    const reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
    if (reWriteUrl.length) {
        reWriteUrl[0].remove()
    }
}

const getTypeFile = filename  => {
    let accept = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i
    if(accept.exec(filename)){
        return "img"
    }
    accept = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i
    if(accept.exec(filename)){ 

        return "file"
    }
    return null
}

const saveBlobToServer = file => {
    const SIZE_LIMIT = 5 * 1024 * 1024

    if( !file.size || file.size > SIZE_LIMIT ){
        handleErrorUploadFile()
    }
    
    const dataFile = file
    const form = new FormData()
    form.append('file[]', dataFile)
    form.append("type", 'chat')

    $.ajax({
        url        : '/api/v1/file',
        type       : 'post',
        enctype    : 'multipart/form-data',
        data       : form,
        cache      : false,
        contentType: false,
        processData: false,
        success: function( response ){

            if (response.status != 200) {
                alert("upload fail: " + response.message)
                handleErrorUploadFile()
            }
            const reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
            if (reWriteUrl.length) {
                const [ img ] = response.data
                reWriteUrl[0].setAttribute("data-url", img.root)

                const extentionType = img.root ? getTypeFile( img.root ) : null
                if( !extentionType ){
                    reWriteUrl[0].remove()
                }else{
                    reWriteUrl[0].setAttribute("data-type", extentionType )
                    reWriteUrl[0].classList.remove("js-sign-url")
                }
            }
        },
        error: function(error){
            alert("upload fail ", error.message)
            handleErrorUploadFile()
        }
    })
}

const imageFileCallback = function (imgLoading) {
    // add it in editor
    imgLoading.width = 100
    /// create wrapper img
    const wrapperImage           = document.createElement("div")
          wrapperImage.className = "remove-image js-sign-url"

    wrapperImage.onclick = function () {
        this.remove()
    }
    wrapperImage.appendChild(imgLoading)
    /// add dom img with javascript :D 
    document.getElementById("js-image--block").appendChild(wrapperImage)
}

const retrieveImage = (file, props) => {

    // console.log( file )
    let callback = imageFileCallback
    // Retrieve image on clipboard as blob
    saveBlobToServer(file)
    // Create an image
    let img = new Image()
    // Once the image loads, render the img on the canvas
    img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this)
    };
    // Crossbrowser support for URL
    let URLObj = window.URL || window.webkitURL
    // Creates a DOMString containing a URL representing the object given in the parameter
    // namely the original Blob
    try {
        img.src = URLObj.createObjectURL(file)
    } catch (error) {
        console.log(error)
    }
}
const retrieveFile = (file, props) => {

    let callback = imageFileCallback
    // Retrieve image on clipboard as blob
    saveBlobToServer(file)
    // Create an image
    let img = new Image()
    // Once the image loads, render the img on the canvas
    img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this)
    }
    // Crossbrowser support for URL
    let URLObj = window.URL || window.webkitURL;
    // Creates a DOMString containing a URL representing the object given in the parameter
    // namely the original Blob
    try {
        img.src = config.SERVER_PHP.URL + "/image/folder.jpg"
    } catch (error) {
        console.log(error)
    }
}



export function retrieveImageFromClipboardAsBlob(pasteEvent){
    let callback = imageFileCallback
    if (!pasteEvent.clipboardData) {
        if (typeof callback == "function") {
            /// call calback function undefine
            callback(undefined)
        }
    }
    let items = pasteEvent.clipboardData.items
    if (!items) {
        if (typeof callback == "function") {
            /// call calback function undefine
            callback(undefined);
        }
    }
    for (let i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue;

        let file = items[i].getAsFile()
        retrieveImage( file )
    }
}


export function saveFile( props ){
    /// ta lấy file ra
    const file        = document.getElementById("image-file").files[0]

    const acceptIMAGE = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i
    if(acceptIMAGE.exec(file.name)){
        /// nếu là img thì upload img
        retrieveImage( file, props )
        return false
    }

    const acceptFILE = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i
    if(acceptFILE.exec(file.name)){ 
        /// nếu là file thì upload file
        retrieveFile( file, props )
        return false
    }
    // this file is not supported!
    alert("file không được hộ trợ！")
}