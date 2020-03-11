import React, { Component } from 'react';
import logo from './../logo.png';

export default class Module extends Component {
    constructor(props){
        super(props);
        this.logo = logo;
        this.logostyle = { 
            height: '3rem',
            float: 'right'
            } 
        this.logosrc = "https://images.squarespace-cdn.com/content/v1/5a61f9539f8dceafed8c0aea/1538391094315-DMAJ4KSB8F3BB7YIYAD3/ke17ZwdGBToddI8pDm48kL1PC3gM8Rd6YHHCa9IyTboUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtz9D7BxKE7nEGUPCO0e-x3MMDjV9uhX05eW5661eHWZCjLISwBs8eEdxAxTptZAUg/OFR-LtGrey+copy%402x.png?format=500w"
        this.title="moduleTitle"
        this.footer=""
    }

    renderBody(){
        return (<div>This method should be overridden</div>);
    }

    renderFooter(){
    return (<div>{this.footer}</div>)
    }

    render(){
        return (
            <div className="container">
                <div className="card shadow"> 
                    <div className="card-header">
                        <div className="d-flex">
                            <h1 className="col-md justify-content-center">
                            {this.title}
                            </h1>
                            <div className="col-md ml-auto justify-content-right" >
                                <img
                                    style={this.logostyle}
                                    src={this.logosrc}/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {this.renderBody()}
                    </div>
                    <div className="card-footer">
                        {this.renderFooter()}
                    </div>
                </div>
            </div>
        );
    }
}