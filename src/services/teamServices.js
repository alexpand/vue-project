import axios from 'axios'

const apiCalls = axios.create({
    baseURL: 'https://api.collegefootballdata.com/teams',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
})

export default {
    getTeams(){
        return apiCalls.get()
        .then(response => {
            return response.data
        })

        .catch(err => {
            throw err
        })
    }
}
