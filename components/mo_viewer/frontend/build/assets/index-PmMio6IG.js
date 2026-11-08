(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $m={exports:{}},jl={},qm={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e0=Symbol.for("react.fragment"),t0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),Ph=Symbol.iterator;function u0(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Qm={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=zs.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}var dd=fd.prototype=new Jm;dd.constructor=fd;Zm(dd,zs.prototype);dd.isPureReactComponent=!0;var bh=Array.isArray,eg=Object.prototype.hasOwnProperty,hd={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eg.call(e,i)&&!tg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wo,type:t,key:s,ref:o,props:r,_owner:hd.current}}function c0(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function f0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f0(""+t.key):e.toString(36)}function qa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case Jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_u(o,0):i,bh(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),qa(r,e,n,"",function(u){return u})):r!=null&&(pd(r)&&(r=c0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_u(s,a);o+=qa(s,e,n,l,r)}else if(l=u0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_u(s,a++),o+=qa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return qa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function d0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ka={transition:null},h0={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:hd};function ig(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=zs;ke.Fragment=e0;ke.Profiler=n0;ke.PureComponent=fd;ke.StrictMode=t0;ke.Suspense=o0;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;ke.act=ig;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)eg.call(e,l)&&!tg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Wo,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:r0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i0,_context:t},t.Consumer=t};ke.createElement=ng;ke.createFactory=function(t){var e=ng.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:s0,render:t}};ke.isValidElement=pd;ke.lazy=function(t){return{$$typeof:l0,_payload:{_status:-1,_result:t},_init:d0}};ke.memo=function(t,e){return{$$typeof:a0,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ke.unstable_act=ig;ke.useCallback=function(t,e){return $t.current.useCallback(t,e)};ke.useContext=function(t){return $t.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};ke.useEffect=function(t,e){return $t.current.useEffect(t,e)};ke.useId=function(){return $t.current.useId()};ke.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return $t.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};ke.useRef=function(t){return $t.current.useRef(t)};ke.useState=function(t){return $t.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return $t.current.useTransition()};ke.version="18.3.1";qm.exports=ke;var Ze=qm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=Ze,m0=Symbol.for("react.element"),g0=Symbol.for("react.fragment"),_0=Object.prototype.hasOwnProperty,v0=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x0={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_0.call(e,i)&&!x0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:m0,type:t,key:s,ref:o,props:r,_owner:v0.current}}jl.Fragment=g0;jl.jsx=rg;jl.jsxs=rg;$m.exports=jl;var pe=$m.exports,sg={exports:{}},gn={},og={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,F){var j=A.length;A.push(F);e:for(;0<j;){var ee=j-1>>>1,fe=A[ee];if(0<r(fe,F))A[ee]=F,A[j]=fe,j=ee;else break e}}function n(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var F=A[0],j=A.pop();if(j!==F){A[0]=j;e:for(var ee=0,fe=A.length,Se=fe>>>1;ee<Se;){var V=2*(ee+1)-1,q=A[V],oe=V+1,se=A[oe];if(0>r(q,j))oe<fe&&0>r(se,q)?(A[ee]=se,A[oe]=j,ee=oe):(A[ee]=q,A[V]=j,ee=V);else if(oe<fe&&0>r(se,j))A[ee]=se,A[oe]=j,ee=oe;else break e}}return F}function r(A,F){var j=A.sortIndex-F.sortIndex;return j!==0?j:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=A)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function M(A){if(y=!1,v(A),!_)if(n(l)!==null)_=!0,W(b);else{var F=n(u);F!==null&&Q(M,F.startTime-A)}}function b(A,F){_=!1,y&&(y=!1,c(C),C=-1),m=!0;var j=d;try{for(v(F),h=n(l);h!==null&&(!(h.expirationTime>F)||A&&!w());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,d=h.priorityLevel;var fe=ee(h.expirationTime<=F);F=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),v(F)}else i(l);h=n(l)}if(h!==null)var Se=!0;else{var V=n(u);V!==null&&Q(M,V.startTime-F),Se=!1}return Se}finally{h=null,d=j,m=!1}}var P=!1,E=null,C=-1,X=5,x=-1;function w(){return!(t.unstable_now()-x<X)}function O(){if(E!==null){var A=t.unstable_now();x=A;var F=!0;try{F=E(!0,A)}finally{F?k():(P=!1,E=null)}}else P=!1}var k;if(typeof g=="function")k=function(){g(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Z=H.port2;H.port1.onmessage=O,k=function(){Z.postMessage(null)}}else k=function(){p(O,0)};function W(A){E=A,P||(P=!0,k())}function Q(A,F){C=p(function(){A(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(b))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var j=d;d=F;try{return A()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=d;d=A;try{return F()}finally{d=j}},t.unstable_scheduleCallback=function(A,F,j){var ee=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ee+j:ee):j=ee,A){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=j+fe,A={id:f++,callback:F,priorityLevel:A,startTime:j,expirationTime:fe,sortIndex:-1},j>ee?(A.sortIndex=j,e(u,A),n(l)===null&&A===n(u)&&(y?(c(C),C=-1):y=!0,Q(M,j-ee))):(A.sortIndex=fe,e(l,A),_||m||(_=!0,W(b))),A},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(A){var F=d;return function(){var j=d;d=F;try{return A.apply(this,arguments)}finally{d=j}}}})(ag);og.exports=ag;var y0=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=Ze,mn=y0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,To={};function Pr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(To[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,M0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Ih={};function E0(t){return Pc.call(Ih,t)?!0:Pc.call(Dh,t)?!1:M0.test(t)?Ih[t]=!0:(Dh[t]=!0,!1)}function w0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T0(t,e,n,i){if(e===null||typeof e>"u"||w0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Ut[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T0(e,n,r,i)&&(n=null),i||r===null?E0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),cg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,vu;function ao(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var xu=!1;function yu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function A0(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case bc:return"Profiler";case vd:return"StrictMode";case Lc:return"Suspense";case Dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case ug:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function C0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R0(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=R0(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uc(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function Nc(t,e){pg(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(lo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function mg(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){P0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var b0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(b0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vc=null,_s=null,vs=null;function zh(t){if(t=Yo(t)){if(typeof Vc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Zl(e),Vc(t.stateNode,t.type,e))}}function yg(t){_s?vs?vs.push(t):vs=[t]:_s=t}function Sg(){if(_s){var t=_s,e=vs;if(vs=_s=null,zh(t),e)for(t=0;t<e.length;t++)zh(e[t])}}function Mg(t,e){return t(e)}function Eg(){}var Su=!1;function wg(t,e,n){if(Su)return t(e,n);Su=!0;try{return Mg(t,e,n)}finally{Su=!1,(_s!==null||vs!==null)&&(Eg(),Sg())}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Gc=!1;if(pi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Gc=!1}function L0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var po=!1,ml=null,gl=!1,Wc=null,D0={onError:function(t){po=!0,ml=t}};function I0(t,e,n,i,r,s,o,a,l){po=!1,ml=null,L0.apply(D0,arguments)}function U0(t,e,n,i,r,s,o,a,l){if(I0.apply(this,arguments),po){if(po){var u=ml;po=!1,ml=null}else throw Error(ne(198));gl||(gl=!0,Wc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(br(t)!==t)throw Error(ne(188))}function N0(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ag(t){return t=N0(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Rg=mn.unstable_scheduleCallback,Hh=mn.unstable_cancelCallback,F0=mn.unstable_shouldYield,O0=mn.unstable_requestPaint,xt=mn.unstable_now,k0=mn.unstable_getCurrentPriorityLevel,Md=mn.unstable_ImmediatePriority,Pg=mn.unstable_UserBlockingPriority,_l=mn.unstable_NormalPriority,z0=mn.unstable_LowPriority,bg=mn.unstable_IdlePriority,Yl=null,qn=null;function B0(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:G0,H0=Math.log,V0=Math.LN2;function G0(t){return t>>>=0,t===0?32:31-(H0(t)/V0|0)|0}var ra=64,sa=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function W0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=W0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lg(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function j0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ig,wd,Ug,Ng,Fg,jc=!1,oa=[],Oi=null,ki=null,zi=null,Ro=new Map,Po=new Map,Di=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function $0(t,e,n,i,r){switch(e){case"focusin":return Oi=js(Oi,t,e,n,i,r),!0;case"dragenter":return ki=js(ki,t,e,n,i,r),!0;case"mouseover":return zi=js(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ro.set(s,js(Ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,js(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Tg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hc=i,n.target.dispatchEvent(i),Hc=null}else return e=Yo(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){Za(t)&&n.delete(e)}function q0(){jc=!1,Oi!==null&&Za(Oi)&&(Oi=null),ki!==null&&Za(ki)&&(ki=null),zi!==null&&Za(zi)&&(zi=null),Ro.forEach(Gh),Po.forEach(Gh)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,jc||(jc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,q0)))}function bo(t){function e(r){return Ys(r,t)}if(0<oa.length){Ys(oa[0],t);for(var n=1;n<oa.length;n++){var i=oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Ys(Oi,t),ki!==null&&Ys(ki,t),zi!==null&&Ys(zi,t),Ro.forEach(e),Po.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&Di.shift()}var xs=yi.ReactCurrentBatchConfig,xl=!0;function K0(t,e,n,i){var r=tt,s=xs.transition;xs.transition=null;try{tt=1,Td(t,e,n,i)}finally{tt=r,xs.transition=s}}function Z0(t,e,n,i){var r=tt,s=xs.transition;xs.transition=null;try{tt=4,Td(t,e,n,i)}finally{tt=r,xs.transition=s}}function Td(t,e,n,i){if(xl){var r=Yc(t,e,n,i);if(r===null)Du(t,e,i,yl,n),Vh(t,i);else if($0(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<Y0.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&Ig(s),s=Yc(t,e,n,i),s===null&&Du(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Du(t,e,i,null,n)}}var yl=null;function Yc(t,e,n,i){if(yl=null,t=Sd(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case Md:return 1;case Pg:return 4;case _l:case z0:return 16;case bg:return 536870912;default:return 16}default:return 16}}var Ni=null,Ad=null,Qa=null;function zg(){if(Qa)return Qa;var t,e=Ad,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Wh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:Wh,this.isPropagationStopped=Wh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=_n(Bs),jo=pt({},Bs,{view:0,detail:0}),Q0=_n(jo),Eu,wu,$s,$l=pt({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Eu=t.screenX-$s.screenX,wu=t.screenY-$s.screenY):wu=Eu=0,$s=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),Xh=_n($l),J0=pt({},$l,{dataTransfer:0}),ex=_n(J0),tx=pt({},jo,{relatedTarget:0}),Tu=_n(tx),nx=pt({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=_n(nx),rx=pt({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=_n(rx),ox=pt({},Bs,{data:0}),jh=_n(ox),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ux[t])?!!e[t]:!1}function Rd(){return cx}var fx=pt({},jo,{key:function(t){if(t.key){var e=ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dx=_n(fx),hx=pt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=_n(hx),px=pt({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),mx=_n(px),gx=pt({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=_n(gx),vx=pt({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=_n(vx),yx=[9,13,27,32],Pd=pi&&"CompositionEvent"in window,mo=null;pi&&"documentMode"in document&&(mo=document.documentMode);var Sx=pi&&"TextEvent"in window&&!mo,Bg=pi&&(!Pd||mo&&8<mo&&11>=mo),$h=" ",qh=!1;function Hg(t,e){switch(t){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Mx(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(qh=!0,$h);case"textInput":return t=e.data,t===$h&&qh?null:t;default:return null}}function Ex(t,e){if(ss)return t==="compositionend"||!Pd&&Hg(t,e)?(t=zg(),Qa=Ad=Ni=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wx[t.type]:e==="textarea"}function Gg(t,e,n,i){yg(i),e=Sl(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var go=null,Lo=null;function Tx(t){e_(t,0)}function ql(t){var e=ls(t);if(hg(e))return t}function Ax(t,e){if(t==="change")return e}var Wg=!1;if(pi){var Au;if(pi){var Cu="oninput"in document;if(!Cu){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Cu=typeof Zh.oninput=="function"}Au=Cu}else Au=!1;Wg=Au&&(!document.documentMode||9<document.documentMode)}function Qh(){go&&(go.detachEvent("onpropertychange",Xg),Lo=go=null)}function Xg(t){if(t.propertyName==="value"&&ql(Lo)){var e=[];Gg(e,Lo,t,Sd(t)),wg(Tx,e)}}function Cx(t,e,n){t==="focusin"?(Qh(),go=e,Lo=n,go.attachEvent("onpropertychange",Xg)):t==="focusout"&&Qh()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Lo)}function Px(t,e){if(t==="click")return ql(e)}function bx(t,e){if(t==="input"||t==="change")return ql(e)}function Lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Lx;function Do(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dx(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(i!==null&&bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ep(n,s);var o=ep(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ix=pi&&"documentMode"in document&&11>=document.documentMode,os=null,$c=null,_o=null,qc=!1;function tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qc||os==null||os!==pl(i)||(i=os,"selectionStart"in i&&bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Do(_o,i)||(_o=i,i=Sl($c,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ru={},$g={};pi&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Kl(t){if(Ru[t])return Ru[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $g)return Ru[t]=e[n];return t}var qg=Kl("animationend"),Kg=Kl("animationiteration"),Zg=Kl("animationstart"),Qg=Kl("transitionend"),Jg=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Jg.set(t,e),Pr(e,[t])}for(var Pu=0;Pu<np.length;Pu++){var bu=np[Pu],Ux=bu.toLowerCase(),Nx=bu[0].toUpperCase()+bu.slice(1);Ki(Ux,"on"+Nx)}Ki(qg,"onAnimationEnd");Ki(Kg,"onAnimationIteration");Ki(Zg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Qg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,U0(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}}}if(gl)throw t=Wc,gl=!1,Wc=null,t}function lt(t,e){var n=e[ef];n===void 0&&(n=e[ef]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function Lu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[ua]){t[ua]=!0,lg.forEach(function(n){n!=="selectionchange"&&(Fx.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,Lu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(kg(e)){case 1:var r=K0;break;case 4:r=Z0;break;default:r=Td}n=r.bind(null,e,n,t),r=void 0,!Gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wg(function(){var u=s,f=Sd(n),h=[];e:{var d=Jg.get(t);if(d!==void 0){var m=Cd,_=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":m=dx;break;case"focusin":_="focus",m=Tu;break;case"focusout":_="blur",m=Tu;break;case"beforeblur":case"afterblur":m=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mx;break;case qg:case Kg:case Zg:m=ix;break;case Qg:m=_x;break;case"scroll":m=Q0;break;case"wheel":m=xx;break;case"copy":case"cut":case"paste":m=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yh}var y=(e&4)!==0,p=!y&&t==="scroll",c=y?d!==null?d+"Capture":null:d;y=[];for(var g=u,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,c!==null&&(M=Co(g,c),M!=null&&y.push(Uo(g,M,v)))),p)break;g=g.return}0<y.length&&(d=new m(d,_,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Hc&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[mi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?hr(_):null,_!==null&&(p=br(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Xh,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Yh,M="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?d:ls(m),v=_==null?d:ls(_),d=new y(M,g+"leave",m,n,f),d.target=p,d.relatedTarget=v,M=null,hr(f)===u&&(y=new y(c,g+"enter",_,n,f),y.target=v,y.relatedTarget=p,M=y),p=M,m&&_)t:{for(y=m,c=_,g=0,v=y;v;v=Ur(v))g++;for(v=0,M=c;M;M=Ur(M))v++;for(;0<g-v;)y=Ur(y),g--;for(;0<v-g;)c=Ur(c),v--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break t;y=Ur(y),c=Ur(c)}y=null}else y=null;m!==null&&rp(h,d,m,y,!1),_!==null&&p!==null&&rp(h,p,_,y,!0)}}e:{if(d=u?ls(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=Ax;else if(Kh(d))if(Wg)b=bx;else{b=Rx;var P=Cx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Px);if(b&&(b=b(t,u))){Gg(h,b,n,f);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&Fc(d,"number",d.value)}switch(P=u?ls(u):window,t){case"focusin":(Kh(P)||P.contentEditable==="true")&&(os=P,$c=u,_o=null);break;case"focusout":_o=$c=os=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,tp(h,n,f);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":tp(h,n,f)}var E;if(Pd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ss?Hg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Bg&&n.locale!=="ko"&&(ss||C!=="onCompositionStart"?C==="onCompositionEnd"&&ss&&(E=zg()):(Ni=f,Ad="value"in Ni?Ni.value:Ni.textContent,ss=!0)),P=Sl(u,C),0<P.length&&(C=new jh(C,t,null,n,f),h.push({event:C,listeners:P}),E?C.data=E:(E=Vg(n),E!==null&&(C.data=E)))),(E=Sx?Mx(t,n):Ex(t,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(f=new jh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}e_(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Co(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Co(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Co(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Co(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ox=/\r\n?/g,kx=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(kx,"")}function ca(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(ne(425))}function Ml(){}var Kc=null,Zc=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(Hx)}:Jc;function Hx(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);bo(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Hs,No="__reactProps$"+Hs,mi="__reactContainer$"+Hs,ef="__reactEvents$"+Hs,Vx="__reactListeners$"+Hs,Gx="__reactHandles$"+Hs;function hr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[$n])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[$n]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Zl(t){return t[No]||null}var tf=[],us=-1;function Zi(t){return{current:t}}function ct(t){0>us||(t.current=tf[us],tf[us]=null,us--)}function rt(t,e){us++,tf[us]=t.current,t.current=e}var $i={},Ht=Zi($i),tn=Zi(!1),Sr=$i;function Cs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function El(){ct(tn),ct(Ht)}function lp(t,e,n){if(Ht.current!==$i)throw Error(ne(168));rt(Ht,e),rt(tn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,C0(t)||"Unknown",r));return pt({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Sr=Ht.current,rt(Ht,t),rt(tn,tn.current),!0}function up(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=n_(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,ct(tn),ct(Ht),rt(Ht,t)):ct(tn),rt(tn,n)}var oi=null,Ql=!1,Uu=!1;function i_(t){oi===null?oi=[t]:oi.push(t)}function Wx(t){Ql=!0,i_(t)}function Qi(){if(!Uu&&oi!==null){Uu=!0;var t=0,e=tt;try{var n=oi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Ql=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Rg(Md,Qi),r}finally{tt=e,Uu=!1}}return null}var cs=[],fs=0,Tl=null,Al=0,Sn=[],Mn=0,Mr=null,li=1,ui="";function ar(t,e){cs[fs++]=Al,cs[fs++]=Tl,Tl=t,Al=e}function r_(t,e,n){Sn[Mn++]=li,Sn[Mn++]=ui,Sn[Mn++]=Mr,Mr=t;var i=li;t=ui;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-Vn(e)+r|n<<r|i,ui=s+t}else li=1<<s|n<<r|i,ui=t}function Ld(t){t.return!==null&&(ar(t,1),r_(t,1,0))}function Dd(t){for(;t===Tl;)Tl=cs[--fs],cs[fs]=null,Al=cs[--fs],cs[fs]=null;for(;t===Mr;)Mr=Sn[--Mn],Sn[Mn]=null,ui=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,ft=!1,kn=null;function s_(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:li,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rf(t){if(ft){var e=hn;if(e){var n=e;if(!cp(t,e)){if(nf(t))throw Error(ne(418));e=Bi(n.nextSibling);var i=pn;e&&cp(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,ft=!1,pn=t)}}else{if(nf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ft=!1,pn=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function fa(t){if(t!==pn)return!1;if(!ft)return fp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=hn)){if(nf(t))throw o_(),Error(ne(418));for(;e;)s_(t,e),e=Bi(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Bi(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=hn;t;)t=Bi(t.nextSibling)}function Rs(){hn=pn=null,ft=!1}function Id(t){kn===null?kn=[t]:kn.push(t)}var Xx=yi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function da(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function a_(t){function e(c,g){if(t){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Wi(c,g),c.index=0,c.sibling=null,c}function s(c,g,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,M){return g===null||g.tag!==6?(g=Hu(v,c.mode,M),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,M){var b=v.type;return b===rs?f(c,g,v.props.children,M,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&dp(b)===g.type)?(M=r(g,v.props),M.ref=qs(c,g,v),M.return=c,M):(M=ol(v.type,v.key,v.props,null,c.mode,M),M.ref=qs(c,g,v),M.return=c,M)}function u(c,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Vu(v,c.mode,M),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function f(c,g,v,M,b){return g===null||g.tag!==7?(g=yr(v,c.mode,M,b),g.return=c,g):(g=r(g,v),g.return=c,g)}function h(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hu(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return v=ol(g.type,g.key,g.props,null,c.mode,v),v.ref=qs(c,null,g),v.return=c,v;case is:return g=Vu(g,c.mode,v),g.return=c,g;case bi:var M=g._init;return h(c,M(g._payload),v)}if(lo(g)||Ws(g))return g=yr(g,c.mode,v,null),g.return=c,g;da(c,g)}return null}function d(c,g,v,M){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(c,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:return v.key===b?l(c,g,v,M):null;case is:return v.key===b?u(c,g,v,M):null;case bi:return b=v._init,d(c,g,b(v._payload),M)}if(lo(v)||Ws(v))return b!==null?null:f(c,g,v,M,null);da(c,v)}return null}function m(c,g,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(v)||null,a(g,c,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ta:return c=c.get(M.key===null?v:M.key)||null,l(g,c,M,b);case is:return c=c.get(M.key===null?v:M.key)||null,u(g,c,M,b);case bi:var P=M._init;return m(c,g,v,P(M._payload),b)}if(lo(M)||Ws(M))return c=c.get(v)||null,f(g,c,M,b,null);da(g,M)}return null}function _(c,g,v,M){for(var b=null,P=null,E=g,C=g=0,X=null;E!==null&&C<v.length;C++){E.index>C?(X=E,E=null):X=E.sibling;var x=d(c,E,v[C],M);if(x===null){E===null&&(E=X);break}t&&E&&x.alternate===null&&e(c,E),g=s(x,g,C),P===null?b=x:P.sibling=x,P=x,E=X}if(C===v.length)return n(c,E),ft&&ar(c,C),b;if(E===null){for(;C<v.length;C++)E=h(c,v[C],M),E!==null&&(g=s(E,g,C),P===null?b=E:P.sibling=E,P=E);return ft&&ar(c,C),b}for(E=i(c,E);C<v.length;C++)X=m(E,c,C,v[C],M),X!==null&&(t&&X.alternate!==null&&E.delete(X.key===null?C:X.key),g=s(X,g,C),P===null?b=X:P.sibling=X,P=X);return t&&E.forEach(function(w){return e(c,w)}),ft&&ar(c,C),b}function y(c,g,v,M){var b=Ws(v);if(typeof b!="function")throw Error(ne(150));if(v=b.call(v),v==null)throw Error(ne(151));for(var P=b=null,E=g,C=g=0,X=null,x=v.next();E!==null&&!x.done;C++,x=v.next()){E.index>C?(X=E,E=null):X=E.sibling;var w=d(c,E,x.value,M);if(w===null){E===null&&(E=X);break}t&&E&&w.alternate===null&&e(c,E),g=s(w,g,C),P===null?b=w:P.sibling=w,P=w,E=X}if(x.done)return n(c,E),ft&&ar(c,C),b;if(E===null){for(;!x.done;C++,x=v.next())x=h(c,x.value,M),x!==null&&(g=s(x,g,C),P===null?b=x:P.sibling=x,P=x);return ft&&ar(c,C),b}for(E=i(c,E);!x.done;C++,x=v.next())x=m(E,c,C,x.value,M),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?C:x.key),g=s(x,g,C),P===null?b=x:P.sibling=x,P=x);return t&&E.forEach(function(O){return e(c,O)}),ft&&ar(c,C),b}function p(c,g,v,M){if(typeof v=="object"&&v!==null&&v.type===rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:e:{for(var b=v.key,P=g;P!==null;){if(P.key===b){if(b=v.type,b===rs){if(P.tag===7){n(c,P.sibling),g=r(P,v.props.children),g.return=c,c=g;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&dp(b)===P.type){n(c,P.sibling),g=r(P,v.props),g.ref=qs(c,P,v),g.return=c,c=g;break e}n(c,P);break}else e(c,P);P=P.sibling}v.type===rs?(g=yr(v.props.children,c.mode,M,v.key),g.return=c,c=g):(M=ol(v.type,v.key,v.props,null,c.mode,M),M.ref=qs(c,g,v),M.return=c,c=M)}return o(c);case is:e:{for(P=v.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Vu(v,c.mode,M),g.return=c,c=g}return o(c);case bi:return P=v._init,p(c,g,P(v._payload),M)}if(lo(v))return _(c,g,v,M);if(Ws(v))return y(c,g,v,M);da(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,v),g.return=c,c=g):(n(c,g),g=Hu(v,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return p}var Ps=a_(!0),l_=a_(!1),Cl=Zi(null),Rl=null,ds=null,Ud=null;function Nd(){Ud=ds=Rl=null}function Fd(t){var e=Cl.current;ct(Cl),t._currentValue=e}function sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Rl=t,Ud=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Rl===null)throw Error(ne(308));ds=t,Rl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var pr=null;function Od(t){pr===null?pr=[t]:pr.push(t)}function u_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=pt({},h,d);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=h}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var $o={},Kn=Zi($o),Fo=Zi($o),Oo=Zi($o);function mr(t){if(t===$o)throw Error(ne(174));return t}function zd(t,e){switch(rt(Oo,e),rt(Fo,t),rt(Kn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}ct(Kn),rt(Kn,e)}function bs(){ct(Kn),ct(Fo),ct(Oo)}function f_(t){mr(Oo.current);var e=mr(Kn.current),n=kc(e,t.type);e!==n&&(rt(Fo,t),rt(Kn,n))}function Bd(t){Fo.current===t&&(ct(Kn),ct(Fo))}var dt=Zi(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function Hd(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var tl=yi.ReactCurrentDispatcher,Fu=yi.ReactCurrentBatchConfig,Er=0,ht=null,wt=null,Pt=null,Ll=!1,vo=!1,ko=0,jx=0;function Nt(){throw Error(ne(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,s){if(Er=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?Kx:Zx,t=n(i,r),vo){s=0;do{if(vo=!1,ko=0,25<=s)throw Error(ne(301));s+=1,Pt=wt=null,e.updateQueue=null,tl.current=Qx,t=n(i,r)}while(vo)}if(tl.current=Dl,e=wt!==null&&wt.next!==null,Er=0,Pt=wt=ht=null,Ll=!1,e)throw Error(ne(300));return t}function Wd(){var t=ko!==0;return ko=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Pn(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ht.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(ne(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function zo(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ht.lanes|=f,wr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d_(){}function h_(t,e){var n=ht,i=Pn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Xd(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Bo(9,m_.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ne(349));Er&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,__(e)&&v_(t)}function g_(t,e,n){return n(function(){__(e)&&v_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function v_(t){var e=gi(t,1);e!==null&&Gn(e,t,1,-1)}function mp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,ht,t),[e.memoizedState,t]}function Bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x_(){return Pn().memoizedState}function nl(t,e,n,i){var r=jn();ht.flags|=t,r.memoizedState=Bo(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Vd(i,o.deps)){r.memoizedState=Bo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Bo(1|e,n,s,i)}function gp(t,e){return nl(8390656,8,t,e)}function Xd(t,e){return Jl(2048,8,t,e)}function y_(t,e){return Jl(4,2,t,e)}function S_(t,e){return Jl(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E_(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,M_.bind(null,e,t),n)}function jd(){}function w_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return Er&21?(Wn(n,e)||(n=Lg(),ht.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Yx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Fu.transition;Fu.transition={};try{t(!1),e()}finally{tt=n,Fu.transition=i}}function C_(){return Pn().memoizedState}function $x(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},R_(t))P_(e,n);else if(n=u_(t,e,n,i),n!==null){var r=Xt();Gn(n,t,i,r),b_(n,e,i)}}function qx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(R_(t))P_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=u_(t,e,r,i),n!==null&&(r=Xt(),Gn(n,t,i,r),b_(n,e,i))}}function R_(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function P_(t,e){vo=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}var Dl={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Kx={readContext:Rn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=$x.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:jd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=Yx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=jn();if(ft){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),bt===null)throw Error(ne(349));Er&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gp(g_.bind(null,i,s,t),[t]),i.flags|=2048,Bo(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=bt.identifierPrefix;if(ft){var n=ui,i=li;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zx={readContext:Rn,useCallback:w_,useContext:Rn,useEffect:Xd,useImperativeHandle:E_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:T_,useReducer:Ou,useRef:x_,useState:function(){return Ou(zo)},useDebugValue:jd,useDeferredValue:function(t){var e=Pn();return A_(e,wt.memoizedState,t)},useTransition:function(){var t=Ou(zo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1},Qx={readContext:Rn,useCallback:w_,useContext:Rn,useEffect:Xd,useImperativeHandle:E_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:T_,useReducer:ku,useRef:x_,useState:function(){return ku(zo)},useDebugValue:jd,useDeferredValue:function(t){var e=Pn();return wt===null?e.memoizedState=t:A_(e,wt.memoizedState,t)},useTransition:function(){var t=ku(zo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Gn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Gn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Gi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Gn(e,t,i,n),el(e,t,i))}};function _p(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,i)||!Do(r,s):!0}function L_(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=nn(e)?Sr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=nn(e)?Sr:Ht.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=A0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jx=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ul||(Ul=!0,vf=i),lf(t,e)},n}function I_(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lf(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hy.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var ey=yi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?l_(e,null,n,i):Ps(e,t.child,n,i)}function Mp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Gd(t,e,n,i,s,r),n=Wd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ft&&n&&Ld(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Ep(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U_(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Do(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,_i(t,e,r)}return uf(t,e,n,i,r)}function N_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ps,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ps,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ps,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ps,dn),dn|=i;return Wt(t,e,r,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uf(t,e,n,i,r){var s=nn(n)?Sr:Ht.current;return s=Cs(e,s),ys(e,r),n=Gd(t,e,n,i,s,r),i=Wd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ft&&i&&Ld(e),e.flags|=1,Wt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(nn(n)){var s=!0;wl(e)}else s=!1;if(ys(e,r),e.stateNode===null)il(t,e),L_(e,n,i),af(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=nn(n)?Sr:Ht.current,u=Cs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vp(e,o,i,u),Li=!1;var d=e.memoizedState;o.state=d,Pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||tn.current||Li?(typeof f=="function"&&(of(e,n,f,i),l=e.memoizedState),(a=Li||_p(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,c_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=nn(n)?Sr:Ht.current,l=Cs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vp(e,o,i,l),Li=!1,d=e.memoizedState,o.state=d,Pl(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||tn.current||Li?(typeof m=="function"&&(of(e,n,m,i),_=e.memoizedState),(u=Li||_p(e,n,u,i,d,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return cf(t,e,n,i,s,r)}function cf(t,e,n,i,r,s){F_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&up(e,n,!1),_i(t,e,s);i=e.stateNode,ey.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&up(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),zd(t,e.containerInfo)}function Tp(t,e,n,i,r){return Rs(),Id(r),e.flags|=256,Wt(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=ff,t):Yd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wi(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ff,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,i){return i!==null&&Id(i),Ps(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(ne(422))),ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=ff,s);if(!(e.mode&1))return ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=zu(s,i,void 0),ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Gn(i,t,r,-1))}return Jd(),i=zu(Error(ne(421))),ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Bi(r.nextSibling),pn=e,ft=!0,kn=null,t!==null&&(Sn[Mn++]=li,Sn[Mn++]=ui,Sn[Mn++]=Mr,li=t.id,ui=t.overflow,Mr=e),e=Yd(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sf(t.return,e,n)}function Bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ny(t,e,n){switch(e.tag){case 3:O_(e),Rs();break;case 5:f_(e);break;case 1:nn(e.type)&&wl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(rt(dt,dt.current&1),t=_i(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return _i(t,e,n)}var B_,hf,H_,V_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Kn.current);var s=null;switch(n){case"input":r=Uc(t,r),i=Uc(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Oc(t,r),i=Oc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}zc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};V_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iy(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return nn(e.type)&&El(),Ft(e),null;case 3:return i=e.stateNode,bs(),ct(tn),ct(Ht),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Sf(kn),kn=null))),hf(t,e),Ft(e),null;case 5:Bd(e);var r=mr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ft(e),null}if(t=mr(Kn.current),fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[No]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)lt(co[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Nh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Oh(i,s),lt("invalid",i)}zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":na(i),Fh(i,s,!0);break;case"textarea":na(i),kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[No]=i,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bc(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)lt(co[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Nh(t,i),r=Uc(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Oh(t,i),r=Oc(t,i),lt("invalid",t);break;default:r=i}zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&_d(t,s,l,o))}switch(n){case"input":na(t),Fh(t,i,!1);break;case"textarea":na(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)V_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=mr(Oo.current),mr(Kn.current),fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ft(e),null;case 13:if(ct(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))o_(),Rs(),e.flags|=98560,s=!1;else if(s=fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[$n]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else kn!==null&&(Sf(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Tt===0&&(Tt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return bs(),hf(t,e),t===null&&Io(e.stateNode.containerInfo),Ft(e),null;case 10:return Fd(e.type._context),Ft(e),null;case 17:return nn(e.type)&&El(),Ft(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ks(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ds&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Ft(e),null}else 2*xt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ry(t,e){switch(Dd(e),e.tag){case 1:return nn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ct(tn),ct(Ht),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return bs(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var pa=!1,zt=!1,sy=typeof WeakSet=="function"?WeakSet:Set,me=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function pf(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Cp=!1;function oy(t,e){if(Kc=xl,t=Yg(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},xl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Cp,Cp=!1,_}function xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pf(e,n,s)}r=r.next}while(r!==i)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[No],delete e[ef],delete e[Vx],delete e[Gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}function _f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}var Dt=null,Fn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:zt||hs(n,e);case 6:var i=Dt,r=Fn;Dt=null,Mi(t,e,n),Dt=i,Fn=r,Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),bo(t)):Iu(Dt,n.stateNode));break;case 4:i=Dt,r=Fn,Dt=n.stateNode.containerInfo,Fn=!0,Mi(t,e,n),Dt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pf(n,e,o),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!zt&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Mi(t,e,n),zt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sy),e.forEach(function(i){var r=my.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Fn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));X_(s,o,r),Dt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j_(e,t),e=e.sibling}function j_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Xn(t),i&4){try{xo(3,t,t.return),tu(3,t)}catch(y){gt(t,t.return,y)}try{xo(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Ln(e,t),Xn(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Ln(e,t),Xn(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Ao(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Bc(a,o);var u=Bc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?xg(r,h):f==="dangerouslySetInnerHTML"?_g(r,h):f==="children"?Ao(r,h):_d(r,f,h,u)}switch(a){case"input":Nc(r,s);break;case"textarea":mg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[No]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Ln(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Ln(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Ln(e,t),Xn(t);break;case 13:Ln(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=xt())),i&4&&Pp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Ln(e,t),zt=u):Ln(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(d=me,m=d.child,d.tag){case 0:case 11:case 14:case 15:xo(4,d,d.return);break;case 1:hs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:hs(d,d.return);break;case 22:if(d.memoizedState!==null){Lp(h);continue}}m!==null?(m.return=d,me=m):Lp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vg("display",o))}catch(y){gt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){gt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),Xn(t),i&4&&Pp(t);break;case 21:break;default:Ln(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=Rp(t);_f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rp(t);gf(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ay(t,e,n){me=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=pa;var u=zt;if(pa=o,(zt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Dp(r):l!==null?(l.return=o,me=l):Dp(r);for(;s!==null;)me=s,Y_(s),s=s.sibling;me=r,pa=a,zt=u}bp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):bp(t)}}function bp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&mf(e)}catch(d){gt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Lp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Dp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{mf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{mf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var ly=Math.ceil,Il=yi.ReactCurrentDispatcher,$d=yi.ReactCurrentOwner,Cn=yi.ReactCurrentBatchConfig,We=0,bt=null,Et=null,It=0,dn=0,ps=Zi(0),Tt=0,Ho=null,wr=0,nu=0,qd=0,yo=null,Qt=null,Kd=0,Ds=1/0,si=null,Ul=!1,vf=null,Vi=null,ma=!1,Fi=null,Nl=0,So=0,xf=null,rl=-1,sl=0;function Xt(){return We&6?xt():rl!==-1?rl:rl=xt()}function Gi(t){return t.mode&1?We&2&&It!==0?It&-It:Xx.transition!==null?(sl===0&&(sl=Lg()),sl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function Gn(t,e,n,i){if(50<So)throw So=0,xf=null,Error(ne(185));Xo(t,n,i),(!(We&2)||t!==bt)&&(t===bt&&(!(We&2)&&(nu|=n),Tt===4&&Ii(t,It)),rn(t,i),n===1&&We===0&&!(e.mode&1)&&(Ds=xt()+500,Ql&&Qi()))}function rn(t,e){var n=t.callbackNode;X0(t,e);var i=vl(t,t===bt?It:0);if(i===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Wx(Ip.bind(null,t)):i_(Ip.bind(null,t)),Bx(function(){!(We&6)&&Qi()}),n=null;else{switch(Dg(i)){case 1:n=Md;break;case 4:n=Pg;break;case 16:n=_l;break;case 536870912:n=bg;break;default:n=_l}n=tv(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(rl=-1,sl=0,We&6)throw Error(ne(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=vl(t,t===bt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=We;We|=2;var s=K_();(bt!==t||It!==e)&&(si=null,Ds=xt()+500,xr(t,e));do try{fy();break}catch(a){q_(t,a)}while(!0);Nd(),Il.current=s,We=r,Et!==null?e=0:(bt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=Xc(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=Ho,xr(t,0),Ii(t,i),rn(t,xt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!uy(r)&&(e=Fl(t,i),e===2&&(s=Xc(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=Ho,xr(t,0),Ii(t,i),rn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:lr(t,Qt,si);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=Kd+500-xt(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jc(lr.bind(null,t,Qt,si),e);break}lr(t,Qt,si);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ly(i/1960))-i,10<i){t.timeoutHandle=Jc(lr.bind(null,t,Qt,si),i);break}lr(t,Qt,si);break;case 5:lr(t,Qt,si);break;default:throw Error(ne(329))}}}return rn(t,xt()),t.callbackNode===n?$_.bind(null,t):null}function yf(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Sf(e)),t}function Sf(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~qd,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Ip(t){if(We&6)throw Error(ne(327));Ss();var e=vl(t,0);if(!(e&1))return rn(t,xt()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Xc(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=Ho,xr(t,0),Ii(t,e),rn(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Qt,si),rn(t,xt()),null}function Zd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ds=xt()+500,Ql&&Qi())}}function Tr(t){Fi!==null&&Fi.tag===0&&!(We&6)&&Ss();var e=We;We|=1;var n=Cn.transition,i=tt;try{if(Cn.transition=null,tt=1,t)return t()}finally{tt=i,Cn.transition=n,We=e,!(We&6)&&Qi()}}function Qd(){dn=ps.current,ct(ps)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zx(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:bs(),ct(tn),ct(Ht),Hd();break;case 5:Bd(i);break;case 4:bs();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(bt=t,Et=t=Wi(t.current,null),It=dn=e,Tt=0,Ho=null,qd=nu=wr=0,Qt=yo=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function q_(t,e){do{var n=Et;try{if(Nd(),tl.current=Dl,Ll){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Er=0,Pt=wt=ht=null,vo=!1,ko=0,$d.current=null,n===null||n.return===null){Tt=1,Ho=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=yp(o);if(m!==null){m.flags&=-257,Sp(m,o,a,s,e),m.mode&1&&xp(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){xp(s,u,e),Jd();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var p=yp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Sp(p,o,a,s,e),Id(Ls(l,a));break e}}s=l=Ls(l,a),Tt!==4&&(Tt=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=D_(s,l,e);hp(s,c);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vi===null||!Vi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=I_(s,a,e);hp(s,M);break e}}s=s.return}while(s!==null)}Q_(n)}catch(b){e=b,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function K_(){var t=Il.current;return Il.current=Dl,t===null?Dl:t}function Jd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),bt===null||!(wr&268435455)&&!(nu&268435455)||Ii(bt,It)}function Fl(t,e){var n=We;We|=2;var i=K_();(bt!==t||It!==e)&&(si=null,xr(t,e));do try{cy();break}catch(r){q_(t,r)}while(!0);if(Nd(),We=n,Il.current=i,Et!==null)throw Error(ne(261));return bt=null,It=0,Tt}function cy(){for(;Et!==null;)Z_(Et)}function fy(){for(;Et!==null&&!F0();)Z_(Et)}function Z_(t){var e=ev(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Q_(t):Et=e,$d.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ry(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=iy(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function lr(t,e,n){var i=tt,r=Cn.transition;try{Cn.transition=null,tt=1,dy(t,e,n,i)}finally{Cn.transition=r,tt=i}return null}function dy(t,e,n,i){do Ss();while(Fi!==null);if(We&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(t,s),t===bt&&(Et=bt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,tv(_l,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=tt;tt=1;var a=We;We|=4,$d.current=null,oy(t,n),j_(n,t),Dx(Zc),xl=!!Kc,Zc=Kc=null,t.current=n,ay(n),O0(),We=a,tt=o,Cn.transition=s}else t.current=n;if(ma&&(ma=!1,Fi=t,Nl=r),s=t.pendingLanes,s===0&&(Vi=null),B0(n.stateNode),rn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,t=vf,vf=null,t;return Nl&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===xf?So++:(So=0,xf=t):So=0,Qi(),null}function Ss(){if(Fi!==null){var t=Dg(Nl),e=Cn.transition,n=tt;try{if(Cn.transition=null,tt=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Nl=0,We&6)throw Error(ne(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:xo(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var d=f.sibling,m=f.return;if(G_(f),f===u){me=null;break}if(d!==null){d.return=m,me=d;break}me=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,me=c;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(b){gt(a,a.return,b)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(We=r,Qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{tt=n,Cn.transition=e}}return!1}function Up(t,e,n){e=Ls(n,e),e=D_(t,e,1),t=Hi(t,e,1),e=Xt(),t!==null&&(Xo(t,1,e),rn(t,e))}function gt(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Ls(n,t),t=I_(e,t,1),e=Hi(e,t,1),t=Xt(),e!==null&&(Xo(e,1,t),rn(e,t));break}}e=e.return}}function hy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>xt()-Kd?xr(t,0):qd|=n),rn(t,e)}function J_(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=Xt();t=gi(t,e),t!==null&&(Xo(t,e,n),rn(t,n))}function py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J_(t,n)}function my(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),J_(t,n)}var ev;ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ny(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ft&&e.flags&1048576&&r_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Cs(e,Ht.current);ys(e,n),r=Gd(null,e,i,t,r,n);var s=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,af(e,i,t,n),e=cf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Ld(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_y(i),t=Nn(i,t),r){case 0:e=uf(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Mp(null,e,i,t,n);break e;case 14:e=Ep(null,e,i,Nn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),wp(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c_(t,e),Pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ne(423)),e),e=Tp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ne(424)),e),e=Tp(t,e,i,n,r);break e}else for(hn=Bi(e.stateNode.containerInfo.firstChild),pn=e,ft=!0,kn=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=_i(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return f_(e),t===null&&rf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qc(i,r)?o=null:s!==null&&Qc(i,s)&&(e.flags|=32),F_(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&rf(e),null;case 13:return k_(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Mp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Cl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!tn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=Rn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Ep(t,e,i,r,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),il(t,e),e.tag=1,nn(i)?(t=!0,wl(e)):t=!1,ys(e,n),L_(e,i,r),af(e,i,r,n),cf(null,e,i,!0,t,n);case 19:return z_(t,e,n);case 22:return N_(t,e,n)}throw Error(ne(156,e.tag))};function tv(t,e){return Rg(t,e)}function gy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new gy(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _y(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===yd)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return yr(n.children,r,s,e);case vd:o=8,r|=8;break;case bc:return t=Tn(12,n,e,r|2),t.elementType=bc,t.lanes=s,t;case Lc:return t=Tn(13,n,e,r),t.elementType=Lc,t.lanes=s,t;case Dc:return t=Tn(19,n,e,r),t.elementType=Dc,t.lanes=s,t;case fg:return iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ug:o=10;break e;case cg:o=9;break e;case xd:o=11;break e;case yd:o=14;break e;case bi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function iu(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=fg,t.lanes=n,t.stateNode={isHidden:!1},t}function Hu(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Vu(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,s,o,a,l){return t=new vy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function xy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nv(t){if(!t)return $i;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(nn(n))return n_(t,n,e)}return e}function iv(t,e,n,i,r,s,o,a,l){return t=th(n,i,!0,t,r,s,o,a,l),t.context=nv(null),n=t.current,i=Xt(),r=Gi(n),s=di(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Xo(t,r,i),rn(t,i),t}function ru(t,e,n,i){var r=e.current,s=Xt(),o=Gi(r);return n=nv(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Gn(t,r,o,s),el(t,r,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function yy(){return null}var rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}su.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));ru(t,e,null,null)};su.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){ru(null,t,null,null)}),e[mi]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&Og(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function Sy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ol(o);s.call(u)}}var o=iv(e,i,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=o,t[mi]=o.current,Io(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ol(l);a.call(u)}}var l=th(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[mi]=l.current,Io(t.nodeType===8?t.parentNode:t),Tr(function(){ru(e,l,n,i)}),l}function au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}ru(e,o,t,r)}else o=Sy(n,e,t,r,i);return Ol(o)}Ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Ed(e,n|1),rn(e,xt()),!(We&6)&&(Ds=xt()+500,Qi()))}break;case 13:Tr(function(){var i=gi(t,1);if(i!==null){var r=Xt();Gn(i,t,1,r)}}),nh(t,1)}};wd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Xt();Gn(e,t,134217728,n)}nh(t,134217728)}};Ug=function(t){if(t.tag===13){var e=Gi(t),n=gi(t,e);if(n!==null){var i=Xt();Gn(n,t,e,i)}nh(t,e)}};Ng=function(){return tt};Fg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Vc=function(t,e,n){switch(e){case"input":if(Nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(ne(90));hg(i),Nc(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Mg=Zd;Eg=Tr;var My={usingClientEntryPoint:!1,Events:[Yo,ls,Zl,yg,Sg,Zd]},Zs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{Yl=ga.inject(Ey),qn=ga}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(ne(200));return xy(t,e,null,n)};gn.createRoot=function(t,e){if(!rh(t))throw Error(ne(299));var n=!1,i="",r=rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,Io(t.nodeType===8?t.parentNode:t),new ih(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Tr(t)};gn.hydrate=function(t,e,n){if(!ou(e))throw Error(ne(200));return au(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=rv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iv(e,null,t,1,n??null,r,!1,s,o),t[mi]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new su(e)};gn.render=function(t,e,n){if(!ou(e))throw Error(ne(200));return au(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ne(40));return t._reactRootContainer?(Tr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};gn.unstable_batchedUpdates=Zd;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return au(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(t){console.error(t)}}sv(),sg.exports=gn;var wy=sg.exports,ov,Op=wy;ov=Op.createRoot,Op.hydrateRoot;const Ty=1,Mf=new Set;function Gu(t,e={}){window.parent.postMessage({isStreamlitMessage:!0,apiVersion:Ty,type:t,...e},"*")}window.addEventListener("message",t=>{const e=t.data;if(!e||e.type!=="streamlit:render")return;const n={args:e.args??{},disabled:!!e.disabled,theme:e.theme};Mf.forEach(i=>i(n))});const Mo={ready(){Gu("streamlit:componentReady")},onRender(t){return Mf.add(t),()=>Mf.delete(t)},setFrameHeight(t){Gu("streamlit:setFrameHeight",{height:t})},setComponentValue(t){Gu("streamlit:setComponentValue",{value:t,dataType:"json"})}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="169",Ms={ROTATE:0,DOLLY:1,PAN:2},Ay=0,kp=1,Cy=2,av=1,Ry=2,ri=3,vi=0,sn=1,ai=2,Xi=0,Es=1,zp=2,Bp=3,Hp=4,Py=5,fr=100,by=101,Ly=102,Dy=103,Iy=104,Uy=200,Ny=201,Fy=202,Oy=203,Ef=204,wf=205,ky=206,zy=207,By=208,Hy=209,Vy=210,Gy=211,Wy=212,Xy=213,jy=214,Tf=0,Af=1,Cf=2,Is=3,Rf=4,Pf=5,bf=6,Lf=7,lv=0,Yy=1,$y=2,ji=0,qy=1,Ky=2,Zy=3,Qy=4,Jy=5,eS=6,uv=7,cv=300,Us=301,Ns=302,Df=303,If=304,lu=306,Uf=1e3,gr=1001,Nf=1002,An=1003,tS=1004,_a=1005,zn=1006,Wu=1007,_r=1008,xi=1009,fv=1010,dv=1011,Vo=1012,oh=1013,Ar=1014,ci=1015,qo=1016,ah=1017,lh=1018,Fs=1020,hv=35902,pv=1021,mv=1022,Hn=1023,gv=1024,_v=1025,ws=1026,Os=1027,vv=1028,uh=1029,xv=1030,ch=1031,fh=1033,al=33776,ll=33777,ul=33778,cl=33779,Ff=35840,Of=35841,kf=35842,zf=35843,Bf=36196,Hf=37492,Vf=37496,Gf=37808,Wf=37809,Xf=37810,jf=37811,Yf=37812,$f=37813,qf=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,fl=36492,id=36494,rd=36495,yv=36283,sd=36284,od=36285,ad=36286,nS=3200,iS=3201,Sv=0,rS=1,Ui="",On="srgb",Ji="srgb-linear",dh="display-p3",uu="display-p3-linear",kl="linear",ut="srgb",zl="rec709",Bl="p3",Nr=7680,Vp=519,sS=512,oS=513,aS=514,Mv=515,lS=516,uS=517,cS=518,fS=519,ld=35044,Gp="300 es",fi=2e3,Hl=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wp=1234567;const Eo=Math.PI/180,Go=180/Math.PI;function hi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function hh(t,e){return(t%e+e)%e}function dS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hS(t,e,n){return t!==e?(n-t)/(e-t):0}function wo(t,e,n){return(1-n)*t+n*e}function pS(t,e,n,i){return wo(t,e,1-Math.exp(-n*i))}function mS(t,e=1){return e-Math.abs(hh(t,e*2)-e)}function gS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _S(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function xS(t,e){return t+Math.random()*(e-t)}function yS(t){return t*(.5-Math.random())}function SS(t){t!==void 0&&(Wp=t);let e=Wp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MS(t){return t*Eo}function ES(t){return t*Go}function wS(t){return(t&t-1)===0&&t!==0}function TS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function AS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function CS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*f,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*f,a*u);break;case"XZX":t.set(a*f,l*_,l*m,a*u);break;case"YXY":t.set(l*m,a*f,l*_,a*u);break;case"ZYZ":t.set(l*_,l*m,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function et(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Xp={DEG2RAD:Eo,RAD2DEG:Go,generateUUID:hi,clamp:Bt,euclideanModulo:hh,mapLinear:dS,inverseLerp:hS,lerp:wo,damp:pS,pingpong:mS,smoothstep:gS,smootherstep:_S,randInt:vS,randFloat:xS,randFloatSpread:yS,seededRandom:SS,degToRad:MS,radToDeg:ES,isPowerOfTwo:wS,ceilPowerOfTwo:TS,floorPowerOfTwo:AS,setQuaternionFromProperEuler:CS,normalize:et,denormalize:Bn};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],_=i[8],y=r[0],p=r[3],c=r[6],g=r[1],v=r[4],M=r[7],b=r[2],P=r[5],E=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*p+a*v+l*P,s[6]=o*c+a*M+l*E,s[1]=u*y+f*g+h*b,s[4]=u*p+f*v+h*P,s[7]=u*c+f*M+h*E,s[2]=d*y+m*g+_*b,s[5]=d*p+m*v+_*P,s[8]=d*c+m*M+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xu.makeScale(e,n)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new Fe;function Ev(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function RS(){const t=Vl("canvas");return t.style.display="block",t}const jp={};function dl(t){t in jp||(jp[t]=!0,console.warn(t))}function PS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function bS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$p=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Ji]:{transfer:kl,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[On]:{transfer:ut,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uu]:{transfer:kl,primaries:Bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3($p),fromReference:t=>t.applyMatrix3(Yp)},[dh]:{transfer:ut,primaries:Bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3($p),fromReference:t=>t.applyMatrix3(Yp).convertLinearToSRGB()}},DS=new Set([Ji,uu]),Qe={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qs[e].toReference,r=Qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qs[t].primaries},getTransfer:function(t){return t===Ui?kl:Qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qs[e].luminanceCoefficients)}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ju(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class IS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Vl("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yu(r[o].image)):s.push(Yu(r[o]))}else s=Yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class jt extends Lr{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=gr,r=gr,s=zn,o=_r,a=Hn,l=xi,u=jt.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=hi(),this.name="",this.source=new wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uf:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uf:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=cv;jt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],y=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,M=(m+1)/2,b=(c+1)/2,P=(f+d)/4,E=(h+y)/4,C=(_+p)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=P/i,s=E/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-y)/g,this.z=(d-f)/g,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends FS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tv extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OS extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==d||u!==m||f!==_){let p=1-a;const c=l*d+u*m+f*_+h*y,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const b=Math.sqrt(v),P=Math.atan2(b,c*g);p=Math.sin(p*P)/b,a=Math.sin(a*P)/b}const M=a*g;if(l=l*p+d*M,u=u*p+m*M,f=f*p+_*M,h=h*p+y*M,p===1-a){const b=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=b,u*=b,f*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*m-u*d,e[n+1]=l*_+f*d+u*h-a*m,e[n+2]=u*_+f*m+a*d-l*h,e[n+3]=f*_-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*_,this._y=u*m*h-d*f*_,this._z=u*f*_+d*m*h,this._w=u*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+u*m*_,this._y=u*m*h-d*f*_,this._z=u*f*_-d*m*h,this._w=u*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-u*m*_,this._y=u*m*h+d*f*_,this._z=u*f*_+d*m*h,this._w=u*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-u*m*_,this._y=u*m*h+d*f*_,this._z=u*f*_-d*m*h,this._w=u*f*h+d*m*_;break;case"YZX":this._x=d*f*h+u*m*_,this._y=u*m*h+d*f*_,this._z=u*f*_-d*m*h,this._w=u*f*h-d*m*_;break;case"XZY":this._x=d*f*h-u*m*_,this._y=u*m*h-d*f*_,this._z=u*f*_+d*m*h,this._w=u*f*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new L,qp=new Vs;class Rr{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),xa.subVectors(this.max,Js),Or.subVectors(e.a,Js),kr.subVectors(e.b,Js),zr.subVectors(e.c,Js),Ei.subVectors(kr,Or),wi.subVectors(zr,kr),tr.subVectors(Or,zr);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-tr.z,tr.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,tr.z,0,-tr.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-tr.y,tr.x,0];return!qu(n,Or,kr,zr,xa)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,Or,kr,zr,xa))?!1:(ya.crossVectors(Ei,wi),n=[ya.x,ya.y,ya.z],qu(n,Or,kr,zr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,va=new Rr,Or=new L,kr=new L,zr=new L,Ei=new L,wi=new L,tr=new L,Js=new L,xa=new L,ya=new L,nr=new L;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const kS=new Rr,eo=new L,Ku=new L;class Ko{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ku)),this.expandByPoint(eo.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new L,Zu=new L,Sa=new L,Ti=new L,Qu=new L,Ma=new L,Ju=new L;class Av{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=Ti.dot(this.direction),l=-Ti.dot(Sa),u=Ti.lengthSq(),f=Math.abs(1-o*o);let h,d,m,_;if(f>0)if(h=o*l-a,d=o*a-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const y=1/f;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zu).addScaledVector(Sa,d),m}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),Ma.subVectors(i,e),Ju.crossVectors(Qu,Ma);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Ti,Ma));if(l<0)return null;const u=a*this.direction.dot(Qu.cross(Ti));if(u<0||l+u>o)return null;const f=-a*Ti.dot(Ju);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,_,y,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,_,y,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,_,y,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=_,c[11]=y,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,_=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+_*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=u*f,y=u*h;n[0]=d+y*a,n[4]=_*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=u*f,y=u*h;n[0]=d-y*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,_=a*f,y=a*h;n[0]=l*f,n[4]=_*u-m,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=y-d*h,n[8]=_*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,m=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+y,n[5]=o*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,BS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ai.crossVectors(i,cn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ai.crossVectors(i,cn)),Ai.normalize(),Ea.crossVectors(cn,Ai),r[0]=Ai.x,r[4]=Ea.x,r[8]=cn.x,r[1]=Ai.y,r[5]=Ea.y,r[9]=cn.y,r[2]=Ai.z,r[6]=Ea.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],_=i[2],y=i[6],p=i[10],c=i[14],g=i[3],v=i[7],M=i[11],b=i[15],P=r[0],E=r[4],C=r[8],X=r[12],x=r[1],w=r[5],O=r[9],k=r[13],H=r[2],Z=r[6],W=r[10],Q=r[14],A=r[3],F=r[7],j=r[11],ee=r[15];return s[0]=o*P+a*x+l*H+u*A,s[4]=o*E+a*w+l*Z+u*F,s[8]=o*C+a*O+l*W+u*j,s[12]=o*X+a*k+l*Q+u*ee,s[1]=f*P+h*x+d*H+m*A,s[5]=f*E+h*w+d*Z+m*F,s[9]=f*C+h*O+d*W+m*j,s[13]=f*X+h*k+d*Q+m*ee,s[2]=_*P+y*x+p*H+c*A,s[6]=_*E+y*w+p*Z+c*F,s[10]=_*C+y*O+p*W+c*j,s[14]=_*X+y*k+p*Q+c*ee,s[3]=g*P+v*x+M*H+b*A,s[7]=g*E+v*w+M*Z+b*F,s[11]=g*C+v*O+M*W+b*j,s[15]=g*X+v*k+M*Q+b*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],y=e[7],p=e[11],c=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+y*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],y=e[13],p=e[14],c=e[15],g=h*p*u-y*d*u+y*l*m-a*p*m-h*l*c+a*d*c,v=_*d*u-f*p*u-_*l*m+o*p*m+f*l*c-o*d*c,M=f*y*u-_*h*u+_*a*m-o*y*m-f*a*c+o*h*c,b=_*h*l-f*y*l-_*a*d+o*y*d+f*a*p-o*h*p,P=n*g+i*v+r*M+s*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/P;return e[0]=g*E,e[1]=(y*d*s-h*p*s-y*r*m+i*p*m+h*r*c-i*d*c)*E,e[2]=(a*p*s-y*l*s+y*r*u-i*p*u-a*r*c+i*l*c)*E,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*E,e[4]=v*E,e[5]=(f*p*s-_*d*s+_*r*m-n*p*m-f*r*c+n*d*c)*E,e[6]=(_*l*s-o*p*s-_*r*u+n*p*u+o*r*c-n*l*c)*E,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*E,e[8]=M*E,e[9]=(_*h*s-f*y*s-_*i*m+n*y*m+f*i*c-n*h*c)*E,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*c+n*a*c)*E,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*E,e[12]=b*E,e[13]=(f*y*r-_*h*r+_*i*d-n*y*d-f*i*p+n*h*p)*E,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*E,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,_=s*h,y=o*f,p=o*h,c=a*h,g=l*u,v=l*f,M=l*h,b=i.x,P=i.y,E=i.z;return r[0]=(1-(y+c))*b,r[1]=(m+M)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(m-M)*P,r[5]=(1-(d+c))*P,r[6]=(p+g)*P,r[7]=0,r[8]=(_+v)*E,r[9]=(p-g)*E,r[10]=(1-(d+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,f=1/o,h=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(a===fi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Hl)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let _,y;if(a===fi)_=(o+s)*h,y=-2*h;else if(a===Hl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new L,In=new st,zS=new L(0,0,0),BS=new L(1,1,1),Ai=new L,Ea=new L,cn=new L,Kp=new st,Zp=new Vs;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const Qp=new L,Hr=new Vs,ti=new st,wa=new L,to=new L,VS=new L,GS=new Vs,Jp=new L(1,0,0),em=new L(0,1,0),tm=new L(0,0,1),nm={type:"added"},WS={type:"removed"},Vr={type:"childadded",child:null},ec={type:"childremoved",child:null};class yt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,n=new Zn,i=new Vs,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Fe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(to,wa,this.up):ti.lookAt(wa,to,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ti),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WS),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ni=new L,tc=new L,ii=new L,Gr=new L,Wr=new L,im=new L,nc=new L,ic=new L,rc=new L,sc=new _t,oc=new _t,ac=new _t;class wn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ni.subVectors(i,n),tc.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ni),l=Un.dot(tc),u=ni.dot(ni),f=ni.dot(tc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*f)*d,_=(o*f-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ni.subVectors(e,n),Un.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Wr.subVectors(s,i),nc.subVectors(e,i);const l=Gr.dot(nc),u=Wr.dot(nc);if(l<=0&&u<=0)return n.copy(i);ic.subVectors(e,r);const f=Gr.dot(ic),h=Wr.dot(ic);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Gr,o);rc.subVectors(e,s);const m=Gr.dot(rc),_=Wr.dot(rc);if(_>=0&&m<=_)return n.copy(s);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Wr,a);const p=f*_-m*h;if(p<=0&&h-f>=0&&m-_>=0)return im.subVectors(s,r),a=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(im,a);const c=1/(p+y+d);return o=y*c,a=d*c,n.copy(i).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=hh(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Rv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=ju(e.r),this.g=ju(e.g),this.b=ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Bt(kt.r*255,0,255))*65536+Math.round(Bt(kt.g*255,0,255))*256+Math.round(Bt(kt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=On){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ta);const i=wo(Ci.h,Ta.h,n),r=wo(Ci.s,Ta.s,n),s=wo(Ci.l,Ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Oe;Oe.NAMES=Rv;let XS=0;class Dr extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Es,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=wf,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ef&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ph extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new L,Aa=new Ae;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ld,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bn(n,this.array)),n}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bn(n,this.array)),n}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bn(n,this.array)),n}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}}class Pv extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bv extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jS=0;const yn=new st,uc=new yt,Xr=new L,fn=new Rr,no=new Rr,Rt=new L;class vn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ev(e)?bv:Pv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fn.min,no.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,no.max),fn.expandByPoint(Rt)):(fn.expandByPoint(no.min),fn.expandByPoint(no.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Rt.fromBufferAttribute(a,u),l&&(Xr.fromBufferAttribute(e,u),Rt.add(Xr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;const u=new L,f=new L,h=new L,d=new Ae,m=new Ae,_=new Ae,y=new L,p=new L;function c(C,X,x){u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,X),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,X),_.fromBufferAttribute(s,x),f.sub(u),h.sub(u),m.sub(d),_.sub(d);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(w),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(w),a[C].add(y),a[X].add(y),a[x].add(y),l[C].add(p),l[X].add(p),l[x].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,X=g.length;C<X;++C){const x=g[C],w=x.start,O=x.count;for(let k=w,H=w+O;k<H;k+=3)c(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new L,M=new L,b=new L,P=new L;function E(C){b.fromBufferAttribute(r,C),P.copy(b);const X=a[C];v.copy(X),v.sub(b.multiplyScalar(b.dot(X))).normalize(),M.crossVectors(P,X);const w=M.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,w)}for(let C=0,X=g.length;C<X;++C){const x=g[C],w=x.start,O=x.count;for(let k=w,H=w+O;k<H;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,u=new L,f=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let c=0;c<f;c++)d[_++]=u[m++]}return new on(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new st,ir=new Av,Ca=new Ko,sm=new L,Ra=new L,Pa=new L,ba=new L,cc=new L,La=new L,om=new L,Da=new L;class en extends yt{constructor(e=new vn,n=new ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(cc.fromBufferAttribute(h,e),o?La.addScaledVector(cc,f):La.addScaledVector(cc.sub(n),f))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Ca.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ca,sm)===null||ir.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),ir.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const p=d[_],c=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,b=v;M<b;M+=3){const P=a.getX(M),E=a.getX(M+1),C=a.getX(M+2);r=Ia(this,c,e,i,u,f,h,P,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,c=y;p<c;p+=3){const g=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=Ia(this,o,e,i,u,f,h,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const p=d[_],c=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,b=v;M<b;M+=3){const P=M,E=M+1,C=M+2;r=Ia(this,c,e,i,u,f,h,P,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,c=y;p<c;p+=3){const g=p,v=p+1,M=p+2;r=Ia(this,o,e,i,u,f,h,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function YS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vi,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Da);return u<n.near||u>n.far?null:{distance:u,point:Da.clone(),object:t}}function Ia(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ra),t.getVertexPosition(l,Pa),t.getVertexPosition(u,ba);const f=YS(t,e,n,i,Ra,Pa,ba,om);if(f){const h=new L;wn.getBarycoord(om,Ra,Pa,ba,h),r&&(f.uv=wn.getInterpolatedAttribute(r,a,l,u,h,new Ae)),s&&(f.uv1=wn.getInterpolatedAttribute(s,a,l,u,h,new Ae)),o&&(f.normal=wn.getInterpolatedAttribute(o,a,l,u,h,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new L,materialIndex:0};wn.getNormal(Ra,Pa,ba,d.normal),f.face=d,f.barycoord=h}return f}class Zo extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(h,2));function _(y,p,c,g,v,M,b,P,E,C,X){const x=M/E,w=b/C,O=M/2,k=b/2,H=P/2,Z=E+1,W=C+1;let Q=0,A=0;const F=new L;for(let j=0;j<W;j++){const ee=j*w-k;for(let fe=0;fe<Z;fe++){const Se=fe*x-O;F[y]=Se*g,F[p]=ee*v,F[c]=H,u.push(F.x,F.y,F.z),F[y]=0,F[p]=0,F[c]=P>0?1:-1,f.push(F.x,F.y,F.z),h.push(fe/E),h.push(1-j/C),Q+=1}}for(let j=0;j<C;j++)for(let ee=0;ee<E;ee++){const fe=d+ee+Z*j,Se=d+ee+Z*(j+1),V=d+(ee+1)+Z*(j+1),q=d+(ee+1)+Z*j;l.push(fe,Se,q),l.push(Se,V,q),A+=6}a.addGroup(m,A,X),m+=A,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function $S(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const qS={clone:ks,merge:Gt};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=$S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dv extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new L,am=new Ae,lm=new Ae;class En extends Dv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,am,lm),n.subVectors(lm,am)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Yr=1;class QS extends yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(jr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new En(jr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new En(jr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new En(jr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new En(jr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new En(jr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Iv extends jt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JS extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Iv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zo(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Xi});s.uniforms.tEquirect.value=n;const o=new en(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=zn),new QS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fc=new L,eM=new L,tM=new Fe;class ur{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(eM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tM.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Ko,Ua=new L;class mh{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],y=r[10],p=r[11],c=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,p-m,M-c).normalize(),i[1].setComponents(l+s,d+u,p+m,M+c).normalize(),i[2].setComponents(l+o,d+f,p+_,M+g).normalize(),i[3].setComponents(l-o,d-f,p-_,M-g).normalize(),i[4].setComponents(l-a,d-h,p-y,M-v).normalize(),n===fi)i[5].setComponents(l+a,d+h,p+y,M+v).normalize();else if(n===Hl)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,f);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class cu extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],_=[],y=[],p=[];for(let c=0;c<f;c++){const g=c*d-o;for(let v=0;v<u;v++){const M=v*h-s;_.push(M,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,M=g+u*(c+1),b=g+1+u*(c+1),P=g+1+u*c;m.push(v,M,P),m.push(M,b,P)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:iM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:oM,alphatest_fragment:aM,alphatest_pars_fragment:lM,aomap_fragment:uM,aomap_pars_fragment:cM,batching_pars_vertex:fM,batching_vertex:dM,begin_vertex:hM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:wM,color_vertex:TM,common:AM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:RM,displacementmap_pars_vertex:PM,displacementmap_vertex:bM,emissivemap_fragment:LM,emissivemap_pars_fragment:DM,colorspace_fragment:IM,colorspace_pars_fragment:UM,envmap_fragment:NM,envmap_common_pars_fragment:FM,envmap_pars_fragment:OM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:qM,envmap_vertex:zM,fog_vertex:BM,fog_pars_vertex:HM,fog_fragment:VM,fog_pars_fragment:GM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:YM,lights_pars_begin:$M,lights_toon_fragment:KM,lights_toon_pars_fragment:ZM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:uE,map_pars_fragment:cE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:wE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:PE,opaque_fragment:bE,packing:LE,premultiplied_alpha_fragment:DE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:NE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:zE,shadowmap_vertex:BE,shadowmask_pars_fragment:HE,skinbase_vertex:VE,skinning_pars_vertex:GE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:jE,specularmap_pars_fragment:YE,tonemapping_fragment:$E,tonemapping_pars_fragment:qE,transmission_fragment:KE,transmission_pars_fragment:ZE,uv_pars_fragment:QE,uv_pars_vertex:JE,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:o1,cube_frag:a1,depth_vert:l1,depth_frag:u1,distanceRGBA_vert:c1,distanceRGBA_frag:f1,equirect_vert:d1,equirect_frag:h1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:M1,meshnormal_frag:E1,meshphong_vert:w1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:C1,meshtoon_vert:R1,meshtoon_frag:P1,points_vert:b1,points_frag:L1,shadow_vert:D1,shadow_frag:I1,sprite_vert:U1,sprite_frag:N1},ae={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Yn={basic:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Gt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Gt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Gt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Gt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Gt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Gt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Gt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Gt([ae.lights,ae.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Yn.physical={uniforms:Gt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Na={r:0,b:0,g:0},sr=new Zn,F1=new st;function O1(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const M=_(g);M===null?c(a,l):M&&M.isColor&&(c(M,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===lu)?(f===void 0&&(f=new en(new Zo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:ks(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(v.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(sr)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ut,(h!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new en(new cu(2,2),new qi({name:"BackgroundMaterial",uniforms:ks(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,v){g.getRGB(Na,Lv(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:y,addToRenderList:p}}function k1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,w,O,k,H){let Z=!1;const W=h(k,O,w);s!==W&&(s=W,u(s.object)),Z=m(x,k,O,H),Z&&_(x,k,O,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(x,w,O,k),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function h(x,w,O){const k=O.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let Z=H[w.id];Z===void 0&&(Z={},H[w.id]=Z);let W=Z[k];return W===void 0&&(W=d(l()),Z[k]=W),W}function d(x){const w=[],O=[],k=[];for(let H=0;H<n;H++)w[H]=0,O[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:x,attributes:{},index:null}}function m(x,w,O,k){const H=s.attributes,Z=w.attributes;let W=0;const Q=O.getAttributes();for(const A in Q)if(Q[A].location>=0){const j=H[A];let ee=Z[A];if(ee===void 0&&(A==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),A==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function _(x,w,O,k){const H={},Z=w.attributes;let W=0;const Q=O.getAttributes();for(const A in Q)if(Q[A].location>=0){let j=Z[A];j===void 0&&(A==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),A==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),H[A]=ee,W++}s.attributes=H,s.attributesNum=W,s.index=k}function y(){const x=s.newAttributes;for(let w=0,O=x.length;w<O;w++)x[w]=0}function p(x){c(x,0)}function c(x,w){const O=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;O[x]=1,k[x]===0&&(t.enableVertexAttribArray(x),k[x]=1),H[x]!==w&&(t.vertexAttribDivisor(x,w),H[x]=w)}function g(){const x=s.newAttributes,w=s.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==x[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function v(x,w,O,k,H,Z,W){W===!0?t.vertexAttribIPointer(x,w,O,H,Z):t.vertexAttribPointer(x,w,O,k,H,Z)}function M(x,w,O,k){y();const H=k.attributes,Z=O.getAttributes(),W=w.defaultAttributeValues;for(const Q in Z){const A=Z[Q];if(A.location>=0){let F=H[Q];if(F===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(F=x.instanceColor)),F!==void 0){const j=F.normalized,ee=F.itemSize,fe=e.get(F);if(fe===void 0)continue;const Se=fe.buffer,V=fe.type,q=fe.bytesPerElement,oe=V===t.INT||V===t.UNSIGNED_INT||F.gpuType===oh;if(F.isInterleavedBufferAttribute){const se=F.data,De=se.stride,Te=F.offset;if(se.isInstancedInterleavedBuffer){for(let He=0;He<A.locationSize;He++)c(A.location+He,se.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let He=0;He<A.locationSize;He++)p(A.location+He);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let He=0;He<A.locationSize;He++)v(A.location+He,ee/A.locationSize,V,j,De*q,(Te+ee/A.locationSize*He)*q,oe)}else{if(F.isInstancedBufferAttribute){for(let se=0;se<A.locationSize;se++)c(A.location+se,F.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let se=0;se<A.locationSize;se++)p(A.location+se);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let se=0;se<A.locationSize;se++)v(A.location+se,ee/A.locationSize,V,j,ee*q,ee/A.locationSize*se*q,oe)}}else if(W!==void 0){const j=W[Q];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(A.location,j);break;case 3:t.vertexAttrib3fv(A.location,j);break;case 4:t.vertexAttrib4fv(A.location,j);break;default:t.vertexAttrib1fv(A.location,j)}}}}g()}function b(){C();for(const x in i){const w=i[x];for(const O in w){const k=w[O];for(const H in k)f(k[H].object),delete k[H];delete w[O]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const O in w){const k=w[O];for(const H in k)f(k[H].object),delete k[H];delete w[O]}delete i[x.id]}function E(x){for(const w in i){const O=i[w];if(O[x.id]===void 0)continue;const k=O[x.id];for(const H in k)f(k[H].object),delete k[H];delete O[x.id]}}function C(){X(),o=!0,s!==r&&(s=r,u(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function z1(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}function l(u,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)o(u[_],f[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function B1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Hn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==xi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ci&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:b,maxSamples:P}}function H1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,v=g*4;let M=c.clippingState||null;l.value=M,M=f(_,d,v,m);for(let b=0;b!==v;++b)M[b]=n[b];c.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const c=m+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,M=m;v!==y;++v,M+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function V1(t){let e=new WeakMap;function n(o,a){return a===Df?o.mapping=Us:a===If&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Df||a===If)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new JS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gh extends Dv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,um=[.125,.215,.35,.446,.526,.582],dr=20,dc=new gh,cm=new Oe;let hc=null,pc=0,mc=0,gc=!1;const cr=(1+Math.sqrt(5))/2,$r=1/cr,fm=[new L(-cr,$r,0),new L(cr,$r,0),new L(-$r,0,cr),new L($r,0,cr),new L(0,cr,-$r),new L(0,cr,$r),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:qo,format:Hn,colorSpace:Ji,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(s)),this._blurMaterial=W1(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cm),f.toneMapping=ji,f.autoClear=!1;const m=new ph({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new en(new Zo,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(cm),y=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;Fa(r,g*v,c>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fm[(r-s-1)%fm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new en(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*dr-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):dr;p>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const c=[];let g=0;for(let E=0;E<dr;++E){const C=E/y,X=Math.exp(-C*C/2);c.push(X),E===0?g+=X:E<p&&(g+=2*X)}for(let E=0;E<c.length;E++)c[E]=c[E]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-ms?r-v+ms:0),P=4*(this._cubeSize-M);Fa(n,b,P,3*M,2*M),l.setRenderTarget(n),l.render(h,dc)}}function G1(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ms?l=um[o-t+ms-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,y=3,p=2,c=1,g=new Float32Array(y*_*m),v=new Float32Array(p*_*m),M=new Float32Array(c*_*m);for(let P=0;P<m;P++){const E=P%3*2/3-1,C=P>2?0:-1,X=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];g.set(X,y*_*P),v.set(d,p*_*P);const x=[P,P,P,P,P,P];M.set(x,c*_*P)}const b=new vn;b.setAttribute("position",new on(g,y)),b.setAttribute("uv",new on(v,p)),b.setAttribute("faceIndex",new on(M,c)),e.push(b),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function W1(t,e,n){const i=new Float32Array(dr),r=new L(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function pm(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mm(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Df||l===If,f=l===Us||l===Ns;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function j1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&dl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Y1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let p=0,c=y.length;p<c;p++)e.remove(y[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,c=y.length;p<c;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,M=g.length;v<M;v+=3){const b=g[v+0],P=g[v+1],E=g[v+2];d.push(b,P,P,E,E,b)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const b=v+0,P=v+1,E=v+2;d.push(b,P,P,E,E,b)}}else return;const p=new(Ev(d)?bv:Pv)(d,1);p.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function $1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function u(d,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,d*o,_),n.update(m,i,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let c=0;c<_;c++)p+=m[c];n.update(p,i,1)}function h(d,m,_,y){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<d.length;c++)u(d[c]/o,m[c],y[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,y,0,_);let c=0;for(let g=0;g<_;g++)c+=m[g];for(let g=0;g<y.length;g++)n.update(c,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function q1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function K1(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let b=a.attributes.position.count*M,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*P*4*h),C=new Tv(E,b,P,h);C.type=ci,C.needsUpdate=!0;const X=M*4;for(let w=0;w<h;w++){const O=c[w],k=g[w],H=v[w],Z=b*P*4*w;for(let W=0;W<O.count;W++){const Q=W*X;_===!0&&(r.fromBufferAttribute(O,W),E[Z+Q+0]=r.x,E[Z+Q+1]=r.y,E[Z+Q+2]=r.z,E[Z+Q+3]=0),y===!0&&(r.fromBufferAttribute(k,W),E[Z+Q+4]=r.x,E[Z+Q+5]=r.y,E[Z+Q+6]=r.z,E[Z+Q+7]=0),p===!0&&(r.fromBufferAttribute(H,W),E[Z+Q+8]=r.x,E[Z+Q+9]=r.y,E[Z+Q+10]=r.z,E[Z+Q+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new Ae(b,P)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Z1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Nv extends jt{constructor(e,n,i,r,s,o,a,l,u,f=ws){if(f!==ws&&f!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ws&&(i=Ar),i===void 0&&f===Os&&(i=Fs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fv=new jt,gm=new Nv(1,1),Ov=new Tv,kv=new OS,zv=new Iv,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),Ct(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Ct(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),Ct(n,i)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gm.compareFunction=Mv,s=gm):s=Fv,n.setTexture2D(e||s,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kv,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zv,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ov,r)}function _w(t){switch(t){case 5126:return Q1;case 35664:return J1;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return uw;case 36294:return cw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function vw(t,e){t.uniform1fv(this.addr,e)}function xw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function yw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function Sw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function Mw(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ew(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ww(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Tw(t,e){t.uniform1iv(this.addr,e)}function Aw(t,e){t.uniform2iv(this.addr,e)}function Cw(t,e){t.uniform3iv(this.addr,e)}function Rw(t,e){t.uniform4iv(this.addr,e)}function Pw(t,e){t.uniform1uiv(this.addr,e)}function bw(t,e){t.uniform2uiv(this.addr,e)}function Lw(t,e){t.uniform3uiv(this.addr,e)}function Dw(t,e){t.uniform4uiv(this.addr,e)}function Iw(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fv,s[o])}function Uw(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kv,s[o])}function Nw(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zv,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ov,s[o])}function Ow(t){switch(t){case 5126:return vw;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Pw;case 36294:return bw;case 36295:return Lw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Fw}}class kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_w(n.type)}}class zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ow(n.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function Hw(t,e,n){const i=t.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),o=_c.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mm(n,u===void 0?new kw(a,t,e):new zw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Bw(a),Mm(n,h)),n=h}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Hw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Vw=37297;let Gw=0;function Ww(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Xw(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Bl&&n===zl?i="LinearDisplayP3ToLinearSRGB":e===zl&&n===Bl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case uu:return[i,"LinearTransferOETF"];case On:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ww(t.getShaderSource(e),o)}else return r}function jw(t,e){const n=Xw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Yw(t,e){let n;switch(e){case qy:n="Linear";break;case Ky:n="Reinhard";break;case Zy:n="Cineon";break;case Qy:n="ACESFilmic";break;case eS:n="AgX";break;case uv:n="Neutral";break;case Jy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oa=new L;function $w(){Qe.getLuminanceCoefficients(Oa);const t=Oa.x.toFixed(4),e=Oa.y.toFixed(4),n=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Zw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(t){return t.replace(Qw,eT)}const Jw=new Map;function eT(t,e){let n=Ne[e];if(n===void 0){const i=Jw.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ud(n)}const tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(tT,nT)}function nT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===av?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function rT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function oT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lv:e="ENVMAP_BLENDING_MULTIPLY";break;case Yy:e="ENVMAP_BLENDING_MIX";break;case $y:e="ENVMAP_BLENDING_ADD";break}return e}function aT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iT(n),u=rT(n),f=sT(n),h=oT(n),d=aT(n),m=qw(n),_=Kw(s),y=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fo).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fo).join(`
`),c.length>0&&(c+=`
`)):(p=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),c=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Ne.tonemapping_pars_fragment:"",n.toneMapping!==ji?Yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,jw("linearToOutputTexel",n.outputColorSpace),$w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=ud(o),o=Tm(o,n),o=Am(o,n),a=ud(a),a=Tm(a,n),a=Am(a,n),o=Cm(o),a=Cm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+p+o,M=g+c+a,b=Em(r,r.VERTEX_SHADER,v),P=Em(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,P),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function E(w){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(P).trim();let Z=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,P);else{const Q=wm(r,b,"vertex"),A=wm(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+Q+`
`+A)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||H==="")&&(W=!1);W&&(w.diagnostics={runnable:Z,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:H,prefix:c}})}r.deleteShader(b),r.deleteShader(P),C=new hl(r,y),X=Zw(r,y)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let X;this.getAttributes=function(){return X===void 0&&E(this),X};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Vw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=P,this}let uT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=uT++,this.code=e,this.usedTimes=0}}function dT(t,e,n,i,r,s,o){const a=new Cv,l=new cT,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function c(x,w,O,k,H){const Z=k.fog,W=H.geometry,Q=x.isMeshStandardMaterial?k.environment:null,A=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),F=A&&A.mapping===lu?A.image.height:null,j=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=ee!==void 0?ee.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let V,q,oe,se;if(j){const Zt=Yn[j];V=Zt.vertexShader,q=Zt.fragmentShader}else V=x.vertexShader,q=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const De=t.getRenderTarget(),Te=H.isInstancedMesh===!0,He=H.isBatchedMesh===!0,nt=!!x.map,Ve=!!x.matcap,D=!!A,an=!!x.aoMap,ze=!!x.lightMap,Xe=!!x.bumpMap,Pe=!!x.normalMap,ot=!!x.displacementMap,Ie=!!x.emissiveMap,R=!!x.metalnessMap,S=!!x.roughnessMap,z=x.anisotropy>0,K=x.clearcoat>0,te=x.dispersion>0,$=x.iridescence>0,Me=x.sheen>0,le=x.transmission>0,ge=z&&!!x.anisotropyMap,je=K&&!!x.clearcoatMap,ie=K&&!!x.clearcoatNormalMap,_e=K&&!!x.clearcoatRoughnessMap,be=$&&!!x.iridescenceMap,Le=$&&!!x.iridescenceThicknessMap,ve=Me&&!!x.sheenColorMap,Be=Me&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,it=!!x.specularColorMap,I=!!x.specularIntensityMap,de=le&&!!x.transmissionMap,Y=le&&!!x.thicknessMap,J=!!x.gradientMap,ue=!!x.alphaMap,he=x.alphaTest>0,Ge=!!x.alphaHash,St=!!x.extensions;let Kt=ji;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Ye={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:q,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:He,batchingColor:He&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:Ve,envMap:D,envMapMode:D&&A.mapping,envMapCubeUVHeight:F,aoMap:an,lightMap:ze,bumpMap:Xe,normalMap:Pe,displacementMap:m&&ot,emissiveMap:Ie,normalMapObjectSpace:Pe&&x.normalMapType===rS,normalMapTangentSpace:Pe&&x.normalMapType===Sv,metalnessMap:R,roughnessMap:S,anisotropy:z,anisotropyMap:ge,clearcoat:K,clearcoatMap:je,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:te,iridescence:$,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:it,specularIntensityMap:I,transmission:le,transmissionMap:de,thicknessMap:Y,gradientMap:J,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:he,alphaHash:Ge,combine:x.combine,mapUv:nt&&p(x.map.channel),aoMapUv:an&&p(x.aoMap.channel),lightMapUv:ze&&p(x.lightMap.channel),bumpMapUv:Xe&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:ot&&p(x.displacementMap.channel),emissiveMapUv:Ie&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:ge&&p(x.anisotropyMap.channel),clearcoatMapUv:je&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(x.sheenRoughnessMap.channel),specularMapUv:Ue&&p(x.specularMap.channel),specularColorMapUv:it&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:de&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:ue&&p(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(nt||ue),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ai,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function g(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)w.push(O),w.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(v(w,x),M(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const w=y[x.type];let O;if(w){const k=Yn[w];O=qS.clone(k.uniforms)}else O=x.uniforms;return O}function P(x,w){let O;for(let k=0,H=f.length;k<H;k++){const Z=f[k];if(Z.cacheKey===w){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new lT(t,w,x,s),f.push(O)),O}function E(x){if(--x.usedTimes===0){const w=f.indexOf(x);f[w]=f[f.length-1],f.pop(),x.destroy()}}function C(x){l.remove(x)}function X(){l.dispose()}return{getParameters:c,getProgramCacheKey:g,getUniforms:b,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:f,dispose:X}}function hT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,_,y,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=y,c.group=p),e++,c}function a(h,d,m,_,y,p){const c=o(h,d,m,_,y,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,_,y,p){const c=o(h,d,m,_,y,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||pT),i.length>1&&i.sort(d||Pm),r.length>1&&r.sort(d||Pm)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function mT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bm,t.set(i,[o])):r>=s.length?(o=new bm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Oe};break;case"SpotLight":n={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function _T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vT=0;function xT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yT(t){const e=new gT,n=_T(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,s=new st,o=new st;function a(u){let f=0,h=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,_=0,y=0,p=0,c=0,g=0,v=0,M=0,b=0,P=0,E=0;u.sort(xT);for(let X=0,x=u.length;X<x;X++){const w=u[X],O=w.color,k=w.intensity,H=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=O.r*k,h+=O.g*k,d+=O.b*k;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],k);E++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,A=n.get(w);A.shadowIntensity=Q.intensity,A.shadowBias=Q.bias,A.shadowNormalBias=Q.normalBias,A.shadowRadius=Q.radius,A.shadowMapSize=Q.mapSize,i.directionalShadow[m]=A,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,g++}i.directional[m]=W,m++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(O).multiplyScalar(k),W.distance=H,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[y]=W;const Q=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,Q.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[y]=Q.matrix,w.castShadow){const A=n.get(w);A.shadowIntensity=Q.intensity,A.shadowBias=Q.bias,A.shadowNormalBias=Q.normalBias,A.shadowRadius=Q.radius,A.shadowMapSize=Q.mapSize,i.spotShadow[y]=A,i.spotShadowMap[y]=Z,M++}y++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=W,p++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const Q=w.shadow,A=n.get(w);A.shadowIntensity=Q.intensity,A.shadowBias=Q.bias,A.shadowNormalBias=Q.normalBias,A.shadowRadius=Q.radius,A.shadowMapSize=Q.mapSize,A.shadowCameraNear=Q.camera.near,A.shadowCameraFar=Q.camera.far,i.pointShadow[_]=A,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=W,_++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(k),W.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[c]=W,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==p||C.hemiLength!==c||C.numDirectionalShadows!==g||C.numPointShadows!==v||C.numSpotShadows!==M||C.numSpotMaps!==b||C.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=E,C.directionalLength=m,C.pointLength=_,C.spotLength=y,C.rectAreaLength=p,C.hemiLength=c,C.numDirectionalShadows=g,C.numPointShadows=v,C.numSpotShadows=M,C.numSpotMaps=b,C.numLightProbes=E,i.version=vT++)}function l(u,f){let h=0,d=0,m=0,_=0,y=0;const p=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const v=u[c];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Lm(t){const e=new yT(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ST(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lm(t),e.set(r,[a])):s>=o.length?(a=new Lm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class MT extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AT(t,e,n){let i=new mh;const r=new Ae,s=new Ae,o=new _t,a=new MT({depthPacking:iS}),l=new ET,u={},f=n.maxTextureSize,h={[vi]:sn,[sn]:vi,[ai]:ai},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:wT,fragmentShader:TT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new en(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=av;let c=this.type;this.render=function(P,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=c!==ri&&this.type===ri,H=c===ri&&this.type!==ri;for(let Z=0,W=P.length;Z<W;Z++){const Q=P[Z],A=Q.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);const F=A.getFrameExtents();if(r.multiply(F),s.copy(A.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,A.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,A.mapSize.y=s.y)),A.map===null||k===!0||H===!0){const ee=this.type!==ri?{minFilter:An,magFilter:An}:{};A.map!==null&&A.map.dispose(),A.map=new Cr(r.x,r.y,ee),A.map.texture.name=Q.name+".shadowMap",A.camera.updateProjectionMatrix()}t.setRenderTarget(A.map),t.clear();const j=A.getViewportCount();for(let ee=0;ee<j;ee++){const fe=A.getViewport(ee);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(o),A.updateMatrices(Q,ee),i=A.getFrustum(),M(E,C,A.camera,Q,this.type)}A.isPointLightShadow!==!0&&this.type===ri&&g(A,C),A.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(X,x,w)};function g(P,E){const C=e.update(y);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Cr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(E,null,C,d,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(E,null,C,m,y,null)}function v(P,E,C,X){let x=null;const w=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)x=w;else if(x=C.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=x.uuid,k=E.uuid;let H=u[O];H===void 0&&(H={},u[O]=H);let Z=H[k];Z===void 0&&(Z=x.clone(),H[k]=Z,E.addEventListener("dispose",b)),x=Z}if(x.visible=E.visible,x.wireframe=E.wireframe,X===ri?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=t.properties.get(x);O.light=C}return x}function M(P,E,C,X,x){if(P.visible===!1)return;if(P.layers.test(E.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===ri)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const k=e.update(P),H=P.material;if(Array.isArray(H)){const Z=k.groups;for(let W=0,Q=Z.length;W<Q;W++){const A=Z[W],F=H[A.materialIndex];if(F&&F.visible){const j=v(P,F,X,x);P.onBeforeShadow(t,P,E,C,k,j,A),t.renderBufferDirect(C,null,k,j,P,A),P.onAfterShadow(t,P,E,C,k,j,A)}}}else if(H.visible){const Z=v(P,H,X,x);P.onBeforeShadow(t,P,E,C,k,Z,null),t.renderBufferDirect(C,null,k,Z,P,null),P.onAfterShadow(t,P,E,C,k,Z,null)}}const O=P.children;for(let k=0,H=O.length;k<H;k++)M(O[k],E,C,X,x)}function b(P){P.target.removeEventListener("dispose",b);for(const C in u){const X=u[C],x=P.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const CT={[Tf]:Af,[Cf]:bf,[Rf]:Lf,[Is]:Pf,[Af]:Tf,[bf]:Cf,[Lf]:Rf,[Pf]:Is};function RT(t){function e(){let I=!1;const de=new _t;let Y=null;const J=new _t(0,0,0,0);return{setMask:function(ue){Y!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){I=ue},setClear:function(ue,he,Ge,St,Kt){Kt===!0&&(ue*=St,he*=St,Ge*=St),de.set(ue,he,Ge,St),J.equals(de)===!1&&(t.clearColor(ue,he,Ge,St),J.copy(de))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,Y=null,J=null,ue=null;return{setReversed:function(he){de=he},setTest:function(he){he?oe(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(he){Y!==he&&!I&&(t.depthMask(he),Y=he)},setFunc:function(he){if(de&&(he=CT[he]),J!==he){switch(he){case Tf:t.depthFunc(t.NEVER);break;case Af:t.depthFunc(t.ALWAYS);break;case Cf:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case Rf:t.depthFunc(t.EQUAL);break;case Pf:t.depthFunc(t.GEQUAL);break;case bf:t.depthFunc(t.GREATER);break;case Lf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=he}},setLocked:function(he){I=he},setClear:function(he){ue!==he&&(t.clearDepth(he),ue=he)},reset:function(){I=!1,Y=null,J=null,ue=null}}}function i(){let I=!1,de=null,Y=null,J=null,ue=null,he=null,Ge=null,St=null,Kt=null;return{setTest:function(Ye){I||(Ye?oe(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!I&&(t.stencilMask(Ye),de=Ye)},setFunc:function(Ye,Zt,Qn){(Y!==Ye||J!==Zt||ue!==Qn)&&(t.stencilFunc(Ye,Zt,Qn),Y=Ye,J=Zt,ue=Qn)},setOp:function(Ye,Zt,Qn){(he!==Ye||Ge!==Zt||St!==Qn)&&(t.stencilOp(Ye,Zt,Qn),he=Ye,Ge=Zt,St=Qn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){Kt!==Ye&&(t.clearStencil(Ye),Kt=Ye)},reset:function(){I=!1,de=null,Y=null,J=null,ue=null,he=null,Ge=null,St=null,Kt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,_=!1,y=null,p=null,c=null,g=null,v=null,M=null,b=null,P=new Oe(0,0,0),E=0,C=!1,X=null,x=null,w=null,O=null,k=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=W>=2);let A=null,F={};const j=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),fe=new _t().fromArray(j),Se=new _t().fromArray(ee);function V(I,de,Y,J){const ue=new Uint8Array(4),he=t.createTexture();t.bindTexture(I,he),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Y;Ge++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(de+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return he}const q={};q[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),s.setFunc(Is),ze(!1),Xe(kp),oe(t.CULL_FACE),D(Xi);function oe(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function se(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function De(I,de){return f[I]!==de?(t.bindFramebuffer(I,de),f[I]=de,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(I,de){let Y=d,J=!1;if(I){Y=h.get(de),Y===void 0&&(Y=[],h.set(de,Y));const ue=I.textures;if(Y.length!==ue.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ge=ue.length;he<Ge;he++)Y[he]=t.COLOR_ATTACHMENT0+he;Y.length=ue.length,J=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,J=!0);J&&t.drawBuffers(Y)}function He(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const nt={[fr]:t.FUNC_ADD,[by]:t.FUNC_SUBTRACT,[Ly]:t.FUNC_REVERSE_SUBTRACT};nt[Dy]=t.MIN,nt[Iy]=t.MAX;const Ve={[Uy]:t.ZERO,[Ny]:t.ONE,[Fy]:t.SRC_COLOR,[Ef]:t.SRC_ALPHA,[Vy]:t.SRC_ALPHA_SATURATE,[By]:t.DST_COLOR,[ky]:t.DST_ALPHA,[Oy]:t.ONE_MINUS_SRC_COLOR,[wf]:t.ONE_MINUS_SRC_ALPHA,[Hy]:t.ONE_MINUS_DST_COLOR,[zy]:t.ONE_MINUS_DST_ALPHA,[Gy]:t.CONSTANT_COLOR,[Wy]:t.ONE_MINUS_CONSTANT_COLOR,[Xy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function D(I,de,Y,J,ue,he,Ge,St,Kt,Ye){if(I===Xi){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(oe(t.BLEND),_=!0),I!==Py){if(I!==y||Ye!==C){if((p!==fr||v!==fr)&&(t.blendEquation(t.FUNC_ADD),p=fr,v=fr),Ye)switch(I){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}c=null,g=null,M=null,b=null,P.set(0,0,0),E=0,y=I,C=Ye}return}ue=ue||de,he=he||Y,Ge=Ge||J,(de!==p||ue!==v)&&(t.blendEquationSeparate(nt[de],nt[ue]),p=de,v=ue),(Y!==c||J!==g||he!==M||Ge!==b)&&(t.blendFuncSeparate(Ve[Y],Ve[J],Ve[he],Ve[Ge]),c=Y,g=J,M=he,b=Ge),(St.equals(P)===!1||Kt!==E)&&(t.blendColor(St.r,St.g,St.b,Kt),P.copy(St),E=Kt),y=I,C=!1}function an(I,de){I.side===ai?se(t.CULL_FACE):oe(t.CULL_FACE);let Y=I.side===sn;de&&(Y=!Y),ze(Y),I.blending===Es&&I.transparent===!1?D(Xi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){X!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),X=I)}function Xe(I){I!==Ay?(oe(t.CULL_FACE),I!==x&&(I===kp?t.cullFace(t.BACK):I===Cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),x=I}function Pe(I){I!==w&&(Z&&t.lineWidth(I),w=I)}function ot(I,de,Y){I?(oe(t.POLYGON_OFFSET_FILL),(O!==de||k!==Y)&&(t.polygonOffset(de,Y),O=de,k=Y)):se(t.POLYGON_OFFSET_FILL)}function Ie(I){I?oe(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+H-1),A!==I&&(t.activeTexture(I),A=I)}function S(I,de,Y){Y===void 0&&(A===null?Y=t.TEXTURE0+H-1:Y=A);let J=F[Y];J===void 0&&(J={type:void 0,texture:void 0},F[Y]=J),(J.type!==I||J.texture!==de)&&(A!==Y&&(t.activeTexture(Y),A=Y),t.bindTexture(I,de||q[I]),J.type=I,J.texture=de)}function z(){const I=F[A];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){fe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function ve(I){Se.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function Be(I,de){let Y=l.get(de);Y===void 0&&(Y=new WeakMap,l.set(de,Y));let J=Y.get(I);J===void 0&&(J=t.getUniformBlockIndex(de,I.name),Y.set(I,J))}function Ue(I,de){const J=l.get(de).get(I);a.get(de)!==J&&(t.uniformBlockBinding(de,J,I.__bindingPointIndex),a.set(de,J))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},A=null,F={},f={},h=new WeakMap,d=[],m=null,_=!1,y=null,p=null,c=null,g=null,v=null,M=null,b=null,P=new Oe(0,0,0),E=0,C=!1,X=null,x=null,w=null,O=null,k=null,fe.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:se,bindFramebuffer:De,drawBuffers:Te,useProgram:He,setBlending:D,setMaterial:an,setFlipSided:ze,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:ot,setScissorTest:Ie,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:_e,texImage3D:be,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:je,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:it}}function Dm(t,e,n,i){const r=PT(i);switch(n){case pv:return t*e;case gv:return t*e;case _v:return t*e*2;case vv:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case xv:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case mv:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ul:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:case zf:return Math.max(t,16)*Math.max(e,8)/4;case Ff:case kf:return Math.max(t,8)*Math.max(e,8)/2;case Bf:case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fl:case id:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yv:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case od:case ad:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PT(t){switch(t){case xi:case fv:return{byteLength:1,components:1};case Vo:case dv:case qo:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Ar:case oh:case ci:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return m?new OffscreenCanvas(R,S):Vl("canvas")}function y(R,S,z){let K=1;const te=Ie(R);if((te.width>z||te.height>z)&&(K=z/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(K*te.width),Me=Math.floor(K*te.height);h===void 0&&(h=_($,Me));const le=S?_($,Me):h;return le.width=$,le.height=Me,le.getContext("2d").drawImage(R,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Me+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==An&&R.minFilter!==zn}function c(R){t.generateMipmap(R)}function g(R,S,z,K,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===t.RED&&(z===t.FLOAT&&($=t.R32F),z===t.HALF_FLOAT&&($=t.R16F),z===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.R8UI),z===t.UNSIGNED_SHORT&&($=t.R16UI),z===t.UNSIGNED_INT&&($=t.R32UI),z===t.BYTE&&($=t.R8I),z===t.SHORT&&($=t.R16I),z===t.INT&&($=t.R32I)),S===t.RG&&(z===t.FLOAT&&($=t.RG32F),z===t.HALF_FLOAT&&($=t.RG16F),z===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RG8UI),z===t.UNSIGNED_SHORT&&($=t.RG16UI),z===t.UNSIGNED_INT&&($=t.RG32UI),z===t.BYTE&&($=t.RG8I),z===t.SHORT&&($=t.RG16I),z===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGB8UI),z===t.UNSIGNED_SHORT&&($=t.RGB16UI),z===t.UNSIGNED_INT&&($=t.RGB32UI),z===t.BYTE&&($=t.RGB8I),z===t.SHORT&&($=t.RGB16I),z===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGBA8UI),z===t.UNSIGNED_SHORT&&($=t.RGBA16UI),z===t.UNSIGNED_INT&&($=t.RGBA32UI),z===t.BYTE&&($=t.RGBA8I),z===t.SHORT&&($=t.RGBA16I),z===t.INT&&($=t.RGBA32I)),S===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const Me=te?kl:Qe.getTransfer(K);z===t.FLOAT&&($=t.RGBA32F),z===t.HALF_FLOAT&&($=t.RGBA16F),z===t.UNSIGNED_BYTE&&($=Me===ut?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(R,S){let z;return R?S===null||S===Ar||S===Fs?z=t.DEPTH24_STENCIL8:S===ci?z=t.DEPTH32F_STENCIL8:S===Vo&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ar||S===Fs?z=t.DEPTH_COMPONENT24:S===ci?z=t.DEPTH_COMPONENT32F:S===Vo&&(z=t.DEPTH_COMPONENT16),z}function M(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),E(S),S.isVideoTexture&&f.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),X(S)}function E(R){const S=i.get(R);if(S.__webglInit===void 0)return;const z=R.source,K=d.get(z);if(K){const te=K[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(K).length===0&&d.delete(z)}i.remove(R)}function C(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const z=R.source,K=d.get(z);delete K[S.__cacheKey],o.memory.textures--}function X(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let te=0;te<S.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[K][te]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let K=0,te=z.length;K<te;K++){const $=i.get(z[K]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(R)}let x=0;function w(){x=0}function O(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const z=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,R,S);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function Z(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Se(z,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function W(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Se(z,R,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function Q(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){V(z,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const A={[Uf]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},F={[An]:t.NEAREST,[tS]:t.NEAREST_MIPMAP_NEAREST,[_a]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Wu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},j={[sS]:t.NEVER,[fS]:t.ALWAYS,[oS]:t.LESS,[Mv]:t.LEQUAL,[aS]:t.EQUAL,[cS]:t.GEQUAL,[lS]:t.GREATER,[uS]:t.NOTEQUAL};function ee(R,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===Wu||S.magFilter===_a||S.magFilter===_r||S.minFilter===zn||S.minFilter===Wu||S.minFilter===_a||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,A[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,A[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,A[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,F[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,F[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,j[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===An||S.minFilter!==_a&&S.minFilter!==_r||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const K=S.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const $=k(S);if($!==R.__cacheKey){te[$]===void 0&&(te[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[$].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&C(S)),R.__cacheKey=$,R.__webglTexture=te[$].texture}return z}function Se(R,S,z){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);const te=fe(R,S),$=S.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+z);const Me=i.get($);if($.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const le=Qe.getPrimaries(Qe.workingColorSpace),ge=S.colorSpace===Ui?null:Qe.getPrimaries(S.colorSpace),je=S.colorSpace===Ui||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ie=y(S.image,!1,r.maxTextureSize);ie=ot(S,ie);const _e=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let Le=g(S.internalFormat,_e,be,S.colorSpace,S.isVideoTexture);ee(K,S);let ve;const Be=S.mipmaps,Ue=S.isVideoTexture!==!0,it=Me.__version===void 0||te===!0,I=$.dataReady,de=M(S,ie);if(S.isDepthTexture)Le=v(S.format===Os,S.type),it&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,null));else if(S.isDataTexture)if(Be.length>0){Ue&&it&&n.texStorage2D(t.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let Y=0,J=Be.length;Y<J;Y++)ve=Be[Y],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,_e,be,ve.data);S.generateMipmaps=!1}else Ue?(it&&n.texStorage2D(t.TEXTURE_2D,de,Le,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,Be[0].width,Be[0].height,ie.depth);for(let Y=0,J=Be.length;Y<J;Y++)if(ve=Be[Y],S.format!==Hn)if(_e!==null)if(Ue){if(I)if(S.layerUpdates.size>0){const ue=Dm(ve.width,ve.height,S.format,S.type);for(const he of S.layerUpdates){const Ge=ve.data.subarray(he*ue/ve.data.BYTES_PER_ELEMENT,(he+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,he,ve.width,ve.height,1,_e,Ge,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,_e,be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,ie.depth,0,_e,be,ve.data)}else{Ue&&it&&n.texStorage2D(t.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let Y=0,J=Be.length;Y<J;Y++)ve=Be[Y],S.format!==Hn?_e!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,_e,be,ve.data)}else if(S.isDataArrayTexture)if(Ue){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const Y=Dm(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const ue=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,_e,be,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(S.isData3DTexture)Ue?(it&&n.texStorage3D(t.TEXTURE_3D,de,Le,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(S.isFramebufferTexture){if(it)if(Ue)n.texStorage2D(t.TEXTURE_2D,de,Le,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let ue=0;ue<de;ue++)n.texImage2D(t.TEXTURE_2D,ue,Le,Y,J,0,_e,be,null),Y>>=1,J>>=1}}else if(Be.length>0){if(Ue&&it){const Y=Ie(Be[0]);n.texStorage2D(t.TEXTURE_2D,de,Le,Y.width,Y.height)}for(let Y=0,J=Be.length;Y<J;Y++)ve=Be[Y],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,be,ve):n.texImage2D(t.TEXTURE_2D,Y,Le,_e,be,ve);S.generateMipmaps=!1}else if(Ue){if(it){const Y=Ie(ie);n.texStorage2D(t.TEXTURE_2D,de,Le,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,be,ie);p(S)&&c(K),Me.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function V(R,S,z){if(S.image.length!==6)return;const K=fe(R,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const $=i.get(te);if(te.version!==$.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const Me=Qe.getPrimaries(Qe.workingColorSpace),le=S.colorSpace===Ui?null:Qe.getPrimaries(S.colorSpace),ge=S.colorSpace===Ui||Me===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!je&&!ie?_e[J]=y(S.image[J],!0,r.maxCubemapSize):_e[J]=ie?S.image[J].image:S.image[J],_e[J]=ot(S,_e[J]);const be=_e[0],Le=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Be=g(S.internalFormat,Le,ve,S.colorSpace),Ue=S.isVideoTexture!==!0,it=$.__version===void 0||K===!0,I=te.dataReady;let de=M(S,be);ee(t.TEXTURE_CUBE_MAP,S);let Y;if(je){Ue&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,be.width,be.height);for(let J=0;J<6;J++){Y=_e[J].mipmaps;for(let ue=0;ue<Y.length;ue++){const he=Y[ue];S.format!==Hn?Le!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,he.width,he.height,Le,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,he.width,he.height,Le,ve,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Be,he.width,he.height,0,Le,ve,he.data)}}}else{if(Y=S.mipmaps,Ue&&it){Y.length>0&&de++;const J=Ie(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Le,ve,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,_e[J].width,_e[J].height,0,Le,ve,_e[J].data);for(let ue=0;ue<Y.length;ue++){const Ge=Y[ue].image[J].image;Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ge.width,Ge.height,Le,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Be,Ge.width,Ge.height,0,Le,ve,Ge.data)}}else{Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,ve,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Le,ve,_e[J]);for(let ue=0;ue<Y.length;ue++){const he=Y[ue];Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Le,ve,he.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Be,Le,ve,he.image[J])}}}p(S)&&c(t.TEXTURE_CUBE_MAP),$.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function q(R,S,z,K,te,$){const Me=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ge=g(z.internalFormat,Me,le,z.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>$),_e=Math.max(1,S.height>>$);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,$,ge,ie,_e,S.depth,0,Me,le,null):n.texImage2D(te,$,ge,ie,_e,0,Me,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,i.get(z).__webglTexture,0,ze(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,i.get(z).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,te=K&&K.isDepthTexture?K.type:null,$=v(S.stencilBuffer,te),Me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=ze(S);Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,$,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const K=S.textures;for(let te=0;te<K.length;te++){const $=K[te],Me=s.convert($.format,$.colorSpace),le=s.convert($.type),ge=g($.internalFormat,Me,le,$.colorSpace),je=ze(S);z&&Xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ge,S.width,S.height):Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,te=ze(S);if(S.depthTexture.format===ws)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(S.depthTexture.format===Os)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function De(R){const S=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),oe(S.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),oe(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,S,z){const K=i.get(R);S!==void 0&&q(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&De(R)}function He(R){const S=R.texture,z=i.get(R),K=i.get(S);R.addEventListener("dispose",P);const te=R.textures,$=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)z.__webglFramebuffer[le][ge]=t.createFramebuffer()}else z.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)z.__webglFramebuffer[le]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Me)for(let le=0,ge=te.length;le<ge;le++){const je=i.get(te[le]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Xe(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const ge=te[le];z.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const je=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),_e=g(ge.internalFormat,je,ie,ge.colorSpace,R.isXRRenderTarget===!0),be=ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,z.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ee(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)q(z.__webglFramebuffer[le][ge],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else q(z.__webglFramebuffer[le],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(S)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let le=0,ge=te.length;le<ge;le++){const je=te[le],ie=i.get(je);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ee(t.TEXTURE_2D,je),q(z.__webglFramebuffer,R,je,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),p(je)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),ee(le,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)q(z.__webglFramebuffer[ge],R,S,t.COLOR_ATTACHMENT0,le,ge);else q(z.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,le,0);p(S)&&c(le),n.unbindTexture()}R.depthBuffer&&De(R)}function nt(R){const S=R.textures;for(let z=0,K=S.length;z<K;z++){const te=S[z];if(p(te)){const $=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(te).__webglTexture;n.bindTexture($,Me),c($),n.unbindTexture()}}}const Ve=[],D=[];function an(R){if(R.samples>0){if(Xe(R)===!1){const S=R.textures,z=R.width,K=R.height;let te=t.COLOR_BUFFER_BIT;const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),le=S.length>1;if(le)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const je=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,te,t.NEAREST),l===!0&&(Ve.length=0,D.length=0,Ve.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push($),D.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const je=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ze(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function ot(R,S){const z=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ji&&z!==Ui&&(Qe.getTransfer(z)===ut?(K!==Hn||te!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Xe}function LT(t,e){function n(i,r=Ui){let s;const o=Qe.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fv)return t.BYTE;if(i===dv)return t.SHORT;if(i===Vo)return t.UNSIGNED_SHORT;if(i===oh)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===qo)return t.HALF_FLOAT;if(i===pv)return t.ALPHA;if(i===mv)return t.RGB;if(i===Hn)return t.RGBA;if(i===gv)return t.LUMINANCE;if(i===_v)return t.LUMINANCE_ALPHA;if(i===ws)return t.DEPTH_COMPONENT;if(i===Os)return t.DEPTH_STENCIL;if(i===vv)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===xv)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===al||i===ll||i===ul||i===cl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ff||i===Of||i===kf||i===zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bf||i===Hf||i===Vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bf||i===Hf)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===$f||i===qf||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===id||i===rd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===id)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yv||i===sd||i===od||i===ad)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===od)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class DT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IT={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),c=this._getHandJoint(u,y);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const UT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:UT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new cu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OT extends Lr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,_=null;const y=new FT,p=n.getContextAttributes();let c=null,g=null;const v=[],M=[],b=new Ae;let P=null;const E=new En;E.layers.enable(1),E.viewport=new _t;const C=new En;C.layers.enable(2),C.viewport=new _t;const X=[E,C],x=new DT;x.layers.enable(1),x.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=v[V];return q===void 0&&(q=new vc,v[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=v[V];return q===void 0&&(q=new vc,v[V]=q),q.getGripSpace()},this.getHand=function(V){let q=v[V];return q===void 0&&(q=new vc,v[V]=q),q.getHandSpace()};function k(V){const q=M.indexOf(V.inputSource);if(q===-1)return;const oe=v[q];oe!==void 0&&(oe.update(V.inputSource,V.frame,u||o),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Z);for(let V=0;V<v.length;V++){const q=M[V];q!==null&&(M[V]=null,v[V].disconnect(q))}w=null,O=null,y.reset(),e.setRenderTarget(c),m=null,d=null,h=null,r=null,g=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,oe=null,se=null;p.depth&&(se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=p.stencil?Os:ws,oe=p.stencil?Fs:Ar);const De={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Cr(d.textureWidth,d.textureHeight,{format:Hn,type:xi,depthTexture:new Nv(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(V){for(let q=0;q<V.removed.length;q++){const oe=V.removed[q],se=M.indexOf(oe);se>=0&&(M[se]=null,v[se].disconnect(oe))}for(let q=0;q<V.added.length;q++){const oe=V.added[q];let se=M.indexOf(oe);if(se===-1){for(let Te=0;Te<v.length;Te++)if(Te>=M.length){M.push(oe),se=Te;break}else if(M[Te]===null){M[Te]=oe,se=Te;break}if(se===-1)break}const De=v[se];De&&De.connect(oe)}}const W=new L,Q=new L;function A(V,q,oe){W.setFromMatrixPosition(q.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);const se=W.distanceTo(Q),De=q.projectionMatrix.elements,Te=oe.projectionMatrix.elements,He=De[14]/(De[10]-1),nt=De[14]/(De[10]+1),Ve=(De[9]+1)/De[5],D=(De[9]-1)/De[5],an=(De[8]-1)/De[0],ze=(Te[8]+1)/Te[0],Xe=He*an,Pe=He*ze,ot=se/(-an+ze),Ie=ot*-an;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(ot),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),De[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const R=He+ot,S=nt+ot,z=Xe-Ie,K=Pe+(se-Ie),te=Ve*nt/S*R,$=D*nt/S*R;V.projectionMatrix.makePerspective(z,K,te,$,R,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function F(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let q=V.near,oe=V.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(oe=y.depthFar)),x.near=C.near=E.near=q,x.far=C.far=E.far=oe,(w!==x.near||O!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,O=x.far);const se=V.parent,De=x.cameras;F(x,se);for(let Te=0;Te<De.length;Te++)F(De[Te],se);De.length===2?A(x,E,C):x.projectionMatrix.copy(E.projectionMatrix),j(V,x,se)};function j(V,q,oe){oe===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Go*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ee=null;function fe(V,q){if(f=q.getViewerPose(u||o),_=q,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let se=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Te=0;Te<oe.length;Te++){const He=oe[Te];let nt=null;if(m!==null)nt=m.getViewport(He);else{const D=h.getViewSubImage(d,He);nt=D.viewport,Te===0&&(e.setRenderTargetTextures(g,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(g))}let Ve=X[Te];Ve===void 0&&(Ve=new En,Ve.layers.enable(Te),Ve.viewport=new _t,X[Te]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(nt.x,nt.y,nt.width,nt.height),Te===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(Ve)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Te=h.getDepthInformation(oe[0]);Te&&Te.isValid&&Te.texture&&y.init(e,Te,r.renderState)}}for(let oe=0;oe<v.length;oe++){const se=M[oe],De=v[oe];se!==null&&De!==void 0&&De.update(se,q,u||o)}ee&&ee(V,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Se=new Uv;Se.setAnimationLoop(fe),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}}const or=new Zn,kT=new st;function zT(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Lv(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,v,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),_(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),y(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===sn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===sn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c),v=g.envMap,M=g.envMapRotation;v&&(p.envMap.value=v,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),p.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(or)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=v*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===sn&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,c){c.matcap&&(p.matcap.value=c.matcap)}function y(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function u(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(g,b);const P=e.render.frame;s[g.id]!==P&&(d(g),s[g.id]=P)}function f(g){const v=h();g.__bindingPointIndex=v;const M=t.createBuffer(),b=g.__size,P=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let P=0,E=M.length;P<E;P++){const C=Array.isArray(M[P])?M[P]:[M[P]];for(let X=0,x=C.length;X<x;X++){const w=C[X];if(m(w,P,X,b)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let Z=0;Z<k.length;Z++){const W=k[Z],Q=y(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+H,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,b){const P=g.value,E=v+"_"+M;if(b[E]===void 0)return typeof P=="number"||typeof P=="boolean"?b[E]=P:b[E]=P.clone(),!0;{const C=b[E];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return b[E]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function _(g){const v=g.uniforms;let M=0;const b=16;for(let E=0,C=v.length;E<C;E++){const X=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,w=X.length;x<w;x++){const O=X[x],k=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=k.length;H<Z;H++){const W=k[H],Q=y(W),A=M%b,F=A%Q.boundary,j=A+F;M+=F,j!==0&&b-j<Q.storage&&(M+=b-j),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Q.storage}}}const P=M%b;return P>0&&(M+=b-P),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class HT{constructor(e={}){const{canvas:n=RS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=ji,this.toneMappingExposure=1;const v=this;let M=!1,b=0,P=0,E=null,C=-1,X=null;const x=new _t,w=new _t;let O=null;const k=new Oe(0);let H=0,Z=n.width,W=n.height,Q=1,A=null,F=null;const j=new _t(0,0,Z,W),ee=new _t(0,0,Z,W);let fe=!1;const Se=new mh;let V=!1,q=!1;const oe=new st,se=new st,De=new L,Te=new _t,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ve(){return E===null?Q:1}let D=i;function an(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),D===null){const U="webgl2";if(D=an(U,T),D===null)throw an(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,Xe,Pe,ot,Ie,R,S,z,K,te,$,Me,le,ge,je,ie,_e,be,Le,ve,Be,Ue,it,I;function de(){ze=new j1(D),ze.init(),Ue=new LT(D,ze),Xe=new B1(D,ze,e,Ue),Pe=new RT(D),Xe.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ot=new q1(D),Ie=new hT,R=new bT(D,ze,Pe,Ie,Xe,Ue,ot),S=new V1(v),z=new X1(v),K=new nM(D),it=new k1(D,K),te=new Y1(D,K,ot,it),$=new Z1(D,te,K,ot),Le=new K1(D,Xe,R),ie=new H1(Ie),Me=new dT(v,S,z,ze,Xe,it,ie),le=new zT(v,Ie),ge=new mT,je=new ST(ze),be=new O1(v,S,z,Pe,$,d,l),_e=new AT(v,$,Xe),I=new BT(D,ot,Xe,Pe),ve=new z1(D,ze,ot),Be=new $1(D,ze,ot),ot.programs=Me.programs,v.capabilities=Xe,v.extensions=ze,v.properties=Ie,v.renderLists=ge,v.shadowMap=_e,v.state=Pe,v.info=ot}de();const Y=new OT(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Z,W,!1))},this.getSize=function(T){return T.set(Z,W)},this.setSize=function(T,U,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,W=U,n.width=Math.floor(T*Q),n.height=Math.floor(U*Q),B===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Q,W*Q).floor()},this.setDrawingBufferSize=function(T,U,B){Z=T,W=U,Q=B,n.width=Math.floor(T*B),n.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,U,B,G){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,B,G),Pe.viewport(x.copy(j).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,U,B,G){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,U,B,G),Pe.scissor(w.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Pe.setScissorTest(fe=T)},this.setOpaqueSort=function(T){A=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(T=!0,U=!0,B=!0){let G=0;if(T){let N=!1;if(E!==null){const re=E.texture.format;N=re===fh||re===ch||re===uh}if(N){const re=E.texture.type,ce=re===xi||re===Ar||re===Vo||re===Fs||re===ah||re===lh,xe=be.getClearColor(),ye=be.getClearAlpha(),Ce=xe.r,Re=xe.g,Ee=xe.b;ce?(m[0]=Ce,m[1]=Re,m[2]=Ee,m[3]=ye,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ce,_[1]=Re,_[2]=Ee,_[3]=ye,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),je.dispose(),Ie.dispose(),S.dispose(),z.dispose(),$.dispose(),it.dispose(),I.dispose(),Me.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Sh),Y.removeEventListener("sessionend",Mh),er.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ot.autoReset,U=_e.enabled,B=_e.autoUpdate,G=_e.needsUpdate,N=_e.type;de(),ot.autoReset=T,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=G,_e.type=N}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const U=T.target;U.removeEventListener("dispose",Ge),St(U)}function St(T){Kt(T),Ie.remove(T)}function Kt(T){const U=Ie.get(T).programs;U!==void 0&&(U.forEach(function(B){Me.releaseProgram(B)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,G,N,re){U===null&&(U=He);const ce=N.isMesh&&N.matrixWorld.determinant()<0,xe=qv(T,U,B,G,N);Pe.setMaterial(G,ce);let ye=B.index,Ce=1;if(G.wireframe===!0){if(ye=te.getWireframeAttribute(B),ye===void 0)return;Ce=2}const Re=B.drawRange,Ee=B.attributes.position;let Je=Re.start*Ce,at=(Re.start+Re.count)*Ce;re!==null&&(Je=Math.max(Je,re.start*Ce),at=Math.min(at,(re.start+re.count)*Ce)),ye!==null?(Je=Math.max(Je,0),at=Math.min(at,ye.count)):Ee!=null&&(Je=Math.max(Je,0),at=Math.min(at,Ee.count));const mt=at-Je;if(mt<0||mt===1/0)return;it.setup(N,G,xe,B,ye);let ln,qe=ve;if(ye!==null&&(ln=K.get(ye),qe=Be,qe.setIndex(ln)),N.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*Ve()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(N.isLine){let we=G.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*Ve()),N.isLineSegments?qe.setMode(D.LINES):N.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else N.isPoints?qe.setMode(D.POINTS):N.isSprite&&qe.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,Lt=N._multiDrawCounts,Ke=N._multiDrawCount,bn=ye?K.get(ye).bytesPerElement:1,Ir=Ie.get(G).currentProgram.getUniforms();for(let un=0;un<Ke;un++)Ir.setValue(D,"_gl_DrawID",un),qe.render(we[un]/bn,Lt[un])}else if(N.isInstancedMesh)qe.renderInstances(Je,mt,N.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,we);qe.renderInstances(Je,mt,Lt)}else qe.render(Je,mt)};function Ye(T,U,B){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Jo(T,U,B),T.side=vi,T.needsUpdate=!0,Jo(T,U,B),T.side=ai):Jo(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),p=je.get(B),p.init(U),g.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){const xe=re[ce];Ye(xe,B,N),G.add(xe)}else Ye(re,B,N),G.add(re)}),g.pop(),p=null,G},this.compileAsync=function(T,U,B=null){const G=this.compile(T,U,B);return new Promise(N=>{function re(){if(G.forEach(function(ce){Ie.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){N(T);return}setTimeout(re,10)}ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zt=null;function Qn(T){Zt&&Zt(T)}function Sh(){er.stop()}function Mh(){er.start()}const er=new Uv;er.setAnimationLoop(Qn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(T){Zt=T,Y.setAnimationLoop(T),T===null?er.stop():er.start()},Y.addEventListener("sessionstart",Sh),Y.addEventListener("sessionend",Mh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,E),p=je.get(T,g.length),p.init(U),g.push(p),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(se),q=this.localClippingEnabled,V=ie.init(this.clippingPlanes,q),y=ge.get(T,c.length),y.init(),c.push(y),Y.enabled===!0&&Y.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&hu(re,U,-1/0,v.sortObjects)}hu(T,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(A,F),nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,nt&&be.addToRenderList(y,T),this.info.render.frame++,V===!0&&ie.beginShadows();const B=p.state.shadowsArray;_e.render(B,T,U),V===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,N=y.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(N.length>0)for(let ce=0,xe=re.length;ce<xe;ce++){const ye=re[ce];wh(G,N,T,ye)}nt&&be.render(T);for(let ce=0,xe=re.length;ce<xe;ce++){const ye=re[ce];Eh(y,T,ye,ye.viewport)}}else N.length>0&&wh(G,N,T,U),nt&&be.render(T),Eh(y,T,U);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,U),it.resetDefaultState(),C=-1,X=null,g.pop(),g.length>0?(p=g[g.length-1],V===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function hu(T,U,B,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Se.intersectsSprite(T)){G&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const ce=$.update(T),xe=T.material;xe.visible&&y.push(T,ce,xe,B,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Se.intersectsObject(T))){const ce=$.update(T),xe=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Te.copy(ce.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(xe)){const ye=ce.groups;for(let Ce=0,Re=ye.length;Ce<Re;Ce++){const Ee=ye[Ce],Je=xe[Ee.materialIndex];Je&&Je.visible&&y.push(T,ce,Je,B,Te.z,Ee)}}else xe.visible&&y.push(T,ce,xe,B,Te.z,null)}}const re=T.children;for(let ce=0,xe=re.length;ce<xe;ce++)hu(re[ce],U,B,G)}function Eh(T,U,B,G){const N=T.opaque,re=T.transmissive,ce=T.transparent;p.setupLightsView(B),V===!0&&ie.setGlobalState(v.clippingPlanes,B),G&&Pe.viewport(x.copy(G)),N.length>0&&Qo(N,U,B),re.length>0&&Qo(re,U,B),ce.length>0&&Qo(ce,U,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function wh(T,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Cr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qo:xi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],ce=G.viewport||x;re.setSize(ce.z,ce.w);const xe=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(k),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),nt&&be.render(B);const ye=v.toneMapping;v.toneMapping=ji;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),V===!0&&ie.setGlobalState(v.clippingPlanes,G),Qo(T,B,G),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Je=U.length;Ee<Je;Ee++){const at=U[Ee],mt=at.object,ln=at.geometry,qe=at.material,we=at.group;if(qe.side===ai&&mt.layers.test(G.layers)){const Lt=qe.side;qe.side=sn,qe.needsUpdate=!0,Th(mt,B,G,ln,qe,we),qe.side=Lt,qe.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}v.setRenderTarget(xe),v.setClearColor(k,H),Ce!==void 0&&(G.viewport=Ce),v.toneMapping=ye}function Qo(T,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=T.length;N<re;N++){const ce=T[N],xe=ce.object,ye=ce.geometry,Ce=G===null?ce.material:G,Re=ce.group;xe.layers.test(B.layers)&&Th(xe,U,B,ye,Ce,Re)}}function Th(T,U,B,G,N,re){T.onBeforeRender(v,U,B,G,N,re),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,U,B,G,T,re),N.transparent===!0&&N.side===ai&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,v.renderBufferDirect(B,U,G,N,T,re),N.side=vi,N.needsUpdate=!0,v.renderBufferDirect(B,U,G,N,T,re),N.side=ai):v.renderBufferDirect(B,U,G,N,T,re),T.onAfterRender(v,U,B,G,N,re)}function Jo(T,U,B){U.isScene!==!0&&(U=He);const G=Ie.get(T),N=p.state.lights,re=p.state.shadowsArray,ce=N.state.version,xe=Me.getParameters(T,N.state,re,U,B),ye=Me.getProgramCacheKey(xe);let Ce=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Ge),Ce=new Map,G.programs=Ce);let Re=Ce.get(ye);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===ce)return Ch(T,xe),Re}else xe.uniforms=Me.getUniforms(T),T.onBeforeCompile(xe,v),Re=Me.acquireProgram(xe,ye),Ce.set(ye,Re),G.uniforms=xe.uniforms;const Ee=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Ch(T,xe),G.needsLights=Zv(T),G.lightsStateVersion=ce,G.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function Ah(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=hl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ch(T,U){const B=Ie.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function qv(T,U,B,G,N){U.isScene!==!0&&(U=He),R.resetTextureUnits();const re=U.fog,ce=G.isMeshStandardMaterial?U.environment:null,xe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ji,ye=(G.isMeshStandardMaterial?z:S).get(G.envMap||ce),Ce=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let mt=ji;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=ln!==void 0?ln.length:0,we=Ie.get(G),Lt=p.state.lights;if(V===!0&&(q===!0||T!==X)){const xn=T===X&&G.id===C;ie.setState(G,T,xn)}let Ke=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Lt.state.version||we.outputColorSpace!==xe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==ye||G.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Re||we.morphTargets!==Ee||we.morphNormals!==Je||we.morphColors!==at||we.toneMapping!==mt||we.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,we.__version=G.version);let bn=we.currentProgram;Ke===!0&&(bn=Jo(G,U,N));let Ir=!1,un=!1,pu=!1;const vt=bn.getUniforms(),Si=we.uniforms;if(Pe.useProgram(bn.program)&&(Ir=!0,un=!0,pu=!0),G.id!==C&&(C=G.id,un=!0),Ir||X!==T){Xe.reverseDepthBuffer?(oe.copy(T.projectionMatrix),bS(oe),LS(oe),vt.setValue(D,"projectionMatrix",oe)):vt.setValue(D,"projectionMatrix",T.projectionMatrix),vt.setValue(D,"viewMatrix",T.matrixWorldInverse);const xn=vt.map.cameraPosition;xn!==void 0&&xn.setValue(D,De.setFromMatrixPosition(T.matrixWorld)),Xe.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,un=!0,pu=!0)}if(N.isSkinnedMesh){vt.setOptional(D,N,"bindMatrix"),vt.setOptional(D,N,"bindMatrixInverse");const xn=N.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),vt.setValue(D,"boneTexture",xn.boneTexture,R))}N.isBatchedMesh&&(vt.setOptional(D,N,"batchingTexture"),vt.setValue(D,"batchingTexture",N._matricesTexture,R),vt.setOptional(D,N,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",N._indirectTexture,R),vt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",N._colorsTexture,R));const mu=B.morphAttributes;if((mu.position!==void 0||mu.normal!==void 0||mu.color!==void 0)&&Le.update(N,B,bn),(un||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,vt.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Si.envMap.value=ye,Si.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Si.envMapIntensity.value=U.environmentIntensity),un&&(vt.setValue(D,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Kv(Si,pu),re&&G.fog===!0&&le.refreshFogUniforms(Si,re),le.refreshMaterialUniforms(Si,G,Q,W,p.state.transmissionRenderTarget[T.id]),hl.upload(D,Ah(we),Si,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hl.upload(D,Ah(we),Si,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(D,"center",N.center),vt.setValue(D,"modelViewMatrix",N.modelViewMatrix),vt.setValue(D,"normalMatrix",N.normalMatrix),vt.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let gu=0,Qv=xn.length;gu<Qv;gu++){const Rh=xn[gu];I.update(Rh,bn),I.bind(Rh,bn)}}return bn}function Kv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Zv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,B){Ie.get(T.texture).__webglTexture=U,Ie.get(T.depthTexture).__webglTexture=B;const G=Ie.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=Ie.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){E=T,b=U,P=B;let G=!0,N=null,re=!1,ce=!1;if(T){const ye=Ie.get(T);if(ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(ye.__boundDepthTexture!==Ee){if(Ee!==null&&Ie.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);const Re=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][B]:N=Re[U],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,x.copy(T.viewport),w.copy(T.scissor),O=T.scissorTest}else x.copy(j).multiplyScalar(Q).floor(),w.copy(ee).multiplyScalar(Q).floor(),O=fe;if(Pe.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&Pe.drawBuffers(T,N),Pe.viewport(x),Pe.scissor(w),Pe.setScissorTest(O),re){const ye=Ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,B)}else if(ce){const ye=Ie.get(T.texture),Ce=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ce)}C=-1},this.readRenderTargetPixels=function(T,U,B,G,N,re,ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){Pe.bindFramebuffer(D.FRAMEBUFFER,xe);try{const ye=T.texture,Ce=ye.format,Re=ye.type;if(!Xe.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&B>=0&&B<=T.height-N&&D.readPixels(U,B,G,N,Ue.convert(Ce),Ue.convert(Re),re)}finally{const ye=E!==null?Ie.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,G,N,re,ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){const ye=T.texture,Ce=ye.format,Re=ye.type;if(!Xe.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&B>=0&&B<=T.height-N){Pe.bindFramebuffer(D.FRAMEBUFFER,xe);const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(U,B,G,N,Ue.convert(Ce),Ue.convert(Re),0);const Je=E!==null?Ie.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Je);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await PS(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Ee),D.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(dl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(T.image.width*G),re=Math.floor(T.image.height*G),ce=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,ce,xe,N,re),Pe.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,G=null,N=0){T.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let re,ce,xe,ye,Ce,Re;B!==null?(re=B.max.x-B.min.x,ce=B.max.y-B.min.y,xe=B.min.x,ye=B.min.y):(re=T.image.width,ce=T.image.height,xe=0,ye=0),G!==null?(Ce=G.x,Re=G.y):(Ce=0,Re=0);const Ee=Ue.convert(U.format),Je=Ue.convert(U.type);R.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[N]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Ce,Re,re,ce,Ee,Je,Lt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Ce,Re,Lt.width,Lt.height,Ee,Lt.data):D.texSubImage2D(D.TEXTURE_2D,N,Ce,Re,re,ce,Ee,Je,Lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),N===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,G=null,N=0){T.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0);let re,ce,xe,ye,Ce,Re,Ee,Je,at;const mt=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(re=B.max.x-B.min.x,ce=B.max.y-B.min.y,xe=B.max.z-B.min.z,ye=B.min.x,Ce=B.min.y,Re=B.min.z):(re=mt.width,ce=mt.height,xe=mt.depth,ye=0,Ce=0,Re=0),G!==null?(Ee=G.x,Je=G.y,at=G.z):(Ee=0,Je=0,at=0);const ln=Ue.convert(U.format),qe=Ue.convert(U.type);let we;if(U.isData3DTexture)R.setTexture3D(U,0),we=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ir=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(we,N,Ee,Je,at,re,ce,xe,ln,qe,mt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(we,N,Ee,Je,at,re,ce,xe,ln,mt.data):D.texSubImage3D(we,N,Ee,Je,at,re,ce,xe,ln,qe,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ir),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),N===0&&U.generateMipmaps&&D.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){b=0,P=0,E=null,Pe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===uu?"display-p3":"srgb"}}class Bv extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ld,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new L;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Bn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Bn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Bn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Bn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hv extends Dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const io=new L,Kr=new L,Zr=new L,Qr=new Ae,ro=new Ae,Vv=new st,ka=new L,so=new L,za=new L,Im=new Ae,xc=new Ae,Um=new Ae;class GT extends yt{constructor(e=new Hv){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new VT(n,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Gl(i,3,0,!1)),qr.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Ae(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),Vv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ba(ka.set(-.5,-.5,0),Zr,o,Kr,r,s),Ba(so.set(.5,-.5,0),Zr,o,Kr,r,s),Ba(za.set(.5,.5,0),Zr,o,Kr,r,s),Im.set(0,0),xc.set(1,0),Um.set(1,1);let a=e.ray.intersectTriangle(ka,so,za,!1,io);if(a===null&&(Ba(so.set(-.5,.5,0),Zr,o,Kr,r,s),xc.set(0,1),a=e.ray.intersectTriangle(ka,za,so,!1,io),a===null))return;const l=e.ray.origin.distanceTo(io);l<e.near||l>e.far||n.push({distance:l,point:io.clone(),uv:wn.getInterpolation(io,ka,so,za,Im,xc,Um,new Ae),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(t,e,n,i,r,s){Qr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ro.x=s*Qr.x-r*Qr.y,ro.y=r*Qr.x+s*Qr.y):ro.copy(Qr),t.copy(e),t.x+=ro.x,t.y+=ro.y,t.applyMatrix4(Vv)}class Gv extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new L,Xl=new L,Nm=new st,oo=new Av,Ha=new Ko,yc=new L,Fm=new L;class WT extends yt{constructor(e=new vn,n=new Gv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wl.fromBufferAttribute(n,r-1),Xl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Nm.copy(r).invert(),oo.copy(e.ray).applyMatrix4(Nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=m,p=_-1;y<p;y+=u){const c=f.getX(y),g=f.getX(y+1),v=Va(this,e,oo,l,c,g);v&&n.push(v)}if(this.isLineLoop){const y=f.getX(_-1),p=f.getX(m),c=Va(this,e,oo,l,y,p);c&&n.push(c)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let y=m,p=_-1;y<p;y+=u){const c=Va(this,e,oo,l,y,y+1);c&&n.push(c)}if(this.isLineLoop){const y=Va(this,e,oo,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Va(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Wl.fromBufferAttribute(o,r),Xl.fromBufferAttribute(o,s),n.distanceSqToSegment(Wl,Xl,yc,Fm)>i)return;yc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(yc);if(!(l<e.near||l>e.far))return{distance:l,point:Fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class XT extends jt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class du extends vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let _=0;const y=[],p=i/2;let c=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(m,2));function g(){const M=new L,b=new L;let P=0;const E=(n-e)/i;for(let C=0;C<=s;C++){const X=[],x=C/s,w=x*(n-e)+e;for(let O=0;O<=r;O++){const k=O/r,H=k*l+a,Z=Math.sin(H),W=Math.cos(H);b.x=w*Z,b.y=-x*i+p,b.z=w*W,h.push(b.x,b.y,b.z),M.set(Z,E,W).normalize(),d.push(M.x,M.y,M.z),m.push(k,1-x),X.push(_++)}y.push(X)}for(let C=0;C<r;C++)for(let X=0;X<s;X++){const x=y[X][C],w=y[X+1][C],O=y[X+1][C+1],k=y[X][C+1];e>0&&(f.push(x,w,k),P+=3),n>0&&(f.push(w,O,k),P+=3)}u.addGroup(c,P,0),c+=P}function v(M){const b=_,P=new Ae,E=new L;let C=0;const X=M===!0?e:n,x=M===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),_++;const w=_;for(let O=0;O<=r;O++){const H=O/r*l+a,Z=Math.cos(H),W=Math.sin(H);E.x=X*W,E.y=p*x,E.z=X*Z,h.push(E.x,E.y,E.z),d.push(0,x,0),P.x=Z*.5+.5,P.y=W*.5*x+.5,m.push(P.x,P.y),_++}for(let O=0;O<r;O++){const k=b+O,H=w+O;M===!0?f.push(H,H+1,k):f.push(H+1,H,k),C+=3}u.addGroup(c,C,M===!0?1:2),c+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vh extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new L,d=new L,m=[],_=[],y=[],p=[];for(let c=0;c<=i;c++){const g=[],v=c/i;let M=0;c===0&&o===0?M=.5/n:c===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const P=b/n;h.x=-e*Math.cos(r+P*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(P+M,1-v),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const v=f[c][g+1],M=f[c][g],b=f[c+1][g],P=f[c+1][g+1];(c!==0||o>0)&&m.push(v,M,P),(c!==i-1||l<Math.PI)&&m.push(M,b,P)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wv extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jT extends Wv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xv extends yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class YT extends Xv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Sc=new st,Om=new L,km=new L;class $T{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),n.position.copy(Om),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qT extends $T{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zm extends Xv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new qT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bm=new L;let Ga,Mc;class KT extends yt{constructor(e=new L(0,0,1),n=new L(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Ga===void 0&&(Ga=new vn,Ga.setAttribute("position",new Yt([0,0,0,0,1,0],3)),Mc=new du(0,.5,1,5,1),Mc.translate(0,-.5,0)),this.position.copy(n),this.line=new WT(Ga,new Gv({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new en(Mc,new ph({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Bm.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Bm,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ZT extends Lr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const Ec={type:"change"},xh={type:"start"},yh={type:"end"},Hm=1e-6,$e={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Wa=new Ae,Pi=new Ae,QT=new L,Xa=new L,wc=new L,Jr=new Vs,Vm=new L,ja=new L,Tc=new L,Ya=new L;class JT extends ZT{constructor(e,n=null){super(e,n),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.state=$e.NONE,this.keyState=$e.NONE,this.target=new L,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new Ae,this._moveCurr=new Ae,this._lastAxis=new L,this._zoomStart=new Ae,this._zoomEnd=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._pointers=[],this._pointerPositions={},this._onPointerMove=tA.bind(this),this._onPointerDown=eA.bind(this),this._onPointerUp=nA.bind(this),this._onPointerCancel=iA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=uA.bind(this),this._onKeyDown=sA.bind(this),this._onKeyUp=rA.bind(this),this._onTouchStart=fA.bind(this),this._onTouchMove=dA.bind(this),this._onTouchEnd=hA.bind(this),this._onMouseDown=oA.bind(this),this._onMouseMove=aA.bind(this),this._onMouseUp=lA.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,n!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),n=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-n.clientLeft,this.screen.top=e.top+window.pageYOffset-n.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Hm&&(this.dispatchEvent(Ec),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Hm||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Ec),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=$e.NONE,this.keyState=$e.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Ec),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Pi.copy(this._panEnd).sub(this._panStart),Pi.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,n=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Pi.x*=e,Pi.y*=n}Pi.multiplyScalar(this._eye.length()*this.panSpeed),Xa.copy(this._eye).cross(this.object.up).setLength(Pi.x),Xa.add(QT.copy(this.object.up).setLength(Pi.y)),this.object.position.add(Xa),this.target.add(Xa),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Pi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Ya.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=Ya.length();e?(this._eye.copy(this.object.position).sub(this.target),Vm.copy(this._eye).normalize(),ja.copy(this.object.up).normalize(),Tc.crossVectors(ja,Vm).normalize(),ja.setLength(this._moveCurr.y-this._movePrev.y),Tc.setLength(this._moveCurr.x-this._movePrev.x),Ya.copy(ja.add(Tc)),wc.crossVectors(Ya,this._eye).normalize(),e*=this.rotateSpeed,Jr.setFromAxisAngle(wc,e),this._eye.applyQuaternion(Jr),this.object.up.applyQuaternion(Jr),this._lastAxis.copy(wc),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Jr.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Jr),this.object.up.applyQuaternion(Jr)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===$e.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Xp.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Xp.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,n){return Wa.set((e-this.screen.left)/this.screen.width,(n-this.screen.top)/this.screen.height),Wa}_getMouseOnCircle(e,n){return Wa.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-n))/this.screen.width),Wa}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ae,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function eA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t))}function tA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function nA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchEnd(t):this._onMouseUp(),this._removePointer(t),this._pointers.length===0&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function iA(t){this._removePointer(t)}function rA(){this.enabled!==!1&&(this.keyState=$e.NONE,window.addEventListener("keydown",this._onKeyDown))}function sA(t){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===$e.NONE&&(t.code===this.keys[$e.ROTATE]&&!this.noRotate?this.keyState=$e.ROTATE:t.code===this.keys[$e.ZOOM]&&!this.noZoom?this.keyState=$e.ZOOM:t.code===this.keys[$e.PAN]&&!this.noPan&&(this.keyState=$e.PAN)))}function oA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:this.state=$e.ZOOM;break;case Ms.ROTATE:this.state=$e.ROTATE;break;case Ms.PAN:this.state=$e.PAN;break;default:this.state=$e.NONE}const n=this.keyState!==$e.NONE?this.keyState:this.state;n===$e.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(t.pageX,t.pageY)),this._movePrev.copy(this._moveCurr)):n===$e.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(t.pageX,t.pageY)),this._zoomEnd.copy(this._zoomStart)):n===$e.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(t.pageX,t.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(xh)}function aA(t){const e=this.keyState!==$e.NONE?this.keyState:this.state;e===$e.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(t.pageX,t.pageY))):e===$e.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(t.pageX,t.pageY)):e===$e.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(t.pageX,t.pageY))}function lA(){this.state=$e.NONE,this.dispatchEvent(yh)}function uA(t){if(this.enabled!==!1&&this.noZoom!==!0){switch(t.preventDefault(),t.deltaMode){case 2:this._zoomStart.y-=t.deltaY*.025;break;case 1:this._zoomStart.y-=t.deltaY*.01;break;default:this._zoomStart.y-=t.deltaY*25e-5;break}this.dispatchEvent(xh),this.dispatchEvent(yh)}}function cA(t){this.enabled!==!1&&t.preventDefault()}function fA(t){switch(this._trackPointer(t),this._pointers.length){case 1:this.state=$e.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=$e.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,n=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+n*n);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,r=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,r)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(xh)}function dA(t){switch(this._trackPointer(t),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(t.pageX,t.pageY));break;default:const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(n*n+i*i);const r=(t.pageX+e.x)/2,s=(t.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(r,s));break}}function hA(t){switch(this._pointers.length){case 0:this.state=$e.NONE;break;case 1:this.state=$e.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(t.pageX,t.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=$e.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==t.pointerId){const n=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(n.x,n.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(yh)}class jv extends yt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ae(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const es=new L,Gm=new st,Wm=new st,Xm=new L,jm=new L;class pA{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(_,y){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),Gm.copy(y.matrixWorldInverse),Wm.multiplyMatrices(y.projectionMatrix,Gm),f(_,_,y),m(_)},this.setSize=function(_,y){i=_,r=y,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=y+"px"};function u(_){_.isCSS2DObject&&(_.element.style.display="none");for(let y=0,p=_.children.length;y<p;y++)u(_.children[y])}function f(_,y,p){if(_.visible===!1){u(_);return}if(_.isCSS2DObject){es.setFromMatrixPosition(_.matrixWorld),es.applyMatrix4(Wm);const c=es.z>=-1&&es.z<=1&&_.layers.test(p.layers)===!0,g=_.element;g.style.display=c===!0?"":"none",c===!0&&(_.onBeforeRender(n,y,p),g.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(es.x*s+s)+"px,"+(-es.y*o+o)+"px)",g.parentNode!==l&&l.appendChild(g),_.onAfterRender(n,y,p));const v={distanceToCameraSquared:h(p,_)};a.objects.set(_,v)}for(let c=0,g=_.children.length;c<g;c++)f(_.children[c],y,p)}function h(_,y){return Xm.setFromMatrixPosition(_.matrixWorld),jm.setFromMatrixPosition(y.matrixWorld),Xm.distanceToSquared(jm)}function d(_){const y=[];return _.traverseVisible(function(p){p.isCSS2DObject&&y.push(p)}),y}function m(_){const y=d(_).sort(function(c,g){if(c.renderOrder!==g.renderOrder)return g.renderOrder-c.renderOrder;const v=a.objects.get(c).distanceToCameraSquared,M=a.objects.get(g).distanceToCameraSquared;return v-M}),p=y.length;for(let c=0,g=y.length;c<g;c++)y[c].element.style.zIndex=p-c}}}const mA={up:"M6 14l6-6 6 6",down:"M6 10l6 6 6-6",reset:"M4 12a8 8 0 1 0 2.6-5.9M4 4v4h4",label:"M5 19L12 5l7 14M8 14h8",download:"M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14",expand:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",shrink:"M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"};function ts({name:t}){return pe.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:pe.jsx("path",{d:mA[t]})})}const Yv=new vh(1,40,28),$v=new du(1,1,1,20,1,!1);function Ac(t,e){const n=atob(t),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new e(i.buffer)}function gA(t){const e=new vn;return e.setAttribute("position",new on(Ac(t.vertices,Float32Array),3)),e.setAttribute("normal",new on(Ac(t.normals,Float32Array),3)),e.setIndex(new on(Ac(t.faces,Uint32Array),1)),e.computeBoundingSphere(),e}function cd(t){t.traverse(e=>{e instanceof en&&(e.geometry!==Yv&&e.geometry!==$v&&e.geometry.dispose(),e.userData.ownMaterial&&e.material.dispose()),e instanceof jv&&e.element.remove()}),t.clear()}const Ym=new Map;function $a(t){let e=Ym.get(t);return e||(e=new Wv({color:t,roughness:.45,metalness:0}),Ym.set(t,e)),e}function Cc(t,e,n,i){const r=t.clone().add(e).multiplyScalar(.5),s=e.clone().sub(t),o=s.length(),a=new en($v,i);return a.scale.set(n,o,n),a.position.copy(r),a.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),a}function _A(t,e,n,i){const r=new L(e[t.i].x,e[t.i].y,e[t.i].z),s=new L(e[t.j].x,e[t.j].y,e[t.j].z),o=s.clone().sub(r).normalize();let a=null;if(t.aromatic&&i)a=i.clone().sub(r.clone().add(s).multiplyScalar(.5));else for(const l of n){if(l===t)continue;const u=l.i===t.i||l.i===t.j?l.j:l.j===t.i||l.j===t.j?l.i:-1;if(!(u<0||u===t.i||u===t.j)){a=new L(e[u].x,e[u].y,e[u].z).sub(r);break}}return(!a||a.clone().cross(o).lengthSq()<1e-6)&&(a=Math.abs(o.x)<.9?new L(1,0,0):new L(0,1,0)),a.sub(o.clone().multiplyScalar(a.dot(o))).normalize()}function vA(t,e,n){cd(t.molecule),cd(t.labels);const i=e.map(a=>new L(a.x,a.y,a.z));e.forEach((a,l)=>{const u=new en(Yv,$a(a.color));u.scale.setScalar(a.radius),u.position.copy(i[l]),t.molecule.add(u);const f=document.createElement("div");f.className="atom-label",f.textContent=`${a.symbol}${l+1}`;const h=new jv(f);h.position.copy(i[l]).add(new L(0,0,a.radius+.12)),t.labels.add(h)});const r=new Set;n.forEach(a=>{a.aromatic&&(r.add(a.i),r.add(a.j))});let s=null;r.size&&(s=new L,r.forEach(a=>s.add(i[a])),s.multiplyScalar(1/r.size));const o=$a("#8a9099");for(const a of n){const l=i[a.i],u=i[a.j],f=l.clone().add(u).multiplyScalar(.5),h=$a(e[a.i].color),d=$a(e[a.j].color),m=[];a.aromatic?m.push({offset:0,radius:.075}):a.order>=2.5?m.push({offset:-.12,radius:.045},{offset:0,radius:.045},{offset:.12,radius:.045}):a.order>=1.75?m.push({offset:-.075,radius:.05},{offset:.075,radius:.05}):m.push({offset:0,radius:.075});const _=m.length>1||a.aromatic?_A(a,e,n,s):new L;for(const y of m){const p=_.clone().multiplyScalar(y.offset);t.molecule.add(Cc(l.clone().add(p),f.clone().add(p),y.radius,h)),t.molecule.add(Cc(f.clone().add(p),u.clone().add(p),y.radius,d))}if(a.aromatic){const y=_.clone().multiplyScalar(.16),p=l.clone().lerp(u,.2).add(y),c=l.clone().lerp(u,.8).add(y),g=4;for(let v=0;v<g;v++){const M=p.clone().lerp(c,v/g),b=p.clone().lerp(c,(v+.55)/g);t.molecule.add(Cc(M,b,.035,o))}}}}function xA(t,e,n){cd(t.lobes);const i=(r,s,o)=>{if(!r||r.count===0)return;const a=new en(gA(r),s);a.renderOrder=o,t.lobes.add(a)};i(e,t.materials.positive,2),i(n,t.materials.negative,2)}function yA(t,e,n){const i=new Rr().setFromObject(t.molecule);t.lobes.children.length&&i.union(new Rr().setFromObject(t.lobes)),i.isEmpty()&&i.setFromCenterAndSize(new L,new L(4,4,4));const r=i.getBoundingSphere(new Ko),s=r.center,o=Math.max(r.radius,1.5)*1.02,a=e.length>1&&e.every(m=>Math.abs(m.x)<.001&&Math.abs(m.y)<.001),l=!a&&e.every(m=>Math.abs(m.z)<.01);let u,f;a?(u=new L(1,.38,.12),f=new L(0,1,0)):l?(u=new L(.18,-.78,.6),f=new L(0,0,1)):(u=new L(.62,-.62,.48),f=new L(0,0,1));const h=28*Math.PI/180,d=o/Math.tan(h/2)/Math.min(1,n)**.8;return u.normalize(),f.sub(u.clone().multiplyScalar(f.dot(u))).normalize(),{position:s.clone().add(u.multiplyScalar(d)),target:s.clone(),up:f}}function SA(){const t=new Bv,e=new gh(-1.6,1.6,1.6,-1.6,.1,10),n=[[new L(1,0,0),"x"],[new L(0,1,0),"y"],[new L(0,0,1),"z"]];for(const[i,r]of n){const s=new KT(i,new L,1,5989230,.3,.18);t.add(s);const o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d");a.fillStyle="#4b5360",a.font="600 46px Pretendard Variable, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(r,32,34);const l=new GT(new Hv({map:new XT(o),depthTest:!1}));l.position.copy(i.clone().multiplyScalar(1.38)),l.scale.setScalar(.62),t.add(l)}return{scene:t,camera:e}}function MA({args:t}){var c,g,v,M,b,P;const e=Ze.useRef(null),n=Ze.useRef(null),i=Ze.useRef(null),r=Ze.useRef(t);r.current=t;const s=Ze.useRef(t.showAxes),[o,a]=Ze.useState(t.showLabels),[l,u]=Ze.useState(!1),[f,h]=Ze.useState("");Ze.useEffect(()=>{const E=n.current,C=new HT({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.outputColorSpace=On,C.toneMapping=uv,C.autoClear=!1,E.appendChild(C.domElement);const X=new pA;X.domElement.className="label-layer",E.appendChild(X.domElement);const x=new Bv,w=new En(28,1,.1,500);x.add(w),x.add(new YT(16777215,10134445,1.1));const O=new zm(16777215,1.9);O.position.set(-3,4,6),w.add(O);const k=new zm(16777215,.45);k.position.set(4,-2,-5),w.add(k);const H=new JT(w,C.domElement);H.rotateSpeed=3,H.zoomSpeed=1,H.panSpeed=.6,H.staticMoving=!0,H.minDistance=2,H.maxDistance=120,H.keys=["","",""];const Z=()=>new jT({roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.4,side:vi,transparent:!0,depthWrite:!0}),W=new vr,Q=new vr,A=new vr;x.add(W,Q,A);const F={renderer:C,labelRenderer:X,scene:x,camera:w,controls:H,molecule:W,lobes:Q,labels:A,gizmo:SA(),materials:{positive:Z(),negative:Z()},home:{position:new L(0,0,20),target:new L,up:new L(0,1,0)},frame:0};i.current=F;const j=()=>{const V=E.clientWidth,q=E.clientHeight;C.setSize(V,q,!1),C.domElement.style.width=`${V}px`,C.domElement.style.height=`${q}px`,X.setSize(V,q),w.aspect=V/Math.max(q,1),w.updateProjectionMatrix(),H.handleResize()},ee=new ResizeObserver(j);ee.observe(E),j();const fe=()=>{F.frame=requestAnimationFrame(fe),H.update();const V=E.clientWidth,q=E.clientHeight;if(C.setViewport(0,0,V,q),C.setScissorTest(!1),C.clear(),C.render(x,w),s.current){const oe=Math.min(104,Math.floor(Math.min(V,q)*.24)),se=F.gizmo;se.camera.position.copy(w.position).sub(H.target).setLength(5),se.camera.up.copy(w.up),se.camera.lookAt(0,0,0),C.setScissorTest(!0),C.setScissor(10,10,oe,oe),C.setViewport(10,10,oe,oe),C.clearDepth(),C.render(se.scene,se.camera),C.setScissorTest(!1)}X.render(x,w)};fe();const Se=()=>u(document.fullscreenElement===e.current);return document.addEventListener("fullscreenchange",Se),()=>{cancelAnimationFrame(F.frame),ee.disconnect(),document.removeEventListener("fullscreenchange",Se),H.dispose(),C.dispose()}},[]),Ze.useEffect(()=>{xA(i.current,t.positive,t.negative)},[(c=t.positive)==null?void 0:c.vertices,(g=t.positive)==null?void 0:g.faces,(v=t.negative)==null?void 0:v.vertices,(M=t.negative)==null?void 0:M.faces]),Ze.useEffect(()=>{const E=i.current;vA(E,t.atoms,t.bonds),m()},[t.moleculeKey]),Ze.useEffect(()=>{const{positive:E,negative:C}=i.current.materials;E.color.set(t.colors.positive),C.color.set(t.colors.negative);for(const X of[E,C])X.opacity=t.opacity,X.transparent=t.opacity<.999,X.depthWrite=!0,X.needsUpdate=!0},[t.colors.positive,t.colors.negative,t.opacity]),Ze.useEffect(()=>{i.current.labels.visible=o},[o]),Ze.useEffect(()=>{s.current=t.showAxes},[t.showAxes]),Ze.useEffect(()=>a(t.showLabels),[t.showLabels]),Ze.useEffect(()=>{const E=C=>{if(C.key==="ArrowRight"||C.key==="ArrowUp")d(1);else if(C.key==="ArrowLeft"||C.key==="ArrowDown")d(-1);else if(C.key==="r"||C.key==="R")m();else return;C.preventDefault()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);function d(E){Mo.setComponentValue({type:"step",delta:E,nonce:Date.now()})}function m(){const E=i.current,C=n.current;E.home=yA(E,r.current.atoms,C.clientWidth/Math.max(C.clientHeight,1)),E.camera.up.copy(E.home.up),E.camera.position.copy(E.home.position),E.controls.target.copy(E.home.target),E.camera.lookAt(E.home.target),E.controls.update()}function _(){const E=i.current,C=n.current,X=E.renderer.getPixelRatio(),x=Math.max(2,Math.ceil(2400/Math.max(C.clientWidth,1)));E.renderer.setPixelRatio(x),E.renderer.setSize(C.clientWidth,C.clientHeight,!1);const w=t.dark?"#14171c":"#ffffff";E.renderer.setClearColor(w,1),E.renderer.clear(),E.renderer.render(E.scene,E.camera),E.renderer.domElement.toBlob(O=>{if(E.renderer.setClearColor(0,0),E.renderer.setPixelRatio(X),E.renderer.setSize(C.clientWidth,C.clientHeight,!1),!O)return;const k=URL.createObjectURL(O),H=document.createElement("a");H.href=k,H.download=`${t.fileName||"quantumlens"}.png`,document.body.appendChild(H),H.click(),H.remove(),setTimeout(()=>URL.revokeObjectURL(k),2e3),h("이미지를 저장했습니다"),setTimeout(()=>h(""),1600)},"image/png")}function y(){var E,C;document.fullscreenElement?document.exitFullscreen():(C=(E=e.current)==null?void 0:E.requestFullscreen)==null||C.call(E)}const p=!((b=t.positive)!=null&&b.count)&&!((P=t.negative)!=null&&P.count);return pe.jsxs("div",{ref:e,className:`viewer ${l?"is-fullscreen":""}`,style:{height:l?"100vh":t.height},children:[pe.jsx("div",{ref:n,className:"stage",tabIndex:0,"aria-label":"3D 분자 오비탈 보기. 드래그해 회전, 휠로 확대, 화살표 키로 다른 오비탈"}),pe.jsxs("div",{className:"toolbar",role:"toolbar",children:[pe.jsx("button",{title:"이전 오비탈 (←)",onClick:()=>d(-1),children:pe.jsx(ts,{name:"down"})}),pe.jsx("button",{title:"다음 오비탈 (→)",onClick:()=>d(1),children:pe.jsx(ts,{name:"up"})}),pe.jsx("span",{className:"sep"}),pe.jsx("button",{title:"처음 보기로 (R)",onClick:m,children:pe.jsx(ts,{name:"reset"})}),pe.jsx("button",{title:"원자 번호 표시",className:o?"on":"",onClick:()=>a(E=>!E),children:pe.jsx(ts,{name:"label"})}),pe.jsx("button",{title:"PNG로 저장",onClick:_,children:pe.jsx(ts,{name:"download"})}),pe.jsx("button",{title:l?"전체 화면 끝내기":"전체 화면",onClick:y,children:pe.jsx(ts,{name:l?"shrink":"expand"})})]}),t.caption&&pe.jsx("div",{className:"caption",dangerouslySetInnerHTML:{__html:t.caption}}),p&&pe.jsx("div",{className:"notice",children:"이 등치값에서는 표시할 면이 없습니다. 등치값을 낮춰 보세요."}),f&&pe.jsx("div",{className:"flash",children:f})]})}const Rc=40,ns=18,EA=30;function wA(t,e=6){const n=t/e,i=10**Math.floor(Math.log10(n)),r=n/i;return(r<1.5?1:r<3.5?2:r<7.5?5:10)*i}function TA(t){return(t<0?"−":"")+Math.abs(t).toFixed(2)}function AA({x:t,y:e,occ:n}){if(n<=0)return null;const i=(r,s)=>{const o=e-9,a=e+9;return s?pe.jsx("path",{d:`M${r} ${a} L${r} ${o} M${r-3} ${o+4} L${r} ${o} L${r+3} ${o+4}`}):pe.jsx("path",{d:`M${r} ${o} L${r} ${a} M${r-3} ${a-4} L${r} ${a} L${r+3} ${a-4}`})};return pe.jsx("g",{className:"electrons",children:n>=2?pe.jsxs(pe.Fragment,{children:[i(t-4,!0),i(t+4,!1)]}):i(t,!0)})}function CA({args:t}){const e=Ze.useRef(null),[n,i]=Ze.useState(340),[r,s]=Ze.useState(!1),[o,a]=Ze.useState(null);Ze.useLayoutEffect(()=>{const A=e.current,F=new ResizeObserver(()=>i(A.clientWidth));return F.observe(A),i(A.clientWidth),()=>F.disconnect()},[]),Ze.useEffect(()=>s(!1),[t.moleculeKey]);const{levels:l,selected:u,homo:f,lumo:h,fragments:d}=t,m=t.height-EA,{lo:_,hi:y,hidden:p}=Ze.useMemo(()=>{const A=l.map(q=>q.energy);let F=l.length-1;if(!r&&h!==null){const q=A[h]+8;for(F=h;F+1<l.length&&F+1<=h+3&&A[F+1]<=q;)F++;for(F=Math.max(F,u);F+1<l.length&&l[F+1].group===l[F].group;)F++}const j=A[F],ee=d?[...d.left.levels,...d.right.levels].map(q=>q.energy):[],fe=Math.min(...A,...ee),Se=Math.max(j,...ee.filter(q=>q<=j+1e-9||r)),V=Math.max(Se-fe,2);return{lo:fe-V*.04,hi:Se+V*.05,hidden:l.length-1-F}},[l,h,u,r,d]),c=A=>ns+(1-(A-_)/(y-_))*(m-2*ns),g=Rc+8,v=n-8,M=v-g,b=d?{x0:g+M*.33,x1:g+M*.67}:{x0:g+18,x1:g+Math.min(M*.52,170)},P={x0:g+4,x1:g+M*.2},E={x0:g+M*.8,x1:v-4},C=Ze.useMemo(()=>{const A=new Map;l.forEach(Se=>A.set(Se.group,[...A.get(Se.group)??[],Se]));const F=[],j=6,ee=new Map;let fe=1/0;return Array.from(A.keys()).sort((Se,V)=>A.get(Se)[0].energy-A.get(V)[0].energy).forEach(Se=>{const V=Math.min(c(A.get(Se)[0].energy),fe-j);ee.set(Se,V),fe=V}),A.forEach(Se=>{const V=Se.length,q=6,oe=(b.x1-b.x0-q*(V-1))/V;Se.forEach((se,De)=>{const Te=b.x0+De*(oe+q);F.push({...se,x0:Te,x1:Te+oe,y:ee.get(se.group)})})}),F.sort((Se,V)=>Se.k-V.k)},[l,b.x0,b.x1,_,y,m]),X=C.filter(A=>A.y>=ns-6),w=Array.from(new Set([f,h,u,o].filter(A=>A!==null))).map(A=>{const F=X.filter(ee=>{var fe;return ee.group===((fe=C[A])==null?void 0:fe.group)});if(!F.length)return null;const j=F[F.length-1];return{k:A,y:j.y,x:j.x1+10,level:C[A]}}).filter(A=>A!==null).sort((A,F)=>A.y-F.y),O=[];for(const A of w){const F=O.find(j=>j.level.group===A.level.group);if(F){A.k===u&&Object.assign(F,A);continue}O.push({...A})}for(let A=1;A<O.length;A++)O[A].y-O[A-1].y<15&&(O[A].y=O[A-1].y+15);const k=Ze.useMemo(()=>{const A=wA(y-_),F=[];for(let j=Math.ceil(_/A)*A;j<=y;j+=A)F.push(j);return F},[_,y]);function H(A){Mo.setComponentValue({type:"select",k:A,nonce:Date.now()})}function Z(A){if(A.key==="ArrowUp"||A.key==="ArrowRight")H(Math.min(l.length-1,u+1));else if(A.key==="ArrowDown"||A.key==="ArrowLeft")H(Math.max(0,u-1));else return;A.preventDefault()}const W=f!==null&&h!==null?l[h].energy-l[f].energy:null,Q=(A,F)=>c(d[A].levels[F].energy);return pe.jsxs("div",{className:"levels",ref:e,style:{height:t.height},children:[pe.jsxs("svg",{width:n,height:m,tabIndex:0,onKeyDown:Z,role:"listbox","aria-label":"MO 에너지 준위. 위아래 화살표로 선택",children:[pe.jsxs("g",{className:"axis",children:[k.map(A=>pe.jsxs("g",{children:[pe.jsx("line",{x1:Rc,x2:v,y1:c(A),y2:c(A),className:"grid"}),pe.jsx("text",{x:Rc-6,y:c(A)+3.5,textAnchor:"end",children:TA(A).replace(".00","")})]},A)),pe.jsx("text",{className:"unit",x:4,y:12,children:"eV"})]}),d&&pe.jsxs("g",{className:"fragments",children:[["left","right"].map(A=>{const F=A==="left"?P:E,j=d[A];return pe.jsxs("g",{children:[pe.jsx("text",{className:"frag-title",x:(F.x0+F.x1)/2,y:m-4,textAnchor:"middle",children:j.symbol}),j.levels.map((ee,fe)=>pe.jsxs("g",{children:[pe.jsx("line",{className:"frag-level",x1:F.x0,x2:F.x1,y1:c(ee.energy),y2:c(ee.energy)}),pe.jsx("text",{className:"frag-name",x:A==="left"?F.x0:F.x1,y:c(ee.energy)-4,textAnchor:A==="left"?"start":"end",children:ee.name})]},fe))]},A)}),d.links.map((A,F)=>{const j=C[A.k];if(!j||j.y<ns-6)return null;const ee=A.k===u||A.k===o,fe=Q(A.side,A.level),Se=A.side==="left"?P.x1:E.x0,V=A.side==="left"?j.x0:j.x1;return pe.jsx("line",{className:`link ${ee?"active":""}`,x1:Se,y1:fe,x2:V,y2:j.y,style:{opacity:ee?.9:.12+.4*A.weight}},F)}),pe.jsx("text",{className:"frag-title",x:(b.x0+b.x1)/2,y:m-4,textAnchor:"middle",children:"분자"})]}),W!==null&&f!==null&&h!==null&&C[h].y>=ns&&pe.jsxs("g",{className:"gap",children:[pe.jsx("line",{x1:b.x0-10,x2:b.x0-10,y1:C[f].y,y2:C[h].y}),pe.jsx("line",{x1:b.x0-13,x2:b.x0-7,y1:C[f].y,y2:C[f].y}),pe.jsx("line",{x1:b.x0-13,x2:b.x0-7,y1:C[h].y,y2:C[h].y})]}),X.map(A=>{const F=A.k===u;return pe.jsxs("g",{className:`level ${A.occupation>0?"occ":"virt"} ${F?"sel":""} ${o===A.k?"hover":""}`,onClick:()=>H(A.k),onMouseEnter:()=>a(A.k),onMouseLeave:()=>a(null),role:"option","aria-selected":F,children:[pe.jsx("rect",{className:"hit",x:A.x0-3,y:A.y-7,width:A.x1-A.x0+6,height:14}),F&&pe.jsx("rect",{className:"sel-band",x:A.x0-4,y:A.y-11,width:A.x1-A.x0+8,height:22,rx:3}),pe.jsx("line",{x1:A.x0,x2:A.x1,y1:A.y,y2:A.y}),pe.jsx(AA,{x:(A.x0+A.x1)/2,y:A.y,occ:A.occupation})]},A.k)}),!d&&O.map(A=>{const F=A.level,j=A.k===u,ee=X.filter(fe=>fe.group===F.group).length;return pe.jsx("g",{className:`tag ${j?"sel":""}`,children:pe.jsxs("text",{x:A.x,y:A.y+4,children:[pe.jsx("tspan",{className:"sym",children:F.symbol||"·"}),F.shell&&pe.jsx("tspan",{className:"shell",dy:3,children:F.shell}),pe.jsxs("tspan",{className:"title",dx:6,dy:F.shell?-3:0,children:[F.title,ee>1?` ×${ee}`:""]})]})},`lab-${A.k}`)}),d&&C[u]&&C[u].y>=ns&&pe.jsx("g",{className:"tag sel",children:pe.jsxs("text",{x:(b.x0+b.x1)/2,y:C[u].y-14,textAnchor:"middle",children:[pe.jsx("tspan",{className:"sym",children:C[u].symbol||"·"}),C[u].shell&&pe.jsx("tspan",{className:"shell",dy:3,children:C[u].shell})]})})]}),pe.jsxs("div",{className:"levels-foot",children:[p>0||r?pe.jsx("button",{className:"link-btn",onClick:()=>s(A=>!A),children:r?"경계 오비탈 주변만 보기":`위쪽 비점유 오비탈 ${p}개 더 보기`}):pe.jsx("span",{}),W!==null&&pe.jsxs("span",{className:"gap-note",children:["HOMO–LUMO 간격 ",W.toFixed(2)," eV"]})]})]})}function RA(){const[t,e]=Ze.useState(null);return Ze.useEffect(()=>{const n=Mo.onRender(({args:i})=>e(i));return Mo.ready(),()=>{n()}},[]),Ze.useEffect(()=>{t&&Mo.setFrameHeight(t.height)},[t==null?void 0:t.height,t]),t?(document.documentElement.dataset.theme=t.dark?"dark":"light",t.kind==="viewer"?pe.jsx(MA,{args:t}):pe.jsx(CA,{args:t})):null}ov(document.getElementById("root")).render(pe.jsx(RA,{}));
