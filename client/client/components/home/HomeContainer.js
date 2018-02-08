import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/app.css';

class HomeContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);


    }


  render(){    
    if (document.getElementById('contain') !== null){document.getElementById('contain').className="container-fluid container-pattern"}; 
    return (
    <div className="crmCont">
    <img className="crm animated zoomIn" src={require('../../images/crm4.png')}></img>
    <h1 className="crmText">CRM</h1>
    <h6 className="crmText2">Contact Relationship Management</h6>
    </div>
    );
  }

}


export default HomeContainer;
