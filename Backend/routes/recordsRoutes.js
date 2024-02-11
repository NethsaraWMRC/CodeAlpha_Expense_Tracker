const express = require('express')
const { createRecord } = require('../controllers/recordCreateController')
const { getRecord, getOneRecord } = require('../controllers/recordGetController')
const { deleteRecord } = require('../controllers/recordDeleteController')
const { updateRecord } = require('../controllers/recordUpdateCotroller')

const router = express.Router()

router.post('/', createRecord)
router.get('/', getRecord)
router.delete('/:id', deleteRecord)
router.put('/:id', updateRecord)
router.get('/:id', getOneRecord)

module.exports = router;