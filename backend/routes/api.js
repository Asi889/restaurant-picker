const express = require('express')
const router = express.Router();
const Type = require('../model/restaurant');;

router.get(`/all-restaurants`, async (req, res) => {
    try {
        const allTypes = await Type.find()
        res.send(allTypes)
       
    } catch (error) {
        res.send('err')
    }

})
// router.post(`/get-type`, async (req, res) => {

//     try {
//         const type = await Type.findById(req.body.id)
//         res.send(type)
       
//     } catch (error) {
//         res.send('err')
//     }

// })


router.post('/newRestaurant', async (req, res) => {
    console.log("innnn");

    try {
        
        const newRestaurant = new Type(req.body);
        await newRestaurant.save();
        res.send(newRestaurant);

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;