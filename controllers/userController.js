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
        user.cart.addToSet(req.params.cakeId)
        //save User
        await user.save()
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
    },
    myCart: async (req, res, next) => {
        try {
            await User.findById({ _id: req.params.id }).populate('cart').exec((err, data) => {
                if (!err) {
                    console.log('Cart', data['cart']);
                    res.status(200).json(data['cart'])
                }
            })
        } catch (e) {
            console.log('Internal Server Error')
            res.send('Internal Server Error')
            next()
        }
    },
    myOrder: async (req, res, next) => {
        try {
            await User.findById({ _id: req.params.id }).populate('order').exec((err, data) => {
                if (!err) {
                    console.log('Order', data['order']);
                    res.status(200).json(data['order'])
                }
            })
        } catch (e) {
            console.log('Internal Server Error')
            res.send('Internal Server Error')
            next()
        }
    },
    removeItemfromCart: async (req, res, next) => {
        //get user
        const user = await User.findById({ _id: req.params.id })
        console.log(user)
        //user.id = req.params.cakeId
        console.log(user.id)
        //add car to user's collection
        if (user.cart.pull(req.params.cakeId)) {
            //save User
            await user.save()
            res.send(req.params.cakeId)
        }
        else {
            res.send('failed')
        }
        next()
    },
}