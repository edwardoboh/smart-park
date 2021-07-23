import axios from 'axios'

const config = {
    "Content-Type": "application/json"
}

export const getParks = ({setPark}) => {
    // axios.get("http://localhost:5000").then(resp => {
    axios.get("http://localhost:5000").then(resp => {
        console.log("Axios Response: ", resp.data)
        setPark(resp.data)
    }).catch(err => {
        return console.log(err)
    })
}