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
    return (<CompanyItem company={company} key={company.id}/>)
  });

  return (<div><table className="table"><thead><tr><th>Name</th><th>Address</th><th>Phone</th></tr></thead>{companyItems}</table></div>);
}

 export default CompanyTable;