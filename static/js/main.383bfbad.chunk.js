(this["webpackJsonpquiz-against-humanity"]=this["webpackJsonpquiz-against-humanity"]||[]).push([[0],{18:function(e,t,n){e.exports=n(38)},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(15),r=n.n(o),s=(n(23),n(6)),c=n(1),l=n(2),u=n(4),m=n(3),d=n(5),h=(n(24),i.a.createContext()),p=function(e){return function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(m.a)(n).call(this,e))).state={shouldRender:t.props.isVisible},t}return Object(d.a)(n,t),Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;!e.isVisible&&this.props.isVisible?this.setState({shouldRender:!0}):e.isVisible&&!this.props.isVisible&&setTimeout((function(){return t.setState({shouldRender:!1})}),1e3)}},{key:"render",value:function(){return this.state.shouldRender?i.a.createElement(e,this.props):null}}]),n}(i.a.Component)},f=n(17),b=function(e){for(var t=Object(f.a)(e),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),i=[t[a],t[n]];t[n]=i[0],t[a]=i[1]}return t},y={apiKey:"AIzaSyD7VNz1O8w_xx-kNEttlS-0NfDgJku6K64",authDomain:"quiz-against-humanity.firebaseapp.com",databaseURL:"https://quiz-against-humanity.firebaseio.com",projectId:"quiz-against-humanity",storageBucket:"quiz-against-humanity.appspot.com",messagingSenderId:"279117947663",appId:"1:279117947663:web:1ab06323d0d070db41147a",measurementId:"G-1R7RRSGNSC"},v=n(9),g=n.n(v),O=(n(25),n(29),n(30),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:this.props.className,style:this.props.style},i.a.createElement("h1",null,i.a.createElement("span",null,"Quiz"),i.a.createElement("span",null,"Against"),i.a.createElement("span",null,"Humanity.")),i.a.createElement("p",{className:"subtitle"},i.a.createElement("span",null,"A trivia game"),i.a.createElement("span",null,"for weird people.")))}}]),t}(i.a.Component)),E=(n(31),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{autoFocus:!0,onClick:this.props.onClick,className:"btn ".concat(this.props.type)},this.props.children)}}]),t}(i.a.Component)),j=(n(32),n(16)),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:this.props.className,style:this.props.style,onAnimationEnd:this.props.onAnimationEnd},i.a.createElement(j.InlineShareButtons,{config:{alignment:"center",enabled:!0,networks:["facebook","twitter","pinterest","email","sms"],radius:50,spacing:8}}),i.a.createElement("p",null,"Designed & developed by ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://malcolmkiano.com"},"Malcolm Kiano"),"."))}}]),t}(i.a.Component),k=(n(33),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.isVisible?"":"hidden";return i.a.createElement("div",{className:"loader animated ".concat(e)})}}]),t}(i.a.Component));function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{container:{animation:e?"":"fadeOut",delay:e?0:1},header:{animation:t?e?"":"bounceOutUp":e?"bounceInDown":"bounceOutUp"},content:{animation:e?"fadeIn":"fadeOut",delay:e?1:0},footer:{animation:t?e?"":"fadeOut":e?"fadeIn":"fadeOut",delay:t?0:e?1:0}}}var N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleStart=function(){n.props.onStart()&&n.setState(Object(s.a)({},q(!1)))},n.state=Object(s.a)({},q(e.isVisible,e.startingOver)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.isVisible!==this.props.isVisible)return q(e.isVisible)}},{key:"render",value:function(){var e=this.state,t=e.container,n=e.header,a=e.content,o=e.footer;return i.a.createElement("section",{className:"intro animated ".concat(t.animation),style:{animationDelay:"".concat(t.delay,"s")}},i.a.createElement("div",{className:"wrapper"},i.a.createElement(O,{className:"animated ".concat(n.animation)}),i.a.createElement("article",{className:"animated ".concat(a.animation),style:{animationDelay:"".concat(a.delay,"s")}},i.a.createElement("p",null,"Test your knowledge in a quiz on facts that no ",i.a.createElement("em",null,"normal people")," would know about."),i.a.createElement(E,{onClick:this.handleStart},"Start Game!")),i.a.createElement(w,{className:"animated ".concat(o.animation),style:{animationDelay:"".concat(o.delay,"s")}}),i.a.createElement(k,{isVisible:this.props.isLoading})))}}]),t}(i.a.Component),S=(n(34),n(35),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.animation,n=e.delay,a=e.text,o=e.type,r=e.onClick,s="question"===o?"p":"li";return i.a.createElement(s,{className:"card animated ".concat(t," card-").concat(o),style:{animationDelay:"".concat(n,"s")}},"question"===o?i.a.createElement("span",null,a):i.a.createElement("button",{onClick:function(){return r(a)}},i.a.createElement("span",null,a)))}}]),t}(i.a.Component));function C(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{container:{animation:t?"":e?"fadeIn":"fadeOut",delay:.5},main:{animation:e?"bounceInUp":"bounceOutUp",delay:t?0:e?1:0},content:{animation:e?"fadeInUp":"fadeOut",delay:t?e?.2:0:e?1.2:0}}}var A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state=Object(s.a)({q:e.q},C(e.isVisible)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.q>e.q&&this.setState(Object(s.a)({},C(!1,this.props.q<this.context.questions.length)),(function(){t.props.q<t.context.questions.length&&setTimeout((function(){t.setState(Object(s.a)({},C(!0,!0),{q:t.props.q}),(function(){return t.refs.list.scrollLeft=0}))}),750)}))}},{key:"componentDidMount",value:function(){var e=this;if(!this.context.demoCompleted){var t=this.refs.list,n=0,a=!1;setTimeout((function(){var i=setInterval((function(){t.scrollLeft=n,!1===a?n<t.scrollWidth?n+=10:a=!0:n>0?n-=10:(n=0,clearInterval(i),e.context.onDemoCompleted())}),8)}),2e3)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.container,a=t.main,o=t.content,r=t.q,s=this.context,c=s.questions,l=s.score,u=c[r]||c[c.length-1],m=0;return i.a.createElement("section",{className:"quiz animated ".concat(n.animation),style:{animationDelay:"".concat(n.delay,"s")}},i.a.createElement("div",{className:"wrapper"},i.a.createElement("header",null,i.a.createElement("div",{className:"info"},i.a.createElement("p",null,"Question:"),i.a.createElement("p",{className:"number"},r+1,i.a.createElement("span",null,"/",c.length))),i.a.createElement("div",{className:"score"},i.a.createElement("p",null,"Score:"),i.a.createElement("p",{className:"number"},l))),i.a.createElement("article",null,i.a.createElement(S,{animation:a.animation,type:"question",delay:a.delay,text:u.question}),i.a.createElement("ul",{ref:"list"},u.answers.map((function(t){return m++,i.a.createElement(S,{key:m,animation:o.animation,type:"answer",delay:o.delay+.15*m,text:t,onClick:e.context.onAnswer})}))))))}}]),t}(i.a.Component);A.contextType=h;var D=A,V=(n(36),{remark:{correct:["Good Job!","Go You!","Noice!","Sweeeet!","Epic!"],wrong:["Wrong!","Nope!","Incorrect!","Wut?","Yeah, no."]},result:{perfect:["You should be very proud of yourself. Nobody else is.","You must have been studying... weirdo.","Congratu-fricking-lations, nerd.","Maybe your parents will love you now."],good:["You could've done better... if you were smarter.","Now go out and celebrate your mediocrity. Or don't. COVID-19.","You'll receive your certificate in the mail in about 41 years.","Good job, you're smarter than a cat."],bad:["We're praying for your brain. We hope you find it someday.","What's the opposite of high scores again?","You tried so hard, but you still suck.","hmbvkjbkjxnjkdncjkdsnkcjndsjkvn."],terrible:["People that actually live under rocks have got better scores.","That was a joke or a test run... right?","A new personal worst. Oh, wait.","..."]}});var x={random:function(e){var t;if("remark"===e){var n=arguments.length<=1?void 0:arguments[1];t=n?"correct":"wrong"}else{var a=arguments.length<=1?void 0:arguments[1],i=arguments.length<=2?void 0:arguments[2],o=a/i;t=1===o?"perfect":o>=.7?"good":o>0?"bad":"terrible"}var r=V[e][t],s=Math.floor(Math.random()*r.length);return r[s]}};function I(e){return{container:{animation:e?"fadeIn":"fadeOut"},content:{animation:e?"zoomIn":"zoomOut"}}}var z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){n.setState(Object(s.a)({},I(!1)),n.props.onClose)},n.state=Object(s.a)({},I(e.isVisible)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.context,t=e.questions,n=e.questionNumber,a=e.selectedAnswer,i=t[n]||t[t.length-1],o=a===i.answers[i.correctAnswer],r=x.random("remark",o);this.setState({remark:r})}},{key:"componentDidUpdate",value:function(e){if(e.isVisible!==this.props.isVisible){var t=this.props.isVisible;this.setState(Object(s.a)({},I(t)))}}},{key:"render",value:function(){var e=this.state,t=e.container,n=e.content,a=this.context,o=a.questions,r=a.questionNumber,s=a.selectedAnswer,c=o[r]||o[o.length-1],l=c.answers[c.correctAnswer],u=s===l,m=c.question.split("_____"),d=i.a.createElement(i.a.Fragment,null,m[0],i.a.createElement("span",{className:"correct"},l.toLowerCase()),m[1]),h=i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement("br",null),"You selected: ",i.a.createElement("span",{className:"wrong"},s));return i.a.createElement("div",{className:"overlay animated ".concat(t.animation)},i.a.createElement("article",{className:"animated ".concat(n.animation)},i.a.createElement("h2",null,this.state.remark),i.a.createElement("p",null,d,u?"":h),i.a.createElement(E,{type:"btn-small btn-alt",onClick:this.handleClose},r<o.length-1?"Next Question!":"See Results!")))}}]),t}(i.a.Component);z.contextType=h;var U=z;n(37);function W(e){return{container:{animation:e?"fadeIn":"nothing",delay:e?.75:1},header:{animation:e?"bounceInDown":"",delay:e?1:0},content:{animation:e?"fadeIn":"fadeOut",delay:e?2:0},footer:{animation:e?"fadeIn":"",delay:e?2:0}}}var P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handlePlayAgain=function(){n.setState(Object(s.a)({},W(!1)),(function(){return setTimeout(n.props.onPlayAgain,500)}))},n.state=Object(s.a)({},W(e.isVisible)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=x.random("result",this.context.score,this.context.questions.length);this.setState({result:e})}},{key:"componentDidUpdate",value:function(e){if(e.isVisible!==this.props.isVisible)return W(e.isVisible)}},{key:"render",value:function(){var e=this.state,t=e.container,n=e.header,a=e.content,o=e.footer;return i.a.createElement("section",{className:"results animated ".concat(t.animation),style:{animationDelay:"".concat(t.delay,"s")}},i.a.createElement("div",{className:"wrapper"},i.a.createElement(O,{className:"animated ".concat(n.animation),style:{animationDelay:"".concat(n.delay,"s")}}),i.a.createElement("article",{className:"animated ".concat(a.animation),style:{animationDelay:"".concat(a.delay,"s")}},i.a.createElement("div",null,i.a.createElement("h2",null,"Your Score"),i.a.createElement("p",{className:"score"},this.context.score,i.a.createElement("span",null,"/",this.context.questions.length)),i.a.createElement("p",{className:"description"},this.state.result)),i.a.createElement(E,{onClick:this.handlePlayAgain},"Play Again!")),i.a.createElement(w,{className:"animated ".concat(o.animation),style:{animationDelay:"".concat(o.delay,"s")}})))}}]),t}(i.a.Component);P.contextType=h;var R=P,T=p(N),M=p(D),Y=p(U),L=p(R),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleStart=function(){return e.state.questions.length?(e.setState({quizStarted:!0}),!0):(alert("Something went wrong. Please try again later"),!1)},e.handleAnswer=function(t){var n=e.state,a=n.questions,i=n.questionNumber,o=n.score,r=a[i],s=r.answers[r.correctAnswer];e.setState({selectedAnswer:t}),t===s&&e.setState({score:o+1})},e.handleDemoCompleted=function(){e.setState({demoCompleted:!0})},e.handleClose=function(){var t=e.state.questionNumber;e.setState({selectedAnswer:null,questionNumber:t+1})},e.handlePlayAgain=function(){e.setState({quizStarted:!1,questionNumber:0,selectedAnswer:null,score:0,questions:b(e.state.questions),startingOver:!0})},g.a.initializeApp(y),e.state={quizStarted:!1,questionNumber:0,selectedAnswer:null,score:0,questions:[],demoCompleted:!1,startingOver:!1,loading:!0,appVersion:"1.0.1"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getQuestions",value:function(){var e=this,t=g.a.firestore(),n=[];t.collection("questionss").get().then((function(e){e.docs.forEach((function(e){n[e.id]=e.data(),n[e.id].answers=[],t.collection("answers").doc(e.id).get().then((function(t){var a=t.data();Object.keys(a).forEach((function(t){n[e.id].answers[t]=a[t]}))}))}))})).then((function(){e.setState({questions:b(n),loading:!1})})).catch((function(e){alert("Something went wrong. Please try again later.")}))}},{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"render",value:function(){var e=Object(s.a)({},this.state,{onAnswer:this.handleAnswer,onDemoCompleted:this.handleDemoCompleted}),t=this.state,n=t.quizStarted,a=t.questionNumber,o=t.questions,r=t.selectedAnswer,c=t.startingOver,l=t.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.Provider,{value:e},i.a.createElement(T,{isVisible:!n,startingOver:c,isLoading:l,onStart:this.handleStart}),i.a.createElement(M,{isVisible:n&&a<o.length,q:a}),i.a.createElement(Y,{isVisible:a<o.length&&r,onClose:this.handleClose}),i.a.createElement(L,{isVisible:n&&a>=o.length,onPlayAgain:this.handlePlayAgain})))}}]),t}(i.a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quiz-against-humanity",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/quiz-against-humanity","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.383bfbad.chunk.js.map