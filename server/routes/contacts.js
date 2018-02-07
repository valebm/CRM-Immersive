const express = require('express')
var bodyParser = require('body-parser')
const contactsController = require('../controllers/contacts.controller')

var jsonParser = bodyParser.json()
 

const router = express.Router()

router.get('/', contactsController.getAll)

router.put('/edit/:id', jsonParser, contactsController.editContact)

router.delete('/:id', contactsController.deleteContact)

router.post('/new',jsonParser, contactsController.add)

module.exports = router
