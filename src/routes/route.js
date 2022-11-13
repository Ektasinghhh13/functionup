const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memesController=require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getdistrict",CowinController.getDistrict)
router.get("/weather/weathercity",weatherController.weathercity)
router.get("/weather/getlondonweather",weatherController.getlondonweather)
router.get("/weather/getcities",weatherController.getcities)
router.post("/memes/getmemes",memesController.getmemes)
router.post("/memes/creatememes",memesController.creatememes)

module.exports = router;