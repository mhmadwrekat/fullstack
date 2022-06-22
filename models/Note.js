const mongoose = require("mongoose");

const NoteSCM = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add atitle"],
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: [true, "please add description"],
    maxlength: [200, "description cannot be more than 200 characters"],
  },
  // date: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSCM);
