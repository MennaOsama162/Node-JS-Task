const userModel = require('../models/users')

const SaveUser = async (req, res) => {
    let newUser = req.body;
    try {
        let savedUser = await userModel.create(newUser);
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetAllUsers = async (req, res) => {
    try {
        const user = await userModel.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteUser=async(req, res) => {
    try {
        const user = await userModel.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports={GetAllUsers,SaveUser,DeleteUser}