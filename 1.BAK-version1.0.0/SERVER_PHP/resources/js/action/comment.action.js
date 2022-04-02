import TYPE from "./type"
export function setterComment(comments){
    console.log(comments , " setterComment ")
    return {
        type : TYPE.COMMENT.SETTER_COMMENT,
        payload : comments
    }
}


/**
 * tạo action comment data to reducer
 * @param { parent, comment__data } data 
 * @returns 
 */
export function addComment( comment ){
    console.log(comment , " addComment ")
    return {
        type : TYPE.COMMENT.ADD_COMMENT,
        payload : comment
    }
}


/**
 * tạo action comment data to reducer
 * @param { parent, comment__data } data 
 * @returns 
 */
export function likeComment( comment ){
    console.log(comment , " likeComment ")
    return {
        type : TYPE.COMMENT.LIKE_COMMENT,
        payload : comment
    }
}



/**
 * tạo action comment data to reducer
 * @param { parent, comment__data } data 
 * @returns 
 */
 export function reportComment( comment ){
    console.log(comment , " reportComment ")
    return {
        type : TYPE.COMMENT.REPORT_COMMENT,
        payload : comment
    }
}


