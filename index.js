const express = require("express");
const roomRoute = require("./route/roomRoute");
const bookingRoute = require("./route/bookingRoute");
require("./databaseConfiguration/databaseConfig")
 

const app = express();


app.use(express.json())

app.use("/room" , roomRoute);
app.use("/booking" , bookingRoute);

app.listen(8000 , ()=> console.log("server online"));


app.get("/" , (req,res)=>{
   res.status(200).json({message:"Hall Booking Task"})
})



