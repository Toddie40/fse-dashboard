import React from 'react';
import Module from './module.component';

export default class Home extends Module{

    constructor(props){
        super(props);
        this.title = 'FSE Dashboard';
    }
    toString(){
        return this.name;
    }
    renderBody(){
        return (
            <div>
                <p>This is the place to find all of our in-house calculation tools.</p>
                <p>It's all ported over from FSETOOLS</p>
                <hr/>
                <p>If you need any help with anything or you want to report a bug or request a feature please feel free to email me at <a href="mailto:alex.todd@ofrconsultants.com">alex.todd@ofrconsultants.com</a></p>
            </div>
        )
    }
}