import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom'
import CompanyContainer from './company/CompanyContainer';
import ContactContainer from './contact/ContactContainer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './../styles/app.css';




const App = ({props}) =>{

	const toggleSidebar = () => {
	  document.getElementById("sidebar").classList.toggle('active')
   };

    return (  
    <div className="container-fluid">
    <div className="header">
    <h3>CRM</h3>
    </div>
    <div id="sidebar">
	  <div className="toggle-btn" onClick={toggleSidebar}>
	<span></span>
	<span></span>
	<span></span>
	  </div>
	 
      <ul>
        <li onClick={toggleSidebar}><Link to='/'>Home</Link></li>
        <li onClick={toggleSidebar}><Link to='/companies'>Companies</Link></li>
        <li onClick={toggleSidebar}><Link to='/contacts'>Contacts</Link></li>
      </ul>
	</div>
    <header>

  	</header>
    <main>
    <Switch>
      <Route path='/companies' component={CompanyContainer}/>
      <Route path='/contacts' component={ContactContainer}/>
	</Switch>
	</main>


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
                
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control"
                      id="idField"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                      <input className="form-control" id="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                      <input className="form-control" id="address"/>
                  </div>
                   <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone</label>
                      <input className="form-control" id="phone"/>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                
                
            </div>
            
            
            <div className="modal-footer">
                <button type="button" className="btn btn-default"
                        data-dismiss="modal">
                            Close
                </button>
                <button type="button" className="btn btn-primary">
                    Save changes
                </button>
            </div>
        </div>
    </div>
</div>

    </div> 
	    );
}


export default App;