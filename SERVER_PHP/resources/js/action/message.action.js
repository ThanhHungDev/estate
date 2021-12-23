import TYPE from "./type"

export function concatMesssagesToChannel( _id, messages ){
    console.log( `concatMesssagesToChannel ${_id}`, messages)
    return {
        type: TYPE.MESSAGE.CONCAT,
        payload: { _id, messages }
    }
}

export function addNewMessage( _id, message ){
    console.log(message , `${_id} addNewMessage`)
    return {
        type : TYPE.MESSAGE.NEW__MESSAGE,
        payload : { _id, message }
    }
}

export function updateMessageRealtime( _id, message ){
    console.log(message , `${_id} updateMessageRealtime`)
    return {
        type : TYPE.MESSAGE.UPDATE__MESSAGE,
        payload : { _id, message }
    }
}

export function readAllMessageInChannel(_id, user){
    return {
        type   : TYPE.MESSAGE.READ,
        payload: { _id, user }
    }
}