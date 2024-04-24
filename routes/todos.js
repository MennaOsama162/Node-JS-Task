const fs = require('fs');
const express = require('express')
const Router= express.Router()
const{GetAllTodos,SaveTodo,DeleteTodo}=require('../controllers/todos')

Router.get("/",GetAllTodos)

Router.post("/",SaveTodo)

Router.delete("/",DeleteTodo)


module.exports=Router



 








