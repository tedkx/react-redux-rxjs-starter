const baseuri = 'http://localhost:3000/api/';

const Api = {
    getJson: (resource) => ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
}