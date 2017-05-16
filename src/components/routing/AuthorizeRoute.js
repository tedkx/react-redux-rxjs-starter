import React        from 'react';
import { Redirect } from 'react-router-dom'

import Store        from '../../data/Store';
import Helper       from '../../lib/Helper';
import AuthHelper   from '../../lib/AuthHelper';

const AuthorizeRoute = (...allowedRoles) => {
    if(allowedRoles.length === 1 && allowedRoles[0] === '*')
        allowedRoles = '*';

    return (WrappedComponent) => {
        return class WithAuthorization extends React.Component {
            // constructor(props) {
            //     super(props);
            //     if(WrappedComponent.name == 'Dashboard')
            //         console.log('AUTHORIZE constructing', WrappedComponent);
            // }

            render() {
                if(!AuthHelper.isLoggedIn())
                    return (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: this.props.location }
                        }}/>
                    )
                    
                if (AuthHelper.isInRole(allowedRoles))
                    return <WrappedComponent { ...this.props } />
                return <h2>Δεν έχετε δικαιώματα να δείτε αυτή τη σελίδα</h2>
            }
        }
    }
}

export default AuthorizeRoute