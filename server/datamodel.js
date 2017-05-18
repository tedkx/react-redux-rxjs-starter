const createDummyUser = (username) => ({ username, firstName: username, lastName: username, accessToken: username, role: username })

const datamodel = {
    findUser: (username, password) => createDummyUser(username),
    getUserByToken: (token) => createDummyUser(token)
}

module.exports = datamodel