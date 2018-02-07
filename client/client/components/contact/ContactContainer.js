import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './ContactTable';
import { connect } from 'react-redux'
import { addContact, uploadContacts, deleteContact, editContact } from './actions'
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
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.loadForm = this.loadForm.bind(this);

    }

  handleChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value)
   }

  handleSubmit(event){
   	this.props.addContact(this.state.value)
    this.setState({ value: '' })
   }

  deleteContact(event){
    var id = event.target.parentNode.parentNode.getAttribute('id')
    this.props.deleteContact(id)
   }
  
  loadForm(event){
    var parentNode = event.target.parentNode;
    var id = parentNode.parentNode.getAttribute('id')
    document.getElementById("idField").value = id;
    document.getElementById("idField").readOnly = true;
    document.getElementById("name").value = parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("email").value = parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("phone").value = parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("position").value = parentNode.previousElementSibling.previousElementSibling.innerText
    document.getElementById("company").value = parentNode.previousElementSibling.innerText

  }
    //cargar datos en form
  

  editContact(event){
    //guardar datos
    var id=document.getElementById("idField").value;
    var n =document.getElementById("name").value;
    var a=document.getElementById("email").value;
    var p=document.getElementById("phone").value;
    var po=document.getElementById("position").value;
    var c=document.getElementById("company").value;
    this.props.editContact(id, n, a, p, po, c)
   }    

  render(){
    // Render JSX
    console.log(this.state)
    return (
    <div>
        <div className="modal fade" id="myModalNorm" tabIndex="-1" role="dialog" 
       aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
          <div className="modal-content">
           
              <div className="modal-header">
                  <button type="button" className="close" 
                     data-dismiss="modal">
                         <span aria-hidden="true">&times;</span>
                         <span className="sr-only">Close</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                      Edit Company
                  </h4>
              </div>
              

              <div className="modal-body">
                  
                  <form role="form" >
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Identifier</label>
                        <input className="form-control"
                        id="idField" name="id"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Name</label>
                        <input className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Email</label>
                        <input className="form-control" id="email" name="email"/>
                    </div>
                     <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Phone</label>
                        <input className="form-control" id="phone" name="phone"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Position</label>
                        <input className="form-control" id="position" name="position"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Company</label>
                        <input className="form-control" id="company" name="company"/>
                    </div>
                  </form>
                  
                  
              </div>
              
              
              <div className="modal-footer">
                  <button type="button" className="btn btn-default"
                          data-dismiss="modal">
                              Close
                  </button>
                  <button type="button" data-dismiss="modal" onClick={this.editContact} className="btn btn-primary">
                      Save changes
                  </button>
              </div>
          </div>
      </div>
  </div>
     <div>
      CONTACTS
      <input type="text" id="contactVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addContactButt" onClick={this.handleSubmit}>Add</button>
      <ContactTable contacts={this.props.contacts} loadForm={this.loadForm} deleteContact={this.deleteContact} editContact={this.editContact}/>           
    </div> 
    </div>
    );
  }


  componentDidMount(){

    this.props.uploadContacts()
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
    uploadContacts: value => dispatch(uploadContacts(value)),
    deleteContact: value => dispatch(deleteContact(value)),
    editContact(id, name, email, phone, position, company){dispatch(editContact(id, name, email, phone, position, company))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)