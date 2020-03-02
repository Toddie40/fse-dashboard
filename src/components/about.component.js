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
            <h2>{this.name}</h2>
        )
    }
}