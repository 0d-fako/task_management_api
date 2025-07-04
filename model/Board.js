const mongoose = require('mongoose');


const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    }},
    {timestamps : true});

    module.exports = mongoose.model("Board", boardSchema);


