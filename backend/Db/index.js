const fs = require('fs');
const path = require('path');

// This object stores our SQL strings in memory
const sqlCache = {};

/**
 * Loads a SQL file from the src/db/sql directory
 * @param {string} folder - The subfolder name (e.g., 'users')
 * @param {string} fileName - The file name (e.g., 'getSingleUser.sql')
 */
const loadSql = (folder, fileName) => {
    const cacheKey = `${folder}/${fileName}`;

    // If we've already read this file, return it from memory (very fast)
    if (sqlCache[cacheKey]) {
        return sqlCache[cacheKey];
    }

    // Otherwise, find the file on the disk
    const filePath = path.join(__dirname, 'sql', folder, fileName);

    try {
        const sqlContent = fs.readFileSync(filePath, 'utf8');
        // Save it to the cache for next time
        sqlCache[cacheKey] = sqlContent;
        return sqlContent;
    } catch (err) {
        console.error(`❌ Error loading SQL file: ${filePath}`, err);
        throw new Error(`Could not load SQL file: ${fileName}`);
    }
};

module.exports = { loadSql };