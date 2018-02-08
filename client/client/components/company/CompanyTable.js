import React from 'react';
import ReactDOM from 'react-dom';
import CompanyItem from './CompanyItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const CompanyTable = (props) => {
  // Map through the companies
  const companyItems = props.companies.map((company) => {
    return (<CompanyItem company={company} key={company.iden}  loadForm={props.loadForm} deleteCompany={props.deleteCompany} editCompany={props.editCompany}/>)
  });

  return (<div className="table-responsive"><table className="table table-striped table-hover table-condensed"><caption>List of companies</caption><thead className="thead-dark"><tr><th scope="col">Name</th><th scope="col">Address</th><th scope="col">Phone</th><th>Actions</th></tr></thead>{companyItems}</table></div>);
}

 export default CompanyTable;