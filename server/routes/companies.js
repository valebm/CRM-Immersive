const express = require('express')

const companiesController = require('../controllers/companies.controller')

const router = express.Router()

router.get('/', companiesController.getAll)

module.exports = router
