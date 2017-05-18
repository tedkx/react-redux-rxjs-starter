import React        from 'react';

import { Route }    from 'react-router'

import ProfileChild from './ProfileChild'

class Profile extends React.Component {
    render() {
        return (
            <div>
                Profile
                { this.props.children ? <hr /> : false }
                { this.props.children }
            </div>
        );
    }
}

export default Profile;