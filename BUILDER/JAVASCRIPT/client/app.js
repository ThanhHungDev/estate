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

    // /// slider 
    // $('.slider>div.d-none').removeClass('d-none')
    // $('.slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    // });

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


    //// load select 2 
    var singleSelect = $('.js__single-select'),
        multiSelect  = $(".js__multi-select")

    var select2Commune = $('#js__select-commune')
    if( select2Commune ){
        
        if(typeof COMMUNES != 'undefined'){
            runSelect2Single(select2Commune, { data : [] } )
        }
    }

    var select2District = $('#js__select-district')
    if( select2District ){
        
        if(typeof DISTRICTS != 'undefined'){
            runSelect2Single(select2District, { data : [] } )
            .on("change", function (e) {

                
                var districtValue  = this.value
                var select2Commune = $('#js__select-commune')
                
                if( districtValue == 0 ){
                    
                    /// không chọn gì hết ta cần reset xã
                    select2Commune.find('option:not(:first)').remove()
                    select2Commune.select2("destroy")
                    runSelect2Single(select2Commune, { data : [] })
                    select2Commune.trigger('change')
                }else if( typeof COMMUNES != 'undefined' ){

                    var cloneCommune   = []
                    for( var iCom = 0; iCom < COMMUNES.length; iCom ++ ){

                        if( COMMUNES[iCom].district == districtValue){

                            var obj = { id: COMMUNES[iCom].id, text: COMMUNES[iCom].text }
                            cloneCommune.push(obj)
                        }
                    }
                    select2Commune.find('option:not(:first)').remove()
                    select2Commune.select2("destroy")
                    runSelect2Single(select2Commune, { data : cloneCommune })
                    select2Commune.trigger('change')
                }
            })
        }
    }
    var select2province = $('#js__select-province')
    if( select2province ){
        
        if(typeof PROVINCES != 'undefined'){
            runSelect2Single(select2province, { data : PROVINCES } )
            .on("change", function (e) {

                var provinceValue   = this.value
                var select2District = $('#js__select-district')
                /// add loadding
                var optionFirst = select2District.find('option:first')
                var dataDistricts = [{
                    id: 0,
                    text: optionFirst.text() + '<b class="spinner"><i></i><i></i><i></i><i></i></b>'
                }]
                /// reset select 2 district to none loading 
                select2District.find('option').remove()

                select2District.select2("destroy")
                runSelect2Single(select2District, { data : dataDistricts })
                // select2District.trigger('change')
                
                // if( provinceValue == 0 ){
                    
                    
                // }else if( typeof DISTRICTS != 'undefined' ){

                    
                //     var cloneDistrict   = []

                //     for( var iDis = 0; iDis < DISTRICTS.length; iDis ++ ){

                //         if( DISTRICTS[iDis].province == provinceValue){

                //             var obj = { id: DISTRICTS[iDis].id, text: DISTRICTS[iDis].text }
                //             cloneDistrict.push(obj)
                //         }
                //     }
                //     select2District.find('option:not(:first)').remove()
                //     select2District.select2("destroy")
                //     runSelect2Single(select2District, { data : cloneDistrict })
                //     select2District.trigger('change')
                // }
            })
        }
    }
    if(singleSelect.length){
        runSelect2Single(singleSelect)
    }
    if(multiSelect.length){
        runSelect2Multi(multiSelect) 
    }
})

function runSelect2Single(dom, options){
    var DF_OPTION = {
        width: '100%',
        language: {
            noResults: function(){
                return "không có kết quả trùng khớp";
            }
        },
        escapeMarkup: function(markup) {
            return markup;
        }
    }

    var isObject = (null == options || "object" != typeof options)
    if (!isObject){
        for (var attr in options) {
            if (options.hasOwnProperty(attr)){
                DF_OPTION[attr] = options[attr]
            }
        }
    }
    // console.log(dom.select2( DF_OPTION ).data('select2').$dropdown.addClass('my-container'))
    return dom.select2( DF_OPTION )
}
function runSelect2Multi(dom){
    dom.select2(
        { 
            language: {
                noResults: function(){
                    return "không có kết quả trùng khớp";
                }
            },
        }
    );
}

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
