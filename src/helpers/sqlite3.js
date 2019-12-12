function queryHandler(err) {
    if (err) {
	console.error(err)
    } else {
	console.log('Record saved to DB with id of: ', this.lastID)
    }
}

function prepareParameters(object) {
    const isUpperCase = letter => letter === letter.toUpperCase();
    const toSnakeCase = variableName => variableName.split('').map(letter => {
        if (isUpperCase(letter)) {
	    return '_' + letter.toLowerCase();
	} else {
	    return letter;
	}
    }).join('');
    const processKey = key => '$' + toSnakeCase(key);
    const sqlized = Object.entries(object).map(entry => [ processKey(entry[0]), entry[1] ]);
    const parameters = Object.fromEntries(sqlized);
    return {
	parameters,
	fieldNames: Object.keys(parameters).join(', '),
	fieldNamesNoDollar: Object.keys(parameters).map(key => key.slice(1)).join(', ')
    };
}

module.exports = {
    queryHandler,
    prepareParameters
}
