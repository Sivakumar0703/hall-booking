
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({

    roomName:{
        type:String,
        require:true
    },
   
   amenities: {
    type:Array,
    require:true
    },

    price:{
        type:String,
        require:true 
    },

    numberOfSeats:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("rooms" , roomSchema);