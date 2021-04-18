const express = require('express')
const router = express.Router()
const bakeryController = require('./controllers/bakeryControllers')
const cakeController = require('./controllers/cakeController')
const userController = require('./controllers/userController')
const path = require("path")


const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/images')
    },
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage,
}).single('image')


router.route('/bakery')
    .get(bakeryController.index)
    .post(bakeryController.newBakery)


router.route('/bakery/:id')
    .get(bakeryController.getBakeryCakes)


router.route('/cakes')
    .get(cakeController.cakeIndex)


router.route('/cake/:bakeId')
    .post(upload, cakeController.postCake)


router.route('/user')
    .get(userController.index)
    .post(userController.newUser)


router.route('/user/:id')
    .get(userController.showCakes)


router.route('/cart/:id/:cakeId')
    .post(userController.cart)


router.route('/order/:id/:cakeId')
    .post(userController.order)


router.route('/cart/:id')
    .get(userController.myCart)


router.route('/order/:id')
    .get(userController.myOrder)


router.route('/remove/:id/:cakeId')
    .post(userController.removeItemfromCart)



module.exports = router
