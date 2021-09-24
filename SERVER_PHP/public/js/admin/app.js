/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/admin/js/app.js ***!
  \***********************************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
var lazyloadScripts = [],
    lazyloadStylesheet = [];

function loadJS(src, cb) {
  if (lazyloadScripts.indexOf(src) > -1) {
    /// call function callback
    return cb();
  }

  lazyloadScripts.push(src);
  var ref = document.getElementsByTagName("script")[0];
  var script = document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);

  if (cb && typeof cb === "function") {
    script.onload = cb;
  }

  return script;
}

function loadStylesheet(href, rel) {
  console.log(href, "href");

  if (lazyloadStylesheet.indexOf(href) > -1) {
    /// call function callback
    return true;
  }

  lazyloadStylesheet.push(href);
  var link = document.createElement("link");
  link.href = href;
  link.rel = rel; // append link element to html

  document.body.appendChild(link); // Loaded successfully

  link.onload = function () {
    console.log('success', href);
  }; // Loading failed


  link.onerror = function () {
    console.log('error');
  };

  return link;
} /// dom load success


$(document).ready(function () {
  /// create json editor
  createJsonHowto("js__json-how-to"); //// load google map begin 

  $("#js-show-google-map-request").click(function () {
    var mapRequest = document.getElementById("map-request");

    if (mapRequest) {
      if (typeof GOOGLE_PLACES_API != 'undefined') {
        loadJS('https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_PLACES_API, drawMapRequest);
      }
    }
  }); //// load lazyload google map end

  link_sidebar_dropdown();
  $(".js__select_option_type_format").each(function () {
    var value = $(this).val();

    if (value == 2) {
      var group = $(this).closest(".js-group-option").find(".js-clone-value-option");
      group.find('input').addClass('d-none');
      group.find('textarea').removeClass('d-none');
      CKEDITOR.replace(group.find('textarea').attr('id'));
    }
  }); //// load select 2 

  var singleSelect = $('.js__single-select'),
      multiSelect = $(".js__multi-select");

  if (singleSelect.length) {
    runSelect2Single(singleSelect);
  }

  if (multiSelect.length) {
    runSelect2Multi(multiSelect);
  } //// load image of ckfinder input to dom show image


  var imgsCkfinder = $(".img__outputCKFinder");

  if (imgsCkfinder.length) {
    showAllImagesCkfinderOnload(imgsCkfinder);
  }
});

if ($("textarea[id^='editor']").length) {
  $("textarea[id^='editor']").each(function (index) {
    CKEDITOR.replace($(this).attr('id'), {
      format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div' // <---here set the format tag

    });
  });
}

function link_sidebar_dropdown() {
  // $(".admin-sidebar .submenu .active").closest('.submenu').closest('li').addClass("open")
  var sidebar = $("#sidebar");

  if (!sidebar.hasClass('mini')) {
    $("#sidebar .block_navigate").click(function () {
      var li = $(this),
          dropdown = li.find(".dropdown__item"),
          isOpen = true;

      if (dropdown.is(':hidden')) {
        isOpen = false;
      }

      dropdown.slideToggle('fast', function () {
        if (isOpen) li.removeClass('active');else li.addClass('active');
      });
    });
  }

  $("#sidebar .block_navigate").on('mouseover', function () {
    var $menuItem = $(this),
        $submenuWrapper = $('.dropdown__item', $menuItem); // grab the menu item's position relative to its positioned parent

    var menuItemPos = $menuItem.position(); // place the submenu in the correct position relevant to the menu item

    $submenuWrapper.css({
      top: menuItemPos.top,
      left: menuItemPos.left + Math.round($menuItem.outerWidth())
    });
  }).hover(function () {
    if (sidebar.hasClass('mini')) {
      sidebar.addClass('z-index-hight');
      $(this).addClass('active-hover');
    }
  }, function () {
    if (sidebar.hasClass('mini')) {
      sidebar.removeClass('z-index-hight');
      $(this).removeClass('active-hover');
    }
  });
}

window.toggle_sidebar = function () {
  var $sidebar = $("#sidebar"),
      $right_content = $("#js_right_content"),
      $iconToggleSidebar = $sidebar.find(".js_toggle_navigate__icon"),
      $iconToggleHeader = $right_content.find(".js_icon_fa_toggle"),
      isFull = false;

  if ($iconToggleSidebar.hasClass('hero-chevron-double-left')) {
    isFull = true;
  }

  if (isFull) {
    /// change to icon can show out 
    $iconToggleSidebar.removeClass('hero-chevron-double-left').addClass('hero-chevron-double-right'); /// change to sidebar class mini

    $sidebar.addClass('mini'); /// change to content class sidebar-mini

    $right_content.addClass('sidebar-mini'); /// change to sidebar icon header

    $iconToggleHeader.removeClass('fa-bars').addClass('fa-times-square');
  } else {
    /// change to icon can hide in 
    $iconToggleSidebar.removeClass('hero-chevron-double-right').addClass('hero-chevron-double-left'); /// change to sidebar class full

    $sidebar.removeClass('mini'); /// change to sidebar class mini

    $right_content.removeClass('sidebar-mini'); /// change to sidebar icon header

    $iconToggleHeader.addClass('fa-bars').removeClass('fa-times-square');
  }
};

window.showErrorSystem = function (text) {
  alert(" có lỗi ");
  console.log(text);
};

window.showImage__InputCKFinder = function (imageSrc, btnOrInputDom) {
  //. remove img class output-image-finder is exist
  var DF_ID_RESULT_IMAGE_CK = "output-image-finder",
      DF_CLASS_INPUT_OUTPUT_IMAGE = "img__outputCKFinder",
      DF_CLASS_GROUP_CKFINDER_SELECTOR = "wrapper__selectImageWithCKFinder";
  var groupJQUERY = $(btnOrInputDom).closest("." + DF_CLASS_GROUP_CKFINDER_SELECTOR),
      img_result = groupJQUERY.find("." + DF_ID_RESULT_IMAGE_CK);

  if (img_result) {
    img_result.remove();
  }

  var input = groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE);

  if (input) {
    input.val(imageSrc);
    input.valid();
  }

  var img_output_show = document.createElement("img");
  img_output_show.id = DF_ID_RESULT_IMAGE_CK;
  img_output_show.className = DF_ID_RESULT_IMAGE_CK;
  img_output_show.src = imageSrc;

  img_output_show.onerror = function () {
    this.src = '/images/failed.jpg';
  };

  groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE).parent().append(img_output_show);
};

