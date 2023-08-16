
const bookingRoute = require("express").Router();
const bookingModel = require("../schema/bookingSchema");



bookingRoute.get("/", async (req, res) => {
    const bookings = await bookingModel.find();
    res.status(200).json({ message: "Booking Data List", bookings })
})

bookingRoute.post("/add_booking", async (req, res) => {
    const booking = req.body;

    const room = await bookingModel.findOne({ roomId: req.body.roomId });

    // check the particular room has any bookings
    if (room) {
        const date = room.date;
        const startTime = room.startTime;
        const endTime = room.endTime;
        // check room booked on same date
        if (date === req.body.date) {
            // checking previous booking time
            if ((req.body.startTime < startTime && req.body.endTime < startTime) || (req.body.startTime > endTime && req.body.endTime > endTime)) {
                await bookingModel.create(booking);
                return res.status(200).json({ message: "room booked succesfully", booking })
            } else {
                return res.send(`Please change your booking time.The room is already booked for ${startTime}-${endTime}`)
            }

        } else {
            await bookingModel.create(booking);
            return res.status(200).json({ message: "room booked succesfully", booking })
        }
    }

    await bookingModel.create(booking);
    res.status(200).json({ message: "room booked succesfully", booking })
})

// list all booked customer
bookingRoute.get("/booked_customer" , async(req,res)=>{
    const customer = await bookingModel.find({},{_id:0 ,bookedAt:0 , __v:0})
    res.status(200).json({message:"List of Customer" ,customer})
})

// previous booking data
bookingRoute.get("/previous_bookings" , async(req,res)=>{
      const name = req.body.name;
      const customer = await bookingModel.find({customerName:name})
      res.status(200).json({message:`previous booking count of Mr.${name} is ${customer.length} ` , customer})
})

module.exports = bookingRoute;