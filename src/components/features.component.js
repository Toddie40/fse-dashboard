import React from 'react';
import {Link} from 'react-router-dom'
import Module from './module.component';

export default class Features extends Module{
    constructor(props){
        super(props);
        this.title="Features"
        this.footer="I'm trying my best y'all but it takes time!"
        //Features are stored in two arrays. one for implemented features and one for non-implemented features that you wish to implement.
        //Each feature is an array. The first entry corresponds to the user-friendly name of the feature. The second entry refers to the url linking to that feature.
        this.features = {
            implemented: [
                ["BR187", "/BR187"],
                ["File naming Convention", "/File Naming"],
                ["Merging Flow", "/Merging Flow"]
            ],
            intended: [
                "Flame Height",
                "Sprinkler Activation Time",
                "Datasheets"
            ]
        }
    }

    renderBody() {
        var currentFeatures = [];
        this.features.implemented.forEach(
            function(item, index) {currentFeatures.push(<a className="list-group-item list-group-item-action" href={"#" + item[1]}>{item[0]}</a>)}
        );
        var intendedFeatures = [];
        this.features.intended.forEach(
            function(item, index) {intendedFeatures.push(<div className="list-group-item">{item}</div>)}
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