const roomRoute = require("express").Router();
const roomModel = require("../schema/roomSchema");


// get all room data
roomRoute.get("/" , async(req,res)=>{
    const hall = await roomModel.find();
    res.status(200).json({message:"List of rooms" , hall})
})

// add new room
roomRoute.post("/add_room" , async(req,res)=>{
    const roomData = req.body;

    try {
          await roomModel.create(roomData);
          res.status(200).json({message:"room data added sucessfully" , roomData})
        
    } catch (error) {
       console.log(error) 
    }
})

module.exports = roomRoute;