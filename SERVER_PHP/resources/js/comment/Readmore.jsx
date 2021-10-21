import React, { useEffect, useRef, useState } from 'react'


function Readmore({ comment }) {
    const MAX__WIDTH = 100
    const refCommentText = useRef()
    const refBtnToggle   = useRef()

    const [ showmore, setShowmore ] = useState(null)

    useEffect(()=>{
        
        /// trường hợp init lần đầu
        if( !showmore ){
            /// kiểm tra height để setting ban đầu
            if( refCommentText.current.offsetHeight > MAX__WIDTH ){
                setShowmore('hidden')
            }else if( refCommentText.current.offsetHeight <= MAX__WIDTH ){
                /// ẩn luôn cái btn
                refBtnToggle.current.classList.add('d-none')
                /// cái text cần xử lý
                setShowmore('show')
            }
        }
        
    }, [ showmore ])

    return (
        <div className="d-flex flex-column justify-content-start ml-2">
            <div className="shadow-none p-3 bg-light rounded">
                <span className=" font-weight-bold name">{ comment.user?.name }</span>
                <div className="mt-2">
                    <div ref={refCommentText} className={ `comment-text ${showmore}` }>{comment.body}</div>
                    <button className="btn btn__more" ref={refBtnToggle}  onClick={ () => {setShowmore( showmore == 'hidden' ? 'show' : 'hidden' )}}>
                        { 
                            showmore == 'hidden' 
                            ? <span>hiện tất cả <i class="far fa-angle-double-down"></i> </span>
                            : <span>ẩn bớt <i class="far fa-angle-double-up"></i> </span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Readmore