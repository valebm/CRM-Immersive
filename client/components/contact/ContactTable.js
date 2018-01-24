import React from 'react';
import ReactDOM from 'react-dom';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const ContactTable = ({contacts, remove, erase}) => {
  // Map through the companies
  const contactItems = contacts.filter(function(el, i) {
      return el.done !== true;
      }).map((contact) => {
    return (<ContactItem contact={contact} remove={remove} key={contact.id}/>)
  });

  return (<div><table className="table"><tr><th>Name</th><th>Email</th><th>Phone</th><th>Position</th><th>Company</th></tr>{contactItems}</table></div>);
}

 ContactTable.propTypes = {
 	contacts: PropTypes.array,
 	remove: PropTypes.func,
 	erase: PropTypes.func,
 }

  ContactTable.defaultProps = {
 	contacts: [],
 	remove: () => { },
 	erase: () => { },
 }

 export default ContactTable;