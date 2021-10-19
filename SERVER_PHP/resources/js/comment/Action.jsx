import React from 'react'

function Action({ comment }) {

    return (
        <div>
            <div className="bg-white">
                <div className="d-flex flex-row fs-12">
                    
                    <div className="like p-2 cursor"><i className="fal fa-thumbs-up"></i><span className="ml-1">Thích</span></div>
                    <div className="like p-2 cursor"><i className="fal fa-reply"></i><span className="ml-1">Trả lời</span></div>
                    <div className="like p-2 cursor"><i className="fal fa-exclamation-triangle"></i><span className="ml-1">Báo cáo Vi phạm</span></div>
                </div>
            </div>
        </div>
    )
}


export default Action