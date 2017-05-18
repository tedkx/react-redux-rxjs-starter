import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.app.user
    }
}

export default connect(mapStateToProps)(App)