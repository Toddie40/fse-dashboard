import React from 'react';
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
  
              <div className="form-row pt-2">
                <label>Radiator Geometry</label>
              </div>
              
              <div className="form-row">
              <div className="input-group mt-2 col-md-6">
                                <div className="input-group-prepend">
                                <div class="input-group-text"><FontAwesomeIcon icon={faArrowsAltH} fixedWidth/></div>
                                </div>
                <input className="form-control" type="number" step="0.001" value={this.state.width} onChange={this.onChangeWidth} placeholder="Width"></input>
              </div>
              <div className="input-group mt-2 col-md-6">
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
                                <div class="input-group-text"><FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth/></div>
                                </div>
                <input className="form-control" type="number" step="0.001" placeholder="Separation"value={this.state.separation} onChange={this.onChangeSeparation}></input>
                </div>
              </div>
              <div className="form-row row">
                <div className="form-group col-md">
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
                <div className="col-md">
                  <BR187Diagram r_width={this.state.width} r_height={this.state.height} sep={this.state.separation} type={this.state.type}/>
                  <sm>This is only intended as an <b>indicative</b> diagram for use as a visual aid</sm>
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

class Canvas extends React.Component {  
//extendable object for easily implementing canvases in reactjs
//inheritors of this class need to override the draw() function
  constructor(props){
    super(props);
    this.canvas = null;
    this.ctx = null;
    this.mounted = false;
  }


  componentDidMount() {
    this.canvas = this.refs.canvas
    this.ctx = this.canvas.getContext("2d")
    this.mounted = true;
  }  
  
  draw(){
    //function to override
  }

  render() {
    if (this.mounted){
      this.draw()
    }
    return(
      <div className="canvas-container shadow">
        <canvas ref="canvas" className="canvas" />
      </div>
    )
  }
}

//here lies the diagram drawing. It's very much a case of drawing each bit at a time. Lots of repeated code where functions should've been written. It's bad. Really bad. It needs refactoring, but I just wanted it to work, you know...
class BR187Diagram extends Canvas {
  
  draw_dashed_line(ctx, x_1, y_1, x_2, y_2, dash_props, col){
    ctx.setLineDash(dash_props)
        ctx.beginPath();
        ctx.strokeStyle = col
        ctx.moveTo(x_1, y_1);
        ctx.lineTo(x_2,y_2);
        ctx.stroke();
  }
  
