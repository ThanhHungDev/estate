import React, { Component } from "react"

import MessageChatImage from "./MessageChatImage.jsx"
import MessageInfo from "./MessageInfo.jsx"


class MessageItem extends Component {

    constructor(props) {
        super(props)

        this.state = { showMore: false }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.showMore != nextState.showMore){
            return true
        }
        /// get data from parent send
        let { message } = this.props,
            { read }    = message
        const btnLoadmore = document.getElementById('js-is-loading-more')
        if( btnLoadmore ){
            /// check class follow
            if(btnLoadmore.classList.contains('follow')){
                return true
            }
        }
        return !read
    }

    changeShowMore = () => {
        /// remove dom to loading
        let { message } = this.props,
            { _id }    = message
        if( document.getElementById("js__readmore--" + _id) ){
            document.getElementById("js__readmore--" + _id).classList.add('d-none')
            this.setState({ showMore: true })
        }
    }

    render() {
        
        /// get data from parent send
        const { auth, message, active } = this.props
        if( !auth.JWT ){
            return null
        }

        let { avatar }      = auth,
            { style, type, body, attachment, _id, keyUpdate } = message
        
        if( !body && style != 'IMAGE' ) return null

        let readmore = false
        if( body.length > 1000 ){
            if(!this.state.showMore){
                body = body.substring(0, 1000)
                readmore = !readmore
            }
        }

        let _id_key = "mess__" + _id + keyUpdate

        let typeMessage = 'messright mess__content'
        if (!type) {

            typeMessage = 'mess__content'
            avatar = active?.users[0].avatar
        }
        return (
            <div id={_id_key} className="component-message-chat">

                <div className={typeMessage}>
                    <figure className="mess__content-avatar">
                        <img src={ avatar } alt="" />
                    </figure>
                    <div className="mess__content-main">
                        { style == "IMAGE" && <MessageChatImage attachments={attachment}/> }
                        {
                            body && 
                            <div className={style + " mess__content-text"} id={"mess__readmore" + _id}>
                                {
                                    body
                                }
                                { readmore && <a id={"js__readmore--" + _id} className="readmore" onClick={this.changeShowMore}>続きを読む</a> }
                            </div>
                        }
                        <MessageInfo message={message} />
                    </div>
                </div>

            </div>
        );
    }
}

export default MessageItem