const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', taskSchema);// Updated on 2024-01-05 06:54:00
// Updated on 2024-01-01 01:54:00
// Updated on 2024-01-03 10:33:00
