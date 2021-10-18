import TYPE from "../action/type"

export default function (state = [], action) {
    switch (action.type) {
        case TYPE.SETTER_COMMENT:
            return action.payload
        default:
            return state;
    }
}