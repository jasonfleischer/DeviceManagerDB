const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json({
  "devices": [
    {
    "Id": "1",
    "Type": "Sensor", 
    "Price": 20,
    "Currency": "USD", 
    "isFavorite": false,
    "imageUrl": "https://jasonfleischer.github.io/website/imgs/hcn_tablet.jpg", 
    "Title": "Test Sensor", 
    "Description": ""
    },
    {
    "Id": "2",
    "Type": "Thermostat",
    "Price": 25, 
    "Currency": "USD",
    "isFavorite": false, 
    "imageUrl": "https://github.com/jasonfleischer/website/blob/gh-pages/imgs/arc_genesis_1.jpg",
    "Title": "Test Thermostat", 
    "Description": ""
    }
  ]
})
})

module.exports = router