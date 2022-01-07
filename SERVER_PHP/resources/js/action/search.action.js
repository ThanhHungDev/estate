import TYPE from "./type"



export function searchConversation(searchStr){
    console.log(searchStr , " searchConversation ")
    return {
        type : TYPE.CONVERSATION_SEARCH,
        payload : searchStr
    }
}

