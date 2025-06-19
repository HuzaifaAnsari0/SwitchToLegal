const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  referralCode: {
    type: String
  },
  serviceType: {
    type: String,
    required: true
  },
  message: {
    type: String,
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Service', serviceSchema); 