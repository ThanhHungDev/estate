module.exports.apiResponseErrorResource = function( req, res ){

    let response = {}
    
    if(req.errors){
        
        let errors = Object.keys(req.errors).map( objKey => {
            
            let error = req.errors[objKey];
            return { error: objKey, ...error }
        })
        response.code             = 422,
        response.message          = "đã có lỗi xảy ra"
        response.internal_message = "đã có lỗi xảy ra"
        response.errors           = errors
        return res.status(response.code).json(response)
    }
}

/**
 * @swagger
 * components:
 *     schemas:
 *         ErrorsGeneralResources:
 *             type: object
 *             properties:
 *                  code:
 *                     type: int
 *                     description: mã lỗi
 *                     example: 422
 *                  message:
 *                     type: string
 *                     description: tin nhắn đến người dùng
 *                     example: "đã có lỗi xảy ra"
 *                  internal_message: 
 *                      type: string
 *                      description: tin nhắn đến dev
 *                      example: "đã có lỗi validate trường email xảy ra"
 *                  errors:
 *                      type: array
 *                      items: 
 *                          type : object
 *                          $ref: '#/components/schemas/ErrorResources'
 */


/**
 * @swagger
 * components:
 *     schemas:
 *         ErrorResources:
 *             type: object
 *             properties:
 *                  error:
 *                     type: string
 *                     description: trường nhập liệu error
 *                     example: "email"
 *                  message:
 *                     type: string
 *                     description: tin nhắn đến người dùng
 *                     example: "email is required"
 *                  rule:
 *                     type: string
 *                     description: nếu validate sẽ lỗi trường nhập liệu nào với kiểu lỗi gì
 *                     example: "required"
 */

/**
 * @swagger
 * components:
 *     schemas:
 *         ErrorUnauthorizedResources:
 *             type: object
 *             properties:
 *                  code:
 *                     type: integer
 *                     description: mã lỗi xác thực không thành công
 *                     example: 401
 *                  message:
 *                     type: string
 *                     description: tin nhắn đến người dùng
 *                     example: "Unauthorized."
 *                  internal_message:
 *                     type: string
 *                     description: tin nhắn đến người dùng
 *                     example: "Unauthorized."
 */
 