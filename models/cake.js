const mongoose = require('mongoose')
const Schema = mongoose.Schema;
CakeSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    deliveryType: String,
    image: String,
    bakery: {
        type: String,
        ref: 'Bakery'
    }
    // Schema.Types.ObjectId
})
module.exports = mongoose.model('Cake', CakeSchema)



// {
//     "name":"Chocolate",
//     "type":"Non-Vage",
//     "price":"299",
//     "deliveryType":"Free",
// }