(()=>{var e={8655:(e,t)=>{var r;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty,n=/\s+/;function o(e,o){if(o){var l=typeof o;"string"===l?function(e,t){for(var r=t.split(n),o=r.length,l=0;l<o;++l)e[r[l]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===l?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var n in t)r.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,o):"number"===l&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var l=new e;t(l,n);var i=[];for(var a in l)l[a]&&i.push(a);return i.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.i18n,t=window.wp.hooks,n=window.wp.components,o=window.wp.data,l=window.wp.blockEditor;var i=r(8655),a=r.n(i),c=["label","help","className","children"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}function s(e){var t=e.label,r=e.help,n=e.className,o=e.children,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return wp.element.createElement("div",u({},l,{className:a()("lazyblocks-component-base-control",n)}),t?wp.element.createElement("div",{className:"lazyblocks-component-base-control__label"},t):null,o,r?wp.element.createElement("div",{className:"lazyblocks-component-base-control__help"},r):null)}var p=(window.lazyblocksConstructorData||window.lazyblocksGutenberg).controls,d=void 0===p?{}:p;function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}var f=["className"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return(t=function(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=["image"];const v=(0,n.withNotices)((function(t){var r=t.label,i=t.value,c=t.previewSize,u=t.noticeOperations,p=t.noticeUI,m=t.controlProps,v=t.onChange,w=void 0===v?function(){}:v,h=(0,o.useSelect)((function(e){var t=e("core").getMedia,r={};return i&&Object.keys(i).length&&i.forEach((function(e){if(!r[e.id]){var n=t(e.id)||!1;n&&(r[e.id]={alt:n.alt_text,url:n.source_url},n.media_details&&n.media_details.sizes&&n.media_details.sizes[c]&&(r[e.id].url=n.media_details.sizes[c].source_url))}})),{mediaUpload:e("core/block-editor").getSettings().mediaUpload,imagesPreviewData:r}})),O=h.mediaUpload,S=h.imagesPreviewData;return wp.element.createElement(s,function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.className,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,f),l=(t=e.data.type)&&d[t]?d[t]:!!d.undefined&&d.undefined,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({label:!!l.restrictions.label_settings&&e.data.label,help:!!l.restrictions.help_settings&&e.data.help,className:a()("lazyblocks-control lazyblocks-control-".concat(e.data.type),n),"data-lazyblocks-control-name":e.data.name},o);return i}(m),i&&Object.keys(i).length?null:wp.element.createElement(l.MediaPlaceholder,{icon:"format-gallery",labels:{title:r,name:(0,e.__)("images","lazy-blocks")},onSelect:function(e){w(e)},notices:p,accept:"image/*",allowedTypes:g,disableMaxUploadErrorMessages:!0,multiple:!0,onError:function(e){return function(e){u.removeAllNotices(),u.createErrorNotice(e)}(e)}}),i&&Object.keys(i).length?wp.element.createElement(l.MediaUpload,{onSelect:function(e){w(e)},allowedTypes:g,multiple:!0,gallery:!0,value:i.map((function(e){return e.id})),render:function(t){var r=t.open;return wp.element.createElement("div",{className:"lzb-gutenberg-gallery",onClick:r,role:"presentation"},wp.element.createElement(n.DropZone,{onFilesDrop:function(e){var t=i||[];O({allowedTypes:g,filesList:e,onFileChange:function(e){w(t.concat(e))},onError:function(e){u.createErrorNotice(e)}})}}),wp.element.createElement("div",{className:"lzb-gutenberg-gallery-button"},wp.element.createElement(n.Button,{variant:"secondary",size:"small"},(0,e.__)("Edit Gallery","lazy-blocks"))),i.map((function(e){return wp.element.createElement("div",{className:"lzb-gutenberg-gallery-item",key:e.id||e.url},S[e.id]&&S[e.id].url?wp.element.createElement("img",{src:S[e.id].url,alt:S[e.id].alt}):"")})))}}):null)}));function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function h(t){var r=t.updateData,l=t.data,i=(0,o.useSelect)((function(t){var r=(0,t("core/block-editor").getSettings)();return{imageSizes:r.imageSizes||[{name:(0,e.__)("Medium","lazy-blocks"),slug:"medium"}],imageDimensions:r.imageDimensions||{medium:{width:300,height:300}}}})),a=i.imageSizes,c=i.imageDimensions;return wp.element.createElement(n.PanelBody,null,wp.element.createElement(n.SelectControl,{label:(0,e.__)("Preview Size","lazy-blocks"),options:a.map((function(e){var t=e.name;return c[e.slug]&&(t+=" (".concat(c[e.slug].width," × ").concat(c[e.slug].height,")")),{label:t,value:e.slug}})),value:l.preview_size||"medium",onChange:function(e){return r({preview_size:e})}}))}(0,t.addFilter)("lzb.editor.control.gallery.render","lzb.editor",(function(e,t){return wp.element.createElement(v,{label:t.data.label,help:t.data.help,previewSize:t.data.preview_size,value:t.getValue(),controlProps:t,onChange:function(e){var r=e.map((function(e){return{alt:e.alt||"",title:e.title||"",caption:e.caption||"",description:e.description||"",id:e.id||"",link:e.link||"",url:e.url||"",sizes:e.sizes||""}}));t.onChange(r)}})})),(0,t.addFilter)("lzb.editor.control.gallery.getValue","lzb.editor",(function(e){if("string"==typeof e)try{e=e.includes(":")?JSON.parse(decodeURI(e)):JSON.parse(decodeURIComponent(e))}catch(t){e=[]}return e})),(0,t.addFilter)("lzb.editor.control.gallery.updateValue","lzb.editor",(function(e){return("object"===w(e)||Array.isArray(e))&&(e=encodeURI(JSON.stringify(e))),e})),(0,t.addFilter)("lzb.constructor.control.gallery.settings","lzb.constructor",(function(e,t){return wp.element.createElement(h,t)}))})()})();