var menu          = $("#header__sticky");
var lastScrollTop = 0;

function stickyMenu(menu, sticky) {
    
    if (typeof sticky === 'undefined' || !jQuery.isNumeric(sticky)) sticky = 0;
    if (typeof lastScrollTop === 'undefined' ) lastScrollTop = 0;
    if ($(window).scrollTop() >= sticky) {
        if ($('#just-for-height').length === 0) {
            menu.after('<div id="just-for-height" style="height:' + menu.outerHeight() + 'px"></div>')
        }
        menu.addClass("sticky");
    } else {
        menu.removeClass( 'show' );
        menu.removeClass("sticky");
        $('#just-for-height').remove();
    }
    
    if (menu.hasClass('sticky')) {
        /// detect case f5 browser

        if( 
            ($(window).scrollTop() > 0 && lastScrollTop == 0)
            || 
            $(window).scrollTop() < lastScrollTop    
        ){
            /// is f5 
            menu.addClass('show')
        } else {
            menu.removeClass('show')
        }
    }
    lastScrollTop = $(window).scrollTop()
}

$(document).ready(function () {

    /// create tooltip 
    Tipped.create('.simple-tooltip', {skin: 'light', size: 'large' })
    
    if (menu.length && !window.IS_ROBOT ) {
        var sticky = menu.offset().top + 1; // menu.outerHeight()
        // console.log(sticky)
        // if ($(window).width() > 767) {
            stickyMenu(menu, sticky)
            $(window).on('scroll', function () {
                stickyMenu(menu, sticky);
            });
        // }
    }



    // /***
    //  * đây là code search header trong trang blog khi bấm nút icon search thì nó toggle cái class để hiện thị search
    //  * Jquery set menu header click search 
    //  */
    //  $("#js_btn_toggle_search").click(function(){

    //     $("#js_search_header__form").toggleClass("show")
    // })
    /***
     * 
     * Jquery toggle menu mobile
     */
    
    // var $menu = $("#menu");
    // $menu.find(".navigate__link__icon_plus").click(function(){
    //     /// check is mobile have show class of toggle button is click
    //     if($menu.hasClass('show')){
    //         /// remove all class active link old 
    //         $(".navigate__link").removeClass('active')
    //         /// dont have class active so now active class click
    //         $(this).closest(".navigate__link").find('.dropdown-menu').slideToggle('fast', function(){

    //             if($(this).hasClass('active')){
    //                 $(this).closest(".navigate__link").removeClass('active')
    //             }else{
    //                 $(this).closest(".navigate__link").addClass('active')
    //             }
    //         })
    //     }
    // })

    /// button này là close trong menu khi bấm vô thì close đi 
    // đồng thời có xóa đi cái active của cái nút js_btn_header_toggle__menu
    menu.find("#js_menu__mobile_close").click(function(){
        $("#menu").toggleClass("show")
        // $("#js_btn_header_toggle__menu").removeClass('active')
        $("body").toggleClass("neo-scroll")
    })
    $("#js_btn_header_toggle__menu").click(function(){
        
        $("#menu").toggleClass("show")
        // $(this).toggleClass("active")
        $("body").toggleClass("neo-scroll")
    })


});






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

window.changeDistrict = function (e){ 

    var districtValue  = e.value
    var $select2Commune = $('#js__select-commune')
    $select2Commune.find('option').not(':first').remove()
    
    if( districtValue == 0 ){
        /// reset select 2 Commune to none loading 
        $select2Commune.val(districtValue)
    }else {

        /// fetch ajax DISTRICT
        var ROUTE_COMMUNES = "/api/v1/commune/" + districtValue
        fetch(ROUTE_COMMUNES)
        .then((resp) => resp.json())
        .then(function(res) {

            var COMMUNES = filterLocation(res.data, 'district', districtValue ) 
        
            var options = ''
            for (var optionIndex = 0; optionIndex < COMMUNES.length; optionIndex++) {
                options += `<option value="${COMMUNES[optionIndex].id}">${COMMUNES[optionIndex].text}</option>`
            }
            console.log(options)
            $select2Commune.html( $select2Commune.html() + options )
            return true
        })
        .catch(function(error) {
            console.log(error)
        })
    }
}