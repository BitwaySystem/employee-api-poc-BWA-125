const User = require("../models/UserModel");

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
    const { id } = req.parms;
    try {
        const user = await User.findByPk(id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ message: `Something is wrong: ${error}` });
    }
};

exports.createUser = async (req, res) => {
    let { name, email } = req.body;
    try {
        const user = await User.create({ name: name, email: email });
        return res.status(201).json(user);
    } catch (error) {
        return res
            .status(500)
            .json({ message: `Something is wrong: ${error}` });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.parms;
    let { name, email } = req.body;
    try {
        let user = await User.findByPk(id);
        if (user) {
            user.name = name;
            user.email = email;
            let user = await user.save();
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ message: `Something is wrong: ${error}` });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.parms;
    try {
        const user = await User.findByPk(id);
        if (user) {
            User.destroy({ where: { id: user.id } });
            return res.status(204).json("User deleted");
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ message: `Something is wrong: ${error}` });
    }
};
