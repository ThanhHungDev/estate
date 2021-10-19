import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import commentAPI from "../service/comment.api"
import { setterComment } from "../action/comment.action"
import Comment from "./Comment"
import Input from "./Input"

function Main({ COMMENT, CONFIG, AUTH, dispatch }){
    const [ fetched, setFetched ] = useState(false)

    useEffect(() => {
        // if( !!AUTH.JWT && !COMMENT.length && !fetched ){
        if( !COMMENT.length && !fetched ){
            /// fetch data api
            setFetched( true )
            commentAPI.getComment({ slug: CONFIG.LOCATION.pathname })
            .then( response => {
                
                const users = response.users
                const comments = response.data.map( com => {
                    const childrens = com.childrens.map( child => { return { ... child, user: { ... users.find( u => u.id == child.user )  } } })
                    return { ... com, childrens, user: { ... users.find( u => u.id == com.user )  } }
                })
                dispatch(setterComment(comments))
            })
            .catch(error => {
                console.log("ERROR:: ",error);
            })
        }
    })

    // if( !AUTH.JWT ){
    //     return <div className="text-color-pink text-base">Buộc phải locgin để sử dụng tính năng comment!</div>
    // }

    return <div className="comment">
        {
            COMMENT.map( comment => <Comment key={ comment._id } comment={ comment } /> )
        }
        <div><Input /></div>
    </div>
}


let mapStateToProps = (state) => {
    return {
        CONFIG: state.config,
        AUTH  : state.auth,
        COMMENT: state.comment,
    }
}
export default connect(mapStateToProps)(Main)
