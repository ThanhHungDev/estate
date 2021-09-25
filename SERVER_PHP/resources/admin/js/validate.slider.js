function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        // onfocusout: function (element) {
        //     var $inputEle = $(element)
        //     if ($inputEle.attr('name') == 'title') {
        //         console.log("đây")
        //         $('input[name=slug]').valid()
        //     }
        //     $(element).valid()
        // },
        errorPlacement: function(error, element) {
            var $inputEle = element
            /// nếu tồn tại class jquery__append-out thì sẽ đưa dom error ra phía ngoài
            /// còn không gữi nguyên như mặc định
            if ($inputEle.hasClass('jquery__append-out')) {
                // $(placement).append(error)
                error.insertAfter($inputEle.parent());
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            alt: {
                maxlength: 150
            },
            topic: {
                required : true,
                maxlength: 150
            },
            excerpt: {
                required : true,
                maxlength: 510
            },
            title : {
                required : true,
                maxlength: 510
            },
            content : {
                maxlength: 5000
            },
            src : {
                required : true,
                maxlength: 510
            }
        },
        messages: {
            alt: {
                maxlength: "alt có độ dài lớn nhất là {0}"
            },
            topic: {
                required : "bắt buộc phải nhập topic",
                maxlength: "topic có độ dài lớn nhất là {0}"
            },
            excerpt: {
                required : "bắt buộc phải nhập excerpt",
                maxlength: "excerpt có độ dài lớn nhất là {0}"
            },
            title : {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là {0}"
            },
            content : {
                maxlength: "content có độ dài lớn nhất là {0}"
            },
            src : {
                required : "bắt buộc phải nhập src",
                maxlength: "src có độ dài lớn nhất là {0}"
            }
        }
    });
}


function checkCkeditorRequried(element){
    
    return CKEDITOR.instances[$(element).attr('id')].getData()
}

jQuery.validator.addMethod('cke_required', function(value, element) {

    return checkCkeditorRequried(element)
})

/// dom load success
$(document).ready(function() {

    var DF_FORM_VALIDATE = $(".js-validate-form")
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
});