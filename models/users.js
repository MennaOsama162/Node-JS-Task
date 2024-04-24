const mongoose = require('mongoose');


const userSchema=mongoose.Schema({

    fullName:{
        type:String,
        minLength:3,
        maxLength:10,
        required:[true,"user must have afull name"],
        unique:true
    },

    email:{
        type:String, 
        // validate:function(x){
        //     return
        // },
        required:[true,"user must have afull name"],
        unique:true
        },

    password:{
        type:String,
        required:[true,"user must have afull name"]

    }
    
})


let Usermodel=mongoose.model('user',userSchema) 
module.exports=Usermodel;