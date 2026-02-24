const express = require('express');
const { getVendor, getAllVendors, getVendorsForUser, addNewVendor, updateVendor, deleteVendor } = require("../../Controller/vendors");
const router = express.Router();
router.use(express.json());
router.get("/vendors", getAllVendors)
router.get("/vendors/:id", getVendor)
router.get('/vendors/:user_id', getVendorsForUser)
router.post("/vendors", addNewVendor)
router.put("/vendors/:id", updateVendor)
router.delete('/vendors/:id', deleteVendor)
module.exports = router;