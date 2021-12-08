import React from 'react'
import { Route, Redirect } from "react-router-dom"

export default function ProtectedRoute ({component: Component, auth, ...rest}) {
    return (
        <Route
            {...rest}
            render={
                (props) => auth === true
                ? <Redirect to={{pathname: '/', state: {from: props.location}}} />
                : <Component {...props} />
            }
        />
    )
}