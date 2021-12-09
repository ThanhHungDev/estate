export default {
    rules : {
        name: "min_length:5|max_length:70",
        phone: {
            string: true,
            min_length: 6,
            max_length: 20,
            validatePhoneEmail: function (value) {
                /// check is email
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if( emailRegex.test(value) ){
                    return true
                }
                /// nếu không phải là email thì check phải đúng format của phone không
                if(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,9})\b/.test(value)){
                    return true
                }
                return "Bạn cần nhập số điện thoại hoặc email!"
            },
        }
    },
    messages: {
        area: {
            max_length: ":value hung"
        }
    }
}
