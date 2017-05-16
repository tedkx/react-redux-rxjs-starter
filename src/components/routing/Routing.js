import React            from 'react'
import { Switch,Route } from 'react-router-dom'

import Login            from '../../containers/LoginContainer'
import Dashboard        from '../../containers/DashboardContainer'
import Profile          from '../user/Profile'
import ProfileChild     from '../user/ProfileChild'

import NoRouteMatch     from '../common/NoRouteMatch'

class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Dashboard } />
                <Route path="/login" component={ Login } />
                <Route exact path="/dashboard" component={ Dashboard } />
                <Route path="/user" component={ Profile } />
                <Route component={ NoRouteMatch } />
            </Switch>
        );
    }
}

export default Routing;