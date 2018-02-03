// crea ids
import uuid from 'uuid/v1'

// company actions
const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST'
const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS'
const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE'
const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'
const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST'
const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS'
const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE'

// API URL Constant
const API_URL = 'http://localhost:3000/companies'

export function addCompany(value) {
    return function (dispatch) {
    dispatch({
      type: ADD_COMPANY_REQUEST
    })
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: uuid(),
        name: value,
        address: '',
        phone: 0
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_COMPANY_SUCCESS,
          company: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_COMPANY_FAILURE,
          error: error
        })
      })
  }
}

export function uploadCompanies(){
    return function (dispatch) {
    dispatch({
      type: GET_COMPANIES_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_COMPANIES_SUCCESS,
          companies: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_COMPANIES_FAILURE,
          error: error
        })
      })
  }
}


export function deleteCompany(value) {
    return function (dispatch) {
    dispatch({
      type: DELETE_COMPANY_REQUEST
    })
    fetch(`${API_URL}/${value}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_COMPANY_SUCCESS,
          id: value
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_COMPANY_FAILURE,
          error: error
        })
      })
  }
}
