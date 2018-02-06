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
  getAll, add
}

