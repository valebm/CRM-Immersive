import React from 'react';
import ReactDOM from 'react-dom';
import CompanyTable from './CompanyTable';


const uuidv1 = require('uuid/v1');
// Contaner Component


class CompanyContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      companies: [],
      value: ''
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleErase = this.handleErase.bind(this);

    }

  handleChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value)
   }

   handleSubmit(event){
   	var company = {}
   	company.id = uuidv1();
    company.name = this.state.value;
    company.address = '';
    company.phone = 0;
    this.setState({companies: [...this.state.companies, company]});
    console.log(this.state.companies)
   }
      
   handleRemove(event){
   	var id = event.target.parentNode.getAttribute('id')
   	this.state.companies.map(function(item) {
      if (item.id == id){
        item.done = true;       
      }
    });
   	console.log(this.state.companies)
   	this.setState({companies: this.state.companies});

   }

   handleErase(event){
   	var id = event.target.parentNode.getAttribute('id')

    this.state.companies = this.state.companies.filter(function(el, i) {
      	return id !== el.id;
    });

   	console.log(this.state.companies)
   	this.setState({companies: this.state.companies});
   }

  render(){
    // Render JSX
    console.log(this.state)
    return (

     <div>
      COMPANIES
      <input type="text" id="companyVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addCompanyButt" onClick={this.handleSubmit}>Add</button>
      <CompanyTable companies={this.state.companies} remove={this.handleRemove} erase={this.handleErase}/>           
    </div> 
    );
  }


  componentDidMount(){

	const url = 'http://localhost:3000/companies';

	fetch(url)
	  .then((resp) => resp.json())
	  .then((data) => {    
   		this.setState({companies: data});
	  })
  }
}


 export default CompanyContainer;