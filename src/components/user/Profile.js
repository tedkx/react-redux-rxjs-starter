import React        from 'react';

import { Route }    from 'react-router'

import ProfileChild from './ProfileChild'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.id = Math.floor(Math.random() * 10000);
        //console.log('Profile', this.id, 'constructed');
    }
    componentDidMount() {
        //console.log('Profile', this.id, 'mounted', this.props);
    }

    componentWillUnmount() {
        //console.log('Profile', this.id, 'unmounting');
    }

    componentWillReceiveProps(nextProps) {
        //console.log('Profile', this.id, 'receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        //console.log('Profile', this.id, 'rendering');
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