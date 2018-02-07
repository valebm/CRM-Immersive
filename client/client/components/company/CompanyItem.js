import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const CompanyItem = (props) => {
  // Each Company
  return (<tbody><tr id={props.company.iden}><th scope="row">{props.company.iden}</th><td>{props.company.name}</td><td>{props.company.address}</td><td>{props.company.phone}</td><td><button onClick={props.deleteCompany}>Delete</button><button onClick={props.loadForm} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit</button></td></tr></tbody>);
}


export default CompanyItem;
