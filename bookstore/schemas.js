const mongoose  = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name : String,
    email : String,
    message : String
});


const users = mongoose.model('feedbacks',feedbackSchema);

module.exports = users;
