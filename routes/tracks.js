const express = require("express");
const router = express.Router();
const{getItems,getItem, createItem} = require("../controllers/tracks");
// todo http://localhost/api/tracks get, post delete, put 

router.get("/",getItems);
router.post("/",createItem);
    
module.exports = router;
