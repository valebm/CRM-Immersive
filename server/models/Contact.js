const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  iden: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
})

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact
