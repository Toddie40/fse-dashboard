(this.webpackJsonpbr187=this.webpackJsonpbr187||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/logo-light.bbbae4b4.png"},46:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),o=(a(61),a(6)),s=a(7),c=a(9),m=a(8),u=a(10),h=a(17),d=a(21),p=a(75),g=a(76),f=a(74),v=a(45),E=a.n(v),b=(a(62),a(27)),y=a.n(b),C=a(32),N=a(11);function S(e,t,a){return e<t?t:e>a?a:e}var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(N.a)(a)),a.onChangeWidth=a.onChangeWidth.bind(Object(N.a)(a)),a.onChangeHeight=a.onChangeHeight.bind(Object(N.a)(a)),a.onChangeSeparation=a.onChangeSeparation.bind(Object(N.a)(a)),a.handleTypeChange=a.handleTypeChange.bind(Object(N.a)(a)),a.onChangeSprinklered=a.onChangeSprinklered.bind(Object(N.a)(a)),a.state=a.resetState(),a.name="BR187",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toString",value:function(){return this.name}},{key:"onSubmit",value:function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.calculateResults();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetState",value:function(){return{title:"",type:"parallel",width:"",height:"",separation:"",sprinklered:!1,results:!1}}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleTypeChange",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeHeight",value:function(e){this.setState({height:e.target.value})}},{key:"onChangeWidth",value:function(e){this.setState({width:e.target.value})}},{key:"onChangeSeparation",value:function(e){this.setState({separation:e.target.value})}},{key:"onChangeSprinklered",value:function(e){this.setState({sprinklered:e.target.checked})}},{key:"calculateResults",value:function(){var e;if("parallel"===this.state.type)if(0===this.state.separation)e=1;else{var t=.5*this.state.width/this.state.separation,a=.5*this.state.height/this.state.separation;e=2/Math.PI*(t/Math.sqrt(1+Math.pow(t,2))*Math.atan(a/Math.sqrt(1+Math.pow(t,2)))+a/Math.sqrt(1+Math.pow(a,2))*Math.atan(t/Math.sqrt(1+Math.pow(a,2))))}else if("corner"===this.state.type)if(0===this.state.separation)e=.25;else{var n=this.state.width/this.state.separation,r=this.state.height/this.state.separation;e=1/(2*Math.PI)*(n/Math.sqrt(1+Math.pow(n,2)))*Math.atan(r/Math.sqrt(1+Math.pow(n,2))+r/Math.sqrt(1+Math.pow(r,2))*Math.atan(n/Math.sqrt(1+Math.pow(r,2))))}else if("perpendicular"===this.state.type)if(0===this.state.separation)e=.25;else{var l=this.state.width/this.state.separation,i=this.state.height/this.state.separation;e=1/(2*Math.PI)*(Math.atan(l)-1/Math.sqrt(1+Math.pow(i,2))*Math.atan(l/Math.sqrt(1+Math.pow(i,2))))}else console.log("Somehow we've landed on an unsupported calculation type ("+this.state.type+")");var o=12.6/(168*e)*100,s=12.6/(84*e)*100;this.state.sprinklered&&(o*=2,s*=2),this.setState({results:!0,viewfactor:e.toFixed(3),standard_unprotected_area:S(o.toFixed(1),0,100),reduced_unprotected_area:S(s.toFixed(1),0,100)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"BR187 Tool")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Inputs"),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("label",{className:"col-md-4"},"Project Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Project Title",value:this.state.title,onChange:this.onChangeTitle})),r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("label",null,"Radiator Geometry")),r.a.createElement("div",{className:"form-row"},r.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.width,onChange:this.onChangeWidth,placeholder:"Width"}),r.a.createElement("input",{className:"form-control col-md-6",type:"number",step:"0.001",value:this.state.height,onChange:this.onChangeHeight,placeholder:"Height"})),r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("label",{className:"col-md-4"},"Separation Distance",r.a.createElement("small",null,r.a.createElement("br",null),"(Usually twice the boundary distance)")),r.a.createElement("input",{className:"form-control",type:"number",step:"0.001",placeholder:"Separation",value:this.state.separation,onChange:this.onChangeSeparation})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Calculation type"),r.a.createElement("div",{className:"form-check col-md-4"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"parallel",id:"parallel",checked:"parallel"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"parallel"},"Parallel")),r.a.createElement("div",{className:"form-check col-md-4"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"perpendicular",id:"perpendicular",checked:"perpendicular"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"perpendicular"},"Perpendicular")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"corner",id:"corner",checked:"corner"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"corner"},"Corner"))),r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.state.sprinklered,id:"sprinklered",onChange:this.onChangeSprinklered}),r.a.createElement("label",{className:"form-check-label",for:"sprinklered"},"Sprinklered "))),r.a.createElement("div",{className:"form-group py-3"},r.a.createElement("input",{type:"submit",value:"calculate",className:"btn btn-primary form-control"}))),!0===this.state.results&&r.a.createElement("div",{className:"results"},r.a.createElement("hr",null),r.a.createElement("h3",null,"Results"),r.a.createElement("h5",null,this.state.title),r.a.createElement("h5",null,"View Factor: ",this.state.viewfactor),r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Standard Fire Load")," ",r.a.createElement("sm",null,"(168 kW/sqm)")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.standard_unprotected_area,"%")))),r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Reduced Fire Load")," ",r.a.createElement("sm",null,"(84 kW/sqm)")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.reduced_unprotected_area,"%")))))))))}}]),t}(n.Component),j=a(46),O=a.n(j),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).logo=O.a,a.logostyle={height:"3rem",float:"right"},a.logosrc="https://images.squarespace-cdn.com/content/v1/5a61f9539f8dceafed8c0aea/1538391094315-DMAJ4KSB8F3BB7YIYAD3/ke17ZwdGBToddI8pDm48kL1PC3gM8Rd6YHHCa9IyTboUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtz9D7BxKE7nEGUPCO0e-x3MMDjV9uhX05eW5661eHWZCjLISwBs8eEdxAxTptZAUg/OFR-LtGrey+copy%402x.png?format=500w",a.title="moduleTitle",a.footer="",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderBody",value:function(){return r.a.createElement("div",null,"This method should be overridden")}},{key:"renderFooter",value:function(){return r.a.createElement("div",null,this.footer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h1",{class:"col-md justify-content-center"},this.title),r.a.createElement("div",{className:"col-md ml-auto justify-content-right"},r.a.createElement("img",{style:this.logostyle,src:this.logosrc})))),r.a.createElement("div",{className:"card-body"},this.renderBody()),r.a.createElement("div",{className:"card-footer"},this.renderFooter())))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="FSE Dashboard",a.footer=r.a.createElement("div",{className:"p-0 mt-2"},r.a.createElement("h5",null,"Contribute"),r.a.createElement("p",null,"You know JS and happen to be a fire engineer looking for a programming opportunity? Why not support the project on ",r.a.createElement("a",{href:"https://github.com/Toddie40/fse-dashboard"},"github"),"?")),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"What is this place?"),r.a.createElement("hr",null),r.a.createElement("p",null,"This is the FSE Dashboard. It's the place to find all of our in-house calculation tools and little quality of life improvements for fire engineers writing strategies."),r.a.createElement("p",null,"It's all ported over from FSETOOLS which is a python utility written by Ian Fu."),r.a.createElement("h3",null,"Getting started"),r.a.createElement("hr",null),r.a.createElement("p",null,"Go ahead and click the modules dropdown in the navigation pane to see what's currently available to use as well as upcoming features."),r.a.createElement("h3",null,"Help! Your app's broken!"),r.a.createElement("hr",null),r.a.createElement("p",null,"If you want to report a bug or request a feature please feel free to email me at ",r.a.createElement("a",{href:"mailto:alex.todd@ofrconsultants.com"},"alex.todd@ofrconsultants.com")))}}]),t}(w),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="About",a.footer="Alex Todd | OFR Consultants",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"Fire Safety Engineering Dashboard by OFR"),r.a.createElement("p",null,"A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies"))}}]),t}(w),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="Merging Flow",a.state=a.resetState(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"resetState",value:function(){return{scenario:1}}},{key:"renderBody",value:function(){return r.a.createElement("div",null,"Merging Flow calculator coming soon")}}]),t}(w);var R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(N.a)(a)),a.onChangeRevision=a.onChangeRevision.bind(Object(N.a)(a)),a.onChangeProject=a.onChangeProject.bind(Object(N.a)(a)),a.onChangeStage=a.onChangeStage.bind(Object(N.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(N.a)(a)),a.onChangeType=a.onChangeType.bind(Object(N.a)(a)),a.onChangeSecurityStatus=a.onChangeSecurityStatus.bind(Object(N.a)(a)),a.copyToClipboard=a.copyToClipboard.bind(Object(N.a)(a)),a.name="File Naming Convention",a.state=a.resetState(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"resetState",value:function(){return{date:new Date,revision:"Q00",project:"MAXXXXX",stage:"WP1",title:"Detailed Fire Strategy",type:"GA",securityStatus:"CIC"}}},{key:"onSubmit",value:function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.copyToClipboard(),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeRevision",value:function(e){this.setState({revision:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeStage",value:function(e){this.setState({stage:e.target.value})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeSecurityStatus",value:function(e){this.setState({securityStatus:e.target.value})}},{key:"createFilename",value:function(){var e=[];return e.push(function(e){var t=e;return"string"!==typeof e&&(t=(t=e.toISOString()).split("T")[0]),t=(t=(t=t.substr(2)).split("-"))[0]+t[1]+t[2]}(this.state.date)),e.push(this.state.revision.split(":")[0]),e.push(this.state.project),e.push(this.state.stage),e.push(this.state.title),e.push(this.state.type.split(":")[0]),e.push(this.state.securityStatus.split(":")[0]),e=e.join("-")}},{key:"copyToClipboard",value:function(){var e=this.createFilename();navigator.clipboard.writeText(e).then((function(){return alert("Copied: "+e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-header"},this.name),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Date"),r.a.createElement("input",{className:"form-control",type:"date",value:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Revsion"),r.a.createElement("select",{className:"form-control",value:this.state.revision,onChange:this.onChangeRevision},r.a.createElement("option",null,"Q00: First issue for internal review"),r.a.createElement("option",null,"Q01: Reviewer's Comments"),r.a.createElement("option",null,"Q02: Authoriser's Comments"),r.a.createElement("option",null,"D00: First issue to Others for Comment"),r.a.createElement("option",null,"D01: Subsequent external Reviews"),r.a.createElement("option",null,"R00: First Issue"),r.a.createElement("option",null,"R01: Second Issue"))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Project Number"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.project,onChange:this.onChangeProject})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Project Stage"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.stage,onChange:this.onChangeStage})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"File Title"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.title,onChange:this.onChangeTitle})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Document Type"),r.a.createElement("select",{className:"form-control",value:this.state.type,onChange:this.onChangeType},r.a.createElement("option",null,"GA: General Admin"),r.a.createElement("option",null,"MD: Marketing"),r.a.createElement("option",null,"FP: Fee Proposal"),r.a.createElement("option",null,"LT: Letter"),r.a.createElement("option",null,"DN: Design Note"),r.a.createElement("option",null,"OF: Outline Strategy"),r.a.createElement("option",null,"DF: Detailed Strategy"),r.a.createElement("option",null,"RF: Retrospective Strategy"),r.a.createElement("option",null,"FA: Fire Risk Assessment"),r.a.createElement("option",null,"FS: Fire Survey Report"),r.a.createElement("option",null,"FN: File Note"),r.a.createElement("option",null,"MN: Meeting Notes"),r.a.createElement("option",null,"CS: Calculation Sheet"),r.a.createElement("option",null,"SK: Sketch"),r.a.createElement("option",null,"DW: Drawing"),r.a.createElement("option",null,"XO: Expert Opinion"))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Security Status"),r.a.createElement("select",{className:"form-control",value:this.state.securityStatus,onChange:this.onChangeSecurityStatus},r.a.createElement("option",null,"CIC: Commercial in Confidence"),r.a.createElement("option",null,"WPC: Without Prejudice and Confidential"),r.a.createElement("option",null,"SDS: Secure Document"),r.a.createElement("option",null,"FID: Free Issue Document (no security status)"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Filename:"),r.a.createElement("div",{className:"input-group col-md-10"},r.a.createElement("label",{className:"input-group form-control",id:"filename"},this.createFilename()),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Copy"}))))))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="Features",a.footer="I'm trying my best y'all but it takes time!",a.features={implemented:[["BR187","/BR187"],["File naming Convention","/File Naming"]],intended:["Merging Flow","Flame Height","Sprinkler Activation Time","Datasheets"]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderBody",value:function(){var e=[];this.features.implemented.forEach((function(t,a){e.push(r.a.createElement("a",{className:"list-group-item list-group-item-action",href:"#"+t[1]},t[0]))}));var t=[];return this.features.intended.forEach((function(e,a){t.push(r.a.createElement("div",{className:"list-group-item"},e))})),r.a.createElement("div",null,r.a.createElement("h2",null,"Current Features"),r.a.createElement("div",{className:"list-group"},e),r.a.createElement("hr",null),r.a.createElement("h2",null,"Intended Features"),r.a.createElement("div",{className:"list-group"},t))}}]),t}(w),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="References",a.footer="Alex Todd | OFR Consultants Ltd.",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderBody",value:function(){return r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"BSI, BS 9991:2015 Fire safety in the design, management and use of residential buildings - Code of practice, London: British Standards Institute, 2015."),r.a.createElement("li",{className:"list-group-item"},"BSI, BS 9999:2017 Fire safety in the design, management and use of buildings - Code of practice, London: British Standards Institute, 2017."),r.a.createElement("li",{className:"list-group-item"},"HM Government, The Building Regulations 2010 Fire safety Approved Document B 2019 edition, 2019."),r.a.createElement("li",{className:"list-group-item"},"BRE, BR 187 External fire spread - Building separation and boundary distances, IHS BRE Press, Bracknell, 2014."))}}]),t}(w),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).modules={},a.setModules(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"setModules",value:function(){this.modules={home:[F,"Home"],filenaming:[R,"File Naming"],br187:[k,"BR187"],mergingflow:[T,"Merging Flow"],features:[x,"Features"],about:[M,"About"],references:[D,"References"]}}},{key:"navbar",value:function(){return r.a.createElement(p.a,{variant:"dark",className:"navbar",expand:"md"},r.a.createElement(p.a.Brand,{as:h.b,to:"/Home"},r.a.createElement("img",{src:E.a,height:"40rem",alt:"OFR Consultants"})),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(g.a.Link,{as:h.b,to:"/Home"},"Home"),r.a.createElement(g.a.Link,{as:h.b,to:"/Features"},"Features"),r.a.createElement(f.a,{title:"Modules",id:"basic-nav-dropdown"},r.a.createElement(f.a.Header,null,"Implemented"),r.a.createElement(f.a.Item,{as:h.b,to:"/File Naming"},"File Naming"),r.a.createElement(f.a.Item,{as:h.b,to:"/BR187"},"BR187"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Header,null,"Coming Soon"),r.a.createElement(f.a.Item,{as:h.b,to:"/Merging Flow"},"Merging Flow"))),r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{as:h.b,to:"/About"},"About"),r.a.createElement(g.a.Link,{as:h.b,to:"/References",className:"mr-sm-2"},"References"))))}},{key:"render",value:function(){var e=[];for(var t in this.modules){var a=this.modules[t];e.push(r.a.createElement(d.a,{path:"/"+a[1],component:a[0]}))}return r.a.createElement("div",{className:"root"},r.a.createElement(h.a,null,r.a.createElement("div",null,this.navbar(),r.a.createElement("div",{className:"container module-container mt-5 mx-auto"},r.a.createElement(d.a,{exact:!0,path:"/",component:F}),e))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.96e11489.chunk.js.map