(this["webpackJsonpfse-dashboard"]=this["webpackJsonpfse-dashboard"]||[]).push([[0],{50:function(e,t,a){e.exports=a.p+"static/media/logo-light.bbbae4b4.png"},51:function(e,t,a){e.exports=a.p+"static/media/logo.1cd923bd.png"},52:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_1.de981586.png"},53:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_2.686ef300.png"},54:function(e,t,a){e.exports=a.p+"static/media/MergingFlow_3.d5891c9b.png"},64:function(e,t,a){e.exports=a(81)},69:function(e,t,a){},70:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),s=(a(69),a(7)),o=a(8),c=a(10),m=a(9),u=a(11),h=a(20),p=a(23),d=a(85),g=a(86),f=a(83),v=a(50),E=a.n(v),b=(a(70),a(30)),y=a.n(b),N=a(36),C=a(6);function w(e,t,a){return e<t?t:e>a?a:e}var S=a(51),x=a.n(S),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).logo=x.a,a.logostyle={float:"right"},a.logosrc="https://images.squarespace-cdn.com/content/v1/5a61f9539f8dceafed8c0aea/1538391094315-DMAJ4KSB8F3BB7YIYAD3/ke17ZwdGBToddI8pDm48kL1PC3gM8Rd6YHHCa9IyTboUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtz9D7BxKE7nEGUPCO0e-x3MMDjV9uhX05eW5661eHWZCjLISwBs8eEdxAxTptZAUg/OFR-LtGrey+copy%402x.png?format=500w",a.title="moduleTitle",a.footer="",a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){return r.a.createElement("div",null,"This method should be overridden")}},{key:"renderFooter",value:function(){return r.a.createElement("div",null,this.footer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card module shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h1",{className:"module-header-title col-md justify-content-center"},this.title),r.a.createElement("div",{className:"col-md ml-auto justify-content-right"},r.a.createElement("img",{className:"module-header-logo",alt:"Header Logo",style:this.logostyle,src:this.logosrc})))),r.a.createElement("div",{className:"card-body"},this.renderBody()),r.a.createElement("div",{className:"card-footer"},this.renderFooter())))}}]),t}(n.Component),j=a(16),O=a(17),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(C.a)(a)),a.onChangeWidth=a.onChangeWidth.bind(Object(C.a)(a)),a.onChangeHeight=a.onChangeHeight.bind(Object(C.a)(a)),a.onChangeSeparation=a.onChangeSeparation.bind(Object(C.a)(a)),a.handleTypeChange=a.handleTypeChange.bind(Object(C.a)(a)),a.onChangeSprinklered=a.onChangeSprinklered.bind(Object(C.a)(a)),a.state=a.resetState(),a.title="BR187",a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"onSubmit",value:function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.calculateResults();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetState",value:function(){return{title:"",type:"parallel",width:"",height:"",separation:"",sprinklered:!1,results:!1}}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleTypeChange",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeHeight",value:function(e){this.setState({height:e.target.value})}},{key:"onChangeWidth",value:function(e){this.setState({width:e.target.value})}},{key:"onChangeSeparation",value:function(e){this.setState({separation:e.target.value})}},{key:"onChangeSprinklered",value:function(e){this.setState({sprinklered:e.target.checked})}},{key:"calculateResults",value:function(){var e;if("parallel"===this.state.type)if(0===this.state.separation)e=1;else{var t=.5*this.state.width/this.state.separation,a=.5*this.state.height/this.state.separation;e=2/Math.PI*(t/Math.sqrt(1+Math.pow(t,2))*Math.atan(a/Math.sqrt(1+Math.pow(t,2)))+a/Math.sqrt(1+Math.pow(a,2))*Math.atan(t/Math.sqrt(1+Math.pow(a,2))))}else if("corner"===this.state.type)if(0===this.state.separation)e=.25;else{var n=this.state.width/this.state.separation,r=this.state.height/this.state.separation;e=1/(2*Math.PI)*(n/Math.sqrt(1+Math.pow(n,2)))*Math.atan(r/Math.sqrt(1+Math.pow(n,2))+r/Math.sqrt(1+Math.pow(r,2))*Math.atan(n/Math.sqrt(1+Math.pow(r,2))))}else if("perpendicular"===this.state.type)if(0===this.state.separation)e=.25;else{var l=this.state.width/this.state.separation,i=this.state.height/this.state.separation;e=1/(2*Math.PI)*(Math.atan(l)-1/Math.sqrt(1+Math.pow(i,2))*Math.atan(l/Math.sqrt(1+Math.pow(i,2))))}else console.log("Somehow we've landed on an unsupported calculation type ("+this.state.type+")");var s=12.6/(168*e)*100,o=12.6/(84*e)*100;this.state.sprinklered&&(s*=2,o*=2),this.setState({results:!0,viewfactor:e.toFixed(3),standard_unprotected_area:w(s.toFixed(1),0,100),reduced_unprotected_area:w(o.toFixed(1),0,100)})}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Inputs"),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("label",{className:"col-md-4"},"Project Name"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.j,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Project Title",value:this.state.title,onChange:this.onChangeTitle}))),r.a.createElement("div",{className:"form-row pt-2"},r.a.createElement("label",null,"Radiator Geometry")),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"input-group mt-2 col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.a,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"number",step:"0.001",value:this.state.width,onChange:this.onChangeWidth,placeholder:"Width"})),r.a.createElement("div",{className:"input-group mt-2 col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.b,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"number",step:"0.001",value:this.state.height,onChange:this.onChangeHeight,placeholder:"Height"}))),r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("label",{className:"col-md-4"},"Separation Distance",r.a.createElement("small",null,r.a.createElement("br",null),"(Usually twice the boundary distance)")),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.i,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"number",step:"0.001",placeholder:"Separation",value:this.state.separation,onChange:this.onChangeSeparation}))),r.a.createElement("div",{className:"form-row row"},r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement("label",null,"Calculation type"),r.a.createElement("div",{className:"form-check col-md-4"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"parallel",id:"parallel",checked:"parallel"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"parallel"},"Parallel")),r.a.createElement("div",{className:"form-check col-md-4"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"perpendicular",id:"perpendicular",checked:"perpendicular"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"perpendicular"},"Perpendicular")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",value:"corner",id:"corner",checked:"corner"===this.state.type,onChange:this.handleTypeChange}),r.a.createElement("label",{className:"form-check-label",for:"corner"},"Corner"))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-body"},r.a.createElement(_,{r_width:this.state.width,r_height:this.state.height,sep:this.state.separation,type:this.state.type}),r.a.createElement("span",{className:"badge pill-badge badge-primary br187-type-badge"},this.state.type)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("b",null,"Indicative Diagram")," for use as a visual aid only.")))),r.a.createElement("div",{className:"form-row py-2"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.state.sprinklered,id:"sprinklered",onChange:this.onChangeSprinklered}),r.a.createElement("label",{className:"form-check-label",for:"sprinklered"},"Sprinklered "))),r.a.createElement("div",{className:"form-group py-3"},r.a.createElement("input",{type:"submit",value:"calculate",className:"btn btn-primary form-control"}))),!0===this.state.results&&r.a.createElement("div",{className:"results"},r.a.createElement("hr",null),r.a.createElement("h3",null,"Results"),r.a.createElement("h5",null,this.state.title),r.a.createElement("h5",null,"View Factor: ",this.state.viewfactor),r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Standard Fire Load")," ",r.a.createElement("sm",null,"(168 kW/sqm)")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.standard_unprotected_area,"%")))),r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Reduced Fire Load")," ",r.a.createElement("sm",null,"(84 kW/sqm)")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Maximum Unprotected Area: ",this.state.reduced_unprotected_area,"%")))))))}}]),t}(k),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"draw_dashed_line",value:function(e,t,a,n,r,l,i){e.setLineDash(l),e.beginPath(),e.strokeStyle=i,e.lineWidth=3,e.moveTo(t,a),e.lineTo(n,r),e.stroke()}},{key:"draw",value:function(){this.ctx.resetTransform(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var e,t,a,n,r,l,i,s={red:"#dd4444cc",blue:"#00aaee",white:"#ffffff"},o=Number(this.props.r_width),c=Number(this.props.r_height),m=Number(this.props.sep),u=this.canvas.width,h=this.canvas.height,p=u/h,d=.005;switch(this.props.type){case"parallel":i=1,i=u/(o/2+m+o*d/2),(o/2+m+o*d/2)/(e=c+(l=.5)*o)<p&&(i=h/e),d*=i,this.ctx.fillStyle=s.blue,this.ctx.setTransform(1,l,0,1,i*m,0),this.ctx.fillRect(0,0,i*o/(1+d*m),i*c/(1+d*m)),this.ctx.resetTransform(),n=c/2+(t=o/2)*l,r=c/2/(1+d*m)+((a=m+o/(2*(1+d*m)))-m)*l,t*=i,a*=i,n*=i,r*=i,this.draw_dashed_line(this.ctx,t,n,a,r,[5,5],"white"),this.ctx.setTransform(1,l,0,1,0,0),this.ctx.fillStyle=s.red,this.ctx.fillRect(0,0,i*o,i*c);break;case"perpendicular":var g=o+m/2+c/2*(l=1.5);d*=i=g/(e=c+m/3+c/2)>p?this.canvas.width/g:this.canvas.height/e,this.ctx.fillStyle=s.red,this.ctx.fillRect(0,0,o*i,c*i),t=o/2*i,n=c*i,a=(o/2+m/2)*i,r=(c+m/3)*i,this.draw_dashed_line(this.ctx,t,n,a,r,[5,5],"white"),this.ctx.save(),this.ctx.fillStyle=s.blue,this.ctx.setTransform(1,0,l,1,m/2*i,c*i+m/3*i),this.ctx.fillRect(0,0,o*i,c*i*.5),this.ctx.resetTransform(),this.ctx.restore();break;case"corner":i=1,i=u/(o+m),(o+m)/(e=c+(l=.5)*o+(c/2+l*o/2)/(1+d*m))<p&&(i=h/e),a=m+(t=o/2)+o/(2*(1+(d*=i)*m)),r=(n=c/2+t*l)+(c/2+o*l/2)/(1+d*m),this.ctx.fillStyle=s.blue,this.ctx.setTransform(1,l,0,1,i*(t+m),i*n),this.ctx.fillRect(0,0,i*o/(1+d*m),i*c/(1+d*m)),this.ctx.resetTransform(),t*=i,a*=i,n*=i,r*=i,this.draw_dashed_line(this.ctx,2*t,2*n,a,r,[5,5],"white"),this.ctx.setTransform(1,l,0,1,0,0),this.ctx.fillStyle=s.red,this.ctx.fillRect(0,0,i*o,i*c);break;default:this.ctx.font="24px Helvetica",this.ctx.fillText("Diagram not implemented",0,this.canvas.height/2)}}}]),t}(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).canvas=null,a.ctx=null,a.mounted=!1,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.ctx=this.canvas.getContext("2d"),this.mounted=!0}},{key:"draw",value:function(){}},{key:"render",value:function(){return this.mounted&&this.draw(),r.a.createElement("div",{className:"canvas-container shadow"},r.a.createElement("canvas",{ref:"canvas",className:"canvas",height:"300px",width:"300px"}))}}]),t}(r.a.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="FSE Dashboard",a.footer=r.a.createElement("div",{className:"p-0 mt-2"},r.a.createElement("h5",null,"Contribute"),r.a.createElement("p",null,"You know JS and happen to be a fire engineer looking for a programming opportunity? Why not support the project on ",r.a.createElement("a",{href:"https://github.com/Toddie40/fse-dashboard"},"github"),"?")),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"What is this place?"),r.a.createElement("hr",null),r.a.createElement("p",null,"This is the FSE Dashboard. It's the place to find all of our in-house calculation tools and little quality of life improvements for fire engineers writing strategies."),r.a.createElement("p",null,"It's all ported over from FSETOOLS which is a python utility written by Ian Fu."),r.a.createElement("h3",null,"Getting started"),r.a.createElement("hr",null),r.a.createElement("p",null,"Go ahead and click the modules dropdown in the navigation pane to see what's currently available to use as well as upcoming features."),r.a.createElement("h3",null,"Help! Your app's broken!"),r.a.createElement("hr",null),r.a.createElement("p",null,"If you want to report a bug or request a feature please feel free to email me at ",r.a.createElement("a",{href:"mailto:alex.todd@ofrconsultants.com"},"alex.todd@ofrconsultants.com")))}}]),t}(k),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="About",a.footer="Alex Todd | OFR Consultants",a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toString",value:function(){return this.name}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"Fire Safety Engineering Dashboard by OFR"),r.a.createElement("p",null,"A collection of fire safety engineering tools for routine calculations to help with speeding up the process of writing fire strategies"))}}]),t}(k),T=a(84),B=a(52),R=a.n(B),W=a(53),I=a.n(W),P=a(54),X=a.n(P),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChooseScenario=a.onChooseScenario.bind(Object(C.a)(a)),a.onChangeD=a.onChangeD.bind(Object(C.a)(a)),a.onChangeN=a.onChangeN.bind(Object(C.a)(a)),a.onChangeB=a.onChangeB.bind(Object(C.a)(a)),a.onChangeS_up=a.onChangeS_up.bind(Object(C.a)(a)),a.onChangeS_dn=a.onChangeS_dn.bind(Object(C.a)(a)),a.onChangeW_se=a.onChangeW_se.bind(Object(C.a)(a)),a.onChangeX=a.onChangeX.bind(Object(C.a)(a)),a.title="Merging Flow",a.scenarioDescriptors={1:"Merging flow from stair with storey exit at final exit level",2:"Merging flow from stair above and from stair below final exit level",3:"Merging flow for stairs from above and from below combined with storey exit from final exit level"},a.state=a.resetState(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"calculate",value:function(){var e=0,t=Number(this.state.N),a=Number(this.state.D),n=Number(this.state.B),r=Number(this.state.X),l=Number(this.state.S_up),i=Number(this.state.S_dn),s=Number(this.state.W_se);switch(this.state.scenario){case"1":e=t>60&&a<2?l+s:t*r+.75*l;break;case"2":e=n>60&&a<2?l+i:n*r+.75*l;break;case"3":e=n+t>60&&a<2?l+i+s:n*r+t*r+.75*l}return e}},{key:"resetState",value:function(){return{scenario:"1",N:"",D:"",B:"",X:"",W_se:"",W_fe:"",S_up:"",S_dn:""}}},{key:"onChooseScenario",value:function(e){this.setState({scenario:e.target.value})}},{key:"onChangeN",value:function(e){this.setState({N:e.target.value})}},{key:"onChangeD",value:function(e){this.setState({D:e.target.value})}},{key:"onChangeB",value:function(e){this.setState({B:e.target.value})}},{key:"onChangeX",value:function(e){this.setState({X:e.target.value})}},{key:"onChangeS_up",value:function(e){this.setState({S_up:e.target.value})}},{key:"onChangeS_dn",value:function(e){this.setState({S_dn:e.target.value})}},{key:"onChangeW_se",value:function(e){this.setState({W_se:e.target.value})}},{key:"getDiagram",value:function(){switch(this.state.scenario){case"1":return R.a;case"2":return I.a;case"3":return X.a}}},{key:"Scenario1Form",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.W_se,onChange:this.onChangeW_se,placeholder:"W se (millimetres)","data-toggle":"tooltip",title:"the width of the final exit level storey exit"}))),t=r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}));return r.a.createElement(T.a,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"N-and-D-row row w-50"},r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.N,onChange:this.onChangeN,placeholder:"N (persons)","data-toggle":"tooltip",title:"Number of people served by the final exit level storey exit"}),r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),r.a.createElement("div",{className:"row justify-content-center"},this.state.N>60&&this.state.D<2?e:t),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Label,null,"Width of Final Exit (m)"),r.a.createElement(T.a.Control,{as:"label"},this.calculate()))))}},{key:"Scenario2Form",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_dn,onChange:this.onChangeS_dn,placeholder:"S dn (millimetres)","data-toggle":"tooltip",title:"the stair width for the downward portion of the stair"}))),t=r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}));return r.a.createElement(T.a,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"N-and-D-row row w-50"},r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.B,onChange:this.onChangeB,placeholder:"B (persons)","data-toggle":"tooltip",title:"Number of people served by the stair from below the final exit level"}),r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),r.a.createElement("div",{className:"row justify-content-center"},this.state.B>60&&this.state.D<2?e:t),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Label,null,"Width of Final Exit (m)"),r.a.createElement(T.a.Control,{as:"label"},this.calculate()))))}},{key:"Scenario3Form",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_dn,onChange:this.onChangeS_dn,placeholder:"S dn (millimetres)","data-toggle":"tooltip",title:"the stair width for the downward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.W_se,onChange:this.onChangeW_se,placeholder:"W se (millimetres)","data-toggle":"tooltip",title:"the width of the final exit level storey exit"}))),t=r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.S_up,onChange:this.onChangeS_up,placeholder:"S up (millimetres)","data-toggle":"tooltip",title:"the stair width for the upward portion of the stair"}),r.a.createElement(T.a.Control,{className:"m-2",as:"input",type:"number",step:"0.01",value:this.state.X,onChange:this.onChangeX,placeholder:"X (millimetres)","data-toggle":"tooltip",title:"the minimum door width per person"}));return r.a.createElement(T.a,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"N-and-D-row row w-75"},r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.N,onChange:this.onChangeN,placeholder:"N (persons)","data-toggle":"tooltip",title:"the number of people served by the final exit level storey exit"}),r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.B,onChange:this.onChangeB,placeholder:"B (persons)","data-toggle":"tooltip",title:"Number of people served by the stair from below the final exit level"}),r.a.createElement(T.a.Control,{className:"col-md m-2",as:"input",type:"number",step:"0.01",value:this.state.D,onChange:this.onChangeD,placeholder:"D (m)","data-toggle":"tooltip",title:"the lesser distance from the final exit level storey to the lowest riser from the upward portion of the stair"}))),r.a.createElement("div",{className:"row justify-content-center"},Number(this.state.B)+Number(this.state.N)>60&&this.state.D<2?e:t),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Group,{className:"row"},r.a.createElement(T.a.Label,null,"Width of Final Exit (m)"),r.a.createElement(T.a.Control,{as:"label"},this.calculate()))))}},{key:"renderForm",value:function(){switch(this.state.scenario){case"1":return this.Scenario1Form();case"2":return this.Scenario2Form();case"3":return this.Scenario3Form();default:return r.a.createElement("div",null,"Unrecognised Scenario")}}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(T.a,{className:"mx-auto"},r.a.createElement(T.a.Group,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(T.a.Label,{className:"mx-auto"},"Scenario")),r.a.createElement("div",{className:"radio-buttons-row row justify-content-center"},r.a.createElement(T.a.Check,{className:"px-3",as:T.a.Input,checked:"1"===this.state.scenario,value:"1",onChange:this.onChooseScenario,type:"radio",label:"1",id:"scenario_1",name:"scenario_radio_buttons"}),r.a.createElement(T.a.Check,{className:"px-3",as:T.a.Input,checked:"2"===this.state.scenario,value:"2",onChange:this.onChooseScenario,type:"radio",label:"2",name:"scenario_radio_buttons",id:"scenario_2"}),r.a.createElement(T.a.Check,{className:"px-3",as:T.a.Input,checked:"3"===this.state.scenario,value:"3",onChange:this.onChooseScenario,type:"radio",label:"3",name:"scenario_radio_buttons",id:"scenario_3"})))),r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("img",{className:"mx-auto",src:this.getDiagram(),alt:"Scenario "+this.state.scenario+" diagram"})),r.a.createElement("div",{className:"scenario-descriptor row justify-content-center py-3"},this.scenarioDescriptors[this.state.scenario]),r.a.createElement("div",{className:"Input-form"},this.renderForm()))}}]),t}(k);var G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(C.a)(a)),a.onChangeRevision=a.onChangeRevision.bind(Object(C.a)(a)),a.onChangeProject=a.onChangeProject.bind(Object(C.a)(a)),a.onChangeStage=a.onChangeStage.bind(Object(C.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(C.a)(a)),a.onChangeType=a.onChangeType.bind(Object(C.a)(a)),a.onChangeSecurityStatus=a.onChangeSecurityStatus.bind(Object(C.a)(a)),a.copyToClipboard=a.copyToClipboard.bind(Object(C.a)(a)),a.title="File Naming Convention",a.state=a.resetState(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"resetState",value:function(){return{date:new Date,revision:"Q00",project:"MAXXXXX",stage:"WP1",title:"Detailed Fire Strategy",type:"GA",securityStatus:"CIC"}}},{key:"onSubmit",value:function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.copyToClipboard(),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeRevision",value:function(e){this.setState({revision:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeStage",value:function(e){this.setState({stage:e.target.value})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeSecurityStatus",value:function(e){this.setState({securityStatus:e.target.value})}},{key:"createFilename",value:function(){var e=[];return e.push(function(e){var t=e;return"string"!==typeof e&&(t=(t=e.toISOString()).split("T")[0]),t=(t=(t=t.substr(2)).split("-"))[0]+t[1]+t[2]}(this.state.date)),e.push(this.state.revision.split(":")[0]),e.push(this.state.project),e.push(this.state.stage),e.push(this.state.title),e.push(this.state.type.split(":")[0]),e.push(this.state.securityStatus.split(":")[0]),e=e.join("-")}},{key:"copyToClipboard",value:function(){var e=this.createFilename();navigator.clipboard.writeText(e).then((function(){return alert("Copied: "+e)}))}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),autoComplete:"off"},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Date"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.c,fixedWidth:!0}))),r.a.createElement("input",{className:"input-group form-control",type:"date",value:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Revsion"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.d,fixedWidth:!0}))),r.a.createElement("select",{className:"form-control",value:this.state.revision,onChange:this.onChangeRevision},r.a.createElement("option",null,"Q00: First issue for internal review"),r.a.createElement("option",null,"Q01: Reviewer's Comments"),r.a.createElement("option",null,"Q02: Authoriser's Comments"),r.a.createElement("option",null,"D00: First issue to Others for Comment"),r.a.createElement("option",null,"D01: Subsequent external Reviews"),r.a.createElement("option",null,"R00: First Issue"),r.a.createElement("option",null,"R01: Second Issue")))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Project Number"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.f,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.project,onChange:this.onChangeProject}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Project Stage"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.g,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.stage,onChange:this.onChangeStage}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"File Title"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.j,fixedWidth:!0}))),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.title,onChange:this.onChangeTitle}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Document Type"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.e,fixedWidth:!0}))),r.a.createElement("select",{className:"form-control",value:this.state.type,onChange:this.onChangeType},r.a.createElement("option",null,"GA: General Admin"),r.a.createElement("option",null,"MD: Marketing"),r.a.createElement("option",null,"FP: Fee Proposal"),r.a.createElement("option",null,"LT: Letter"),r.a.createElement("option",null,"DN: Design Note"),r.a.createElement("option",null,"OF: Outline Strategy"),r.a.createElement("option",null,"DF: Detailed Strategy"),r.a.createElement("option",null,"RF: Retrospective Strategy"),r.a.createElement("option",null,"FA: Fire Risk Assessment"),r.a.createElement("option",null,"FS: Fire Survey Report"),r.a.createElement("option",null,"FN: File Note"),r.a.createElement("option",null,"MN: Meeting Notes"),r.a.createElement("option",null,"CS: Calculation Sheet"),r.a.createElement("option",null,"SK: Sketch"),r.a.createElement("option",null,"DW: Drawing"),r.a.createElement("option",null,"XO: Expert Opinion")))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Security Status"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{class:"input-group-text"},r.a.createElement(j.a,{icon:O.h,fixedWidth:!0}))),r.a.createElement("select",{className:"form-control",value:this.state.securityStatus,onChange:this.onChangeSecurityStatus},r.a.createElement("option",null,"CIC: Commercial in Confidence"),r.a.createElement("option",null,"WPC: Without Prejudice and Confidential"),r.a.createElement("option",null,"SDS: Secure Document"),r.a.createElement("option",null,"FID: Free Issue Document (no security status)")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"col-md-2"},"Filename:"),r.a.createElement("div",{className:"input-group col-md-10"},r.a.createElement("label",{className:"input-group form-control",id:"filename"},this.createFilename()),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Copy"}))))))}}]),t}(k),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="Features",a.footer="I'm trying my best y'all but it takes time!",a.features={implemented:[["BR187","/BR187"],["File naming Convention","/File Naming"],["Merging Flow","/Merging Flow"]],intended:["Flame Height","Sprinkler Activation Time","Datasheets"]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){var e=[];this.features.implemented.forEach((function(t,a){e.push(r.a.createElement("a",{className:"list-group-item list-group-item-action",href:"#"+t[1]},t[0]))}));var t=[];return this.features.intended.forEach((function(e,a){t.push(r.a.createElement("div",{className:"list-group-item"},e))})),r.a.createElement("div",null,r.a.createElement("h2",null,"Current Features"),r.a.createElement("div",{className:"list-group"},e),r.a.createElement("hr",null),r.a.createElement("h2",null,"Intended Features"),r.a.createElement("div",{className:"list-group"},t))}}]),t}(k),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title="References",a.footer="Alex Todd | OFR Consultants Ltd.",a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderBody",value:function(){return r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"BSI, BS 9991:2015 Fire safety in the design, management and use of residential buildings - Code of practice, London: British Standards Institute, 2015."),r.a.createElement("li",{className:"list-group-item"},"BSI, BS 9999:2017 Fire safety in the design, management and use of buildings - Code of practice, London: British Standards Institute, 2017."),r.a.createElement("li",{className:"list-group-item"},"HM Government, The Building Regulations 2010 Fire safety Approved Document B 2019 edition, 2019."),r.a.createElement("li",{className:"list-group-item"},"BRE, BR 187 External fire spread - Building separation and boundary distances, IHS BRE Press, Bracknell, 2014."))}}]),t}(k),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).modules={},a.setModules(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"setModules",value:function(){this.modules={home:[D,"Home"],filenaming:[G,"File Naming"],br187:[F,"BR187"],mergingflow:[A,"Merging Flow"],features:[L,"Features"],about:[M,"About"],references:[q,"References"]}}},{key:"navbar",value:function(){return r.a.createElement(d.a,{variant:"dark",className:"navbar shadow-lg",expand:"md",sticky:"top"},r.a.createElement(d.a.Brand,{as:h.b,to:"/Home"},r.a.createElement("img",{src:E.a,height:"40rem",alt:"OFR Consultants"})),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(g.a.Link,{as:h.b,to:"/Home"},"Home"),r.a.createElement(g.a.Link,{as:h.b,to:"/Features"},"Features"),r.a.createElement(f.a,{title:"Modules",id:"basic-nav-dropdown"},r.a.createElement(f.a.Header,null,"Implemented"),r.a.createElement(f.a.Item,{as:h.b,to:"/File Naming"},"File Naming"),r.a.createElement(f.a.Item,{as:h.b,to:"/BR187"},"BR187"),r.a.createElement(f.a.Item,{as:h.b,to:"/Merging Flow"},"Merging Flow"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Header,null,"Coming Soon"))),r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{as:h.b,to:"/About"},"About"),r.a.createElement(g.a.Link,{as:h.b,to:"/References",className:"mr-sm-2"},"References"))))}},{key:"render",value:function(){var e=[];for(var t in this.modules){var a=this.modules[t];e.push(r.a.createElement(p.a,{path:"/"+a[1],component:a[0]}))}return r.a.createElement("div",{className:"root"},r.a.createElement(h.a,null,r.a.createElement("div",null,this.navbar(),r.a.createElement("div",{className:"container module-container mt-5 mx-auto"},r.a.createElement(p.a,{exact:!0,path:"/",component:D}),e))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.241b2ecf.chunk.js.map