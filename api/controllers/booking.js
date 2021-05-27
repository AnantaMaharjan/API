const Booking = require('../models/booking');
exports.bookingController = (req, res) => {
    const { ground, time , user} = req.body;
    const booking = new Booking({
       ground,
       time,
       user
      });

      booking.save((err, booking) => {
        if (err) {
          console.log(err);
        //   console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: booking,
            message: 'Booking done success'
          });
        }
      });
};
exports.getBookingController = (req, res) => {
    Booking.find()
    .then(booking =>{
        res.json(booking)
    }).catch(err =>{
        console.log(err)
    })
};

