import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import commentAPI from "../service/comment.api"
import { setterComment } from "../action/comment.action"
import Comment from "./Comment"

function Main({ COMMENT, CONFIG, dispatch }){
    const [ fetched, setFetched ] = useState(false)

    useEffect(() => {
        if( !COMMENT.length && !fetched ){
            /// fetch data api
            setFetched( true )
            commentAPI.getComment({ slug: CONFIG.LOCATION.pathname })
            .then( response => {
                console.log(response)
                dispatch(setterComment(response.data))
            })
            .catch(error => {
                console.log("ERROR:: ",error);
            })
        }
    });

    return <div className="comment">
        {
            COMMENT.map( comment => <Comment key={ comment._id } comment={ comment } /> )
        }
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
