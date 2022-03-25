export default {
    rules : {
        email: "email",
        password: "string|min_length:6|max_length:20",
    },
    messages: {
        area: {
            max_length: ":value hung"
        }
    }
}
