import TYPE from "../action/type"

export default function (state = [], action) {
    switch (action.type) {
        case TYPE.COMMENT.SETTER_COMMENT:
            return action.payload

        case TYPE.COMMENT.ADD_COMMENT:
            const { parent } = action.payload
            
            if( !parent ){
                /// nếu không có parent thì add vào cuối
                return [ ... state, action.payload ]
            }
            /// loop tìm từng comment coi có comment nào trùng thì add vào childrens 
            return state.map( comment => {
                if( comment._id == parent ){
                    const { childrens } = comment
                    return { ... comment, childrens: [ ... childrens, action.payload ] }
                }
                return { ... comment }
            })

        default:
            return state;
    }
}