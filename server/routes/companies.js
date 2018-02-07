const express = require('express')
var bodyParser = require('body-parser')
const companiesController = require('../controllers/companies.controller')

var jsonParser = bodyParser.json()
 

const router = express.Router()

router.get('/', companiesController.getAll)

router.put('/edit/:id', jsonParser, companiesController.editCompany)

router.delete('/:id', companiesController.deleteCompany)

router.post('/new',jsonParser, companiesController.add)

router.get('/:id',jsonParser, companiesController.getCompany)

module.exports = router
