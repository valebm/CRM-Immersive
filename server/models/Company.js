const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  iden: { type: String, required: true },
  name: { type: String},
  address: { type: String},
  phone: { type: Number },
})

const Company = mongoose.model("company", companySchema)
module.exports = Company
