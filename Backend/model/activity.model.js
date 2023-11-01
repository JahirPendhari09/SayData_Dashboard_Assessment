const mongoose =require("mongoose");

const activitySchema =mongoose.Schema({
    name:String,
    type:String,
    duration:String,
    date_of_created:Number,
    last_update:String,
    action:String,
    userId:String
},{versionKey:false});

const ActivityModel=mongoose.model("activity",activitySchema);

module.exports={ActivityModel};
