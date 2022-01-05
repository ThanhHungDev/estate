export default {
    rules : {
        district   : "required|numeric|min:1|max:100000",
        commune    : "required|numeric|min:1|max:100000",
        home_number: "required|string|min:2|max:50",
        street     : "required|string|min:2|max:200",
    },
    messages: {
        district: "Bạn chưa chọn Quận Huyện",
        commune: "Bạn chưa chọn Phường xã thị trấn",
    }
}