import TYPE from "./type"



export function searchConversation(searchStr){
    console.log(searchStr , " searchConversation ")
    return {
        type : TYPE.COMMENT.SETTER_COMMENT,
        payload : searchStr
    }
}

