import React from 'react';

class ProfileChild extends React.Component {
    constructor(props) {
        super(props)

        this.id = Math.floor(Math.random() * 10000);
        //console.log('Profile Child', this.id, 'constructed');
    }

    componentDidMount() {
        //console.log('ProfileChild', this.id, 'mounted', this.props);
    }

    componentWillUnmount() {
        //console.log('ProfileChild', this.id, 'unmounting');
    }

    componentWillReceiveProps(nextProps) {
        //console.log('ProfileChild', this.id, 'receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        //console.log('ProfileChild', this.id, 'rendering');
        return (
            <div>
                Profile Child
            </div>
        );
    }
}

export default ProfileChild;