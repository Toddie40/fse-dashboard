import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
//import './components/br187.component.js'



class App extends Component{
  
  constructor(props){
    super(props);
    this.state = this.resetState();
    this.modules = this.getModules();
  };
  
  resetState(){
    return {}
  }


  getModules(){
    return ['Home', 'BR187', 'About'];
  }

  

  createModules(){
    const listItems = this.modules.map((string) =>
    <button className="list-group-item list-group-item-action">{string}</button>
    );
    return listItems;
  }

  render() {
    let sfe_modules = this.createModules();
    return (
      <div className="container">
        <div className="row my-5">
          <div className="list-group modules col-md-2">
            {sfe_modules}
          </div>
          <div className="col-md-10">
            <div className="container">
              <div className="card">
                <p className="card-body">This is where the components gos</p>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
};
};

export default App;
