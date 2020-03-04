import React from 'react';
import Module from './module.component';

export default class MergingFlow extends Module{

    constructor(props){
        super(props);
        this.title = "Merging Flow";
        this.state = this.resetState();
    }

    resetState(){
        return ({
            scenario: 1
        });
    }

    renderBody(){
        return (
            <div>Merging Flow calculator coming soon</div>
        )
    }
}