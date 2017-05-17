import React        from 'react';

import AuthHelper   from '../../lib/AuthHelper';

const AuthorizeRoute = (...allowedRoles) => {
    if(allowedRoles.length === 0 || (allowedRoles.length === 1 && allowedRoles[0] === '*'))
        allowedRoles = '*';

    console.log('created authorizer for', allowedRoles);

    return ({ routes, params, location }, replace, next) => {
        console.log('auth, isLoggedIn', AuthHelper.isLoggedIn(), 'isinrole', AuthHelper.isInRole(allowedRoles));
        if(!AuthHelper.isLoggedIn()) {
            console.log('replacing with', { pathname: '/login' });
            return replace({ pathname: '/login' });//, { from: location });
        } else if (!AuthHelper.isInRole(allowedRoles)) {
            replace('/login');
        } else {
            next();
        }
    }
}

export default AuthorizeRoute