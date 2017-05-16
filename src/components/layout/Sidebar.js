import React    from 'react';

import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        let location = this.context.router.route.location.pathname;

        return (
            <div>
                <div>Sidebar</div>
                <Link to="/">To Home</Link>
                <Link to="/dashboard">To Dashboard</Link>
                <Link to="/user">To Profile</Link>
                <Link to="/user/1">To Specific Profile</Link>
            </div>
        );
    }
}

Sidebar.contextTypes = {
    router: React.PropTypes.any.isRequired
}

export default Sidebar;