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

    /// create tooltip 
    Tipped.create('.simple-tooltip', {skin: 'light', size: 'large' });
    

    // drawGoogleMapLazyload();
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
        
        console.log(`có lỗi cần send mail ${event.type}: ${event.message}\n`)
    });


    //// load select 2 - location
    var select2Commune = $('#js__select-commune')
    var COMMUNES = []
    if( select2Commune.length ){
        
        if(typeof COMMUNES != 'undefined'){
            runSelect2Single(select2Commune, { data : [] } )
        }
    }

    var select2District = $('#js__select-district')
    var DISTRICTS = []
    if( select2District.length ){
        
        if(typeof DISTRICTS != 'undefined'){
            runSelect2Single(select2District, { data : [] } )
            .on("change", function (e) {

                
                var districtValue  = this.value
                var select2Commune = $('#js__select-commune')
                /// add loadding
                var optionFirstCommune     = select2Commune.find('option:first')
                var optionFirstCommuneText = optionFirstCommune.text()
                
                if( districtValue == 0 ){
                    var dataCommunesNull = [{ id: 0, text: optionFirstCommuneText }]
                    /// reset select 2 Commune to none loading 
                    resetSelect2Location(select2Commune, dataCommunesNull)
                }else {

                    var dataCommunes = [{
                        id: 0,
                        text: optionFirstCommuneText + '<b class="spinner"><i></i><i></i><i></i><i></i></b>'
                    }]
                    /// reset select 2 district to none loading 
                    resetSelect2Location(select2Commune, dataCommunes)

                    /// fetch ajax DISTRICT
                    if( typeof ROUTE_COMMUNES == 'undefined'){

                        var ROUTE_COMMUNES = "/api/v1/communes"
                    }
                    if( !COMMUNES.length  ){

                        fetch(ROUTE_COMMUNES)
                        .then((resp) => resp.json())
                        .then(function(res) {

                            COMMUNES = res.data
                            var communesInDistrict = [{ id: 0, text: optionFirstCommuneText }]
                            .concat(filterLocation(COMMUNES, 'district', districtValue ))
                            resetSelect2Location(select2Commune, communesInDistrict )
                            return true
                        })
                        .catch(function(error) {
                            console.log(error)
                        })
                    }else{
                        var communesInDistrict = [{ id: 0, text: optionFirstCommuneText }]
                            .concat(filterLocation(COMMUNES, 'district', districtValue ))
                            resetSelect2Location(select2Commune, communesInDistrict )
                    }
                }
            })
        }
    }
    var select2province = $('#js__select-province')
    if( select2province.length ){
        
        if(typeof PROVINCES != 'undefined'){
            runSelect2Single(select2province, { data : PROVINCES } )
            .on("change", function (e) {

                var provinceValue   = this.value
                var select2District = $('#js__select-district')
                /// add loadding
                var optionFirst     = select2District.find('option:first')
                var optionFirstText = optionFirst.text()
                
                if( provinceValue == 0 ){
                    var dataDistrictsNull = [{ id: 0, text: optionFirstText }]
                    /// reset select 2 district to none loading 
                    resetSelect2Location(select2District, dataDistrictsNull)
                }else {

                    var dataDistricts = [{ 
                        id: 0,
                        text: optionFirstText + '<b class="spinner"><i></i><i></i><i></i><i></i></b>'
                    }]
                    /// reset select 2 district to none loading 
                    resetSelect2Location(select2District, dataDistricts)

                    /// fetch ajax DISTRICT
                    if( typeof ROUTE_DISTRICTS == 'undefined'){

                        var ROUTE_DISTRICTS = "/api/v1/districts"
                    }
                    if( !DISTRICTS.length  ){

                        fetch(ROUTE_DISTRICTS)
                        .then((resp) => resp.json())
                        .then(function(res) {

                            DISTRICTS = res.data
                            var districtsInProvince = [{ id: 0, text: optionFirstText }]
                            .concat(filterLocation(DISTRICTS, 'province', provinceValue ))
                            resetSelect2Location(select2District, districtsInProvince )
                            return true
                        })
                        .catch(function(error) {
                            console.log(error)
                        })
                    }else{
                        var districtsInProvince = [{ id: 0, text: optionFirstText }]
                        .concat(filterLocation(DISTRICTS, 'province', provinceValue ))
                        resetSelect2Location(select2District, districtsInProvince )
                    }
                }
            })
        }
    }


    
    

    var initPriceRange = false
    var $select2Price  = $('#js__select-price')
    if( $select2Price.length ){
        
        runSelect2Single($select2Price, { 
            minimumResultsForSearch: -1,
            theme: 'default js__class__select-price',
            templateResult: function (state) {
                if (!state.id) {
                    return state.text
                }
                if( parseInt(state.id) == 1){
                    $spiceRange = $(
                        `<div class="wrapper-range-select2">
                            <!-- <div class="text-click-me">bấm để chọn</div> -->
                            <div id="slider__spice"></div>
                            <div class="value-price" id="spice__value"></div>
                        </div>`
                    )

                    var startsUiSlider = [0.1, 10]
                    if($("#js__price-range-input").val()){
                        startsUiSlider = $("#js__price-range-input").val().split('-')
                    }

                    
                    var $slider__spice = $spiceRange.find('#slider__spice')
                    if(!initPriceRange && $slider__spice.length){

                        var dom__price = $slider__spice.get(0)
                        noUiSlider.create(dom__price, {
                            start: startsUiSlider,
                            connect: [ false, true, false ],
                            step: 0.1,
                            range: {
                                'min': [0.1],
                                'max': [10]
                            }
                        })
                        dom__price.noUiSlider.on('update', function (values) {

                            $select2Price.find('option[value=1]').attr("price__range",'1')
                            var $option_price_range = $select2Price.find('option[price__range=1]')
                            
                            var fromVal = parseInt(( values[0] * 10 )) / 10,
                                toVal   = parseInt(( values[1] * 10 )) / 10
                            if( fromVal < 1){
                                fromVal = ( fromVal * 1000 ) + ' triệu -' 
                            }else{
                                fromVal = fromVal + ' tỷ -' 
                            }
                            if( toVal < 1){
                                toVal = ( toVal * 1000 ) + ' triệu' 
                            }else{
                                toVal += ' tỷ'
                            }
                            
                            var textPriceRange = fromVal + toVal,
                                valPriceRange  = values.join('-')
                            
                            $("#spice__value").text(textPriceRange)
                            $('.js__class__select-price').find(".select2-selection__rendered").text(textPriceRange)
                            /// fix option select
                            $option_price_range.text(textPriceRange).val(valPriceRange)
                            
                            $("#js__price-range-input").val(valPriceRange)
                        })
                    }
                    return $spiceRange
                }
                
                return state.text
            }
        })
        $select2Price.on('select2:selecting', function (e) {
            // Do something
            
            var valSelecting = parseInt(e.params.args.data.id)
            if(valSelecting == 1){
                e.preventDefault()
            }else{
                $("#js__price-range-input").val("")
            }

            var $option_price_range = $select2Price.find('option[value='+valSelecting+']')
            $('.js__class__select-price').find(".select2-selection__rendered").text($option_price_range.val())
        })
    }

    var $select2Area = $('#js__select-area')
    if( $select2Area.length ){
        
        runSelect2Single($select2Area, { minimumResultsForSearch: -1 } ) 
    }

    var $select2Direction = $('#js__select-direction')
    if( $select2Direction.length ){
        
        runSelect2Single($select2Direction, { minimumResultsForSearch: -1 } )
    }

    var $select2Facade = $('#js__select-facade')
    if( $select2Facade.length ){
        
        runSelect2Single($select2Facade, { minimumResultsForSearch: -1 } )
    }

    var $singleSelect = $('.js__single-select')
    if($singleSelect.length){

        runSelect2Single($singleSelect)
    }

    var $multiSelect  = $(".js__multi-select")
    if($multiSelect.length){

        runSelect2Multi($multiSelect) 
    }
    /// end select2 
})

