const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userRoute = express.Router();

userRoute.post("/register",async(req,res)=>{

    const {email,password,name}= req.body;
    try{
        const user = await UserModel.findOne({email});
        if(user)
        {
            res.status(200).send({"msg":"This email address is already used please login"})
        }else{
            bcrypt.hash(password, 5, async(err, hash)=> {
                
                if(err){
                    res.status(200).send({"msg":err})
                }else{
                    const new_User = new UserModel({
                        email,
                        name,
                        password:hash
                    })
                    await new_User.save();
                    res.status(200).send({"msg":"The new User has been added","new_User":req.body})
                }
            });
        }

    }catch(err){
        res.status(400).send({"msg":err})
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,password}= req.body;

    try{
        const user = await UserModel.findOne({email});
        if(user)
        {
            const token = jwt.sign({name:user.name, userID:user._id},"Dashboard")
            bcrypt.compare(password, user.password, (err, result)=> {
                // result == true
                if(result)
                {
                    res.status(200).send({"msg":"Login uccessful","token":token})
                }else{
                    res.status(200).send({"msg":"Incorrect Password"})
                }
            });
        }else{
            res.status(200).send({"msg":"Email is not Found please put correct email"})
        }

    }catch(err){
        res.status(400).send({"msg":err})
    }
})


module.exports={userRoute}