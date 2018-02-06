const express = require('express')
var bodyParser = require('body-parser')
const companiesController = require('../controllers/companies.controller')

var jsonParser = bodyParser.json()
 

const router = express.Router()

router.get('/', companiesController.getAll)

router.post('/new',jsonParser, companiesController.add)

module.exports = router
