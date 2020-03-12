import React from 'react';
import Module from './module.component';
import {Form} from 'react-bootstrap'
import scenario_1 from './../img/MergingFlow_1.png'
import scenario_2 from './../img/MergingFlow_2.png'
import scenario_3 from './../img/MergingFlow_3.png'

export default class MergingFlow extends Module{

    constructor(props){
        super(props);
        this.onChooseScenario = this.onChooseScenario.bind(this);
        this.onChangeD = this.onChangeD.bind(this);
        this.onChangeN = this.onChangeN.bind(this);
        this.onChangeB = this.onChangeB.bind(this);
        this.onChangeS_up = this.onChangeS_up.bind(this);
        this.onChangeS_dn = this.onChangeS_dn.bind(this);
        this.onChangeW_se = this.onChangeW_se.bind(this);
        this.onChangeX = this.onChangeX.bind(this);
        this.title = "Merging Flow";
        this.scenarioDescriptors = {
            1: "Merging flow from stair with storey exit at final exit level",
            2: "Merging flow from stair above and from stair below final exit level",
            3: "Merging flow for stairs from above and from below combined with storey exit from final exit level"
        }
        this.state = this.resetState();
    }


    calculate(){
        let ans = 0;

        //Cast all the entered values to numbers and store locally
        let N = Number(this.state.N)
        let D = Number(this.state.D)
        let B = Number(this.state.B)
        let X = Number(this.state.X)
        let S_up = Number(this.state.S_up)
        let S_dn = Number(this.state.S_dn)
        let W_se = Number(this.state.W_se)


        switch (this.state.scenario){    
            case "1":
                /* 
                Merging flow from stair with storey exit at final exit level
                ------------------------------------------------------------
                Where:
                    N   : Number of people served by the final exit level storey exit
                    D   : the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair, in meters (m);
                    W_fe: the width of the final exit, in millimetres (mm)
                    Sup : the stair width for the upward portion of the stair, in millimetres (mm)
                    W_se: the width of the final exit level storey exit in millimetres (mm)
                    X   : the minimum door width per person, in millimetres (mm) || Should be selected from dropdown box or function provided to calculate based on lookup table
                */
               
               

                if (N > 60 && D < 2){
                    ans = S_up + W_se
                }
                else {
                    ans = (N * X) + (0.75 * S_up);
                }
                break;
            case "2":
                /*
                Merging flow from stair above and from stair below final exit level
                -------------------------------------------------------------------
                Where:
                    B   : number of people served by the stair from below the final exit
                    D   : the distance from the nose of te top going of the downward portion of the stair in megtres (m)
                    W_fe: width of final exut in millimetres (mm)
                    S_up: stair width for the upward portion of the stair in millimetres (mm)
                    S_dn: stair width for the downward portion of the stair in millimetres (mm)
                    X   : absoluted minimum door width per person in millimetres (mm)
                */
                
                
                if (B > 60 && D < 2){
                    ans = S_up + S_dn;
                }
                else {
                    ans = B * X + 0.75 * S_up;
                }
                break;
            case "3":
                /*
                Merging flow for stairs from above and from below combined with storey exit from final exit level
                -------------------------------------------------------------------------------------------------
                Where:
                    B   : the number of people served by the stair from below the final exit level;
                    N   : the number of people served by the final exit level storey exit;
                    D   : the lesser distance from the final exit level storey exit or the lowest riser from the upward portion of the stair, in metres (m);
                    W_fe: the width of the final exit, in millimetres (mm);
                    S_up: the stair width for the upward portion of the stair, in millimetres (mm);
                    S_dn: the stair width for the downward portion of the stair, in millimetres (mm);
                    W_se: the width of the final exit level storey exit, in millimetres (mm);
                    X   : the minimum door width per person (see 16.6 and Clause 18), in millimetres (mm)
                */
                if (B + N > 60 && D < 2) {
                   ans = S_up + S_dn + W_se;
                }
                else {
                   ans = B * X + N * X + 0.75 * S_up;
                }
                break;
            default:
            //shouldn't get here    
            break;
        }
        return ans;
    }



    resetState(){
        return ({
            scenario: "1",
            N: '',
            D: '',
            B: '',
            X: '',
            W_se: '',
            W_fe: '',
            S_up: '',
            S_dn: ''
        });
    }

    //EVENT HANDLING

    onChooseScenario(event){
        this.setState({
            scenario: event.target.value
        });
    }

    onChangeN(event){
        this.setState({
            N: event.target.value
        });
    }

    onChangeD(event){
        this.setState({
            D: event.target.value
        })
    }

