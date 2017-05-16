import React from 'react';

import Routing  from './routing/Routing'
import Header   from './layout/Header'
import Sidebar  from './layout/Sidebar'
import Main     from './layout/Main'
import Footer   from './layout/Footer'

class App extends React.Component {
    render() {
        console.log('rendering app', this.props);
        return (
            <div id="app">
                <div className="loader app-loader loader-hidden"></div>
                <div>
                    <Header />
                    <Sidebar />
                    <Main>
                        <Routing />
                    </Main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;