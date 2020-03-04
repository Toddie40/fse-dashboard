import React from 'react';
import Module from './module.component';

export default class Features extends Module{
    constructor(props){
        super(props);
        this.title="Features"
        this.footer="I'm trying my best y'all but it takes time!"
        this.features = {
            implemented: [
                "BR187",
                "File naming Convention",
            ],
            intended: [
                "Merging Flow",
                "Flame Height",
                "Sprinkler Activation Time",
                "Datasheets"
            ]
        }
    }

    renderBody() {
        var currentFeatures = [];
        this.features.implemented.forEach(
            function(item, index) {currentFeatures.push(<div className="lists-group-item">{item}</div>)}
        );
        var intendedFeatures = [];
        this.features.intended.forEach(
            function(item, index) {intendedFeatures.push(<div className="lists-group-item">{item}</div>)}
        );
        return (
            <div>
            <h2>Current Features</h2>
            <div className="list-group">
                {currentFeatures}
            </div>
            <hr/>
            <h2>Intended Features</h2>
            <div className="list-group">
                {intendedFeatures}
            </div>
            </div>
        )
    }
}