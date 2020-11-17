function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        rules: {
            name: {
                required : true,
                maxlength: 150
            },
            email: {
                required: true,
                email   : true
            },
            avatar : {
                required : true,
                maxlength: 510
            },
            password : {
                required : true,
                maxlength: 30
            },
            role_id : {
                required: true,
                number  : true
            },
        },
        messages: {
            name: {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là {0}"
            },
            email: {
                required: "bắt buộc nhập email",
                email   : "định dạng không phải email"
            },
            avatar : {
                required : "bắt buộc nhập background",
                maxlength: "đường link vượt {0} kí tự"
            },
            password : {
                required : "bắt buộc nhập password",
                maxlength: "phần password không vượt quá {0} kí tự"
            },
            role_id : {
                required: "bắt buộc nhập role_id",
                number  : "định dạng là số"
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