import React            from 'react'
import { Route, IndexRoute } 
                        from 'react-router'

import AuthorizeRoute   from './AuthorizeRoute'

import App              from '../App'
import Login            from '../../containers/LoginContainer'
import Dashboard        from '../../containers/DashboardContainer'
import Profile          from '../user/Profile'
import ProfileChild     from '../user/ProfileChild'
import ForbiddenRouteMatch     
                        from './ForbiddenRouteMatch'
import NoRouteMatch     from './NoRouteMatch'

const managerAuth = AuthorizeRoute('manager');
const auth = AuthorizeRoute();

const Routing = (
    <Route path="/" component={ App }>
        <IndexRoute component={ Dashboard } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route path="/login" component={ Login } />
        <Route path="/user" component={ Profile } onEnter={ auth }>
            <Route exact path="/user/details" component={ ProfileChild } onEnter={ managerAuth } />
        </Route>
        <Route path="/forbidden" component={ ForbiddenRouteMatch }/>
        <Route path="*" component={ NoRouteMatch }/>
    </Route>
);

export default Routing;