import axios from 'axios'
import serverUrl from '../url'

const config = {
    "Content-Type": "application/json"
}

export const getParks = ({setPark}) => {
    axios.get(serverUrl).then(resp => {
        console.log("Axios Response: ", resp.data)
        setPark(resp.data)
    }).catch(err => {
        return console.log(err)
    })
}