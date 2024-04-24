const mongoose = require('mongoose');

let todosSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    status:{
        type:String,
        enum:["complete","in progress"],
        default:'in progress'
    },
    UserId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
});

let TodoModel = mongoose.model('todo', todosSchema);

module.exports = TodoModel;
