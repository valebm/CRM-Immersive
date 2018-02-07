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

  return (<div><table className="table table-striped table-hover"><caption>List of contacts</caption><thead className="thead-dark"><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Phone</th><th scope="col">Position</th><th scope="col">Company</th><th></th></tr></thead>{contactItems}</table></div>);
}


 export default ContactTable;
