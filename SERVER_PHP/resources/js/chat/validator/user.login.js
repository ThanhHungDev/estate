export default {
    rules : {
        email: "email",
        password: "string|min_length:1|max_length:20",
    },
    messages: {
        area: {
            max_length: ":value hung"
        }
    }
}
