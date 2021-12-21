import TYPE from "./type"

export function concatMesssagesToChannel( _id, messages ){
    console.log( `concatMesssagesToChannel ${_id}`, messages)
    return {
        type: TYPE.MESSAGE.CONCAT,
        payload: { _id, messages }
    }
}