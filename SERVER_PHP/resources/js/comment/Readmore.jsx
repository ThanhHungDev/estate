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

    const clickShowMore = () => {
        setShowmore( showmore == 'hidden' ? 'show' : 'hidden' )
        setTimeout(() => {
            const y = refCommentText.current.getBoundingClientRect().top + window.pageYOffset - 150
            window.scrollTo({top: y, behavior: 'smooth'})
            // refCommentText.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }, 10 )
    }

    return (
        <div className="d-flex flex-column justify-content-start ml-1">
            <div className="shadow-none p-2 bg-light rounded">
                <span className=" font-weight-bold comment__user--name text-color-black">{ comment.user?.name }</span>
                <div className="text-color-black">
                    <div ref={refCommentText} className={ `comment-text ${showmore}` }>{comment.body}</div>
                    <button className="btn btn__more" ref={refBtnToggle}  onClick={ clickShowMore }>
                        { 
                            showmore == 'hidden' 
                            ? <span>hiện tất cả <i className="far fa-angle-double-down"></i> </span>
                            : <span>ẩn bớt <i className="far fa-angle-double-up"></i> </span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Readmore