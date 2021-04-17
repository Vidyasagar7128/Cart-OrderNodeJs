const mongoose = require('mongoose')
const Schema = mongoose.Schema;
BakerySchema = new Schema({
    name: String,
    delivery_boy: String,
    address: String,
    open: String,
    close: String,
    cakes: [{
        type: Schema.Types.ObjectId,
        ref: 'Cake'
    }]
})
module.exports = mongoose.model('Bakery', BakerySchema)


// {
//     "name":"Rajyasthan Bakery",
//     "address":"near Shivaji Chauk",
//     "delivery_boy":"false",
//     "open":"10:00AM",
//     "close":"10:00PM"
// }