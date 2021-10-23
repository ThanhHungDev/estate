import React from 'react'
import Action from "./Action"
import Comment from './Comment'
import Readmore from './Readmore'


function Content({ comment }) {
    
    return (
        <div className="bg-white">
            <div className="d-flex flex-row user-info">
                <div className="">
                    <img className="rounded-circle" src={ comment.user?.avatar } width="40" />
                </div>
                <div className="d-block w-100">
                    <Readmore comment={comment} />
                    <Action comment={comment} /> 
                    <div className="hr">
                    { comment.childrens.map( com => <Comment key={com._id} comment={ com } />) }
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Content