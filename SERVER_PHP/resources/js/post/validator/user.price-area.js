export default {
    rules : {
        title: "min:10|max:150",
        description: "min:5|max:1000",
        area: "required|min:2|max:20",
        price: {
            required: true,
            max: 16,
            mycustom: function (value) {
                const number = parseInt(value.replace(/[^0-9]/g, "")) || 0
                if (number % 1000 != 0 ) {
                    return "tiền phải là bội số của 1000vnd"
                }
                return true
            },
        },
        horizontal: "required|min:1|max:20",
        vertical: "required|min:1|max:20"
    },
}
