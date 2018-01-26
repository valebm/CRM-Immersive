import React from 'react';
import ReactDOM from 'react-dom';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const ContactTable = (props) => {
  // Map through the companies
  const contactItems = props.contacts.filter(function(el, i) {
      return el.done !== true;
      }).map((contact) => {
    return (<ContactItem contact={contact} key={contact.id}/>)
  });

  return (<div><table className="table"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Position</th><th>Company</th></tr></thead>{contactItems}</table></div>);
}


 export default ContactTable;