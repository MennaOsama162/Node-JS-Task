const fs = require('fs');
const express = require('express')
const Router= express.Router()
const{GetAllUsers,SaveUser,DeleteUser}=require('../controllers/user')

Router.get("/",GetAllUsers)

Router.post("/",SaveUser)

Router.delete("/",DeleteUser)


module.exports=Router

