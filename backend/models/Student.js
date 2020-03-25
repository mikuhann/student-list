const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  rollNo: {
    type: Number,
  },
}, {
  collection: 'students',
});

module.exports = mongoose.model('student', StudentSchema);
