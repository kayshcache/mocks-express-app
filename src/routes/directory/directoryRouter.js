const directoryRouter = require('express').Router()
const { createRecord } = require('../../models/createRecord');
const { createMockMember } = require('../../helpers/mocks')

/**
 * A GET route `/student` which returns
 * a mock student.
 */
directoryRouter.get('/', (req, res, next) => {
    res.body = createMockMember()
    next()
})

directoryRouter.use((req, res) => {
    createRecord(res.body, 'directory')
    res.send(res.body)
})

module.exports = directoryRouter
