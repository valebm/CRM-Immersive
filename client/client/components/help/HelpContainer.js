import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/app.css';

class HelpContainer extends React.Component{

  constructor(props){
 
    // Pass props to parent class
    super(props);


    }


  render(){    
    if (document.getElementById('contain') !== null){document.getElementById('contain').className="container-fluid container-pattern"}; 
    return (
    <div className="crmCont">
    <img className="under" src={require('../../images/under.png')}></img>
    <h1 className="crmText"><strong>Under Construction</strong></h1>
    <h6 className="crmText2">Check back soon!</h6>
    </div>
    );
  }

}


export default HelpContainer;
