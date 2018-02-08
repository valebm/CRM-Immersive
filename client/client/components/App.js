import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom'
import CompanyContainer from './company/CompanyContainer';
import ContactContainer from './contact/ContactContainer';
import HomeContainer from './home/HomeContainer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './../styles/app.css';




const App = ({props}) =>{

  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle('active')
   };

    return (  
    <div className="container-fluid container-pattern" id="contain">
    <div id="sidebar">
    <div className="toggle-btn" onClick={toggleSidebar}>
  <span></span>
  <span></span>
  <span></span>
    </div>
   
      <ul>
        <li onClick={toggleSidebar}><Link to='/'><img src={require('./../images/home.png')}></img></Link></li>
        <li onClick={toggleSidebar}><Link to='/companies'><img src={require('./../images/companies.png')}></img></Link></li>
        <li onClick={toggleSidebar}><Link to='/contacts'><img src={require('./../images/contacts.png')}></img></Link></li>
      </ul>
  </div>
    <header>

    </header>
    <main>
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/companies' component={CompanyContainer}/>
      <Route path='/contacts' component={ContactContainer}/>
    </Switch>
  </main>


    </div> 
      );
}


export default App;