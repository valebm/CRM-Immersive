import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const ContactItem = ({contact, remove}) => {
  // Each Contact
  return (<tbody className="table"><tr id={contact.id}><td>{contact.name}</td><td>{contact.email}</td><td>{contact.phone}</td><td>{contact.position}</td><td>{contact.company}</td></tr></tbody>);
}


 export default ContactItem;

 ContactItem.propTypes = {
 	contact: PropTypes.object,
 	remove: PropTypes.func,
}

 ContactItem.defaultProps = {
 	contact: { },
 	remove: () => { },
 }