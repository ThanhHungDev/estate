import React, { useState } from "react"
import messageAPI from "../../../../service/message.api"
import { concatMesssagesToChannel } from "../../../../action/message.action"

const BtnLoadMore = props => {
    const [ fetch, setFetch ] = useState(false)

    const loadMoreMessage = async () => {

        const { active,dispatch,CONFIG } = props
		if (!active) return false
		const { messages } = active
        setFetch( true )
        messageAPI.getMessageUser({ id: active?.users[0]?.id, channelid: active._id,  next: messages[0]?._id || '' })
        .then( response => {
            dispatch(concatMesssagesToChannel(active._id, response.data, CONFIG.CONSTANT.STATE__STATUS.SUCCESS))
            setFetch( false )
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            dispatch(concatMesssagesToChannel(active._id, [], CONFIG.CONSTANT.STATE__STATUS.ERROR))
            setFetch( false )
        })
	}
    if(fetch) return null

    return (
        <div className="loadmore">
            <button className="btn btn-success loadmore__message-btn " 
            disabled={ false }
            onClick={ loadMoreMessage }>
                Tải thêm <i className="fal fa-download"></i>
            </button>
        </div>
    )
}
export default BtnLoadMore
