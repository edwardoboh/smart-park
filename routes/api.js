const express = require('express')
const routes = express.Router()
const Park = require('../model')

// API URL: [url]/api/?a=123&b=23&c=13&d=124
exports.api = (io) => {
    routes.get("/", (req, res) => {
        const {a, b, c, d} = req.query
        // Save Data to database
        // const newParkData = new Park({a, b, c, d})
        Park.findOneAndUpdate({}, {a, b, c, d}, (err, resp) => {
            if(err){
                return res.json({msg: "ERROR"})
            }
            res.json({data: resp})
            io.emit("readings", {})
        })
        // Send to React With Socket
    })

    routes.post("/", (req, res) => {
        const {a, b, c, d} = req.body
        const newParkData = new Park({a, b, c, d})
        newParkData.save().then(resp => {
            res.json(resp)
        }).catch(err => {
            console.log(err)
            res.json({mgs: "ERROR"})
        })
    })
    
    return routes
}