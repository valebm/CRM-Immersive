import React from 'react';
import ReactDOM from 'react-dom';
import CompanyTable from './CompanyTable';
import { connect } from 'react-redux'
import { addCompany, uploadCompanies, deleteCompany } from './actions'

const uuidv1 = require('uuid/v1');
// Contaner Component


class CompanyContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      value: '',
      filt: ''
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);

    }

  handleChange(event){
    this.setState({value: event.target.value});

   }

   handleSubmit(event){
   	this.props.addCompany(this.state.value)
    this.setState({ value: '' })
   }

   deleteCompany(event){
    var id = event.target.parentNode.parentNode.getAttribute('id')
    this.props.deleteCompany(id)
   }
      

  render(){
    // Render JSX

    console.log(this.state.filt)
    const elements  = this.props.companies;
    const filterStr  = this.state.filt;

    const filteredElements = elements
      .filter(e => (e.name.includes(filterStr) || e.address.includes(filterStr) || e.id.includes(filterStr) || e.phone.toString().includes(filterStr)))


    return (
     <div>
      COMPANIES
      <input
          type="text"
          value={ this.state.filt }
          onChange={ e => this.setState({ filt: e.target.value }) } />
      <input type="text" id="companyVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addCompanyButt" onClick={this.handleSubmit}>Add</button>
      <CompanyTable companies={filteredElements} deleteCompany={this.deleteCompany}/>           
    </div> 
    );
  }


  componentDidMount(){
    this.props.uploadCompanies()
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCompany: value => dispatch(addCompany(value)),
    uploadCompanies: value => dispatch(uploadCompanies(value)),
    deleteCompany: value => dispatch(deleteCompany(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)
