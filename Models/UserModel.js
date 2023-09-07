const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   "user" :{
    type : String,
    required:true},

    "password" : {
        type: String,
        required:true
    },
    "createdAt" :{type:String,default:createDateTimeFormatter(Date.now())}
   });

   module.exports = mongoose.model("Listing")
