const Cake = require('../models/cake')
const Bakery = require('../models/bakery')


module.exports = {
    cakeIndex: async (req, res, next) => {


        try {
            await Cake.find().then((data) => {
                res.status(200).json(data)
            })
        } catch (e) {
            console.log(e)
            res.send('Internal Server Error')
        }
    },
    postCake: async (req, res, next) => {
        try {
            //create Cake
            const newCake = new Cake({
                name: req.body.name,
                type: req.body.type,
                price: req.body.price,
                deliveryType: req.body.delivery,
                image: req.file.filename
            })
            console.log('NewCake', newCake);
            //get user by Id
            const bake = await Bakery.findById({ _id: req.params.bakeId })
            newCake.bakery = bake.id
            //save car
            await newCake.save();
            //add car to user's collection
            bake.cakes.push(newCake)
            //save User
            await bake.save()
            res.status(200).json(newCake)
        } catch (e) {
            console.log(e)
            res.send('Internal Server Error')
        }
    },


}