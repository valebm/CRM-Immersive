import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './ContactTable';
import { connect } from 'react-redux'
import { addContact, uploadContacts, deleteContact, editContact } from './actions'
// crea ids
import uuid from 'uuid/v1'
// Contaner Component


class ContactContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      filt: '',
      value: '',
      new: false, 
      company: ""
    }


    this.handleChange = this.handleChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.loadForm = this.loadForm.bind(this);
    this.addForm = this.addForm.bind(this);
    }

  handleChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value)
   }


  deleteContact(event){
    var id = event.target.parentNode.parentNode.getAttribute('id')
    this.props.deleteContact(id)
   }
  
  loadForm(event){
    this.state.new = false;
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

  addForm(event){
    this.state.new = true;
    document.getElementById("idField").value = uuid();
    document.getElementById("idField").readOnly = true;
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("position").value = ""
    document.getElementById("company").value = ""
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
    if (this.state.new){
      this.props.addContact(id, n, a, p, po, c)
    }
    else{
      this.props.editContact(id, n, a, p, po, c)
    }
   }    

  render(){
    // Render JSX
    const elements  = this.props.contacts;
    const filterStr  = this.state.filt;

    var filteredElements = elements
      .filter(e => (e.name.includes(filterStr) || e.email.includes(filterStr) || e._id.includes(filterStr) || e.phone.toString().includes(filterStr) || e.iden.includes(filterStr) || e.position.includes(filterStr) || e.company.includes(filterStr)))

    if (this.props.location.search !== ""){
      this.state.company = this.props.location.search.slice(1)
      filteredElements = filteredElements.filter(e => (e.company === this.props.location.search.slice(1)))
    } 

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
                      Save
                  </button>
              </div>
          </div>
      </div>
  </div>
     <div>
      CONTACTS {this.state.company}
      <input
          type="text"
          value={ this.state.filt }
          onChange={ e => this.setState({ filt: e.target.value }) } />
      <button id="addContactButt" onClick={this.addForm} data-toggle="modal" data-target="#myModalNorm">Add</button>
      <ContactTable contacts={filteredElements} loadForm={this.loadForm} deleteContact={this.deleteContact} editContact={this.editContact}/>           
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
    addContact(id, name, email, phone, position, company){dispatch(addContact(id, name, email, phone, position, company))},
    uploadContacts: value => dispatch(uploadContacts(value)),
    deleteContact: value => dispatch(deleteContact(value)),
    editContact(id, name, email, phone, position, company){dispatch(editContact(id, name, email, phone, position, company))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)