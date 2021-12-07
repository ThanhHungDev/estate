
let CATE = {}
if( typeof window.CATEGORIES != 'undefined' ){
    /// thì sao? 
    try {
        CATE = JSON.parse(window.CATEGORIES)
    } catch (error) {}
}


export default function (state = CATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}