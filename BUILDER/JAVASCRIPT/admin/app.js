/// dom load success
$(document).ready(function() {

    link_sidebar_dropdown()

    $(".js__select_option_type_format").each(function(){
        var value = $( this ).val()
        if( value == 2 ){
            var group = $( this ).closest(".js-group-option").find(".js-clone-value-option")
            group.find('input').addClass('d-none')
            group.find('textarea').removeClass('d-none')
            CKEDITOR.replace( group.find('textarea').attr('id') );
        }
    })
    //// load select 2 
    var singleSelect = $('.js__single-select'),
        multiSelect  = $(".js__multi-select")
    if(singleSelect.length){
        runSelect2Single(singleSelect)
    }
    if(multiSelect.length){
        runSelect2Multi(multiSelect)
    }
    //// load image of ckfinder input to dom show image
    var imgsCkfinder = $(".img__outputCKFinder")
    if(imgsCkfinder.length){
        
        showAllImagesCkfinderOnload(imgsCkfinder)
    }
});
if( $("textarea[id^='editor']").length ){
    $("textarea[id^='editor']").each( function( index ) {
        
        CKEDITOR.replace( $(this).attr('id') );
    })
}


function link_sidebar_dropdown(){
    // $(".admin-sidebar .submenu .active").closest('.submenu').closest('li').addClass("open")
    var sidebar = $("#sidebar")
    if(!sidebar.hasClass('mini')){
        $("#sidebar .block_navigate").click(function(){
            var li = $(this),
            dropdown = li.find(".dropdown__item"),
            isOpen = true
            
            if (dropdown.is(':hidden')) {
                isOpen = false
            }
            dropdown.slideToggle('fast', function(){
                if(isOpen) li.removeClass('active')
                else li.addClass('active')
            })
        })
    }
    $("#sidebar .block_navigate")
    .on('mouseover', function() {
        var $menuItem = $(this),
        $submenuWrapper = $('.dropdown__item', $menuItem);
    
        // grab the menu item's position relative to its positioned parent
        var menuItemPos = $menuItem.position();
        
        // place the submenu in the correct position relevant to the menu item
        $submenuWrapper.css({
            top: menuItemPos.top,
            left: menuItemPos.left + Math.round($menuItem.outerWidth())
        });
    })
    .hover(
        function() {
            
            if(sidebar.hasClass('mini')){
                sidebar.addClass('z-index-hight')
                $(this).addClass('active-hover')
            }
        }, function() {
            
            if(sidebar.hasClass('mini')){
                sidebar.removeClass('z-index-hight')
                $(this).removeClass('active-hover')
            }
            
        }
        
    );
    
}

function toggle_sidebar(){

    var $sidebar           = $("#sidebar"),
        $right_content     = $("#js_right_content"),
        $iconToggleSidebar = $sidebar.find(".js_toggle_navigate__icon"),
        $iconToggleHeader  = $right_content.find(".js_icon_fa_toggle"),
        isFull             = false

    if($iconToggleSidebar.hasClass('hero-chevron-double-left')){
        isFull = true
    }
    
    if( isFull ){
        /// change to icon can show out 
        $iconToggleSidebar
        .removeClass('hero-chevron-double-left')
        .addClass('hero-chevron-double-right')
        /// change to sidebar class mini
        $sidebar
        .addClass('mini')
        /// change to content class sidebar-mini
        $right_content
        .addClass('sidebar-mini')
        /// change to sidebar icon header
        $iconToggleHeader
        .removeClass('fa-bars')
        .addClass('fa-times-square')
    }else{
        /// change to icon can hide in 
        $iconToggleSidebar
        .removeClass('hero-chevron-double-right')
        .addClass('hero-chevron-double-left')
        /// change to sidebar class full
        $sidebar
        .removeClass('mini')
        /// change to sidebar class mini
        $right_content
        .removeClass('sidebar-mini')
        /// change to sidebar icon header
        $iconToggleHeader
        .addClass('fa-bars')
        .removeClass('fa-times-square')
    }

}

function showErrorSystem(text){
    alert(" có lỗi ")
    console.log(text) 
}


function showImage__InputCKFinder( imageSrc, btnOrInputDom ){
    //. remove img class output-image-finder is exist
    var DF_ID_RESULT_IMAGE_CK            = "output-image-finder",
        DF_CLASS_INPUT_OUTPUT_IMAGE      = "img__outputCKFinder",
        DF_CLASS_GROUP_CKFINDER_SELECTOR = "wrapper__selectImageWithCKFinder"

    var groupJQUERY = $(btnOrInputDom).closest( "." + DF_CLASS_GROUP_CKFINDER_SELECTOR ),
        img_result  = groupJQUERY.find( "." + DF_ID_RESULT_IMAGE_CK )

    if( img_result ){

        img_result.remove()
    }
    
    var input = groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE)
    if( input ){
        input.val(imageSrc)
        input.valid()
    }
    
    var img_output_show           = document.createElement("img")
        img_output_show.id        = DF_ID_RESULT_IMAGE_CK
        img_output_show.className = DF_ID_RESULT_IMAGE_CK
        img_output_show.src       = imageSrc

    groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE).parent().append( img_output_show )
}

