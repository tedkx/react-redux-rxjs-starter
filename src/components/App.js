import React from 'react';

import Header   from './layout/Header'
import Sidebar  from '../containers/SidebarContainer'
import Main     from '../containers/MainContainer'
import Footer   from './layout/Footer'

class App extends React.Component {
    render() {
        return (
            <div id="app" className={ this.props.user != null ? 'authenticated' : '' }>
                <div className="loader app-loader loader-hidden"></div>
                <div>
                    <Header />
                    <Sidebar />
                    <Main>
                        { this.props.children }
                    </Main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;