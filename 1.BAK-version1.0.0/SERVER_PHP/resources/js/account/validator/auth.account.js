export default {
    rules : {
        email: 'required|email',
        password : 'required|max_length:30|min_length:6',
    },
    messages: {
        email: {
            required: "bắt buộc nhập email",
            email   : "định dạng không phải email"
        },
        password : {
            required : "bắt buộc nhập mật khẩu",
            maxlength: "phần mật khẩu không vượt quá {0} kí tự",
            minlength: "phần mật khẩu nhỏ hơn {0} kí tự"
        }
    }
}
