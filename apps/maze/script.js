let start=null,end=null,cells=[],path=[];function handleCellClick(e,t){if(start)if(end){for(let[e,t]of path)cells[e][t].classList.remove("path");cells[start.row][start.col].classList.remove("start"),cells[end.row][end.col].classList.remove("end"),start={row:e,col:t},cells[e][t].classList.add("start"),end=null}else{if(e==start.row&&t==start.col)throw new Error("Start and end at same place");end={row:e,col:t},cells[e][t].classList.add("end")}else start={row:e,col:t},cells[e][t].classList.add("start")}function buildMaze(){start=null,end=null,cells=[],path=[];const e=parseInt(document.getElementById("height").value),t=parseInt(document.getElementById("width").value);let l=document.getElementById("maze");l.style.gridTemplateRows=`repeat(${e}, 25px)`,l.style.gridTemplateColumns=`repeat(${t}, 25px)`,l.innerHTML="";let s=Array.from({length:t},((e,t)=>t)),a=t;for(let d=0;d<e;d++){cells[d]=[];
// horizontal wall
for(let e=0;e<t;e++){let a=document.createElement("div");if(a.className="cell",a.dataset.row=d,a.dataset.col=e,a.dataset.type=0,a.addEventListener("click",(()=>handleCellClick(d,e))),e==t-1);else if(s[e]!=s[e+1]&&Math.random()>.5){
// no horizontal wall
const l=s[e],a=s[e+1];for(let e=0;e<t;e++)s[e]==a&&(s[e]=l)}else
// have horizontal wall
a.dataset.type|=1,a.classList.add("one");l.appendChild(a),cells[d].push(a)}
// last row
if(d==e-1){for(let e=0;e<t-1;e++)if(s[e]!=s[e+1]){const l=s[e],a=s[e+1];for(let e=0;e<t;e++)s[e]==a&&(s[e]=l);cells[d][e].dataset.type&=-2,cells[d][e].classList.remove("one")}break}
// vertical wall
let n=s.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{});for(let e=0;e<t;e++)n[s[e]]>1&&Math.random()<.5&&(n[s[e]]--,cells[d][e].dataset.type|=2,cells[d][e].classList.add("two"),s[e]=a,a++)}}document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("height").value=Math.floor((window.innerHeight-180)/26),document.getElementById("width").value=Math.floor(window.innerWidth/26),buildMaze()}));