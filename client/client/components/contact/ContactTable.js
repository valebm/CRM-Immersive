import React from 'react';
import ReactDOM from 'react-dom';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const ContactTable = (props) => {
  // Map through the companies
  const contactItems = props.contacts.map((contact) => {
    return (<ContactItem contact={contact} key={contact.iden} loadForm={props.loadForm} deleteContact={props.deleteContact} editContact={props.editContact}/>)
  });

  return (<div className="table-responsive"><table className="table table-striped table-hover table-condensed"><caption>List of contacts</caption><thead className="thead-dark"><tr><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Phone</th><th scope="col">Position</th><th scope="col">Company</th><th>Actions</th></tr></thead>{contactItems}</table></div>);
}


 export default ContactTable;
