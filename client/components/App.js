import React from 'react';
import ReactDOM from 'react-dom';
import CompanyContainer from './company/CompanyContainer';
import ContactContainer from './contact/ContactContainer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './../styles/app.css';
const App = ({props}) =>{
    return (  
    <div>
      <CompanyContainer/>
      <ContactContainer/>
    </div> 
    );
}


export default App;