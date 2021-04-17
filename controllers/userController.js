const Cake = require("../models/cake");
const User = require("../models/user");

module.exports = {
    index: async (req, res, next) => {
        await User.find().then((data) => {
            res.status(200).json(data)
        }).catch((e) => {
            console.log(e);
        })
    },
    newUser: async (req, res, next) => {
        const newdata = new User(req.body)
        await newdata.save()
        res.status(200).json({ success: true, newdata })
    },
    showCakes: async (req, res, next) => {


        try {
            await Cake.find().then((data) => {
                res.status(200).json(data)
            })
        } catch (e) {
            console.log(e)
            res.send('Internal Server Error')
        }
    },
    cart: async (req, res, next) => {
        //get user
        const user = await User.findById({ _id: req.params.id })
        console.log(user)
        //user.id = req.params.cakeId
        console.log(user.id)
        //add car to user's collection
        user.cart.push(req.params.cakeId)
        //save User
        await user.save()
        res.status(200).json(user)
    },
    order: async (req, res, next) => {
        //get user
        const user = await User.findById({ _id: req.params.id })
        console.log(user)
        //user.id = req.params.cakeId
        console.log(user.id)
        //add car to user's collection
        user.order.push(req.params.cakeId)
        //save User
        await user.save()
        res.status(200).json(user)
    }
}