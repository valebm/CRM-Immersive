import React from 'react';
import ReactDOM from 'react-dom';
import CompanyTable from './CompanyTable';
import { connect } from 'react-redux'
import { addCompany, uploadCompanies } from './actions'

const uuidv1 = require('uuid/v1');
// Contaner Component


class CompanyContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      value: ''
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    }

  handleChange(event){
    this.setState({value: event.target.value});

   }

   handleSubmit(event){
   	this.props.addCompany(this.state.value)
    this.setState({ value: '' })
   }
      

  render(){
    // Render JSX
    return (
     <div>
      COMPANIES
      <input type="text" id="companyVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addCompanyButt" onClick={this.handleSubmit}>Add</button>
      <CompanyTable companies={this.props.companies}/>           
    </div> 
    );
  }


  componentDidMount(){

    const url = 'http://localhost:3000/companies';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {  
        this.props.uploadCompanies(data)
      })
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
    uploadCompanies: value => dispatch(uploadCompanies(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)