    onChangeB(event){
        this.setState({
            B: event.target.value
        })
    }

    onChangeX(event){
        this.setState({
            X: event.target.value
        });
    }

    onChangeS_up(event){
        this.setState({
            S_up: event.target.value
        });
    }

    onChangeS_dn(event){
        this.setState({
            S_dn: event.target.value
        });
    
    }
    onChangeW_se(event){
        this.setState({
            W_se: event.target.value
        });
    }

    //END EVENT HANDLING






    getDiagram(){
        switch (this.state.scenario){
            case "1":
                return scenario_1;
            case "2":
                return scenario_2;
            case "3":
                return scenario_3;
            default:
                //shouldn't get here
                break;
        }
    }

    Scenario1Form(){

        //if N > 60 and D < 2
        let first_method = (
            <>
            <Form.Group className="row">
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.S_up}
                        onChange={this.onChangeS_up}
                        placeholder="S up (millimetres)"
                        data-toggle="tooltip"
                        title="the stair width for the upward portion of the stair"
                    />
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.W_se}
                        onChange={this.onChangeW_se}
                        placeholder="W se (millimetres)"
                        data-toggle="tooltip"
                        title="the width of the final exit level storey exit"
                    />                
            </Form.Group>
            
            </>
        )

        let second_method = (
            <Form.Group className="row">
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.X}
                    onChange={this.onChangeX}
                    placeholder="X (millimetres)"
                    data-toggle="tooltip"
                    title="the minimum door width per person"
                />
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.S_up}
                    onChange={this.onChangeS_up}
                    placeholder="S up (millimetres)"
                    data-toggle="tooltip"
                    title="the stair width for the upward portion of the stair"
                />                
            </Form.Group>)


        return (
            <Form>
                <div className="row justify-content-center">
                <Form.Group className="N-and-D-row row w-50">
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.N}
                        onChange={this.onChangeN}
                        placeholder="N (persons)"
                        data-toggle="tooltip"
                        title="Number of people served by the final exit level storey exit"
                    />
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.D}
                        onChange={this.onChangeD}
                        placeholder="D (m)"
                        data-toggle="tooltip"                            
                        title="the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"
                    />                                                        
                </Form.Group>            
                </div> 
                <div className="row justify-content-center">
                {(this.state.N > 60 && this.state.D < 2) ? first_method : second_method}
                </div>
                <hr/>
                <div className="row justify-content-center">
                    <Form.Group className="row">
                        <Form.Label>Width of Final Exit (m)</Form.Label>
                        <Form.Control
                            as="label"
                        >   
                            {this.calculate()}
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form> 

        );
    }

    Scenario2Form(){

        //if B > 60 and D < 2
        let first_method = (
            <>
            <Form.Group className="row">
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.S_up}
                        onChange={this.onChangeS_up}
                        placeholder="S up (millimetres)"
                        data-toggle="tooltip"
                        title="the stair width for the upward portion of the stair"
                    />
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.S_dn}
                        onChange={this.onChangeS_dn}
                        placeholder="S dn (millimetres)"
                        data-toggle="tooltip"
                        title="the stair width for the downward portion of the stair"
                    />                
            </Form.Group>
            
            </>
        )

        let second_method = (
            <Form.Group className="row">
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.S_up}
                    onChange={this.onChangeS_up}
                    placeholder="S up (millimetres)"
                    data-toggle="tooltip"
                    title="the stair width for the upward portion of the stair"
                />     
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.X}
                    onChange={this.onChangeX}
                    placeholder="X (millimetres)"
                    data-toggle="tooltip"
                    title="the minimum door width per person"
                />                           
            </Form.Group>)


        return (
            <Form>
                <div className="row justify-content-center">
                <Form.Group className="N-and-D-row row w-50">
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.B}
                        onChange={this.onChangeB}
                        placeholder="B (persons)"
                        data-toggle="tooltip"
                        title="Number of people served by the stair from below the final exit level"
                    />
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.D}
                        onChange={this.onChangeD}
                        placeholder="D (m)"
                        data-toggle="tooltip"                            
                        title="the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"
                    />                                                        
                </Form.Group>            
                </div> 
                <div className="row justify-content-center">
                {(this.state.B > 60 && this.state.D < 2) ? first_method : second_method}
                </div>
                <hr/>
                <div className="row justify-content-center">
                    <Form.Group className="row">
                        <Form.Label>Width of Final Exit (m)</Form.Label>
                        <Form.Control
                            as="label"
                        >   
                            {this.calculate()}
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form> 

        );
    }

    Scenario3Form(){

        //if B > 60 and D < 2
        let first_method = (
            <>
            <Form.Group className="row">
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.S_up}
                        onChange={this.onChangeS_up}
                        placeholder="S up (millimetres)"
                        data-toggle="tooltip"
                        title="the stair width for the upward portion of the stair"
                    />
                <Form.Control className="m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.S_dn}
                        onChange={this.onChangeS_dn}
                        placeholder="S dn (millimetres)"
                        data-toggle="tooltip"
                        title="the stair width for the downward portion of the stair"
                    />
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.W_se}
                    onChange={this.onChangeW_se}
                    placeholder="W se (millimetres)"
                    data-toggle="tooltip"
                    title="the width of the final exit level storey exit"
                />                
            </Form.Group>
            
            </>
        )

        let second_method = (
            <Form.Group className="row">
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.S_up}
                    onChange={this.onChangeS_up}
                    placeholder="S up (millimetres)"
                    data-toggle="tooltip"
                    title="the stair width for the upward portion of the stair"
                />     
                <Form.Control className="m-2"
                    as="input"
                    type="number"
                    step="0.01"
                    value={this.state.X}
                    onChange={this.onChangeX}
                    placeholder="X (millimetres)"
                    data-toggle="tooltip"
                    title="the minimum door width per person"
                />                           
            </Form.Group>)


        return (
            <Form>
                <div className="row justify-content-center">
                <Form.Group className="N-and-D-row row w-75">
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.N}
                        onChange={this.onChangeN}
                        placeholder="N (persons)"
                        data-toggle="tooltip"
                        title="the number of people served by the final exit level storey exit"
                    />
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.B}
                        onChange={this.onChangeB}
                        placeholder="B (persons)"
                        data-toggle="tooltip"
                        title="Number of people served by the stair from below the final exit level"
                    />
                    <Form.Control className="col-md m-2"
                        as="input"
                        type="number"
                        step="0.01"
                        value={this.state.D}
                        onChange={this.onChangeD}
                        placeholder="D (m)"
                        data-toggle="tooltip"                            
                        title="the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"
                    />                                                        
                </Form.Group>            
                </div> 
                <div className="row justify-content-center">
                {(Number(this.state.B) + Number(this.state.N) > 60 && this.state.D < 2) ? first_method : second_method}
                </div >
                <hr/>
                <div className="row justify-content-center">
                    <Form.Group className="row">
                        <Form.Label>Width of Final Exit (m)</Form.Label>
                        <Form.Control
                            as="label"
                        >   
                            {this.calculate()}
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form> 

        );
    }    


    renderForm(){
        //form to render depends on the scenario we have so we use another switch statement here that changes depending on the current state.scenario
        switch(this.state.scenario){
            case "1":
                return this.Scenario1Form();
            case "2":
                return this.Scenario2Form();
            case "3":
                return this.Scenario3Form();
            default:
                return (
                    <div>Unrecognised Scenario</div>
                )
        }
    }


    renderBody(){
        return (
            <div className="container mx-auto">
                <Form  className="mx-auto">
                    <Form.Group>
                        <div className="row justify-content-center">
                            <Form.Label className="mx-auto">
                                Scenario
                            </Form.Label>
                        </div> 
                        <div className="radio-buttons-row row justify-content-center">
                                <Form.Check className="px-3"
                                    as={Form.Input}
                                    checked={this.state.scenario==="1"}
                                    value="1"
                                    onChange={this.onChooseScenario}
                                    type="radio"
                                    label="1"
                                    id="scenario_1"
                                    name="scenario_radio_buttons"
                                />
                                <Form.Check className="px-3"
                                    as={Form.Input}
                                    checked={this.state.scenario==="2"}
                                    value="2"
                                    onChange={this.onChooseScenario}
                                    type="radio"
                                    label="2"
                                    name="scenario_radio_buttons"
                                    id="scenario_2"
                                />
                                <Form.Check className="px-3"
                                    as={Form.Input}
                                    checked={this.state.scenario==="3"}
                                    value="3"
                                    onChange={this.onChooseScenario}
                                    type="radio"
                                    label="3"
                                    name="scenario_radio_buttons"
                                    id="scenario_3"
                                />
                        </div>
                    </Form.Group>
                </Form>
                <div className="row mx-auto">
                    <img className="mx-auto" 
                        src={this.getDiagram()}
                        alt={"Scenario " + this.state.scenario + " diagram"}
                        />
                </div>
                <div className="scenario-descriptor row justify-content-center py-3">
                    {this.scenarioDescriptors[this.state.scenario]}
                </div>
                <div className="Input-form">
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}