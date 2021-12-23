import React from "react"

const BtnLoadMore = props => {
    const conversation = props.active

    const loadMoreMessage = async () => {

        const { conversations, auth } = this.props
		const active = conversations.find(channel => channel.isActive)

		if (!active) {
			return null
		}
		const { message } = active 
        /// tin nhắn cuối lấy _id
        const lastestMessage = message[0]
        const idLastestMess = lastestMessage._id

        console.log(idLastestMess);

        let { disable, hidden } = this.state
        this.setState({ disable: !disable });
		
        const messages = await fetchApiMessage(active.id, idLastestMess, auth.id, 1000 )
        if( !messages ){
            this.setState({ disable: false, hidden: !hidden });
            return;
        }
        this.props.dispatch(addListLoadmoreToChannel(active.id, messages))
        this.setState({ disable: false });
        return;
	}

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
