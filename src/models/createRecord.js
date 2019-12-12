const sqlite3 = require('sqlite3').verbose()
const { queryHandler, prepareParameters } = require('../helpers/sqlite3');

function createRecord(newRecordObject, table) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const { parameters, fieldNamesNoDollar, fieldNames } = prepareParameters(newRecordObject);
    const sql = `INSERT INTO ${table}(${fieldNamesNoDollar}) VALUES (${fieldNames})`

    db.serialize(() => db.run(sql, parameters, queryHandler));
    db.close()
}


module.exports = { createRecord }

