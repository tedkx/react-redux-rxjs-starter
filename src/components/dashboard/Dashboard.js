import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                Dashboard { this.props.location.pathname }
            </div>
        );
    }
}

export default Dashboard;