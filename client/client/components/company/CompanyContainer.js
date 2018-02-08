import React from 'react';
import ReactDOM from 'react-dom';
import CompanyTable from './CompanyTable';
import { connect } from 'react-redux'
import { addCompany, uploadCompanies, deleteCompany, editCompany, getCompany } from './actions'
import { Route, Switch } from 'react-router-dom'
import ContactContainer from '../contact/ContactContainer';
import uuid from 'uuid/v1'
// Contaner Component

class CompanyContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      value: '',
      filt: '',
      new: false
    }


    this.handleChange = this.handleChange.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.editCompany = this.editCompany.bind(this);
    this.loadForm = this.loadForm.bind(this);
    this.addForm = this.addForm.bind(this);
    }

  handleChange(event){
    this.setState({value: event.target.value});

   }

   deleteCompany(event){
    var id = event.target.parentNode.parentNode.getAttribute('id')
    this.props.deleteCompany(id)
   }
  
  loadForm(event){
    this.state.new = false;
    var parentNode = event.target.parentNode;
    var id = parentNode.parentNode.getAttribute('id')
    document.getElementById("idField").value = id;
    document.getElementById("idField").readOnly = true;
    document.getElementById("name").value = parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("address").value = parentNode.previousElementSibling.previousElementSibling.innerText
    document.getElementById("phone").value = parentNode.previousElementSibling.innerText

  }

  addForm(event){
    this.state.new = true;
    document.getElementById("idField").value = uuid();
    document.getElementById("idField").readOnly = true;
    document.getElementById("name").value = ""
    document.getElementById("address").value = ""
    document.getElementById("phone").value = ""
  }
  

  editCompany(event){
    //guardar datos
    var id=document.getElementById("idField").value;
    var n =document.getElementById("name").value;
    var a=document.getElementById("address").value;
    var p=document.getElementById("phone").value;
    if (this.state.new){
      this.props.addCompany(id, n, a, p)
    }
    else{
      this.props.editCompany(id, n, a, p)
    }
   }    

  render(){
    // Render JSX
    document.getElementById('contain').className="container-fluid banner"; 
    const elements  = this.props.companies;
    const filterStr  = this.state.filt;
    const filteredElements = elements
      .filter(e => (e.name.toLowerCase().includes(filterStr.toLowerCase()) || e.address.toLowerCase().includes(filterStr.toLowerCase()) || e._id.includes(filterStr) || e.phone.toString().includes(filterStr)))


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
                  <h4 className="modal-title font-title" id="myModalLabel">
                     Company Form
                  </h4>
              </div>
              

              <div className="modal-body">
                  
                  <form role="form" >
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="font-title">Identifier</label>
                        <input className="form-control"
                        id="idField" name="id"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="font-title">Name</label>
                        <input className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="font-title">Address</label>
                        <input className="form-control" id="address" name="address"/>
                    </div>
                     <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="font-title">Phone</label>
                        <input className="form-control" id="phone" name="phone"/>
                    </div>
                  </form>
                  
                  
              </div>
              
              
              <div className="modal-footer">
                  <button type="button" className="btn btn-default font-title"
                          data-dismiss="modal">
                              Close
                  </button>
                  <button type="button" data-dismiss="modal" onClick={this.editCompany} className="btn btn-info font-title">
                      Save
                  </button>
              </div>
          </div>
      </div>
    </div>

     <div className="title">
      <h1 className="seccion">COMPANIES</h1>
      <div className="tableContain">
      <input type="text" value={ this.state.filt } onChange={ e => this.setState({ filt: e.target.value }) } placeholder="Find company"/>
      <img src={require('../../images/magnifier.png')}></img>
      <button id="addCompanyButt" className="btn btn-lg btn-secondary" onClick={this.addForm} data-toggle="modal" data-target="#myModalNorm"><strong>+</strong> Add New</button>
      <CompanyTable companies={filteredElements} loadForm={this.loadForm} deleteCompany={this.deleteCompany} editCompany={this.editCompany}/>           
      </div>
      </div>
    </div>
    );
  }


  componentDidMount(){
    this.props.uploadCompanies()
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies.companies,
    company: state.companies.company
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCompany(id, name, address, phone){dispatch(addCompany(id, name, address, phone))},
    uploadCompanies: value => dispatch(uploadCompanies(value)),
    deleteCompany: value => dispatch(deleteCompany(value)),
    editCompany(id, name, address, phone){dispatch(editCompany(id, name, address, phone))},
    getCompany(value){dispatch(getCompany(value))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)
