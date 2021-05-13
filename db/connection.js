const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://vidyasagargaikwad:QKs5TrvV1GeRgsNV@cluster0.esigh.mongodb.net/mart', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB");
}).catch((err) => {
    console.log(err)
})