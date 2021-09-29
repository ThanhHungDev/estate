export default {
    rules : {
        project: {
            required: true,
            validateProject: function (project) {
                if( project.id ){
                    /// đã có trong hệ thống 
                    return true
                }
                if( project.label.length <= 1 || project.value == 0 ){
                    /// thêm mới mà không có text 
                    return "Bạn cần nhập project"
                }
                return true;
            },
        }
    },
}