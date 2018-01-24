import React from 'react';
import ReactDOM from 'react-dom';
import CompanyItem from './CompanyItem';
import PropTypes from 'prop-types'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const CompanyTable = ({companies, remove, erase}) => {
  // Map through the companies
  const companyItems = companies.filter(function(el, i) {
      return el.done !== true;
      }).map((company) => {
    return (<CompanyItem company={company} remove={remove} key={company.id}/>)
  });

  return (<div><table className="table"><tr><th>Name</th><th>Address</th><th>Phone</th></tr>{companyItems}</table></div>);
}

 CompanyTable.propTypes = {
 	companies: PropTypes.array,
 	remove: PropTypes.func,
 	erase: PropTypes.func,
 }

  CompanyTable.defaultProps = {
 	companies: [],
 	remove: () => { },
 	erase: () => { },
 }

 export default CompanyTable;