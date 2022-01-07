import TYPE from "../action/type"



export default function (state = JSON.parse(window.CONVERSATIONS), action) {
    switch (action.type) {
        case TYPE.MESSAGE.CONCAT :{
            /// _id là conversation id, messages là danh sách message của api trả về
            const { _id, messages, status } = action.payload
            
            return state.map(conversation => {
                if (conversation._id == _id){
                    conversation.messages = [ ... messages, ... conversation.messages ]
                    conversation.status   = status
                }
                return conversation
            })
        }
        case TYPE.MESSAGE.NEW__MESSAGE: {
            const { _id, message } = action.payload
            return state.map(conversation => {
                if (conversation._id == _id) conversation.messages = [...conversation.messages, message ]
                return conversation
            })
        }

        case TYPE.MESSAGE.UPDATE__MESSAGE:{
            const { _id, message } = action.payload
            return state.map(conversation => {
                if (conversation._id == _id){
                    conversation.messages = conversation.messages.map( m => {
                        if( m.keyUpdate == message.keyUpdate ) return { ...m, ... message }
                        return m
                    })
                }
                return conversation
            })
        }

        case TYPE.MESSAGE.READ : {
            const { _id, user } = action.payload
            return state.map(conversation => {
                if (conversation._id == _id ) {
                    conversation.messages = conversation.messages.map(mess => {
                        /// đúng ra chỗ này phải xử lý == nhưng hiểu như sau: 
                        // thằng A gửi message lên cho thằng B thằng B nhận được => emit lên cho server nên auth của thằng B => phải dùng dấu != 
                        if (mess.user != user) mess.read = true
                        return mess
                    })
                    return conversation
                }
                return conversation
            })
        }


        case TYPE.MESSAGE.ONLINES : {
            const onlines = action.payload
            
            return state.map(conversation => {
                if(onlines.some( onl => onl.active && conversation.user.includes(onl.id))){
                    conversation.online = true
                }
                if(onlines.some( onl => !onl.active && conversation.user.includes(onl.id))){
                    conversation.online = false
                }
                return conversation
            })
        }

        case TYPE.MESSAGE.RECONNECT : {
            const lists = action.payload
            
            return state.map(conversation => {
                conversation.messages = lists[conversation._id]
                return conversation
            })
        }
        

        case TYPE.CONVERSATION_SEARCH: {
            return state.map(conv => {
                const search = action.payload.trim()
                if(!search){
                    return { ...conv, hidden: false }
                }
                console.log( conv )
                const name = conv.users[0]?.name
                if(!!name && name.toLowerCase().includes(action.payload.toLowerCase())){
                    return { ...conv, hidden: false }
                }
                return { ...conv, hidden: true }
            })
        }
        
        default:
            return state;
    }
}