function toggleAdvancedSearch(){

    var btnAdvancedSearch = document.getElementById("js__toggle-advanced-search")
    var domAdvancedSearch = document.getElementById("js__advanced-search")

    var classChevronRight = 'fa-chevron-double-right',
        classChevronDown  = 'fa-chevron-double-down',
        classIcon = 'icon'
    var chervons = btnAdvancedSearch.getElementsByClassName(classIcon)
    if(chervons.length){

        chervons[0].classList.toggle(classChevronRight)
        chervons[0].classList.toggle(classChevronDown)
    }

    domAdvancedSearch.classList.toggle('d-none')
}

function filterLocation( data, field, value ){

    var cloneData   = []

    for( var iData = 0; iData < data.length; iData ++ ){

        if( data[iData][field] == value){

            var obj = { id: data[iData].id, text: data[iData].text }
            cloneData.push(obj)
        }
    }
    return cloneData
}

function resetSelect2Location( dom, data ){

    dom.find('option').remove()
    dom.select2("destroy")
    runSelect2Single(dom, { data : data })
    dom.trigger('change')
}

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
        },
        templateSelection: function(state) {
            return state.text
        },
        templateResult: function (state) {
            return state.text
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
            width: '100%',
            language: {
                noResults: function(){
                    return "không có kết quả trùng khớp";
                }
            },
        }
    )
    dom.on("select2:selecting", function(e) { 

        var currselspan = dom.next().find('.select2-selection--multiple').first()
        $(currselspan).scrollTop($(currselspan).prop('scrollHeight'))
        $(".select2-selection--multiple input").focus()
    });
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


function showLightGaleries(e){
    $(e).closest('.item').find(".lightgallery img").click()
}


function showModalNoClose(e){
    var idModal = $(e).attr('data-modal')
    $(idModal).modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
    });
}