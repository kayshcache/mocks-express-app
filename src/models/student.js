const sqlite3 = require('sqlite3').verbose()

function createStudentRecord(studentMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $first_name: studentMock.firstName,
        $last_name: studentMock.lastName,
        $birthdate: studentMock.birthdate,
        $address: studentMock.address,
        $gender: studentMock.gender
    }

    const parameterKeys = Object.keys(parameters);
    const fieldNamesNoDollar = parameterKeys.map(key => key.slice(1)).join(', ');
    const fieldNames = parameterKeys.join(', ');

    const sql = `INSERT INTO students(${fieldNamesNoDollar}) VALUES (${fieldNames})`

    db.serialize(() => db.run(sql, parameters, queryHandler));

    function queryHandler(err) {
	if (err) {
	    console.error(err)
	    db.close()
	} else {
	    console.log('Class saved to DB with id of: ', this.lastID)
	    db.close()
	}
    }

}


module.exports = { createStudentRecord }
