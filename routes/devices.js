const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json( [
    {
    "Id": "1",
    "Type": "Sensor", 
    "Price": 20,
    "Currency": "USD", 
    "isFavorite": false,
    "imageUrl": "http://127.0.0.1:3000/imgs/1.png", 
    "Title": "Test Sensor", 
    "Description": ""
    },
    {
    "Id": "2",
    "Type": "Thermostat",
    "Price": 25, 
    "Currency": "USD",
    "isFavorite": false, 
    "imageUrl": "http://127.0.0.1:3000/imgs/2.jpg",
    "Title": "Test Thermostat", 
    "Description": ""
    }
  ])
}

module.exports = router