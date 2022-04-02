const node_validator = require('node-input-validator'),
      errorHelper    = require('../helpers/error.helper'),
      { Validator }  = node_validator


module.exports.GET_COMMENT_INKEY = async function( req, res, next ){

    let validate = new Validator(req.query, {
        inkey: "required|string|minLength:1|maxLength:10000",
    },{
        'inkey.required'     : ":attribute phải nhập"
    });
     
    let matched = await validate.check()
    if (!matched) {
        req.errors = validate.errors
        return errorHelper.apiResponseErrorResource( req, res )
    }
    next()
}


module.exports.CREATE_COMMENT = async function( req, res, next ){

    let validate = new Validator(req.body, {
        inkey: "required|string|minLength:1|maxLength:10000",
        body: "required|string|minLength:1|maxLength:10000",
    },{
        'inkey.required'     : ":attribute phải nhập"
    });
     
    let matched = await validate.check()
    if (!matched) {
        req.errors = validate.errors
        return errorHelper.apiResponseErrorResource( req, res )
    }
    next()
}



