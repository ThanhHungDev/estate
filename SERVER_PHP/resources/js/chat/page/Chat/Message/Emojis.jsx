// FUNCTIONAL COMPONENT
import React from "react"
import Emoji from "./Emoji.jsx"

const Emojis = props => {
    const { emojis } = props
    return (
        <div id="js-emojis" className="component-list-emoji">
            { emojis.map((item) => <Emoji key={item.sign} symbol={item.symbol} sign={item.sign} /> ) }
        </div>
    );
}
export default Emojis