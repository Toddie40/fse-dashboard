import React, { Component } from 'react';

export default class Module extends Component {
    constructor(props){
        super(props);
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
                <div className="card"> 
                    <div className="card-header">
                        <h1>{this.title}</h1>
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