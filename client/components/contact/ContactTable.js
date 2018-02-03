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

  return (<div><table className="table table-striped table-hover"><caption>List of contacts</caption><thead className="thead-dark"><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Phone</th><th scope="col">Position</th><th scope="col">Company</th></tr></thead>{contactItems}</table></div>);
}


 export default ContactTable;