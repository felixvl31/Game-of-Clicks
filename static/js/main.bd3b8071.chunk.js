(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"./assets/characters/Arya.jpg",clicked:!1},{id:2,image:"./assets/characters/Bran.jpg",clicked:!1},{id:3,image:"./assets/characters/Cersei.jpg",clicked:!1},{id:4,image:"./assets/characters/Daenerys.jpg",clicked:!1},{id:5,image:"./assets/characters/Jaime.jpg",clicked:!1},{id:6,image:"./assets/characters/Jon.jpg",clicked:!1},{id:7,image:"./assets/characters/NightKing.jpg",clicked:!1},{id:8,image:"./assets/characters/Sam.jpg",clicked:!1},{id:9,image:"./assets/characters/Sansa.jpg",clicked:!1},{id:10,image:"./assets/characters/Tyrion.jpg",clicked:!1},{id:11,image:"./assets/characters/Brienne.jpg",clicked:!1},{id:12,image:"./assets/characters/Euron.jpg",clicked:!1},{id:13,image:"./assets/characters/Hound.jpg",clicked:!1},{id:14,image:"./assets/characters/Missandei.jpg",clicked:!1},{id:15,image:"./assets/characters/Varys.jpg",clicked:!1},{id:16,image:"./assets/characters/Davos.jpg",clicked:!1}]},function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(8),s=t.n(n),i=(t(16),t(6)),o=t(1),l=t(2),m=t(4),u=t(3),h=t(5),d=(t(17),function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={status:"",animation:!1},t.renderStatus=function(){return"right"===t.state.status?"Correct!":"wrong"===t.state.status?"You missed!":"Click on character to save...!"},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=this,t=e.score,c=e.topScore,r={animation:!0};r.status=0===t&&0===c?"":0===t&&c>0?"wrong":"right",this.setState(r,function(){return setTimeout(function(){return a.setState({animation:!1})},500)})}},{key:"render",value:function(){return r.a.createElement("li",{className:"message ".concat(this.state.animation?this.state.status:"")},this.renderStatus())}}]),a}(r.a.Component)),g=(t(18),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand justify-content-between"},r.a.createElement("a",{className:"nav-brand",href:"/"},"Game of Clicks"),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},"Points: ",e.score," | Top Score: ",e.topScore)),r.a.createElement(d,{score:e.score,topScore:e.topScore})),r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Click Game!"),r.a.createElement("h2",null,"Click on an character to save,",r.a.createElement("br",null)," if you click twice on the same character...Game Over!!")))}),f=(t(19),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},e.children)),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},"Game of Clicks")))}),p=(t(20),function(e){return r.a.createElement("div",{className:"col-6 col-lg-3 "},r.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"item ".concat(e.shake?"shake":"")}))}),k=t(9),v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={Characters:k,score:0,topScore:0},t.shuffleCharacters=function(e){for(var a=0;a<e.length-1;a++){var t=a+Math.floor(Math.random()*(e.length-a)),c=e[t];e[t]=e[a],e[a]=c}return e},t.resetCharacters=function(e){var a=e.map(function(e){return Object(i.a)({},e,{clicked:!1})});return t.shuffleCharacters(a)},t.handleRight=function(e){var a=t.state.score+1,c=a>t.state.topScore?a:t.state.topScore;t.setState({Characters:t.shuffleCharacters(e),score:a,topScore:c})},t.handleWrong=function(e){t.setState({Characters:t.resetCharacters(e),score:0})},t.handleClick=function(e){var a=!1,c=t.state.Characters.map(function(t){var c=Object(i.a)({},t);return c.id!==e||c.clicked||(c.clicked=!0,a=!0),c});a?t.handleRight(c):t.handleWrong(c)},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(f,null,this.state.Characters.map(function(a){return r.a.createElement(p,{key:a.id,id:a.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleClick,image:a.image})})))}}]),a}(r.a.Component),j=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.bd3b8071.chunk.js.map