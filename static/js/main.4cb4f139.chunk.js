(this.webpackJsonpbr187=this.webpackJsonpbr187||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/logo-light.bbbae4b4.png"},48:function(e,t,a){e.exports=a.p+"static/media/logo.1cd923bd.png"},49:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_1.de981586.png"},50:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_2.686ef300.png"},51:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_3.d5891c9b.png"},61:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},67:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),s=(a(66),a(7)),i=a(8),c=a(10),m=a(9),u=a(11),h=a(17),p=a(21),d=a(79),g=a(80),f=a(77),v=a(47),b=a.n(v),E=(a(67),a(28)),y=a.n(E),C=a(33),N=a(6);function S(e,t,a){return e<t?t:e>a?a:e}var w=a(48),k=a.n(w),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).logo=k.a,a.logostyle={float:"right"},a.logosrc="https://images.squarespace-cdn.com/content/v1/5a61f9539f8dceafed8c0aea/1538391094315-DMAJ4KSB8F3BB7YIYAD3/ke17ZwdGBToddI8pDm48kL1PC3gM8Rd6YHHCa9IyTboUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtz9D7BxKE7nEGUPCO0e-x3MMDjV9uhX05eW5661eHWZCjLISwBs8eEdxAxTptZAUg/OFR-LtGrey+copy%402x.png?format=500w",a.title="moduleTitle",a.footer="",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderBody",value:function(){return l.a.createElement("div",null,"This method should be overridden")}},{key:"renderFooter",value:function(){return l.a.createElement("div",null,this.footer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card shadow"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h1",{className:"module-header-title col-md justify-content-center"},this.title),l.a.createElement("div",{className:"col-md ml-auto justify-content-right"},l.a.createElement("img",{className:"module-header-logo",style:this.logostyle,src:this.logosrc})))),l.a.createElement("div",{className:"card-body"},this.renderBody()),l.a.createElement("div",{className:"card-footer"},this.renderFooter())))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(N.a)(a)),a.onChangeWidth=a.onChangeWidth.bind(Object(N.a)(a)),a.onChangeHeight=a.onChangeHeight.bind(Object(N.a)(a)),a.onChangeSeparation=a.onChangeSeparation.bind(Object(N.a)(a)),a.handleTypeChange=a.handleTypeChange.bind(Object(N.a)(a)),a.onChangeSprinklered=a.onChangeSprinklered.bind(Object(N.a)(a)),a.state=a.resetState(),a.title="BR187",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toString",value:function(){return this.name}},{key:"onSubmit",value:function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.calculateResults();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetState",value:function(){return{title:"",type:"parallel",width:"",height:"",separation:"",sprinklered:!1,results:!1}}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleTypeChange",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeHeight",value:function(e){this.setState({height:e.target.value})}},{key:"onChangeWidth",value:function(e){this.setState({width:e.target.value})}},{key:"onChangeSeparation",value:function(e){this.setState({separation:e.target.value})}},{key:"onChangeSprinklered",value:function(e){this.setState({sprinklered:e.target.checked})}},{key:"calculateResults",value:function(){var e;if("parallel"===this.state.type)if(0===this.state.separation)e=1;else{var t=.5*this.state.width/this.state.separation,a=.5*this.state.height/this.state.separation;e=2/Math.PI*(t/Math.sqrt(1+Math.pow(t,2))*Math.atan(a/Math.sqrt(1+Math.pow(t,2)))+a/Math.sqrt(1+Math.pow(a,2))*Math.atan(t/Math.sqrt(1+Math.pow(a,2))))}else if("corner"===this.state.type)if(0===this.state.separation)e=.25;else{var n=this.state.width/this.state.separation,l=this.state.height/this.state.separation;e=1/(2*Math.PI)*(n/Math.sqrt(1+Math.pow(n,2)))*Math.atan(l/Math.sqrt(1+Math.pow(n,2))+l/Math.sqrt(1+Math.pow(l,2))*Math.atan(n/Math.sqrt(1+Math.pow(l,2))))}else if("perpendicular"===this.state.type)if(0===this.state.separation)e=.25;else{var r=this.state.width/this.state.separation,o=this.state.height/this.state.separation;e=1/(2*Math.PI)*(Math.atan(r)-1/Math.sqrt(1+Math.pow(o,2))*Math.atan(r/Math.sqrt(1+Math.pow(o,2))))}else console.log("Somehow we've landed on an unsupported calculation type ("+this.state.type+")");var s=12.6/(168*e)*100,i=12.6/(84*e)*100;this.state.sprinklered&&(s*=2,i*=2),this.setState({results:!0,viewfactor:e.toFixed(3),standard_unprotected_area:S(s.toFixed(1),0,100),reduced_unprotected_area:S(i.toFixed(1),0,100)})}},{key:"renderBody",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Inputs"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",{className:"col-md-4"},"Project Name"),l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Project Title",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",null,"Radiator Geometry")),l.a.createElement("div",{className:"form-row"},l.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.width,onChange:this.onChangeWidth,placeholder:"Width"}),l.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.height,onChange:this.onChangeHeight,placeholder:"Height"})),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",{className:"col-md-4"},"Separation Distance",l.a.createElement("small",null,l.a.createElement("br",null),"(Usually twice the boundary distance)")),l.a.createElement("input",{className:"form-control",type:"number",step:"0.001",placeholder:"Separation",value:this.state.separation,onChange:this.onChangeSeparation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Calculation type"),l.a.createElement("div",{className:"form-check col-md-4"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"parallel",id:"parallel",checked:"parallel"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"parallel"},"Parallel")),l.a.createElement("div",{className:"form-check col-md-4"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"perpendicular",id:"perpendicular",checked:"perpendicular"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"perpendicular"},"Perpendicular")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"corner",id:"corner",checked:"corner"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"corner"},"Corner"))),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.state.sprinklered,id:"sprinklered",onChange:this.onChangeSprinklered}),l.a.createElement("label",{className:"form-check-label",for:"sprinklered"},"Sprinklered "))),l.a.createElement("div",{className:"form-group py-3"},l.a.createElement("input",{type:"submit",value:"calculate",className:"btn btn-primary form-control"}))),!0===this.state.results&&l.a.createElement("div",{className:"results"},l.a.createElement("hr",null),l.a.createElement("h3",null,"Results"),l.a.createElement("h5",null,this.state.title),l.a.createElement("h5",null,"View Factor: ",this.state.viewfactor),l.a.createElement("div",{className:"row mx-auto"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Standard Fire Load")," ",l.a.createElement("sm",null,"(168 kW/sqm)")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.standard_unprotected_area,"%")))),l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Reduced Fire Load")," ",l.a.createElement("sm",null,"(84 kW/sqm)")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.reduced_unprotected_area,"%")))))))}}]),t}(j),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="FSE Dashboard",a.footer=l.a.createElement("div",{className:"p-0 mt-2"},l.a.createElement("h5",null,"Contribute"),l.a.createElement("p",null,"You know JS and happen to be a fire engineer looking for a programming opportunity? Why not support the project on ",l.a.createElement("a",{href:"https://github.com/Toddie40/fse-dashboard"},"github"),"?")),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"What is this place?"),l.a.createElement("hr",null),l.a.createElement("p",null,"This is the FSE Dashboard. It's the place to find all of our in-house calculation tools and little quality of life improvements for fire engineers writing strategies."),l.a.createElement("p",null,"It's all ported over from FSETOOLS which is a python utility written by Ian Fu."),l.a.createElement("h3",null,"Getting started"),l.a.createElement("hr",null),l.a.createElement("p",null,"Go ahead and click the modules dropdown in the navigation pane to see what's currently available to use as well as upcoming features."),l.a.createElement("h3",null,"Help! Your app's broken!"),l.a.createElement("hr",null),l.a.createElement("p",null,"If you want to report a bug or request a feature please feel free to email me at ",l.a.createElement("a",{href:"mailto:alex.todd@ofrconsultants.com"},"alex.todd@ofrconsultants.com")))}}]),t}(j),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="About",a.footer="Alex Todd | OFR Consultants",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Fire Safety Engineering Dashboard by OFR"),l.a.createElement("p",null,"A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies"))}}]),t}(j),D=a(78),_=a(49),M=a.n(_),B=a(50),R=a.n(B),T=a(51),I=a.n(T),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChooseScenario=a.onChooseScenario.bind(Object(N.a)(a)),a.onChangeD=a.onChangeD.bind(Object(N.a)(a)),a.onChangeN=a.onChangeN.bind(Object(N.a)(a)),a.onChangeB=a.onChangeB.bind(Object(N.a)(a)),a.onChangeS_up=a.onChangeS_up.bind(Object(N.a)(a)),a.onChangeS_dn=a.onChangeS_dn.bind(Object(N.a)(a)),a.onChangeW_se=a.onChangeW_se.bind(Object(N.a)(a)),a.onChangeX=a.onChangeX.bind(Object(N.a)(a)),a.title="Merging Flow",a.scenarioDescriptors={1:"Merging flow from stair with storey exit at final exit level",2:"Merging flow from stair above and from stair below final exit level",3:"Merging flow for stairs from above and from below combined with storey exit from final exit level"},a.state=a.resetState(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"calculate",value:function(){var e=0,t=Number(this.state.N),a=Number(this.state.D),n=Number(this.state.B),l=Number(this.state.X),r=Number(this.state.S_up),o=Number(this.state.S_dn),s=Number(this.state.W_se);switch(this.state.scenario){case"1":e=t>60&&a<2?r+s:t*l+.75*r;break;case"2":e=n>60&&a<2?r+o:n*l+.75*r;break;case"3":e=n+t>60&&a<2?r+o+s:n*l+t*l+.75*r}return e}},{key:"resetState",value:function(){return{scenario:"1",N:"",D:"",B:"",X:"",W_se:"",W_fe:"",S_up:"",S_dn:""}}},{key:"onChooseScenario",value:function(e){this.setState({scenario:e.target.value})}},{key:"onChangeN",value:function(e){this.setState({N:e.target.value})}},{key:"onChangeD",value:function(e){this.setState({D:e.target.value})}},{key:"onChangeB",value:function(e){this.setState({B:e.target.value})}},{key:"onChangeX",value:function(e){this.setState({X:e.target.value})}},{key:"onChangeS_up",value:function(e){this.setState({S_up:e.target.value})}},{key:"onChangeS_dn",value:function(e){this.setState({S_dn:e.target.value})}},{key:"onChangeW_se",value:function(e){this.setState({W_se:e.target.value})}},{key:"getDiagram",value:function(){switch(this.state.scenario){case"1":return M.a;case"2":return R.a;case"3":return I.a}}},{key:"Scenario1Form",value:function(){var e=l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.W_se,onChange:this.onChangeW_se,placeholder:"W se (millimetres)","data-toggle":"tooltip",title:"the width of the final exit level storey exit"}))),t=l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}));return l.a.createElement(D.a,null,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(D.a.Group,{className:"N-and-D-row row w-50"},l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.N,onChange:this.onChangeN,placeholder:"N (persons)","data-toggle":"tooltip",title:"Number of people served by the final exit level storey exit"}),l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),l.a.createElement("div",{className:"row justify-content-center"},this.state.N>60&&this.state.D<2?e:t),l.a.createElement("hr",null),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Label,null,"Width of Final Exit (m)"),l.a.createElement(D.a.Control,{as:"label"},this.calculate()))))}},{key:"Scenario2Form",value:function(){var e=l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_dn,onChange:this.onChangeS_dn,placeholder:"S dn (millimetres)","data-toggle":"tooltip",title:"the stair width for the downward portion of the stair"}))),t=l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}));return l.a.createElement(D.a,null,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(D.a.Group,{className:"N-and-D-row row w-50"},l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.B,onChange:this.onChangeB,placeholder:"B (persons)","data-toggle":"tooltip",title:"Number of people served by the stair from below the final exit level"}),l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),l.a.createElement("div",{className:"row justify-content-center"},this.state.B>60&&this.state.D<2?e:t),l.a.createElement("hr",null),l.a.createElement("h3",null,"Results"),l.a.createElement("label",{className:"input-group form-control"},this.calculate()))}},{key:"Scenario3Form",value:function(){var e=l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_dn,onChange:this.onChangeS_dn,placeholder:"S dn (millimetres)","data-toggle":"tooltip",title:"the stair width for the downward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.W_se,onChange:this.onChangeW_se,placeholder:"W se (millimetres)","data-toggle":"tooltip",title:"the width of the final exit level storey exit"}))),t=l.a.createElement(D.a.Group,{className:"row"},l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),l.a.createElement(D.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}));return l.a.createElement(D.a,null,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(D.a.Group,{className:"N-and-D-row row w-75"},l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.N,onChange:this.onChangeN,placeholder:"N (persons)","data-toggle":"tooltip",title:"the number of people served by the final exit level storey exit"}),l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.B,onChange:this.onChangeB,placeholder:"B (persons)","data-toggle":"tooltip",title:"Number of people served by the stair from below the final exit level"}),l.a.createElement(D.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),l.a.createElement("div",{className:"row justify-content-center"},Number(this.state.B)+Number(this.state.N)>60&&this.state.D<2?e:t),l.a.createElement("hr",null),l.a.createElement("h3",null,"Results"),l.a.createElement("label",{className:"input-group form-control"},this.calculate()))}},{key:"renderForm",value:function(){switch(this.state.scenario){case"1":return this.Scenario1Form();case"2":return this.Scenario2Form();case"3":return this.Scenario3Form();default:return l.a.createElement("div",null,"Unrecognised Scenario")}}},{key:"renderBody",value:function(){return l.a.createElement("div",{className:"container mx-auto"},l.a.createElement(D.a,{className:"mx-auto"},l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{className:"mx-auto"},"Scenario:"),l.a.createElement("div",{className:"radio-buttons-row row justify-content-center"},l.a.createElement(D.a.Check,{className:"px-3",as:D.a.Input,checked:"1"===this.state.scenario,value:"1",onChange:this.onChooseScenario,type:"radio",label:"1",id:"scenario_1",name:"scenario_radio_buttons"}),l.a.createElement(D.a.Check,{className:"px-3",as:D.a.Input,checked:"2"===this.state.scenario,value:"2",onChange:this.onChooseScenario,type:"radio",label:"2",name:"scenario_radio_buttons",id:"scenario_2"}),l.a.createElement(D.a.Check,{className:"px-3",as:D.a.Input,checked:"3"===this.state.scenario,value:"3",onChange:this.onChooseScenario,type:"radio",label:"3",name:"scenario_radio_buttons",id:"scenario_3"})))),l.a.createElement("div",{className:"row mx-auto"},l.a.createElement("img",{className:"mx-auto",src:this.getDiagram(),alt:"Scenario "+this.state.scenario+" diagram"})),l.a.createElement("div",{className:"scenario-descriptor row justify-content-center py-3"},this.scenarioDescriptors[this.state.scenario]),l.a.createElement("div",{className:"Input-form"},this.renderForm()))}}]),t}(j);var P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(N.a)(a)),a.onChangeRevision=a.onChangeRevision.bind(Object(N.a)(a)),a.onChangeProject=a.onChangeProject.bind(Object(N.a)(a)),a.onChangeStage=a.onChangeStage.bind(Object(N.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(N.a)(a)),a.onChangeType=a.onChangeType.bind(Object(N.a)(a)),a.onChangeSecurityStatus=a.onChangeSecurityStatus.bind(Object(N.a)(a)),a.copyToClipboard=a.copyToClipboard.bind(Object(N.a)(a)),a.title="File Naming Convention",a.state=a.resetState(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"resetState",value:function(){return{date:new Date,revision:"Q00",project:"MAXXXXX",stage:"WP1",title:"Detailed Fire Strategy",type:"GA",securityStatus:"CIC"}}},{key:"onSubmit",value:function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.copyToClipboard(),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeRevision",value:function(e){this.setState({revision:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeStage",value:function(e){this.setState({stage:e.target.value})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeSecurityStatus",value:function(e){this.setState({securityStatus:e.target.value})}},{key:"createFilename",value:function(){var e=[];return e.push(function(e){var t=e;return"string"!==typeof e&&(t=(t=e.toISOString()).split("T")[0]),t=(t=(t=t.substr(2)).split("-"))[0]+t[1]+t[2]}(this.state.date)),e.push(this.state.revision.split(":")[0]),e.push(this.state.project),e.push(this.state.stage),e.push(this.state.title),e.push(this.state.type.split(":")[0]),e.push(this.state.securityStatus.split(":")[0]),e=e.join("-")}},{key:"copyToClipboard",value:function(){var e=this.createFilename();navigator.clipboard.writeText(e).then((function(){return alert("Copied: "+e)}))}},{key:"renderBody",value:function(){return l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Date"),l.a.createElement("input",{className:"form-control",type:"date",value:this.state.date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Revsion"),l.a.createElement("select",{className:"form-control",value:this.state.revision,onChange:this.onChangeRevision},l.a.createElement("option",null,"Q00: First issue for internal review"),l.a.createElement("option",null,"Q01: Reviewer's Comments"),l.a.createElement("option",null,"Q02: Authoriser's Comments"),l.a.createElement("option",null,"D00: First issue to Others for Comment"),l.a.createElement("option",null,"D01: Subsequent external Reviews"),l.a.createElement("option",null,"R00: First Issue"),l.a.createElement("option",null,"R01: Second Issue"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Project Number"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.project,onChange:this.onChangeProject})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Project Stage"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.stage,onChange:this.onChangeStage})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"File Title"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Document Type"),l.a.createElement("select",{className:"form-control",value:this.state.type,onChange:this.onChangeType},l.a.createElement("option",null,"GA: General Admin"),l.a.createElement("option",null,"MD: Marketing"),l.a.createElement("option",null,"FP: Fee Proposal"),l.a.createElement("option",null,"LT: Letter"),l.a.createElement("option",null,"DN: Design Note"),l.a.createElement("option",null,"OF: Outline Strategy"),l.a.createElement("option",null,"DF: Detailed Strategy"),l.a.createElement("option",null,"RF: Retrospective Strategy"),l.a.createElement("option",null,"FA: Fire Risk Assessment"),l.a.createElement("option",null,"FS: Fire Survey Report"),l.a.createElement("option",null,"FN: File Note"),l.a.createElement("option",null,"MN: Meeting Notes"),l.a.createElement("option",null,"CS: Calculation Sheet"),l.a.createElement("option",null,"SK: Sketch"),l.a.createElement("option",null,"DW: Drawing"),l.a.createElement("option",null,"XO: Expert Opinion"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Security Status"),l.a.createElement("select",{className:"form-control",value:this.state.securityStatus,onChange:this.onChangeSecurityStatus},l.a.createElement("option",null,"CIC: Commercial in Confidence"),l.a.createElement("option",null,"WPC: Without Prejudice and Confidential"),l.a.createElement("option",null,"SDS: Secure Document"),l.a.createElement("option",null,"FID: Free Issue Document (no security status)"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Filename:"),l.a.createElement("div",{className:"input-group col-md-10"},l.a.createElement("label",{className:"input-group form-control",id:"filename"},this.createFilename()),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Copy"}))))))}}]),t}(j),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="Features",a.footer="I'm trying my best y'all but it takes time!",a.features={implemented:[["BR187","/BR187"],["File naming Convention","/File Naming"],["Merging Flow","/Merging Flow"]],intended:["Flame Height","Sprinkler Activation Time","Datasheets"]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderBody",value:function(){var e=[];this.features.implemented.forEach((function(t,a){e.push(l.a.createElement("a",{className:"list-group-item list-group-item-action",href:"#"+t[1]},t[0]))}));var t=[];return this.features.intended.forEach((function(e,a){t.push(l.a.createElement("div",{className:"list-group-item"},e))})),l.a.createElement("div",null,l.a.createElement("h2",null,"Current Features"),l.a.createElement("div",{className:"list-group"},e),l.a.createElement("hr",null),l.a.createElement("h2",null,"Intended Features"),l.a.createElement("div",{className:"list-group"},t))}}]),t}(j),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="References",a.footer="Alex Todd | OFR Consultants Ltd.",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderBody",value:function(){return l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"BSI, BS 9991:2015 Fire safety in the design, management and use of residential buildings - Code of practice, London: British Standards Institute, 2015."),l.a.createElement("li",{className:"list-group-item"},"BSI, BS 9999:2017 Fire safety in the design, management and use of buildings - Code of practice, London: British Standards Institute, 2017."),l.a.createElement("li",{className:"list-group-item"},"HM Government, The Building Regulations 2010 Fire safety Approved Document B 2019 edition, 2019."),l.a.createElement("li",{className:"list-group-item"},"BRE, BR 187 External fire spread - Building separation and boundary distances, IHS BRE Press, Bracknell, 2014."))}}]),t}(j),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).modules={},a.setModules(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"setModules",value:function(){this.modules={home:[F,"Home"],filenaming:[P,"File Naming"],br187:[O,"BR187"],mergingflow:[W,"Merging Flow"],features:[X,"Features"],about:[x,"About"],references:[A,"References"]}}},{key:"navbar",value:function(){return l.a.createElement(d.a,{variant:"dark",className:"navbar shadow-lg",expand:"md",sticky:"top"},l.a.createElement(d.a.Brand,{as:h.b,to:"/Home"},l.a.createElement("img",{src:b.a,height:"40rem",alt:"OFR Consultants"})),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{as:h.b,to:"/Home"},"Home"),l.a.createElement(g.a.Link,{as:h.b,to:"/Features"},"Features"),l.a.createElement(f.a,{title:"Modules",id:"basic-nav-dropdown"},l.a.createElement(f.a.Header,null,"Implemented"),l.a.createElement(f.a.Item,{as:h.b,to:"/File Naming"},"File Naming"),l.a.createElement(f.a.Item,{as:h.b,to:"/BR187"},"BR187"),l.a.createElement(f.a.Item,{as:h.b,to:"/Merging Flow"},"Merging Flow"),l.a.createElement(f.a.Divider,null),l.a.createElement(f.a.Header,null,"Coming Soon"))),l.a.createElement(g.a,null,l.a.createElement(g.a.Link,{as:h.b,to:"/About"},"About"),l.a.createElement(g.a.Link,{as:h.b,to:"/References",className:"mr-sm-2"},"References"))))}},{key:"render",value:function(){var e=[];for(var t in this.modules){var a=this.modules[t];e.push(l.a.createElement(p.a,{path:"/"+a[1],component:a[0]}))}return l.a.createElement("div",{className:"root"},l.a.createElement(h.a,null,l.a.createElement("div",null,this.navbar(),l.a.createElement("div",{className:"container module-container mt-5 mx-auto"},l.a.createElement(p.a,{exact:!0,path:"/",component:F}),e))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.4cb4f139.chunk.js.map