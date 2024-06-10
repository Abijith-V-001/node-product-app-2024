const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "id": String,
    "name": String,
    "manDate": String,
    "price": String,
})
let productmodel = mongoose.model("products", schema)
module.exports = { productmodel }