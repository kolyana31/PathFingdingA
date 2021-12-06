import{R as S}from"./vendor.d4e1d999.js";const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerpolicy&&(s.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?s.credentials="include":d.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(d){if(d.ep)return;d.ep=!0;const s=o(d);fetch(d.href,s)}};p();function A(e){let t=0,o=0,i=0,d=0;e.onmousedown=s;function s(c){document.dragMenu=!0,c=c||window.event,c.preventDefault(),i=c.clientX,d=c.clientY,document.onmouseup=n,document.onmousemove=r}function r(c){c=c||window.event,c.preventDefault(),t=i-c.clientX,o=d-c.clientY,i=c.clientX,d=c.clientY,e.offsetLeft+e.offsetWidth<=document.documentElement.clientWidth-10?e.style.left=e.offsetLeft-t+"px":e.offsetLeft+e.offsetWidth>=document.documentElement.clientWidth-10&&(e.style.left=document.documentElement.clientWidth-e.offsetWidth-20+"px",n()),e.offsetLeft<=0&&(e.style.left=20+"px",n()),e.offsetTop+e.offsetHeight<=document.documentElement.clientHeight-10?e.style.top=e.offsetTop-o+"px":e.offsetTop+e.offsetHeight>=document.documentElement.clientHeight-10&&(e.style.top=document.documentElement.clientHeight-e.offsetHeight-20+"px",n()),e.offsetTop<=0&&(e.style.top=20+"px",n())}function n(){document.onmouseup=null,document.onmousemove=null,document.dragMenu=!1}}function x(e,t){return(Math.abs(e.x-t.x)+Math.abs(e.y-t.y))*document.GridStep}function w(e,t){let o=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.sqrt(o*o+i*i)*document.GridStep}function E(e,t){let o=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return(o*o+i*i)*document.GridStep}const y=()=>{document.SearchMode?(document.getElementById("SearchStarter").removeAttribute("disabled"),document.getElementById("ClearWalls").removeAttribute("disabled"),document.getElementById("Pause").setAttribute("disabled",!0),Array.from(document.querySelectorAll('input[name="methods"]')).forEach(e=>{e.removeAttribute("disabled")}),document.SearchMode=!1,document.SearchPause=!1):(document.getElementById("ClearWalls").setAttribute("disabled",!0),document.getElementById("SearchStarter").setAttribute("disabled",!0),document.getElementById("Pause").removeAttribute("disabled"),Array.from(document.querySelectorAll('input[name="methods"]')).forEach(e=>{e.setAttribute("disabled",!0)}),document.SearchMode=!0)},h=()=>{document.resultPath.remove(),document.GridArr.forEach(e=>{e.forEach(t=>{t.startPoint==!1&&(t.parent=null,t.weight=0,t.aprocDist,t.move=0,t.show())})})},M=function(e,t){return e>=0&&e<document.PossWAmount&&t>=0&&t<document.PossHAmount},a=function(e,t){return M(e,t)&&!document.GridArr[t][e].wall&&!document.GridArr[t][e].startPoint},b=function(e){var t=e.x,o=e.y,i=[];return a(t,o-1)&&i.push(document.GridArr[o-1][t]),a(t+1,o)&&i.push(document.GridArr[o][t+1]),a(t,o+1)&&i.push(document.GridArr[o+1][t]),a(t-1,o)&&i.push(document.GridArr[o][t-1]),document.AllowDiagonale&&(a(t-1,o-1)&&(a(t-1,o)||a(t,o-1))&&i.push(document.GridArr[o-1][t-1]),a(t+1,o-1)&&(a(t+1,o)||a(t,o-1))&&i.push(document.GridArr[o-1][t+1]),a(t+1,o+1)&&(a(t+1,o)||a(t,o+1))&&i.push(document.GridArr[o+1][t+1]),a(t-1,o+1)&&(a(t-1,o)||a(t,o+1))&&i.push(document.GridArr[o+1][t-1])),i};class P{constructor(t,o,i,d,s=!1,r){this.x=t,this.y=o,this.center={x:t*r+r/2,y:o*r+r/2},this.rect=i,this.startPoint=!1,this.endPoint=!1,this.wall=d==null?s:!1,this.parent=null,d&&(this.weight=0,this.aprocDist,this.move=0,this.parent=NaN),d!==null&&(this.startPoint=d,this.endPoint=!d),this.rect.mouseover(()=>{!document.SearchMode&&document.mouseDown&&!document.dragMenu&&document.setWallsMode!=this.wall&&!(this.startPoint||this.endPoint)&&!(document.dragStartPointMode||document.dragEndPointMode)?(this.rect.animate({transform:"s1.2"},100,()=>{this.rect.animate({transform:"s1"},100)}),this.wall=!this.wall,this.show()):document.dragStartPointMode?!this.wall&&this.endPoint!==!0&&!(document.startPoint.x==this.x&&document.startPoint.y==this.y)&&(this.startPoint=!0,document.GridArr[document.startPoint.y][document.startPoint.x].startPoint=!1,document.GridArr[document.startPoint.y][document.startPoint.x].show(),document.startPoint={x:this.x,y:this.y},this.show()):document.dragEndPointMode&&!this.wall&&this.startPoint!==!0&&!(document.endPoint.x==this.x&&document.endPoint.y==this.y)&&(this.endPoint=!0,document.GridArr[document.endPoint.y][document.endPoint.x].endPoint=!1,document.GridArr[document.endPoint.y][document.endPoint.x].show(),document.endPoint={x:this.x,y:this.y},this.show())}),this.rect.mousedown(()=>{document.SearchMode||(document.SearchTry&&(document.SearchTry=!1,h(),document.getElementById("SearchResults").innerHTML='<i style="color: lightgreen;">Start Search to get results</i>'),this.startPoint||this.endPoint?this.startPoint?(document.dragStartPointMode=!0,document.startPoint={x:t,y:o}):this.endPoint&&(document.dragEndPointMode=!0,document.endPoint={x:t,y:o}):(this.rect.animate({transform:"s1.2"},100,()=>{this.rect.animate({transform:"s1"},100)}),this.wall=!this.wall,document.setWallsMode=this.wall,this.show()))}),this.show()}show(t=!1,o=!1){this.startPoint?(this.weight=0,this.aprocDist,this.move=0,this.parent=NaN,this.rect.attr({fill:"greenyellow",stroke:"#000",opacity:1,"stroke-width":1})):this.endPoint?this.rect.attr({fill:"tomato",stroke:"#000",opacity:1,"stroke-width":1}):this.rect.attr({fill:"whitesmoke",stroke:"black",opacity:.3,"stroke-width":.5}),t==!0&&!(this.startPoint||this.endPoint)&&this.rect.attr({fill:"yellow",stroke:"black",opacity:.3,"stroke-width":.5}),o==!0&&!(this.startPoint||this.endPoint)&&this.rect.attr({fill:"blue",stroke:"black",opacity:.3,"stroke-width":.5}),this.wall&&this.rect.attr({fill:"black",opacity:.3})}}const v={1:x,2:w,3:E};let m=S(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight-1),u=30;document.PossWAmount=document.documentElement.clientWidth/u;document.PossHAmount=document.documentElement.clientHeight/u;document.resultPath=m.path();document.GridArr=[];for(let e=0;e<document.PossHAmount;e++){let t=[];for(let o=0;o<document.PossWAmount;o++){let i;e==Math.floor(document.PossHAmount/2)&&o==Math.floor(document.PossWAmount/2.5)&&!document.StartPoint?(i=new P(o,e,m.rect(o*u,e*u,u,u),!0,!1,u),document.startPoint={x:o,y:e}):e==Math.floor(document.PossHAmount/2)&&o==Math.floor(document.PossWAmount/1.5)&&!document.EndPoint?(i=new P(o,e,m.rect(o*u,e*u,u,u),!1,!1,u),document.endPoint={x:o,y:e}):i=new P(o,e,m.rect(o*u,e*u,u,u),null,Math.random()<0,u),t.push(i)}document.GridArr.push(t)}const G=()=>{let e=[document.GridArr[document.startPoint.y][document.startPoint.x]],t=[],o=!1,i=0;document.SearchResults={},document.getElementById("SearchResults").innerHTML='<i style="color: orange;">Processing...</i>';let d=setInterval(()=>{if(document.SearchCanceled){clearInterval(d),y(),document.SearchCanceled=!1;return}if(document.SearchPause)return;if(e.length==0||o){o?document.getElementById("SearchResults").innerHTML=`<i style="color: lightgreen;">
                        Step weight Hor/Ver: ${document.GridStep} <br>
                        Step weight Diag: ${(document.GridStep*Math.SQRT2).toFixed(2)} <br>
                        Iterations: ${i} <br>
                        Steps: ${document.SearchResults.steps} <br>
                        Path Weight: ${document.SearchResults.pathLength.toFixed(2)} <br>
                    </i>`:(document.SearchResults=null,document.getElementById("SearchResults").innerHTML='<i style="color: tomato;">Can`t find path</i>'),clearInterval(d),y();return}let s=e.reduce(function(n,c){return n.weight<c.weight?n:c});if(s.x==document.endPoint.x&&s.y==document.endPoint.y){let n=document.GridArr[s.y][s.x];document.SearchResults.steps=0,document.SearchResults.pathLength=n.move;let c=`M${n.center.x} ${n.center.y}`;for(;n==null?void 0:n.parent;)document.SearchResults.steps++,c+=`L${n.center.x} ${n.center.y}M${n.center.x} ${n.center.y}`,n=n.parent;c+=`L${n.center.x} ${n.center.y}`,document.resultPath=m.path(c),o=!0;return}i++,e=e.filter(n=>!(n.x==s.x&&n.y==s.y)),t.push(s);let r=b(s);for(let n=0;n<r.length;n++){if(t.find(l=>l.x==r[n].x&&l.y==r[n].y))continue;let f=!1,g=s.move+(document.GridArr[r[n].y][r[n].x].x-s.x==0||document.GridArr[r[n].y][r[n].x].y-s.y==0?document.GridStep:Math.SQRT2);e.findIndex(l=>l.x==r[n].x&&l.y==r[n].y)===-1?(f=!0,e.push(document.GridArr[r[n].y][r[n].x])):g<document.GridArr[r[n].y][r[n].x].move&&(f=!0),f&&(document.GridArr[r[n].y][r[n].x].parent=s,document.GridArr[r[n].y][r[n].x].move=g,document.GridArr[r[n].y][r[n].x].aprocDist=v[document.Method](document.GridArr[r[n].y][r[n].x],document.endPoint),document.GridArr[r[n].y][r[n].x].weight=document.GridArr[r[n].y][r[n].x].move+document.GridArr[r[n].y][r[n].x].aprocDist)}e.forEach((n,c)=>{document.GridArr[n.y][n.x].show(!0)})},30)};A(document.getElementById("detachedMenu"));document.mouseDown=!1;document.GridStep=1;document.Method=document.querySelector('input[name="methods"]:checked').value;document.SearchMode=!1;document.SearchTry=!1;document.AllowDiagonale=!0;document.SearchPause=!1;document.SearchResults={};document.getElementById("AllowDiagonale").addEventListener("change",({target:e})=>{document.AllowDiagonale=e.checked});document.addEventListener("mousedown",()=>{document.mouseDown=!0});document.addEventListener("mouseup",()=>{document.mouseDown=!1,document.dragStartPointMode=!1,document.dragEndPointMode=!1});document.getElementById("MethodsForm").addEventListener("change",({target:e})=>{document.Method=e.value});document.getElementById("ClearWalls").addEventListener("click",()=>{document.SearchPause?(document.SearchPause=!1,document.SearchCanceled=!0,h(),document.getElementById("ClearWalls").innerText=document.SearchPause?"Cancel Search":"Clear Field"):(h(),document.GridArr.forEach(e=>{e.forEach(t=>{t.wall=!1,t.show()})})),document.getElementById("SearchResults").innerHTML='<i style="color: lightgreen;">Start Search to get results</i>'});document.getElementById("Pause").addEventListener("click",({target:e})=>{document.SearchPause=!document.SearchPause,e.innerText=document.SearchPause?"Resume Search":"Pause Search",document.getElementById("ClearWalls").innerText=document.SearchPause?"Cancel Search":"Clear Field",document.SearchPause&&document.SearchMode?document.getElementById("ClearWalls").removeAttribute("disabled"):document.SearchMode&&document.getElementById("ClearWalls").setAttribute("disabled",!0)});document.getElementById("SearchStarter").addEventListener("click",()=>{document.SearchMode||(document.SearchTry=!0,y(),h(),G())});
