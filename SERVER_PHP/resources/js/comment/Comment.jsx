import React from 'react'
import Content from './Content'

function Comment({ comment }) {

    return (
        <div>
            <div className={`d-flex justify-content-center row`}>
                <div className={ `col-12 comment__level--col${comment.level}` }>
                    <div className="d-flex flex-column comment-section">
                        <Content comment={comment} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Comment