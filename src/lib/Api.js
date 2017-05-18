import Req          from './RequestHelper'

const Api = {
    /* App */
    login: (credentials) => Req.anonymousPostJson('login', credentials),
    fetchDashboardData: () => Req.getJson('dashboard')
}

export default Api;