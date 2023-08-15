!function(){var e={1991:function(e,t){var n;!function(){"use strict";var r=function(){function e(){}function t(e,t){for(var n=t.length,r=0;r<n;++r)a(e,t[r])}e.prototype=Object.create(null);var n={}.hasOwnProperty,r=/\s+/;function a(e,a){if(a){var o=typeof a;"string"===o?function(e,t){for(var n=t.split(r),a=n.length,o=0;o<a;++o)e[n[o]]=!0}(e,a):Array.isArray(a)?t(e,a):"object"===o?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var r in t)n.call(t,r)&&(e[r]=!!t[r]);else e[t.toString()]=!0}(e,a):"number"===o&&function(e,t){e[t]=!0}(e,a)}}return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=new e;t(o,r);var l=[];for(var c in o)o[c]&&l.push(c);return l.join(" ")}}();e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n,r=window.wp.hooks,a=window.wp.components;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var l=n(1991),c=n.n(l);function i(t){const{label:n,help:r,className:a,children:l,...i}=t;return(0,e.createElement)("div",o({},i,{className:c()("lazyblocks-component-base-control",a)}),n?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__label"},n):null,l,r?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__help"},r):null)}const{controls:s={}}=window.lazyblocksConstructorData||window.lazyblocksGutenberg;(0,r.addFilter)("lzb.editor.control.email.render","lzb.editor",((t,n)=>{const r=n.data.characters_limit?parseInt(n.data.characters_limit,10):"";return(0,e.createElement)(i,function(e,{className:t,...n}={}){const r=(a=e.data.type)&&s[a]?s[a]:!!s.undefined&&s.undefined;var a;return{label:!!r.restrictions.label_settings&&e.data.label,help:!!r.restrictions.help_settings&&e.data.help,className:c()(`lazyblocks-control lazyblocks-control-${e.data.type}`,t),"data-lazyblocks-control-name":e.data.name,...n}}(n,{label:!1}),(0,e.createElement)(a.TextControl,{type:"email",label:n.data.label,maxLength:r,placeholder:n.data.placeholder,value:n.getValue(),onChange:n.onChange}))})),(0,r.addFilter)("lzb.constructor.control.email.settings","lzb.constructor",((n,r)=>{const{updateData:o,data:l}=r;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.PanelBody,null,(0,e.createElement)(a.TextControl,{label:(0,t.__)("Placeholder","lazy-blocks"),value:l.placeholder,onChange:e=>o({placeholder:e})})),(0,e.createElement)(a.PanelBody,null,(0,e.createElement)(a.TextControl,{label:(0,t.__)("Characters Limit","lazy-blocks"),help:(0,t.__)("Maximum number of characters allowed. Leave blank to no limit.","lazy-blocks"),value:l.characters_limit?parseInt(l.characters_limit,10):"",type:"number",min:0,max:524288,onChange:e=>o({characters_limit:`${e}`})})))}))}()}();