export default {
    rules : {
        province   : "required|numeric|min:1|max:100000",
        district   : "required|numeric|min:1|max:100000",
        commune    : "required|numeric|min:1|max:100000",
    },
    messages: {
        province: "Bạn chưa chọn Tỉnh Thành",
        district: "Bạn chưa chọn Quận Huyện",
        commune: "Bạn chưa chọn Phường xã thị trấn",
    }
}