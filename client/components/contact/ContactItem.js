import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const ContactItem = (props) => {
  // Each Contact
  return (<tbody><tr id={props.contact.id}><td>{props.contact.name}</td><td>{props.contact.email}</td><td>{props.contact.phone}</td><td>{props.contact.position}</td><td>{props.contact.company}</td></tr></tbody>);
}


export default ContactItem;

