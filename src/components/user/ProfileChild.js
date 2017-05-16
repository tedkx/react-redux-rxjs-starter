import React from 'react';

class ProfileChild extends React.Component {
    componentDidMount() {
        console.log('ProfileChild mounted', this.props);
    }

    componentWillUnmount() {
        console.log('ProfileChild unmounting');
    }

    componentWillReceiveProps(nextProps) {
        console.log('ProfileChild receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        console.log('ProfileChild rendering');
        return (
            <div>
                Profile Child
            </div>
        );
    }
}

export default ProfileChild;