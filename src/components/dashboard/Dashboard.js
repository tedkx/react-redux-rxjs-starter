import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.id = Math.floor(Math.random() * 10000);
        //console.log('Dashboard', this.id, 'constructed');
    }

    componentDidMount() {
        //console.log('Dashboard', this.id, 'mounted', this.props);
    }

    componentWillUnmount() {
        //console.log('Dashboard', this.id, 'unmounting');
    }

    componentWillReceiveProps(nextProps) {
        //console.log('Dashboard', this.id, 'receiving props', JSON.parse(JSON.stringify(this.props)), JSON.parse(JSON.stringify(nextProps)));
    }

    render() {
        //console.log('Dashboard', this.id, 'rendering');
        return (
            <div>
                Dashboard { this.props.location.pathname }
            </div>
        );
    }
}

export default Dashboard;