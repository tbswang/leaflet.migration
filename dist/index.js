!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueGis3DBridge=e():t.VueGis3DBridge=e()}(window,function(){return function(r){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=r,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=4)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FACTOR=1.5,e.MIN_ZOOM=3},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateColor=function(t,e){if(!t)return;if(0!==t.indexOf("#"))return(/^rgb\(/.test(t)?t.replace(/rgb/,"rgba").replace(")",","):t.split(",").splice(0,3).join(","))+", "+e+")";var r=t.slice(1),n=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4),16);return"rgba("+n+", "+i+", "+o+", "+e+")"},e.getDistance=function(t,e){var r=function(t){return t*t};return Math.sqrt(r(t)+r(e))},e.getLineCenter=function(t,e){var r=(t+e)/2;return(t-e)*n.FACTOR+r},e.extend=function(t,r){var n=void 0,i=void 0;return t.forEach(function(t){var e=r(t);void 0===n?n=i=e:(e<n&&(n=e),i<e&&(i=e))}),[n,i]};var n=r(0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}();var i=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.style=t.style,this.color=t.color,this.size=t.size,this.borderWidth=t.borderWidth,this.borderColor=t.borderColor}return n(e,[{key:"draw",value:function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),Object.assign(t,{lineWidth:this.borderWidth||0,strokeStyle:this.borderColor||"#000",fillStyle:this.color||"#000"}),t.beginPath(),"circle"===this.style?t.arc(0,0,this.size,0,2*Math.PI,!1):"arrow"===this.style&&(t.moveTo(-this.size,-this.size),t.lineTo(this.size,0),t.lineTo(-this.size,this.size),t.lineTo(-this.size/4,0),t.lineTo(-this.size,-this.size)),t.closePath(),t.stroke(),t.fill(),t.restore()}}]),e}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),b=r(0),g=r(1);var i=function(){function y(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y);var e=t.startX,r=t.startY,n=t.endX,i=t.endY,o=t.width,a=t.color,s=void 0===a?"#fff":a,l=(0,g.getDistance)(e-n,r-i),u=(e+n)/2,c=(r+i)/2,h=(r-i)*b.FACTOR+u,f=(n-e)*b.FACTOR+c,d=(0,g.getDistance)(l/2,l*b.FACTOR),p=Math.atan2(r-f,e-h),v=Math.atan2(i-f,n-h);Object.assign(this,{startX:e,startY:r,endX:n,endY:i,centerX:h,centerY:f,startAngle:p,endAngle:v,radius:d,color:s,lineWidth:o||1})}return n(y,[{key:"draw",value:function(){}}]),y}();e.default=i},function(t,e,r){"use strict";var n,a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(5),o=(n=i)&&n.__esModule?n:{default:n},s=r(0);L.MigrationLayer=L.Class.extend({options:{map:{},data:{},pulseRadius:25,pulseBorderWidth:3,arcWidth:1,arcLabel:!0,arcLabelFont:"15px sans-serif",Marker:{},Spark:{}},initialize:function(t){var e=t.map,r=void 0===e?{}:e,n=t.data,i=void 0===n?{}:n,o=t.style,a=o.pulse,s=o.arc;Object.assign(this,{_map:r,_data:i,_style:{pulse:l({},a),arc:l({},s)}}),this._show=!0,this._init()},_init:function(){var t=L.DomUtil.create("div","leaflet-ODLayer-container");t.style.position="absolute";var e=this._map.getSize(),r=e.x,n=e.y;if(t.style.width=r+"px",t.style.height=n+"px",this.container=t,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),t.appendChild(this.canvas),this.popover=this._getPopver(),t.appendChild(this.popover),this._map.getPanes().overlayPane.appendChild(t),!this.migration){var i=this._convertData();this.migration=new o.default({data:i,context:this.context,container:t,map:this._map,popover:this.popover,style:this._style})}},_getPopver:function(){var t=document.createElement("div");return Object.assign(t.style,{position:"absolute",zIndex:"11",left:0,top:0,border:"1px solid grey",display:"none",background:"rgba(255,255,255,.3)",borderRadius:"5px",padding:"8px 16px"}),t},_resize:function(){var t=this._map.getBounds().getNorthWest(),e=this._map.latLngToContainerPoint(t).y;this.container.style.top=0<e?-e+"px":"0px";var r=window.getComputedStyle(this._map.getContainer());this.canvas.setAttribute("width",parseInt(r.width,10)),this.canvas.setAttribute("height",parseInt(r.height,10))},_convertData:function(){var o=this._map,t=this._data,e=o.getBounds();if(t&&e){var i=function(t){var e=a(t,2),r=e[0],n=e[1],i=o.latLngToContainerPoint(new L.LatLng(n,r));return[i.x,i.y]};return t.map(function(t){var e=t.from,r=t.to,n=function(t,e){var r={};for(var n in t)0<=e.indexOf(n)||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["from","to"]);return l({from:i(e),to:i(r)},n)})}},_bindMapEvents:function(){var e=this;this._map.on("moveend",function(t){t.target.getZoom()<s.MIN_ZOOM?e.hide():(e._show||e.show(),e.migration.play(),e._draw())}),this._map.on("zoomstart ",function(){e.container.style.display="none"}),this._map.on("zoomend",function(){e._show&&(e.container.style.display="",e._draw())})},_draw:function(){if(this._map.getBounds()&&this.migration.playAnimation){this._resize(),this._transform();var t=this._convertData();this.migration.updateData(t),this.migration.start(this.canvas)}},_transform:function(){var t=this._map.getBounds(),e=this._map.latLngToLayerPoint(t.getNorthWest());L.DomUtil.setPosition(this.container,e)},addTo:function(){if(this._bindMapEvents(),this._map.getBounds()&&this.migration.playAnimation){this._resize(),this._transform();var t=this._convertData();this.migration.updateData(t),this.migration.start(this.canvas)}return this},setData:function(t){this._data=t,this._draw()},hide:function(){this.container.style.display="none",this._show=!1},show:function(){this.container.style.display="",this._show=!0},play:function(){this.migration.play()},pause:function(){this.migration.pause()},destroy:function(){this.migration.clear(),this.container.parentNode.removeChild(this.container),this._map.clearAllEventListeners(),this.mapHandles=[]}}),L.migrationLayer=function(t){return new L.MigrationLayer(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),m=a(r(2)),w=a(r(6)),_=a(r(7)),O=a(r(8)),o=r(1);function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,n({},t,{playAnimation:!0,started:!1,store:{arcs:[],markers:[],pulses:[],sparks:[]}})),this.updateData(t.data)}return i(e,[{key:"updateData",value:function(t){var c=this;if(t&&0!==t.length){this.clear(),this.data=t;var e=this.style,r=e.arc,h=r.label,f=r.font,d=r.width,n=e.pulse,p=n.radius,v=n.borderWidth,y=(0,o.extend)(t,function(t){return t.value});if(t&&0<t.length){var b=this.container,g=this.popover;t.forEach(function(t){var e=t.from,r=t.to,n=t.labels,i=t.color,o=t.value,a=new w.default({startX:e[0],startY:e[1],endX:r[0],endY:r[1],labels:n,label:h,font:f,width:d,color:i}),s=new m.default({x:r[0],y:r[1],rotation:a.endAngle+Math.PI/2,style:"arrow",color:i,size:4,borderWidth:0,borderColor:i}),l=new _.default({x:r[0],y:r[1],dataRange:y,radius:p,zoom:c.map.getZoom(),color:i,borderWidth:v,container:b,popover:g,value:o,labels:n}),u=new O.default({startX:e[0],startY:e[1],endX:r[0],endY:r[1],width:15,color:i});c.store.arcs.push(a),c.store.markers.push(s),c.store.pulses.push(l),c.store.sparks.push(u)})}}}},{key:"clear",value:function(){this.store.pulses.forEach(function(t){return t.clear()}),this.store={arcs:[],markers:[],pulses:[],sparks:[]},this.playAnimation=!0,this.started=!1,window.cancelAnimationFrame(this.requestAnimationId)}},{key:"start",value:function(t){var e=this,r=this.started,i=this.store,o=this.context,n=t.width,a=t.height;if(!r){!function t(){e.requestAnimationId=window.requestAnimationFrame(t),e.playAnimation&&(o.clearRect(0,0,n,a),Object.keys(i).forEach(function(t){var e=i[t];e.forEach(function(t){return t.draw(o)});for(var r=0,n=e.length;r<n;r++)e[r].draw(o)}))}(),this.started=!0}}},{key:"play",value:function(){this.playAnimation=!0}},{key:"pause",value:function(){this.playAnimation=!1}}]),e}();e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,l=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=r(3),a=(n=o)&&n.__esModule?n:{default:n};var s=function(t){function o(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t)),r=t.labels,n=t.font,i=t.label;return Object.assign(e,{font:n,label:i,labels:r}),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,a.default),i(o,[{key:"draw",value:function(t){if(t.save(),Object.assign(t,{lineWidth:this.lineWidth,strokeStyle:this.color,fillStyle:this.strokeStyle}),t.beginPath(),t.arc(this.centerX,this.centerY,this.radius,this.startAngle,this.endAngle,!1),t.stroke(),t.restore(),t.save(),this.label){var e=l(this.labels,2),r=e[0],n=e[1];if(Object.assign(t,{font:this.font}),r){var i=this.startX-15,o=this.startY+5;t.fillText(r,i,o)}if(n){var a=this.endX-15,s=this.endY-5;t.fillText(n,a,s)}}t.restore()}}]),o}();e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}();var s=[],i=function(){function d(t){var e=t.x,r=t.y,n=t.color,i=t.container,o=t.popover,a=t.value,s=t.labels,l=t.dataRange,u=t.zoom,c=t.radius;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d);var h=(c/2+a*c/p(l,2)[1])*u/6,f=3<h?h:3;Object.assign(this,{x:e,y:r,color:n,container:i,popover:o,value:a,labels:s,r:f,scale:1}),this.initDom()}return n(d,[{key:"clear",value:function(){s.push(this.pulse),this.pulse.removeEventListener("mouseover",this.showPopover.bind(this)),this.pulse.removeEventListener("mouseout",this.hidePopver.bind(this)),this.container.removeChild(this.pulse)}},{key:"initDom",value:function(){if(0<s.length){this.pulse=s.pop();var t=p(this.pulse.children,1);this.ring=t[0]}else this.pulse=document.createElement("div"),this.ring=document.createElement("div"),this.pulse.appendChild(this.ring);var e=this.x,r=this.y,n=this.r,i=this.color,o=this.pulse,a=this.ring;Object.assign(o.style,{position:"absolute",zIndex:"1",borderRadius:"50%",width:2*n+"px",height:2*n+"px",left:"-"+n+"px",top:"-"+n+"px",background:i,transform:"translate("+e+"px, "+r+"px)"}),Object.assign(a.style,{position:"absolute",borderRadius:"50%",width:2*n+"px",height:2*n+"px",left:"-1px",top:"-1px",border:"1px solid "+i}),this.container.appendChild(o),this.pulse.addEventListener("mouseover",this.showPopover.bind(this)),this.pulse.addEventListener("mouseout",this.hidePopver.bind(this))}},{key:"hidePopver",value:function(){Object.assign(this.popover.style,{display:"none"})}},{key:"showPopover",value:function(){var t=this.x,e=this.y,r=this.popover,n=this.value,i=this.labels;r.innerText=i[1]+": "+n,Object.assign(r.style,{display:"block",transform:"translate("+t+"px, "+e+"px)"})}},{key:"draw",value:function(){var t=this.scale;Object.assign(this.ring.style,{transform:"scale("+t+")"}),this.scale+=.02,2<t&&(this.scale=1)}}]),d}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),i=a(r(3)),o=a(r(2)),h=r(1);function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.tailPointsCount=50,e.factor=1/e.radius,e.deltaAngle=80/Math.min(e.radius,400)/e.tailPointsCount,e.trailAngle=e.startAngle,e.arcAngle=e.startAngle,e.marker=new o.default({x:50,y:80,rotation:50*Math.PI/180,style:"arrow",color:"rgb(255, 255, 255)",size:3,borderWidth:0,borderColor:e.color}),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,i.default),n(r,[{key:"drawArc",value:function(t,e,r,n,i){t.save(),Object.assign(t,{lineWidth:r,strokeStyle:e,shadowColor:e,lineCap:"round"}),t.beginPath(),t.arc(this.centerX,this.centerY,this.radius,n,i,!1),t.stroke(),t.restore()}},{key:"draw",value:function(t){var e=this.endAngle,r=this.trailAngle,n=this.factor,i=this.color,o=this.deltaAngle,a=r+n,s=(0,h.calculateColor)(i,.1);this.animateBlur&&(this.arcAngle=a),this.trailAngle=a,this.drawArc(t,s,this.lineWidth,this.startAngle,this.arcAngle);for(var l=this.tailPointsCount,u=0;u<l;u++){var c=(0,h.calculateColor)(i,.3-.3/l*u);r-o*u>this.startAngle&&this.drawArc(t,c,5-5/l*u,r-o*u,r)}t.save(),t.translate(this.centerX,this.centerY),this.marker.x=Math.cos(this.trailAngle)*this.radius,this.marker.y=Math.sin(this.trailAngle)*this.radius,this.marker.rotation=this.trailAngle+Math.PI/2,this.marker.draw(t),t.restore(),180*(e-this.trailAngle)/Math.PI<.5&&(this.trailAngle=this.startAngle,this.animateBlur=!1)}}]),r}();e.default=s}])});