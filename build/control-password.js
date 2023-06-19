(()=>{var e={1991:(e,t)=>{var a;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var a=t.length,n=0;n<a;++n)r(e,t[n])}e.prototype=Object.create(null);var a={}.hasOwnProperty,n=/\s+/;function r(e,r){if(r){var o=typeof r;"string"===o?function(e,t){for(var a=t.split(n),r=a.length,o=0;o<r;++o)e[a[o]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===o?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var n in t)a.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,r):"number"===o&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];var o=new e;t(o,n);var l=[];for(var c in o)o[c]&&l.push(c);return l.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,n=window.wp.hooks,r=window.wp.components;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var l=a(1991),c=a.n(l);function s(t){const{label:a,help:n,className:r,children:l,...s}=t;return(0,e.createElement)("div",o({},s,{className:c()("lazyblocks-component-base-control",r)}),a?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__label"},a):null,l,n?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__help"},n):null)}const{controls:i={}}=window.lazyblocksConstructorData||window.lazyblocksGutenberg;(0,n.addFilter)("lzb.editor.control.password.render","lzb.editor",((t,a)=>{const n=a.data.characters_limit?parseInt(a.data.characters_limit,10):"";return(0,e.createElement)(s,function(e,{className:t,...a}={}){const n=(r=e.data.type)&&i[r]?i[r]:!!i.undefined&&i.undefined;var r;return{label:!!n.restrictions.label_settings&&e.data.label,help:!!n.restrictions.help_settings&&e.data.help,className:c()(`lazyblocks-control lazyblocks-control-${e.data.type}`,t),"data-lazyblocks-control-name":e.data.name,...a}}(a,{label:!1}),(0,e.createElement)(r.TextControl,{type:"password",label:a.data.label,maxLength:n,placeholder:a.data.placeholder,value:a.getValue(),onChange:a.onChange}))})),(0,n.addFilter)("lzb.constructor.control.password.settings","lzb.constructor",((a,n)=>{const{updateData:o,data:l}=n;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.PanelBody,null,(0,e.createElement)(r.TextControl,{label:(0,t.__)("Placeholder","lazy-blocks"),value:l.placeholder,onChange:e=>o({placeholder:e})})),(0,e.createElement)(r.PanelBody,null,(0,e.createElement)(r.TextControl,{label:(0,t.__)("Characters Limit","lazy-blocks"),help:(0,t.__)("Maximum number of characters allowed. Leave blank to no limit.","lazy-blocks"),value:l.characters_limit?parseInt(l.characters_limit,10):"",type:"number",min:0,max:524288,onChange:e=>o({characters_limit:`${e}`})})))}))})()})();