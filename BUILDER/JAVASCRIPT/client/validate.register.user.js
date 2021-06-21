function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        onfocusout: function (element) {
            $(element).valid()
        },
        errorPlacement: function(error, element) {
            var $inputEle = element
            /// nếu tồn tại class jquery__append-out thì sẽ đưa dom error ra phía ngoài
            /// còn không gữi nguyên như mặc định
            if ($inputEle.hasClass('jquery__append-out')) {
                // $(placement).append(error)
                error.insertAfter($inputEle.parent());
            } else {
                error.insertAfter(element)
            }
        },
        highlight: function(element) {
            $(element).parent().addClass("input-group-error");
            var name = $(element).attr('name')
            //// remove dom laravel error
            $(`.for-${name}`).remove()
        },
        unhighlight: function(element) {
            $(element).parent().removeClass("input-group-error");
            var name = $(element).attr('name')
            //// remove dom laravel error
            $(`.for-${name}`).remove()
        },
        rules: {
            name : {
                required : true,
                maxlength: 50,
                minlength: 6,
            },
            email: {
                required: true,
                email   : true
            },
            password : {
                required : true,
                maxlength: 30,
                minlength: 6,
            },
            confirm_password : {
                equalTo : "#password" 
            },
        },
        messages: {
            name : {
                required : "bắt buộc nhập tên",
                maxlength: "phần tên không vượt quá {0} kí tự",
                minlength: "phần tên nhỏ hơn {0} kí tự"
            },
            email: {
                required: "bắt buộc nhập email",
                email   : "định dạng không phải email"
            },
            password : {
                required : "bắt buộc nhập mật khẩu",
                maxlength: "phần mật khẩu không vượt quá {0} kí tự",
                minlength: "phần mật khẩu nhỏ hơn {0} kí tự"
            },
            confirm_password : {
                equalTo: "trường nhập lại mật khẩu chưa trùng khớp"
            }
            
        }
    });
}


/// dom load success
$(document).ready(function() {

    var DF_FORM_VALIDATE = $(".js-validate-form")
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
});