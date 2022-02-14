export default {
    rules : {
        title: "required|min_length:15|max_length:150",
        contentText: "required|min_length:2|max_length:10000",
    },
    messages: {
        title: {
            required: "Bạn chưa nhập tiêu đề bài đăng",
            min_length: "Tiêu đề bài đăng chứa ít nhất 15 ký tự",
            max_length: "Tiêu đề bài đăng chứa nhiều nhất 150 ký tự",
        },
        contentText: {
            required: "Bạn chưa nhập nội dung bài đăng",
            min_length: "Nội dung bài đăng chứa ít nhất 2 ký tự",
            max_length: "Nội dung bài đăng chứa nhiều nhất 10000 ký tự",
        },
    }
}
