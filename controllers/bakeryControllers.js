const Bakery = require("../models/bakery");

module.exports = {
    index: async (req, res, next) => {
        await Bakery.find().then((data) => {
            res.status(200).json(data)
        }).catch((e) => {
            console.log(e);
        })
    },
    newBakery: async (req, res, next) => {
        const newdata = new Bakery(req.body)
        await newdata.save()
        res.status(200).json({ success: true, newdata })
    },
    getBakeryCakes: async (req, res, next) => {
        try {
            await Bakery.findById({ _id: req.params.id }).populate('cakes').exec((err, data) => {
                if (!err) {
                    console.log('cake', data['cakes']);
                    res.status(200).json(data['cakes'])
                }
            })
        } catch (e) {
            console.log('Internal Server Error')
            res.send('Internal Server Error')
            next()
        }
    },
}