  draw(){    
    this.ctx.resetTransform();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    let alpha = '99'
    let colors = {
      red:'#bb0000'+alpha,
      blue: '#0066bb'+alpha
    }


    //radiator
    let width = Number(this.props.r_width)
    let height = Number(this.props.r_height)
    let sep = Number(this.props.sep)
    let view_width = this.canvas.width;
    let view_height = this.canvas.height;
    let canvas_aspect_ratio = view_width / view_height;
    let diagram_height;
    let total_diagram_aspect_ratio;

    let x_1;
    let x_2;
    let y_1;
    let y_2;


    let skew;
    let scaleFactor;
    switch (this.props.type) {
      case "parallel":
        
        skew = .5
        scaleFactor=1

        scaleFactor = view_width / (width + sep)

        diagram_height = height + skew * width
        total_diagram_aspect_ratio = (width + sep) / diagram_height;

        
        if (total_diagram_aspect_ratio < canvas_aspect_ratio) {
          //then we need to adjust scale factor not based on width, but on height
          scaleFactor = view_height / (diagram_height);
        }
        //need to draw 2 verticlally skewed rectangles and then move one of them 'separation' away from the other        
        
        //draw receiver first because it's in the background
        this.ctx.fillStyle = colors.blue;
        this.ctx.setTransform(1, skew, 0, 1, scaleFactor*sep, 0);
        this.ctx.fillRect(0, 0, scaleFactor * width / (1+0.1*sep), scaleFactor*height/ (1+0.1*sep));
        this.ctx.resetTransform();
        
        //then draw the measurement line

        // draw the measurements on
        //get center of first rectangle
        x_1 = width / 2;
        y_1 = height / 2 + x_1 * skew

        //get center of second rectangle
        x_2 = sep + (width/ (2*(1+0.1*sep) ))
        y_2 = height/2 / (1+0.1*sep) + (x_2 - sep)*skew
        
        //scale them
        x_1 *= scaleFactor;
        x_2 *= scaleFactor;
        y_1 *= scaleFactor;
        y_2 *= scaleFactor;

        this.draw_dashed_line(this.ctx, x_1, y_1, x_2, y_2, [5,3], "black")

        //finally draw radiator
        this.ctx.setTransform(1, skew, 0, 1, 0, 0);
        this.ctx.fillStyle = colors.red;
        this.ctx.fillRect(0, 0, scaleFactor * width , scaleFactor * height);
        break;

      case "perpendicular":
        skew = 1.5
        if (width / height > 7 / 3) {
          scaleFactor =this.canvas.width / (width + (sep/2) + skew*2)
        }
        else {
          scaleFactor= this.canvas.height / (height + (sep/3) + height/2)
        }
        
        //radiator
        this.ctx.fillStyle = colors.red;
        this.ctx.fillRect(0, 0, width * scaleFactor, height * scaleFactor);


        //draw measurement line
        x_1 = (width/2) * scaleFactor
        y_1 = (height) * scaleFactor
        x_2 = (width/2 + sep/2) * scaleFactor
        y_2 = (height + sep/3) * scaleFactor

        this.draw_dashed_line(this.ctx, x_1, y_1, x_2, y_2, [5,3], "black")


        //receiver
        this.ctx.save()
        this.ctx.fillStyle = colors.blue;
        this.ctx.setTransform(1, 0, skew, 1, sep / 2 * scaleFactor, height*scaleFactor + sep/3 * scaleFactor);
        this.ctx.fillRect(0,0, width * scaleFactor, height * scaleFactor * 0.5);
        this.ctx.resetTransform()
        this.ctx.restore();
        break;
      case "corner":
        skew = .5
        scaleFactor=1

        scaleFactor = view_width / (width + sep)

        diagram_height = height + skew * width + (height/2 + skew * width/2)/ ( 1 + 0.1 * sep)
        total_diagram_aspect_ratio = (width + sep) / diagram_height;

        
        if (total_diagram_aspect_ratio < canvas_aspect_ratio) {
          //then we need to adjust scale factor not based on width, but on height
          scaleFactor = view_height / (diagram_height);
        }

        //centers that we need later on
        //get center of radiator rectangle
        x_1 = width / 2;
        y_1 = height / 2 + x_1 * skew

        //get center of receiver rectangle
        x_2 = sep + x_1+ (width/ (2*(1+0.1*sep) ))
        y_2 = y_1 + (height / 2 + width * skew / 2) / (1 + 0.1 * sep)
        

        //need to draw 2 verticlally skewed rectangles and then move one of them 'separation' away from the other        
        
        //draw receiver first because it's in the background
        this.ctx.fillStyle = colors.blue;
        this.ctx.setTransform(1, skew, 0, 1, scaleFactor * (x_1 + sep), scaleFactor * y_1);
        this.ctx.fillRect(0, 0, scaleFactor * width / (1+0.1*sep), scaleFactor*height/ (1+0.1*sep));
        this.ctx.resetTransform();
        
        //then draw the measurement line

        // draw the measurements on
        
        //scale them
        x_1 *= scaleFactor;
        x_2 *= scaleFactor;
        y_1 *= scaleFactor;
        y_2 *= scaleFactor;


        this.draw_dashed_line(this.ctx, 2*x_1, 2*y_1, x_2, y_2, [5,3], "black")

        //finally draw radiator
        this.ctx.setTransform(1, skew, 0, 1, 0, 0);
        this.ctx.fillStyle = colors.red;
        this.ctx.fillRect(0, 0, scaleFactor * width , scaleFactor * height);
        break;
      default:
        this.ctx.font = "24px Helvetica"
        this.ctx.fillText("Diagram not implemented", 0, this.canvas.height/2)
        break;
    }
    
  }
}

