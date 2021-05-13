const mongoose = require('mongoose')
const Schema = mongoose.Schema;
GoogleUserSchema = new Schema({
    uid: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true

    },
    displayName: {
        type: String,
        require: true,
    },
    photoUrl: {
        type: String,
        require: true,
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Cake'
    }],
    order: [{
        type: Schema.Types.ObjectId,
        ref: 'Cake'
    }]
})

module.exports = mongoose.model('Googleuser', GoogleUserSchema)


// {
//     "uid":"Chocolate",
//      "email": "asdfg"
//     "displayName":"Chocolate",
//     "photoUrl":"Non-Vage",
// }