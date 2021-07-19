
let CATE = {}
if( typeof CATEGORIES != 'undefined' ){
    /// thì sao? 
    CATE = JSON.parse(CATEGORIES)
}


export default function (state = CATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}