window.selectImageWithCKFinder = function (ele) {
  CKFinder.popup({
    chooseFiles: true,
    width: 800,
    height: 600,
    onInit: function onInit(finder) {
      finder.on('files:choose', function (evt) {
        var file = evt.data.files.first(),
            imageSrc = file.getUrl();
        showImage__InputCKFinder(imageSrc, ele);
      });
      finder.on('file:choose:resizedImage', function (evt) {
        var imageSrc = evt.data.resizedUrl;
        showImage__InputCKFinder(imageSrc, ele);
      });
    }
  });
};

window.selectMultiImageWithCKFinder = function (ele) {
  CKFinder.popup({
    selectMultiple: true,
    chooseFiles: true,
    width: 800,
    height: 600,
    onInit: function onInit(finder) {
      finder.on('files:choose', function (evt) {
        var urls = [];

        for (i = 0; i < evt.data.files.models.length; i++) {
          var file = evt.data.files.models[i];
          var tempurl = file.getUrl();
          urls.push(tempurl);
        } //// draw url img and imput


        showlstImage__InputCKFinder(urls, ele);
      });
    }
  });
};

window.showlstImage__InputCKFinder = function (imageSrcs, btnOrInputDom) {
  //. remove img class output-image-finder is exist
  var DF_ID_RESULT_IMAGE_CK = "output-image-finder-multi",
      DF_CLASS_INPUT_OUTPUT_IMAGE = "img__outputCKFinder",
      DF_CLASS_GROUP_CKFINDER_SELECTOR = "wrapper__selectImageWithCKFinder";
  var groupJQUERY = $(btnOrInputDom).closest("." + DF_CLASS_GROUP_CKFINDER_SELECTOR),
      img_result = groupJQUERY.find("#".concat(DF_ID_RESULT_IMAGE_CK));

  if (img_result) {
    img_result.remove();
  }

  var groupImagesResult = document.createElement('div');
  groupImagesResult.className = "d-block";
  var wrapperImagesResult = document.createElement('div');
  wrapperImagesResult.className = DF_ID_RESULT_IMAGE_CK;
  wrapperImagesResult.id = DF_ID_RESULT_IMAGE_CK;

  for (var posShowlstImage = 0; posShowlstImage < imageSrcs.length; posShowlstImage++) {
    var blockImagesInput = document.createElement('div');
    blockImagesInput.className = 'outputCKFinder__item'; /// 

    var inputImagesInput = document.createElement('input');
    inputImagesInput.type = "text";
    inputImagesInput.className = "d-none";
    inputImagesInput.value = imageSrcs[posShowlstImage];
    inputImagesInput.name = 'images[]'; /// 

    var imgImagesInput = document.createElement('img');
    imgImagesInput.className = 'outputCKFinder__item-img';
    imgImagesInput.src = imageSrcs[posShowlstImage];

    imgImagesInput.onerror = function () {
      this.src = '/images/failed.jpg';
    }; /// 


    var removeImagesInput = document.createElement('i');
    removeImagesInput.className = 'fad fa-times-square btn__delete-image';

    removeImagesInput.onclick = function () {
      $(this).closest('.outputCKFinder__item').remove();
    };

    blockImagesInput.appendChild(inputImagesInput);
    blockImagesInput.appendChild(imgImagesInput);
    blockImagesInput.appendChild(removeImagesInput);
    wrapperImagesResult.appendChild(blockImagesInput);
  }

  groupImagesResult.appendChild(wrapperImagesResult);
  groupJQUERY.append(groupImagesResult); // var input = groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE);
  // if (input) {
  //   input.val(imageSrc);
  //   input.valid();
  // }
  // var img_output_show = document.createElement("img");
  // img_output_show.id = DF_ID_RESULT_IMAGE_CK;
  // img_output_show.className = DF_ID_RESULT_IMAGE_CK;
  // img_output_show.src = imageSrc;
  // img_output_show.onerror = function () {
  //   this.src = '/images/failed.jpg';
  // };
  // groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE).parent().append(img_output_show);
};

