import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import BR187 from './components/br187.component.js'
import Home from './components/home.component.js'
import About from './components/about.component.js'
import MergingFlow from './components/mergingflow.component'
import FileNameConvention from './components/filename.component';
import Features from './components/features.component';

class App extends Component{
  constructor(props){
    super(props);
    this.state = this.resetState();
    this.onPressModule = this.onPressModule.bind(this);
    this.isActiveModule = this.isActiveModule.bind(this);
    this.modules = {}
    this.createModules()
    const homepage = this.modules.home;
    this.state = this.resetState(homepage[0]); 
  };
  
  resetState(startingModule){
    return {
      currentModule: startingModule
    }
  }

  setModule(fse_module){
    this.setState({
      currentModule: fse_module
    });
  }

  getModules(){
    const mods = this.modules
    return mods;
  }

  //each modules is an array consisting of a class and a name (string)
  createModules(){
    this.modules= {
      home: [Home, "Home"],
      filenaming: [FileNameConvention, "File Naming Convention"],
      br187: [BR187, "BR187 Calculator"],
      mergingflow: [MergingFlow, "Merging Flow Calculator"],
      features: [Features, "Features"],
      about: [About, "About"]
    }
  }

  onPressModule(e){
    this.setModule(this.modules[e.target.id][0])
  }

  isActiveModule(module_id){
    return this.modules[module_id][0] === this.state.currentModule;
  }

  createModulesList(){
    const moduleListItems = [];
    for (var module_id in this.modules){
      var module_string = this.modules[module_id][1]
      moduleListItems.push(<button className={"list-group-item list-group-item-action" + (this.isActiveModule(module_id) ? " active": "")}
            id={module_id}
            onClick={this.onPressModule}
    >{module_string}</button>)
    }
    console.log(moduleListItems);
    return moduleListItems;
  }

  render() {
    let sfe_modules = this.createModulesList();
    return (
      <div className="container">
        <div className="row my-5">
          <div className="list-group modules col-md-2">
            {sfe_modules}
          </div>
          <div className="col-md-10">
            <div className="container">
              
              <this.state.currentModule/>
              
            </div>
          </div>
          </div>
      </div>
  );
};
};

export default App;
