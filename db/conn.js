const mongoose = require('mongoose');
const connectDB = require('./conn');

connectDB();


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Abishekpandya:Abisj@1213@bookmyshow.nh8pmok.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

connectDB();
