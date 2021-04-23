const mongoose = require('mongoose')

const task = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  time: {
      type: String,
      required: true
  },
  details: {
      type: String,
      required: true
  },
  timesCompleted: {
      type: Number,
      required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', task)