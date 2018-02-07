import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const CompanyItem = (props) => {
  // Each Company
  return (<tbody><tr id={props.company.iden}><th scope="row">{props.company.iden}</th><td id="nameTd">{props.company.name}</td><td id="addressTd">{props.company.address}</td><td id="phoneTd">{props.company.phone}</td><td><button onClick={props.deleteCompany}>Delete</button><button onClick={props.loadForm} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit</button></td></tr></tbody>);
}


export default CompanyItem;
