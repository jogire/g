/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v5.0.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],e):(t=t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r,a,l,c,u=function(t){do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},h=function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():null}return e},f=function(t){var e=h(t);return e&&document.querySelector(e)?e:null},d=function(t){var e=h(t);return e?document.querySelector(e):null},g=function(t){if(!t)return 0;var e=window.getComputedStyle(t),n=e.transitionDuration,i=e.transitionDelay,o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},p=function(t){t.dispatchEvent(new Event("transitionend"))},m=function(t){return(t[0]||t).nodeType},_=function(t,e){var n=!1,i=e+5;t.addEventListener("transitionend",(function e(){n=!0,t.removeEventListener("transitionend",e)})),setTimeout((function(){n||p(t)}),i)},v=function(t,e,n){Object.keys(n).forEach((function(i){var o,s=n[i],r=e[i],a=r&&m(r)?"element":null==(o=r)?""+o:{}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+s+'".')}))},b=function(t){if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){var e=getComputedStyle(t),n=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==n.display&&"hidden"!==e.visibility}return!1},y=function(){return function(){}},w=function(t){return t.offsetHeight},E=function(){var t=window.jQuery;return t&&!document.body.hasAttribute("data-no-jquery")?t:null},k=(r={},a=1,{set:function(t,e,n){void 0===t.key&&(t.key={key:e,id:a},a++),r[t.key.id]=n},get:function(t,e){if(!t||void 0===t.key)return null;var n=t.key;return n.key===e?r[n.id]:null},delete:function(t,e){if(void 0!==t.key){var n=t.key;n.key===e&&(delete r[n.id],delete t.key)}}}),T=function(t,e,n){k.set(t,e,n)},L=function(t,e){return k.get(t,e)},C=function(t,e){k.delete(t,e)},A=Element.prototype.querySelectorAll,S=Element.prototype.querySelector,O=(l=new CustomEvent("Bootstrap",{cancelable:!0}),(c=document.createElement("div")).addEventListener("Bootstrap",(function(){return null})),l.preventDefault(),c.dispatchEvent(l),l.defaultPrevented),D=/:scope\b/;(function(){var t=document.createElement("div");try{t.querySelectorAll(":scope *")}catch(t){return!1}return!0})()||(A=function(t){if(!D.test(t))return this.querySelectorAll(t);var e=Boolean(this.id);e||(this.id=u("scope"));var n=null;try{t=t.replace(D,"#"+this.id),n=this.querySelectorAll(t)}finally{e||this.removeAttribute("id")}return n},S=function(t){if(!D.test(t))return this.querySelector(t);var e=A.call(this,t);return void 0!==e[0]?e[0]:null});var I=E(),N=/[^.]*(?=\..*)\.|.*/,j=/\..*/,P=/::\d+$/,x={},R=1,H={mouseenter:"mouseover",mouseleave:"mouseout"},B=["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"];function M(t,e){return e&&e+"::"+R++||t.uidEvent||R++}function Q(t){var e=M(t);return t.uidEvent=e,x[e]=x[e]||{},x[e]}function U(t,e,n){void 0===n&&(n=null);for(var i=Object.keys(t),o=0,s=i.length;o<s;o++){var r=t[i[o]];if(r.originalHandler===e&&r.delegationSelector===n)return r}return null}function F(t,e,n){var i="string"==typeof e,o=i?n:e,s=t.replace(j,""),r=H[s];return r&&(s=r),B.indexOf(s)>-1||(s=t),[i,o,s]}function W(t,e,n,i,o){if("string"==typeof e&&t){n||(n=i,i=null);var s=F(e,n,i),r=s[0],a=s[1],l=s[2],c=Q(t),u=c[l]||(c[l]={}),h=U(u,a,r?n:null);if(h)h.oneOff=h.oneOff&&o;else{var f=M(a,e.replace(N,"")),d=r?function(t,e,n){return function i(o){for(var s=t.querySelectorAll(e),r=o.target;r&&r!==this;r=r.parentNode)for(var a=s.length;a--;)if(s[a]===r)return i.oneOff&&q.off(t,o.type,n),n.apply(r,[o]);return null}}(t,n,i):function(t,e){return function n(i){return n.oneOff&&q.off(t,i.type,e),e.apply(t,[i])}}(t,n);d.delegationSelector=r?n:null,d.originalHandler=a,d.oneOff=o,d.uidEvent=f,u[f]=d,t.addEventListener(l,d,r)}}}function V(t,e,n,i,o){var s=U(e[n],i,o);s&&(t.removeEventListener(n,s,Boolean(o)),delete e[n][s.uidEvent])}var q={on:function(t,e,n,i){W(t,e,n,i,!1)},one:function(t,e,n,i){W(t,e,n,i,!0)},off:function(t,e,n,i){if("string"==typeof e&&t){var o=F(e,n,i),s=o[0],r=o[1],a=o[2],l=a!==e,c=Q(t),u="."===e.charAt(0);if(void 0===r){u&&Object.keys(c).forEach((function(n){!function(t,e,n,i){var o=e[n]||{};Object.keys(o).forEach((function(s){if(s.indexOf(i)>-1){var r=o[s];V(t,e,n,r.originalHandler,r.delegationSelector)}}))}(t,c,n,e.slice(1))}));var h=c[a]||{};Object.keys(h).forEach((function(n){var i=n.replace(P,"");if(!l||e.indexOf(i)>-1){var o=h[n];V(t,c,a,o.originalHandler,o.delegationSelector)}}))}else{if(!c||!c[a])return;V(t,c,a,r,s?n:null)}}},trigger:function(t,e,n){if("string"!=typeof e||!t)return null;var i,o=e.replace(j,""),s=e!==o,r=B.indexOf(o)>-1,a=!0,l=!0,c=!1,u=null;return s&&I&&(i=I.Event(e,n),I(t).trigger(i),a=!i.isPropagationStopped(),l=!i.isImmediatePropagationStopped(),c=i.isDefaultPrevented()),r?(u=document.createEvent("HTMLEvents")).initEvent(o,a,!0):u=new CustomEvent(e,{bubbles:a,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((function(t){Object.defineProperty(u,t,{get:function(){return n[t]}})})),c&&(u.preventDefault(),O||Object.defineProperty(u,"defaultPrevented",{get:function(){return!0}})),l&&t.dispatchEvent(u),u.defaultPrevented&&void 0!==i&&i.preventDefault(),u}},z="alert",K=function(){function t(t){this._element=t,this._element&&T(t,"bs.alert",this)}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t));var n=this._triggerCloseEvent(e);null===n||n.defaultPrevented||this._removeElement(e)},e.dispose=function(){C(this._element,"bs.alert"),this._element=null},e._getRootElement=function(t){return d(t)||t.closest(".alert")},e._triggerCloseEvent=function(t){return q.trigger(t,"close.bs.alert")},e._removeElement=function(t){var e=this;if(t.classList.remove("show"),t.classList.contains("fade")){var n=g(t);q.one(t,"transitionend",(function(){return e._destroyElement(t)})),_(t,n)}else this._destroyElement(t)},e._destroyElement=function(t){t.parentNode&&t.parentNode.removeChild(t),q.trigger(t,"closed.bs.alert")},t.jQueryInterface=function(e){return this.each((function(){var n=L(this,"bs.alert");n||(n=new t(this)),"close"===e&&n[e](this)}))},t.handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},t.getInstance=function(t){return L(t,"bs.alert")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}}]),t}();q.on(document,"click.bs.alert.data-api",'[data-dismiss="alert"]',K.handleDismiss(new K));var X=E();if(X){var Y=X.fn[z];X.fn[z]=K.jQueryInterface,X.fn[z].Constructor=K,X.fn[z].noConflict=function(){return X.fn[z]=Y,K.jQueryInterface}}var $=function(){function t(t){this._element=t,T(t,"bs.button",this)}var e=t.prototype;return e.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},e.dispose=function(){C(this._element,"bs.button"),this._element=null},t.jQueryInterface=function(e){return this.each((function(){var n=L(this,"bs.button");n||(n=new t(this)),"toggle"===e&&n[e]()}))},t.getInstance=function(t){return L(t,"bs.button")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}}]),t}();q.on(document,"click.bs.button.data-api",'[data-toggle="button"]',(function(t){t.preventDefault();var e=t.target.closest('[data-toggle="button"]'),n=L(e,"bs.button");n||(n=new $(e)),n.toggle()}));var G=E();if(G){var Z=G.fn.button;G.fn.button=$.jQueryInterface,G.fn.button.Constructor=$,G.fn.button.noConflict=function(){return G.fn.button=Z,$.jQueryInterface}}function J(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function tt(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))}var et={setDataAttribute:function(t,e,n){t.setAttribute("data-"+tt(e),n)},removeDataAttribute:function(t,e){t.removeAttribute("data-"+tt(e))},getDataAttributes:function(t){if(!t)return{};var e=s({},t.dataset);return Object.keys(e).forEach((function(t){e[t]=J(e[t])})),e},getDataAttribute:function(t,e){return J(t.getAttribute("data-"+tt(e)))},offset:function(t){var e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:function(t){return{top:t.offsetTop,left:t.offsetLeft}},toggleClass:function(t,e){t&&(t.classList.contains(e)?t.classList.remove(e):t.classList.add(e))}},nt={matches:function(t,e){return t.matches(e)},find:function(t,e){var n;return void 0===e&&(e=document.documentElement),(n=[]).concat.apply(n,A.call(e,t))},findOne:function(t,e){return void 0===e&&(e=document.documentElement),S.call(e,t)},children:function(t,e){var n,i=(n=[]).concat.apply(n,t.children);return i.filter((function(t){return t.matches(e)}))},parents:function(t,e){for(var n=[],i=t.parentNode;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)this.matches(i,e)&&n.push(i),i=i.parentNode;return n},prev:function(t,e){for(var n=t.previousElementSibling;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next:function(t,e){for(var n=t.nextElementSibling;n;){if(this.matches(n,e))return[n];n=n.nextElementSibling}return[]}},it="carousel",ot=".bs.carousel",st={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},rt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},at={TOUCH:"touch",PEN:"pen"},lt=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=nt.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners(),T(t,"bs.carousel",this)}var e=t.prototype;return e.next=function(){this._isSliding||this._slide("next")},e.nextWhenVisible=function(){!document.hidden&&b(this._element)&&this.next()},e.prev=function(){this._isSliding||this._slide("prev")},e.pause=function(t){t||(this._isPaused=!0),nt.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(p(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=nt.findOne(".active.carousel-item",this._element);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)q.one(this._element,"slid.bs.carousel",(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var i=t>n?"next":"prev";this._slide(i,this._items[t])}},e.dispose=function(){q.off(this._element,ot),C(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=s(s({},st),t),v(it,t,rt),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&q.on(this._element,"keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&(q.on(this._element,"mouseenter.bs.carousel",(function(e){return t.pause(e)})),q.on(this._element,"mouseleave.bs.carousel",(function(e){return t.cycle(e)}))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this,e=function(e){t._pointerEvent&&at[e.pointerType.toUpperCase()]?t.touchStartX=e.clientX:t._pointerEvent||(t.touchStartX=e.touches[0].clientX)},n=function(e){t._pointerEvent&&at[e.pointerType.toUpperCase()]&&(t.touchDeltaX=e.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};nt.find(".carousel-item img",this._element).forEach((function(t){q.on(t,"dragstart.bs.carousel",(function(t){return t.preventDefault()}))})),this._pointerEvent?(q.on(this._element,"pointerdown.bs.carousel",(function(t){return e(t)})),q.on(this._element,"pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(q.on(this._element,"touchstart.bs.carousel",(function(t){return e(t)})),q.on(this._element,"touchmove.bs.carousel",(function(e){return function(e){e.touches&&e.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.touches[0].clientX-t.touchStartX}(e)})),q.on(this._element,"touchend.bs.carousel",(function(t){return n(t)})))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),this.prev();break;case"ArrowRight":t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?nt.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(nt.findOne(".active.carousel-item",this._element));return q.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:i,to:n})},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){for(var e=nt.find(".active",this._indicatorsElement),n=0;n<e.length;n++)e[n].classList.remove("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&i.classList.add("active")}},e._slide=function(t,e){var n,i,o,s=this,r=nt.findOne(".active.carousel-item",this._element),a=this._getItemIndex(r),l=e||r&&this._getItemByDirection(t,r),c=this._getItemIndex(l),u=Boolean(this._interval);if("next"===t?(n="carousel-item-left",i="carousel-item-next",o="left"):(n="carousel-item-right",i="carousel-item-prev",o="right"),l&&l.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).defaultPrevented&&r&&l){if(this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(l),this._element.classList.contains("slide")){l.classList.add(i),w(l),r.classList.add(n),l.classList.add(n);var h=parseInt(l.getAttribute("data-interval"),10);h?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=h):this._config.interval=this._config.defaultInterval||this._config.interval;var f=g(r);q.one(r,"transitionend",(function(){l.classList.remove(n,i),l.classList.add("active"),r.classList.remove("active",i,n),s._isSliding=!1,setTimeout((function(){q.trigger(s._element,"slid.bs.carousel",{relatedTarget:l,direction:o,from:a,to:c})}),0)})),_(r,f)}else r.classList.remove("active"),l.classList.add("active"),this._isSliding=!1,q.trigger(this._element,"slid.bs.carousel",{relatedTarget:l,direction:o,from:a,to:c});u&&this.cycle()}},t.carouselInterface=function(e,n){var i=L(e,"bs.carousel"),o=s(s({},st),et.getDataAttributes(e));"object"==typeof n&&(o=s(s({},o),n));var r="string"==typeof n?n:o.slide;if(i||(i=new t(e,o)),"number"==typeof n)i.to(n);else if("string"==typeof r){if(void 0===i[r])throw new TypeError('No method named "'+r+'"');i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())},t.jQueryInterface=function(e){return this.each((function(){t.carouselInterface(this,e)}))},t.dataApiClickHandler=function(e){var n=d(this);if(n&&n.classList.contains("carousel")){var i=s(s({},et.getDataAttributes(n)),et.getDataAttributes(this)),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),t.carouselInterface(n,i),o&&L(n,"bs.carousel").to(o),e.preventDefault()}},t.getInstance=function(t){return L(t,"bs.carousel")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return st}}]),t}();q.on(document,"click.bs.carousel.data-api","[data-slide], [data-slide-to]",lt.dataApiClickHandler),q.on(window,"load.bs.carousel.data-api",(function(){for(var t=nt.find('[data-ride="carousel"]'),e=0,n=t.length;e<n;e++)lt.carouselInterface(t[e],L(t[e],"bs.carousel"))}));var ct=E();if(ct){var ut=ct.fn[it];ct.fn[it]=lt.jQueryInterface,ct.fn[it].Constructor=lt,ct.fn[it].noConflict=function(){return ct.fn[it]=ut,lt.jQueryInterface}}var ht="collapse",ft={toggle:!0,parent:""},dt={toggle:"boolean",parent:"(string|element)"},gt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=nt.find('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]');for(var n=nt.find('[data-toggle="collapse"]'),i=0,o=n.length;i<o;i++){var s=n[i],r=f(s),a=nt.find(r).filter((function(e){return e===t}));null!==r&&a.length&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle(),T(t,"bs.collapse",this)}var e=t.prototype;return e.toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},e.show=function(){var e=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){var n,i;this._parent&&0===(n=nt.find(".show, .collapsing",this._parent).filter((function(t){return"string"==typeof e._config.parent?t.getAttribute("data-parent")===e._config.parent:t.classList.contains("collapse")}))).length&&(n=null);var o=nt.findOne(this._selector);if(n){var s=n.filter((function(t){return o!==t}));if((i=s[0]?L(s[0],"bs.collapse"):null)&&i._isTransitioning)return}if(!q.trigger(this._element,"show.bs.collapse").defaultPrevented){n&&n.forEach((function(e){o!==e&&t.collapseInterface(e,"hide"),i||T(e,"bs.collapse",null)}));var r=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[r]=0,this._triggerArray.length&&this._triggerArray.forEach((function(t){t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=g(this._element);q.one(this._element,"transitionend",(function(){e._element.classList.remove("collapsing"),e._element.classList.add("collapse","show"),e._element.style[r]="",e.setTransitioning(!1),q.trigger(e._element,"shown.bs.collapse")})),_(this._element,l),this._element.style[r]=this._element[a]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!q.trigger(this._element,"hide.bs.collapse").defaultPrevented){var e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",w(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var n=this._triggerArray.length;if(n>0)for(var i=0;i<n;i++){var o=this._triggerArray[i],s=d(o);s&&!s.classList.contains("show")&&(o.classList.add("collapsed"),o.setAttribute("aria-expanded",!1))}this.setTransitioning(!0);this._element.style[e]="";var r=g(this._element);q.one(this._element,"transitionend",(function(){t.setTransitioning(!1),t._element.classList.remove("collapsing"),t._element.classList.add("collapse"),q.trigger(t._element,"hidden.bs.collapse")})),_(this._element,r)}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){C(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=s(s({},ft),t)).toggle=Boolean(t.toggle),v(ht,t,dt),t},e._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},e._getParent=function(){var t=this,e=this._config.parent;m(e)?void 0===e.jquery&&void 0===e[0]||(e=e[0]):e=nt.findOne(e);var n='[data-toggle="collapse"][data-parent="'+e+'"]';return nt.find(n,e).forEach((function(e){var n=d(e);t._addAriaAndCollapsedClass(n,[e])})),e},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=t.classList.contains("show");e.length&&e.forEach((function(t){n?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",n)}))}},t.collapseInterface=function(e,n){var i=L(e,"bs.collapse"),o=s(s(s({},ft),et.getDataAttributes(e)),"object"==typeof n&&n?n:{});if(!i&&o.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(o.toggle=!1),i||(i=new t(e,o)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}},t.jQueryInterface=function(e){return this.each((function(){t.collapseInterface(this,e)}))},t.getInstance=function(t){return L(t,"bs.collapse")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return ft}}]),t}();q.on(document,"click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.target.tagName&&t.preventDefault();var e=et.getDataAttributes(this),n=f(this);nt.find(n).forEach((function(t){var n,i=L(t,"bs.collapse");i?(null===i._parent&&"string"==typeof e.parent&&(i._config.parent=e.parent,i._parent=i._getParent()),n="toggle"):n=e,gt.collapseInterface(t,n)}))}));var pt=E();if(pt){var mt=pt.fn[ht];pt.fn[ht]=gt.jQueryInterface,pt.fn[ht].Constructor=gt,pt.fn[ht].noConflict=function(){return pt.fn[ht]=mt,gt.jQueryInterface}}var _t="dropdown",vt=new RegExp("ArrowUp|ArrowDown|Escape"),bt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},yt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},wt=function(){function e(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners(),T(t,"bs.dropdown",this)}var i=e.prototype;return i.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")){var t=this._element.classList.contains("show");e.clearMenus(),t||this.show()}},i.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var n=e.getParentFromElement(this._element),i={relatedTarget:this._element};if(!q.trigger(this._element,"show.bs.dropdown",i).defaultPrevented){if(!this._inNavbar){if(void 0===t)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=n:m(this._config.reference)&&(o=this._config.reference,void 0!==this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&n.classList.add("position-static"),this._popper=new t(o,this._menu,this._getPopperConfig())}var s;if("ontouchstart"in document.documentElement&&!n.closest(".navbar-nav"))(s=[]).concat.apply(s,document.body.children).forEach((function(t){return q.on(t,"mouseover",null,(function(){}))}));this._element.focus(),this._element.setAttribute("aria-expanded",!0),et.toggleClass(this._menu,"show"),et.toggleClass(this._element,"show"),q.trigger(n,"shown.bs.dropdown",i)}}},i.hide=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")&&this._menu.classList.contains("show")){var t=e.getParentFromElement(this._element),n={relatedTarget:this._element};q.trigger(t,"hide.bs.dropdown",n).defaultPrevented||(this._popper&&this._popper.destroy(),et.toggleClass(this._menu,"show"),et.toggleClass(this._element,"show"),q.trigger(t,"hidden.bs.dropdown",n))}},i.dispose=function(){C(this._element,"bs.dropdown"),q.off(this._element,".bs.dropdown"),this._element=null,this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;q.on(this._element,"click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=s(s(s({},this.constructor.Default),et.getDataAttributes(this._element)),t),v(_t,t,this.constructor.DefaultType),t},i._getMenuElement=function(){return nt.next(this._element,".dropdown-menu")[0]},i._getPlacement=function(){var t=this._element.parentNode,e="bottom-start";return t.classList.contains("dropup")?(e="top-start",this._menu.classList.contains("dropdown-menu-right")&&(e="top-end")):t.classList.contains("dropright")?e="right-start":t.classList.contains("dropleft")?e="left-start":this._menu.classList.contains("dropdown-menu-right")&&(e="bottom-end"),e},i._detectNavbar=function(){return Boolean(this._element.closest(".navbar"))},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=s(s({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),s(s({},t),this._config.popperConfig)},e.dropdownInterface=function(t,n){var i=L(t,"bs.dropdown");if(i||(i=new e(t,"object"==typeof n?n:null)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}},e.jQueryInterface=function(t){return this.each((function(){e.dropdownInterface(this,t)}))},e.clearMenus=function(t){if(!t||2!==t.button&&("keyup"!==t.type||"Tab"===t.key))for(var n=nt.find('[data-toggle="dropdown"]'),i=0,o=n.length;i<o;i++){var s=e.getParentFromElement(n[i]),r=L(n[i],"bs.dropdown"),a={relatedTarget:n[i]};if(t&&"click"===t.type&&(a.clickEvent=t),r){var l=r._menu;if(n[i].classList.contains("show"))if(!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&"Tab"===t.key)&&l.contains(t.target)))if(!q.trigger(s,"hide.bs.dropdown",a).defaultPrevented){var c;if("ontouchstart"in document.documentElement)(c=[]).concat.apply(c,document.body.children).forEach((function(t){return q.off(t,"mouseover",null,(function(){}))}));n[i].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),l.classList.remove("show"),n[i].classList.remove("show"),q.trigger(s,"hidden.bs.dropdown",a)}}}},e.getParentFromElement=function(t){return d(t)||t.parentNode},e.dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!vt.test(t.key))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!this.classList.contains("disabled"))){var n=e.getParentFromElement(this),i=this.classList.contains("show");if("Escape"===t.key)return(this.matches('[data-toggle="dropdown"]')?this:nt.prev(this,'[data-toggle="dropdown"]')[0]).focus(),void e.clearMenus();if(i&&"Space"!==t.key){var o=nt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",n).filter(b);if(o.length){var s=o.indexOf(t.target);"ArrowUp"===t.key&&s>0&&s--,"ArrowDown"===t.key&&s<o.length-1&&s++,o[s=-1===s?0:s].focus()}}else e.clearMenus()}},e.getInstance=function(t){return L(t,"bs.dropdown")},n(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return bt}},{key:"DefaultType",get:function(){return yt}}]),e}();q.on(document,"keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',wt.dataApiKeydownHandler),q.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",wt.dataApiKeydownHandler),q.on(document,"click.bs.dropdown.data-api",wt.clearMenus),q.on(document,"keyup.bs.dropdown.data-api",wt.clearMenus),q.on(document,"click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),wt.dropdownInterface(this,"toggle")})),q.on(document,"click.bs.dropdown.data-api",".dropdown form",(function(t){return t.stopPropagation()}));var Et=E();if(Et){var kt=Et.fn[_t];Et.fn[_t]=wt.jQueryInterface,Et.fn[_t].Constructor=wt,Et.fn[_t].noConflict=function(){return Et.fn[_t]=kt,wt.jQueryInterface}}var Tt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Lt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ct=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=nt.findOne(".modal-dialog",t),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0,T(t,"bs.modal",this)}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){this._element.classList.contains("fade")&&(this._isTransitioning=!0);var n=q.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||n.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),q.on(this._element,"click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return e.hide(t)})),q.on(this._dialog,"mousedown.dismiss.bs.modal",(function(){q.one(e._element,"mouseup.dismiss.bs.modal",(function(t){t.target===e._element&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if((t&&t.preventDefault(),this._isShown&&!this._isTransitioning)&&!q.trigger(this._element,"hide.bs.modal").defaultPrevented){this._isShown=!1;var n=this._element.classList.contains("fade");if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),q.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),q.off(this._element,"click.dismiss.bs.modal"),q.off(this._dialog,"mousedown.dismiss.bs.modal"),n){var i=g(this._element);q.one(this._element,"transitionend",(function(t){return e._hideModal(t)})),_(this._element,i)}else this._hideModal()}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return q.off(t,".bs.modal")})),q.off(document,"focusin.bs.modal"),C(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=s(s({},Tt),t),v("modal",t,Lt),t},e._showElement=function(t){var e=this,n=this._element.classList.contains("fade"),i=nt.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),n&&w(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();var o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,q.trigger(e._element,"shown.bs.modal",{relatedTarget:t})};if(n){var s=g(this._dialog);q.one(this._dialog,"transitionend",o),_(this._dialog,s)}else o()},e._enforceFocus=function(){var t=this;q.off(document,"focusin.bs.modal"),q.on(document,"focusin.bs.modal",(function(e){document===e.target||t._element===e.target||t._element.contains(e.target)||t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?q.on(this._element,"keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&"Escape"===e.key?(e.preventDefault(),t.hide()):t._config.keyboard||"Escape"!==e.key||t._triggerBackdropTransition()})):q.off(this._element,"keydown.dismiss.bs.modal")},e._setResizeEvent=function(){var t=this;this._isShown?q.on(window,"resize.bs.modal",(function(){return t._adjustDialog()})):q.off(window,"resize.bs.modal")},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){document.body.classList.remove("modal-open"),t._resetAdjustments(),t._resetScrollbar(),q.trigger(t._element,"hidden.bs.modal")}))},e._removeBackdrop=function(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null},e._showBackdrop=function(t){var e=this,n=this._element.classList.contains("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),document.body.appendChild(this._backdrop),q.on(this._element,"click.dismiss.bs.modal",(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()})),n&&w(this._backdrop),this._backdrop.classList.add("show"),!n)return void t();var i=g(this._backdrop);q.one(this._backdrop,"transitionend",t),_(this._backdrop,i)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");var o=function(){e._removeBackdrop(),t()};if(this._element.classList.contains("fade")){var s=g(this._backdrop);q.one(this._backdrop,"transitionend",o),_(this._backdrop,s)}else o()}else t()},e._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){if(q.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;this._element.classList.add("modal-static");var e=g(this._element);q.one(this._element,"transitionend",(function(){t._element.classList.remove("modal-static")})),_(this._element,e),this._element.focus()}else this.hide()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){nt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e){var n=e.style.paddingRight,i=window.getComputedStyle(e)["padding-right"];et.setDataAttribute(e,"padding-right",n),e.style.paddingRight=parseFloat(i)+t._scrollbarWidth+"px"})),nt.find(".sticky-top").forEach((function(e){var n=e.style.marginRight,i=window.getComputedStyle(e)["margin-right"];et.setDataAttribute(e,"margin-right",n),e.style.marginRight=parseFloat(i)-t._scrollbarWidth+"px"}));var e=document.body.style.paddingRight,n=window.getComputedStyle(document.body)["padding-right"];et.setDataAttribute(document.body,"padding-right",e),document.body.style.paddingRight=parseFloat(n)+this._scrollbarWidth+"px"}document.body.classList.add("modal-open")},e._resetScrollbar=function(){nt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t){var e=et.getDataAttribute(t,"padding-right");void 0!==e&&(et.removeDataAttribute(t,"padding-right"),t.style.paddingRight=e)})),nt.find(".sticky-top").forEach((function(t){var e=et.getDataAttribute(t,"margin-right");void 0!==e&&(et.removeDataAttribute(t,"margin-right"),t.style.marginRight=e)}));var t=et.getDataAttribute(document.body,"padding-right");void 0===t?document.body.style.paddingRight="":(et.removeDataAttribute(document.body,"padding-right"),document.body.style.paddingRight=t)},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t.jQueryInterface=function(e,n){return this.each((function(){var i=L(this,"bs.modal"),o=s(s(s({},Tt),et.getDataAttributes(this)),"object"==typeof e&&e?e:{});if(i||(i=new t(this,o)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else o.show&&i.show(n)}))},t.getInstance=function(t){return L(t,"bs.modal")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return Tt}}]),t}();q.on(document,"click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e=this,n=d(this);"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault(),q.one(n,"show.bs.modal",(function(t){t.defaultPrevented||q.one(n,"hidden.bs.modal",(function(){b(e)&&e.focus()}))}));var i=L(n,"bs.modal");if(!i){var o=s(s({},et.getDataAttributes(n)),et.getDataAttributes(this));i=new Ct(n,o)}i.show(this)}));var At=E();if(At){var St=At.fn.modal;At.fn.modal=Ct.jQueryInterface,At.fn.modal.Constructor=Ct,At.fn.modal.noConflict=function(){return At.fn.modal=St,Ct.jQueryInterface}}var Ot=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Dt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,It=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Nt={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function jt(t,e,n){var i;if(!t.length)return t;if(n&&"function"==typeof n)return n(t);for(var o=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),r=(i=[]).concat.apply(i,o.body.querySelectorAll("*")),a=function(t,n){var i,o=r[t],a=o.nodeName.toLowerCase();if(-1===s.indexOf(a))return o.parentNode.removeChild(o),"continue";var l=(i=[]).concat.apply(i,o.attributes),c=[].concat(e["*"]||[],e[a]||[]);l.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Ot.indexOf(n)||Boolean(t.nodeValue.match(Dt)||t.nodeValue.match(It));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,c)||o.removeAttribute(t.nodeName)}))},l=0,c=r.length;l<c;l++)a(l);return o.body.innerHTML}var Pt="tooltip",xt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Rt=["sanitize","whiteList","sanitizeFn"],Ht={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Bt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Mt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Nt,popperConfig:null},Qt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Ut=function(){function e(e,n){if(void 0===t)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(n),this.tip=null,this._setListeners(),T(e,this.constructor.DATA_KEY,this)}var i=e.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=L(t.target,e);n||(n=new this.constructor(t.target,this._getDelegateConfig()),T(t.target,e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),C(this.element,this.constructor.DATA_KEY),q.off(this.element,this.constructor.EVENT_KEY),q.off(this.element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var e=this;if("none"===this.element.style.display)throw new Error("Please use show on visible elements");if(this.isWithContent()&&this._isEnabled){var n=q.trigger(this.element,this.constructor.Event.SHOW),i=function t(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var n=e.getRootNode();return n instanceof ShadowRoot?n:null}return e instanceof ShadowRoot?e:e.parentNode?t(e.parentNode):null}(this.element),o=null===i?this.element.ownerDocument.documentElement.contains(this.element):i.contains(this.element);if(n.defaultPrevented||!o)return;var s=this.getTipElement(),r=u(this.constructor.NAME);s.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&s.classList.add("fade");var a="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,l=this._getAttachment(a);this._addAttachmentClass(l);var c,h=this._getContainer();if(T(s,this.constructor.DATA_KEY,this),this.element.ownerDocument.documentElement.contains(this.tip)||h.appendChild(s),q.trigger(this.element,this.constructor.Event.INSERTED),this._popper=new t(this.element,s,this._getPopperConfig(l)),s.classList.add("show"),"ontouchstart"in document.documentElement)(c=[]).concat.apply(c,document.body.children).forEach((function(t){q.on(t,"mouseover",(function(){}))}));var f=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,q.trigger(e.element,e.constructor.Event.SHOWN),"out"===t&&e._leave(null,e)};if(this.tip.classList.contains("fade")){var d=g(this.tip);q.one(this.tip,"transitionend",f),_(this.tip,d)}else f()}},i.hide=function(){var t=this,e=this.getTipElement(),n=function(){"show"!==t._hoverState&&e.parentNode&&e.parentNode.removeChild(e),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),q.trigger(t.element,t.constructor.Event.HIDDEN),t._popper.destroy()};if(!q.trigger(this.element,this.constructor.Event.HIDE).defaultPrevented){var i;if(e.classList.remove("show"),"ontouchstart"in document.documentElement)(i=[]).concat.apply(i,document.body.children).forEach((function(t){return q.off(t,"mouseover",y)}));if(this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){var o=g(e);q.one(e,"transitionend",n),_(e,o)}else n();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.getTipElement=function(){if(this.tip)return this.tip;var t=document.createElement("div");return t.innerHTML=this.config.template,this.tip=t.children[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(nt.findOne(".tooltip-inner",t),this.getTitle()),t.classList.remove("fade","show")},i.setElementContent=function(t,e){if(null!==t)return"object"==typeof e&&m(e)?(e.jquery&&(e=e[0]),void(this.config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this.config.html?(this.config.sanitize&&(e=jt(e,this.config.whiteList,this.config.sanitizeFn)),t.innerHTML=e):t.textContent=e)},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return s(s({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:"."+this.constructor.NAME+"-arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._addAttachmentClass=function(t){this.getTipElement().classList.add("bs-tooltip-"+t)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=s(s({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:m(this.config.container)?this.config.container:nt.findOne(this.config.container)},i._getAttachment=function(t){return Bt[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)q.on(t.element,t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n="hover"===e?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i="hover"===e?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;q.on(t.element,n,t.config.selector,(function(e){return t._enter(e)})),q.on(t.element,i,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},q.on(this.element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s(s({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||L(t.target,n))||(e=new this.constructor(t.target,this._getDelegateConfig()),T(t.target,n,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){"show"===e._hoverState&&e.show()}),e.config.delay.show):e.show())},i._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||L(t.target,n))||(e=new this.constructor(t.target,this._getDelegateConfig()),T(t.target,n,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){"out"===e._hoverState&&e.hide()}),e.config.delay.hide):e.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var e=et.getDataAttributes(this.element);return Object.keys(e).forEach((function(t){-1!==Rt.indexOf(t)&&delete e[t]})),t&&"object"==typeof t.container&&t.container.jquery&&(t.container=t.container[0]),"number"==typeof(t=s(s(s({},this.constructor.Default),e),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),v(Pt,t,this.constructor.DefaultType),t.sanitize&&(t.template=jt(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=this.getTipElement(),e=t.getAttribute("class").match(xt);null!==e&&e.length>0&&e.map((function(t){return t.trim()})).forEach((function(e){return t.classList.remove(e)}))},i._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(t.classList.remove("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},e.jQueryInterface=function(t){return this.each((function(){var n=L(this,"bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new e(this,i)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},e.getInstance=function(t){return L(t,"bs.tooltip")},n(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return Mt}},{key:"NAME",get:function(){return Pt}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Qt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Ht}}]),e}(),Ft=E();if(Ft){var Wt=Ft.fn[Pt];Ft.fn[Pt]=Ut.jQueryInterface,Ft.fn[Pt].Constructor=Ut,Ft.fn[Pt].noConflict=function(){return Ft.fn[Pt]=Wt,Ut.jQueryInterface}}var Vt="popover",qt=new RegExp("(^|\\s)bs-popover\\S+","g"),zt=s(s({},Ut.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Kt=s(s({},Ut.DefaultType),{},{content:"(string|element|function)"}),Xt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Yt=function(t){var e,i;function o(){return t.apply(this,arguments)||this}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var s=o.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.setContent=function(){var t=this.getTipElement();this.setElementContent(nt.findOne(".popover-header",t),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(nt.findOne(".popover-body",t),e),t.classList.remove("fade","show")},s._addAttachmentClass=function(t){this.getTipElement().classList.add("bs-popover-"+t)},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var t=this.getTipElement(),e=t.getAttribute("class").match(qt);null!==e&&e.length>0&&e.map((function(t){return t.trim()})).forEach((function(e){return t.classList.remove(e)}))},o.jQueryInterface=function(t){return this.each((function(){var e=L(this,"bs.popover"),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n),T(this,"bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},o.getInstance=function(t){return L(t,"bs.popover")},n(o,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return zt}},{key:"NAME",get:function(){return Vt}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return Xt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Kt}}]),o}(Ut),$t=E();if($t){var Gt=$t.fn[Vt];$t.fn[Vt]=Yt.jQueryInterface,$t.fn[Vt].Constructor=Yt,$t.fn[Vt].noConflict=function(){return $t.fn[Vt]=Gt,Yt.jQueryInterface}}var Zt="scrollspy",Jt={offset:10,method:"auto",target:""},te={offset:"number",method:"string",target:"(string|element)"},ee=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,q.on(this._scrollElement,"scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process(),T(t,"bs.scrollspy",this)}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,i="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),nt.find(this._selector).map((function(t){var e,o=f(t);if(o&&(e=nt.findOne(o)),e){var s=e.getBoundingClientRect();if(s.width||s.height)return[et[n](e).top+i,o]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){C(this._element,"bs.scrollspy"),q.off(this._scrollElement,".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=s(s({},Jt),"object"==typeof t&&t?t:{})).target&&m(t.target)){var e=t.target.id;e||(e=u(Zt),t.target.id=e),t.target="#"+e}return v(Zt,t,te),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=nt.findOne(e.join(","));n.classList.contains("dropdown-item")?(nt.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),nt.parents(n,".nav, .list-group").forEach((function(t){nt.prev(t,".nav-link, .list-group-item").forEach((function(t){return t.classList.add("active")})),nt.prev(t,".nav-item").forEach((function(t){nt.children(t,".nav-link").forEach((function(t){return t.classList.add("active")}))}))}))),q.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){nt.find(this._selector).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t.jQueryInterface=function(e){return this.each((function(){var n=L(this,"bs.scrollspy");if(n||(n=new t(this,"object"==typeof e&&e)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t.getInstance=function(t){return L(t,"bs.scrollspy")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return Jt}}]),t}();q.on(window,"load.bs.scrollspy.data-api",(function(){nt.find('[data-spy="scroll"]').forEach((function(t){return new ee(t,et.getDataAttributes(t))}))}));var ne=E();if(ne){var ie=ne.fn[Zt];ne.fn[Zt]=ee.jQueryInterface,ne.fn[Zt].Constructor=ee,ne.fn[Zt].noConflict=function(){return ne.fn[Zt]=ie,ee.jQueryInterface}}var oe=function(){function t(t){this._element=t,T(this._element,"bs.tab",this)}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||this._element.classList.contains("disabled"))){var e,n=d(this._element),i=this._element.closest(".nav, .list-group");if(i){var o="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";e=(e=nt.find(o,i))[e.length-1]}var s=null;if(e&&(s=q.trigger(e,"hide.bs.tab",{relatedTarget:this._element})),!(q.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==s&&s.defaultPrevented)){this._activate(this._element,i);var r=function(){q.trigger(e,"hidden.bs.tab",{relatedTarget:t._element}),q.trigger(t._element,"shown.bs.tab",{relatedTarget:e})};n?this._activate(n,n.parentNode,r):r()}}},e.dispose=function(){C(this._element,"bs.tab"),this._element=null},e._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?nt.children(e,".active"):nt.find(":scope > li > .active",e))[0],s=n&&o&&o.classList.contains("fade"),r=function(){return i._transitionComplete(t,o,n)};if(o&&s){var a=g(o);o.classList.remove("show"),q.one(o,"transitionend",r),_(o,a)}else r()},e._transitionComplete=function(t,e,n){if(e){e.classList.remove("active");var i=nt.findOne(":scope > .dropdown-menu .active",e.parentNode);i&&i.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}(t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),w(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&t.parentNode.classList.contains("dropdown-menu"))&&(t.closest(".dropdown")&&nt.find(".dropdown-toggle").forEach((function(t){return t.classList.add("active")})),t.setAttribute("aria-expanded",!0));n&&n()},t.jQueryInterface=function(e){return this.each((function(){var n=L(this,"bs.tab")||new t(this);if("string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t.getInstance=function(t){return L(t,"bs.tab")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}}]),t}();q.on(document,"click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),(L(this,"bs.tab")||new oe(this)).show()}));var se=E();if(se){var re=se.fn.tab;se.fn.tab=oe.jQueryInterface,se.fn.tab.Constructor=oe,se.fn.tab.noConflict=function(){return se.fn.tab=re,oe.jQueryInterface}}var ae={animation:"boolean",autohide:"boolean",delay:"number"},le={animation:!0,autohide:!0,delay:500},ce=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners(),T(t,"bs.toast",this)}var e=t.prototype;return e.show=function(){var t=this;if(!q.trigger(this._element,"show.bs.toast").defaultPrevented){this._config.animation&&this._element.classList.add("fade");var e=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),q.trigger(t._element,"shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),w(this._element),this._element.classList.add("showing"),this._config.animation){var n=g(this._element);q.one(this._element,"transitionend",e),_(this._element,n)}else e()}},e.hide=function(){var t=this;if(this._element.classList.contains("show")&&!q.trigger(this._element,"hide.bs.toast").defaultPrevented){var e=function(){t._element.classList.add("hide"),q.trigger(t._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=g(this._element);q.one(this._element,"transitionend",e),_(this._element,n)}else e()}},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),q.off(this._element,"click.dismiss.bs.toast"),C(this._element,"bs.toast"),this._element=null,this._config=null},e._getConfig=function(t){return t=s(s(s({},le),et.getDataAttributes(this._element)),"object"==typeof t&&t?t:{}),v("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;q.on(this._element,"click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},t.jQueryInterface=function(e){return this.each((function(){var n=L(this,"bs.toast");if(n||(n=new t(this,"object"==typeof e&&e)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e](this)}}))},t.getInstance=function(t){return L(t,"bs.toast")},n(t,null,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"DefaultType",get:function(){return ae}},{key:"Default",get:function(){return le}}]),t}(),ue=E();if(ue){var he=ue.fn.toast;ue.fn.toast=ce.jQueryInterface,ue.fn.toast.Constructor=ce,ue.fn.toast.noConflict=function(){return ue.fn.toast=he,ce.jQueryInterface}}return{Alert:K,Button:$,Carousel:lt,Collapse:gt,Dropdown:wt,Modal:Ct,Popover:Yt,ScrollSpy:ee,Tab:oe,Toast:ce,Tooltip:Ut}}));
//# sourceMappingURL=bootstrap.min.js.map
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(c)return!1;return f?-1:l||c?c:w}}},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h)}},function(t,e,n){"use strict";function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var r=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return!!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},h=function(t){delete y[t]},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1))}:v&&v.now?i=function(t){v.now(s(m,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i)}catch(t){c&&!s&&c.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1))}catch(t){F.call(i,t)}}):(n._v=t,n._s=1,D(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1))}catch(t){F.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1)},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V)})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";function i(t){n(99)}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u}},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(a)n=function(){s.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l)}}else n=function(){r.call(i,l)};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o}])});
/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Quill=e():t.Quill=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=45)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n(18),i=n(19),l=n(48),a=n(49),s=n(50),u=n(51),c=n(52),f=n(11),h=n(29),p=n(30),d=n(28),y=n(1),v={Scope:y.Scope,create:y.create,find:y.find,query:y.query,register:y.register,Container:r.default,Format:o.default,Leaf:i.default,Embed:u.default,Scroll:l.default,Block:s.default,Inline:a.default,Text:c.default,Attributor:{Attribute:f.default,Class:h.default,Style:p.default,Store:d.default}};e.default=v},function(t,e,n){"use strict";function r(t,e){var n=i(t);if(null==n)throw new s("Unable to create "+t+" blot");var r=n;return new r(t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e),e)}function o(t,n){return void 0===n&&(n=!1),null==t?null:null!=t[e.DATA_KEY]?t[e.DATA_KEY].blot:n?o(t.parentNode,n):null}function i(t,e){void 0===e&&(e=p.ANY);var n;if("string"==typeof t)n=h[t]||u[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=h.text;else if("number"==typeof t)t&p.LEVEL&p.BLOCK?n=h.block:t&p.LEVEL&p.INLINE&&(n=h.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=c[r[o]])break;n=n||f[t.tagName]}return null==n?null:e&p.LEVEL&n.scope&&e&p.TYPE&n.scope?n:null}function l(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length>1)return t.map(function(t){return l(t)});var n=t[0];if("string"!=typeof n.blotName&&"string"!=typeof n.attrName)throw new s("Invalid definition");if("abstract"===n.blotName)throw new s("Cannot register abstract class");if(h[n.blotName||n.attrName]=n,"string"==typeof n.keyName)u[n.keyName]=n;else if(null!=n.className&&(c[n.className]=n),null!=n.tagName){Array.isArray(n.tagName)?n.tagName=n.tagName.map(function(t){return t.toUpperCase()}):n.tagName=n.tagName.toUpperCase();var r=Array.isArray(n.tagName)?n.tagName:[n.tagName];r.forEach(function(t){null!=f[t]&&null!=n.className||(f[t]=n)})}return n}var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var n=this;return e="[Parchment] "+e,n=t.call(this,e)||this,n.message=e,n.name=n.constructor.name,n}return a(e,t),e}(Error);e.ParchmentError=s;var u={},c={},f={},h={};e.DATA_KEY="__blot";var p;!function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(p=e.Scope||(e.Scope={})),e.create=r,e.find=o,e.query=i,e.register=l},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},i=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!o)return!1;var i;for(i in t);return void 0===i||n.call(t,i)};t.exports=function t(){var e,n,r,l,a,s,u=arguments[0],c=1,f=arguments.length,h=!1;for("boolean"==typeof u&&(h=u,u=arguments[1]||{},c=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});c<f;++c)if(null!=(e=arguments[c]))for(n in e)r=u[n],l=e[n],u!==l&&(h&&l&&(i(l)||(a=o(l)))?(a?(a=!1,s=r&&o(r)?r:[]):s=r&&i(r)?r:{},u[n]=t(h,s,l)):void 0!==l&&(u[n]=l));return u}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=(0,f.default)(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:a(t.parent,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(2),f=r(c),h=n(4),p=r(h),d=n(0),y=r(d),v=n(14),b=r(v),g=n(5),m=r(g),_=n(8),O=r(_),w=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"attach",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attach",this).call(this),this.attributes=new y.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new p.default).insert(this.value(),(0,f.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=y.default.query(t,y.default.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,n,r){if("string"==typeof n&&n.endsWith("\n")){var o=y.default.create(x.blotName);this.parent.insertBefore(o,0===t?this:this.next),o.insertAt(0,n.slice(0,-1))}else u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r)}}]),e}(y.default.Embed);w.scope=y.default.Scope.BLOCK_BLOT;var x=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.cache={},n}return l(e,t),s(e,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(y.default.Leaf).reduce(function(t,e){return 0===e.length()?t:t.insert(e.value(),a(e))},new p.default).insert("\n",a(this))),this.cache.delta}},{key:"deleteAt",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),this.cache={}}},{key:"formatAt",value:function(t,n,r,o){n<=0||(y.default.query(r,y.default.Scope.BLOCK)?t+n===this.length()&&this.format(r,o):u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,Math.min(n,this.length()-t-1),r,o),this.cache={})}},{key:"insertAt",value:function(t,n,r){if(null!=r)return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);if(0!==n.length){var o=n.split("\n"),i=o.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});var l=this;o.reduce(function(t,e){return l=l.split(t,!0),l.insertAt(0,e),e.length},t+i.length)}}},{key:"insertBefore",value:function(t,n){var r=this.children.head;u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n),r instanceof b.default&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveChildren",this).call(this,t,n),this.cache={}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.cache={}}},{key:"path",value:function(t){return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(0===t||t>=this.length()-1)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var o=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"split",this).call(this,t,n);return this.cache={},o}}]),e}(y.default.Block);x.blotName="block",x.tagName="P",x.defaultChild="break",x.allowedChildren=[m.default,y.default.Embed,O.default],e.bubbleFormats=a,e.BlockEmbed=w,e.default=x},function(t,e,n){var r=n(54),o=n(12),i=n(2),l=n(20),a=String.fromCharCode(0),s=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};s.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},s.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},s.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},s.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=i(!0,{},t),"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,"object"!=typeof(n=this.ops[e-1])))return this.ops.unshift(t),this;if(o(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},s.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},s.prototype.filter=function(t){return this.ops.filter(t)},s.prototype.forEach=function(t){this.ops.forEach(t)},s.prototype.map=function(t){return this.ops.map(t)},s.prototype.partition=function(t){var e=[],n=[];return this.forEach(function(r){(t(r)?e:n).push(r)}),[e,n]},s.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},s.prototype.changeLength=function(){return this.reduce(function(t,e){return e.insert?t+l.length(e):e.delete?t-e.delete:t},0)},s.prototype.length=function(){return this.reduce(function(t,e){return t+l.length(e)},0)},s.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=l.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=l.length(i)}return new s(n)},s.prototype.compose=function(t){for(var e=l.iterator(this.ops),n=l.iterator(t.ops),r=new s;e.hasNext()||n.hasNext();)if("insert"===n.peekType())r.push(n.next());else if("delete"===e.peekType())r.push(e.next());else{var o=Math.min(e.peekLength(),n.peekLength()),i=e.next(o),a=n.next(o);if("number"==typeof a.retain){var u={};"number"==typeof i.retain?u.retain=o:u.insert=i.insert;var c=l.attributes.compose(i.attributes,a.attributes,"number"==typeof i.retain);c&&(u.attributes=c),r.push(u)}else"number"==typeof a.delete&&"number"==typeof i.retain&&r.push(a)}return r.chop()},s.prototype.concat=function(t){var e=new s(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},s.prototype.diff=function(t,e){if(this.ops===t.ops)return new s;var n=[this,t].map(function(e){return e.map(function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:a;var r=e===t?"on":"with";throw new Error("diff() called "+r+" non-document")}).join("")}),i=new s,u=r(n[0],n[1],e),c=l.iterator(this.ops),f=l.iterator(t.ops);return u.forEach(function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),c.next(n),i.delete(n);break;case r.EQUAL:n=Math.min(c.peekLength(),f.peekLength(),e);var a=c.next(n),s=f.next(n);o(a.insert,s.insert)?i.retain(n,l.attributes.diff(a.attributes,s.attributes)):i.push(s).delete(n)}e-=n}}),i.chop()},s.prototype.eachLine=function(t,e){e=e||"\n";for(var n=l.iterator(this.ops),r=new s,o=0;n.hasNext();){if("insert"!==n.peekType())return;var i=n.peek(),a=l.length(i)-n.peekLength(),u="string"==typeof i.insert?i.insert.indexOf(e,a)-a:-1;if(u<0)r.push(n.next());else if(u>0)r.push(n.next(u));else{if(!1===t(r,n.next(1).attributes||{},o))return;o+=1,r=new s}}r.length()>0&&t(r,{},o)},s.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=l.iterator(this.ops),r=l.iterator(t.ops),o=new s;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),a=n.next(i),u=r.next(i);if(a.delete)continue;u.delete?o.push(u):o.retain(i,l.attributes.transform(a.attributes,u.attributes,e))}else o.retain(l.length(n.next()));return o.chop()},s.prototype.transformPosition=function(t,e){e=!!e;for(var n=l.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(8),c=r(u),f=n(0),h=r(f),p=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"formatAt",value:function(t,n,r,o){if(e.compare(this.statics.blotName,r)<0&&h.default.query(r,h.default.Scope.BLOT)){var i=this.isolate(t,n);o&&i.wrap(r,o)}else s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o)}},{key:"optimize",value:function(t){if(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.parent instanceof e&&e.compare(this.statics.blotName,this.parent.statics.blotName)>0){var n=this.parent.isolate(this.offset(),this.length());this.moveChildren(n),n.wrap(this)}}}],[{key:"compare",value:function(t,n){var r=e.order.indexOf(t),o=e.order.indexOf(n);return r>=0||o>=0?r-o:t===n?0:t<n?-1:1}}]),e}(h.default.Inline);p.allowedChildren=[p,h.default.Embed,c.default],p.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(e=(0,N.default)(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e),e.theme&&e.theme!==S.DEFAULTS.theme){if(e.theme=S.import("themes/"+e.theme),null==e.theme)throw new Error("Invalid theme "+e.theme+". Did you register it?")}else e.theme=T.default;var n=(0,N.default)(!0,{},e.theme.DEFAULTS);[n,e].forEach(function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach(function(e){!0===t.modules[e]&&(t.modules[e]={})})});var r=Object.keys(n.modules).concat(Object.keys(e.modules)),o=r.reduce(function(t,e){var n=S.import("modules/"+e);return null==n?P.error("Cannot load "+e+" module. Are you sure you registered it?"):t[e]=n.DEFAULTS||{},t},{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=(0,N.default)(!0,{},S.DEFAULTS,{modules:o},n,e),["bounds","container","scrollingContainer"].forEach(function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),e.modules=Object.keys(e.modules).reduce(function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t},{}),e}function a(t,e,n,r){if(this.options.strict&&!this.isEnabled()&&e===g.default.sources.USER)return new d.default;var o=null==n?null:this.getSelection(),i=this.editor.delta,l=t();if(null!=o&&(!0===n&&(n=o.index),null==r?o=u(o,l,e):0!==r&&(o=u(o,n,r,e)),this.setSelection(o,g.default.sources.SILENT)),l.length()>0){var a,s=[g.default.events.TEXT_CHANGE,l,i,e];if((a=this.emitter).emit.apply(a,[g.default.events.EDITOR_CHANGE].concat(s)),e!==g.default.sources.SILENT){var c;(c=this.emitter).emit.apply(c,s)}}return l}function s(t,e,n,r,o){var i={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(o=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(o=r,r=n,n=e,e=0),"object"===(void 0===n?"undefined":c(n))?(i=n,o=r):"string"==typeof n&&(null!=r?i[n]=r:o=n),o=o||g.default.sources.API,[t,e,i,o]}function u(t,e,n,r){if(null==t)return null;var o=void 0,i=void 0;if(e instanceof d.default){var l=[t.index,t.index+t.length].map(function(t){return e.transformPosition(t,r!==g.default.sources.USER)}),a=f(l,2);o=a[0],i=a[1]}else{var s=[t.index,t.index+t.length].map(function(t){return t<e||t===e&&r===g.default.sources.USER?t:n>=0?t+n:Math.max(e,t+n)}),u=f(s,2);o=u[0],i=u[1]}return new x.Range(o,i-o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(53);var p=n(4),d=r(p),y=n(57),v=r(y),b=n(9),g=r(b),m=n(7),_=r(m),O=n(0),w=r(O),x=n(22),k=r(x),E=n(2),N=r(E),j=n(10),A=r(j),q=n(32),T=r(q),P=(0,A.default)("quill"),S=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),this.options=l(e,r),this.container=this.options.container,null==this.container)return P.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug);var o=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new g.default,this.scroll=w.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new v.default(this.scroll),this.selection=new k.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(g.default.events.EDITOR_CHANGE,function(t){t===g.default.events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())}),this.emitter.on(g.default.events.SCROLL_UPDATE,function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;a.call(n,function(){return n.editor.update(null,e,o)},t)});var s=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">"+o+"<p><br></p></div>");this.setContents(s),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return h(t,null,[{key:"debug",value:function(t){!0===t&&(t="log"),A.default.level(t)}},{key:"find",value:function(t){return t.__quill||w.default.find(t)}},{key:"import",value:function(t){return null==this.imports[t]&&P.error("Cannot import "+t+". Are you sure it was registered?"),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var o=t.attrName||t.blotName;"string"==typeof o?this.register("formats/"+o,t,e):Object.keys(t).forEach(function(r){n.register(r,t[r],e)})}else null==this.imports[t]||r||P.warn("Overwriting "+t+" with",e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?w.default.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()}}]),h(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;t=document.createElement("div"),t.classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.deleteText(t,e)},n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}},{key:"focus",value:function(){var t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.default.sources.API;return a.call(this,function(){var r=n.getSelection(!0),i=new d.default;if(null==r)return i;if(w.default.query(t,w.default.Scope.BLOCK))i=n.editor.formatLine(r.index,r.length,o({},t,e));else{if(0===r.length)return n.selection.format(t,e),i;i=n.editor.formatText(r.index,r.length,o({},t,e))}return n.setSelection(r,g.default.sources.SILENT),i},r)}},{key:"formatLine",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatLine(t,e,l)},o,t,0)}},{key:"formatText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatText(t,e,l)},o,t,0)}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=void 0;n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length);var r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getIndex",value:function(t){return t.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(t){return this.scroll.leaf(t)}},{key:"getLine",value:function(t){return this.scroll.line(t)}},{key:"getLines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return a.call(this,function(){return o.editor.insertEmbed(e,n,r)},i,e)}},{key:"insertText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,0,n,r,o),c=f(u,4);return t=c[0],l=c[2],o=c[3],a.call(this,function(){return i.editor.insertText(t,e,l)},o,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.removeFormat(t,e)},n,t)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){t=new d.default(t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o.delete(1)),r.compose(o)},n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var o=s(e,n,r),i=f(o,4);e=i[0],n=i[1],r=i[3],this.selection.setRange(new x.Range(e,n),r),r!==g.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API,n=(new d.default).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.default.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){return t=new d.default(t),e.editor.applyDelta(t,n)},n,!0)}}]),t}();S.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},S.events=g.default.events,S.sources=g.default.sources,S.version="1.3.6",S.imports={delta:d.default,parchment:w.default,"core/module":_.default,"core/theme":T.default},e.expandConfig=l,e.overload=s,e.default=S},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.quill=e,this.options=n};o.DEFAULTS={},e.default=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default.Text);e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(58),c=r(u),f=n(10),h=r(f),p=(0,h.default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(t){document.addEventListener(t,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t){if(t.__quill&&t.__quill.emitter){var n;(n=t.__quill.emitter).handleDOM.apply(n,e)}})})});var d=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.listeners={},t.on("error",p.error),t}return l(e,t),a(e,[{key:"emit",value:function(){p.log.apply(p,arguments),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.listeners[t.type]||[]).forEach(function(e){var r=e.node,o=e.handler;(t.target===r||r.contains(t.target))&&o.apply(void 0,[t].concat(n))})}},{key:"listenDOM",value:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}]),e}(c.default);d.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},d.sources={API:"api",SILENT:"silent",USER:"user"},e.default=d},function(t,e,n){"use strict";function r(t){if(i.indexOf(t)<=i.indexOf(l)){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console)[t].apply(e,r)}}function o(t){return i.reduce(function(e,n){return e[n]=r.bind(console,n,t),e},{})}Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],l="warn";r.level=o.level=function(t){l=t},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,function(t){return t.name})},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""},t}();e.default=o},function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,c;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(s(t))return!!s(e)&&(t=l.call(t),e=l.call(e),u(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=a(t),h=a(e)}catch(t){return!1}if(f.length!=h.length)return!1;for(f.sort(),h.sort(),i=f.length-1;i>=0;i--)if(f[i]!=h[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!u(t[c],e[c],n))return!1;return typeof t==typeof e}var l=Array.prototype.slice,a=n(55),s=n(56),u=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(4),f=r(c),h=n(0),p=r(h),d=n(3),y=r(d),v=n(5),b=r(v),g=n(8),m=r(g),_=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(b.default);_.blotName="code",_.tagName="CODE";var O=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce(function(e,n){return e.insert(n).insert("\n",t.formats())},new f.default)}},{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n){var r=this.descendant(m.default,this.length()-1),o=a(r,1),i=o[0];null!=i&&i.deleteAt(i.length()-1,1),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}},{key:"formatAt",value:function(t,n,r,o){if(0!==n&&null!=p.default.query(r,p.default.Scope.BLOCK)&&(r!==this.statics.blotName||o!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+n)){var l=this.newlineIndex(t,!0)+1,a=i-l+1,s=this.isolate(l,a),u=s.next;s.format(r,o),u instanceof e&&u.formatAt(0,t-l+n-a,r,o)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var r=this.descendant(m.default,t),o=a(r,2),i=o[0],l=o[1];i.insertAt(l,e)}}},{key:"length",value:function(){var t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}},{key:"newlineIndex",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var e=this.domNode.textContent.slice(t).indexOf("\n");return e>-1?t+e:-1}},{key:"optimize",value:function(t){this.domNode.textContent.endsWith("\n")||this.appendChild(p.default.create("text","\n")),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===n.statics.formats(n.domNode)&&(n.optimize(t),n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t){var e=p.default.find(t);null==e?t.parentNode.removeChild(t):e instanceof p.default.Embed?e.remove():e.unwrap()})}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("spellcheck",!1),n}},{key:"formats",value:function(){return!0}}]),e}(y.default);O.blotName="code-block",O.tagName="PRE",O.TAB="  ",e.Code=_,e.default=O},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"insertInto",value:function(t,n){0===t.children.length?a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertInto",this).call(this,t,n):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),e}(u.default.Embed);c.blotName="break",c.tagName="BR",e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(5),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);n=this.constructor.sanitize(n),this.domNode.setAttribute("href",n)}}],[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return t=this.sanitize(t),n.setAttribute("href",t),n.setAttribute("target","_blank"),n}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return l(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}}]),e}(c.default);f.blotName="link",f.tagName="A",f.SANITIZED_URL="about:blank",f.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=f,e.sanitize=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){t.setAttribute(e,!("true"===t.getAttribute(e)))}Object.defineProperty(e,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(25),u=r(s),c=n(106),f=r(c),h=0,p=function(){function t(e){var n=this;o(this,t),this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){n.togglePicker()}),this.label.addEventListener("keydown",function(t){switch(t.keyCode){case u.default.keys.ENTER:n.togglePicker();break;case u.default.keys.ESCAPE:n.escape(),t.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return a(t,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),i(this.label,"aria-expanded"),i(this.options,"aria-hidden")}},{key:"buildItem",value:function(t){var e=this,n=document.createElement("span");return n.tabIndex="0",n.setAttribute("role","button"),n.classList.add("ql-picker-item"),t.hasAttribute("value")&&n.setAttribute("data-value",t.getAttribute("value")),t.textContent&&n.setAttribute("data-label",t.textContent),n.addEventListener("click",function(){e.selectItem(n,!0)}),n.addEventListener("keydown",function(t){switch(t.keyCode){case u.default.keys.ENTER:e.selectItem(n,!0),t.preventDefault();break;case u.default.keys.ESCAPE:e.escape(),t.preventDefault()}}),n}},{key:"buildLabel",value:function(){var t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=f.default,t.tabIndex="0",t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),this.container.appendChild(t),t}},{key:"buildOptions",value:function(){var t=this,e=document.createElement("span");e.classList.add("ql-picker-options"),e.setAttribute("aria-hidden","true"),e.tabIndex="-1",e.id="ql-picker-options-"+h,h+=1,this.label.setAttribute("aria-controls",e.id),this.options=e,[].slice.call(this.select.options).forEach(function(n){var r=t.buildItem(n);e.appendChild(r),!0===n.selected&&t.selectItem(r)}),this.container.appendChild(e)}},{key:"buildPicker",value:function(){var t=this;[].slice.call(this.select.attributes).forEach(function(e){t.container.setAttribute(e.name,e.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var t=this;this.close(),setTimeout(function(){return t.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.container.querySelector(".ql-selected");if(t!==n&&(null!=n&&n.classList.remove("ql-selected"),null!=t&&(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e))){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"===("undefined"==typeof Event?"undefined":l(Event))){var r=document.createEvent("Event");r.initEvent("change",!0,!0),this.select.dispatchEvent(r)}this.close()}}},{key:"update",value:function(){var t=void 0;if(this.select.selectedIndex>-1){var e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);var n=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",n)}}]),t}();e.default=p},function(t,e,n){"use strict";function r(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach(function(t){e.domNode.appendChild(t)}),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(47),l=n(27),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.build(),n}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){t.prototype.attach.call(this),this.children.forEach(function(t){t.attach()})},e.prototype.build=function(){var t=this;this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(e){try{var n=r(e);t.insertBefore(n,t.children.head||void 0)}catch(t){if(t instanceof a.ParchmentError)return;throw t}})},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,function(t,e,n){t.deleteAt(e,n)})},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,function(n,r,l){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=l}),o},e.prototype.detach=function(){this.children.forEach(function(t){t.detach()}),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,function(t,e,o){t.formatAt(e,o,n,r)})},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var l=null==n?a.create("text",e):a.create(e,n);this.appendChild(l)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some(function(e){return t instanceof e}))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce(function(t,e){return t+e.length()},0)},e.prototype.moveChildren=function(t,e){this.children.forEach(function(n){t.insertBefore(n,e)})},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var n=a.create(this.statics.defaultChild);this.appendChild(n),n.optimize(e)}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],l=[[this,t]];return o instanceof e?l.concat(o.path(i,n)):(null!=o&&l.push([o,i]),l)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),function(t,r,o){t=t.split(r,e),n.appendChild(t)}),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var n=this,o=[],i=[];t.forEach(function(t){t.target===n.domNode&&"childList"===t.type&&(o.push.apply(o,t.addedNodes),i.push.apply(i,t.removedNodes))}),i.forEach(function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=a.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==n.domNode||e.detach())}}),o.filter(function(t){return t.parentNode==n.domNode}).sort(function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(t){var e=null;null!=t.nextSibling&&(e=a.find(t.nextSibling));var o=r(t);o.next==e&&null!=o.next||(null!=o.parent&&o.parent.removeChild(n),n.insertBefore(o,e||void 0))})},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(28),l=n(17),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.attributes=new i.default(n.domNode),n}return r(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.format=function(t,e){var n=a.query(t);n instanceof o.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e,n){var r=this;t.prototype.update.call(this,e,n),e.some(function(t){return t.target===r.domNode&&"attributes"===t.type})&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){return t={},t[this.statics.blotName]=this.statics.value(this.domNode)||!0,t;var t},e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){function r(t){this.ops=t,this.index=0,this.offset=0}var o=n(12),i=n(2),l={attributes:{compose:function(t,e,n){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=i(!0,{},e);n||(r=Object.keys(r).reduce(function(t,e){return null!=r[e]&&(t[e]=r[e]),t},{}));for(var o in t)void 0!==t[o]&&void 0===e[o]&&(r[o]=t[o]);return Object.keys(r).length>0?r:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce(function(n,r){return o(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n},{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e;var r=Object.keys(e).reduce(function(n,r){return void 0===t[r]&&(n[r]=e[r]),n},{});return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new r(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};r.prototype.hasNext=function(){return this.peekLength()<1/0},r.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=l.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},r.prototype.peek=function(){return this.ops[this.index]},r.prototype.peekLength=function(){return this.ops[this.index]?l.length(this.ops[this.index])-this.offset:1/0},r.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},t.exports=l},function(t,e){var n=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}function e(n,r,o,i,c){function f(n,o){if(null===n)return null;if(0===o)return n;var y,v;if("object"!=typeof n)return n;if(t(n,a))y=new a;else if(t(n,s))y=new s;else if(t(n,u))y=new u(function(t,e){n.then(function(e){t(f(e,o-1))},function(t){e(f(t,o-1))})});else if(e.__isArray(n))y=[];else if(e.__isRegExp(n))y=new RegExp(n.source,l(n)),n.lastIndex&&(y.lastIndex=n.lastIndex);else if(e.__isDate(n))y=new Date(n.getTime());else{if(d&&Buffer.isBuffer(n))return y=new Buffer(n.length),n.copy(y),y;t(n,Error)?y=Object.create(n):void 0===i?(v=Object.getPrototypeOf(n),y=Object.create(v)):(y=Object.create(i),v=i)}if(r){var b=h.indexOf(n);if(-1!=b)return p[b];h.push(n),p.push(y)}t(n,a)&&n.forEach(function(t,e){var n=f(e,o-1),r=f(t,o-1);y.set(n,r)}),t(n,s)&&n.forEach(function(t){var e=f(t,o-1);y.add(e)});for(var g in n){var m;v&&(m=Object.getOwnPropertyDescriptor(v,g)),m&&null==m.set||(y[g]=f(n[g],o-1))}if(Object.getOwnPropertySymbols)for(var _=Object.getOwnPropertySymbols(n),g=0;g<_.length;g++){var O=_[g],w=Object.getOwnPropertyDescriptor(n,O);(!w||w.enumerable||c)&&(y[O]=f(n[O],o-1),w.enumerable||Object.defineProperty(y,O,{enumerable:!1}))}if(c)for(var x=Object.getOwnPropertyNames(n),g=0;g<x.length;g++){var k=x[g],w=Object.getOwnPropertyDescriptor(n,k);w&&w.enumerable||(y[k]=f(n[k],o-1),Object.defineProperty(y,k,{enumerable:!1}))}return y}"object"==typeof r&&(o=r.depth,i=r.prototype,c=r.includeNonEnumerable,r=r.circular);var h=[],p=[],d="undefined"!=typeof Buffer;return void 0===r&&(r=!0),void 0===o&&(o=1/0),f(n,o)}function n(t){return Object.prototype.toString.call(t)}function r(t){return"object"==typeof t&&"[object Date]"===n(t)}function o(t){return"object"==typeof t&&"[object Array]"===n(t)}function i(t){return"object"==typeof t&&"[object RegExp]"===n(t)}function l(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}var a;try{a=Map}catch(t){a=function(){}}var s;try{s=Set}catch(t){s=function(){}}var u;try{u=Promise}catch(t){u=function(){}}return e.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},e.__objToStr=n,e.__isDate=r,e.__isArray=o,e.__isRegExp=i,e.__getRegExpFlags=l,e}();"object"==typeof t&&t.exports&&(t.exports=n)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){try{e.parentNode}catch(t){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),c=r(u),f=n(21),h=r(f),p=n(12),d=r(p),y=n(9),v=r(y),b=n(10),g=r(b),m=(0,g.default)("quill:selection"),_=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,t),this.index=e,this.length=n},O=function(){function t(e,n){var r=this;i(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=c.default.create("cursor",this),this.lastRange=this.savedRange=new _(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){r.mouseDown||setTimeout(r.update.bind(r,v.default.sources.USER),1)}),this.emitter.on(v.default.events.EDITOR_CHANGE,function(t,e){t===v.default.events.TEXT_CHANGE&&e.length()>0&&r.update(v.default.sources.SILENT)}),this.emitter.on(v.default.events.SCROLL_BEFORE_UPDATE,function(){if(r.hasFocus()){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(v.default.events.SCROLL_UPDATE,function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(t){}})}}),this.emitter.on(v.default.events.SCROLL_OPTIMIZE,function(t,e){if(e.range){var n=e.range,o=n.startNode,i=n.startOffset,l=n.endNode,a=n.endOffset;r.setNativeRange(o,i,l,a)}}),this.update(v.default.sources.SILENT)}return s(t,[{key:"handleComposition",value:function(){var t=this;this.root.addEventListener("compositionstart",function(){t.composing=!0}),this.root.addEventListener("compositionend",function(){if(t.composing=!1,t.cursor.parent){var e=t.cursor.restore();if(!e)return;setTimeout(function(){t.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)},1)}})}},{key:"handleDragging",value:function(){var t=this;this.emitter.listenDOM("mousedown",document.body,function(){t.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){t.mouseDown=!1,t.update(v.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(t,e){if(null==this.scroll.whitelist||this.scroll.whitelist[t]){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!c.default.query(t,c.default.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=c.default.find(n.start.node,!1);if(null==r)return;if(r instanceof c.default.Leaf){var o=r.split(n.start.offset);r.parent.insertBefore(this.cursor,o)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var r=void 0,o=this.scroll.leaf(t),i=a(o,2),l=i[0],s=i[1];if(null==l)return null;var u=l.position(s,!0),c=a(u,2);r=c[0],s=c[1];var f=document.createRange();if(e>0){f.setStart(r,s);var h=this.scroll.leaf(t+e),p=a(h,2);if(l=p[0],s=p[1],null==l)return null;var d=l.position(s,!0),y=a(d,2);return r=y[0],s=y[1],f.setEnd(r,s),f.getBoundingClientRect()}var v="left",b=void 0;return r instanceof Text?(s<r.data.length?(f.setStart(r,s),f.setEnd(r,s+1)):(f.setStart(r,s-1),f.setEnd(r,s),v="right"),b=f.getBoundingClientRect()):(b=l.domNode.getBoundingClientRect(),s>0&&(v="right")),{bottom:b.top+b.height,height:b.height,left:b[v],right:b[v],top:b.top,width:0}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;var n=this.normalizeNative(e);return m.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this.getNativeRange();return null==t?[null,null]:[this.normalizedToRange(t),t]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(t){var e=this,n=[[t.start.node,t.start.offset]];t.native.collapsed||n.push([t.end.node,t.end.offset]);var r=n.map(function(t){var n=a(t,2),r=n[0],o=n[1],i=c.default.find(r,!0),l=i.offset(e.scroll);return 0===o?l:i instanceof c.default.Container?l+i.length():l+i.index(r,o)}),i=Math.min(Math.max.apply(Math,o(r)),this.scroll.length()-1),l=Math.min.apply(Math,[i].concat(o(r)));return new _(l,i-l)}},{key:"normalizeNative",value:function(t){if(!l(this.root,t.startContainer)||!t.collapsed&&!l(this.root,t.endContainer))return null;var e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach(function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;e=e.lastChild,n=e instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n}),e}},{key:"rangeToNative",value:function(t){var e=this,n=t.collapsed?[t.index]:[t.index,t.index+t.length],r=[],o=this.scroll.length();return n.forEach(function(t,n){t=Math.min(o-1,t);var i=void 0,l=e.scroll.leaf(t),s=a(l,2),u=s[0],c=s[1],f=u.position(c,0!==n),h=a(f,2);i=h[0],c=h[1],r.push(i,c)}),r.length<2&&(r=r.concat(r)),r}},{key:"scrollIntoView",value:function(t){var e=this.lastRange;if(null!=e){var n=this.getBounds(e.index,e.length);if(null!=n){var r=this.scroll.length()-1,o=this.scroll.line(Math.min(e.index,r)),i=a(o,1),l=i[0],s=l;if(e.length>0){var u=this.scroll.line(Math.min(e.index+e.length,r));s=a(u,1)[0]}if(null!=l&&null!=s){var c=t.getBoundingClientRect();n.top<c.top?t.scrollTop-=c.top-n.top:n.bottom>c.bottom&&(t.scrollTop+=n.bottom-c.bottom)}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){this.hasFocus()||this.root.focus();var l=(this.getNativeRange()||{}).native;if(null==l||o||t!==l.startContainer||e!==l.startOffset||n!==l.endContainer||r!==l.endOffset){"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);var a=document.createRange();a.setStart(t,e),a.setEnd(n,r),i.removeAllRanges(),i.addRange(a)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.default.sources.API;if("string"==typeof e&&(n=e,e=!1),m.info("setRange",t),null!=t){var r=this.rangeToNative(t);this.setNativeRange.apply(this,o(r).concat([e]))}else this.setNativeRange(null);this.update(n)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.default.sources.USER,e=this.lastRange,n=this.getRange(),r=a(n,2),o=r[0],i=r[1];if(this.lastRange=o,null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,d.default)(e,this.lastRange)){var l;!this.composing&&null!=i&&i.native.collapsed&&i.start.node!==this.cursor.textNode&&this.cursor.restore();var s=[v.default.events.SELECTION_CHANGE,(0,h.default)(this.lastRange),(0,h.default)(e),t];if((l=this.emitter).emit.apply(l,[v.default.events.EDITOR_CHANGE].concat(s)),t!==v.default.sources.SILENT){var u;(u=this.emitter).emit.apply(u,s)}}}}]),t}();e.Range=_,e.default=O},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=r(a),u=n(3),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s.default.Container);f.allowedChildren=[c.default,u.BlockEmbed,f],e.default=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t);return n.startsWith("rgb(")?(n=n.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+n.split(",").map(function(t){return("00"+parseInt(t).toString(16)).slice(-2)}).join("")):n}}]),e}(u.default.Attributor.Style),f=new u.default.Attributor.Class("color","ql-color",{scope:u.default.Scope.INLINE}),h=new c("color","color",{scope:u.default.Scope.INLINE});e.ColorAttributor=c,e.ColorClass=f,e.ColorStyle=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n,r=t===D.keys.LEFT?"prefix":"suffix";return n={key:t,shiftKey:e,altKey:null},o(n,r,/^$/),o(n,"handler",function(n){var r=n.index;t===D.keys.RIGHT&&(r+=n.length+1);var o=this.quill.getLeaf(r);return!(b(o,1)[0]instanceof T.default.Embed)||(t===D.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,S.default.sources.USER):this.quill.setSelection(n.index-1,S.default.sources.USER):e?this.quill.setSelection(n.index,n.length+1,S.default.sources.USER):this.quill.setSelection(n.index+n.length+1,S.default.sources.USER),!1)}),n}function u(t,e){if(!(0===t.index||this.quill.getLength()<=1)){var n=this.quill.getLine(t.index),r=b(n,1),o=r[0],i={};if(0===e.offset){var l=this.quill.getLine(t.index-1),a=b(l,1),s=a[0];if(null!=s&&s.length()>1){var u=o.formats(),c=this.quill.getFormat(t.index-1,1);i=A.default.attributes.diff(u,c)||{}}}var f=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;this.quill.deleteText(t.index-f,f,S.default.sources.USER),Object.keys(i).length>0&&this.quill.formatLine(t.index-f,f,i,S.default.sources.USER),this.quill.focus()}}function c(t,e){var n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(!(t.index>=this.quill.getLength()-n)){var r={},o=0,i=this.quill.getLine(t.index),l=b(i,1),a=l[0];if(e.offset>=a.length()-1){var s=this.quill.getLine(t.index+1),u=b(s,1),c=u[0];if(c){var f=a.formats(),h=this.quill.getFormat(t.index,1);r=A.default.attributes.diff(f,h)||{},o=c.length()}}this.quill.deleteText(t.index,n,S.default.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index+o-1,n,r,S.default.sources.USER)}}function f(t){var e=this.quill.getLines(t),n={};if(e.length>1){var r=e[0].formats(),o=e[e.length-1].formats();n=A.default.attributes.diff(o,r)||{}}this.quill.deleteText(t,S.default.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,S.default.sources.USER),this.quill.setSelection(t.index,S.default.sources.SILENT),this.quill.focus()}function h(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce(function(t,n){return T.default.query(n,T.default.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t},{});this.quill.insertText(t.index,"\n",r,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.focus(),Object.keys(e.format).forEach(function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],S.default.sources.USER))})}function p(t){return{key:D.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=T.default.query("code-block"),r=e.index,o=e.length,i=this.quill.scroll.descendant(n,r),l=b(i,2),a=l[0],s=l[1];if(null!=a){var u=this.quill.getIndex(a),c=a.newlineIndex(s,!0)+1,f=a.newlineIndex(u+s+o),h=a.domNode.textContent.slice(c,f).split("\n");s=0,h.forEach(function(e,i){t?(a.insertAt(c+s,n.TAB),s+=n.TAB.length,0===i?r+=n.TAB.length:o+=n.TAB.length):e.startsWith(n.TAB)&&(a.deleteAt(c+s,n.TAB.length),s-=n.TAB.length,0===i?r-=n.TAB.length:o-=n.TAB.length),s+=e.length+1}),this.quill.update(S.default.sources.USER),this.quill.setSelection(r,o,S.default.sources.SILENT)}}}}function d(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],S.default.sources.USER)}}}function y(t){if("string"==typeof t||"number"==typeof t)return y({key:t});if("object"===(void 0===t?"undefined":v(t))&&(t=(0,_.default)(t,!1)),"string"==typeof t.key)if(null!=D.keys[t.key.toUpperCase()])t.key=D.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t.shortKey&&(t[B]=t.shortKey,delete t.shortKey),t}Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),m=n(21),_=r(m),O=n(12),w=r(O),x=n(2),k=r(x),E=n(4),N=r(E),j=n(20),A=r(j),q=n(0),T=r(q),P=n(6),S=r(P),C=n(10),L=r(C),M=n(7),R=r(M),I=(0,L.default)("quill:keyboard"),B=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",D=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.bindings={},Object.keys(r.options.bindings).forEach(function(e){("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&r.options.bindings[e]&&r.addBinding(r.options.bindings[e])}),r.addBinding({key:e.keys.ENTER,shiftKey:null},h),r.addBinding({key:e.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0},c)):(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0,suffix:/^.?$/},c)),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!1},f),r.addBinding({key:e.keys.DELETE},{collapsed:!1},f),r.addBinding({key:e.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},u),r.listen(),r}return a(e,t),g(e,null,[{key:"match",value:function(t,e){return e=y(e),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(n){return!!e[n]!==t[n]&&null!==e[n]})&&e.key===(t.which||t.keyCode)}}]),g(e,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=y(t);if(null==r||null==r.key)return I.warn("Attempted to add invalid keyboard binding",r);"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=(0,k.default)(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",function(n){if(!n.defaultPrevented){var r=n.which||n.keyCode,o=(t.bindings[r]||[]).filter(function(t){return e.match(n,t)});if(0!==o.length){var i=t.quill.getSelection();if(null!=i&&t.quill.hasFocus()){var l=t.quill.getLine(i.index),a=b(l,2),s=a[0],u=a[1],c=t.quill.getLeaf(i.index),f=b(c,2),h=f[0],p=f[1],d=0===i.length?[h,p]:t.quill.getLeaf(i.index+i.length),y=b(d,2),g=y[0],m=y[1],_=h instanceof T.default.Text?h.value().slice(0,p):"",O=g instanceof T.default.Text?g.value().slice(m):"",x={collapsed:0===i.length,empty:0===i.length&&s.length()<=1,format:t.quill.getFormat(i),offset:u,prefix:_,suffix:O};o.some(function(e){if(null!=e.collapsed&&e.collapsed!==x.collapsed)return!1;if(null!=e.empty&&e.empty!==x.empty)return!1;if(null!=e.offset&&e.offset!==x.offset)return!1;if(Array.isArray(e.format)){if(e.format.every(function(t){return null==x.format[t]}))return!1}else if("object"===v(e.format)&&!Object.keys(e.format).every(function(t){return!0===e.format[t]?null!=x.format[t]:!1===e.format[t]?null==x.format[t]:(0,w.default)(e.format[t],x.format[t])}))return!1;return!(null!=e.prefix&&!e.prefix.test(x.prefix))&&(!(null!=e.suffix&&!e.suffix.test(x.suffix))&&!0!==e.handler.call(t,i,x))})&&n.preventDefault()}}}})}}]),e}(R.default);D.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},D.DEFAULTS={bindings:{bold:d("bold"),italic:d("italic"),underline:d("underline"),indent:{key:D.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",S.default.sources.USER)}},outdent:{key:D.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","-1",S.default.sources.USER)}},"outdent backspace":{key:D.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",S.default.sources.USER):null!=e.format.list&&this.quill.format("list",!1,S.default.sources.USER)}},"indent code-block":p(!0),"outdent code-block":p(!1),"remove tab":{key:D.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,S.default.sources.USER)}},tab:{key:D.keys.TAB,handler:function(t){this.quill.history.cutoff();var e=(new N.default).retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e,S.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,S.default.sources.SILENT)}},"list empty enter":{key:D.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,S.default.sources.USER),e.format.indent&&this.quill.format("indent",!1,S.default.sources.USER)}},"checklist enter":{key:D.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){var e=this.quill.getLine(t.index),n=b(e,2),r=n[0],o=n[1],i=(0,k.default)({},r.formats(),{list:"checked"}),l=(new N.default).retain(t.index).insert("\n",i).retain(r.length()-o-1).retain(1,{list:"unchecked"});this.quill.updateContents(l,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:D.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t,e){var n=this.quill.getLine(t.index),r=b(n,2),o=r[0],i=r[1],l=(new N.default).retain(t.index).insert("\n",e.format).retain(o.length()-i-1).retain(1,{header:null});this.quill.updateContents(l,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(t,e){var n=e.prefix.length,r=this.quill.getLine(t.index),o=b(r,2),i=o[0],l=o[1];if(l>n)return!0;var a=void 0;switch(e.prefix.trim()){case"[]":case"[ ]":a="unchecked";break;case"[x]":a="checked";break;case"-":case"*":a="bullet";break;default:a="ordered"}this.quill.insertText(t.index," ",S.default.sources.USER),this.quill.history.cutoff();var s=(new N.default).retain(t.index-l).delete(n+1).retain(i.length()-2-l).retain(1,{list:a});this.quill.updateContents(s,S.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-n,S.default.sources.SILENT)}},"code exit":{key:D.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(t){var e=this.quill.getLine(t.index),n=b(e,2),r=n[0],o=n[1],i=(new N.default).retain(t.index+r.length()-o-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(i,S.default.sources.USER)}},"embed left":s(D.keys.LEFT,!1),"embed left shift":s(D.keys.LEFT,!0),"embed right":s(D.keys.RIGHT,!1),"embed right shift":s(D.keys.RIGHT,!0)}},e.default=D,e.SHORTKEY=B},function(t,e,n){"use strict";t.exports={align:{"":n(75),center:n(76),right:n(77),justify:n(78)},background:n(79),blockquote:n(80),bold:n(81),clean:n(82),code:n(40),"code-block":n(40),color:n(83),direction:{"":n(84),rtl:n(85)},float:{center:n(86),full:n(87),left:n(88),right:n(89)},formula:n(90),header:{1:n(91),2:n(92)},italic:n(93),image:n(94),indent:{"+1":n(95),"-1":n(96)},link:n(97),list:{ordered:n(98),bullet:n(99),check:n(100)},script:{sub:n(101),super:n(102)},strike:n(103),underline:n(104),video:n(105)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t){this.domNode=t,this.domNode[r.DATA_KEY]={blot:this}}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){null!=this.parent&&(this.scroll=this.parent.scroll)},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var l=r.create(this.statics.scope);i.wrap(l),l.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){void 0===e&&(e=null),null!=this.parent&&this.parent.children.remove(this);var n=null;t.children.insertBefore(this,e),null!=e&&(n=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),this.parent=t,this.attach()},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n(29),i=n(30),l=n(1),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r.default.keys(this.domNode),n=o.default.keys(this.domNode),a=i.default.keys(this.domNode);e.concat(n).concat(a).forEach(function(e){var n=l.query(e,l.Scope.ATTRIBUTE);n instanceof r.default&&(t.attributes[n.attrName]=n)})},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach(function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)})},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach(function(t){e.attributes[t].remove(e.domNode)}),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce(function(e,n){return e[n]=t.attributes[n].value(t.domNode),e},{})},t}();e.default=a},function(t,e,n){"use strict";function r(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter(function(t){return 0===t.indexOf(e+"-")})}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map(function(t){return t.split("-").slice(0,-1).join("-")})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){r(t,this.keyName).forEach(function(e){t.classList.remove(e)}),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=r(t,this.keyName)[0]||"",n=e.slice(this.keyName.length+1);return this.canAdd(t,n)?n:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t){var e=t.split("-"),n=e.slice(1).map(function(t){return t[0].toUpperCase()+t.slice(1)}).join("");return e[0]+n}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map(function(t){return t.split(":")[0].trim()})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[r(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[r(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[r(this.keyName)];return this.canAdd(t,e)?e:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),h=n(8),p=r(h),d=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.selection=n,r.textNode=document.createTextNode(e.CONTENTS),r.domNode.appendChild(r.textNode),r._length=0,r}return l(e,t),u(e,null,[{key:"value",value:function(){}}]),u(e,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,n){if(0!==this._length)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);for(var r=this,o=0;null!=r&&r.statics.scope!==f.default.Scope.BLOCK_BLOT;)o+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=e.CONTENTS.length,r.optimize(),r.formatAt(o,e.CONTENTS.length,t,n),this._length=0)}},{key:"index",value:function(t,n){return t===this.textNode?0:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&null!=this.parent){var t=this.textNode,n=this.selection.getNativeRange(),r=void 0,o=void 0,i=void 0;if(null!=n&&n.start.node===t&&n.end.node===t){var l=[t,n.start.offset,n.end.offset];r=l[0],o=l[1],i=l[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==e.CONTENTS){var s=this.textNode.data.split(e.CONTENTS).join("");this.next instanceof p.default?(r=this.next.domNode,this.next.insertAt(0,s),this.textNode.data=e.CONTENTS):(this.textNode.data=s,this.parent.insertBefore(f.default.create(this.textNode),this),this.textNode=document.createTextNode(e.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),null!=o){var u=[o,i].map(function(t){return Math.max(0,Math.min(r.data.length,t-1))}),c=a(u,2);return o=c[0],i=c[1],{startNode:r,startOffset:o,endNode:r,endOffset:i}}}}},{key:"update",value:function(t,e){var n=this;if(t.some(function(t){return"characterData"===t.type&&t.target===n.textNode})){var r=this.restore();r&&(e.range=r)}}},{key:"value",value:function(){return""}}]),e}(f.default.Embed);d.blotName="cursor",d.className="ql-cursor",d.tagName="span",d.CONTENTS="\ufeff",e.default=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){r(this,t),this.quill=e,this.options=n,this.modules={}}return o(t,[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach(function(e){null==t.modules[e]&&t.addModule(e)})}},{key:"addModule",value:function(t){var e=this.quill.constructor.import("modules/"+t);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}]),t}();i.DEFAULTS={modules:{}},i.themes={default:i},e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(8),h=r(f),p="\ufeff",d=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.contentNode=document.createElement("span"),n.contentNode.setAttribute("contenteditable",!1),[].slice.call(n.domNode.childNodes).forEach(function(t){n.contentNode.appendChild(t)}),n.leftGuard=document.createTextNode(p),n.rightGuard=document.createTextNode(p),n.domNode.appendChild(n.leftGuard),n.domNode.appendChild(n.contentNode),n.domNode.appendChild(n.rightGuard),n}return l(e,t),a(e,[{key:"index",value:function(t,n){return t===this.leftGuard?0:t===this.rightGuard?1:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"restore",value:function(t){var e=void 0,n=void 0,r=t.data.split(p).join("");if(t===this.leftGuard)if(this.prev instanceof h.default){var o=this.prev.length();this.prev.insertAt(o,r),e={startNode:this.prev.domNode,startOffset:o+r.length}}else n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this),e={startNode:n,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof h.default?(this.next.insertAt(0,r),e={startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this.next),e={startNode:n,startOffset:r.length}));return t.data=p,e}},{key:"update",value:function(t,e){var n=this;t.forEach(function(t){if("characterData"===t.type&&(t.target===n.leftGuard||t.target===n.rightGuard)){var r=n.restore(t.target);r&&(e.range=r)}})}}]),e}(c.default.Embed);e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["right","center","justify"]},l=new o.default.Attributor.Attribute("align","align",i),a=new o.default.Attributor.Class("align","ql-align",i),s=new o.default.Attributor.Style("align","text-align",i);e.AlignAttribute=l,e.AlignClass=a,e.AlignStyle=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(24),l=new o.default.Attributor.Class("background","ql-bg",{scope:o.default.Scope.INLINE}),a=new i.ColorAttributor("background","background-color",{scope:o.default.Scope.INLINE});e.BackgroundClass=l,e.BackgroundStyle=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["rtl"]},l=new o.default.Attributor.Attribute("direction","dir",i),a=new o.default.Attributor.Class("direction","ql-direction",i),s=new o.default.Attributor.Style("direction","direction",i);e.DirectionAttribute=l,e.DirectionClass=a,e.DirectionStyle=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c={scope:u.default.Scope.INLINE,whitelist:["serif","monospace"]},f=new u.default.Attributor.Class("font","ql-font",c),h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t).replace(/["']/g,"")}}]),e}(u.default.Attributor.Style),p=new h("font","font-family",c);e.FontStyle=p,e.FontClass=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=new o.default.Attributor.Class("size","ql-size",{scope:o.default.Scope.INLINE,whitelist:["small","large","huge"]}),l=new o.default.Attributor.Style("size","font-size",{scope:o.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=i,e.SizeStyle=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"optimize",value:function(t){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),e}(u.default);c.blotName="bold",c.tagName=["STRONG","B"],e.default=c},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(16),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.label.innerHTML=n,i.container.classList.add("ql-color-picker"),[].slice.call(i.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(t){t.classList.add("ql-primary")}),i}return i(e,t),l(e,[{key:"buildItem",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"buildItem",this).call(this,t);return n.style.backgroundColor=t.getAttribute("value")||"",n}},{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n);var r=this.label.querySelector(".ql-color-label"),o=t?t.getAttribute("data-value")||"":"";r&&("line"===r.tagName?r.style.stroke=o:r.style.fill=o)}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(16),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.container.classList.add("ql-icon-picker"),[].forEach.call(i.container.querySelectorAll(".ql-picker-item"),function(t){t.innerHTML=n[t.getAttribute("data-value")||""]}),i.defaultItem=i.container.querySelector(".ql-selected"),i.selectItem(i.defaultItem),i}return i(e,t),l(e,[{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){var o=this;r(this,t),this.quill=e,this.boundsContainer=n||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){o.root.style.marginTop=-1*o.quill.root.scrollTop+"px"}),this.hide()}return o(t,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(t){var e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=n+"px",this.root.classList.remove("ql-flip");var r=this.boundsContainer.getBoundingClientRect(),o=this.root.getBoundingClientRect(),i=0;if(o.right>r.right&&(i=r.right-o.right,this.root.style.left=e+i+"px"),o.left<r.left&&(i=r.left-o.left,this.root.style.left=e+i+"px"),o.bottom>r.bottom){var l=o.bottom-o.top,a=t.bottom-t.top+l;this.root.style.top=n-a+"px",this.root.classList.add("ql-flip")}return i}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),t}();e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return e?(e[1]||"https")+"://www.youtube.com/embed/"+e[2]+"?showinfo=0":(e=t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(e[1]||"https")+"://player.vimeo.com/video/"+e[2]+"/":t}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach(function(e){var r=document.createElement("option");e===n?r.setAttribute("selected","selected"):r.setAttribute("value",e),t.appendChild(r)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(2),h=r(f),p=n(4),d=r(p),y=n(9),v=r(y),b=n(25),g=r(b),m=n(32),_=r(m),O=n(41),w=r(O),x=n(42),k=r(x),E=n(16),N=r(E),j=n(43),A=r(j),q=[!1,"center","right","justify"],T=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],P=[!1,"serif","monospace"],S=["1","2","3",!1],C=["small",!1,"large","huge"],L=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=function e(n){if(!document.body.contains(t.root))return document.body.removeEventListener("click",e);null==r.tooltip||r.tooltip.root.contains(n.target)||document.activeElement===r.tooltip.textbox||r.quill.hasFocus()||r.tooltip.hide(),null!=r.pickers&&r.pickers.forEach(function(t){t.container.contains(n.target)||t.close()})};return t.emitter.listenDOM("click",document.body,l),r}return l(e,t),u(e,[{key:"addModule",value:function(t){var n=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addModule",this).call(this,t);return"toolbar"===t&&this.extendToolbar(n),n}},{key:"buildButtons",value:function(t,e){t.forEach(function(t){(t.getAttribute("class")||"").split(/\s+/).forEach(function(n){if(n.startsWith("ql-")&&(n=n.slice("ql-".length),null!=e[n]))if("direction"===n)t.innerHTML=e[n][""]+e[n].rtl;else if("string"==typeof e[n])t.innerHTML=e[n];else{var r=t.value||"";null!=r&&e[n][r]&&(t.innerHTML=e[n][r])}})})}},{key:"buildPickers",value:function(t,e){var n=this;this.pickers=t.map(function(t){if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&s(t,q),new k.default(t,e.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var n=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&s(t,T,"background"===n?"#ffffff":"#000000"),new w.default(t,e[n])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?s(t,P):t.classList.contains("ql-header")?s(t,S):t.classList.contains("ql-size")&&s(t,C)),new N.default(t)});var r=function(){n.pickers.forEach(function(t){t.update()})};this.quill.on(v.default.events.EDITOR_CHANGE,r)}}]),e}(_.default);L.DEFAULTS=(0,h.default)(!0,{},_.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var t=this,e=this.container.querySelector("input.ql-image[type=file]");null==e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),e.classList.add("ql-image"),e.addEventListener("change",function(){if(null!=e.files&&null!=e.files[0]){var n=new FileReader;n.onload=function(n){var r=t.quill.getSelection(!0);t.quill.updateContents((new d.default).retain(r.index).delete(r.length).insert({image:n.target.result}),v.default.sources.USER),t.quill.setSelection(r.index+1,v.default.sources.SILENT),e.value=""},n.readAsDataURL(e.files[0])}}),this.container.appendChild(e)),e.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var M=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.textbox=r.root.querySelector('input[type="text"]'),r.listen(),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;this.textbox.addEventListener("keydown",function(e){g.default.match(e,"enter")?(t.save(),e.preventDefault()):g.default.match(e,"escape")&&(t.cancel(),e.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+t)||""),this.root.setAttribute("data-mode",t)}},{key:"restoreFocus",value:function(){var t=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=t}},{key:"save",value:function(){var t=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var e=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,v.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,v.default.sources.USER)),this.quill.root.scrollTop=e;break;case"video":t=a(t);case"formula":if(!t)break;var n=this.quill.getSelection(!0);if(null!=n){var r=n.index+n.length;this.quill.insertEmbed(r,this.root.getAttribute("data-mode"),t,v.default.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(r+1," ",v.default.sources.USER),this.quill.setSelection(r+2,v.default.sources.USER)}}this.textbox.value="",this.hide()}}]),e}(A.default);e.BaseTooltip=M,e.default=L},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(46),i=r(o),l=n(34),a=n(36),s=n(62),u=n(63),c=r(u),f=n(64),h=r(f),p=n(65),d=r(p),y=n(35),v=n(24),b=n(37),g=n(38),m=n(39),_=r(m),O=n(66),w=r(O),x=n(15),k=r(x),E=n(67),N=r(E),j=n(68),A=r(j),q=n(69),T=r(q),P=n(70),S=r(P),C=n(71),L=r(C),M=n(13),R=r(M),I=n(72),B=r(I),D=n(73),U=r(D),F=n(74),H=r(F),K=n(26),z=r(K),Z=n(16),V=r(Z),W=n(41),G=r(W),Y=n(42),X=r(Y),$=n(43),Q=r($),J=n(107),tt=r(J),et=n(108),nt=r(et);i.default.register({"attributors/attribute/direction":a.DirectionAttribute,"attributors/class/align":l.AlignClass,"attributors/class/background":y.BackgroundClass,"attributors/class/color":v.ColorClass,"attributors/class/direction":a.DirectionClass,"attributors/class/font":b.FontClass,"attributors/class/size":g.SizeClass,"attributors/style/align":l.AlignStyle,"attributors/style/background":y.BackgroundStyle,"attributors/style/color":v.ColorStyle,"attributors/style/direction":a.DirectionStyle,"attributors/style/font":b.FontStyle,"attributors/style/size":g.SizeStyle},!0),i.default.register({"formats/align":l.AlignClass,"formats/direction":a.DirectionClass,"formats/indent":s.IndentClass,"formats/background":y.BackgroundStyle,"formats/color":v.ColorStyle,"formats/font":b.FontClass,"formats/size":g.SizeClass,"formats/blockquote":c.default,"formats/code-block":R.default,"formats/header":h.default,"formats/list":d.default,"formats/bold":_.default,"formats/code":M.Code,"formats/italic":w.default,"formats/link":k.default,"formats/script":N.default,"formats/strike":A.default,"formats/underline":T.default,"formats/image":S.default,"formats/video":L.default,"formats/list/item":p.ListItem,"modules/formula":B.default,"modules/syntax":U.default,"modules/toolbar":H.default,"themes/bubble":tt.default,"themes/snow":nt.default,"ui/icons":z.default,"ui/picker":V.default,"ui/icon-picker":X.default,"ui/color-picker":G.default,"ui/tooltip":Q.default},!0),e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=r(o),l=n(6),a=r(l),s=n(3),u=r(s),c=n(14),f=r(c),h=n(23),p=r(h),d=n(31),y=r(d),v=n(33),b=r(v),g=n(5),m=r(g),_=n(59),O=r(_),w=n(8),x=r(w),k=n(60),E=r(k),N=n(61),j=r(N),A=n(25),q=r(A);a.default.register({"blots/block":u.default,"blots/block/embed":s.BlockEmbed,"blots/break":f.default,"blots/container":p.default,"blots/cursor":y.default,"blots/embed":b.default,"blots/inline":m.default,"blots/scroll":O.default,"blots/text":x.default,"modules/clipboard":E.default,"modules/history":j.default,"modules/keyboard":q.default}),i.default.register(u.default,f.default,y.default,m.default,O.default,x.default),e.default=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.head=this.tail=null,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t&&(t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],l=o[1],a=t-l,s=this.iterator(i);(r=s())&&a<t+e;){var u=r.length();t>a?n(r,t-a,Math.min(e,a+u-t)):n(r,0,Math.min(u,t+e-a)),a+=u}},t.prototype.map=function(t){return this.reduce(function(e,n){return e.push(t(n)),e},[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();e.default=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n(1),l={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},a=function(t){function e(e){var n=t.call(this,e)||this;return n.scroll=n,n.observer=new MutationObserver(function(t){n.update(t)}),n.observer.observe(n.domNode,l),n.attach(),n}return r(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach(function(t){t.remove()}):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e,n){var r=this;void 0===e&&(e=[]),void 0===n&&(n={}),t.prototype.optimize.call(this,n);for(var l=[].slice.call(this.observer.takeRecords());l.length>0;)e.push(l.pop());for(var a=function(t,e){void 0===e&&(e=!0),null!=t&&t!==r&&null!=t.domNode.parentNode&&(null==t.domNode[i.DATA_KEY].mutations&&(t.domNode[i.DATA_KEY].mutations=[]),e&&a(t.parent))},s=function(t){null!=t.domNode[i.DATA_KEY]&&null!=t.domNode[i.DATA_KEY].mutations&&(t instanceof o.default&&t.children.forEach(s),t.optimize(n))},u=e,c=0;u.length>0;c+=1){if(c>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(u.forEach(function(t){var e=i.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(a(i.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,function(t){var e=i.find(t,!1);a(e,!1),e instanceof o.default&&e.children.forEach(function(t){a(t,!1)})})):"attributes"===t.type&&a(e.prev)),a(e))}),this.children.forEach(s),u=[].slice.call(this.observer.takeRecords()),l=u.slice();l.length>0;)e.push(l.pop())}},e.prototype.update=function(e,n){var r=this;void 0===n&&(n={}),e=e||this.observer.takeRecords(),e.map(function(t){var e=i.find(t.target,!0);return null==e?null:null==e.domNode[i.DATA_KEY].mutations?(e.domNode[i.DATA_KEY].mutations=[t],e):(e.domNode[i.DATA_KEY].mutations.push(t),null)}).forEach(function(t){null!=t&&t!==r&&null!=t.domNode[i.DATA_KEY]&&t.update(t.domNode[i.DATA_KEY].mutations||[],n)}),null!=this.domNode[i.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[i.DATA_KEY].mutations,n),this.optimize(e,n)},e.blotName="scroll",e.defaultChild="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="DIV",e}(o.default);e.default=a},function(t,e,n){"use strict";function r(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(18),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach(function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)}),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){if(null!=this.formats()[r]||l.query(r,l.Scope.ATTRIBUTE)){this.isolate(e,n).format(r,o)}else t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n);var o=this.formats();if(0===Object.keys(o).length)return this.unwrap();var i=this.next;i instanceof e&&i.prev===this&&r(o,i.formats())&&(i.moveChildren(this),i.remove())},e.blotName="inline",e.scope=l.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(n){var r=i.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=i.query(n,i.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=i.query(r,i.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=i.query(n,i.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),l=i.create(n,r);o.parent.insertBefore(l,o)}},e.prototype.update=function(e,n){navigator.userAgent.match(/Trident/)?this.build():t.prototype.update.call(this,e,n)},e.blotName="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="P",e}(o.default);e.default=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(o.default);e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=n(1),l=function(t){function e(e){var n=t.call(this,e)||this;return n.text=n.statics.value(n.domNode),n}return r(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=i.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t,e){var n=this;t.some(function(t){return"characterData"===t.type&&t.target===n.domNode})&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){"use strict";var r=document.createElement("div");if(r.classList.toggle("test-class",!1),r.classList.contains("test-class")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return arguments.length>1&&!this.contains(t)==!e?e:o.call(this,t)}}String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return-1!==r&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(e=n[i],t.call(o,e,i,n))return e}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){function n(t,e,n){if(t==e)return t?[[v,t]]:[];(n<0||t.length<n)&&(n=null);var o=l(t,e),i=t.substring(0,o);t=t.substring(o),e=e.substring(o),o=a(t,e);var s=t.substring(t.length-o);t=t.substring(0,t.length-o),e=e.substring(0,e.length-o);var c=r(t,e);return i&&c.unshift([v,i]),s&&c.push([v,s]),u(c),null!=n&&(c=f(c,n)),c=h(c)}function r(t,e){var r;if(!t)return[[y,e]];if(!e)return[[d,t]];var i=t.length>e.length?t:e,l=t.length>e.length?e:t,a=i.indexOf(l);if(-1!=a)return r=[[y,i.substring(0,a)],[v,l],[y,i.substring(a+l.length)]],t.length>e.length&&(r[0][0]=r[2][0]=d),r;if(1==l.length)return[[d,t],[y,e]];var u=s(t,e);if(u){var c=u[0],f=u[1],h=u[2],p=u[3],b=u[4],g=n(c,h),m=n(f,p);return g.concat([[v,b]],m)}return o(t,e)}function o(t,e){for(var n=t.length,r=e.length,o=Math.ceil((n+r)/2),l=o,a=2*o,s=new Array(a),u=new Array(a),c=0;c<a;c++)s[c]=-1,u[c]=-1;s[l+1]=0,u[l+1]=0;for(var f=n-r,h=f%2!=0,p=0,v=0,b=0,g=0,m=0;m<o;m++){for(var _=-m+p;_<=m-v;_+=2){var O,w=l+_;O=_==-m||_!=m&&s[w-1]<s[w+1]?s[w+1]:s[w-1]+1;for(var x=O-_;O<n&&x<r&&t.charAt(O)==e.charAt(x);)O++,x++;if(s[w]=O,O>n)v+=2;else if(x>r)p+=2;else if(h){var k=l+f-_;if(k>=0&&k<a&&-1!=u[k]){var E=n-u[k];if(O>=E)return i(t,e,O,x)}}}for(var N=-m+b;N<=m-g;N+=2){var E,k=l+N;E=N==-m||N!=m&&u[k-1]<u[k+1]?u[k+1]:u[k-1]+1;for(var j=E-N;E<n&&j<r&&t.charAt(n-E-1)==e.charAt(r-j-1);)E++,j++;if(u[k]=E,E>n)g+=2;else if(j>r)b+=2;else if(!h){var w=l+f-N;if(w>=0&&w<a&&-1!=s[w]){var O=s[w],x=l+O-w;if(E=n-E,O>=E)return i(t,e,O,x)}}}}return[[d,t],[y,e]]}function i(t,e,r,o){var i=t.substring(0,r),l=e.substring(0,o),a=t.substring(r),s=e.substring(o),u=n(i,l),c=n(a,s);return u.concat(c)}function l(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function a(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function s(t,e){function n(t,e,n){for(var r,o,i,s,u=t.substring(n,n+Math.floor(t.length/4)),c=-1,f="";-1!=(c=e.indexOf(u,c+1));){var h=l(t.substring(n),e.substring(c)),p=a(t.substring(0,n),e.substring(0,c));f.length<p+h&&(f=e.substring(c-p,c)+e.substring(c,c+h),r=t.substring(0,n-p),o=t.substring(n+h),i=e.substring(0,c-p),s=e.substring(c+h))}return 2*f.length>=t.length?[r,o,i,s,f]:null}var r=t.length>e.length?t:e,o=t.length>e.length?e:t;if(r.length<4||2*o.length<r.length)return null;var i,s=n(r,o,Math.ceil(r.length/4)),u=n(r,o,Math.ceil(r.length/2));if(!s&&!u)return null;i=u?s&&s[4].length>u[4].length?s:u:s;var c,f,h,p;return t.length>e.length?(c=i[0],f=i[1],h=i[2],p=i[3]):(h=i[0],p=i[1],c=i[2],f=i[3]),[c,f,h,p,i[4]]}function u(t){t.push([v,""]);for(var e,n=0,r=0,o=0,i="",s="";n<t.length;)switch(t[n][0]){case y:o++,s+=t[n][1],n++;break;case d:r++,i+=t[n][1],n++;break;case v:r+o>1?(0!==r&&0!==o&&(e=l(s,i),0!==e&&(n-r-o>0&&t[n-r-o-1][0]==v?t[n-r-o-1][1]+=s.substring(0,e):(t.splice(0,0,[v,s.substring(0,e)]),n++),s=s.substring(e),i=i.substring(e)),0!==(e=a(s,i))&&(t[n][1]=s.substring(s.length-e)+t[n][1],s=s.substring(0,s.length-e),i=i.substring(0,i.length-e))),0===r?t.splice(n-o,r+o,[y,s]):0===o?t.splice(n-r,r+o,[d,i]):t.splice(n-r-o,r+o,[d,i],[y,s]),n=n-r-o+(r?1:0)+(o?1:0)+1):0!==n&&t[n-1][0]==v?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,o=0,r=0,i="",s=""}""===t[t.length-1][1]&&t.pop();var c=!1;for(n=1;n<t.length-1;)t[n-1][0]==v&&t[n+1][0]==v&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),c=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),c=!0)),n++;c&&u(t)}function c(t,e){if(0===e)return[v,t];for(var n=0,r=0;r<t.length;r++){var o=t[r];if(o[0]===d||o[0]===v){var i=n+o[1].length;if(e===i)return[r+1,t];if(e<i){t=t.slice();var l=e-n,a=[o[0],o[1].slice(0,l)],s=[o[0],o[1].slice(l)];return t.splice(r,1,a,s),[r+1,t]}n=i}}throw new Error("cursor_pos is out of bounds!")}function f(t,e){var n=c(t,e),r=n[1],o=n[0],i=r[o],l=r[o+1];if(null==i)return t;if(i[0]!==v)return t;if(null!=l&&i[1]+l[1]===l[1]+i[1])return r.splice(o,2,l,i),p(r,o,2);if(null!=l&&0===l[1].indexOf(i[1])){r.splice(o,2,[l[0],i[1]],[0,i[1]]);var a=l[1].slice(i[1].length);return a.length>0&&r.splice(o+2,0,[l[0],a]),p(r,o,3)}return t}function h(t){for(var e=!1,n=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},r=2;r<t.length;r+=1)t[r-2][0]===v&&function(t){return t.charCodeAt(t.length-1)>=55296&&t.charCodeAt(t.length-1)<=56319}(t[r-2][1])&&t[r-1][0]===d&&n(t[r-1][1])&&t[r][0]===y&&n(t[r][1])&&(e=!0,t[r-1][1]=t[r-2][1].slice(-1)+t[r-1][1],t[r][1]=t[r-2][1].slice(-1)+t[r][1],t[r-2][1]=t[r-2][1].slice(0,-1));if(!e)return t;for(var o=[],r=0;r<t.length;r+=1)t[r][1].length>0&&o.push(t[r]);return o}function p(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}var d=-1,y=1,v=0,b=n;b.INSERT=y,b.DELETE=d,b.EQUAL=v,t.exports=b},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return Object.keys(e).reduce(function(n,r){return null==t[r]?n:(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]],n)},{})}function a(t){return t.reduce(function(t,e){if(1===e.insert){var n=(0,N.default)(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||(e=(0,N.default)(e),e.attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)},new h.default)}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(4),h=r(f),p=n(20),d=r(p),y=n(0),v=r(y),b=n(13),g=r(b),m=n(31),_=r(m),O=n(3),w=r(O),x=n(14),k=r(x),E=n(21),N=r(E),j=n(12),A=r(j),q=n(2),T=r(q),P=/^[ -~]*$/,S=function(){function t(e){i(this,t),this.scroll=e,this.delta=this.getDelta()}return c(t,[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var r=this.scroll.length();return this.scroll.batchStart(),t=a(t),t.reduce(function(t,o){var i=o.retain||o.delete||o.insert.length||1,l=o.attributes||{};if(null!=o.insert){if("string"==typeof o.insert){var a=o.insert;a.endsWith("\n")&&n&&(n=!1,a=a.slice(0,-1)),t>=r&&!a.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,a);var c=e.scroll.line(t),f=u(c,2),h=f[0],p=f[1],y=(0,T.default)({},(0,O.bubbleFormats)(h));if(h instanceof w.default){var b=h.descendant(v.default.Leaf,p),g=u(b,1),m=g[0];y=(0,T.default)(y,(0,O.bubbleFormats)(m))}l=d.default.attributes.diff(y,l)||{}}else if("object"===s(o.insert)){var _=Object.keys(o.insert)[0];if(null==_)return t;e.scroll.insertAt(t,_,o.insert[_])}r+=i}return Object.keys(l).forEach(function(n){e.scroll.formatAt(t,i,n,l[n])}),t+i},0),t.reduce(function(t,n){return"number"==typeof n.delete?(e.scroll.deleteAt(t,n.delete),t):t+(n.retain||n.insert.length||1)},0),this.scroll.batchEnd(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new h.default).retain(t).delete(e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach(function(o){if(null==n.scroll.whitelist||n.scroll.whitelist[o]){var i=n.scroll.lines(t,Math.max(e,1)),l=e;i.forEach(function(e){var i=e.length();if(e instanceof g.default){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+l)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);l-=i})}}),this.scroll.optimize(),this.update((new h.default).retain(t).retain(e,(0,N.default)(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e,o,r[o])}),this.update((new h.default).retain(t).retain(e,(0,N.default)(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(t,e){return t.concat(e.delta())},new h.default)}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach(function(t){var e=u(t,1),o=e[0];o instanceof w.default?n.push(o):o instanceof v.default.Leaf&&r.push(o)}):(n=this.scroll.lines(t,e),r=this.scroll.descendants(v.default.Leaf,t,e));var o=[n,r].map(function(t){if(0===t.length)return{};for(var e=(0,O.bubbleFormats)(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=l((0,O.bubbleFormats)(n),e)}return e});return T.default.apply(T.default,o)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter(function(t){return"string"==typeof t.insert}).map(function(t){return t.insert}).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new h.default).retain(t).insert(o({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e.length,o,r[o])}),this.update((new h.default).retain(t).insert(e,(0,N.default)(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.statics.blotName===w.default.blotName&&(!(t.children.length>1)&&t.children.head instanceof k.default)}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=this.scroll.line(t+e),o=u(r,2),i=o[0],l=o[1],a=0,s=new h.default;null!=i&&(a=i instanceof g.default?i.newlineIndex(l)-l+1:i.length()-l,s=i.delta().slice(l,l+a-1).insert("\n"));var c=this.getContents(t,e+a),f=c.diff((new h.default).insert(n).concat(s)),p=(new h.default).retain(t).concat(f);return this.applyDelta(p)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(P)&&v.default.find(e[0].target)){var o=v.default.find(e[0].target),i=(0,O.bubbleFormats)(o),l=o.offset(this.scroll),a=e[0].oldValue.replace(_.default.CONTENTS,""),s=(new h.default).insert(a),u=(new h.default).insert(o.value());t=(new h.default).retain(l).concat(s.diff(u,n)).reduce(function(t,e){return e.insert?t.insert(e.insert,i):t.push(e)},new h.default),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&(0,A.default)(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}}]),t}();e.default=S},function(t,e){"use strict";function n(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){this._events=new n,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),o.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)i.call(t,e)&&n.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t,e){var n=l?l+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},o.prototype.emit=function(t,e,n,r,o,i){var a=l?l+t:t;if(!this._events[a])return!1;var s,u,c=this._events[a],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,r),!0;case 5:return c.fn.call(c.context,e,n,r,o),!0;case 6:return c.fn.call(c.context,e,n,r,o,i),!0}for(u=1,s=new Array(f-1);u<f;u++)s[u-1]=arguments[u];c.fn.apply(c.context,s)}else{var h,p=c.length;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,r);break;default:if(!s)for(h=1,s=new Array(f-1);h<f;h++)s[h-1]=arguments[h];c[u].fn.apply(c[u].context,s)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,!0),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,o){var i=l?l+t:t;if(!this._events[i])return this;if(!e)return 0==--this._eventsCount?this._events=new n:delete this._events[i],this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||(0==--this._eventsCount?this._events=new n:delete this._events[i]);else{for(var s=0,u=[],c=a.length;s<c;s++)(a[s].fn!==e||o&&!a[s].once||r&&a[s].context!==r)&&u.push(a[s]);u.length?this._events[i]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new n:delete this._events[i]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=l,o.EventEmitter=o,void 0!==t&&(t.exports=o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t instanceof v.default||t instanceof y.BlockEmbed}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(0),h=r(f),p=n(9),d=r(p),y=n(3),v=r(y),b=n(14),g=r(b),m=n(13),_=r(m),O=n(23),w=r(O),x=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.emitter=n.emitter,Array.isArray(n.whitelist)&&(r.whitelist=n.whitelist.reduce(function(t,e){return t[e]=!0,t},{})),r.domNode.addEventListener("DOMNodeInserted",function(){}),r.optimize(),r.enable(),r}return l(e,t),u(e,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(t,n){var r=this.line(t),o=s(r,2),i=o[0],l=o[1],a=this.line(t+n),u=s(a,1),f=u[0];if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),null!=f&&i!==f&&l>0){if(i instanceof y.BlockEmbed||f instanceof y.BlockEmbed)return void this.optimize();if(i instanceof _.default){var h=i.newlineIndex(i.length(),!0);if(h>-1&&(i=i.split(h+1))===f)return void this.optimize()}else if(f instanceof _.default){var p=f.newlineIndex(0);p>-1&&f.split(p+1)}var d=f.children.head instanceof g.default?null:f.children.head;i.moveChildren(f,d),i.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,n,r,o){(null==this.whitelist||this.whitelist[r])&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o),this.optimize())}},{key:"insertAt",value:function(t,n,r){if(null==r||null==this.whitelist||this.whitelist[n]){if(t>=this.length())if(null==r||null==h.default.query(n,h.default.Scope.BLOCK)){var o=h.default.create(this.statics.defaultChild);this.appendChild(o),null==r&&n.endsWith("\n")&&(n=n.slice(0,-1)),o.insertAt(0,n,r)}else{var i=h.default.create(n,r);this.appendChild(i)}else c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);this.optimize()}}},{key:"insertBefore",value:function(t,n){if(t.statics.scope===h.default.Scope.INLINE_BLOT){var r=h.default.create(this.statics.defaultChild);r.appendChild(t),t=r}c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(a,t)}},{key:"lines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return function t(e,n,r){var o=[],i=r;return e.children.forEachAt(n,r,function(e,n,r){a(e)?o.push(e):e instanceof h.default.Container&&(o=o.concat(t(e,n,i))),i-=r}),o}(this,t,e)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t,n),t.length>0&&this.emitter.emit(d.default.events.SCROLL_OPTIMIZE,t,n))}},{key:"path",value:function(t){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(!0!==this.batch){var n=d.default.sources.USER;"string"==typeof t&&(n=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE,n,t),c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(d.default.events.SCROLL_UPDATE,n,t)}}}]),e}(h.default.Scroll);x.blotName="scroll",x.className="ql-editor",x.tagName="DIV",x.defaultChild="block",x.allowedChildren=[v.default,y.BlockEmbed,w.default],e.default=x},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){return"object"===(void 0===e?"undefined":x(e))?Object.keys(e).reduce(function(t,n){return s(t,n,e[n])},t):t.reduce(function(t,r){return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,(0,j.default)({},o({},e,n),r.attributes))},new q.default)}function u(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};return t["__ql-computed-style"]||(t["__ql-computed-style"]=window.getComputedStyle(t))}function c(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function f(t){return 0!==t.childNodes.length&&["block","list-item"].indexOf(u(t).display)>-1}function h(t,e,n){return t.nodeType===t.TEXT_NODE?n.reduce(function(e,n){return n(t,e)},new q.default):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],function(r,o){var i=h(o,e,n);return o.nodeType===t.ELEMENT_NODE&&(i=e.reduce(function(t,e){return e(o,t)},i),i=(o[W]||[]).reduce(function(t,e){return e(o,t)},i)),r.concat(i)},new q.default):new q.default}function p(t,e,n){return s(n,t,!0)}function d(t,e){var n=P.default.Attributor.Attribute.keys(t),r=P.default.Attributor.Class.keys(t),o=P.default.Attributor.Style.keys(t),i={};return n.concat(r).concat(o).forEach(function(e){var n=P.default.query(e,P.default.Scope.ATTRIBUTE);null!=n&&(i[n.attrName]=n.value(t),i[n.attrName])||(n=Y[e],null==n||n.attrName!==e&&n.keyName!==e||(i[n.attrName]=n.value(t)||void 0),null==(n=X[e])||n.attrName!==e&&n.keyName!==e||(n=X[e],i[n.attrName]=n.value(t)||void 0))}),Object.keys(i).length>0&&(e=s(e,i)),e}function y(t,e){var n=P.default.query(t);if(null==n)return e;if(n.prototype instanceof P.default.Embed){var r={},o=n.value(t);null!=o&&(r[n.blotName]=o,e=(new q.default).insert(r,n.formats(t)))}else"function"==typeof n.formats&&(e=s(e,n.blotName,n.formats(t)));return e}function v(t,e){return c(e,"\n")||e.insert("\n"),e}function b(){return new q.default}function g(t,e){var n=P.default.query(t);if(null==n||"list-item"!==n.blotName||!c(e,"\n"))return e;for(var r=-1,o=t.parentNode;!o.classList.contains("ql-clipboard");)"list"===(P.default.query(o)||{}).blotName&&(r+=1),o=o.parentNode;return r<=0?e:e.compose((new q.default).retain(e.length()-1).retain(1,{indent:r}))}function m(t,e){return c(e,"\n")||(f(t)||e.length()>0&&t.nextSibling&&f(t.nextSibling))&&e.insert("\n"),e}function _(t,e){if(f(t)&&null!=t.nextElementSibling&&!c(e,"\n\n")){var n=t.offsetHeight+parseFloat(u(t).marginTop)+parseFloat(u(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function O(t,e){var n={},r=t.style||{};return r.fontStyle&&"italic"===u(t).fontStyle&&(n.italic=!0),r.fontWeight&&(u(t).fontWeight.startsWith("bold")||parseInt(u(t).fontWeight)>=700)&&(n.bold=!0),Object.keys(n).length>0&&(e=s(e,n)),parseFloat(r.textIndent||0)>0&&(e=(new q.default).insert("\t").concat(e)),e}function w(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(0===n.trim().length&&t.parentNode.classList.contains("ql-clipboard"))return e;if(!u(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return e=e.replace(/[^\u00a0]/g,""),e.length<1&&t?" ":e};n=n.replace(/\r\n/g," ").replace(/\n/g," "),n=n.replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&f(t.parentNode)||null!=t.previousSibling&&f(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&f(t.parentNode)||null!=t.nextSibling&&f(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),N=n(2),j=r(N),A=n(4),q=r(A),T=n(0),P=r(T),S=n(6),C=r(S),L=n(10),M=r(L),R=n(7),I=r(R),B=n(34),D=n(35),U=n(13),F=r(U),H=n(24),K=n(36),z=n(37),Z=n(38),V=(0,M.default)("quill:clipboard"),W="__ql-matcher",G=[[Node.TEXT_NODE,w],[Node.TEXT_NODE,m],["br",v],[Node.ELEMENT_NODE,m],[Node.ELEMENT_NODE,y],[Node.ELEMENT_NODE,_],[Node.ELEMENT_NODE,d],[Node.ELEMENT_NODE,O],["li",g],["b",p.bind(p,"bold")],["i",p.bind(p,"italic")],["style",b]],Y=[B.AlignAttribute,K.DirectionAttribute].reduce(function(t,e){return t[e.keyName]=e,t},{}),X=[B.AlignStyle,D.BackgroundStyle,H.ColorStyle,K.DirectionStyle,z.FontStyle,Z.SizeStyle].reduce(function(t,e){return t[e.keyName]=e,t},{}),$=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.root.addEventListener("paste",r.onPaste.bind(r)),r.container=r.quill.addContainer("ql-clipboard"),r.container.setAttribute("contenteditable",!0),r.container.setAttribute("tabindex",-1),r.matchers=[],G.concat(r.options.matchers).forEach(function(t){var e=k(t,2),o=e[0],i=e[1];(n.matchVisual||i!==_)&&r.addMatcher(o,i)}),r}return a(e,t),E(e,[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();var e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[F.default.blotName]){var n=this.container.innerText;return this.container.innerHTML="",(new q.default).insert(n,o({},F.default.blotName,e[F.default.blotName]))}var r=this.prepareMatching(),i=k(r,2),l=i[0],a=i[1],s=h(this.container,l,a);return c(s,"\n")&&null==s.ops[s.ops.length-1].attributes&&(s=s.compose((new q.default).retain(s.length()-1).delete(1))),V.log("convert",this.container.innerHTML,s),this.container.innerHTML="",s}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.default.sources.API;if("string"==typeof t)this.quill.setContents(this.convert(t),e),this.quill.setSelection(0,C.default.sources.SILENT);else{var r=this.convert(e);this.quill.updateContents((new q.default).retain(t).concat(r),n),this.quill.setSelection(t+r.length(),C.default.sources.SILENT)}}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n=this.quill.getSelection(),r=(new q.default).retain(n.index),o=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(C.default.sources.SILENT),setTimeout(function(){r=r.concat(e.convert()).delete(n.length),e.quill.updateContents(r,C.default.sources.USER),e.quill.setSelection(r.length()-n.length,C.default.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var t=this,e=[],n=[];return this.matchers.forEach(function(r){var o=k(r,2),i=o[0],l=o[1];switch(i){case Node.TEXT_NODE:n.push(l);break;case Node.ELEMENT_NODE:e.push(l);break;default:[].forEach.call(t.container.querySelectorAll(i),function(t){t[W]=t[W]||[],t[W].push(l)})}}),[e,n]}}]),e}(I.default);$.DEFAULTS={matchers:[],matchVisual:!0},e.default=$,e.matchAttributor=d,e.matchBlot=y,e.matchNewline=m,e.matchSpacing=_,e.matchText=w},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some(function(t){return null!=f.default.query(t,f.default.Scope.BLOCK)}))}function s(t){var e=t.reduce(function(t,e){return t+=e.delete||0},0),n=t.length()-e;return a(t)&&(n-=1),n}Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),h=n(6),p=r(h),d=n(7),y=r(d),v=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastRecorded=0,r.ignoreChange=!1,r.clear(),r.quill.on(p.default.events.EDITOR_CHANGE,function(t,e,n,o){t!==p.default.events.TEXT_CHANGE||r.ignoreChange||(r.options.userOnly&&o!==p.default.sources.USER?r.transform(e):r.record(e,n))}),r.quill.keyboard.addBinding({key:"Z",shortKey:!0},r.undo.bind(r)),r.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},r.redo.bind(r)),/Win/i.test(navigator.platform)&&r.quill.keyboard.addBinding({key:"Y",shortKey:!0},r.redo.bind(r)),r}return l(e,t),u(e,[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],p.default.sources.USER),this.ignoreChange=!1;var r=s(n[t]);this.quill.setSelection(r)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}),this.stack.redo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),e}(y.default);v.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=v,e.getLastChangeIndex=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"add",value:function(t,n){if("+1"===n||"-1"===n){var r=this.value(t)||0;n="+1"===n?r+1:r-1}return 0===n?(this.remove(t),!0):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"add",this).call(this,t,n)}},{key:"canAdd",value:function(t,n){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,n)||a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,parseInt(n))}},{key:"value",value:function(t){return parseInt(a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t))||void 0}}]),e}(u.default.Attributor.Class),f=new c("indent","ql-indent",{scope:u.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(3),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="blockquote",s.tagName="blockquote",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"formats",value:function(t){return this.tagName.indexOf(t.tagName)+1}}]),e}(s.default);u.blotName="header",u.tagName=["H1","H2","H3","H4","H5","H6"],e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(0),f=r(c),h=n(3),p=r(h),d=n(23),y=r(d),v=function(t){function e(){return i(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"format",value:function(t,n){t!==b.blotName||n?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n):this.replaceWith(f.default.create(this.statics.scope))}},{key:"remove",value:function(){null==this.prev&&null==this.next?this.parent.remove():u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(t,n){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,n),this):(this.parent.unwrap(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t,n))}}],[{key:"formats",value:function(t){return t.tagName===this.tagName?void 0:u(e.__proto__||Object.getPrototypeOf(e),"formats",this).call(this,t)}}]),e}(p.default);v.blotName="list-item",v.tagName="LI";var b=function(t){function e(t){i(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r=function(e){if(e.target.parentNode===t){var r=n.statics.formats(t),o=f.default.find(e.target);"checked"===r?o.format("list","unchecked"):"unchecked"===r&&o.format("list","checked")}};return t.addEventListener("touchstart",r),t.addEventListener("mousedown",r),n}return a(e,t),s(e,null,[{key:"create",value:function(t){var n="ordered"===t?"OL":"UL",r=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,n);return"checked"!==t&&"unchecked"!==t||r.setAttribute("data-checked","checked"===t),r}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}}]),s(e,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return o({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(t,n){if(t instanceof v)u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n);else{var r=null==n?this.length():n.offset(this),o=this.split(r);o.parent.insertBefore(t,o)}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&n.domNode.tagName===this.domNode.tagName&&n.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=f.default.create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t)}}]),e}(y.default);b.blotName="list",b.scope=f.default.Scope.BLOCK_BLOT,b.tagName=["OL","UL"],b.defaultChild="list-item",b.allowedChildren=[v],e.ListItem=v,e.default=b},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(39),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="italic",s.tagName=["EM","I"],e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}]),e}(u.default);c.blotName="script",c.tagName=["SUB","SUP"],e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(5),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="strike",s.tagName="S",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(5),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="underline",s.tagName="U",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=n(15),f=["alt","height","width"],h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"match",value:function(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}},{key:"sanitize",value:function(t){return(0,c.sanitize)(t,["http","https","data"])?t:"//:0"}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(u.default.Embed);h.blotName="image",h.tagName="IMG",e.default=h},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(3),u=n(15),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=["height","width"],h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen",!0),n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"sanitize",value:function(t){return c.default.sanitize(t)}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(s.BlockEmbed);h.blotName="video",h.className="ql-video",h.tagName="IFRAME",e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(33),c=r(u),f=n(6),h=r(f),p=n(7),d=r(p),y=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,null,[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&(window.katex.render(t,n,{throwOnError:!1,errorColor:"#f00"}),n.setAttribute("data-value",t)),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(c.default);y.blotName="formula",y.className="ql-formula",y.tagName="SPAN";var v=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(null==window.katex)throw new Error("Formula module requires KaTeX.");return t}return l(e,t),a(e,null,[{key:"register",value:function(){h.default.register(y,!0)}}]),e}(d.default);e.FormulaBlot=y,e.default=v},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(6),h=r(f),p=n(7),d=r(p),y=n(13),v=r(y),b=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"replaceWith",value:function(t){this.domNode.textContent=this.domNode.textContent,this.attach(),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t)}},{key:"highlight",value:function(t){var e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}]),e}(v.default);b.className="ql-syntax";var g=new c.default.Attributor.Class("token","hljs",{scope:c.default.Scope.INLINE}),m=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if("function"!=typeof r.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var l=null;return r.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(l),l=setTimeout(function(){r.highlight(),l=null},r.options.interval)}),r.highlight(),r}return l(e,t),a(e,null,[{key:"register",value:function(){h.default.register(g,!0),h.default.register(b,!0)}}]),a(e,[{key:"highlight",value:function(){var t=this;if(!this.quill.selection.composing){this.quill.update(h.default.sources.USER);var e=this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function(e){e.highlight(t.options.highlight)}),this.quill.update(h.default.sources.SILENT),null!=e&&this.quill.setSelection(e,h.default.sources.SILENT)}}}]),e}(d.default);m.DEFAULTS={highlight:function(){return null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value}}(),interval:1e3},e.CodeBlock=b,e.CodeToken=g,e.default=m},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("ql-"+e),null!=n&&(r.value=n),t.appendChild(r)}function u(t,e){Array.isArray(e[0])||(e=[e]),e.forEach(function(e){var n=document.createElement("span");n.classList.add("ql-formats"),e.forEach(function(t){if("string"==typeof t)s(n,t);else{var e=Object.keys(t)[0],r=t[e];Array.isArray(r)?c(n,e,r):s(n,e,r)}}),t.appendChild(n)})}function c(t,e,n){var r=document.createElement("select");r.classList.add("ql-"+e),n.forEach(function(t){var e=document.createElement("option");!1!==t?e.setAttribute("value",t):e.setAttribute("selected","selected"),r.appendChild(e)}),t.appendChild(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=n(4),d=r(p),y=n(0),v=r(y),b=n(6),g=r(b),m=n(10),_=r(m),O=n(7),w=r(O),x=(0,_.default)("quill:toolbar"),k=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(Array.isArray(r.options.container)){var o=document.createElement("div");u(o,r.options.container),t.container.parentNode.insertBefore(o,t.container),r.container=o}else"string"==typeof r.options.container?r.container=document.querySelector(r.options.container):r.container=r.options.container;if(!(r.container instanceof HTMLElement)){var a;return a=x.error("Container required for toolbar",r.options),l(r,a)}return r.container.classList.add("ql-toolbar"),r.controls=[],r.handlers={},Object.keys(r.options.handlers).forEach(function(t){r.addHandler(t,r.options.handlers[t])}),[].forEach.call(r.container.querySelectorAll("button, select"),function(t){r.attach(t)}),r.quill.on(g.default.events.EDITOR_CHANGE,function(t,e){t===g.default.events.SELECTION_CHANGE&&r.update(e)}),r.quill.on(g.default.events.SCROLL_OPTIMIZE,function(){var t=r.quill.selection.getRange(),e=f(t,1),n=e[0];r.update(n)}),r}return a(e,t),h(e,[{key:"addHandler",value:function(t,e){this.handlers[t]=e}},{key:"attach",value:function(t){var e=this,n=[].find.call(t.classList,function(t){return 0===t.indexOf("ql-")});if(n){if(n=n.slice("ql-".length),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[n]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[n])return void x.warn("ignoring attaching to disabled format",n,t);if(null==v.default.query(n))return void x.warn("ignoring attaching to nonexistent format",n,t)}var r="SELECT"===t.tagName?"change":"click";t.addEventListener(r,function(r){var i=void 0;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;var l=t.options[t.selectedIndex];i=!l.hasAttribute("selected")&&(l.value||!1)}else i=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),r.preventDefault();e.quill.focus();var a=e.quill.selection.getRange(),s=f(a,1),u=s[0];if(null!=e.handlers[n])e.handlers[n].call(e,i);else if(v.default.query(n).prototype instanceof v.default.Embed){if(!(i=prompt("Enter "+n)))return;e.quill.updateContents((new d.default).retain(u.index).delete(u.length).insert(o({},n,i)),g.default.sources.USER)}else e.quill.format(n,i,g.default.sources.USER);e.update(u)}),this.controls.push([n,t])}}},{key:"update",value:function(t){var e=null==t?{}:this.quill.getFormat(t);this.controls.forEach(function(n){var r=f(n,2),o=r[0],i=r[1];if("SELECT"===i.tagName){var l=void 0;if(null==t)l=null;else if(null==e[o])l=i.querySelector("option[selected]");else if(!Array.isArray(e[o])){var a=e[o];"string"==typeof a&&(a=a.replace(/\"/g,'\\"')),l=i.querySelector('option[value="'+a+'"]')}null==l?(i.value="",i.selectedIndex=-1):l.selected=!0}else if(null==t)i.classList.remove("ql-active");else if(i.hasAttribute("value")){var s=e[o]===i.getAttribute("value")||null!=e[o]&&e[o].toString()===i.getAttribute("value")||null==e[o]&&!i.getAttribute("value");i.classList.toggle("ql-active",s)}else i.classList.toggle("ql-active",null!=e[o])})}}]),e}(w.default);k.DEFAULTS={},k.DEFAULTS={container:null,handlers:{clean:function(){var t=this,e=this.quill.getSelection();if(null!=e)if(0==e.length){var n=this.quill.getFormat();Object.keys(n).forEach(function(e){null!=v.default.query(e,v.default.Scope.INLINE)&&t.quill.format(e,!1)})}else this.quill.removeFormat(e,g.default.sources.USER)},direction:function(t){var e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",g.default.sources.USER):t||"right"!==e||this.quill.format("align",!1,g.default.sources.USER),this.quill.format("direction",t,g.default.sources.USER)},indent:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e),r=parseInt(n.indent||0);if("+1"===t||"-1"===t){var o="+1"===t?1:-1;"rtl"===n.direction&&(o*=-1),this.quill.format("indent",r+o,g.default.sources.USER)}},link:function(t){!0===t&&(t=prompt("Enter link URL:")),this.quill.format("link",t,g.default.sources.USER)},list:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e);"check"===t?"checked"===n.list||"unchecked"===n.list?this.quill.format("list",!1,g.default.sources.USER):this.quill.format("list","unchecked",g.default.sources.USER):this.quill.format("list",t,g.default.sources.USER)}}},e.default=k,e.addControls=u},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),c=r(u),f=n(9),h=r(f),p=n(44),d=r(p),y=n(22),v=n(26),b=r(v),g=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],m=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=g);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-bubble"),r}return l(e,t),s(e,[{key:"extendToolbar",value:function(t){this.tooltip=new _(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),b.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),b.default)}}]),e}(d.default);m.DEFAULTS=(0,c.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var _=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.on(h.default.events.EDITOR_CHANGE,function(t,e,n,o){if(t===h.default.events.SELECTION_CHANGE)if(null!=e&&e.length>0&&o===h.default.sources.USER){r.show(),r.root.style.left="0px",r.root.style.width="",r.root.style.width=r.root.offsetWidth+"px";var i=r.quill.getLines(e.index,e.length);if(1===i.length)r.position(r.quill.getBounds(e));else{var l=i[i.length-1],a=r.quill.getIndex(l),s=Math.min(l.length()-1,e.index+e.length-a),u=r.quill.getBounds(new y.Range(a,s));r.position(u)}}else document.activeElement!==r.textbox&&r.quill.hasFocus()&&r.hide()}),r}return l(e,t),s(e,[{key:"listen",value:function(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){t.root.classList.remove("ql-editing")}),this.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!t.root.classList.contains("ql-hidden")){var e=t.quill.getSelection();null!=e&&t.position(t.quill.getBounds(e))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"position",this).call(this,t),r=this.root.querySelector(".ql-tooltip-arrow");if(r.style.marginLeft="",0===n)return n;r.style.marginLeft=-1*n-r.offsetWidth/2+"px"}}]),e}(p.BaseTooltip);_.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=_,e.default=m},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),f=r(c),h=n(9),p=r(h),d=n(44),y=r(d),v=n(15),b=r(v),g=n(22),m=n(26),_=r(m),O=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],w=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=O);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-snow"),r}return l(e,t),u(e,[{key:"extendToolbar",value:function(t){t.container.classList.add("ql-snow"),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),_.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),_.default),this.tooltip=new x(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(e,n){t.handlers.link.call(t,!n.format.link)})}}]),e}(y.default);w.DEFAULTS=(0,f.default)(!0,{},y.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){if(t){var e=this.quill.getSelection();if(null==e||0==e.length)return;var n=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n)&&0!==n.indexOf("mailto:")&&(n="mailto:"+n);this.quill.theme.tooltip.edit("link",n)}else this.quill.format("link",!1)}}}}});var x=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.preview=r.root.querySelector("a.ql-preview"),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(e){t.root.classList.contains("ql-editing")?t.save():t.edit("link",t.preview.textContent),e.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(e){if(null!=t.linkRange){var n=t.linkRange;t.restoreFocus(),t.quill.formatText(n,"link",!1,p.default.sources.USER),delete t.linkRange}e.preventDefault(),t.hide()}),this.quill.on(p.default.events.SELECTION_CHANGE,function(e,n,r){if(null!=e){if(0===e.length&&r===p.default.sources.USER){var o=t.quill.scroll.descendant(b.default,e.index),i=a(o,2),l=i[0],s=i[1];if(null!=l){t.linkRange=new g.Range(e.index-s,l.length());var u=b.default.formats(l.domNode);return t.preview.textContent=u,t.preview.setAttribute("href",u),t.show(),void t.position(t.quill.getBounds(t.linkRange))}}else delete t.linkRange;t.hide()}})}},{key:"show",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),e}(d.BaseTooltip);x.TEMPLATE=['<a class="ql-preview" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=w}]).default});
//# sourceMappingURL=quill.min.js.map
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});

