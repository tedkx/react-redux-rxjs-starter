import { connect }  from 'react-redux'
import Main         from '../components/layout/Main'

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.routing.locationBeforeTransitions
    }
}

export default connect(mapStateToProps, () => ({}))(Main)