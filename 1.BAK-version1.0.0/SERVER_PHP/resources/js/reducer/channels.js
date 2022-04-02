
// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var CHANNEL_DEFAULT = [];
import TYPE from "../action/type.js"

export default function (state = CHANNEL_DEFAULT, action) {
    switch (action.type) {
        case TYPE.CHANNEL.ADD_USER_ONLINE:
            return state.map(item => {
                if (item.user.id == action.payload) {
                    return { ...item, user: { ...item.user, online: true } }
                }
                return { ...item }
            })

        case TYPE.CHANNEL.ADD_MESSAGE_LOADMORE:
            return state.map(channel => {
                if (channel.id == action.payload.channel) {
                    
                    return { ...channel, message: [...action.payload.messages, ... channel.message] }
                }
                return channel
            })

        case TYPE.CHANNEL.REMOVE_USER_ONLINE:
            return state.map(item => {
                if (item.user.id == action.payload) {
                    return { ...item, user: { ...item.user, online: false } }
                }
                return { ...item }
            })

        case TYPE.CHAT.CHANGE_USER_CHAT_DEFAULT:
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, isActive: true }
                }
                return { ...item, isActive: false }
            })
        case TYPE.CHANNEL.SETTER_CHANNEL:
            return action.payload
        case TYPE.CHANNEL.ADD_MESSAGE:
            return state.map(channel => {
                if (channel.isActive === true) {
                    return { ...channel, message: [...channel.message, action.payload] }
                }
                return channel
            })
        case TYPE.CHANNEL.UPDATE_MESSAGE:
            return state.map(channel => {
                if (channel.id == action.payload.channel) {
                    let messages = channel.message.map(mess => {
                        if (mess.keyUpdate == action.payload.keyUpdate) {
                            mess.createdAt = action.payload.createdAt
                        }
                        return mess
                    })
                    return { ...channel, message: [...messages] }
                }
                return channel
            })
        case TYPE.CHANNEL.UPDATE_MESSAGE_ERROR:
            
            return state.map(channel => {
                if (channel.id == action.payload.channel) {
                    let messages = channel.message.map(mess => {
                        
                        if (mess.keyUpdate == action.payload.keyUpdate) {
                            mess.error     = action.payload.error
                            mess.createdAt = action.payload.createdAt
                        }
                        return mess
                    })
                    return { ...channel, message: [...messages] }
                }
                return channel
            })
        case TYPE.CHANNEL.READ_ALL_MESSAGE_USER_CHANNEL:
            return state.map(channel => {
                if (channel.id === action.payload.channel) {
                    let messages = channel.message.map(mess => {
                        if (mess.type == action.payload.type) {
                            return { ...mess, read: true }
                        }
                        return mess
                    })
                    return { ...channel, message: messages }
                }
                return channel
            })
        case TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME:
            return state.map(channel => {
                if (channel.id === action.payload.channel) {
                    return { ...channel, message: [...channel.message, action.payload] }
                }
                return channel
            })

        case TYPE.CHANNEL.SET_ACTIVE:
            let isChanged = false
            let newState = state.map(channel => {
                if (!isChanged && channel.channelName && channel.channelName.includes(action.payload.channelName)) {
                    isChanged = true
                    return { ...channel, isActive: true }
                }
                return { ...channel, isActive: false }
            })
            if (isChanged) {
                return newState
            }
            return state
        case TYPE.CHANNEL.SET_DEACTIVE:
            return state.map(channel => {
                return { ...channel, isActive: false }
            })
        case TYPE.CHANNEL.SEARCH_CHANNEL: 
            return state.map(channel => {
                let search = action.payload.trim()
                if(!search){
                    return { ...channel, hidden: false }
                }
                let name = channel.user.first_name + channel.user.last_name  + " " + channel.user.first_name_furigana + channel.user.last_name_furigana + channel.user.email
                if(name.includes(action.payload)){
                    return { ...channel, hidden: false }
                }
                return { ...channel, hidden: true }
            })
        case TYPE.CHANNEL.SHOW_ALL_CHANNEL: 
            return state.map(channel => {
                
                return { ...channel, hidden: false }
            })
        case TYPE.CHANNEL.UPDATE_MESSAGE_PAYMENT: 
            let { order } = action.payload
            return state.map(channel => {
                let { message } = channel
                channel.message = message.map( mess => {
                    if( mess.style == 'BOOKING_PAYMENT_ERROR'){
                        // console.log( mess.booking, action.payload )
                        if( Array.isArray(mess.booking) ){
                            if( mess.booking.some( item => item.order == order)){
                                mess.style = 'BOOKING_PAYMENT_CHANGE_SUCCESS'
                            }
                        }else{
                            if( mess.booking.order == order){
                                mess.style = 'BOOKING_PAYMENT_CHANGE_SUCCESS'
                                mess.booking = [ mess.booking ] 
                            }
                        }
                    }
                    return mess
                })
                return channel
            })
        default:
            return state; 
    }
}