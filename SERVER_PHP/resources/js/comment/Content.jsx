import React from 'react'

function Content({ comment }) {
    return (
        <div className="bg-white p-2">
            <div className="d-flex flex-row user-info">
                <img className="rounded-circle" src={ comment.user?.avatar } width="40" />
                <div className="d-flex flex-column justify-content-start ml-2">
                    <span className="d-block font-weight-bold name">{ comment.user?.name }</span>
                    <span className="date text-black-50">Shared publicly - Jan 2020</span>
                </div>
            </div>
            <div className="mt-2">
                <p className="comment-text">{comment.body}</p>
            </div>
        </div>
    )
}


export default Content