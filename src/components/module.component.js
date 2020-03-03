import React, { Component } from 'react';

export default class Module extends Component {
    constructor(props){
        super(props);
    }

    renderBody(){
        return (<div>This method should be overridden</div>);
    }

    renderFooter(){
        return ("")
    }

    render(){
        return (
            <div className="container">
                <div className="card"> 
                    <div className="card-header">
                        <h1>{this.name}</h1>
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