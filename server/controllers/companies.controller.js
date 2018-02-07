const Company = require('../models/Company')

function getAll(req, res) {
  Company.find()
    .exec((err, companies) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(companies)
    })
}

function getCompany(req, res) {
  console.log(req.params.id)
  Company.find({iden: req.params.id})
    .exec((err, company) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(300)
      res.json(company)
    })
}

function deleteCompany(req, res) {
  Company.deleteOne({iden: req.params.id})
    .exec((err, company) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(300)
      res.json(company)
    })
}

function editCompany(req, res) {
  console.log(req.body)
  console.log(req.params)
  Company.updateOne({iden: req.params.id}, {
     $set: { name: req.body.name, address: req.body.address, phone: req.body.phone }
   })
    .exec((err, company) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(300)
      res.json({ iden: req.params.id, name: req.body.name, address: req.body.address, phone: req.body.phone })
    })
}

function add(req, res) {
  var compny = new Company(req.body);
  compny.save(function (err) {
    if (err) {
      res.status(500)
      res.send(`Ocurrió un error 💩 ${err}`)}
      res.status(200)    // thats it!
      res.json(req.body)
  });
}

module.exports = {
  getAll, add, getCompany, deleteCompany, editCompany
}