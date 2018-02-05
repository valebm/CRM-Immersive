import React from 'react';
import ReactDOM from 'react-dom';
import CompanyItem from './CompanyItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const CompanyTable = (props) => {
  // Map through the companies
  const companyItems = props.companies.filter(function(el, i) {
      return el.done !== true;
      }).map((company) => {
    return (<CompanyItem company={company} key={company._id} deleteCompany={props.deleteCompany}/>)
  });

  return (<div><table className="table table-striped table-hover"><caption>List of companies</caption><thead className="thead-dark"><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Address</th><th scope="col">Phone</th><th></th></tr></thead>{companyItems}</table></div>);
}

 export default CompanyTable;