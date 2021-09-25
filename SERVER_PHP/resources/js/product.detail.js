/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
var lazyloadScripts    = [],
    lazyloadStylesheet = []
function loadJS(src, cb){

    if(lazyloadScripts.indexOf(src) > -1){
        /// call function callback
        return cb()
    }

    lazyloadScripts.push(src)

    var ref    = document.getElementsByTagName( "script" )[ 0 ]
    var script = document.createElement( "script" )

    script.src   = src
    script.async = true

    ref.parentNode.insertBefore( script, ref )

    if (cb && typeof(cb) === "function") {

        script.onload = cb
    }
    return script
}


$(document).ready(function () {
    

    var recapcha = document.getElementById("google__recaptcha")
    if(recapcha){
        recapcha.addEventListener('lazybeforeunveil', function(e){
            
            loadJS('https://www.google.com/recaptcha/api.js?hl=vi')
        })
    }
});


window.toggleCatalogue = function (e){

    if( $(e).attr('data-toggle') == 1 ){
        $(e).text('show')
        $(e).attr('data-toggle', 0)
        $(e).closest('.catalogue').find('.catalogue__body').addClass('d-none')
    }else{
        $(e).text('hide')
        $(e).attr('data-toggle', 1)
        $(e).closest('.catalogue').find('.catalogue__body').removeClass('d-none')
    }
}
