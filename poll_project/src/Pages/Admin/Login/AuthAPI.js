import axios from 'axios';

function authenticate(credentials) {
    return axios.post('http://localhost:8082/api/auth/local', credentials)
    .then(res => console.log(res))
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    authenticate
};