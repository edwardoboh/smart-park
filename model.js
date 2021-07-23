const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParkSchema = new Schema({
    a: Number,
    b: Number,
    c: Number,
    d: Number
})

module.exports = mongoose.model("park", ParkSchema)