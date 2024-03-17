/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2024 McAfee, LLC
 *
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *
 */(()=>{var t={7856:function(t){
/*! @license DOMPurify 2.4.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.3/LICENSE */
t.exports=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t,r,i){return o=n()?Reflect.construct:function(t,n,o){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return o&&e(i,o.prototype),i},o.apply(null,arguments)}function r(t){return i(t)||a(t)||s(t)||c()}function i(t){if(Array.isArray(t))return l(t)}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,d=Object.setPrototypeOf,m=Object.isFrozen,h=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,f=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!=typeof Reflect&&Reflect,w=b.apply,T=b.construct;w||(w=function(t,e,n){return t.apply(e,n)}),f||(f=function(t){return t}),g||(g=function(t){return t}),T||(T=function(t,e){return o(t,r(e))});var E=_(Array.prototype.forEach),N=_(Array.prototype.pop),S=_(Array.prototype.push),v=_(String.prototype.toLowerCase),A=_(String.prototype.toString),R=_(String.prototype.match),x=_(String.prototype.replace),C=_(String.prototype.indexOf),k=_(String.prototype.trim),L=_(RegExp.prototype.test),D=O(TypeError);function _(t){return function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return w(t,e,o)}}function O(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return T(t,n)}}function M(t,e,n){n=n||v,d&&d(t,null);for(var o=e.length;o--;){var r=e[o];if("string"==typeof r){var i=n(r);i!==r&&(m(e)||(e[o]=i),r=i)}t[r]=!0}return t}function I(t){var e,n=y(null);for(e in t)!0===w(u,t,[e])&&(n[e]=t[e]);return n}function F(t,e){for(;null!==t;){var n=p(t,e);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}t=h(t)}function o(t){return console.warn("fallback value for",t),null}return o}var H=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),U=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),B=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),q=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),G=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),P=f(["#text"]),j=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),$=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Y=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),J=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/\${[\w\W]*}/gm),X=g(/^data-[\-\w.\u00B7-\uFFFF]/),Z=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),tt=g(/^(?:\w+script|data):/i),et=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),nt=g(/^html$/i),ot=function(){return"undefined"==typeof window?null:window},rt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var o=null,r="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(r)&&(o=n.currentScript.getAttribute(r));var i="dompurify"+(o?"#"+o:"");try{return e.createPolicy(i,{createHTML:function(t){return t},createScriptURL:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot(),n=function(t){return it(t)};if(n.version="2.4.3",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var o=e.document,i=e.document,a=e.DocumentFragment,s=e.HTMLTemplateElement,l=e.Node,c=e.Element,u=e.NodeFilter,d=e.NamedNodeMap,m=void 0===d?e.NamedNodeMap||e.MozNamedAttrMap:d,h=e.HTMLFormElement,p=e.DOMParser,g=e.trustedTypes,y=c.prototype,b=F(y,"cloneNode"),w=F(y,"nextSibling"),T=F(y,"childNodes"),_=F(y,"parentNode");if("function"==typeof s){var O=i.createElement("template");O.content&&O.content.ownerDocument&&(i=O.content.ownerDocument)}var at=rt(g,o),st=at?at.createHTML(""):"",lt=i,ct=lt.implementation,ut=lt.createNodeIterator,dt=lt.createDocumentFragment,mt=lt.getElementsByTagName,ht=o.importNode,pt={};try{pt=I(i).documentMode?i.documentMode:{}}catch(t){}var ft={};n.isSupported="function"==typeof _&&ct&&void 0!==ct.createHTMLDocument&&9!==pt;var gt,yt,bt=Y,wt=J,Tt=V,Et=X,Nt=Z,St=tt,vt=et,At=Q,Rt=null,xt=M({},[].concat(r(H),r(U),r(B),r(z),r(P))),Ct=null,kt=M({},[].concat(r(j),r($),r(W),r(K))),Lt=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Dt=null,_t=null,Ot=!0,Mt=!0,It=!1,Ft=!1,Ht=!1,Ut=!1,Bt=!1,qt=!1,zt=!1,Gt=!1,Pt=!0,jt=!1,$t="user-content-",Wt=!0,Kt=!1,Yt={},Jt=null,Vt=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xt=null,Zt=M({},["audio","video","img","source","image","track"]),Qt=null,te=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",ne="http://www.w3.org/2000/svg",oe="http://www.w3.org/1999/xhtml",re=oe,ie=!1,ae=null,se=M({},[ee,ne,oe],A),le=["application/xhtml+xml","text/html"],ce="text/html",ue=null,de=i.createElement("form"),me=function(t){return t instanceof RegExp||t instanceof Function},he=function(e){ue&&ue===e||(e&&"object"===t(e)||(e={}),e=I(e),gt=gt=-1===le.indexOf(e.PARSER_MEDIA_TYPE)?ce:e.PARSER_MEDIA_TYPE,yt="application/xhtml+xml"===gt?A:v,Rt="ALLOWED_TAGS"in e?M({},e.ALLOWED_TAGS,yt):xt,Ct="ALLOWED_ATTR"in e?M({},e.ALLOWED_ATTR,yt):kt,ae="ALLOWED_NAMESPACES"in e?M({},e.ALLOWED_NAMESPACES,A):se,Qt="ADD_URI_SAFE_ATTR"in e?M(I(te),e.ADD_URI_SAFE_ATTR,yt):te,Xt="ADD_DATA_URI_TAGS"in e?M(I(Zt),e.ADD_DATA_URI_TAGS,yt):Zt,Jt="FORBID_CONTENTS"in e?M({},e.FORBID_CONTENTS,yt):Vt,Dt="FORBID_TAGS"in e?M({},e.FORBID_TAGS,yt):{},_t="FORBID_ATTR"in e?M({},e.FORBID_ATTR,yt):{},Yt="USE_PROFILES"in e&&e.USE_PROFILES,Ot=!1!==e.ALLOW_ARIA_ATTR,Mt=!1!==e.ALLOW_DATA_ATTR,It=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ft=e.SAFE_FOR_TEMPLATES||!1,Ht=e.WHOLE_DOCUMENT||!1,qt=e.RETURN_DOM||!1,zt=e.RETURN_DOM_FRAGMENT||!1,Gt=e.RETURN_TRUSTED_TYPE||!1,Bt=e.FORCE_BODY||!1,Pt=!1!==e.SANITIZE_DOM,jt=e.SANITIZE_NAMED_PROPS||!1,Wt=!1!==e.KEEP_CONTENT,Kt=e.IN_PLACE||!1,At=e.ALLOWED_URI_REGEXP||At,re=e.NAMESPACE||oe,e.CUSTOM_ELEMENT_HANDLING&&me(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Lt.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&me(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Lt.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Lt.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ft&&(Mt=!1),zt&&(qt=!0),Yt&&(Rt=M({},r(P)),Ct=[],!0===Yt.html&&(M(Rt,H),M(Ct,j)),!0===Yt.svg&&(M(Rt,U),M(Ct,$),M(Ct,K)),!0===Yt.svgFilters&&(M(Rt,B),M(Ct,$),M(Ct,K)),!0===Yt.mathMl&&(M(Rt,z),M(Ct,W),M(Ct,K))),e.ADD_TAGS&&(Rt===xt&&(Rt=I(Rt)),M(Rt,e.ADD_TAGS,yt)),e.ADD_ATTR&&(Ct===kt&&(Ct=I(Ct)),M(Ct,e.ADD_ATTR,yt)),e.ADD_URI_SAFE_ATTR&&M(Qt,e.ADD_URI_SAFE_ATTR,yt),e.FORBID_CONTENTS&&(Jt===Vt&&(Jt=I(Jt)),M(Jt,e.FORBID_CONTENTS,yt)),Wt&&(Rt["#text"]=!0),Ht&&M(Rt,["html","head","body"]),Rt.table&&(M(Rt,["tbody"]),delete Dt.tbody),f&&f(e),ue=e)},pe=M({},["mi","mo","mn","ms","mtext"]),fe=M({},["foreignobject","desc","title","annotation-xml"]),ge=M({},["title","style","font","a","script"]),ye=M({},U);M(ye,B),M(ye,q);var be=M({},z);M(be,G);var we=function(t){var e=_(t);e&&e.tagName||(e={namespaceURI:re,tagName:"template"});var n=v(t.tagName),o=v(e.tagName);return!!ae[t.namespaceURI]&&(t.namespaceURI===ne?e.namespaceURI===oe?"svg"===n:e.namespaceURI===ee?"svg"===n&&("annotation-xml"===o||pe[o]):Boolean(ye[n]):t.namespaceURI===ee?e.namespaceURI===oe?"math"===n:e.namespaceURI===ne?"math"===n&&fe[o]:Boolean(be[n]):t.namespaceURI===oe?!(e.namespaceURI===ne&&!fe[o])&&!(e.namespaceURI===ee&&!pe[o])&&!be[n]&&(ge[n]||!ye[n]):!("application/xhtml+xml"!==gt||!ae[t.namespaceURI]))},Te=function(t){S(n.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=st}catch(e){t.remove()}}},Ee=function(t,e){try{S(n.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){S(n.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!Ct[t])if(qt||zt)try{Te(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},Ne=function(t){var e,n;if(Bt)t="<remove></remove>"+t;else{var o=R(t,/^[\r\n\t ]+/);n=o&&o[0]}"application/xhtml+xml"===gt&&re===oe&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var r=at?at.createHTML(t):t;if(re===oe)try{e=(new p).parseFromString(r,gt)}catch(t){}if(!e||!e.documentElement){e=ct.createDocument(re,"template",null);try{e.documentElement.innerHTML=ie?st:r}catch(t){}}var a=e.body||e.documentElement;return t&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),re===oe?mt.call(e,Ht?"html":"body")[0]:Ht?e.documentElement:a},Se=function(t){return ut.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof h&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof m)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore||"function"!=typeof t.hasChildNodes)},Ae=function(e){return"object"===t(l)?e instanceof l:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Re=function(t,e,o){ft[t]&&E(ft[t],(function(t){t.call(n,e,o,ue)}))},xe=function(t){var e;if(Re("beforeSanitizeElements",t,null),ve(t))return Te(t),!0;if(L(/[\u0080-\uFFFF]/,t.nodeName))return Te(t),!0;var o=yt(t.nodeName);if(Re("uponSanitizeElement",t,{tagName:o,allowedTags:Rt}),t.hasChildNodes()&&!Ae(t.firstElementChild)&&(!Ae(t.content)||!Ae(t.content.firstElementChild))&&L(/<[/\w]/g,t.innerHTML)&&L(/<[/\w]/g,t.textContent))return Te(t),!0;if("select"===o&&L(/<template/i,t.innerHTML))return Te(t),!0;if(!Rt[o]||Dt[o]){if(!Dt[o]&&ke(o)){if(Lt.tagNameCheck instanceof RegExp&&L(Lt.tagNameCheck,o))return!1;if(Lt.tagNameCheck instanceof Function&&Lt.tagNameCheck(o))return!1}if(Wt&&!Jt[o]){var r=_(t)||t.parentNode,i=T(t)||t.childNodes;if(i&&r)for(var a=i.length-1;a>=0;--a)r.insertBefore(b(i[a],!0),w(t))}return Te(t),!0}return t instanceof c&&!we(t)?(Te(t),!0):"noscript"!==o&&"noembed"!==o||!L(/<\/no(script|embed)/i,t.innerHTML)?(Ft&&3===t.nodeType&&(e=t.textContent,e=x(e,bt," "),e=x(e,wt," "),e=x(e,Tt," "),t.textContent!==e&&(S(n.removed,{element:t.cloneNode()}),t.textContent=e)),Re("afterSanitizeElements",t,null),!1):(Te(t),!0)},Ce=function(t,e,n){if(Pt&&("id"===e||"name"===e)&&(n in i||n in de))return!1;if(Mt&&!_t[e]&&L(Et,e));else if(Ot&&L(Nt,e));else if(!Ct[e]||_t[e]){if(!(ke(t)&&(Lt.tagNameCheck instanceof RegExp&&L(Lt.tagNameCheck,t)||Lt.tagNameCheck instanceof Function&&Lt.tagNameCheck(t))&&(Lt.attributeNameCheck instanceof RegExp&&L(Lt.attributeNameCheck,e)||Lt.attributeNameCheck instanceof Function&&Lt.attributeNameCheck(e))||"is"===e&&Lt.allowCustomizedBuiltInElements&&(Lt.tagNameCheck instanceof RegExp&&L(Lt.tagNameCheck,n)||Lt.tagNameCheck instanceof Function&&Lt.tagNameCheck(n))))return!1}else if(Qt[e]);else if(L(At,x(n,vt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==C(n,"data:")||!Xt[t])if(It&&!L(St,x(n,vt,"")));else if(n)return!1;return!0},ke=function(t){return t.indexOf("-")>0},Le=function(e){var o,r,i,a;Re("beforeSanitizeAttributes",e,null);var s=e.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ct};for(a=s.length;a--;){var c=o=s[a],u=c.name,d=c.namespaceURI;if(r="value"===u?o.value:k(o.value),i=yt(u),l.attrName=i,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,Re("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Ee(u,e),l.keepAttr))if(L(/\/>/i,r))Ee(u,e);else{Ft&&(r=x(r,bt," "),r=x(r,wt," "),r=x(r,Tt," "));var m=yt(e.nodeName);if(Ce(m,i,r)){if(!jt||"id"!==i&&"name"!==i||(Ee(u,e),r=$t+r),at&&"object"===t(g)&&"function"==typeof g.getAttributeType)if(d);else switch(g.getAttributeType(m,i)){case"TrustedHTML":r=at.createHTML(r);break;case"TrustedScriptURL":r=at.createScriptURL(r)}try{d?e.setAttributeNS(d,u,r):e.setAttribute(u,r),N(n.removed)}catch(t){}}}}Re("afterSanitizeAttributes",e,null)}},De=function t(e){var n,o=Se(e);for(Re("beforeSanitizeShadowDOM",e,null);n=o.nextNode();)Re("uponSanitizeShadowNode",n,null),xe(n)||(n.content instanceof a&&t(n.content),Le(n));Re("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(r){var i,s,c,u,d,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ie=!r)&&(r="\x3c!--\x3e"),"string"!=typeof r&&!Ae(r)){if("function"!=typeof r.toString)throw D("toString is not a function");if("string"!=typeof(r=r.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof r)return e.toStaticHTML(r);if(Ae(r))return e.toStaticHTML(r.outerHTML)}return r}if(Ut||he(m),n.removed=[],"string"==typeof r&&(Kt=!1),Kt){if(r.nodeName){var h=yt(r.nodeName);if(!Rt[h]||Dt[h])throw D("root node is forbidden and cannot be sanitized in-place")}}else if(r instanceof l)1===(s=(i=Ne("\x3c!----\x3e")).ownerDocument.importNode(r,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else{if(!qt&&!Ft&&!Ht&&-1===r.indexOf("<"))return at&&Gt?at.createHTML(r):r;if(!(i=Ne(r)))return qt?null:Gt?st:""}i&&Bt&&Te(i.firstChild);for(var p=Se(Kt?r:i);c=p.nextNode();)3===c.nodeType&&c===u||xe(c)||(c.content instanceof a&&De(c.content),Le(c),u=c);if(u=null,Kt)return r;if(qt){if(zt)for(d=dt.call(i.ownerDocument);i.firstChild;)d.appendChild(i.firstChild);else d=i;return Ct.shadowroot&&(d=ht.call(o,d,!0)),d}var f=Ht?i.outerHTML:i.innerHTML;return Ht&&Rt["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&L(nt,i.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+f),Ft&&(f=x(f,bt," "),f=x(f,wt," "),f=x(f,Tt," ")),at&&Gt?at.createHTML(f):f},n.setConfig=function(t){he(t),Ut=!0},n.clearConfig=function(){ue=null,Ut=!1},n.isValidAttribute=function(t,e,n){ue||he({});var o=yt(t),r=yt(e);return Ce(o,r,n)},n.addHook=function(t,e){"function"==typeof e&&(ft[t]=ft[t]||[],S(ft[t],e))},n.removeHook=function(t){if(ft[t])return N(ft[t])},n.removeHooks=function(t){ft[t]&&(ft[t]=[])},n.removeAllHooks=function(){ft={}},n}return it()}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t="GET_BK_GLOBALS",e="PLACEHOLDER_TEXT",o="ANY_BLOCKED_IFRAMES",r="UNBLOCK_ALL_IFRAMES",i="PING_CONTENT_IFRAME_BANNER",a="IFRAME_BLOCK",s=0,l=0,c=1,u=2,d=3,m=4,h=1,p=2,f=3,g=4,y={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},b={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class w{static log(t,e=null){T(t,h,e)}static error(t,e=null){T(t,p,e)}static warn(t,e=null){T(t,f,e)}static debug(t,e=null){T(t,g,e)}}const T=(t,e,n)=>{const o=s;if(o===l)return;let r="chrome-extension:"===location.protocol?y.BACKGROUND:y.CONTENT;n&&y[n]&&(r=n);const i=new Date,a=e===p?t:`%c[${r} ${i.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${t}`,w=b.DEFAULT;let T=b[r];if(T||(T=w),o>=u&&e===p&&console.error(t),o>=c&&e===h&&console.log(a,T,w),o>=d&&e===f){const t="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${a}`,t,T,w)}if(o>=m&&e===g){const t="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${a}`,t,T,w)}};class E{onHttpResponse(t){if(!t.ok){const e=`HttpService Status: ${t.status}\nError Text: ${t.statusText}`;w.warn(e)}return t}async sendHttpRequest({url:t,headers:e,body:n,method:o="GET"},r=!0){try{e||(e={}),r&&(e["Cache-Control"]="no-cache");const i=await fetch(t,{headers:e,method:o,body:n});return await this.onHttpResponse(i)}catch(e){return w.error(`Failed to fetch on: "${t}", got error: ${e?.message}`),null}}async sendHttpRequestJson({url:t,headers:e,body:n,method:o="GET"},r={},i=!0){const a=await this.sendHttpRequest({url:t,headers:e,body:n,method:o},i);if(!a||!a.ok)return r;try{return await a.json()}catch(e){return w.warn(`[HttpService.sendHttpRequestJson] Failed to convert response to JSON on: "${t}", got error: ${e?.message}`),r}}async sendHttpRequestText({url:t,headers:e,body:n,method:o="GET"},r="",i=!0){const a=await this.sendHttpRequest({url:t,headers:e,body:n,method:o},i);if(!a||!a.ok)return r;try{return await a.text()}catch(e){return w.warn(`[HttpService.sendHttpRequestText] Failed to convert response to Text on: "${t}", got error: ${e?.message}`),r}}}var N=n(7856),S=n.n(N);const v=t=>{try{const e={ADD_ATTR:["src-disabled","sma-type","src-unchecked","src-enabled","x-mclocalizedtext","x-mcsrc","x-mcinsertposition","x-inputplaceholder","x-mcplaceholder","target"]};return S().sanitize(t,e)}catch(t){return""}};class A{static async loadTemplate(t,e,n=null,o={}){const{hostStyles:r}=t,i=document.createElement("div");for(const t in r)i.style[t]=r[t];const a=o?.shadowDomMode||"closed",s=i.attachShadow({mode:a});return A.populateFonts(e?.fontHref),await A.populateContainer(e,s),n&&await A.populateContainer(n,s),document.body.appendChild(i),{hostNode:i,shadowRoot:s}}static async populateContainer(t,e){const{htmlPath:n,cssPath:o,containerId:r,waImageSecret:i}=t,a=await A.getTemplate(n,o,i);(r&&e.querySelector(`#${r}`)||e).appendChild(a)}static async reloadTemplate(t,e,n){n.innerHTML="",e&&await A.populateContainer(e,n),await A.populateContainer(t,n)}static async getTemplate(t,e=null,n){const o=new E,r=document.createElement("template"),i=await o.sendHttpRequest({url:chrome.runtime.getURL(t)}),a=await i.text();let s="";if(e){const t=await o.sendHttpRequest({url:chrome.runtime.getURL(e)});s=await t.text(),s=`<style>${v(s)}</style>`}r.innerHTML=`${s}${v(a)}`;for(const t of r.content.querySelectorAll("img[x-mcsrc]:not([x-mcsrcparsed])")){t.getAttribute("src").includes("?secret")||(t.src=chrome.runtime.getURL(`${t.getAttribute("src")}?secret=${n}`),t.setAttribute("x-mcsrcparsed",!0))}return r.content.cloneNode(!0)}static fadeIn(t){t.style.opacity=0,t.style.display="block",function e(){const n=+t.style.opacity+.1;n<1&&(t.style.opacity=n,window.requestAnimationFrame(e))}()}static fadeOut(t,e){let n=!1;t.style.opacity=1,function o(){if(n)return;const r=+t.style.opacity-.1;r<=0?(n=!0,t.style.display="none",e()):(t.style.opacity=r,window.requestAnimationFrame(o))}()}static populateFonts(t){const e=t=>{try{const e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href=t,document.head.appendChild(e)}catch(t){w.error(t)}};e("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,400;0,500;0,600;0,800;1,400;1,500;1,600;1,800&display=swap"),t&&"string"==typeof t&&e(t)}}class R{constructor(t,e=null,n={}){this.closing=!1,this.showing=!1,this.animateReload=!0,this.allowReplace=!0,this.componentData=null,this.template=null,this.hostNode=null,this.shadowRoot=null,this.hostStyles=t,this.baseTemplate=e,this.showContainer=this.showContainer.bind(this),this.closeContainer=this.closeContainer.bind(this),this.query=this.query.bind(this),this.querySelectorAll=this.querySelectorAll.bind(this),this.clickListener=this.clickListener.bind(this),this.mouseoverListener=this.mouseoverListener.bind(this),this.mouseoutListener=this.mouseoutListener.bind(this),this.isShowing=this.isShowing.bind(this),this.bgGrayout=!1,this.bgGrayoutElement=null,this.closingShadowDomListener=n.closingShadowDomListener,this.shadowDomMode=n.shadowDomMode||"closed",this.isTrustCheckRequired=n.isTrustCheckRequired||!0,this.resize=!1,this.domHeight=""}async initContainer(t,e=null){if(this.closing)return w.log("initContainer still closing"),!1;if(w.log("initContainer start"),this.showing&&!1===this.allowReplace&&R.isSameObject(t,this.template))return!1;if(this.componentData&&JSON.stringify(this.componentData)===JSON.stringify(e))return!1;this.componentData=e;const{allowReplace:n=!0,animateReload:o=!0,resize:r=!1}=t;if(this.allowReplace=n,this.animateReload=o,this.resize=r,this.showing=!0,this.hostNode&&n)return await this.reloadContainer(t),!0;let i={...t};this.template=i,null===this.baseTemplate&&(this.baseTemplate=i,i=null);const a={hostStyles:{...this.hostStyles.DEFAULT,...this.hostStyles.HIDE}},s={shadowDomMode:this.shadowDomMode},{hostNode:l,shadowRoot:c}=await A.loadTemplate(a,this.baseTemplate,i,s);return this.hostNode=l,this.shadowRoot=c,this.resize&&window.addEventListener("resize",this.resizefn.bind(this)),!0}isShowing(){return this.showing}static isSameObject(t=null,e=null){return null===t&&null===e||t&&e&&JSON.stringify(t)===JSON.stringify(e)}async reloadContainer(t,e=this.animateReload){await this.closeContainer(!1,e),this.template=t,await A.reloadTemplate(t,this.baseTemplate,this.shadowRoot)}showBackgroundGrayout(t){if(this.bgGrayout=t,!t)return;this.bgGrayoutElement=document.createElement("div"),this.bgGrayoutElement.style.cssText="display:none; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 99999; background: rgba(0, 0, 0, 0.3);";const e=document.querySelector("body");e.append(this.bgGrayoutElement),e.style.overflow="hidden",A.fadeIn(this.bgGrayoutElement)}hideBackgroundGrayOut(){this.bgGrayoutElement&&this.bgGrayout&&(A.fadeOut(this.bgGrayoutElement,(()=>{})),document.querySelector("body")?.style&&(document.querySelector("body").style.overflow="auto"),this.bgGrayout=!1)}showContainer(t=null){const e=t&&t.bgGrayout;this.showBackgroundGrayout(e);for(const t in this.hostStyles.SHOW)this.hostNode.style[t]=this.hostStyles.SHOW[t];this.resize&&this.hostNode&&(this.domHeight="",this.getContainerHeight())}async closeContainer(t=!0,e=!0){if(this.closing)return;this.hideBackgroundGrayOut(),this.closing=!0,"function"==typeof this.closingShadowDomListener&&this.closingShadowDomListener();const n=()=>{this.closing=!1,this.showing=!1,t&&(this.hostNode&&this.hostNode.remove(),this.hostNode=null,this.componentData=null,this.template=null,this.shadowRoot=null,this.baseTemplate=null)};if(!e)return void n();const o={...this.hostStyles.DEFAULT,...this.hostStyles.HIDE};for(const t in o)this.hostNode&&(this.hostNode.style[t]=o[t]);const r=new Promise((t=>{setTimeout((()=>{n(),t()}),500)}));await r}query(t){return this.shadowRoot.querySelector(t)}querySelector(t){return this.shadowRoot.querySelector(t)}querySelectorAll(t){return this.shadowRoot.querySelectorAll(t)}clickListener(t,e){const n=this.shadowRoot.querySelector(t);n&&n.addEventListener("click",(t=>{this.isTrustCheckRequired&&!t.isTrusted||e(t)}))}mouseoverListener(t,e){const n=this.shadowRoot.querySelector(t);n&&n.addEventListener("mouseover",(t=>{this.isTrustCheckRequired&&!t.isTrusted||e(t)}))}mouseoutListener(t,e){const n=this.shadowRoot.querySelector(t);n&&n.addEventListener("mouseout",(t=>{this.isTrustCheckRequired&&!t.isTrusted||e(t)}))}getContainerHeight(){let t=3;const e=setInterval((()=>{this.hostNode?(this.domHeight!==this.hostNode.offsetHeight&&(this.domHeight=this.hostNode.offsetHeight,this.resizefn()),--t<=0&&clearInterval(e)):clearInterval(e)}),1e3)}resizefn(){if(!this.hostNode)return;const t=window.innerHeight;this.domHeight>t?(this.hostNode.style.height=`${t}px`,this.hostNode.style["overflow-y"]="scroll"):this.domHeight<window.innerHeight&&(this.hostNode.style.height="Auto",this.hostNode.style["overflow-y"]="unset")}}const x={DEFAULT:{top:"0",padding:"0",margin:"0",zIndex:"2147483646",position:"fixed",border:"none",opacity:"0",left:"0",display:"block",boxShadow:"0 0 10px rgba(0, 0, 0, 0.12)"},HIDE:{transition:"width 0s 0.4s, height 0s 0.4s, opacity 0.4s, transform 0.4s",transform:"translate3d(0, -80px, 0)",opacity:"0",width:"0"},SHOW:{transition:"opacity 0.4s, transform 0.4s",transform:"translate3d(0, 0, 0)",opacity:"1",width:"100%",backgroundColor:"transparent"}};class C extends R{constructor({shadowMode:t,isTrustCheckRequired:e}){super(x,null,{shadowDomMode:t,isTrustCheckRequired:e})}async init(t,e){return await this.initContainer(t,e)}}const k=async(t,e,n,o)=>{try{return await L(t,e,n,o),!0}catch(t){return w.warn(`[broadcast] Unexpected error when calling command: "${e}", err: ${t.message}`),null}},L=(t,e,n,o,r=null)=>{if(!chrome.tabs)throw new Error('"tabs" permission not set in manifest.');return chrome.tabs.sendMessage(o,{ipcId:t,command:e,...n},{frameId:r})},D=(t,e={},n)=>(async(t,e,n={},o={})=>{try{if(o?.tabId){const{tabId:r,frameId:i}=o;return await L(t,e,n,r,i)}if(o?.broadcast){const r=await chrome.tabs.query({}),{broadcastIgnoreId:i=[]}=o;return r.filter((({id:t})=>!i.includes(t))).forEach((({id:o})=>{k(t,e,n,o)})),!0}return await chrome.runtime.sendMessage({ipcId:t,command:e,...n})}catch(t){return w.warn(`Unexpected error when calling command: "${e}", err: ${t.message}`),null}})("WA",t,e,n),_=chrome;class O{geti18nRes(t,e=[]){let n=_.i18n.getMessage(t,e);const o=_.i18n.getMessage("res_PRODUCT_NAME_TRADEMARKED");return n=n.replace(/%PRODUCTNAME%/g,o),n}getResStr(t,e){const n=this.geti18nRes(t);e("??"===n?"":n)}}class M{constructor(t=null,e=document){if(this.resourcerequestor=new O,this.document=e,t){const e=this.document.querySelectorAll(`#${t}`);e&&(this.document=e[0].contentDocument)}}localeData(t,e=[]){return this.resourcerequestor.geti18nRes(t,e)}fillText(t,e){const n=this.document.getElementById(t);if(n){const t=n.getAttribute("x-mcinsertposition");if(t)return void n.insertAdjacentText(t,e);n.textContent=e}}fillLocalizedTexts(){for(const{id:t}of this.document.querySelectorAll("*[x-mclocalizedtext]")){const e=this.localeData(t);if(null==e)return!1;this.fillText(t,e)}return!0}fillInputPlaceHolders(){for(const{id:t}of this.document.querySelectorAll("*[x-inputplaceholder]")){const e=this.localeData(t),n=this.document.getElementById(t);if(null==e)return!1;null!=n&&n.setAttribute("placeholder",e)}return!0}fillPlaceHolderInternal(t){D(e,{id:t}).then((e=>{this.fillText(t,e.text)})).catch((()=>{}))}fillPlaceHolders(){for(const{id:t}of this.document.querySelectorAll("*[x-mcplaceholder]"))this.fillPlaceHolderInternal(t);return!0}init(){this.fillLocalizedTexts(),this.fillPlaceHolders(),this.fillInputPlaceHolders()}}class I{constructor(t,e){this.componentData=t,this.telemetryData={},this.shadowRoot=e.shadowRoot,this.showContainer=e.showContainer,this.closeContainer=e.closeContainer,this.clickListener=e.clickListener,this.query=e.query}async init(){new M(null,this.shadowRoot).init(),this.initListeners(),this.showContainer(),this.query("#iframe-block-logo").focus()}initListeners(){this.clickListener("#iframe_banner_close_btn",this.closeContainer),this.clickListener("#iframe_banner_view_all_btn",(()=>{D(r),this.closeContainer()}))}}class F{constructor(){this.iframeBlockShown=!1,this.iframeBlockedUrls={},this.topbarContainer=null,this.componentMap={[a]:{template:{htmlPath:"html/topbar/topbar_iframe_block.html",cssPath:"css/topbar_iframe_block.css"},Component:I}},this.getBkGlobals()}async getBkGlobals(){const e=await D(t),n=JSON.parse(e);this.waImageSecret=n.WA_IMAGE_SECRET,this.topbarContainer=new C(n),this.injectSecretToTemplate()}injectSecretToTemplate(){Object.keys(this.componentMap).forEach((t=>{this.componentMap[t].template.waImageSecret=this.waImageSecret}))}processMessage(t,e=!1){this.isForegroundPage=e;const{subcommand:n}=t;if(n){if(n===a){if(this.iframeBlockShown)return;this.iframeBlockShown=!0}this.RenderUIContainer(t)}}async RenderUIContainer(t){const{subcommand:e,componentData:n}=t;if(!e)return;const o=this.componentMap[e];if(!o)return;const{template:r,Component:i}=o;await this.topbarContainer.init(r,n)&&new i(n,this.topbarContainer).init()}getFrameUrls(){const t=[],e=document.getElementsByTagName("iframe");for(let n=0;n<e.length;++n)t.push(e[n].src);return t}async recheckIframeBlock(){if(this.iframeBlockShown)return;const t=this.getFrameUrls();if(0===t.length)return;if(await D(o,{frameUrls:t})){if(this.iframeBlockShown)return;this.iframeBlockShown=!0;const t={},{template:e,Component:n}=this.componentMap[a];if(!await this.topbarContainer.init(e,{iframeBlockData:t}))return;new n({iframeBlockData:t},this.topbarContainer).init()}}}class H{constructor(t){this.pingCommand=t,this.basePingListener(),this.addIdentifier()}basePingListener(t=null){((t,e=null,n)=>{"function"==typeof n?chrome.runtime.onMessage.addListener(((o,r,i)=>{if(r.id===chrome.runtime.id&&"object"==typeof o&&!Array.isArray(o)&&o?.ipcId===t)return n({promises:e,request:o,sender:r,sendResponse:i})})):w.error("Provided with invalid callback function")})("WA",null,(({request:e,sendResponse:n})=>{const{command:o}=e;if(o===this.pingCommand)return w.debug(`File Injection [pinged]: Received ${o} command`),n({content:!0}),"function"==typeof t&&t(),!0}))}addIdentifier(){var t;t=()=>{const t=document.createElement("span");t.id=this.pingCommand,t.style.cssText="display:none",document.body.appendChild(t)},"undefined"!=typeof document&&null!==document&&("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?t():document.addEventListener("DOMContentLoaded",t))}}(new class extends H{constructor(){super(i),this.topbarUIHandler=new F}main(){this.topbarUIHandler.recheckIframeBlock()}}).main()})()})();
//# sourceMappingURL=../sourceMap/chrome/scripts/content_iframe_banner.js.map