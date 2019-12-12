const classRouter = require('express').Router()
const classModel = require('../../models/class')
const { createMockClass } = require('../../helpers/mocks')
const { createRecord } = require('../../models/createRecord');

classRouter.get('/', (req, res, next) => {
    res.body = createMockClass()
    next()
})


classRouter.use((req, res, next) => {
    createRecord(res.body, 'classes')
    res.send(res.body)
})

module.exports = classRouter
