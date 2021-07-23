const express = require('express')
const routes = express.Router()
const Park = require('../model')

// Root URL: [url]/
module.exports = function(io){
    io.on("connection", (socket) => {
        console.log("Client connected to server: ")
    })
    
    routes.get("/", (req, res) => {
        // res.json({
        //     parkA: 34,
        //     parkB: 2413,
        //     parkC: 13,
        //     parkD: 241
        // })
        Park.find().then(resp => {
            const {a, b, c, d} = resp[0]
            res.json(
                {
                    parkA: a,
                    parkB: b,
                    parkC: c,
                    parkD: d
                }
            )
        }).catch(err => {
            res.json({msg: "ERROR"})
        })
    })

    return routes
}