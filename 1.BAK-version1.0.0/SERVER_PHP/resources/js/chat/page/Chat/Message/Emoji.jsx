// FUNCTIONAL COMPONENT
import React from "react"

const Emoji = props => {

    const { symbol } = props

    function addIconInputChat() {
        const input = document.getElementById("js-input-chat")
        if (input) {

            input.value = input.value + symbol
        }
    }

    return (
        <i className="component-emoji" onClick={addIconInputChat}>{symbol}</i>
    );
}
export default Emoji