function createSlug(str) {
  str = str.toLowerCase(); //Đổi ký tự có dấu thành không dấu

  str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  str = str.replace(/đ/gi, 'd');
  str = str.replace(/[\u00C0-\u00C5]/ig, 'a');
  str = str.replace(/[\u00C8-\u00CB]/ig, 'e');
  str = str.replace(/[\u00CC-\u00CF]/ig, 'i');
  str = str.replace(/[\u00D2-\u00D6]/ig, 'o');
  str = str.replace(/[\u00D9-\u00DC]/ig, 'u');
  str = str.replace(/[\u00D1]/ig, 'n'); // str = str.replace(/[^a-z0-9 ]+/gi,'')

  str = str.trim().replace(/ /g, '-');
  str = str.replace(/[\-]{2}/g, ''); // var slug =  (str.replace(/[^a-z\- ]*/gi,''))

  return str;
}

window.isExistSlug = function (title) {
  var DF_ID_HREF = 'show-url';
  var DF_ID_RESULT = 'result-slug';
  var slug = createSlug(title);
  if (!slug) return false; /// reset slug input

  $("input[name=slug]").val(slug);
  $("#" + DF_ID_RESULT).remove();
  $("#" + DF_ID_HREF).attr('href', "/" + slug);
  $("button[type=submit]").attr('disabled', true);

  if ($("input[name=_slug_old]")) {
    var old_slug = $("input[name=_slug_old]").val();

    if (old_slug == slug) {
      showResultSlugExisted(old_slug != slug);
      return true;
    }
  }

  fetch(ACTION_CHECK_SLUG + "/" + slug, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return showResultSlugExisted(!!res.ok);
  })["catch"](function (error) {
    alert("có lỗi");
  });
};

