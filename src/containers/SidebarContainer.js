import { connect }  from 'react-redux'
import Sidebar      from '../components/layout/Sidebar'

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.routing.locationBeforeTransitions
    }
}

export default connect(mapStateToProps, () => ({}))(Sidebar)