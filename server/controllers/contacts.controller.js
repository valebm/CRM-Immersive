const Contact = require('../models/Contact')

function getAll(req, res) {
  Contact.find()
    .exec((err, contacts) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(contacts)
    })
}



function deleteContact(req, res) {
  Contact.deleteOne({iden: req.params.id})
    .exec((err, contact) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(300)
      res.json(contact)
    })
}

function editContact(req, res) {
  Contact.updateOne({iden: req.params.id}, {
     $set: { name: req.body.name, email: req.body.email, phone: req.body.phone,  position: req.body.position, company: req.body.company  }
   })
    .exec((err, contact) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(300)
      res.json({iden: req.params.id, name: req.body.name, email: req.body.email, phone: req.body.phone,  position: req.body.position, company: req.body.company})
    })
}

function add(req, res) {
  var cont = new Contact(req.body);
  cont.save(function (err) {
    if (err) {
      res.status(500)
      res.send(`Ocurrió un error 💩 ${err}`)}
      res.status(200)    // thats it!
      res.json(req.body)
  });
}

module.exports = {
  getAll, add, deleteContact, editContact
}