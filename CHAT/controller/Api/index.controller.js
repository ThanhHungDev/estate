
module.exports.noneLogin = async (req, res) => {

    let response = {},
        code = 500

    try {
        

        /// response 
        response.code             = 200
        response.data             = "api không cần login"
        response.message          = "không cần login nè"
        response.internal_message = "nologin"
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

