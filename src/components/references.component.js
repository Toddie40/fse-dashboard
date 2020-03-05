import React from 'react';
import Module from './module.component';

export default class References extends Module{

    constructor(props){
        super(props);
        this.title = "References";
        this.footer= "Alex Todd | OFR Consultants Ltd."
    }

    renderBody(){
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    BSI, BS 9991:2015 Fire safety in the design, management and use of residential buildings - Code of practice, London: British Standards Institute, 2015. 
                </li>
                <li className="list-group-item">
                    BSI, BS 9999:2017 Fire safety in the design, management and use of buildings - Code of practice, London: British Standards Institute, 2017.
                </li>
                <li className="list-group-item">
                    HM Government, The Building Regulations 2010 Fire safety Approved Document B 2019 edition, 2019. 
                </li>
                <li className="list-group-item">
                    BRE, BR 187 External fire spread - Building separation and boundary distances, IHS BRE Press, Bracknell, 2014. 
                </li>
            </ul>
        )
    }

}