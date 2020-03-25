const mongoose = require('mongoose');
const config = require('config');

const mongoURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log('mongo db connected');
  } catch (e) {
    console.error(e.message);

    process.exit(1);
  }
};

module.exports = connectDB;
