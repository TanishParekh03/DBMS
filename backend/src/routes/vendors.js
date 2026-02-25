const express = require('express');
const { getVendor, getAllVendors, getAllVendorsForUser, addNewVendor, updateVendor, deleteVendor } = require("../Controller/vendors");
const router = express.Router();
router.use(express.json());
router.get("/vendors", getAllVendors)
router.get("/users/:userId/vendors", getAllVendorsForUser)
router.get("/users/:userId/vendors/:id", getVendor)
router.post("/vendors", addNewVendor)
router.put("/vendors/:id", updateVendor)
router.delete('/vendors/:id', deleteVendor)
module.exports = router;