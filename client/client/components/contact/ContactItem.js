import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const ContactItem = (props) => {
  // Each Contact
  return (<tbody><tr id={props.contact.iden}><td><strong>{props.contact.name}</strong></td><td>{props.contact.email}</td><td>{props.contact.phone}</td><td>{props.contact.position}</td><td>{props.contact.company}</td><td><button onClick={props.loadForm} className="btn btn-warning btn-md" data-toggle="modal" data-target="#myModalNorm">Edit</button><button onClick={props.deleteContact} className="btn btn-danger btn-md">Delete</button></td></tr></tbody>);
}


export default ContactItem;

