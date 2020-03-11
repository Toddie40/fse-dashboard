import React, { Component } from 'react';
import ofrify from "./../utils/dateutils"
import Module from './module.component';

export default class FileNameConvention extends Module{
    constructor(props){
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeRevision = this.onChangeRevision.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeStage = this.onChangeStage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeSecurityStatus = this.onChangeSecurityStatus.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.title = 'File Naming Convention'
        this.state = this.resetState();
    }

    resetState(){
        return{
            date: new Date(),
            revision: "Q00",
            project: "MAXXXXX",
            stage: "WP1",
            title: "Detailed Fire Strategy",
            type: "GA",
            securityStatus: "CIC"
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        this.copyToClipboard();
        return false
      }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        });
    }

    onChangeRevision(e){
        this.setState({
            revision: e.target.value
        });
    }

    onChangeProject(e){
        this.setState({
            project: e.target.value
        });
    }
    onChangeStage(e){
        this.setState({
            stage: e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeType(e){
        this.setState({
            type: e.target.value
        });
    }
    onChangeSecurityStatus(e){
        this.setState({
            securityStatus: e.target.value
        });
    }
    createFilename(){
        let filename = [];
        
        //this is a bit of a messy way to do it, but looping through doesn't work 
        //as some values are stored differently than how they should appear in the filename
        //it's important that states are stored as the exact value the html expects

        filename.push(ofrify(this.state.date));
        filename.push(this.state.revision.split(':')[0]);
        filename.push(this.state.project);
        filename.push(this.state.stage);
        filename.push(this.state.title);
        filename.push(this.state.type.split(':')[0]);
        filename.push(this.state.securityStatus.split(':')[0]);
        filename = filename.join('-');
        return filename;
    }

    copyToClipboard(){
        var copyText = this.createFilename();
        navigator.clipboard.writeText(copyText).then(()=>alert("Copied: " + copyText));
    }

    renderBody(){
        return(
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
                        <div className="form-row">
                            <label className="col-md-2">Date</label>
                            <input 
                                className="form-control"
                                type="date"
                                value={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                        <div className="form-row">
                            <label className="col-md-2">Revsion</label>
                            <select className="form-control" value={this.state.revision} onChange={this.onChangeRevision}>
                                <option>Q00: First issue for internal review</option>
                                <option>Q01: Reviewer's Comments</option>
                                <option>Q02: Authoriser's Comments</option>
                                <option>D00: First issue to Others for Comment</option>
                                <option>D01: Subsequent external Reviews</option>
                                <option>R00: First Issue</option>
                                <option>R01: Second Issue</option>
                            </select>

                        </div>
                        <div className="form-row">
                            <label className="col-md-2">Project Number</label>
                            <input 
                                className="form-control"
                                type="text"
                                value={this.state.project}
                                onChange={this.onChangeProject}
                            />
                        </div>
                        <div className="form-row">
                            <label className="col-md-2">Project Stage</label>
                                <input 
                                    className="form-control"
                                    type="text"
                                    value={this.state.stage}
                                    onChange={this.onChangeStage}
                                />
                        </div>
                        <div className="form-row">
                            <label className="col-md-2">File Title</label>
                                <input 
                                    className="form-control"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                />
                        </div>
                        <div className="form-row">
                            <label className="col-md-2">Document Type</label>
                                <select className="form-control" value={this.state.type} onChange={this.onChangeType}>
                                    <option>GA: General Admin</option>
                                    <option>MD: Marketing</option>
                                    <option>FP: Fee Proposal</option>
                                    <option>LT: Letter</option>
                                    <option>DN: Design Note</option>
                                    <option>OF: Outline Strategy</option>
                                    <option>DF: Detailed Strategy</option>
                                    <option>RF: Retrospective Strategy</option>
                                    <option>FA: Fire Risk Assessment</option>
                                    <option>FS: Fire Survey Report</option>
                                    <option>FN: File Note</option>
                                    <option>MN: Meeting Notes</option>
                                    <option>CS: Calculation Sheet</option>
                                    <option>SK: Sketch</option>
                                    <option>DW: Drawing</option>
                                    <option>XO: Expert Opinion</option>
                                </select>
                        </div>
                        <div className="form-row">
                            <label className="col-md-2">Security Status</label>
                                <select className="form-control" value={this.state.securityStatus} onChange={this.onChangeSecurityStatus}>
                                    <option>CIC: Commercial in Confidence</option>
                                    <option>WPC: Without Prejudice and Confidential</option>
                                    <option>SDS: Secure Document</option>
                                    <option>FID: Free Issue Document (no security status)</option>                                    
                                </select>
                        </div>
                        <hr/>
                        <div className="form-row">
                            <label className="col-md-2">Filename:</label>
                            <div className="input-group col-md-10">
                            <label className="input-group form-control" id="filename">{this.createFilename()}</label>
                            <div class="input-group-append">
                                <input class="btn btn-primary" type="submit" value="Copy"/>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}