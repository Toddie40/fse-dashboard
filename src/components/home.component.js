import React, { Component } from 'react';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.name = 'Home';
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