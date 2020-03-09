import React from 'react';
import Module from './module.component';

export default class Home extends Module{

    constructor(props){
        super(props);
        this.title = 'FSE Dashboard';
        this.footer = (
        <div className="p-0 mt-2">
            <h5>Contribute</h5>
            <p>You know JS and happen to be a fire engineer looking for a programming opportunity? Why not support the project on <a href="https://github.com/Toddie40/fse-dashboard">github</a>?</p> 
        </div>
        )
    }
    toString(){
        return this.name;
    }
    renderBody(){
        return (
            <div>
                <h3>What is this place?</h3>
                <hr/>
                <p>This is the FSE Dashboard. It's the place to find all of our in-house calculation tools and little quality of life improvements for fire engineers writing strategies.</p>
                <p>It's all ported over from FSETOOLS which is a python utility written by Ian Fu.</p>
                <h3>Getting started</h3>
                <hr/>
                <p>Go ahead and click the modules dropdown in the navigation pane to see what's currently available to use as well as upcoming features.</p>
                
                <h3>Help! Your app's broken!</h3>
                <hr/>
                <p>If you want to report a bug or request a feature please feel free to email me at <a href="mailto:alex.todd@ofrconsultants.com">alex.todd@ofrconsultants.com</a></p>
            </div>
        )
    }
}