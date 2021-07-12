const authHelper = require('../../helper/auth.helper')

module.exports.login = async (req, res ) => {

    const user = {
        email: 'truongthanhhung@gmail.com',
        name: "truong thanh hung"
    }
    /// response 
    let response = {}
    response.code             = 200
    response.data             = authHelper.hashTokenAccess(user)
    response.message          = "buộc phải login nè"
    response.internal_message = "buộc phải login nè"
    return res.status(response.code).json(response)
}
module.exports.getUser = async (req, res) => {

    let response = {},
        code = 500

    try {
        
        const { user } = req

        /// response 
        response.code             = 200
        response.data             = user
        response.message          = "buộc phải login nè"
        response.internal_message = "buộc phải login nè"
        return res.status(response.code).json(response)

    } catch (error) {

        let err                       = { error: 'error', message: error.message }
            response.code             = code || 500
            response.message          = error.message
            response.internal_message = error.message
            response.errors           = [err]
        return res.status(response.code).json(response)
    }
}

