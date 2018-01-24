import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './ContactTable';


const uuidv1 = require('uuid/v1');
// Contaner Component


class ContactContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      contacts: [],
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
   	var contact = {}
   	contact.id = uuidv1();
    contact.name = this.state.value;
    contact.email = '';
    contact.phone = 0;
    contact.position = "";
    contact.company = "";
    this.setState({contacts: [...this.state.contacts, contact]});
    console.log(this.state.contacts)
   }
      
   handleRemove(event){
   	var id = event.target.parentNode.getAttribute('id')
   	this.state.contacts.map(function(item) {
      if (item.id == id){
        item.done = true;       
      }
    });
   	console.log(this.state.contacts)
   	this.setState({contacts: this.state.contacts});

   }

   handleErase(event){
   	var id = event.target.parentNode.getAttribute('id')

    this.state.contacts = this.state.contacts.filter(function(el, i) {
      	return id !== el.id;
    });

   	console.log(this.state.contacts)
   	this.setState({contacts: this.state.contacts});
   }

  render(){
    // Render JSX
    console.log(this.state)
    return (

     <div>
      CONTACTS
      <input type="text" id="contactVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addContactButt" onClick={this.handleSubmit}>Add</button>
      <ContactTable contacts={this.state.contacts} remove={this.handleRemove} erase={this.handleErase}/>           
    </div> 
    );
  }


  componentDidMount(){

	const url = 'http://localhost:3000/contacts';

	fetch(url)
	  .then((resp) => resp.json())
	  .then((data) => {    
   		this.setState({contacts: data});
	  })
  }
}


 export default ContactContainer;