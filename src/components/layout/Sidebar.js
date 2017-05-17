import React    from 'react';
import { Link } from 'react-router'

import Store    from '../../data/Store'

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div>Sidebar</div>
                <Link to="/">To Home</Link>
                <Link to="/dashboard">To Dashboard</Link>
                <Link to="/user">To Profile</Link>
                <Link to="/user/details">To Profile details</Link>
            </div>
        );
    }
}

export default Sidebar;