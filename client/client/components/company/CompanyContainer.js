import React from 'react';
import ReactDOM from 'react-dom';
import CompanyTable from './CompanyTable';
import { connect } from 'react-redux'
import { addCompany, uploadCompanies, deleteCompany, editCompany, getCompany } from './actions'


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
    this.editCompany = this.editCompany.bind(this);
    this.loadForm = this.loadForm.bind(this);
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
  
  loadForm(event){
    var parentNode = event.target.parentNode;
    var id = parentNode.parentNode.getAttribute('id')
    document.getElementById("idField").value = id;
    document.getElementById("idField").readOnly = true;
    document.getElementById("name").value = parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("address").value = parentNode.previousElementSibling.previousElementSibling.innerText
    document.getElementById("phone").value = parentNode.previousElementSibling.innerText

  }
    //cargar datos en form
  

  editCompany(event){
    //guardar datos
    var id=document.getElementById("idField").value;
    var n =document.getElementById("name").value;
    var a=document.getElementById("address").value;
    var p=document.getElementById("phone").value;
    this.props.editCompany(id, n, a, p)
   }    

  render(){
    // Render JSX
    console.log(this.props)
    const elements  = this.props.companies;
    const filterStr  = this.state.filt;

    const filteredElements = elements
      .filter(e => (e.name.includes(filterStr) || e.address.includes(filterStr) || e._id.includes(filterStr) || e.phone.toString().includes(filterStr)))


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
                      <label htmlFor="exampleInputPassword1">Address</label>
                        <input className="form-control" id="address" name="address"/>
                    </div>
                     <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Phone</label>
                        <input className="form-control" id="phone" name="phone"/>
                    </div>
                  </form>
                  
                  
              </div>
              
              
              <div className="modal-footer">
                  <button type="button" className="btn btn-default"
                          data-dismiss="modal">
                              Close
                  </button>
                  <button type="button" data-dismiss="modal" onClick={this.editCompany} className="btn btn-primary">
                      Save changes
                  </button>
              </div>
          </div>
      </div>
  </div>
     <div>
      COMPANIES
      <input
          type="text"
          value={ this.state.filt }
          onChange={ e => this.setState({ filt: e.target.value }) } />
      <input type="text" id="companyVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addCompanyButt" onClick={this.handleSubmit}>Add</button>
      <CompanyTable companies={filteredElements} loadForm={this.loadForm} deleteCompany={this.deleteCompany} editCompany={this.editCompany}/>           
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
    addCompany: value => dispatch(addCompany(value)),
    uploadCompanies: value => dispatch(uploadCompanies(value)),
    deleteCompany: value => dispatch(deleteCompany(value)),
    editCompany(id, name, address, phone){dispatch(editCompany(id, name, address, phone))},
    getCompany(value){dispatch(getCompany(value))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)
