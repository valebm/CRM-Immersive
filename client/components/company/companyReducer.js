// companies reducer
const DEFAULT_STATE = {
  loading: false,
  companies: [],
  error: '',
  id: ''
}

const companies = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'GET_COMPANIES_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_COMPANIES_SUCCESS':
      return {
        ...state,
        loading: false,
        companies: action.companies
      }
    case 'GET_COMPANIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case 'ADD_COMPANY_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_COMPANY_SUCCESS':
      return {
        companies: [...state.companies, { ...action.company }],
        loading: false,
      }
    case 'ADD_COMPANY_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      } 

    case 'DELETE_COMPANY_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'DELETE_COMPANY_SUCCESS':
      return {
        companies: state.companies.filter(item => {return item.id !== action.id;}),
        loading: false
      }
    case 'DELETE_COMPANY_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default companies