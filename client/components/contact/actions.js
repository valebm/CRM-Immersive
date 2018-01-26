// contact actions

const ADD_CONTACT = 'ADD_CONTACT'
const UPLOAD_CONTACTS = 'UPLOAD_CONTACTS'

export const addContact = value => {
  return {
    type: ADD_CONTACT,
    value
  }
}

export const uploadContacts = value => {
  return {
    type: UPLOAD_CONTACTS,
    value
  }
}