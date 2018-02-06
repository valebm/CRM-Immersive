const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String},
  phone: { type: Number },
})

const Company = mongoose.model("company", companySchema)
module.exports = Company