function showResultSlugExisted(result) {
  var DF_MESSAGE = "slug đã tồn tại",
      DF_CLASS_RESULT = 'text-color-danger',
      DF_ID_RESULT = 'result-slug';

  if (!result) {
    DF_MESSAGE = "slug chưa tồn tại";

    if ($("input[name=_slug_old]") && $("input[name=_slug_old]").val() == $("input[name=slug]").val()) {
      DF_MESSAGE = "slug chưa thay đổi";
    }

    DF_CLASS_RESULT = 'text-color-success-color-dark';
  }

  var eleResult = document.getElementById(DF_ID_RESULT);

  if (eleResult) {
    eleResult.remove();
  }

  var parag = document.createElement("p");
  parag.id = DF_ID_RESULT;
  parag.className = DF_CLASS_RESULT;
  parag.textContent = DF_MESSAGE;
  $("input[name=slug]").closest('.js-parent__create-slug').append(parag);
  $('input[name=slug]').valid();
  $("button[type=submit]").attr('disabled', result);

  if (!$('input[name=site_name]').val().trim()) {
    $('input[name=site_name]').val($('input[name=title]').val() || $('input[name=name]').val());
  }
}

window.toggleEditSlugLink = function (e) {
  var $btnEdit = $(e.target);
  $("input[name=slug]").attr('readonly', function (index, attr) {
    return !attr;
  });
  var jsToggleKey = document.getElementById('js-toggle-icon-key');

  if (jsToggleKey) {
    jsToggleKey.classList.toggle('d-none');
  }

  var jsToggleEdit = document.getElementById('js-toggle-icon-edit');

  if (jsToggleEdit) {
    jsToggleEdit.classList.toggle('d-none');
  }

  return false;
};

function runSelect2Single(dom) {
  dom.select2({
    language: {
      noResults: function noResults() {
        return "không có kết quả trùng khớp";
      }
    }
  });
}

function runSelect2Multi(dom) {
  dom.select2({
    language: {
      noResults: function noResults() {
        return "không có kết quả trùng khớp";
      }
    }
  });
}

window.removeBlockParent = function (e) {
  $(e).closest('.js-group-option').remove();
};

function showAllImagesCkfinderOnload(imgs) {
  imgs.each(function (indexInputImg) {
    var imageSrc = $(this).val();

    if (imageSrc) {
      showImage__InputCKFinder(imageSrc, this);
    }
  });
}

window.listenChangeTypeOption = function (e) {
  var group = $(e).closest('.js-group-option');
  var input = group.find('input[name="value_text[]"]'),
      textarea = group.find('textarea[name="value_html[]"]'),
      cke = group.find('.cke');

  if (e.value == 1) {
    input.removeClass('d-none');
    textarea.addClass('d-none');
    cke.addClass('d-none');
  } else {
    input.addClass('d-none');
    textarea.removeClass('d-none');

    if (cke.length) {
      cke.removeClass('d-none');
    } else {
      CKEDITOR.replace(textarea.attr('id'));
    }
  }
};

window.addMoreBlock = function (e) {
  var blocks = document.getElementsByClassName("js-group-option"),
      block = null;

  if (blocks.length) {
    block = blocks[0];
  }

  if (block) {
    $(block).find('select').select2("destroy");
    var groupInputValue = $(block).find(".js-clone-value-option"),
        inputValueText = groupInputValue.find('input').clone(),
        inputValueHtml = groupInputValue.find('textarea').clone(),
        selectTypeOption = $(block).find('select').clone();
    inputValueText.val('');
    inputValueText.removeClass('d-none');
    inputValueHtml.attr('id', 'ckeditor-' + blocks.length);
    inputValueHtml.attr('style', '');
    inputValueHtml.addClass('d-none');
    selectTypeOption.attr('id', 'select2-' + blocks.length);
    selectTypeOption.val('1'); //// clone

    var domClone = $(block).clone(); /// initial select2 remove 

    runSelect2Single($(block).find('select')); /// reset input data 

    domClone.find("input, textarea").val('');
    domClone.find(".js-clone-value-option").html('');
    domClone.find(".js-clone-value-option").append(inputValueText);
    domClone.find(".js-clone-value-option").append(inputValueHtml);
    domClone.find(".js-clone-select-option").html('');
    domClone.find(".js-clone-select-option").append(selectTypeOption); /// initial select2 new 

    runSelect2Single(domClone.find('select')); /// setter input data 

    $(blocks).last().after(domClone);
  }
}; /// dom load success
//// begin draw google map 


