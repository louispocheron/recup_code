"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{2310:(n,r,e)=>{e(6992),e(1539),e(8783),e(3948),e(285),e(1637),e(9554),e(4747);var t=e(130),u=e(5299),c=e(1401),o=document.querySelector(".benevolat-card"),a=document.querySelector(".remboursement-card"),i=document.querySelector(".heure-card"),f=document.querySelector(".dons-card"),l=new URL(window.location.href).pathname,s=[],p=[],d=[],h=[];console.log("xd"),window.onload=function(){axios.get(l+"ajax_endpoint").then((function(n){var r=n.data.data;if(r.length>=1){r.forEach((function(n){s.push(n.heuresValorisees),p.push(n.dons),d.push(n.aPayer),h.push(n.duree)}));var e=(0,u.l)(s);o.innerHTML=e+"€";var l=(0,c.A)(d);a.innerHTML=l+"€";var m=(0,t.F)(h);console.log(m),i.innerHTML=m;var v=(0,u.l)(p);f.innerHTML=v+"€"}else o.innerHTML="0€",a.innerHTML="0€",i.innerHTML="00h00",f.innerHTML="0€"})).catch((function(n){console.log(n)}))}},5299:(n,r,e)=>{e.d(r,{l:()=>t});e(9554),e(1539),e(4747),e(2772),e(1249),e(4916),e(3123),e(1058),e(5827),e(7327),e(2222);function t(n){if(n.length>1){n.forEach((function(r){if(null==r){var e=n.indexOf(r);-1!==e&&(n[e]="0")}}));var r,e=n.map((function(n){return n.split(".")[0]})),t=(e=e.map((function(n){return parseInt(n)}))).reduce((function(n,r){return n+r})),u=n.map((function(n){return n.split(".")[1]}));for(r=(u=(u=u.filter((function(n){return!isNaN(n)}))).map((function(n){return parseInt(n)}))).length>1?u.reduce((function(n,r){return n+r})):0;r>99;)t++,r-=100;var c="".concat(t,".").concat(r);return 0==r&&(c="".concat(t)),c}return 1==n.length&&null!=n[0]?n[0]:"0"}},130:(n,r,e)=>{e.d(r,{F:()=>t});e(9554),e(1539),e(4747),e(2772),e(1249),e(4916),e(3123),e(1058),e(5827),e(2222);function t(n){if(n.length>=1){n.forEach((function(r){if(0==r||null==r){var e=n.indexOf(r);-1!=e&&(n[e]="00h00")}}));for(var r=n.map((function(n){return n.split("h")[0]})),e=(r=r.map((function(n){return parseInt(n)}))).reduce((function(n,r){return n+r})),t=n.map((function(n){return n.split("h")[1].split("m")[0]})),u=(t=t.map((function(n){return parseInt(n)}))).reduce((function(n,r){return n+r}));u>59;)e++,u-=60;return u<10&&(u="0".concat(u)),"".concat(e,"h").concat(u)}if(1==n.length)return n[0]}},1401:(n,r,e)=>{e.d(r,{A:()=>t});e(9554),e(1539),e(4747),e(2772),e(1249),e(4916),e(3123),e(1058),e(5827),e(7327),e(2222);function t(n){if(n.length>1){n.forEach((function(r){if(""==r||null==r){var e=n.indexOf(r);-1!==e&&(n[e]="0")}}));var r=n.map((function(n){return n.split(".")[0]})),e=0;null!=(r=r.map((function(n){return parseInt(n)})))&&(e=r.reduce((function(n,r){return n+r})));var t=n.map((function(n){return n.split(".")[1]})),u=null;for(t.forEach((function(n){if(null==n){var r=t.indexOf(n);-1!==r&&(t[r]="0")}})),u=(t=(t=t.filter((function(n){return!isNaN(n)}))).map((function(n){return parseInt(n)}))).reduce((function(n,r){return n+r}));u>99;)e++,u-=10;return"".concat(e,".").concat(u)}return n[0]}}},n=>{n.O(0,[185,530,765,156],(()=>{return r=2310,n(n.s=r);var r}));n.O()}]);