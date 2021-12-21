import TYPE from "../action/type"



export default function (state = JSON.parse(window.CONVERSATIONS), action) {
    switch (action.type) {
        case TYPE.MESSAGE.CONCAT :
            console.log("vào hệ thống ", action.payload) 
            /// _id là channel id, messages là danh sách message của api trả về
            const { _id, messages } = action.payload
            
            return state.map(channel => {
                if (channel._id == _id){
                    channel.messages = [ ... messages, ... channel.messages ]
                }
                return channel
            })
            

        default:
            return state;
    }
}