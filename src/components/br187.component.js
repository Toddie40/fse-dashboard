import React, { Component } from 'react';
import clip from './../utils/mathutils'
import Module from './module.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight, faArrowsAltH, faArrowsAltV, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export default class BR187 extends Module{
  
    constructor(props){
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this)
      this.onChangeWidth = this.onChangeWidth.bind(this)
      this.onChangeHeight = this.onChangeHeight.bind(this)
      this.onChangeSeparation = this.onChangeSeparation.bind(this)
      this.handleTypeChange = this.handleTypeChange.bind(this)
      this.onChangeSprinklered = this.onChangeSprinklered.bind(this)
      this.state = this.resetState();
      this.title = 'BR187'
    };
    toString(){
      return this.name;
    }
    async onSubmit(e) {
      e.preventDefault();
      this.calculateResults()
    }
  
    resetState(){
      return {
        title: '',
        type: "parallel",
        width: '',
        height: '',
        separation: '',
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
        sprinklered: e.target.checked
      })
    }
  
    calculateResults() {
      //calculation bit
      let viewfac;
      if (this.state.type === "parallel") {
        if (this.state.separation === 0) {
          viewfac = 1;
        }
        else {
          let X = 0.5 * this.state.width / this.state.separation;
          let Y = 0.5 * this.state.height / this.state.separation;
          viewfac = ( 2 / Math.PI ) * ( (X / Math.sqrt(1 + X**2)) * Math.atan(Y / Math.sqrt(1 + X**2))  +  ( Y / Math.sqrt(1+Y**2) ) * Math.atan(X/Math.sqrt(1+Y**2)) );
        }
      }
      else if(this.state.type === "corner") {
        if (this.state.separation === 0) {
          viewfac = 0.25;        
        }
        else {
          let X = this.state.width / this.state.separation;
          let Y = this.state.height / this.state.separation;
          viewfac = 1 / (2 * Math.PI) * (X / Math.sqrt(1 + X**2)) * Math.atan(Y / Math.sqrt(1+X**2)  +  Y / Math.sqrt(1+Y**2) * Math.atan(X/Math.sqrt(1+Y**2)) )
        }
      }
      else if (this.state.type === "perpendicular") {
        if (this.state.separation === 0) {
          viewfac = 0.25;
        }
        else {
          let X = this.state.width / this.state.separation;
          let Y = this.state.height / this.state.separation;
          viewfac = 1 / (2 * Math.PI) * (  Math.atan(X) - (1/Math.sqrt(1+Y**2))*Math.atan(X/Math.sqrt(1+Y**2))  );
        }
      }
      else {
        console.log("Somehow we've landed on an unsupported calculation type ("+ this.state.type +")")
      }
  
      
      let s_unprotected_area = 12.6 / (168 * viewfac) * 100
      let r_unproected_area = 12.6 / (84 * viewfac) * 100
  
      if (this.state.sprinklered) {
        s_unprotected_area *= 2;
        r_unproected_area *= 2;
      }
      this.setState({
        results: true,
        viewfactor: viewfac.toFixed(3),
        standard_unprotected_area: clip(s_unprotected_area.toFixed(1), 0, 100),
        reduced_unprotected_area: clip(r_unproected_area.toFixed(1), 0, 100)
        });
      
    }
  
    renderBody() {
      return (
        <div className="container">
            
              <h3>Inputs</h3>
              <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
              
              <div className="form-row py-2">
                <label className="col-md-4">Project Name</label>
                <div className="input-group">
                                <div className="input-group-prepend">
                                <div class="input-group-text"><FontAwesomeIcon icon={faQuoteRight} fixedWidth/></div>
                                </div>
                <input 
                  className="form-control"
                  type="text"
                  placeholder="Project Title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
                </div>
              </div>
  
              <div className="form-row py-2">
                <label>Radiator Geometry</label>
              </div>
              
              <div className="form-row">
              <div className="input-group  col-md-6">
                                <div className="input-group-prepend">
                                <div class="input-group-text"><FontAwesomeIcon icon={faArrowsAltH} fixedWidth/></div>
                                </div>
                <input className="form-control" type="number" step="0.001" value={this.state.width} onChange={this.onChangeWidth} placeholder="Width"></input>
              </div>
              <div className="input-group  col-md-6">
                                <div className="input-group-prepend">
                                <div class="input-group-text"><FontAwesomeIcon icon={faArrowsAltV} fixedWidth/></div>
                                </div>
                <input className="form-control" type="number" step="0.001" value={this.state.height} onChange={this.onChangeHeight} placeholder="Height"></input>
                </div>
              </div>
  
              <div className="form-row py-2">
                <label className="col-md-4">Separation Distance<small><br/>(Usually twice the boundary distance)</small></label>
                <div className="input-group">
                                <div className="input-group-prepend">
                                <div class="input-group-text"><FontAwesomeIcon icon={faArrowsAltH} fixedWidth/></div>
                                </div>
                <input className="form-control" type="number" step="0.001" placeholder="Separation"value={this.state.separation} onChange={this.onChangeSeparation}></input>
                </div>
              </div>
              
              <div className="form-group">
                <label>Calculation type</label>
                <div className="form-check col-md-4">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  value="parallel"
                  id="parallel"
                  checked={this.state.type === "parallel"}
                  onChange={this.handleTypeChange}
                />
                <label className="form-check-label" for="parallel">Parallel</label>
                </div>
                <div className="form-check col-md-4">
                <input 
                  className="form-check-input"
                  type="radio"
                  value="perpendicular"
                  id="perpendicular"
                  checked={this.state.type === "perpendicular"}
                  onChange={this.handleTypeChange}
                />
                <label className="form-check-label" for="perpendicular">Perpendicular</label>
                </div>
                <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  value="corner"
                  id="corner"
                  checked={this.state.type === "corner"}
                  onChange={this.handleTypeChange}
                />
                <label className="form-check-label" for="corner">Corner</label>
                </div>
              </div>
  
              <div className="form-row py-2">
                <div className="form-check">                  
                   <input className="form-check-input"
                   type="checkbox"
                   checked={this.state.sprinklered}
                   id="sprinklered"
                   onChange={this.onChangeSprinklered}/>
                   <label className="form-check-label" for="sprinklered">Sprinklered </label>
                </div>
              </div>
              <div className="form-group py-3">
                <input
                  type="submit"
                  value="calculate"
                  className="btn btn-primary form-control"  
                />
              </div>
            </form>
            {this.state.results === true &&
            <div className="results">
            <hr/>
              <h3>Results</h3>
                <h5>{this.state.title}</h5>
                <h5>View Factor: {this.state.viewfactor}</h5>
                <div className="row mx-auto">
                  <div className="col-md-6 mx-auto">
                    <div className="card">                
                      <div className="card-header">
                        <h4>Standard Fire Load</h4> <sm>(168 kW/sqm)</sm>
                      </div>
                      <div className="card-body">
                        <h5>Maximum Unprotected Area: {this.state.standard_unprotected_area}%</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <div className="card">
                      <div className="card-header">
                        <h4>Reduced Fire Load</h4> <sm>(84 kW/sqm)</sm>
                      </div>
                      <div className="card-body">
                        <h5>Maximum Unprotected Area: {this.state.reduced_unprotected_area}%</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
              </div>
    );
  };
  };