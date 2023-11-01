const express = require("express");

const {  ActivityModel } = require("../model/activity.model");
const { auth } = require("../middlware/auth.middleware");

const activityRoute = express.Router();

activityRoute.use(auth)

activityRoute.get("/",async(req,res)=>{
    const {name}= req.body;
    try{
        const posts = await ActivityModel.find({name});
        res.status(200).send(posts)
    }catch(err){
        res.status(400).send({"error":err})
    }
})

activityRoute.post("/add",async(req,res)=>{
    try{
        const newActivity = new ActivityModel(req.body);
        await newActivity.save();
        res.status(200).send({"msg":"new Activity has been added","new_Activity":req.body})
    }catch(err){
        res.status(400).send({"error":err})
    }
})



module.exports={activityRoute}