const authHelper = require("../helper/auth.helper")

/**
 * Middleware: Authorization user by Token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let isAuth = async (req, res, next) => {

    let code     = 401,
        response = {}
    // Lấy token được gửi lên từ phía client, thông thường tốt nhất là các bạn nên truyền token vào header
    const access =  req.headers["x-access-token"] || req.headers["authorization"] || req.query.token || req.body.token
    try {

        if (!access) {
            code = 403
            /// không tồn tại access token
            throw new Error('Unauthorized!')
        }
        // Nếu tồn tại token access
    
        // Thực hiện giải mã token xem có hợp lệ hay không?
        const user = await authHelper.verifyTokenAccess(access)

        // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
        req.user = user
        
        // Cho phép req đi tiếp sang controller.
        next();
    } catch (error) {
        
        // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
        response.code             = code || 401
        response.message          = error.message || 'Unauthorized.'
        response.internal_message = error.message || 'Unauthorized.'

        return res.status(response.code).json(response)
    }
}


module.exports = {
    isAuth,
}