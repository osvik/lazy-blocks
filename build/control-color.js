!function(){var e={1991:function(e,t){var l;!function(){"use strict";var o=function(){function e(){}function t(e,t){for(var l=t.length,o=0;o<l;++o)n(e,t[o])}e.prototype=Object.create(null);var l={}.hasOwnProperty,o=/\s+/;function n(e,n){if(n){var a=typeof n;"string"===a?function(e,t){for(var l=t.split(o),n=l.length,a=0;a<n;++a)e[l[a]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===a?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var o in t)l.call(t,o)&&(e[o]=!!t[o]);else e[t.toString()]=!0}(e,n):"number"===a&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var l=arguments.length,o=Array(l),n=0;n<l;n++)o[n]=arguments[n];var a=new e;t(a,o);var r=[];for(var c in a)a[c]&&r.push(c);return r.join(" ")}}();e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,l),a.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n,o=window.wp.hooks,n=window.wp.components;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},a.apply(this,arguments)}var r=l(1991),c=l.n(r);function s(t){const{label:l,help:o,className:n,children:r,...s}=t;return(0,e.createElement)("div",a({},s,{className:c()("lazyblocks-component-base-control",n)}),l?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__label"},l):null,r,o?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__help"},o):null)}const{controls:i={}}=window.lazyblocksConstructorData||window.lazyblocksGutenberg;var u=window.wp.blockEditor,p=window.wp.data;function d(t){const{value:l,alpha:o=!1,palette:a=!0,onChange:r=(()=>{})}=t,c=function(){if(u.__experimentalUseMultipleOriginColorsAndGradients&&(0,u.__experimentalUseMultipleOriginColorsAndGradients)())return(0,u.__experimentalUseMultipleOriginColorsAndGradients)().colors;const{themeColors:e}=(0,p.useSelect)((e=>({themeColors:e("core/block-editor").getSettings().colors}))),t=[];return e&&e.length&&t.push({name:"Theme",colors:e}),t}();return(0,e.createElement)(n.ColorPalette,{colors:a?c:void 0,value:l,enableAlpha:o,onChange:e=>{r(e)},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})}var b=function(t){const{value:l,label:o="",alpha:a=!1,palette:r=!0,onChange:s=(()=>{})}=t;return(0,e.createElement)(n.Dropdown,{className:"lazyblocks-control-color-picker__dropdown",contentClassName:"lazyblocks-control-color-picker__dropdown-content",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:t,onToggle:a})=>(0,e.createElement)(n.Button,{className:c()("lazyblocks-control-color-toggle",t?"lazyblocks-control-color-toggle-active":""),onClick:a},(0,e.createElement)("span",{className:"lazyblocks-control-color-toggle-indicator",style:{background:l||""}}),(0,e.createElement)("span",{className:"lazyblocks-control-color-toggle-label"},o)),renderContent:()=>(0,e.createElement)("div",{className:"lazyblocks-control-color-picker"},(0,e.createElement)(d,{value:l,alpha:a,palette:r,onChange:e=>{s(e)}}))})};(0,o.addFilter)("lzb.editor.control.color.render","lzb.editor",((t,l)=>(0,e.createElement)(s,function(e,{className:t,...l}={}){const o=(n=e.data.type)&&i[n]?i[n]:!!i.undefined&&i.undefined;var n;return{label:!!o.restrictions.label_settings&&e.data.label,help:!!o.restrictions.help_settings&&e.data.help,className:c()(`lazyblocks-control lazyblocks-control-${e.data.type}`,t),"data-lazyblocks-control-name":e.data.name,...l}}(l),(0,e.createElement)(b,{label:l.data.alongside_text,alpha:"true"===l.data.alpha,palette:"true"===l.data.palette,value:l.getValue(),onChange:l.onChange})))),(0,o.addFilter)("lzb.constructor.control.color.settings","lzb.constructor",((l,o)=>{const{updateData:a,data:r}=o;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.PanelBody,null,(0,e.createElement)(n.TextControl,{label:(0,t.__)("Alongside Text","lazy-blocks"),help:(0,t.__)("Displays text alongside the color indicator","lazy-blocks"),value:r.alongside_text,onChange:e=>a({alongside_text:e})})),(0,e.createElement)(n.PanelBody,null,(0,e.createElement)(s,{id:"lazyblocks-control-color-alpha",label:(0,t.__)("Alpha Channel","lazy-blocks"),help:(0,t.__)("Allow set semi-transparent colors","lazy-blocks")},(0,e.createElement)(n.ToggleControl,{id:"lazyblocks-control-color-alpha",label:(0,t.__)("Yes","lazy-blocks"),checked:"true"===r.alpha,onChange:e=>a({alpha:e?"true":"false"})})),(0,e.createElement)(s,{id:"lazyblocks-control-color-palette",label:(0,t.__)("Color Palette","lazy-blocks"),help:(0,t.__)("Display color palette with predefined colors","lazy-blocks")},(0,e.createElement)(n.ToggleControl,{id:"lazyblocks-control-color-palette",label:(0,t.__)("Yes","lazy-blocks"),checked:"true"===r.palette,onChange:e=>a({palette:e?"true":"false"})}))),(0,e.createElement)(n.PanelBody,null,(0,e.createElement)(s,{id:"lazyblocks-control-color-output-format",label:(0,t.__)("Output Format","lazy-blocks"),help:(0,t.__)("Allows you to change attribute output format","lazy-blocks")},(0,e.createElement)(n.RadioControl,{options:[{label:(0,t.__)("Color","lazy-blocks"),value:""},{label:(0,t.__)("Array (Color + Slug)","lazy-blocks"),value:"array"}],selected:r.output_format||"",onChange:e=>a({output_format:e})}))))}))}()}();