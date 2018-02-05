// contacts reducer
import uuid from 'uuid/v1'

const DEFAULT_STATE = {
  contacts: []
}

const contacts = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, {
          id: uuid(),
          name: action.value,
          email: action.email,
          phone: action.phone,
          position: action.position,
          company: action.company
        }],
      }
    case 'UPLOAD_CONTACTS':
      return {
        ...state,
        contacts: action.value,
      } 
    default:
      return state
  }
}

export default contacts