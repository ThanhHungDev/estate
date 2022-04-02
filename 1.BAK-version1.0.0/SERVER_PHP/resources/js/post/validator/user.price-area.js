export default {
    rules : {
        area: "string|max_length:20",
        price: {
            string: true,
            max_length: 16,
            mycustom: function (value) {
                
                const number = parseInt(value.replace(/[^0-9]/g, "")) || 0
                if (number % 1000 != 0 ) {
                    return "tiền phải là bội số của 1000vnd"
                }
                return true
            },
        },
        horizontal: "string|max_length:20",
        vertical: "string|max_length:20"
    },
    messages: {
        area: {
            max_length: ":value hung"
        }
    }
}
