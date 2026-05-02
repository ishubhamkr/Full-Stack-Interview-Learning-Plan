(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Jc={exports:{}},Tn={},_c={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),Su=Symbol.for("react.portal"),Cu=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Pu=Symbol.for("react.memo"),Du=Symbol.for("react.lazy"),Ci=Symbol.iterator;function Lu(e){return e===null||typeof e!="object"?null:(e=Ci&&e[Ci]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gc=Object.assign,Qc={};function wr(e,t,r){this.props=e,this.context=t,this.refs=Qc,this.updater=r||zc}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=wr.prototype;function ks(e,t,r){this.props=e,this.context=t,this.refs=Qc,this.updater=r||zc}var Ss=ks.prototype=new Kc;Ss.constructor=ks;Gc(Ss,wr.prototype);Ss.isPureReactComponent=!0;var xi=Array.isArray,Vc=Object.prototype.hasOwnProperty,Cs={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,r){var o,n={},a=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Vc.call(t,o)&&!$c.hasOwnProperty(o)&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){for(var c=Array(i),l=0;l<i;l++)c[l]=arguments[l+2];n.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return{$$typeof:mo,type:e,key:a,ref:s,props:n,_owner:Cs.current}}function Mu(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function ju(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ri=/\/+/g;function Qn(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ju(""+e.key):t.toString(36)}function Fo(e,t,r,o,n){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case Su:s=!0}}if(s)return s=e,n=n(s),e=o===""?"."+Qn(s,0):o,xi(n)?(r="",e!=null&&(r=e.replace(Ri,"$&/")+"/"),Fo(n,t,r,"",function(l){return l})):n!=null&&(xs(n)&&(n=Mu(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(Ri,"$&/")+"/")+e)),t.push(n)),1;if(s=0,o=o===""?".":o+":",xi(e))for(var i=0;i<e.length;i++){a=e[i];var c=o+Qn(a,i);s+=Fo(a,t,r,c,n)}else if(c=Lu(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=o+Qn(a,i++),s+=Fo(a,t,r,c,n);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Co(e,t,r){if(e==null)return e;var o=[],n=0;return Fo(e,o,"","",function(a){return t.call(r,a,n++)}),o}function Ou(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Ho={transition:null},Nu={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Cs};function Yc(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Co,forEach:function(e,t,r){Co(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=wr;j.Fragment=Cu;j.Profiler=Ru;j.PureComponent=ks;j.StrictMode=xu;j.Suspense=Tu;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nu;j.act=Yc;j.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Gc({},e.props),n=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Cs.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Vc.call(t,c)&&!$c.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){i=Array(c);for(var l=0;l<c;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:mo,type:e.type,key:n,ref:a,props:o,_owner:s}};j.createContext=function(e){return e={$$typeof:Eu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Au,_context:e},e.Consumer=e};j.createElement=Xc;j.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Iu,render:e}};j.isValidElement=xs;j.lazy=function(e){return{$$typeof:Du,_payload:{_status:-1,_result:e},_init:Ou}};j.memo=function(e,t){return{$$typeof:Pu,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};j.unstable_act=Yc;j.useCallback=function(e,t){return ue.current.useCallback(e,t)};j.useContext=function(e){return ue.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};j.useEffect=function(e,t){return ue.current.useEffect(e,t)};j.useId=function(){return ue.current.useId()};j.useImperativeHandle=function(e,t,r){return ue.current.useImperativeHandle(e,t,r)};j.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ue.current.useMemo(e,t)};j.useReducer=function(e,t,r){return ue.current.useReducer(e,t,r)};j.useRef=function(e){return ue.current.useRef(e)};j.useState=function(e){return ue.current.useState(e)};j.useSyncExternalStore=function(e,t,r){return ue.current.useSyncExternalStore(e,t,r)};j.useTransition=function(){return ue.current.useTransition()};j.version="18.3.1";_c.exports=j;var b=_c.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=b,Uu=Symbol.for("react.element"),Bu=Symbol.for("react.fragment"),Wu=Object.prototype.hasOwnProperty,Fu=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hu={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,t,r){var o,n={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)Wu.call(t,o)&&!Hu.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:Uu,type:e,key:a,ref:s,props:n,_owner:Fu.current}}Tn.Fragment=Bu;Tn.jsx=Zc;Tn.jsxs=Zc;Jc.exports=Tn;var g=Jc.exports,el={exports:{}},Se={},tl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var L=T.length;T.push(A);e:for(;0<L;){var O=L-1>>>1,q=T[O];if(0<n(q,A))T[O]=A,T[L]=q,L=O;else break e}}function r(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var A=T[0],L=T.pop();if(L!==A){T[0]=L;e:for(var O=0,q=T.length,Je=q>>>1;O<Je;){var $e=2*(O+1)-1,Rr=T[$e],Lt=$e+1,So=T[Lt];if(0>n(Rr,L))Lt<q&&0>n(So,Rr)?(T[O]=So,T[Lt]=L,O=Lt):(T[O]=Rr,T[$e]=L,O=$e);else if(Lt<q&&0>n(So,L))T[O]=So,T[Lt]=L,O=Lt;else break e}}return A}function n(T,A){var L=T.sortIndex-A.sortIndex;return L!==0?L:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var c=[],l=[],m=1,u=null,h=3,v=!1,w=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var A=r(l);A!==null;){if(A.callback===null)o(l);else if(A.startTime<=T)o(l),A.sortIndex=A.expirationTime,t(c,A);else break;A=r(l)}}function S(T){if(k=!1,f(T),!w)if(r(c)!==null)w=!0,Dt(R);else{var A=r(l);A!==null&&Qt(S,A.startTime-T)}}function R(T,A){w=!1,k&&(k=!1,d(D),D=-1),v=!0;var L=h;try{for(f(A),u=r(c);u!==null&&(!(u.expirationTime>A)||T&&!ce());){var O=u.callback;if(typeof O=="function"){u.callback=null,h=u.priorityLevel;var q=O(u.expirationTime<=A);A=e.unstable_now(),typeof q=="function"?u.callback=q:u===r(c)&&o(c),f(A)}else o(c);u=r(c)}if(u!==null)var Je=!0;else{var $e=r(l);$e!==null&&Qt(S,$e.startTime-A),Je=!1}return Je}finally{u=null,h=L,v=!1}}var E=!1,I=null,D=-1,U=5,M=-1;function ce(){return!(e.unstable_now()-M<U)}function Le(){if(I!==null){var T=e.unstable_now();M=T;var A=!0;try{A=I(!0,T)}finally{A?He():(E=!1,I=null)}}else E=!1}var He;if(typeof p=="function")He=function(){p(Le)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,xe=Pt.port2;Pt.port1.onmessage=Le,He=function(){xe.postMessage(null)}}else He=function(){x(Le,0)};function Dt(T){I=T,E||(E=!0,He())}function Qt(T,A){D=x(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Dt(R))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var L=h;h=A;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return A()}finally{h=L}},e.unstable_scheduleCallback=function(T,A,L){var O=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?O+L:O):L=O,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=L+q,T={id:m++,callback:A,priorityLevel:T,startTime:L,expirationTime:q,sortIndex:-1},L>O?(T.sortIndex=L,t(l,T),r(c)===null&&T===r(l)&&(k?(d(D),D=-1):k=!0,Qt(S,L-O))):(T.sortIndex=q,t(c,T),w||v||(w=!0,Dt(R))),T},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(T){var A=h;return function(){var L=h;h=A;try{return T.apply(this,arguments)}finally{h=L}}}})(rl);tl.exports=rl;var Ju=tl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=b,ke=Ju;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ol=new Set,Vr={};function zt(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(Vr[e]=t,e=0;e<t.length;e++)ol.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xa=Object.prototype.hasOwnProperty,zu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ai={},Ei={};function Gu(e){return xa.call(Ei,e)?!0:xa.call(Ai,e)?!1:zu.test(e)?Ei[e]=!0:(Ai[e]=!0,!1)}function Qu(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ku(e,t,r,o){if(t===null||typeof t>"u"||Qu(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,r,o,n,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rs,As);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rs,As);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rs,As);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,r,o){var n=oe.hasOwnProperty(t)?oe[t]:null;(n!==null?n.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ku(t,r,n,o)&&(r=null),o||n===null?Gu(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,o=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var it=_u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),nl=Symbol.for("react.provider"),al=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),sl=Symbol.for("react.offscreen"),Ii=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Ii&&e[Ii]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Kn;function Or(e){if(Kn===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Kn=t&&t[1]||""}return`
`+Kn+e}var Vn=!1;function $n(e,t){if(!e||Vn)return"";Vn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var o=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){o=l}e.call(t.prototype)}else{try{throw Error()}catch(l){o=l}e()}}catch(l){if(l&&o&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),a=o.stack.split(`
`),s=n.length-1,i=a.length-1;1<=s&&0<=i&&n[s]!==a[i];)i--;for(;1<=s&&0<=i;s--,i--)if(n[s]!==a[i]){if(s!==1||i!==1)do if(s--,i--,0>i||n[s]!==a[i]){var c=`
`+n[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=i);break}}}finally{Vn=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Or(e):""}function Vu(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=$n(e.type,!1),e;case 11:return e=$n(e.type.render,!1),e;case 1:return e=$n(e.type,!0),e;default:return""}}function Ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Vt:return"Portal";case Ra:return"Profiler";case Is:return"StrictMode";case Aa:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case al:return(e.displayName||"Context")+".Consumer";case nl:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:Ia(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Ia(e(t))}catch{}}return null}function $u(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(t);case 8:return t===Is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function il(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xu(e){var t=il(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){o=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=Xu(e))}function cl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=il(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ta(e,t){var r=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ti(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=Rt(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ll(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function Pa(e,t){ll(e,t);var r=Rt(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,r):t.hasOwnProperty("defaultValue")&&Da(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Da(e,t,r){(t!=="number"||rn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Nr=Array.isArray;function ir(e,t,r,o){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Rt(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function La(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Di(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(Nr(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Rt(r)}}function dl(e,t){var r=Rt(t.value),o=Rt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Li(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ul(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,pl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yu=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Yu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function gl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function ml(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,n=gl(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,n):e[r]=n}}var Zu=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(Zu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Na=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,cr=null,lr=null;function Mi(e){if(e=yo(e)){if(typeof qa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=jn(t),qa(e.stateNode,e.type,t))}}function hl(e){cr?lr?lr.push(e):lr=[e]:cr=e}function fl(){if(cr){var e=cr,t=lr;if(lr=cr=null,Mi(e),t)for(e=0;e<t.length;e++)Mi(t[e])}}function yl(e,t){return e(t)}function bl(){}var Xn=!1;function vl(e,t,r){if(Xn)return e(t,r);Xn=!0;try{return yl(e,t,r)}finally{Xn=!1,(cr!==null||lr!==null)&&(bl(),fl())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var o=jn(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Ua=!1;if(rt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Ua=!1}function ep(e,t,r,o,n,a,s,i,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(r,l)}catch(m){this.onError(m)}}var Wr=!1,on=null,nn=!1,Ba=null,tp={onError:function(e){Wr=!0,on=e}};function rp(e,t,r,o,n,a,s,i,c){Wr=!1,on=null,ep.apply(tp,arguments)}function op(e,t,r,o,n,a,s,i,c){if(rp.apply(this,arguments),Wr){if(Wr){var l=on;Wr=!1,on=null}else throw Error(C(198));nn||(nn=!0,Ba=l)}}function Gt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function wl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ji(e){if(Gt(e)!==e)throw Error(C(188))}function np(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,o=t;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(o=n.return,o!==null){r=o;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return ji(n),e;if(a===o)return ji(n),t;a=a.sibling}throw Error(C(188))}if(r.return!==o.return)r=n,o=a;else{for(var s=!1,i=n.child;i;){if(i===r){s=!0,r=n,o=a;break}if(i===o){s=!0,o=n,r=a;break}i=i.sibling}if(!s){for(i=a.child;i;){if(i===r){s=!0,r=a,o=n;break}if(i===o){s=!0,o=a,r=n;break}i=i.sibling}if(!s)throw Error(C(189))}}if(r.alternate!==o)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function kl(e){return e=np(e),e!==null?Sl(e):null}function Sl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sl(e);if(t!==null)return t;e=e.sibling}return null}var Cl=ke.unstable_scheduleCallback,Oi=ke.unstable_cancelCallback,ap=ke.unstable_shouldYield,sp=ke.unstable_requestPaint,V=ke.unstable_now,ip=ke.unstable_getCurrentPriorityLevel,Ls=ke.unstable_ImmediatePriority,xl=ke.unstable_UserBlockingPriority,an=ke.unstable_NormalPriority,cp=ke.unstable_LowPriority,Rl=ke.unstable_IdlePriority,Pn=null,Qe=null;function lp(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Pn,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:pp,dp=Math.log,up=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/up|0)|0}var Eo=64,Io=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sn(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,n=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var i=s&~n;i!==0?o=qr(i):(a&=s,a!==0&&(o=qr(a)))}else s=r&~n,s!==0?o=qr(s):a!==0&&(o=qr(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&n)&&(n=o&-o,a=t&-t,n>=a||n===16&&(a&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ue(t),n=1<<r,o|=e[r],t&=~n;return o}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mp(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Ue(a),i=1<<s,c=n[s];c===-1?(!(i&r)||i&o)&&(n[s]=gp(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Al(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function Yn(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ho(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=r}function hp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Ue(r),a=1<<n;t[n]=0,o[n]=-1,e[n]=-1,r&=~a}}function Ms(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ue(r),n=1<<o;n&t|e[o]&t&&(e[o]|=t),r&=~n}}var B=0;function El(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Il,js,Tl,Pl,Dl,Fa=!1,To=[],yt=null,bt=null,vt=null,Yr=new Map,Zr=new Map,gt=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ni(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Ir(e,t,r,o,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[n]},t!==null&&(t=yo(t),t!==null&&js(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function yp(e,t,r,o,n){switch(t){case"focusin":return yt=Ir(yt,e,t,r,o,n),!0;case"dragenter":return bt=Ir(bt,e,t,r,o,n),!0;case"mouseover":return vt=Ir(vt,e,t,r,o,n),!0;case"pointerover":var a=n.pointerId;return Yr.set(a,Ir(Yr.get(a)||null,e,t,r,o,n)),!0;case"gotpointercapture":return a=n.pointerId,Zr.set(a,Ir(Zr.get(a)||null,e,t,r,o,n)),!0}return!1}function Ll(e){var t=Ot(e.target);if(t!==null){var r=Gt(t);if(r!==null){if(t=r.tag,t===13){if(t=wl(r),t!==null){e.blockedOn=t,Dl(e.priority,function(){Tl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Na=o,r.target.dispatchEvent(o),Na=null}else return t=yo(r),t!==null&&js(t),e.blockedOn=r,!1;t.shift()}return!0}function qi(e,t,r){Jo(e)&&r.delete(t)}function bp(){Fa=!1,yt!==null&&Jo(yt)&&(yt=null),bt!==null&&Jo(bt)&&(bt=null),vt!==null&&Jo(vt)&&(vt=null),Yr.forEach(qi),Zr.forEach(qi)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fa||(Fa=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,bp)))}function eo(e){function t(n){return Tr(n,e)}if(0<To.length){Tr(To[0],e);for(var r=1;r<To.length;r++){var o=To[r];o.blockedOn===e&&(o.blockedOn=null)}}for(yt!==null&&Tr(yt,e),bt!==null&&Tr(bt,e),vt!==null&&Tr(vt,e),Yr.forEach(t),Zr.forEach(t),r=0;r<gt.length;r++)o=gt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<gt.length&&(r=gt[0],r.blockedOn===null);)Ll(r),r.blockedOn===null&&gt.shift()}var dr=it.ReactCurrentBatchConfig,cn=!0;function vp(e,t,r,o){var n=B,a=dr.transition;dr.transition=null;try{B=1,Os(e,t,r,o)}finally{B=n,dr.transition=a}}function wp(e,t,r,o){var n=B,a=dr.transition;dr.transition=null;try{B=4,Os(e,t,r,o)}finally{B=n,dr.transition=a}}function Os(e,t,r,o){if(cn){var n=Ha(e,t,r,o);if(n===null)ca(e,t,o,ln,r),Ni(e,o);else if(yp(n,e,t,r,o))o.stopPropagation();else if(Ni(e,o),t&4&&-1<fp.indexOf(e)){for(;n!==null;){var a=yo(n);if(a!==null&&Il(a),a=Ha(e,t,r,o),a===null&&ca(e,t,o,ln,r),a===n)break;n=a}n!==null&&o.stopPropagation()}else ca(e,t,o,null,r)}}var ln=null;function Ha(e,t,r,o){if(ln=null,e=Ds(o),e=Ot(e),e!==null)if(t=Gt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=wl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function Ml(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case Ls:return 1;case xl:return 4;case an:case cp:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var ht=null,Ns=null,_o=null;function jl(){if(_o)return _o;var e,t=Ns,r=t.length,o,n="value"in ht?ht.value:ht.textContent,a=n.length;for(e=0;e<r&&t[e]===n[e];e++);var s=r-e;for(o=1;o<=s&&t[r-o]===n[a-o];o++);return _o=n.slice(e,1<o?1-o:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Ui(){return!1}function Ce(e){function t(r,o,n,a,s){this._reactName=r,this._targetInst=n,this.type=o,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Po:Ui,this.isPropagationStopped=Ui,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=Ce(kr),fo=Q({},kr,{view:0,detail:0}),kp=Ce(fo),Zn,ea,Pr,Dn=Q({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Zn=e.screenX-Pr.screenX,ea=e.screenY-Pr.screenY):ea=Zn=0,Pr=e),Zn)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),Bi=Ce(Dn),Sp=Q({},Dn,{dataTransfer:0}),Cp=Ce(Sp),xp=Q({},fo,{relatedTarget:0}),ta=Ce(xp),Rp=Q({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=Ce(Rp),Ep=Q({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=Ce(Ep),Tp=Q({},kr,{data:0}),Wi=Ce(Tp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function Us(){return Mp}var jp=Q({},fo,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Ce(jp),Np=Q({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fi=Ce(Np),qp=Q({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Up=Ce(qp),Bp=Q({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wp=Ce(Bp),Fp=Q({},Dn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=Ce(Fp),Jp=[9,13,27,32],Bs=rt&&"CompositionEvent"in window,Fr=null;rt&&"documentMode"in document&&(Fr=document.documentMode);var _p=rt&&"TextEvent"in window&&!Fr,Ol=rt&&(!Bs||Fr&&8<Fr&&11>=Fr),Hi=" ",Ji=!1;function Nl(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function zp(e,t){switch(e){case"compositionend":return ql(t);case"keypress":return t.which!==32?null:(Ji=!0,Hi);case"textInput":return e=t.data,e===Hi&&Ji?null:e;default:return null}}function Gp(e,t){if(Xt)return e==="compositionend"||!Bs&&Nl(e,t)?(e=jl(),_o=Ns=ht=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ol&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Ul(e,t,r,o){hl(o),t=dn(t,"onChange"),0<t.length&&(r=new qs("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Hr=null,to=null;function Kp(e){Vl(e,0)}function Ln(e){var t=er(e);if(cl(t))return e}function Vp(e,t){if(e==="change")return t}var Bl=!1;if(rt){var ra;if(rt){var oa="oninput"in document;if(!oa){var zi=document.createElement("div");zi.setAttribute("oninput","return;"),oa=typeof zi.oninput=="function"}ra=oa}else ra=!1;Bl=ra&&(!document.documentMode||9<document.documentMode)}function Gi(){Hr&&(Hr.detachEvent("onpropertychange",Wl),to=Hr=null)}function Wl(e){if(e.propertyName==="value"&&Ln(to)){var t=[];Ul(t,to,e,Ds(e)),vl(Kp,t)}}function $p(e,t,r){e==="focusin"?(Gi(),Hr=t,to=r,Hr.attachEvent("onpropertychange",Wl)):e==="focusout"&&Gi()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(to)}function Yp(e,t){if(e==="click")return Ln(t)}function Zp(e,t){if(e==="input"||e==="change")return Ln(t)}function eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:eg;function ro(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var n=r[o];if(!xa.call(t,n)||!Fe(e[n],t[n]))return!1}return!0}function Qi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ki(e,t){var r=Qi(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qi(r)}}function Fl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hl(){for(var e=window,t=rn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=rn(e.document)}return t}function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tg(e){var t=Hl(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Fl(r.ownerDocument.documentElement,r)){if(o!==null&&Ws(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,a=Math.min(o.start,n);o=o.end===void 0?a:Math.min(o.end,n),!e.extend&&a>o&&(n=o,o=a,a=n),n=Ki(r,a);var s=Ki(r,o);n&&s&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rg=rt&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ja=null,Jr=null,_a=!1;function Vi(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_a||Yt==null||Yt!==rn(o)||(o=Yt,"selectionStart"in o&&Ws(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&ro(Jr,o)||(Jr=o,o=dn(Ja,"onSelect"),0<o.length&&(t=new qs("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Yt)))}function Do(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zt={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},na={},Jl={};rt&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Mn(e){if(na[e])return na[e];if(!Zt[e])return e;var t=Zt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jl)return na[e]=t[r];return e}var _l=Mn("animationend"),zl=Mn("animationiteration"),Gl=Mn("animationstart"),Ql=Mn("transitionend"),Kl=new Map,$i="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Kl.set(e,t),zt(t,[e])}for(var aa=0;aa<$i.length;aa++){var sa=$i[aa],og=sa.toLowerCase(),ng=sa[0].toUpperCase()+sa.slice(1);Et(og,"on"+ng)}Et(_l,"onAnimationEnd");Et(zl,"onAnimationIteration");Et(Gl,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Ql,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Xi(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,op(o,t,void 0,e),e.currentTarget=null}function Vl(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],n=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var s=o.length-1;0<=s;s--){var i=o[s],c=i.instance,l=i.currentTarget;if(i=i.listener,c!==a&&n.isPropagationStopped())break e;Xi(n,i,l),a=c}else for(s=0;s<o.length;s++){if(i=o[s],c=i.instance,l=i.currentTarget,i=i.listener,c!==a&&n.isPropagationStopped())break e;Xi(n,i,l),a=c}}}if(nn)throw e=Ba,nn=!1,Ba=null,e}function F(e,t){var r=t[Va];r===void 0&&(r=t[Va]=new Set);var o=e+"__bubble";r.has(o)||($l(t,e,2,!1),r.add(o))}function ia(e,t,r){var o=0;t&&(o|=4),$l(r,e,o,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Lo]){e[Lo]=!0,ol.forEach(function(r){r!=="selectionchange"&&(ag.has(r)||ia(r,!1,e),ia(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,ia("selectionchange",!1,t))}}function $l(e,t,r,o){switch(Ml(t)){case 1:var n=vp;break;case 4:n=wp;break;default:n=Os}r=n.bind(null,t,r,e),n=void 0,!Ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function ca(e,t,r,o,n){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n||i.nodeType===8&&i.parentNode===n)break;if(s===4)for(s=o.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===n||c.nodeType===8&&c.parentNode===n))return;s=s.return}for(;i!==null;){if(s=Ot(i),s===null)return;if(c=s.tag,c===5||c===6){o=a=s;continue e}i=i.parentNode}}o=o.return}vl(function(){var l=a,m=Ds(r),u=[];e:{var h=Kl.get(e);if(h!==void 0){var v=qs,w=e;switch(e){case"keypress":if(zo(r)===0)break e;case"keydown":case"keyup":v=Op;break;case"focusin":w="focus",v=ta;break;case"focusout":w="blur",v=ta;break;case"beforeblur":case"afterblur":v=ta;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Up;break;case _l:case zl:case Gl:v=Ap;break;case Ql:v=Wp;break;case"scroll":v=kp;break;case"wheel":v=Hp;break;case"copy":case"cut":case"paste":v=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Fi}var k=(t&4)!==0,x=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var p=l,f;p!==null;){f=p;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,d!==null&&(S=Xr(p,d),S!=null&&k.push(no(p,S,f)))),x)break;p=p.return}0<k.length&&(h=new v(h,w,null,r,m),u.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==Na&&(w=r.relatedTarget||r.fromElement)&&(Ot(w)||w[ot]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=r.relatedTarget||r.toElement,v=l,w=w?Ot(w):null,w!==null&&(x=Gt(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=l),v!==w)){if(k=Bi,S="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Fi,S="onPointerLeave",d="onPointerEnter",p="pointer"),x=v==null?h:er(v),f=w==null?h:er(w),h=new k(S,p+"leave",v,r,m),h.target=x,h.relatedTarget=f,S=null,Ot(m)===l&&(k=new k(d,p+"enter",w,r,m),k.target=f,k.relatedTarget=x,S=k),x=S,v&&w)t:{for(k=v,d=w,p=0,f=k;f;f=Kt(f))p++;for(f=0,S=d;S;S=Kt(S))f++;for(;0<p-f;)k=Kt(k),p--;for(;0<f-p;)d=Kt(d),f--;for(;p--;){if(k===d||d!==null&&k===d.alternate)break t;k=Kt(k),d=Kt(d)}k=null}else k=null;v!==null&&Yi(u,h,v,k,!1),w!==null&&x!==null&&Yi(u,x,w,k,!0)}}e:{if(h=l?er(l):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var R=Vp;else if(_i(h))if(Bl)R=Zp;else{R=Xp;var E=$p}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Yp);if(R&&(R=R(e,l))){Ul(u,R,r,m);break e}E&&E(e,h,l),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Da(h,"number",h.value)}switch(E=l?er(l):window,e){case"focusin":(_i(E)||E.contentEditable==="true")&&(Yt=E,Ja=l,Jr=null);break;case"focusout":Jr=Ja=Yt=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Vi(u,r,m);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":Vi(u,r,m)}var I;if(Bs)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Xt?Nl(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Ol&&r.locale!=="ko"&&(Xt||D!=="onCompositionStart"?D==="onCompositionEnd"&&Xt&&(I=jl()):(ht=m,Ns="value"in ht?ht.value:ht.textContent,Xt=!0)),E=dn(l,D),0<E.length&&(D=new Wi(D,e,null,r,m),u.push({event:D,listeners:E}),I?D.data=I:(I=ql(r),I!==null&&(D.data=I)))),(I=_p?zp(e,r):Gp(e,r))&&(l=dn(l,"onBeforeInput"),0<l.length&&(m=new Wi("onBeforeInput","beforeinput",null,r,m),u.push({event:m,listeners:l}),m.data=I))}Vl(u,t)})}function no(e,t,r){return{instance:e,listener:t,currentTarget:r}}function dn(e,t){for(var r=t+"Capture",o=[];e!==null;){var n=e,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Xr(e,r),a!=null&&o.unshift(no(e,a,n)),a=Xr(e,t),a!=null&&o.push(no(e,a,n))),e=e.return}return o}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yi(e,t,r,o,n){for(var a=t._reactName,s=[];r!==null&&r!==o;){var i=r,c=i.alternate,l=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&l!==null&&(i=l,n?(c=Xr(r,a),c!=null&&s.unshift(no(r,c,i))):n||(c=Xr(r,a),c!=null&&s.push(no(r,c,i)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var sg=/\r\n?/g,ig=/\u0000|\uFFFD/g;function Zi(e){return(typeof e=="string"?e:""+e).replace(sg,`
`).replace(ig,"")}function Mo(e,t,r){if(t=Zi(t),Zi(e)!==t&&r)throw Error(C(425))}function un(){}var za=null,Ga=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,lg=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(dg)}:Ka;function dg(e){setTimeout(function(){throw e})}function la(e,t){var r=t,o=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(o===0){e.removeChild(n),eo(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=n}while(r);eo(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Sr,ao="__reactProps$"+Sr,ot="__reactContainer$"+Sr,Va="__reactEvents$"+Sr,ug="__reactListeners$"+Sr,pg="__reactHandles$"+Sr;function Ot(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ot]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=tc(e);e!==null;){if(r=e[Ge])return r;e=tc(e)}return t}e=r,r=e.parentNode}return null}function yo(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function jn(e){return e[ao]||null}var $a=[],tr=-1;function It(e){return{current:e}}function H(e){0>tr||(e.current=$a[tr],$a[tr]=null,tr--)}function W(e,t){tr++,$a[tr]=e.current,e.current=t}var At={},ie=It(At),he=It(!1),Wt=At;function mr(e,t){var r=e.type.contextTypes;if(!r)return At;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function fe(e){return e=e.childContextTypes,e!=null}function pn(){H(he),H(ie)}function rc(e,t,r){if(ie.current!==At)throw Error(C(168));W(ie,t),W(he,r)}function Xl(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var n in o)if(!(n in t))throw Error(C(108,$u(e)||"Unknown",n));return Q({},r,o)}function gn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Wt=ie.current,W(ie,e),W(he,he.current),!0}function oc(e,t,r){var o=e.stateNode;if(!o)throw Error(C(169));r?(e=Xl(e,t,Wt),o.__reactInternalMemoizedMergedChildContext=e,H(he),H(ie),W(ie,e)):H(he),W(he,r)}var Ye=null,On=!1,da=!1;function Yl(e){Ye===null?Ye=[e]:Ye.push(e)}function gg(e){On=!0,Yl(e)}function Tt(){if(!da&&Ye!==null){da=!0;var e=0,t=B;try{var r=Ye;for(B=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Ye=null,On=!1}catch(n){throw Ye!==null&&(Ye=Ye.slice(e+1)),Cl(Ls,Tt),n}finally{B=t,da=!1}}return null}var rr=[],or=0,mn=null,hn=0,Re=[],Ae=0,Ft=null,Ze=1,et="";function Mt(e,t){rr[or++]=hn,rr[or++]=mn,mn=e,hn=t}function Zl(e,t,r){Re[Ae++]=Ze,Re[Ae++]=et,Re[Ae++]=Ft,Ft=e;var o=Ze;e=et;var n=32-Ue(o)-1;o&=~(1<<n),r+=1;var a=32-Ue(t)+n;if(30<a){var s=n-n%5;a=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Ze=1<<32-Ue(t)+n|r<<n|o,et=a+e}else Ze=1<<a|r<<n|o,et=e}function Fs(e){e.return!==null&&(Mt(e,1),Zl(e,1,0))}function Hs(e){for(;e===mn;)mn=rr[--or],rr[or]=null,hn=rr[--or],rr[or]=null;for(;e===Ft;)Ft=Re[--Ae],Re[Ae]=null,et=Re[--Ae],Re[Ae]=null,Ze=Re[--Ae],Re[Ae]=null}var we=null,ve=null,J=!1,qe=null;function ed(e,t){var r=Ee(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function nc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ve=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ft!==null?{id:Ze,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ee(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,we=e,ve=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(J){var t=ve;if(t){var r=t;if(!nc(e,t)){if(Xa(e))throw Error(C(418));t=wt(r.nextSibling);var o=we;t&&nc(e,t)?ed(o,r):(e.flags=e.flags&-4097|2,J=!1,we=e)}}else{if(Xa(e))throw Error(C(418));e.flags=e.flags&-4097|2,J=!1,we=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function jo(e){if(e!==we)return!1;if(!J)return ac(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=ve)){if(Xa(e))throw td(),Error(C(418));for(;t;)ed(e,t),t=wt(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ve=wt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=we?wt(e.stateNode.nextSibling):null;return!0}function td(){for(var e=ve;e;)e=wt(e.nextSibling)}function hr(){ve=we=null,J=!1}function Js(e){qe===null?qe=[e]:qe.push(e)}var mg=it.ReactCurrentBatchConfig;function Dr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var o=r.stateNode}if(!o)throw Error(C(147,e));var n=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var i=n.refs;s===null?delete i[a]:i[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function rd(e){function t(d,p){if(e){var f=d.deletions;f===null?(d.deletions=[p],d.flags|=16):f.push(p)}}function r(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function o(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function n(d,p){return d=xt(d,p),d.index=0,d.sibling=null,d}function a(d,p,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<p?(d.flags|=2,p):f):(d.flags|=2,p)):(d.flags|=1048576,p)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,p,f,S){return p===null||p.tag!==6?(p=ya(f,d.mode,S),p.return=d,p):(p=n(p,f),p.return=d,p)}function c(d,p,f,S){var R=f.type;return R===$t?m(d,p,f.props.children,S,f.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ut&&sc(R)===p.type)?(S=n(p,f.props),S.ref=Dr(d,p,f),S.return=d,S):(S=Yo(f.type,f.key,f.props,null,d.mode,S),S.ref=Dr(d,p,f),S.return=d,S)}function l(d,p,f,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=ba(f,d.mode,S),p.return=d,p):(p=n(p,f.children||[]),p.return=d,p)}function m(d,p,f,S,R){return p===null||p.tag!==7?(p=Bt(f,d.mode,S,R),p.return=d,p):(p=n(p,f),p.return=d,p)}function u(d,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ya(""+p,d.mode,f),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return f=Yo(p.type,p.key,p.props,null,d.mode,f),f.ref=Dr(d,null,p),f.return=d,f;case Vt:return p=ba(p,d.mode,f),p.return=d,p;case ut:var S=p._init;return u(d,S(p._payload),f)}if(Nr(p)||Ar(p))return p=Bt(p,d.mode,f,null),p.return=d,p;Oo(d,p)}return null}function h(d,p,f,S){var R=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return R!==null?null:i(d,p,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xo:return f.key===R?c(d,p,f,S):null;case Vt:return f.key===R?l(d,p,f,S):null;case ut:return R=f._init,h(d,p,R(f._payload),S)}if(Nr(f)||Ar(f))return R!==null?null:m(d,p,f,S,null);Oo(d,f)}return null}function v(d,p,f,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(f)||null,i(p,d,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xo:return d=d.get(S.key===null?f:S.key)||null,c(p,d,S,R);case Vt:return d=d.get(S.key===null?f:S.key)||null,l(p,d,S,R);case ut:var E=S._init;return v(d,p,f,E(S._payload),R)}if(Nr(S)||Ar(S))return d=d.get(f)||null,m(p,d,S,R,null);Oo(p,S)}return null}function w(d,p,f,S){for(var R=null,E=null,I=p,D=p=0,U=null;I!==null&&D<f.length;D++){I.index>D?(U=I,I=null):U=I.sibling;var M=h(d,I,f[D],S);if(M===null){I===null&&(I=U);break}e&&I&&M.alternate===null&&t(d,I),p=a(M,p,D),E===null?R=M:E.sibling=M,E=M,I=U}if(D===f.length)return r(d,I),J&&Mt(d,D),R;if(I===null){for(;D<f.length;D++)I=u(d,f[D],S),I!==null&&(p=a(I,p,D),E===null?R=I:E.sibling=I,E=I);return J&&Mt(d,D),R}for(I=o(d,I);D<f.length;D++)U=v(I,d,D,f[D],S),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?D:U.key),p=a(U,p,D),E===null?R=U:E.sibling=U,E=U);return e&&I.forEach(function(ce){return t(d,ce)}),J&&Mt(d,D),R}function k(d,p,f,S){var R=Ar(f);if(typeof R!="function")throw Error(C(150));if(f=R.call(f),f==null)throw Error(C(151));for(var E=R=null,I=p,D=p=0,U=null,M=f.next();I!==null&&!M.done;D++,M=f.next()){I.index>D?(U=I,I=null):U=I.sibling;var ce=h(d,I,M.value,S);if(ce===null){I===null&&(I=U);break}e&&I&&ce.alternate===null&&t(d,I),p=a(ce,p,D),E===null?R=ce:E.sibling=ce,E=ce,I=U}if(M.done)return r(d,I),J&&Mt(d,D),R;if(I===null){for(;!M.done;D++,M=f.next())M=u(d,M.value,S),M!==null&&(p=a(M,p,D),E===null?R=M:E.sibling=M,E=M);return J&&Mt(d,D),R}for(I=o(d,I);!M.done;D++,M=f.next())M=v(I,d,D,M.value,S),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?D:M.key),p=a(M,p,D),E===null?R=M:E.sibling=M,E=M);return e&&I.forEach(function(Le){return t(d,Le)}),J&&Mt(d,D),R}function x(d,p,f,S){if(typeof f=="object"&&f!==null&&f.type===$t&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case xo:e:{for(var R=f.key,E=p;E!==null;){if(E.key===R){if(R=f.type,R===$t){if(E.tag===7){r(d,E.sibling),p=n(E,f.props.children),p.return=d,d=p;break e}}else if(E.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ut&&sc(R)===E.type){r(d,E.sibling),p=n(E,f.props),p.ref=Dr(d,E,f),p.return=d,d=p;break e}r(d,E);break}else t(d,E);E=E.sibling}f.type===$t?(p=Bt(f.props.children,d.mode,S,f.key),p.return=d,d=p):(S=Yo(f.type,f.key,f.props,null,d.mode,S),S.ref=Dr(d,p,f),S.return=d,d=S)}return s(d);case Vt:e:{for(E=f.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){r(d,p.sibling),p=n(p,f.children||[]),p.return=d,d=p;break e}else{r(d,p);break}else t(d,p);p=p.sibling}p=ba(f,d.mode,S),p.return=d,d=p}return s(d);case ut:return E=f._init,x(d,p,E(f._payload),S)}if(Nr(f))return w(d,p,f,S);if(Ar(f))return k(d,p,f,S);Oo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(r(d,p.sibling),p=n(p,f),p.return=d,d=p):(r(d,p),p=ya(f,d.mode,S),p.return=d,d=p),s(d)):r(d,p)}return x}var fr=rd(!0),od=rd(!1),fn=It(null),yn=null,nr=null,_s=null;function zs(){_s=nr=yn=null}function Gs(e){var t=fn.current;H(fn),e._currentValue=t}function Za(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function ur(e,t){yn=e,_s=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(_s!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(yn===null)throw Error(C(308));nr=e,yn.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Nt=null;function Qs(e){Nt===null?Nt=[e]:Nt.push(e)}function nd(e,t,r,o){var n=t.interleaved;return n===null?(r.next=r,Qs(t)):(r.next=n.next,n.next=r),t.interleaved=r,nt(e,o)}function nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pt=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,N&2){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,nt(e,r)}return n=o.interleaved,n===null?(t.next=t,Qs(o)):(t.next=n.next,n.next=t),o.interleaved=t,nt(e,r)}function Go(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ms(e,r)}}function ic(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=t:a=a.next=t}else n=a=t;r={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function bn(e,t,r,o){var n=e.updateQueue;pt=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var c=i,l=c.next;c.next=null,s===null?a=l:s.next=l,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==s&&(i===null?m.firstBaseUpdate=l:i.next=l,m.lastBaseUpdate=c))}if(a!==null){var u=n.baseState;s=0,m=l=c=null,i=a;do{var h=i.lane,v=i.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var w=e,k=i;switch(h=t,v=r,k.tag){case 1:if(w=k.payload,typeof w=="function"){u=w.call(v,u,h);break e}u=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(v,u,h):w,h==null)break e;u=Q({},u,h);break e;case 2:pt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=n.effects,h===null?n.effects=[i]:h.push(i))}else v={eventTime:v,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(l=m=v,c=u):m=m.next=v,s|=h;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;h=i,i=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);if(m===null&&(c=u),n.baseState=c,n.firstBaseUpdate=l,n.lastBaseUpdate=m,t=n.shared.interleaved,t!==null){n=t;do s|=n.lane,n=n.next;while(n!==t)}else a===null&&(n.shared.lanes=0);Jt|=s,e.lanes=s,e.memoizedState=u}}function cc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],n=o.callback;if(n!==null){if(o.callback=null,o=r,typeof n!="function")throw Error(C(191,n));n.call(o)}}}var bo={},Ke=It(bo),so=It(bo),io=It(bo);function qt(e){if(e===bo)throw Error(C(174));return e}function Vs(e,t){switch(W(io,t),W(so,e),W(Ke,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}H(Ke),W(Ke,t)}function yr(){H(Ke),H(so),H(io)}function sd(e){qt(io.current);var t=qt(Ke.current),r=Ma(t,e.type);t!==r&&(W(so,e),W(Ke,r))}function $s(e){so.current===e&&(H(Ke),H(so))}var _=It(0);function vn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function Xs(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var Qo=it.ReactCurrentDispatcher,pa=it.ReactCurrentBatchConfig,Ht=0,z=null,X=null,Z=null,wn=!1,_r=!1,co=0,hg=0;function ne(){throw Error(C(321))}function Ys(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Fe(e[r],t[r]))return!1;return!0}function Zs(e,t,r,o,n,a){if(Ht=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?vg:wg,e=r(o,n),_r){a=0;do{if(_r=!1,co=0,25<=a)throw Error(C(301));a+=1,Z=X=null,t.updateQueue=null,Qo.current=kg,e=r(o,n)}while(_r)}if(Qo.current=kn,t=X!==null&&X.next!==null,Ht=0,Z=X=z=null,wn=!1,t)throw Error(C(300));return e}function ei(){var e=co!==0;return co=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?z.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(X===null){var e=z.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?z.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(C(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?z.memoizedState=Z=e:Z=Z.next=e}return Z}function lo(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=Pe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var o=X,n=o.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}o.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,o=o.baseState;var i=s=null,c=null,l=a;do{var m=l.lane;if((Ht&m)===m)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),o=l.hasEagerState?l.eagerState:e(o,l.action);else{var u={lane:m,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(i=c=u,s=o):c=c.next=u,z.lanes|=m,Jt|=m}l=l.next}while(l!==null&&l!==a);c===null?s=o:c.next=i,Fe(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=c,r.lastRenderedState=o}if(e=r.interleaved,e!==null){n=e;do a=n.lane,z.lanes|=a,Jt|=a,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ma(e){var t=Pe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var o=r.dispatch,n=r.pending,a=t.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=e(a,s.action),s=s.next;while(s!==n);Fe(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function id(){}function cd(e,t){var r=z,o=Pe(),n=t(),a=!Fe(o.memoizedState,n);if(a&&(o.memoizedState=n,me=!0),o=o.queue,ti(ud.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Z!==null&&Z.memoizedState.tag&1){if(r.flags|=2048,uo(9,dd.bind(null,r,o,n,t),void 0,null),ee===null)throw Error(C(349));Ht&30||ld(r,t,n)}return n}function ld(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dd(e,t,r,o){t.value=r,t.getSnapshot=o,pd(t)&&gd(e)}function ud(e,t,r){return r(function(){pd(t)&&gd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Fe(e,r)}catch{return!0}}function gd(e){var t=nt(e,1);t!==null&&Be(t,e,1,-1)}function lc(e){var t=ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=bg.bind(null,z,e),[t.memoizedState,e]}function uo(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function md(){return Pe().memoizedState}function Ko(e,t,r,o){var n=ze();z.flags|=e,n.memoizedState=uo(1|t,r,void 0,o===void 0?null:o)}function Nn(e,t,r,o){var n=Pe();o=o===void 0?null:o;var a=void 0;if(X!==null){var s=X.memoizedState;if(a=s.destroy,o!==null&&Ys(o,s.deps)){n.memoizedState=uo(t,r,a,o);return}}z.flags|=e,n.memoizedState=uo(1|t,r,a,o)}function dc(e,t){return Ko(8390656,8,e,t)}function ti(e,t){return Nn(2048,8,e,t)}function hd(e,t){return Nn(4,2,e,t)}function fd(e,t){return Nn(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,r){return r=r!=null?r.concat([e]):null,Nn(4,4,yd.bind(null,t,e),r)}function ri(){}function vd(e,t){var r=Pe();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ys(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function wd(e,t){var r=Pe();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ys(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function kd(e,t,r){return Ht&21?(Fe(r,t)||(r=Al(),z.lanes|=r,Jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=r)}function fg(e,t){var r=B;B=r!==0&&4>r?r:4,e(!0);var o=pa.transition;pa.transition={};try{e(!1),t()}finally{B=r,pa.transition=o}}function Sd(){return Pe().memoizedState}function yg(e,t,r){var o=Ct(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Cd(e))xd(t,r);else if(r=nd(e,t,r,o),r!==null){var n=de();Be(r,e,o,n),Rd(r,t,o)}}function bg(e,t,r){var o=Ct(e),n={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))xd(t,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,i=a(s,r);if(n.hasEagerState=!0,n.eagerState=i,Fe(i,s)){var c=t.interleaved;c===null?(n.next=n,Qs(t)):(n.next=c.next,c.next=n),t.interleaved=n;return}}catch{}finally{}r=nd(e,t,n,o),r!==null&&(n=de(),Be(r,e,o,n),Rd(r,t,o))}}function Cd(e){var t=e.alternate;return e===z||t!==null&&t===z}function xd(e,t){_r=wn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Rd(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ms(e,r)}}var kn={readContext:Te,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},vg={readContext:Te,useCallback:function(e,t){return ze().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:dc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ko(4194308,4,yd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var r=ze();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=ze();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=yg.bind(null,z,e),[o.memoizedState,e]},useRef:function(e){var t=ze();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:ri,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=fg.bind(null,e[1]),ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=z,n=ze();if(J){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ee===null)throw Error(C(349));Ht&30||ld(o,t,r)}n.memoizedState=r;var a={value:r,getSnapshot:t};return n.queue=a,dc(ud.bind(null,o,a,e),[e]),o.flags|=2048,uo(9,dd.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=ze(),t=ee.identifierPrefix;if(J){var r=et,o=Ze;r=(o&~(1<<32-Ue(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=co++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=hg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wg={readContext:Te,useCallback:vd,useContext:Te,useEffect:ti,useImperativeHandle:bd,useInsertionEffect:hd,useLayoutEffect:fd,useMemo:wd,useReducer:ga,useRef:md,useState:function(){return ga(lo)},useDebugValue:ri,useDeferredValue:function(e){var t=Pe();return kd(t,X.memoizedState,e)},useTransition:function(){var e=ga(lo)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:cd,useId:Sd,unstable_isNewReconciler:!1},kg={readContext:Te,useCallback:vd,useContext:Te,useEffect:ti,useImperativeHandle:bd,useInsertionEffect:hd,useLayoutEffect:fd,useMemo:wd,useReducer:ma,useRef:md,useState:function(){return ma(lo)},useDebugValue:ri,useDeferredValue:function(e){var t=Pe();return X===null?t.memoizedState=e:kd(t,X.memoizedState,e)},useTransition:function(){var e=ma(lo)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:cd,useId:Sd,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function es(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:Q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var qn={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=de(),n=Ct(e),a=tt(o,n);a.payload=t,r!=null&&(a.callback=r),t=kt(e,a,n),t!==null&&(Be(t,e,n,o),Go(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=de(),n=Ct(e),a=tt(o,n);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=kt(e,a,n),t!==null&&(Be(t,e,n,o),Go(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),o=Ct(e),n=tt(r,o);n.tag=2,t!=null&&(n.callback=t),t=kt(e,n,o),t!==null&&(Be(t,e,o,r),Go(t,e,o))}};function uc(e,t,r,o,n,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,s):t.prototype&&t.prototype.isPureReactComponent?!ro(r,o)||!ro(n,a):!0}function Ad(e,t,r){var o=!1,n=At,a=t.contextType;return typeof a=="object"&&a!==null?a=Te(a):(n=fe(t)?Wt:ie.current,o=t.contextTypes,a=(o=o!=null)?mr(e,n):At),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qn,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),t}function pc(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&qn.enqueueReplaceState(t,t.state,null)}function ts(e,t,r,o){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Ks(e);var a=t.contextType;typeof a=="object"&&a!==null?n.context=Te(a):(a=fe(t)?Wt:ie.current,n.context=mr(e,a)),n.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(es(e,t,a,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&qn.enqueueReplaceState(n,n.state,null),bn(e,r,n,o),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var r="",o=t;do r+=Vu(o),o=o.return;while(o);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:n,digest:null}}function ha(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function rs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sg=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,t,r){r=tt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Cn||(Cn=!0,ps=o),rs(e,t)},r}function Id(e,t,r){r=tt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var n=t.value;r.payload=function(){return o(n)},r.callback=function(){rs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){rs(e,t),typeof o!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function gc(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Sg;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(r)||(n.add(r),e=Ng.bind(null,e,t,r),t.then(e,e))}function mc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hc(e,t,r,o,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=tt(-1,1),t.tag=2,kt(r,t,1))),r.lanes|=1),e)}var Cg=it.ReactCurrentOwner,me=!1;function le(e,t,r,o){t.child=e===null?od(t,null,r,o):fr(t,e.child,r,o)}function fc(e,t,r,o,n){r=r.render;var a=t.ref;return ur(t,n),o=Zs(e,t,r,o,a,n),r=ei(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,at(e,t,n)):(J&&r&&Fs(t),t.flags|=1,le(e,t,o,n),t.child)}function yc(e,t,r,o,n){if(e===null){var a=r.type;return typeof a=="function"&&!di(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Td(e,t,a,o,n)):(e=Yo(r.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&n)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:ro,r(s,o)&&e.ref===t.ref)return at(e,t,n)}return t.flags|=1,e=xt(a,o),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,r,o,n){if(e!==null){var a=e.memoizedProps;if(ro(a,o)&&e.ref===t.ref)if(me=!1,t.pendingProps=o=a,(e.lanes&n)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,at(e,t,n)}return os(e,t,r,o,n)}function Pd(e,t,r){var o=t.pendingProps,n=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sr,be),be|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,W(sr,be),be|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,W(sr,be),be|=o;return le(e,t,n,r),t.child}function Dd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,r,o,n){var a=fe(r)?Wt:ie.current;return a=mr(t,a),ur(t,n),r=Zs(e,t,r,o,a,n),o=ei(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,at(e,t,n)):(J&&o&&Fs(t),t.flags|=1,le(e,t,r,n),t.child)}function bc(e,t,r,o,n){if(fe(r)){var a=!0;gn(t)}else a=!1;if(ur(t,n),t.stateNode===null)Vo(e,t),Ad(t,r,o),ts(t,r,o,n),o=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var c=s.context,l=r.contextType;typeof l=="object"&&l!==null?l=Te(l):(l=fe(r)?Wt:ie.current,l=mr(t,l));var m=r.getDerivedStateFromProps,u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==o||c!==l)&&pc(t,s,o,l),pt=!1;var h=t.memoizedState;s.state=h,bn(t,o,s,n),c=t.memoizedState,i!==o||h!==c||he.current||pt?(typeof m=="function"&&(es(t,r,m,o),c=t.memoizedState),(i=pt||uc(t,r,i,o,h,c,l))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),s.props=o,s.state=c,s.context=l,o=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,ad(e,t),i=t.memoizedProps,l=t.type===t.elementType?i:Oe(t.type,i),s.props=l,u=t.pendingProps,h=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Te(c):(c=fe(r)?Wt:ie.current,c=mr(t,c));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==u||h!==c)&&pc(t,s,o,c),pt=!1,h=t.memoizedState,s.state=h,bn(t,o,s,n);var w=t.memoizedState;i!==u||h!==w||he.current||pt?(typeof v=="function"&&(es(t,r,v,o),w=t.memoizedState),(l=pt||uc(t,r,l,o,h,w,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),s.props=o,s.state=w,s.context=c,o=l):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),o=!1)}return ns(e,t,r,o,a,n)}function ns(e,t,r,o,n,a){Dd(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return n&&oc(t,r,!1),at(e,t,a);o=t.stateNode,Cg.current=t;var i=s&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,i,a)):le(e,t,i,a),t.memoizedState=o.state,n&&oc(t,r,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),Vs(e,t.containerInfo)}function vc(e,t,r,o,n){return hr(),Js(n),t.flags|=256,le(e,t,r,o),t.child}var as={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Md(e,t,r){var o=t.pendingProps,n=_.current,a=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(n&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),W(_,n&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,a?(o=t.mode,a=t.child,s={mode:"hidden",children:s},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Wn(s,o,0,null),e=Bt(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ss(r),t.memoizedState=as,e):oi(t,s));if(n=e.memoizedState,n!==null&&(i=n.dehydrated,i!==null))return xg(e,t,s,o,i,n,r);if(a){a=o.fallback,s=t.mode,n=e.child,i=n.sibling;var c={mode:"hidden",children:o.children};return!(s&1)&&t.child!==n?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=xt(n,c),o.subtreeFlags=n.subtreeFlags&14680064),i!==null?a=xt(i,a):(a=Bt(a,s,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,s=e.child.memoizedState,s=s===null?ss(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=as,o}return a=e.child,e=a.sibling,o=xt(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function oi(e,t){return t=Wn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,r,o){return o!==null&&Js(o),fr(t,e.child,null,r),e=oi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xg(e,t,r,o,n,a,s){if(r)return t.flags&256?(t.flags&=-257,o=ha(Error(C(422))),No(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,n=t.mode,o=Wn({mode:"visible",children:o.children},n,0,null),a=Bt(a,n,s,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&fr(t,e.child,null,s),t.child.memoizedState=ss(s),t.memoizedState=as,a);if(!(t.mode&1))return No(e,t,s,null);if(n.data==="$!"){if(o=n.nextSibling&&n.nextSibling.dataset,o)var i=o.dgst;return o=i,a=Error(C(419)),o=ha(a,o,void 0),No(e,t,s,o)}if(i=(s&e.childLanes)!==0,me||i){if(o=ee,o!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(o.suspendedLanes|s)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,nt(e,n),Be(o,e,n,-1))}return li(),o=ha(Error(C(421))),No(e,t,s,o)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=qg.bind(null,e),n._reactRetry=t,null):(e=a.treeContext,ve=wt(n.nextSibling),we=t,J=!0,qe=null,e!==null&&(Re[Ae++]=Ze,Re[Ae++]=et,Re[Ae++]=Ft,Ze=e.id,et=e.overflow,Ft=t),t=oi(t,o.children),t.flags|=4096,t)}function wc(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Za(e.return,t,r)}function fa(e,t,r,o,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:n}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=n)}function jd(e,t,r){var o=t.pendingProps,n=o.revealOrder,a=o.tail;if(le(e,t,o.children,r),o=_.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,r,t);else if(e.tag===19)wc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(W(_,o),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&vn(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),fa(t,!1,n,r,a);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vn(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}fa(t,!0,r,null,a);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=xt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Rg(e,t,r){switch(t.tag){case 3:Ld(t),hr();break;case 5:sd(t);break;case 1:fe(t.type)&&gn(t);break;case 4:Vs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,n=t.memoizedProps.value;W(fn,o._currentValue),o._currentValue=n;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(W(_,_.current&1),t.flags|=128,null):r&t.child.childLanes?Md(e,t,r):(W(_,_.current&1),e=at(e,t,r),e!==null?e.sibling:null);W(_,_.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return jd(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),W(_,_.current),o)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,r)}return at(e,t,r)}var Od,is,Nd,qd;Od=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};is=function(){};Nd=function(e,t,r,o){var n=e.memoizedProps;if(n!==o){e=t.stateNode,qt(Ke.current);var a=null;switch(r){case"input":n=Ta(e,n),o=Ta(e,o),a=[];break;case"select":n=Q({},n,{value:void 0}),o=Q({},o,{value:void 0}),a=[];break;case"textarea":n=La(e,n),o=La(e,o),a=[];break;default:typeof n.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=un)}ja(r,o);var s;r=null;for(l in n)if(!o.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var i=n[l];for(s in i)i.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vr.hasOwnProperty(l)?a||(a=[]):(a=a||[]).push(l,null));for(l in o){var c=o[l];if(i=n!=null?n[l]:void 0,o.hasOwnProperty(l)&&c!==i&&(c!=null||i!=null))if(l==="style")if(i){for(s in i)!i.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&i[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(a||(a=[]),a.push(l,r)),r=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&F("scroll",e),a||i===c||(a=[])):(a=a||[]).push(l,c))}r&&(a=a||[]).push("style",r);var l=a;(t.updateQueue=l)&&(t.flags|=4)}};qd=function(e,t,r,o){r!==o&&(t.flags|=4)};function Lr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,o|=n.subtreeFlags&14680064,o|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Ag(e,t,r){var o=t.pendingProps;switch(Hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return fe(t.type)&&pn(),ae(t),null;case 3:return o=t.stateNode,yr(),H(he),H(ie),Xs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(hs(qe),qe=null))),is(e,t),ae(t),null;case 5:$s(t);var n=qt(io.current);if(r=t.type,e!==null&&t.stateNode!=null)Nd(e,t,r,o,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(C(166));return ae(t),null}if(e=qt(Ke.current),jo(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[Ge]=t,o[ao]=a,e=(t.mode&1)!==0,r){case"dialog":F("cancel",o),F("close",o);break;case"iframe":case"object":case"embed":F("load",o);break;case"video":case"audio":for(n=0;n<Ur.length;n++)F(Ur[n],o);break;case"source":F("error",o);break;case"img":case"image":case"link":F("error",o),F("load",o);break;case"details":F("toggle",o);break;case"input":Ti(o,a),F("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},F("invalid",o);break;case"textarea":Di(o,a),F("invalid",o)}ja(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var i=a[s];s==="children"?typeof i=="string"?o.textContent!==i&&(a.suppressHydrationWarning!==!0&&Mo(o.textContent,i,e),n=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Mo(o.textContent,i,e),n=["children",""+i]):Vr.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&F("scroll",o)}switch(r){case"input":Ro(o),Pi(o,a,!0);break;case"textarea":Ro(o),Li(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=un)}o=n,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ul(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(r,{is:o.is}):(e=s.createElement(r),r==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,r),e[Ge]=t,e[ao]=o,Od(e,t,!1,!1),t.stateNode=e;e:{switch(s=Oa(r,o),r){case"dialog":F("cancel",e),F("close",e),n=o;break;case"iframe":case"object":case"embed":F("load",e),n=o;break;case"video":case"audio":for(n=0;n<Ur.length;n++)F(Ur[n],e);n=o;break;case"source":F("error",e),n=o;break;case"img":case"image":case"link":F("error",e),F("load",e),n=o;break;case"details":F("toggle",e),n=o;break;case"input":Ti(e,o),n=Ta(e,o),F("invalid",e);break;case"option":n=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},n=Q({},o,{value:void 0}),F("invalid",e);break;case"textarea":Di(e,o),n=La(e,o),F("invalid",e);break;default:n=o}ja(r,n),i=n;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?ml(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pl(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&$r(e,c):typeof c=="number"&&$r(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&F("scroll",e):c!=null&&Es(e,a,c,s))}switch(r){case"input":Ro(e),Pi(e,o,!1);break;case"textarea":Ro(e),Li(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Rt(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?ir(e,!!o.multiple,a,!1):o.defaultValue!=null&&ir(e,!!o.multiple,o.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=un)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)qd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(C(166));if(r=qt(io.current),qt(Ke.current),jo(t)){if(o=t.stateNode,r=t.memoizedProps,o[Ge]=t,(a=o.nodeValue!==r)&&(e=we,e!==null))switch(e.tag){case 3:Mo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ge]=t,t.stateNode=o}return ae(t),null;case 13:if(H(_),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&ve!==null&&t.mode&1&&!(t.flags&128))td(),hr(),t.flags|=98560,a=!1;else if(a=jo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Ge]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),a=!1}else qe!==null&&(hs(qe),qe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||_.current&1?Y===0&&(Y=3):li())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return yr(),is(e,t),e===null&&oo(t.stateNode.containerInfo),ae(t),null;case 10:return Gs(t.type._context),ae(t),null;case 17:return fe(t.type)&&pn(),ae(t),null;case 19:if(H(_),a=t.memoizedState,a===null)return ae(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)Lr(a,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=vn(e),s!==null){for(t.flags|=128,Lr(a,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(_,_.current&1|2),t.child}e=e.sibling}a.tail!==null&&V()>vr&&(t.flags|=128,o=!0,Lr(a,!1),t.lanes=4194304)}else{if(!o)if(e=vn(s),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!J)return ae(t),null}else 2*V()-a.renderingStartTime>vr&&r!==1073741824&&(t.flags|=128,o=!0,Lr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=V(),t.sibling=null,r=_.current,W(_,o?r&1|2:r&1),t):(ae(t),null);case 22:case 23:return ci(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?be&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Eg(e,t){switch(Hs(t),t.tag){case 1:return fe(t.type)&&pn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),H(he),H(ie),Xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(H(_),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(_),null;case 4:return yr(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return ci(),null;case 24:return null;default:return null}}var qo=!1,se=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,P=null;function ar(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){K(e,t,o)}else r.current=null}function cs(e,t,r){try{r()}catch(o){K(e,t,o)}}var kc=!1;function Tg(e,t){if(za=cn,e=Hl(),Ws(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var n=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,i=-1,c=-1,l=0,m=0,u=e,h=null;t:for(;;){for(var v;u!==r||n!==0&&u.nodeType!==3||(i=s+n),u!==a||o!==0&&u.nodeType!==3||(c=s+o),u.nodeType===3&&(s+=u.nodeValue.length),(v=u.firstChild)!==null;)h=u,u=v;for(;;){if(u===e)break t;if(h===r&&++l===n&&(i=s),h===a&&++m===o&&(c=s),(v=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=v}r=i===-1||c===-1?null:{start:i,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ga={focusedElem:e,selectionRange:r},cn=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,x=w.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),x);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){K(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=kc,kc=!1,w}function zr(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var n=o=o.next;do{if((n.tag&e)===e){var a=n.destroy;n.destroy=void 0,a!==void 0&&cs(t,r,a)}n=n.next}while(n!==o)}}function Un(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function ls(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[ao],delete t[Va],delete t[ug],delete t[pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=un));else if(o!==4&&(e=e.child,e!==null))for(ds(e,t,r),e=e.sibling;e!==null;)ds(e,t,r),e=e.sibling}function us(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(us(e,t,r),e=e.sibling;e!==null;)us(e,t,r),e=e.sibling}var te=null,Ne=!1;function dt(e,t,r){for(r=r.child;r!==null;)Wd(e,t,r),r=r.sibling}function Wd(e,t,r){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Pn,r)}catch{}switch(r.tag){case 5:se||ar(r,t);case 6:var o=te,n=Ne;te=null,dt(e,t,r),te=o,Ne=n,te!==null&&(Ne?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Ne?(e=te,r=r.stateNode,e.nodeType===8?la(e.parentNode,r):e.nodeType===1&&la(e,r),eo(e)):la(te,r.stateNode));break;case 4:o=te,n=Ne,te=r.stateNode.containerInfo,Ne=!0,dt(e,t,r),te=o,Ne=n;break;case 0:case 11:case 14:case 15:if(!se&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){n=o=o.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&cs(r,t,s),n=n.next}while(n!==o)}dt(e,t,r);break;case 1:if(!se&&(ar(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(i){K(r,t,i)}dt(e,t,r);break;case 21:dt(e,t,r);break;case 22:r.mode&1?(se=(o=se)||r.memoizedState!==null,dt(e,t,r),se=o):dt(e,t,r);break;default:dt(e,t,r)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ig),t.forEach(function(o){var n=Ug.bind(null,e,o);r.has(o)||(r.add(o),o.then(n,n))})}}function Me(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var n=r[o];try{var a=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:te=i.stateNode,Ne=!1;break e;case 3:te=i.stateNode.containerInfo,Ne=!0;break e;case 4:te=i.stateNode.containerInfo,Ne=!0;break e}i=i.return}if(te===null)throw Error(C(160));Wd(a,s,n),te=null,Ne=!1;var c=n.alternate;c!==null&&(c.return=null),n.return=null}catch(l){K(n,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}function Fd(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),_e(e),o&4){try{zr(3,e,e.return),Un(3,e)}catch(k){K(e,e.return,k)}try{zr(5,e,e.return)}catch(k){K(e,e.return,k)}}break;case 1:Me(t,e),_e(e),o&512&&r!==null&&ar(r,r.return);break;case 5:if(Me(t,e),_e(e),o&512&&r!==null&&ar(r,r.return),e.flags&32){var n=e.stateNode;try{$r(n,"")}catch(k){K(e,e.return,k)}}if(o&4&&(n=e.stateNode,n!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&ll(n,a),Oa(i,s);var l=Oa(i,a);for(s=0;s<c.length;s+=2){var m=c[s],u=c[s+1];m==="style"?ml(n,u):m==="dangerouslySetInnerHTML"?pl(n,u):m==="children"?$r(n,u):Es(n,m,u,l)}switch(i){case"input":Pa(n,a);break;case"textarea":dl(n,a);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ir(n,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?ir(n,!!a.multiple,a.defaultValue,!0):ir(n,!!a.multiple,a.multiple?[]:"",!1))}n[ao]=a}catch(k){K(e,e.return,k)}}break;case 6:if(Me(t,e),_e(e),o&4){if(e.stateNode===null)throw Error(C(162));n=e.stateNode,a=e.memoizedProps;try{n.nodeValue=a}catch(k){K(e,e.return,k)}}break;case 3:if(Me(t,e),_e(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(k){K(e,e.return,k)}break;case 4:Me(t,e),_e(e);break;case 13:Me(t,e),_e(e),n=e.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(si=V())),o&4&&Cc(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(se=(l=se)||m,Me(t,e),se=l):Me(t,e),_e(e),o&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(u=P=m;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:zr(4,h,h.return);break;case 1:ar(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){o=h,r=h.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){K(o,r,k)}}break;case 5:ar(h,h.return);break;case 22:if(h.memoizedState!==null){Rc(u);continue}}v!==null?(v.return=h,P=v):Rc(u)}m=m.sibling}e:for(m=null,u=e;;){if(u.tag===5){if(m===null){m=u;try{n=u.stateNode,l?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=u.stateNode,c=u.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=gl("display",s))}catch(k){K(e,e.return,k)}}}else if(u.tag===6){if(m===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(k){K(e,e.return,k)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;m===u&&(m=null),u=u.return}m===u&&(m=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Me(t,e),_e(e),o&4&&Cc(e);break;case 21:break;default:Me(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Bd(r)){var o=r;break e}r=r.return}throw Error(C(160))}switch(o.tag){case 5:var n=o.stateNode;o.flags&32&&($r(n,""),o.flags&=-33);var a=Sc(e);us(e,a,n);break;case 3:case 4:var s=o.stateNode.containerInfo,i=Sc(e);ds(e,i,s);break;default:throw Error(C(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pg(e,t,r){P=e,Hd(e)}function Hd(e,t,r){for(var o=(e.mode&1)!==0;P!==null;){var n=P,a=n.child;if(n.tag===22&&o){var s=n.memoizedState!==null||qo;if(!s){var i=n.alternate,c=i!==null&&i.memoizedState!==null||se;i=qo;var l=se;if(qo=s,(se=c)&&!l)for(P=n;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?Ac(n):c!==null?(c.return=s,P=c):Ac(n);for(;a!==null;)P=a,Hd(a),a=a.sibling;P=n,qo=i,se=l}xc(e)}else n.subtreeFlags&8772&&a!==null?(a.return=n,P=a):xc(e)}}function xc(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Un(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!se)if(r===null)o.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:Oe(t.type,r.memoizedProps);o.componentDidUpdate(n,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cc(t,a,o);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cc(t,s,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var m=l.memoizedState;if(m!==null){var u=m.dehydrated;u!==null&&eo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}se||t.flags&512&&ls(t)}catch(h){K(t,t.return,h)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Rc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function Ac(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Un(4,t)}catch(c){K(t,r,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var n=t.return;try{o.componentDidMount()}catch(c){K(t,n,c)}}var a=t.return;try{ls(t)}catch(c){K(t,a,c)}break;case 5:var s=t.return;try{ls(t)}catch(c){K(t,s,c)}}}catch(c){K(t,t.return,c)}if(t===e){P=null;break}var i=t.sibling;if(i!==null){i.return=t.return,P=i;break}P=t.return}}var Dg=Math.ceil,Sn=it.ReactCurrentDispatcher,ni=it.ReactCurrentOwner,Ie=it.ReactCurrentBatchConfig,N=0,ee=null,$=null,re=0,be=0,sr=It(0),Y=0,po=null,Jt=0,Bn=0,ai=0,Gr=null,ge=null,si=0,vr=1/0,Xe=null,Cn=!1,ps=null,St=null,Uo=!1,ft=null,xn=0,Qr=0,gs=null,$o=-1,Xo=0;function de(){return N&6?V():$o!==-1?$o:$o=V()}function Ct(e){return e.mode&1?N&2&&re!==0?re&-re:mg.transition!==null?(Xo===0&&(Xo=Al()),Xo):(e=B,e!==0||(e=window.event,e=e===void 0?16:Ml(e.type)),e):1}function Be(e,t,r,o){if(50<Qr)throw Qr=0,gs=null,Error(C(185));ho(e,r,o),(!(N&2)||e!==ee)&&(e===ee&&(!(N&2)&&(Bn|=r),Y===4&&mt(e,re)),ye(e,o),r===1&&N===0&&!(t.mode&1)&&(vr=V()+500,On&&Tt()))}function ye(e,t){var r=e.callbackNode;mp(e,t);var o=sn(e,e===ee?re:0);if(o===0)r!==null&&Oi(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Oi(r),t===1)e.tag===0?gg(Ec.bind(null,e)):Yl(Ec.bind(null,e)),lg(function(){!(N&6)&&Tt()}),r=null;else{switch(El(o)){case 1:r=Ls;break;case 4:r=xl;break;case 16:r=an;break;case 536870912:r=Rl;break;default:r=an}r=$d(r,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jd(e,t){if($o=-1,Xo=0,N&6)throw Error(C(327));var r=e.callbackNode;if(pr()&&e.callbackNode!==r)return null;var o=sn(e,e===ee?re:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Rn(e,o);else{t=o;var n=N;N|=2;var a=zd();(ee!==e||re!==t)&&(Xe=null,vr=V()+500,Ut(e,t));do try{jg();break}catch(i){_d(e,i)}while(!0);zs(),Sn.current=a,N=n,$!==null?t=0:(ee=null,re=0,t=Y)}if(t!==0){if(t===2&&(n=Wa(e),n!==0&&(o=n,t=ms(e,n))),t===1)throw r=po,Ut(e,0),mt(e,o),ye(e,V()),r;if(t===6)mt(e,o);else{if(n=e.current.alternate,!(o&30)&&!Lg(n)&&(t=Rn(e,o),t===2&&(a=Wa(e),a!==0&&(o=a,t=ms(e,a))),t===1))throw r=po,Ut(e,0),mt(e,o),ye(e,V()),r;switch(e.finishedWork=n,e.finishedLanes=o,t){case 0:case 1:throw Error(C(345));case 2:jt(e,ge,Xe);break;case 3:if(mt(e,o),(o&130023424)===o&&(t=si+500-V(),10<t)){if(sn(e,0)!==0)break;if(n=e.suspendedLanes,(n&o)!==o){de(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Ka(jt.bind(null,e,ge,Xe),t);break}jt(e,ge,Xe);break;case 4:if(mt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,n=-1;0<o;){var s=31-Ue(o);a=1<<s,s=t[s],s>n&&(n=s),o&=~a}if(o=n,o=V()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Dg(o/1960))-o,10<o){e.timeoutHandle=Ka(jt.bind(null,e,ge,Xe),o);break}jt(e,ge,Xe);break;case 5:jt(e,ge,Xe);break;default:throw Error(C(329))}}}return ye(e,V()),e.callbackNode===r?Jd.bind(null,e):null}function ms(e,t){var r=Gr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Rn(e,t),e!==2&&(t=ge,ge=r,t!==null&&hs(t)),e}function hs(e){ge===null?ge=e:ge.push.apply(ge,e)}function Lg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var n=r[o],a=n.getSnapshot;n=n.value;try{if(!Fe(a(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~ai,t&=~Bn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ue(t),o=1<<r;e[r]=-1,t&=~o}}function Ec(e){if(N&6)throw Error(C(327));pr();var t=sn(e,0);if(!(t&1))return ye(e,V()),null;var r=Rn(e,t);if(e.tag!==0&&r===2){var o=Wa(e);o!==0&&(t=o,r=ms(e,o))}if(r===1)throw r=po,Ut(e,0),mt(e,t),ye(e,V()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ge,Xe),ye(e,V()),null}function ii(e,t){var r=N;N|=1;try{return e(t)}finally{N=r,N===0&&(vr=V()+500,On&&Tt())}}function _t(e){ft!==null&&ft.tag===0&&!(N&6)&&pr();var t=N;N|=1;var r=Ie.transition,o=B;try{if(Ie.transition=null,B=1,e)return e()}finally{B=o,Ie.transition=r,N=t,!(N&6)&&Tt()}}function ci(){be=sr.current,H(sr)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,cg(r)),$!==null)for(r=$.return;r!==null;){var o=r;switch(Hs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&pn();break;case 3:yr(),H(he),H(ie),Xs();break;case 5:$s(o);break;case 4:yr();break;case 13:H(_);break;case 19:H(_);break;case 10:Gs(o.type._context);break;case 22:case 23:ci()}r=r.return}if(ee=e,$=e=xt(e.current,null),re=be=t,Y=0,po=null,ai=Bn=Jt=0,ge=Gr=null,Nt!==null){for(t=0;t<Nt.length;t++)if(r=Nt[t],o=r.interleaved,o!==null){r.interleaved=null;var n=o.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,o.next=s}r.pending=o}Nt=null}return e}function _d(e,t){do{var r=$;try{if(zs(),Qo.current=kn,wn){for(var o=z.memoizedState;o!==null;){var n=o.queue;n!==null&&(n.pending=null),o=o.next}wn=!1}if(Ht=0,Z=X=z=null,_r=!1,co=0,ni.current=null,r===null||r.return===null){Y=1,po=t,$=null;break}e:{var a=e,s=r.return,i=r,c=t;if(t=re,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,m=i,u=m.tag;if(!(m.mode&1)&&(u===0||u===11||u===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=mc(s);if(v!==null){v.flags&=-257,hc(v,s,i,a,t),v.mode&1&&gc(a,l,t),t=v,c=l;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){gc(a,l,t),li();break e}c=Error(C(426))}}else if(J&&i.mode&1){var x=mc(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),hc(x,s,i,a,t),Js(br(c,i));break e}}a=c=br(c,i),Y!==4&&(Y=2),Gr===null?Gr=[a]:Gr.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=Ed(a,c,t);ic(a,d);break e;case 1:i=c;var p=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(St===null||!St.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Id(a,i,t);ic(a,S);break e}}a=a.return}while(a!==null)}Qd(r)}catch(R){t=R,$===r&&r!==null&&($=r=r.return);continue}break}while(!0)}function zd(){var e=Sn.current;return Sn.current=kn,e===null?kn:e}function li(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(Jt&268435455)&&!(Bn&268435455)||mt(ee,re)}function Rn(e,t){var r=N;N|=2;var o=zd();(ee!==e||re!==t)&&(Xe=null,Ut(e,t));do try{Mg();break}catch(n){_d(e,n)}while(!0);if(zs(),N=r,Sn.current=o,$!==null)throw Error(C(261));return ee=null,re=0,Y}function Mg(){for(;$!==null;)Gd($)}function jg(){for(;$!==null&&!ap();)Gd($)}function Gd(e){var t=Vd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Qd(e):$=t,ni.current=null}function Qd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Eg(r,t),r!==null){r.flags&=32767,$=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,$=null;return}}else if(r=Ag(r,t,be),r!==null){$=r;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);Y===0&&(Y=5)}function jt(e,t,r){var o=B,n=Ie.transition;try{Ie.transition=null,B=1,Og(e,t,r,o)}finally{Ie.transition=n,B=o}return null}function Og(e,t,r,o){do pr();while(ft!==null);if(N&6)throw Error(C(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(hp(e,a),e===ee&&($=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Uo||(Uo=!0,$d(an,function(){return pr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ie.transition,Ie.transition=null;var s=B;B=1;var i=N;N|=4,ni.current=null,Tg(e,r),Fd(r,e),tg(Ga),cn=!!za,Ga=za=null,e.current=r,Pg(r),sp(),N=i,B=s,Ie.transition=a}else e.current=r;if(Uo&&(Uo=!1,ft=e,xn=n),a=e.pendingLanes,a===0&&(St=null),lp(r.stateNode),ye(e,V()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],o(n.value,{componentStack:n.stack,digest:n.digest});if(Cn)throw Cn=!1,e=ps,ps=null,e;return xn&1&&e.tag!==0&&pr(),a=e.pendingLanes,a&1?e===gs?Qr++:(Qr=0,gs=e):Qr=0,Tt(),null}function pr(){if(ft!==null){var e=El(xn),t=Ie.transition,r=B;try{if(Ie.transition=null,B=16>e?16:e,ft===null)var o=!1;else{if(e=ft,ft=null,xn=0,N&6)throw Error(C(331));var n=N;for(N|=4,P=e.current;P!==null;){var a=P,s=a.child;if(P.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var l=i[c];for(P=l;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:zr(8,m,a)}var u=m.child;if(u!==null)u.return=m,P=u;else for(;P!==null;){m=P;var h=m.sibling,v=m.return;if(Ud(m),m===l){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var w=a.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}P=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,P=s;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zr(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,P=d;break e}P=a.return}}var p=e.current;for(P=p;P!==null;){s=P;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,P=f;else e:for(s=p;P!==null;){if(i=P,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Un(9,i)}}catch(R){K(i,i.return,R)}if(i===s){P=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,P=S;break e}P=i.return}}if(N=n,Tt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Pn,e)}catch{}o=!0}return o}finally{B=r,Ie.transition=t}}return!1}function Ic(e,t,r){t=br(r,t),t=Ed(e,t,1),e=kt(e,t,1),t=de(),e!==null&&(ho(e,1,t),ye(e,t))}function K(e,t,r){if(e.tag===3)Ic(e,e,r);else for(;t!==null;){if(t.tag===3){Ic(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(St===null||!St.has(o))){e=br(r,e),e=Id(t,e,1),t=kt(t,e,1),e=de(),t!==null&&(ho(t,1,e),ye(t,e));break}}t=t.return}}function Ng(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(Y===4||Y===3&&(re&130023424)===re&&500>V()-si?Ut(e,0):ai|=r),ye(e,t)}function Kd(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var r=de();e=nt(e,t),e!==null&&(ho(e,t,r),ye(e,r))}function qg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Kd(e,r)}function Ug(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(C(314))}o!==null&&o.delete(t),Kd(e,r)}var Vd;Vd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return me=!1,Rg(e,t,r);me=!!(e.flags&131072)}else me=!1,J&&t.flags&1048576&&Zl(t,hn,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Vo(e,t),e=t.pendingProps;var n=mr(t,ie.current);ur(t,r),n=Zs(null,t,o,e,n,r);var a=ei();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(o)?(a=!0,gn(t)):a=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Ks(t),n.updater=qn,t.stateNode=n,n._reactInternals=t,ts(t,o,e,r),t=ns(null,t,o,!0,a,r)):(t.tag=0,J&&a&&Fs(t),le(null,t,n,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,n=o._init,o=n(o._payload),t.type=o,n=t.tag=Wg(o),e=Oe(o,e),n){case 0:t=os(null,t,o,e,r);break e;case 1:t=bc(null,t,o,e,r);break e;case 11:t=fc(null,t,o,e,r);break e;case 14:t=yc(null,t,o,Oe(o.type,e),r);break e}throw Error(C(306,o,""))}return t;case 0:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Oe(o,n),os(e,t,o,n,r);case 1:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Oe(o,n),bc(e,t,o,n,r);case 3:e:{if(Ld(t),e===null)throw Error(C(387));o=t.pendingProps,a=t.memoizedState,n=a.element,ad(e,t),bn(t,o,null,r);var s=t.memoizedState;if(o=s.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){n=br(Error(C(423)),t),t=vc(e,t,o,r,n);break e}else if(o!==n){n=br(Error(C(424)),t),t=vc(e,t,o,r,n);break e}else for(ve=wt(t.stateNode.containerInfo.firstChild),we=t,J=!0,qe=null,r=od(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),o===n){t=at(e,t,r);break e}le(e,t,o,r)}t=t.child}return t;case 5:return sd(t),e===null&&Ya(t),o=t.type,n=t.pendingProps,a=e!==null?e.memoizedProps:null,s=n.children,Qa(o,n)?s=null:a!==null&&Qa(o,a)&&(t.flags|=32),Dd(e,t),le(e,t,s,r),t.child;case 6:return e===null&&Ya(t),null;case 13:return Md(e,t,r);case 4:return Vs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=fr(t,null,o,r):le(e,t,o,r),t.child;case 11:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Oe(o,n),fc(e,t,o,n,r);case 7:return le(e,t,t.pendingProps,r),t.child;case 8:return le(e,t,t.pendingProps.children,r),t.child;case 12:return le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,n=t.pendingProps,a=t.memoizedProps,s=n.value,W(fn,o._currentValue),o._currentValue=s,a!==null)if(Fe(a.value,s)){if(a.children===n.children&&!he.current){t=at(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){s=a.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=tt(-1,r&-r),c.tag=2;var l=a.updateQueue;if(l!==null){l=l.shared;var m=l.pending;m===null?c.next=c:(c.next=m.next,m.next=c),l.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Za(a.return,r,t),i.lanes|=r;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(C(341));s.lanes|=r,i=s.alternate,i!==null&&(i.lanes|=r),Za(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}le(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,o=t.pendingProps.children,ur(t,r),n=Te(n),o=o(n),t.flags|=1,le(e,t,o,r),t.child;case 14:return o=t.type,n=Oe(o,t.pendingProps),n=Oe(o.type,n),yc(e,t,o,n,r);case 15:return Td(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Oe(o,n),Vo(e,t),t.tag=1,fe(o)?(e=!0,gn(t)):e=!1,ur(t,r),Ad(t,o,n),ts(t,o,n,r),ns(null,t,o,!0,e,r);case 19:return jd(e,t,r);case 22:return Pd(e,t,r)}throw Error(C(156,t.tag))};function $d(e,t){return Cl(e,t)}function Bg(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,r,o){return new Bg(e,t,r,o)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wg(e){if(typeof e=="function")return di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Ps)return 14}return 2}function xt(e,t){var r=e.alternate;return r===null?(r=Ee(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yo(e,t,r,o,n,a){var s=2;if(o=e,typeof e=="function")di(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return Bt(r.children,n,a,t);case Is:s=8,n|=8;break;case Ra:return e=Ee(12,r,t,n|2),e.elementType=Ra,e.lanes=a,e;case Aa:return e=Ee(13,r,t,n),e.elementType=Aa,e.lanes=a,e;case Ea:return e=Ee(19,r,t,n),e.elementType=Ea,e.lanes=a,e;case sl:return Wn(r,n,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nl:s=10;break e;case al:s=9;break e;case Ts:s=11;break e;case Ps:s=14;break e;case ut:s=16,o=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ee(s,r,t,n),t.elementType=e,t.type=o,t.lanes=a,t}function Bt(e,t,r,o){return e=Ee(7,e,o,t),e.lanes=r,e}function Wn(e,t,r,o){return e=Ee(22,e,o,t),e.elementType=sl,e.lanes=r,e.stateNode={isHidden:!1},e}function ya(e,t,r){return e=Ee(6,e,null,t),e.lanes=r,e}function ba(e,t,r){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fg(e,t,r,o,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yn(0),this.expirationTimes=Yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yn(0),this.identifierPrefix=o,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function ui(e,t,r,o,n,a,s,i,c){return e=new Fg(e,t,r,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ks(a),e}function Hg(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return At;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(fe(r))return Xl(e,r,t)}return t}function Yd(e,t,r,o,n,a,s,i,c){return e=ui(r,o,!0,e,n,a,s,i,c),e.context=Xd(null),r=e.current,o=de(),n=Ct(r),a=tt(o,n),a.callback=t??null,kt(r,a,n),e.current.lanes=n,ho(e,n,o),ye(e,o),e}function Fn(e,t,r,o){var n=t.current,a=de(),s=Ct(n);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=tt(a,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=kt(n,t,s),e!==null&&(Be(e,n,s,a),Go(e,n,s)),s}function An(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function pi(e,t){Tc(e,t),(e=e.alternate)&&Tc(e,t)}function Jg(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function gi(e){this._internalRoot=e}Hn.prototype.render=gi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Fn(e,t,null,null)};Hn.prototype.unmount=gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){Fn(null,e,null,null)}),t[ot]=null}};function Hn(e){this._internalRoot=e}Hn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<gt.length&&t!==0&&t<gt[r].priority;r++);gt.splice(r,0,e),r===0&&Ll(e)}};function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function _g(e,t,r,o,n){if(n){if(typeof o=="function"){var a=o;o=function(){var l=An(s);a.call(l)}}var s=Yd(t,o,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=s,e[ot]=s.current,oo(e.nodeType===8?e.parentNode:e),_t(),s}for(;n=e.lastChild;)e.removeChild(n);if(typeof o=="function"){var i=o;o=function(){var l=An(c);i.call(l)}}var c=ui(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=c,e[ot]=c.current,oo(e.nodeType===8?e.parentNode:e),_t(function(){Fn(t,c,r,o)}),c}function _n(e,t,r,o,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var i=n;n=function(){var c=An(s);i.call(c)}}Fn(t,s,e,n)}else s=_g(r,t,e,n,o);return An(s)}Il=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=qr(t.pendingLanes);r!==0&&(Ms(t,r|1),ye(t,V()),!(N&6)&&(vr=V()+500,Tt()))}break;case 13:_t(function(){var o=nt(e,1);if(o!==null){var n=de();Be(o,e,1,n)}}),pi(e,1)}};js=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var r=de();Be(t,e,134217728,r)}pi(e,134217728)}};Tl=function(e){if(e.tag===13){var t=Ct(e),r=nt(e,t);if(r!==null){var o=de();Be(r,e,t,o)}pi(e,t)}};Pl=function(){return B};Dl=function(e,t){var r=B;try{return B=e,t()}finally{B=r}};qa=function(e,t,r){switch(t){case"input":if(Pa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var n=jn(o);if(!n)throw Error(C(90));cl(o),Pa(o,n)}}}break;case"textarea":dl(e,r);break;case"select":t=r.value,t!=null&&ir(e,!!r.multiple,t,!1)}};yl=ii;bl=_t;var zg={usingClientEntryPoint:!1,Events:[yo,er,jn,hl,fl,ii]},Mr={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gg={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kl(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Pn=Bo.inject(Gg),Qe=Bo}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;Se.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mi(t))throw Error(C(200));return Hg(e,t,null,r)};Se.createRoot=function(e,t){if(!mi(e))throw Error(C(299));var r=!1,o="",n=Zd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=ui(e,1,!1,null,null,r,!1,o,n),e[ot]=t.current,oo(e.nodeType===8?e.parentNode:e),new gi(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=kl(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return _t(e)};Se.hydrate=function(e,t,r){if(!Jn(t))throw Error(C(200));return _n(null,e,t,!0,r)};Se.hydrateRoot=function(e,t,r){if(!mi(e))throw Error(C(405));var o=r!=null&&r.hydratedSources||null,n=!1,a="",s=Zd;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Yd(t,null,e,1,r??null,n,!1,a,s),e[ot]=t.current,oo(e),o)for(e=0;e<o.length;e++)r=o[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Hn(t)};Se.render=function(e,t,r){if(!Jn(t))throw Error(C(200));return _n(null,e,t,!1,r)};Se.unmountComponentAtNode=function(e){if(!Jn(e))throw Error(C(40));return e._reactRootContainer?(_t(function(){_n(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Se.unstable_batchedUpdates=ii;Se.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Jn(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return _n(e,t,r,!1,o)};Se.version="18.3.1-next-f1338f8080-20240426";function eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eu)}catch(e){console.error(e)}}eu(),el.exports=Se;var Qg=el.exports,tu,Dc=Qg;tu=Dc.createRoot,Dc.hydrateRoot;/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lc="popstate";function Mc(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Kg(e={}){function t(o,n){var l;let a=(l=n.state)==null?void 0:l.masked,{pathname:s,search:i,hash:c}=a||o.location;return fs("",{pathname:s,search:i,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default",a?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,n){return typeof n=="string"?n:go(n)}return $g(t,r,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ve(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vg(){return Math.random().toString(36).substring(2,10)}function jc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function fs(e,t,r=null,o,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Cr(t):t,state:r,key:t&&t.key||o||Vg(),unstable_mask:n}}function go({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function $g(e,t,r,o={}){let{window:n=document.defaultView,v5Compat:a=!1}=o,s=n.history,i="POP",c=null,l=m();l==null&&(l=0,s.replaceState({...s.state,idx:l},""));function m(){return(s.state||{idx:null}).idx}function u(){i="POP";let x=m(),d=x==null?null:x-l;l=x,c&&c({action:i,location:k.location,delta:d})}function h(x,d){i="PUSH";let p=Mc(x)?x:fs(k.location,x,d);l=m()+1;let f=jc(p,l),S=k.createHref(p.unstable_mask||p);try{s.pushState(f,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;n.location.assign(S)}a&&c&&c({action:i,location:k.location,delta:1})}function v(x,d){i="REPLACE";let p=Mc(x)?x:fs(k.location,x,d);l=m();let f=jc(p,l),S=k.createHref(p.unstable_mask||p);s.replaceState(f,"",S),a&&c&&c({action:i,location:k.location,delta:0})}function w(x){return Xg(x)}let k={get action(){return i},get location(){return e(n,s)},listen(x){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(Lc,u),c=x,()=>{n.removeEventListener(Lc,u),c=null}},createHref(x){return t(n,x)},createURL:w,encodeLocation(x){let d=w(x);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:v,go(x){return s.go(x)}};return k}function Xg(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),G(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:go(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function ru(e,t,r="/"){return Yg(e,t,r,!1)}function Yg(e,t,r,o){let n=typeof t=="string"?Cr(t):t,a=st(n.pathname||"/",r);if(a==null)return null;let s=ou(e);Zg(s);let i=null;for(let c=0;i==null&&c<s.length;++c){let l=dm(a);i=cm(s[c],l,o)}return i}function ou(e,t=[],r=[],o="",n=!1){let a=(s,i,c=n,l)=>{let m={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&c)return;G(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let u=We([o,m.relativePath]),h=r.concat(m);s.children&&s.children.length>0&&(G(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),ou(s.children,t,h,u,c)),!(s.path==null&&!s.index)&&t.push({path:u,score:sm(u,s.index),routesMeta:h})};return e.forEach((s,i)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))a(s,i);else for(let l of nu(s.path))a(s,i,!0,l)}),t}function nu(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,n=r.endsWith("?"),a=r.replace(/\?$/,"");if(o.length===0)return n?[a,""]:[a];let s=nu(o.join("/")),i=[];return i.push(...s.map(c=>c===""?a:[a,c].join("/"))),n&&i.push(...s),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function Zg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:im(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var em=/^:[\w-]+$/,tm=3,rm=2,om=1,nm=10,am=-2,Oc=e=>e==="*";function sm(e,t){let r=e.split("/"),o=r.length;return r.some(Oc)&&(o+=am),t&&(o+=rm),r.filter(n=>!Oc(n)).reduce((n,a)=>n+(em.test(a)?tm:a===""?om:nm),o)}function im(e,t){return e.length===t.length&&e.slice(0,-1).every((o,n)=>o===t[n])?e[e.length-1]-t[t.length-1]:0}function cm(e,t,r=!1){let{routesMeta:o}=e,n={},a="/",s=[];for(let i=0;i<o.length;++i){let c=o[i],l=i===o.length-1,m=a==="/"?t:t.slice(a.length)||"/",u=En({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},m),h=c.route;if(!u&&l&&r&&!o[o.length-1].route.index&&(u=En({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!u)return null;Object.assign(n,u.params),s.push({params:n,pathname:We([a,u.pathname]),pathnameBase:mm(We([a,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(a=We([a,u.pathnameBase]))}return s}function En(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=lm(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let a=n[0],s=a.replace(/(.)\/+$/,"$1"),i=n.slice(1);return{params:o.reduce((l,{paramName:m,isOptional:u},h)=>{if(m==="*"){let w=i[h]||"";s=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=i[h];return u&&!v?l[m]=void 0:l[m]=(v||"").replace(/%2F/g,"/"),l},{}),pathname:a,pathnameBase:s,pattern:e}}function lm(e,t=!1,r=!0){Ve(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,c,l,m)=>{if(o.push({paramName:i,isOptional:c!=null}),c){let u=m.charAt(l+s.length);return u&&u!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),o]}function dm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ve(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function st(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}var um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function pm(e,t="/"){let{pathname:r,search:o="",hash:n=""}=typeof e=="string"?Cr(e):e,a;return r?(r=su(r),r.startsWith("/")?a=Nc(r.substring(1),"/"):a=Nc(r,t)):a=t,{pathname:a,search:hm(o),hash:fm(n)}}function Nc(e,t){let r=In(t).split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function va(e,t,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function au(e){let t=gm(e);return t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase)}function hi(e,t,r,o=!1){let n;typeof e=="string"?n=Cr(e):(n={...e},G(!n.pathname||!n.pathname.includes("?"),va("?","pathname","search",n)),G(!n.pathname||!n.pathname.includes("#"),va("#","pathname","hash",n)),G(!n.search||!n.search.includes("#"),va("#","search","hash",n)));let a=e===""||n.pathname==="",s=a?"/":n.pathname,i;if(s==null)i=r;else{let u=t.length-1;if(!o&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),u-=1;n.pathname=h.join("/")}i=u>=0?t[u]:"/"}let c=pm(n,i),l=s&&s!=="/"&&s.endsWith("/"),m=(a||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||m)&&(c.pathname+="/"),c}var su=e=>e.replace(/\/\/+/g,"/"),We=e=>su(e.join("/")),In=e=>e.replace(/\/+$/,""),mm=e=>In(e).replace(/^\/*/,"/"),hm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ym=class{constructor(e,t,r,o=!1){this.status=e,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function bm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function vm(e){let t=e.map(r=>r.route.path).filter(Boolean);return We(t)||"/"}var iu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function cu(e,t){let r=e;if(typeof r!="string"||!um.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,n=!1;if(iu)try{let a=new URL(window.location.href),s=r.startsWith("//")?new URL(a.protocol+r):new URL(r),i=st(s.pathname,t);s.origin===a.origin&&i!=null?r=i+s.search+s.hash:n=!0}catch{Ve(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:n,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lu=["POST","PUT","PATCH","DELETE"];new Set(lu);var wm=["GET",...lu];new Set(wm);var xr=b.createContext(null);xr.displayName="DataRouter";var zn=b.createContext(null);zn.displayName="DataRouterState";var du=b.createContext(!1);function km(){return b.useContext(du)}var uu=b.createContext({isTransitioning:!1});uu.displayName="ViewTransition";var Sm=b.createContext(new Map);Sm.displayName="Fetchers";var Cm=b.createContext(null);Cm.displayName="Await";var De=b.createContext(null);De.displayName="Navigation";var vo=b.createContext(null);vo.displayName="Location";var ct=b.createContext({outlet:null,matches:[],isDataRoute:!1});ct.displayName="Route";var fi=b.createContext(null);fi.displayName="RouteError";var pu="REACT_ROUTER_ERROR",xm="REDIRECT",Rm="ROUTE_ERROR_RESPONSE";function Am(e){if(e.startsWith(`${pu}:${xm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Em(e){if(e.startsWith(`${pu}:${Rm}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ym(t.status,t.statusText,t.data)}catch{}}function Im(e,{relative:t}={}){G(wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=b.useContext(De),{hash:n,pathname:a,search:s}=ko(e,{relative:t}),i=a;return r!=="/"&&(i=a==="/"?r:We([r,a])),o.createHref({pathname:i,search:s,hash:n})}function wo(){return b.useContext(vo)!=null}function lt(){return G(wo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(vo).location}var gu="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mu(e){b.useContext(De).static||b.useLayoutEffect(e)}function Tm(){let{isDataRoute:e}=b.useContext(ct);return e?Hm():Pm()}function Pm(){G(wo(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(xr),{basename:t,navigator:r}=b.useContext(De),{matches:o}=b.useContext(ct),{pathname:n}=lt(),a=JSON.stringify(au(o)),s=b.useRef(!1);return mu(()=>{s.current=!0}),b.useCallback((c,l={})=>{if(Ve(s.current,gu),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=hi(c,JSON.parse(a),n,l.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:We([t,m.pathname])),(l.replace?r.replace:r.push)(m,l.state,l)},[t,r,a,n,e])}b.createContext(null);function ko(e,{relative:t}={}){let{matches:r}=b.useContext(ct),{pathname:o}=lt(),n=JSON.stringify(au(r));return b.useMemo(()=>hi(e,JSON.parse(n),o,t==="path"),[e,n,o,t])}function Dm(e,t){return hu(e,t)}function hu(e,t,r){var x;G(wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(De),{matches:n}=b.useContext(ct),a=n[n.length-1],s=a?a.params:{},i=a?a.pathname:"/",c=a?a.pathnameBase:"/",l=a&&a.route;{let d=l&&l.path||"";yu(i,!l||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let m=lt(),u;if(t){let d=typeof t=="string"?Cr(t):t;G(c==="/"||((x=d.pathname)==null?void 0:x.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`),u=d}else u=m;let h=u.pathname||"/",v=h;if(c!=="/"){let d=c.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let w=ru(e,{pathname:v});Ve(l||w!=null,`No routes matched location "${u.pathname}${u.search}${u.hash}" `),Ve(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${u.pathname}${u.search}${u.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Nm(w&&w.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:We([c,o.encodeLocation?o.encodeLocation(d.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:We([c,o.encodeLocation?o.encodeLocation(d.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),n,r);return t&&k?b.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...u},navigationType:"POP"}},k):k}function Lm(){let e=Fm(),t=bm(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:a},"ErrorBoundary")," or"," ",b.createElement("code",{style:a},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:n},r):null,s)}var Mm=b.createElement(Lm,null),fu=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Em(e.digest);r&&(e=r)}let t=e!==void 0?b.createElement(ct.Provider,{value:this.props.routeContext},b.createElement(fi.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?b.createElement(jm,{error:e},t):t}};fu.contextType=du;var wa=new WeakMap;function jm({children:e,error:t}){let{basename:r}=b.useContext(De);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let o=Am(t.digest);if(o){let n=wa.get(t);if(n)throw n;let a=cu(o.location,r);if(iu&&!wa.get(t))if(a.isExternal||o.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:o.replace}));throw wa.set(t,s),s}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function Om({routeContext:e,match:t,children:r}){let o=b.useContext(xr);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(ct.Provider,{value:e},r)}function Nm(e,t=[],r){let o=r==null?void 0:r.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let n=e,a=o==null?void 0:o.errors;if(a!=null){let m=n.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);G(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),n=n.slice(0,Math.min(n.length,m+1))}let s=!1,i=-1;if(r&&o){s=o.renderFallback;for(let m=0;m<n.length;m++){let u=n[m];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(i=m),u.route.id){let{loaderData:h,errors:v}=o,w=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!v||v[u.route.id]===void 0);if(u.route.lazy||w){r.isStatic&&(s=!0),i>=0?n=n.slice(0,i+1):n=[n[0]];break}}}}let c=r==null?void 0:r.onError,l=o&&c?(m,u)=>{var h,v;c(m,{location:o.location,params:((v=(h=o.matches)==null?void 0:h[0])==null?void 0:v.params)??{},unstable_pattern:vm(o.matches),errorInfo:u})}:void 0;return n.reduceRight((m,u,h)=>{let v,w=!1,k=null,x=null;o&&(v=a&&u.route.id?a[u.route.id]:void 0,k=u.route.errorElement||Mm,s&&(i<0&&h===0?(yu("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):i===h&&(w=!0,x=u.route.hydrateFallbackElement||null)));let d=t.concat(n.slice(0,h+1)),p=()=>{let f;return v?f=k:w?f=x:u.route.Component?f=b.createElement(u.route.Component,null):u.route.element?f=u.route.element:f=m,b.createElement(Om,{match:u,routeContext:{outlet:m,matches:d,isDataRoute:o!=null},children:f})};return o&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?b.createElement(fu,{location:o.location,revalidation:o.revalidation,component:k,error:v,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:l}):p()},null)}function yi(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(e){let t=b.useContext(xr);return G(t,yi(e)),t}function Um(e){let t=b.useContext(zn);return G(t,yi(e)),t}function Bm(e){let t=b.useContext(ct);return G(t,yi(e)),t}function bi(e){let t=Bm(e),r=t.matches[t.matches.length-1];return G(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Wm(){return bi("useRouteId")}function Fm(){var o;let e=b.useContext(fi),t=Um("useRouteError"),r=bi("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[r]}function Hm(){let{router:e}=qm("useNavigate"),t=bi("useNavigate"),r=b.useRef(!1);return mu(()=>{r.current=!0}),b.useCallback(async(n,a={})=>{Ve(r.current,gu),r.current&&(typeof n=="number"?await e.navigate(n):await e.navigate(n,{fromRouteId:t,...a}))},[e,t])}var qc={};function yu(e,t,r){!t&&!qc[e]&&(qc[e]=!0,Ve(!1,r))}b.memo(Jm);function Jm({routes:e,future:t,state:r,isStatic:o,onError:n}){return hu(e,void 0,{state:r,isStatic:o,onError:n})}function ys(e){G(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _m({basename:e="/",children:t=null,location:r,navigationType:o="POP",navigator:n,static:a=!1,unstable_useTransitions:s}){G(!wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:i,navigator:n,static:a,unstable_useTransitions:s,future:{}}),[i,n,a,s]);typeof r=="string"&&(r=Cr(r));let{pathname:l="/",search:m="",hash:u="",state:h=null,key:v="default",unstable_mask:w}=r,k=b.useMemo(()=>{let x=st(l,i);return x==null?null:{location:{pathname:x,search:m,hash:u,state:h,key:v,unstable_mask:w},navigationType:o}},[i,l,m,u,h,v,o,w]);return Ve(k!=null,`<Router basename="${i}"> is not able to match the URL "${l}${m}${u}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:b.createElement(De.Provider,{value:c},b.createElement(vo.Provider,{children:t,value:k}))}function zm({children:e,location:t}){return Dm(bs(e),t)}function bs(e,t=[]){let r=[];return b.Children.forEach(e,(o,n)=>{if(!b.isValidElement(o))return;let a=[...t,n];if(o.type===b.Fragment){r.push.apply(r,bs(o.props.children,a));return}G(o.type===ys,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),G(!o.props.index||!o.props.children,"An index route cannot have child routes.");let s={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=bs(o.props.children,a)),r.push(s)}),r}var Zo="get",en="application/x-www-form-urlencoded";function Gn(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Gm(e){return Gn(e)&&e.tagName.toLowerCase()==="button"}function Qm(e){return Gn(e)&&e.tagName.toLowerCase()==="form"}function Km(e){return Gn(e)&&e.tagName.toLowerCase()==="input"}function Vm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $m(e,t){return e.button===0&&(!t||t==="_self")&&!Vm(e)}var Wo=null;function Xm(){if(Wo===null)try{new FormData(document.createElement("form"),0),Wo=!1}catch{Wo=!0}return Wo}var Ym=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ka(e){return e!=null&&!Ym.has(e)?(Ve(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${en}"`),null):e}function Zm(e,t){let r,o,n,a,s;if(Qm(e)){let i=e.getAttribute("action");o=i?st(i,t):null,r=e.getAttribute("method")||Zo,n=ka(e.getAttribute("enctype"))||en,a=new FormData(e)}else if(Gm(e)||Km(e)&&(e.type==="submit"||e.type==="image")){let i=e.form;if(i==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||i.getAttribute("action");if(o=c?st(c,t):null,r=e.getAttribute("formmethod")||i.getAttribute("method")||Zo,n=ka(e.getAttribute("formenctype"))||ka(i.getAttribute("enctype"))||en,a=new FormData(i,e),!Xm()){let{name:l,type:m,value:u}=e;if(m==="image"){let h=l?`${l}.`:"";a.append(`${h}x`,"0"),a.append(`${h}y`,"0")}else l&&a.append(l,u)}}else{if(Gn(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Zo,o=null,n=en,s=e}return a&&n==="text/plain"&&(s=a,a=void 0),{action:o,method:r.toLowerCase(),encType:n,formData:a,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vi(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bu(e,t,r,o){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?n.pathname.endsWith("/")?n.pathname=`${n.pathname}_.${o}`:n.pathname=`${n.pathname}.${o}`:n.pathname==="/"?n.pathname=`_root.${o}`:t&&st(n.pathname,t)==="/"?n.pathname=`${In(t)}/_root.${o}`:n.pathname=`${In(n.pathname)}.${o}`,n}async function eh(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function th(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function rh(e,t,r){let o=await Promise.all(e.map(async n=>{let a=t.routes[n.route.id];if(a){let s=await eh(a,r);return s.links?s.links():[]}return[]}));return sh(o.flat(1).filter(th).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function Uc(e,t,r,o,n,a){let s=(c,l)=>r[l]?c.route.id!==r[l].route.id:!0,i=(c,l)=>{var m;return r[l].pathname!==c.pathname||((m=r[l].route.path)==null?void 0:m.endsWith("*"))&&r[l].params["*"]!==c.params["*"]};return a==="assets"?t.filter((c,l)=>s(c,l)||i(c,l)):a==="data"?t.filter((c,l)=>{var u;let m=o.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(s(c,l)||i(c,l))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((u=r[0])==null?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function oh(e,t,{includeHydrateFallback:r}={}){return nh(e.map(o=>{let n=t.routes[o.route.id];if(!n)return[];let a=[n.module];return n.clientActionModule&&(a=a.concat(n.clientActionModule)),n.clientLoaderModule&&(a=a.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(a=a.concat(n.hydrateFallbackModule)),n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function nh(e){return[...new Set(e)]}function ah(e){let t={},r=Object.keys(e).sort();for(let o of r)t[o]=e[o];return t}function sh(e,t){let r=new Set;return new Set(t),e.reduce((o,n)=>{let a=JSON.stringify(ah(n));return r.has(a)||(r.add(a),o.push({key:a,link:n})),o},[])}function wi(){let e=b.useContext(xr);return vi(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ih(){let e=b.useContext(zn);return vi(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ki=b.createContext(void 0);ki.displayName="FrameworkContext";function Si(){let e=b.useContext(ki);return vi(e,"You must render this element inside a <HydratedRouter> element"),e}function ch(e,t){let r=b.useContext(ki),[o,n]=b.useState(!1),[a,s]=b.useState(!1),{onFocus:i,onBlur:c,onMouseEnter:l,onMouseLeave:m,onTouchStart:u}=t,h=b.useRef(null);b.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let k=d=>{d.forEach(p=>{s(p.isIntersecting)})},x=new IntersectionObserver(k,{threshold:.5});return h.current&&x.observe(h.current),()=>{x.disconnect()}}},[e]),b.useEffect(()=>{if(o){let k=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(k)}}},[o]);let v=()=>{n(!0)},w=()=>{n(!1),s(!1)};return r?e!=="intent"?[a,h,{}]:[a,h,{onFocus:jr(i,v),onBlur:jr(c,w),onMouseEnter:jr(l,v),onMouseLeave:jr(m,w),onTouchStart:jr(u,v)}]:[!1,h,{}]}function jr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function lh({page:e,...t}){let r=km(),{router:o}=wi(),n=b.useMemo(()=>ru(o.routes,e,o.basename),[o.routes,e,o.basename]);return n?r?b.createElement(uh,{page:e,matches:n,...t}):b.createElement(ph,{page:e,matches:n,...t}):null}function dh(e){let{manifest:t,routeModules:r}=Si(),[o,n]=b.useState([]);return b.useEffect(()=>{let a=!1;return rh(e,t,r).then(s=>{a||n(s)}),()=>{a=!0}},[e,t,r]),o}function uh({page:e,matches:t,...r}){let o=lt(),{future:n}=Si(),{basename:a}=wi(),s=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let i=bu(e,a,n.unstable_trailingSlashAwareDataRequests,"rsc"),c=!1,l=[];for(let m of t)typeof m.route.shouldRevalidate=="function"?c=!0:l.push(m.route.id);return c&&l.length>0&&i.searchParams.set("_routes",l.join(",")),[i.pathname+i.search]},[a,n.unstable_trailingSlashAwareDataRequests,e,o,t]);return b.createElement(b.Fragment,null,s.map(i=>b.createElement("link",{key:i,rel:"prefetch",as:"fetch",href:i,...r})))}function ph({page:e,matches:t,...r}){let o=lt(),{future:n,manifest:a,routeModules:s}=Si(),{basename:i}=wi(),{loaderData:c,matches:l}=ih(),m=b.useMemo(()=>Uc(e,t,l,a,o,"data"),[e,t,l,a,o]),u=b.useMemo(()=>Uc(e,t,l,a,o,"assets"),[e,t,l,a,o]),h=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let k=new Set,x=!1;if(t.forEach(p=>{var S;let f=a.routes[p.route.id];!f||!f.hasLoader||(!m.some(R=>R.route.id===p.route.id)&&p.route.id in c&&((S=s[p.route.id])!=null&&S.shouldRevalidate)||f.hasClientLoader?x=!0:k.add(p.route.id))}),k.size===0)return[];let d=bu(e,i,n.unstable_trailingSlashAwareDataRequests,"data");return x&&k.size>0&&d.searchParams.set("_routes",t.filter(p=>k.has(p.route.id)).map(p=>p.route.id).join(",")),[d.pathname+d.search]},[i,n.unstable_trailingSlashAwareDataRequests,c,o,a,m,t,e,s]),v=b.useMemo(()=>oh(u,a),[u,a]),w=dh(u);return b.createElement(b.Fragment,null,h.map(k=>b.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...r})),v.map(k=>b.createElement("link",{key:k,rel:"modulepreload",href:k,...r})),w.map(({key:k,link:x})=>b.createElement("link",{key:k,nonce:r.nonce,...x,crossOrigin:x.crossOrigin??r.crossOrigin})))}function gh(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mh&&(window.__reactRouterVersion="7.14.2")}catch{}function hh({basename:e,children:t,unstable_useTransitions:r,window:o}){let n=b.useRef();n.current==null&&(n.current=Kg({window:o,v5Compat:!0}));let a=n.current,[s,i]=b.useState({action:a.action,location:a.location}),c=b.useCallback(l=>{r===!1?i(l):b.startTransition(()=>i(l))},[r]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(_m,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a,unstable_useTransitions:r})}var vu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wu=b.forwardRef(function({onClick:t,discover:r="render",prefetch:o="none",relative:n,reloadDocument:a,replace:s,unstable_mask:i,state:c,target:l,to:m,preventScrollReset:u,viewTransition:h,unstable_defaultShouldRevalidate:v,...w},k){let{basename:x,navigator:d,unstable_useTransitions:p}=b.useContext(De),f=typeof m=="string"&&vu.test(m),S=cu(m,x);m=S.to;let R=Im(m,{relative:n}),E=lt(),I=null;if(i){let xe=hi(i,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);x!=="/"&&(xe.pathname=xe.pathname==="/"?x:We([x,xe.pathname])),I=d.createHref(xe)}let[D,U,M]=ch(o,w),ce=bh(m,{replace:s,unstable_mask:i,state:c,target:l,preventScrollReset:u,relative:n,viewTransition:h,unstable_defaultShouldRevalidate:v,unstable_useTransitions:p});function Le(xe){t&&t(xe),xe.defaultPrevented||ce(xe)}let He=!(S.isExternal||a),Pt=b.createElement("a",{...w,...M,href:(He?I:void 0)||S.absoluteURL||R,onClick:He?Le:t,ref:gh(k,U),target:l,"data-discover":!f&&r==="render"?"true":void 0});return D&&!f?b.createElement(b.Fragment,null,Pt,b.createElement(lh,{page:R})):Pt});wu.displayName="Link";var vs=b.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:o="",end:n=!1,style:a,to:s,viewTransition:i,children:c,...l},m){let u=ko(s,{relative:l.relative}),h=lt(),v=b.useContext(zn),{navigator:w,basename:k}=b.useContext(De),x=v!=null&&Ch(u)&&i===!0,d=w.encodeLocation?w.encodeLocation(u).pathname:u.pathname,p=h.pathname,f=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(p=p.toLowerCase(),f=f?f.toLowerCase():null,d=d.toLowerCase()),f&&k&&(f=st(f,k)||f);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let R=p===d||!n&&p.startsWith(d)&&p.charAt(S)==="/",E=f!=null&&(f===d||!n&&f.startsWith(d)&&f.charAt(d.length)==="/"),I={isActive:R,isPending:E,isTransitioning:x},D=R?t:void 0,U;typeof o=="function"?U=o(I):U=[o,R?"active":null,E?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(I):a;return b.createElement(wu,{...l,"aria-current":D,className:U,ref:m,style:M,to:s,viewTransition:i},typeof c=="function"?c(I):c)});vs.displayName="NavLink";var fh=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:o,replace:n,state:a,method:s=Zo,action:i,onSubmit:c,relative:l,preventScrollReset:m,viewTransition:u,unstable_defaultShouldRevalidate:h,...v},w)=>{let{unstable_useTransitions:k}=b.useContext(De),x=kh(),d=Sh(i,{relative:l}),p=s.toLowerCase()==="get"?"get":"post",f=typeof i=="string"&&vu.test(i),S=R=>{if(c&&c(R),R.defaultPrevented)return;R.preventDefault();let E=R.nativeEvent.submitter,I=(E==null?void 0:E.getAttribute("formmethod"))||s,D=()=>x(E||R.currentTarget,{fetcherKey:t,method:I,navigate:r,replace:n,state:a,relative:l,preventScrollReset:m,viewTransition:u,unstable_defaultShouldRevalidate:h});k&&r!==!1?b.startTransition(()=>D()):D()};return b.createElement("form",{ref:w,method:p,action:d,onSubmit:o?c:S,...v,"data-discover":!f&&e==="render"?"true":void 0})});fh.displayName="Form";function yh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ku(e){let t=b.useContext(xr);return G(t,yh(e)),t}function bh(e,{target:t,replace:r,unstable_mask:o,state:n,preventScrollReset:a,relative:s,viewTransition:i,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let m=Tm(),u=lt(),h=ko(e,{relative:s});return b.useCallback(v=>{if($m(v,t)){v.preventDefault();let w=r!==void 0?r:go(u)===go(h),k=()=>m(e,{replace:w,unstable_mask:o,state:n,preventScrollReset:a,relative:s,viewTransition:i,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>k()):k()}},[u,m,h,r,o,n,t,e,a,s,i,c,l])}var vh=0,wh=()=>`__${String(++vh)}__`;function kh(){let{router:e}=ku("useSubmit"),{basename:t}=b.useContext(De),r=Wm(),o=e.fetch,n=e.navigate;return b.useCallback(async(a,s={})=>{let{action:i,method:c,encType:l,formData:m,body:u}=Zm(a,t);if(s.navigate===!1){let h=s.fetcherKey||wh();await o(h,r,s.action||i,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:u,formMethod:s.method||c,formEncType:s.encType||l,flushSync:s.flushSync})}else await n(s.action||i,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:u,formMethod:s.method||c,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[o,n,t,r])}function Sh(e,{relative:t}={}){let{basename:r}=b.useContext(De),o=b.useContext(ct);G(o,"useFormAction must be used inside a RouteContext");let[n]=o.matches.slice(-1),a={...ko(e||".",{relative:t})},s=lt();if(e==null){a.search=s.search;let i=new URLSearchParams(a.search),c=i.getAll("index");if(c.some(m=>m==="")){i.delete("index"),c.filter(u=>u).forEach(u=>i.append("index",u));let m=i.toString();a.search=m?`?${m}`:""}}return(!e||e===".")&&n.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:We([r,a.pathname])),go(a)}function Ch(e,{relative:t}={}){let r=b.useContext(uu);G(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ku("useViewTransitionState"),n=ko(e,{relative:t});if(!r.isTransitioning)return!1;let a=st(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=st(r.nextLocation.pathname,o)||r.nextLocation.pathname;return En(n.pathname,s)!=null||En(n.pathname,a)!=null}const je=[{id:"day1",day:1,title:"Java Basics",topics:["Java Overview","JVM / JDK / JRE","Platform Independence","main() Method","Data Types","Access Modifiers","Class vs Object"],questions:[{q:"What is Java and what are its key features?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.<br/><br/>
                <strong>Interview Answer:</strong> Java was created by James Gosling at Sun Microsystems in 1995. Its key features are:
                <br/>• <strong>Simple</strong> — familiar C/C++ syntax, no pointers or manual memory management.
                <br/>• <strong>Object-Oriented</strong> — everything is an object (except primitives).
                <br/>• <strong>Platform-Independent</strong> — compiled to bytecode that runs on any JVM.
                <br/>• <strong>Robust</strong> — strong type checking, exception handling, garbage collection.
                <br/>• <strong>Secure</strong> — no explicit pointer arithmetic; bytecode verifier in JVM.
                <br/>• <strong>Multithreaded</strong> — built-in thread support.
                <br/>• <strong>High Performance</strong> — JIT compilation converts bytecode to native code at runtime.
              </p>`},{q:"What is the difference between JDK, JRE, and JVM?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three components form a layered architecture for Java execution.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>JVM (Java Virtual Machine)</strong> — the runtime engine that executes Java bytecode. It is platform-specific (each OS has its own JVM implementation) but provides a platform-independent execution environment for bytecode.
                <br/>• <strong>JRE (Java Runtime Environment)</strong> — JVM + the standard class libraries (java.lang, java.util, etc.). Needed to <em>run</em> Java applications.
                <br/>• <strong>JDK (Java Development Kit)</strong> — JRE + development tools: <code>javac</code> (compiler), <code>javadoc</code>, <code>jar</code>, debugger. Needed to <em>develop</em> Java applications.
                <br/><br/>Relationship: <strong>JDK ⊃ JRE ⊃ JVM</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>┌─────────────────────────────┐
│           JDK               │
│  ┌──────────────────────┐   │
│  │        JRE           │   │
│  │  ┌───────────────┐   │   │
│  │  │     JVM       │   │   │
│  │  └───────────────┘   │   │
│  │  + Class Libraries   │   │
│  └──────────────────────┘   │
│  + javac, javadoc, jar …    │
└─────────────────────────────┘</code></pre>
              </div>`},{q:"How does Java achieve platform independence?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's "Write Once, Run Anywhere" (WORA) principle is the result of an intermediate compilation step.<br/><br/>
                <strong>Interview Answer:</strong> The Java compiler (<code>javac</code>) compiles source code (<code>.java</code>) into <strong>bytecode</strong> (<code>.class</code> files), an intermediate binary format that is neither source code nor native machine code. The JVM on the target machine interprets or JIT-compiles this bytecode into native instructions. Because every OS platform ships its own JVM implementation, the same bytecode runs on Windows, Linux, and macOS without recompilation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Hello.java  ──javac──▶  Hello.class (bytecode)
                               │
               ┌───────────────┼───────────────┐
               ▼               ▼               ▼
          JVM (Windows)  JVM (Linux)   JVM (macOS)
          native code    native code   native code</code></pre>
              </div>`},{q:"Explain the <code>main()</code> method signature in Java.",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The <code>main()</code> method is the entry point the JVM looks for to start any standalone Java application.<br/><br/>
                <strong>Interview Answer:</strong> The signature must be exactly <code>public static void main(String[] args)</code>:
                <br/>• <code>public</code> — JVM must access it from outside the class.
                <br/>• <code>static</code> — JVM calls it without creating an instance.
                <br/>• <code>void</code> — no return value is expected by the JVM.
                <br/>• <code>String[] args</code> — command-line arguments passed as an array of Strings.
                <br/><br/>From Java 21, unnamed classes simplify boilerplate for scripts, but the classic signature remains the standard.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, " + (args.length > 0 ? args[0] : "World"));
    }
}</code></pre>
              </div>`},{q:"What are the eight primitive data types in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Primitives are the most basic data types — they are not objects and are stored on the stack.<br/><br/>
                <strong>Interview Answer:</strong> Java has exactly eight primitive types grouped by kind:
                <br/>• <strong>Integer:</strong> <code>byte</code> (8-bit), <code>short</code> (16-bit), <code>int</code> (32-bit), <code>long</code> (64-bit)
                <br/>• <strong>Floating-point:</strong> <code>float</code> (32-bit), <code>double</code> (64-bit)
                <br/>• <strong>Character:</strong> <code>char</code> (16-bit Unicode)
                <br/>• <strong>Boolean:</strong> <code>boolean</code> (true/false)
                <br/><br/>Each has a corresponding wrapper class (e.g., <code>Integer</code>, <code>Double</code>) for use in collections and generics.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>byte    b = 127;              // -128 to 127
short   s = 32_767;           // -32,768 to 32,767
int     i = 2_147_483_647;    // ~2.1 billion
long    l = 9_223_372_036L;   // ~9.2 quintillion
float   f = 3.14f;            // 6-7 significant digits
double  d = 3.141592653589;   // 15-16 significant digits
char    c = 'A';              // Unicode U+0041
boolean flag = true;          // true or false</code></pre>
              </div>`},{q:"What is autoboxing and unboxing?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java automatically converts between primitives and their wrapper types when needed.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Autoboxing</strong> — automatic conversion of a primitive to its wrapper object (e.g., <code>int</code> → <code>Integer</code>). Done by the compiler, which inserts <code>Integer.valueOf()</code> calls.
                <br/>• <strong>Unboxing</strong> — automatic conversion of a wrapper object back to a primitive (e.g., <code>Integer</code> → <code>int</code>). Compiler inserts <code>.intValue()</code> calls.
                <br/><br/>Be careful: unboxing a <code>null</code> reference throws a <code>NullPointerException</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Autoboxing
Integer boxed = 42;          // compiler: Integer.valueOf(42)

// Unboxing
int primitive = boxed;       // compiler: boxed.intValue()

// NPE trap
Integer n = null;
int x = n;                   // ❌ NullPointerException at runtime</code></pre>
              </div>`},{q:"What are the four access modifiers in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Access modifiers control the visibility and accessibility of classes, methods, and fields.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>private</code> — accessible only within the declaring class.
                <br/>• <code>default</code> (package-private, no keyword) — accessible within the same package.
                <br/>• <code>protected</code> — accessible within the same package <em>and</em> by subclasses in any package.
                <br/>• <code>public</code> — accessible from anywhere.
                <br/><br/>Principle of Least Privilege: always choose the most restrictive modifier that still satisfies the design requirement.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Visibility matrix
Modifier     | Same Class | Same Package | Subclass | Other Package
-------------|------------|--------------|----------|--------------
private      |     ✓      |      ✗       |    ✗     |      ✗
(default)    |     ✓      |      ✓       |    ✗     |      ✗
protected    |     ✓      |      ✓       |    ✓     |      ✗
public       |     ✓      |      ✓       |    ✓     |      ✓</code></pre>
              </div>`},{q:"What is the difference between a class and an object?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a fundamental OOP distinction — blueprint vs instance.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>class</strong> is a blueprint or template that defines state (fields) and behaviour (methods). An <strong>object</strong> is a concrete instance of a class created at runtime using the <code>new</code> keyword. Memory is allocated on the heap for each object.
                <br/><br/>Analogy: A class is like an architectural drawing; an object is the actual house built from that drawing. You can build many houses (objects) from one drawing (class).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Class — blueprint
class Car {
    String brand;
    int speed;
    void accelerate() { speed += 10; }
}

// Objects — instances
Car car1 = new Car();   // object 1, own memory
Car car2 = new Car();   // object 2, own memory
car1.brand = "Toyota";
car2.brand = "Honda";</code></pre>
              </div>`},{q:"What is the <code>new</code> keyword and what happens when you call it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Understanding <code>new</code> is essential for memory and object lifecycle questions.<br/><br/>
                <strong>Interview Answer:</strong> The <code>new</code> keyword performs three tasks:
                <br/>1. <strong>Allocates</strong> memory on the heap for the new object.
                <br/>2. <strong>Initialises</strong> the object by calling the constructor.
                <br/>3. <strong>Returns</strong> a reference (address) to the newly created object.
                <br/><br/>The reference is stored in a variable (on the stack for local variables, or on the heap as a field of another object).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Step 1: JVM allocates heap memory for a Dog object
// Step 2: Dog() constructor runs, fields initialised
// Step 3: reference stored in stack variable 'dog'
Dog dog = new Dog("Rex");</code></pre>
              </div>`},{q:"What is the difference between <code>==</code> and <code>.equals()</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A very common interview trap — especially with String literals vs <code>new String()</code>.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>==</code> — compares <em>references</em> (memory addresses) for objects; compares <em>values</em> for primitives.
                <br/>• <code>.equals()</code> — compares <em>logical content</em> as defined by the class's override of <code>Object.equals()</code>.
                <br/><br/><code>String</code> overrides <code>.equals()</code> to compare character sequences. Two different <code>String</code> objects with identical content will be <code>==</code> false but <code>.equals()</code> true.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String a = new String("java");
String b = new String("java");

System.out.println(a == b);        // false — different objects
System.out.println(a.equals(b));   // true  — same content

String c = "java";
String d = "java";
System.out.println(c == d);        // true  — same String pool entry</code></pre>
              </div>`},{q:"What is the String constant pool?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The String pool is a JVM optimisation that avoids creating duplicate String objects.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>String Constant Pool</strong> (interned pool) is a special memory region in the Heap (Metaspace in Java 8+). When you use a String literal, the JVM first checks the pool; if the value already exists, it reuses that object. If not, it creates a new entry. <code>new String("x")</code> always bypasses the pool and creates a new object. You can explicitly intern a string with <code>str.intern()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s1 = "hello";          // goes to pool
String s2 = "hello";          // reuses pool entry → s1 == s2: true

String s3 = new String("hello");      // heap, outside pool
String s4 = s3.intern();              // returns pool entry
System.out.println(s1 == s4);         // true</code></pre>
              </div>`},{q:"What are type casting and type conversion in Java?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is strongly typed; changing a variable's type requires explicit handling.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Widening (implicit)</strong> — converting a smaller type to a larger one automatically (e.g., <code>int</code> → <code>long</code>). No data loss.
                <br/>• <strong>Narrowing (explicit cast)</strong> — converting a larger type to a smaller one; possible data loss, requires a cast operator.
                <br/>• <strong>Object casting</strong> — <code>(SubType) obj</code>; throws <code>ClassCastException</code> if incompatible. Use <code>instanceof</code> to check first.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Widening — automatic
int i = 100;
long l = i;       // OK, no cast needed

// Narrowing — explicit
double d = 9.99;
int n = (int) d;  // n = 9, decimal part lost

// Object casting
Object obj = "Hello";
if (obj instanceof String s) {  // Java 16 pattern matching
    System.out.println(s.toUpperCase());
}</code></pre>
              </div>`},{q:"What is the difference between <code>int</code> and <code>Integer</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> This tests knowledge of primitives vs wrapper types and the implications of each.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>int</code> — primitive, stored on the stack, default value <code>0</code>, cannot be <code>null</code>, cannot be used in generics.
                <br/>• <code>Integer</code> — wrapper class in <code>java.lang</code>, stored on the heap (as an object), default value <code>null</code>, can be used in collections (e.g., <code>List&lt;Integer&gt;</code>), provides utility methods like <code>Integer.parseInt()</code>, <code>Integer.MAX_VALUE</code>.
                <br/><br/><strong>Integer cache:</strong> <code>Integer.valueOf()</code> caches values from -128 to 127, so cached instances share references.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Integer a = 127;
Integer b = 127;
System.out.println(a == b);   // true  — cached

Integer c = 128;
Integer d = 128;
System.out.println(c == d);   // false — outside cache range</code></pre>
              </div>`},{q:"What is pass-by-value in Java?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is always pass-by-value — a common source of confusion for developers coming from other languages.<br/><br/>
                <strong>Interview Answer:</strong> Java is strictly <strong>pass-by-value</strong>. For primitives, a copy of the value is passed. For objects, a copy of the <em>reference</em> (memory address) is passed — not the object itself. This means:
                <br/>• Reassigning the parameter (e.g., <code>obj = new Foo()</code>) does not affect the caller's variable.
                <br/>• Mutating the object <em>through</em> the parameter (e.g., <code>obj.setName("x")</code>) <em>does</em> affect the original, because both the caller and callee hold copies pointing to the same heap object.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>void reassign(StringBuilder sb) {
    sb = new StringBuilder("new");  // only local copy reassigned
}

void mutate(StringBuilder sb) {
    sb.append(" world");            // affects original object
}

StringBuilder s = new StringBuilder("hello");
reassign(s);
System.out.println(s);  // "hello" — unchanged

mutate(s);
System.out.println(s);  // "hello world" — mutated</code></pre>
              </div>`},{q:"What is the role of the <code>static</code> keyword at the class level?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>static</code> members belong to the class itself, not to any particular instance.<br/><br/>
                <strong>Interview Answer:</strong> When a field or method is declared <code>static</code>:
                <br/>• It belongs to the <strong>class</strong>, not individual objects — only one copy exists in memory regardless of how many instances are created.
                <br/>• It is loaded into memory when the class is loaded (before any objects are created).
                <br/>• It can be accessed via the class name: <code>ClassName.staticField</code>.
                <br/>• A <code>static</code> method cannot access instance (<code>this</code>) members directly because no instance context exists.
                <br/><br/>Common uses: constants (<code>static final</code>), utility/helper methods, counters, factory methods.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Counter {
    static int count = 0;  // shared across all instances

    Counter() { count++; }

    static int getCount() { return count; }
}

new Counter(); new Counter(); new Counter();
System.out.println(Counter.getCount()); // 3</code></pre>
              </div>`}]},{id:"day2",day:2,title:"OOP Concepts",topics:["Encapsulation","Inheritance","Polymorphism","Abstraction","Interface vs Abstract Class","IS-A Relationship","Composition vs Inheritance"],questions:[{q:"What is Encapsulation and why is it important?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Encapsulation bundles data and the methods that operate on it, and restricts direct external access to internal state.<br/><br/>
                <strong>Interview Answer:</strong> Encapsulation is the OOP principle of hiding an object's internal state and requiring all interaction to go through well-defined methods (getters/setters). It is implemented by declaring fields <code>private</code> and providing <code>public</code> accessor methods. Benefits:
                <br/>• Protects data integrity — validation logic lives in the setter.
                <br/>• Reduces coupling — consumers depend on the interface, not the implementation.
                <br/>• Enables controlled read/write access (e.g., read-only fields).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class BankAccount {
    private double balance;   // hidden state

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        balance += amount;    // controlled mutation
    }
}</code></pre>
              </div>`},{q:"What is Inheritance and how is it implemented in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Inheritance allows a child class to acquire fields and methods of a parent class, promoting code reuse.<br/><br/>
                <strong>Interview Answer:</strong> Inheritance is the mechanism by which a child (sub) class derives the properties and behaviour of a parent (super) class using the <code>extends</code> keyword. Java supports <strong>single inheritance</strong> for classes (one parent only) but <strong>multiple inheritance through interfaces</strong>. The child inherits all non-private members and can override methods to specialise behaviour. <code>Object</code> is the implicit root of every Java class hierarchy.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {
    String name;
    void eat() { System.out.println(name + " eats"); }
}

class Dog extends Animal {
    void bark() { System.out.println(name + " barks"); }
}

Dog d = new Dog();
d.name = "Rex";
d.eat();   // inherited
d.bark();  // own method</code></pre>
              </div>`},{q:"What is Polymorphism? Explain compile-time vs runtime polymorphism.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Polymorphism means "many forms" — the same interface behaving differently depending on context.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Compile-time (static) polymorphism</strong> — method <em>overloading</em>. The correct method is selected by the compiler based on the number/type of arguments. Also called <em>early binding</em>.
                <br/>• <strong>Runtime (dynamic) polymorphism</strong> — method <em>overriding</em>. A parent-type reference holds a child object; the actual method called is determined at runtime by the object's real type. Also called <em>late binding</em> or <em>dynamic dispatch</em>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Runtime polymorphism
class Shape { void draw() { System.out.println("Shape"); } }
class Circle extends Shape { @Override void draw() { System.out.println("Circle"); } }
class Square extends Shape { @Override void draw() { System.out.println("Square"); } }

Shape s = new Circle();   // parent reference → child object
s.draw();                 // "Circle" — decided at runtime</code></pre>
              </div>`},{q:"What is Abstraction and how is it achieved in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Abstraction hides implementation details and exposes only the essential behaviour to the user.<br/><br/>
                <strong>Interview Answer:</strong> Abstraction is the process of hiding the <em>how</em> and exposing only the <em>what</em>. In Java it is achieved through:
                <br/>1. <strong>Abstract classes</strong> — declare methods without implementation (<code>abstract void start()</code>); subclasses must provide the body.
                <br/>2. <strong>Interfaces</strong> — 100% abstraction (all methods implicitly abstract pre-Java 8; default/static allowed from Java 8).
                <br/><br/>Think of a TV remote — you press buttons (interface) without knowing the circuit details (implementation).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>abstract class Vehicle {
    abstract void start();          // no body — must override
    void fuelUp() { System.out.println("Fuelling up"); }
}

class Car extends Vehicle {
    @Override void start() { System.out.println("Car started"); }
}</code></pre>
              </div>`},{q:"What is the difference between an interface and an abstract class?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> One of the most frequently asked OOP design questions.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature             Abstract Class         Interface (Java 8+)
-----------------   -------------------    -------------------
Inheritance         extends (single)       implements (multiple)
Constructor         Yes                    No
Instance fields     Yes                    No (only static final)
Method types        abstract + concrete    abstract, default, static
Access modifiers    Any                    public (implicit)
State               Yes                    No
Use case            Shared base code       Contract / capability</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Rule of thumb:</strong> Prefer interfaces to define contracts; use abstract classes only when sharing code among closely related classes.
              </p>`},{q:"What is the IS-A relationship in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> IS-A describes the inheritance hierarchy — whether one type is a specialisation of another.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>IS-A</strong> relationship is established through <code>extends</code> (class inheritance) and <code>implements</code> (interface implementation). It means an object of the subtype can be used wherever the supertype is expected (Liskov Substitution Principle). For example, <code>Dog IS-A Animal</code>, so a <code>Dog</code> reference can be assigned to an <code>Animal</code> variable.
                <br/><br/>The complementary <strong>HAS-A</strong> relationship (composition) means an object contains a reference to another object (e.g., <code>Car HAS-A Engine</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {}
class Dog extends Animal {}   // Dog IS-A Animal

Animal a = new Dog();         // valid — IS-A holds
System.out.println(a instanceof Animal); // true
System.out.println(a instanceof Dog);    // true</code></pre>
              </div>`},{q:"What is Composition and how does it differ from Inheritance?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> "Favour composition over inheritance" is a core design principle from the GoF book.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Inheritance (IS-A)</strong> — creates a tight compile-time coupling. Changes to the parent class can unexpectedly break subclasses. Use it when the relationship is truly an IS-A.
                <br/>• <strong>Composition (HAS-A)</strong> — an object holds a reference to another object and delegates work to it. Coupling is looser; the inner object can be swapped at runtime (e.g., via dependency injection). Prefer composition for code reuse.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Inheritance — tight coupling
class Logger extends FileWriter { ... }

// Composition — flexible
class Logger {
    private final Writer writer;       // HAS-A — injected
    Logger(Writer writer) { this.writer = writer; }
    void log(String msg) throws IOException { writer.write(msg); }
}

// Swap implementation without changing Logger
Logger fileLogger    = new Logger(new FileWriter("app.log"));
Logger consoleLogger = new Logger(new PrintWriter(System.out));</code></pre>
              </div>`},{q:"Can a class implement multiple interfaces? Why does Java allow this?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java forbids multiple class inheritance but permits implementing multiple interfaces — understanding why matters.<br/><br/>
                <strong>Interview Answer:</strong> Yes — a class can implement any number of interfaces using a comma-separated list. Java allows this because interfaces only define contracts (no state), so there is no ambiguity about which field or constructor to inherit. This avoids the classic "Diamond Problem" that plagues multiple class inheritance in languages like C++.
                <br/><br/>When two interfaces share a default method with the same signature, the implementing class <em>must</em> override it to resolve the conflict.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface Flyable  { void fly(); }
interface Swimmable { void swim(); }

class Duck implements Flyable, Swimmable {
    public void fly()  { System.out.println("Duck flies"); }
    public void swim() { System.out.println("Duck swims"); }
}</code></pre>
              </div>`},{q:"What is method overriding and what are its rules?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Overriding is the mechanism behind runtime polymorphism.<br/><br/>
                <strong>Interview Answer:</strong> Method overriding occurs when a subclass provides its own implementation of a method inherited from the parent. Rules:
                <br/>• Same method name, return type, and parameter list (covariant return type allowed — subclass of original return type).
                <br/>• Access modifier cannot be more restrictive.
                <br/>• Cannot override <code>static</code>, <code>final</code>, or <code>private</code> methods.
                <br/>• Can throw narrower or fewer checked exceptions.
                <br/>• Always annotate with <code>@Override</code> to catch mistakes at compile time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Parent {
    public Number getValue() { return 42; }
}

class Child extends Parent {
    @Override
    public Integer getValue() { return 100; }  // covariant return type OK
}</code></pre>
              </div>`},{q:"What is the difference between method overloading and method overriding?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both involve methods of the same name but are fundamentally different concepts.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature        Overloading              Overriding
-----------    ----------------------   ----------------------
Location       Same class               Subclass
Binding        Compile-time (static)    Runtime (dynamic)
Signature      Different params         Same params
Return type    Can differ               Must match (covariant ok)
Polymorphism   Compile-time             Runtime
@Override      Not applicable           Recommended</code></pre>
              </div>`},{q:"What is an abstract class and when should you use one?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Abstract classes sit between concrete classes and interfaces — they can share code while enforcing contracts.<br/><br/>
                <strong>Interview Answer:</strong> An abstract class is declared with the <code>abstract</code> keyword. It can have abstract methods (no body) that subclasses <em>must</em> implement, as well as concrete methods with full implementations. It cannot be instantiated directly.
                <br/><br/><strong>When to use:</strong> When multiple related classes share common code and state but also need to define specialised behaviour — e.g., a <code>Shape</code> base class with a shared <code>colour</code> field and an abstract <code>area()</code> method.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>abstract class Shape {
    String colour;
    abstract double area();               // must override
    void printColour() {                  // shared implementation
        System.out.println("Colour: " + colour);
    }
}

class Circle extends Shape {
    double radius;
    @Override double area() { return Math.PI * radius * radius; }
}</code></pre>
              </div>`},{q:"What is the <code>instanceof</code> operator?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>instanceof</code> is used for type checking at runtime before casting.<br/><br/>
                <strong>Interview Answer:</strong> The <code>instanceof</code> operator returns <code>true</code> if an object is an instance of a given class or implements a given interface (including through inheritance). It returns <code>false</code> for <code>null</code>. Java 16 introduced <strong>pattern matching</strong> for <code>instanceof</code>, which combines the check and cast into one expression, eliminating boilerplate.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Classic
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// Java 16+ pattern matching
if (obj instanceof String s) {      // check + bind in one step
    System.out.println(s.length());
}</code></pre>
              </div>`},{q:"What is the Diamond Problem and how does Java handle it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The Diamond Problem arises with multiple inheritance when two parents share a common ancestor.<br/><br/>
                <strong>Interview Answer:</strong> If class <code>D</code> extends both <code>B</code> and <code>C</code>, which both extend <code>A</code>, and all define a method <code>foo()</code>, then <code>D</code> is ambiguous about which <code>foo()</code> to call — this is the Diamond Problem. Java avoids it for classes (single inheritance only). With interfaces, if two interfaces provide a <code>default</code> method with the same signature, the implementing class must explicitly override it to resolve the conflict.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface A { default void hello() { System.out.println("A"); } }
interface B extends A { default void hello() { System.out.println("B"); } }
interface C extends A { default void hello() { System.out.println("C"); } }

class D implements B, C {
    @Override
    public void hello() {
        B.super.hello();    // explicitly choose B's version
    }
}</code></pre>
              </div>`},{q:"What is cohesion and coupling in OOP design?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> These are fundamental metrics for evaluating the quality of an OOP design.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Cohesion</strong> — how closely related and focused the responsibilities of a class are. <em>High cohesion</em> is desirable — a class does one thing well (Single Responsibility Principle).
                <br/>• <strong>Coupling</strong> — how dependent classes are on each other. <em>Low coupling</em> is desirable — changes to one class should have minimal impact on others.
                <br/><br/><strong>Goal:</strong> Design systems with <em>high cohesion</em> and <em>low coupling</em>. Encapsulation, interfaces, and dependency injection are the main tools to achieve this.
              </p>`},{q:"What are the SOLID principles?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> SOLID is a set of five design principles for writing maintainable OOP code.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>S</strong>ingle Responsibility Principle — a class should have only one reason to change.
                <br/>• <strong>O</strong>pen/Closed Principle — open for extension, closed for modification. Add behaviour via new classes, not by editing existing ones.
                <br/>• <strong>L</strong>iskov Substitution Principle — subtypes must be substitutable for their supertypes without breaking correctness.
                <br/>• <strong>I</strong>nterface Segregation Principle — prefer many focused interfaces over one fat interface.
                <br/>• <strong>D</strong>ependency Inversion Principle — depend on abstractions, not concrete implementations. High-level modules should not depend on low-level modules.
              </p>`}]},{id:"day3",day:3,title:"Java Core",topics:["Constructors","Constructor Overloading","Method Overloading vs Overriding","static Keyword","super Keyword","final Keyword","final vs finally vs finalize"],questions:[{q:"What is a constructor in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Constructors are special methods that initialise a new object — they are called automatically by the <code>new</code> keyword.<br/><br/>
                <strong>Interview Answer:</strong> A constructor is a special block of code that is invoked when an object is created. Key properties:
                <br/>• Same name as the class.
                <br/>• No return type (not even <code>void</code>).
                <br/>• Called automatically by the JVM after memory allocation.
                <br/>• If no constructor is defined, the compiler inserts a no-arg <strong>default constructor</strong>.
                <br/>• Constructors are not inherited; they can call the parent constructor via <code>super()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Person {
    String name;
    int age;

    // Constructor
    Person(String name, int age) {
        this.name = name;
        this.age  = age;
    }
}

Person p = new Person("Alice", 30);  // constructor invoked</code></pre>
              </div>`},{q:"What is constructor overloading?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Constructor overloading provides flexibility in how objects are created.<br/><br/>
                <strong>Interview Answer:</strong> Constructor overloading means defining multiple constructors in the same class with different parameter lists. The compiler selects the correct constructor at compile time based on the arguments passed. A common pattern is to chain constructors using <code>this()</code> to avoid code duplication (telescoping constructor pattern). Java 14+ Records and Builder pattern are modern alternatives for complex objects.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Rectangle {
    int width, height;

    Rectangle() { this(1, 1); }                 // delegates to next

    Rectangle(int side) { this(side, side); }   // square shortcut

    Rectangle(int width, int height) {
        this.width  = width;
        this.height = height;
    }
}

Rectangle r1 = new Rectangle();          // 1 × 1
Rectangle r2 = new Rectangle(5);         // 5 × 5
Rectangle r3 = new Rectangle(3, 7);      // 3 × 7</code></pre>
              </div>`},{q:"What is the default constructor and when is it provided?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The default constructor is often misunderstood — it is compiler-generated, not always present.<br/><br/>
                <strong>Interview Answer:</strong> If a class declares <strong>no</strong> constructors at all, the Java compiler automatically inserts a <strong>no-argument default constructor</strong> that calls <code>super()</code> and initialises fields to default values (<code>0</code>, <code>null</code>, <code>false</code>). As soon as you define <em>any</em> constructor yourself, the compiler no longer inserts the default one. If you still need a no-arg constructor alongside parameterised ones, you must write it explicitly.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class A { }               // compiler adds: A() { super(); }

class B {
    B(int x) { }          // explicit constructor → no default
    // B b = new B();     // ❌ compile error — no no-arg constructor
}

class C {
    C() { }               // explicitly added back
    C(int x) { }
}</code></pre>
              </div>`},{q:"What is the <code>this</code> keyword in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>this</code> is a reference to the current object — essential for disambiguation and constructor chaining.<br/><br/>
                <strong>Interview Answer:</strong> <code>this</code> refers to the current instance of the class. Main uses:
                <br/>1. <strong>Disambiguate</strong> instance fields from constructor/method parameters of the same name.
                <br/>2. <strong>Constructor chaining</strong> — <code>this(args)</code> calls another constructor in the same class; must be the first statement.
                <br/>3. <strong>Pass current object</strong> as an argument to another method.
                <br/><br/><code>this</code> cannot be used in a <code>static</code> context because no instance exists.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;   // disambiguates field from param
        this.id   = id;
    }

    void print() {
        System.out.println(this.name + " #" + this.id);
    }
}</code></pre>
              </div>`},{q:"What is the <code>super</code> keyword and what are its uses?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>super</code> gives a subclass access to the parent class's members and constructor.<br/><br/>
                <strong>Interview Answer:</strong> <code>super</code> refers to the immediate parent class. Three uses:
                <br/>1. <strong>Call parent constructor</strong> — <code>super(args)</code> must be the first statement in a child constructor. If omitted, the compiler inserts a no-arg <code>super()</code> call automatically.
                <br/>2. <strong>Access overridden method</strong> — <code>super.methodName()</code> invokes the parent's version of an overridden method.
                <br/>3. <strong>Access hidden parent field</strong> — when a child declares a field with the same name as the parent's.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {
    String sound = "...";
    Animal(String sound) { this.sound = sound; }
    void speak() { System.out.println(sound); }
}

class Dog extends Animal {
    Dog() {
        super("Woof");            // 1. call parent constructor
    }
    @Override void speak() {
        super.speak();            // 2. call parent method
        System.out.println("(tail wagging)");
    }
}</code></pre>
              </div>`},{q:"What does the <code>static</code> keyword mean and where can it be applied?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>static</code> binds a member to the class rather than to any instance — one of the most versatile keywords in Java.<br/><br/>
                <strong>Interview Answer:</strong> <code>static</code> can be applied to:
                <br/>• <strong>Fields</strong> — one shared copy per class, initialised when class loads.
                <br/>• <strong>Methods</strong> — called on the class; cannot access <code>this</code> or instance members directly.
                <br/>• <strong>Nested classes</strong> — static nested class has no reference to the enclosing instance.
                <br/>• <strong>Initialiser blocks</strong> — <code>static { }</code> runs once when the class is loaded, before any constructor.
                <br/>• <strong>Imports</strong> — <code>import static java.lang.Math.PI</code> allows using <code>PI</code> directly.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Config {
    static final String APP_NAME;        // static field

    static {                             // static initialiser
        APP_NAME = System.getenv("APP_NAME") != null
            ? System.getenv("APP_NAME") : "DefaultApp";
    }

    static String getAppName() {         // static method
        return APP_NAME;
    }
}</code></pre>
              </div>`},{q:"What does the <code>final</code> keyword do when applied to a variable, method, and class?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>final</code> restricts modification in three different contexts.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Variable</strong> — the variable can be assigned only once (a constant). For primitives, the value cannot change. For object references, the reference cannot point to a different object (but the object's state can still mutate).
                <br/>• <strong>Method</strong> — the method cannot be overridden in any subclass.
                <br/>• <strong>Class</strong> — the class cannot be subclassed. Examples: <code>String</code>, <code>Integer</code>, all wrapper types.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// final variable
final int MAX = 100;
// MAX = 200;  ❌ compile error

// final reference — reference fixed, object mutable
final List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("ok");      // ✓ object mutated
// list = new ArrayList&lt;&gt;(); ❌ reference cannot change

// final method
class Parent { final void display() {} }
class Child extends Parent {
    // @Override void display() {} ❌ cannot override
}

// final class
final class Immutable { }</code></pre>
              </div>`},{q:"What is the difference between <code>final</code>, <code>finally</code>, and <code>finalize()</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A classic Java interview question testing knowledge of three unrelated concepts with similar names.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>final</code> — a <em>keyword</em>: makes a variable constant, a method non-overridable, or a class non-extendable.
                <br/>• <code>finally</code> — a <em>block</em> in exception handling that always executes after try-catch, used for cleanup. Skipped only if <code>System.exit()</code> is called or the JVM crashes.
                <br/>• <code>finalize()</code> — a <em>method</em> in <code>java.lang.Object</code> that the GC <em>may</em> call before reclaiming an object's memory. Deprecated in Java 9, removed in Java 18. Unreliable — never use it for resource cleanup; use <code>try-with-resources</code> instead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// finally — guaranteed cleanup
try (Connection conn = getConnection()) {         // try-with-resources
    // use conn
} catch (SQLException e) {
    e.printStackTrace();
}
// conn.close() called automatically — preferred over finally

// finalize — deprecated, do NOT rely on
@Override
@Deprecated
protected void finalize() { /* unreliable, avoid */ }</code></pre>
              </div>`},{q:"What is the difference between checked and unchecked exceptions?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's exception hierarchy enforces different handling strategies for different categories of error.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Checked exceptions</strong> — extend <code>Exception</code> (not <code>RuntimeException</code>). The compiler forces the caller to either handle them in a try-catch or declare them with <code>throws</code>. Examples: <code>IOException</code>, <code>SQLException</code>. Represent <em>recoverable</em> conditions.
                <br/>• <strong>Unchecked exceptions</strong> — extend <code>RuntimeException</code>. The compiler does not require handling. Examples: <code>NullPointerException</code>, <code>IllegalArgumentException</code>. Represent <em>programming bugs</em>.
                <br/>• <strong>Errors</strong> — extend <code>Error</code>; fatal JVM conditions not meant to be caught: <code>OutOfMemoryError</code>, <code>StackOverflowError</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Checked — must handle or declare
void readFile(String path) throws IOException {
    Files.readAllLines(Path.of(path));
}

// Unchecked — optional handling
void process(String s) {
    Objects.requireNonNull(s, "s must not be null"); // throws NPE if null
}</code></pre>
              </div>`},{q:"What is exception handling and what are <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, <code>throws</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java provides five keywords for managing the exception lifecycle.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>try</code> — wraps code that might throw an exception.
                <br/>• <code>catch</code> — handles a specific exception type; multiple blocks allowed (most specific first).
                <br/>• <code>finally</code> — executes regardless of outcome (cleanup).
                <br/>• <code>throw</code> — explicitly throws an exception object from within a method.
                <br/>• <code>throws</code> — declares that a method <em>may</em> throw a checked exception, pushing responsibility to the caller.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>void divide(int a, int b) throws ArithmeticException {
    if (b == 0) throw new ArithmeticException("Division by zero");  // throw
    System.out.println(a / b);
}

try {
    divide(10, 0);
} catch (ArithmeticException e) {
    System.err.println("Caught: " + e.getMessage());
} finally {
    System.out.println("Always runs");
}</code></pre>
              </div>`},{q:"What is a custom exception and how do you create one?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Custom exceptions provide domain-specific, meaningful error types for your application.<br/><br/>
                <strong>Interview Answer:</strong> You create a custom exception by extending <code>Exception</code> (checked) or <code>RuntimeException</code> (unchecked). Best practices:
                <br/>• Name it descriptively ending in <code>Exception</code>.
                <br/>• Provide a message constructor and a cause constructor for wrapping root causes.
                <br/>• Prefer unchecked (RuntimeException) for business rule violations that callers typically cannot recover from programmatically.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Custom unchecked exception
public class InsufficientFundsException extends RuntimeException {
    private final double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds: required " + amount);
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Usage
void withdraw(double amount) {
    if (amount > balance) throw new InsufficientFundsException(amount);
    balance -= amount;
}</code></pre>
              </div>`},{q:"What is a static initialiser block?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Static initialisers run class-level setup logic before any constructor is called.<br/><br/>
                <strong>Interview Answer:</strong> A static initialiser block (<code>static { }</code>) is executed once when the class is first loaded by the ClassLoader, before any object is created or any static method is called. It is used to initialise complex static fields that cannot be set in a single expression — for example, loading configuration, populating static collections, or initialising JDBC drivers. Multiple static blocks run in textual order.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class DBConfig {
    static final Map&lt;String, String&gt; PROPS;

    static {
        PROPS = new HashMap&lt;&gt;();
        PROPS.put("url",      "jdbc:postgresql://localhost:5432/db");
        PROPS.put("user",     "admin");
        PROPS.put("password", "secret");
    }
}</code></pre>
              </div>`},{q:"What is an instance initialiser block?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Instance initialisers run before the constructor body — useful for shared setup across overloaded constructors.<br/><br/>
                <strong>Interview Answer:</strong> An instance initialiser block (<code>{ }</code> without <code>static</code>) runs every time an object is created, just before the constructor body executes. The compiler copies the block into every constructor. Unlike static blocks, instance blocks have access to instance members. They are rarely used directly in modern Java; constructor chaining with <code>this()</code> is usually preferred.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Demo {
    int value;

    {                                      // instance initialiser
        System.out.println("Instance block runs");
        value = 10;
    }

    Demo()        { System.out.println("No-arg constructor"); }
    Demo(int val) { this.value = val; System.out.println("Param constructor"); }
}

// Output for new Demo():
// Instance block runs
// No-arg constructor</code></pre>
              </div>`},{q:"What is the order of execution of constructors in inheritance?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Understanding constructor execution order prevents surprises when working with inheritance chains.<br/><br/>
                <strong>Interview Answer:</strong> When a subclass object is created, Java executes in this order:
                <br/>1. Static initialisers of the parent class (first time the class loads).
                <br/>2. Static initialisers of the child class.
                <br/>3. Instance initialisers and constructor of the <strong>parent</strong> class (<code>super()</code> call).
                <br/>4. Instance initialisers and constructor of the <strong>child</strong> class.
                <br/><br/>Key rule: the parent constructor always completes before the child constructor body runs.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class A {
    A() { System.out.println("A constructor"); }
}
class B extends A {
    B() { System.out.println("B constructor"); }
}
class C extends B {
    C() { System.out.println("C constructor"); }
}

new C();
// Output:
// A constructor
// B constructor
// C constructor</code></pre>
              </div>`},{q:"What is a <code>final</code> class? Why is <code>String</code> immutable and final?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>String</code> immutability is a fundamental design decision that affects many Java features.<br/><br/>
                <strong>Interview Answer:</strong> <code>String</code> is <code>final</code> (cannot be subclassed) and immutable (its internal <code>char[]</code> / <code>byte[]</code> cannot change after creation) for several reasons:
                <br/>• <strong>String Pool safety</strong> — if Strings were mutable, sharing pool entries would cause unexpected side effects.
                <br/>• <strong>HashMap key safety</strong> — the hash code is cached on first call; mutation would break hash-based lookups.
                <br/>• <strong>Security</strong> — class names, network hostnames, and credentials passed as Strings cannot be silently changed after validation.
                <br/>• <strong>Thread safety</strong> — immutable objects are inherently thread-safe; no synchronisation needed.
                <br/>• <strong>Performance</strong> — hash code caching, pool sharing, and JIT inlining opportunities.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s = "hello";
s.toUpperCase();              // creates a NEW String "HELLO"
System.out.println(s);        // still "hello" — original unchanged

// Use StringBuilder for mutable string operations
StringBuilder sb = new StringBuilder("hello");
sb.append(" world");          // mutates in place — O(1) amortised
System.out.println(sb);       // "hello world"</code></pre>
              </div>`}]},{id:"day4",day:4,title:"JVM & Memory",topics:["Heap vs Stack","Garbage Collection","ClassLoader","Object Creation","Shallow vs Deep Copy","Memory Leaks"],questions:[{q:"What is the difference between the Heap and Stack in Java memory?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Heap and Stack serve different purposes and have different lifecycles in the JVM.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Stack                      Heap
-----------      -------------------------  -------------------------
Stores           Local vars, method frames  Objects, instance fields
Size             Small (512 KB – few MB)    Large (controlled by -Xmx)
Lifecycle        LIFO; auto-freed on return Managed by GC
Thread-safety    Per-thread (safe)          Shared (needs sync)
Speed            Very fast                  Slower (GC overhead)
Error            StackOverflowError         OutOfMemoryError</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                When a method is called a new <em>stack frame</em> is pushed containing local variables and the return address. When it returns the frame is popped. Object references live on the stack; the actual objects live on the heap.
              </p>`},{q:"Describe the JVM Heap structure — Young Gen, Old Gen, and Metaspace.",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The heap is divided into generations based on object age to make GC more efficient.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Young Generation</strong> — newly created objects land in <em>Eden</em>. After a Minor GC, survivors move to one of two <em>Survivor spaces</em> (S0/S1). Objects that survive several GC cycles (default threshold 15) are promoted to Old Gen.
                <br/>• <strong>Old Generation (Tenured)</strong> — long-lived objects. Collected by a Major or Full GC, which is slower.
                <br/>• <strong>Metaspace</strong> (Java 8+, replaces PermGen) — class metadata, method bytecode, static variables. Stored off-heap in native memory; auto-grows (capped with <code>-XX:MaxMetaspaceSize</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>┌──────────────── HEAP ─────────────────┐  ┌── OFF-HEAP ──┐
│  Young Gen              │  Old Gen    │  │  Metaspace   │
│  ┌───────┬────┬────┐    │             │  │ (class meta) │
│  │ Eden  │ S0 │ S1 │──▶ │  Tenured    │  │              │
│  └───────┴────┴────┘    │             │  └──────────────┘
└───────────────────────────────────────┘</code></pre>
              </div>`},{q:"What is Garbage Collection and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> GC automatically reclaims memory occupied by objects that are no longer reachable.<br/><br/>
                <strong>Interview Answer:</strong> The GC periodically identifies objects with no live references (unreachable from GC roots: stack variables, static fields, JNI refs) and frees their memory. The main phases are:
                <br/>• <strong>Mark</strong> — traverse the object graph from GC roots, marking reachable objects.
                <br/>• <strong>Sweep</strong> — reclaim memory of unmarked (unreachable) objects.
                <br/>• <strong>Compact</strong> (optional) — move surviving objects together to eliminate fragmentation.
                <br/><br/><strong>Minor GC</strong> — collects Young Gen; fast, frequent.<br/>
                <strong>Major/Full GC</strong> — collects Old Gen (and sometimes whole heap); slow, stop-the-world pause.
              </p>`},{q:"What are the main GC algorithms in Java?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Different workloads require different trade-offs between throughput and latency.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Serial GC</strong> (<code>-XX:+UseSerialGC</code>) — single-threaded mark-sweep-compact. Good for small heaps (&lt;256 MB) or single-core environments.
                <br/>• <strong>Parallel GC</strong> (<code>-XX:+UseParallelGC</code>) — multi-threaded, throughput-focused. Default before Java 9.
                <br/>• <strong>G1 GC</strong> (<code>-XX:+UseG1GC</code>) — region-based; splits heap into equal regions, collects highest-garbage regions first. Predictable pause times. Default since Java 9.
                <br/>• <strong>ZGC</strong> (<code>-XX:+UseZGC</code>) — concurrent, ultra-low latency (&lt;1 ms pauses). Production-ready since Java 15.
                <br/>• <strong>Shenandoah</strong> — concurrent compaction similar to ZGC; available from Java 12.
              </p>`},{q:"What is a ClassLoader and how does the parent-delegation model work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> ClassLoaders are responsible for loading bytecode; the delegation model ensures core classes cannot be spoofed.<br/><br/>
                <strong>Interview Answer:</strong> A <code>ClassLoader</code> locates and loads <code>.class</code> files into the JVM. Three built-in loaders form a hierarchy:
                <br/>1. <strong>Bootstrap ClassLoader</strong> — loads <code>java.lang.*</code>, <code>rt.jar</code> (native code; no Java representation).
                <br/>2. <strong>Extension / Platform ClassLoader</strong> — loads <code>lib/ext</code> or JDK modules.
                <br/>3. <strong>Application ClassLoader</strong> — loads classes from the classpath (<code>-cp</code>).
                <br/><br/><strong>Delegation:</strong> When asked to load a class, a loader first delegates to its <em>parent</em>. Only if the parent cannot find the class does the child attempt to load it itself. This prevents a malicious or buggy <code>java.lang.String</code> from replacing the real one.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ClassLoader cl = MyClass.class.getClassLoader();
System.out.println(cl);             // AppClassLoader
System.out.println(cl.getParent()); // PlatformClassLoader
// Bootstrap has no Java object → null</code></pre>
              </div>`},{q:"Walk through the steps of object creation with <code>new</code>.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Object creation is a multi-step JVM process involving class loading, memory allocation, and initialisation.<br/><br/>
                <strong>Interview Answer:</strong> When <code>new MyClass(args)</code> is executed:
                <br/>1. <strong>Class loading</strong> — JVM checks if <code>MyClass</code> is already loaded; if not, the ClassLoader loads it.
                <br/>2. <strong>Memory allocation</strong> — JVM allocates space on the heap (using pointer bump or free-list). All fields are set to default zero values.
                <br/>3. <strong>Static initialisers</strong> — run once if the class has just been loaded.
                <br/>4. <strong>Instance initialisers &amp; field initialisers</strong> — run in textual order.
                <br/>5. <strong>Constructor body</strong> — executes, starting with the parent constructor chain (<code>super()</code>).
                <br/>6. <strong>Reference returned</strong> — the caller's variable now points to the fully initialised object.
              </p>`},{q:"What is the difference between shallow copy and deep copy?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Copying objects is subtle because objects may contain references to other objects.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Shallow copy</strong> — creates a new object and copies all field values. For <em>primitive</em> fields the value is duplicated. For <em>reference</em> fields only the reference (address) is copied — both the original and copy point to the <em>same</em> inner objects. Mutating the inner object affects both.
                <br/>• <strong>Deep copy</strong> — recursively copies all objects in the graph. The copy is completely independent. Achieved via: custom clone logic, copy constructors, serialisation/deserialisation, or mapping libraries.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Address { String city; }

class Person implements Cloneable {
    String name;
    Address address;

    // Shallow copy — address reference shared
    @Override
    public Person clone() throws CloneNotSupportedException {
        return (Person) super.clone();
    }

    // Deep copy — new Address created
    public Person deepCopy() {
        Person p = new Person();
        p.name = this.name;
        p.address = new Address();
        p.address.city = this.address.city;
        return p;
    }
}</code></pre>
              </div>`},{q:"What is a memory leak in Java and how can it happen?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's GC does not eliminate memory leaks — it only collects <em>unreachable</em> objects. Objects that are reachable but no longer needed are leaks.<br/><br/>
                <strong>Interview Answer:</strong> A memory leak occurs when objects remain reachable (referenced) but are never used again. Common causes:
                <br/>• <strong>Static collections</strong> — objects added to a static <code>Map</code>/<code>List</code> and never removed.
                <br/>• <strong>Listeners / callbacks</strong> — registering listeners without deregistering them.
                <br/>• <strong>ThreadLocal</strong> — values not removed in thread pool threads persist indefinitely.
                <br/>• <strong>Inner class references</strong> — non-static inner classes hold an implicit reference to the outer class.
                <br/>• <strong>Caches without eviction</strong> — unbounded caches grow forever; use <code>WeakHashMap</code> or a proper cache like Caffeine.
                <br/><br/>Detection: heap profilers (VisualVM, YourKit, Eclipse MAT), GC logs, <code>-Xmx</code> + <code>OutOfMemoryError</code> heap dump.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Classic leak — static cache with no eviction
class Cache {
    private static final Map&lt;String, byte[]&gt; store = new HashMap&lt;&gt;();

    static void put(String key, byte[] data) {
        store.put(key, data);  // ❌ never evicted → heap grows forever
    }
}

// Fix — use a cache with max size and eviction
private static final Map&lt;String, byte[]&gt; store =
    Caffeine.newBuilder().maximumSize(1000).build().asMap();</code></pre>
              </div>`},{q:"What are <code>WeakReference</code>, <code>SoftReference</code>, and <code>PhantomReference</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java provides reference strength levels that interact with the GC to avoid memory leaks while still benefiting from caching.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Strong reference</strong> (default) — object is never GC'd while the reference exists.
                <br/>• <strong>SoftReference</strong> — GC <em>may</em> collect the object when memory is low. Suitable for memory-sensitive caches.
                <br/>• <strong>WeakReference</strong> — GC collects the object at the <em>next</em> GC cycle if no strong/soft references exist. Used in <code>WeakHashMap</code> (key auto-removed when collected).
                <br/>• <strong>PhantomReference</strong> — object is already finalised; used for post-mortem cleanup actions via <code>ReferenceQueue</code>. Replaces the deprecated <code>finalize()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// WeakReference example — auto-collected under GC pressure
WeakReference&lt;ExpensiveObject&gt; ref = new WeakReference&lt;&gt;(new ExpensiveObject());

ExpensiveObject obj = ref.get(); // null if GC has collected it
if (obj != null) {
    obj.use();
}</code></pre>
              </div>`},{q:"What is JIT compilation and how does it improve performance?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> JIT compilation bridges the gap between bytecode interpretation and native execution speed.<br/><br/>
                <strong>Interview Answer:</strong> The JVM starts by interpreting bytecode, then monitors which code paths are executed frequently (<em>hot spots</em>). The <strong>Just-In-Time (JIT) compiler</strong> compiles those hot methods into optimised native machine code at runtime. Optimisations include: method inlining, dead code elimination, loop unrolling, and escape analysis (stack-allocating objects that don't escape a method).
                <br/><br/><strong>C1 compiler</strong> — fast compilation with basic optimisations (for startup).<br/>
                <strong>C2 compiler</strong> — aggressive optimisations for peak throughput.<br/>
                <strong>Tiered compilation</strong> (default) — starts with C1 then promotes hot methods to C2.
              </p>`},{q:"What is <code>StackOverflowError</code> and what causes it?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The thread stack has a fixed size; exceeding it crashes the thread.<br/><br/>
                <strong>Interview Answer:</strong> <code>StackOverflowError</code> is thrown when the thread stack has no room for a new stack frame, almost always caused by <strong>infinite recursion</strong> — a method calling itself (directly or indirectly) with no base case or with a base case that is never reached. It can also be triggered by deeply nested method calls on a very large call stack.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ No base case — infinite recursion
int factorial(int n) {
    return n * factorial(n - 1);  // StackOverflowError
}

// ✓ Correct base case
int factorial(int n) {
    if (n <= 1) return 1;         // base case
    return n * factorial(n - 1);
}</code></pre>
              </div>`},{q:"What is escape analysis and stack allocation?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Escape analysis is a JIT optimisation that can eliminate heap allocation for short-lived objects.<br/><br/>
                <strong>Interview Answer:</strong> <strong>Escape analysis</strong> is a compiler technique (performed by the C2 JIT) that determines whether an object "escapes" the scope of a method or thread. If an object is created locally and never passed outside the method (does not escape), the JIT can:
                <br/>• <strong>Stack-allocate</strong> it — no GC pressure, very fast.
                <br/>• <strong>Scalar replace</strong> it — decompose the object into individual fields, further reducing overhead.
                <br/><br/>This means micro-optimising away <code>new</code> for small value objects is often unnecessary in modern JVMs — the JIT already does it.
              </p>`},{q:"What is <code>OutOfMemoryError</code> and what are its common causes?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>OutOfMemoryError</code> (OOM) signals that the JVM cannot allocate more memory — a critical production concern.<br/><br/>
                <strong>Interview Answer:</strong> Common variants:
                <br/>• <strong>Java heap space</strong> — heap is full; application holds too many live objects or has a memory leak. Fix: increase <code>-Xmx</code>, fix leak.
                <br/>• <strong>GC overhead limit exceeded</strong> — JVM spends &gt;98% of time in GC but recovers &lt;2% of heap. Usually signals a leak.
                <br/>• <strong>Metaspace</strong> — too many classes loaded (e.g., class-generating frameworks, hot redeploy loops). Fix: <code>-XX:MaxMetaspaceSize</code>.
                <br/>• <strong>Unable to create new native thread</strong> — OS thread limit reached. Fix: reduce thread count or stack size (<code>-Xss</code>).
              </p>`},{q:"How does <code>System.gc()</code> work and should you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>System.gc()</code> is a hint, not a command — understanding this distinction matters for production code.<br/><br/>
                <strong>Interview Answer:</strong> <code>System.gc()</code> (and <code>Runtime.getRuntime().gc()</code>) <em>suggests</em> that the JVM run the garbage collector, but the JVM is free to ignore this request. In practice it often triggers a full GC, which can introduce a significant stop-the-world pause.
                <br/><br/><strong>Should you use it?</strong> Almost never. Explicit GC calls interfere with the JVM's own tuned GC scheduling and can harm throughput. Exceptions: benchmarking, testing, or before entering a performance-critical window where you want a clean heap. Can be disabled with <code>-XX:+DisableExplicitGC</code>.
              </p>`},{q:"What are GC roots and why do they matter?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> GC roots are the starting points of the reachability analysis that determines which objects are alive.<br/><br/>
                <strong>Interview Answer:</strong> GC roots are the "anchors" from which the GC traverses the object graph. Any object reachable from a GC root is considered <em>live</em> and will not be collected. The main GC roots in Java are:
                <br/>• Local variables in currently executing method stack frames.
                <br/>• Static fields of loaded classes.
                <br/>• Active Java threads.
                <br/>• JNI references (objects passed to or returned from native code).
                <br/>• Objects held by synchronisation monitors.
                <br/><br/>This is why static collections are a common source of memory leaks — they are always reachable via a GC root (the class static field).
              </p>`}]},{id:"day5",day:5,title:"Strings & Collections",topics:["String Immutability","StringBuilder vs StringBuffer","HashMap Internals","HashMap vs Hashtable","HashSet vs TreeSet","Array vs ArrayList","Load Factor","Rehashing"],questions:[{q:"Why is <code>String</code> immutable in Java and what are the benefits?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> String immutability is a deliberate design decision with deep implications for security, performance, and thread safety.<br/><br/>
                <strong>Interview Answer:</strong> Once created, a <code>String</code> object's character data cannot change. Benefits:
                <br/>• <strong>String Pool</strong> — the JVM can safely share pooled String literals between callers because neither can mutate them.
                <br/>• <strong>HashMap key safety</strong> — the hash code is computed once and cached; a mutable key would corrupt the map after its hash changes.
                <br/>• <strong>Security</strong> — class names, hostnames, credentials cannot be altered after validation.
                <br/>• <strong>Thread safety</strong> — immutable objects need no synchronisation; they can be shared freely across threads.
                <br/><br/>Every "modification" (e.g., <code>toUpperCase()</code>, <code>concat()</code>) returns a <em>new</em> String object.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s = "hello";
s.toUpperCase();               // creates new String "HELLO"
System.out.println(s);         // still "hello" — s unchanged

String s2 = s.toUpperCase();   // capture the new String
System.out.println(s2);        // "HELLO"</code></pre>
              </div>`},{q:"What is the difference between <code>String</code>, <code>StringBuilder</code>, and <code>StringBuffer</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three choices for string manipulation with different mutability and thread-safety characteristics.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          String           StringBuilder    StringBuffer
-----------      -------------    -------------    -------------
Mutability       Immutable        Mutable          Mutable
Thread-safety    Yes (immutable)  No               Yes (synchronised)
Performance      Slowest (concat) Fastest          Slower (sync overhead)
Use case         Constants, keys  Single-thread    Multi-thread string ops</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Rule:</strong> Use <code>String</code> for constants. Use <code>StringBuilder</code> in single-threaded loops. Only use <code>StringBuffer</code> if multiple threads truly share and mutate the same buffer — which is rare; prefer thread confinement instead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Creates N intermediate String objects — O(n²)
String result = "";
for (String s : list) result += s;

// ✓ Mutates a single buffer — O(n)
StringBuilder sb = new StringBuilder();
for (String s : list) sb.append(s);
String result = sb.toString();</code></pre>
              </div>`},{q:"How does <code>HashMap</code> work internally?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>HashMap</code> is the most commonly asked collection internals question.<br/><br/>
                <strong>Interview Answer:</strong> <code>HashMap</code> is backed by an array of <code>Node&lt;K,V&gt;[]</code> called <em>buckets</em>. On <code>put(key, value)</code>:
                <br/>1. Compute <code>hash = HashMap.hash(key.hashCode())</code> — XORs high bits to spread distribution.
                <br/>2. Calculate bucket index: <code>index = hash &amp; (capacity - 1)</code>.
                <br/>3. If bucket is empty → insert a new <code>Node</code>.
                <br/>4. If bucket has entries (collision) → walk the linked list; update if key matches, else append.
                <br/>5. <strong>Java 8+:</strong> when a bucket's linked list exceeds <code>TREEIFY_THRESHOLD</code> (8), it converts to a red-black tree for O(log n) lookup instead of O(n).
                <br/>6. When <code>size &gt; capacity × loadFactor</code>, the map rehashes into a doubled array.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// hashCode + equals contract:
// If a.equals(b) → a.hashCode() == b.hashCode()  (REQUIRED)
// If a.hashCode() == b.hashCode() → a.equals(b) may be false (collision)

// Always override both together
@Override public boolean equals(Object o) { … }
@Override public int hashCode() { … }</code></pre>
              </div>`},{q:"What is the difference between <code>HashMap</code> and <code>Hashtable</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Hashtable</code> is the legacy predecessor — understanding the differences helps in modernising old codebases.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          HashMap                   Hashtable
-----------      ----------------------    ----------------------
Thread-safety    No                        Yes (method-level sync)
Null keys        1 null key allowed        ❌ NullPointerException
Null values      Multiple nulls allowed    ❌ NullPointerException
Performance      Faster                    Slower (sync overhead)
Iterator         Fail-fast                 Fail-safe (Enumerator)
Introduced       Java 2 (Collections fw)   Java 1.0 (legacy)</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Prefer:</strong> <code>HashMap</code> for single-threaded code; <code>ConcurrentHashMap</code> for thread-safe concurrent access (segment/bucket-level locking, far more scalable than <code>Hashtable</code>).
              </p>`},{q:"What is the difference between <code>HashSet</code> and <code>TreeSet</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both implement <code>Set</code> (no duplicates) but differ in ordering and performance.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature         HashSet              TreeSet
-----------     ----------------     --------------------------
Ordering        No guaranteed order  Sorted (natural / Comparator)
Nulls           1 null allowed       ❌ NullPointerException (Java 7+)
add/remove      O(1) average         O(log n)
contains        O(1) average         O(log n)
Backed by       HashMap              TreeMap (Red-Black tree)
Use case        Fast membership test Sorted unique elements, range ops</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <code>LinkedHashSet</code> is a third option — insertion-order preserving with O(1) operations.
              </p>`},{q:"What is the difference between an Array and an <code>ArrayList</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Arrays are a language primitive; <code>ArrayList</code> is a resizable wrapper from the Collections framework.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Array                  ArrayList
-----------      -------------------    -------------------
Size             Fixed at creation      Dynamic (auto-grow)
Type             Primitives + objects   Objects only (use wrappers)
Generics         No                     Yes
Performance      Slightly faster        Slightly slower (boxing)
Length           array.length           list.size()
API              None                   add, remove, contains…</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Array — fixed size
int[] arr = new int[5];

// ArrayList — grows automatically
List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
list.add(1); list.add(2); // no size limit concern

// Convert between them
List&lt;String&gt; fromArray = Arrays.asList("a", "b", "c");
String[] fromList = list.stream().map(String::valueOf)
                        .toArray(String[]::new);</code></pre>
              </div>`},{q:"What is the load factor in <code>HashMap</code> and why does it matter?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The load factor controls the trade-off between memory usage and lookup performance.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>load factor</strong> (default <code>0.75</code>) defines the maximum ratio of entries to bucket capacity before a <em>rehash</em> occurs.
                <br/><br/>Formula: <code>rehash when size &gt; capacity × loadFactor</code>
                <br/><br/>• <strong>Low load factor</strong> (e.g., 0.25) — fewer collisions, faster lookups, but higher memory usage and more frequent rehashing.
                <br/>• <strong>High load factor</strong> (e.g., 1.0) — more collisions, slower lookups (longer bucket chains), but memory-efficient.
                <br/><br/>The default <code>0.75</code> is a well-tested balance. Set the <em>initial capacity</em> appropriately when the map size is known in advance to avoid rehashing overhead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Avoid rehashing when you know the expected size
int expectedSize = 1000;
// capacity = expectedSize / loadFactor + 1
Map&lt;String, String&gt; map = new HashMap&lt;&gt;(1334, 0.75f);</code></pre>
              </div>`},{q:"What is rehashing in <code>HashMap</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Rehashing is the most expensive single operation in a <code>HashMap</code>'s lifecycle.<br/><br/>
                <strong>Interview Answer:</strong> When <code>size</code> exceeds <code>capacity × loadFactor</code>, the <code>HashMap</code>:
                <br/>1. Creates a new internal array with <strong>double the capacity</strong>.
                <br/>2. Iterates all existing <code>Node</code>s.
                <br/>3. Recomputes each key's bucket index (<code>hash &amp; (newCapacity - 1)</code>) and places it in the new array.
                <br/><br/>This is an O(n) operation. In Java 8+, linked-list nodes in a bucket are split into "lo" and "hi" chains using a bit-trick (<code>hash &amp; oldCapacity</code>), avoiding full recomputation. Always specify the initial capacity when the size is predictable to minimise rehashes.
              </p>`},{q:"What is the contract between <code>hashCode()</code> and <code>equals()</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Violating this contract breaks all hash-based collections silently — a classic interview trap.<br/><br/>
                <strong>Interview Answer:</strong> The contract (defined in <code>java.lang.Object</code>) states:
                <br/>1. If <code>a.equals(b)</code> is <code>true</code>, then <code>a.hashCode() == b.hashCode()</code> <strong>must</strong> be true.
                <br/>2. The converse is <em>not</em> required: equal hash codes do not imply equal objects (collisions are allowed).
                <br/>3. If an object is used in a hash-based collection, its <code>hashCode()</code> must remain stable (not change while in the collection).
                <br/><br/>Always override <strong>both</strong> methods together. IDEs and <code>java.util.Objects.hash()</code> / <code>record</code> types generate them automatically.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>record Point(int x, int y) {}   // Java 16+ — equals + hashCode auto-generated

// Manual — using Objects.hash
@Override public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Point)) return false;
    Point p = (Point) o;
    return x == p.x &amp;&amp; y == p.y;
}
@Override public int hashCode() { return Objects.hash(x, y); }</code></pre>
              </div>`},{q:"What is the difference between <code>Iterator</code> and <code>ListIterator</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both are cursors for traversing collections, but with different capabilities.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Iterator         ListIterator
-----------      -------------    -------------------------
Direction        Forward only     Forward and backward
Add elements     No               Yes (add())
Replace element  No               Yes (set())
Works with       Any Collection   List only
Index access     No               nextIndex() / previousIndex()</code></pre>
              </div>`},{q:"What is a fail-fast iterator and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Fail-fast iterators protect against inconsistent state during concurrent modification.<br/><br/>
                <strong>Interview Answer:</strong> A fail-fast iterator (e.g., <code>ArrayList</code>, <code>HashMap</code>) tracks a <code>modCount</code> field on the collection. Every structural modification (add, remove, resize) increments <code>modCount</code>. The iterator remembers the <code>modCount</code> at creation time (<code>expectedModCount</code>). On each <code>next()</code> call it checks <code>modCount == expectedModCount</code>; if they differ, it throws <code>ConcurrentModificationException</code>.
                <br/><br/>Note: this is a best-effort mechanism, not a guarantee. Use <code>ConcurrentHashMap</code> or <code>CopyOnWriteArrayList</code> for safe concurrent iteration.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a","b","c"));

// ❌ ConcurrentModificationException
for (String s : list) {
    if (s.equals("b")) list.remove(s);
}

// ✓ Use iterator's own remove
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("b")) it.remove();
}</code></pre>
              </div>`},{q:"What is the difference between <code>Comparable</code> and <code>Comparator</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Two strategies for defining ordering — one built-in to the class, one external and reusable.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>Comparable&lt;T&gt;</code> — the class implements <code>compareTo(T)</code>; it defines the object's <em>natural ordering</em>. Can only define one ordering. Used by <code>Collections.sort()</code> and sorted collections by default.
                <br/>• <code>Comparator&lt;T&gt;</code> — an external strategy object with a <code>compare(T a, T b)</code> method. Multiple comparators can be defined for different sort criteria. Passed explicitly to <code>Collections.sort(list, comparator)</code> or <code>TreeSet</code>/<code>TreeMap</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Comparable — natural order by name
class Employee implements Comparable&lt;Employee&gt; {
    String name; int salary;
    @Override public int compareTo(Employee o) { return name.compareTo(o.name); }
}

// Comparator — external, multiple orderings
Comparator&lt;Employee&gt; bySalary = Comparator.comparingInt(e -&gt; e.salary);
Comparator&lt;Employee&gt; byName   = Comparator.comparing(e -&gt; e.name);

employees.sort(bySalary.thenComparing(byName));</code></pre>
              </div>`},{q:"What is <code>LinkedHashMap</code> and when would you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>LinkedHashMap</code> gives you HashMap performance with predictable iteration order.<br/><br/>
                <strong>Interview Answer:</strong> <code>LinkedHashMap</code> extends <code>HashMap</code> and additionally maintains a doubly-linked list of entries in <strong>insertion order</strong> (or <em>access order</em> if constructed with <code>accessOrder=true</code>). This makes iteration order predictable — entries come out in the order they were inserted.
                <br/><br/><strong>Use cases:</strong>
                <br/>• Building a simple LRU cache (access-order mode + override <code>removeEldestEntry()</code>).
                <br/>• Any scenario requiring a map that preserves insertion order (e.g., serialising a JSON object with stable key order).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// LRU cache with capacity 100
Map&lt;String, String&gt; lruCache = new LinkedHashMap&lt;&gt;(128, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry&lt;String, String&gt; eldest) {
        return size() &gt; 100;
    }
};</code></pre>
              </div>`},{q:"What is <code>ConcurrentHashMap</code> and how does it differ from <code>HashMap</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The go-to thread-safe map for high-concurrency scenarios.<br/><br/>
                <strong>Interview Answer:</strong> <code>ConcurrentHashMap</code> is a thread-safe, high-concurrency alternative to <code>HashMap</code>:
                <br/>• <strong>Java 7:</strong> divided into 16 segments (Segment-level locking); allows 16 concurrent writers.
                <br/>• <strong>Java 8+:</strong> bucket-level CAS (Compare-And-Swap) + synchronised only on the first node of each bucket. Near <code>HashMap</code> read performance with safe concurrent writes.
                <br/>• Does <strong>not</strong> allow <code>null</code> keys or values (unlike <code>HashMap</code>).
                <br/>• Iteration is <em>weakly consistent</em> (no <code>ConcurrentModificationException</code>; may not reflect very recent mutations).
                <br/>• <code>computeIfAbsent</code>, <code>merge</code>, <code>getOrDefault</code> are atomic operations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ConcurrentHashMap&lt;String, Integer&gt; wordCount = new ConcurrentHashMap&lt;&gt;();

// Atomic increment — no external sync needed
wordCount.merge("hello", 1, Integer::sum);

// Atomic putIfAbsent equivalent but with lazy computation
wordCount.computeIfAbsent("world", k -&gt; expensiveCompute(k));</code></pre>
              </div>`},{q:"What are the differences between <code>List</code>, <code>Set</code>, and <code>Map</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The three core Collection interfaces represent fundamentally different data organisation strategies.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Interface  Duplicates  Ordered  Key-Value  Main Impl
---------  ----------  -------  ---------  ---------------------------------
List       Yes         Yes      No         ArrayList, LinkedList, Vector
Set        No          Varies   No         HashSet, LinkedHashSet, TreeSet
Map        Keys: No    Varies   Yes        HashMap, LinkedHashMap, TreeMap</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Queue</strong> and <strong>Deque</strong> are two additional interfaces for FIFO/LIFO access patterns (<code>ArrayDeque</code>, <code>PriorityQueue</code>).
              </p>`}]},{id:"day6",day:6,title:"Java 8",topics:["Lambda Expressions","Functional Interfaces","Stream API","map vs filter vs collect","Optional","Method References","Parallel Streams"],questions:[{q:"What is a lambda expression and what problem does it solve?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Lambdas enable functional-style programming by treating behaviour as data.<br/><br/>
                <strong>Interview Answer:</strong> A lambda expression is an anonymous function with the syntax <code>(parameters) -&gt; body</code>. It is a concise way to implement a <strong>functional interface</strong> (an interface with exactly one abstract method). Before Java 8, you had to write a verbose anonymous inner class. Lambdas:
                <br/>• Eliminate boilerplate.
                <br/>• Allow methods to receive <em>behaviour</em> as arguments.
                <br/>• Enable the Streams API and functional patterns.
                <br/><br/>Lambda syntax forms: <code>() -&gt; expr</code>, <code>x -&gt; expr</code>, <code>(x, y) -&gt; { stmt; return val; }</code>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Anonymous inner class
Runnable r1 = new Runnable() {
    @Override public void run() { System.out.println("Hello"); }
};

// Lambda
Runnable r2 = () -&gt; System.out.println("Hello");

// Comparator lambda
List&lt;String&gt; names = Arrays.asList("Charlie", "Alice", "Bob");
names.sort((a, b) -&gt; a.compareTo(b));  // or: Comparator.naturalOrder()</code></pre>
              </div>`},{q:"What is a functional interface? Name the key built-in ones.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Functional interfaces are the type system foundation that makes lambdas possible.<br/><br/>
                <strong>Interview Answer:</strong> A functional interface has <strong>exactly one abstract method</strong> (SAM — Single Abstract Method). It may also contain default and static methods. Annotated with <code>@FunctionalInterface</code> (optional but recommended — the compiler enforces the SAM rule). Key built-ins in <code>java.util.function</code>:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Interface          Signature              Use case
--------------     -------------------    --------------------------
Supplier&lt;T&gt;       T get()                Produce a value (lazy init)
Consumer&lt;T&gt;       void accept(T)         Consume a value (forEach)
Function&lt;T,R&gt;     R apply(T)             Transform T → R (map)
Predicate&lt;T&gt;      boolean test(T)        Test / filter
BiFunction&lt;T,U,R&gt; R apply(T, U)          Two inputs, one output
UnaryOperator&lt;T&gt;  T apply(T)             Same type in/out
BinaryOperator&lt;T&gt; T apply(T, T)          Two same-type inputs → same type</code></pre>
              </div>`},{q:"Explain the Stream API — what is a stream and what are its characteristics?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Streams provide a declarative, pipeline-based approach to processing sequences of elements.<br/><br/>
                <strong>Interview Answer:</strong> A <code>Stream&lt;T&gt;</code> is a <em>pipeline</em> that processes a sequence of elements on demand. Key characteristics:
                <br/>• <strong>Not a data structure</strong> — it doesn't store data; it processes it.
                <br/>• <strong>Lazy</strong> — intermediate operations are not executed until a terminal operation is invoked.
                <br/>• <strong>Single-use</strong> — a stream can only be consumed once; reuse the source to create a new stream.
                <br/>• <strong>Functional</strong> — operations don't mutate the source.
                <br/><br/>Pipeline structure: <strong>Source → Intermediate ops (lazy) → Terminal op (triggers execution)</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;Integer&gt; numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

int sumOfEvenSquares = numbers.stream()         // source
    .filter(n -&gt; n % 2 == 0)                    // intermediate (lazy)
    .map(n -&gt; n * n)                            // intermediate (lazy)
    .reduce(0, Integer::sum);                    // terminal (triggers all)

System.out.println(sumOfEvenSquares);  // 220</code></pre>
              </div>`},{q:"What is the difference between <code>map()</code>, <code>filter()</code>, and <code>flatMap()</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three intermediate operations form the core of stream data transformation.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>filter(Predicate)</code> — keeps only elements for which the predicate returns <code>true</code>. One element in → zero or one out.
                <br/>• <code>map(Function)</code> — transforms each element to another type/value. One element in → exactly one out.
                <br/>• <code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)</code> — maps each element to a Stream, then <em>flattens</em> all those streams into one. One element in → zero or more out. Essential for nested collections.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;String&gt; words = List.of("Hello World", "Java 8");

// map — each String → its length
words.stream().map(String::length).forEach(System.out::println);
// 11, 6

// filter — keep only long strings
words.stream().filter(s -&gt; s.length() &gt; 6).forEach(System.out::println);
// "Hello World"

// flatMap — split each sentence into words, flatten to one stream
words.stream()
     .flatMap(s -&gt; Arrays.stream(s.split(" ")))
     .forEach(System.out::println);
// Hello, World, Java, 8</code></pre>
              </div>`},{q:"What does <code>collect()</code> do and what are common collectors?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>collect()</code> is the most versatile terminal operation — it accumulates stream elements into a result container.<br/><br/>
                <strong>Interview Answer:</strong> <code>collect(Collector)</code> is a mutable reduction terminal operation. The <code>Collectors</code> utility class provides ready-made collectors:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;Employee&gt; emps = getEmployees();

// toList / toSet / toMap
List&lt;String&gt; names   = emps.stream().map(Employee::getName).collect(Collectors.toList());
Set&lt;String&gt;  depts   = emps.stream().map(Employee::getDept).collect(Collectors.toSet());

// groupingBy — Map&lt;dept, List&lt;Employee&gt;&gt;
Map&lt;String, List&lt;Employee&gt;&gt; byDept =
    emps.stream().collect(Collectors.groupingBy(Employee::getDept));

// counting per group
Map&lt;String, Long&gt; countByDept =
    emps.stream().collect(Collectors.groupingBy(Employee::getDept, Collectors.counting()));

// joining
String csv = names.stream().collect(Collectors.joining(", "));</code></pre>
              </div>`},{q:"What is <code>Optional</code> and how should it be used correctly?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Optional</code> makes absent values explicit in the API, replacing null-check boilerplate.<br/><br/>
                <strong>Interview Answer:</strong> <code>Optional&lt;T&gt;</code> is a container that either holds a non-null value or is empty. It is designed as a <em>return type</em> to signal that a method may not find a result, forcing the caller to handle both cases.
                <br/><br/><strong>Do:</strong> return <code>Optional</code> from repository/search methods.<br/>
                <strong>Don't:</strong> use it as a field type, method parameter, or in collections (use <code>null</code>-safe alternatives instead). Don't call <code>get()</code> without checking — that defeats the purpose.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Optional&lt;User&gt; userOpt = userRepo.findById(id);

// ❌ Defeats the purpose
User u = userOpt.get();  // throws NoSuchElementException if empty

// ✓ Safe alternatives
userOpt.ifPresent(u -&gt; process(u));
User u = userOpt.orElse(User.guest());
User u = userOpt.orElseGet(() -&gt; createDefaultUser());
User u = userOpt.orElseThrow(() -&gt; new UserNotFoundException(id));

// Chaining — map + orElse
String name = userOpt.map(User::getName).orElse("Anonymous");</code></pre>
              </div>`},{q:"What are method references and what are the four types?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Method references are a shorthand for lambdas that simply call an existing method.<br/><br/>
                <strong>Interview Answer:</strong> Method references use the <code>::</code> operator and come in four forms:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Type                        Syntax                   Lambda equivalent
--------------------------  -----------------------  -------------------------
Static method               ClassName::staticMethod  x -&gt; ClassName.method(x)
Instance (bound)            instance::method         x -&gt; obj.method(x)
Instance (unbound)          ClassName::method        (obj, x) -&gt; obj.method(x)
Constructor                 ClassName::new           args -&gt; new ClassName(args)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Static method ref
list.stream().map(Integer::parseInt).collect(toList());

// Unbound instance method ref
list.stream().map(String::toUpperCase).collect(toList());

// Bound instance method ref
String prefix = "Hello";
list.stream().filter(prefix::startsWith).collect(toList());

// Constructor ref
list.stream().map(Person::new).collect(toList());</code></pre>
              </div>`},{q:"What are parallel streams and when should you use them?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Parallel streams can speed up CPU-bound work but introduce overhead that makes them slower for small or I/O-bound tasks.<br/><br/>
                <strong>Interview Answer:</strong> Calling <code>.parallelStream()</code> or <code>stream().parallel()</code> splits the data using the <strong>Fork/Join framework</strong> (common pool with <code>Runtime.availableProcessors() - 1</code> threads) and processes sub-tasks concurrently.
                <br/><br/><strong>Use when:</strong>
                <br/>• Large data sets (thousands+ of elements).
                <br/>• Stateless, associative, CPU-bound operations.
                <br/><br/><strong>Avoid when:</strong>
                <br/>• Small collections (fork/join overhead dominates).
                <br/>• I/O-bound operations (threads block; no CPU gain).
                <br/>• Operations with shared mutable state (race conditions).
                <br/>• Operations with ordering requirements (e.g., <code>forEachOrdered</code> kills parallelism benefit).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✓ Good candidate — large CPU-bound reduction
long sum = LongStream.rangeClosed(1, 10_000_000)
    .parallel()
    .sum();

// ❌ Bad — shared mutable state causes race conditions
List&lt;String&gt; result = new ArrayList&lt;&gt;();
stream.parallel().forEach(result::add);  // not thread-safe

// ✓ Fix — collect thread-safely
List&lt;String&gt; result = stream.parallel().collect(Collectors.toList());</code></pre>
              </div>`},{q:"What is the difference between <code>findFirst()</code> and <code>findAny()</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both return an <code>Optional</code> element but differ in ordering guarantees.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>findFirst()</code> — returns the <em>first</em> element in encounter order (deterministic). Works in both sequential and parallel streams, but in parallel it must coordinate across threads to honour order.
                <br/>• <code>findAny()</code> — returns <em>any</em> matching element (non-deterministic). In a sequential stream it usually returns the first; in a parallel stream it returns whichever sub-task finishes first. Prefer <code>findAny()</code> in parallel pipelines for better performance when order doesn't matter.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Optional&lt;String&gt; first = names.stream()
    .filter(n -&gt; n.startsWith("A"))
    .findFirst();   // always the earliest in list order

Optional&lt;String&gt; any = names.parallelStream()
    .filter(n -&gt; n.startsWith("A"))
    .findAny();     // fastest result, unspecified which one</code></pre>
              </div>`},{q:"What is <code>reduce()</code> and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>reduce()</code> is a general-purpose fold operation that combines stream elements into a single value.<br/><br/>
                <strong>Interview Answer:</strong> <code>reduce(identity, BinaryOperator)</code> combines all elements using an associative function starting from an identity value. Variants:
                <br/>• <code>reduce(identity, accumulator)</code> — returns <code>T</code>.
                <br/>• <code>reduce(accumulator)</code> — returns <code>Optional&lt;T&gt;</code> (stream may be empty).
                <br/>• <code>reduce(identity, accumulator, combiner)</code> — for parallel streams with type change.
                <br/><br/><strong>Important:</strong> the accumulator must be <em>associative</em> and <em>stateless</em> for correct parallel results.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Sum
int sum = Stream.of(1, 2, 3, 4, 5).reduce(0, Integer::sum); // 15

// Max using reduce
Optional&lt;Integer&gt; max = Stream.of(3, 1, 4, 1, 5).reduce(Integer::max);

// String concatenation (illustrative — use joining() in practice)
String joined = Stream.of("a", "b", "c").reduce("", (a, b) -&gt; a + b); // "abc"</code></pre>
              </div>`},{q:"What are default methods in interfaces and why were they introduced?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Default methods were introduced in Java 8 primarily to enable backward-compatible evolution of the Collections API.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>default method</strong> is a method in an interface with a body, declared with the <code>default</code> keyword. It provides a default implementation that implementing classes can optionally override.
                <br/><br/><strong>Why introduced:</strong> Adding the <code>stream()</code> and <code>forEach()</code> methods to the existing <code>Collection</code> interface would have broken every existing implementing class. Default methods allow the interface to evolve without breaking existing implementations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface Greeter {
    String getName();   // abstract

    default void greet() {           // default — can be overridden
        System.out.println("Hello, " + getName());
    }

    static Greeter of(String name) { // static — not inherited
        return () -&gt; name;
    }
}

class FormalGreeter implements Greeter {
    public String getName() { return "Sir/Madam"; }
    @Override public void greet() { System.out.println("Good day, " + getName()); }
}</code></pre>
              </div>`},{q:"What is a <code>Predicate</code> and how can predicates be composed?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Predicate</code> is the functional interface for boolean-valued tests — composable via logical operators.<br/><br/>
                <strong>Interview Answer:</strong> <code>Predicate&lt;T&gt;</code> has one abstract method: <code>boolean test(T t)</code>. It provides default methods for composition:
                <br/>• <code>and(Predicate)</code> — logical AND (short-circuit).
                <br/>• <code>or(Predicate)</code> — logical OR (short-circuit).
                <br/>• <code>negate()</code> — logical NOT.
                <br/>• <code>Predicate.not(p)</code> — static negation (Java 11+).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Predicate&lt;Integer&gt; isEven     = n -&gt; n % 2 == 0;
Predicate&lt;Integer&gt; isPositive = n -&gt; n &gt; 0;
Predicate&lt;Integer&gt; isEvenAndPositive = isEven.and(isPositive);

List.of(-4, -1, 0, 2, 3, 6).stream()
    .filter(isEvenAndPositive)
    .forEach(System.out::println);  // 2, 6

// Negate
List.of("hello", "", "world", "").stream()
    .filter(Predicate.not(String::isEmpty))
    .forEach(System.out::println);  // hello, world</code></pre>
              </div>`},{q:"What is lazy evaluation in streams and why does it matter?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Lazy evaluation can avoid unnecessary work and enables processing of infinite streams.<br/><br/>
                <strong>Interview Answer:</strong> Intermediate stream operations are <strong>lazy</strong> — they build a pipeline description but execute nothing until a terminal operation is called. When the terminal operation runs, the JVM fuses the pipeline and processes each element through the entire chain before moving to the next element (vertical execution, not horizontal).
                <br/><br/>Benefits:
                <br/>• <strong>Short-circuiting</strong> — operations like <code>findFirst()</code>, <code>anyMatch()</code>, <code>limit()</code> stop as soon as the result is determined.
                <br/>• <strong>Infinite streams</strong> — possible because elements are generated on demand.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Infinite stream — lazy + limit = safe
Stream.iterate(0, n -&gt; n + 1)
    .filter(n -&gt; n % 2 == 0)
    .limit(5)
    .forEach(System.out::println);  // 0 2 4 6 8

// Short-circuit: stops after first match
Optional&lt;String&gt; first = names.stream()
    .filter(n -&gt; n.startsWith("Z"))
    .findFirst();  // doesn't iterate the whole list if found early</code></pre>
              </div>`},{q:"What are <code>IntStream</code>, <code>LongStream</code>, and <code>DoubleStream</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Primitive specialised streams avoid autoboxing overhead for numeric operations.<br/><br/>
                <strong>Interview Answer:</strong> <code>IntStream</code>, <code>LongStream</code>, and <code>DoubleStream</code> are specialised variants of <code>Stream</code> that work directly with primitive types (no boxing/unboxing). They provide extra methods not available on <code>Stream&lt;T&gt;</code>:
                <br/>• <code>sum()</code>, <code>average()</code>, <code>min()</code>, <code>max()</code>, <code>summaryStatistics()</code>
                <br/>• <code>range(start, end)</code> / <code>rangeClosed(start, end)</code>
                <br/><br/>Convert between object and primitive streams with <code>mapToInt()</code>, <code>boxed()</code>, <code>asLongStream()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Range
IntStream.range(1, 6).forEach(System.out::println);  // 1 2 3 4 5

// Statistics
IntSummaryStatistics stats = IntStream.of(3, 1, 4, 1, 5, 9)
    .summaryStatistics();
System.out.println(stats.getAverage()); // 3.833…
System.out.println(stats.getMax());     // 9

// mapToInt from object stream
int totalSalary = employees.stream()
    .mapToInt(Employee::getSalary)
    .sum();</code></pre>
              </div>`},{q:"What new features did Java 8 introduce beyond lambdas and streams?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java 8 was the largest language release since Java 5 — interviewers often ask about the full scope of changes.<br/><br/>
                <strong>Interview Answer:</strong> Key Java 8 additions:
                <br/>• <strong>Lambda expressions &amp; method references</strong> — functional programming support.
                <br/>• <strong>Stream API</strong> — declarative bulk data processing.
                <br/>• <strong>Optional&lt;T&gt;</strong> — null-safe value containers.
                <br/>• <strong>Default &amp; static interface methods</strong> — interface evolution.
                <br/>• <strong>New Date/Time API</strong> (<code>java.time</code>) — immutable, thread-safe replacement for <code>Date</code>/<code>Calendar</code> (inspired by Joda-Time).
                <br/>• <strong>Nashorn JavaScript engine</strong> — embed JS in Java (deprecated Java 11).
                <br/>• <strong>CompletableFuture</strong> — composable async programming.
                <br/>• <strong>Metaspace</strong> — replaces PermGen.
                <br/>• <strong>Base64</strong> encoding in standard library.
                <br/>• <strong>forEach / removeIf / replaceAll / sort</strong> on collections.
              </p>`}]},{id:"day7",day:7,title:"Multithreading & Exceptions",topics:["Process vs Thread","Thread Lifecycle","synchronized","volatile","wait/notify","ExecutorService","Deadlock","CompletableFuture"],questions:[{q:"What is the difference between a Process and a Thread?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is the foundational concept before diving into multithreading.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Process                    Thread
-----------      -------------------------  ---------------------------
Definition       Standalone program in exec Unit of execution within a process
Memory           Own independent memory     Shares process memory (heap)
Communication    IPC (pipes, sockets)       Direct shared memory (needs sync)
Overhead         Heavy (OS scheduling)      Lightweight
Crash impact     Isolated                   Can crash the whole process
Example          Chrome tab, Java process   HTTP request handler, GC thread</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">Every Java application has at least two threads: the <strong>main</strong> thread and the <strong>GC</strong> thread.</p>`},{q:"What are the states in the Java Thread lifecycle?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Threads move through well-defined states managed by the JVM and OS scheduler.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>NEW</strong> — object created, <code>start()</code> not called yet.
                <br/>• <strong>RUNNABLE</strong> — running on CPU or waiting in the run queue for a CPU slot.
                <br/>• <strong>BLOCKED</strong> — waiting to acquire a <code>synchronized</code> monitor held by another thread.
                <br/>• <strong>WAITING</strong> — indefinitely paused (<code>Object.wait()</code>, <code>Thread.join()</code> with no timeout, <code>LockSupport.park()</code>).
                <br/>• <strong>TIMED_WAITING</strong> — paused for a specific duration (<code>Thread.sleep(ms)</code>, <code>wait(ms)</code>, <code>join(ms)</code>).
                <br/>• <strong>TERMINATED</strong> — <code>run()</code> completed or an uncaught exception killed the thread.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread t = new Thread(() -&gt; { /* work */ });
System.out.println(t.getState()); // NEW
t.start();
System.out.println(t.getState()); // RUNNABLE (or TERMINATED if fast)
t.join();
System.out.println(t.getState()); // TERMINATED</code></pre>
              </div>`},{q:"What are the two ways to create a thread in Java?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A classic basics question — also tests awareness of why one approach is preferred.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Extend <code>Thread</code></strong> — override <code>run()</code>. Drawback: the class cannot extend any other class (single inheritance).
                <br/>2. <strong>Implement <code>Runnable</code></strong> — pass to <code>new Thread(runnable)</code>. Preferred because it separates the task from the thread mechanism and allows the class to extend another class.
                <br/><br/>In modern Java, prefer <strong>ExecutorService</strong> over raw threads to manage pooling and lifecycle.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Extend Thread
class MyThread extends Thread {
    @Override public void run() { System.out.println("Thread: " + getName()); }
}
new MyThread().start();

// 2. Implement Runnable (preferred)
Runnable task = () -&gt; System.out.println("Runnable thread");
new Thread(task).start();

// 3. Modern — ExecutorService
ExecutorService pool = Executors.newFixedThreadPool(4);
pool.submit(() -&gt; System.out.println("Pool thread"));</code></pre>
              </div>`},{q:"What is the <code>synchronized</code> keyword and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>synchronized</code> is Java's built-in mutual exclusion mechanism — essential for safe concurrent access to shared state.<br/><br/>
                <strong>Interview Answer:</strong> <code>synchronized</code> acquires a <strong>monitor lock</strong> (intrinsic lock) on an object before executing the protected block, and releases it when the block exits (even on exception). Only one thread at a time can hold a given monitor.
                <br/><br/>Three forms:
                <br/>• <strong>Synchronized method (instance)</strong> — locks on <code>this</code>.
                <br/>• <strong>Synchronized method (static)</strong> — locks on the <code>Class</code> object.
                <br/>• <strong>Synchronized block</strong> — locks on a specified object (finer granularity, preferred for performance).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Counter {
    private int count = 0;
    private final Object lock = new Object();

    // Synchronized block — fine-grained
    void increment() {
        synchronized (lock) {
            count++;   // only one thread executes this at a time
        }
    }

    // Synchronized method — locks on 'this'
    synchronized int getCount() { return count; }
}</code></pre>
              </div>`},{q:"What is the <code>volatile</code> keyword?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>volatile</code> solves the visibility problem in multithreading without the full cost of <code>synchronized</code>.<br/><br/>
                <strong>Interview Answer:</strong> Marking a field <code>volatile</code> guarantees two things:
                <br/>• <strong>Visibility</strong> — writes to the field are immediately flushed to main memory; reads always fetch from main memory (bypassing CPU cache). Every thread sees the latest value.
                <br/>• <strong>Prevents instruction reordering</strong> around the read/write (happens-before guarantee).
                <br/><br/><strong>What it does NOT provide:</strong> atomicity for compound operations like <code>count++</code> (read-modify-write). Use <code>AtomicInteger</code> or <code>synchronized</code> for those.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class StopFlag {
    private volatile boolean stopped = false;  // visible across threads

    void stop() { stopped = true; }

    void run() {
        while (!stopped) {   // always reads fresh value from memory
            doWork();
        }
    }
}

// Without volatile — the loop might never see stopped=true (cached in CPU register)</code></pre>
              </div>`},{q:"What is the difference between <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> These methods enable inter-thread communication using the monitor protocol.<br/><br/>
                <strong>Interview Answer:</strong> All three must be called from within a <code>synchronized</code> block on the same object (else <code>IllegalMonitorStateException</code>).
                <br/>• <code>wait()</code> — releases the lock and puts the calling thread into <strong>WAITING</strong> state until another thread calls <code>notify()</code> or <code>notifyAll()</code> on the same object.
                <br/>• <code>notify()</code> — wakes up <em>one</em> arbitrary waiting thread. That thread must re-acquire the lock before proceeding.
                <br/>• <code>notifyAll()</code> — wakes up <em>all</em> waiting threads. Each competes for the lock. Safer than <code>notify()</code> to avoid missed signals.
                <br/><br/>Modern alternatives: <code>Condition</code> from <code>java.util.concurrent.locks</code>, or <code>BlockingQueue</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>synchronized (queue) {
    while (queue.isEmpty()) {
        queue.wait();          // release lock + sleep
    }
    process(queue.poll());
}

// Producer side:
synchronized (queue) {
    queue.add(item);
    queue.notifyAll();         // wake all waiting consumers
}</code></pre>
              </div>`},{q:"Does calling <code>Thread.sleep()</code> release the lock?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A common interview trap that tests understanding of sleep vs wait.<br/><br/>
                <strong>Interview Answer:</strong> <strong>No.</strong> <code>Thread.sleep(ms)</code> pauses the thread for the specified time but does <strong>not</strong> release any monitors (locks) the thread holds. Other threads that need those locks remain blocked during the sleep.
                <br/><br/><code>Object.wait()</code>, on the other hand, <em>does</em> release the monitor before waiting, allowing other threads to acquire it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method             Releases Lock?   Can be Interrupted?  Where Called
--------------     -------------    -------------------  ----------------
Thread.sleep(ms)   NO               Yes (InterruptedEx)  Anywhere
Object.wait()      YES              Yes (InterruptedEx)  synchronized block
LockSupport.park() NO               Yes                  Anywhere</code></pre>
              </div>`},{q:"What is <code>ExecutorService</code> and why use it over raw threads?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Raw thread creation is expensive; <code>ExecutorService</code> provides a managed pool.<br/><br/>
                <strong>Interview Answer:</strong> <code>ExecutorService</code> (in <code>java.util.concurrent</code>) manages a pool of worker threads, decoupling task submission from thread lifecycle. Benefits over raw threads:
                <br/>• <strong>Reuse</strong> — threads are recycled, avoiding creation/destruction overhead.
                <br/>• <strong>Bounded concurrency</strong> — control max thread count to prevent resource exhaustion.
                <br/>• <strong>Task management</strong> — submit <code>Runnable</code>/<code>Callable</code>, get <code>Future</code> results, schedule tasks.
                <br/>• <strong>Graceful shutdown</strong> — <code>shutdown()</code> / <code>shutdownNow()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ExecutorService pool = Executors.newFixedThreadPool(4);

Future&lt;Integer&gt; future = pool.submit(() -&gt; {
    return expensiveComputation();
});

Integer result = future.get();   // blocks until done (or throws)

pool.shutdown();                 // stop accepting new tasks
pool.awaitTermination(30, TimeUnit.SECONDS);</code></pre>
              </div>`},{q:"What is a deadlock and how do you prevent it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Deadlock is one of the most critical concurrency bugs — it silently stalls threads forever.<br/><br/>
                <strong>Interview Answer:</strong> A deadlock occurs when two or more threads are each waiting for a lock held by another, forming a circular wait. Four necessary conditions (Coffman conditions): mutual exclusion, hold &amp; wait, no preemption, circular wait.
                <br/><br/><strong>Prevention strategies:</strong>
                <br/>• Acquire locks in a <strong>consistent global order</strong> across all threads.
                <br/>• Use <code>tryLock(timeout, unit)</code> from <code>ReentrantLock</code> — back off if timeout expires.
                <br/>• Use higher-level concurrency utilities (<code>ConcurrentHashMap</code>, <code>BlockingQueue</code>) instead of explicit locking.
                <br/>• Minimise synchronized scope — hold locks for the shortest time possible.
                <br/>• Use thread dump + <code>jstack &lt;pid&gt;</code> to detect deadlocks in production.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Deadlock risk — T1 locks A then B; T2 locks B then A
synchronized(lockA) { synchronized(lockB) { /* T1 */ } }
synchronized(lockB) { synchronized(lockA) { /* T2 */ } }

// ✓ Fix — consistent lock order
synchronized(lockA) { synchronized(lockB) { /* both threads */ } }

// ✓ Fix — tryLock with timeout
if (lockA.tryLock(100, MILLISECONDS)) {
    try {
        if (lockB.tryLock(100, MILLISECONDS)) {
            try { /* critical section */ } finally { lockB.unlock(); }
        }
    } finally { lockA.unlock(); }
}</code></pre>
              </div>`},{q:"What is <code>ThreadLocal</code> and when do you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>ThreadLocal</code> gives each thread its own independent copy of a variable — no synchronisation needed.<br/><br/>
                <strong>Interview Answer:</strong> <code>ThreadLocal&lt;T&gt;</code> stores a value per thread. Each thread that accesses <code>get()</code>/<code>set()</code> works with its own isolated copy. Common uses:
                <br/>• Storing the current user/session in a web request (Spring's <code>SecurityContextHolder</code>).
                <br/>• Storing database connections or formatters in per-thread caches.
                <br/><br/><strong>Warning:</strong> In thread pools (Tomcat, Executors), threads are reused. Always call <code>ThreadLocal.remove()</code> after the task finishes, otherwise stale data leaks to the next request.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class RequestContext {
    private static final ThreadLocal&lt;String&gt; USER =
        ThreadLocal.withInitial(() -&gt; "anonymous");

    public static void setUser(String u) { USER.set(u); }
    public static String getUser()       { return USER.get(); }
    public static void clear()           { USER.remove(); }  // ✅ must call!
}</code></pre>
              </div>`},{q:"What are thread priorities and do they guarantee execution order?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Thread priorities are a hint to the OS scheduler, not a hard guarantee.<br/><br/>
                <strong>Interview Answer:</strong> Java threads have a priority between <code>Thread.MIN_PRIORITY</code> (1) and <code>Thread.MAX_PRIORITY</code> (10), default <code>Thread.NORM_PRIORITY</code> (5). Higher-priority threads are <em>more likely</em> to be scheduled first, but the actual behaviour depends entirely on the OS scheduler — Java makes no guarantees. On some OS platforms priorities are ignored entirely.
                <br/><br/>Do <strong>not</strong> use thread priorities as a correctness mechanism; use them only as performance hints.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread t = new Thread(task);
t.setPriority(Thread.MAX_PRIORITY);  // hint only — not a guarantee
t.start();</code></pre>
              </div>`},{q:"What is a daemon thread?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Daemon threads are background service threads that the JVM terminates automatically when no non-daemon threads remain.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>daemon thread</strong> is a low-priority background thread that supports user (non-daemon) threads. When all user threads finish, the JVM exits and kills all daemon threads without waiting for them to complete. The GC thread, JIT compiler thread, and Finaliser thread are examples of JVM daemon threads.
                <br/><br/>Set before calling <code>start()</code>: <code>thread.setDaemon(true)</code>. The <code>main</code> thread is a non-daemon thread by default.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread logger = new Thread(() -&gt; {
    while (true) { flushLogs(); sleep(1000); }
});
logger.setDaemon(true);  // JVM won't wait for this thread to finish
logger.start();</code></pre>
              </div>`},{q:"What is the difference between <code>Runnable</code> and <code>Callable</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both represent tasks for threads, but <code>Callable</code> adds return value and exception support.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              Runnable           Callable&lt;V&gt;
---------------      ---------------    -------------------
Return type          void               V (generic)
Throws checked ex    No                 Yes
Method               run()              call()
Used with            Thread, Executor   ExecutorService.submit()
Result access        N/A                Future&lt;V&gt;</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Callable&lt;String&gt; task = () -&gt; fetchFromDB();   // may throw
Future&lt;String&gt; future = executor.submit(task);
String result = future.get(5, TimeUnit.SECONDS); // blocks, throws on timeout</code></pre>
              </div>`},{q:"How do you identify a stuck or deadlocked thread in production?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A practical production debugging question — thread dumps are a key skill.<br/><br/>
                <strong>Interview Answer:</strong> Steps to diagnose a stuck thread:
                <br/>1. <strong>Thread dump</strong> — <code>kill -3 &lt;pid&gt;</code> on Linux or <code>jstack &lt;pid&gt;</code>. Shows all thread states, stack traces, and deadlock cycles (explicitly flagged as "Found one Java-level deadlock").
                <br/>2. Look for threads in <strong>BLOCKED</strong> or <strong>WAITING</strong> state for unusually long durations.
                <br/>3. Check <strong>lock ownership</strong> — which thread holds the lock the blocked thread is waiting for.
                <br/>4. Use monitoring tools: <strong>VisualVM</strong>, <strong>JMC</strong> (Java Mission Control), <strong>Actuator /threaddump</strong> in Spring Boot, <strong>Grafana + Micrometer</strong> thread metrics.
                <br/>5. Check for <strong>infinite loops</strong> (thread stuck in RUNNABLE with 100% CPU).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Get PID
jps -l

# Thread dump to file
jstack 12345 > thread_dump.txt

# Or via Spring Boot Actuator
GET /actuator/threaddump</code></pre>
              </div>`},{q:"What is <code>CompletableFuture</code> and how is it different from <code>Future</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>CompletableFuture</code> is the Java 8 answer to composable async programming.<br/><br/>
                <strong>Interview Answer:</strong> <code>Future&lt;T&gt;</code> (Java 5) represents a pending result but is limited — <code>get()</code> blocks, no callbacks, cannot chain operations. <code>CompletableFuture&lt;T&gt;</code> (Java 8) extends <code>Future</code> with:
                <br/>• <strong>Non-blocking callbacks</strong>: <code>thenApply</code>, <code>thenAccept</code>, <code>thenCompose</code>.
                <br/>• <strong>Combining</strong>: <code>thenCombine</code>, <code>allOf</code>, <code>anyOf</code>.
                <br/>• <strong>Error handling</strong>: <code>exceptionally</code>, <code>handle</code>.
                <br/>• <strong>Manual completion</strong>: <code>complete(value)</code>, <code>completeExceptionally(ex)</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>CompletableFuture
    .supplyAsync(() -&gt; fetchUser(id))           // async on common pool
    .thenApply(user -&gt; enrichWithProfile(user))  // transform result
    .thenAccept(System.out::println)             // consume result
    .exceptionally(ex -&gt; {                       // handle error
        log.error("Failed", ex);
        return null;
    });
// Non-blocking — current thread is free to do other work</code></pre>
              </div>`}]},{id:"day8",day:8,title:"Spring Core",topics:["IoC / DI","DI Types","Bean Lifecycle","Scopes","@Component/@Service/@Repository","@Bean vs @Component","@Autowired / @Qualifier","AOP","Circular Dependency"],questions:[{q:"What is Inversion of Control (IoC) and Dependency Injection (DI)?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> IoC and DI are the core design principles that make Spring powerful and testable.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>IoC</strong> — instead of your code creating its dependencies with <code>new</code>, control is <em>inverted</em>: the Spring container creates and manages object lifecycles. Your code just declares what it needs.
                <br/>• <strong>DI</strong> — the mechanism IoC uses. The container <em>injects</em> required dependencies into your class (via constructor, setter, or field). This decouples classes from each other, making them independently testable.
                <br/><br/><strong>Benefit:</strong> Swap implementations without changing consumer code; mock dependencies in unit tests without any framework.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Without DI — tightly coupled, hard to test
class OrderService {
    private final PaymentService ps = new PaymentService();  // new!
}

// ✓ With DI — loosely coupled, mockable
@Service
class OrderService {
    private final PaymentService paymentService;

    OrderService(PaymentService paymentService) {   // injected by Spring
        this.paymentService = paymentService;
    }
}</code></pre>
              </div>`},{q:"What are the types of Dependency Injection in Spring?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Spring supports three injection styles — each with different trade-offs.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Constructor Injection</strong> — dependencies passed via constructor. ✅ Preferred. Ensures immutability, mandatory dependencies, easy testing without Spring, detects circular deps at startup.
                <br/>2. <strong>Setter Injection</strong> — dependencies set via <code>@Autowired</code> setter methods. Use for optional dependencies. Allows partial injection.
                <br/>3. <strong>Field Injection</strong> — <code>@Autowired</code> directly on a field. ❌ Avoid in production. Cannot inject without Spring, cannot use <code>final</code>, hides dependencies, makes unit testing harder.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Constructor injection (best practice)
@Service
class UserService {
    private final UserRepository repo;
    UserService(UserRepository repo) { this.repo = repo; }
}

// ✅ Setter injection (optional deps)
@Autowired
public void setEmailService(EmailService es) { this.emailService = es; }

// ❌ Field injection — avoid
@Autowired
private UserRepository repo;  // can't be final, hard to test</code></pre>
              </div>`},{q:"Why is constructor injection preferred over field injection?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a common follow-up — interviewers want you to reason about testability and immutability.<br/><br/>
                <strong>Interview Answer:</strong> Constructor injection is preferred because:
                <br/>• <strong>Immutability</strong> — fields can be <code>final</code>, preventing accidental reassignment.
                <br/>• <strong>Mandatory dependencies explicit</strong> — missing deps cause startup failure, not a runtime NPE.
                <br/>• <strong>Testable without Spring</strong> — pass mocks directly via constructor: <code>new UserService(mockRepo)</code>.
                <br/>• <strong>Detects circular deps</strong> — Spring throws <code>BeanCurrentlyInCreationException</code> at startup instead of at runtime.
                <br/>• <strong>Code clarity</strong> — a class with too many constructor args is a clear signal it violates Single Responsibility.
              </p>`},{q:"What is a Spring Bean and what is the Spring Bean lifecycle?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Beans are the fundamental building blocks of a Spring application.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>Spring Bean</strong> is any object managed by the Spring IoC container — instantiated, configured, assembled, and destroyed by Spring. The lifecycle:
                <br/>1. <strong>Instantiation</strong> — Spring creates the bean (calls constructor).
                <br/>2. <strong>Dependency injection</strong> — setters/fields populated.
                <br/>3. <strong>Bean Name Aware / ApplicationContextAware</strong> callbacks.
                <br/>4. <strong>BeanPostProcessor.postProcessBeforeInitialisation</strong>.
                <br/>5. <strong>@PostConstruct / InitializingBean.afterPropertiesSet()</strong> — custom init logic.
                <br/>6. <strong>BeanPostProcessor.postProcessAfterInitialisation</strong> — AOP proxies created here.
                <br/>7. <strong>Bean in use</strong> (application running).
                <br/>8. <strong>@PreDestroy / DisposableBean.destroy()</strong> — cleanup on shutdown.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Component
class CacheService {
    @PostConstruct
    void init() { loadCache(); }     // called after injection

    @PreDestroy
    void cleanup() { saveCache(); }  // called before container shutdown
}</code></pre>
              </div>`},{q:"What are Spring Bean scopes?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Scope controls how many instances of a bean exist and for how long.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>singleton</strong> (default) — one shared instance per Spring container. All injection points receive the same object.
                <br/>• <strong>prototype</strong> — a new instance is created every time the bean is requested from the container.
                <br/>• <strong>request</strong> — one instance per HTTP request. Destroyed at end of request. (Web-aware only.)
                <br/>• <strong>session</strong> — one instance per HTTP session. (Web-aware only.)
                <br/>• <strong>application</strong> — one instance per <code>ServletContext</code>.
                <br/><br/>⚠️ Injecting a <code>prototype</code> bean into a <code>singleton</code> requires <code>ObjectProvider</code> or <code>@Lookup</code> — otherwise the prototype is only created once.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean
@Scope("prototype")
public ReportGenerator reportGenerator() { return new ReportGenerator(); }</code></pre>
              </div>`},{q:"What is the difference between <code>@Component</code>, <code>@Service</code>, and <code>@Repository</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> All three are stereotype annotations — they register a bean, but carry different semantic meaning.<br/><br/>
                <strong>Interview Answer:</strong> All three are specialisations of <code>@Component</code> — they all trigger bean registration via component scanning. The difference is semantic and functional:
                <br/>• <code>@Component</code> — generic bean, any layer.
                <br/>• <code>@Service</code> — marks business logic layer. No extra behaviour; improves readability.
                <br/>• <code>@Repository</code> — marks data access layer. Spring automatically translates <code>SQLException</code> and JPA persistence exceptions into Spring's <code>DataAccessException</code> hierarchy (exception translation).
                <br/>• <code>@Controller</code> / <code>@RestController</code> — marks the presentation (web) layer.
              </p>`},{q:"What is the difference between <code>@Bean</code> and <code>@Component</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both register beans, but in different ways — knowing when to use each is important.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          @Component                  @Bean
-----------      --------------------------  ----------------------------
Who registers    Component scan (automatic)  @Configuration class (manual)
Where used       On class declaration        On method in @Configuration
Control          Limited                     Full — you write the constructor
Third-party      ❌ Cannot annotate class    ✅ Wrap any class in a @Bean method
Customisation    Basic                       Full control over creation logic</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Configuration
class AppConfig {
    @Bean
    public RestTemplate restTemplate() {   // 3rd-party class — can't @Component it
        RestTemplate rt = new RestTemplate();
        rt.setConnectTimeout(5000);
        return rt;
    }
}</code></pre>
              </div>`},{q:"What is <code>@Autowired</code>? What is <code>@Qualifier</code> and <code>@Primary</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three annotations work together to control how Spring resolves injection when multiple beans match.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>@Autowired</code> — tells Spring to inject the matching bean automatically. Matches by type first, then by name.
                <br/>• <strong>Problem:</strong> if two beans of the same type exist (e.g., two <code>DataSource</code> beans), Spring throws <code>NoUniqueBeanDefinitionException</code>.
                <br/>• <code>@Primary</code> — marks one bean as the default choice when multiple candidates exist.
                <br/>• <code>@Qualifier("beanName")</code> — explicitly specifies which bean to inject by name. Overrides <code>@Primary</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean @Primary
DataSource primaryDataSource() { return new HikariDataSource(primaryConfig); }

@Bean("analyticsDS")
DataSource analyticsDataSource() { return new HikariDataSource(analyticsConfig); }

@Service
class ReportService {
    // Uses primary by default
    @Autowired DataSource dataSource;

    // Override with @Qualifier
    @Autowired @Qualifier("analyticsDS")
    DataSource analyticsDataSource;
}</code></pre>
              </div>`},{q:"What is the difference between <code>BeanFactory</code> and <code>ApplicationContext</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>ApplicationContext</code> is the enhanced IoC container used in virtually all Spring applications.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>BeanFactory</code> — the basic IoC container. Lazy-initialises beans (created on first request). Minimal footprint — used in memory-constrained environments.
                <br/>• <code>ApplicationContext</code> — extends <code>BeanFactory</code> with enterprise features:
                  <br/>&nbsp;&nbsp;— Eager initialises singleton beans at startup (fails fast on misconfiguration).
                  <br/>&nbsp;&nbsp;— Event publishing (<code>ApplicationEventPublisher</code>).
                  <br/>&nbsp;&nbsp;— i18n (MessageSource).
                  <br/>&nbsp;&nbsp;— AOP integration.
                  <br/>&nbsp;&nbsp;— <code>@ComponentScan</code> support.
                <br/><br/>Always use <code>ApplicationContext</code> (e.g., <code>AnnotationConfigApplicationContext</code>, or the one Spring Boot creates automatically).
              </p>`},{q:"What is <code>@ComponentScan</code> and how does it work?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Component scanning is how Spring auto-discovers beans without XML configuration.<br/><br/>
                <strong>Interview Answer:</strong> <code>@ComponentScan</code> tells Spring to scan specified packages (and sub-packages) for classes annotated with <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, and <code>@Configuration</code>, and register them as beans automatically.
                <br/><br/><code>@SpringBootApplication</code> includes <code>@ComponentScan</code> with the main class's package as the base, so all classes in that package and below are automatically detected — which is why your main class should be in the root package.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@SpringBootApplication  // includes @ComponentScan(basePackages = "com.example")
public class Application { public static void main(String[] a) { SpringApplication.run(Application.class, a); } }

// Explicit scan of multiple packages
@ComponentScan(basePackages = {"com.example.services", "com.example.repos"})</code></pre>
              </div>`},{q:"What are stereotype annotations in Spring?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Stereotype annotations tell Spring the role of a class in the architecture.<br/><br/>
                <strong>Interview Answer:</strong> Stereotype annotations are meta-annotations that all extend <code>@Component</code>. They register the class as a Spring bean and signal its architectural role:
                <br/>• <code>@Component</code> — generic component.
                <br/>• <code>@Service</code> — service/business logic layer.
                <br/>• <code>@Repository</code> — data access layer (adds exception translation).
                <br/>• <code>@Controller</code> — web MVC layer (returns views).
                <br/>• <code>@RestController</code> — REST web layer (= @Controller + @ResponseBody).
                <br/>• <code>@Configuration</code> — source of bean definitions.
              </p>`},{q:"What causes a circular dependency in Spring and how do you fix it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Circular dependencies are a design smell that Spring detects at startup for constructor injection.<br/><br/>
                <strong>Interview Answer:</strong> A circular dependency occurs when Bean A needs Bean B, and Bean B needs Bean A (or a longer cycle). With constructor injection, Spring throws <code>BeanCurrentlyInCreationException</code> at startup because neither bean can be fully created first.
                <br/><br/><strong>Fix options (in order of preference):</strong>
                <br/>1. <strong>Refactor</strong> — extract the shared logic into a third bean (best approach, fixes the design).
                <br/>2. <code>@Lazy</code> on one injection point — Spring injects a proxy that's resolved on first use.
                <br/>3. Use setter injection instead of constructor — Spring can create both objects first, then inject (less safe).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Circular — A needs B, B needs A
@Service class A { A(B b) {} }
@Service class B { B(A a) {} }  // BeanCurrentlyInCreationException

// ✓ Fix 1 — extract shared logic to C
@Service class C { /* shared logic */ }
@Service class A { A(C c) {} }
@Service class B { B(C c) {} }

// ✓ Fix 2 — @Lazy proxy
@Service class A { A(@Lazy B b) {} }</code></pre>
              </div>`},{q:"What is the difference between <code>@Configuration</code> and <code>@Component</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both register beans, but <code>@Configuration</code> uses CGLIB proxying to ensure singleton behaviour for <code>@Bean</code> methods.<br/><br/>
                <strong>Interview Answer:</strong> <code>@Configuration</code> is a specialisation of <code>@Component</code> but with one critical difference: Spring generates a <strong>CGLIB subclass proxy</strong> of the <code>@Configuration</code> class. This means that when one <code>@Bean</code> method calls another <code>@Bean</code> method in the same class, Spring intercepts the call and returns the existing singleton bean from the container instead of creating a new instance.
                <br/><br/><code>@Component</code> classes are not proxied, so inter-method <code>@Bean</code> calls would create new instances instead of returning the managed singletons.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Configuration   // CGLIB proxied
class AppConfig {
    @Bean ServiceA serviceA() { return new ServiceA(serviceB()); }
    @Bean ServiceB serviceB() { return new ServiceB(); }
    // serviceB() called above returns the SAME bean from container
}

@Component       // Not proxied
class NotAConfig {
    @Bean ServiceB serviceB() { return new ServiceB(); }
    // each call creates a NEW ServiceB — likely a bug
}</code></pre>
              </div>`},{q:"How does Spring AOP work and what are its key terms?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> AOP lets you add cross-cutting concerns (logging, transactions, security) without polluting business logic.<br/><br/>
                <strong>Interview Answer:</strong> Spring AOP uses <strong>dynamic proxies</strong> at runtime to intercept method calls:
                <br/>• <strong>JDK dynamic proxy</strong> — used when the bean implements an interface.
                <br/>• <strong>CGLIB proxy</strong> — used when no interface; subclasses the bean class.
                <br/><br/>Key terms:
                <br/>• <strong>Aspect</strong> — the cross-cutting concern module (e.g., <code>@Aspect</code> class).
                <br/>• <strong>Advice</strong> — the action taken: <code>@Before</code>, <code>@After</code>, <code>@AfterReturning</code>, <code>@AfterThrowing</code>, <code>@Around</code>.
                <br/>• <strong>Pointcut</strong> — expression matching join points (e.g., <code>execution(* com.example.service.*.*(..))</code>).
                <br/>• <strong>Join point</strong> — a point in execution where advice can be applied (in Spring AOP, always a method call).
                <br/>• <strong>Weaving</strong> — linking aspects with target objects (Spring does this at runtime with proxies).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Aspect @Component
class LoggingAspect {
    @Around("execution(* com.example.service.*.*(..))")
    Object logTime(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed();   // call real method
        log.info("{} took {}ms", pjp.getSignature(), System.currentTimeMillis() - start);
        return result;
    }
}</code></pre>
              </div>`},{q:"What is Spring's <code>@Transactional</code> and why does it sometimes not work?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>@Transactional</code> is AOP-based — its proxy nature creates subtle failure modes that interviewers love to test.<br/><br/>
                <strong>Interview Answer:</strong> <code>@Transactional</code> wraps the method in a database transaction managed by Spring. If the method throws a <code>RuntimeException</code>, the transaction is rolled back; otherwise it is committed.
                <br/><br/><strong>Common reasons it doesn't work:</strong>
                <br/>1. <strong>Self-invocation</strong> — calling a <code>@Transactional</code> method from within the same class bypasses the proxy (direct this.method() call). Fix: inject self or restructure.
                <br/>2. <strong>private / protected method</strong> — Spring AOP proxy cannot intercept non-public methods. Make the method public.
                <br/>3. <strong>Wrong exception type</strong> — by default only <code>RuntimeException</code> triggers rollback. For checked exceptions add <code>rollbackFor = Exception.class</code>.
                <br/>4. <strong>Bean not managed by Spring</strong> — created with <code>new</code> instead of injected.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Service
class OrderService {
    // ❌ Self-invocation — @Transactional on processOrder is bypassed
    public void placeOrder() { processOrder(); }

    @Transactional
    public void processOrder() { /* DB work */ }
}

// ✓ Fix — make placeOrder @Transactional or restructure to a separate bean
@Transactional(rollbackFor = Exception.class)  // roll back for ALL exceptions
public void processOrder() throws IOException { /* ... */ }</code></pre>
              </div>`}]},{id:"day9",day:9,title:"Spring Boot & Microservices",topics:["@SpringBootApplication","Auto-Configuration","HTTP Request Flow","REST Annotations","Validation","Exception Handling","Profiles","Actuator","Microservices Patterns","@Transactional Pitfalls","LazyInit"],questions:[{q:"What does <code>@SpringBootApplication</code> do internally?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a composite annotation — understanding its components shows depth of knowledge.<br/><br/>
                <strong>Interview Answer:</strong> <code>@SpringBootApplication</code> is a convenience annotation combining three annotations:
                <br/>• <code>@SpringBootConfiguration</code> — marks it as a <code>@Configuration</code> class (bean definitions).
                <br/>• <code>@EnableAutoConfiguration</code> — triggers Spring Boot's auto-configuration mechanism (reads <code>AutoConfiguration.imports</code>, applies conditional config classes).
                <br/>• <code>@ComponentScan</code> — scans the current package and all sub-packages for Spring-managed components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Equivalent to:
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = "com.example")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}</code></pre>
              </div>`},{q:"How does Spring Boot auto-configuration work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Auto-configuration is Spring Boot's core "magic" — understanding it separates intermediate from advanced developers.<br/><br/>
                <strong>Interview Answer:</strong> <code>@EnableAutoConfiguration</code> reads configuration class names from <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>. Each listed class is a <code>@Configuration</code> class decorated with <code>@ConditionalOn*</code> annotations. Spring Boot evaluates conditions at startup:
                <br/>• <code>@ConditionalOnClass</code> — only configure if a class is on the classpath (e.g., configure <code>DataSource</code> only if HikariCP is present).
                <br/>• <code>@ConditionalOnMissingBean</code> — only configure if the application has not already defined its own bean (allows override).
                <br/>• <code>@ConditionalOnProperty</code> — only configure if a property is set.
                <br/><br/>You can see all auto-configuration decisions with <code>--debug</code> flag at startup.
              </p>`},{q:"What are Spring Boot starter dependencies?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Starters eliminate dependency management boilerplate — one of Spring Boot's biggest productivity wins.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>starter</strong> is a curated dependency descriptor that pulls in all required libraries for a feature, with compatible versions pre-selected. You don't need to know individual library versions or worry about conflicts.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Starter                          What it includes
-----------------------------    ------------------------------------------
spring-boot-starter-web          Spring MVC, Tomcat, Jackson, validation
spring-boot-starter-data-jpa     Hibernate, Spring Data JPA, JDBC
spring-boot-starter-security     Spring Security core
spring-boot-starter-test         JUnit 5, Mockito, AssertJ, Spring test
spring-boot-starter-actuator     Metrics, health, info endpoints</code></pre>
              </div>`},{q:"Describe the flow of an HTTP request through a Spring Boot application.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Knowing the full request pipeline helps debug issues and understand Spring MVC internals.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Client
  │
  ▼
Embedded Tomcat (port 8080)
  │
  ▼
Filter Chain (security, CORS, logging filters)
  │
  ▼
DispatcherServlet  ←  Front Controller (one per app)
  │
  ▼
HandlerMapping     ←  Find which @Controller method matches URL
  │
  ▼
HandlerAdapter     ←  Invoke the controller method, resolve args (@RequestBody etc.)
  │
  ▼
@Controller / @RestController method
  │
  ▼
Service → Repository → Database
  │
  ▼
MessageConverter   ←  Serialize return value to JSON (Jackson)
  │
  ▼
HTTP Response</code></pre>
              </div>`},{q:"What is the difference between <code>@RequestParam</code>, <code>@PathVariable</code>, and <code>@RequestBody</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three ways to extract data from an HTTP request — each serves a different purpose.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Annotation        Source                   Example URL / Body
--------------    ----------------------   --------------------------
@PathVariable     URL path segment         GET /users/42   → id=42
@RequestParam     Query string parameter   GET /users?city=Delhi → city="Delhi"
@RequestBody      HTTP request body JSON   POST /users  body: {"name":"Alice"}</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@GetMapping("/users/{id}")
User getUser(@PathVariable Long id) { ... }

@GetMapping("/users")
List&lt;User&gt; search(@RequestParam String city,
                   @RequestParam(defaultValue="0") int page) { ... }

@PostMapping("/users")
User create(@RequestBody @Valid UserDto dto) { ... }</code></pre>
              </div>`},{q:"How does global exception handling work in Spring Boot?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Centralised exception handling avoids try-catch boilerplate in every controller.<br/><br/>
                <strong>Interview Answer:</strong> <code>@RestControllerAdvice</code> (= <code>@ControllerAdvice + @ResponseBody</code>) creates a global exception-handling class. Methods annotated with <code>@ExceptionHandler</code> catch specific exception types thrown from any controller and return a structured error response.
                <br/><br/><strong>Advantages:</strong> Single place to manage all error responses; consistent error format; decouples error handling from business logic.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse("NOT_FOUND", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        String msg = ex.getBindingResult().getFieldErrors().stream()
            .map(f -&gt; f.getField() + ": " + f.getDefaultMessage())
            .collect(Collectors.joining(", "));
        return new ErrorResponse("VALIDATION_FAILED", msg);
    }
}</code></pre>
              </div>`},{q:"What are Spring Profiles and how do you activate them?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Profiles let you manage environment-specific configuration without changing code.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>profile</strong> is a named environment configuration. You can have <code>application-dev.properties</code>, <code>application-qa.properties</code>, <code>application-prod.properties</code>. The active profile determines which file is loaded on top of the base <code>application.properties</code>.
                <br/><br/><strong>Activation methods:</strong>
                <br/>• <code>spring.profiles.active=prod</code> in <code>application.properties</code>.
                <br/>• JVM arg: <code>-Dspring.profiles.active=prod</code>.
                <br/>• Command line: <code>java -jar app.jar --spring.profiles.active=prod</code>.
                <br/>• Environment variable: <code>SPRING_PROFILES_ACTIVE=prod</code>.
                <br/><br/><code>@Profile("prod")</code> on a bean — only registers it when that profile is active.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean
@Profile("prod")
DataSource prodDataSource() { return new HikariDataSource(prodConfig); }

@Bean
@Profile("dev")
DataSource h2DataSource() { return new EmbeddedDatabaseBuilder().build(); }</code></pre>
              </div>`},{q:"What is Spring Actuator and what endpoints does it expose?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Actuator provides production-ready monitoring and management endpoints out of the box.<br/><br/>
                <strong>Interview Answer:</strong> <code>spring-boot-starter-actuator</code> adds HTTP endpoints for monitoring and managing the application. Key endpoints:
                <br/>• <code>/actuator/health</code> — app health status (UP/DOWN); includes DB, disk, custom checks.
                <br/>• <code>/actuator/metrics</code> — JVM, CPU, memory, HTTP request metrics (integrates with Prometheus/Micrometer).
                <br/>• <code>/actuator/info</code> — app version, build info.
                <br/>• <code>/actuator/env</code> — active properties and environment.
                <br/>• <code>/actuator/threaddump</code> — all thread states.
                <br/>• <code>/actuator/loggers</code> — view/change log levels at runtime.
                <br/><br/>⚠️ Restrict exposure in production: <code>management.endpoints.web.exposure.include=health,metrics,info</code>
              </p>`},{q:"What is the difference between <code>application.properties</code> and <code>bootstrap.properties</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both configure the app but at different phases — important for Spring Cloud Config setups.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>application.properties</code> — the standard Spring Boot configuration file. Loaded by the <code>ApplicationContext</code>. Contains app-level properties (port, datasource, etc.).
                <br/>• <code>bootstrap.properties</code> — loaded by a <em>parent</em> <code>ApplicationContext</code> (BootstrapContext) <strong>before</strong> the main context starts. Used by <strong>Spring Cloud</strong> to configure early-startup concerns like connecting to a Config Server (<code>spring.cloud.config.uri</code>) so that remote properties are available before any bean is created.
                <br/><br/>In Spring Boot 2.4+ and Spring Cloud 2020+, bootstrap is disabled by default. Re-enable with <code>spring.config.use-legacy-processing=true</code> or add <code>spring-cloud-starter-bootstrap</code>.
              </p>`},{q:"What is <code>@ConfigurationProperties</code> and why use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A type-safe, structured alternative to injecting individual <code>@Value</code> properties.<br/><br/>
                <strong>Interview Answer:</strong> <code>@ConfigurationProperties(prefix = "app")</code> binds a group of related properties from <code>application.properties</code> directly into a typed Java class, with validation support. Advantages over <code>@Value</code>:
                <br/>• Type-safe and IDE auto-complete.
                <br/>• Group related properties cleanly.
                <br/>• Supports nested objects and lists.
                <br/>• Can be combined with <code>@Validated</code> for startup-time constraint checking.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// application.properties
// app.payment.url=https://pay.example.com
// app.payment.timeout=5000
// app.payment.retry-count=3

@Component
@ConfigurationProperties(prefix = "app.payment")
@Validated
class PaymentProperties {
    @NotBlank  String url;
    @Min(1000) int timeout;
    int retryCount;
    // getters + setters
}</code></pre>
              </div>`},{q:"Why is <code>spring.jpa.hibernate.ddl-auto=update</code> dangerous in production?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A real-world best-practice question that catches many junior developers off guard.<br/><br/>
                <strong>Interview Answer:</strong> <code>ddl-auto=update</code> tells Hibernate to automatically alter the database schema at startup to match the entity model. This is dangerous in production because:
                <br/>• <strong>Data loss risk</strong> — Hibernate may drop columns or tables if the mapping changes.
                <br/>• <strong>No review/approval</strong> — schema changes happen automatically without a DBA or change control review.
                <br/>• <strong>Irreversible</strong> — dropped data cannot be recovered.
                <br/>• <strong>Race conditions</strong> — multiple pods starting simultaneously may conflict.
                <br/><br/><strong>Recommended values:</strong>
                <br/>• <code>validate</code> — startup fails if schema doesn't match (safe for production — early warning).
                <br/>• <code>none</code> — no DDL action (use a migration tool).
                <br/><br/><strong>Best practice:</strong> Use <strong>Flyway</strong> or <strong>Liquibase</strong> for version-controlled, reviewed schema migrations in production.
              </p>`},{q:"What causes <code>LazyInitializationException</code> in Spring?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> One of the most common Hibernate/JPA pitfalls — especially in REST APIs.<br/><br/>
                <strong>Interview Answer:</strong> <code>LazyInitializationException</code> is thrown when you try to access a lazily-loaded JPA association (e.g., <code>@OneToMany</code> default is LAZY) <strong>outside</strong> an active Hibernate session (transaction). By the time the controller accesses the collection, the session has already closed (it opened and closed in the service layer).
                <br/><br/><strong>Fixes:</strong>
                <br/>1. <strong>Fetch in query</strong> — use <code>JOIN FETCH</code> in JPQL or <code>@EntityGraph</code> to eagerly load the association within the transaction. ✅ Best approach.
                <br/>2. <strong>DTO projection</strong> — select only the fields you need; no lazy proxies.
                <br/>3. <code>@Transactional</code> on the controller — keep session open longer. ❌ Bad practice (keeps DB connection open).
                <br/>4. <code>EAGER</code> fetch type — loads always, even when not needed. ❌ Performance problem.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Fix — JOIN FETCH inside transaction
@Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.id = :id")
Order findWithItems(@Param("id") Long id);

// ✅ Fix — @EntityGraph
@EntityGraph(attributePaths = "items")
Optional&lt;Order&gt; findById(Long id);</code></pre>
              </div>`},{q:"What are the key patterns in a Microservices architecture?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Microservices introduce distributed system challenges that require well-known patterns to address.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>API Gateway</strong> — single entry point for all clients; handles routing, authentication, rate limiting, SSL termination. (Spring Cloud Gateway, Kong).
                <br/>• <strong>Service Discovery</strong> — services register themselves and discover others dynamically (Eureka, Consul). Avoids hardcoded URLs.
                <br/>• <strong>Circuit Breaker</strong> — when a downstream service fails repeatedly, trips the circuit and returns a fallback immediately instead of waiting (Resilience4j, Hystrix).
                <br/>• <strong>Config Server</strong> — centralised configuration for all services (Spring Cloud Config).
                <br/>• <strong>Distributed Tracing</strong> — correlate logs across services with a trace ID (Micrometer + Zipkin/Jaeger).
                <br/>• <strong>Saga Pattern</strong> — manages distributed transactions across services via choreography (events) or orchestration (central coordinator) instead of 2-phase commit.
                <br/>• <strong>Event-Driven (Kafka/RabbitMQ)</strong> — async communication for loose coupling and resilience.
              </p>`},{q:"What is the difference between <code>@RestController</code> and <code>@Controller</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A common Day 1 Spring Boot question — know both the technical difference and the use case.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>@Controller</code> — marks a Spring MVC controller. Handler methods return a <strong>view name</strong> resolved by a <code>ViewResolver</code> (e.g., Thymeleaf template). Used for server-side rendered web applications.
                <br/>• <code>@RestController</code> — <code>@Controller + @ResponseBody</code>. Every handler method writes directly to the HTTP response body (serialised to JSON/XML by Jackson). Used for REST APIs.
                <br/><br/>If you annotate a method in a <code>@Controller</code> with <code>@ResponseBody</code>, it behaves identically to a method in <code>@RestController</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Controller
class WebController {
    @GetMapping("/home")
    String home() { return "home";  }   // resolves home.html template
}

@RestController
class ApiController {
    @GetMapping("/api/users")
    List&lt;User&gt; users() { return service.getAll(); }  // serialised to JSON
}</code></pre>
              </div>`},{q:"What is the difference between <code>@RequestMapping</code> and <code>@GetMapping</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>@GetMapping</code> and siblings are convenience shortcuts introduced in Spring 4.3.<br/><br/>
                <strong>Interview Answer:</strong> <code>@RequestMapping</code> is the general-purpose mapping annotation — you specify the HTTP method explicitly. <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@PatchMapping</code>, <code>@DeleteMapping</code> are <strong>composed annotations</strong> — shortcuts for <code>@RequestMapping(method = RequestMethod.GET)</code> etc.
                <br/><br/>The shorthand versions are preferred for readability. <code>@RequestMapping</code> is still useful at the class level to define a base path for all methods in a controller.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestController
@RequestMapping("/api/users")       // base path for all methods
class UserController {

    @GetMapping("/{id}")            // GET /api/users/{id}
    User getById(@PathVariable Long id) { ... }

    @PostMapping                    // POST /api/users
    User create(@RequestBody UserDto dto) { ... }

    @DeleteMapping("/{id}")         // DELETE /api/users/{id}
    void delete(@PathVariable Long id) { ... }
}</code></pre>
              </div>`}]},{id:"day10",day:10,title:"DevOps & Production",topics:["Docker","Kubernetes","CI/CD","ConfigMap","WAR Room","Observability","Performance","REST Design","N+1 Query","API Versioning"],questions:[{q:"What is the difference between a Docker image and a container?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The image vs container distinction is foundational to understanding Docker.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Image</strong> — a read-only, layered, immutable snapshot built from a <code>Dockerfile</code>. Stored in a registry (Docker Hub, ECR, GCR). Think of it as a blueprint.
                <br/>• <strong>Container</strong> — a running (or stopped) instance of an image with its own writable layer, isolated filesystem, network stack, and process space. Think of it as the house built from the blueprint.
                <br/><br/>Many containers can run from the same image simultaneously. Deleting a container doesn't affect the image.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Build image from Dockerfile
docker build -t myapp:1.0 .

# Run a container from the image
docker run -d -p 8080:8080 --name myapp myapp:1.0

# List running containers
docker ps

# List images
docker images</code></pre>
              </div>`},{q:"What is a Dockerfile and what are its key instructions?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A Dockerfile is the recipe for building a Docker image — knowing common instructions is essential.<br/><br/>
                <strong>Interview Answer:</strong> A <code>Dockerfile</code> is a text file containing ordered instructions that Docker reads to build an image layer by layer. Key instructions:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Instruction   Purpose
-----------   --------------------------------------------------
FROM          Base image (e.g., eclipse-temurin:21-jre)
WORKDIR       Set working directory inside container
COPY / ADD    Copy files from host to image
RUN           Execute commands during build (install deps, build)
EXPOSE        Document the port the container listens on
ENV           Set environment variables
ENTRYPOINT    Primary command that always runs
CMD           Default arguments to ENTRYPOINT (overridable)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Dockerfile</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]</code></pre>
              </div>`},{q:"What is a Container Registry and how does the build-push-pull workflow work?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Registries are the distribution mechanism for Docker images — central to any CI/CD pipeline.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>Container Registry</strong> is a repository for storing and distributing Docker images. Examples: Docker Hub (public), Amazon ECR, Google GCR, Azure ACR, JFrog Artifactory.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Build with a registry-qualified tag
docker build -t 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0 .

# Authenticate (AWS ECR example)
aws ecr get-login-password | docker login --username AWS --password-stdin &lt;registry&gt;

# Push to registry
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0

# Pull on another machine / in Kubernetes
docker pull 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0</code></pre>
              </div>`},{q:"What is a CI/CD pipeline and what are the stages in a GitHub Actions workflow?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> CI/CD automates the build-test-deploy cycle — essential knowledge for modern backend developers.<br/><br/>
                <strong>Interview Answer:</strong> <strong>CI (Continuous Integration)</strong> — automatically build and test code on every push/PR to catch bugs early. <strong>CD (Continuous Delivery/Deployment)</strong> — automatically deliver tested code to an environment.
                <br/><br/>Typical GitHub Actions pipeline for a Spring Boot app:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Trigger (push / PR to main)
     │
     ▼
1. Checkout code          (actions/checkout)
2. Set up Java            (actions/setup-java)
3. Build & Unit Tests     (mvn clean verify)
4. SonarQube Scan         (code quality, coverage, vulnerabilities)
5. Build Docker Image     (docker build)
6. Push to Registry       (docker push)
7. Deploy to Kubernetes   (kubectl apply / Helm upgrade)
8. Post-deploy smoke test (curl /actuator/health)</code></pre>
              </div>`},{q:"Explain the Kubernetes Pod, Deployment, and Service relationship.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three core Kubernetes resources — each serves a distinct role in deploying and exposing an application.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Pod</strong> — smallest deployable unit. One or more containers sharing network and storage. Ephemeral — if it dies, it's gone (unless managed).
                <br/>• <strong>ReplicaSet</strong> — ensures a specified number of Pod replicas are always running. Recreates crashed Pods.
                <br/>• <strong>Deployment</strong> — manages a ReplicaSet; adds rolling updates, rollbacks, and declarative desired-state config. The resource you interact with for app deployments.
                <br/>• <strong>Service</strong> — stable virtual IP + DNS name for a set of Pods (selected by label). Provides load balancing across Pod instances. Types: ClusterIP (internal), NodePort, LoadBalancer (external).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Deploy app
kubectl apply -f deployment.yaml

# Scale
kubectl scale deployment myapp --replicas=5

# Rolling update (zero-downtime)
kubectl set image deployment/myapp myapp=myapp:2.0

# Rollback if issues
kubectl rollout undo deployment/myapp

# Expose via service
kubectl expose deployment myapp --port=80 --target-port=8080 --type=LoadBalancer</code></pre>
              </div>`},{q:"What is a ConfigMap in Kubernetes and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> ConfigMap decouples configuration from container images — a key 12-factor app principle.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>ConfigMap</strong> is a Kubernetes object that stores non-sensitive configuration data as key-value pairs (or entire config files). Your application image stays environment-agnostic; the config is injected at deploy time. Kubernetes injects ConfigMap values as:
                <br/>• <strong>Environment variables</strong> — <code>envFrom</code> / <code>env.valueFrom.configMapKeyRef</code>.
                <br/>• <strong>Mounted files</strong> — mount the ConfigMap as a volume; each key becomes a file.
                <br/><br/><strong>Secret</strong> is the equivalent for sensitive data (passwords, tokens) — base64 encoded, with RBAC controls and optional encryption at rest.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Create ConfigMap
kubectl create configmap app-config   --from-literal=SPRING_PROFILES_ACTIVE=prod   --from-literal=DB_URL=jdbc:postgresql://db:5432/mydb

# Inject as env vars in Deployment
envFrom:
  - configMapRef:
      name: app-config</code></pre>
              </div>`},{q:"What are the pillars of observability in production?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Observability is the ability to understand system state from its outputs — critical for production support.<br/><br/>
                <strong>Interview Answer:</strong> The three pillars:
                <br/>• <strong>Logs</strong> — timestamped, contextual event records. Structured JSON format (with request ID, user ID) is preferred over plain text. Tools: ELK Stack (Elasticsearch + Logstash + Kibana), Grafana Loki.
                <br/>• <strong>Metrics</strong> — numeric measurements over time (latency p99, error rate, CPU, memory, JVM GC time). Collected by Micrometer, scraped by Prometheus, visualised in Grafana.
                <br/>• <strong>Traces</strong> — end-to-end journey of a single request across multiple services. Correlation via Trace ID propagated in headers. Tools: OpenTelemetry → Jaeger or Zipkin.
                <br/><br/>Add <strong>Alerts</strong> on SLO thresholds (e.g., error rate &gt; 1% → PagerDuty). A fourth pillar in some frameworks.
              </p>`},{q:"What is a WAR Room and what do you do in one?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> WAR room knowledge demonstrates production support maturity — highly valued by interviewers from enterprise backgrounds.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>WAR (War Room)</strong> is an emergency virtual or physical meeting triggered by a critical production incident (P0/P1) — e.g., app down, API errors, data issue, SLA breach. All relevant teams join: backend devs, DevOps, QA, DBA, product manager.
                <br/><br/><strong>WAR Room process:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>1. Understand → What is failing? Which service? What error?
2. Check Logs  → App logs, kubectl logs, Kibana / Splunk
3. Root Cause  → Code bug? DB issue? Config wrong? Deployment change?
4. Fix         → Rollback deployment / restart pod / fix config / patch code
5. Validate    → Test APIs, check metrics, confirm logs are clean
6. Close       → Confirm resolved, inform stakeholders, timeline
7. Post-mortem → RCA document, preventive actions, add monitoring/alerts</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Interview answer tip:</strong> "A WAR room is created during P0/P1 production incidents. As a developer I check application logs, identify if a recent deployment caused the issue, help rollback if needed, fix the root cause, and contribute to the post-incident RCA to prevent recurrence."
              </p>`},{q:"Your app is slow after running for 2 hours. How do you debug it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A real production scenario question — systematic debugging approach is what they're evaluating.<br/><br/>
                <strong>Interview Answer:</strong> This symptom suggests a resource leak or gradual accumulation issue. Systematic approach:
                <br/>1. <strong>Check metrics</strong> — Grafana: Is heap memory growing steadily? Is GC time increasing? Is thread count rising? Is DB connection pool exhausted?
                <br/>2. <strong>Heap memory growing</strong> → likely <strong>memory leak</strong>. Take heap dump (<code>jmap -dump:live,format=b,file=heap.hprof &lt;pid&gt;</code>) and analyse in Eclipse MAT or VisualVM. Look for unexpectedly large retained objects.
                <br/>3. <strong>Thread count rising</strong> → thread leak. Check <code>/actuator/threaddump</code> for blocked/stuck threads. Likely a thread pool not cleaning up properly.
                <br/>4. <strong>DB slow</strong> → check slow query log. Look for N+1 queries, missing indexes, connection pool saturation.
                <br/>5. <strong>Response times increasing</strong> → check external dependency latency (Redis, 3rd-party APIs). Add circuit breaker.
                <br/>6. Apply fix, redeploy, monitor.
              </p>`},{q:"What are the common causes of <code>OutOfMemoryError</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> OOM is one of the most serious production errors — knowing the variants shows JVM expertise.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Java heap space</strong> — too many live objects or a memory leak. Fix: increase <code>-Xmx</code> and/or fix the leak.
                <br/>• <strong>GC overhead limit exceeded</strong> — JVM spends &gt;98% time in GC, reclaiming &lt;2%. Almost always a leak. Fix: heap dump analysis.
                <br/>• <strong>Metaspace</strong> — too many classes loaded (dynamic class generation, hot redeploy). Fix: <code>-XX:MaxMetaspaceSize</code>, fix classloader leaks.
                <br/>• <strong>Unable to create new native thread</strong> — OS ulimit on threads hit. Fix: reduce thread pool sizes, increase OS limit, decrease stack size (<code>-Xss</code>).
                <br/>• <strong>Direct buffer memory</strong> — off-heap NIO buffers exhausted. Fix: <code>-XX:MaxDirectMemorySize</code>.
                <br/><br/><strong>Diagnosis:</strong> Enable <code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/oom.hprof</code> to auto-capture a dump.
              </p>`},{q:"How would you handle 1 lakh (100,000) requests per minute?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> A system design / scalability question — shows architectural thinking beyond code.<br/><br/>
                <strong>Interview Answer:</strong> 100K RPM ≈ 1,667 RPS. Approach:
                <br/>1. <strong>Horizontal scaling</strong> — run multiple instances behind a load balancer. Kubernetes HPA (Horizontal Pod Autoscaler) scales based on CPU/RPS.
                <br/>2. <strong>Stateless services</strong> — no server-side sessions; use JWT or Redis-based sessions so any instance can handle any request.
                <br/>3. <strong>Caching</strong> — Redis/Memcached for frequently read data. Reduce DB hits. Cache at service layer or CDN level.
                <br/>4. <strong>Database</strong> — connection pooling (HikariCP), read replicas for read-heavy workloads, query optimisation, indexes.
                <br/>5. <strong>Async processing</strong> — offload heavy work to Kafka/RabbitMQ message queues; respond immediately with 202 Accepted.
                <br/>6. <strong>Rate limiting</strong> — at API Gateway level to protect downstream services.
                <br/>7. <strong>Circuit breakers</strong> — prevent cascade failures when dependencies slow down.
              </p>`},{q:"How do you prevent a background job from running twice (duplicate processing)?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> Distributed job deduplication is a common real-world problem, especially in microservices with multiple instances.<br/><br/>
                <strong>Interview Answer:</strong> Strategies:
                <br/>• <strong>Distributed lock (Redis SETNX / Redisson)</strong> — acquire a lock before running; only one instance acquires it. Release after completion or on timeout.
                <br/>• <strong>Database flag</strong> — use a <code>status</code> column (<code>PENDING → PROCESSING → DONE</code>); update atomically (<code>UPDATE WHERE status='PENDING'</code>). Only the row updated (affected=1) proceeds.
                <br/>• <strong>Idempotent processing</strong> — track processed message IDs; skip if already seen (Redis SET / DB unique constraint).
                <br/>• <strong>Shedlock</strong> — Spring integration (<code>@SchedulerLock</code>) uses a DB/Redis-backed lock for scheduled tasks. Easiest for Spring Boot apps.
                <br/>• <strong>Message queue consumer groups</strong> — Kafka consumer groups ensure each partition is consumed by exactly one consumer in a group.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ShedLock — prevent concurrent @Scheduled execution across instances
@Scheduled(cron = "0 0 * * * *")
@SchedulerLock(name = "hourlyJob", lockAtLeastFor = "PT50M", lockAtMostFor = "PT60M")
void hourlyJob() {
    // runs on exactly one instance per hour
}</code></pre>
              </div>`},{q:"What is the N+1 query problem in Hibernate and how do you fix it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> The N+1 problem is one of the most common performance killers in JPA/Hibernate applications.<br/><br/>
                <strong>Interview Answer:</strong> The N+1 problem occurs when fetching a list of N entities causes N additional queries to load a lazily-fetched association — 1 query for the list + N queries for each item's association = N+1 total.
                <br/><br/><strong>Example:</strong> Fetch 100 Orders → then access each Order's <code>items</code> → 100 separate queries for items.
                <br/><br/><strong>Fixes:</strong>
                <br/>• <strong>JOIN FETCH</strong> — load association in a single query in JPQL.
                <br/>• <strong>@EntityGraph</strong> — declarative fetch plan without modifying the query.
                <br/>• <strong>Batch fetching</strong> — <code>@BatchSize(size=25)</code> loads 25 associations per query instead of 1 (reduces N+1 to N/25+1).
                <br/>• <strong>DTO projection</strong> — select only required columns with a constructor expression; no lazy proxy involved.
                <br/><br/>Detect it: enable SQL logging (<code>spring.jpa.show-sql=true</code>) or use <code>p6spy</code> / <code>datasource-proxy</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ N+1 — 1 query for orders + N queries for items
List&lt;Order&gt; orders = orderRepo.findAll();
orders.forEach(o -&gt; o.getItems().size()); // each triggers a query

// ✅ Fix — single query with JOIN FETCH
@Query("SELECT o FROM Order o JOIN FETCH o.items")
List&lt;Order&gt; findAllWithItems();

// ✅ Fix — @EntityGraph
@EntityGraph(attributePaths = {"items"})
List&lt;Order&gt; findAll();</code></pre>
              </div>`},{q:"How do you design a REST API? What are the key principles?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> REST design principles are tested in senior developer and architect interviews.<br/><br/>
                <strong>Interview Answer:</strong> Key REST design principles:
                <br/>• <strong>Resource-based URLs</strong> — nouns, not verbs. <code>/orders/123</code> not <code>/getOrder?id=123</code>.
                <br/>• <strong>HTTP methods for operations</strong> — GET (read), POST (create), PUT/PATCH (update), DELETE (remove).
                <br/>• <strong>HTTP status codes</strong> — 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Internal Error.
                <br/>• <strong>Stateless</strong> — each request contains all the info needed; no server-side session.
                <br/>• <strong>Consistent error format</strong> — always return structured JSON: <code>{"error":"RESOURCE_NOT_FOUND","message":"..."}</code>.
                <br/>• <strong>Versioning</strong> — <code>/api/v1/users</code> in the path or <code>Accept: application/vnd.myapi.v1+json</code> header.
                <br/>• <strong>Pagination</strong> — never return unbounded lists. Use <code>?page=0&amp;size=20</code>.
                <br/>• <strong>HATEOAS</strong> (optional) — include links to related resources in responses.
              </p>`},{q:"How do you version APIs without breaking existing clients?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Explanation:</strong> API versioning is essential for evolving a public or microservice API while maintaining backward compatibility.<br/><br/>
                <strong>Interview Answer:</strong> Three common strategies:
                <br/>1. <strong>URL path versioning</strong> — <code>/api/v1/users</code>, <code>/api/v2/users</code>. Most visible and commonly used. Easy to document, test, and route.
                <br/>2. <strong>Header versioning</strong> — client sends <code>Accept: application/vnd.company.api-v2+json</code>. Clean URLs but less discoverable.
                <br/>3. <strong>Query param versioning</strong> — <code>/api/users?version=2</code>. Simple but not REST-idiomatic.
                <br/><br/><strong>Best practices:</strong>
                <br/>• Maintain v1 until clients migrate; deprecate with a sunset date in response headers.
                <br/>• Never make breaking changes within a version (removing fields, changing types).
                <br/>• Additive changes (new optional fields) are non-breaking.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestController
@RequestMapping("/api/v1/users")
class UserV1Controller {
    @GetMapping("/{id}")
    UserV1Dto getUser(@PathVariable Long id) { ... }
}

@RestController
@RequestMapping("/api/v2/users")
class UserV2Controller {
    @GetMapping("/{id}")
    UserV2Dto getUser(@PathVariable Long id) { ... }  // enriched response
}</code></pre>
              </div>`}]},{id:"day11",day:11,title:"React Fundamentals",topics:["What is React","JSX","Virtual DOM","Components","Props & State","useState","Keys","Controlled vs Uncontrolled","Side Effects","Prop Drilling","Error Boundaries"],questions:[{q:"What is React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React is an open-source JavaScript <strong>library</strong> (not a framework) developed by Meta (Facebook) for building <strong>fast, interactive user interfaces</strong>. It is based on a <strong>component-based architecture</strong> — the UI is split into small, reusable, self-contained pieces called components. React efficiently updates the browser DOM using a <strong>Virtual DOM</strong> diffing algorithm, re-rendering only the parts of the UI that actually changed.
                <br/><br/>Key characteristics:
                <br/>• <strong>Declarative</strong> — you describe <em>what</em> the UI should look like for a given state; React handles the DOM updates.
                <br/>• <strong>Component-based</strong> — components manage their own state and compose into complex UIs.
                <br/>• <strong>Learn once, write anywhere</strong> — React powers web apps, mobile apps (React Native), and server rendering (Next.js).
              </p>`},{q:"What are the advantages of using React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Virtual DOM</strong> — only changed parts of the real DOM are updated, making rendering fast.
                <br/>• <strong>Component reusability</strong> — build once, use everywhere; promotes DRY code.
                <br/>• <strong>Unidirectional data flow</strong> — data flows from parent to child, making state predictable and easier to debug.
                <br/>• <strong>Rich ecosystem</strong> — React Router (navigation), Redux/Zustand (state), React Query (data fetching), Storybook (UI dev), etc.
                <br/>• <strong>Hooks</strong> — functional components with state and side-effects, reducing boilerplate vs class components.
                <br/>• <strong>JSX</strong> — JavaScript + HTML in one file; more intuitive and type-safe with TypeScript.
                <br/>• <strong>Strong community &amp; Meta backing</strong> — large talent pool, extensive documentation, long-term support.
                <br/>• <strong>React Native</strong> — share business logic across web and mobile.
              </p>`},{q:"What are the limitations of React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Only the View layer</strong> — React handles UI only. You need additional libraries for routing (React Router), state management (Redux), HTTP calls (Axios), etc. This increases decision fatigue.
                <br/>• <strong>JSX learning curve</strong> — mixing HTML in JavaScript feels unusual to beginners.
                <br/>• <strong>Fast-moving ecosystem</strong> — frequent updates (Hooks replaced class components; RSC is now evolving); staying current requires continuous learning.
                <br/>• <strong>Poor SEO out-of-the-box</strong> — client-side rendering means search crawlers see an empty HTML shell. Requires SSR (Next.js) for SEO.
                <br/>• <strong>Boilerplate</strong> — setting up a production React project (Webpack, Babel, ESLint, testing, styling) requires considerable configuration (though Vite and CRA reduce this).
                <br/>• <strong>Re-render performance</strong> — large component trees can have unnecessary re-renders if not managed carefully with <code>memo</code>, <code>useMemo</code>, <code>useCallback</code>.
              </p>`},{q:"What is JSX?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> JSX (JavaScript XML) is a <strong>syntax extension</strong> for JavaScript that lets you write HTML-like markup directly inside JavaScript. It is <em>not</em> valid JavaScript — Babel (or the TypeScript compiler) transpiles it to <code>React.createElement()</code> calls.
                <br/><br/>Key rules:
                <br/>• Must return a <strong>single root element</strong> (wrap in <code>&lt;div&gt;</code> or <code>&lt;&gt;&lt;/&gt;</code> Fragment).
                <br/>• All tags must be <strong>closed</strong> (<code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>).
                <br/>• Use <code>className</code> instead of <code>class</code>, and <code>htmlFor</code> instead of <code>for</code> (reserved JS words).
                <br/>• Embed JavaScript expressions in <code>{}</code> curly braces.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// JSX
const el = &lt;h1 className="title"&gt;Hello, {name}!&lt;/h1&gt;;

// Compiled to
const el = React.createElement("h1", { className: "title" }, "Hello, " + name + "!");</code></pre>
              </div>`},{q:"What is the Virtual DOM? How does React use it to render the UI?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Virtual DOM (VDOM)</strong> is a lightweight, in-memory JavaScript representation of the real browser DOM tree. React keeps a copy of the VDOM. When state/props change, React:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>1. Re-renders → Creates a NEW Virtual DOM tree
2. Diff       → Compares new VDOM vs previous VDOM (reconciliation / diffing algorithm)
3. Patch      → Calculates minimal set of real DOM operations needed
4. Commit     → Applies only those changes to the real browser DOM (batched)</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Why this is fast:</strong> Real DOM operations (layout, paint, reflow) are expensive. By computing differences in cheap JavaScript objects first and batching updates, React minimises costly real DOM mutations.
                <br/><br/><strong>Reconciliation keys:</strong> React uses the element <code>type</code> and <code>key</code> prop to decide whether to reuse, update, or recreate DOM nodes.
              </p>`},{q:"What are the differences between functional and class components?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              Functional Component        Class Component
-----------------    --------------------------  --------------------------------
Syntax               JavaScript function          ES6 class extends React.Component
State                useState(), useReducer()     this.state / this.setState()
Lifecycle            useEffect() hook             componentDidMount, componentDidUpdate, etc.
this keyword         Not used                     Required (often causes bugs)
Boilerplate          Minimal                      Verbose (constructor, bind, render())
Performance          Slightly lighter             Slightly heavier
Hooks support        Yes (all hooks)              No (cannot use hooks)
Modern React         ✅ Preferred                  ❌ Legacy (still supported)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Functional (modern)
const Greeting = ({ name }) =&gt; &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;

// Class (legacy)
class Greeting extends React.Component {
  render() { return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;; }
}</code></pre>
              </div>`},{q:"What are props in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Props</strong> (short for properties) are <strong>read-only inputs</strong> passed from a parent component to a child component. They are the primary mechanism for component communication in React.
                <br/><br/>Key characteristics:
                <br/>• <strong>Immutable</strong> — a component must never modify its own props (<em>"Props flow down, events flow up"</em>).
                <br/>• <strong>Any type</strong> — props can be strings, numbers, objects, arrays, functions, or even JSX.
                <br/>• <strong>Default props</strong> — <code>defaultProps</code> or default parameter values provide fallbacks.
                <br/>• <strong>PropTypes</strong> — runtime type-checking (or TypeScript interfaces for compile-time).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Parent passes props
&lt;UserCard name="Alice" age={30} onDelete={handleDelete} /&gt;

// Child receives and uses props (destructured)
const UserCard = ({ name, age, onDelete }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;button onClick={onDelete}&gt;Delete&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>
              </div>`},{q:"What is <code>useState()</code> in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useState</code> is a React Hook that lets you add <strong>reactive state</strong> to a functional component. When the state value changes, React re-renders the component with the new value.
                <br/><br/><code>const [state, setState] = useState(initialValue)</code>
                <br/>• <code>state</code> — the current value.
                <br/>• <code>setState</code> — function to update the value (triggers re-render).
                <br/>• <code>initialValue</code> — the starting value (set only on first render; can be a lazy initialiser function for expensive computations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;+&lt;/button&gt;
      // ↑ functional update form — safe when new state depends on old state
    &lt;/div&gt;
  );
}</code></pre>
              </div>`},{q:"What are keys in React and why are they important?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>key</code> is a special prop that helps React identify which items in a <strong>list</strong> have changed, been added, or removed. React uses keys during reconciliation to efficiently update only the items that changed rather than re-rendering the entire list.
                <br/><br/><strong>Rules:</strong>
                <br/>• Must be <strong>unique among siblings</strong> (not globally).
                <br/>• Should be <strong>stable</strong> — use a unique ID from data, not array index (index causes bugs when list order changes).
                <br/>• Keys are not passed as props to the component — they are internal React identifiers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Good — stable unique ID
{users.map(user =&gt; &lt;UserCard key={user.id} user={user} /&gt;)}

// ❌ Bad — index as key (breaks on reorder/delete)
{users.map((user, i) =&gt; &lt;UserCard key={i} user={user} /&gt;)}</code></pre>
              </div>`},{q:"Explain React state and props together.",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature      Props                            State
---------    -------------------------------  ----------------------------
Owner        Set by PARENT                    Managed by the component ITSELF
Mutability   Immutable (read-only in child)   Mutable (via setState/useState)
Purpose      Pass data & callbacks down       Track data that changes over time
When used    Configuration / communication    User interactions, API responses
Re-render    Parent re-renders → child gets   setState() → triggers component re-render
             new props automatically</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">Think of props as function arguments and state as variables declared inside the function — both together describe the component's output at any point in time.</p>`},{q:"What are the differences between controlled and uncontrolled components?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Controlled Component</strong> — the form element's value is controlled by React state. Every change is handled by an <code>onChange</code> handler that updates state. The input is always in sync with the component's state — React is the "single source of truth."
                <br/>• <strong>Uncontrolled Component</strong> — the form element stores its own value in the real DOM. You access the value using a <code>ref</code> when needed (e.g., on form submit). Less React-idiomatic.
                <br/><br/>Controlled is preferred for validation, conditional disabling, and format-as-you-type features.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Controlled — React drives the value
const [name, setName] = useState('');
&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;

// Uncontrolled — DOM drives the value
const inputRef = useRef(null);
&lt;input ref={inputRef} /&gt;
// Read on submit: inputRef.current.value</code></pre>
              </div>`},{q:"Explain about types of side effects in a React component.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>side effect</strong> is any operation that reaches outside the component's pure render function — interacting with the outside world.
                <br/><br/><strong>Side effects that need cleanup</strong> (subscriptions, timers, event listeners):
                <br/>• WebSocket/event subscriptions — must unsubscribe on unmount to prevent memory leaks.
                <br/>• <code>setInterval</code> / <code>setTimeout</code> — must clear on unmount.
                <br/>• Manual DOM manipulation.
                <br/><br/><strong>Side effects that do NOT need cleanup:</strong>
                <br/>• API/data fetching (<code>fetch</code>, Axios).
                <br/>• Logging / analytics.
                <br/>• Updating the document title.
                <br/><br/>All side effects in functional components live inside <code>useEffect</code>. Return a cleanup function for effects that need it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>useEffect(() =&gt; {
  const id = setInterval(fetchData, 5000);  // side effect with cleanup
  return () =&gt; clearInterval(id);           // cleanup on unmount/re-run
}, []);                                      // empty deps = run once after mount</code></pre>
              </div>`},{q:"What is prop drilling in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Prop drilling</strong> is the pattern where you pass props through multiple layers of intermediate components that don't need the data themselves — just to get it to a deeply nested child component.
                <br/><br/><strong>Problems:</strong> Intermediate components become coupled to data they don't use; changes to the data shape require updating multiple files.
                <br/><br/><strong>Solutions:</strong>
                <br/>• <strong>React Context API</strong> — broadcast data to any component in the tree without passing props.
                <br/>• <strong>Component composition</strong> — pass components as children instead of raw data.
                <br/>• <strong>State management libraries</strong> (Redux, Zustand, Jotai) — global stores accessible from anywhere.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Prop drilling — B and C don't need "user" but must pass it
App (user) → ComponentA (user) → ComponentB (user) → ComponentC uses user

// ✅ Context — ComponentC accesses user directly
&lt;UserContext.Provider value={user}&gt;
  &lt;ComponentA /&gt;  ← no user prop needed
&lt;/UserContext.Provider&gt;</code></pre>
              </div>`},{q:"What are error boundaries in React?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>error boundary</strong> is a React class component that catches JavaScript errors anywhere in its child component tree during rendering, in lifecycle methods, or in constructors — and displays a fallback UI instead of crashing the entire application.
                <br/><br/><strong>Key points:</strong>
                <br/>• Implemented with <code>static getDerivedStateFromError()</code> (update state to show fallback) and <code>componentDidCatch()</code> (log the error).
                <br/>• Only available as <strong>class components</strong> (no hook equivalent yet, though React 19 may change this).
                <br/>• Do <strong>NOT</strong> catch errors in: event handlers (use try/catch), async code, SSR, or errors thrown in the boundary itself.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logToMonitoring(error, info);
  }

  render() {
    return this.state.hasError
      ? &lt;h2&gt;Something went wrong.&lt;/h2&gt;
      : this.props.children;
  }
}

// Usage
&lt;ErrorBoundary&gt;&lt;UserDashboard /&gt;&lt;/ErrorBoundary&gt;</code></pre>
              </div>`},{q:"What is React Hooks?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React Hooks are <strong>functions</strong> (introduced in React 16.8) that let you use React features — like state and lifecycle effects — inside <strong>functional components</strong>, without writing class components.
                <br/><br/><strong>Core built-in Hooks:</strong>
                <br/>• <code>useState</code> — add state.
                <br/>• <code>useEffect</code> — side effects (data fetch, subscriptions, DOM updates).
                <br/>• <code>useContext</code> — consume context values.
                <br/>• <code>useRef</code> — mutable refs, DOM access.
                <br/>• <code>useMemo</code> — memoize expensive computations.
                <br/>• <code>useCallback</code> — memoize functions.
                <br/>• <code>useReducer</code> — complex state logic.
                <br/><br/><strong>Why Hooks were introduced:</strong> Class components had issues with complex lifecycle methods mixing unrelated logic, difficulty in reusing stateful logic between components, and the confusing <code>this</code> keyword.
              </p>`}]},{id:"day12",day:12,title:"React Hooks",topics:["Rules of Hooks","useEffect","useRef","Custom Hooks","Types of Hooks","Hooks vs Classes","useContext","useState vs useReducer"],questions:[{q:"What are the rules that must be followed while using React Hooks?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The two official Rules of Hooks:
                <br/><br/><strong>1. Only call Hooks at the top level</strong> — never call Hooks inside loops, conditions, or nested functions. React relies on the <em>order</em> of Hook calls being consistent on every render to associate Hook state with the correct variable. Breaking this causes state mismatches.
                <br/><br/><strong>2. Only call Hooks from React functions</strong> — call Hooks from functional components or from custom Hooks. Do not call them from regular JavaScript functions, class components, or event handlers outside components.
                <br/><br/>The <code>eslint-plugin-react-hooks</code> package enforces these rules automatically at build time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ WRONG — Hook inside condition
if (isLoggedIn) {
  const [user, setUser] = useState(null);  // violates rule 1
}

// ✅ CORRECT — always at top level
const [user, setUser] = useState(null);
if (isLoggedIn) { /* use user */ }</code></pre>
              </div>`},{q:"What is the use of <code>useEffect</code> React Hook?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useEffect</code> lets you perform <strong>side effects</strong> in functional components — replacing <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> lifecycle methods from class components.
                <br/><br/><strong>Signature:</strong> <code>useEffect(effectFn, dependencyArray)</code>
                <br/><br/><strong>Dependency array behaviour:</strong>
                <br/>• <code>[]</code> — runs only once after initial mount (equivalent to <code>componentDidMount</code>).
                <br/>• <code>[a, b]</code> — runs after mount + whenever <code>a</code> or <code>b</code> changes.
                <br/>• No array — runs after every render (⚠️ usually a performance issue).
                <br/><br/><strong>Cleanup:</strong> Return a function to clean up before the next effect run or before unmount.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>useEffect(() =&gt; {
  document.title = \`User: \${userId}\`;        // side effect

  const sub = subscribeToUser(userId);       // cleanup needed
  return () =&gt; sub.unsubscribe();            // cleanup function

}, [userId]);   // re-run whenever userId changes</code></pre>
              </div>`},{q:"Why do React Hooks make use of refs?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Refs (<code>useRef</code>) serve two main purposes in React:
                <br/><br/><strong>1. Accessing DOM elements directly</strong> — attach to a JSX element via the <code>ref</code> attribute to call imperative DOM APIs (focus, scroll, measure dimensions) without triggering re-renders.
                <br/><br/><strong>2. Persisting a mutable value across renders without causing re-renders</strong> — <code>ref.current</code> is a plain object that survives re-renders but changing it does <em>not</em> trigger a re-render (unlike <code>useState</code>). Useful for storing timer IDs, previous values, or event handler references.
                <br/><br/>This is why Hooks use refs: to give functional components an equivalent of instance variables from class components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. DOM access
const inputRef = useRef(null);
&lt;input ref={inputRef} /&gt;
const focusInput = () =&gt; inputRef.current.focus();

// 2. Mutable value (timer ID) without re-render
const timerId = useRef(null);
useEffect(() =&gt; {
  timerId.current = setInterval(tick, 1000);
  return () =&gt; clearInterval(timerId.current);
}, []);</code></pre>
              </div>`},{q:"What are Custom Hooks?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Custom Hook</strong> is a JavaScript function whose name starts with <code>use</code> and that calls other Hooks. Custom Hooks let you extract and <strong>reuse stateful logic</strong> across multiple components without duplicating code and without component hierarchy changes (unlike render props or HOCs).
                <br/><br/>Custom Hooks do <em>not</em> share state between components — each component that calls the hook gets its own isolated state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Custom Hook — reusable fetch logic
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    fetch(url)
      .then(r =&gt; r.json())
      .then(setData)
      .catch(setError)
      .finally(() =&gt; setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage in any component
const { data, loading, error } = useFetch('/api/users');</code></pre>
              </div>`},{q:"What are the types of built-in Hooks in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Category          Hooks
--------------    --------------------------------------------------
State             useState, useReducer
Context           useContext
Ref               useRef, useImperativeHandle
Effect            useEffect, useLayoutEffect, useInsertionEffect
Performance       useMemo, useCallback
Transition        useTransition, useDeferredValue (React 18)
ID                useId (React 18)
Debug             useDebugValue
Sync              useSyncExternalStore (React 18)</code></pre>
              </div>`},{q:"Differentiate React Hooks vs Classes.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect                Hooks (Functional)           Classes
-------------------   ---------------------------  ---------------------------------
State                 useState / useReducer         this.state, this.setState()
Lifecycle             useEffect combinations        componentDidMount/Update/WillUnmount
Code reuse            Custom Hooks                  HOC or Render Props (complex)
this keyword          Not needed                    Required everywhere (binding bugs)
Boilerplate           Minimal                       Verbose constructor, bind, render
Logic splitting       Multiple useEffect() calls    Mixed in single lifecycle methods
Error boundaries      ❌ Not possible               ✅ getDerivedStateFromError
Testing               Simpler (pure functions)      Slightly more complex
Community trend       ✅ Modern standard             ❌ Legacy (no removal planned)</code></pre>
              </div>`},{q:"What is <code>useContext</code> and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useContext</code> lets a functional component <strong>read and subscribe to</strong> a React Context value without prop drilling. When the context value changes, the component re-renders automatically.
                <br/><br/><strong>Three steps:</strong> Create context → Provide value → Consume with <code>useContext</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Create
const ThemeContext = React.createContext('light');

// 2. Provide (high in the tree)
&lt;ThemeContext.Provider value="dark"&gt;
  &lt;App /&gt;
&lt;/ThemeContext.Provider&gt;

// 3. Consume (anywhere in the tree)
function Button() {
  const theme = useContext(ThemeContext);  // 'dark'
  return &lt;button className={theme}&gt;Click&lt;/button&gt;;
}</code></pre>
              </div>`},{q:"How does the performance of using Hooks differ compared to classes?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In general, Hooks and class components have comparable performance. The differences:
                <br/><br/>• <strong>Bundle size</strong> — functional components with Hooks tend to produce smaller bundle sizes since class syntax requires Babel class transforms.
                <br/>• <strong>Memory</strong> — class instances carry method bindings and instance variables. Functional components are plain function calls — slightly lighter.
                <br/>• <strong>useCallback / useMemo</strong> — Hooks provide fine-grained memoisation that was harder to achieve cleanly in class components.
                <br/>• <strong>Concurrent Mode compatibility</strong> — Hooks are designed for React's Concurrent Mode (React 18) and work better with features like <code>useTransition</code> and <code>useDeferredValue</code>.
                <br/><br/><strong>Key fact:</strong> The React team has stated that the performance difference between Hooks and classes is negligible in most real-world applications. The advantages of Hooks are primarily in developer experience, code organisation, and reusability.
              </p>`},{q:"Do Hooks cover all the functionalities provided by classes?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Hooks cover <em>almost</em> all class component functionality — but with one notable exception:
                <br/><br/><strong>What Hooks cover:</strong>
                <br/>• State — <code>useState</code>, <code>useReducer</code>.
                <br/>• Lifecycle — <code>useEffect</code> covers <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>.
                <br/>• Context — <code>useContext</code>.
                <br/>• Refs, memoisation, etc.
                <br/><br/><strong>What Hooks do NOT cover:</strong>
                <br/>• <code>getSnapshotBeforeUpdate</code> — no Hook equivalent.
                <br/>• <strong>Error Boundaries</strong> (<code>getDerivedStateFromError</code> / <code>componentDidCatch</code>) — still require class components. The community uses libraries like <code>react-error-boundary</code> as a wrapper.
              </p>`},{q:"Can React Hooks replace Redux?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> For <strong>simple to medium</strong> state management, yes — <code>useContext + useReducer</code> can replace Redux. For <strong>complex, large-scale applications</strong>, Redux (or modern alternatives like Zustand, Jotai) still has advantages.
                <br/><br/><strong>When useContext + useReducer is enough:</strong>
                <br/>• Small/medium apps with limited global state.
                <br/>• State shared between a few components.
                <br/><br/><strong>Where Redux still wins:</strong>
                <br/>• <strong>Performance</strong> — Context re-renders all consumers on every update; Redux uses selectors to re-render only affected components.
                <br/>• <strong>DevTools</strong> — Redux DevTools (time-travel debugging, action log) are far more powerful.
                <br/>• <strong>Middleware</strong> — Redux Thunk / Saga for complex async flows.
                <br/>• <strong>Large apps</strong> with many independent state slices.
                <br/><br/><strong>Modern alternative:</strong> <strong>Zustand</strong> or <strong>Jotai</strong> — lightweight libraries that are simpler than Redux but more performant than Context.
              </p>`},{q:"Does React Hook work with static typing (TypeScript)?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Yes — React Hooks work excellently with TypeScript. All built-in Hooks have full TypeScript generic type support.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// useState with type
const [user, setUser] = useState&lt;User | null&gt;(null);

// useRef with type
const inputRef = useRef&lt;HTMLInputElement&gt;(null);

// useReducer with typed action
type Action = { type: 'increment' } | { type: 'reset' };
const [count, dispatch] = useReducer((state: number, action: Action) =&gt; {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'reset':     return 0;
  }
}, 0);

// Custom Hook with types
function useFetch&lt;T&gt;(url: string): { data: T | null; loading: boolean } {
  const [data, setData] = useState&lt;T | null&gt;(null);
  // ...
  return { data, loading };
}</code></pre>
              </div>`},{q:"Explain how to create a simple React Hooks example program.",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A simple todo list demonstrates <code>useState</code>, <code>useEffect</code>, and event handling — the most common hooks in practice.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput]  = useState('');

  // useEffect — persist to localStorage
  useEffect(() =&gt; {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () =&gt; {
    if (!input.trim()) return;
    setTodos(prev =&gt; [...prev, { id: Date.now(), text: input }]);
    setInput('');
  };

  const removeTodo = (id) =&gt;
    setTodos(prev =&gt; prev.filter(t =&gt; t.id !== id));

  return (
    &lt;div&gt;
      &lt;input value={input} onChange={e =&gt; setInput(e.target.value)} /&gt;
      &lt;button onClick={addTodo}&gt;Add&lt;/button&gt;
      &lt;ul&gt;
        {todos.map(t =&gt;
          &lt;li key={t.id}&gt;{t.text} &lt;button onClick={() =&gt; removeTodo(t.id)}&gt;✕&lt;/button&gt;&lt;/li&gt;
        )}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`},{q:"What is the difference between <code>useState</code> and <code>useReducer</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature            useState                      useReducer
--------------     --------------------------    ---------------------------------
Complexity         Simple values                 Complex state objects / logic
Update style       Setter function               Dispatch action (like Redux)
Logic location     Inline in handlers            Centralised in reducer function
Testing            Harder (logic in component)   Easier (pure reducer function)
When to prefer     Simple flags, strings, nums   Forms, multi-step wizards, carts</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// useReducer — cart with add/remove/clear actions
const cartReducer = (state, action) =&gt; {
  switch (action.type) {
    case 'ADD':    return [...state, action.item];
    case 'REMOVE': return state.filter(i =&gt; i.id !== action.id);
    case 'CLEAR':  return [];
    default: return state;
  }
};
const [cart, dispatch] = useReducer(cartReducer, []);
dispatch({ type: 'ADD', item: product });</code></pre>
              </div>`},{q:"What is <code>useRef</code> and what is it used for?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useRef</code> returns a mutable <code>{ current: value }</code> object that persists across renders. Changing <code>ref.current</code> does NOT trigger a re-render — making it ideal for two use cases:
                <br/><br/>1. <strong>Accessing DOM nodes</strong> — attach via <code>ref</code> attribute on JSX element.
                <br/>2. <strong>Storing mutable values</strong> — previous state, timer IDs, or any value you want to track without causing re-renders.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. DOM access — auto-focus on mount
function SearchBar() {
  const ref = useRef(null);
  useEffect(() =&gt; ref.current.focus(), []);
  return &lt;input ref={ref} placeholder="Search..." /&gt;;
}

// 2. Track render count without causing re-render
function RenderCount() {
  const renders = useRef(0);
  renders.current++;
  return &lt;p&gt;Renders: {renders.current}&lt;/p&gt;;
}</code></pre>
              </div>`},{q:"What are React Portals and when would you use them?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Portal</strong> lets you render a React component's DOM output <strong>outside</strong> its parent DOM hierarchy — into any DOM node you specify — while keeping it in the React component tree (so events bubble up normally through React's tree, not the DOM tree).
                <br/><br/><strong>Use cases:</strong>
                <br/>• <strong>Modals / dialogs</strong> — rendered at document body level to avoid CSS overflow/z-index conflicts with parent containers.
                <br/>• <strong>Tooltips / popovers</strong> — need to escape parent overflow:hidden.
                <br/>• <strong>Toast notifications</strong>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    &lt;div className="modal-overlay"&gt;{children}&lt;/div&gt;,
    document.getElementById('modal-root')  // outside App's DOM tree
  );
}</code></pre>
              </div>`}]},{id:"day13",day:13,title:"Advanced React Hooks & Patterns",topics:["useMemo","useCallback","React.memo","useLayoutEffect","forwardRef","Context API","HOC","React.Fragment","Suspense & Lazy","Reconciliation"],questions:[{q:"What is <code>useMemo</code> and when should you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useMemo</code> memoizes the <strong>result</strong> of an expensive calculation — it only recomputes the value when one of its dependencies changes.
                <br/><br/><code>const result = useMemo(() =&gt; expensiveCalc(a, b), [a, b]);</code>
                <br/><br/><strong>When to use:</strong>
                <br/>• Filtering/sorting large data arrays.
                <br/>• Complex derived computations.
                <br/>• Referential stability for objects passed as props to <code>React.memo</code> children.
                <br/><br/><strong>When NOT to use:</strong> Don't wrap every value — memoization has overhead (memory + comparison). Only use when profiling shows a genuine performance problem.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const filteredUsers = useMemo(
  () =&gt; users.filter(u =&gt; u.name.includes(searchTerm)),
  [users, searchTerm]   // only recompute when users or searchTerm changes
);</code></pre>
              </div>`},{q:"What is <code>useCallback</code> and when should you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useCallback</code> memoizes a <strong>function definition</strong> — it returns the same function reference between renders as long as dependencies haven't changed.
                <br/><br/><code>const fn = useCallback(() =&gt; doSomething(a), [a]);</code>
                <br/><br/><strong>When to use:</strong>
                <br/>• Passing callbacks to child components wrapped in <code>React.memo</code> — without <code>useCallback</code>, a new function reference is created every render, causing the memo'd child to re-render unnecessarily.
                <br/>• Callbacks listed in <code>useEffect</code> dependencies (prevents infinite loops).
                <br/><br/><strong>Analogy:</strong> <code>useMemo</code> = memoize the return <em>value</em>; <code>useCallback</code> = memoize the <em>function itself</em>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const handleDelete = useCallback(
  (id) =&gt; dispatch({ type: 'REMOVE', id }),
  [dispatch]   // stable reference — memo'd child won't re-render
);
&lt;MemoizedList onDelete={handleDelete} /&gt;</code></pre>
              </div>`},{q:"What is <code>React.memo</code>? How is it different from <code>useMemo</code> and <code>useCallback</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>API              What it memoizes         When to use
-----------      ----------------------   -------------------------------------------
React.memo       A COMPONENT              Prevent child re-render when props unchanged
useMemo          A COMPUTED VALUE         Cache expensive calculation results
useCallback      A FUNCTION REFERENCE     Stable callback for memo'd child or effect deps</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// React.memo — wraps a component; skips re-render if props are shallowly equal
const ExpensiveChart = React.memo(({ data }) =&gt; {
  return &lt;canvas data={data} /&gt;;
});

// Without React.memo — this child re-renders every time the parent re-renders
// even if "data" hasn't changed</code></pre>
              </div>`},{q:"What is the difference between <code>useEffect</code> and <code>useLayoutEffect</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Both accept the same arguments, but they fire at different phases of the render cycle.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Hook               When it fires                     Blocks paint?
--------------     ------------------------------    --------------
useEffect          AFTER paint (async)               No  ← default, preferred
useLayoutEffect    AFTER DOM mutation, BEFORE paint  Yes ← use only when needed</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>When to use <code>useLayoutEffect</code>:</strong> When you need to <strong>read DOM measurements</strong> (dimensions, scroll position) and synchronously re-render before the user sees the intermediate state — otherwise there would be a visible flicker. Examples: tooltips positioned relative to an element, animations.
                <br/><br/><strong>Caution:</strong> <code>useLayoutEffect</code> blocks the browser paint and can hurt performance if the effect is slow. It also throws a warning in SSR.
              </p>`},{q:"What is <code>forwardRef</code> and when do you need it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> By default, a <code>ref</code> attached to a custom React component does NOT work — React doesn't forward it to the underlying DOM node. <code>React.forwardRef</code> is used to <strong>pass a ref through a component</strong> to a DOM element or another component inside it.
                <br/><br/><strong>Use cases:</strong>
                <br/>• Reusable input/button components where the parent needs to focus or read the DOM node.
                <br/>• Component libraries (Material UI, Radix UI) — all expose ref-forwarded components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ forwardRef — lets parent access internal DOM input
const FancyInput = React.forwardRef((props, ref) =&gt; (
  &lt;input className="fancy" ref={ref} {...props} /&gt;
));

// Parent uses it
const inputRef = useRef(null);
&lt;FancyInput ref={inputRef} /&gt;;
// Now: inputRef.current is the &lt;input&gt; DOM node
inputRef.current.focus();</code></pre>
              </div>`},{q:"What is the Context API? When should you use it instead of prop drilling?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Context API</strong> provides a way to share values (data or functions) across the component tree <strong>without passing props at every level</strong>. It consists of:
                <br/>• <code>React.createContext(defaultValue)</code> — creates the context object.
                <br/>• <code>&lt;Context.Provider value={...}&gt;</code> — wraps the subtree; all consumers below receive the value.
                <br/>• <code>useContext(Context)</code> — consumes the value in any descendant.
                <br/><br/><strong>When to use Context:</strong>
                <br/>• Truly <strong>global</strong> data: current user, authentication status, theme, language/locale, feature flags.
                <br/>• When a value is needed by many components at different nesting levels.
                <br/><br/><strong>When NOT to use Context:</strong>
                <br/>• Frequently changing data (every consumer re-renders on every change). Use a state management library for high-frequency updates.
              </p>`},{q:"What are Higher Order Components (HOCs)?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Higher Order Component (HOC)</strong> is a <strong>function that takes a component and returns a new enhanced component</strong>. It's a pattern for reusing component logic — wrapping shared behaviour (auth check, logging, data fetching) around any component without modifying it.
                <br/><br/><strong>HOCs are now largely replaced by Custom Hooks</strong> in modern React, but you'll encounter HOCs in older codebases and some libraries (React Redux's <code>connect()</code>, React Router's <code>withRouter()</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// HOC — adds authentication guard to any component
function withAuth(WrappedComponent) {
  return function AuthGuard(props) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) return &lt;Navigate to="/login" /&gt;;
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

const ProtectedDashboard = withAuth(Dashboard);</code></pre>
              </div>`},{q:"What is <code>React.Fragment</code> and why is it useful?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>React.Fragment</code> (short syntax: <code>&lt;&gt;&lt;/&gt;</code>) lets you <strong>group multiple JSX elements without adding an extra DOM node</strong>. React requires components to return a single root element — Fragment satisfies this without polluting the DOM with wrapper <code>&lt;div&gt;</code>s.
                <br/><br/><strong>Use <code>&lt;React.Fragment key={...}&gt;</code></strong> when you need to add a <code>key</code> prop (e.g., in a list). The short <code>&lt;&gt;&lt;/&gt;</code> syntax doesn't accept attributes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Extra div pollutes DOM / breaks flex/grid layouts
return &lt;div&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/div&gt;;

// ✅ Fragment — no extra DOM node
return &lt;&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/&gt;;

// Fragment with key (in list)
return rows.map(row =&gt;
  &lt;React.Fragment key={row.id}&gt;
    &lt;dt&gt;{row.label}&lt;/dt&gt;&lt;dd&gt;{row.value}&lt;/dd&gt;
  &lt;/React.Fragment&gt;
);</code></pre>
              </div>`},{q:"What are React Suspense and <code>React.lazy</code>? How do they enable code splitting?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>React.lazy()</code> — lazily load a component's module (it's imported only when the component is first rendered). The import is a dynamic <code>import()</code> that Webpack/Vite splits into a separate code chunk.
                <br/>• <code>&lt;Suspense fallback={...}&gt;</code> — wraps lazy components; shows the fallback (e.g., a spinner) while the lazy component's code is being downloaded.
                <br/><br/><strong>Benefit (Code Splitting):</strong> Instead of sending all JS in one large bundle, the app sends only what's needed for the initial page. Other components load on-demand, reducing initial load time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Lazy load — Dashboard.js is NOT included in the initial bundle
const Dashboard = React.lazy(() =&gt; import('./Dashboard'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Dashboard /&gt;
    &lt;/Suspense&gt;
  );
}
// When &lt;Dashboard&gt; first renders, the browser fetches Dashboard.js separately</code></pre>
              </div>`},{q:"What is reconciliation? How does React's diffing algorithm work?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Reconciliation</strong> is the process React uses to compute the minimum DOM operations needed when state/props change. React creates a new Virtual DOM tree and <strong>diffs</strong> it against the previous one.
                <br/><br/><strong>Diffing heuristics (O(n) instead of O(n³)):</strong>
                <br/>1. <strong>Different element types</strong> — if the root element type changes (e.g., <code>&lt;div&gt;</code> → <code>&lt;span&gt;</code>), tear down the entire subtree and rebuild it.
                <br/>2. <strong>Same element type</strong> — keep the DOM node; update only changed attributes/styles.
                <br/>3. <strong>Lists use keys</strong> — React uses the <code>key</code> prop to match new and old list items. Stable keys → minimal updates. Missing/index keys → incorrect updates on reorder.
                <br/><br/><strong>React Fiber</strong> (React 16+) — a rewrite of the reconciler that breaks rendering work into small units that can be interrupted, paused, and prioritized, enabling Concurrent Mode features.
              </p>`},{q:"How to create a switching component for displaying different pages?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A switching component conditionally renders one of several components based on a value — useful for tab panels, step wizards, or simple routing without a router library.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const PAGES = {
  home:    &lt;HomePage /&gt;,
  about:   &lt;AboutPage /&gt;,
  contact: &lt;ContactPage /&gt;,
};

function PageSwitcher({ page }) {
  return PAGES[page] ?? &lt;NotFound /&gt;;
}

// Usage — switch page on button click
function App() {
  const [page, setPage] = useState('home');
  return (
    &lt;&gt;
      &lt;nav&gt;
        &lt;button onClick={() =&gt; setPage('home')}&gt;Home&lt;/button&gt;
        &lt;button onClick={() =&gt; setPage('about')}&gt;About&lt;/button&gt;
      &lt;/nav&gt;
      &lt;PageSwitcher page={page} /&gt;
    &lt;/&gt;
  );
}</code></pre>
              </div>`},{q:"How to re-render the view when the browser is resized?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Listen to the <code>window resize</code> event inside a <code>useEffect</code> and store the dimensions in state. Always remove the listener on cleanup to prevent memory leaks. Extract it into a reusable custom hook.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function useWindowSize() {
  const [size, setSize] = useState({
    width:  window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() =&gt; {
    const handleResize = () =&gt;
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize); // cleanup!
  }, []);  // [] — attach listener once

  return size;
}

// Usage
const { width, height } = useWindowSize();
return &lt;p&gt;{width} x {height}&lt;/p&gt;;</code></pre>
              </div>`},{q:"How to pass data between sibling components in React?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React has unidirectional data flow — siblings can't communicate directly. The pattern is to <strong>lift the state up</strong> to the nearest common parent, which then passes data down as props.
                <br/><br/><strong>Pattern — Lift State Up:</strong>
                <br/>1. Move shared state to the common parent.
                <br/>2. Pass the state value down to the reading sibling as a prop.
                <br/>3. Pass a setter function down to the writing sibling as a callback prop.
                <br/><br/><strong>For distant siblings</strong>, use Context API, a state management library, or React Router's location state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Parent() {
  const [msg, setMsg] = useState('');
  return (
    &lt;&gt;
      &lt;SenderSibling onSend={setMsg} /&gt;    {/* writes */}
      &lt;ReceiverSibling message={msg} /&gt;    {/* reads */}
    &lt;/&gt;
  );
}</code></pre>
              </div>`},{q:"Explain conditional rendering in React.",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React doesn't have a template directive like <code>v-if</code>. Instead, conditional rendering uses regular JavaScript expressions inside JSX. Three common patterns:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. if/else (outside return)
if (loading) return &lt;Spinner /&gt;;

// 2. Ternary operator (inline)
return isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;;

// 3. Short-circuit evaluation (render or nothing)
return (
  &lt;div&gt;
    {error &amp;&amp; &lt;ErrorBanner message={error} /&gt;}
    {data &amp;&amp; &lt;DataTable rows={data} /&gt;}
  &lt;/div&gt;
);

// 4. IIFE or extracted function for complex logic
{(() =&gt; {
  if (status === 'loading') return &lt;Spinner /&gt;;
  if (status === 'error')   return &lt;Error /&gt;;
  return &lt;DataTable /&gt;;
})()}</code></pre>
              </div>`},{q:"How to perform automatic redirect after login?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> After a successful login API call, use React Router's <code>useNavigate</code> hook to programmatically redirect to the intended page. Save the original URL before redirecting to login so you can send the user back there after authentication.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Protected route — save intended URL in location state
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  if (!isLoggedIn)
    return &lt;Navigate to="/login" state={{ from: location }} replace /&gt;;
  return children;
}

// Login component — redirect back after success
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/dashboard';

  async function handleSubmit(creds) {
    await loginAPI(creds);
    navigate(from, { replace: true });  // redirect to original destination
  }
}</code></pre>
              </div>`}]},{id:"day14",day:14,title:"React Lifecycle, Performance & State Management",topics:["Component Lifecycle","Lifecycle Methods","SSR vs CSR","Strict Mode","Prevent Re-renders","Performance Optimisation","Global State","Styling","React Router"],questions:[{q:"What are the different phases of the React component lifecycle?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Every React component goes through three main lifecycle phases:
                <br/><br/>• <strong>Mounting</strong> — component is created and inserted into the DOM for the first time.
                <br/>• <strong>Updating</strong> — component re-renders due to changes in props or state.
                <br/>• <strong>Unmounting</strong> — component is removed from the DOM.
                <br/><br/><strong>In functional components with Hooks:</strong>
                <br/>• <code>useEffect(() =&gt; {...}, [])</code> → Mounting
                <br/>• <code>useEffect(() =&gt; {...}, [dep])</code> → Updating when dep changes
                <br/>• <code>useEffect(() =&gt; { return cleanup; }, [])</code> → Unmounting
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>MOUNT                    UPDATE                    UNMOUNT
-------------------      --------------------      --------------------
constructor()            getDerivedStateFromProps  componentWillUnmount
getDerivedStateFromProps shouldComponentUpdate
render()                 render()
componentDidMount        componentDidUpdate
                         getSnapshotBeforeUpdate</code></pre>
              </div>`},{q:"What are the lifecycle methods of React (class components)?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method                          Phase      Purpose
-----------------------------   --------   ------------------------------------------
constructor(props)              Mount      Initialise state, bind methods
static getDerivedStateFromProps Mount/Upd  Derive state from props (rare)
render()                        Both       Return JSX — must be pure
componentDidMount()             Mount      API calls, subscriptions, DOM setup
shouldComponentUpdate()         Update     Return false to skip re-render (optimisation)
getSnapshotBeforeUpdate()       Update     Capture scroll position before DOM update
componentDidUpdate(prev, snap)  Update     React to prop/state changes, API calls
componentWillUnmount()          Unmount    Clean up subscriptions, timers
getDerivedStateFromError()      Error      Show error UI after child error
componentDidCatch()             Error      Log the error</code></pre>
              </div>`},{q:"What is server-side rendering (SSR)? How does it differ from client-side rendering?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              CSR (Create React App)       SSR (Next.js)
-----------------    ---------------------------  ----------------------------
Initial HTML         Empty &lt;div id="root"&gt;        Fully rendered HTML
First paint          Slow (wait for JS bundle)    Fast (HTML already there)
SEO                  Poor (crawlers see empty)    Excellent (content in HTML)
TTI (interactive)    Slower                       Depends (hydration needed)
Server load          Low (static files)           Higher (render per request)
Use case             Dashboards, admin tools      Marketing, e-commerce, blogs
Frameworks           Vite, CRA                    Next.js, Remix, Gatsby</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;"><strong>Hydration:</strong> After SSR sends HTML, React attaches event listeners to the existing DOM (without re-creating it) — this process is called hydration.</p>`},{q:"Explain Strict Mode in React.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>&lt;React.StrictMode&gt;</code> is a development-only tool that activates additional checks and warnings — it has <strong>no effect in production</strong>.
                <br/><br/><strong>What it detects:</strong>
                <br/>• <strong>Unsafe lifecycle methods</strong> (<code>componentWillMount</code>, etc.).
                <br/>• <strong>Legacy string ref usage</strong>.
                <br/>• <strong>Unexpected side effects</strong> — in React 18, StrictMode double-invokes render functions and effects to expose non-idempotent side effects.
                <br/>• Deprecated <code>findDOMNode</code> usage.
                <br/>• Detects accidental use of deprecated APIs.
                <br/><br/>The double-invoke behaviour is why you might see your effects run twice in development — this is intentional. In production, effects run once as expected.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);</code></pre>
              </div>`},{q:"What are common React performance optimization techniques?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>React.memo</strong> — prevent functional component re-renders when props are unchanged.
                <br/>2. <strong>useCallback</strong> — stable function references for memo'd children.
                <br/>3. <strong>useMemo</strong> — cache expensive computed values.
                <br/>4. <strong>Code splitting (React.lazy + Suspense)</strong> — reduce initial bundle size.
                <br/>5. <strong>Virtualisation (react-window, react-virtual)</strong> — render only visible rows of large lists.
                <br/>6. <strong>Avoid anonymous functions in JSX</strong> — creates new references every render.
                <br/>7. <strong>Avoid deeply nested state updates</strong> — use shallow structures or Immer.
                <br/>8. <strong>Debounce/throttle event handlers</strong> — reduce frequency of expensive updates (search input, resize).
                <br/>9. <strong>Image optimisation</strong> — lazy load images, use next/image for auto-sizing.
                <br/>10. <strong>Production build</strong> — <code>npm run build</code> enables minification and removes dev warnings.
                <br/><br/><strong>Measure first:</strong> Use React DevTools Profiler to identify actual bottlenecks before optimizing.
              </p>`},{q:"How to prevent re-renders in React?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React re-renders a component when its state or props change. Unnecessary re-renders happen when a parent re-renders and passes new object/function references even if the data is the same. Prevention strategies:
                <br/><br/>• <strong>React.memo</strong> — memoize the component; skip re-render if props are shallowly equal.
                <br/>• <strong>useCallback</strong> — stabilise callback props passed to memo'd children.
                <br/>• <strong>useMemo</strong> — stabilise object/array props.
                <br/>• <strong>State colocation</strong> — keep state as close as possible to where it's used. Don't lift state higher than necessary.
                <br/>• <strong>Context splitting</strong> — separate frequently-changing context from rarely-changing context.
                <br/>• <strong>shouldComponentUpdate / PureComponent</strong> — for class components.
                <br/>• <strong>useReducer instead of useState</strong> — dispatching the same action doesn't cause a re-render if the reducer returns the same state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ New object reference every render — memo'd child still re-renders
&lt;MemoChild config={{ size: 'large' }} /&gt;

// ✅ Stable reference with useMemo
const config = useMemo(() =&gt; ({ size: 'large' }), []);
&lt;MemoChild config={config} /&gt;</code></pre>
              </div>`},{q:"How do you manage global state? Compare Context, Redux, and modern alternatives.",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Library          Bundle   Re-render       DevTools  Best for
-----------      ------   ------------    --------  ---------------------------------
Context API      0 KB     All consumers   Basic     Simple themes, auth (low-freq updates)
Redux Toolkit    ~10 KB   Selector-based  Excellent Large apps, complex async, time-travel
Zustand          ~1 KB    Selector-based  Good      Medium apps, simple API, performance
Jotai            ~3 KB    Atom-based      Good      Atomic state, minimal boilerplate
Recoil           ~15 KB   Atom-based      Good      Meta ecosystem, derived state</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;"><strong>Rule of thumb:</strong> Use Context for low-frequency global values (theme, current user). Use Zustand or Redux Toolkit for application state that changes often or has complex update logic.</p>`},{q:"What are the different ways to style a React component?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method                  Example                          Pros / Cons
-------------------     -----------------------------    ----------------------------
CSS stylesheets         import './App.css'               Simple; global scope (name clashes)
CSS Modules             styles.button                    Scoped; compile-time; no runtime cost
Inline styles           style={{ color: 'red' }}         Dynamic; no CSS features (no :hover)
CSS-in-JS (styled)      styled.button\`color: red;\`      Scoped, theming; runtime cost
Tailwind CSS            className="bg-blue-500 p-4"      Utility-first; fast; verbose HTML
Sass/SCSS               import './App.scss'              CSS superset; nesting; variables</code></pre>
              </div>`},{q:"How to pass data between React components?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Five common approaches:
                <br/><br/>1. <strong>Props (parent → child)</strong> — the standard way. Pass values as JSX attributes.
                <br/>2. <strong>Callback props (child → parent)</strong> — parent passes a function; child calls it with data.
                <br/>3. <strong>Lift state up (sibling → sibling)</strong> — share state in the nearest common parent.
                <br/>4. <strong>Context API</strong> — broadcast data to any descendant without explicit prop passing.
                <br/>5. <strong>State management library</strong> (Redux, Zustand) — global store accessible from anywhere.
                <br/>6. <strong>React Router state</strong> — <code>navigate('/page', { state: { data } })</code>; read with <code>useLocation()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Child → Parent via callback
function Child({ onSelect }) {
  return &lt;button onClick={() =&gt; onSelect('hello')}&gt;Send&lt;/button&gt;;
}
function Parent() {
  const [msg, setMsg] = useState('');
  return &lt;Child onSelect={setMsg} /&gt;;
}</code></pre>
              </div>`},{q:"What is React Router?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>React Router</strong> is the most popular routing library for React applications. It provides <strong>client-side routing</strong> — navigating between pages by updating the URL and rendering the matched component, without a full server round-trip.
                <br/><br/><strong>Core components / hooks in React Router v6:</strong>
                <br/>• <code>&lt;BrowserRouter&gt;</code> — wraps the app; uses the browser's History API.
                <br/>• <code>&lt;Routes&gt;</code> / <code>&lt;Route path="/..." element={&lt;Component /&gt;}&gt;</code> — define URL-to-component mapping.
                <br/>• <code>&lt;Link to="/path"&gt;</code> — navigation without page reload.
                <br/>• <code>useNavigate()</code> — programmatic navigation.
                <br/>• <code>useParams()</code> — read URL parameters.
                <br/>• <code>useLocation()</code> — current URL/state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;BrowserRouter&gt;
  &lt;Routes&gt;
    &lt;Route path="/"           element={&lt;Home /&gt;} /&gt;
    &lt;Route path="/users/:id"  element={&lt;UserDetail /&gt;} /&gt;
    &lt;Route path="*"           element={&lt;NotFound /&gt;} /&gt;
  &lt;/Routes&gt;
&lt;/BrowserRouter&gt;</code></pre>
              </div>`},{q:"How does client-side routing differ from traditional server-side routing?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect               Server-side Routing              Client-side Routing (React Router)
-----------------    -----------------------------    ----------------------------------
Navigation           Full page reload from server     JavaScript updates URL + renders component
Speed                Slower (network round-trip)      Instant (no server request)
HTML per page        Separate HTML per route          Single HTML file (SPA)
SEO                  Naturally good                   Needs SSR/prerendering
Deep links           Work by default                  Need server config (404 fallback → index.html)
State persistence    Lost on navigation               Preserved (JS stays loaded)</code></pre>
              </div>`},{q:"What is the difference between <code>BrowserRouter</code> and <code>HashRouter</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>BrowserRouter</strong> — uses the HTML5 History API (<code>pushState</code>). URLs look clean: <code>example.com/users/42</code>. Requires server configuration to serve <code>index.html</code> for all routes (otherwise a direct URL returns 404).
                <br/>• <strong>HashRouter</strong> — stores the route in the URL hash: <code>example.com/#/users/42</code>. Works without server configuration because the server ignores the hash; the browser never sends it. Useful for static hosts (GitHub Pages, S3 static site) that don't support server rewrites.
                <br/><br/><strong>Prefer BrowserRouter</strong> for production apps with proper server/CDN configuration.
              </p>`},{q:"How do you implement protected/private routes in React Router?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Wrap protected pages in a component that checks authentication. If the user is not authenticated, redirect to the login page (saving the intended URL so they can return after login).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user)
    return &lt;Navigate to="/login" state={{ from: location }} replace /&gt;;
  return children;
}

// Route definitions
&lt;Routes&gt;
  &lt;Route path="/login"   element={&lt;Login /&gt;} /&gt;
  &lt;Route path="/dashboard" element={
    &lt;RequireAuth&gt;&lt;Dashboard /&gt;&lt;/RequireAuth&gt;
  } /&gt;
&lt;/Routes&gt;</code></pre>
              </div>`},{q:"What is the React Profiler and how do you use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>React Profiler</strong> is a tab in React DevTools that records performance information about each component render — showing which components rendered, how long they took, and why they rendered.
                <br/><br/><strong>How to use:</strong>
                <br/>1. Open React DevTools in Chrome/Firefox.
                <br/>2. Click the <strong>Profiler</strong> tab → press Record.
                <br/>3. Interact with the app.
                <br/>4. Stop recording → inspect the flame chart.
                <br/><br/><strong>What to look for:</strong> Components with long render times (grey bars); components that render more often than expected; components that re-render when their props haven't changed (candidate for <code>React.memo</code>).
                <br/><br/>You can also use the <code>&lt;Profiler&gt;</code> API programmatically to log timings in production.
              </p>`},{q:"What are the different phases of the React component lifecycle in functional components (Hooks equivalent)?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> How the class lifecycle methods map to Hook equivalents:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Class Method                    Hook Equivalent
-----------------------------   -----------------------------------------------
constructor                     useState / useReducer initialisation
componentDidMount               useEffect(() =&gt; {...}, [])
componentDidUpdate              useEffect(() =&gt; {...}, [deps])
componentWillUnmount            useEffect(() =&gt; { return cleanup; }, [])
shouldComponentUpdate           React.memo / useMemo
getDerivedStateFromError        ❌ No hook (class ErrorBoundary required)
componentDidCatch               ❌ No hook (class ErrorBoundary required)
getSnapshotBeforeUpdate         ❌ No hook equivalent</code></pre>
              </div>`}]},{id:"day15",day:15,title:"React Router & Data Fetching",topics:["React Router v6","useNavigate","useParams","useSearchParams","Nested Routes","Protected Routes","Data Fetching Patterns","React Query","Lazy Routes"],questions:[{q:"What is <code>useNavigate</code> and how does it differ from the old <code>useHistory</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In React Router v6, <code>useHistory</code> was replaced by <code>useNavigate</code>.
                <br/><br/><code>useNavigate()</code> returns a <code>navigate</code> function:
                <br/>• <code>navigate('/path')</code> — push a new entry onto history.
                <br/>• <code>navigate('/path', { replace: true })</code> — replace current history entry (no back button).
                <br/>• <code>navigate(-1)</code> — go back (like browser back button).
                <br/>• <code>navigate('/path', { state: { data } })</code> — pass state to the destination route.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () =&gt; {
    clearSession();
    navigate('/login', { replace: true });  // user can't go back to dashboard
  };

  return &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;;
}</code></pre>
              </div>`},{q:"How do you read URL parameters with <code>useParams</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useParams()</code> returns an object of key-value pairs for the <strong>dynamic segments</strong> in the route path. The keys match the <code>:param</code> names defined in the <code>&lt;Route path&gt;</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Route definition
&lt;Route path="/users/:userId/posts/:postId" element={&lt;PostDetail /&gt;} /&gt;

// Component
function PostDetail() {
  const { userId, postId } = useParams();
  // URL: /users/42/posts/7 → userId="42", postId="7"

  return &lt;h1&gt;Post {postId} by User {userId}&lt;/h1&gt;;
}</code></pre>
              </div>`},{q:"What is <code>useSearchParams</code> and how do you use query strings?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useSearchParams</code> provides read/write access to the URL's query string (<code>?key=value</code>) — analogous to <code>useState</code> but persisted in the URL.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ?? 'all';
  const page      = Number(searchParams.get('page') ?? 1);

  const handleCategoryChange = (cat) =&gt;
    setSearchParams({ category: cat, page: 1 });

  // URL: /products?category=shoes&page=2
  return (
    &lt;div&gt;
      &lt;select value={category} onChange={e =&gt; handleCategoryChange(e.target.value)}&gt;
        &lt;option value="all"&gt;All&lt;/option&gt;
        &lt;option value="shoes"&gt;Shoes&lt;/option&gt;
      &lt;/select&gt;
      &lt;ProductGrid category={category} page={page} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`},{q:"How do you implement nested routes and layouts with <code>&lt;Outlet&gt;</code>?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>&lt;Outlet /&gt;</code> is a placeholder in a parent route's component that renders the matching child route. This enables <strong>shared layouts</strong> — navigation, sidebars, or headers that wrap multiple child pages.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Route configuration — DashboardLayout wraps all /dashboard/* routes
&lt;Routes&gt;
  &lt;Route path="/dashboard" element={&lt;DashboardLayout /&gt;}&gt;
    &lt;Route index         element={&lt;Overview /&gt;} /&gt;       {/* /dashboard */}
    &lt;Route path="users"  element={&lt;UserList /&gt;} /&gt;       {/* /dashboard/users */}
    &lt;Route path="stats"  element={&lt;Statistics /&gt;} /&gt;     {/* /dashboard/stats */}
  &lt;/Route&gt;
&lt;/Routes&gt;

// DashboardLayout — renders sidebar + active child route
function DashboardLayout() {
  return (
    &lt;div className="layout"&gt;
      &lt;Sidebar /&gt;
      &lt;main&gt;
        &lt;Outlet /&gt;   {/* child route renders here */}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`},{q:"How do you pass state between routes in React Router?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React Router v6 allows you to pass location state via <code>navigate()</code> or <code>&lt;Link state={...}&gt;</code>. The receiving component reads it with <code>useLocation().state</code>.
                <br/><br/><strong>Note:</strong> Location state is not persisted across page refreshes (it lives in browser history memory). For persistent data, use URL query params or a state manager.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Sender — navigate with state
navigate('/order-confirmation', { state: { orderId: 123, total: 250.00 } });

// Or via Link
&lt;Link to="/order-confirmation" state={{ orderId: 123 }}&gt;Confirm&lt;/Link&gt;

// Receiver — read state
function OrderConfirmation() {
  const { state } = useLocation();
  const { orderId, total } = state ?? {};
  return &lt;h1&gt;Order #{orderId} confirmed! Total: \${total}&lt;/h1&gt;;
}</code></pre>
              </div>`},{q:"What is the difference between <code>&lt;Link&gt;</code> and <code>&lt;NavLink&gt;</code>?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>&lt;Link to="/path"&gt;</code> — renders an anchor tag with client-side navigation. No special styling.
                <br/>• <code>&lt;NavLink to="/path"&gt;</code> — same as <code>Link</code> but automatically adds an <code>active</code> CSS class (or custom class/style via the <code>className</code>/<code>style</code> props with function signature) when the URL matches. Perfect for navigation menus.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;nav&gt;
  &lt;NavLink
    to="/dashboard"
    className={({ isActive }) =&gt; isActive ? 'nav-link active' : 'nav-link'}
  &gt;
    Dashboard
  &lt;/NavLink&gt;
  &lt;NavLink to="/settings" style={({ isActive }) =&gt; ({ fontWeight: isActive ? 'bold' : 'normal' })}&gt;
    Settings
  &lt;/NavLink&gt;
&lt;/nav&gt;</code></pre>
              </div>`},{q:"How do you handle 404 routes in React Router v6?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Add a wildcard route (<code>path="*"</code>) as the last route in your <code>&lt;Routes&gt;</code> block. React Router matches routes top-to-bottom; if nothing else matches, the wildcard catches it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;Routes&gt;
  &lt;Route path="/"         element={&lt;Home /&gt;} /&gt;
  &lt;Route path="/about"    element={&lt;About /&gt;} /&gt;
  &lt;Route path="/users/:id" element={&lt;UserDetail /&gt;} /&gt;
  &lt;Route path="*"          element={&lt;NotFoundPage /&gt;} /&gt;  {/* catch-all */}
&lt;/Routes&gt;</code></pre>
              </div>`},{q:"How do you implement lazy-loaded routes with React Router and Suspense?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Combine <code>React.lazy()</code> with route definitions. Wrap the routes in <code>&lt;Suspense&gt;</code> at the router level to show a global loading fallback while route chunks are downloading.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const Dashboard  = React.lazy(() =&gt; import('./pages/Dashboard'));
const Analytics  = React.lazy(() =&gt; import('./pages/Analytics'));
const UserProfile = React.lazy(() =&gt; import('./pages/UserProfile'));

function App() {
  return (
    &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/"          element={&lt;Home /&gt;} /&gt;        {/* eager */}
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;   {/* lazy */}
        &lt;Route path="/analytics" element={&lt;Analytics /&gt;} /&gt;   {/* lazy */}
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
              </div>`},{q:"What is the problem with data fetching inside <code>useEffect</code>?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The naive <code>useEffect</code> + <code>fetch</code> + <code>useState</code> pattern has several well-known problems:
                <br/><br/>1. <strong>Race condition</strong> — if the user changes a filter quickly, multiple requests can be in flight; a slower earlier response might arrive after a faster later one, showing stale data.
                <br/>2. <strong>No deduplication</strong> — multiple components fetching the same URL make separate network requests.
                <br/>3. <strong>No caching</strong> — navigating back to a page refetches from scratch.
                <br/>4. <strong>No loading/error state management out of the box</strong> — you write boilerplate for every fetch.
                <br/>5. <strong>Memory leak</strong> — if the component unmounts before the fetch completes, calling <code>setState</code> on an unmounted component causes a warning (need AbortController).
                <br/><br/>These problems are solved by data-fetching libraries like React Query or SWR.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Fix race condition with AbortController
useEffect(() =&gt; {
  const controller = new AbortController();

  fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
    .then(r =&gt; r.json())
    .then(setUser)
    .catch(err =&gt; { if (err.name !== 'AbortError') setError(err); });

  return () =&gt; controller.abort();   // cancel on cleanup
}, [userId]);</code></pre>
              </div>`},{q:"What is React Query (TanStack Query) and why use it?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>TanStack Query (React Query)</strong> is a data-fetching and server-state management library that handles all the hard parts of data fetching automatically:
                <br/>• <strong>Caching</strong> — responses are cached; same key → no refetch.
                <br/>• <strong>Background refetching</strong> — stale data shown immediately while fresh data loads.
                <br/>• <strong>Deduplication</strong> — multiple components with same query → single network request.
                <br/>• <strong>Loading/error/success states</strong> — built-in, no boilerplate.
                <br/>• <strong>Pagination and infinite queries</strong> — first-class support.
                <br/>• <strong>Mutations</strong> — POST/PUT/DELETE with cache invalidation.
                <br/>• <strong>DevTools</strong> — visual cache inspector.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],          // cache key
    queryFn: () =&gt; fetchUser(userId),    // async fetcher
    staleTime: 5 * 60 * 1000,            // 5 mins before refetch
  });

  if (isLoading) return &lt;Spinner /&gt;;
  if (error)     return &lt;Error /&gt;;
  return &lt;div&gt;{data.name}&lt;/div&gt;;
}</code></pre>
              </div>`},{q:"What is <code>useLocation</code> and when do you use it?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useLocation()</code> returns the current location object, which contains:
                <br/>• <code>pathname</code> — the URL path: <code>/users/42</code>.
                <br/>• <code>search</code> — the query string: <code>?page=2</code>.
                <br/>• <code>hash</code> — the hash fragment: <code>#section-3</code>.
                <br/>• <code>state</code> — the location state passed via <code>navigate()</code> or <code>&lt;Link state&gt;</code>.
                <br/><br/><strong>Common uses:</strong> reading state passed from previous route, tracking page views (analytics), conditional rendering based on current path.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() =&gt; {
    analytics.pageView(location.pathname + location.search);
  }, [location]);   // fires on every route change
  return null;
}</code></pre>
              </div>`},{q:"How do you implement index routes in React Router v6?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>index route</strong> (<code>&lt;Route index /&gt;</code>) renders when the parent route's path matches exactly — it's the "default child" for a layout route. It renders at the parent's URL without any additional path segment.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;Routes&gt;
  &lt;Route path="/dashboard" element={&lt;DashboardLayout /&gt;}&gt;
    &lt;Route index element={&lt;DashboardHome /&gt;} /&gt;   {/* matches /dashboard exactly */}
    &lt;Route path="users"  element={&lt;Users /&gt;} /&gt;    {/* matches /dashboard/users */}
    &lt;Route path="orders" element={&lt;Orders /&gt;} /&gt;   {/* matches /dashboard/orders */}
  &lt;/Route&gt;
&lt;/Routes&gt;</code></pre>
              </div>`},{q:"What is SWR and how does it compare to React Query?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>SWR</strong> (Stale-While-Revalidate) is Vercel's lightweight data-fetching library for React. Both SWR and React Query solve the same core problems (caching, deduplication, background refresh).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature                  SWR              React Query
--------------------     -----------      -------------------
Bundle size              ~4 KB            ~12 KB
API simplicity           Simpler          More features
Mutations                Basic            Powerful (optimistic UI, invalidation)
Pagination               Basic            useInfiniteQuery
DevTools                 3rd party        Built-in
Ecosystem                Vercel/Next.js   Framework agnostic
Best for                 Simple fetching  Complex data ops</code></pre>
              </div>`},{q:"How do you handle loading, error, and success states elegantly in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a status enum instead of multiple boolean flags — avoids impossible states like <code>loading=true AND error=true</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Multiple booleans — can be inconsistent
const [loading, setLoading] = useState(false);
const [error, setError]     = useState(null);
const [data, setData]       = useState(null);

// ✅ Status enum — mutually exclusive states
const [status, setStatus] = useState('idle');  // 'idle'|'loading'|'success'|'error'

if (status === 'loading') return &lt;Spinner /&gt;;
if (status === 'error')   return &lt;ErrorMessage /&gt;;
if (status === 'success') return &lt;DataView data={data} /&gt;;
return &lt;button onClick={fetchData}&gt;Load&lt;/button&gt;;  // idle</code></pre>
              </div>`},{q:"How do you debounce an input in React to avoid too many API calls?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a combination of <code>useState</code> + <code>useEffect</code> + <code>setTimeout</code> to create a debounced value. After the user stops typing for a set delay, trigger the API call.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(timer);   // cancel on rapid typing
  }, [value, delay]);

  return debounced;
}

function SearchInput() {
  const [query, setQuery]   = useState('');
  const debouncedQuery      = useDebounce(query, 400);

  // Only fires 400ms after user stops typing
  useEffect(() =&gt; {
    if (debouncedQuery) searchAPI(debouncedQuery);
  }, [debouncedQuery]);

  return &lt;input value={query} onChange={e =&gt; setQuery(e.target.value)} /&gt;;
}</code></pre>
              </div>`}]},{id:"day16",day:16,title:"React Forms, TypeScript & Testing",topics:["Form Handling","Validation","React Hook Form","TypeScript + React","React Testing Library","Custom Hook Testing","Snapshot Testing"],questions:[{q:"How do you handle form submission in React?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a controlled form: every input value is in React state, and a submit handler reads the state values. Prevent default browser form submission with <code>e.preventDefault()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) =&gt;
    setForm(prev =&gt; ({ ...prev, [name]: value }));

  const handleSubmit = async (e) =&gt; {
    e.preventDefault();
    if (validate(form)) {
      await registerAPI(form);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input name="name"  value={form.name}  onChange={handleChange} /&gt;
      &lt;input name="email" value={form.email} onChange={handleChange} /&gt;
      &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
              </div>`},{q:"How do you implement form validation in React?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Three common approaches — from manual to library-based:
                <br/><br/>1. <strong>Manual validation</strong> — validate in the submit handler or on blur, store errors in state.
                <br/>2. <strong>Custom Hook</strong> — extract reusable validation logic.
                <br/>3. <strong>Library</strong> (React Hook Form + Yup/Zod, Formik) — schema-driven validation with minimal boilerplate.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Manual validation on submit
const validate = (form) =&gt; {
  const errs = {};
  if (!form.email.includes('@'))   errs.email    = 'Invalid email';
  if (form.password.length &lt; 8)    errs.password = 'Min 8 characters';
  return errs;
};

const handleSubmit = (e) =&gt; {
  e.preventDefault();
  const errs = validate(form);
  if (Object.keys(errs).length) { setErrors(errs); return; }
  submitAPI(form);
};</code></pre>
              </div>`},{q:"What is React Hook Form and why use it over manual forms?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>React Hook Form (RHF)</strong> is a performant form library that uses <strong>uncontrolled components internally</strong> (via refs), avoiding React re-renders on every keystroke. 
                <br/><br/><strong>Advantages over manual forms:</strong>
                <br/>• <strong>Performance</strong> — no re-render on each keystroke (uncontrolled inputs).
                <br/>• <strong>Less boilerplate</strong> — no manual onChange, state, or error objects.
                <br/>• <strong>Schema validation</strong> — integrates seamlessly with Yup, Zod, Joi.
                <br/>• <strong>Nested fields, arrays, watch</strong> — advanced features out of the box.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email:    z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    &lt;form onSubmit={handleSubmit(data =&gt; loginAPI(data))}&gt;
      &lt;input {...register('email')} /&gt;
      {errors.email &amp;&amp; &lt;p&gt;{errors.email.message}&lt;/p&gt;}
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
              </div>`},{q:"How do you type React props with TypeScript?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Define an <code>interface</code> or <code>type</code> for the component's props and pass it as a generic type parameter to the component function.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface UserCardProps {
  name:      string;
  age:       number;
  email?:    string;               // optional prop
  onDelete:  (id: number) =&gt; void; // function prop
  children?: React.ReactNode;      // accepts JSX children
}

const UserCard: React.FC&lt;UserCardProps&gt; = ({ name, age, onDelete }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    &lt;p&gt;{age}&lt;/p&gt;
    &lt;button onClick={() =&gt; onDelete(1)}&gt;Delete&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>
              </div>`},{q:"Should you use <code>React.FC</code> to type functional components?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> It's a matter of debate. <code>React.FC</code> (or <code>React.FunctionComponent</code>) has two drawbacks:
                <br/><br/>1. It automatically adds <code>children?: React.ReactNode</code> to props (pre-React 18), which was often unintentional.
                <br/>2. It disallows returning <code>undefined</code> (must return <code>null</code> for no output).
                <br/><br/>The <strong>React TypeScript community recommendation</strong> is to type the <em>props</em> explicitly and let TypeScript infer the return type:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Less preferred
const Button: React.FC&lt;ButtonProps&gt; = ({ label }) =&gt; &lt;button&gt;{label}&lt;/button&gt;;

// ✅ Preferred — inferred return type, no implicit children
function Button({ label }: ButtonProps) {
  return &lt;button&gt;{label}&lt;/button&gt;;
}</code></pre>
              </div>`},{q:"How do you type event handlers in React with TypeScript?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React's synthetic event system provides typed event objects. Common event types from <code>React</code> namespace:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Input change
const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
  setValue(e.target.value);
};

// Form submit
const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
  e.preventDefault();
};

// Button click
const handleClick = (e: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
  console.log(e.currentTarget);
};

// Select change
const handleSelect = (e: React.ChangeEvent&lt;HTMLSelectElement&gt;) =&gt; {
  setCategory(e.target.value);
};</code></pre>
              </div>`},{q:"How do you type <code>useRef</code> with TypeScript?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useRef</code> has two overloads in TypeScript:
                <br/><br/>• <code>useRef&lt;T&gt;(initialValue)</code> where <code>initialValue</code> is <code>T</code> — returns a <code>MutableRefObject&lt;T&gt;</code> (mutable ref).
                <br/>• <code>useRef&lt;T&gt;(null)</code> — returns a <code>RefObject&lt;T&gt;</code> (read-only current, for DOM refs).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// DOM ref — type the HTML element
const inputRef = useRef&lt;HTMLInputElement&gt;(null);
inputRef.current?.focus();   // optional chaining because current can be null

// Mutable ref — storing a value (timer ID, counter)
const timerRef = useRef&lt;ReturnType&lt;typeof setTimeout&gt; | null&gt;(null);
timerRef.current = setTimeout(fn, 1000);</code></pre>
              </div>`},{q:"What is React Testing Library and how does it differ from Enzyme?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Both are React testing utilities, but with fundamentally different philosophies:
                <br/><br/>• <strong>React Testing Library (RTL)</strong> — tests from the user's perspective. Query by accessible roles, text, and labels. Encourages testing behaviour, not implementation. Ships with React by default (CRA, Vite). ✅ Modern standard.
                <br/>• <strong>Enzyme</strong> — tests component internals (state, props, instance methods). Tightly coupled to implementation. Shallow rendering available. ❌ No longer maintained for React 18+.
                <br/><br/><strong>RTL guiding principle:</strong> "The more your tests resemble the way your software is used, the more confidence they give you."
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// RTL — test what the user sees
test('shows welcome message', () =&gt; {
  render(&lt;Welcome name="Alice" /&gt;);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});

test('button click increments count', async () =&gt; {
  render(&lt;Counter /&gt;);
  await userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});</code></pre>
              </div>`},{q:"How do you write a unit test for a React component?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A React component test with RTL + Jest follows the <strong>Arrange → Act → Assert</strong> pattern:
                <br/>1. <strong>Render</strong> the component with test props.
                <br/>2. <strong>Query</strong> elements by role, text, label, testid.
                <br/>3. <strong>Interact</strong> using <code>userEvent</code> (preferred over <code>fireEvent</code>).
                <br/>4. <strong>Assert</strong> expected output.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () =&gt; {
  it('disables submit when fields are empty', () =&gt; {
    render(&lt;LoginForm onSubmit={jest.fn()} /&gt;);
    expect(screen.getByRole('button', { name: /login/i })).toBeDisabled();
  });

  it('calls onSubmit with email and password', async () =&gt; {
    const onSubmit = jest.fn();
    render(&lt;LoginForm onSubmit={onSubmit} /&gt;);

    await userEvent.type(screen.getByLabelText(/email/i), 'alice@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'secret123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(onSubmit).toHaveBeenCalledWith({ email: 'alice@test.com', password: 'secret123' });
  });
});</code></pre>
              </div>`},{q:"How do you test a component that uses <code>useEffect</code> for data fetching?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Mock the data-fetching function (Axios, fetch) to avoid real HTTP calls. Use <code>waitFor</code> or <code>findBy*</code> queries (which wait for async updates) to assert the rendered result.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Mock module
jest.mock('../api/userService');
import { fetchUser } from '../api/userService';

test('displays user name after loading', async () =&gt; {
  fetchUser.mockResolvedValueOnce({ id: 1, name: 'Alice' });

  render(&lt;UserProfile userId={1} /&gt;);

  // Initially shows loader
  expect(screen.getByRole('progressbar')).toBeInTheDocument();

  // Wait for async update
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
});</code></pre>
              </div>`},{q:"How do you test custom React Hooks?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use <code>renderHook</code> from <code>@testing-library/react</code>. It renders the hook in a test component and gives you access to its return values.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('increments counter', () =&gt; {
  const { result } = renderHook(() =&gt; useCounter(0));

  expect(result.current.count).toBe(0);

  act(() =&gt; result.current.increment());

  expect(result.current.count).toBe(1);
});

test('resets counter', () =&gt; {
  const { result } = renderHook(() =&gt; useCounter(5));
  act(() =&gt; result.current.reset());
  expect(result.current.count).toBe(0);
});</code></pre>
              </div>`},{q:"What is snapshot testing and what are its trade-offs?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Snapshot testing</strong> renders a component and saves its output (as a text file). On subsequent runs, the new output is compared against the saved snapshot. If they differ, the test fails.
                <br/><br/><strong>Pros:</strong>
                <br/>• Easy to add — one line catches any unexpected UI regression.
                <br/>• Good for components with complex rendering logic.
                <br/><br/><strong>Cons:</strong>
                <br/>• <strong>Too easy to update carelessly</strong> — developers often run <code>jest --updateSnapshot</code> without reviewing the diff.
                <br/>• <strong>Tests implementation, not behaviour</strong> — any code refactor (same output, different structure) breaks the snapshot needlessly.
                <br/>• Large snapshots are hard to review in PRs.
                <br/><br/><strong>Recommendation:</strong> Prefer behaviour-based tests with RTL; use snapshots sparingly for small, stable components.
              </p>`},{q:"What are the best practices for testing React applications?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Test behaviour, not implementation</strong> — what the user sees and does, not internal state.
                <br/>2. <strong>Query by accessibility roles first</strong> — <code>getByRole</code> &gt; <code>getByLabelText</code> &gt; <code>getByText</code> &gt; <code>getByTestId</code> (last resort).
                <br/>3. <strong>Use <code>userEvent</code> over <code>fireEvent</code></strong> — more closely simulates real user interaction.
                <br/>4. <strong>Mock at the boundary</strong> — mock API calls/modules, not internal functions.
                <br/>5. <strong>Arrange → Act → Assert</strong> — clear test structure.
                <br/>6. <strong>Test edge cases</strong> — loading, error, empty states.
                <br/>7. <strong>Integration tests over unit tests</strong> — test components that work together.
                <br/>8. <strong>Coverage as a guide, not a goal</strong> — 80% meaningful coverage &gt; 100% trivial coverage.
              </p>`},{q:"What is the React <code>act()</code> utility and why do tests need it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>act()</code> ensures that all state updates, effects, and re-renders triggered by a UI interaction are processed and flushed before your assertions run. Without it, assertions might run before React finishes updating the DOM.
                <br/><br/>React Testing Library's <code>userEvent</code>, <code>render</code>, and <code>waitFor</code> automatically wrap operations in <code>act()</code>. You only need to call <code>act()</code> manually when dealing with:
                <br/>• State updates triggered outside React (WebSocket messages, timers).
                <br/>• Custom hooks with <code>renderHook</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Manual act() needed — state updated from outside React
import { act } from '@testing-library/react';

test('updates on WebSocket message', () =&gt; {
  render(&lt;LiveFeed /&gt;);
  act(() =&gt; {
    ws.mockMessage({ type: 'update', data: 'new item' });
  });
  expect(screen.getByText('new item')).toBeInTheDocument();
});</code></pre>
              </div>`},{q:"What is Formik and how does it compare to React Hook Form?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Formik</strong> is a form management library using controlled inputs; it stores all form state in React state. <strong>React Hook Form (RHF)</strong> uses uncontrolled inputs via refs. 
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature               Formik                 React Hook Form
-----------------     ------------------     ----------------------
Input control         Controlled (state)     Uncontrolled (refs)
Re-renders on type    Yes (every keystroke)  No (much faster)
Bundle size           ~13 KB                 ~9 KB
TypeScript            Good                   Excellent
Schema validation     Yup                    Yup, Zod, Joi, etc.
Learning curve        Moderate               Low
Recommendation        Legacy/existing code   New projects ✅</code></pre>
              </div>`}]},{id:"day17",day:17,title:"GraphQL Fundamentals",topics:["What is GraphQL","Query vs Mutation","Schema","Scalar Types","Resolvers","Aliases","Fragments","Directives","GraphQL vs REST","Unions & Interfaces"],questions:[{q:"What is GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is both a <strong>query language for APIs</strong> and a <strong>server-side runtime</strong> for executing those queries, developed by Meta and open-sourced in 2015. Unlike REST — which has a fixed URL per resource — GraphQL exposes a <strong>single endpoint</strong> where clients can request exactly the data they need in a single query, preventing over-fetching and under-fetching.
                <br/><br/><strong>Key characteristics:</strong>
                <br/>• <strong>Client-specified queries</strong> — the client defines the shape and depth of the response.
                <br/>• <strong>Strongly typed schema</strong> — the API is described by a type system; all queries are validated against it.
                <br/>• <strong>Single endpoint</strong> — typically <code>POST /graphql</code>.
                <br/>• <strong>Hierarchical</strong> — queries mirror the shape of the data returned.
                <br/>• <strong>Introspective</strong> — clients can query the schema itself to discover available types and operations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># REST: GET /users/1 → returns ALL user fields
# GraphQL: ask for only what you need
query {
  user(id: "1") {
    name
    email
    # phone, address, etc. NOT fetched — no over-fetching
  }
}</code></pre>
              </div>`},{q:"What is the difference between a query and a mutation in GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Query</strong> — reads data (equivalent to HTTP GET). Queries are <strong>safe and idempotent</strong> — no side effects on the server.
                <br/>• <strong>Mutation</strong> — writes data (create, update, delete — equivalent to HTTP POST/PUT/PATCH/DELETE). Mutations have side effects.
                <br/>• <strong>Subscription</strong> — a third operation type for <strong>real-time updates</strong> over a persistent connection (WebSocket).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Query — read user
query GetUser($id: ID!) {
  user(id: $id) { name email }
}

# Mutation — create user
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id name email
  }
}

# Subscription — real-time messages
subscription {
  newMessage(roomId: "general") { text author createdAt }
}</code></pre>
              </div>`},{q:"What is a GraphQL schema?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A GraphQL schema is the <strong>blueprint of the API</strong> — it defines every type of data, every relationship between types, and every operation (query, mutation, subscription) that clients can perform. The schema acts as a <strong>contract</strong> between the client and server.
                <br/><br/>Written in SDL (Schema Definition Language). Every schema must have at minimum a <code>Query</code> type (the root for read operations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type User {
  id:    ID!
  name:  String!
  email: String!
  posts: [Post!]!
}

type Post {
  id:      ID!
  title:   String!
  content: String
  author:  User!
}

type Query {
  user(id: ID!): User
  posts: [Post!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
}</code></pre>
              </div>`},{q:"What are scalar types in GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Scalar types</strong> are the leaf nodes of a GraphQL query — they represent concrete, primitive values that don't have sub-fields.
                <br/><br/><strong>Built-in scalars:</strong>
                <br/>• <code>String</code> — UTF-8 text.
                <br/>• <code>Int</code> — 32-bit signed integer.
                <br/>• <code>Float</code> — double-precision floating point.
                <br/>• <code>Boolean</code> — <code>true</code> or <code>false</code>.
                <br/>• <code>ID</code> — unique identifier (serialized as String; typically used for cache keys).
                <br/><br/><strong>Custom scalars</strong> — you can define your own: <code>scalar Date</code>, <code>scalar Email</code>, <code>scalar JSON</code>. The server implements serialization/deserialization and validation.
              </p>`},{q:"What does an exclamation point (<code>!</code>) mean in GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <code>!</code> (bang) in GraphQL means <strong>non-nullable</strong> — the value must always be present and cannot be <code>null</code>.
                <br/><br/>• <code>String</code> — can be null or a string.
                <br/>• <code>String!</code> — always a string (never null).
                <br/>• <code>[String]</code> — the list itself can be null; items can be null.
                <br/>• <code>[String!]!</code> — the list is always returned AND each item is always a string.
                <br/><br/><strong>Where it appears:</strong>
                <br/>• Field types in schema: <code>name: String!</code>.
                <br/>• Arguments: <code>user(id: ID!)</code> — client must provide <code>id</code>.
                <br/><br/>Violating non-nullability causes GraphQL to propagate <code>null</code> up the tree to the nearest nullable parent field.
              </p>`},{q:"What are resolvers in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>resolver</strong> is a function that provides the value for a specific field in the schema. For every field in the schema, there is (implicitly or explicitly) a resolver that tells GraphQL how to fetch that data — from a database, REST API, cache, or any source.
                <br/><br/><strong>Resolver signature:</strong> <code>(parent, args, context, info)</code>
                <br/>• <code>parent</code> — the resolved value of the parent type.
                <br/>• <code>args</code> — arguments passed to the field in the query.
                <br/>• <code>context</code> — shared object (auth user, DB connection, dataloaders).
                <br/>• <code>info</code> — execution metadata (field name, path, schema).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const resolvers = {
  Query: {
    user: async (_, { id }, context) =&gt; {
      return context.db.users.findById(id);
    },
    posts: (_, __, context) =&gt; context.db.posts.findAll(),
  },
  User: {
    posts: (parent, _, context) =&gt; {
      return context.db.posts.findByAuthor(parent.id);  // parent = User object
    },
  },
  Mutation: {
    createUser: (_, { name, email }, context) =&gt;
      context.db.users.create({ name, email }),
  },
};</code></pre>
              </div>`},{q:"When is GraphQL useful?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is useful when:
                <br/>• <strong>Multiple clients with different data needs</strong> — mobile, web, and desktop apps often need different subsets of the same data. GraphQL lets each client query exactly what it needs.
                <br/>• <strong>Avoiding over/under-fetching</strong> — REST endpoints return fixed shapes; GraphQL responses match the query exactly.
                <br/>• <strong>Complex relationships</strong> — deeply nested or interconnected data models (social networks, e-commerce, CMS).
                <br/>• <strong>Rapid API evolution</strong> — add new fields without versioning; deprecate fields gradually.
                <br/>• <strong>Aggregating multiple services</strong> — use GraphQL as a BFF (Backend for Frontend) that calls multiple microservices and returns a unified response.
                <br/><br/><strong>NOT ideal for:</strong> Simple CRUD with uniform clients, file uploads (work but awkward), or when HTTP caching is critical.
              </p>`},{q:"What are the key concepts of the GraphQL query language?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Concept           Description                          Example
--------------    ---------------------------------    ----------------------------------
Operation type    query / mutation / subscription      query GetUser { ... }
Fields            Data to retrieve                     { user { name email } }
Arguments         Filter / parameterize fields         user(id: "42")
Variables         Dynamic values in operations         ($id: ID!)
Aliases           Rename a field in the response       me: user(id: "1")
Fragments         Reusable field selections            fragment UserInfo on User
Directives        Conditional execution                @include(if: $showEmail)
Inline fragments  Type-specific fields                 ... on Admin { permissions }
Introspection     Query the schema itself              { __schema { types { name } } }</code></pre>
              </div>`},{q:"What is the difference between GraphQL and REST?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature                REST                         GraphQL
-------------------    --------------------------   ----------------------------
Endpoints              Multiple (one per resource)  Single (/graphql)
Data fetching          Fixed response shape         Client-specified fields
Over/Under fetching    Common problem               Solved by design
HTTP methods           GET, POST, PUT, DELETE        POST (usually)
Versioning             URL (/v1, /v2)               Schema evolution (deprecation)
Caching                Easy (HTTP cache, CDN)        Needs special handling (APQ)
Real-time              Polling / Server-Sent Events  Native subscriptions
File upload            Simple multipart             Possible but complex
Learning curve         Low                          Moderate
Best for               Simple CRUD APIs             Complex, multi-client APIs</code></pre>
              </div>`},{q:"What are the advantages and disadvantages of GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Advantages:</strong>
                <br/>• Precise data fetching — no over/under-fetching.
                <br/>• Single request for multiple resources (vs REST's multiple round trips).
                <br/>• Strongly typed schema — self-documenting, validated at build time.
                <br/>• Easier frontend development — query what you need.
                <br/>• Rapid API evolution — add fields without versioning.
                <br/><br/><strong>Disadvantages:</strong>
                <br/>• <strong>N+1 problem</strong> — naive resolvers can trigger many DB queries (needs DataLoader).
                <br/>• <strong>Caching complexity</strong> — HTTP caching doesn't work naturally; needs client-side cache (Apollo, URQL).
                <br/>• <strong>Complex queries</strong> — malicious or deeply nested queries can overload the server (needs rate limiting, complexity analysis).
                <br/>• <strong>Steeper learning curve</strong> — schema design, resolver architecture.
                <br/>• <strong>File uploads</strong> are not natively supported.
              </p>`},{q:"What are aliases in GraphQL and why use them?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>alias</strong> renames a field in the response. This is essential when you need to query the <strong>same field multiple times with different arguments</strong> in a single query — without an alias, both would have the same key in the response and clash.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Without alias — would fail (duplicate "user" keys in response)
query {
  user(id: "1") { name }
  user(id: "2") { name }   # ❌ conflict
}

# With aliases — works perfectly
query {
  alice: user(id: "1") { name }
  bob:   user(id: "2") { name }
}
# Response: { "alice": { "name": "Alice" }, "bob": { "name": "Bob" } }</code></pre>
              </div>`},{q:"What are fragments in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>fragment</strong> is a reusable selection of fields on a specific type. Fragments follow the DRY principle — define field sets once and reference them in multiple queries or mutations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>fragment UserBasic on User {
  id
  name
  email
  avatarUrl
}

query GetUser($id: ID!) {
  user(id: $id) {
    ...UserBasic       # spread the fragment
    createdAt
  }
}

query GetAllUsers {
  users {
    ...UserBasic       # reuse same fragment
    role
  }
}</code></pre>
              </div>`},{q:"What are directives in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Directives</strong> provide a way to dynamically alter the execution or validation of a query. They start with <code>@</code>.
                <br/><br/><strong>Built-in directives:</strong>
                <br/>• <code>@include(if: Boolean)</code> — include the field/fragment only if the condition is <code>true</code>.
                <br/>• <code>@skip(if: Boolean)</code> — skip the field/fragment if <code>true</code>.
                <br/>• <code>@deprecated(reason: "...")</code> — marks a schema field as deprecated.
                <br/><br/><strong>Custom directives</strong> can be defined in the schema to add auth checks, rate limiting, field transformations, etc.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>query GetUser($id: ID!, $showEmail: Boolean!) {
  user(id: $id) {
    name
    email   @include(if: $showEmail)  # only if showEmail=true
    phone   @skip(if: $showEmail)     # only if showEmail=false
  }
}</code></pre>
              </div>`},{q:"What are unions and interfaces in GraphQL?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Interface</strong> — defines a set of fields that multiple types must implement. Like a Java interface. Useful for polymorphic fields where different types share common fields.
                <br/>• <strong>Union</strong> — a field that can be one of several types that don't necessarily share fields. Each type in the union may be completely different.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Interface — shared fields
interface Node { id: ID! }
type User    implements Node { id: ID!; name: String! }
type Product implements Node { id: ID!; title: String! }

# Union — no shared fields required
union SearchResult = User | Product | Article

query {
  search(query: "alice") {
    ... on User    { name email }     # inline fragment per type
    ... on Product { title price }
    ... on Article { headline body }
  }
}</code></pre>
              </div>`},{q:"What is an object type in GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>Object Type</strong> is the most common type in a GraphQL schema. It represents a structured data object with named fields, each with their own type. Object types are the building blocks of the schema — they describe the entities in your domain (User, Post, Order, etc.).
                <br/><br/>Every field in an object type has:
                <br/>• A name.
                <br/>• A type (scalar or another object type).
                <br/>• Optional arguments (to parameterize the field).
                <br/>• Optional <code>@deprecated</code> directive.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type Order {
  id:          ID!
  createdAt:   String!
  totalAmount: Float!
  status:      OrderStatus!   # enum type
  customer:    User!          # reference to another object type
  items:       [OrderItem!]!  # list of object types
}</code></pre>
              </div>`}]},{id:"day18",day:18,title:"GraphQL Intermediate",topics:["Variables","Introspection","Authentication & Authorization","Error Handling","N+1 Problem","DataLoader","Caching","Input Types","Pagination","Mutations","Subscriptions"],questions:[{q:"What are variables in GraphQL and how do you use them?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Variables</strong> allow dynamic values to be passed to a GraphQL operation at runtime — avoiding hardcoded arguments and enabling query reuse. Variables are declared in the operation signature with a <code>$</code> prefix and a type, then passed as a separate JSON object alongside the query.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Operation — declare variable $userId of type ID (non-nullable)
query GetUser($userId: ID!, $showPosts: Boolean = true) {
  user(id: $userId) {
    name
    email
    posts @include(if: $showPosts) { title }
  }
}

# Variables JSON (sent alongside the query)
{
  "userId": "42",
  "showPosts": false
}</code></pre>
              </div>`},{q:"What is introspection in GraphQL and how is it useful?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Introspection</strong> is GraphQL's ability to answer queries about its own schema — what types exist, what fields each type has, what operations are available, and what directives are supported.
                <br/><br/><strong>Uses:</strong>
                <br/>• <strong>GraphiQL / GraphQL Playground / Apollo Studio</strong> — use introspection to show autocomplete and documentation.
                <br/>• <strong>Code generation</strong> — tools like <code>graphql-codegen</code> introspect the schema to generate TypeScript types for queries.
                <br/>• <strong>Client validation</strong> — validate queries against the schema at build time.
                <br/><br/><strong>Security note:</strong> Disable introspection in production if the API is public or sensitive — it reveals the entire schema to potential attackers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Introspection query — list all types
{
  __schema {
    types { name kind description }
  }
}

# Inspect a specific type
{
  __type(name: "User") {
    fields { name type { name kind } }
  }
}</code></pre>
              </div>`},{q:"How do you handle authentication and authorization in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Authentication</strong> (who is the user?) — handled outside GraphQL at the HTTP layer. A JWT or session token is sent in the <code>Authorization</code> header. The GraphQL server middleware parses it and attaches the user to the <strong>context</strong> object, making it available in all resolvers.
                <br/>• <strong>Authorization</strong> (what can the user access?) — implemented inside resolvers or via middleware/directives. Resolvers check <code>context.user</code> before returning data.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Auth context setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) =&gt; {
    const token = req.headers.authorization?.split(' ')[1];
    const user  = token ? verifyJwt(token) : null;
    return { user, db };
  }
});

// Resolver — authorization check
const resolvers = {
  Mutation: {
    deletePost: (_, { id }, { user, db }) =&gt; {
      if (!user)            throw new AuthenticationError('Not logged in');
      if (user.role !== 'ADMIN') throw new ForbiddenError('Not allowed');
      return db.posts.delete(id);
    }
  }
};</code></pre>
              </div>`},{q:"How do you do error handling in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Unlike REST where errors are communicated via HTTP status codes, GraphQL <strong>always returns HTTP 200</strong>. Errors are returned inside the response body alongside data, in an <code>errors</code> array.
                <br/><br/>A response can have both partial <code>data</code> AND <code>errors</code> — if one resolver fails, other resolvers' data is still returned.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSON</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Partial success response
{
  "data": {
    "user": { "name": "Alice" },
    "posts": null                // this resolver failed
  },
  "errors": [{
    "message": "Database connection failed",
    "locations": [{ "line": 3, "column": 5 }],
    "path": ["posts"],
    "extensions": {
      "code": "DB_ERROR",       // custom error code
      "timestamp": "2024-01-15T10:30:00Z"
    }
  }]
}</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Apollo Server typed errors
throw new UserInputError('Invalid email format', { field: 'email' });
throw new AuthenticationError('Please log in');
throw new ForbiddenError('Insufficient permissions');
throw new ApolloError('Something went wrong', 'CUSTOM_CODE');</code></pre>
              </div>`},{q:"How do you handle and report errors in a production GraphQL API?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>1. <strong>Never expose internal errors to clients</strong> — catch errors in resolvers and return user-friendly messages. Log the real error to your monitoring system (Datadog, Sentry, CloudWatch).
                <br/>2. <strong>Use error codes</strong> — add an <code>extensions.code</code> field so clients can handle specific error types programmatically.
                <br/>3. <strong>Differentiate error types</strong>:
                  <br/>&nbsp;&nbsp;— User errors (validation, not found) — safe to expose.
                  <br/>&nbsp;&nbsp;— System errors (DB down, timeout) — mask and log.
                <br/>4. <strong>Mask sensitive data</strong> — never return stack traces, DB query details, or internal IDs in production.
                <br/>5. <strong>Monitor error rates</strong> — alert on spikes in error rates per operation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const server = new ApolloServer({
  formatError: (error) =&gt; {
    // Log full error internally
    logger.error({ message: error.message, stack: error.extensions?.stacktrace });

    // Mask internal errors in response
    if (error.extensions?.code === 'INTERNAL_SERVER_ERROR') {
      return new Error('An unexpected error occurred. Please try again.');
    }
    return error;  // pass user errors through as-is
  }
});</code></pre>
              </div>`},{q:"How can you implement versioning in a GraphQL API without breaking existing clients?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is designed to <strong>evolve without explicit versioning</strong>. Strategies:
                <br/><br/>1. <strong>Additive changes only</strong> — add new fields and types freely. Old clients ignoring new fields are unaffected.
                <br/>2. <strong>Deprecate, don't delete</strong> — mark old fields with <code>@deprecated</code>. Give clients time to migrate. Only remove after zero usage is confirmed (via logging).
                <br/>3. <strong>Field aliases</strong> — introduce a new field with different behaviour alongside the old one.
                <br/>4. <strong>Argument changes</strong> — add new optional arguments with defaults; existing queries continue to work.
                <br/><br/>This approach is called <strong>continuous / evolutionary evolution</strong>. Unlike REST where breaking changes force a version bump, GraphQL schema evolution is gentler.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type User {
  name:     String!
  fullName: String! @deprecated(reason: "Use 'name' instead")  # old field
  email:    String!
  # New field added — old clients safely ignore it
  profileImageUrl: String
}</code></pre>
              </div>`},{q:"What is the N+1 problem in GraphQL and how do you solve it?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>N+1 problem</strong> occurs when fetching a list of N items causes N additional database queries to load related data for each item — 1 query for the list + N individual queries.
                <br/><br/><strong>Example:</strong> Query 10 users → for each user, load their posts → 11 DB queries total.
                <br/><br/><strong>Solution: DataLoader</strong> — batches individual loads into a single batch query and caches results within the request.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ N+1 — each user.posts call hits the DB separately
User: {
  posts: (user, _, { db }) =&gt; db.posts.findByUserId(user.id)
  // 10 users = 10 separate DB queries
}

// ✅ DataLoader — batches all user IDs into ONE query
const postsLoader = new DataLoader(async (userIds) =&gt; {
  const posts = await db.posts.findByUserIds(userIds);
  return userIds.map(id =&gt; posts.filter(p =&gt; p.userId === id));
  // SELECT * FROM posts WHERE user_id IN (1, 2, ..., 10) — 1 query!
});

User: {
  posts: (user, _, { loaders }) =&gt; loaders.posts.load(user.id)
}</code></pre>
              </div>`},{q:"What is DataLoader and how does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>DataLoader</strong> (by Meta) is a utility that provides two features for GraphQL resolvers:
                <br/><br/>1. <strong>Batching</strong> — collects all individual <code>load(key)</code> calls made within a single event loop tick, then calls the batch function with all keys at once.
                <br/>2. <strong>Caching</strong> — within a single request, calling <code>load(key)</code> with the same key multiple times returns the cached promise (no duplicate DB queries).
                <br/><br/><strong>Create a new DataLoader per request</strong> (in the context factory) — never share across requests to avoid stale data.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Context — new loaders per request
context: ({ req }) =&gt; ({
  user: getUser(req),
  loaders: {
    users: new DataLoader(ids =&gt; batchLoadUsers(ids)),
    posts: new DataLoader(userIds =&gt; batchLoadPostsByUser(userIds)),
  }
});

// Batch function — called once with all accumulated keys
async function batchLoadUsers(ids) {
  const users = await db.query('SELECT * FROM users WHERE id = ANY($1)', [ids]);
  return ids.map(id =&gt; users.find(u =&gt; u.id === id));
}</code></pre>
              </div>`},{q:"What are <code>input</code> types in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Input types</strong> are like object types but used exclusively as <strong>arguments</strong> to mutations and queries. You cannot query their fields directly — they are input-only. They are declared with the <code>input</code> keyword.
                <br/><br/><strong>Why use input types?</strong> Without them, you'd need to list every argument individually in the mutation signature. Input types group related args and make reuse easy (the same input can be used by create and update mutations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Input type definition
input CreateUserInput {
  name:     String!
  email:    String!
  password: String!
  role:     UserRole = USER   # default value
}

# Used in mutation
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: CreateUserInput!): User!
}

# Query usage
mutation {
  createUser(input: { name: "Alice", email: "a@test.com", password: "s3cr3t" }) {
    id name
  }
}</code></pre>
              </div>`},{q:"How do you implement pagination in GraphQL (Cursor vs Offset)?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Two pagination approaches:
                <br/><br/><strong>Offset pagination</strong> — simple (page/size or skip/take). Easy to implement but unreliable for frequently changing data (new items cause duplicates/gaps across pages).
                <br/><br/><strong>Cursor-based pagination (Relay Connections)</strong> — uses an opaque cursor pointing to a specific item. More stable; recommended for large or live datasets.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Cursor-based — Relay Connection spec
type UserConnection {
  edges:    [UserEdge!]!
  pageInfo: PageInfo!
}
type UserEdge { cursor: String!; node: User! }
type PageInfo { hasNextPage: Boolean!; endCursor: String }

type Query {
  users(first: Int, after: String): UserConnection!  # forward pagination
}

# Client query
query {
  users(first: 10, after: "cursor123") {
    edges { node { name email } cursor }
    pageInfo { hasNextPage endCursor }
  }
}</code></pre>
              </div>`},{q:"What is caching in GraphQL and what are the challenges?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL caching is more complex than REST because:
                <br/><br/>• All requests go to a <strong>single URL via POST</strong> — HTTP GET-based CDN caching doesn't apply by default.
                <br/>• Query shape varies per client — the same resource may be requested in many different forms.
                <br/><br/><strong>Caching strategies:</strong>
                <br/>1. <strong>Persisted Queries</strong> — register queries with a server-side ID; GET requests with ID enable CDN caching.
                <br/>2. <strong>Apollo Client normalised cache</strong> — client-side cache keyed by type + ID. Automatically updates when mutations return data.
                <br/>3. <strong>HTTP GET + Automatic Persisted Queries (APQ)</strong> — first request sends hash; server returns query text if hash is unknown.
                <br/>4. <strong>Redis/server-side cache</strong> — cache resolver results by key for expensive computations.
              </p>`},{q:"What is a GraphQL subscription? How does it work?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>subscription</strong> is the third GraphQL operation type (alongside query and mutation). It establishes a <strong>persistent connection</strong> (usually via WebSocket) and pushes updates to the client whenever the subscribed event occurs on the server.
                <br/><br/><strong>Use cases:</strong> live chat, real-time notifications, live dashboards, collaborative editing.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Schema
type Subscription {
  messageAdded(roomId: ID!): Message!
}

# Client subscribes
subscription {
  messageAdded(roomId: "general") {
    id text author { name } createdAt
  }
}

# Server resolver — publishes on mutation
Mutation: {
  sendMessage: async (_, args, { pubsub }) =&gt; {
    const msg = await db.messages.create(args);
    pubsub.publish('MESSAGE_ADDED', { messageAdded: msg, roomId: args.roomId });
    return msg;
  }
},
Subscription: {
  messageAdded: {
    subscribe: (_, { roomId }, { pubsub }) =&gt;
      pubsub.asyncIterator(\`MESSAGE_ADDED_\${roomId}\`)
  }
}</code></pre>
              </div>`},{q:"What are mutations and how do you structure them well?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Mutations modify server-side data. Best practices for structuring mutations:
                <br/><br/>1. <strong>Use input types</strong> — group arguments in a single <code>input</code> argument.
                <br/>2. <strong>Return the modified object</strong> — let the client update its local cache without a separate query.
                <br/>3. <strong>Return an error union or result type</strong> — return either the success data or typed error, enabling better client-side error handling.
                <br/>4. <strong>Name clearly</strong> — use verb + noun: <code>createUser</code>, <code>updatePost</code>, <code>deleteComment</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Result type pattern (error union)
union CreateUserResult = User | ValidationError | DuplicateEmailError

type Mutation {
  createUser(input: CreateUserInput!): CreateUserResult!
}

# Client handles both success and error
mutation {
  createUser(input: { email: "a@b.com", name: "Alice" }) {
    ... on User            { id name email }
    ... on ValidationError { field message }
    ... on DuplicateEmailError { message suggestedEmail }
  }
}</code></pre>
              </div>`},{q:"How do you organise a large GraphQL schema?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Large GraphQL schemas should be modularised — splitting types, queries, mutations, and resolvers into separate files by domain.
                <br/><br/><strong>Approaches:</strong>
                <br/>1. <strong>Schema stitching</strong> — merge multiple schema objects into one (older approach).
                <br/>2. <strong>SDL + resolvers per module</strong> — each domain (users, orders, products) exports its own typeDefs + resolvers; merge at server setup.
                <br/>3. <strong>Apollo Federation</strong> — each microservice exposes its own subgraph; a gateway composes them into a supergraph (best for microservices).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// users/schema.js
export const typeDefs = gql\`
  type User { id: ID! name: String! }
  extend type Query { user(id: ID!): User }
\`;
export const resolvers = { Query: { user: (_, { id }, { db }) =&gt; db.users.find(id) } };

// server.js — merge all modules
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
const server = new ApolloServer({
  typeDefs:  mergeTypeDefs([userTypeDefs, orderTypeDefs]),
  resolvers: mergeResolvers([userResolvers, orderResolvers]),
});</code></pre>
              </div>`},{q:"What are enum types in GraphQL?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>enum</strong> (enumeration) type restricts a field to a set of predefined, named values. Unlike scalars, enums are validated by GraphQL — passing an invalid value causes a validation error before the resolver is called.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>enum OrderStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

type Order {
  id:     ID!
  status: OrderStatus!    # only these 5 values are valid
}

type Query {
  ordersByStatus(status: OrderStatus!): [Order!]!
}</code></pre>
              </div>`}]},{id:"day19",day:19,title:"GraphQL Advanced",topics:["Batching","Performance Optimization","Security","DDoS & Injection Protection","Federated Schemas","Custom Directives","Serverless GraphQL","Real-time Subscriptions","Query Depth & Complexity","Schema Stitching","Persisted Queries"],questions:[{q:"What is batching in GraphQL and what is its impact on performance?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Batching</strong> is the process of combining multiple individual resource loads into a single bulk operation — typically a single database query or API call. In GraphQL, DataLoader handles batching automatically at the resolver level.
                <br/><br/><strong>Impact on performance:</strong>
                <br/>• Reduces database round trips from N to 1 for related data (solves N+1).
                <br/>• Reduces network overhead when calling external APIs.
                <br/>• Reduces latency significantly for queries with deep nested relationships.
                <br/><br/><strong>Query batching</strong> (different from DataLoader batching): Some GraphQL clients (Apollo) can batch multiple operations into a single HTTP request: <code>[{ query: Q1 }, { query: Q2 }]</code> sent in one POST. The server processes them together. Requires the server to support array request bodies.
              </p>`},{q:"How can you optimize GraphQL queries for performance with deeply nested data?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>DataLoader</strong> — batch and cache all individual resolver DB calls.
                <br/>2. <strong>Query depth limiting</strong> — reject queries deeper than a threshold (e.g., depth 7) to prevent exponential DB traversal.
                <br/>3. <strong>Query complexity analysis</strong> — assign a cost to each field; reject queries exceeding a total complexity budget.
                <br/>4. <strong>Persisted queries</strong> — clients register queries by hash; server executes the pre-validated version (no parsing/validation overhead per request).
                <br/>5. <strong>Field selection analysis</strong> — use <code>info.fieldNodes</code> in resolvers to only <code>JOIN</code> tables for fields the client actually requested.
                <br/>6. <strong>Caching</strong> — Redis cache for expensive resolver results with appropriate TTLs.
                <br/>7. <strong>N+1 profiling</strong> — use <code>apollo-tracing</code> or <code>opentelemetry</code> to find expensive resolvers.
              </p>`},{q:"What are the security considerations when exposing a GraphQL API publicly?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Authentication &amp; authorization</strong> — verify JWT/session tokens; check permissions in every resolver.
                <br/>• <strong>Disable introspection in production</strong> — prevents attackers from mapping your entire API.
                <br/>• <strong>Query depth limiting</strong> — prevent deeply nested queries from causing exponential DB traversal.
                <br/>• <strong>Query complexity limiting</strong> — reject queries that are too expensive.
                <br/>• <strong>Rate limiting</strong> — limit requests per IP/user to prevent abuse.
                <br/>• <strong>Input validation and sanitization</strong> — validate all arguments; use parameterised queries for DB operations.
                <br/>• <strong>Field-level authorization</strong> — some fields should only be visible to admins.
                <br/>• <strong>Never expose stack traces</strong> — format errors to hide internal details.
                <br/>• <strong>CORS configuration</strong> — restrict allowed origins.
                <br/>• <strong>Persisted queries in production</strong> — only allow known pre-registered queries.
              </p>`},{q:"How do you protect against SQL injection and DDoS attacks in a GraphQL API?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>SQL Injection prevention:</strong>
                <br/>• Use <strong>parameterised queries / prepared statements</strong> — never concatenate user input into SQL strings.
                <br/>• Use an ORM (Sequelize, TypeORM, Prisma) — they use parameterised queries internally.
                <br/>• Validate all input types with GraphQL's type system + additional validators.
                <br/>• Principle of least privilege — DB user should have minimal permissions.
                <br/><br/><strong>DDoS prevention:</strong>
                <br/>• <strong>Rate limiting</strong> — throttle by IP, user, or token (use libraries like graphql-rate-limit).
                <br/>• <strong>Query complexity analysis</strong> — reject overly expensive queries before execution.
                <br/>• <strong>Query depth limiting</strong> — block pathologically deep queries.
                <br/>• <strong>Timeouts</strong> — set resolver execution timeouts.
                <br/>• <strong>WAF (Web Application Firewall)</strong> — detect and block attack patterns at the network layer.
                <br/>• <strong>Persisted queries</strong> — only allow pre-registered queries; block arbitrary ones.
              </p>`},{q:"What are the benefits and challenges of federated GraphQL schemas in a microservices architecture?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apollo Federation</strong> allows multiple independent GraphQL services (subgraphs) to each own a part of the schema. A gateway composes them into a unified supergraph that clients query as a single API.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Team autonomy</strong> — each team owns and deploys their subgraph independently.
                <br/>• <strong>Scalability</strong> — each subgraph scales independently.
                <br/>• <strong>Single API</strong> — clients see one unified schema.
                <br/>• <strong>Entity sharing</strong> — types like <code>User</code> can be extended across subgraphs.
                <br/><br/><strong>Challenges:</strong>
                <br/>• <strong>Schema consistency</strong> — breaking changes in one subgraph affect the composition.
                <br/>• <strong>Cross-service authorization</strong> — auth context must propagate correctly.
                <br/>• <strong>Distributed query planning</strong> — gateway must optimally plan which subgraphs to call.
                <br/>• <strong>Operational complexity</strong> — more moving parts to monitor and deploy.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Users subgraph — defines and owns User
type User @key(fields: "id") {
  id:   ID!
  name: String!
}

# Orders subgraph — extends User with order data
extend type User @key(fields: "id") {
  id:     ID! @external
  orders: [Order!]!
}</code></pre>
              </div>`},{q:"How can you create custom directives in GraphQL and what are some use cases?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Custom directives are defined in the schema with <code>directive @name(args) on LOCATION</code>. The server-side implementation transforms schema fields or resolvers when the directive is present.
                <br/><br/><strong>Common use cases:</strong>
                <br/>• <code>@auth(role: "ADMIN")</code> — field-level authorization.
                <br/>• <code>@deprecated(reason: "...")</code> — built-in but a good model.
                <br/>• <code>@rateLimit(max: 10, window: "1m")</code> — per-field rate limiting.
                <br/>• <code>@cache(maxAge: 300)</code> — field-level caching TTL.
                <br/>• <code>@upper</code> — transform string response to uppercase.
                <br/>• <code>@validate(min: 0, max: 100)</code> — input validation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// Schema definition
const typeDefs = gql\`
  directive @upper on FIELD_DEFINITION
  directive @auth(role: String!) on FIELD_DEFINITION

  type User {
    name:  String! @upper
    email: String!
    adminData: String @auth(role: "ADMIN")
  }
\`;

// Directive implementation (using @graphql-tools/schema)
class UpperDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve } = field;
    field.resolve = async (...args) =&gt; {
      const result = await resolve.apply(this, args);
      return typeof result === 'string' ? result.toUpperCase() : result;
    };
  }
}</code></pre>
              </div>`},{q:"What is the role of serverless functions in a serverless GraphQL architecture?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In a <strong>serverless GraphQL architecture</strong>, the GraphQL server (including all resolvers) runs as a <strong>serverless function</strong> (AWS Lambda, Vercel Function, Cloudflare Worker) that spins up on demand instead of running a persistent server.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Cost</strong> — pay only for actual invocations; idle time costs nothing.
                <br/>• <strong>Auto-scaling</strong> — platform scales to traffic automatically.
                <br/>• <strong>No server management</strong> — no patching, health checks, or scaling configuration.
                <br/><br/><strong>Challenges:</strong>
                <br/>• <strong>Cold starts</strong> — first invocation has latency (100ms–2s); mitigate with provisioned concurrency.
                <br/>• <strong>Stateless</strong> — no persistent connections; use RDS Proxy for DB connection pooling.
                <br/>• <strong>Subscriptions</strong> — WebSocket subscriptions are difficult; use managed pub/sub (AWS AppSync, Ably).
                <br/>• <strong>Execution time limits</strong> — Lambda has a 15-min max; long-running resolvers must be async.
              </p>`},{q:"How do you implement real-time updates in GraphQL using subscriptions?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL subscriptions use a <strong>persistent WebSocket connection</strong>. When a mutation triggers an event, the server pushes data to all subscribed clients matching the event filter.
                <br/><br/><strong>Key components:</strong>
                <br/>1. <strong>Transport layer</strong> — WebSocket server (<code>graphql-ws</code> library, Apollo Server subscriptions).
                <br/>2. <strong>PubSub engine</strong> — in-memory for single server (<code>PubSub</code>); Redis for distributed/multi-pod.
                <br/>3. <strong>Subscription resolver</strong> — <code>subscribe</code> function returns an async iterator; <code>resolve</code> transforms the event payload.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Redis-based PubSub for distributed deployments
const { RedisPubSub } = require('graphql-redis-subscriptions');
const pubsub = new RedisPubSub({ connection: redisConfig });

const resolvers = {
  Mutation: {
    sendMessage: async (_, args, { pubsub, db }) =&gt; {
      const msg = await db.messages.create(args);
      await pubsub.publish('NEW_MESSAGE', { newMessage: msg });
      return msg;
    }
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        () =&gt; pubsub.asyncIterator('NEW_MESSAGE'),
        (payload, variables) =&gt; payload.newMessage.roomId === variables.roomId
      )
    }
  }
};</code></pre>
              </div>`},{q:"What is query depth limiting in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Query depth limiting</strong> restricts how deeply a client can nest fields in a query. Without it, a malicious client could craft a query like <code>users { friends { friends { friends { ... } } } }</code> that triggers exponential database traversal and crashes the server.
                <br/><br/>Implement with the <code>graphql-depth-limit</code> library — add it as a validation rule before execution.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import depthLimit from 'graphql-depth-limit';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(7)]  // reject queries deeper than 7 levels
});

// ❌ This query with depth 8+ would be rejected with a validation error
query {
  users {              // depth 1
    friends {          // depth 2
      friends {        // depth 3
        friends { ...  // depth 4+
        }
      }
    }
  }
}</code></pre>
              </div>`},{q:"What is query complexity analysis in GraphQL?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Query complexity analysis</strong> assigns a "cost" to each field in a query and rejects the query if the total cost exceeds a configured maximum. This prevents resource-intensive queries without being too strict (simple deeply-nested queries might be cheap; flat queries with expensive resolvers can still be caught).
                <br/><br/>Use the <code>graphql-query-complexity</code> library. Assign higher costs to fields that do heavy DB work or return large lists.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { createComplexityRule, simpleEstimator, fieldExtensionsEstimator } from 'graphql-query-complexity';

const complexityRule = createComplexityRule({
  maximumComplexity: 1000,
  estimators: [
    fieldExtensionsEstimator(),     // use schema-defined complexity hints
    simpleEstimator({ defaultComplexity: 1 }),
  ],
  onComplete: (complexity) =&gt; console.log('Query complexity:', complexity),
});

// Schema field with custom complexity
type Query {
  users(first: Int): [User!]!
    @complexity(value: 5, multipliers: ["first"])  # 5 * first value
}</code></pre>
              </div>`},{q:"What is Apollo Federation and how does it work?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apollo Federation</strong> is a specification and set of tools that allow multiple GraphQL servers (subgraphs) to collaborate to form a single unified API (supergraph) through a router/gateway.
                <br/><br/><strong>Key concepts:</strong>
                <br/>• <strong>Subgraph</strong> — individual GraphQL service (Users service, Orders service, etc.) with its own schema.
                <br/>• <strong>Entity</strong> — a type that can be shared and extended across subgraphs. Identified by <code>@key</code> directive.
                <br/>• <strong>Router/Gateway</strong> — receives client queries, plans execution across subgraphs, fetches data, and merges responses.
                <br/>• <strong>Reference Resolver</strong> — the <code>__resolveReference</code> function lets a subgraph resolve its own entity when requested by the gateway.
              </p>`},{q:"What are persisted queries and why are they important?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Persisted Queries (APQ - Automatic Persisted Queries)</strong> is a protocol where GraphQL operation text is replaced by a hash. Instead of sending the full query string with every request, the client sends only the hash. If the server has the query cached by that hash, it executes it; otherwise it asks the client to send the full text once to register it.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Reduced request size</strong> — small hash instead of full query text.
                <br/>• <strong>GET request enablement</strong> — with APQ, queries can use HTTP GET (hash in URL) → CDN caching becomes possible.
                <br/>• <strong>Security</strong> — in strict mode, only pre-registered queries are executed (no arbitrary queries from attackers).
              </p>`},{q:"What is schema stitching vs Apollo Federation?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect                Schema Stitching            Apollo Federation
------------------    -------------------------   ---------------------------
Architecture          Merge schemas in gateway    Each service owns its schema
Team ownership        Gateway team owns all       Each team owns their subgraph
Service coupling      Tight (gateway has schemas) Loose (contract-based)
Type extension        Manual in gateway           Native (@key, @extends)
Queries               Gateway rewrites queries    Query planning / composition
Use case              Legacy migration            Microservices (greenfield)
Maintenance           Heavy                       Lighter per team</code></pre>
              </div>`},{q:"How does GraphQL handle file uploads?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> File uploads are not part of the GraphQL spec — it was designed for structured JSON data. They can be handled via:
                <br/><br/>1. <strong><code>graphql-multipart-request-spec</code></strong> (most common) — uses a multipart form POST. The <code>graphql-upload</code> library provides an <code>Upload</code> scalar and middleware. Resolvers receive a <code>Promise&lt;FileUpload&gt;</code>.
                <br/>2. <strong>Separate REST endpoint</strong> — upload files via a REST/multipart endpoint, get back a URL, then pass the URL as a string argument to a GraphQL mutation (simpler, cleaner separation).
                <br/><br/><strong>Recommendation:</strong> For production systems, option 2 (separate upload endpoint + pass URL to GraphQL) is cleaner and avoids memory issues with large files in the GraphQL server.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">scalar Upload

type Mutation {
  uploadAvatar(file: Upload!): String!  # returns the uploaded file URL
}</code></pre>
              </div>`},{q:"What is schema-first vs code-first GraphQL development?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>Schema-first</strong> — write the schema SDL (<code>.graphql</code> file) first, then implement resolvers to match. Schema is the single source of truth; great for team API design discussions and code generation.
                <br/>• <strong>Code-first</strong> — write resolvers and types in code (e.g., TypeScript with NestJS GraphQL, Pothos, TypeGraphQL); the schema SDL is auto-generated from the code.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Approach         Schema-first                Code-first
-----------      ----------------------      -------------------------
Workflow         SDL → Resolvers             Code → Generated SDL
Source of truth  .graphql SDL files          TypeScript/Java code
Team process     API design review first     Dev-driven schema
Type safety      Manual sync                 Auto-generated types
Frameworks       Apollo Server, gqlgen       NestJS, TypeGraphQL, Pothos
Best for         API-design-heavy teams      Backend-first teams</code></pre>
              </div>`}]},{id:"day20",day:20,title:"Full-Stack Capstone: React + GraphQL + Java",topics:["Apollo Client","useQuery / useMutation","Apollo Cache","Spring for GraphQL","Real-time Integration","REST vs GraphQL Trade-offs","Optimistic UI","Production Debugging","Migration Strategy","Best Practices"],questions:[{q:"How do you connect a React app to a GraphQL API with Apollo Client?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apollo Client is the most popular GraphQL client for React. Setup involves creating an <code>ApolloClient</code> instance with the API URL and cache, then wrapping the app in <code>ApolloProvider</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: 'https://api.example.com/graphql' });

// Add JWT auth header to every request
const authLink = setContext((_, { headers }) =&gt; ({
  headers: { ...headers, authorization: \`Bearer \${getToken()}\` }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Wrap app
root.render(
  &lt;ApolloProvider client={client}&gt;
    &lt;App /&gt;
  &lt;/ApolloProvider&gt;
);</code></pre>
              </div>`},{q:"What is <code>useQuery</code> and <code>useMutation</code> in Apollo Client?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>useQuery(QUERY, options)</code> — executes a query when the component mounts (and re-executes when variables change). Returns <code>{ data, loading, error, refetch }</code>.
                <br/>• <code>useMutation(MUTATION, options)</code> — returns a tuple <code>[mutateFn, { data, loading, error }]</code>. The mutation runs when you call <code>mutateFn({ variables })</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const GET_USERS = gql\`query { users { id name email } }\`;

function UserList() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return &lt;Spinner /&gt;;
  if (error)   return &lt;Error message={error.message} /&gt;;
  return &lt;ul&gt;{data.users.map(u =&gt; &lt;li key={u.id}&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;
}

const DELETE_USER = gql\`mutation Delete($id: ID!) { deleteUser(id: $id) }\`;

function UserRow({ user }) {
  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],   // refresh list after delete
  });
  return &lt;button onClick={() =&gt; deleteUser({ variables: { id: user.id } })}&gt;Delete&lt;/button&gt;;
}</code></pre>
              </div>`},{q:"How does Apollo Client's normalised cache work?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apollo Client's <code>InMemoryCache</code> stores query results in a <strong>normalised</strong> flat store — each object is stored by its <strong>cache key</strong> (<code>__typename:id</code>, e.g., <code>User:42</code>). When multiple queries return the same object, they share the same cache entry.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Automatic cache updates</strong> — if a mutation returns a User with the same ID, all components displaying that user automatically re-render with the new data.
                <br/>• <strong>Deduplication</strong> — the same object is stored once regardless of how many queries fetched it.
                <br/><br/><strong>Manual cache updates</strong> — for mutations that don't return the updated object (e.g., delete), manually update the cache or call <code>refetchQueries</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// Manual cache update after delete
const [deletePost] = useMutation(DELETE_POST, {
  update(cache, { data: { deletePost } }) {
    cache.modify({
      fields: {
        posts(existingRefs, { readField }) {
          return existingRefs.filter(ref =&gt; readField('id', ref) !== deletePost.id);
        }
      }
    });
  }
});</code></pre>
              </div>`},{q:"How do you handle authentication in a React + GraphQL full-stack application?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>1. Login:</strong>
                <br/>Call a login mutation → server validates credentials → returns a JWT access token (+ refresh token).
                <br/><br/><strong>2. Token storage:</strong>
                <br/>• Store short-lived access token in memory (React state) — most secure.
                <br/>• Store refresh token in <code>httpOnly</code> cookie (inaccessible to JS — prevents XSS theft).
                <br/><br/><strong>3. Apollo Client adds token to requests:</strong>
                <br/>Use <code>authLink</code> middleware to inject <code>Authorization: Bearer &lt;token&gt;</code> on every GraphQL request.
                <br/><br/><strong>4. Token refresh:</strong>
                <br/>When a request fails with <code>UNAUTHENTICATED</code>, use Apollo Link error handler to call the refresh token endpoint and retry the request.
                <br/><br/><strong>5. Server validates token in context factory</strong> — attaches user to context, checked in resolvers.
              </p>`},{q:"How do you architect a Spring Boot + GraphQL backend?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use <strong>Spring for GraphQL</strong> (<code>spring-boot-starter-graphql</code>, GA since Spring Boot 2.7 / Spring 6). It integrates with Spring MVC or WebFlux and uses the <strong>schema-first</strong> approach.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Schema: src/main/resources/graphql/schema.graphqls
// type Query { user(id: ID!): User }
// type User { id: ID!; name: String!; email: String! }

// 2. Controller — annotate with @QueryMapping, @MutationMapping
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @QueryMapping
    public User user(@Argument String id) {
        return userService.findById(id);
    }

    @MutationMapping
    public User createUser(@Argument String name, @Argument String email) {
        return userService.create(name, email);
    }

    @SchemaMapping(typeName = "User")
    public List&lt;Post&gt; posts(User user) {   // resolver for User.posts field
        return userService.getPostsByUserId(user.getId());
    }
}</code></pre>
              </div>`},{q:"What is Spring for GraphQL and how does it differ from graphql-java?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>graphql-java</strong> — the low-level GraphQL implementation library for Java. You configure type wiring, data fetchers, and execution manually. Maximum control, more boilerplate.
                <br/>• <strong>Spring for GraphQL</strong> (spring-graphql) — Spring Boot integration built on top of graphql-java. Provides:
                  <br/>&nbsp;&nbsp;— Auto-loads <code>.graphqls</code> schema files from classpath.
                  <br/>&nbsp;&nbsp;— <code>@QueryMapping</code>, <code>@MutationMapping</code>, <code>@SubscriptionMapping</code> annotations.
                  <br/>&nbsp;&nbsp;— <code>@SchemaMapping</code> for field resolvers.
                  <br/>&nbsp;&nbsp;— Integration with Spring Security, Actuator, testing utilities.
                  <br/>&nbsp;&nbsp;— GraphiQL UI at <code>/graphiql</code> in dev mode.
                <br/><br/>Use Spring for GraphQL for new Spring Boot projects; use graphql-java directly only when fine-grained control is essential.
              </p>`},{q:"How do you implement real-time updates in a React app using GraphQL subscriptions with Apollo?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Configure Apollo Client with a WebSocket link for subscriptions alongside the HTTP link for queries/mutations. Use <code>useSubscription</code> hook in the component.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink  = new GraphQLWsLink(createClient({ url: 'wss://api.example.com/graphql' }));
const httpLink = new HttpLink({ uri: 'https://api.example.com/graphql' });

// Route: subscriptions → WebSocket; queries/mutations → HTTP
const splitLink = split(
  ({ query }) =&gt; {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' &amp;&amp; operation === 'subscription';
  },
  wsLink, httpLink
);

const client = new ApolloClient({ link: splitLink, cache: new InMemoryCache() });

// Component
const NEW_MESSAGE = gql\`subscription { newMessage { text author } }\`;

function LiveChat() {
  const { data } = useSubscription(NEW_MESSAGE);
  return &lt;div&gt;{data?.newMessage?.text}&lt;/div&gt;;
}</code></pre>
              </div>`},{q:"What are the trade-offs between REST and GraphQL for a microservices architecture?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>GraphQL advantages in microservices:</strong>
                <br/>• Single API gateway that aggregates multiple services — no multiple round-trips from the frontend.
                <br/>• BFF (Backend for Frontend) pattern — each client gets exactly the data it needs from one endpoint.
                <br/>• Schema evolution without versioning.
                <br/><br/><strong>REST advantages in microservices:</strong>
                <br/>• <strong>HTTP caching</strong> — CDN, browser, and proxy caching work naturally.
                <br/>• <strong>Simpler tooling</strong> — Postman, curl, browser URL bar all work.
                <br/>• <strong>Established patterns</strong> — well-understood error codes, idempotency.
                <br/>• <strong>Better for large file ops</strong> — file uploads, streaming.
                <br/><br/><strong>Hybrid approach</strong> (common in practice): Internal service-to-service communication uses REST/gRPC; the API gateway exposes GraphQL to frontend clients.
              </p>`},{q:"What is optimistic UI and how do you implement it with Apollo Client?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Optimistic UI</strong> immediately updates the UI with the expected result of a mutation <em>before</em> the server confirms it — making the app feel instant. If the server returns an error, the optimistic update is rolled back automatically.
                <br/><br/>In Apollo Client, pass an <code>optimisticResponse</code> option to <code>useMutation</code>. Apollo writes this to the cache immediately, then replaces it with the real server response.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const [likePost] = useMutation(LIKE_POST, {
  optimisticResponse: {
    likePost: {
      __typename: 'Post',
      id: post.id,
      likesCount: post.likesCount + 1,  // assume success
      likedByMe: true,
    }
  }
  // Apollo updates cache immediately; rolls back on server error
});</code></pre>
              </div>`},{q:"How do you test a React component that fetches data from a GraphQL API?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use Apollo's <code>MockedProvider</code> to intercept GraphQL operations in tests. Provide mock responses for each query/mutation the component makes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { MockedProvider } from '@apollo/client/testing';

const mocks = [{
  request: { query: GET_USER, variables: { id: '1' } },
  result:  { data: { user: { id: '1', name: 'Alice', email: 'a@test.com' } } }
}];

test('renders user name after loading', async () =&gt; {
  render(
    &lt;MockedProvider mocks={mocks} addTypename={false}&gt;
      &lt;UserProfile userId="1" /&gt;
    &lt;/MockedProvider&gt;
  );

  expect(screen.getByRole('progressbar')).toBeInTheDocument(); // loading
  expect(await screen.findByText('Alice')).toBeInTheDocument();  // success
});

test('handles error state', async () =&gt; {
  const errorMock = [{ request: { query: GET_USER, variables: { id: '1' } },
    error: new Error('Network error') }];
  render(&lt;MockedProvider mocks={errorMock}&gt;&lt;UserProfile userId="1" /&gt;&lt;/MockedProvider&gt;);
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});</code></pre>
              </div>`},{q:"How would you migrate a REST API to GraphQL in a Spring Boot application?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A safe, incremental migration strategy:
                <br/><br/>1. <strong>Add GraphQL alongside REST</strong> — don't remove REST endpoints immediately. Run both in parallel.
                <br/>2. <strong>Use existing services</strong> — GraphQL resolvers call the same service layer methods as REST controllers. No business logic duplication.
                <br/>3. <strong>Start with queries</strong> — migrate read operations first; mutations later.
                <br/>4. <strong>Migrate clients gradually</strong> — update frontend/mobile clients to use GraphQL one endpoint at a time.
                <br/>5. <strong>Deprecate REST endpoints</strong> — once GraphQL coverage is complete and clients have migrated.
                <br/>6. <strong>Remove REST</strong> — only after all consumers have switched.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Existing REST controller — keep it
@RestController
class UserRestController {
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable String id) { return userService.findById(id); }
}

// New GraphQL controller — same service, new interface
@Controller
class UserGraphQLController {
    @QueryMapping
    User user(@Argument String id) { return userService.findById(id); }
}</code></pre>
              </div>`},{q:"Describe the debugging process for a production issue in a React + GraphQL + Java app.",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Systematic layer-by-layer approach (similar to WAR room in Java section):
                <br/><br/>1. <strong>Identify the symptom</strong> — user report, alert, or Sentry error. What operation fails? Which user/environment?
                <br/>2. <strong>Check frontend (React)</strong>
                  <br/>&nbsp;&nbsp;— Browser console: JavaScript errors, network errors.
                  <br/>&nbsp;&nbsp;— Apollo DevTools: inspect cache, failed queries, error responses.
                  <br/>&nbsp;&nbsp;— Network tab: what request was sent? What response came back?
                <br/>3. <strong>Check GraphQL layer</strong>
                  <br/>&nbsp;&nbsp;— Apollo Studio / GraphQL Playground: reproduce the query manually.
                  <br/>&nbsp;&nbsp;— Check the <code>errors</code> array in the response.
                  <br/>&nbsp;&nbsp;— Check trace/span data for which resolver failed.
                <br/>4. <strong>Check Java/Spring Boot backend</strong>
                  <br/>&nbsp;&nbsp;— Application logs (Kibana/Splunk): find the request by correlation ID / trace ID.
                  <br/>&nbsp;&nbsp;— Look for exceptions, slow queries, DB errors.
                  <br/>&nbsp;&nbsp;— Actuator /health, /metrics.
                <br/>5. <strong>Fix → Deploy → Validate → Post-mortem</strong>.
              </p>`},{q:"What are best practices for a production React + GraphQL + Java Spring Boot application?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>React Frontend:</strong>
                <br/>• Lazy load routes and heavy components.
                <br/>• Use React Query or Apollo Client for data fetching (no manual useEffect + fetch).
                <br/>• Implement Error Boundaries for graceful degradation.
                <br/>• CSP headers, sanitize user input, avoid dangerouslySetInnerHTML.
                <br/><br/><strong>GraphQL Layer:</strong>
                <br/>• Enable query depth + complexity limits.
                <br/>• Use DataLoader for all resolver DB calls.
                <br/>• Disable introspection in production.
                <br/>• Use persisted queries to prevent arbitrary query abuse.
                <br/>• Mask internal errors in responses.
                <br/><br/><strong>Java Spring Boot:</strong>
                <br/>• Use constructor injection, avoid field injection.
                <br/>• @Transactional only on service methods.
                <br/>• Use Flyway/Liquibase for DB migrations.
                <br/>• Expose only health and metrics actuator endpoints in production.
                <br/><br/><strong>Cross-cutting:</strong>
                <br/>• Distributed tracing with OpenTelemetry (trace ID from React → GraphQL → Java → DB).
                <br/>• Centralised structured logging (JSON logs, correlation IDs).
                <br/>• CI/CD pipeline with automated tests, security scans (Sonar, OWASP), Docker build, K8s deploy.
              </p>`},{q:"What are the key differences between Apollo Client, React Query + fetch, and SWR for a GraphQL backend?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect            Apollo Client              React Query + fetch/gql      SWR + fetch/gql
-----------       ----------------------     --------------------------   ----------------------
GraphQL aware?    Yes (native)               No (generic)                 No (generic)
Cache type        Normalised by type+id      Query-key based              Query-key based
Optimistic UI     Built-in                   Manual                       Manual
Subscriptions     Built-in (WS link)         Manual                       Manual
Bundle size       ~47 KB                     ~13 KB                       ~4 KB
Best for          Full Apollo stack          React Query users, REST+GQL  Lightweight SWR fans
Mutation cache    Auto-normalised             Manual invalidation          Manual invalidation
DevTools          Apollo DevTools             React Query DevTools         None official</code></pre>
              </div>
              <p class="accordion-answer">
                <strong>Recommendation:</strong> Use <strong>Apollo Client</strong> when your team is already on the Apollo ecosystem (Apollo Server, Federation). Use <strong>React Query</strong> when mixing REST + GraphQL or wanting a smaller, more flexible cache. <strong>SWR</strong> for extremely lightweight apps that only need basic stale-while-revalidate caching.
              </p>`},{q:"How do you implement infinite scroll / pagination in React with GraphQL?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use Apollo Client's <code>fetchMore</code> with a cursor-based connection, combined with an Intersection Observer to trigger loading when the user scrolls to the bottom.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const { data, fetchMore, loading } = useQuery(GET_POSTS, {
  variables: { first: 10 }
});

const loadMore = () =&gt; {
  fetchMore({
    variables: { after: data.posts.pageInfo.endCursor },
    updateQuery: (prev, { fetchMoreResult }) =&gt; ({
      posts: {
        ...fetchMoreResult.posts,
        edges: [...prev.posts.edges, ...fetchMoreResult.posts.edges]
      }
    })
  });
};

// Trigger loadMore when last item enters viewport
const lastItemRef = useRef(null);
useEffect(() =&gt; {
  const observer = new IntersectionObserver(([entry]) =&gt; {
    if (entry.isIntersecting &amp;&amp; data?.posts.pageInfo.hasNextPage) loadMore();
  });
  if (lastItemRef.current) observer.observe(lastItemRef.current);
  return () =&gt; observer.disconnect();
});</code></pre>
              </div>`}]},{id:"day21",day:21,title:"Apache Kafka",topics:["ISR & Replicas","Message Transfer","Components","Core APIs","Partitions","Zookeeper","Leader & Follower","Topic Replication","Consumer Groups","Message Size","Features","Geo-Replication","Schema Registry","Clusters","Partitioning Key"],questions:[{q:"What does it mean if a replica is not an In-Sync Replica (ISR) for a long time?",tag:"hard",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A replica that falls out of the <strong>ISR (In-Sync Replica)</strong> set for a prolonged period indicates it is <strong>lagging behind the leader</strong> and unable to keep up with the write rate. This can happen due to:
                <br/><br/>• <strong>Network issues</strong> — slow or intermittent connectivity between the broker and the leader.
                <br/>• <strong>Broker overload</strong> — the broker is CPU/IO-bound and cannot process replication fast enough.
                <br/>• <strong>Disk I/O bottleneck</strong> — slow disk causing the follower to fall behind.
                <br/>• <strong>GC pauses</strong> — long JVM garbage collection pauses on the broker.
                <br/><br/><strong>Consequences:</strong>
                <br/>• The lagging replica is removed from the ISR list. The leader will no longer wait for it before acknowledging writes (when <code>acks=all</code>).
                <br/>• If the leader fails and the only available replica is out of ISR, you face a trade-off: elect the out-of-sync replica (potential data loss) or wait (availability issue). Controlled by <code>unclean.leader.election.enable</code>.
                <br/><br/><strong>Configured by:</strong> <code>replica.lag.time.max.ms</code> — if a replica hasn't fetched from the leader within this window, it is removed from ISR.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Check ISR status
kafka-topics.sh --describe --topic my-topic --bootstrap-server localhost:9092

# Output
Topic: my-topic  Partition: 0  Leader: 1  Replicas: 1,2,3  Isr: 1,2
# Replica 3 is NOT in ISR — it has fallen behind</code></pre>
              </div>`},{q:"What are the traditional methods of message transfer? How is Kafka better than them?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Traditional methods:</strong>
                <br/>1. <strong>Point-to-Point (Message Queues)</strong> — e.g., ActiveMQ, RabbitMQ. One producer sends a message to a queue; one consumer reads it. Message is deleted after consumption. Tight coupling; doesn't scale well for many consumers.
                <br/>2. <strong>Publish-Subscribe (Pub/Sub)</strong> — one producer broadcasts to many subscribers. But messages are typically not persisted once delivered; subscribers must be online.
                <br/>3. <strong>File-based transfer / FTP</strong> — batch processing; high latency, not real-time.
                <br/>4. <strong>Database as a message bus</strong> — polling tables; inefficient, doesn't scale.
                <br/><br/><strong>How Kafka is better:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Traditional MQ          Apache Kafka
-----------      --------------------    ----------------------------
Durability       Message deleted on ack  Messages persisted on disk
Replay           Not possible            Yes — replay from any offset
Throughput       Moderate                Millions of msgs/sec
Scalability      Vertical                Horizontal (partitions)
Consumers        Single or limited       Multiple consumer groups
Ordering         Per-queue               Per-partition guarantee
Retention        Until consumed          Configurable (days/weeks)
Coupling         Tight                   Loose (decoupled)</code></pre>
              </div>`},{q:"What are the major components of Kafka?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka's architecture consists of five major components:
                <br/><br/>1. <strong>Producer</strong> — application that publishes (writes) messages to Kafka topics.
                <br/>2. <strong>Consumer</strong> — application that subscribes to (reads) messages from Kafka topics. Tracks progress via offsets.
                <br/>3. <strong>Broker</strong> — a Kafka server that stores messages. A Kafka cluster is a group of brokers. Each broker handles a set of topic partitions.
                <br/>4. <strong>Topic</strong> — a named category/feed to which records are published. Topics are split into partitions for scalability.
                <br/>5. <strong>ZooKeeper / KRaft</strong> — coordination service that manages broker metadata, leader election, and cluster state. (KRaft replaces ZooKeeper from Kafka 3.3+.)
                <br/><br/>Additional components:
                <br/>• <strong>Partition</strong> — ordered, immutable sequence of records within a topic.
                <br/>• <strong>Offset</strong> — unique sequential ID of a record within a partition.
                <br/>• <strong>Consumer Group</strong> — group of consumers sharing work across partitions.
                <br/>• <strong>Schema Registry</strong> — stores and enforces message schemas (Avro/JSON/Protobuf).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Producer ──▶ [Topic: orders]
               ├── Partition 0: [msg0][msg1][msg2]  ← Broker 1 (Leader)
               ├── Partition 1: [msg0][msg1]         ← Broker 2 (Leader)
               └── Partition 2: [msg0]               ← Broker 3 (Leader)
                         ▲
              Consumer Group A reads all partitions</code></pre>
              </div>`},{q:"Explain the four core API architecture that Kafka uses.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka provides four core APIs:
                <br/><br/>1. <strong>Producer API</strong> — allows applications to publish (send) streams of records to one or more Kafka topics. Supports sync and async sends, partitioning strategies, and compression.
                <br/><br/>2. <strong>Consumer API</strong> — allows applications to subscribe to topics and process the stream of records. Consumers maintain offsets to track their read position. Supports consumer groups for load balancing.
                <br/><br/>3. <strong>Streams API (Kafka Streams)</strong> — a client library for building real-time stream processing applications. Reads from input topics, transforms/aggregates data, and writes to output topics. Stateful processing with state stores.
                <br/><br/>4. <strong>Connector API (Kafka Connect)</strong> — a framework for building reusable connectors to integrate Kafka with external systems (databases, HDFS, S3, Elasticsearch). Source connectors import data into Kafka; Sink connectors export data from Kafka.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>External DB ──[Source Connector]──▶ Kafka ──[Sink Connector]──▶ Elasticsearch
                                      │
                               [Streams API]  ◀── transform/aggregate
                                      │
                          Producers ──┤── Consumers
                       (Producer API)     (Consumer API)</code></pre>
              </div>`},{q:"What do you mean by a Partition in Kafka?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>partition</strong> is the fundamental unit of parallelism and ordering in Kafka. Each topic is split into one or more partitions.
                <br/><br/><strong>Key characteristics:</strong>
                <br/>• <strong>Ordered log</strong> — messages within a partition are strictly ordered and assigned a sequential <strong>offset</strong> (0, 1, 2, …). Ordering is only guaranteed within a partition, not across partitions.
                <br/>• <strong>Immutable</strong> — messages are appended only; never modified or deleted (retention policy deletes based on time or size).
                <br/>• <strong>Scalability</strong> — more partitions = more parallelism. Consumers in a group are assigned different partitions.
                <br/>• <strong>Replication</strong> — each partition has one leader and N-1 follower replicas across brokers for fault tolerance.
                <br/><br/><strong>Choosing partition count:</strong> More partitions = higher throughput but more file handles and leader election overhead. Rule of thumb: partition count ≥ max consumer parallelism needed.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Create topic with 3 partitions and replication factor 3
kafka-topics.sh --create   --topic orders   --partitions 3   --replication-factor 3   --bootstrap-server localhost:9092</code></pre>
              </div>`},{q:"What do you mean by ZooKeeper in Kafka and what are its uses?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apache ZooKeeper</strong> is a distributed coordination service that Kafka (traditionally) uses for cluster management. It is a separate cluster that Kafka brokers connect to.
                <br/><br/><strong>Uses of ZooKeeper in Kafka:</strong>
                <br/>1. <strong>Broker registration</strong> — each broker registers itself in ZooKeeper when it starts. Other brokers and clients discover the cluster this way.
                <br/>2. <strong>Leader election</strong> — when a partition leader fails, ZooKeeper coordinates electing a new leader from the ISR.
                <br/>3. <strong>Topic metadata</strong> — stores partition assignments, replication factor, and configuration.
                <br/>4. <strong>Consumer offset storage</strong> — (legacy) older Kafka versions stored consumer offsets in ZooKeeper. Modern Kafka stores them in the <code>__consumer_offsets</code> internal topic.
                <br/>5. <strong>Access Control Lists (ACLs)</strong> — authorization rules stored in ZooKeeper.
                <br/><br/><strong>Note:</strong> From Kafka 3.3+, ZooKeeper is deprecated in favour of <strong>KRaft mode</strong> — Kafka's built-in Raft consensus implementation.
              </p>`},{q:"Can we use Kafka without ZooKeeper?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Yes, from Kafka 2.8+ (early access) and production-ready from Kafka 3.3+</strong> using <strong>KRaft mode</strong> (Kafka Raft metadata mode).
                <br/><br/><strong>What is KRaft?</strong>
                <br/>KRaft replaces ZooKeeper with Kafka's own Raft-based consensus protocol. Cluster metadata (broker registry, topic assignments, leader elections) is now stored in a special internal Kafka topic managed by a quorum of <strong>controller brokers</strong>.
                <br/><br/><strong>Benefits of KRaft over ZooKeeper:</strong>
                <br/>• <strong>Simpler operations</strong> — no separate ZooKeeper cluster to manage, monitor, or secure.
                <br/>• <strong>Faster recovery</strong> — fewer round-trips; partition leader election is faster.
                <br/>• <strong>Better scalability</strong> — supports millions of partitions (ZooKeeper had limits).
                <br/>• <strong>Unified security model</strong> — single system to configure.
                <br/><br/>ZooKeeper support is planned to be <strong>fully removed in Kafka 4.0</strong>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Start Kafka in KRaft mode (no ZooKeeper needed)
# Generate a cluster ID
KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

# Format log directory
bin/kafka-storage.sh format -t $KAFKA_CLUSTER_ID -c config/kraft/server.properties

# Start KRaft server
bin/kafka-server-start.sh config/kraft/server.properties</code></pre>
              </div>`},{q:"Explain the concept of Leader and Follower in Kafka.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Every partition in Kafka has exactly one <strong>Leader</strong> and zero or more <strong>Followers</strong> (replicas).
                <br/><br/><strong>Leader:</strong>
                <br/>• Handles ALL read and write requests for the partition.
                <br/>• Producers always write to the leader.
                <br/>• Consumers (by default) read from the leader.
                <br/>• There is one leader per partition per broker.
                <br/><br/><strong>Follower:</strong>
                <br/>• Passively replicates all messages from the leader.
                <br/>• Does not serve client requests (unless <code>replica.fetch.min.bytes</code> / follower fetching is configured — available in newer versions for read scaling).
                <br/>• Stays in ISR by continuously fetching from the leader.
                <br/>• Promoted to leader if the current leader fails and the follower is in ISR.
                <br/><br/><strong>Load balancing:</strong> Leadership is spread across brokers automatically. For a 3-broker cluster with 3 partitions, ideally each broker leads one partition.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Broker 1: Leader(P0),   Follower(P1), Follower(P2)
Broker 2: Follower(P0), Leader(P1),  Follower(P2)
Broker 3: Follower(P0), Follower(P1), Leader(P2)

Producer writes to P0 → goes to Broker 1 (Leader)
Followers on Broker 2 & 3 pull and replicate P0</code></pre>
              </div>`},{q:"Why is Topic Replication important in Kafka? What do you mean by ISR in Kafka?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Why Topic Replication is important:</strong>
                <br/>• <strong>Fault tolerance</strong> — if a broker goes down, partitions on that broker are automatically served by replicas on other brokers.
                <br/>• <strong>Durability</strong> — data is not lost even if a broker fails (as long as replication factor &gt; 1 and enough replicas survive).
                <br/>• <strong>High availability</strong> — leader election from replicas ensures producers/consumers can continue without intervention.
                <br/>• Configured with <code>replication.factor</code> per topic. Recommended: 3 for production.
                <br/><br/><strong>ISR (In-Sync Replica):</strong>
                <br/>ISR is the set of replicas that are fully caught up with the leader. A replica stays in ISR if it has fetched all messages from the leader within the <code>replica.lag.time.max.ms</code> window (default 30s).
                <br/><br/>When <code>acks=all</code>, the producer waits for all ISR members to acknowledge the write — ensuring the strongest durability guarantee.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Producer config — strongest durability
acks=all                       # wait for all ISR to ack
min.insync.replicas=2          # require at least 2 ISR to be in-sync
enable.idempotence=true        # exactly-once semantics</code></pre>
              </div>`},{q:"What do you understand about a consumer group in Kafka?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>consumer group</strong> is a set of consumers that cooperate to consume messages from a topic. Each partition in the topic is assigned to exactly one consumer in the group at a time, enabling parallel processing.
                <br/><br/><strong>Key rules:</strong>
                <br/>• Each message is delivered to <strong>exactly one consumer</strong> within a group (like a queue).
                <br/>• Multiple independent groups can each read the full topic independently (like pub/sub).
                <br/>• If consumers &gt; partitions, some consumers are idle.
                <br/>• If partitions &gt; consumers, some consumers handle multiple partitions.
                <br/>• <strong>Rebalancing</strong> — when a consumer joins or leaves, partitions are redistributed automatically.
                <br/><br/>Consumer groups are identified by a <code>group.id</code>. Offsets are committed per group per partition to the <code>__consumer_offsets</code> internal topic.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Topic: orders (3 partitions: P0, P1, P2)

Group A (3 consumers):          Group B (1 consumer):
  Consumer1 → P0                  Consumer reads P0, P1, P2
  Consumer2 → P1
  Consumer3 → P2

Both groups get all messages independently</code></pre>
              </div>`},{q:"What is the maximum size of a message that Kafka can receive?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> By default, the maximum message size in Kafka is <strong>1 MB (1,048,576 bytes)</strong>, controlled by the broker config <code>message.max.bytes</code>.
                <br/><br/><strong>Relevant configs (all must be aligned):</strong>
                <br/>• <code>message.max.bytes</code> (broker) — max size of a message batch. Default: 1 MB.
                <br/>• <code>max.request.size</code> (producer) — max size of a single produce request. Default: 1 MB.
                <br/>• <code>fetch.message.max.bytes</code> / <code>max.partition.fetch.bytes</code> (consumer) — max data fetched per partition per request. Default: 1 MB.
                <br/>• <code>replica.fetch.max.bytes</code> (broker) — max data replicated per request. Must be ≥ <code>message.max.bytes</code>.
                <br/><br/><strong>For large messages:</strong> Increase these configs consistently. Better practice: store large payloads in S3/Blob storage and send only the reference URL through Kafka — keeps Kafka fast.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># server.properties — allow up to 10 MB messages
message.max.bytes=10485760
replica.fetch.max.bytes=10485760

# producer config
max.request.size=10485760

# consumer config
max.partition.fetch.bytes=10485760</code></pre>
              </div>`},{q:"What are some of the key features of Kafka?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apache Kafka's key features:
                <br/><br/>• <strong>High Throughput</strong> — handles millions of messages per second through sequential disk I/O, batching, and compression.
                <br/>• <strong>Scalability</strong> — horizontally scalable by adding brokers and partitions. No downtime for scaling.
                <br/>• <strong>Durability &amp; Persistence</strong> — messages written to disk, replicated across brokers. Configurable retention (time/size).
                <br/>• <strong>Fault Tolerance</strong> — replication ensures no data loss even if brokers fail.
                <br/>• <strong>Low Latency</strong> — sub-millisecond message delivery for real-time systems.
                <br/>• <strong>Message Replay</strong> — consumers can re-read messages by resetting offsets. Unlike traditional queues.
                <br/>• <strong>Exactly-Once Semantics (EOS)</strong> — idempotent producers + transactions ensure each message processed exactly once.
                <br/>• <strong>Pull-based consumption</strong> — consumers pull at their own pace; no backpressure on producers.
                <br/>• <strong>Ecosystem</strong> — Kafka Streams, Kafka Connect, Schema Registry, ksqlDB.
              </p>`},{q:"How do you start a Kafka server?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Starting a Kafka server depends on the mode — ZooKeeper mode (legacy) or KRaft mode (modern).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># ─── ZooKeeper mode (legacy, Kafka < 3.3) ───

# 1. Start ZooKeeper first
bin/zookeeper-server-start.sh config/zookeeper.properties

# 2. Start Kafka broker
bin/kafka-server-start.sh config/server.properties

# ─── KRaft mode (modern, Kafka 3.3+, no ZooKeeper) ───

# 1. Generate cluster ID
KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

# 2. Format storage directory
bin/kafka-storage.sh format -t $KAFKA_CLUSTER_ID -c config/kraft/server.properties

# 3. Start Kafka
bin/kafka-server-start.sh config/kraft/server.properties

# ─── Verify: create a test topic ───
bin/kafka-topics.sh --create --topic test --partitions 1   --replication-factor 1 --bootstrap-server localhost:9092</code></pre>
              </div>`},{q:"What do you mean by geo-replication in Kafka?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Geo-replication</strong> (cross-datacenter replication) in Kafka refers to replicating data from one Kafka cluster to another cluster in a different geographic location or data center. Native Kafka replication (ISR) only works within a single cluster.
                <br/><br/><strong>Tools for geo-replication:</strong>
                <br/>1. <strong>MirrorMaker 2 (MM2)</strong> — official Kafka tool. Uses Kafka Connect under the hood. Continuously replicates topics between clusters. Supports active-active and active-passive setups.
                <br/>2. <strong>Confluent Replicator</strong> — commercial Confluent Platform tool with additional enterprise features (offset translation, topic configuration sync).
                <br/><br/><strong>Use cases:</strong>
                <br/>• <strong>Disaster Recovery</strong> — secondary region takes over if primary fails.
                <br/>• <strong>Data Locality</strong> — serve consumers from nearest datacenter.
                <br/>• <strong>Compliance</strong> — keep copies in specific regions for regulatory requirements.
                <br/>• <strong>Analytics</strong> — aggregate data from multiple clusters into a central analytics cluster.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># MirrorMaker 2 config (mm2.properties)
clusters = dc1, dc2
dc1.bootstrap.servers = dc1-kafka:9092
dc2.bootstrap.servers = dc2-kafka:9092

# Replicate from dc1 to dc2
dc1->dc2.enabled = true
dc1->dc2.topics = orders, payments, events</code></pre>
              </div>`},{q:"What are some of the disadvantages of Kafka?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>Operational complexity</strong> — requires careful tuning of many configs (producer, consumer, broker, topic). Complex to operate at scale without dedicated expertise.
                <br/>• <strong>No built-in message transformation</strong> — Kafka is a log, not a processor. You need Kafka Streams or an external system for message enrichment/transformation.
                <br/>• <strong>Ordering only within a partition</strong> — global ordering across partitions is not guaranteed. Requires careful partitioning strategy.
                <br/>• <strong>No per-message TTL</strong> — retention is configured at the topic level (time or size), not per individual message.
                <br/>• <strong>Re-consumption of messages</strong> — if offsets are not managed carefully, consumers may reprocess messages, requiring idempotent processing logic.
                <br/>• <strong>Not ideal for low-throughput use cases</strong> — overkill for simple point-to-point messaging. RabbitMQ may be simpler for straightforward queue needs.
                <br/>• <strong>Schema management overhead</strong> — requires a schema registry for structured data (Avro/Protobuf).
                <br/>• <strong>High disk usage</strong> — persistent storage with configurable retention means significant disk consumption.
              </p>`},{q:"Tell me about some of the real-world usages of Apache Kafka.",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>LinkedIn (Kafka's birthplace)</strong> — activity tracking, metrics pipeline, log aggregation. Processes trillions of messages per day.
                <br/>• <strong>Uber</strong> — real-time surge pricing, ride matching, driver location updates. Streams 1+ trillion messages daily.
                <br/>• <strong>Netflix</strong> — real-time event streaming for recommendation engine, change-data-capture (CDC) from databases.
                <br/>• <strong>Airbnb</strong> — event logging, metrics, and stream processing for personalisation.
                <br/>• <strong>Walmart</strong> — real-time inventory updates, fraud detection.
                <br/><br/><strong>Common patterns:</strong>
                <br/>• <strong>Event Sourcing</strong> — Kafka as the event log; rebuild application state by replaying events.
                <br/>• <strong>CDC (Change Data Capture)</strong> — Debezium captures DB changes and streams them to Kafka.
                <br/>• <strong>Log Aggregation</strong> — centralise logs from microservices into Kafka, feed to ELK stack.
                <br/>• <strong>Stream Processing</strong> — real-time ETL, fraud detection, IoT data processing.
                <br/>• <strong>Microservices decoupling</strong> — services communicate asynchronously via Kafka topics.
              </p>`},{q:"What are the use cases of Kafka monitoring?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka monitoring is critical for ensuring reliability, performance, and data integrity. Key metrics and use cases:
                <br/><br/><strong>Producer monitoring:</strong>
                <br/>• <code>record-send-rate</code>, <code>record-error-rate</code> — detect failed writes.
                <br/>• <code>request-latency-avg</code> — producer latency trending.
                <br/><br/><strong>Consumer monitoring:</strong>
                <br/>• <code>consumer-lag</code> — most critical metric. If lag is growing, consumers can't keep up.
                <br/>• <code>records-consumed-rate</code> — consumption throughput.
                <br/><br/><strong>Broker monitoring:</strong>
                <br/>• <code>UnderReplicatedPartitions</code> — partitions with fewer than expected ISR. Indicates broker issues.
                <br/>• <code>OfflinePartitionsCount</code> — partitions with no leader (critical alert).
                <br/>• <code>ActiveControllerCount</code> — exactly 1 must be active; alerts if 0 or &gt;1.
                <br/>• Disk usage, network I/O, request rate, response rate.
                <br/><br/><strong>Tools:</strong> Kafka JMX metrics, Prometheus + Grafana, Confluent Control Center, Burrow (consumer lag monitor), Cruise Control (broker rebalancing).
              </p>`},{q:"What do you mean by Kafka Schema Registry?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Schema Registry</strong> (part of Confluent Platform, also available as open-source) is a centralized repository for managing and validating schemas used for serializing Kafka messages. It enforces schema compatibility, preventing producers from publishing messages that consumers cannot deserialize.
                <br/><br/><strong>Key features:</strong>
                <br/>• Supports <strong>Avro, JSON Schema, and Protobuf</strong> formats.
                <br/>• Stores versioned schemas; each schema gets a unique ID.
                <br/>• Instead of embedding the full schema in every message, producers only embed the schema ID (4 bytes) — dramatically reducing message size.
                <br/>• Enforces <strong>compatibility rules</strong>: BACKWARD (new schema reads old data), FORWARD (old schema reads new data), FULL, NONE.
                <br/><br/><strong>Workflow:</strong>
                <br/>1. Producer registers schema → gets schema ID.
                <br/>2. Producer serializes data using Avro + embeds schema ID in message.
                <br/>3. Consumer reads schema ID → fetches schema from registry → deserializes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSON</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Avro schema registered in Schema Registry
{
  "type": "record",
  "name": "Order",
  "fields": [
    { "name": "orderId",  "type": "string" },
    { "name": "amount",   "type": "double" },
    { "name": "status",   "type": "string", "default": "PENDING" }
  ]
}</code></pre>
              </div>`},{q:"What are the benefits of using clusters in Kafka?",tag:"easy",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A Kafka <strong>cluster</strong> is a group of multiple brokers working together. Benefits:
                <br/><br/>• <strong>High Availability</strong> — if one broker goes down, other brokers continue serving. Partitions with replicas on surviving brokers elect new leaders automatically.
                <br/>• <strong>Horizontal Scalability</strong> — add more brokers to increase capacity. More brokers = more partition leaders = higher throughput.
                <br/>• <strong>Load Distribution</strong> — topic partitions and their leaders are spread across brokers, distributing read/write load.
                <br/>• <strong>Fault Tolerance</strong> — with replication factor 3, data survives 2 simultaneous broker failures.
                <br/>• <strong>Geo-distribution</strong> — brokers in different racks or availability zones for rack-aware replication.
                <br/>• <strong>Zero-downtime maintenance</strong> — brokers can be taken down for upgrades (rolling restarts) without service interruption.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Kafka Cluster (3 brokers)
┌──────────────────────────────────────┐
│ Broker 1  │  Broker 2  │  Broker 3  │
│ Leader P0 │  Leader P1 │  Leader P2 │
│ Follow P1 │  Follow P2 │  Follow P0 │
│ Follow P2 │  Follow P0 │  Follow P1 │
└──────────────────────────────────────┘
  Broker 1 fails → P0 elects new leader from B2/B3</code></pre>
              </div>`},{q:"Describe the partitioning key in Kafka.",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>partitioning key</strong> is an optional value provided by the producer when sending a message. It determines which partition the message goes to.
                <br/><br/><strong>How it works:</strong>
                <br/>• If a key is provided: <code>partition = hash(key) % numberOfPartitions</code>. All messages with the same key always go to the same partition → ensures ordering for that key.
                <br/>• If no key is provided: messages are distributed in a round-robin or sticky fashion across partitions for load balancing.
                <br/><br/><strong>Use cases for keyed messages:</strong>
                <br/>• All orders for a specific <code>userId</code> go to the same partition → ordered processing per user.
                <br/>• All transactions for an account → same partition → sequential processing.
                <br/><br/><strong>Caution:</strong> Choosing a key with low cardinality (e.g., country with only 3 values) causes partition skew — some partitions get much more data than others.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Send with key — same userId always goes to same partition
ProducerRecord&lt;String, String&gt; record =
    new ProducerRecord&lt;&gt;("orders", userId, orderJson);
producer.send(record);

// Send without key — round-robin distribution
ProducerRecord&lt;String, String&gt; record =
    new ProducerRecord&lt;&gt;("events", null, eventJson);
producer.send(record);</code></pre>
              </div>`},{q:"What is the purpose of partitions in Kafka?",tag:"medium",body:`
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Partitions serve multiple critical purposes:
                <br/><br/>1. <strong>Parallelism &amp; Scalability</strong> — a topic with N partitions can be consumed by up to N consumers in parallel. Each consumer in a group handles a subset of partitions, enabling horizontal scaling of consumers.
                <br/><br/>2. <strong>Ordered Processing</strong> — messages within a single partition are strictly ordered by offset. Using a key ensures all related messages (same order, same user) go to the same partition and are processed in order.
                <br/><br/>3. <strong>Fault Tolerance</strong> — each partition has replicas on multiple brokers. If the leader broker fails, a follower in ISR becomes the new leader.
                <br/><br/>4. <strong>Storage Distribution</strong> — data is spread across brokers. Each broker holds a subset of partitions, preventing any single broker from becoming a bottleneck.
                <br/><br/>5. <strong>Independent Offset Management</strong> — each consumer group tracks its position (offset) independently per partition, enabling replay, different processing rates, and independent consumers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Topic: payments (4 partitions)
                                              Consumer Group
P0: [tx1][tx4][tx7] ──────────────────────▶  Consumer A
P1: [tx2][tx5][tx8] ──────────────────────▶  Consumer B
P2: [tx3][tx6][tx9] ──────────────────────▶  Consumer C
P3: [txA][txB][txC] ──────────────────────▶  Consumer D

4 consumers × 4 partitions = maximum parallelism</code></pre>
              </div>`}]}],xh={day1:{title:"Java Basics",goal:"Understand the Java ecosystem, syntax fundamentals, and how the JVM executes code.",schedule:[{time:"9:00–10:30",activity:"Read: JVM / JDK / JRE architecture & platform independence"},{time:"10:30–12:00",activity:"Code: Write 5 small programs — primitives, access modifiers, static vs instance"},{time:"13:00–14:30",activity:"Practice: Solve 10 basic Java problems on LeetCode / HackerRank"},{time:"14:30–16:00",activity:"Review: Flashcard all 15 interview Q&As for Day 1"}],resources:[{label:"Oracle Java Docs — Language Basics",url:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/"},{label:"Baeldung — JVM, JRE, JDK",url:"https://www.baeldung.com/jvm-vs-jre-vs-jdk"}],tasks:["Write a HelloWorld program and explain each keyword","Implement a class with all 4 access modifier types","Demonstrate autoboxing with Integer vs int","Write a program using var (Java 10+) for local type inference"],deliverable:"A single Java file that demonstrates all basic concepts covered today."},day2:{title:"OOP Concepts",goal:"Master encapsulation, inheritance, polymorphism, and abstraction with real code.",schedule:[{time:"9:00–10:30",activity:"Read: 4 pillars of OOP — theory + examples"},{time:"10:30–12:00",activity:"Code: Build a small class hierarchy (e.g. Shape → Circle / Rectangle)"},{time:"13:00–14:30",activity:"Practice: Implement abstract class vs interface comparison"},{time:"14:30–16:00",activity:"Review: All 15 Q&As, focus on method overloading vs overriding"}],resources:[{label:"Baeldung — Inheritance in Java",url:"https://www.baeldung.com/java-inheritance"},{label:"Baeldung — Abstract Class vs Interface",url:"https://www.baeldung.com/java-abstract-class"}],tasks:["Build Animal → Dog/Cat hierarchy with overridden speak()","Show runtime polymorphism using a List<Animal>","Write an interface with a default method and implement it in 2 classes","Demonstrate the Liskov Substitution Principle with a code example"],deliverable:"OOP mini-project: polymorphic payment system (Cash/Card/UPI)."},day3:{title:"Java Core",goal:"Deep-dive into exception handling, generics, and the core utility classes.",schedule:[{time:"9:00–10:30",activity:"Read: Checked vs unchecked exceptions, try-with-resources"},{time:"10:30–12:00",activity:"Code: Custom exception hierarchy with meaningful messages"},{time:"13:00–14:30",activity:"Practice: Generic utility methods — swap, min, max"},{time:"14:30–16:00",activity:"Review: 15 Q&As for Day 3"}],resources:[{label:"Oracle Generics Tutorial",url:"https://docs.oracle.com/javase/tutorial/java/generics/"},{label:"Baeldung — Exception Handling",url:"https://www.baeldung.com/java-exceptions"}],tasks:["Implement a generic Pair<A,B> class","Write a custom checked exception for a banking system","Demonstrate try-with-resources using a file reader","Chain exceptions: catch IOException, wrap in ServiceException"],deliverable:"Generic Stack<T> implementation with proper exception handling."},day4:{title:"JVM & Memory",goal:"Understand heap/stack layout, GC algorithms, and how to tune JVM memory flags.",schedule:[{time:"9:00–10:30",activity:"Read: Heap regions (Young/Old/Metaspace), GC roots"},{time:"10:30–12:00",activity:"Lab: Run a memory-leak demo, observe with VisualVM"},{time:"13:00–14:30",activity:"Practice: Set -Xmx/-Xms flags, compare G1 vs ZGC output"},{time:"14:30–16:00",activity:"Review: All 15 Q&As for Day 4"}],resources:[{label:"Oracle — Java GC Tuning Guide",url:"https://docs.oracle.com/en/java/javase/17/gctuning/"},{label:"Baeldung — JVM Memory Model",url:"https://www.baeldung.com/java-stack-heap"}],tasks:["Draw the JVM memory layout from memory","Write a program that causes OutOfMemoryError, then fix it","Explain the difference between Minor GC and Major GC","Compare -XX:+UseG1GC vs -XX:+UseZGC for a high-throughput app"],deliverable:"One-page JVM tuning cheat sheet for production Spring Boot apps."},day5:{title:"Strings & Collections",goal:"Master Java Collections Framework — internals, complexity, and choosing the right structure.",schedule:[{time:"9:00–10:30",activity:"Read: HashMap internals — hash, bucket, treeify"},{time:"10:30–12:00",activity:"Code: Implement a phone book using HashMap with collision handling demo"},{time:"13:00–14:30",activity:"Practice: 15 collections-based LeetCode problems"},{time:"14:30–16:00",activity:"Review: String pool, StringBuilder, all 15 Day 5 Q&As"}],resources:[{label:"Baeldung — HashMap in Java",url:"https://www.baeldung.com/java-hashmap"},{label:"Baeldung — String vs StringBuilder",url:"https://www.baeldung.com/java-string-builder"}],tasks:["Explain HashMap rehashing with a whiteboard diagram","Implement word frequency counter using HashMap","Demonstrate LinkedHashMap preserving insertion order","Compare ArrayList vs LinkedList with a benchmark"],deliverable:"Collections complexity cheat sheet + LRU Cache implementation."},day6:{title:"Java 8 Features",goal:"Be fluent with lambdas, streams, Optional, and functional interfaces.",schedule:[{time:"9:00–10:30",activity:"Read: Lambda syntax, method references, functional interfaces"},{time:"10:30–12:00",activity:"Code: Refactor imperative code to stream pipelines"},{time:"13:00–14:30",activity:"Practice: 10 stream transformation exercises"},{time:"14:30–16:00",activity:"Review: Optional patterns, flatMap, all 15 Day 6 Q&As"}],resources:[{label:"Baeldung — Java 8 Stream Guide",url:"https://www.baeldung.com/java-8-streams"},{label:"Baeldung — Java Optional",url:"https://www.baeldung.com/java-optional"}],tasks:["Filter a list of employees by salary > 50K using streams","Group employees by department using Collectors.groupingBy","Chain 3 Optional calls without null checks","Implement a custom Collector"],deliverable:"Java 8 cheat sheet: lambda syntax, common stream ops, Optional patterns."},day7:{title:"Multithreading & Exceptions",goal:"Write thread-safe code using locks, executors, and concurrency utilities.",schedule:[{time:"9:00–10:30",activity:"Read: Thread lifecycle, synchronized, volatile, happens-before"},{time:"10:30–12:00",activity:"Code: Producer-consumer using BlockingQueue"},{time:"13:00–14:30",activity:"Practice: Implement thread-safe counter with AtomicInteger"},{time:"14:30–16:00",activity:"Review: All 15 Day 7 Q&As, deadlock scenarios"}],resources:[{label:"Baeldung — Java Concurrency",url:"https://www.baeldung.com/java-concurrency"},{label:"Oracle — Concurrency Trail",url:"https://docs.oracle.com/javase/tutorial/essential/concurrency/"}],tasks:["Demonstrate a deadlock with 2 threads and 2 locks","Fix the deadlock using lock ordering","Use ExecutorService to run 10 tasks in parallel","Compare synchronized vs ReentrantLock"],deliverable:"Thread-safe bank account simulation with transfer, deposit, withdraw."},day8:{title:"Spring Core",goal:"Understand the IoC container, DI patterns, AOP, and Spring bean lifecycle.",schedule:[{time:"9:00–10:30",activity:"Read: IoC, DI types, bean scopes, lifecycle callbacks"},{time:"10:30–12:00",activity:"Code: Build a Spring context from scratch with @Configuration"},{time:"13:00–14:30",activity:"Practice: Write a @Aspect for method execution logging"},{time:"14:30–16:00",activity:"Review: All 15 Day 8 Q&As, @Qualifier vs @Primary"}],resources:[{label:"Spring Docs — Core Container",url:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html"},{label:"Baeldung — Spring AOP",url:"https://www.baeldung.com/spring-aop"}],tasks:["Wire 3 beans with constructor injection, validate in unit test","Use @Conditional to swap bean based on profile","Write @Around advice that logs method duration",'Demonstrate @Scope("prototype") vs singleton'],deliverable:"Small Spring app: order service with AOP logging + validation."},day9:{title:"Spring Boot & Microservices",goal:"Build production-ready REST APIs and understand microservice communication patterns.",schedule:[{time:"9:00–10:30",activity:"Read: Auto-configuration, starters, embedded server, actuator"},{time:"10:30–12:00",activity:"Code: Full CRUD REST API with Spring Data JPA + H2"},{time:"13:00–14:30",activity:"Practice: Add Feign client to call a second microservice"},{time:"14:30–16:00",activity:"Review: Circuit breaker patterns, all 15 Day 9 Q&As"}],resources:[{label:"Spring Boot Reference Docs",url:"https://docs.spring.io/spring-boot/docs/current/reference/html/"},{label:"Baeldung — Spring Cloud OpenFeign",url:"https://www.baeldung.com/spring-cloud-openfeign"}],tasks:["Build /api/products CRUD with validation and error handling","Add Spring Security basic auth to all endpoints","Write a Resilience4j circuit breaker around external call","Expose /actuator/health with custom health indicator"],deliverable:"Two-service system: product-service + order-service communicating via Feign."},day10:{title:"DevOps & Production",goal:"Containerize, monitor, and deploy a Spring Boot app with CI/CD pipeline.",schedule:[{time:"9:00–10:30",activity:"Read: Docker multi-stage builds, Kubernetes basics, Helm charts"},{time:"10:30–12:00",activity:"Code: Dockerize the Day 9 app, push to Docker Hub"},{time:"13:00–14:30",activity:"Practice: Write a GitHub Actions CI pipeline"},{time:"14:30–16:00",activity:"Review: Prometheus/Grafana metrics, all 15 Day 10 Q&As"}],resources:[{label:"Docker Best Practices",url:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},{label:"Spring Boot Actuator Metrics",url:"https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html"}],tasks:["Write a multi-stage Dockerfile (build → run) under 200MB","Create docker-compose.yml with app + postgres + redis","Add GitHub Actions workflow: test → build → push image","Expose custom Micrometer counter to Prometheus"],deliverable:"Fully containerized Day 9 app with Docker Compose + CI pipeline."},day11:{title:"React Fundamentals",goal:"Get solid on JSX, component model, props, and the virtual DOM reconciliation.",schedule:[{time:"9:00–10:30",activity:"Read: JSX compilation, virtual DOM, component tree"},{time:"10:30–12:00",activity:"Code: Build a card list component with props and conditional rendering"},{time:"13:00–14:30",activity:"Practice: Implement a filterable product grid"},{time:"14:30–16:00",activity:"Review: All 15 Day 11 Q&As"}],resources:[{label:"React Docs — Describing the UI",url:"https://react.dev/learn/describing-the-ui"},{label:"React Docs — Rendering Lists",url:"https://react.dev/learn/rendering-lists"}],tasks:["Create a Button component with 3 variants via props","Build a UserCard with avatar, name, role — fully driven by props","Implement a conditional banner: show only if user is admin","List 100 items efficiently with stable key prop"],deliverable:"React product catalogue: list, filter by category, show details card."},day12:{title:"React Hooks",goal:"Master useState, useEffect, and the rules of hooks with real patterns.",schedule:[{time:"9:00–10:30",activity:"Read: Hooks rules, closure pitfalls, stale state"},{time:"10:30–12:00",activity:"Code: Build a data-fetching component with loading/error states"},{time:"13:00–14:30",activity:"Practice: Implement useLocalStorage custom hook"},{time:"14:30–16:00",activity:"Review: All 15 Day 12 Q&As, cleanup in useEffect"}],resources:[{label:"React Docs — Built-in Hooks",url:"https://react.dev/reference/react"},{label:"useHooks — Custom Hook Recipes",url:"https://usehooks.com/"}],tasks:["Implement a counter with stale closure bug, then fix it","Fetch GitHub user data with loading/error/success states","Write useDebounce custom hook","Demonstrate cleanup: unsubscribe from setInterval in useEffect"],deliverable:"Weather dashboard: fetch + display + auto-refresh + error recovery."},day13:{title:"Advanced React Hooks & Patterns",goal:"Use useReducer, useContext, useMemo, useCallback and compound component patterns.",schedule:[{time:"9:00–10:30",activity:"Read: useReducer vs useState, Context pitfalls, memoization"},{time:"10:30–12:00",activity:"Code: Build a shopping cart with useReducer"},{time:"13:00–14:30",activity:"Practice: Implement Compound Component pattern (Tabs)"},{time:"14:30–16:00",activity:"Review: All 15 Day 13 Q&As"}],resources:[{label:"React Docs — useReducer",url:"https://react.dev/reference/react/useReducer"},{label:"Kent C. Dodds — Compound Components",url:"https://kentcdodds.com/blog/compound-components-with-react-hooks"}],tasks:["Refactor a useState-heavy form to useReducer","Create a ThemeContext that avoids prop drilling","Use useMemo to memoize a sorted list of 10000 items","Build a Tabs compound component with Tabs.List + Tabs.Panel"],deliverable:"Shopping cart with useReducer, persisted to localStorage."},day14:{title:"React Lifecycle, Performance & State Management",goal:"Optimize renders, lazy load components, and manage global state with Zustand or Redux Toolkit.",schedule:[{time:"9:00–10:30",activity:"Read: React.memo, useCallback, React.lazy, Suspense"},{time:"10:30–12:00",activity:"Code: Add code-splitting to Day 11 app with React.lazy"},{time:"13:00–14:30",activity:"Practice: Set up Zustand store for auth + cart"},{time:"14:30–16:00",activity:"Review: All 15 Day 14 Q&As"}],resources:[{label:"React Docs — Performance",url:"https://react.dev/learn/render-and-commit"},{label:"Zustand Docs",url:"https://zustand-demo.pmnd.rs/"}],tasks:["Profile a component tree in React DevTools and find re-render culprits","Wrap an expensive child with React.memo and verify render count","Lazy-load a route-level component, add Suspense fallback","Create a Zustand store with actions for auth (login/logout)"],deliverable:"Optimized Day 11 catalogue + Zustand global auth state."},day15:{title:"React Router & Data Fetching",goal:"Build a multi-page SPA with React Router v6 and modern data-fetching patterns.",schedule:[{time:"9:00–10:30",activity:"Read: React Router v6 — nested routes, loaders, actions"},{time:"10:30–12:00",activity:"Code: Set up 4-page app (Home/Products/Cart/Profile)"},{time:"13:00–14:30",activity:"Practice: Add react-query for server state"},{time:"14:30–16:00",activity:"Review: All 15 Day 15 Q&As"}],resources:[{label:"React Router v6 Docs",url:"https://reactrouter.com/en/main"},{label:"TanStack Query Docs",url:"https://tanstack.com/query/latest"}],tasks:["Build nested routes: /products and /products/:id","Protect /profile with an auth guard redirect","Use useInfiniteQuery for paginated product list","Implement optimistic update on cart add with react-query"],deliverable:"Full SPA: Home, Product List (infinite scroll), Product Detail, Cart."},day16:{title:"React Forms, TypeScript & Testing",goal:"Build typed, validated forms and write meaningful component tests.",schedule:[{time:"9:00–10:30",activity:"Read: React Hook Form + Zod validation, TypeScript with React"},{time:"10:30–12:00",activity:"Code: Registration form with RHF + Zod schema validation"},{time:"13:00–14:30",activity:"Practice: Write 10 tests with Testing Library + Vitest"},{time:"14:30–16:00",activity:"Review: All 15 Day 16 Q&As"}],resources:[{label:"React Hook Form Docs",url:"https://react-hook-form.com/"},{label:"Testing Library Docs",url:"https://testing-library.com/docs/react-testing-library/intro/"}],tasks:["Add TypeScript to the Day 15 SPA","Build a login form: email + password, Zod schema, error messages","Test the login form: valid submit, invalid email, empty password","Mock a fetch call in a test using MSW"],deliverable:"Fully tested, TypeScript-typed login + registration flow."},day17:{title:"GraphQL Fundamentals",goal:"Understand the GraphQL type system, write schemas and resolvers from scratch.",schedule:[{time:"9:00–10:30",activity:"Read: Types, queries, mutations, subscriptions, introspection"},{time:"10:30–12:00",activity:"Code: Build a Node.js GraphQL server with Apollo Server 4"},{time:"13:00–14:30",activity:"Practice: Query the server in GraphQL Playground"},{time:"14:30–16:00",activity:"Review: All 15 Day 17 Q&As"}],resources:[{label:"GraphQL Official Docs",url:"https://graphql.org/learn/"},{label:"Apollo Server 4 Docs",url:"https://www.apollographql.com/docs/apollo-server/"}],tasks:["Define a User type with query { users } and mutation { createUser }","Implement nested resolvers: User → posts","Add input validation in resolver, return meaningful error","Test all queries via Apollo Explorer / GraphiQL"],deliverable:"Apollo Server with User + Post schema, all CRUD operations."},day18:{title:"GraphQL Intermediate",goal:"Solve N+1 with DataLoader, implement pagination and authentication middleware.",schedule:[{time:"9:00–10:30",activity:"Read: N+1 problem, DataLoader batching, cursor pagination"},{time:"10:30–12:00",activity:"Code: Add DataLoader to Day 17 server"},{time:"13:00–14:30",activity:"Practice: Implement cursor-based pagination on posts query"},{time:"14:30–16:00",activity:"Review: Context, auth middleware, all 15 Day 18 Q&As"}],resources:[{label:"DataLoader GitHub",url:"https://github.com/graphql/dataloader"},{label:"GraphQL Pagination — Relay Spec",url:"https://relay.dev/graphql/connections.htm"}],tasks:["Demonstrate N+1 with logging, then fix with DataLoader","Add JWT auth: decode token in context, guard protected resolvers","Implement first/after cursor pagination on posts","Write integration test for a protected mutation"],deliverable:"Optimised Day 17 server with auth, DataLoader, cursor pagination."},day19:{title:"GraphQL Advanced",goal:"Implement subscriptions, schema stitching, and performance caching strategies.",schedule:[{time:"9:00–10:30",activity:"Read: Subscriptions over WebSocket, persisted queries, caching"},{time:"10:30–12:00",activity:"Code: Add a real-time commentAdded subscription"},{time:"13:00–14:30",activity:"Practice: Set up Apollo Client with InMemoryCache policies"},{time:"14:30–16:00",activity:"Review: Schema directives, all 15 Day 19 Q&As"}],resources:[{label:"Apollo — Subscriptions",url:"https://www.apollographql.com/docs/apollo-server/data/subscriptions/"},{label:"Apollo — Caching",url:"https://www.apollographql.com/docs/react/caching/overview/"}],tasks:["Implement commentAdded subscription with PubSub","Connect React client to subscription, show live comment feed","Add @deprecated directive to a field with migration note","Configure InMemoryCache with keyFields for custom cache keys"],deliverable:"Live comment feed: React + Apollo subscription + optimistic update."},day20:{title:"Full-Stack Capstone: React + GraphQL + Java",goal:"Wire a React front-end to a Spring for GraphQL back-end end-to-end.",schedule:[{time:"9:00–10:00",activity:"Plan: Draw system diagram — React ↔ Apollo ↔ Spring GraphQL ↔ DB"},{time:"10:00–12:00",activity:"Code: Spring Boot app with spring-boot-starter-graphql + JPA"},{time:"13:00–15:00",activity:"Code: React app with Apollo Client, useQuery/useMutation"},{time:"15:00–16:00",activity:"Review: All Day 20 Q&As, compare Apollo vs React Query vs SWR"}],resources:[{label:"Spring for GraphQL Docs",url:"https://docs.spring.io/spring-graphql/docs/current/reference/html/"},{label:"Apollo Client React Docs",url:"https://www.apollographql.com/docs/react/"}],tasks:["Expose a GraphQL schema from Spring Boot with @SchemaMapping","Add @MutationMapping for createProduct","Connect Apollo Client React app to Spring endpoint","Handle loading/error states, optimistic UI on add product"],deliverable:"Full-stack product CRUD: React + Apollo → Spring GraphQL → PostgreSQL."},day21:{title:"Apache Kafka & Distributed Messaging",goal:"Design event-driven systems using Kafka topics, partitions, and consumer groups.",schedule:[{time:"9:00–10:30",activity:"Read: Kafka architecture — broker, topic, partition, offset, ISR"},{time:"10:30–12:00",activity:"Code: Start Kafka locally (KRaft mode), produce & consume messages"},{time:"13:00–14:30",activity:"Practice: Implement Spring Kafka producer + consumer microservice"},{time:"14:30–16:00",activity:"Review: Schema Registry, MirrorMaker 2, all 21 Day 21 Q&As"}],resources:[{label:"Apache Kafka Docs",url:"https://kafka.apache.org/documentation/"},{label:"Confluent — Kafka Tutorials",url:"https://developer.confluent.io/tutorials/"},{label:"Spring Kafka Docs",url:"https://docs.spring.io/spring-kafka/docs/current/reference/html/"}],tasks:["Start Kafka in KRaft mode (no ZooKeeper), create a topic with 3 partitions","Write a Spring Boot producer that sends OrderCreated events","Write a Spring Boot consumer group (2 instances) processing those events","Demonstrate partition rebalance by killing one consumer instance","Set up Confluent Schema Registry with Avro schema for OrderCreated"],deliverable:"Event-driven order system: order-service (producer) → Kafka → fulfillment-service (consumer)."}};function Rh({theme:e,onThemeToggle:t,searchQuery:r,onSearch:o,activeFilter:n,onFilter:a,onHamburger:s,progressPct:i}){const c=b.useRef(null);b.useEffect(()=>{const m=u=>{var h;u.key==="/"&&document.activeElement!==c.current&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&(u.preventDefault(),(h=c.current)==null||h.focus()),u.key==="Escape"&&document.activeElement===c.current&&(c.current.blur(),r&&o(""))};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[r,o]);const l=["all","easy","medium","hard"];return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"top-progress-line",style:{width:`${i}%`},"aria-hidden":"true"}),g.jsxs("header",{className:"topbar",children:[g.jsx("button",{className:"hamburger",onClick:s,"aria-label":"Open menu",children:g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),g.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),g.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),g.jsx("span",{className:"topbar-brand",children:"FullStack Prep"}),g.jsxs("div",{className:"search-wrap",children:[g.jsxs("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("circle",{cx:"11",cy:"11",r:"8"}),g.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),g.jsx("input",{ref:c,type:"search",placeholder:"Search questions, topics…",value:r,onChange:m=>o(m.target.value),"aria-label":"Search"}),g.jsx("span",{className:"search-kbd",children:"/"}),g.jsx("button",{className:`search-clear${r?" visible":""}`,onClick:()=>{var m;o(""),(m=c.current)==null||m.focus()},"aria-label":"Clear search",children:"×"})]}),g.jsx("div",{className:"filter-pills",role:"group","aria-label":"Difficulty filter",children:l.map(m=>g.jsx("button",{className:`filter-pill${n===m?` active-${m}`:""}`,onClick:()=>a(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))}),g.jsx("button",{className:"theme-btn",onClick:t,"aria-label":"Toggle theme",children:e==="dark"?"🌙":"☀️"})]})]})}const Ah={java:{label:"Java & Spring Boot",color:"var(--java-accent)",dot:"var(--java-accent)"},react:{label:"React & Testing",color:"var(--react-accent)",dot:"var(--react-accent)"},graphql:{label:"GraphQL",color:"var(--graphql-accent)",dot:"var(--graphql-accent)"},kafka:{label:"Apache Kafka",color:"var(--kafka-accent)",dot:"var(--kafka-accent)"}};function Eh({days:e,completedSet:t,activeDay:r,isOpen:o,onClose:n,getTrack:a,onDaySelect:s}){const i=b.useRef(null),c=b.useCallback(()=>n(),[n]);b.useEffect(()=>{const u=i.current;if(!u)return;const h=u.querySelector(".nav-item.active");h&&h.scrollIntoView({block:"nearest",behavior:"smooth"})},[r]);const l={};e.forEach(u=>{const h=a(u.day);l[h]||(l[h]=[]),l[h].push(u)});const m=u=>{if(s)s(u);else{const h=document.getElementById(u);h&&h.scrollIntoView({behavior:"smooth"})}n()};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:`sidebar-overlay ${o?"active":""}`,onClick:c}),g.jsx("nav",{className:`sidebar ${o?"open":""}`,ref:i,"aria-label":"Day navigation",children:g.jsx("div",{className:"sidebar-inner",children:["java","react","graphql","kafka"].map(u=>{if(!l[u])return null;const h=Ah[u];return g.jsxs("div",{children:[g.jsxs("div",{className:"nav-track-header",children:[g.jsx("span",{className:"nav-track-dot",style:{background:h.dot}}),h.label]}),l[u].map(v=>g.jsxs("button",{className:`nav-item ${r===v.id?"active":""} ${t.has(v.id)?"completed":""}`,"data-track":u,onClick:()=>m(v.id),"aria-current":r===v.id?"true":void 0,children:[g.jsx("span",{className:"nav-day-badge",children:v.day}),g.jsx("span",{className:"nav-title",children:v.title}),g.jsx("svg",{className:"nav-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:g.jsx("polyline",{points:"20 6 9 17 4 12"})})]},v.id))]},u)})})})]})}function Ih({totalDays:e,totalQuestions:t,completedCount:r}){const o=e?Math.round(r/e*100):0;return g.jsxs("div",{className:"hero",children:[g.jsxs("div",{className:"hero-eyebrow",children:[g.jsx("span",{className:"eyebrow-dot"}),"21-Day Interview Prep"]}),g.jsx("h1",{children:"Full-Stack Mastery"}),g.jsx("p",{className:"hero-desc",children:"A comprehensive 21-day roadmap — Java Core through Spring Boot & DevOps (Days 1–10), React & Testing (Days 11–16), GraphQL & Full-Stack Integration (Days 17–20), and Apache Kafka & Distributed Messaging (Day 21). Every day has curated interview questions with detailed answers, code examples, and a dedicated study plan."}),g.jsxs("div",{className:"hero-tracks",children:[g.jsx("span",{className:"track-badge java",children:"Java & Spring Boot · Days 1–10"}),g.jsx("span",{className:"track-badge react",children:"React & Testing · Days 11–16"}),g.jsx("span",{className:"track-badge graphql",children:"GraphQL & Full-Stack · Days 17–20"}),g.jsx("span",{className:"track-badge kafka",children:"Apache Kafka · Day 21"})]}),g.jsxs("div",{className:"stats-row",children:[g.jsxs("div",{className:"stat-card",children:[g.jsx("span",{className:"stat-value",children:e}),g.jsx("span",{className:"stat-label",children:"Days"})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("span",{className:"stat-value",children:t}),g.jsx("span",{className:"stat-label",children:"Questions"})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("span",{className:"stat-value",children:"40+"}),g.jsx("span",{className:"stat-label",children:"Topics"})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("span",{className:"stat-value",children:r}),g.jsx("span",{className:"stat-label",children:"Completed"})]}),g.jsxs("div",{className:"progress-card",children:[g.jsxs("div",{className:"progress-label",children:[g.jsx("span",{children:"Overall Progress"}),g.jsxs("strong",{children:[o,"%"]})]}),g.jsx("div",{className:"progress-bar-track",children:g.jsx("div",{className:"progress-bar-fill",style:{width:`${o}%`}})})]})]})]})}function Th({question:e,index:t,dayId:r,isViewed:o,onViewed:n}){const a=b.useRef(null),s=b.useRef(null),i=()=>{var h;const l=a.current,m=s.current,u=l.classList.contains("open");(h=l.closest(".accordion-list"))==null||h.querySelectorAll(".accordion-item.open").forEach(v=>{v.classList.remove("open"),v.querySelector(".accordion-body").style.maxHeight="0"}),u||(l.classList.add("open"),m.style.maxHeight=m.scrollHeight+"px",o||n(`${r}_${t}`))};b.useEffect(()=>{var l;(l=a.current)!=null&&l.classList.contains("open")&&s.current&&(s.current.style.maxHeight=s.current.scrollHeight+"px")});const c=l=>{var u;const m=(u=l.target.closest(".code-block-wrap"))==null?void 0:u.querySelector("pre");m&&navigator.clipboard.writeText(m.innerText).then(()=>{l.target.textContent="Copied!",l.target.classList.add("copied"),setTimeout(()=>{l.target.textContent="Copy",l.target.classList.remove("copied")},1800)})};return g.jsxs("div",{ref:a,id:`acc_${r}_${t}`,className:`accordion-item${o?" viewed":""}`,children:[g.jsxs("button",{className:"accordion-header",onClick:i,"aria-expanded":"false",children:[g.jsxs("span",{className:"accordion-q-icon",children:["Q",t+1]}),g.jsx("span",{className:"accordion-question",dangerouslySetInnerHTML:{__html:e.q}}),g.jsx("span",{className:`accordion-tag ${e.tag}`,children:e.tag}),g.jsx("svg",{className:"accordion-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:g.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),g.jsx("div",{className:"accordion-body",ref:s,children:g.jsx("div",{className:"accordion-body-inner",dangerouslySetInnerHTML:{__html:e.body},onClick:l=>{(l.target.matches("[data-copy]")||l.target.closest("[data-copy]"))&&c(l)}})})]})}function Ph({day:e,track:t,isDone:r,viewedSet:o,activeFilter:n,searchQuery:a,onMarkDone:s,onViewed:i,onPlanClick:c,onVisible:l}){const m=b.useRef(null);b.useEffect(()=>{const d=m.current;if(!d)return;const p=new IntersectionObserver(([f])=>{f.isIntersecting&&l(e.id)},{rootMargin:"-58px 0px -65% 0px",threshold:0});return p.observe(d),()=>p.disconnect()},[e.id,l]);const u=d=>d.replace(/<[^>]+>/g,"").toLowerCase(),h=u(a),v=e.questions.map((d,p)=>{const f=n==="all"||d.tag===n,S=!h||u(d.q).includes(h)||u(d.body).includes(h);return{q:d,qi:p,visible:f&&S}}),w=v.some(d=>d.visible),k=e.questions.filter((d,p)=>o.has(`${e.id}_${p}`)).length,x=Math.round(k/e.questions.length*100);return w?g.jsxs("section",{ref:m,id:e.id,className:"day-section","data-track":t,children:[g.jsxs("div",{className:"section-header",children:[g.jsxs("span",{className:"day-pill","data-track":t,children:["Day ",e.day]}),g.jsx("h2",{className:"section-title",children:e.title}),g.jsxs("span",{className:"section-meta",children:[e.questions.length," Qs"]}),g.jsx("button",{className:"plan-btn",onClick:()=>c(e.id,e.day),children:"📅 Study Plan"}),g.jsx("button",{className:`mark-complete-btn${r?" done":""}`,onClick:()=>s(e.id),children:r?"✓ Done":"Mark Done"})]}),g.jsx("div",{className:"section-progress-bar",children:g.jsx("div",{className:"section-progress-fill",style:{width:`${x}%`}})}),g.jsx("div",{className:"topic-chips",children:e.topics.map(d=>g.jsx("span",{className:"topic-chip",children:d},d))}),g.jsx("div",{className:"accordion-list",children:v.map(({q:d,qi:p,visible:f})=>f?g.jsx(Th,{question:d,index:p,dayId:e.id,isViewed:o.has(`${e.id}_${p}`),onViewed:i},p):null)})]}):null}function Dh({plan:e,dayNum:t,track:r,onClose:o}){const n=b.useRef(null);if(b.useEffect(()=>{var i;const s=c=>{c.key==="Escape"&&o()};return document.addEventListener("keydown",s),(i=n.current)==null||i.focus(),()=>document.removeEventListener("keydown",s)},[o]),!e)return null;const a={java:"var(--java-accent)",react:"var(--react-accent)",graphql:"var(--graphql-accent)",kafka:"var(--kafka-accent)"}[r]||"var(--accent)";return g.jsx("div",{className:"modal-backdrop",onClick:s=>s.target===s.currentTarget&&o(),children:g.jsxs("div",{className:"modal",ref:n,tabIndex:-1,role:"dialog","aria-modal":"true",children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"modal-title",style:{color:a},children:["📅 Day ",t," — Study Plan"]}),g.jsx("div",{className:"modal-subtitle",children:e.title}),g.jsx("div",{className:"modal-subtitle",style:{marginTop:6,fontSize:".82rem"},children:e.goal})]}),g.jsx("button",{className:"modal-close",onClick:o,"aria-label":"Close",children:"✕"})]}),g.jsxs("div",{className:"modal-body",children:[g.jsxs("div",{className:"modal-section",children:[g.jsx("div",{className:"modal-section-title",style:{color:a},children:"⏱ Daily Schedule"}),e.schedule.map((s,i)=>g.jsxs("div",{className:"schedule-row",children:[g.jsx("div",{className:"schedule-time",children:s.time}),g.jsx("div",{className:"schedule-activity",children:s.activity})]},i))]}),g.jsxs("div",{className:"modal-section",children:[g.jsx("div",{className:"modal-section-title",style:{color:a},children:"🛠 Hands-On Tasks"}),g.jsx("div",{className:"task-list",children:e.tasks.map((s,i)=>g.jsx("div",{className:"task-item",children:s},i))})]}),g.jsxs("div",{className:"modal-section",children:[g.jsx("div",{className:"modal-section-title",style:{color:a},children:"📚 Study Resources"}),g.jsx("div",{className:"resource-list",children:e.resources.map((s,i)=>g.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:["↗ ",s.label]},i))})]}),g.jsxs("div",{className:"modal-section",children:[g.jsx("div",{className:"modal-section-title",style:{color:a},children:"🎯 Day Deliverable"}),g.jsx("div",{className:"deliverable-box",children:e.deliverable})]})]})]})})}let Lh=0;const ws=new Set;function Bc(e,t="success"){const r=++Lh;ws.forEach(o=>o({id:r,msg:e,type:t}))}function Mh(){const[e,t]=b.useState([]);return b.useEffect(()=>{const r=o=>{t(n=>[...n,o]),setTimeout(()=>t(n=>n.filter(a=>a.id!==o.id)),2900)};return ws.add(r),()=>ws.delete(r)},[]),g.jsx("div",{className:"toast-container","aria-live":"polite",children:e.map(r=>g.jsxs("div",{className:`toast ${r.type}`,children:[g.jsx("span",{children:r.type==="success"?"✅":"ℹ️"}),r.msg]},r.id))})}function Sa(e){return e<=10?"java":e<=16?"react":e<=20?"graphql":"kafka"}function Wc(e){try{return new Set(JSON.parse(localStorage.getItem(e)||"[]"))}catch{return new Set}}function Fc(e,t){localStorage.setItem(e,JSON.stringify([...t]))}function jh(){var Qt,T;const[e,t]=b.useState(()=>localStorage.getItem("fsm_theme")||"dark");b.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("fsm_theme",e)},[e]);const[r,o]=b.useState(!1),n=b.useCallback(()=>o(!1),[]),[a,s]=b.useState(()=>Wc("fsm_completed")),[i,c]=b.useState(()=>Wc("fsm_viewed")),[l,m]=b.useState(""),[u,h]=b.useState("all"),[v,w]=b.useState((Qt=je[0])==null?void 0:Qt.id),[k,x]=b.useState((T=je[0])==null?void 0:T.id),[d,p]=b.useState(null),f=b.useRef(null),S=b.useMemo(()=>je.reduce((A,L)=>A+L.questions.length,0),[]),R=a.size,E=je.length?Math.round(R/je.length*100):0,I=b.useCallback(A=>{w(A),m(""),h("all"),requestAnimationFrame(()=>{const L=document.getElementById(A);L&&L.scrollIntoView({behavior:"smooth",block:"start"})})},[]),D=b.useCallback(A=>{s(L=>{const O=new Set(L),q=je.find(Je=>Je.id===A);return O.has(A)?(O.delete(A),Bc("Day "+(q==null?void 0:q.day)+" unmarked","info")):(O.add(A),Bc("Day "+(q==null?void 0:q.day)+": "+(q==null?void 0:q.title)+" completed! 🎉")),Fc("fsm_completed",O),O})},[]),U=b.useCallback(A=>{c(L=>{if(L.has(A))return L;const O=new Set(L);return O.add(A),Fc("fsm_viewed",O),O})},[]),M=b.useCallback(A=>x(A),[]),ce=b.useCallback((A,L)=>p({dayId:A,dayNum:L}),[]),Le=l.trim().length>0,He=b.useMemo(()=>{if(!Le)return"";const A=l.trim().toLowerCase(),L=q=>q.replace(/<[^>]+>/g,"").toLowerCase();let O=0;return je.forEach(q=>{q.questions.forEach(Je=>{const $e=u==="all"||Je.tag===u,Rr=L(Je.q).includes(A)||L(Je.body).includes(A);$e&&Rr&&O++})}),O===0?'No results for "'+l+'"':O+" result"+(O!==1?"s":"")+' for "'+l+'"'},[l,u,Le]),[Pt,xe]=b.useState(!1);b.useEffect(()=>{const A=()=>xe(window.scrollY>300);return window.addEventListener("scroll",A,{passive:!0}),()=>window.removeEventListener("scroll",A)},[]);const Dt=l.trim().length>0||u!=="all";return g.jsxs("div",{className:"app-layout",children:[g.jsx(Rh,{theme:e,onThemeToggle:()=>t(A=>A==="dark"?"light":"dark"),searchQuery:l,onSearch:m,activeFilter:u,onFilter:h,onHamburger:()=>o(A=>!A),progressPct:E}),g.jsx(Eh,{days:je,completedSet:a,activeDay:Dt?k:v,isOpen:r,onClose:n,getTrack:Sa,onDaySelect:I}),g.jsxs("main",{className:"main-content",ref:f,children:[g.jsx(Ih,{totalDays:je.length,totalQuestions:S,completedCount:R}),!Dt&&g.jsx("div",{className:"day-nav-strip",children:je.map(A=>g.jsxs("button",{className:"day-nav-btn"+(v===A.id?" active":"")+(a.has(A.id)?" done":""),onClick:()=>I(A.id),children:["Day ",A.day]},A.id))}),Le&&g.jsxs("div",{className:"search-banner visible",children:[g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("circle",{cx:"11",cy:"11",r:"8"}),g.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),He]}),g.jsx("div",{className:"days-container",children:je.map(A=>!Dt&&A.id!==v?null:g.jsx(Ph,{day:A,track:Sa(A.day),isDone:a.has(A.id),viewedSet:i,activeFilter:u,searchQuery:l,onMarkDone:D,onViewed:U,onPlanClick:ce,onVisible:M},A.id))})]}),d&&g.jsx(Dh,{plan:xh[d.dayId],dayNum:d.dayNum,track:Sa(d.dayNum),onClose:()=>p(null)}),g.jsx(Mh,{}),g.jsx("button",{className:"back-to-top"+(Pt?" visible":""),onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:g.jsx("polyline",{points:"18 15 12 9 6 15"})})})]})}const y="https://leetcode.com/problems/",tn={1:{title:"Java Basics – Variables, Loops, Classes",week:"Week 1 — Java & Spring Foundations",mock:!1,dsa:[{name:"Two Sum",time:"15m",url:y+"two-sum/"},{name:"Contains Duplicate",time:"15m",url:y+"contains-duplicate/"},{name:"Valid Anagram",time:"15m",url:y+"valid-anagram/"},{name:"Best Time to Buy and Sell Stock",time:"20m",url:y+"best-time-to-buy-and-sell-stock/"},{name:"Maximum Subarray",time:"20m",url:y+"maximum-subarray/"},{name:"Product of Array Except Self",time:"35m",url:y+"product-of-array-except-self/"}],learning:[{name:"Java Full Course – syntax, loops, methods, classes (watch first 2h, take notes)",resource:"Programming with Mosh",url:"https://www.youtube.com/watch?v=eIrMbAQSU34",type:"yt"}],project:[{name:"Go to start.spring.io: Maven, Java 21, Spring Web, DevTools, Lombok — download + open in IntelliJ",detail:"Run ./mvnw spring-boot:run and confirm port 8080 starts with 'Started SpencyApplication'",url:"https://start.spring.io",type:"doc"},{name:"Create package layout: com.spency.auth, com.spency.user, com.spency.shopkeeper, com.spency.ca, com.spency.account, com.spency.order",detail:"Each package will later have controller/, service/, repository/, model/ sub-packages. Create empty placeholder class in each.",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Write HealthController.java → GET /health returns {status:'UP', service:'spency-backend'}",detail:"@RestController + @GetMapping. Add @CrossOrigin(origins='http://localhost:5173') for spency Vite dev server on port 5173",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Write VersionController.java → GET /api/version returns {version:'1.0.0', env:'dev'}",detail:"Will be called by spency React header to show app version. Test in browser: http://localhost:8080/api/version",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Configure application.properties: server.port=8080, spring.application.name=spency-backend, logging.level.com.spency=DEBUG",detail:"Also add: spring.jackson.serialization.write-dates-as-timestamps=false (ISO dates in all JSON responses)",url:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html",type:"doc"}]},2:{title:"OOP – Inheritance, Polymorphism, Encapsulation",week:"Week 1 — Java & Spring Foundations",mock:!0,dsa:[{name:"Climbing Stairs",time:"15m",url:y+"climbing-stairs/"},{name:"Merge Intervals",time:"20m",url:y+"merge-intervals/"},{name:"Insert Interval",time:"20m",url:y+"insert-interval/"},{name:"Meeting Rooms II",time:"20m",url:y+"meeting-rooms-ii/"},{name:"Subarray Sum Equals K",time:"25m",url:y+"subarray-sum-equals-k/"},{name:"First Missing Positive",time:"20m",url:y+"first-missing-positive/"}],learning:[{name:"OOP in Java – inheritance, polymorphism, abstraction, encapsulation, interfaces",resource:"Telusko OOP Playlist",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"}],project:[{name:"Create UserRole.java enum: USER, SHOPKEEPER, CA, ADMIN",detail:"Will be used as DB column and as JWT claim — maps directly to spency frontend role-based guard checks",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"},{name:"Create abstract BaseUser.java: id(UUID), email, passwordHash, role(UserRole), createdAt, updatedAt",detail:"Add abstract getDisplayName(). Annotate @MappedSuperclass for JPA inheritance on Day 9",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"},{name:"Create User.java extends BaseUser: firstName, lastName, phone, avatarUrl",detail:"Override getDisplayName() = firstName + ' ' + lastName. Mirrors spency modules/user/ data shape",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"},{name:"Create Shopkeeper.java extends BaseUser: businessName, category, location, isVerified",detail:"Override getDisplayName() = businessName. Mirrors spency ShopkeeperContext data fields exactly",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"},{name:"Create CA.java extends BaseUser: licenseNumber, specialization, experienceYears, isVerified",detail:"Override getDisplayName() = licenseNumber + ' - ' + specialization. Mirrors spency CAContext data shape",url:"https://www.youtube.com/watch?v=pTB0EiLXUC8",type:"yt"}]},3:{title:"Java Collections – List, Set, Map + Streams",week:"Week 1 — Java & Spring Foundations",mock:!1,dsa:[{name:"Group Anagrams",time:"20m",url:y+"group-anagrams/"},{name:"Top K Frequent Elements",time:"20m",url:y+"top-k-frequent-elements/"},{name:"Encode and Decode Strings",time:"20m",url:y+"encode-and-decode-strings/"},{name:"Longest Consecutive Sequence",time:"20m",url:y+"longest-consecutive-sequence/"},{name:"Find Minimum in Rotated Sorted Array",time:"20m",url:y+"find-minimum-in-rotated-sorted-array/"},{name:"Search in Rotated Sorted Array",time:"20m",url:y+"search-in-rotated-sorted-array/"}],learning:[{name:"Java Collections Framework – ArrayList, HashMap, LinkedHashMap, TreeMap, Stream API",resource:"Coding with John – Collections",url:"https://www.youtube.com/watch?v=viTHc59-KWY",type:"yt"}],project:[{name:"Create InMemoryUserRegistry.java backed by HashMap<UUID, User>: addUser(), findById(), findAll(), deleteById()",detail:"Will be swapped for JpaRepository on Day 9 — identical interface keeps rest of code unchanged",url:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",type:"doc"},{name:"Create InMemoryShopkeeperRegistry.java: findByCategory(String) using stream().filter(s -> s.getCategory().equals(cat))",detail:"Returns List<Shopkeeper>. Mirrors spency ShopkeeperContext category filter (client-side today, DB query on Day 9)",url:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html",type:"doc"},{name:"Add groupByRole() to UserRegistry: stream().collect(Collectors.groupingBy(BaseUser::getRole))",detail:"Returns Map<UserRole, List<BaseUser>>. Used by admin dashboard reporting endpoint for user counts per role",url:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html",type:"doc"},{name:"Add getEmailList(): stream().map(User::getEmail).collect(Collectors.toList())",detail:"Practice method references. Will be used by notification service when sending bulk emails",url:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html",type:"doc"},{name:"Write RegistryDemo.java main(): add 5 users + 3 shopkeepers + 2 CAs, print groupBy results and filtered lists",detail:"Run it. Confirm groupByRole returns {USER:[...], SHOPKEEPER:[...], CA:[...]} and category filter works",url:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html",type:"doc"}]},4:{title:"Spring Boot Intro – Project Setup & Controllers",week:"Week 1 — Java & Spring Foundations",mock:!0,dsa:[{name:"Valid Parentheses",time:"15m",url:y+"valid-parentheses/"},{name:"Min Stack",time:"15m",url:y+"min-stack/"},{name:"Evaluate Reverse Polish Notation",time:"20m",url:y+"evaluate-reverse-polish-notation/"},{name:"Generate Parentheses",time:"20m",url:y+"generate-parentheses/"},{name:"Daily Temperatures",time:"20m",url:y+"daily-temperatures/"},{name:"Largest Rectangle in Histogram",time:"30m",url:y+"largest-rectangle-in-histogram/"}],learning:[{name:"Spring Boot Crash Course – auto-config, starters, @SpringBootApplication, @RestController",resource:"Amigoscode Spring Boot",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Spring Boot Quickstart Official Guide",resource:"spring.io",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"}],project:[{name:"Create UserController.java: GET /api/users, POST /api/users, GET /api/users/{id} — returns 200/201/404",detail:"@RestController @RequestMapping('/api/users'). Wire to InMemoryUserRegistry for now",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Create ShopkeeperController.java: GET /api/shopkeepers, POST, GET /api/shopkeepers/{id}, GET /api/shopkeepers?category={cat}",detail:"@RequestParam(required=false) String category — returns all if null. Mirrors spency ShopkeeperContext.findByCategory()",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Create CAController.java: GET /api/cas, POST, GET /api/cas/{id}, GET /api/cas?specialization={spec}",detail:"Same pattern as ShopkeeperController. Maps to spency CAContext search page",url:"https://spring.io/guides/gs/spring-boot/",type:"doc"},{name:"Create GlobalExceptionHandler.java @ControllerAdvice: ResourceNotFoundException → 404, MethodArgumentNotValidException → 400",detail:"Return ErrorResponse{status, message, timestamp, errors:[{field, message}]}. Used by spency Axios error interceptor",url:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/ControllerAdvice.html",type:"doc"},{name:"Configure global CORS: allow http://localhost:5173 for all /api/** routes in WebMvcConfigurer",detail:"addCorsMappings: allowedOrigins 'http://localhost:5173', allowedMethods GET/POST/PUT/DELETE, allowedHeaders *, allowCredentials true",url:"https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html",type:"doc"}]},5:{title:"Service Layer, Dependency Injection & Layered Architecture",week:"Week 1 — Java & Spring Foundations",mock:!1,dsa:[{name:"Binary Search",time:"15m",url:y+"binary-search/"},{name:"Koko Eating Bananas",time:"20m",url:y+"koko-eating-bananas/"},{name:"Find First and Last Position",time:"20m",url:y+"find-first-and-last-position-of-element-in-sorted-array/"},{name:"Median of Two Sorted Arrays",time:"30m",url:y+"median-of-two-sorted-arrays/"},{name:"Time Based Key-Value Store",time:"20m",url:y+"time-based-key-value-store/"},{name:"Search a 2D Matrix",time:"15m",url:y+"search-a-2d-matrix/"}],learning:[{name:"Spring @Service, @Repository, @Autowired, Bean lifecycle, constructor injection",resource:"Java Brains – Spring Core",url:"https://www.youtube.com/watch?v=GB8k2-Egfv0",type:"yt"}],project:[{name:"Create IUserRepository interface: findById(UUID), findAll(), save(User), deleteById(UUID), findByEmail(String)",detail:"Pure Java interface — InMemoryUserRepository implements it today; JpaUserRepository will implement same interface on Day 9",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Create UserService.java with final IUserRepository repo; in constructor (no @Autowired field injection)",detail:"Methods: createUser(UserCreateRequest), getUserById(UUID), listUsers(), updateUser(UUID, data), deleteUser(UUID)",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Create IShopkeeperRepository + ShopkeeperService.java: findByCategory() delegates to repo stream filter",detail:"ShopkeeperService.findByCategory(String category) for spency category search feature",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Create ICARepository + CAService.java: findBySpecialization() for spency CA search page",detail:"Same constructor-injection pattern as UserService. @Service annotation on all three",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Wire all 3 services into their controllers via constructor; confirm Spring context loads with zero circular dependency errors",detail:"Run ./mvnw spring-boot:run. Call GET /api/users in browser — returns empty array []. No errors in logs",url:"https://www.youtube.com/watch?v=GB8k2-Egfv0",type:"yt"}]},6:{title:"REST API Design – CRUD + Error Handling + Validation",week:"Week 1 — Java & Spring Foundations",mock:!0,dsa:[{name:"Reverse Linked List",time:"15m",url:y+"reverse-linked-list/"},{name:"Merge Two Sorted Lists",time:"15m",url:y+"merge-two-sorted-lists/"},{name:"Reorder List",time:"20m",url:y+"reorder-list/"},{name:"Remove Nth Node From End",time:"20m",url:y+"remove-nth-node-from-end-of-list/"},{name:"Linked List Cycle",time:"15m",url:y+"linked-list-cycle/"},{name:"LRU Cache",time:"35m",url:y+"lru-cache/"}],learning:[{name:"REST best practices – HTTP verbs, status codes, pagination, versioning",resource:"REST API Tutorial",url:"https://restfulapi.net/",type:"doc"},{name:"Spring Boot REST – @PostMapping, @PutMapping, @DeleteMapping, @RequestBody",resource:"Amigoscode REST API",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"}],project:[{name:"Add to UserController: PUT /api/users/{id} (update fields), DELETE /api/users/{id} (soft-delete, sets deletedAt)",detail:"DELETE returns 204 No Content. Soft delete preserves record in DB with deletedAt timestamp set",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Add to ShopkeeperController: PUT /api/shopkeepers/{id}, DELETE /api/shopkeepers/{id}, verify GET ?category= filter works",detail:"category query param: /api/shopkeepers?category=FOOD returns only FOOD category shopkeepers",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Add to CAController: PUT /api/cas/{id}, DELETE /api/cas/{id}, verify GET ?specialization= filter works",detail:"/api/cas?specialization=TAX returns only TAX specialists. Used by spency CA search page",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"},{name:"Create UserCreateRequest.java DTO: @NotBlank firstName, @NotBlank lastName, @Email email, @Size(min=8) password",detail:"Also ShopkeeperCreateRequest with @NotBlank businessName, @NotBlank category. Add @Valid in controller @RequestBody",url:"https://jakarta.ee/specifications/bean-validation/",type:"doc"},{name:"Create ErrorResponse.java DTO: {status, message, timestamp, errors:[{field, message}]}",detail:"GlobalExceptionHandler builds this for all errors. Shape matches what spency Axios interceptor expects for showing toast messages",url:"https://www.baeldung.com/exception-handling-for-rest-with-spring",type:"doc"},{name:'Test all 15 endpoints in Postman (5 per controller). Also test validation: POST /api/users with blank email → 400 {errors:[{field:"email"}]}',detail:"Verify DELETE returns 204, invalid ID returns 404 with ErrorResponse body, valid POST returns 201 with created object",url:"https://www.youtube.com/watch?v=9SGDpanrc8U",type:"yt"}]},7:{title:"Build Day – Unit Tests + Integration Tests",week:"Week 1 — Java & Spring Foundations",mock:!1,dsa:[{name:"Invert Binary Tree",time:"15m",url:y+"invert-binary-tree/"},{name:"Maximum Depth of Binary Tree",time:"15m",url:y+"maximum-depth-of-binary-tree/"},{name:"Diameter of Binary Tree",time:"20m",url:y+"diameter-of-binary-tree/"},{name:"Balanced Binary Tree",time:"20m",url:y+"balanced-binary-tree/"},{name:"Same Tree",time:"15m",url:y+"same-tree/"},{name:"Binary Tree Level Order Traversal",time:"35m",url:y+"binary-tree-level-order-traversal/"}],learning:[{name:"Spring Boot Testing – JUnit 5, Mockito, MockMvc, @WebMvcTest",resource:"Testing Spring Boot – Amigoscode",url:"https://www.youtube.com/watch?v=Geq60OVyBPg",type:"yt"}],project:[{name:"Write UserServiceTest.java: @ExtendWith(MockitoExtension), mock IUserRepository, test createUser() + getUserById() + deleteUser()",detail:"Verify mock.save() called with correct User object. Verify mock.deleteById() called on deleteUser(). Assert exception thrown for missing ID",url:"https://www.youtube.com/watch?v=Geq60OVyBPg",type:"yt"},{name:"Write ShopkeeperServiceTest.java: test findByCategory() returns only matching items from mocked repo",detail:"Mock returns mixed list of FOOD + TECH shopkeepers. Assert only FOOD returned when filter is 'FOOD'",url:"https://www.youtube.com/watch?v=Geq60OVyBPg",type:"yt"},{name:"Write UserControllerTest.java: @WebMvcTest(UserController), MockMvc — test GET /api/users returns 200, POST returns 201",detail:"@MockBean UserService in test. Verify JSON response body contains 'firstName', 'email' fields matching spency User type shape",url:"https://www.youtube.com/watch?v=Geq60OVyBPg",type:"yt"},{name:"Write CAControllerTest.java: test POST /api/cas with missing licenseNumber → 400 with errors array",detail:"Assert response body has errors[0].field = 'licenseNumber'. Verify error message is human-readable",url:"https://www.youtube.com/watch?v=Geq60OVyBPg",type:"yt"},{name:"Run ./mvnw test — all tests pass. Check target/surefire-reports/ for HTML report",detail:"Fix any failures. Add maven-surefire-plugin version to pom.xml. Print test count: should have at least 15 tests",url:"https://maven.apache.org/surefire/maven-surefire-plugin/",type:"doc"}]},8:{title:"PostgreSQL Setup + SQL Fundamentals",week:"Week 2 — Database & React",mock:!0,dsa:[{name:"Number of Islands",time:"20m",url:y+"number-of-islands/"},{name:"Clone Graph",time:"20m",url:y+"clone-graph/"},{name:"Max Area of Island",time:"20m",url:y+"max-area-of-island/"},{name:"Pacific Atlantic Water Flow",time:"20m",url:y+"pacific-atlantic-water-flow/"},{name:"Surrounded Regions",time:"20m",url:y+"surrounded-regions/"},{name:"Course Schedule II",time:"20m",url:y+"course-schedule-ii/"}],learning:[{name:"PostgreSQL crash course – SELECT, JOINs, GROUP BY, indexes, constraints",resource:"freeCodeCamp PostgreSQL",url:"https://www.youtube.com/watch?v=qw--VYLpxG4",type:"yt"},{name:"PostgreSQL official tutorial",resource:"postgresql.org",url:"https://www.postgresql.org/docs/current/tutorial.html",type:"doc"}],project:[{name:"Install PostgreSQL locally (brew install postgresql@16). Run: createdb spency_db; createuser spency_user; GRANT ALL ON DATABASE spency_db TO spency_user",detail:"Test connection: psql -U spency_user -d spency_db. Confirm you get psql prompt",url:"https://www.postgresql.org/docs/current/tutorial-start.html",type:"doc"},{name:"Write V1__create_users.sql: id UUID PRIMARY KEY DEFAULT gen_random_uuid(), email VARCHAR(255) UNIQUE NOT NULL, role VARCHAR(50), first_name, last_name, deleted_at TIMESTAMP NULLABLE, created_at",detail:"CREATE INDEX idx_users_email ON users(email); CREATE INDEX idx_users_role ON users(role)",url:"https://www.postgresql.org/docs/",type:"doc"},{name:"Write V2__create_shopkeepers.sql: id UUID PK, user_id UUID FK→users.id ON DELETE CASCADE, business_name, category, location, is_verified BOOLEAN DEFAULT false",detail:"CREATE INDEX idx_shopkeepers_category ON shopkeepers(category) — used by spency GET /api/shopkeepers?category= query",url:"https://www.postgresql.org/docs/",type:"doc"},{name:"Write V3__create_cas.sql: id UUID PK, user_id FK→users.id, license_number VARCHAR UNIQUE, specialization, experience_years INT, is_verified BOOLEAN",detail:"CREATE INDEX idx_cas_specialization ON cas(specialization) — used by spency CA search page query",url:"https://www.postgresql.org/docs/",type:"doc"},{name:"Write V4__create_accounts.sql: id UUID PK, user_id UUID FK→users.id UNIQUE, balance DECIMAL(15,2) DEFAULT 0, currency CHAR(3) DEFAULT INR, created_at",detail:"1:1 with users. Balance field used by Saga pattern on Day 21 (debit on order creation)",url:"https://www.postgresql.org/docs/",type:"doc"},{name:"Run all SQL files in psql. Write 10 test queries: JOIN users+shopkeepers, COUNT by role, filter by category, subquery for verified CAs",detail:"Run EXPLAIN on each query — all index scans should appear for filtered queries (not Seq Scan)",url:"https://www.postgresql.org/docs/current/tutorial-select.html",type:"doc"}]},9:{title:"JPA / Hibernate – ORM & Spring Data",week:"Week 2 — Database & React",mock:!1,dsa:[{name:"Implement Trie",time:"25m",url:y+"implement-trie-prefix-tree/"},{name:"Design Add and Search Words",time:"20m",url:y+"design-add-and-search-words-data-structure/"},{name:"Word Search II",time:"35m",url:y+"word-search-ii/"},{name:"House Robber",time:"15m",url:y+"house-robber/"},{name:"House Robber II",time:"15m",url:y+"house-robber-ii/"},{name:"Longest Palindromic Substring",time:"10m",url:y+"longest-palindromic-substring/"}],learning:[{name:"Spring Data JPA – @Entity, @Repository, JPQL, one-to-many, many-to-many",resource:"Amigoscode JPA Hibernate",url:"https://www.youtube.com/watch?v=8SGI_XS5OPw",type:"yt"}],project:[{name:"Add to pom.xml: spring-boot-starter-data-jpa, postgresql driver (runtime), flyway-core. Set application.properties: spring.datasource.url=jdbc:postgresql://localhost:5432/spency_db, spring.jpa.hibernate.ddl-auto=validate",detail:"spring.flyway.baseline-on-migrate=true in case DB already has tables. spring.jpa.show-sql=true for dev",url:"https://flywaydb.org/documentation/",type:"doc"},{name:"Move V1–V4 SQL files to src/main/resources/db/migration/. Start app — Flyway runs migrations automatically",detail:"Confirm in logs: 'Successfully applied 4 migrations'. Check psql: \\dt shows all 4 tables",url:"https://flywaydb.org/documentation/",type:"doc"},{name:"Annotate User.java: @Entity @Table(name='users') @Id @GeneratedValue(strategy=UUID) @Column(name='first_name') etc.",detail:"Add @CreationTimestamp createdAt and @UpdateTimestamp updatedAt. @SQLDelete for soft delete",url:"https://www.youtube.com/watch?v=8SGI_XS5OPw",type:"yt"},{name:"Annotate Shopkeeper.java and CA.java as @Entity. Add @ManyToOne(fetch=LAZY) User user with @JoinColumn(name=user_id)",detail:"ShopkeeperJpaRepository extends JpaRepository<Shopkeeper, UUID> — add findByCategory(String) method",url:"https://www.youtube.com/watch?v=8SGI_XS5OPw",type:"yt"},{name:"Create UserJpaRepository extends JpaRepository<User, UUID>: add findByEmail(Optional<User>), findAllByRole(UserRole)",detail:"Swap InMemoryUserRepository for JpaUserRepository in UserService constructor. Identical interface — zero other changes needed",url:"https://docs.spring.io/spring-data/jpa/docs/current/reference/html/",type:"doc"},{name:"Test: POST /api/users via Postman → SELECT * FROM users in psql confirms row inserted. Restart app → data still there",detail:"Run ./mvnw test — all existing tests still pass (Spring Boot Test starts embedded H2 for tests, not prod Postgres)",url:"https://www.youtube.com/watch?v=8SGI_XS5OPw",type:"yt"}]},10:{title:"JWT Authentication + Spring Security",week:"Week 2 — Database & React",mock:!0,dsa:[{name:"Coin Change",time:"20m",url:y+"coin-change/"},{name:"Longest Common Subsequence",time:"20m",url:y+"longest-common-subsequence/"},{name:"Word Break",time:"20m",url:y+"word-break/"},{name:"Combination Sum IV",time:"20m",url:y+"combination-sum-iv/"},{name:"Partition Equal Subset Sum",time:"25m",url:y+"partition-equal-subset-sum/"},{name:"Unique Paths",time:"15m",url:y+"unique-paths/"}],learning:[{name:"Spring Security 6 + JWT – filter chain, token generation, validation, refresh",resource:"Amigoscode Spring Security JWT",url:"https://www.youtube.com/watch?v=KxqlJblhzfI",type:"yt"}],project:[{name:"Add to pom.xml: spring-boot-starter-security, io.jsonwebtoken:jjwt-api + jjwt-impl + jjwt-jackson (v0.12+)",detail:"Add jwt.secret (256-bit base64 string) and jwt.expiration-ms=86400000 (24h) in application.properties",url:"https://github.com/jwtk/jjwt",type:"doc"},{name:"Create RegisterRequest.java + LoginRequest.java + AuthResponse.java DTOs",detail:"AuthResponse: {token, userId, email, role} — shape must match spency AuthContext LOGIN action payload exactly",url:"https://www.youtube.com/watch?v=KxqlJblhzfI",type:"yt"},{name:"Create JwtService.java: generateToken(User), validateToken(String token), extractEmail(String), extractRole(String)",detail:"Use JJWT builder. Embed userId, email, role as JWT claims — spency frontend decodes token to read role for guard checks",url:"https://github.com/jwtk/jjwt",type:"doc"},{name:"Create JwtAuthFilter.java extends OncePerRequestFilter: extract Bearer token → validate → set SecurityContextHolder authentication",detail:"Extract from 'Authorization: Bearer {token}' header. On invalid token set authentication = null (Spring returns 401)",url:"https://www.youtube.com/watch?v=KxqlJblhzfI",type:"yt"},{name:"Create SecurityConfig.java: SecurityFilterChain permits /auth/**, /health, /api/version — protects /api/**. Add JwtAuthFilter before UsernamePasswordAuthenticationFilter. Disable CSRF.",detail:"sessionManagement = STATELESS. PasswordEncoder = BCryptPasswordEncoder bean",url:"https://docs.spring.io/spring-security/reference/servlet/architecture.html",type:"doc"},{name:"Create AuthController.java: POST /auth/register (hash password, save user, return token), POST /auth/login (verify BCrypt, return token)",detail:"Test: POST /auth/register → 201 {token:'eyJ...'}. GET /api/users with no token → 401. GET with valid token → 200",url:"https://www.youtube.com/watch?v=KxqlJblhzfI",type:"yt"}]},11:{title:"React Basics – Components, JSX, Props, Events",week:"Week 2 — Database & React",mock:!1,dsa:[{name:"Merge k Sorted Lists",time:"30m",url:y+"merge-k-sorted-lists/"},{name:"Find the Duplicate Number",time:"15m",url:y+"find-the-duplicate-number/"},{name:"Trapping Rain Water",time:"30m",url:y+"trapping-rain-water/"},{name:"Container With Most Water",time:"15m",url:y+"container-with-most-water/"},{name:"3Sum",time:"20m",url:y+"3sum/"},{name:"Two Sum II",time:"10m",url:y+"two-sum-ii-input-array-is-sorted/"}],learning:[{name:"React Full Course 2024 – components, JSX, props, events, conditional rendering",resource:"Dave Gray React",url:"https://www.youtube.com/watch?v=RVFAyFWO4go",type:"yt"},{name:"React official Quick Start",resource:"react.dev",url:"https://react.dev/learn",type:"doc"}],project:[{name:"Create src/shared/services/api.js in spency: Axios instance with baseURL='http://localhost:8080'",detail:"Add request interceptor: read token from localStorage, attach as 'Authorization: Bearer {token}' on every request",url:"https://axios-http.com/docs/instance",type:"doc"},{name:"Update src/modules/user/services/userService.js: replace any mock data with real calls — getUsers(), getUserById(id), createUser(data), updateUser(id, data), deleteUser(id)",detail:"All use api.get/post/put/delete. Handle promise rejection by rethrowing for component error state",url:"https://vitejs.dev/guide/",type:"doc"},{name:"Update src/modules/shopkeeper/services/shopkeeperService.js: getShopkeepers(category), getShopkeeperById(id)",detail:"GET /api/shopkeepers?category={cat} if category provided, else GET /api/shopkeepers. Replaces ShopkeeperContext mock array",url:"https://vitejs.dev/guide/",type:"doc"},{name:"Update src/modules/ca/services/caService.js: getCAs(specialization), getCAById(id)",detail:"GET /api/cas?specialization={spec}. Replaces CAContext mock array. Confirm spency CA search page still works",url:"https://vitejs.dev/guide/",type:"doc"},{name:"Confirm components render real data. Fix any CORS errors (add http://localhost:5173 to Spring CorsConfiguration if missing)",detail:"Open DevTools Network tab: confirm all API calls go to localhost:8080/api/**. No mock data anywhere",url:"https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html",type:"doc"}]},12:{title:"React Hooks – useState, useEffect, useContext, custom hooks",week:"Week 2 — Database & React",mock:!0,dsa:[{name:"Permutations",time:"20m",url:y+"permutations/"},{name:"Subsets",time:"15m",url:y+"subsets/"},{name:"Combination Sum",time:"20m",url:y+"combination-sum/"},{name:"Letter Combinations of a Phone Number",time:"20m",url:y+"letter-combinations-of-a-phone-number/"},{name:"Word Search",time:"20m",url:y+"word-search/"},{name:"N-Queens",time:"25m",url:y+"n-queens/"}],learning:[{name:"React Hooks deep dive – useState, useEffect, useContext, useRef, custom hooks",resource:"Fireship React Hooks",url:"https://www.youtube.com/watch?v=TNhaISOUy6Q",type:"yt"}],project:[{name:"Refactor AuthContext.jsx to useReducer: actions LOGIN, LOGOUT, REFRESH_TOKEN, SET_LOADING",detail:"State shape: {user, token, role, isLoading, isAuthenticated}. On LOGIN dispatch: store token in localStorage too",url:"https://react.dev/reference/react/useReducer",type:"doc"},{name:"Create src/shared/hooks/useAuth.js: wraps AuthContext, exposes login(email, pwd), logout(), isAuthenticated, user, role",detail:"login() calls POST /auth/login via api.js. On 200: dispatch LOGIN. On 401: throw error for form to catch",url:"https://react.dev/learn/reusing-logic-with-custom-hooks",type:"doc"},{name:"Create src/shared/hooks/useShopkeeper.js: wraps ShopkeeperContext, exposes shopkeepers, loading, error, filterByCategory(cat)",detail:"Calls shopkeeperService.getShopkeepers() on mount via useEffect. filterByCategory is client-side filter",url:"https://react.dev/learn/reusing-logic-with-custom-hooks",type:"doc"},{name:"Create src/shared/hooks/useCA.js: wraps CAContext, exposes cas, loading, error, filterBySpecialization(spec)",detail:"Same pattern as useShopkeeper. Used by spency CA search page instead of reading context directly",url:"https://react.dev/learn/reusing-logic-with-custom-hooks",type:"doc"},{name:"Move all fetch/axios calls out of JSX component bodies into service files. Components call hooks only",detail:"No direct api.get() in any .jsx file — only via hooks. Verify spency login form uses useAuth().login() not direct fetch",url:"https://react.dev/reference/react",type:"doc"}]},13:{title:"React Router v6 + Protected Routes + Forms",week:"Week 2 — Database & React",mock:!1,dsa:[{name:"Kth Smallest in BST",time:"15m",url:y+"kth-smallest-element-in-a-bst/"},{name:"Lowest Common Ancestor of BST",time:"15m",url:y+"lowest-common-ancestor-of-a-binary-search-tree/"},{name:"Validate BST",time:"20m",url:y+"validate-binary-search-tree/"},{name:"Construct Binary Tree Preorder+Inorder",time:"25m",url:y+"construct-binary-tree-from-preorder-and-inorder-traversal/"},{name:"Binary Tree Right Side View",time:"20m",url:y+"binary-tree-right-side-view/"},{name:"Serialize and Deserialize Binary Tree",time:"25m",url:y+"serialize-and-deserialize-binary-tree/"}],learning:[{name:"React Router v6 – routes, nested routes, useNavigate, protected routes",resource:"Web Dev Simplified React Router",url:"https://www.youtube.com/watch?v=Ul3y1LXxzdU",type:"yt"}],project:[{name:'Review src/app/guards/ — confirm AuthGuard.jsx exists. If not, create it: if (!isAuthenticated) navigate("/login")',detail:"Wrap all private route groups in App.jsx with <AuthGuard>. Test: visit /dashboard without login → redirected to /login",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"},{name:"Create AdminGuard.jsx: if (role !== 'ADMIN') navigate('/403')",detail:"Used to wrap AdminRoutes in App.jsx. Login as USER → try /admin → expect redirect to /403",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"},{name:"Create ShopkeeperGuard.jsx: if (role !== 'SHOPKEEPER' && role !== 'ADMIN') navigate('/403')",detail:"Shopkeeper routes visible to both SHOPKEEPER and ADMIN roles",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"},{name:"Create CAGuard.jsx: if (role !== 'CA' && role !== 'ADMIN') navigate('/403')",detail:"CA dashboard and profile management pages protected by this guard",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"},{name:"Create pages/Forbidden.jsx: 403 page with 'Access Denied' message + role-appropriate home link. Add /403 route in App.jsx",detail:"Test all 4 guard scenarios: USER tries /admin → /403; SHOPKEEPER tries /admin → /403; ADMIN accesses all → OK",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"}]},14:{title:"Connect React → Spring API – Full Stack Integration",week:"Week 2 — Database & React",mock:!0,dsa:[{name:"Find Median from Data Stream",time:"30m",url:y+"find-median-from-data-stream/"},{name:"Task Scheduler",time:"20m",url:y+"task-scheduler/"},{name:"Design Twitter",time:"30m",url:y+"design-twitter/"},{name:"Reorganize String",time:"20m",url:y+"reorganize-string/"},{name:"K Closest Points to Origin",time:"20m",url:y+"k-closest-points-to-origin/"}],learning:[{name:"Axios + CORS config in Spring Boot + API error handling patterns",resource:"Axios Crash Course – Traversy",url:"https://www.youtube.com/watch?v=6LyagkoRWYA",type:"yt"}],project:[{name:"Full smoke test: register new user → login → JWT in AuthContext → navigate all 6 module pages (auth/user/ca/admin/shopkeeper/account)",detail:"Each module must load real API data. Check DevTools Network: no 4xx or 5xx errors on any module load",url:"https://www.youtube.com/watch?v=6LyagkoRWYA",type:"yt"},{name:'Add global Axios response interceptor in api.js: on 401 response → dispatch LOGOUT + navigate("/login")',detail:"This handles expired JWT tokens automatically across all 6 modules. Test: manually expire token in localStorage → next API call logs you out",url:"https://axios-http.com/docs/interceptors",type:"doc"},{name:"Install react-hot-toast (npm install react-hot-toast). Add <Toaster position='top-right' /> in providers.jsx",detail:"Add toast.success('Login successful') in useAuth.login(). Add toast.error(err.message) in all service catch blocks",url:"https://react-hot-toast.com/",type:"doc"},{name:"Verify /admin route blocked for USER role → redirects to /403. Admin login → /admin loads successfully",detail:"Login as different roles and confirm each guard works. Check no console errors in browser",url:"https://reactrouter.com/en/main/start/tutorial",type:"doc"},{name:"Verify ShopkeeperContext, CAContext, BlogContext all fetch real data on app load (no mock arrays)",detail:"Open Network tab: confirm GET /api/shopkeepers, GET /api/cas called on app startup. Contexts update with real data",url:"https://vitejs.dev/guide/",type:"doc"}]},15:{title:"Node.js Basics – Event Loop, Async/Await, Modules",week:"Week 3 — Node.js, Microservices & Cloud",mock:!1,dsa:[{name:"Reverse Bits",time:"15m",url:y+"reverse-bits/"},{name:"Number of 1 Bits",time:"10m",url:y+"number-of-1-bits/"},{name:"Missing Number",time:"10m",url:y+"missing-number/"},{name:"Sum of Two Integers",time:"20m",url:y+"sum-of-two-integers/"},{name:"Counting Bits",time:"15m",url:y+"counting-bits/"},{name:"Single Number",time:"10m",url:y+"single-number/"},{name:"Spiral Matrix",time:"20m",url:y+"spiral-matrix/"},{name:"Rotate Image",time:"20m",url:y+"rotate-image/"}],learning:[{name:"Node.js Crash Course – event loop, async/await, fs, http, npm",resource:"Traversy Media Node.js",url:"https://www.youtube.com/watch?v=fBNz5xF-Kx4",type:"yt"},{name:"Node.js official docs",resource:"nodejs.org",url:"https://nodejs.org/en/docs",type:"doc"}],project:[{name:"mkdir spency-order-service && npm init -y. Install: express dotenv cors morgan express-async-errors",detail:"Set 'engines': {'node': '>=20'} in package.json. Create .env: PORT=3001, NODE_ENV=development",url:"https://nodejs.org/en/docs",type:"doc"},{name:'Create src/server.js: Express app on port 3001 with cors({origin:"http://localhost:5173"}), morgan("dev"), express.json()',detail:"Export app and start server separately (for testability). Log 'spency-order-service running on port 3001'",url:"https://expressjs.com/",type:"doc"},{name:"Create src/routes/orderRoutes.js: POST /orders, GET /orders/:id, GET /orders?userId=, PATCH /orders/:id/status",detail:"PATCH updates status: pending → confirmed → shipped → delivered. Validate status transitions",url:"https://expressjs.com/en/guide/routing.html",type:"doc"},{name:"Create src/controllers/orderController.js: createOrder(), getOrderById(), getOrdersByUser(), updateOrderStatus()",detail:"createOrder validates: userId required, items array non-empty, each item has productId+qty+price. Return 400 if invalid",url:"https://expressjs.com/en/guide/routing.html",type:"doc"},{name:"Create src/middleware/errorHandler.js: catches all async errors, returns {status, message, timestamp} JSON",detail:"Register as last middleware: app.use(errorHandler). Matches spency frontend ErrorResponse DTO shape from Spring",url:"https://expressjs.com/en/guide/error-handling.html",type:"doc"},{name:'Test with Postman: POST /orders {userId:"123", items:[{productId:"abc", qty:2, price:100}]} → 201. GET /orders?userId=123 → [order]',detail:'Test PATCH /orders/{id}/status {status:"confirmed"} → 200 updated. PATCH with invalid status → 400',url:"https://expressjs.com/en/guide/error-handling.html",type:"doc"}]},16:{title:"Express.js REST APIs + Middleware + Validation",week:"Week 3 — Node.js, Microservices & Cloud",mock:!0,dsa:[{name:"Jump Game",time:"15m",url:y+"jump-game/"},{name:"Jump Game II",time:"20m",url:y+"jump-game-ii/"},{name:"Gas Station",time:"20m",url:y+"gas-station/"},{name:"Hand of Straights",time:"20m",url:y+"hand-of-straights/"},{name:"Merge Triplets to Form Target",time:"20m",url:y+"merge-triplets-to-form-target-triplet/"},{name:"Partition Labels",time:"25m",url:y+"partition-labels/"}],learning:[{name:"Express.js Crash Course – routing, middleware, error handling, req/res cycle",resource:"Traversy Media Express",url:"https://www.youtube.com/watch?v=L72fhGm1tfE",type:"yt"},{name:"Express.js official docs",resource:"expressjs.com",url:"https://expressjs.com/en/guide/routing.html",type:"doc"}],project:[{name:"mkdir spency-gateway && npm init -y. Install: express http-proxy-middleware jsonwebtoken morgan dotenv",detail:"Gateway runs on port 8090. All spency frontend traffic will route through here. Set JWT_SECRET same as Spring backend",url:"https://expressjs.com/",type:"doc"},{name:"Create proxy rule: /api/users/* + /api/shopkeepers/* + /api/cas/* + /auth/* → http://localhost:8080 (Spring)",detail:"Use createProxyMiddleware({target:'http://localhost:8080', changeOrigin:true, pathRewrite:{'^/':'/'}}) for each prefix",url:"https://github.com/chimurai/http-proxy-middleware",type:"doc"},{name:"Create proxy rule: /api/orders/* → http://localhost:3001 (Node order service)",detail:"Gateway is single entry point. React frontend never calls :8080 or :3001 directly after today",url:"https://github.com/chimurai/http-proxy-middleware",type:"doc"},{name:"Create src/middleware/authMiddleware.js: verify JWT from 'Authorization: Bearer {token}' header → reject 401 if missing/invalid",detail:"Skip auth check for /auth/* paths (register/login). Use jsonwebtoken.verify(token, process.env.JWT_SECRET)",url:"https://github.com/auth0/node-jsonwebtoken",type:"doc"},{name:"Update spency frontend api.js baseURL from http://localhost:8080 to http://localhost:8090",detail:"All 6 module service files automatically route through gateway. No other frontend changes needed",url:"https://vitejs.dev/guide/",type:"doc"},{name:"Test full flow through gateway: login → all 6 modules load. Try request without JWT → gateway returns 401",detail:"Verify morgan logs show requests hitting gateway. Fix any CORS issues on gateway (add cors() middleware)",url:"https://expressjs.com/en/guide/error-handling.html",type:"doc"}]},17:{title:"MongoDB + Mongoose – Order Service Persistence",week:"Week 3 — Node.js, Microservices & Cloud",mock:!1,dsa:[{name:"Min Cost Climbing Stairs",time:"15m",url:y+"min-cost-climbing-stairs/"},{name:"Decode Ways",time:"20m",url:y+"decode-ways/"},{name:"Jump Game III",time:"20m",url:y+"jump-game-iii/"},{name:"Longest Increasing Subsequence",time:"20m",url:y+"longest-increasing-subsequence/"},{name:"Edit Distance",time:"35m",url:y+"edit-distance/"},{name:"Distinct Subsequences",time:"10m",url:y+"distinct-subsequences/"}],learning:[{name:"MongoDB + Mongoose – schema, model, CRUD, populate, aggregation",resource:"Web Dev Simplified Mongoose",url:"https://www.youtube.com/watch?v=DZBGEVgL2eE",type:"yt"}],project:[{name:'Create free MongoDB Atlas M0 cluster. Create database "spency_orders". Get connection string',detail:"Add MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/spency_orders?retryWrites=true to spency-order-service .env",url:"https://www.mongodb.com/cloud/atlas",type:"doc"},{name:"npm install mongoose in spency-order-service. Create src/config/database.js: mongoose.connect(process.env.MONGO_URI)",detail:"Call connectDB() in server.js before app.listen(). Log 'MongoDB connected to spency_orders' on success",url:"https://mongoosejs.com/docs/guide.html",type:"doc"},{name:"Create src/models/Order.js: Schema with userId(String,required), items([{productId,qty,price}]), status(enum:[pending,confirmed,shipped,delivered]), total(Number), createdAt(Date,default:Date.now)",detail:"Add pre('save') hook: this.total = this.items.reduce((sum,i) => sum + i.qty*i.price, 0)",url:"https://mongoosejs.com/docs/guide.html",type:"doc"},{name:"Update createOrder() controller: Order.create({userId, items}) → returns saved document with auto-calculated total",detail:"Update getOrdersByUser(): Order.find({userId}).sort({createdAt:-1}).limit(50)",url:"https://mongoosejs.com/docs/api/model.html",type:"doc"},{name:"Test end-to-end: POST /orders via Postman → check MongoDB Atlas Data Explorer shows new document with correct total",detail:'GET /orders?userId=X returns array. PATCH /orders/{id}/status {status:"confirmed"} → Atlas record updated',url:"https://mongoosejs.com/docs/guide.html",type:"doc"}]},18:{title:"Microservices Communication – REST + Circuit Breaker",week:"Week 3 — Node.js, Microservices & Cloud",mock:!0,dsa:[{name:"Flood Fill",time:"15m",url:y+"flood-fill/"},{name:"01 Matrix",time:"20m",url:y+"01-matrix/"},{name:"Rotting Oranges",time:"20m",url:y+"rotting-oranges/"},{name:"Walls and Gates",time:"20m",url:y+"walls-and-gates/"},{name:"Shortest Path in Binary Matrix",time:"25m",url:y+"shortest-path-in-binary-matrix/"},{name:"Word Ladder",time:"20m",url:y+"word-ladder/"}],learning:[{name:"Microservices patterns – sync REST, async events, API Gateway, service mesh",resource:"ByteByteGo Microservices",url:"https://www.youtube.com/watch?v=lTAcCNbJ7KE",type:"yt"}],project:[{name:"Add to pom.xml: resilience4j-spring-boot3, spring-boot-starter-actuator, spring-boot-starter-aop",detail:"Add in application.yml: resilience4j.circuitbreaker.instances.orderService.slidingWindowSize=5, failureRateThreshold=50",url:"https://resilience4j.readme.io/docs/circuitbreaker",type:"doc"},{name:"Create OrderServiceClient.java: calls GET http://localhost:8090/api/orders?userId={id} via RestTemplate",detail:"@Component. Inject RestTemplate @Bean. Returns List<OrderResponse>. HTTP call goes through spency-gateway",url:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/client/RestTemplate.html",type:"doc"},{name:'Add @CircuitBreaker(name="orderService", fallbackMethod="getOrdersFallback") on getOrders(String userId)',detail:"fallback returns empty List<OrderResponse>. After 5 failures circuit opens, fallback fires immediately without HTTP call",url:"https://resilience4j.readme.io/docs/circuitbreaker",type:"doc"},{name:'Add @Retry(name="orderService", maxAttempts=3) on POST order creation call',detail:"3 retry attempts with 500ms wait. After all fail: circuit breaker takes over. Configure in application.yml",url:"https://resilience4j.readme.io/docs/retry",type:"doc"},{name:"Test: stop spency-order-service. Call GET /api/users/{id} from Spring (which fetches orders). Should return user with orders:[] from fallback",detail:"Restart order-service: circuit closes after success threshold. Orders load again. Check /actuator/health for circuit state",url:"https://resilience4j.readme.io/docs/circuitbreaker",type:"doc"}]},19:{title:"Redis – Caching, TTL, Rate Limiting",week:"Week 3 — Node.js, Microservices & Cloud",mock:!1,dsa:[{name:"Number of Connected Components",time:"20m",url:y+"number-of-connected-components-in-an-undirected-graph/"},{name:"Graph Valid Tree",time:"20m",url:y+"graph-valid-tree/"},{name:"Redundant Connection",time:"20m",url:y+"redundant-connection/"},{name:"Accounts Merge",time:"25m",url:y+"accounts-merge/"},{name:"Longest Substring Without Repeating",time:"20m",url:y+"longest-substring-without-repeating-characters/"},{name:"Minimum Window Substring",time:"15m",url:y+"minimum-window-substring/"}],learning:[{name:"Redis crash course – strings, hashes, sorted sets, TTL, pub/sub",resource:"TechWorld with Nana Redis",url:"https://www.youtube.com/watch?v=jgpVdJB2sKQ",type:"yt"},{name:"Spring Boot Redis with Lettuce",resource:"Baeldung",url:"https://www.baeldung.com/spring-data-redis-tutorial",type:"doc"}],project:[{name:"Add spring-boot-starter-data-redis to pom.xml. Add redis:7-alpine to docker-compose.yml (ports: 6379:6379). Set spring.data.redis.host=localhost + port=6379",detail:"Run docker-compose up redis. Spring auto-connects on startup. Check logs: 'Connected to Redis'",url:"https://www.baeldung.com/spring-data-redis-tutorial",type:"doc"},{name:"Create RedisCacheConfig.java: @EnableCaching + @Bean CacheManager with RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(5))",detail:"5m TTL for all caches by default. Add @EnableCaching on SpencyApplication class",url:"https://docs.spring.io/spring-data/redis/docs/current/reference/html/",type:"doc"},{name:'Add @Cacheable("users") on UserService.getUserById(id). Add @CacheEvict(value="users", key="#id") on updateUser() and deleteUser()',detail:"First GET /api/users/1: DB query + cache write. Second GET: Redis serves it (no DB log). Update/Delete evicts key",url:"https://www.baeldung.com/spring-data-redis-tutorial",type:"doc"},{name:'Add @Cacheable("shopkeepers") on ShopkeeperService.findAll() and findByCategory(cat). Add @CacheEvict on create/update/delete',detail:"Spency shopkeeper listings are read-heavy. 5m TTL means dashboard loads fast on repeat visits",url:"https://www.baeldung.com/spring-data-redis-tutorial",type:"doc"},{name:'Add @Cacheable("cas") on CAService.findAll() and findBySpecialization(spec)',detail:"CA search results cached. Spency CA listing page loads from Redis on subsequent visits within 5 minutes",url:"https://www.baeldung.com/spring-data-redis-tutorial",type:"doc"},{name:"Verify caching: GET /api/shopkeepers twice. First call logs SQL. Second call: no SQL log (Redis). Run redis-cli KEYS '*' to see cached keys",detail:"Test eviction: POST /api/shopkeepers → @CacheEvict fires → GET /api/shopkeepers again → fresh DB query",url:"https://redis.io/docs/connect/cli/",type:"doc"}]},20:{title:"Kafka – Topics, Producers, Consumers",week:"Week 3 — Node.js, Microservices & Cloud",mock:!0,dsa:[{name:"Alien Dictionary",time:"25m",url:y+"alien-dictionary/"},{name:"Topological Sort (Course Schedule)",time:"25m",url:y+"course-schedule/"},{name:"Network Delay Time",time:"20m",url:y+"network-delay-time/"},{name:"Cheapest Flights Within K Stops",time:"25m",url:y+"cheapest-flights-within-k-stops/"},{name:"Swim in Rising Water",time:"25m",url:y+"swim-in-rising-water/"}],learning:[{name:"Kafka in 30 minutes – topics, partitions, offsets, consumer groups",resource:"Conduktor Kafka",url:"https://www.youtube.com/watch?v=uvb00oaa3k8",type:"yt"},{name:"Apache Kafka Documentation",resource:"kafka.apache.org",url:"https://kafka.apache.org/documentation/",type:"doc"}],project:[{name:"Add to docker-compose.yml: zookeeper (confluentinc/cp-zookeeper:7.5) on port 2181, kafka (confluentinc/cp-kafka:7.5) on port 9092 with KAFKA_ZOOKEEPER_CONNECT + KAFKA_AUTO_CREATE_TOPICS_ENABLE=true",detail:"Run docker-compose up -d zookeeper kafka. Verify: docker exec kafka kafka-topics.sh --bootstrap-server localhost:9092 --list",url:"https://kafka.apache.org/quickstart",type:"doc"},{name:"Add spring-kafka to pom.xml. Create KafkaProducerConfig.java: StringSerializer for key+value, bootstrap.servers=localhost:9092",detail:"Create KafkaConsumerConfig.java: StringDeserializer, group-id=spency-notifications, auto.offset.reset=earliest",url:"https://docs.spring.io/spring-kafka/docs/current/reference/html/",type:"doc"},{name:'Create KafkaTopicConfig.java: @Bean NewTopic for "spency-order-events" (3 partitions, 1 replica) and "spency-saga-compensations" (1 partition)',detail:"3 partitions for order-events allows parallel consumption. 1 partition for compensations ensures ordered processing",url:"https://docs.spring.io/spring-kafka/docs/current/reference/html/",type:"doc"},{name:"In spency-order-service: npm install kafkajs. On createOrder() success: publish to spency-order-events topic with key=orderId",detail:"Message value: JSON.stringify({orderId, userId, total, items, timestamp}). Use kafkajs producer.send()",url:"https://kafka.js.org/docs/getting-started",type:"doc"},{name:"Create OrderEventConsumer.java in Spring: @KafkaListener(topics='spency-order-events', groupId='spency-notifications')",detail:"On message: parse JSON, log 'Order created: {orderId} for user {userId} total {total}', increment user.orderCount in DB",url:"https://docs.spring.io/spring-kafka/docs/current/reference/html/",type:"doc"},{name:"Test: docker-compose up. POST /orders via Node order service → Spring consumer logs order event within 1-2 seconds",detail:"Run kafka-console-consumer.sh --topic spency-order-events --from-beginning to see raw messages",url:"https://kafka.apache.org/quickstart",type:"doc"}]},21:{title:"Event-Driven Architecture – Saga Pattern",week:"Week 3 — Node.js, Microservices & Cloud",mock:!1,dsa:[{name:"Majority Element",time:"10m",url:y+"majority-element/"},{name:"Next Permutation",time:"20m",url:y+"next-permutation/"},{name:"Wiggle Sort II",time:"20m",url:y+"wiggle-sort-ii/"},{name:"Reverse Pairs",time:"30m",url:y+"reverse-pairs/"},{name:"Sort Colors",time:"15m",url:y+"sort-colors/"},{name:"Min Arrows to Burst Balloons",time:"25m",url:y+"minimum-number-of-arrows-to-burst-balloons/"}],learning:[{name:"Event driven architecture – Saga, Outbox pattern, eventual consistency",resource:"GOTO Conf Event Driven",url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"}],project:[{name:"Create AccountDebitEvent.java POJO: orderId(UUID), userId(UUID), amount(BigDecimal), timestamp. Create CompensateOrderEvent.java: orderId, reason",detail:"Serialize to JSON for Kafka. Add @JsonFormat on timestamp field for ISO-8601 format",url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"},{name:"Create AccountService.java: debit(UUID userId, BigDecimal amount) — throws InsufficientFundsException if balance < amount",detail:'On success: update balance in DB + publish AccountDebitedEvent to "spency-account-events" topic',url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"},{name:"On message: parse JSON, log 'Order created: {orderId} for user {userId} total {total}', increment user.orderCount in DB. @KafkaListener on OrderEventConsumer: on 'spency-order-events' → call accountService.debit(). On InsufficientFundsException → publish CompensateOrderEvent to 'spency-saga-compensations'",detail:"This is the Saga coordinator. Order created → debit attempted → success or compensate",url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"},{name:"Create CompensationConsumer.java @KafkaListener on 'spency-saga-compensations' → call Node order service PATCH /orders/{orderId}/status {status:'failed'}",detail:"Use RestTemplate to call spency-gateway. Failed order visible in spency order history as 'Payment Failed'",url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"},{name:'Add idempotency: before processing any OrderCreatedEvent, check Redis SET NX "processed:{orderId}" EX 86400',detail:"If key already exists: log 'Skipping duplicate event {orderId}' and return. Prevents double-processing on Kafka redelivery",url:"https://redis.io/docs/",type:"doc"},{name:'Test Saga: create order with userId that has insufficient account balance → confirm CompensateOrderEvent published → order status becomes "failed" in MongoDB Atlas',detail:"Replay same event (send same message to Kafka again) → confirm idempotency check skips it",url:"https://www.youtube.com/watch?v=STKCRSUsyP0",type:"yt"}]},22:{title:"Docker – Containers, Images, Compose",week:"Week 4 — Cloud, Architecture & AI",mock:!0,dsa:[{name:"Min Cost to Connect Ropes",time:"15m",url:y+"minimum-cost-to-connect-sticks/"},{name:"Min Interval for Each Query",time:"30m",url:y+"minimum-interval-to-include-each-query/"},{name:"Car Fleet",time:"20m",url:y+"car-fleet/"},{name:"Asteroid Collision",time:"20m",url:y+"asteroid-collision/"},{name:"Decode String",time:"20m",url:y+"decode-string/"},{name:"Remove K Digits",time:"15m",url:y+"remove-k-digits/"}],learning:[{name:"Docker in 100 seconds + full crash course – images, volumes, networking",resource:"Fireship Docker",url:"https://www.youtube.com/watch?v=Gjnup-PuquQ",type:"yt"},{name:"Docker official Get Started",resource:"docs.docker.com",url:"https://docs.docker.com/get-started/",type:"doc"}],project:[{name:"Write Dockerfile for spency-backend: FROM maven:3.9-eclipse-temurin-21 AS build (RUN mvn package -DskipTests), FROM eclipse-temurin:21-jre AS run (COPY --from=build target/*.jar app.jar)",detail:'Multi-stage build: final image ~250MB not 600MB. EXPOSE 8080. CMD ["java","-jar","app.jar"]',url:"https://docs.docker.com/develop/develop-images/multistage-build/",type:"doc"},{name:"Write Dockerfile for spency-order-service: FROM node:20-alpine. RUN addgroup -S nodejs && adduser -S node -G nodejs. COPY package*.json ./. RUN npm ci --only=production.",detail:"Non-root user for security. --only=production excludes devDependencies from image",url:"https://docs.docker.com/get-started/",type:"doc"},{name:"Write Dockerfile for spency-gateway: same node:20-alpine pattern. EXPOSE 8090",detail:"Copy .env.example as documentation but read env vars from docker-compose environment section",url:"https://docs.docker.com/get-started/",type:"doc"},{name:"Update docker-compose.yml: 7 services: postgres, mongo, redis, zookeeper, kafka, spency-backend, spency-order-service, spency-gateway. Each with environment: section for all required env vars",detail:"depends_on: spency-backend depends on postgres + redis + kafka being healthy. Gateway depends on backend + order-service",url:"https://docs.docker.com/compose/",type:"doc"},{name:"Add healthcheck to each service in docker-compose. Postgres: test: pg_isready -U spency_user. Spring: test: curl -f http://localhost:8080/health.",detail:"interval: 30s, timeout: 10s, retries: 3. Services marked depends_on: condition: service_healthy",url:"https://docs.docker.com/compose/compose-file/05-services/",type:"doc"},{name:"Run docker-compose up --build. Confirm all 8 containers start healthy. Test: POST http://localhost:8090/auth/register returns 201",detail:"Check with: docker-compose ps (all should show 'healthy'). Fix any startup failures with docker-compose logs {service}",url:"https://docs.docker.com/compose/",type:"doc"}]},23:{title:"Dockerize All Services + GitHub Actions CI",week:"Week 4 — Cloud, Architecture & AI",mock:!1,dsa:[{name:"Find All Anagrams in String",time:"20m",url:y+"find-all-anagrams-in-a-string/"},{name:"Permutation in String",time:"15m",url:y+"permutation-in-string/"},{name:"Longest Repeating Char Replacement",time:"20m",url:y+"longest-repeating-character-replacement/"},{name:"Sliding Window Maximum",time:"25m",url:y+"sliding-window-maximum/"},{name:"Minimum Size Subarray Sum",time:"15m",url:y+"minimum-size-subarray-sum/"},{name:"Fruit Into Baskets",time:"25m",url:y+"fruit-into-baskets/"}],learning:[{name:"GitHub Actions CI – build, test, push image to Docker Hub on push",resource:"TechWorld with Nana GitHub Actions",url:"https://www.youtube.com/watch?v=R8_veQiYBjI",type:"yt"}],project:[{name:"Create .github/workflows/backend-ci.yml: trigger on push to main/develop, runs-on: ubuntu-latest",detail:"Steps: actions/checkout, actions/setup-java@v4 (java-version:21), actions/cache (maven), ./mvnw test, docker/build-push-action to Docker Hub tagged with latest + github.sha",url:"https://docs.github.com/en/actions/publishing-packages/publishing-docker-images",type:"doc"},{name:"Create .github/workflows/frontend-ci.yml: node 20, npm ci, npm run build. On PR also run: npx eslint src/ (fail CI on lint errors)",detail:"Use actions/upload-artifact to save dist/ folder for 30 days. Future step: auto-deploy to S3",url:"https://docs.github.com/en/actions",type:"doc"},{name:"Create .github/workflows/order-service-ci.yml and gateway-ci.yml: node 20, npm ci, npm test, docker build + push",detail:"Tag images: {dockerhub-user}/spency-{service}:${{github.sha}} and :latest",url:"https://docs.github.com/en/actions",type:"doc"},{name:"Add GitHub repository secrets: DOCKER_USERNAME, DOCKER_PASSWORD.",detail:"Never commit credentials. Use GITHUB_TOKEN for GitHub Container Registry as alternative to Docker Hub",url:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",type:"doc"},{name:"Push to main branch → open Actions tab → all 4 workflows should go green. Check Docker Hub — all 3 images appear",detail:"Fix any test failures. Images should be tagged with both :latest and the git SHA",url:"https://docs.github.com/en/actions",type:"doc"},{name:"Add CI status badges to README.md: ![Backend CI]({repo-url}/actions/workflows/backend-ci.yml/badge.svg)",detail:"Green badges confirm CI is healthy. Merge to main → README shows 4 green badges",url:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge",type:"doc"}]},24:{title:"AWS EC2 – Launch, Configure, Deploy App",week:"Week 4 — Cloud, Architecture & AI",mock:!0,dsa:[{name:"Non-overlapping Intervals",time:"20m",url:y+"non-overlapping-intervals/"},{name:"Interval List Intersections",time:"20m",url:y+"interval-list-intersections/"},{name:"Min Rounds to Complete Tasks",time:"15m",url:y+"minimum-rounds-to-complete-all-tasks/"},{name:"Maximum Points on a Line",time:"25m",url:y+"max-points-on-a-line/"},{name:"Min Domino Rotations",time:"20m",url:y+"minimum-domino-rotations-for-equal-row/"},{name:"Max Sum Obtained of Any Permutation",time:"20m",url:y+"maximum-sum-obtained-of-any-permutation/"}],learning:[{name:"AWS for Beginners – EC2, security groups, SSH, Elastic IP (first 2h)",resource:"freeCodeCamp AWS",url:"https://www.youtube.com/watch?v=ulprqHHWlng",type:"yt"},{name:"AWS EC2 User Guide",resource:"docs.aws.amazon.com",url:"https://docs.aws.amazon.com/ec2/",type:"doc"}],project:[{name:"Launch EC2 t2.micro (Amazon Linux 2023) in us-east-1. Create key pair spency-key.pem. chmod 400 spency-key.pem locally",detail:"SSH in: ssh -i spency-key.pem ec2-user@{public-ip}. You should get EC2 shell prompt",url:"https://docs.aws.amazon.com/ec2/",type:"doc"},{name:"On EC2: sudo yum update -y. Install Docker: sudo yum install docker -y && sudo systemctl start docker && sudo usermod -aG docker ec2-user",detail:"Install Docker Compose v2: sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64",url:"https://docs.docker.com/engine/install/",type:"doc"},{name:"Create /home/ec2-user/spency.env on EC2 with: SPRING_DATASOURCE_URL, SPRING_DATASOURCE_USERNAME/PASSWORD, MONGO_URI, REDIS_HOST=redis, JWT_SECRET, OPENAI_API_KEY",detail:"Never commit this file. In production use AWS SSM Parameter Store instead. chmod 600 spency.env",url:"https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html",type:"doc"},{name:"Copy docker-compose.yml to EC2 (scp -i spency-key.pem docker-compose.yml ec2-user@{ip}:~/). Run: docker-compose --env-file spency.env pull && docker-compose --env-file spency.env up -d",detail:"Images pulled from Docker Hub. All containers start. Check: docker-compose ps — all healthy",url:"https://docs.docker.com/compose/",type:"doc"},{name:"Configure Security Group inbound rules: port 8090 (gateway) TCP from 0.0.0.0/0. Port 22 (SSH) from your IP only.",detail:"All spency traffic enters through gateway port 8090 only. This matches production security posture",url:"https://docs.aws.amazon.com/vpc/latest/userguide/security-groups.html",type:"doc"},{name:"Test from local machine: POST http://{ec2-ip}:8090/auth/register {email, password, firstName, lastName} → 201 {token}",detail:"Update spency frontend .env to point at EC2 temporarily: VITE_API_BASE_URL=http://{ec2-ip}:8090. All 6 modules work remotely",url:"https://docs.aws.amazon.com/ec2/",type:"doc"}]},25:{title:"AWS S3 + Load Balancer + CloudFront CDN",week:"Week 4 — Cloud, Architecture & AI",mock:!1,dsa:[{name:"Regular Expression Matching",time:"30m",url:y+"regular-expression-matching/"},{name:"Wildcard Matching",time:"25m",url:y+"wildcard-matching/"},{name:"Burst Balloons",time:"30m",url:y+"burst-balloons/"},{name:"Stone Game",time:"15m",url:y+"stone-game/"},{name:"Palindrome Partitioning",time:"20m",url:y+"palindrome-partitioning/"}],learning:[{name:"S3 – buckets, IAM policies, pre-signed URLs, static site hosting",resource:"freeCodeCamp AWS S3",url:"https://www.youtube.com/watch?v=mxT233EdY5c",type:"yt"},{name:"AWS Application Load Balancer docs",resource:"docs.aws.amazon.com",url:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/",type:"doc"}],project:[{name:"In spency: set VITE_API_BASE_URL=https://{alb-dns}/api in .env.production. Run npm run build → dist/ created with hashed filenames",detail:"Verify dist/index.html exists. All JS/CSS assets have content hashes for long-term caching on CloudFront",url:"https://vitejs.dev/guide/env-and-mode.html",type:"doc"},{name:"Use infra/s3/bucket-policy-template.json: create S3 bucket 'spency-ui-prod' in us-east-1. Enable static website hosting. Block all public access (CloudFront uses OAI)",detail:"Update bucket-policy-template.json with your bucket ARN. Apply policy via AWS console or CLI",url:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",type:"doc"},{name:"Use infra/iam/s3-deploy-policy.json + trust-policy.json: create IAM user 'spency-deployer' with s3:PutObject + s3:DeleteObject + s3:ListBucket on spency-ui-prod/*",detail:"Download access keys for spency-deployer. Run: aws configure --profile spency",url:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",type:"doc"},{name:"Deploy: aws s3 sync dist/ s3://spency-ui-prod --delete --cache-control 'max-age=31536000' --exclude 'index.html' --profile spency. Then sync index.html separately with no-cache",detail:"--delete removes old files. Long cache for hashed assets, no-cache for index.html (SPA entry point must always be fresh)",url:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html",type:"doc"},{name:"Create CloudFront distribution: S3 origin with OAI, default root = index.html. Custom error: 403 and 404 → /index.html response code 200 (required for React Router SPA)",detail:'Enable HTTPS redirect. Note distribution domain (xyz.cloudfront.net). Create invalidation on deploy: aws cloudfront create-invalidation --paths "/*"',url:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/",type:"doc"},{name:"Create Application Load Balancer: internet-facing, HTTP:80 listener → target group = EC2 port 8090. Test: spency React at CloudFront URL → login → all 6 modules work via ALB → EC2 gateway",detail:"Full production flow: HTTPS CloudFront → S3 (React assets) + ALB (API calls) → EC2 gateway → Spring/Node",url:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/",type:"doc"}]},26:{title:"System Design – URL Shortener + News Feed",week:"Week 4 — Cloud, Architecture & AI",mock:!0,dsa:[{name:"Design HashMap",time:"15m",url:y+"design-hashmap/"},{name:"Design Circular Queue",time:"15m",url:y+"design-circular-queue/"},{name:"LFU Cache",time:"35m",url:y+"lfu-cache/"},{name:"All O'one Data Structure",time:"25m",url:y+"all-oone-data-structure/"},{name:"Design Skiplist",time:"30m",url:y+"design-skiplist/"}],learning:[{name:"System Design – URL shortener deep dive (base62, Redis, Postgres, CDN)",resource:"ByteByteGo System Design",url:"https://www.youtube.com/watch?v=JQDHz72OA3c",type:"yt"},{name:"System Design Primer – GitHub",resource:"github.com",url:"https://github.com/donnemartin/system-design-primer",type:"doc"}],project:[{name:"Draw complete spency architecture diagram (draw.io or paper): React→CloudFront/S3, ALB→Gateway:8090→Spring:8080/Node:3001→Postgres/MongoDB, Redis, Kafka, EC2",detail:"Include all component ports, data flow arrows, and which data store each service owns",url:"https://app.diagrams.net/",type:"doc"},{name:"Bottleneck analysis: at 100k shopkeepers GET /api/shopkeepers is slow. Design Postgres read replica",detail:"Add spring.datasource.read.url= in application.properties. Route all @Transactional(readOnly=true) queries to replica",url:"https://github.com/donnemartin/system-design-primer",type:"doc"},{name:"Design horizontal scaling: multiple spency-backend instances behind ALB. Identify what breaks",detail:"JWT is stateless (OK). Redis is shared (OK). Kafka consumer group rebalances automatically (OK). Flyway migrations need single-instance lock (use Flyway team lock)",url:"https://github.com/donnemartin/system-design-primer",type:"doc"},{name:"Design Kafka partition strategy for spency-order-events: partition by userId so all orders for same user go to same partition (ordered delivery per user)",detail:"Discuss hot partition risk: one power user with 1000 orders/min monopolises 1 partition. Solution: use consistent hashing",url:"https://kafka.apache.org/documentation/",type:"doc"},{name:"Write Architecture Decision Record (ADR): docs/adr/001-gateway-choice.md — Why Express gateway over Spring Cloud Gateway",detail:"Pros: simpler, fast startup, team JS familiarity. Cons: less Java ecosystem. Add docs/adr/ folder to repo",url:"https://github.com/joelparkerhenderson/architecture-decision-record",type:"doc"}]},27:{title:"Caching Patterns + Rate Limiting + API Gateway",week:"Week 4 — Cloud, Architecture & AI",mock:!1,dsa:[{name:"Kth Largest in Array",time:"15m",url:y+"kth-largest-element-in-an-array/"},{name:"Find K Pairs Smallest Sums",time:"20m",url:y+"find-k-pairs-with-smallest-sums/"},{name:"Max Sum Circular Subarray",time:"20m",url:y+"maximum-sum-circular-subarray/"},{name:"Largest Number",time:"15m",url:y+"largest-number/"},{name:"Maximum Performance of a Team",time:"30m",url:y+"maximum-performance-of-a-team/"},{name:"IPO",time:"20m",url:y+"ipo/"}],learning:[{name:"Caching patterns – write-through, write-behind, cache-aside, read-through",resource:"ByteByteGo Caching",url:"https://www.youtube.com/watch?v=dGAgxozNWFE",type:"yt"},{name:"Rate limiting algorithms – token bucket, leaky bucket, sliding window log",resource:"ByteByteGo Rate Limiting",url:"https://www.youtube.com/watch?v=FU4WlwfS3G0",type:"yt"}],project:[{name:"Add to pom.xml: com.giffing.bucket4j.spring.boot.starter:bucket4j-spring-boot-starter. Configure in application.yml: bucket4j filters with /api/.* url and capacity=100 per 60s",detail:"Bucket4j uses Redis as distributed counter. Multiple spency-backend instances share same rate limit bucket per user",url:"https://www.baeldung.com/spring-bucket4j",type:"doc"},{name:"Create RateLimitConfig.java: extract userId claim from JWT in request header, use as Redis bucket key",detail:"Different users have independent 100 req/min buckets. Anonymous (no JWT) requests share one global bucket",url:"https://www.baeldung.com/spring-bucket4j",type:"doc"},{name:"Add Cache-Control header to GET /api/shopkeepers and GET /api/cas: ResponseEntity.ok().cacheControl(CacheControl.maxAge(1, TimeUnit.HOURS)).body(result)",detail:"CloudFront caches shopkeeper/CA listings for 1 hour. Reduces origin load for spency most-read endpoints",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",type:"doc"},{name:"Add Cache-Control: no-store, private to GET /api/users/{id} and all /auth/* responses",detail:"Personal data and auth tokens must not be cached by CDN or shared proxies. Add Vary: Authorization header too",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",type:"doc"},{name:"Install Apache Bench: brew install httpd. Run: ab -n 500 -c 20 -H 'Authorization: Bearer {token}' http://localhost:8090/api/shopkeepers",detail:"After 100 requests for that token: expect 429 Too Many Requests. Different token → fresh 100 req bucket",url:"https://httpd.apache.org/docs/2.4/programs/ab.html",type:"doc"}]},28:{title:"AI Basics – LLMs, Prompt Engineering, RAG Concepts",week:"Week 4 — Cloud, Architecture & AI",mock:!0,dsa:[{name:"Valid Sudoku",time:"15m",url:y+"valid-sudoku/"},{name:"Sudoku Solver",time:"30m",url:y+"sudoku-solver/"},{name:"Count of Range Sum",time:"25m",url:y+"count-of-range-sum/"},{name:"Russian Doll Envelopes",time:"25m",url:y+"russian-doll-envelopes/"},{name:"Maximum Vacation Days",time:"25m",url:y+"maximum-vacation-days/"}],learning:[{name:"LLMs explained – tokens, embeddings, temperature, context window, fine-tuning",resource:"Andrej Karpathy Intro to LLMs",url:"https://www.youtube.com/watch?v=zjkBMFhNj_g",type:"yt"},{name:"OpenAI API Documentation",resource:"platform.openai.com",url:"https://platform.openai.com/docs",type:"doc"}],project:[{name:"Add spring-ai-openai-spring-boot-starter to pom.xml. Set spring.ai.openai.api-key=${OPENAI_API_KEY} in application.properties (never hardcode)",detail:"Add OPENAI_API_KEY to spency.env on EC2 and to GitHub Actions secrets for CI builds",url:"https://platform.openai.com/docs/api-reference/chat",type:"doc"},{name:"Create AIRequest.java DTO: {query: String}. Create AIResponse.java DTO: {suggestion: String, matchedCAs: List<CASummary>, matchedShopkeepers: List<ShopkeeperSummary>}",detail:"CASummary: {id, name, specialization}. ShopkeeperSummary: {id, name, category}. Used by spency AI assistant panel",url:"https://platform.openai.com/docs/",type:"doc"},{name:"Create AIService.java: fetch top 10 CAs + top 10 Shopkeepers from DB. Build system prompt: 'You are a spency assistant...' Return JSON with suggestion, matchedCAs, matchedShopkeepers.",detail:"Use temperature=0.3 for consistent recommendations. max_tokens=500. Request response_format={type:'json_object'}",url:"https://platform.openai.com/docs/guides/prompt-engineering",type:"doc"},{name:"Create AIController.java: POST /api/ai/suggest @RequestBody AIRequest → calls AIService → returns AIResponse",detail:"Wrap OpenAI call in try-catch. On RateLimitException → return last Redis-cached response for that query. On timeout → return top-3 CAs by rating as fallback",url:"https://platform.openai.com/docs/api-reference/chat",type:"doc"},{name:"Cache successful AI responses in Redis: key='ai:suggest:{queryHash}' TTL=15 minutes",detail:"queryHash = SHA-256 of lowercased trimmed query. Same query from different users returns cached response (AI calls are expensive)",url:"https://redis.io/docs/",type:"doc"},{name:"Test: POST /api/ai/suggest {query:'I need a CA for GST filing in Mumbai'} → returns {suggestion:'...', matchedCAs:[...], matchedShopkeepers:[]}",detail:"Send same query twice → second response from Redis (check logs: no OpenAI call on second request)",url:"https://platform.openai.com/docs/api-reference/chat",type:"doc"}]},29:{title:"Integrate OpenAI API – AI Assistant Feature",week:"Week 4 — Cloud, Architecture & AI",mock:!1,dsa:[{name:"Concatenated Words",time:"25m",url:y+"concatenated-words/"},{name:"Longest Word in Dictionary",time:"15m",url:y+"longest-word-in-dictionary/"},{name:"Design Search Autocomplete",time:"35m",url:y+"design-search-autocomplete-system/"},{name:"Stream of Characters",time:"25m",url:y+"stream-of-characters/"},{name:"Min Cost to Cut a Stick",time:"20m",url:y+"minimum-cost-to-cut-a-stick/"}],learning:[{name:"RAG basics – embeddings, vector search, semantic similarity, pgvector",resource:"Sam Witteveen RAG Tutorial",url:"https://www.youtube.com/watch?v=T-D1OfcDW1M",type:"yt"},{name:"LangChain4j for Java",resource:"docs.langchain4j.dev",url:"https://docs.langchain4j.dev/get-started",type:"doc"}],project:[{name:"Update AIController: add GET /api/ai/stream?query= endpoint returning SseEmitter. On each OpenAI stream chunk push data to SseEmitter. Complete emitter on finish",detail:"Use @GetMapping + produces=MediaType.TEXT_EVENT_STREAM_VALUE. SseEmitter timeout = 60_000ms",url:"https://platform.openai.com/docs/api-reference/streaming",type:"doc"},{name:"Create src/shared/components/AIAssistant.jsx in spency: query input field, Submit button, scrollable response area",detail:"State: {query, response, loading, error}. Response area appends tokens as they stream in (typewriter effect)",url:"https://react.dev/",type:"doc"},{name:'Wire EventSource in AIAssistant.jsx: new EventSource(apiBase+"/ai/stream?query="+encodeURIComponent(query))',detail:"evtSource.onmessage: setResponse(prev => prev + event.data). evtSource.onerror: close + setError. evtSource.onopen: setLoading(false)",url:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",type:"doc"},{name:"Add AIAssistant to spency user dashboard: src/modules/user/pages/Dashboard.jsx — collapsible card at bottom with default query 'Recommend CAs based on my profile'",detail:"Pass user.specialization needs as initial query if available from UserContext",url:"https://react.dev/",type:"doc"},{name:"Add AIAssistant to CA search page: src/modules/ca/pages/CASearch.jsx — user types need, AI suggests best matching CAs from spency DB",detail:"Replace manual category dropdown with AI-powered text search for CA discovery",url:"https://react.dev/",type:"doc"},{name:"Test streaming: ask 'I need a CA for startup registration in Bangalore' — see tokens appear one-by-one in browser in real time",detail:"Open DevTools Network tab → filter EventStream type → confirm SSE connection with streaming chunks",url:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",type:"doc"}]},30:{title:"Final Day – Mock Interviews + Full Project Review",week:"Week 4 — Cloud, Architecture & AI",mock:!0,dsa:[{name:"Two Sum – explain aloud with Big-O analysis",time:"15m",url:y+"two-sum/"},{name:"LRU Cache – explain design decisions out loud",time:"25m",url:y+"lru-cache/"},{name:"Merge K Sorted Lists – walk through heap approach",time:"20m",url:y+"merge-k-sorted-lists/"},{name:"Design Twitter – full system walkthrough",time:"30m",url:y+"design-twitter/"},{name:"Find Median from Data Stream",time:"30m",url:y+"find-median-from-data-stream/"}],learning:[{name:"Mock interview – Design Instagram / WhatsApp end to end",resource:"ByteByteGo Full System Design",url:"https://www.youtube.com/watch?v=xyLO8ZAk2KE",type:"yt"},{name:"Grokking System Design Interview",resource:"educative.io",url:"https://www.educative.io/courses/grokking-the-system-design-interview",type:"doc"}],project:[{name:"Run ./mvnw test in spency-backend: target 0 failures. Run npm test in spency-order-service and spency-gateway",detail:"Fix any flaky tests. Final count should be 20+ backend tests. All GitHub Actions workflows green",url:"https://maven.apache.org/guides/",type:"doc"},{name:"Full production smoke test: register → login → browse shopkeepers → browse CAs → use AI assistant → place order → verify Kafka event consumed → verify Redis cache hit",detail:"Open DevTools Network: no 4xx/5xx errors anywhere. Check docker-compose logs: consumer group processes Kafka event",url:"https://github.com/donnemartin/system-design-primer",type:"doc"},{name:"Record 10-min Loom walkthrough: demo all 6 spency modules (auth/user/ca/admin/shopkeeper/account). Login as different roles",detail:"Show: login as USER → dashboard → AI assistant. Login as ADMIN → manage all users. Login as SHOPKEEPER → manage inventory. Login as CA → manage profile",url:"https://www.loom.com/",type:"doc"},{name:"In Loom recording explain: why Express gateway (not Spring Cloud), why Kafka for orders (async decoupling), why Redis for CA/shopkeeper listings (read-heavy stable data), why MongoDB for orders (flexible schema)",detail:'Explain Saga pattern: what happens when account balance is insufficient → order auto-compensated to "failed" status',url:"https://github.com/donnemartin/system-design-primer",type:"doc"},{name:"Update README.md: add architecture diagram PNG (from draw.io), env var reference table, local setup (docker-compose up), production deploy guide",detail:"README must let any developer clone repo and run locally in under 10 minutes with just docker-compose up",url:"https://www.makeareadme.com/",type:"doc"},{name:"Final push to GitHub → all 4 CI workflows green → all 3 Docker images tagged :latest on Docker Hub. Production URLs work: CloudFront → React, ALB → all API modules",detail:"Share Loom recording URL in README and on LinkedIn. Tag: #Java #SpringBoot #React #SystemDesign #FullStack",url:"https://docs.github.com/en/actions",type:"doc"}]}};function Kr(e,t){return`ip_d${e}_t${t}`}function Hc(e){return[...e.dsa,...e.learning,...e.project]}function Oh(){try{const e=localStorage.getItem("ip_checked");return e?JSON.parse(e):{}}catch{return{}}}function Nh(e){localStorage.setItem("ip_checked",JSON.stringify(e))}const qh=g.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#f89f1b","aria-hidden":"true",children:g.jsx("path",{d:"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"})}),Uh=g.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#ff4444","aria-hidden":"true",children:g.jsx("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"})}),Bh=g.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#60a5fa","aria-hidden":"true",children:g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-7-7H8v-2h3v2zm5 3H8v-2h8v2zm0-6H8V8h8v2z"})});function Ca({taskKey:e,task:t,type:r,checked:o,onToggle:n}){const a=t.type==="yt",s=r==="dsa"?qh:a?Uh:Bh,i=r==="dsa"?"ip-link-lc":a?"ip-link-yt":"ip-link-doc",c=r==="dsa"?"LeetCode":a?"YouTube":"Docs";return g.jsxs("div",{className:`ip-task${o?" ip-task--done":""}`,children:[g.jsx("input",{type:"checkbox",checked:o,onChange:()=>n(e),"aria-label":`Mark "${t.name}" complete`}),g.jsxs("div",{className:"ip-task-body",children:[g.jsxs("div",{className:"ip-task-title",children:[t.name,r==="dsa"&&g.jsxs("span",{className:"ip-task-time",children:[" (",t.time,")"]})]}),(r==="project"||r==="learning")&&t.detail&&g.jsx("div",{className:"ip-task-sub",children:t.detail}),r==="learning"&&t.resource&&!t.detail&&g.jsx("div",{className:"ip-task-sub",children:t.resource}),r==="learning"&&t.resource&&t.detail&&g.jsx("div",{className:"ip-task-sub",children:t.resource}),g.jsx("div",{className:"ip-task-links",children:g.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:`ip-link ${i}`,children:[s," ",c]})})]})]})}function Wh({dayNum:e,checked:t,onToggle:r}){const o=tn[e];if(!o)return null;const n=o.dsa.reduce((m,u)=>m+parseInt(u.time),0),a=0,s=o.dsa.length,i=o.dsa.length+o.learning.length;i+o.project.length;const c=`ip_mock${e}`,l=!!t[c];return g.jsxs("div",{className:"ip-day-card",children:[g.jsxs("div",{className:"ip-day-header",children:[g.jsxs("div",{className:"ip-day-number",children:["Day ",e]}),g.jsxs("div",{className:"ip-day-meta",children:[g.jsx("h2",{children:o.title}),g.jsx("p",{children:o.week}),g.jsxs("div",{className:"ip-time-chips",children:[g.jsxs("span",{className:"ip-chip ip-chip--dsa",children:["🧠 DSA ",n,"m"]}),g.jsx("span",{className:"ip-chip ip-chip--learn",children:"📘 Learning 2h"}),g.jsx("span",{className:"ip-chip ip-chip--proj",children:"💻 Project 1.5h"}),o.mock&&g.jsx("span",{className:"ip-chip ip-chip--mock",children:"🎤 Mock 30m"})]})]})]}),g.jsxs("div",{className:"ip-section ip-section--dsa",children:[g.jsx("div",{className:"ip-section-title",children:"🧠 DSA — 2 Hours"}),o.dsa.map((m,u)=>{const h=Kr(e,a+u);return g.jsx(Ca,{taskKey:h,task:m,type:"dsa",checked:!!t[h],onToggle:r},h)})]}),g.jsxs("div",{className:"ip-section ip-section--learn",children:[g.jsx("div",{className:"ip-section-title",children:"📘 Learning — 2 Hours"}),o.learning.map((m,u)=>{const h=Kr(e,s+u);return g.jsx(Ca,{taskKey:h,task:m,type:"learning",checked:!!t[h],onToggle:r},h)})]}),g.jsxs("div",{className:"ip-section ip-section--proj",children:[g.jsx("div",{className:"ip-section-title",children:"💻 Project Work — 1.5 Hours"}),o.project.map((m,u)=>{const h=Kr(e,i+u);return g.jsx(Ca,{taskKey:h,task:m,type:"project",checked:!!t[h],onToggle:r},h)})]}),o.mock&&g.jsxs("div",{className:"ip-section ip-section--mock",children:[g.jsx("div",{className:"ip-section-title",children:"🎤 Mock Interview — 30 Minutes"}),g.jsxs("div",{className:`ip-task${l?" ip-task--done":""}`,children:[g.jsx("input",{type:"checkbox",checked:l,onChange:()=>r(c),"aria-label":"Mark mock interview complete"}),g.jsxs("div",{className:"ip-task-body",children:[g.jsx("div",{className:"ip-task-title",children:"Verbal walkthrough drill"}),g.jsxs("div",{className:"ip-task-sub",children:["• 15m: Explain 1 DSA solution aloud (Big-O analysis)",g.jsx("br",{}),"• 10m: Walk through project architecture + trade-offs",g.jsx("br",{}),"• 5m: System design or scaling question"]})]})]})]})]})}function Fh(){const[e,t]=b.useState(Oh),[r,o]=b.useState(1),[n,a]=b.useState(!1),s=b.useRef(null);b.useEffect(()=>{Nh(e)},[e]);const i=b.useCallback(v=>{t(w=>({...w,[v]:!w[v]}))},[]),c=b.useCallback(v=>{o(v),requestAnimationFrame(()=>{var w;(w=s.current)==null||w.scrollIntoView({behavior:"smooth",block:"start"})})},[]),{totalTasks:l,doneTasks:m}=b.useMemo(()=>{let v=0,w=0;for(let k=1;k<=30;k++){const x=tn[k],d=Hc(x);v+=d.length+(x.mock?1:0),d.forEach((p,f)=>{e[Kr(k,f)]&&w++}),x.mock&&e[`ip_mock${k}`]&&w++}return{totalTasks:v,doneTasks:w}},[e]),u=l?Math.round(m/l*100):0,h=b.useCallback(v=>{const w=tn[v],k=Hc(w),x=k.length+(w.mock?1:0);let d=0;return k.forEach((p,f)=>{e[Kr(v,f)]&&d++}),w.mock&&e[`ip_mock${v}`]&&d++,x?d/x:0},[e]);return g.jsxs("div",{className:"ip-page",children:[g.jsxs("header",{className:"ip-header",children:[g.jsx("h1",{children:"🚀 30-Day Full-Stack Interview Learning Plan"}),g.jsx("p",{children:"Java · Spring Boot · React · Node.js · PostgreSQL · Redis · Kafka · Docker · AWS · System Design · AI"}),g.jsxs("div",{className:"ip-legend",children:[g.jsx("span",{children:"🧠 DSA 2h"}),g.jsx("span",{children:"📘 Learning 2h"}),g.jsx("span",{children:"💻 Project 1.5h"}),g.jsx("span",{children:"🎤 Mock 30m (alt days)"}),g.jsx("span",{children:"⏱ 6h/day total"})]})]}),g.jsxs("div",{className:"ip-main",children:[g.jsxs("button",{className:"ip-roadmap-toggle",onClick:()=>a(v=>!v),children:["📊 ",n?"Hide":"View"," Full Stack Roadmap"]}),n&&g.jsxs("div",{className:"ip-roadmap",children:[g.jsx("h3",{children:"Full Stack Learning Pipeline → Spency Project"}),g.jsxs("div",{className:"ip-arch-box",children:[g.jsx("span",{className:"ip-arch-title",children:"Spency Target Architecture"}),g.jsx("br",{}),g.jsx("span",{className:"ip-arch-react",children:"React (Vite+Tailwind) — 6 modules: auth/user/ca/admin/shopkeeper/account"}),g.jsx("br",{}),"    │",g.jsx("br",{}),g.jsx("span",{className:"ip-arch-gw",children:"spency-gateway (Express Proxy)"}),g.jsx("br",{}),"    │",g.jsx("br",{}),"┌──────────────────────────────────┐",g.jsx("br",{}),"│                                  │",g.jsx("br",{}),g.jsx("span",{className:"ip-arch-spring",children:"Spring Boot"}),"              ",g.jsx("span",{className:"ip-arch-node",children:"Node.js"}),g.jsx("br",{}),"User/Auth/CA/Shopkeeper  Order Service",g.jsx("br",{}),"    │                            │",g.jsx("br",{}),g.jsx("span",{className:"ip-arch-spring",children:"PostgreSQL"}),"              ",g.jsx("span",{className:"ip-arch-node",children:"MongoDB Atlas"}),g.jsx("br",{}),"    │",g.jsx("br",{}),g.jsx("span",{className:"ip-arch-redis",children:"Redis Cache · Kafka Event Bus"}),g.jsx("br",{}),"    │",g.jsx("br",{}),g.jsx("span",{className:"ip-arch-aws",children:"AWS Cloud — EC2 + S3 + CloudFront + ALB"})]}),g.jsx("div",{className:"ip-roadmap-grid",children:[{h:"Foundations",items:["Java Core","OOP","Data Structures"]},{h:"Backend",items:["Spring Boot","REST APIs","Security (JWT)","Microservices"]},{h:"Frontend",items:["React","Hooks","API Integration"]},{h:"Secondary Backend",items:["Node.js","Express"]},{h:"Data Layer",items:["PostgreSQL","Redis","MongoDB basics"]},{h:"Distributed Systems",items:["Kafka","Event Driven Arch"]},{h:"Cloud & DevOps",items:["Docker","AWS EC2 + S3","Load Balancer"]},{h:"Architecture",items:["System Design","Caching","Rate Limiting"]},{h:"AI Integration",items:["OpenAI API","Prompt Engineering","RAG basics"]}].map(v=>g.jsxs("div",{className:"ip-roadmap-card",children:[g.jsx("h4",{children:v.h}),g.jsx("ul",{children:v.items.map(w=>g.jsx("li",{children:w},w))})]},v.h))})]}),g.jsx("div",{className:"ip-progress-wrap",children:g.jsx("div",{className:"ip-progress-bar",children:g.jsx("div",{className:"ip-progress-fill",style:{width:`${u}%`}})})}),g.jsxs("p",{className:"ip-progress-text",children:["Overall: ",u,"% complete (",m,"/",l," tasks)"]}),g.jsx("div",{className:"ip-day-nav",children:Array.from({length:30},(v,w)=>w+1).map(v=>{var k;const w=h(v);return g.jsxs("button",{className:"ip-day-btn"+(r===v?" ip-day-btn--active":"")+(w===1?" ip-day-btn--done":""),onClick:()=>c(v),title:(k=tn[v])==null?void 0:k.title,children:["Day ",v]},v)})}),g.jsx("div",{ref:s,children:g.jsx(Wh,{dayNum:r,checked:e,onToggle:i})})]}),g.jsx("footer",{className:"ip-footer",children:"✅ Auto-saves to localStorage · Build one production project touching every layer"})]})}function Hh(){return g.jsxs(g.Fragment,{children:[g.jsxs("nav",{className:"page-switcher","aria-label":"Switch between apps",children:[g.jsx(vs,{to:"/",end:!0,className:({isActive:e})=>`page-tab${e?" page-tab--active":""}`,children:"📚 21-Day Interview Q&A"}),g.jsx(vs,{to:"/plan",className:({isActive:e})=>`page-tab${e?" page-tab--active":""}`,children:"🗓 30-Day Learning Plan"})]}),g.jsxs(zm,{children:[g.jsx(ys,{path:"/",element:g.jsx(jh,{})}),g.jsx(ys,{path:"/plan",element:g.jsx(Fh,{})})]})]})}const Jh="/";tu(document.getElementById("root")).render(g.jsx(b.StrictMode,{children:g.jsx(hh,{basename:Jh,children:g.jsx(Hh,{})})}));
