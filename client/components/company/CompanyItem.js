import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const CompanyItem = (props) => {
  // Each Company
  return (<tbody><tr id={props.company.id}><th scope="row">{props.company.id}</th><td>{props.company.name}</td><td>{props.company.address}</td><td>{props.company.phone}</td><td><button onClick={props.deleteCompany}>Delete</button></td></tr></tbody>);
}


export default CompanyItem;
