
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
       
    customerName:{
        type:String,
        require:true
    },

    roomId:{
        type:String,
        require:true
    },

    date:{
        type:String,
        require:true
    },

    startTime:{
        type:String,
        require:true
    },

    endTime:{
        type:String,
        require:true
    },

    bookedAt:{
         type:String,
         default: new Date().toISOString().slice(0,10)
    }

  
}) 

module.exports = mongoose.model("bookings" , bookingSchema)