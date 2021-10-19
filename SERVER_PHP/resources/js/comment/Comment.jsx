import React from 'react'
import Content from './Content'
import Action from "./Action"
import Input from "./Input"

function Comment({ comment }) {
    return (
        <div>
            <div className="d-flex justify-content-center row">
                <div className="col-12">
                    <div className="d-flex flex-column comment-section">
                        <Content comment={comment} />
                        <Action comment={comment} /> 
                        <Input comment={comment} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Comment