// crea ids
import uuid from 'uuid/v1'


// company actions
const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST'
const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS'
const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE'
const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST'
const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE'
const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST'
const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS'
const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE'
const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST'
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS'
const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE'
const EDIT_CONTACT_REQUEST = 'EDIT_CONTACT_REQUEST'
const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS'
const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE'

// API URL Constant
const API_URL = 'http://localhost:8081/contacts'

export function addContact(value) {
    return function (dispatch) {
    dispatch({
      type: ADD_CONTACT_REQUEST
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
          type: ADD_CONTACT_SUCCESS,
          contact: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_CONTACT_FAILURE,
          error: error
        })
      })
  }
}


export function uploadContacts(){
    return function (dispatch) {
    dispatch({
      type: GET_CONTACTS_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          contacts: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_CONTACTS_FAILURE,
          error: error
        })
      })
  }
}


export function deleteContact(value) {
    return function (dispatch) {
    dispatch({
      type: DELETE_CONTACT_REQUEST
    })
    fetch(`${API_URL}/${value}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
          id: value
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_CONTACT_FAILURE,
          error: error
        })
      })

  }
}


export function editContact(i, value, em, ph, po, co) {
    return function (dispatch) {
    dispatch({
      type: EDIT_CONTACT_REQUEST
    })
    fetch(`${API_URL}/edit/${i}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: value,
        email: em, 
        phone: ph,
        position: po,
        company: co
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: EDIT_CONTACT_SUCCESS,
          contact: data
        })
      })
      .catch(error => {
        dispatch({
          type: EDIT_CONTACT_FAILURE,
          error: error
        })
      })
  }
}
