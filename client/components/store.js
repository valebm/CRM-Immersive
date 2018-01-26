import { createStore , combineReducers } from 'redux'
import companyReducer from './company/companyReducer'
import ContactReducer from './contact/ContactReducer'

const store = createStore(combineReducers({companies: companyReducer, contacts: ContactReducer}))

export default store