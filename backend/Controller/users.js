const express = require('express');
const router = express.Router();
const { getSingleUser } = require('../models/users.model');

const getUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getSingleUser([userId]);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    return res.status(200).json({
        user
    })
}

module.exports = {
    getUser
}