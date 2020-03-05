(this.webpackJsonpbr187=this.webpackJsonpbr187||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),i=a.n(r),s=(a(16),a(2)),o=a(3),c=a(5),u=a(4),m=a(1),h=a(6),d=(a(17),a(7)),p=a.n(d),v=a(8);function f(e,t,a){return e<t?t:e>a?a:e}var g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(m.a)(a)),a.onChangeWidth=a.onChangeWidth.bind(Object(m.a)(a)),a.onChangeHeight=a.onChangeHeight.bind(Object(m.a)(a)),a.onChangeSeparation=a.onChangeSeparation.bind(Object(m.a)(a)),a.handleTypeChange=a.handleTypeChange.bind(Object(m.a)(a)),a.onChangeSprinklered=a.onChangeSprinklered.bind(Object(m.a)(a)),a.state=a.resetState(),a.name="BR187",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"onSubmit",value:function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.calculateResults();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetState",value:function(){return{title:"",type:"parallel",width:"",height:"",separation:"",sprinklered:!1,results:!1}}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleTypeChange",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeHeight",value:function(e){this.setState({height:e.target.value})}},{key:"onChangeWidth",value:function(e){this.setState({width:e.target.value})}},{key:"onChangeSeparation",value:function(e){this.setState({separation:e.target.value})}},{key:"onChangeSprinklered",value:function(e){this.setState({sprinklered:e.target.value})}},{key:"calculateResults",value:function(){var e;if("parallel"===this.state.type)if(0===this.state.separation)e=1;else{var t=.5*this.state.width/this.state.separation,a=.5*this.state.height/this.state.separation;e=2/Math.PI*(t/Math.sqrt(1+Math.pow(t,2))*Math.atan(a/Math.sqrt(1+Math.pow(t,2)))+a/Math.sqrt(1+Math.pow(a,2))*Math.atan(t/Math.sqrt(1+Math.pow(a,2))))}else if("corner"===this.state.type)if(0===this.state.separation)e=.25;else{var n=this.state.width/this.state.separation,l=this.state.height/this.state.separation;e=1/(2*Math.PI)*(n/Math.sqrt(1+Math.pow(n,2)))*Math.atan(l/Math.sqrt(1+Math.pow(n,2))+l/Math.sqrt(1+Math.pow(l,2))*Math.atan(n/Math.sqrt(1+Math.pow(l,2))))}else if("perpendicular"===this.state.type)if(0===this.state.separation)e=.25;else{var r=this.state.width/this.state.separation,i=this.state.height/this.state.separation;e=1/(2*Math.PI)*(Math.atan(r)-1/Math.sqrt(1+Math.pow(i,2))*Math.atan(r/Math.sqrt(1+Math.pow(i,2))))}else console.log("Somehow we've landed on an unsupported calculation type ("+this.state.type+")");var s=12.6/(168*e)*100,o=12.6/(84*e)*100;this.state.sprinklered&&(s*=.5,o*=.5),this.setState({results:!0,viewfactor:e.toFixed(3),standard_unprotected_area:f(s.toFixed(1),0,100),reduced_unprotected_area:f(o.toFixed(1),0,100)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",null,"BR187 Tool")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,"Inputs"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",{className:"col-md-4"},"Project Name"),l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Project Title",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",null,"Radiator Geometry")),l.a.createElement("div",{className:"form-row"},l.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.width,onChange:this.onChangeWidth,placeholder:"Width"}),l.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.height,onChange:this.onChangeHeight,placeholder:"Height"})),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("label",{className:"col-md-4"},"Separation Distance",l.a.createElement("small",null,l.a.createElement("br",null),"(Usually twice the boundary distance)")),l.a.createElement("input",{className:"form-control",type:"number",step:"0.001",placeholder:"Separation",value:this.state.separation,onChange:this.onChangeSeparation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Calculation type"),l.a.createElement("div",{className:"form-check col-md-4"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"parallel",id:"parallel",checked:"parallel"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"parallel"},"Parallel")),l.a.createElement("div",{className:"form-check col-md-4"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"perpendicular",id:"perpendicular",checked:"perpendicular"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"perpendicular"},"Perpendicular")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",value:"corner",id:"corner",checked:"corner"===this.state.type,onChange:this.handleTypeChange}),l.a.createElement("label",{className:"form-check-label",for:"corner"},"Corner"))),l.a.createElement("div",{className:"form-row py-2"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"sprinklered",id:"sprinklered",onChange:this.onChangeSprinklered}),l.a.createElement("label",{className:"form-check-label",for:"sprinklered"},"Sprinklered "))),l.a.createElement("div",{className:"form-group py-3"},l.a.createElement("input",{type:"submit",value:"calculate",className:"btn btn-primary form-control"}))),!0===this.state.results&&l.a.createElement("div",{className:"results"},l.a.createElement("hr",null),l.a.createElement("h3",null,"Results"),l.a.createElement("h5",null,this.state.title),l.a.createElement("h5",null,"View Factor: ",this.state.viewfactor),l.a.createElement("div",{className:"row mx-auto"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Standard Fire Load")," ",l.a.createElement("sm",null,"(168 kW/sqm)")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.standard_unprotected_area,"%")))),l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Reduced Fire Load")," ",l.a.createElement("sm",null,"(84 kW/sqm)")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.reduced_unprotected_area,"%")))))))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="moduleTitle",a.footer="",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){return l.a.createElement("div",null,"This method should be overridden")}},{key:"renderFooter",value:function(){return l.a.createElement("div",null,this.footer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card shadow"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",null,this.title)),l.a.createElement("div",{className:"card-body"},this.renderBody()),l.a.createElement("div",{className:"card-footer"},this.renderFooter())))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="Home",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"OFR Fire Safety Engineering Dashboard"),l.a.createElement("hr",null),l.a.createElement("p",null,"This is the place to find all of our in-house calculation tools."),l.a.createElement("p",null,"It's all ported over from FSETOOLS"),l.a.createElement("hr",null),l.a.createElement("p",null,"If you need any help with anything or you want to report a bug or request a feature please feel free to email me at ",l.a.createElement("a",{href:"mailto:alex.todd@ofrconsultants.com"},"alex.todd@ofrconsultants.com")))}}]),t}(E),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="About",a.footer="Alex Todd | OFR Consultants",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Fire Safety Engineering Dashboard by OFR"),l.a.createElement("p",null,"A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies"))}}]),t}(E),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="Merging Flow",a.state=a.resetState(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"resetState",value:function(){return{scenario:1}}},{key:"renderBody",value:function(){return l.a.createElement("div",null,"Merging Flow calculator coming soon")}}]),t}(E);var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(m.a)(a)),a.onChangeRevision=a.onChangeRevision.bind(Object(m.a)(a)),a.onChangeProject=a.onChangeProject.bind(Object(m.a)(a)),a.onChangeStage=a.onChangeStage.bind(Object(m.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(m.a)(a)),a.onChangeType=a.onChangeType.bind(Object(m.a)(a)),a.onChangeSecurityStatus=a.onChangeSecurityStatus.bind(Object(m.a)(a)),a.copyToClipboard=a.copyToClipboard.bind(Object(m.a)(a)),a.name="File Naming Convention",a.state=a.resetState(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"resetState",value:function(){return{date:new Date,revision:"Q00",project:"MAXXXXX",stage:"WP1",title:"Detailed Fire Strategy",type:"GA",securityStatus:"CIC"}}},{key:"onSubmit",value:function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.copyToClipboard(),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeRevision",value:function(e){this.setState({revision:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeStage",value:function(e){this.setState({stage:e.target.value})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeSecurityStatus",value:function(e){this.setState({securityStatus:e.target.value})}},{key:"createFilename",value:function(){var e=[];return e.push(function(e){var t=e;return"string"!==typeof e&&(t=(t=e.toISOString()).split("T")[0]),t=(t=(t=t.substr(2)).split("-"))[0]+t[1]+t[2]}(this.state.date)),e.push(this.state.revision.split(":")[0]),e.push(this.state.project),e.push(this.state.stage),e.push(this.state.title),e.push(this.state.type.split(":")[0]),e.push(this.state.securityStatus.split(":")[0]),e=e.join("-")}},{key:"copyToClipboard",value:function(){var e=this.createFilename();navigator.clipboard.writeText(e).then((function(){return alert("Copied: "+e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("h1",{className:"card-header"},this.name),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Date"),l.a.createElement("input",{className:"form-control",type:"date",value:this.state.date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Revsion"),l.a.createElement("select",{className:"form-control",value:this.state.revision,onChange:this.onChangeRevision},l.a.createElement("option",null,"Q00: First issue for internal review"),l.a.createElement("option",null,"Q01: Reviewer's Comments"),l.a.createElement("option",null,"Q02: Authoriser's Comments"),l.a.createElement("option",null,"D00: First issue to Others for Comment"),l.a.createElement("option",null,"D01: Subsequent external Reviews"),l.a.createElement("option",null,"R00: First Issue"),l.a.createElement("option",null,"R01: Second Issue"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Project Number"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.project,onChange:this.onChangeProject})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Project Stage"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.stage,onChange:this.onChangeStage})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"File Title"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Document Type"),l.a.createElement("select",{className:"form-control",value:this.state.type,onChange:this.onChangeType},l.a.createElement("option",null,"GA: General Admin"),l.a.createElement("option",null,"MD: Marketing"),l.a.createElement("option",null,"FP: Fee Proposal"),l.a.createElement("option",null,"LT: Letter"),l.a.createElement("option",null,"DN: Design Note"),l.a.createElement("option",null,"OF: Outline Strategy"),l.a.createElement("option",null,"DF: Detailed Strategy"),l.a.createElement("option",null,"RF: Retrospective Strategy"),l.a.createElement("option",null,"FA: Fire Risk Assessment"),l.a.createElement("option",null,"FS: Fire Survey Report"),l.a.createElement("option",null,"FN: File Note"),l.a.createElement("option",null,"MN: Meeting Notes"),l.a.createElement("option",null,"CS: Calculation Sheet"),l.a.createElement("option",null,"SK: Sketch"),l.a.createElement("option",null,"DW: Drawing"),l.a.createElement("option",null,"XO: Expert Opinion"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Security Status"),l.a.createElement("select",{className:"form-control",value:this.state.securityStatus,onChange:this.onChangeSecurityStatus},l.a.createElement("option",null,"CIC: Commercial in Confidence"),l.a.createElement("option",null,"WPC: Without Prejudice and Confidential"),l.a.createElement("option",null,"SDS: Secure Document"),l.a.createElement("option",null,"FID: Free Issue Document (no security status)"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{className:"col-md-2"},"Filename:"),l.a.createElement("div",{className:"input-group col-md-10"},l.a.createElement("label",{className:"input-group form-control",id:"filename"},this.createFilename()),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Copy"}))))))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="Features",a.footer="I'm trying my best y'all but it takes time!",a.features={implemented:["BR187","File naming Convention"],intended:["Merging Flow","Flame Height","Sprinkler Activation Time","Datasheets"]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){var e=[];this.features.implemented.forEach((function(t,a){e.push(l.a.createElement("div",{className:"lists-group-item"},t))}));var t=[];return this.features.intended.forEach((function(e,a){t.push(l.a.createElement("div",{className:"lists-group-item"},e))})),l.a.createElement("div",null,l.a.createElement("h2",null,"Current Features"),l.a.createElement("div",{className:"list-group"},e),l.a.createElement("hr",null),l.a.createElement("h2",null,"Intended Features"),l.a.createElement("div",{className:"list-group"},t))}}]),t}(E),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).title="References",a.footer="Alex Todd | OFR Consultants Ltd.",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){return l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"BSI, BS 9991:2015 Fire safety in the design, management and use of residential buildings - Code of practice, London: British Standards Institute, 2015."),l.a.createElement("li",{className:"list-group-item"},"BSI, BS 9999:2017 Fire safety in the design, management and use of buildings - Code of practice, London: British Standards Institute, 2017."),l.a.createElement("li",{className:"list-group-item"},"HM Government, The Building Regulations 2010 Fire safety Approved Document B 2019 edition, 2019."),l.a.createElement("li",{className:"list-group-item"},"BRE, BR 187 External fire spread - Building separation and boundary distances, IHS BRE Press, Bracknell, 2014."))}}]),t}(E),j=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state=a.resetState(),a.onPressModule=a.onPressModule.bind(Object(m.a)(a)),a.isActiveModule=a.isActiveModule.bind(Object(m.a)(a)),a.modules={},a.createModules();var n=a.modules.home;return a.state=a.resetState(n[0]),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"resetState",value:function(e){return{currentModule:e}}},{key:"setModule",value:function(e){this.setState({currentModule:e})}},{key:"getModules",value:function(){return this.modules}},{key:"createModules",value:function(){this.modules={home:[b,"Home"],filenaming:[N,"File Naming Convention"],br187:[g,"BR187 Calculator"],mergingflow:[C,"Merging Flow Calculator"],features:[S,"Features"],about:[y,"About"],references:[k,"References"]}}},{key:"onPressModule",value:function(e){this.setModule(this.modules[e.target.id][0])}},{key:"isActiveModule",value:function(e){return this.modules[e][0]===this.state.currentModule}},{key:"createModulesList",value:function(){var e=[];for(var t in this.modules){var a=this.modules[t][1];e.push(l.a.createElement("a",{className:"list-group-item list-group-item-action"+(this.isActiveModule(t)?" active":""),id:t,onClick:this.onPressModule,href:"#"},a))}return console.log(e),e}},{key:"render",value:function(){var e=this.createModulesList();return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"navpane px-0 fixed-top col-sm-2"},l.a.createElement("div",{className:"list-group-flush modules"},e)),l.a.createElement("div",{className:"spacer col-sm-2"}),l.a.createElement("div",{className:"module-container col-md-10"},l.a.createElement("div",{className:"container"},l.a.createElement(this.state.currentModule,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.faa52afa.chunk.js.map