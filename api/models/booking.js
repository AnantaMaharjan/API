const mongoose = require('mongoose');
// user schema
const bookingSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: Math.floor(Math.random() * 100)
    },
    ground: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true,
    },
    user:{
        type: String,
        required:true,
    }
    
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model('Booking', bookingSchema);
