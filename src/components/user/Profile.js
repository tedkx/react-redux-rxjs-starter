import React from 'react';

import { Route } from 'react-router-dom'

import ProfileChild from './ProfileChild'

class Profile extends React.Component {
    componentDidMount() {
        console.log('Profile mounted', this.props);
    }

    componentWillUnmount() {
        console.log('Profile unmounting');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Profile receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        console.log('Profile rendering');
        return (
            <div>
                Profile
                
                <Route path="/user/:userid" component={ ProfileChild } />
            </div>
        );
    }
}

export default Profile;