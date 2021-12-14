const node_validator = require('node-input-validator'),
      errorHelper    = require('../helpers/error.helper'),
      { Validator }  = node_validator


module.exports.GET_MESSAGE_BY_USER = async function( req, res, next ){

    let validate = new Validator(req.query, {
        user: "required|string|minLength:1|maxLength:1000000",
    },{
        'user.required'     : ":attribute phải nhập"
    });
     
    let matched = await validate.check()
    if (!matched) {
        req.errors = validate.errors
        return errorHelper.apiResponseErrorResource( req, res )
    }
    next()
}