function drawMapRequest() {
  var styles = [{
    stylers: [{
      saturation: 0
    }]
  }, {
    featureType: "road",
    elementType: "geometry",
    stylers: [{
      lightness: 0
    }, {
      visibility: "simplified"
    }]
  }, {
    featureType: "road",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  }]; // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.

  var styledMap = new google.maps.StyledMapType(styles, {
    name: "Google Map"
  });

  if (typeof MAP_LAT == 'undefined' || typeof MAP_LONG == 'undefined') {
    MAP_LAT = document.getElementById('map-request').getAttribute('data-lat');
    MAP_LONG = document.getElementById('map-request').getAttribute('data-long');
  }

  var myLatlng = new google.maps.LatLng(MAP_LAT, MAP_LONG);
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
    }
  };
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: '/images/map-icon.png'
  });
  var map = new google.maps.Map(document.getElementById("map-request"), mapOptions); //Associate the styled map with the MapTypeId and set it to display.

  map.mapTypes.set("map_style", styledMap);
  map.setMapTypeId("map_style");
  marker.setMap(map);
  var address_detail = '<div class="address_detail_map"><h4 class="main_color"> vị trí request</h4></div>';
  address_detail = address_detail.split("\n").join("<br />");
  var infowindow = new google.maps.InfoWindow({
    content: address_detail
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}

function createJsonHowto(elementid) {
  if (!document.getElementById(elementid) || typeof HOW_TO_DATA == 'undefined') {
    return false;
  } // Set the default CSS theme and icon library globally


  JSONEditor.defaults.theme = 'foundation5';
  JSONEditor.defaults.iconlib = 'fontawesome4'; // This is the starting value for the editor
  // We will use this to seed the initial editor 
  // and to provide a "Restore to Default" button.
  // Initialize the editor

  var editor = new JSONEditor(document.getElementById('editor_holder'), {
    // Enable fetching schemas via ajax
    ajax: true,
    // The schema for the editor
    schema: {
      $ref: '/json/howto.json',
      format: "grid"
    },
    // Seed the form with a starting value
    startval: HOW_TO_DATA
  }); /// 
  // Hook up the submit button to save data to textarea

  document.getElementById('js__save-json-textarea').addEventListener('click', function () {
    // Get the value from the editor
    document.getElementById("js__json-how-to").value = JSON.stringify(editor.getValue(), null, 2); // spacing level = 2
  }); // Hook up the validation indicator to update its 
  // status whenever the editor changes

  editor.on('change', function () {
    // Get an array of errors from the validator
    var errors = editor.validate();
    var indicator = document.getElementById('valid_indicator'); // Not valid

    if (errors.length) {
      var err = errors[0];
      indicator.className = 'label alert';
      indicator.textContent = "not valid - ".concat(err.path, " ").concat(err.property, " ").concat(err.message);
      console.log(errors);
    } // Valid
    else {
        indicator.className = 'label success';
        indicator.textContent = 'valid';
      }

    console.log(editor.getValue());
    document.getElementById("js__json-how-to").value = JSON.stringify(editor.getValue(), null, 2);
  });
}

function resetSelect2Location(dom, data) {
  dom.find('option').remove();
  dom.select2("destroy");
  runSelect2SingleByOption(dom, {
    data: data
  });
  dom.trigger('change');
}

function runSelect2SingleByOption(dom, options) {
  var DF_OPTION = {
    width: '100%',
    language: {
      noResults: function noResults() {
        return "không có kết quả trùng khớp";
      }
    },
    escapeMarkup: function escapeMarkup(markup) {
      return markup;
    },
    templateSelection: function templateSelection(state) {
      return state.text;
    },
    templateResult: function templateResult(state) {
      return state.text;
    }
  };

  var isObject = null == options || "object" != _typeof(options);

  if (!isObject) {
    for (var attr in options) {
      if (options.hasOwnProperty(attr)) {
        DF_OPTION[attr] = options[attr];
      }
    }
  }

  return dom.select2(DF_OPTION); // .on('change', function (e) {
  //     console.log("đã vào onchange rồi nè", e )
  //     if($( this ).get()){
  //         $( this ).valid()
  //     }
  // })
}

function filterLocation(data, field, value) {
  var cloneData = [];

  for (var iData = 0; iData < data.length; iData++) {
    if (data[iData][field] == value) {
      var obj = {
        id: data[iData].id,
        text: data[iData].text
      };
      cloneData.push(obj);
    }
  }

  return cloneData;
}

window.changeDistrictAdmin = function (e) {
  var districtValue = e.value;
  var select2Commune = $('#js__select-commune'); /// add loadding

  var optionFirstCommune = select2Commune.find('option:first');
  var optionFirstCommuneText = optionFirstCommune.text();

  if (districtValue == 0) {
    var dataCommunesNull = [{
      id: 0,
      text: optionFirstCommuneText
    }]; /// reset select 2 Commune to none loading 

    resetSelect2Location(select2Commune, dataCommunesNull);
  } else {
    var dataCommunes = [{
      id: 0,
      text: optionFirstCommuneText + '<b class="spinner"><i></i><i></i><i></i><i></i></b>'
    }]; /// reset select 2 district to none loading 

    resetSelect2Location(select2Commune, dataCommunes); /// fetch ajax DISTRICT

    var ROUTE_COMMUNES = "/api/v1/commune/" + districtValue;
    fetch(ROUTE_COMMUNES).then(function (resp) {
      return resp.json();
    }).then(function (res) {
      var COMMUNES = res.data;
      var communesInDistrict = [{
        id: 0,
        text: optionFirstCommuneText
      }].concat(filterLocation(COMMUNES, 'district', districtValue));
      resetSelect2Location(select2Commune, communesInDistrict);
      return true;
    })["catch"](function (error) {
      console.log(error);
    });
  }
};

window.selectDistrictCommuneAdmin = function (districtValue, communeValue) {
  var select2Commune = $('#js__select-commune'); /// add loadding

  var optionFirstCommune = select2Commune.find('option:first');
  var optionFirstCommuneText = optionFirstCommune.text();

  if (districtValue == 0) {
    var dataCommunesNull = [{
      id: 0,
      text: optionFirstCommuneText
    }]; /// reset select 2 Commune to none loading 

    resetSelect2Location(select2Commune, dataCommunesNull);
  } else {
    var dataCommunes = [{
      id: 0,
      text: optionFirstCommuneText + '<b class="spinner"><i></i><i></i><i></i><i></i></b>'
    }]; /// reset select 2 district to none loading 

    resetSelect2Location(select2Commune, dataCommunes); /// fetch ajax DISTRICT

    var ROUTE_COMMUNES = "/api/v1/commune/" + districtValue;
    fetch(ROUTE_COMMUNES).then(function (resp) {
      return resp.json();
    }).then(function (res) {
      var COMMUNES = res.data;
      var communesInDistrict = [{
        id: 0,
        text: optionFirstCommuneText
      }].concat(filterLocation(COMMUNES, 'district', districtValue));
      resetSelect2Location(select2Commune, communesInDistrict); // Set selected 
      // 

      $('select[name=commune_id]').val(communeValue).trigger('change');
      return true;
    })["catch"](function (error) {
      console.log(error);
    });
  }
};

var ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
var Tien = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ"); //1. Hàm đọc số có ba chữ số;

function DocSo3ChuSo(baso) {
  var tram;
  var chuc;
  var donvi;
  var KetQua = "";
  tram = parseInt(baso / 100);
  chuc = parseInt(baso % 100 / 10);
  donvi = baso % 10;
  if (tram == 0 && chuc == 0 && donvi == 0) return "";

  if (tram != 0) {
    KetQua += ChuSo[tram] + " trăm ";
    if (chuc == 0 && donvi != 0) KetQua += " linh ";
  }

  if (chuc != 0 && chuc != 1) {
    KetQua += ChuSo[chuc] + " mươi";
    if (chuc == 0 && donvi != 0) KetQua = KetQua + " linh ";
  }

  if (chuc == 1) KetQua += " mười ";

  switch (donvi) {
    case 1:
      if (chuc != 0 && chuc != 1) {
        KetQua += " mốt ";
      } else {
        KetQua += ChuSo[donvi];
      }

      break;

    case 5:
      if (chuc == 0) {
        KetQua += ChuSo[donvi];
      } else {
        KetQua += " lăm ";
      }

      break;

    default:
      if (donvi != 0) {
        KetQua += ChuSo[donvi];
      }

      break;
  }

  return KetQua;
}

function DocTienBangChu(SoTien) {
  var lan = 0;
  var i = 0;
  var so = 0;
  var KetQua = "";
  var tmp = "";
  var ViTri = new Array();
  if (SoTien < 0) return "Số tiền âm !";
  if (SoTien == 0) return "Không đồng !";

  if (SoTien > 0) {
    so = SoTien;
  } else {
    so = -SoTien;
  }

  if (SoTien > 8999999999999999) {
    //SoTien = 0;
    return "Số quá lớn!";
  }

  ViTri[5] = Math.floor(so / 1000000000000000);
  if (isNaN(ViTri[5])) ViTri[5] = "0";
  so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
  ViTri[4] = Math.floor(so / 1000000000000);
  if (isNaN(ViTri[4])) ViTri[4] = "0";
  so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
  ViTri[3] = Math.floor(so / 1000000000);
  if (isNaN(ViTri[3])) ViTri[3] = "0";
  so = so - parseFloat(ViTri[3].toString()) * 1000000000;
  ViTri[2] = parseInt(so / 1000000);
  if (isNaN(ViTri[2])) ViTri[2] = "0";
  ViTri[1] = parseInt(so % 1000000 / 1000);
  if (isNaN(ViTri[1])) ViTri[1] = "0";
  ViTri[0] = parseInt(so % 1000);
  if (isNaN(ViTri[0])) ViTri[0] = "0";

  if (ViTri[5] > 0) {
    lan = 5;
  } else if (ViTri[4] > 0) {
    lan = 4;
  } else if (ViTri[3] > 0) {
    lan = 3;
  } else if (ViTri[2] > 0) {
    lan = 2;
  } else if (ViTri[1] > 0) {
    lan = 1;
  } else {
    lan = 0;
  }

  for (i = lan; i >= 0; i--) {
    tmp = DocSo3ChuSo(ViTri[i]);
    KetQua += tmp;
    if (ViTri[i] > 0) KetQua += Tien[i];
    if (i > 0 && tmp.length > 0) KetQua += ','; //&& (!string.IsNullOrEmpty(tmp))
  }

  if (KetQua.substring(KetQua.length - 1) == ',') {
    KetQua = KetQua.substring(0, KetQua.length - 1);
  }

  KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
  return KetQua; //.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
}

function formatNumberToDot(price, currency) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + currency; // .replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
}

window.calcTotalPriceProduct = function () {
  var square = $('input[name=square]').val();
  var price = $('input[name=price]').val();
  var unitPrice = $('select[name=unit_price]').val();
  var $output = $("#js__output__product--price");
  price = price.replaceAll('.', "").replaceAll(',', "").replaceAll('e', "");
  price = parseInt(price) || 0;

  if (!price) {
    price = '';
  }

  square = square.replaceAll('.', "").replaceAll(',', "").replaceAll('e', "");
  square = parseInt(square) || 0;

  if (!square) {
    square = '';
  }

  $('input[name=square]').val(formatNumberToDot(square, ''));
  $('input[name=price]').val(formatNumberToDot(price, ''));

  if (CONFIG_APP.UNIT.PRICE.DEFAULT.VALUE == unitPrice) {
    $output.html("".concat(DocTienBangChu(price)));
  } else if (!square.toString().trim() || !price.toString().trim() || !$output.get()) {
    return false;
  } else {
    $output.html("".concat(formatNumberToDot(price * square, 'VND'), " - ").concat(DocTienBangChu(price * square)));
  }
};
/******/ })()
;