export default {
    rules : {
        name: "min_length:5|max_length:70",
        phone: "string|min_length:6|max_length:20",
    },
    messages: {
        area: {
            max_length: ":value hung"
        }
    }
}
