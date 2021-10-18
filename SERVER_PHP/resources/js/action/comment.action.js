import TYPE from "./type"
export function setterComment(comments){
    console.log(comments , " setterComment ")
    return {
        type : TYPE.SETTER_COMMENT,
        payload : comments
    }
}