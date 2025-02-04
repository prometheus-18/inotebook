const mongoose = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    descrption:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        Default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', NoteSchema);