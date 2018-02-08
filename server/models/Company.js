const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  iden: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
})

const Company = mongoose.model("company", companySchema)
module.exports = Company
