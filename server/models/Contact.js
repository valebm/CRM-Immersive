const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  iden: { type: String, required: true },
  name: { type: String},
  email: { type: String},
  phone: { type: Number },
  position: { type: String},
  company: { type: String},
})

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact
