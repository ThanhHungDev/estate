const saveBlobToServer = file => {
    const SIZE_LIMIT = 5 * 1024 * 1024

    if( !file.size || file.size > SIZE_LIMIT ){
        handleErrorUploadFile()
    }
    
    let dataFile = file
    let form = new FormData()
    form.append('file', dataFile)
    form.append('user_id', 1)

    $.ajax({
        url        : CONFIG.SERVER_PHP.URL + '/api/upload',
        type       : 'post',
        enctype    : 'multipart/form-data',
        data       : form,
        cache      : false,
        contentType: false,
        processData: false,
        success: function( response ){
            
            if (response.code != 200) {
                alert("upload fail: " + response.message)
                handleErrorUploadFile()
            }
            let reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
            if (reWriteUrl.length) {
                reWriteUrl[0].setAttribute("data-url", response.data.url)

                let typeFile = response.data.file_name,
                extentionType = null
                if( typeFile ){
                    extentionType = getTypeFile( typeFile )
                }
                if( !extentionType ){
                    reWriteUrl[0].remove()
                }else{
                    reWriteUrl[0].setAttribute("data-type", extentionType )
                    reWriteUrl[0].classList.remove("js-sign-url")
                }
            }
        },
        error: function(error){
            console.log(error)
            alert("upload fail: " + error.message)
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

const retrieveImage = file => {

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
const retrieveFile = file => {

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


export function saveFile(){

    let file        = document.getElementById("image-file").files[0]

    let acceptIMAGE = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i
    if(acceptIMAGE.exec(file.name)){
        
        retrieveImage( file )
        return false
    }

    const acceptFILE = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i
    if(acceptFILE.exec(file.name)){ 

        retrieveFile( file )
        return false
    }
    // this file is not supported!
    alert("file không được hộ trợ！")
}