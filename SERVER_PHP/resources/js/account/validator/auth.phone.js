export default {
    rules : {
        phone: {
            string: true,
            // required: true,
            mycustom: function (value) {
                if (!/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,10})\b/.test(value)) {
                    return "Phải nhập số điện thoại ở việt nam"
                }
                return true
            },
        },
    },
    messages: {
        phone: {
            string: ":value phải là chuỗi",
            required: ":value số điện thoại phải nhập",
        }
    }
}
