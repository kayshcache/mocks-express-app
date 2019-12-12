# Mocks Application

An app which generates mocks and returns them to the client, while saving a collection of the mocks in a sqlite database.

## Usage

To install dependencies:

```shell
npm install
```

To start the server:

```shell
npm start
```

To create the database tables:

```shell
sqlite3 ./src/db/mocks.db < ./sql/create-tables.sql
```

## Guide

The `/src` folder contains:

- `/db` - folder containing a SQLite database
- `/helpers` - files for helper functions such as `mocks` which generate mock data
- `/models` - write and read entities to and from the database
- `/routes` - request handlers using the Express router which call on models to perform database operations, and return data to the client
- `/routes/router.js` - is an index for all routes in the application
- `/index.js` - contains express app object and application-wide middleware such as logging and security headers

The `/sql` folder contains:

- `create-tables.sql` - run this file to create the database schema

## Challenge Description
# Thursday Challenge
Create an Express application with a REST API which provides mock entities/records/objects that are consistent with the system that you are working on for the assessment.
The idea with this application is that you will develop it and use it to populate your application with test data (also, if you do a thorough job with this application, you may see some benefits in terms of the project that you will complete after the holiday break!)
You must:
- use a `src` directory and correctly initialise `package.json`
- contain scripts in `package.json` for starting the server including tools like `forever`, `nodemon` OR `pm2`
- create an Express application where your code is modular by separating it into separate files using `module.exports`
- use the Express `Router` to make your routes modular
- use `Faker` or another source of mock data to generate objects to return to the `client`
- implement routes which handle `GET` requests which have query strings to set the number of objects to return, see: http://expressjs.com/en/api.html#req.query
Extension tasks:
- implement a `Sqlite` database with tables to store a collection of the entities returned to the client
- implement endpoints that will return ALL records generated for each entity from the database (you could implement a hard limit for the number of records returned, OR use a query string to set the maximum number of objects returned)
- implement a route which returns an array of `n` entities as a `csv` OR as SQL `INSERT` statements
Super-duper Extension tasks:
- implement authentication using a token attached to each request - the server must check the token, if the token is not correct, then the server should return a `404` HTTP status code
