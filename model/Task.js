const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },

    description : {
        type : String,
    },

    status : {
        type : String,
        enum : ["todo", "in-progress", "completed"],
        default : "todo"
    },

    board : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Board",
        required : true
    }
})

module.exports = mongoose.model("Task", taskSchema) 