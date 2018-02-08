import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


const CompanyItem = (props) => {
  // Each Company
  var direccion= `/contacts?${props.company.name}`
  return (<tbody><tr id={props.company.iden}><td id="nameTd"><Link to={direccion}><span className="link"><strong>{props.company.name}</strong></span></Link></td><td id="addressTd">{props.company.address}</td><td id="phoneTd">{props.company.phone}</td><td><button onClick={props.loadForm} className="btn btn-info btn-md" data-toggle="modal" data-target="#myModalNorm">Edit</button><button onClick={props.deleteCompany}  className="btn btn-danger btn-md" >Delete</button></td></tr></tbody>);
}


export default CompanyItem;
