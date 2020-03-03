import React from 'react';
import Module from './module.component';

export default class About extends Module{

    constructor(props){
        super(props);
        this.name = 'About';
    }
    toString(){
        return this.name;
    }
    renderBody(){
        return (
            <div className="container">
                <h5>Fire Safety Engineering Dashboard by OFR</h5>
                <p>A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies</p>  
            </div>        
        )
    }
    renderFooter(){
        return ("Alex Todd | OFR Consultants")
    }
}