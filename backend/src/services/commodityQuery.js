const getCommodityQuery = `
SELECT * FROM commodities
WHERE id = $1
`
const getAllCommoditiesQuery = `
select * from commdities
where user_id = $1
`
const addNewCommodityQuery =
    `
INSERT INTO commodities(name,quantity,unit,user_id)
VALUES($1,$2,$3,$4)
returning *
`
const updateCommodityQuery = `
UPDATE commodities
set  quantity = $1
RETURNING *
`
const deleteCommodityQuery = `
DELETE FROM commodities 
Where id = $1
`
module.exports = {
    getCommodityQuery,
    getAllCommoditiesQuery,
    addNewCommodityQuery,
    updateCommodityQuery,
    deleteCommodityQuery
}