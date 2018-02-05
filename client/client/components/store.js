import { createStore , combineReducers, applyMiddleware } from 'redux'
import companyReducer from './company/companyReducer'
import ContactReducer from './contact/ContactReducer'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'

const store = createStore(combineReducers({companies: companyReducer, contacts: ContactReducer}), composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
  ),
))

export default store