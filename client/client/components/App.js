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
    </div> 
	    );
}


export default App;