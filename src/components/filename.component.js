import React, { Component } from 'react';
import ofrify from "./../utils/dateutils"

export default class FileNameConvention extends Component{
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
        this.name = 'File Naming Convention'
        this.dateObject = new Date();
        this.state = this.resetState();
    }

    resetState(){
        return{
            date: ofrify(this.dateObject),
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
            date: ofrify(e.target.value)
        });
    }

    onChangeRevision(e){
        this.setState({
            revision: e.target.value.split(':')[0]
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
            type: e.target.value.split(':')[0]
        });
    }
    onChangeSecurityStatus(e){
        this.setState({
            securityStatus: e.target.value.split(':')[0]
        });
    }
    createFilename(){
        let filename = [];
        for (var state_key in this.state){
            filename.push(this.state[state_key]);
        }
        filename = filename.join('-');
        return filename;
    }

    copyToClipboard(){
        var copyText = this.createFilename();
        navigator.clipboard.writeText(copyText).then(()=>alert("Copied: " + copyText));
    }

    render(){
        return(
        <div className="container">
            <div className="card">
                <h1 className="card-header">
                    {this.name}
                </h1>
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
            </div>
        </div>
        );
    }
}