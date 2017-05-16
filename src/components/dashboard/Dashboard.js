import React from 'react';

class Dashboard extends React.Component {
    componentDidMount() {
        console.log('Dashboard mounted', this.props);
    }

    componentWillUnmount() {
        console.log('Dashboard unmounting');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Dashboard receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        console.log('Dashboard rendering');
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;