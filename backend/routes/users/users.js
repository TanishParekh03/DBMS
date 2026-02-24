const express = require('express');
const { getUser } = require('../../Controller/users');
const router = express.Router();
router.use(express.json());
router.get('/users', (req, res) => {
    const userId = req.params.id;
    res.status(200).json(`User ID: ${userId}`);
})
router.get('/users/:id', getUser)

module.exports = router;