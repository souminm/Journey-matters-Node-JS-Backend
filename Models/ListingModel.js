const mongoose = require('mongoose');


// const createDateTimeFormatter =()=>{
//     var currentDate = new Date(); 
// //     let full_date = ("0" + currentDate.getDate()).slice(-2);
// //     let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
// //     let year = currentDate.getFullYear();
    
// //     let hours = currentDate.getHours();
// //     let minutes = currentDate.getMinutes();
// //     let seconds = currentDate.getSeconds();
    
// //    console.log("\displaying date and time in yyyy-mm-dd format")
// //     result = (year + "-" + month + "-" + full_date + " " + hours + ":" + minutes + ":" + seconds);
// //     return result;
// return currentDate;
// }

const ListingSchema = mongoose.Schema({
    "category" : {
        type :String ,
        required:true},

    "link" : {type:String,
             required:true},
    "url" :{type: String, required:true},
    "title":{type:String,required:true},
    // "createdAt" :{type:Date,default:Date.now()},
     
    // "updatedAt" :{type:Date,default:Date.now()},


},{ timestamps: true });

module.exports = mongoose.model("Listing",ListingSchema);
