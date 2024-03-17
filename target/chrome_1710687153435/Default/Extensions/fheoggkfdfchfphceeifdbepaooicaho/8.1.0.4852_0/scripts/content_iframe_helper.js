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
 */(()=>{"use strict";const e="FF_IFRAME_HELPER_INFO",n={UNBLOCK_IFRAME:"UNBLOCK_IFRAME",BALLOON_MESSAGE:"BALLOON_MESSAGE",SIDEBAR:"SIDEBAR",TOPBAR:"TOPBAR",DLS_POPUP:"DLS_POPUP",NO_NATIVE_TOAST:"NO_NATIVE_TOAST",PING_CONTENT_ANNOTATION:"PING_CONTENT_ANNOTATION",PING_CONTENT_RAT_DETECTION:"PING_CONTENT_RAT_DETECTION",PING_CONTENT_IFRAME_BANNER:"PING_CONTENT_IFRAME_BANNER",PING_CONTENT_AUTOPLAY_DETECTION:"PING_CONTENT_AUTOPLAY_DETECTION",PING_CONTENT_SIDEBAR_MAIN:"PING_CONTENT_SIDEBAR_MAIN",PING_CONTENT_IDPS:"PING_CONTENT_IDPS",PING_CONTENT_APS_TOAST:"PING_CONTENT_APS_TOAST",PING_CONTENT_APS_BALLOON:"PING_CONTENT_APS_BALLOON",PING_CONTENT_APS_OBSERVER:"PING_CONTENT_APS_OBSERVER",PING_CONTENT_SITE_LISTENER:"PING_CONTENT_SITE_LISTENER",PING_CONTENT_DLS_POPUP:"PING_CONTENT_DLS_POPUP",PING_CONTENT_NO_NATIVE_TOAST:"PING_CONTENT_NO_NATIVE_TOAST",PING_IFRAME_FORM_CHECK:"PING_IFRAME_FORM_CHECK",PING_IFRAME_FORM_DETECTION:"PING_IFRAME_FORM_DETECTION",PING_IFRAME_BLOCK:"PING_IFRAME_BLOCK",PING_IFRAME_HELPER:"PING_IFRAME_HELPER",APS_REGISTRATION_PAGE:"APS_REGISTRATION_PAGE",BROADCAST_TO_FOREGROUND:"BROADCAST_TO_FOREGROUND",TRIGGER_AJ_TOAST:"TRIGGER_AJ_TOAST"};const t=0,o=0,r=1,N=2,T=3,_=4,E=1,s=2,c=3,a=4,i={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},I={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class d{static log(e,n=null){O(e,E,n)}static error(e,n=null){O(e,s,n)}static warn(e,n=null){O(e,c,n)}static debug(e,n=null){O(e,a,n)}}const O=(e,n,d)=>{const O=t;if(O===o)return;let A="chrome-extension:"===location.protocol?i.BACKGROUND:i.CONTENT;d&&i[d]&&(A=d);const l=new Date,P=n===s?e:`%c[${A} ${l.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${e}`,R=I.DEFAULT;let m=I[A];if(m||(m=R),O>=N&&n===s&&console.error(e),O>=r&&n===E&&console.log(P,m,R),O>=T&&n===c){const e="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${P}`,e,m,R)}if(O>=_&&n===a){const e="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${P}`,e,m,R)}};class A{constructor(e){this.pingCommand=e,this.basePingListener(),this.addIdentifier()}basePingListener(e=null){((e,n=null,t)=>{"function"==typeof t?chrome.runtime.onMessage.addListener(((o,r,N)=>{if(r.id===chrome.runtime.id&&"object"==typeof o&&!Array.isArray(o)&&o?.ipcId===e)return t({promises:n,request:o,sender:r,sendResponse:N})})):d.error("Provided with invalid callback function")})("WA",null,(({request:n,sendResponse:t})=>{const{command:o}=n;if(o===this.pingCommand)return d.debug(`File Injection [pinged]: Received ${o} command`),t({content:!0}),"function"==typeof e&&e(),!0}))}addIdentifier(){var e;e=()=>{const e=document.createElement("span");e.id=this.pingCommand,e.style.cssText="display:none",document.body.appendChild(e)},"undefined"!=typeof document&&null!==document&&("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e))}}const l=async(e,n,t,o)=>{try{return await P(e,n,t,o),!0}catch(e){return d.warn(`[broadcast] Unexpected error when calling command: "${n}", err: ${e.message}`),null}},P=(e,n,t,o,r=null)=>{if(!chrome.tabs)throw new Error('"tabs" permission not set in manifest.');return chrome.tabs.sendMessage(o,{ipcId:e,command:n,...t},{frameId:r})},R=(e,n={},t)=>(async(e,n,t={},o={})=>{try{if(o?.tabId){const{tabId:r,frameId:N}=o;return await P(e,n,t,r,N)}if(o?.broadcast){const r=await chrome.tabs.query({}),{broadcastIgnoreId:N=[]}=o;return r.filter((({id:e})=>!N.includes(e))).forEach((({id:o})=>{l(e,n,t,o)})),!0}return await chrome.runtime.sendMessage({ipcId:e,command:n,...t})}catch(e){return d.warn(`Unexpected error when calling command: "${n}", err: ${e.message}`),null}})("WA",e,n,t);(new class extends A{constructor(){super(n.PING_CONTENT_IFRAME_HELPER),this.onPageShow=this.onPageShow.bind(this)}async main(){window.addEventListener("pageshow",this.onPageShow)}onPageShow(){try{const n=document.querySelectorAll("iframe");if(0===n.length)return!1;const t=[];n.forEach((e=>{const n={frameId:browser.runtime.getFrameId(e),frameSrc:e.src};t.push(n)})),R(e,{listIFrameIdUrl:t})}catch(e){d.error(e.message)}return!0}}).main()})();
//# sourceMappingURL=../sourceMap/chrome/scripts/content_iframe_helper.js.map