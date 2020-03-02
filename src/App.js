import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  
  constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeWidth = this.onChangeWidth.bind(this)
    this.onChangeHeight = this.onChangeHeight.bind(this)
    this.onChangeSeparation = this.onChangeSeparation.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.onChangeSprinklered = this.onChangeSprinklered.bind(this)
    this.state = this.resetState();
  };
  
  async onSubmit(e) {
    this.calculateResults()
  }

  resetState(){
    return {
      title: "Example Analysis",
      type: "parallel",
      width: 6,
      height: 3,
      separation: 2,
      sprinklered: false,
      results: false
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }


  handleTypeChange(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeHeight(e) {
    this.setState({
      height: e.target.value
    });
  }

  onChangeWidth(e) {
    this.setState({
      width: e.target.value
    });
  }

  onChangeSeparation(e) {
    this.setState({
      separation: e.target.value
    });
  }

  onChangeSprinklered(e) {
    this.setState({
      sprinklered: e.target.value
    })
  }

  calculateResults() {
    //calculation bit
    let viewfac;
    if (this.state.type === "parallel") {
      let X = 0.5 * this.state.width / this.state.separation;
      let Y = 0.5 * this.state.height / this.state.separation;
      viewfac = ( 2 / Math.PI ) * ( (X / Math.sqrt(1 + X**2)) * Math.atan(Y / Math.sqrt(1 + X**2))  +  ( Y / Math.sqrt(1+Y**2) ) * Math.atan(X/Math.sqrt(1+Y**2)) );
    }

    
    let s_unprotected_area = 12.6 / (168 * viewfac) * 100
    let r_unproected_area = 12.6 / (84 * viewfac) * 100

    if (this.state.sprinklered) {
      s_unprotected_area *= 0.5;
      r_unproected_area *= 0.5;
    }
    this.setState({
      results: true,
      viewfactor: viewfac.toFixed(3),
      standard_unprotected_area: s_unprotected_area.toFixed(1),
      reduced_unprotected_area: r_unproected_area.toFixed(1)
      });
    
  }

  render() {
    return (
      <div className="container">
          <div className="card">
            <div className="card-header">
              <h1>BR187 Tool</h1>
            </div>
            <div className="card-body">
            <h3>Inputs</h3>
            <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
            <div className="form-row">
              <label >Project Name</label>
              <input 
                className="rounded"
                type="text"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>

            <div className="form-row">
              <div className="form-row col-md-4">
                <label>Radiator Geometry</label>
              </div>
              <div className="form-row col-md-4">
                <label>Width</label>
                <input type="number" value={this.state.width} onChange={this.onChangeWidth}></input>
              </div>
              <div className="form-row col-md-4">
                <label>Height</label>
                <input type="number" value={this.state.height} onChange={this.onChangeHeight}></input>
              </div>
            </div>

            <div className="form-row">
              <label className="col-md-4">Separation Distance<small><br/>(Usually twice the boundary distance)</small></label>
              <input type="number" value={this.state.separation} onChange={this.onChangeSeparation}></input>
            </div>
            
            <div className="form-group">
              <label>Calculation type</label>
              <div className="form-check col-md-4">
              <input 
                className="form-check-input" 
                type="radio" 
                value="parallel"
                checked={this.state.type === "parallel"}
                onChange={this.handleTypeChange}
              />
              <label className="form-check-label" for="Parallel">Parallel</label>
              </div>
              <div className="form-check col-md-4">
              <input 
                className="form-check-input"
                type="radio"
                value="perpendicular"
                checked={this.state.type === "perpendicular"}
                onChange={this.handleTypeChange}
              />
              <label className="form-check-label" for="Perpendicular">Perpendicular</label>
              </div>
              <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                value="corner"
                checked={this.state.type === "corner"}
                onChange={this.handleTypeChange}
              />
              <label className="form-check-label" for="Corner">Corner</label>
              </div>
            </div>

            <div className="form-row">
              <label className="form-check-label col-md-2" for="sprinklered">Sprinklered</label>
              <div className="form-check">                  
                 <input className="form-check-input"
                 type="checkbox"
                 value="sprinklered"
                 onChange={this.onChangeSprinklered}/>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="calculate"
                className="btn btn-primary"  
              />
            </div>
          </form>
          {this.state.results === true &&
          <div className="results">
          <hr/>
            <h3>Results</h3>
              <h4>View Factor: {this.state.viewfactor}</h4>
              <hr/>
              <h4>Standard Fire Load (186 kW/sqm):</h4>
              <h5>Maximum Unprotected Area: {this.state.standard_unprotected_area}%</h5>
              <hr/>
              <h4>Reduced Fire Load (84 kW/sqm):</h4>
              <h5>Maximum Unprotected Area: {this.state.reduced_unprotected_area}%</h5>
            </div>
            }
            </div>
          </div>            
      </div>
  );
};
};

export default App;
