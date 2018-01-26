// companies reducer
import uuid from 'uuid/v1'

const DEFAULT_STATE = {
  companies: []
}

const companies = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        ...state,
        companies: [...state.companies, {
          id: uuid(),
          name: action.value,
          address: action.address,
          phone: action.phone
        }],
      }
    case 'UPLOAD_COMPANIES':
    console.log(action.value)
      return {
        ...state,
        companies: action.value,
      } 
    default:
      return state
  }
}

export default companies