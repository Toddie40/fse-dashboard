import React, { Component } from 'react';

export default class About extends Component{

    constructor(props){
        super(props);
        this.name = 'About';
    }
    toString(){
        return this.name;
    }
    render(){
        return (
            <div className="container">
                <div className="card">
                    <h2 className="card-header">{this.name}</h2>
                    <div className="card-body">
                        <h5>Fire Safety Engineering Dashboard by OFR</h5>
                        <p>A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies</p>
                    </div>        
                    <div className="card-footer">Alex Todd | OFR Consultants</div>
                </div>

            </div>
            

        )
    }
}