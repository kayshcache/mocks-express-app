const studentRouter = require('express').Router()
const { createRecord } = require('../../models/createRecord');
const { createMockStudent } = require('../../helpers/mocks')

/**
 * A GET route `/student` which returns
 * a mock student.
 */
studentRouter.get('/', (req, res, next) => {
    res.body = createMockStudent()
    next()
})

studentRouter.use((req, res) => {
    createRecord(res.body, 'students')
    res.send(res.body)
})

module.exports = studentRouter
