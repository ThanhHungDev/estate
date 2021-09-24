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
// function loadStylesheet(href, rel ){

//     console.log(href, "href")

//     if(lazyloadStylesheet.indexOf(href) > -1){
//         /// call function callback
//         return true
//     }

//     lazyloadStylesheet.push(href)

    
//     var link = document.createElement( "link" )

//     link.href = href
//     link.rel  = rel

//     // append link element to html
//     document.body.appendChild(link)

//     // Loaded successfully
//     link.onload = function() {
//         console.log('success', href);
//     };

//     // Loading failed
//     link.onerror = function() {
//         console.log('error');
//     };
//     return link
// }




function drawMapContact() {
    if(!document.getElementById("map-contact-canvas")){
        return false
    }

    var styles = [
        {
            stylers: [{ saturation: 0 }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 0 },
                { visibility: "simplified" },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Google Map",
    });
    if(typeof MAP_LAT == 'undefined' || typeof MAP_LONG == 'undefined'){
        MAP_LAT = 35.707616
        MAP_LONG = 139.669912
    }
    var myLatlng = new google.maps.LatLng(MAP_LAT, MAP_LONG)
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
        },
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/images/map-icon.png'
    });
    var map = new google.maps.Map(
        document.getElementById("map-contact-canvas"),
        mapOptions
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    marker.setMap(map);

    var address_detail =
        '<div class="address_detail_map">' +
        '<h4 class="main_color">' +
        CONFIG_COMPANY_NAME +
        '</h4>' +
        CONFIG_COMPANY_ADDRESS +
        "</div>";

    address_detail = address_detail.split("\n").join("<br />");
    var infowindow = new google.maps.InfoWindow({
        content: address_detail,
    });

    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}


$(document).ready(function () {
    
    var mapContact = document.getElementById("map-contact-canvas")
    if(mapContact && typeof GOOGLE_PLACES_API != 'undefined'){
        
        loadJS('https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_PLACES_API, drawMapContact )
    }

    var recapcha = document.getElementById("google__recaptcha")
    if(recapcha){
        recapcha.addEventListener('lazybeforeunveil', function(e){
            
            loadJS('https://www.google.com/recaptcha/api.js?hl=vi')
        })
    }
});