function selectImageWithCKFinder( ele ) {
    
    CKFinder.popup( {
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {

                var file     = evt.data.files.first(),
                    imageSrc = file.getUrl()
                showImage__InputCKFinder( imageSrc, ele )
            });
            finder.on( 'file:choose:resizedImage', function( evt ) {

                var imageSrc = evt.data.resizedUrl
                showImage__InputCKFinder( imageSrc, ele )
            });
        }
    } );
}


function createSlug( str ){

    str = str.toLowerCase()

    if( wanakana ) str = wanakana.toRomaji(str)

    //Đổi ký tự có dấu thành không dấu
    str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    str = str.replace(/đ/gi, 'd')
    str = str.replace(/[\u00C0-\u00C5]/ig,'a')
    str = str.replace(/[\u00C8-\u00CB]/ig,'e')
    str = str.replace(/[\u00CC-\u00CF]/ig,'i')
    str = str.replace(/[\u00D2-\u00D6]/ig,'o')
    str = str.replace(/[\u00D9-\u00DC]/ig,'u')
    str = str.replace(/[\u00D1]/ig,'n')
    // str = str.replace(/[^a-z0-9 ]+/gi,'')
    str = str.trim().replace(/ /g,'-')
    str = str.replace(/[\-]{2}/g,'')

    // var slug =  (str.replace(/[^a-z\- ]*/gi,''))
    return str
}

function isExistSlug( title ){

    var DF_ID_HREF   = 'show-url'
    var DF_ID_RESULT = 'result-slug'
    var slug         = createSlug( title )

    if( !slug ) return false

    /// reset slug input
    $( "input[name=slug]").val( slug )
    $("#"+DF_ID_RESULT).remove()
    $("#"+DF_ID_HREF).attr('href', "/" + slug )
    $("button[type=submit]").attr('disabled', true )

    if($( "input[name=_slug_old]")){
        var old_slug = $( "input[name=_slug_old]").val()
        if(old_slug == slug){
            showResultSlugExisted(old_slug != slug)
            return true
        }
    }

    fetch( ACTION_CHECK_SLUG + "/" + slug, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        
        return showResultSlugExisted(!!res.ok)
    })
    .catch(error => {
        alert("có lỗi")
    })
}
function showResultSlugExisted(result){

    var DF_MESSAGE        = "slug đã tồn tại",
        DF_CLASS_RESULT   = 'text-color-danger',
        DF_ID_RESULT      = 'result-slug'
    if( !result ){

        DF_MESSAGE = "slug chưa tồn tại"
        if($( "input[name=_slug_old]") && $( "input[name=_slug_old]").val() == $( "input[name=slug]").val()){
            DF_MESSAGE = "slug chưa thay đổi"
        }
        DF_CLASS_RESULT = 'text-color-success-color-dark'
    }

    var parag             = document.createElement("p")
        parag.id          = DF_ID_RESULT
        parag.className   = DF_CLASS_RESULT
        parag.textContent = DF_MESSAGE

    $( "input[name=slug]").parent().append( parag )
    $("button[type=submit]").attr('disabled', result )
}


function runSelect2Single(dom){
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

function removeBlockParent(e){

    $( e ).closest('.js-group-option').remove()
}

function showAllImagesCkfinderOnload( imgs ){

    imgs.each(function( indexInputImg ){
        var imageSrc = $( this ).val()
        
        if( imageSrc ){
            showImage__InputCKFinder( imageSrc, this )
        }
    })
}


function listenChangeTypeOption(e){

    var group = $( e ).closest('.js-group-option')

    var input    = group.find('input[name="value_text[]"]'),
        textarea = group.find('textarea[name="value_html[]"]'),
        cke = group.find('.cke')
        
    if( e.value == 1 ){
        input.removeClass('d-none')
        textarea.addClass('d-none')
        cke.addClass('d-none')
    }else{
        input.addClass('d-none')
        textarea.removeClass('d-none')
        if( cke.length ){
            cke.removeClass('d-none')
        }else{
            CKEDITOR.replace( textarea.attr('id') );
        }
    }
}

function addMoreBlock(e){

    var blocks = document.getElementsByClassName("js-group-option"),
        block  = null
    if( blocks.length ){
        block = blocks[0]
    }
    if( block ){
        $(block).find('select').select2("destroy")
        var groupInputValue  = $(block).find(".js-clone-value-option"),
            inputValueText   = groupInputValue.find('input').clone(),
            inputValueHtml   = groupInputValue.find('textarea').clone(),
            selectTypeOption = $(block).find('select').clone()
            inputValueText.val('')
            inputValueText.removeClass('d-none')
            inputValueHtml.attr('id', 'ckeditor-' + blocks.length)
            inputValueHtml.attr('style','')
            inputValueHtml.addClass('d-none')
            selectTypeOption.attr('id', 'select2-' + blocks.length)
            selectTypeOption.val('1')
            
        //// clone
        var domClone = $(block).clone()
        /// initial select2 remove 
        runSelect2Single($(block).find('select'))
        /// reset input data 
        domClone.find("input, textarea").val('')
        domClone.find(".js-clone-value-option").html('')
        domClone.find(".js-clone-value-option").append(inputValueText)
        domClone.find(".js-clone-value-option").append(inputValueHtml)
        domClone.find(".js-clone-select-option").html('')
        domClone.find(".js-clone-select-option").append(selectTypeOption)
        /// initial select2 new 
        runSelect2Single(domClone.find('select'))
        /// setter input data 
        $(blocks).last().after(domClone)
    }
}

/// dom load success