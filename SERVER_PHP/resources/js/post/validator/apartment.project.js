export default {
    rules : {
        project: {
            required: true,
            validateProject: function (project) {
                if( project.id ){
                    /// đã có trong hệ thống 
                    return true
                }
                if( project.__isNew__ ){
                    /// thêm mới
                    if( !project.label.length < 5 ){
                        return "Bạn nhập mới tên chung cư nhưng tên quá ngắn"
                    }
                    if( !project.comune ){
                        return "thêm mới nhưng chưa thêm vị trí"
                    }
                }
                return true
            },
        }
    },
}