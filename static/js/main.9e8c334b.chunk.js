(this["webpackJsonpkml-ext"]=this["webpackJsonpkml-ext"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=(n(13),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),d=(n(14),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={kmlContent:null,coordinates:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getKmlData",value:function(e){var t=this,n=e.target,a=new FileReader,l=[];n.files[0]&&(a.readAsText(n.files[0]),a.onload=function(){t.setState({kmlContent:a.result}),t.state.kmlContent.match(/(<coordinates)[\s\S]*(coordinates>)/g)[0].replace(/[\n '\*\/<>ac-einor-t]/g,"").trim().split(",0").map((function(e){var t=e.split(",");t[1]&&t[0]&&l.push([t[1],t[0]])})),t.setState({coordinates:l})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("input",{type:"file",onChange:function(t){return e.getKmlData(t)}})),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"LATITUDE"),l.a.createElement("th",null,"LONGITUDE"))),l.a.createElement("tbody",null,this.state.coordinates.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]))})),0==this.state.coordinates.length&&l.a.createElement("tr",null,l.a.createElement("td",{colspan:"2",className:"no-data"},"NO DATA TO SHOW"))))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e8c334b.chunk.js.map