
const fs = require('fs');

const TodoModel = require('../models/todos');

const SaveTodo = async (req, res) => {
    let newTodo = req.body;
    try {
        let savedtodo = await TodoModel.create(newTodo);
        res.json(savedtodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const GetAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find().populate('UserId');
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteTodo=async(req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports={GetAllTodos,SaveTodo,DeleteTodo}