// crea ids
import uuid from 'uuid/v1'

// company actions
const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST'
const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS'
const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE'
const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'
const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'
const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
const GET_COMPANY_FAILURE = 'GET_COMPANY_FAILURE'
const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST'
const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS'
const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE'
const EDIT_COMPANY_REQUEST = 'EDIT_COMPANY_REQUEST'
const EDIT_COMPANY_SUCCESS = 'EDIT_COMPANY_SUCCESS'
const EDIT_COMPANY_FAILURE = 'EDIT_COMPANY_FAILURE'

// API URL Constant
const API_URL = 'http://localhost:8081/companies'

export function addCompany(value) {
    return function (dispatch) {
    dispatch({
      type: ADD_COMPANY_REQUEST
    })
    fetch(`${API_URL}/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        iden: uuid(),
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

export function getCompany(value) {
    return function (dispatch) {
    dispatch({
      type: GET_COMPANY_REQUEST
    })
    fetch(`${API_URL}/${value}`)
      .then(response => response.json())
      .then(data => {
        console.log("GET_SUCCESS")
        dispatch({
          type: GET_COMPANY_SUCCESS,
          company: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_COMPANY_FAILURE,
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
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
      .then(data => {
        console.log("DELETE_SUCCESS")
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


export function editCompany(i, value, ad, ph) {
    return function (dispatch) {
    dispatch({
      type: EDIT_COMPANY_REQUEST
    })
    fetch(`${API_URL}/edit/${i}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: value,
        address: ad, 
        phone: ph
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: EDIT_COMPANY_SUCCESS,
          company: data
        })
      })
      .catch(error => {
        dispatch({
          type: EDIT_COMPANY_FAILURE,
          error: error
        })
      })
  }
}
