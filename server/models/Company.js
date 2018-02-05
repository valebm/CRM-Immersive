const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
})

const Company = mongoose.model("company", companySchema)
module.exports = Company
