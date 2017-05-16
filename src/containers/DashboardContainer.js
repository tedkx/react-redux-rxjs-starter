import { connect }      from 'react-redux'
import Dashboard        from '../components/dashboard/Dashboard'
import { fetchData }    from '../data/dashboard/Dashboard.actions'

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.data,
        fetching: state.dashboard.dataFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)