const mongoose = require('mongoose');


const ListingSchema = mongoose.Schema({
    "category" : {
        type :String ,
        required:true},

    "link" : {type:String,
             required:true},
    "url" :{type: String, required:true},
    "title":{type:String,required:true},
    "createdAt" :{type:Date,default:Date.now()},
});
module.exports = mongoose.model("Listing",ListingSchema);
