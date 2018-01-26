import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const CompanyItem = (props) => {
  // Each Company
  return (<tbody><tr id={props.company.id}><td>{props.company.name}</td><td>{props.company.address}</td><td>{props.company.phone}</td></tr></tbody>);
}


export default CompanyItem;
