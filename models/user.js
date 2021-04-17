const mongoose = require('mongoose')
const Schema = mongoose.Schema;
UserSchema = new Schema({
    name: String,
    contact: Number,
    address: String,
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Cake'
    }],
    order: [{
        type: Schema.Types.ObjectId,
        ref: 'Cake'
    }]
})

module.exports = mongoose.model('User', UserSchema)


// {
//     "name":"Chocolate",
//     "contact":"Non-Vage",
//     "address":"299",
// }