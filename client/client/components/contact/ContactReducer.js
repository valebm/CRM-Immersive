// contacts reducer
const DEFAULT_STATE = {
  loading: false,
  contacts: [],
  error: '',
  id: '',
  contact:{}
}

const contacts = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'GET_CONTACTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state,
        loading: false,
        contacts: action.contacts
      }
    case 'GET_CONTACTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case 'ADD_CONTACT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_CONTACT_SUCCESS':
    console.log(action.contact)
      return {
        contacts: [...state.contacts, { ...action.contact }],
        loading: false,
      }
    case 'ADD_CONTACT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      } 

    case 'DELETE_CONTACT_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'DELETE_CONTACT_SUCCESS':
    console.log(action.id)
      return {
        ...state,
        contacts: state.contacts.filter(item => {return item.iden !== action.id;}),
        loading: false
      }
    case 'DELETE_CONTACT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case 'GET_CONTACT_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'GET_CONTACT_SUCCESS':
      return {
        ...state,
        contact: action.contact,
        loading: false
      }
    case 'GET_CONTACT_FAILURE':
      return {
        ...state,
        loading: false,
        contact: {},
        error: action.error
      }

  case 'EDIT_CONTACT_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'EDIT_CONTACT_SUCCESS':
    var conts= state.contacts.map((cont) => {
      if(cont.iden === action.contact.iden){return action.contact}
      else{return cont}})
    console.log(conts)
    return {
        ...state,
        contacts: conts,
        loading: false
      }
    case 'EDIT_CONTACT_FAILURE':
      return {
        ...state,
        loading: false,
        contact: {},
        error: action.error
      }
    default:
      return state
  }
}

export default contacts