/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,r=o(t),i=r.source,u=r.id,p=r.path,h=c[u]&&p in c[u].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||h;return f?(a("ignoring socket cache for %s",i),n=s(i,e)):(c[u]||(a("new io instance for %s",i),c[u]=s(i,e)),n=c[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o=n(1),i=n(7),s=n(15),a=n(3)("socket.io-client");t.exports=e=r;var c=e.managers={};e.protocol=i.protocol,e.connect=r,e.Manager=n(15),e.Socket=n(39)},function(t,e,n){function r(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var r=n.host.indexOf(":")!==-1,s=r?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){"use strict";function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),this.useColors){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(r++,"%c"===t&&(o=r))}),e.splice(o,0,n)}}function s(){var t;return"object"===("undefined"==typeof console?"undefined":p(console))&&console.log&&(t=console).log.apply(t,arguments)}function a(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(n){}}function c(){var t=void 0;try{t=e.storage.getItem("debug")}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function u(){try{return localStorage}catch(t){}}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=n(5)(e);var h=t.exports.formatters;h.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,h,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t){function e(t){for(var e=0,n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return o.colors[Math.abs(e)%o.colors.length]}function o(t){function n(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];if(n.enabled){var s=n,a=Number(new Date),c=a-(r||a);s.diff=c,s.prev=r,s.curr=a,r=a,e[0]=o.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");var u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,function(t,n){if("%%"===t)return t;u++;var r=o.formatters[n];if("function"==typeof r){var i=e[u];t=r.call(s,i),e.splice(u,1),u--}return t}),o.formatArgs.call(s,e);var p=s.log||o.log;p.apply(s,e)}}var r=void 0;return n.namespace=t,n.enabled=o.enabled(t),n.useColors=o.useColors(),n.color=e(t),n.destroy=i,n.extend=s,"function"==typeof o.init&&o.init(n),o.instances.push(n),n}function i(){var t=o.instances.indexOf(this);return t!==-1&&(o.instances.splice(t,1),!0)}function s(t,e){var n=o(this.namespace+("undefined"==typeof e?":":e)+t);return n.log=this.log,n}function a(t){o.save(t),o.names=[],o.skips=[];var e=void 0,n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length;for(e=0;e<r;e++)n[e]&&(t=n[e].replace(/\*/g,".*?"),"-"===t[0]?o.skips.push(new RegExp("^"+t.substr(1)+"$")):o.names.push(new RegExp("^"+t+"$")));for(e=0;e<o.instances.length;e++){var i=o.instances[e];i.enabled=o.enabled(i.namespace)}}function c(){var t=[].concat(r(o.names.map(p)),r(o.skips.map(p).map(function(t){return"-"+t}))).join(",");return o.enable(""),t}function u(t){if("*"===t[t.length-1])return!0;var e=void 0,n=void 0;for(e=0,n=o.skips.length;e<n;e++)if(o.skips[e].test(t))return!1;for(e=0,n=o.names.length;e<n;e++)if(o.names[e].test(t))return!0;return!1}function p(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function h(t){return t instanceof Error?t.stack||t.message:t}return o.debug=o,o["default"]=o,o.coerce=h,o.disable=c,o.enable=a,o.enabled=u,o.humanize=n(6),Object.keys(t).forEach(function(e){o[e]=t[e]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=e,o.enable(o.load()),o}t.exports=o},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*h;case"weeks":case"week":case"w":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){var e=Math.abs(t);return e>=u?Math.round(t/u)+"d":e>=c?Math.round(t/c)+"h":e>=a?Math.round(t/a)+"m":e>=s?Math.round(t/s)+"s":t+"ms"}function o(t){var e=Math.abs(t);return e>=u?i(t,e,u,"day"):e>=c?i(t,e,c,"hour"):e>=a?i(t,e,a,"minute"):e>=s?i(t,e,s,"second"):t+" ms"}function i(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}var s=1e3,a=60*s,c=60*a,u=24*c,p=7*u,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isFinite(t))return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f("encoded %j as %s",t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h("unknown packet type "+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=u(t.substr(n)),c=a!==!1&&(r.type===e.ERROR||y(a));if(!c)return h("invalid payload");r.data=a}return f("decoded %s as %j",t,r),r}function u(t){try{return JSON.parse(t)}catch(e){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error: "+t}}var f=n(8)("socket.io-parser"),l=n(11),d=n(12),y=n(13),m=n(14);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+'"encode error"';r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if("string"==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!m(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){(function(r){"use strict";function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"===("undefined"==typeof console?"undefined":p(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function u(){try{return window.localStorage}catch(t){}}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e=t.exports=n(9),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e,n){"use strict";function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var u=n.log||e.log||console.log.bind(console);u.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&&(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(10),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(13),s=n(14),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),u="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,p){if(!t)return t;if(c&&t instanceof Blob||u&&t instanceof File){r++;var h=new FileReader;h.onload=function(){p?p[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){function n(t){return r&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=n;var r="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"==typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||a;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o=n(16),i=n(39),s=n(11),a=n(7),c=n(41),u=n(42),p=n(3)("socket.io-client:manager"),h=n(38),f=n(43),l=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},s(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var i=c(n,"open",function(){r.onopen(),t&&t()}),s=c(n,"error",function(e){if(p("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var u=setTimeout(function(){p("connect attempt timed out after %d",a),i.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},r.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",u(this,"ondata"))),this.subs.push(c(t,"ping",u(this,"onping"))),this.subs.push(c(t,"pong",u(this,"onpong"))),this.subs.push(c(t,"error",u(this,"onerror"))),this.subs.push(c(t,"close",u(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~h(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new i(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=h(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(17),t.exports.parser=n(24)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(18),s=n(11),a=n(3)("engine.io-client:socket"),c=n(38),u=n(24),p=n(2),h=n(32);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=u.protocol,r.Socket=r,r.Transport=n(23),r.transports=n(18),r.parser=n(24),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,withCredentials:n.withCredentials||this.withCredentials,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{
if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",p),!p)return;r.priorWebsocketSuccess="websocket"===p.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(p),p.send([{type:"upgrade"}]),f.emit("upgrade",p),p=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,u(),p.close(),p=null)}function o(e){var r=new Error("probe error: "+e);r.transport=p.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){p&&t.name!==p.name&&(a('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",c),p.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,u=location.port;u||(u=c?443:80),n=t.hostname!==location.hostname||u!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=n(19),i=n(21),s=n(35),a=n(36);e.polling=r,e.websocket=a},function(t,e,n){var r=n(20);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(i){}try{if("undefined"!=typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(i){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(19),c=n(22),u=n(11),p=n(33),h=n(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(n.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(r){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError("number"==typeof e.status?e.status:0)},0))},h("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var f="onpagehide"in self?"pagehide":"unload";addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(23),i=n(32),s=n(24),a=n(33),c=n(34),u=n(3)("engine.io-client:polling");t.exports=r;var p=function(){var t=n(19),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){u("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(u("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){u("pre-pause polling complete"),--r||e()})),this.writable||(u("we are currently writing - waiting to pause"),r++,this.once("drain",function(){u("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;u("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(24),i=n(11);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,p=n(25),h=n(26),f=n(27),l=n(28),d=n(29);"undefined"!=typeof ArrayBuffer&&(u=n(30));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),C={type:"error",data:"parser error"},w=n(31);e.encodePacket=function(t,e,n,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof n&&(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&&(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,n){var r="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return C;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return C;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:C}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===n&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!u)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=u.decode(t.substr(1));return"blob"===e&&w&&(r=new w([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?w&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(C,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var p=t.charAt(c);if(":"===p){if(""===a||a!=(i=Number(a)))return r(C,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(C,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),C.type===o.type&&C.data===o.data)return r(C,0,1);var h=r(o,c+i,u);if(!1===h)return}c+=i,a=""}else a+=p}return""!==a?r(C,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new w(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",u=1;255!==s[u];u++){if(c.length>310)return r(C,0,1);c+=s[u]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(h){var l=new Uint8Array(p);p="";for(var u=0;u<l.length;u++)p+=String.fromCharCode(l[u])}i.push(p),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e<n;e++)if(r(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0;return!1}var o=n(13),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var n="";return 0==(4294965248&t)?n=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),n=d(t>>12&15|224),n+=i(t,6)):0==(4292870144&t)&&(n=d(t>>18&7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,u="";++c<a;)r=i[c],u+=s(r,o);return u}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&h[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function u(t){var e,n,r,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&h[l],l++,0==(128&e))return e;if(192==(224&e)){if(n=c(),s=(31&e)<<6|n,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=c(),r=c(),s=(15&e)<<12|n<<6|r,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=c(),r=c(),i=c(),s=(7&e)<<18|n<<12|r<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function p(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=u(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var h,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:p}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var p=new ArrayBuffer(a),h=new Uint8Array(p);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[u++]=r<<2|o>>4,h[u++]=(15&o)<<4|i>>2,h[u++]=(3&i)<<6|63&s;return p}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=n(+new Date);return t!==i?(u=0,i=t):t+"."+n(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var s=n(22),a=n(33);t.exports=i;var c,u=/\n/g,p=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,"\\\n"),this.area.value=t.replace(u,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(23),a=n(24),c=n(32),u=n(33),p=n(34),h=n(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=n(37)}catch(f){}var l=o||i;t.exports=r,u(r,s),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o<i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),n.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h("websocket closed before onclose event")}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o=n(7),i=n(11),s=n(40),a=n(41),c=n(42),u=n(3)("socket.io-client:socket"),p=n(32),h=n(26);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=i.prototype.emit;i(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=s(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?o.BINARY_EVENT:o.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"==typeof this.query?p.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:o.CONNECT,query:t})}else this.packet({type:o.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===o.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=s(arguments);u("sending ack %j",r),e.packet({type:h(r)?o.BINARY_ACK:o.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map
/* Chartist.js 0.11.4
 * Copyright © 2019 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("Chartist",[],function(){return a.Chartist=b()}):"object"==typeof module&&module.exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.11.4"};return function(a,b){"use strict";var c=a.window,d=a.document;b.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},b.noop=function(a){return a},b.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},b.extend=function(a){var c,d,e;for(a=a||{},c=1;c<arguments.length;c++){d=arguments[c];for(var f in d)e=d[f],"object"!=typeof e||null===e||e instanceof Array?a[f]=e:a[f]=b.extend(a[f],e)}return a},b.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},b.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},b.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},b.querySelector=function(a){return a instanceof Node?a:d.querySelector(a)},b.times=function(a){return Array.apply(null,new Array(a))},b.sum=function(a,b){return a+(b?b:0)},b.mapMultiply=function(a){return function(b){return b*a}},b.mapAdd=function(a){return function(b){return b+a}},b.serialMap=function(a,c){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return b.times(e).forEach(function(b,e){var f=a.map(function(a){return a[e]});d[e]=c.apply(null,f)}),d},b.roundWithPrecision=function(a,c){var d=Math.pow(10,c||b.precision);return Math.round(a*d)/d},b.precision=8,b.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},b.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(b.escapingMap).reduce(function(a,c){return b.replaceAll(a,c,b.escapingMap[c])},a))},b.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(b.escapingMap).reduce(function(a,c){return b.replaceAll(a,b.escapingMap[c],c)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(c){}return a},b.createSvg=function(a,c,d,e){var f;return c=c||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(b.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new b.Svg("svg").attr({width:c,height:d}).addClass(e),f._node.style.width=c,f._node.style.height=d,a.appendChild(f._node),f},b.normalizeData=function(a,c,d){var e,f={raw:a,normalized:{}};return f.normalized.series=b.getDataArray({series:a.series||[]},c,d),e=f.normalized.series.every(function(a){return a instanceof Array})?Math.max.apply(null,f.normalized.series.map(function(a){return a.length})):f.normalized.series.length,f.normalized.labels=(a.labels||[]).slice(),Array.prototype.push.apply(f.normalized.labels,b.times(Math.max(0,e-f.normalized.labels.length)).map(function(){return""})),c&&b.reverseData(f.normalized),f},b.safeHasProperty=function(a,b){return null!==a&&"object"==typeof a&&a.hasOwnProperty(b)},b.isDataHoleValue=function(a){return null===a||void 0===a||"number"==typeof a&&isNaN(a)},b.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},b.getDataArray=function(a,c,d){function e(a){if(b.safeHasProperty(a,"value"))return e(a.value);if(b.safeHasProperty(a,"data"))return e(a.data);if(a instanceof Array)return a.map(e);if(!b.isDataHoleValue(a)){if(d){var c={};return"string"==typeof d?c[d]=b.getNumberOrUndefined(a):c.y=b.getNumberOrUndefined(a),c.x=a.hasOwnProperty("x")?b.getNumberOrUndefined(a.x):c.x,c.y=a.hasOwnProperty("y")?b.getNumberOrUndefined(a.y):c.y,c}return b.getNumberOrUndefined(a)}}return a.series.map(e)},b.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},b.getMetaData=function(a,b){var c=a.data?a.data[b]:a[b];return c?c.meta:void 0},b.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},b.projectLength=function(a,b,c){return b/c.range*a},b.getAvailableHeight=function(a,c){return Math.max((b.quantity(c.height).value||a.height())-(c.chartPadding.top+c.chartPadding.bottom)-c.axisX.offset,0)},b.getHighLow=function(a,c,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}c=b.extend({},c,d?c["axis"+d.toUpperCase()]:{});var f={high:void 0===c.high?-Number.MAX_VALUE:+c.high,low:void 0===c.low?Number.MAX_VALUE:+c.low},g=void 0===c.high,h=void 0===c.low;return(g||h)&&e(a),(c.referenceValue||0===c.referenceValue)&&(f.high=Math.max(c.referenceValue,f.high),f.low=Math.min(c.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},b.isNumeric=function(a){return null!==a&&isFinite(a)},b.isFalseyButZero=function(a){return!a&&0!==a},b.getNumberOrUndefined=function(a){return b.isNumeric(a)?+a:void 0},b.isMultiValue=function(a){return"object"==typeof a&&("x"in a||"y"in a)},b.getMultiValue=function(a,c){return b.isMultiValue(a)?b.getNumberOrUndefined(a[c||"y"]):b.getNumberOrUndefined(a)},b.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},b.getBounds=function(a,c,d,e){function f(a,b){return a===(a+=b)&&(a*=1+(b>0?o:-o)),a}var g,h,i,j=0,k={high:c.high,low:c.low};k.valueRange=k.high-k.low,k.oom=b.orderOfMagnitude(k.valueRange),k.step=Math.pow(10,k.oom),k.min=Math.floor(k.low/k.step)*k.step,k.max=Math.ceil(k.high/k.step)*k.step,k.range=k.max-k.min,k.numberOfSteps=Math.round(k.range/k.step);var l=b.projectLength(a,k.step,k),m=l<d,n=e?b.rho(k.range):0;if(e&&b.projectLength(a,1,k)>=d)k.step=1;else if(e&&n<k.step&&b.projectLength(a,n,k)>=d)k.step=n;else for(;;){if(m&&b.projectLength(a,k.step,k)<=d)k.step*=2;else{if(m||!(b.projectLength(a,k.step/2,k)>=d))break;if(k.step/=2,e&&k.step%1!==0){k.step*=2;break}}if(j++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var o=2.221e-16;for(k.step=Math.max(k.step,o),h=k.min,i=k.max;h+k.step<=k.low;)h=f(h,k.step);for(;i-k.step>=k.high;)i=f(i,-k.step);k.min=h,k.max=i,k.range=k.max-k.min;var p=[];for(g=k.min;g<=k.max;g=f(g,k.step)){var q=b.roundWithPrecision(g);q!==p[p.length-1]&&p.push(q)}return k.values=p,k},b.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},b.createChartRect=function(a,c,d){var e=!(!c.axisX&&!c.axisY),f=e?c.axisY.offset:0,g=e?c.axisX.offset:0,h=a.width()||b.quantity(c.width).value||0,i=a.height()||b.quantity(c.height).value||0,j=b.normalizePadding(c.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===c.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===c.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},b.createGrid=function(a,c,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",b.extend({type:"grid",axis:d,index:c,group:g,element:k},j))},b.createGridBackground=function(a,b,c,d){var e=a.elem("rect",{x:b.x1,y:b.y2,width:b.width(),height:b.height()},c,!0);d.emit("draw",{type:"gridBackground",group:a,element:e})},b.createLabel=function(a,c,e,f,g,h,i,j,k,l,m){var n,o={};if(o[g.units.pos]=a+i[g.units.pos],o[g.counterUnits.pos]=i[g.counterUnits.pos],o[g.units.len]=c,o[g.counterUnits.len]=Math.max(0,h-10),l){var p=d.createElement("span");p.className=k.join(" "),p.setAttribute("xmlns",b.namespaces.xhtml),p.innerText=f[e],p.style[g.units.len]=Math.round(o[g.units.len])+"px",p.style[g.counterUnits.len]=Math.round(o[g.counterUnits.len])+"px",n=j.foreignObject(p,b.extend({style:"overflow: visible;"},o))}else n=j.elem("text",o,k.join(" ")).text(f[e]);m.emit("draw",b.extend({type:"label",axis:g,index:e,group:j,element:n,text:f[e]},o))},b.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},b.optionsProvider=function(a,d,e){function f(a){var f=h;if(h=b.extend({},j),d)for(i=0;i<d.length;i++){var g=c.matchMedia(d[i][0]);g.matches&&(h=b.extend(h,d[i][1]))}e&&a&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=b.extend({},a),k=[];if(!c.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=c.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(),{removeMediaQueryListeners:g,getCurrentOptions:function(){return b.extend({},h)}}},b.splitIntoSegments=function(a,c,d){var e={increasingX:!1,fillHoles:!1};d=b.extend({},e,d);for(var f=[],g=!0,h=0;h<a.length;h+=2)void 0===b.getMultiValue(c[h/2].value)?d.fillHoles||(g=!0):(d.increasingX&&h>=2&&a[h]<=a[h-2]&&(g=!0),g&&(f.push({pathCoordinates:[],valueData:[]}),g=!1),f[f.length-1].pathCoordinates.push(a[h],a[h+1]),f[f.length-1].valueData.push(c[h/2]));return f}}(this||global,a),function(a,b){"use strict";b.Interpolation={},b.Interpolation.none=function(a){var c={fillHoles:!1};return a=b.extend({},c,a),function(c,d){for(var e=new b.Svg.Path,f=!0,g=0;g<c.length;g+=2){var h=c[g],i=c[g+1],j=d[g/2];void 0!==b.getMultiValue(j.value)?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},b.Interpolation.simple=function(a){var c={divisor:2,fillHoles:!1};a=b.extend({},c,a);var d=1/Math.max(1,a.divisor);return function(c,e){for(var f,g,h,i=new b.Svg.Path,j=0;j<c.length;j+=2){var k=c[j],l=c[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},b.Interpolation.cardinal=function(a){var c={tension:1,fillHoles:!1};a=b.extend({},c,a);var d=Math.min(1,Math.max(0,a.tension)),e=1-d;return function f(c,g){var h=b.splitIntoSegments(c,g,{fillHoles:a.fillHoles});if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(f(a.pathCoordinates,a.valueData))}),b.Svg.Path.join(i)}if(c=h[0].pathCoordinates,g=h[0].valueData,c.length<=4)return b.Interpolation.none()(c,g);for(var j,k=(new b.Svg.Path).move(c[0],c[1],!1,g[0]),l=0,m=c.length;m-2*!j>l;l+=2){var n=[{x:+c[l-2],y:+c[l-1]},{x:+c[l],y:+c[l+1]},{x:+c[l+2],y:+c[l+3]},{x:+c[l+4],y:+c[l+5]}];j?l?m-4===l?n[3]={x:+c[0],y:+c[1]}:m-2===l&&(n[2]={x:+c[0],y:+c[1]},n[3]={x:+c[2],y:+c[3]}):n[0]={x:+c[m-2],y:+c[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+c[l],y:+c[l+1]}),k.curve(d*(-n[0].x+6*n[1].x+n[2].x)/6+e*n[2].x,d*(-n[0].y+6*n[1].y+n[2].y)/6+e*n[2].y,d*(n[1].x+6*n[2].x-n[3].x)/6+e*n[2].x,d*(n[1].y+6*n[2].y-n[3].y)/6+e*n[2].y,n[2].x,n[2].y,!1,g[(l+2)/2])}return k}return b.Interpolation.none()([])}},b.Interpolation.monotoneCubic=function(a){var c={fillHoles:!1};return a=b.extend({},c,a),function d(c,e){var f=b.splitIntoSegments(c,e,{fillHoles:a.fillHoles,increasingX:!0});if(f.length){if(f.length>1){var g=[];return f.forEach(function(a){g.push(d(a.pathCoordinates,a.valueData))}),b.Svg.Path.join(g)}if(c=f[0].pathCoordinates,e=f[0].valueData,c.length<=4)return b.Interpolation.none()(c,e);var h,i,j=[],k=[],l=c.length/2,m=[],n=[],o=[],p=[];for(h=0;h<l;h++)j[h]=c[2*h],k[h]=c[2*h+1];for(h=0;h<l-1;h++)o[h]=k[h+1]-k[h],p[h]=j[h+1]-j[h],n[h]=o[h]/p[h];for(m[0]=n[0],m[l-1]=n[l-2],h=1;h<l-1;h++)0===n[h]||0===n[h-1]||n[h-1]>0!=n[h]>0?m[h]=0:(m[h]=3*(p[h-1]+p[h])/((2*p[h]+p[h-1])/n[h-1]+(p[h]+2*p[h-1])/n[h]),isFinite(m[h])||(m[h]=0));for(i=(new b.Svg.Path).move(j[0],k[0],!1,e[0]),h=0;h<l-1;h++)i.curve(j[h]+p[h]/3,k[h]+m[h]*p[h]/3,j[h+1]-p[h]/3,k[h+1]-m[h+1]*p[h]/3,j[h+1],k[h+1],!1,e[h+1]);return i}return b.Interpolation.none()([])}},b.Interpolation.step=function(a){var c={postpone:!0,fillHoles:!1};return a=b.extend({},c,a),function(c,d){for(var e,f,g,h=new b.Svg.Path,i=0;i<c.length;i+=2){var j=c[i],k=c[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(this||global,a),function(a,b){"use strict";b.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(this||global,a),function(a,b){"use strict";function c(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function d(a,c){var d=c||this.prototype||b.Class,e=Object.create(d);b.Class.cloneDefinitions(e,a);var f=function(){var a,c=e.constructor||function(){};return a=this===b?Object.create(e):this,c.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function e(){var a=c(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}b.Class={extend:d,cloneDefinitions:e}}(this||global,a),function(a,b){"use strict";function c(a,c,d){return a&&(this.data=a||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),c&&(this.options=b.extend({},d?this.options:this.defaultOptions,c),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=b.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function d(){return this.initializeTimeoutId?i.clearTimeout(this.initializeTimeoutId):(i.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function e(a,b){return this.eventEmitter.addEventHandler(a,b),this}function f(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function g(){i.addEventListener("resize",this.resizeListener),this.optionsProvider=b.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function h(a,c,d,e,f){this.container=b.querySelector(a),this.data=c||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=b.EventEmitter(),this.supportsForeignObject=b.Svg.isSupported("Extensibility"),this.supportsAnimations=b.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(g.bind(this),0)}var i=a.window;b.Base=b.Class.extend({constructor:h,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:c,detach:d,on:e,off:f,version:b.version,supportsForeignObject:!1})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e,f){a instanceof Element?this._node=a:(this._node=y.createElementNS(b.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":b.namespaces.ct})),c&&this.attr(c),d&&this.addClass(d),e&&(f&&e._node.firstChild?e._node.insertBefore(this._node,e._node.firstChild):e._node.appendChild(this._node))}function d(a,c){return"string"==typeof a?c?this._node.getAttributeNS(c,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(c){if(void 0!==a[c])if(c.indexOf(":")!==-1){var d=c.split(":");this._node.setAttributeNS(b.namespaces[d[0]],c,a[c])}else this._node.setAttribute(c,a[c])}.bind(this)),this)}function e(a,c,d,e){return new b.Svg(a,c,d,this,e)}function f(){return this._node.parentNode instanceof SVGElement?new b.Svg(this._node.parentNode):null}function g(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new b.Svg(a)}function h(a){var c=this._node.querySelector(a);return c?new b.Svg(c):null}function i(a){var c=this._node.querySelectorAll(a);return c.length?new b.Svg.List(c):null}function j(){return this._node}function k(a,c,d,e){if("string"==typeof a){var f=y.createElement("div");f.innerHTML=a,a=f.firstChild}a.setAttribute("xmlns",b.namespaces.xmlns);var g=this.elem("foreignObject",c,d,e);return g._node.appendChild(a),g}function l(a){return this._node.appendChild(y.createTextNode(a)),this}function m(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function n(){return this._node.parentNode.removeChild(this._node),this.parent()}function o(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function p(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function q(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function r(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function s(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return b.indexOf(a)===-1}).join(" ")),this}function t(){return this._node.setAttribute("class",""),this}function u(){return this._node.getBoundingClientRect().height}function v(){return this._node.getBoundingClientRect().width}function w(a,c,d){return void 0===c&&(c=!0),Object.keys(a).forEach(function(e){function f(a,c){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:b.Svg.Easing[a.easing],delete a.easing),a.begin=b.ensureUnit(a.begin,"ms"),a.dur=b.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),c&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=b.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",b.extend({attributeName:e},a)),c&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),c&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],c)}.bind(this)),this}function x(a){var c=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new b.Svg(a[d]));Object.keys(b.Svg.prototype).filter(function(a){return["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)===-1}).forEach(function(a){c[a]=function(){var d=Array.prototype.slice.call(arguments,0);return c.svgElements.forEach(function(c){b.Svg.prototype[a].apply(c,d)}),c}})}var y=a.document;b.Svg=b.Class.extend({constructor:c,attr:d,elem:e,parent:f,root:g,querySelector:h,querySelectorAll:i,getNode:j,foreignObject:k,text:l,empty:m,remove:n,replace:o,append:p,classes:q,addClass:r,removeClass:s,removeAllClasses:t,height:u,width:v,animate:w}),b.Svg.isSupported=function(a){return y.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var z={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};b.Svg.Easing=z,b.Svg.List=b.Class.extend({constructor:x})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e,f,g){var h=b.extend({command:f?a.toLowerCase():a.toUpperCase()},c,g?{data:g}:{});d.splice(e,0,h)}function d(a,b){a.forEach(function(c,d){t[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function e(a,c){this.pathElements=[],this.pos=0,this.close=a,this.options=b.extend({},u,c)}function f(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function g(a){return this.pathElements.splice(this.pos,a),this}function h(a,b,d,e){return c("M",{x:+a,y:+b},this.pathElements,this.pos++,d,e),this}function i(a,b,d,e){return c("L",{x:+a,y:+b},this.pathElements,this.pos++,d,e),this}function j(a,b,d,e,f,g,h,i){return c("C",{x1:+a,y1:+b,x2:+d,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function k(a,b,d,e,f,g,h,i,j){return c("A",{rx:+a,ry:+b,xAr:+d,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function l(a){var c=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===c[c.length-1][0].toUpperCase()&&c.pop();var d=c.map(function(a){var c=a.shift(),d=t[c.toLowerCase()];return b.extend({command:c},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function m(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=t[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function n(a,b){return d(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function o(a,b){return d(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function p(a){return d(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function q(a){var c=new b.Svg.Path(a||this.close);return c.pos=this.pos,c.pathElements=this.pathElements.slice().map(function(a){return b.extend({},a)}),c.options=b.extend({},this.options),c}function r(a){var c=[new b.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==c[c.length-1].pathElements.length&&c.push(new b.Svg.Path),c[c.length-1].pathElements.push(d)}),c}function s(a,c,d){for(var e=new b.Svg.Path(c,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var t={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},u={accuracy:3};b.Svg.Path=b.Class.extend({constructor:e,position:f,remove:g,move:h,line:i,curve:j,arc:k,scale:n,translate:o,transform:p,parse:l,stringify:m,clone:q,splitByCommand:r}),b.Svg.Path.elementDescriptions=t,b.Svg.Path.join=s}(this||global,a),function(a,b){"use strict";function c(a,b,c,d){this.units=a,this.counterUnits=a===e.x?e.y:e.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function d(a,c,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),b.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&b.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&b.createLabel(j,l,k,i,this,g.offset,m,c,[e.classNames.label,e.classNames[this.units.dir],"start"===g.position?e.classNames[g.position]:e.classNames.end],d,f))}.bind(this))}var e=(a.window,a.document,{x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}});b.Axis=b.Class.extend({constructor:c,createGridAndLabels:d,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),b.Axis.units=e}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){var f=e.highLow||b.getHighLow(c,e,a.pos);this.bounds=b.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},b.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function d(a){return this.axisLength*(+b.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}a.window,a.document;b.AutoScaleAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){var f=e.highLow||b.getHighLow(c,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||b.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},b.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function d(a){return this.axisLength*(+b.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}a.window,a.document;b.FixedScaleAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){b.StepAxis["super"].constructor.call(this,a,d,e.ticks,e);var f=Math.max(1,e.ticks.length-(e.stretch?1:0));this.stepLength=this.axisLength/f}function d(a,b){return this.stepLength*b}a.window,a.document;b.StepAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a){var c=b.normalizeData(this.data,a.reverseData,!0);this.svg=b.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,f,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=b.createChartRect(this.svg,a,e.padding);d=void 0===a.axisX.type?new b.StepAxis(b.Axis.units.x,c.normalized.series,j,b.extend({},a.axisX,{ticks:c.normalized.labels,stretch:a.fullWidth})):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,j,a.axisX),f=void 0===a.axisY.type?new b.AutoScaleAxis(b.Axis.units.y,c.normalized.series,j,b.extend({},a.axisY,{high:b.isNumeric(a.high)?a.high:a.axisY.high,low:b.isNumeric(a.low)?a.low:a.axisY.low})):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),f.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&b.createGridBackground(g,j,a.classNames.gridBackground,this.eventEmitter),c.raw.series.forEach(function(e,g){var i=h.elem("g");i.attr({"ct:series-name":e.name,"ct:meta":b.serialize(e.meta)}),i.addClass([a.classNames.series,e.className||a.classNames.series+"-"+b.alphaNumerate(g)].join(" "));var k=[],l=[];c.normalized.series[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,c.normalized.series[g]),y:j.y1-f.projectValue(a,h,c.normalized.series[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:b.getMetaData(e,h)})}.bind(this));var m={lineSmooth:b.getSeriesOption(e,a,"lineSmooth"),showPoint:b.getSeriesOption(e,a,"showPoint"),showLine:b.getSeriesOption(e,a,"showLine"),showArea:b.getSeriesOption(e,a,"showArea"),areaBase:b.getSeriesOption(e,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?b.Interpolation.monotoneCubic():b.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(c){var h=i.elem("line",{x1:c.x,y1:c.y,x2:c.x+.01,y2:c.y},a.classNames.point).attr({"ct:value":[c.data.value.x,c.data.value.y].filter(b.isNumeric).join(","),"ct:meta":b.serialize(c.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:c.data.value,index:c.data.valueIndex,meta:c.data.meta,series:e,seriesIndex:g,axisX:d,axisY:f,group:i,element:h,x:c.x,y:c.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:c.normalized.series[g],path:o.clone(),chartRect:j,index:g,series:e,seriesIndex:g,seriesMeta:e.meta,axisX:d,axisY:f,group:i,element:p})}if(m.showArea&&f.range){var q=Math.max(Math.min(m.areaBase,f.range.max),f.range.min),r=j.y1-f.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(b){var h=i.elem("path",{d:b.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:c.normalized.series[g],path:b.clone(),series:e,seriesIndex:g,axisX:d,axisY:f,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:f.bounds,chartRect:j,axisX:d,axisY:f,svg:this.svg,options:a})}function d(a,c,d,f){b.Line["super"].constructor.call(this,a,c,e,b.extend({},e,d),f)}var e=(a.window,a.document,{axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}});b.Line=b.Base.extend({constructor:d,createChart:c})}(this||global,a),function(a,b){"use strict";function c(a){var c,d;a.distributeSeries?(c=b.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),c.normalized.series=c.normalized.series.map(function(a){return[a]})):c=b.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),this.svg=b.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var f=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);
if(a.stackBars&&0!==c.normalized.series.length){var i=b.serialMap(c.normalized.series,function(){return Array.prototype.slice.call(arguments).map(function(a){return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});d=b.getHighLow([i],a,a.horizontalBars?"x":"y")}else d=b.getHighLow(c.normalized.series,a,a.horizontalBars?"x":"y");d.high=+a.high||(0===a.high?0:d.high),d.low=+a.low||(0===a.low?0:d.low);var j,k,l,m,n,o=b.createChartRect(this.svg,a,e.padding);k=a.distributeSeries&&a.stackBars?c.normalized.labels.slice(0,1):c.normalized.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new b.AutoScaleAxis(b.Axis.units.x,c.normalized.series,o,b.extend({},a.axisX,{highLow:d,referenceValue:0})):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,o,b.extend({},a.axisX,{highLow:d,referenceValue:0})),l=n=void 0===a.axisY.type?new b.StepAxis(b.Axis.units.y,c.normalized.series,o,{ticks:k}):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,o,a.axisY)):(l=m=void 0===a.axisX.type?new b.StepAxis(b.Axis.units.x,c.normalized.series,o,{ticks:k}):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,o,a.axisX),j=n=void 0===a.axisY.type?new b.AutoScaleAxis(b.Axis.units.y,c.normalized.series,o,b.extend({},a.axisY,{highLow:d,referenceValue:0})):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,o,b.extend({},a.axisY,{highLow:d,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(f,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(f,h,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&b.createGridBackground(f,o,a.classNames.gridBackground,this.eventEmitter),c.raw.series.forEach(function(d,e){var f,h,i=e-(c.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/c.normalized.series.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/c.normalized.series[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":d.name,"ct:meta":b.serialize(d.meta)}),h.addClass([a.classNames.series,d.className||a.classNames.series+"-"+b.alphaNumerate(e)].join(" ")),c.normalized.series[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,c.normalized.series[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,c.normalized.series[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,c.normalized.series[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,c.normalized.series[e])},l instanceof b.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1);var w=b.getMetaData(d,k);s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(b.isNumeric).join(","),"ct:meta":b.serialize(w)}),this.eventEmitter.emit("draw",b.extend({type:"bar",value:g,index:k,meta:w,series:d,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function d(a,c,d,f){b.Bar["super"].constructor.call(this,a,c,e,b.extend({},e,d),f)}var e=(a.window,a.document,{axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}});b.Bar=b.Base.extend({constructor:d,createChart:c})}(this||global,a),function(a,b){"use strict";function c(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function d(a){var d,e,g,h,i,j=b.normalizeData(this.data),k=[],l=a.startAngle;this.svg=b.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=b.createChartRect(this.svg,a,f.padding),g=Math.min(e.width()/2,e.height()/2),i=a.total||j.normalized.series.reduce(function(a,b){return a+b},0);var m=b.quantity(a.donutWidth);"%"===m.unit&&(m.value*=g/100),g-=a.donut&&!a.donutSolid?m.value/2:0,h="outside"===a.labelPosition||a.donut&&!a.donutSolid?g:"center"===a.labelPosition?0:a.donutSolid?g-m.value/2:g/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===j.raw.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;j.raw.series.forEach(function(a,b){k[b]=this.svg.elem("g",null,null)}.bind(this)),a.showLabel&&(d=this.svg.elem("g",null,null)),j.raw.series.forEach(function(e,f){if(0!==j.normalized.series[f]||!a.ignoreEmptyValues){k[f].attr({"ct:series-name":e.name}),k[f].addClass([a.classNames.series,e.className||a.classNames.series+"-"+b.alphaNumerate(f)].join(" "));var p=i>0?l+j.normalized.series[f]/i*360:0,q=Math.max(0,l-(0===f||o?0:.2));p-q>=359.99&&(p=q+359.99);var r,s,t,u=b.polarToCartesian(n.x,n.y,g,q),v=b.polarToCartesian(n.x,n.y,g,p),w=new b.Svg.Path(!a.donut||a.donutSolid).move(v.x,v.y).arc(g,g,0,p-l>180,0,u.x,u.y);a.donut?a.donutSolid&&(t=g-m.value,r=b.polarToCartesian(n.x,n.y,t,l-(0===f||o?0:.2)),s=b.polarToCartesian(n.x,n.y,t,p),w.line(r.x,r.y),w.arc(t,t,0,p-l>180,1,s.x,s.y)):w.line(n.x,n.y);var x=a.classNames.slicePie;a.donut&&(x=a.classNames.sliceDonut,a.donutSolid&&(x=a.classNames.sliceDonutSolid));var y=k[f].elem("path",{d:w.stringify()},x);if(y.attr({"ct:value":j.normalized.series[f],"ct:meta":b.serialize(e.meta)}),a.donut&&!a.donutSolid&&(y._node.style.strokeWidth=m.value+"px"),this.eventEmitter.emit("draw",{type:"slice",value:j.normalized.series[f],totalDataSum:i,index:f,meta:e.meta,series:e,group:k[f],element:y,path:w.clone(),center:n,radius:g,startAngle:l,endAngle:p}),a.showLabel){var z;z=1===j.raw.series.length?{x:n.x,y:n.y}:b.polarToCartesian(n.x,n.y,h,l+(p-l)/2);var A;A=j.normalized.labels&&!b.isFalseyButZero(j.normalized.labels[f])?j.normalized.labels[f]:j.normalized.series[f];var B=a.labelInterpolationFnc(A,f);if(B||0===B){var C=d.elem("text",{dx:z.x,dy:z.y,"text-anchor":c(n,z,a.labelDirection)},a.classNames.label).text(""+B);this.eventEmitter.emit("draw",{type:"label",index:f,group:d,element:C,text:""+B,x:z.x,y:z.y})}}l=p}}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function e(a,c,d,e){b.Pie["super"].constructor.call(this,a,c,f,b.extend({},f,d),e)}var f=(a.window,a.document,{width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",sliceDonutSolid:"ct-slice-donut-solid",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutSolid:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:b.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1});b.Pie=b.Base.extend({constructor:e,createChart:d,determineAnchorPosition:c})}(this||global,a),a});
//# sourceMappingURL=chartist.min.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("chartist")):"function"==typeof define&&define.amd?define(["Chartist"],t):"object"==typeof exports?exports.VueChartist=t(require("chartist")):e.VueChartist=t(e.Chartist)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),i=n(4),s=n(3),u=s(o.a,i.a,null,null,null);u.options.__file="src/vue-chartist.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] vue-chartist.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"vue-chartist",props:{type:{type:String,validator:function(e){return"Pie"===e||"Line"===e||"Bar"===e},default:function(){return"Line"}},data:{type:Object,required:!0},options:{type:Object},listener:{type:Object},responsiveOptions:{type:Array}},data:function(){return{chartist:void 0}},methods:{updateEventListener:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"on";e=e||{};for(var n in e)e.hasOwnProperty(n)&&this.chartist[t](n,e[n])},renderChart:function(){var e=this.data,t=this.options?this.options:{},n=this.responsiveOptions?this.responsiveOptions:[];this.chartist?this.chartist.update(e,t,n):(this.chartist=new o.default[this.type](this.$el,e,t,n),this.updateEventListener(this.listener,"on"))}},watch:{data:{handler:"renderChart",deep:!0},options:{handler:"renderChart",deep:!0},responsiveOptions:{handler:"renderChart",deep:!0},listener:function(e,t){this.updateEventListener(t,"off"),this.updateEventListener(e,"on")}},mounted:function(){this.renderChart()},destroyed:function(){this.chartist&&this.chartist.detach()}}},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=o.default},function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=c):n&&(c=n),c){var d=a.functional,p=d?a.render:a.beforeCreate;d?a.render=function(e,t){return c.call(t),p(e,t)}:a.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:s,options:a}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"v-chartist-container"})},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.a=i},function(t,n){t.exports=e}])});
/* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(5),u=n(6),a=r(u);a.Axios=s,a.create=function(e){return r(o.merge(u,e))},a.Cancel=n(23),a.CancelToken=n(24),a.isCancel=n(20),a.all=function(e){return Promise.all(e)},a.spread=n(25),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return"[object Array]"===R.call(e)}function o(e){return"[object ArrayBuffer]"===R.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===R.call(e)}function d(e){return"[object File]"===R.call(e)}function l(e){return"[object Blob]"===R.call(e)}function h(e){return"[object Function]"===R.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function b(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=E(t,n):e[r]=t}),e}var E=n(3),C=n(4),R=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:v,merge:x,extend:b,trim:w}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(6),i=n(2),s=n(17),u=n(18);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(8):"undefined"!=typeof process&&(e=n(8)),e}var i=n(2),s=n(7),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:o(),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){a.headers[e]={}}),i.forEach(["post","put","patch"],function(e){a.headers[e]=i.merge(u)}),e.exports=a},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(9),i=n(12),s=n(13),u=n(14),a=n(10),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(15);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(a("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=n(16),v=(e.withCredentials||u(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([n]):s[t]=s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),s="",u=0,a=o;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if(r=i.charCodeAt(u+=.75),r>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(19),s=n(20),u=n(6),a=n(21),c=n(22);e.exports=function(e){r(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||u.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/vue-cookies@1.6.1/vue-cookies.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(){var e={expires:"1d",path:"; path=/",domain:"",secure:""},n={install:function(e){e.prototype.$cookies=this,e.$cookies=this},config:function(n,o,t,i){e.expires=n||"1d",e.path=o?"; path="+o:"; path=/",e.domain=t?"; domain="+t:"",e.secure=i?"; secure":""},get:function(e){var n=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(n&&"{"===n.substring(0,1)&&"}"===n.substring(n.length-1,n.length))try{n=JSON.parse(n)}catch(e){return n}return n},set:function(n,o,t,i,r,a){if(!n)throw new Error("cookie name is not find in first argument");if(/^(?:expires|max\-age|path|domain|secure)$/i.test(n))throw new Error("cookie key name illegality ,Cannot be set to ['expires','max-age','path','domain','secure']\t","current key name: "+n);o&&o.constructor===Object&&(o=JSON.stringify(o));var s="";if((t=void 0===t?e.expires:t)&&0!=t)switch(t.constructor){case Number:s=t===1/0||-1===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:if(/^(?:\d{1,}(y|m|d|h|min|s))$/i.test(t)){var c=t.replace(/^(\d{1,})(?:y|m|d|h|min|s)$/i,"$1");switch(t.replace(/^(?:\d{1,})(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":s="; max-age="+2592e3*+c;break;case"d":s="; max-age="+86400*+c;break;case"h":s="; max-age="+3600*+c;break;case"min":s="; max-age="+60*+c;break;case"s":s="; max-age="+c;break;case"y":s="; max-age="+31104e3*+c;break;default:new Error("unknown exception of 'set operation'")}}else s="; expires="+t;break;case Date:s="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(n)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:e.domain)+(i?"; path="+i:e.path)+(void 0===a?e.secure:a?"; secure":""),this},remove:function(n,o,t){return!(!n||!this.isKey(n))&&(document.cookie=encodeURIComponent(n)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:e.domain)+(o?"; path="+o:e.path),this)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<e.length;n++)e[n]=decodeURIComponent(e[n]);return e}};"object"==typeof exports?module.exports=n:"function"==typeof define&&define.amd?define([],function(){return n}):window.Vue&&Vue.use(n),"undefined"!=typeof window&&(window.$cookies=n)}();
//# sourceMappingURL=/sm/64d8a38a2c276fed15ac1938f8ce7749836ececb4aa64c5a78a97b3804cede47.map
!function(a,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pixelsJS=t():a.pixelsJS=t()}(this,function(){return function(a){var t={};function e(d){if(t[d])return t[d].exports;var n=t[d]={i:d,l:!1,exports:{}};return a[d].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=a,e.c=t,e.d=function(a,t,d){e.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:d})},e.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,t){if(1&t&&(a=e(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(e.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)e.d(d,n,function(t){return a[t]}.bind(null,n));return d},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},e.p="",e(e.s=1)}([function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getRandomNumber=function(a,t){return Math.floor(Math.random()*(t-a+1))+a}},function(a,t,e){"use strict";(function(d){Object.defineProperty(t,"__esModule",{value:!0});var n,r=u(e(3)),i=u(e(4)),o=u(e(5)),_=u(e(6)),g=u(e(7)),m=u(e(8));function u(a){if(a&&a.__esModule)return a;var t={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t.default=a,t}function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var f=function(){var a;return l(a={horizontal_lines:_.add_horizontal_line_imgdata,extreme_offset_blue:i.extreme_offset_blue,extreme_offset_green:i.extreme_offset_green,offset_green:i.offset_green_imgdata,extra_offset_blue:i.extra_offset_blue,extra_offset_red:i.extra_offset_red,extra_offset_green:i.extra_offset_green,extreme_offset_red:i.extreme_offset_red,specks_redscale:g.specksredscale_imgdata,eclectic:g.eclectic_imgdata,pane:_.pane_imgdata,diagonal_lines:_.add_diagonal_lines_imgdata,green_specks:g.green_specks_imgdata,casino:g.casino_imgdata,yellow_casino:g.yellow_casino_imgdata,green_diagonal_lines:_.add_green_diagonal_lines_imgdata,offset:i.offset,offset_blue:i.offset_blue_imgdata,neue:o.neue_imgdata,sunset:o.sunset,specks:g.specks_imgdata,wood:o.wood,lix:o.lix_conv,ryo:o.ryo_conv,bluescale:o.blue_greyscale_imgdata,solange:o.solange_imgdata,evening:o.evening_imgdata,crimson:o.crimson,teal_min_noise:r.teal_min_noise_imgdata,phase:o.phase,dark_purple_min_noise:r.dark_purple_min_noise_imgdata,coral:o.coral_imgdata,darkify:m.darkify_imgdata,incbrightness:m.incbrightness_imgdata,incbrightness2:m.incbrightness_two_imgdata,invert:m.invert_imgdata,sat_adj:m.sat_adj_imgdata,lemon:o.lemon_imgdata,pink_min_noise:r.pink_min_noise_imgdata,frontward:o.frontward_imgdata,vintage:o.vintage_imgdata,perfume:o.perfume_imgdata,serenity:o.serenity_imgdata,pink_aura:o.pink_aura_imgdata,haze:o.haze_imgdata,cool_twilight:o.cool_twilight_imgdata,blues:o.blues_imgdata,horizon:o.horizon_imgdata,mellow:o.mellow_imgdata,solange_dark:o.solange_dark_imgdata,solange_grey:o.solange_grey_imgdata,zapt:o.zapt_imgdata,eon:o.eon_imgdata,aeon:o.aeon_imgdata,matrix:r.matrix_imgdata,cosmic:r.cosmic_imgdata,min_noise:r.min_noise_imgdata,red_min_noise:r.red_min_noise_imgdata,matrix2:r.matrix2,purplescale:o.purplescale_imgdata,radio:o.radio_imgdata,twenties:o.twenties_imgdata,ocean:o.ocean_imgdata,a:m.a,pixel_blue:m.pixel_blue_imgdata,greyscale:o.greyscale_imgdata,grime:o.grime,redgreyscale:o.redgreyscale_imgdata,retroviolet:g.retroviolet_imgdata,greengreyscale:o.greengreyscale_imgdata,warmth:o.warmth},"crimson",o.crimson),l(a,"green_med_noise",r.green_med_noise_imgdata),l(a,"green_min_noise",r.green_min_noise_imgdata),l(a,"blue_min_noise",r.blue_min_noise_imgdata),l(a,"rosetint",o.rosetint_imgdata),l(a,"purple_min_noise",r.purple_min_noise_imgdata),a};t.default={filterImg:function(a,t){var e=f(),d=document.createElement("canvas"),r=a.width||a.naturalWidth,i=a.height||a.naturalHeight;d.height=i,d.width=r;var o=d.getContext("2d"),_=o.createPattern(a,"no-repeat");o.fillStyle=_,o.fillRect(0,0,d.width,d.height),n=o.getImageData(0,0,d.width,d.height),console.log(n);var g=e[t](n);console.log(g),o.putImageData(n,0,0),console.log(d,a),a.parentNode.replaceChild(d,a)},filterImgData:function(a,t){var e=f();return n=a,e[t](n)},getFilterList:function(){var a=f();return Object.keys(a)}},a.exports=t.default}).call(this,e(2))},function(a,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(a){"object"==typeof window&&(e=window)}a.exports=e},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pink_min_noise_imgdata=t.matrix_imgdata=t.min_noise_imgdata=t.matrix2=t.blue_min_noise_imgdata=t.cosmic_imgdata=t.teal_min_noise_imgdata=t.dark_purple_min_noise_imgdata=t.purple_min_noise_imgdata=t.green_min_noise_imgdata=t.green_med_noise_imgdata=t.red_min_noise_imgdata=void 0;var d=e(0),n=void 0,r=void 0;t.red_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.6*Math.random(),e=.6+.4*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.green_med_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.5*a.data[n+1]*t,a.data[n+1]=.99*a.data[n+2]*e,a.data[n+2]=.99*a.data[n]*d}return a},t.green_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.5*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.purple_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.2*Math.random(),d=.6+.8*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.dark_purple_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.5*a.data[n]*t,a.data[n+1]=.3*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.teal_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.cosmic_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(0,r=30):t>49&&t<100?(100,r=90):(70,r=10),a.data[n]-void 0>255?a.data[n]-=void 0:a.data[n]+=void 0,a.data[n+1]+void 0>255?a.data[n+1]-=r:a.data[n+2]+=r;return a},t.blue_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.2*Math.random(),d=.6+.7*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.matrix2=function(a){var t;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(20,r=30):t>49&&t<100?(10,r=90):(70,r=10),a.data[n]-0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=r:a.data[n+1]+=r;return a},t.min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.4*Math.random(),e=.6+.4*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.matrix_imgdata=function(a){var t;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(20,r=30):t>49&&t<100?(10,r=90):(30,r=10),a.data[n]-void 0>255?a.data[n]-=void 0:a.data[n]+=void 0,a.data[n+1]+void 0>255?a.data[n+1]-=r:a.data[n+1]+=r;return a},t.pink_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.6*Math.random(),e=.6+.1*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.offset_blue_imgdata=t.offset_green_imgdata=t.extreme_offset_red=t.extreme_offset_green=t.extreme_offset_blue=t.extra_offset_red=t.extra_offset_green=t.extra_offset_blue=t.offset=void 0;e(0);var d=void 0;t.offset=function(a){console.log("offset called");for(var t=0;t<a.data.length;t+=4)a.data[t]=void 0==a.data[t+100]?0:a.data[t+20];return a},t.extra_offset_blue=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+2]=void 0==a.data[d+900]?0:a.data[d+60];return a},t.extra_offset_green=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+1]=void 0==a.data[d+900]?0:a.data[d+60];return a},t.extra_offset_red=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=void 0==a.data[d+900]?0:a.data[d+60];return a},t.extreme_offset_blue=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+2]=void 0==a.data[d+4900]?0:a.data[d+140];return a},t.extreme_offset_green=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+1]=void 0==a.data[d+4900]?0:a.data[d+140];return a},t.extreme_offset_red=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=void 0==a.data[d+4900]?0:a.data[d+140];return a},t.offset_green_imgdata=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+1]=void 0==a.data[d+100]?0:a.data[d+20];return a},t.offset_blue_imgdata=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+2]=void 0==a.data[d+100]?0:a.data[d+20];return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.purplescale_imgdata=t.rosetint_imgdata=t.twenties_imgdata=t.horizon_imgdata=t.evening_imgdata=t.mellow_imgdata=t.haze_imgdata=t.pink_aura_imgdata=t.solange_dark_imgdata=t.zapt_imgdata=t.eon_imgdata=t.neue_imgdata=t.radio_imgdata=t.ocean_imgdata=t.greengreyscale_imgdata=t.crimson=t.phase=t.grime=t.redgreyscale_imgdata=t.warmth=t.slate_imgdata=t.serenity_imgdata=t.vintage_imgdata=t.perfume_imgdata=t.greyscale_imgdata=t.frontward_imgdata=t.coral_imgdata=t.lemon_imgdata=t.sunset=t.wood=t.lix_conv=t.ryo_conv=t.solange_imgdata=t.solange_grey_imgdata=t.aeon_imgdata=t.blue_greyscale_imgdata=t.cool_twilight_imgdata=t.blues_imgdata=void 0;var d=e(0),n=void 0;t.blues_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=255-a.data[n+2];return a},t.cool_twilight_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=255-a.data[n+1];return a},t.blue_greyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+20,a.data[n+1]=t+30,a.data[n+2]=t+60}return a},t.aeon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=60-a.data[n+1],a.data[n+2]=100-a.data[n+2];return a},t.solange_grey_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n+2],a.data[n+1]=a.data[n+1],a.data[n+2]=a.data[n];return a},t.solange_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n];return a},t.ryo_conv=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+2]=255-a.data[n+2];return a},t.lix_conv=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+1]=255-a.data[n+1];return a},t.wood=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+30,a.data[n+1]=a.data[n+1]+12;return a},t.sunset=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+50,a.data[n+2]=a.data[n+2]+12;return a},t.lemon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+50;return a},t.coral_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=a.data[n+1]+50;return a},t.frontward_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n+2],a.data[n+2]=a.data[n+1]+50;return a},t.greyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t,a.data[n+1]=t,a.data[n+2]=t}return a},t.perfume_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=80,a.data[n+1]+=40,a.data[n+2]+=120;return a},t.vintage_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=120,a.data[n+1]+=70,a.data[n+2]+=13;return a},t.serenity_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=10,a.data[n+1]+=40,a.data[n+2]+=90;return a},t.slate_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+4,a.data[n+1]=t+3,a.data[n+2]=t+12}return a},t.warmth=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+10,a.data[n+1]=a.data[n+1]+18;return a},t.redgreyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+100,a.data[n+1]=t+40,a.data[n+2]=t+20}return a},t.grime=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+5,a.data[n]=a.data[n]+1;return a},t.phase=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+(0,d.getRandomNumber)(10,20),a.data[n+1]=a.data[n+2]+(0,d.getRandomNumber)(10,20),a.data[n+2]=a.data[n+2]+(0,d.getRandomNumber)(10,20);return a},t.crimson=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+20,a.data[n+1]=a.data[n+2]+20;return a},t.greengreyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+20,a.data[n+1]=t+70,a.data[n+2]=t+20}return a},t.ocean_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=10,a.data[n+1]+=20,a.data[n+2]+=90;return a},t.radio_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+5,a.data[n+1]=t+40,a.data[n+2]=t+20}return a},t.neue_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=255-a.data[n+2];return a},t.eon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=120-a.data[n+1],a.data[n+2]=100-a.data[n+2];return a},t.zapt_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=255-a.data[n+1];return a},t.solange_dark_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=200-a.data[n];return a},t.pink_aura_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=90,a.data[n+1]+=10,a.data[n+2]+=90;return a},t.haze_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=90,a.data[n+1]+=90,a.data[n+2]+=10;return a},t.mellow_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=120-a.data[n+2];return a},t.evening_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=60,a.data[n+1]-=60,a.data[n+2]-=60;return a},t.horizon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=150,a.data[n+1]-=150,a.data[n+2]-=150;return a},t.twenties_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+18,a.data[n+1]=t+12,a.data[n+2]=t+20}return a},t.rosetint_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+80,a.data[n+1]=t+20,a.data[n+2]=t+31}return a},t.purplescale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+90,a.data[n+1]=t+40,a.data[n+2]=t+80}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.add_horizontal_line_imgdata=t.add_green_diagonal_lines_imgdata=t.add_diagonal_lines_imgdata=t.pane_imgdata=void 0;e(0);var d=void 0;t.pane_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=200)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+5,a.data[d+1]=e+t,a.data[d+2]=e+20}return a},t.add_diagonal_lines_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=20)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+t,a.data[d+1]=e+70,a.data[d+2]=e+20}return a},t.add_green_diagonal_lines_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=20)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+5,a.data[d+1]=e+t,a.data[d+2]=e+20}return a},t.add_horizontal_line_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=1)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+t,a.data[d+1]=e+70,a.data[d+2]=e+20}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.specksredscale_imgdata=t.specks_imgdata=t.green_specks_imgdata=t.eclectic_imgdata=t.retroviolet_imgdata=t.yellow_casino_imgdata=t.casino_imgdata=void 0;var d=e(0),n=void 0,r=void 0,i=void 0;t.casino_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4){(t=(0,d.getRandomNumber)(0,255))>255&&(t=0);var e=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=e+t,a.data[n+1]=e+2,a.data[n+2]=e+5}return a},t.yellow_casino_imgdata=function(a){var t=0,e=0;for(n=0;n<a.data.length;n+=4){t=(0,d.getRandomNumber)(0,255),e=(0,d.getRandomNumber)(0,255),t>255&&(t=0);var r=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=r+t,a.data[n+1]=r+e,a.data[n+2]=r+5}return a},t.retroviolet_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4){var e=0,r=0;(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(e=20,r=30):t>49&&t<100?(e=20,r=90):(e=10,r=50),a.data[n]-e>255?a.data[n]-=e:a.data[n]+=e,a.data[n+2]+r>255?a.data[n+2]-=r:a.data[n+2]+=r}return a},t.eclectic_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(r=20,i=30):t>49&&t<100?(r=10,i=90):(r=30,i=10),a.data[n]+0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=i:a.data[n]+=i;return a},t.green_specks_imgdata=function(a){var t;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(r=20,i=30):t>49&&t<100?(r=10,i=90):(r=30,i=10),a.data[n]+=r,a.data[n+1]+=i,a.data[n+2]+=r;return a},t.specks_imgdata=function(a){var t=0,e=0;for(n=0;n<a.data.length;n+=4){n=(0,d.getRandomNumber)(0,a.data.length),t=(0,d.getRandomNumber)(0,255),e=(0,d.getRandomNumber)(0,255),(0,d.getRandomNumber)(0,255),t>255&&(t=0);var r=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=r+t,a.data[n+1]=r+e,a.data[n+2]=r+5}return a},t.specksredscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(0,d.getRandomNumber)(0,100);t>10&&t<13&&(a.data[n]=120,a.data[n+1]=120,a.data[n+2]=120);var e=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=e+100,a.data[n+1]=e+40,a.data[n+2]=e+20}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pixel_blue_imgdata=t.a=t.invert_imgdata=t.darkify_imgdata=t.incbrightness_two_imgdata=t.incbrightness_imgdata=t.sat_adj_imgdata=void 0;var d=e(0),n=void 0,r=void 0;t.sat_adj_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=150,a.data[n+1]-=150,a.data[n+2]-=150;return a},t.incbrightness_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=50,a.data[n+1]+=50,a.data[n+2]+=50;return a},t.incbrightness_two_imgdata=function(a){var t=0,e=0;for(n=0;n<a.data.length;n+=4){n=(0,d.getRandomNumber)(0,a.data.length),t=(0,d.getRandomNumber)(0,255),e=(0,d.getRandomNumber)(0,255),(0,d.getRandomNumber)(0,255),t>255&&(t=0);var r=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=r+t,a.data[n+1]=r+e,a.data[n+2]=r+5}return a},t.darkify_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=20,a.data[n+1]-=20,a.data[n+2]-=20;return a},t.invert_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+1]=255-a.data[n+1],a.data[n+2]=255-a.data[n+2];return a},t.a=function(a){var t=0;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(0,r=30):t>49&&t<100?(100,r=90):(70,r=10),a.data[n]-0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=r:a.data[n+2]+=r;return a},t.pixel_blue_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(0,r=30):t>49&&t<100?(100,r=90):(70,r=10),a.data[n]-0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=r:a.data[n+2]+=r;return a}}])});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-cropper",[],e):"object"==typeof exports?exports["vue-cropper"]=e():t["vue-cropper"]=e()}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,o){var n=o(2);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,o){"use strict";var n=o(0);o.n(n).a},function(t,e,o){(t.exports=o(3)(!1)).push([t.i,'\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,e,o){var n={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,c=[],h=o(5);function p(t,e){for(var o=0;o<t.length;o++){var r=t[o],i=n[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],e));n[r.id]={id:r.id,refs:1,parts:a}}}}function u(t,e){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):o.push(n[s]={id:s,parts:[a]})}return o}function d(t,e){var o=i(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),c.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,o);o.insertBefore(e,r)}}function l(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),d(t,e),e}function g(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function v(t,e){var o,n,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var c=a++;o=s||(s=f(e)),n=w.bind(null,o,c,!1),r=w.bind(null,o,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),d(t,e),e}(e),n=function(t,e,o){var n=o.css,r=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(n=h(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,o,e),r=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=f(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){l(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=u(t,e);return p(o,e),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i];(a=n[s.id]).refs--,r.push(a)}t&&p(u(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete n[a.id]}}}};var m=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function w(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:t.scaleImg,mouseout:t.cancelScale}},[o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}},[o("img",{ref:"cropperImg",attrs:{src:t.imgs,alt:"cropper-img"}})])]),t._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping},on:{mousedown:t.startMove,touchstart:t.startMove}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{src:t.imgs,alt:"cropper-img"}})]),t._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:t.cropMove,touchstart:t.cropMove}}),t._v(" "),t.info?o("span",{staticClass:"crop-info",style:{top:t.cropInfo.top}},[t._v(t._s(this.cropInfo.width)+" × "+t._s(this.cropInfo.height))]):t._e(),t._v(" "),t.fixedBox?t._e():o("span",[o("span",{staticClass:"crop-line line-w",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,2)}}})])])])};n._withStripped=!0;var r={};r.getData=function(t){return new Promise(function(e,o){var n={};(function(t){var e=null;return new Promise(function(o,n){if(t.src)if(/^data\:/i.test(t.src))e=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),o=e.length,n=new ArrayBuffer(o),r=new Uint8Array(n),i=0;i<o;i++)r[i]=e.charCodeAt(i);return n}(t.src),o(e);else if(/^blob\:/i.test(t.src)){var r=new FileReader;r.onload=function(t){e=t.target.result,o(e)},function(t,e){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},o.send()}(t.src,function(t){r.readAsArrayBuffer(t)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=i.response,o(e),i=null},i.open("GET",t.src,!0),i.responseType="arraybuffer",i.send(null)}else n("img error")})})(t).then(function(t){n.arrayBuffer=t,n.orientation=function(t){var e,o,n,r,i,s,a,c,h,p=new DataView(t),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<u;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){s=c;break}c++}s&&(o=s+10,"Exif"===function(t,e,o){var n,r="";for(n=e,o+=e;n<o;n++)r+=String.fromCharCode(t.getUint8(n));return r}(p,s+4,4)&&(i=p.getUint16(o),((r=18761===i)||19789===i)&&42===p.getUint16(o+2,r)&&(n=p.getUint32(o+4,r))>=8&&(a=o+n)));if(a)for(u=p.getUint16(a,r),h=0;h<u;h++)if(c=a+12*h+2,274===p.getUint16(c,r)){c+=8,e=p.getUint16(c,r);break}return e}(t),e(n)}).catch(function(t){o(t)})})};var i=r,s={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:Number,default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"}},computed:{cropInfo:function(){var t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){var e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:function(){var t=navigator.userAgent,e=t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1;return e}},watch:{img:function(){this.checkedImg()},imgs:function(t){""!==t&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(t,e){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(t){t&&this.goAutoCrop()},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop()},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop()},mode:function(){this.checkedImg()},rotate:function(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{checkOrientationImage:function(t,e,o,n){var r=this,i=document.createElement("canvas"),s=i.getContext("2d");switch(s.save(),e){case 2:i.width=o,i.height=n,s.translate(o,0),s.scale(-1,1);break;case 3:i.width=o,i.height=n,s.translate(o/2,n/2),s.rotate(180*Math.PI/180),s.translate(-o/2,-n/2);break;case 4:i.width=o,i.height=n,s.translate(0,n),s.scale(1,-1);break;case 5:i.height=o,i.width=n,s.rotate(.5*Math.PI),s.scale(1,-1);break;case 6:i.width=n,i.height=o,s.translate(n/2,o/2),s.rotate(90*Math.PI/180),s.translate(-o/2,-n/2);break;case 7:i.height=o,i.width=n,s.rotate(.5*Math.PI),s.translate(o,-n),s.scale(-1,1);break;case 8:i.height=o,i.width=n,s.translate(n/2,o/2),s.rotate(-90*Math.PI/180),s.translate(-o/2,-n/2);break;default:i.width=o,i.height=n}s.drawImage(t,0,0,o,n),s.restore(),i.toBlob(function(t){var e=URL.createObjectURL(t);r.imgs=e},"image/"+this.outputType,1)},checkedImg:function(){var t=this;if(""!==this.img){this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var e=new Image;if(e.onload=function(){if(""===t.img)return t.$emit("imgLoad","error"),t.$emit("img-load","error"),!1;var o=e.width,n=e.height;i.getData(e).then(function(r){t.orientation=r.orientation||1;var i=t.maxImgSize;!t.orientation&&o<i&n<i?t.imgs=t.img:(o>i&&(n=n/o*i,o=i),n>i&&(o=o/n*i,n=i),t.checkOrientationImage(e,t.orientation,o,n))})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},"data"!==this.img.substr(0,4)&&(e.crossOrigin=""),this.isIE){var o=new XMLHttpRequest;o.onload=function(){var t=URL.createObjectURL(this.response);e.src=t},o.open("GET",this.img,!0),o.responseType="blob",o.send()}else e.src=this.img}},startMove:function(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=(t.clientX?t.clientX:t.touches[0].clientX)-this.x,this.moveY=(t.clientY?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=t.clientX?t.clientX:t.touches[0].clientX,this.cropY=t.clientY?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(t){var e=this;t.preventDefault();var o=this.scale,n=this.touches[0].clientX,r=this.touches[0].clientY,i=t.touches[0].clientX,s=t.touches[0].clientY,a=this.touches[1].clientX,c=this.touches[1].clientY,h=t.touches[1].clientX,p=t.touches[1].clientY,u=Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2)),d=Math.sqrt(Math.pow(i-h,2)+Math.pow(s-p,2))-u,l=1,f=(l=(l=l/this.trueWidth>l/this.trueHeight?l/this.trueHeight:l/this.trueWidth)>.1?.1:l)*d;if(!this.touchNow){if(this.touchNow=!0,d>0?o+=Math.abs(f):d<0&&o>Math.abs(f)&&(o-=Math.abs(f)),this.touches=t.touches,setTimeout(function(){e.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o}},cancelTouchScale:function(t){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(t){var e=this;if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o,n,r=t.clientX?t.clientX:t.touches[0].clientX,i=t.clientY?t.clientY:t.touches[0].clientY;o=r-this.moveX,n=i-this.moveY,this.$nextTick(function(){if(e.centerBox){var t,r,i,s,a=e.getImgAxis(o,n,e.scale),c=e.getCropAxis(),h=e.trueHeight*e.scale,p=e.trueWidth*e.scale;switch(e.rotate){case 1:case-1:case 3:case-3:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2+(h-p)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2+(p-h)/2,i=t-h+e.cropW,s=r-p+e.cropH;break;default:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2,i=t-p+e.cropW,s=r-h+e.cropH}a.x1>=c.x1&&(o=t),a.y1>=c.y1&&(n=r),a.x2<=c.x2&&(o=i),a.y2<=c.y2&&(n=s)}e.x=o,e.y=n,e.$emit("imgMoving",{moving:!0,axis:e.getImgAxis()}),e.$emit("img-moving",{moving:!0,axis:e.getImgAxis()})})},leaveImg:function(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,{passive:!1})},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(t){var e=this;t.preventDefault();var o=this.scale,n=t.deltaY||t.wheelDelta;n=navigator.userAgent.indexOf("Firefox")>0?30*n:n,this.isIE&&(n=-n);var r=this.coe,i=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*n;i<0?o+=Math.abs(i):o>Math.abs(i)&&(o-=Math.abs(i));var s=i<0?"add":"reduce";if(s!==this.coeStatus&&(this.coeStatus=s,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){e.scaling=!1,e.coe=e.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o},changeScale:function(t){var e=this.scale;t=t||1;var o=20;if((t*=o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop:function(t){var e=this;t.preventDefault();var o=t.clientX?t.clientX:t.touches?t.touches[0].clientX:0,n=t.clientY?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(function(){var t=o-e.cropX,r=n-e.cropY;if(t>0?(e.cropW=t+e.cropChangeX>e.w?e.w-e.cropChangeX:t,e.cropOffsertX=e.cropChangeX):(e.cropW=e.w-e.cropChangeX+Math.abs(t)>e.w?e.cropChangeX:Math.abs(t),e.cropOffsertX=e.cropChangeX+t>0?e.cropChangeX+t:0),e.fixed){var i=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];i+e.cropOffsertY>e.h?(e.cropH=e.h-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.cropOffsertX=t>0?e.cropChangeX:e.cropChangeX-e.cropW):e.cropH=i,e.cropOffsertY=e.cropOffsertY}else r>0?(e.cropH=r+e.cropChangeY>e.h?e.h-e.cropChangeY:r,e.cropOffsertY=e.cropChangeY):(e.cropH=e.h-e.cropChangeY+Math.abs(r)>e.h?e.cropChangeY:Math.abs(r),e.cropOffsertY=e.cropChangeY+r>0?e.cropChangeY+r:0)})},changeCropSize:function(t,e,o,n,r){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=o,this.changeCropTypeX=n,this.changeCropTypeY=r,this.cropX=t.clientX?t.clientX:t.touches[0].clientX,this.cropY=t.clientY?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0)},changeCropNow:function(t){var e=this;t.preventDefault();var o=t.clientX?t.clientX:t.touches?t.touches[0].clientX:0,n=t.clientY?t.clientY:t.touches?t.touches[0].clientY:0,r=this.w,i=this.h,s=0,a=0;if(this.centerBox){var c=this.getImgAxis(),h=c.x2,p=c.y2;s=c.x1>0?c.x1:0,a=c.y1>0?c.y1:0,r>h&&(r=h),i>p&&(i=p)}this.$nextTick(function(){var t=o-e.cropX,c=n-e.cropY;if(e.canChangeX&&(1===e.changeCropTypeX?e.cropOldW-t>0?(e.cropW=r-e.cropChangeX-t<=r-s?e.cropOldW-t:e.cropOldW+e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX-t<=r-s?e.cropChangeX+t:s):(e.cropW=Math.abs(t)+e.cropChangeX<=r?Math.abs(t)-e.cropOldW:r-e.cropOldW-e.cropChangeX,e.cropOffsertX=e.cropChangeX+e.cropOldW):2===e.changeCropTypeX&&(e.cropOldW+t>0?(e.cropW=e.cropOldW+t+e.cropOffsertX<=r?e.cropOldW+t:r-e.cropOffsertX,e.cropOffsertX=e.cropChangeX):(e.cropW=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?Math.abs(t+e.cropOldW):e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?e.cropChangeX-Math.abs(t+e.cropOldW):s))),e.canChangeY&&(1===e.changeCropTypeY?e.cropOldH-c>0?(e.cropH=i-e.cropChangeY-c<=i-a?e.cropOldH-c:e.cropOldH+e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY-c<=i-a?e.cropChangeY+c:a):(e.cropH=Math.abs(c)+e.cropChangeY<=i?Math.abs(c)-e.cropOldH:i-e.cropOldH-e.cropChangeY,e.cropOffsertY=e.cropChangeY+e.cropOldH):2===e.changeCropTypeY&&(e.cropOldH+c>0?(e.cropH=e.cropOldH+c+e.cropOffsertY<=i?e.cropOldH+c:i-e.cropOffsertY,e.cropOffsertY=e.cropChangeY):(e.cropH=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?Math.abs(c+e.cropOldH):e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?e.cropChangeY-Math.abs(c+e.cropOldH):a))),e.canChangeX&&e.fixed){var h=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];h+e.cropOffsertY>i?(e.cropH=i-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0]):e.cropH=h}if(e.canChangeY&&e.fixed){var p=e.cropH/e.fixedNumber[1]*e.fixedNumber[0];p+e.cropOffsertX>r?(e.cropW=r-e.cropOffsertX,e.cropH=e.cropW/e.fixedNumber[0]*e.fixedNumber[1]):e.cropW=p}})},changeCropEnd:function(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var e,o,n=t.clientX?t.clientX:t.touches[0].clientX,r=t.clientY?t.clientY:t.touches[0].clientY;e=n-this.cropOffsertX,o=r-this.cropOffsertY,this.cropX=e,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(t,e){var o=this,n=0,r=0;t&&(t.preventDefault(),n=t.clientX?t.clientX:t.touches[0].clientX,r=t.clientY?t.clientY:t.touches[0].clientY),this.$nextTick(function(){var t,i,s=n-o.cropX,a=r-o.cropY;if(e&&(s=o.cropOffsertX,a=o.cropOffsertY),t=s<=0?0:s+o.cropW>o.w?o.w-o.cropW:s,i=a<=0?0:a+o.cropH>o.h?o.h-o.cropH:a,o.centerBox){var c=o.getImgAxis();t<=c.x1&&(t=c.x1),t+o.cropW>c.x2&&(t=c.x2-o.cropW),i<=c.y1&&(i=c.y1),i+o.cropH>c.y2&&(i=c.y2-o.cropH)}o.cropOffsertX=t,o.cropOffsertY=i,o.$emit("cropMoving",{moving:!0,axis:o.getCropAxis()}),o.$emit("crop-moving",{moving:!0,axis:o.getCropAxis()})})},getImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*o,i=this.trueHeight*o;switch(this.rotate){case 0:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;break;case 1:case-1:case 3:case-3:n.x1=t+this.trueWidth*(1-o)/2+(r-i)/2,n.x2=n.x1+this.trueHeight*o,n.y1=e+this.trueHeight*(1-o)/2+(i-r)/2,n.y2=n.y1+this.trueWidth*o;break;default:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o}return n},getCropAxis:function(){var t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop:function(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(t){var e=this,o=document.createElement("canvas"),n=new Image,r=this.rotate,i=this.trueWidth,s=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;function h(t,e){o.width=Math.round(t),o.height=Math.round(e)}n.onload=function(){if(0!==e.cropW){var p=o.getContext("2d"),u=1;e.high&!e.full&&(u=window.devicePixelRatio),1!==e.enlarge&!e.full&&(u=Math.abs(Number(e.enlarge)),console.log(u));var d=e.cropW*u,l=e.cropH*u,f=i*e.scale*u,g=s*e.scale*u,v=(e.x-a+e.trueWidth*(1-e.scale)/2)*u,m=(e.y-c+e.trueHeight*(1-e.scale)/2)*u;switch(h(d,l),p.save(),r){case 0:e.full?(h(d/e.scale,l/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g);break;case 1:case-3:e.full?(h(d/e.scale,l/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g/e.scale,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g,f,g));break;case 2:case-2:e.full?(h(d/e.scale,l/e.scale),p.rotate(90*r*Math.PI/180),v/=e.scale,m/=e.scale,p.drawImage(n,-v-f/e.scale,-m-g/e.scale,f/e.scale,g/e.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(n,-v-f,-m-g,f,g));break;case 3:case-1:e.full?(h(d/e.scale,l/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f/e.scale,v,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f,v,f,g));break;default:e.full?(h(d/e.scale,l/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g)}p.restore()}else{var w=i*e.scale,x=s*e.scale,C=o.getContext("2d");switch(C.save(),r){case 0:h(w,x),C.drawImage(n,0,0,w,x);break;case 1:case-3:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,0,-x,w,x);break;case 2:case-2:h(w,x),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,-x,w,x);break;case 3:case-1:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,0,w,x);break;default:h(w,x),C.drawImage(n,0,0,w,x)}C.restore()}t(o)},"data"!==this.img.substr(0,4)&&(n.crossOrigin="Anonymous"),n.src=this.imgs},getCropData:function(t){var e=this;this.getCropChecked(function(o){t(o.toDataURL("image/"+e.outputType,e.outputSize))})},getCropBlob:function(t){var e=this;this.getCropChecked(function(o){o.toBlob(function(e){return t(e)},"image/"+e.outputType,e.outputSize)})},showPreview:function(){var t=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(function(){t.isCanShow=!0},16);var e=this.cropW,o=this.cropH,n=this.scale,r={};r.div={width:"".concat(e,"px"),height:"".concat(o,"px")};var i=(this.x-this.cropOffsertX)/n,s=(this.y-this.cropOffsertY)/n;r.w=e,r.h=o,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(e,"px; height: ").concat(o,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r),this.$emit("real-time",r)},reload:function(){var t=this,e=new Image;e.onload=function(){t.w=parseFloat(window.getComputedStyle(t.$refs.cropper).width),t.h=parseFloat(window.getComputedStyle(t.$refs.cropper).height),t.trueWidth=e.width,t.trueHeight=e.height,t.original?t.scale=1:t.scale=t.checkedMode(),t.$nextTick(function(){t.x=-(t.trueWidth-t.trueWidth*t.scale)/2+(t.w-t.trueWidth*t.scale)/2,t.y=-(t.trueHeight-t.trueHeight*t.scale)/2+(t.h-t.trueHeight*t.scale)/2,t.loading=!1,t.autoCrop&&t.goAutoCrop(),t.$emit("img-load","success"),t.$emit("imgLoad","success"),setTimeout(function(){t.showPreview()},20)})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},e.src=this.imgs},checkedMode:function(){var t=1,e=(this.trueWidth,this.trueHeight),o=this.mode.split(" ");switch(o[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":(e*=t=this.w/this.trueWidth)<this.h&&(t=(e=this.h)/this.trueHeight);break;default:try{var n=o[0];if(-1!==n.search("px")&&(n=n.replace("px",""),t=parseFloat(n)/this.trueWidth),-1!==n.search("%")&&(n=n.replace("%",""),t=parseFloat(n)/100*this.w/this.trueWidth),2===o.length&&"auto"===n){var r=o[1];-1!==r.search("px")&&(r=r.replace("px",""),t=(e=parseFloat(r))/this.trueHeight),-1!==r.search("%")&&(r=r.replace("%",""),t=(e=parseFloat(r)/100*this.h)/this.trueHeight)}}catch(e){t=1}}return t},goAutoCrop:function(t,e){this.clearCrop(),this.cropping=!0;var o=this.w,n=this.h;if(this.centerBox){var r=this.trueWidth*this.scale,i=this.trueHeight*this.scale;o=r<o?r:o,n=i<n?i:n}var s=t||parseFloat(this.autoCropWidth),a=e||parseFloat(this.autoCropHeight);0!==s&&0!==a||(s=.8*o,a=.8*n),s=s>o?o:s,a=a>n?n:a,this.fixed&&(a=s/this.fixedNumber[0]*this.fixedNumber[1]),a>this.h&&(s=(a=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(s,a)},changeCrop:function(t,e){var o=this;if(this.centerBox){var n=this.getImgAxis();t>n.x2-n.x1&&(e=(t=n.x2-n.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>n.y2-n.y1&&(t=(e=n.y2-n.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.cropOffsertX=(this.w-t)/2,this.cropOffsertY=(this.h-e)/2,this.centerBox&&this.$nextTick(function(){o.moveCrop(null,!0)})},refresh:function(){var t=this;this.img;this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){t.checkedImg()})},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n=!0;if(this.centerBox){var r=this.getImgAxis(t,e,o),i=this.getCropAxis();r.x1>=i.x1&&(n=!1),r.x2<=i.x2&&(n=!1),r.y1>=i.y1&&(n=!1),r.y2<=i.y2&&(n=!1)}return n}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var t=this,e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,o,n){for(var r=atob(this.toDataURL(o,n).split(",")[1]),i=r.length,s=new Uint8Array(i),a=0;a<i;a++)s[a]=r.charCodeAt(a);e(new Blob([s],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)}};o(1);var a=function(t,e,o,n,r,i,s,a){var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=o,h._compiled=!0),n&&(h.functional=!0),i&&(h._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var p=h.render;h.render=function(t,e){return c.call(e),p(t,e)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:h}}(s,n,[],!1,null,"6dae58fd",null);a.options.__file="src/vue-cropper.vue";var c=a.exports;o.d(e,"VueCropper",function(){return c});var h=function(t){t.component("VueCropper",c)};"undefined"!=typeof window&&window.Vue&&h(window.Vue);e.default={version:"0.4.8",install:h,VueCropper:c,vueCropper:c}}])});
//# sourceMappingURL=index.js.map
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/* @license
Papa Parse
v5.1.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,g=",",v="\r\n",s='"',a=s+s,r=!1,i=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s)}();var o=new RegExp(U(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(i||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=e.toString().replace(o,a),i="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(r,b.BAD_DELIMITERS)||-1<r.indexOf(g)||" "===r.charAt(0)||" "===r.charAt(r.length-1);return i?s+r+s:r}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(g.step)){var p=g.step;g.step=function(e){if(c=e,_())m();else{if(m(),0===c.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():p(c,t)}}}function v(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function m(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){q(g.transformHeader)&&(e=g.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!g.header&&!g.dynamicTyping&&!g.transform)return c;function e(e,t){var r,i=g.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];g.header&&(n=r>=l.length?"__parsed_extra":l[r]),g.transform&&(s=g.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return g.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);g.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return g.header&&0===l.length}function y(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){c.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)q(g.delimiter)&&(g.delimiter=g.delimiter(e),c.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(r&&v(p.data[m]))c++;else{var _=p.data[m].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(g.delimiter=s),bestDelimiter:s}}(e,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=b.DefaultDelimiter),c.meta.delimiter=g.delimiter}var s=w(g);return g.preview&&g.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),m(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(g.complete)&&g.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,M=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(M=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var z=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=z=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],z+=f.length,c!==l.length-1)z+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,z),m=a.indexOf(I,z),_=new RegExp(U(M)+U(O),"g"),g=a.indexOf(O,z);;)if(a[z]!==O)if(T&&0===f.length&&a.substr(z,s)===T){if(-1===m)return R();z=m+n,m=a.indexOf(I,z),p=a.indexOf(D,z)}else{if(-1!==p&&(p<m||-1===m)){if(!(p<g)){f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}var v=x(p,g,m);if(v&&void 0!==v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}}if(-1===m)break;if(f.push(a.substring(z,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=z,z++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:z}),w();if(g===i-1)return w(a.substring(z,g).replace(_,O));if(O!==M||a[g+1]!==M){if(O===M||0===g||a[g-1]!==M){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(z,g).replace(_,O)),a[z=g+1+y+e]!==O&&(g=a.indexOf(O,z)),p=a.indexOf(D,z),m=a.indexOf(I,z);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(z,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,z),g=a.indexOf(O,z),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:z}),g++}}else g++}return w();function b(e){h.push(e),d=z}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(z)),f.push(e),z=i,b(f),o&&S()),R()}function C(e){z=e,b(f),f=[],m=a.indexOf(I,z)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return z}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,b});
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e===t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var a=n[o];t.strings.push(a.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});
//# sourceMappingURL=typed.min.js.map

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

'use strict';

var _adapter_factory = require('./adapter_factory.js');

var adapter = (0, _adapter_factory.adapterFactory)({ window: window });
module.exports = adapter; // this is the difference from adapter_core.

},{"./adapter_factory.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = adapterFactory;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _chrome_shim = require('./chrome/chrome_shim');

var chromeShim = _interopRequireWildcard(_chrome_shim);

var _edge_shim = require('./edge/edge_shim');

var edgeShim = _interopRequireWildcard(_edge_shim);

var _firefox_shim = require('./firefox/firefox_shim');

var firefoxShim = _interopRequireWildcard(_firefox_shim);

var _safari_shim = require('./safari/safari_shim');

var safariShim = _interopRequireWildcard(_safari_shim);

var _common_shim = require('./common_shim');

var commonShim = _interopRequireWildcard(_common_shim);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Shimming starts here.
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimGetStats(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);
      firefoxShim.shimAddTransceiver(window);
      firefoxShim.shimGetParameters(window);
      firefoxShim.shimCreateOffer(window);
      firefoxShim.shimCreateAnswer(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimGetDisplayMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCreateOfferLegacy(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);
      safariShim.shimAudioContext(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// Browser shims.

},{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":7,"./firefox/firefox_shim":11,"./safari/safari_shim":14,"./utils":15}],3:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimGetStats = shimGetStats;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.fixNegotiationNeeded = fixNegotiationNeeded;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = { track: te.track };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = { track: track };
            }
            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        var sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);
        var idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });
        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _this5 = this;

    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.


    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    }

    // promise-support
    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this5, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        var _this6 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this6;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          utils.filterStats(result, sender.track, true)
        );
      });
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        var _this7 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this7;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return utils.filterStats(result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender = void 0;
      var receiver = void 0;
      var err = void 0;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this8._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    var sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this9.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this10 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          _this10._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (_this10._shimmedLocalStreams[streamId].length === 1) {
          delete _this10._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this11 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this11._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this12 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this12.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    var _this13 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    var streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(function () {
        _this13.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    var methodObj = _defineProperty({}, method, function () {
      var _this14 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this14, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }
      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this14, description);
      });
    });
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);
      if (description.type === '') {
        return description;
      }
      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this15 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }
    var isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    var stream = void 0;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });
      if (hasTrack) {
        stream = _this15._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  var addIceCandidateNullSupported = window.RTCPeerConnection.prototype.addIceCandidate.length === 0;

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!addIceCandidateNullSupported && !arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions. Native support planned for Chrome M77.
    if (browserDetails.version < 78 && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window) {
  var browserDetails = utils.detectBrowser(window);
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
    var pc = e.target;
    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}

},{"../utils.js":15,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };
      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }
      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

},{}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logging = utils.log;

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = utils.detectBrowser(window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches = void 0;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }
}

},{"../utils.js":15}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimSendThrowTypeError = shimSendThrowTypeError;
exports.shimConnectionState = shimConnectionState;
exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

var _sdp = require('sdp');

var _sdp2 = _interopRequireDefault(_sdp);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    if (!description || !description.sdp) {
      return false;
    }
    var sections = _sdp2.default.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = _sdp2.default.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    var version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null;
    // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      var _getConfiguration = this.getConfiguration(),
          sdpSemantics = _getConfiguration.sdpSemantics;

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get: function get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },

          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      var canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      var maxMessageSize = void 0;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;
    dc.send = function send() {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}

/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}

},{"./utils":15,"sdp":17}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimPeerConnection = shimPeerConnection;
exports.shimReplaceTrack = shimReplaceTrack;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

var _filtericeservers = require('./filtericeservers');

var _rtcpeerconnectionShim = require('rtcpeerconnection-shim');

var _rtcpeerconnectionShim2 = _interopRequireDefault(_rtcpeerconnectionShim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set: function set(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  var RTCPeerConnectionShim = (0, _rtcpeerconnectionShim2.default)(window, browserDetails.version);
  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
      utils.log('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

},{"../utils":15,"./filtericeservers":8,"./getdisplaymedia":9,"./getusermedia":10,"rtcpeerconnection-shim":16}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterIceServers = filterIceServers;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

},{"../utils":15}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

},{}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetUserMedia = shimGetUserMedia;
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
}

},{}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderGetStats = shimSenderGetStats;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimRTCDataChannel = shimRTCDataChannel;
exports.shimAddTransceiver = shimAddTransceiver;
exports.shimGetParameters = shimGetParameters;
exports.shimCreateOffer = shimCreateOffer;
exports.shimCreateAnswer = shimCreateAnswer;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  // support for addIceCandidate(null or undefined)
  // as well as ignoring {sdpMid, candidate: ""}
  if (browserDetails.version < 68) {
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      if (arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }
  utils.wrapPeerConnectionEvent(window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    var _this3 = this;

    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      var initParameters = arguments[1];
      var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;
      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(function (encodingParam) {
          if ('rid' in encodingParam) {
            var ridRegex = /^[a-z0-9]{0,16}$/i;
            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }
          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }
          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }
      var transceiver = origAddTransceiver.apply(this, arguments);
      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        var sender = transceiver.sender;

        var params = sender.getParameters();
        if (!('encodings' in params)) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).then(function () {
            delete sender.sendEncodings;
          }).catch(function () {
            delete sender.sendEncodings;
          }));
        }
      }
      return transceiver;
    };
  }
}

function shimGetParameters(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCRtpSender)) {
    return;
  }
  var origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      var params = origGetParameters.apply(this, arguments);
      if (!('sendEncodings' in this)) {
        return params;
      }
      return Object.assign({}, { encodings: this.sendEncodings }, params);
    };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    var _this4 = this,
        _arguments2 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateOffer.apply(_this4, _arguments2);
      }).finally(function () {
        _this4.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    var _this5 = this,
        _arguments3 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateAnswer.apply(_this5, _arguments3);
      }).finally(function () {
        _this5.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}

},{"../utils":15,"./getdisplaymedia":12,"./getusermedia":13}],12:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

},{}],13:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimGetUserMedia(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

},{"../utils":15}],14:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimConstraints = shimConstraints;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;
exports.shimAudioContext = shimAudioContext;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimLocalStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
      stream.getVideoTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
      var _this2 = this;

      for (var _len = arguments.length, streams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        streams[_key - 1] = arguments[_key];
      }

      if (streams) {
        streams.forEach(function (stream) {
          if (!_this2._localStreams) {
            _this2._localStreams = [stream];
          } else if (!_this2._localStreams.includes(stream)) {
            _this2._localStreams.push(stream);
          }
        });
      }
      return _addTrack.apply(this, arguments);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      var index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this3.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this4 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this4._remoteStreams) {
              _this4._remoteStreams = [];
            }
            if (_this4._remoteStreams.includes(stream)) {
              return;
            }
            _this4._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            _this4.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  var prototype = window.RTCPeerConnection.prototype;
  var origCreateOffer = prototype.createOffer;
  var origCreateAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;
    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];
      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'audio';
      });
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'video';
      });
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimAudioContext(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}

},{"../utils":15}],15:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractVersion = extractVersion;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.log = log;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.compactObject = compactObject;
exports.walkStats = walkStats;
exports.filterStats = filterStats;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  var navigator = window.navigator;

  // Returned result object.

  var result = { browser: null, version: null };

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObj = isObject(data[key]);
    var value = isObj ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, _defineProperty({}, key, value));
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

},{}],16:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};

},{"sdp":17}],17:[function(require,module,exports){
/* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
        ? '/' + headerExtension.direction
        : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES paramters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
        mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
        mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(parts) {
      return parts.attribute === 'cname';
    });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(function(line) {
      var parts = line.substr(17).split(' ');
      return parts.map(function(part) {
        return parseInt(part, 10);
      });
    });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(obj) {
      return obj.attribute === 'cname';
    })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(msidParts) {
      return msidParts.attribute === 'msid';
    });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }
  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  var output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n'
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
    transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
    transceiver.dtlsTransport.getLocalParameters(),
    type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}]},{},[1])(1)
});

