/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS(src, cb){

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

    /// slider 
    $('.slider>div.d-none').removeClass('d-none')
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /// create tooltip 
    Tipped.create('.simple-tooltip', {skin: 'light', size: 'large' });
    

    drawGoogleMapLazyload();
    // drawMapContact();

    jQuery(window).on("resize", function (e) {
        // drawGoogleMap();
        // drawMapContact();
    });

    /***
     * 
     * Jquery set menu header click search 
     */
    $("#js_btn_toggle_search").click(function(){

        $("#js_search_header__form").toggleClass("show")
    })
    /***
     * 
     * Jquery toggle menu mobile
     */
    $("#js_btn_header_toggle__menu").click(function(){
        
        $("#menu").toggleClass("show")
        $("body").toggleClass("neo-scroll")
    })
    var $menu = $("#menu");
    $menu.find(".navigate__link__icon_plus").click(function(){
        /// check is mobile have show class of toggle button is click
        if($menu.hasClass('show')){
            /// remove all class active link old 
            $(".navigate__link").removeClass('active')
            /// dont have class active so now active class click
            $(this).closest(".navigate__link").find('.dropdown-menu').slideToggle('fast', function(){

                if($(this).hasClass('active')){
                    $(this).closest(".navigate__link").removeClass('active')
                }else{
                    $(this).closest(".navigate__link").addClass('active')
                }
            })
        }
    })
    $menu.find("#js_menu__mobile_close").click(function(){
        $("#menu").toggleClass("show")
        $("body").toggleClass("neo-scroll")
    })
    $("#js_menu__mobile_close_pc").click(function(){
        
        $("#menu").toggleClass("show")
        $("body").toggleClass("neo-scroll")
    })

    window.addEventListener('error', (event) => {
        
        alert(`có lỗi cần send mail ${event.type}: ${event.message}\n`)
    });
})


function copyClipboard(copyText) {
  
    /* Select the text field */
    copyText.select()
    /*For mobile devices*/
    copyText.setSelectionRange(0, 99999)

    /* Copy the text inside the text field */
    document.execCommand("copy")
  }


function backToTop() {

    if (window.pageYOffset > 0) {

        window.scrollBy(0, -80);
        setTimeout(this.backToTop, 10);
    }
    
}



function drawGoogleMapLazyload() {

    // if( typeof IS_ROBOT != "undefined" && IS_ROBOT ){
    //     return false
    // }

    var map = document.getElementById("map-canvas")
    if (GOOGLE_PLACES_API && map) {
        
        var observer = new IntersectionObserver(
            function(entries, observer) {
                // Detect intersection https://calendar.perfplanet.com/2017/progressive-image-loading-using-intersection-observer-and-sqip/#comment-102838
                var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio >= 1
                if (isIntersecting) {
                    loadJS('https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_PLACES_API, drawGoogleMap )
                    observer.unobserve(map)
                }
            },
            {
                rootMargin: '400px',
                threshold: 0
            }
        )

        observer.observe(map)
    }
}


function drawGoogleMap(){
    
    var styles = [
        {
            stylers: [{ saturation: 0 }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                //  { lightness: 100 },
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
        MAP_LAT = 10.651623
        MAP_LONG = 107.270763
    }
    var myLatlng = new google.maps.LatLng(MAP_LAT, MAP_LONG);
    var mapOptions = {
        zoom: 15,
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
        document.getElementById("map-canvas"),
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
    var myLatlng = new google.maps.LatLng(35.707616, 139.669912);
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




function toggleCatalogue(e){

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
