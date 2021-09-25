/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./resources/js/validate.login.user.js ***!
  \*********************************************/
function validateForm(formJquery) {
  formJquery.validate({
    ignore: ".ignore",
    // validate all hidden select elements
    onfocusout: function onfocusout(element) {
      $(element).valid();
    },
    errorPlacement: function errorPlacement(error, element) {
      var $inputEle = element; /// nếu tồn tại class jquery__append-out thì sẽ đưa dom error ra phía ngoài
      /// còn không gữi nguyên như mặc định

      if ($inputEle.hasClass('jquery__append-out')) {
        // $(placement).append(error)
        error.insertAfter($inputEle.parent());
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function highlight(element) {
      $(element).parent().addClass("input-group-error");
      var name = $(element).attr('name'); //// remove dom laravel error

      $(".for-".concat(name)).remove();
    },
    unhighlight: function unhighlight(element) {
      $(element).parent().removeClass("input-group-error");
      var name = $(element).attr('name'); //// remove dom laravel error

      $(".for-".concat(name)).remove();
    },
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        maxlength: 30,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: "bắt buộc nhập email",
        email: "định dạng không phải email"
      },
      password: {
        required: "bắt buộc nhập mật khẩu",
        maxlength: "phần mật khẩu không vượt quá {0} kí tự",
        minlength: "phần mật khẩu nhỏ hơn {0} kí tự"
      }
    }
  });
} /// dom load success


$(document).ready(function () {
  var DF_FORM_VALIDATE = $(".js-validate-form");

  if (DF_FORM_VALIDATE.length) {
    validateForm(DF_FORM_VALIDATE);
  }
});
/******/ })()
;