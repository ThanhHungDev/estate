import React from 'react'
import { connect } from "react-redux"

function Comment({ comment, dispatch }) {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-12">
                    <div className="d-flex flex-column comment-section">
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info">
                                <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2">
                                    <span className="d-block font-weight-bold name">Marry Andrews</span>
                                    <span className="date text-black-50">Shared publicly - Jan 2020</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">{comment.body}</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex flex-row fs-12">
                                <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                                <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                            </div>
                        </div>
                        <div className="bg-light p-2">
                            <div className="d-flex flex-row align-items-start">
                                <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                            </div>
                            <div className="mt-2 text-right">
                                <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect()(Comment)