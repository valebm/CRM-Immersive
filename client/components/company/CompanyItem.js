import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'



const CompanyItem = ({company, remove}) => {
  // Each Company
  return (<tbody className="table"><tr id={company.id}><td>{company.name}</td><td>{company.address}</td><td>{company.phone}</td></tr></tbody>);
}


 export default CompanyItem;

 CompanyItem.propTypes = {
 	company: PropTypes.object,
 	remove: PropTypes.func,
}

 CompanyItem.defaultProps = {
 	company: { },
 	remove: () => { },
 }