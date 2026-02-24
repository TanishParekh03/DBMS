const pool = require('../Db/pool');
const { loadSql } = require('../Db');

const getSingleUser = async (userId) => {
    try {
        // Test connection first
        await pool.query('SELECT NOW()');

        const sql = loadSql('users', 'getSingleUser.sql');
        console.log('Executing SQL:', sql);
        console.log('With userId:', userId);

        const { rows } = await pool.query(sql, userId);
        console.log('Query result:', rows);
        return rows[0];
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

module.exports = { getSingleUser };