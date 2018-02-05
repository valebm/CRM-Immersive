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

module.exports = {
  getAll
}

