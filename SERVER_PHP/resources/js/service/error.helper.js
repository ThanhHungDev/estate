
function renderInternalServerError(message){
    return {
        status: 500, // HTTP_INTERNAL_SERVER_ERROR
        data: {
            message
        }
    }
}

export default {
    internalServerError: renderInternalServerError
}