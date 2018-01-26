import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './ContactTable';
import { connect } from 'react-redux'
import { addContact, uploadContacts } from './actions'

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
   }

  render(){
    // Render JSX
    console.log(this.state)
    return (

     <div>
      CONTACTS
      <input type="text" id="contactVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addContactButt" onClick={this.handleSubmit}>Add</button>
      <ContactTable contacts={this.props.contacts}/>           
    </div> 
    );
  }


  componentDidMount(){

    const url = 'http://localhost:3000/contacts';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {  
        this.props.uploadContacts(data)
      })
  }
}


function mapStateToProps(state) {
  return {
    contacts: state.contacts.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: value => dispatch(addContact(value)),
    uploadContacts: value => dispatch(uploadContacts(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)