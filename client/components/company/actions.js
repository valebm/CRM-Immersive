// company actions

const ADD_COMPANY = 'ADD_COMPANY'
const UPLOAD_COMPANIES = 'UPLOAD_COMPANIES'

export const addCompany = value => {
  return {
    type: ADD_COMPANY,
    value
  }
}

export const uploadCompanies = value => {
  return {
    type: UPLOAD_COMPANIES,
    value
  }
}