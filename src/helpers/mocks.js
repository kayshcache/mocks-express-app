const faker = require('faker')

/**
 * A function returning a mock student object
 */
function createMockStudent() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthdate: faker.date.past().toString(),
        address: faker.address.streetAddress(),
        gender: faker.name.title()
    }
}

// Put the profile settings where??
function createMockMember() {
    return {
        displayName: faker.internet.userName(),
	photo: faker.image.avatar(),
        fullName: faker.name.lastName() + ', ' + faker.name.firstName(),
        dateInvited: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
	job: faker.hacker.ingverb(),
	isOnline: true,
	role: 1,
    }
}
/*
 *
 *  member_id INTEGER PRIMARY KEY,
    full_name TEXT,
    display_name TEXT,
    photo BLOB,
    date_invited DATE,
    phone TEXT,
    job TEXT,
    is_online BOOLEAN,
    role INT
);
*/

function createMockWorkspace() {
    const name = faker.hacker.adjective() + '-' + faker.hacker.verb();
    return {
        workspaceName: name.toUpperCase(),
        workspaceUrl: name.toLowerCase() + '.slack.com',
	creator: faker.internet.userName(),
	dateCreated: faker.date.past().toString()
    }
}



function createMockClass() {
    return {
        className: faker.hacker.verb(),
        classMotto: faker.finance.accountName()
    }
}

module.exports = {
    createMockClass,
    createMockStudent
}
