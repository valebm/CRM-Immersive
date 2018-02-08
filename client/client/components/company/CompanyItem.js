import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


const CompanyItem = (props) => {
  // Each Company
  var direccion= `/contacts?${props.company.name}`
  return (<tbody><tr id={props.company.iden}><th scope="row">{props.company.iden}</th><td id="nameTd"><Link to={direccion}>{props.company.name}</Link></td><td id="addressTd">{props.company.address}</td><td id="phoneTd">{props.company.phone}</td><td><button onClick={props.deleteCompany}>Delete</button><button onClick={props.loadForm} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit</button></td></tr></tbody>);
}


export default CompanyItem;
