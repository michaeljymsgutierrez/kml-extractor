(this["webpackJsonpkml-ext"]=this["webpackJsonpkml-ext"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),c=n.n(l),r=(n(9),n(1)),i=(n(10),function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),m=s[0],u=s[1];return Object(a.useEffect)((function(){var e=window.localStorage.getItem("gKey");e&&u(e)}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("span",{id:"forkongithub"},o.a.createElement("a",{href:"https://github.com/michaeljymsgutierrez/kml-extractor-source-code"},"Fork me on GitHub")),o.a.createElement("div",{className:"kml-file-picker"},o.a.createElement("input",{type:"file",onChange:function(e){return function(e){var t=e.target,n=new FileReader,a=[];t.files[0]&&(n.readAsText(t.files[0]),n.onload=function(){n.result.match(/(<coordinates)[\s\S]*(coordinates>)/g)[0].replace(/[\n '\*\/<>ac-einor-t]/g,"").trim().split(",0").forEach((function(e){var t=e.split(",");t[1]&&t[0]&&a.push([t[1],t[0]])})),c(a)})}(e)}})),o.a.createElement("div",{className:"kml-file-picker"},o.a.createElement("button",{onClick:function(){return function(){var e=prompt("Add Google API Key","");e&&(u(e),window.localStorage.setItem("gKey",e))}()}},"Add Google API Key"),"\xa0 \xa0 \xa0",o.a.createElement("button",{onClick:function(){return function(){if(m&&l.length>0){var e="https://maps.googleapis.com/maps/api/staticmap?size=1200x400&key=".concat(m,"&path=color:red%7C"),t=l.map((function(e){return"".concat(e[0],",").concat(e[1])})),n=l[0].join(),a="".concat(e).concat(t.join("|"),"|").concat(n);window.open(a,"_blank")}else 0===l.length?alert("Please Select KML file..."):null===m||""===m?alert("Please Add Google API Key..."):alert("Unknow error...")}()}},"Verify Coordinates")),o.a.createElement("div",{className:"kml-file-picker"},"GOOGLE KEY: ",m||" -- NO API KEY -- "),o.a.createElement("div",{className:"coordinates-table"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"LATITUDE"),o.a.createElement("th",null,"LONGITUDE"))),o.a.createElement("tbody",null,l.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]))})),0===l.length&&o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"2",className:"no-data"},"NO DATA TO SHOW"))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4df733ea.chunk.js.map