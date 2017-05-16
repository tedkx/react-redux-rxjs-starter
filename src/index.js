import React                from 'react'
import ReactDOM             from 'react-dom'
import { Provider }         from 'react-redux'
import { BrowserRouter }    from 'react-router-dom'

import Store, { history }   from './data/Store'
import App                  from './components/App'

ReactDOM.render(
    <Provider store={ Store }>
        <BrowserRouter history={ history }>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-wrap')
);