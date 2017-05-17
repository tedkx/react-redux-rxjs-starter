import React        from 'react'
import { Route, 
    Redirect }      from 'react-router'

import AuthHelper   from '../../lib/AuthHelper';

const AuthorizedRoute = ({ component: Component, ...rest }) => {
    console.log('AuthorizedRoute rendering with', Component, rest);
    return <Route {...rest} render={props => (
        !AuthHelper.isLoggedIn() ? (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
            : AuthHelper.isInRole('*') ? <Component { ...props }/>
            : <h2>Δεν έχετε δικαιώματα να δείτε αυτή τη σελίδα</h2>
    )}/>
}

export default AuthorizedRoute