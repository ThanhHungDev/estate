/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var menu = $("#header__sticky");
var lastScrollTop = 0;

function stickyMenu(menu, sticky) {
  if (typeof sticky === 'undefined' || !jQuery.isNumeric(sticky)) sticky = 0;
  if (typeof lastScrollTop === 'undefined') lastScrollTop = 0;

  if ($(window).scrollTop() >= sticky) {
    if ($('#just-for-height').length === 0) {
      menu.after('<div id="just-for-height" style="height:' + menu.outerHeight() + 'px"></div>');
    }

    menu.addClass("sticky");
  } else {
    menu.removeClass('show');
    menu.removeClass("sticky");
    $('#just-for-height').remove();
  }

  if (menu.hasClass('sticky')) {
    /// detect case f5 browser
    if ($(window).scrollTop() > 0 && lastScrollTop == 0 || $(window).scrollTop() < lastScrollTop) {
      /// is f5 
      menu.addClass('show');
    } else {
      menu.removeClass('show');
    }
  }

  lastScrollTop = $(window).scrollTop();
}

$(document).ready(function () {
  /// create tooltip 
  Tipped.create('.simple-tooltip', {
    skin: 'light',
    size: 'large'
  });

  if (menu.length && !window.IS_ROBOT) {
    var sticky = menu.offset().top + 1; // menu.outerHeight()
    // console.log(sticky)
    // if ($(window).width() > 767) {

    stickyMenu(menu, sticky);
    $(window).on('scroll', function () {
      stickyMenu(menu, sticky);
    }); // }
  } // /***
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


  menu.find("#js_menu__mobile_close").click(function () {
    $("#menu").toggleClass("show"); // $("#js_btn_header_toggle__menu").removeClass('active')

    $("body").toggleClass("neo-scroll");
  });
  $("#js_btn_header_toggle__menu").click(function () {
    $("#menu").toggleClass("show"); // $(this).toggleClass("active")

    $("body").toggleClass("neo-scroll");
  });
  setterButtonReactLikeActive();
});

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

window.changeDistrict = function (e) {
  var districtValue = e.value;
  var $select2Commune = $('#js__select-commune');
  $select2Commune.find('option').not(':first').remove();

  if (districtValue == 0) {
    /// reset select 2 Commune to none loading 
    $select2Commune.val(districtValue);
  } else {
    /// fetch ajax DISTRICT
    var ROUTE_COMMUNES = "/api/v1/commune/" + districtValue;
    fetch(ROUTE_COMMUNES).then(function (resp) {
      return resp.json();
    }).then(function (res) {
      var COMMUNES = filterLocation(res.data, 'district', districtValue);
      var options = '';

      for (var optionIndex = 0; optionIndex < COMMUNES.length; optionIndex++) {
        options += "<option value=\"".concat(COMMUNES[optionIndex].id, "\">").concat(COMMUNES[optionIndex].text, "</option>");
      }

      console.log(options);
      $select2Commune.html($select2Commune.html() + options);
      return true;
    })["catch"](function (error) {
      console.log(error);
    });
  }
};

function setterButtonReactLikeActive() {
  if (typeof Storage !== "undefined") {
    var $btns = $(".js__counter").parent();
    if (!$btns.length) return false;
    var likes = JSON.parse(localStorage.getItem('LIKES')) || [];
    console.log(likes);
    $btns.each(function (index, btn) {
      if (likes.some(function (liker) {
        return liker == $(btn).attr('data-react-like');
      })) {
        $(btn).addClass('active');
      }
    });
  }
}

window.toggleLikePost = function (e, productId) {
  if (typeof Storage === "undefined") {
    alert("Trình duyệt không hộ trợ tính năng like, vui lòng thử lại trinh duyệt khác!!!");
    return false;
  }

  var $btn = $(e);
  $btn.toggleClass('active'); /// gọi ajax lưu lại like

  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  var likes = JSON.parse(localStorage.getItem('LIKES')) || [];
  var increment = likes.some(function (liker) {
    return liker == $btn.attr('data-react-like');
  }) ? -1 : 1;
  $.ajax({
    type: "PATCH",
    url: window.AJAX_TOGGLE_LIKE_PRODUCT,
    data: {
      product_id: productId,
      increment: increment
    },
    dataType: "JSON",
    success: function success(response) {
      console.log(response);

      if (response.status == 200) {
        /// đã toggle class ở trên rồi nên chỉ cần thay đổi số lượng tăng hoặc giảm
        $btn.find('.js__counter').text(!!response.data.like ? "(".concat(response.data.like, ")") : ''); // save LIKES Storage

        if (response.data.active) {
          likes.push($btn.attr('data-react-like'));
          localStorage.setItem('LIKES', JSON.stringify(likes));
        } else {
          var likesFil = likes.filter(function (liker) {
            return liker != $btn.attr('data-react-like');
          });
          localStorage.setItem('LIKES', JSON.stringify(likesFil));
        }
      } else {
        console.log(response);
        $btn.toggleClass('active');
      }
    },
    error: function error(xhr, status, _error) {
      var err = JSON.parse(xhr.responseText);
      console.log(err);
      $btn.toggleClass('active');
    }
  });
};

function showErrorModal(err) {
  /// show modal error
  var $modalError = $("#modal__error");
  $modalError.find('.js__title').html('Đã có lỗi sảy ra!');
  $modalError.find('.js__header--content').html('Không thể thích sản phẩm này');
  $modalError.find('.js__body--content').html("B\u1EA5m th\xEDch kh\xF4ng th\xE0nh c\xF4ng v\xEC l\xFD do: <span class=\"text-color-red\">".concat(err.message, "</span>"));
  $modalError.modal({
    escapeClose: true,
    clickClose: true,
    showClose: true
  });
}

/***/ }),

/***/ "./resources/sass/page/login.scss":
/*!****************************************!*\
  !*** ./resources/sass/page/login.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/login": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/login"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/login"], () => (__webpack_require__("./resources/sass/page/login.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;