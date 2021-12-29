import React, { createContext, useState } from 'react'
// Initiate Context
const FollowContext = createContext()
// Provide Context
export const FollowProvider = ({ children }) => {
    const [ value, setFollow ] = useState(false)
    return <FollowContext.Provider value={{ value, setFollow }}>{children}</FollowContext.Provider>
}

export default FollowContext