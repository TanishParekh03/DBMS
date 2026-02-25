const getVendorQuery = `
SELECT * FROM vendors
WHERE id = $1
`
const getAllVendorsQuery = `
Select * from vendors
`
const getAllVendorsForUserQuery = `
SELECT * FROM vendors
WHERE user_id = $1
`

const addNewVendorQuery = `
INSERT INTO vendors(user_id,name,phone_number)
VALUES($1,$2,$3)
RETURNING *
`
const updateVendorQuery = `
UPDATE vendors
SET name =$1,
phone_number =$2
Where id = $3
RETURNING *
`
const deleteVendorQuery = `
DELETE FROM vendors
WHERE id = $1
returning *
`
module.exports = { getVendorQuery, getAllVendorsQuery, getAllVendorsForUserQuery, addNewVendorQuery, updateVendorQuery, deleteVendorQuery }