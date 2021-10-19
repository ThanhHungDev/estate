import React from 'react'
import Moment from 'react-moment'
import Action from "./Action"
import Comment from './Comment'


function Content({ comment }) {
    return (
        <div className="bg-white p-2">
            <div className="d-flex flex-row user-info">
                <div className="">
                    <img className="rounded-circle" src={ comment.user?.avatar } width="40" />
                </div>
                <div className="d-block w-100">
                    <div className="d-flex flex-column justify-content-start ml-2">
                        <div className="shadow-none p-3 bg-light rounded">
                            <span className=" font-weight-bold name">{ comment.user?.name }</span>
                            <div className="mt-2"><div className="comment-text">{comment.body}</div></div>
                        </div>
                        <small className="date text-black-50 text-right">
                            <Moment format="LLLL">{comment?.createdAt}</Moment>
                        </small>
                    </div>
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