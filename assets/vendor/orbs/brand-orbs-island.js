(()=>{var yr=Object.create;var M1=Object.defineProperty;var br=Object.getOwnPropertyDescriptor;var xr=Object.getOwnPropertyNames;var Sr=Object.getPrototypeOf,Mr=Object.prototype.hasOwnProperty;var Gt=(t,a)=>()=>(a||t((a={exports:{}}).exports,a),a.exports);var wr=(t,a,e,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of xr(a))!Mr.call(t,n)&&n!==e&&M1(t,n,{get:()=>a[n],enumerable:!(l=br(a,n))||l.enumerable});return t};var de=(t,a,e)=>(e=t!=null?yr(Sr(t)):{},wr(a||!t||!t.__esModule?M1(e,"default",{value:t,enumerable:!0}):e,t));var R1=Gt(Y=>{"use strict";function Qi(t,a){var e=t.length;t.push(a);t:for(;0<e;){var l=e-1>>>1,n=t[l];if(0<pn(n,a))t[l]=a,t[e]=n,e=l;else break t}}function Qt(t){return t.length===0?null:t[0]}function gn(t){if(t.length===0)return null;var a=t[0],e=t.pop();if(e!==a){t[0]=e;t:for(var l=0,n=t.length,i=n>>>1;l<i;){var c=2*(l+1)-1,s=t[c],o=c+1,d=t[o];if(0>pn(s,e))o<n&&0>pn(d,s)?(t[l]=d,t[o]=e,l=o):(t[l]=s,t[c]=e,l=c);else if(o<n&&0>pn(d,e))t[l]=d,t[o]=e,l=o;else break t}}return a}function pn(t,a){var e=t.sortIndex-a.sortIndex;return e!==0?e:t.id-a.id}Y.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(w1=performance,Y.unstable_now=function(){return w1.now()}):(Yi=Date,z1=Yi.now(),Y.unstable_now=function(){return Yi.now()-z1});var w1,Yi,z1,ta=[],ya=[],zr=1,Ct=null,rt=3,Zi=!1,il=!1,cl=!1,Ki=!1,E1=typeof setTimeout=="function"?setTimeout:null,T1=typeof clearTimeout=="function"?clearTimeout:null,_1=typeof setImmediate<"u"?setImmediate:null;function hn(t){for(var a=Qt(ya);a!==null;){if(a.callback===null)gn(ya);else if(a.startTime<=t)gn(ya),a.sortIndex=a.expirationTime,Qi(ta,a);else break;a=Qt(ya)}}function Ji(t){if(cl=!1,hn(t),!il)if(Qt(ta)!==null)il=!0,pe||(pe=!0,fe());else{var a=Qt(ya);a!==null&&Wi(Ji,a.startTime-t)}}var pe=!1,sl=-1,A1=5,O1=-1;function C1(){return Ki?!0:!(Y.unstable_now()-O1<A1)}function Xi(){if(Ki=!1,pe){var t=Y.unstable_now();O1=t;var a=!0;try{t:{il=!1,cl&&(cl=!1,T1(sl),sl=-1),Zi=!0;var e=rt;try{a:{for(hn(t),Ct=Qt(ta);Ct!==null&&!(Ct.expirationTime>t&&C1());){var l=Ct.callback;if(typeof l=="function"){Ct.callback=null,rt=Ct.priorityLevel;var n=l(Ct.expirationTime<=t);if(t=Y.unstable_now(),typeof n=="function"){Ct.callback=n,hn(t),a=!0;break a}Ct===Qt(ta)&&gn(ta),hn(t)}else gn(ta);Ct=Qt(ta)}if(Ct!==null)a=!0;else{var i=Qt(ya);i!==null&&Wi(Ji,i.startTime-t),a=!1}}break t}finally{Ct=null,rt=e,Zi=!1}a=void 0}}finally{a?fe():pe=!1}}}var fe;typeof _1=="function"?fe=function(){_1(Xi)}:typeof MessageChannel<"u"?(Gi=new MessageChannel,k1=Gi.port2,Gi.port1.onmessage=Xi,fe=function(){k1.postMessage(null)}):fe=function(){E1(Xi,0)};var Gi,k1;function Wi(t,a){sl=E1(function(){t(Y.unstable_now())},a)}Y.unstable_IdlePriority=5;Y.unstable_ImmediatePriority=1;Y.unstable_LowPriority=4;Y.unstable_NormalPriority=3;Y.unstable_Profiling=null;Y.unstable_UserBlockingPriority=2;Y.unstable_cancelCallback=function(t){t.callback=null};Y.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A1=0<t?Math.floor(1e3/t):5};Y.unstable_getCurrentPriorityLevel=function(){return rt};Y.unstable_next=function(t){switch(rt){case 1:case 2:case 3:var a=3;break;default:a=rt}var e=rt;rt=a;try{return t()}finally{rt=e}};Y.unstable_requestPaint=function(){Ki=!0};Y.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var e=rt;rt=t;try{return a()}finally{rt=e}};Y.unstable_scheduleCallback=function(t,a,e){var l=Y.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?l+e:l):e=l,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=e+n,t={id:zr++,callback:a,priorityLevel:t,startTime:e,expirationTime:n,sortIndex:-1},e>l?(t.sortIndex=e,Qi(ya,t),Qt(ta)===null&&t===Qt(ya)&&(cl?(T1(sl),sl=-1):cl=!0,Wi(Ji,e-l))):(t.sortIndex=n,Qi(ta,t),il||Zi||(il=!0,pe||(pe=!0,fe()))),t};Y.unstable_shouldYield=C1;Y.unstable_wrapCallback=function(t){var a=rt;return function(){var e=rt;rt=a;try{return t.apply(this,arguments)}finally{rt=e}}}});var B1=Gt((O4,D1)=>{"use strict";D1.exports=R1()});var Z1=Gt(k=>{"use strict";var $i=Symbol.for("react.transitional.element"),_r=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Er=Symbol.for("react.strict_mode"),Tr=Symbol.for("react.profiler"),Ar=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),Cr=Symbol.for("react.forward_ref"),Rr=Symbol.for("react.suspense"),Dr=Symbol.for("react.memo"),j1=Symbol.for("react.lazy"),U1=Symbol.iterator;function Br(t){return t===null||typeof t!="object"?null:(t=U1&&t[U1]||t["@@iterator"],typeof t=="function"?t:null)}var V1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y1=Object.assign,X1={};function ge(t,a,e){this.props=t,this.context=a,this.refs=X1,this.updater=e||V1}ge.prototype.isReactComponent={};ge.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};ge.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G1(){}G1.prototype=ge.prototype;function Pi(t,a,e){this.props=t,this.context=a,this.refs=X1,this.updater=e||V1}var Ii=Pi.prototype=new G1;Ii.constructor=Pi;Y1(Ii,ge.prototype);Ii.isPureReactComponent=!0;var q1=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},Q1=Object.prototype.hasOwnProperty;function tc(t,a,e,l,n,i){return e=i.ref,{$$typeof:$i,type:t,key:a,ref:e!==void 0?e:null,props:i}}function Ur(t,a){return tc(t.type,a,void 0,void 0,void 0,t.props)}function ac(t){return typeof t=="object"&&t!==null&&t.$$typeof===$i}function qr(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return a[e]})}var H1=/\/+/g;function Fi(t,a){return typeof t=="object"&&t!==null&&t.key!=null?qr(""+t.key):a.toString(36)}function N1(){}function Hr(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(N1,N1):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function he(t,a,e,l,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var c=!1;if(t===null)c=!0;else switch(i){case"bigint":case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case $i:case _r:c=!0;break;case j1:return c=t._init,he(c(t._payload),a,e,l,n)}}if(c)return n=n(t),c=l===""?"."+Fi(t,0):l,q1(n)?(e="",c!=null&&(e=c.replace(H1,"$&/")+"/"),he(n,a,e,"",function(d){return d})):n!=null&&(ac(n)&&(n=Ur(n,e+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(H1,"$&/")+"/")+c)),a.push(n)),1;c=0;var s=l===""?".":l+":";if(q1(t))for(var o=0;o<t.length;o++)l=t[o],i=s+Fi(l,o),c+=he(l,a,e,i,n);else if(o=Br(t),typeof o=="function")for(t=o.call(t),o=0;!(l=t.next()).done;)l=l.value,i=s+Fi(l,o++),c+=he(l,a,e,i,n);else if(i==="object"){if(typeof t.then=="function")return he(Hr(t),a,e,l,n);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return c}function mn(t,a,e){if(t==null)return t;var l=[],n=0;return he(t,l,"","",function(i){return a.call(e,i,n++)}),l}function Nr(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var L1=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Lr(){}k.Children={map:mn,forEach:function(t,a,e){mn(t,function(){a.apply(this,arguments)},e)},count:function(t){var a=0;return mn(t,function(){a++}),a},toArray:function(t){return mn(t,function(a){return a})||[]},only:function(t){if(!ac(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};k.Component=ge;k.Fragment=kr;k.Profiler=Tr;k.PureComponent=Pi;k.StrictMode=Er;k.Suspense=Rr;k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X;k.__COMPILER_RUNTIME={__proto__:null,c:function(t){return X.H.useMemoCache(t)}};k.cache=function(t){return function(){return t.apply(null,arguments)}};k.cloneElement=function(t,a,e){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Y1({},t.props),n=t.key,i=void 0;if(a!=null)for(c in a.ref!==void 0&&(i=void 0),a.key!==void 0&&(n=""+a.key),a)!Q1.call(a,c)||c==="key"||c==="__self"||c==="__source"||c==="ref"&&a.ref===void 0||(l[c]=a[c]);var c=arguments.length-2;if(c===1)l.children=e;else if(1<c){for(var s=Array(c),o=0;o<c;o++)s[o]=arguments[o+2];l.children=s}return tc(t.type,n,void 0,void 0,i,l)};k.createContext=function(t){return t={$$typeof:Or,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Ar,_context:t},t};k.createElement=function(t,a,e){var l,n={},i=null;if(a!=null)for(l in a.key!==void 0&&(i=""+a.key),a)Q1.call(a,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=a[l]);var c=arguments.length-2;if(c===1)n.children=e;else if(1<c){for(var s=Array(c),o=0;o<c;o++)s[o]=arguments[o+2];n.children=s}if(t&&t.defaultProps)for(l in c=t.defaultProps,c)n[l]===void 0&&(n[l]=c[l]);return tc(t,i,void 0,void 0,null,n)};k.createRef=function(){return{current:null}};k.forwardRef=function(t){return{$$typeof:Cr,render:t}};k.isValidElement=ac;k.lazy=function(t){return{$$typeof:j1,_payload:{_status:-1,_result:t},_init:Nr}};k.memo=function(t,a){return{$$typeof:Dr,type:t,compare:a===void 0?null:a}};k.startTransition=function(t){var a=X.T,e={};X.T=e;try{var l=t(),n=X.S;n!==null&&n(e,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Lr,L1)}catch(i){L1(i)}finally{X.T=a}};k.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()};k.use=function(t){return X.H.use(t)};k.useActionState=function(t,a,e){return X.H.useActionState(t,a,e)};k.useCallback=function(t,a){return X.H.useCallback(t,a)};k.useContext=function(t){return X.H.useContext(t)};k.useDebugValue=function(){};k.useDeferredValue=function(t,a){return X.H.useDeferredValue(t,a)};k.useEffect=function(t,a,e){var l=X.H;if(typeof e=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return l.useEffect(t,a)};k.useId=function(){return X.H.useId()};k.useImperativeHandle=function(t,a,e){return X.H.useImperativeHandle(t,a,e)};k.useInsertionEffect=function(t,a){return X.H.useInsertionEffect(t,a)};k.useLayoutEffect=function(t,a){return X.H.useLayoutEffect(t,a)};k.useMemo=function(t,a){return X.H.useMemo(t,a)};k.useOptimistic=function(t,a){return X.H.useOptimistic(t,a)};k.useReducer=function(t,a,e){return X.H.useReducer(t,a,e)};k.useRef=function(t){return X.H.useRef(t)};k.useState=function(t){return X.H.useState(t)};k.useSyncExternalStore=function(t,a,e){return X.H.useSyncExternalStore(t,a,e)};k.useTransition=function(){return X.H.useTransition()};k.version="19.1.1"});var vn=Gt((R4,K1)=>{"use strict";K1.exports=Z1()});var W1=Gt(ht=>{"use strict";var jr=vn();function J1(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ba(){}var pt={d:{f:ba,r:function(){throw Error(J1(522))},D:ba,C:ba,L:ba,m:ba,X:ba,S:ba,M:ba},p:0,findDOMNode:null},Vr=Symbol.for("react.portal");function Yr(t,a,e){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:l==null?null:""+l,children:t,containerInfo:a,implementation:e}}var ol=jr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function yn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt;ht.createPortal=function(t,a){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(J1(299));return Yr(t,a,null,e)};ht.flushSync=function(t){var a=ol.T,e=pt.p;try{if(ol.T=null,pt.p=2,t)return t()}finally{ol.T=a,pt.p=e,pt.d.f()}};ht.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,pt.d.C(t,a))};ht.prefetchDNS=function(t){typeof t=="string"&&pt.d.D(t)};ht.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var e=a.as,l=yn(e,a.crossOrigin),n=typeof a.integrity=="string"?a.integrity:void 0,i=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;e==="style"?pt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):e==="script"&&pt.d.X(t,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};ht.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var e=yn(a.as,a.crossOrigin);pt.d.M(t,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&pt.d.M(t)};ht.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var e=a.as,l=yn(e,a.crossOrigin);pt.d.L(t,e,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};ht.preloadModule=function(t,a){if(typeof t=="string")if(a){var e=yn(a.as,a.crossOrigin);pt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else pt.d.m(t)};ht.requestFormReset=function(t){pt.d.r(t)};ht.unstable_batchedUpdates=function(t,a){return t(a)};ht.useFormState=function(t,a,e){return ol.H.useFormState(t,a,e)};ht.useFormStatus=function(){return ol.H.useHostTransitionStatus()};ht.version="19.1.1"});var P1=Gt((B4,$1)=>{"use strict";function F1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1)}catch(t){console.error(t)}}F1(),$1.exports=W1()});var ar=Gt(ji=>{"use strict";var at=B1(),So=vn(),Xr=P1();function y(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function wo(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function I1(t){if(Wl(t)!==t)throw Error(y(188))}function Gr(t){var a=t.alternate;if(!a){if(a=Wl(t),a===null)throw Error(y(188));return a!==t?null:t}for(var e=t,l=a;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){e=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return I1(n),t;if(i===l)return I1(n),a;i=i.sibling}throw Error(y(188))}if(e.return!==l.return)e=n,l=i;else{for(var c=!1,s=n.child;s;){if(s===e){c=!0,e=n,l=i;break}if(s===l){c=!0,l=n,e=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===e){c=!0,e=i,l=n;break}if(s===l){c=!0,l=i,e=n;break}s=s.sibling}if(!c)throw Error(y(189))}}if(e.alternate!==l)throw Error(y(190))}if(e.tag!==3)throw Error(y(188));return e.stateNode.current===e?t:a}function zo(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=zo(t),a!==null)return a;t=t.sibling}return null}var V=Object.assign,Qr=Symbol.for("react.element"),bn=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),_o=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Zr=Symbol.for("react.provider"),ko=Symbol.for("react.consumer"),ia=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),Ma=Symbol.for("react.lazy");Symbol.for("react.scope");var qc=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Kr=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var t0=Symbol.iterator;function ul(t){return t===null||typeof t!="object"?null:(t=t0&&t[t0]||t["@@iterator"],typeof t=="function"?t:null)}var Jr=Symbol.for("react.client.reference");function Hc(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Jr?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Me:return"Fragment";case Dc:return"Profiler";case _o:return"StrictMode";case Bc:return"Suspense";case Uc:return"SuspenseList";case qc:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case vl:return"Portal";case ia:return(t.displayName||"Context")+".Provider";case ko:return(t._context.displayName||"Context")+".Consumer";case Ts:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case As:return a=t.displayName||null,a!==null?a:Hc(t.type)||"Memo";case Ma:a=t._payload,t=t._init;try{return Hc(t(a))}catch{}}return null}var yl=Array.isArray,z=So.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=Xr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},Nc=[],we=-1;function Pt(t){return{current:t}}function ct(t){0>we||(t.current=Nc[we],Nc[we]=null,we--)}function Q(t,a){we++,Nc[we]=t.current,t.current=a}var Wt=Pt(null),Ul=Pt(null),Ra=Pt(null),Wn=Pt(null);function Fn(t,a){switch(Q(Ra,a),Q(Ul,t),Q(Wt,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?co(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=co(a),t=X2(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ct(Wt),Q(Wt,t)}function Ye(){ct(Wt),ct(Ul),ct(Ra)}function Lc(t){t.memoizedState!==null&&Q(Wn,t);var a=Wt.current,e=X2(a,t.type);a!==e&&(Q(Ul,t),Q(Wt,e))}function $n(t){Ul.current===t&&(ct(Wt),ct(Ul)),Wn.current===t&&(ct(Wn),Ql._currentValue=Wa)}var jc=Object.prototype.hasOwnProperty,Os=at.unstable_scheduleCallback,ec=at.unstable_cancelCallback,Wr=at.unstable_shouldYield,Fr=at.unstable_requestPaint,Ft=at.unstable_now,$r=at.unstable_getCurrentPriorityLevel,Eo=at.unstable_ImmediatePriority,To=at.unstable_UserBlockingPriority,Pn=at.unstable_NormalPriority,Pr=at.unstable_LowPriority,Ao=at.unstable_IdlePriority,Ir=at.log,td=at.unstable_setDisableYieldValue,Fl=null,kt=null;function Ta(t){if(typeof Ir=="function"&&td(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Fl,t)}catch{}}var Et=Math.clz32?Math.clz32:ld,ad=Math.log,ed=Math.LN2;function ld(t){return t>>>=0,t===0?32:31-(ad(t)/ed|0)|0}var xn=256,Sn=4194304;function Za(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _i(t,a,e){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Za(l):(c&=s,c!==0?n=Za(c):e||(e=s&~t,e!==0&&(n=Za(e))))):(s=l&~i,s!==0?n=Za(s):c!==0?n=Za(c):e||(e=l&~t,e!==0&&(n=Za(e)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,e=a&-a,i>=e||i===32&&(e&4194048)!==0)?a:n}function $l(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function nd(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oo(){var t=xn;return xn<<=1,(xn&4194048)===0&&(xn=256),t}function Co(){var t=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),t}function lc(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function Pl(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function id(t,a,e,l,n,i){var c=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var s=t.entanglements,o=t.expirationTimes,d=t.hiddenUpdates;for(e=c&~e;0<e;){var g=31-Et(e),v=1<<g;s[g]=0,o[g]=-1;var p=d[g];if(p!==null)for(d[g]=null,g=0;g<p.length;g++){var h=p[g];h!==null&&(h.lane&=-536870913)}e&=~v}l!==0&&Ro(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~a))}function Ro(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-Et(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|e&4194090}function Do(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var l=31-Et(e),n=1<<l;n&a|t[l]&a&&(t[l]|=a),e&=~n}}function Cs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bo(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:I2(t.type))}function cd(t,a){var e=B.p;try{return B.p=t,a()}finally{B.p=e}}var Xa=Math.random().toString(36).slice(2),dt="__reactFiber$"+Xa,xt="__reactProps$"+Xa,Ie="__reactContainer$"+Xa,Vc="__reactEvents$"+Xa,sd="__reactListeners$"+Xa,od="__reactHandles$"+Xa,a0="__reactResources$"+Xa,Il="__reactMarker$"+Xa;function Ds(t){delete t[dt],delete t[xt],delete t[Vc],delete t[sd],delete t[od]}function ze(t){var a=t[dt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[Ie]||e[dt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=uo(t);t!==null;){if(e=t[dt])return e;t=uo(t)}return a}t=e,e=t.parentNode}return null}function tl(t){if(t=t[dt]||t[Ie]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function bl(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(y(33))}function Be(t){var a=t[a0];return a||(a=t[a0]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function nt(t){t[Il]=!0}var Uo=new Set,qo={};function ce(t,a){Xe(t,a),Xe(t+"Capture",a)}function Xe(t,a){for(qo[t]=a,t=0;t<a.length;t++)Uo.add(a[t])}var ud=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),e0={},l0={};function rd(t){return jc.call(l0,t)?!0:jc.call(e0,t)?!1:ud.test(t)?l0[t]=!0:(e0[t]=!0,!1)}function qn(t,a,e){if(rd(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function Mn(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function aa(t,a,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+l)}}var nc,n0;function be(t){if(nc===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);nc=a&&a[1]||"",n0=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nc+t+n0}var ic=!1;function cc(t,a){if(!t||ic)return"";ic=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(h){var p=h}Reflect.construct(t,[],v)}else{try{v.call()}catch(h){p=h}t.call(v.prototype)}}else{try{throw Error()}catch(h){p=h}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(h){if(h&&p&&typeof h.stack=="string")return[h.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var o=c.split(`
`),d=s.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===d.length)for(l=o.length-1,n=d.length-1;1<=l&&0<=n&&o[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==d[n]){var g=`
`+o[l].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=l&&0<=n);break}}}finally{ic=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?be(e):""}function dd(t){switch(t.tag){case 26:case 27:case 5:return be(t.type);case 16:return be("Lazy");case 13:return be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return cc(t.type,!1);case 11:return cc(t.type.render,!1);case 1:return cc(t.type,!0);case 31:return be("Activity");default:return""}}function i0(t){try{var a="";do a+=dd(t),t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ho(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function fd(t){var a=Ho(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),l=""+t[a];if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function In(t){t._valueTracker||(t._valueTracker=fd(t))}function No(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),l="";return t&&(l=Ho(t)?t.checked?"true":"false":t.value),t=l,t!==e?(a.setValue(t),!0):!1}function ti(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pd=/[\n"\\]/g;function qt(t){return t.replace(pd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Yc(t,a,e,l,n,i,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),a!=null?c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Dt(a)):t.value!==""+Dt(a)&&(t.value=""+Dt(a)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),a!=null?Xc(t,c,Dt(a)):e!=null?Xc(t,c,Dt(e)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Dt(s):t.removeAttribute("name")}function Lo(t,a,e,l,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;e=e!=null?""+Dt(e):"",a=a!=null?""+Dt(a):e,s||a===t.value||(t.value=a),t.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function Xc(t,a,e){a==="number"&&ti(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ue(t,a,e,l){if(t=t.options,a){a={};for(var n=0;n<e.length;n++)a["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=a.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&l&&(t[e].defaultSelected=!0)}else{for(e=""+Dt(e),a=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function jo(t,a,e){if(a!=null&&(a=""+Dt(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+Dt(e):""}function Vo(t,a,e,l){if(a==null){if(l!=null){if(e!=null)throw Error(y(92));if(yl(l)){if(1<l.length)throw Error(y(93));l=l[0]}e=l}e==null&&(e=""),a=e}e=Dt(a),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l)}function Ge(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var hd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function c0(t,a,e){var l=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,e):typeof e!="number"||e===0||hd.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function Yo(t,a,e){if(a!=null&&typeof a!="object")throw Error(y(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&e[n]!==l&&c0(t,n,l)}else for(var i in a)a.hasOwnProperty(i)&&c0(t,i,a[i])}function Bs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(t){return md.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gc=null;function Us(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _e=null,qe=null;function s0(t){var a=tl(t);if(a&&(t=a.stateNode)){var e=t[xt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Yc(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+qt(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var l=e[a];if(l!==t&&l.form===t.form){var n=l[xt]||null;if(!n)throw Error(y(90));Yc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<e.length;a++)l=e[a],l.form===t.form&&No(l)}break t;case"textarea":jo(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Ue(t,!!e.multiple,a,!1)}}}var sc=!1;function Xo(t,a,e){if(sc)return t(a,e);sc=!0;try{var l=t(a);return l}finally{if(sc=!1,(_e!==null||qe!==null)&&(Ui(),_e&&(a=_e,t=qe,qe=_e=null,s0(a),t)))for(a=0;a<t.length;a++)s0(t[a])}}function ql(t,a){var e=t.stateNode;if(e===null)return null;var l=e[xt]||null;if(l===null)return null;e=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(y(231,a,typeof e));return e}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(fa)try{me={},Object.defineProperty(me,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",me,me),window.removeEventListener("test",me,me)}catch{Qc=!1}var me,Aa=null,qs=null,Nn=null;function Go(){if(Nn)return Nn;var t,a=qs,e=a.length,l,n="value"in Aa?Aa.value:Aa.textContent,i=n.length;for(t=0;t<e&&a[t]===n[t];t++);var c=e-t;for(l=1;l<=c&&a[e-l]===n[i-l];l++);return Nn=n.slice(t,1<l?1-l:void 0)}function Ln(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function wn(){return!0}function o0(){return!1}function St(t){function a(e,l,n,i,c){this._reactName=e,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(e=t[s],this[s]=e?e(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wn:o0,this.isPropagationStopped=o0,this}return V(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),a}var se={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=St(se),tn=V({},se,{view:0,detail:0}),vd=St(tn),oc,uc,rl,Ei=V({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==rl&&(rl&&t.type==="mousemove"?(oc=t.screenX-rl.screenX,uc=t.screenY-rl.screenY):uc=oc=0,rl=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),u0=St(Ei),yd=V({},Ei,{dataTransfer:0}),bd=St(yd),xd=V({},tn,{relatedTarget:0}),rc=St(xd),Sd=V({},se,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=St(Sd),wd=V({},se,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zd=St(wd),_d=V({},se,{data:0}),r0=St(_d),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Td[t])?!!a[t]:!1}function Hs(){return Ad}var Od=V({},tn,{key:function(t){if(t.key){var a=kd[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ln(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ed[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(t){return t.type==="keypress"?Ln(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ln(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cd=St(Od),Rd=V({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d0=St(Rd),Dd=V({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Bd=St(Dd),Ud=V({},se,{propertyName:0,elapsedTime:0,pseudoElement:0}),qd=St(Ud),Hd=V({},Ei,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nd=St(Hd),Ld=V({},se,{newState:0,oldState:0}),jd=St(Ld),Vd=[9,13,27,32],Ns=fa&&"CompositionEvent"in window,Sl=null;fa&&"documentMode"in document&&(Sl=document.documentMode);var Yd=fa&&"TextEvent"in window&&!Sl,Qo=fa&&(!Ns||Sl&&8<Sl&&11>=Sl),f0=" ",p0=!1;function Zo(t,a){switch(t){case"keyup":return Vd.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Xd(t,a){switch(t){case"compositionend":return Ko(a);case"keypress":return a.which!==32?null:(p0=!0,f0);case"textInput":return t=a.data,t===f0&&p0?null:t;default:return null}}function Gd(t,a){if(ke)return t==="compositionend"||!Ns&&Zo(t,a)?(t=Go(),Nn=qs=Aa=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Qo&&a.locale!=="ko"?null:a.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h0(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Qd[t.type]:a==="textarea"}function Jo(t,a,e,l){_e?qe?qe.push(l):qe=[l]:_e=l,a=yi(a,"onChange"),0<a.length&&(e=new ki("onChange","change",null,e,l),t.push({event:e,listeners:a}))}var Ml=null,Hl=null;function Zd(t){j2(t,0)}function Ti(t){var a=bl(t);if(No(a))return t}function g0(t,a){if(t==="change")return a}var Wo=!1;fa&&(fa?(_n="oninput"in document,_n||(dc=document.createElement("div"),dc.setAttribute("oninput","return;"),_n=typeof dc.oninput=="function"),zn=_n):zn=!1,Wo=zn&&(!document.documentMode||9<document.documentMode));var zn,_n,dc;function m0(){Ml&&(Ml.detachEvent("onpropertychange",Fo),Hl=Ml=null)}function Fo(t){if(t.propertyName==="value"&&Ti(Hl)){var a=[];Jo(a,Hl,t,Us(t)),Xo(Zd,a)}}function Kd(t,a,e){t==="focusin"?(m0(),Ml=a,Hl=e,Ml.attachEvent("onpropertychange",Fo)):t==="focusout"&&m0()}function Jd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ti(Hl)}function Wd(t,a){if(t==="click")return Ti(a)}function Fd(t,a){if(t==="input"||t==="change")return Ti(a)}function $d(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Ot=typeof Object.is=="function"?Object.is:$d;function Nl(t,a){if(Ot(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),l=Object.keys(a);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var n=e[l];if(!jc.call(a,n)||!Ot(t[n],a[n]))return!1}return!0}function v0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function y0(t,a){var e=v0(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=a&&l>=a)return{node:e,offset:a-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=v0(e)}}function $o(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?$o(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Po(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ti(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=ti(t.document)}return a}function Ls(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Pd=fa&&"documentMode"in document&&11>=document.documentMode,Ee=null,Zc=null,wl=null,Kc=!1;function b0(t,a,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Kc||Ee==null||Ee!==ti(l)||(l=Ee,"selectionStart"in l&&Ls(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wl&&Nl(wl,l)||(wl=l,l=yi(Zc,"onSelect"),0<l.length&&(a=new ki("onSelect","select",null,a,e),t.push({event:a,listeners:l}),a.target=Ee)))}function Qa(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var Te={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},fc={},Io={};fa&&(Io=document.createElement("div").style,"AnimationEvent"in window||(delete Te.animationend.animation,delete Te.animationiteration.animation,delete Te.animationstart.animation),"TransitionEvent"in window||delete Te.transitionend.transition);function oe(t){if(fc[t])return fc[t];if(!Te[t])return t;var a=Te[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in Io)return fc[t]=a[e];return t}var tu=oe("animationend"),au=oe("animationiteration"),eu=oe("animationstart"),Id=oe("transitionrun"),tf=oe("transitionstart"),af=oe("transitioncancel"),lu=oe("transitionend"),nu=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function Xt(t,a){nu.set(t,a),ce(a,[t])}var x0=new WeakMap;function Ht(t,a){if(typeof t=="object"&&t!==null){var e=x0.get(t);return e!==void 0?e:(a={value:t,source:a,stack:i0(a)},x0.set(t,a),a)}return{value:t,source:a,stack:i0(a)}}var Rt=[],Ae=0,js=0;function Ai(){for(var t=Ae,a=js=Ae=0;a<t;){var e=Rt[a];Rt[a++]=null;var l=Rt[a];Rt[a++]=null;var n=Rt[a];Rt[a++]=null;var i=Rt[a];if(Rt[a++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&iu(e,n,i)}}function Oi(t,a,e,l){Rt[Ae++]=t,Rt[Ae++]=a,Rt[Ae++]=e,Rt[Ae++]=l,js|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vs(t,a,e,l){return Oi(t,a,e,l),ai(t)}function al(t,a){return Oi(t,null,null,a),ai(t)}function iu(t,a,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var n=!1,i=t.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&a!==null&&(n=31-Et(e),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[a]:l.push(a),a.lane=e|536870912),i):null}function ai(t){if(50<Dl)throw Dl=0,gs=null,Error(y(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Oe={};function ef(t,a,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,a,e,l){return new ef(t,a,e,l)}function Ys(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,a){var e=t.alternate;return e===null?(e=_t(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function cu(t,a){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function jn(t,a,e,l,n,i){var c=0;if(l=t,typeof t=="function")Ys(t)&&(c=1);else if(typeof t=="string")c=l4(t,e,Wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case qc:return t=_t(31,e,a,n),t.elementType=qc,t.lanes=i,t;case Me:return Fa(e.children,n,i,a);case _o:c=8,n|=24;break;case Dc:return t=_t(12,e,a,n|2),t.elementType=Dc,t.lanes=i,t;case Bc:return t=_t(13,e,a,n),t.elementType=Bc,t.lanes=i,t;case Uc:return t=_t(19,e,a,n),t.elementType=Uc,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zr:case ia:c=10;break t;case ko:c=9;break t;case Ts:c=11;break t;case As:c=14;break t;case Ma:c=16,l=null;break t}c=29,e=Error(y(130,t===null?"null":typeof t,"")),l=null}return a=_t(c,e,a,n),a.elementType=t,a.type=l,a.lanes=i,a}function Fa(t,a,e,l){return t=_t(7,t,l,a),t.lanes=e,t}function pc(t,a,e){return t=_t(6,t,null,a),t.lanes=e,t}function hc(t,a,e){return a=_t(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ce=[],Re=0,ei=null,li=0,Bt=[],Ut=0,$a=null,ca=1,sa="";function Ka(t,a){Ce[Re++]=li,Ce[Re++]=ei,ei=t,li=a}function su(t,a,e){Bt[Ut++]=ca,Bt[Ut++]=sa,Bt[Ut++]=$a,$a=t;var l=ca;t=sa;var n=32-Et(l)-1;l&=~(1<<n),e+=1;var i=32-Et(a)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,ca=1<<32-Et(a)+n|e<<n|l,sa=i+t}else ca=1<<i|e<<n|l,sa=t}function Xs(t){t.return!==null&&(Ka(t,1),su(t,1,0))}function Gs(t){for(;t===ei;)ei=Ce[--Re],Ce[Re]=null,li=Ce[--Re],Ce[Re]=null;for(;t===$a;)$a=Bt[--Ut],Bt[Ut]=null,sa=Bt[--Ut],Bt[Ut]=null,ca=Bt[--Ut],Bt[Ut]=null}var gt=null,K=null,D=!1,Pa=null,Kt=!1,Wc=Error(y(519));function ee(t){var a=Error(y(418,""));throw Ll(Ht(a,t)),Wc}function S0(t){var a=t.stateNode,e=t.type,l=t.memoizedProps;switch(a[dt]=t,a[xt]=l,e){case"dialog":T("cancel",a),T("close",a);break;case"iframe":case"object":case"embed":T("load",a);break;case"video":case"audio":for(e=0;e<Yl.length;e++)T(Yl[e],a);break;case"source":T("error",a);break;case"img":case"image":case"link":T("error",a),T("load",a);break;case"details":T("toggle",a);break;case"input":T("invalid",a),Lo(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),In(a);break;case"select":T("invalid",a);break;case"textarea":T("invalid",a),Vo(a,l.value,l.defaultValue,l.children),In(a)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||l.suppressHydrationWarning===!0||Y2(a.textContent,e)?(l.popover!=null&&(T("beforetoggle",a),T("toggle",a)),l.onScroll!=null&&T("scroll",a),l.onScrollEnd!=null&&T("scrollend",a),l.onClick!=null&&(a.onclick=Ni),a=!0):a=!1,a||ee(t)}function M0(t){for(gt=t.return;gt;)switch(gt.tag){case 5:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:gt=gt.return}}function dl(t){if(t!==gt)return!1;if(!D)return M0(t),D=!0,!1;var a=t.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Ss(t.type,t.memoizedProps)),e=!e),e&&K&&ee(t),M0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(a===0){K=Yt(t.nextSibling);break t}a--}else e!=="$"&&e!=="$!"&&e!=="$?"||a++;t=t.nextSibling}K=null}}else a===27?(a=K,Ga(t.type)?(t=zs,zs=null,K=t):K=a):K=gt?Yt(t.stateNode.nextSibling):null;return!0}function an(){K=gt=null,D=!1}function w0(){var t=Pa;return t!==null&&(bt===null?bt=t:bt.push.apply(bt,t),Pa=null),t}function Ll(t){Pa===null?Pa=[t]:Pa.push(t)}var Fc=Pt(null),ue=null,oa=null;function za(t,a,e){Q(Fc,a._currentValue),a._currentValue=e}function da(t){t._currentValue=Fc.current,ct(Fc)}function $c(t,a,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===e)break;t=t.return}}function Pc(t,a,e,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=n;for(var o=0;o<a.length;o++)if(s.context===a[o]){i.lanes|=e,s=i.alternate,s!==null&&(s.lanes|=e),$c(i.return,e,t),l||(c=null);break t}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(y(341));c.lanes|=e,i=c.alternate,i!==null&&(i.lanes|=e),$c(c,e,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function en(t,a,e,l){t=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(y(387));if(c=c.memoizedProps,c!==null){var s=n.type;Ot(n.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(n===Wn.current){if(c=n.alternate,c===null)throw Error(y(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Ql):t=[Ql])}n=n.return}t!==null&&Pc(a,t,e,l),a.flags|=262144}function ni(t){for(t=t.firstContext;t!==null;){if(!Ot(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function le(t){ue=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ft(t){return ou(ue,t)}function kn(t,a){return ue===null&&le(t),ou(t,a)}function ou(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},oa===null){if(t===null)throw Error(y(308));oa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else oa=oa.next=a;return e}var lf=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},nf=at.unstable_scheduleCallback,cf=at.unstable_NormalPriority,I={$$typeof:ia,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qs(){return{controller:new lf,data:new Map,refCount:0}}function ln(t){t.refCount--,t.refCount===0&&nf(cf,function(){t.controller.abort()})}var zl=null,Ic=0,Qe=0,He=null;function sf(t,a){if(zl===null){var e=zl=[];Ic=0,Qe=h1(),He={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Ic++,a.then(z0,z0),a}function z0(){if(--Ic===0&&zl!==null){He!==null&&(He.status="fulfilled");var t=zl;zl=null,Qe=0,He=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function of(t,a){var e=[],l={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<e.length;n++)(0,e[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),l}var _0=z.S;z.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&sf(t,a),_0!==null&&_0(t,a)};var Ia=Pt(null);function Zs(){var t=Ia.current;return t!==null?t:j.pooledCache}function Vn(t,a){a===null?Q(Ia,Ia.current):Q(Ia,a.pool)}function uu(){var t=Zs();return t===null?null:{parent:I._currentValue,pool:t}}var nn=Error(y(460)),ru=Error(y(474)),Ci=Error(y(542)),ts={then:function(){}};function k0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function En(){}function du(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(En,En),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,T0(t),t;default:if(typeof a.status=="string")a.then(En,En);else{if(t=j,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,T0(t),t}throw _l=a,nn}}var _l=null;function E0(){if(_l===null)throw Error(y(459));var t=_l;return _l=null,t}function T0(t){if(t===nn||t===Ci)throw Error(y(483))}var wa=!1;function Ks(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function as(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,a,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(q&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=ai(t),iu(t,null,e),a}return Oi(t,l,a,e),ai(t)}function kl(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,e|=l,a.lanes=e,Do(t,e)}}function gc(t,a){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var c={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,e=e.next}while(e!==null);i===null?n=i=a:i=i.next=a}else n=i=a;e={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var es=!1;function El(){if(es){var t=He;if(t!==null)throw t}}function Tl(t,a,e,l){es=!1;var n=t.updateQueue;wa=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,d=o.next;o.next=null,c===null?i=d:c.next=d,c=o;var g=t.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==c&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=o))}if(i!==null){var v=n.baseState;c=0,g=d=o=null,s=i;do{var p=s.lane&-536870913,h=p!==s.lane;if(h?(O&p)===p:(l&p)===p){p!==0&&p===Qe&&(es=!0),g!==null&&(g=g.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var M=t,S=s;p=a;var R=e;switch(S.tag){case 1:if(M=S.payload,typeof M=="function"){v=M.call(R,v,p);break t}v=M;break t;case 3:M.flags=M.flags&-65537|128;case 0:if(M=S.payload,p=typeof M=="function"?M.call(R,v,p):M,p==null)break t;v=V({},v,p);break t;case 2:wa=!0}}p=s.callback,p!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[p]:h.push(p))}else h={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=h,o=v):g=g.next=h,c|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(o=v),n.baseState=o,n.firstBaseUpdate=d,n.lastBaseUpdate=g,i===null&&(n.shared.lanes=0),Ya|=c,t.lanes=c,t.memoizedState=v}}function fu(t,a){if(typeof t!="function")throw Error(y(191,t));t.call(a)}function pu(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)fu(e[t],a)}var Ze=Pt(null),ii=Pt(0);function A0(t,a){t=ga,Q(ii,t),Q(Ze,a),ga=t|a.baseLanes}function ls(){Q(ii,ga),Q(Ze,Ze.current)}function Js(){ga=ii.current,ct(Ze),ct(ii)}var ja=0,E=null,N=null,$=null,ci=!1,Ne=!1,ne=!1,si=0,jl=0,Le=null,uf=0;function W(){throw Error(y(321))}function Ws(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!Ot(t[e],a[e]))return!1;return!0}function Fs(t,a,e,l,n,i){return ja=i,E=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=t===null||t.memoizedState===null?Gu:Qu,ne=!1,i=e(l,n),ne=!1,Ne&&(i=gu(a,e,l,n)),hu(t),i}function hu(t){z.H=oi;var a=N!==null&&N.next!==null;if(ja=0,$=N=E=null,ci=!1,jl=0,Le=null,a)throw Error(y(300));t===null||it||(t=t.dependencies,t!==null&&ni(t)&&(it=!0))}function gu(t,a,e,l){E=t;var n=0;do{if(Ne&&(Le=null),jl=0,Ne=!1,25<=n)throw Error(y(301));if(n+=1,$=N=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=mf,i=a(e,l)}while(Ne);return i}function rf(){var t=z.H,a=t.useState()[0];return a=typeof a.then=="function"?cn(a):a,t=t.useState()[0],(N!==null?N.memoizedState:null)!==t&&(E.flags|=1024),a}function $s(){var t=si!==0;return si=0,t}function Ps(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function Is(t){if(ci){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ci=!1}ja=0,$=N=E=null,Ne=!1,jl=si=0,Le=null}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $===null?E.memoizedState=$=t:$=$.next=t,$}function P(){if(N===null){var t=E.alternate;t=t!==null?t.memoizedState:null}else t=N.next;var a=$===null?E.memoizedState:$.next;if(a!==null)$=a,N=t;else{if(t===null)throw E.alternate===null?Error(y(467)):Error(y(310));N=t,t={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},$===null?E.memoizedState=$=t:$=$.next=t}return $}function t1(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(t){var a=jl;return jl+=1,Le===null&&(Le=[]),t=du(Le,t,a),a=E,($===null?a.memoizedState:$.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Gu:Qu),t}function Ri(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cn(t);if(t.$$typeof===ia)return ft(t)}throw Error(y(438,String(t)))}function a1(t){var a=null,e=E.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var l=E.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=t1(),E.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),l=0;l<t;l++)e[l]=Kr;return a.index++,e}function pa(t,a){return typeof a=="function"?a(t):a}function Yn(t){var a=P();return e1(a,N,t)}function e1(t,a,e){var l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=e;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}a.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{a=n.next;var s=c=null,o=null,d=a,g=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(O&v)===v:(ja&v)===v){var p=d.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===Qe&&(g=!0);else if((ja&p)===p){d=d.next,p===Qe&&(g=!0);continue}else v={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(s=o=v,c=i):o=o.next=v,E.lanes|=p,Ya|=p;v=d.action,ne&&e(i,v),i=d.hasEagerState?d.eagerState:e(i,v)}else p={lane:v,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(s=o=p,c=i):o=o.next=p,E.lanes|=v,Ya|=v;d=d.next}while(d!==null&&d!==a);if(o===null?c=i:o.next=s,!Ot(i,t.memoizedState)&&(it=!0,g&&(e=He,e!==null)))throw e;t.memoizedState=i,t.baseState=c,t.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function mc(t){var a=P(),e=a.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=t;var l=e.dispatch,n=e.pending,i=a.memoizedState;if(n!==null){e.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);Ot(i,a.memoizedState)||(it=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,l]}function mu(t,a,e){var l=E,n=P(),i=D;if(i){if(e===void 0)throw Error(y(407));e=e()}else e=a();var c=!Ot((N||n).memoizedState,e);c&&(n.memoizedState=e,it=!0),n=n.queue;var s=bu.bind(null,l,n,t);if(sn(2048,8,s,[t]),n.getSnapshot!==a||c||$!==null&&$.memoizedState.tag&1){if(l.flags|=2048,Ke(9,Di(),yu.bind(null,l,n,e,a),null),j===null)throw Error(y(349));i||(ja&124)!==0||vu(l,a,e)}return e}function vu(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=E.updateQueue,a===null?(a=t1(),E.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function yu(t,a,e,l){a.value=e,a.getSnapshot=l,xu(a)&&Su(t)}function bu(t,a,e){return e(function(){xu(a)&&Su(t)})}function xu(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!Ot(t,e)}catch{return!0}}function Su(t){var a=al(t,2);a!==null&&At(a,t,2)}function ns(t){var a=vt();if(typeof t=="function"){var e=t;if(t=e(),ne){Ta(!0);try{e()}finally{Ta(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},a}function Mu(t,a,e,l){return t.baseState=e,e1(t,N,typeof l=="function"?l:pa)}function df(t,a,e,l,n){if(Bi(t))throw Error(y(485));if(t=a.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};z.T!==null?e(!0):i.isTransition=!1,l(i),e=a.pending,e===null?(i.next=a.pending=i,wu(a,i)):(i.next=e.next,a.pending=e.next=i)}}function wu(t,a){var e=a.action,l=a.payload,n=t.state;if(a.isTransition){var i=z.T,c={};z.T=c;try{var s=e(n,l),o=z.S;o!==null&&o(c,s),O0(t,a,s)}catch(d){is(t,a,d)}finally{z.T=i}}else try{i=e(n,l),O0(t,a,i)}catch(d){is(t,a,d)}}function O0(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){C0(t,a,l)},function(l){return is(t,a,l)}):C0(t,a,e)}function C0(t,a,e){a.status="fulfilled",a.value=e,zu(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,wu(t,e)))}function is(t,a,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=e,zu(a),a=a.next;while(a!==l)}t.action=null}function zu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function _u(t,a){return a}function R0(t,a){if(D){var e=j.formState;if(e!==null){t:{var l=E;if(D){if(K){a:{for(var n=K,i=Kt;n.nodeType!==8;){if(!i){n=null;break a}if(n=Yt(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){K=Yt(n.nextSibling),l=n.data==="F!";break t}}ee(l)}l=!1}l&&(a=e[0])}}return e=vt(),e.memoizedState=e.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_u,lastRenderedState:a},e.queue=l,e=Vu.bind(null,E,l),l.dispatch=e,l=ns(!1),i=c1.bind(null,E,!1,l.queue),l=vt(),n={state:a,dispatch:null,action:t,pending:null},l.queue=n,e=df.bind(null,E,n,i,e),n.dispatch=e,l.memoizedState=t,[a,e,!1]}function D0(t){var a=P();return ku(a,N,t)}function ku(t,a,e){if(a=e1(t,a,_u)[0],t=Yn(pa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=cn(a)}catch(c){throw c===nn?Ci:c}else l=a;a=P();var n=a.queue,i=n.dispatch;return e!==a.memoizedState&&(E.flags|=2048,Ke(9,Di(),ff.bind(null,n,e),null)),[l,i,t]}function ff(t,a){t.action=a}function B0(t){var a=P(),e=N;if(e!==null)return ku(a,e,t);P(),a=a.memoizedState,e=P();var l=e.queue.dispatch;return e.memoizedState=t,[a,l,!1]}function Ke(t,a,e,l){return t={tag:t,create:e,deps:l,inst:a,next:null},a=E.updateQueue,a===null&&(a=t1(),E.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,a.lastEffect=t),t}function Di(){return{destroy:void 0,resource:void 0}}function Eu(){return P().memoizedState}function Xn(t,a,e,l){var n=vt();l=l===void 0?null:l,E.flags|=t,n.memoizedState=Ke(1|a,Di(),e,l)}function sn(t,a,e,l){var n=P();l=l===void 0?null:l;var i=n.memoizedState.inst;N!==null&&l!==null&&Ws(l,N.memoizedState.deps)?n.memoizedState=Ke(a,i,e,l):(E.flags|=t,n.memoizedState=Ke(1|a,i,e,l))}function U0(t,a){Xn(8390656,8,t,a)}function Tu(t,a){sn(2048,8,t,a)}function Au(t,a){return sn(4,2,t,a)}function Ou(t,a){return sn(4,4,t,a)}function Cu(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Ru(t,a,e){e=e!=null?e.concat([t]):null,sn(4,4,Cu.bind(null,a,t),e)}function l1(){}function Du(t,a){var e=P();a=a===void 0?null:a;var l=e.memoizedState;return a!==null&&Ws(a,l[1])?l[0]:(e.memoizedState=[t,a],t)}function Bu(t,a){var e=P();a=a===void 0?null:a;var l=e.memoizedState;if(a!==null&&Ws(a,l[1]))return l[0];if(l=t(),ne){Ta(!0);try{t()}finally{Ta(!1)}}return e.memoizedState=[l,a],l}function n1(t,a,e){return e===void 0||(ja&1073741824)!==0?t.memoizedState=a:(t.memoizedState=e,t=z2(),E.lanes|=t,Ya|=t,e)}function Uu(t,a,e,l){return Ot(e,a)?e:Ze.current!==null?(t=n1(t,e,l),Ot(t,a)||(it=!0),t):(ja&42)===0?(it=!0,t.memoizedState=e):(t=z2(),E.lanes|=t,Ya|=t,a)}function qu(t,a,e,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;var c=z.T,s={};z.T=s,c1(t,!1,a,e);try{var o=n(),d=z.S;if(d!==null&&d(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var g=of(o,l);Al(t,a,g,Tt(t))}else Al(t,a,l,Tt(t))}catch(v){Al(t,a,{then:function(){},status:"rejected",reason:v},Tt())}finally{B.p=i,z.T=c}}function pf(){}function cs(t,a,e,l){if(t.tag!==5)throw Error(y(476));var n=Hu(t).queue;qu(t,n,a,Wa,e===null?pf:function(){return Nu(t),e(l)})}function Hu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Wa},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Nu(t){var a=Hu(t).next.queue;Al(t,a,{},Tt())}function i1(){return ft(Ql)}function Lu(){return P().memoizedState}function ju(){return P().memoizedState}function hf(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=Tt();t=Da(e);var l=Ba(a,t,e);l!==null&&(At(l,a,e),kl(l,a,e)),a={cache:Qs()},t.payload=a;return}a=a.return}}function gf(t,a,e){var l=Tt();e={lane:l,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Bi(t)?Yu(a,e):(e=Vs(t,a,e,l),e!==null&&(At(e,t,l),Xu(e,a,l)))}function Vu(t,a,e){var l=Tt();Al(t,a,e,l)}function Al(t,a,e,l){var n={lane:l,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Bi(t))Yu(a,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var c=a.lastRenderedState,s=i(c,e);if(n.hasEagerState=!0,n.eagerState=s,Ot(s,c))return Oi(t,a,n,0),j===null&&Ai(),!1}catch{}finally{}if(e=Vs(t,a,n,l),e!==null)return At(e,t,l),Xu(e,a,l),!0}return!1}function c1(t,a,e,l){if(l={lane:2,revertLane:h1(),action:l,hasEagerState:!1,eagerState:null,next:null},Bi(t)){if(a)throw Error(y(479))}else a=Vs(t,e,l,2),a!==null&&At(a,t,2)}function Bi(t){var a=t.alternate;return t===E||a!==null&&a===E}function Yu(t,a){Ne=ci=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function Xu(t,a,e){if((e&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,e|=l,a.lanes=e,Do(t,e)}}var oi={readContext:ft,use:Ri,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W},Gu={readContext:ft,use:Ri,useCallback:function(t,a){return vt().memoizedState=[t,a===void 0?null:a],t},useContext:ft,useEffect:U0,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,Xn(4194308,4,Cu.bind(null,a,t),e)},useLayoutEffect:function(t,a){return Xn(4194308,4,t,a)},useInsertionEffect:function(t,a){Xn(4,2,t,a)},useMemo:function(t,a){var e=vt();a=a===void 0?null:a;var l=t();if(ne){Ta(!0);try{t()}finally{Ta(!1)}}return e.memoizedState=[l,a],l},useReducer:function(t,a,e){var l=vt();if(e!==void 0){var n=e(a);if(ne){Ta(!0);try{e(a)}finally{Ta(!1)}}}else n=a;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=gf.bind(null,E,t),[l.memoizedState,t]},useRef:function(t){var a=vt();return t={current:t},a.memoizedState=t},useState:function(t){t=ns(t);var a=t.queue,e=Vu.bind(null,E,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:l1,useDeferredValue:function(t,a){var e=vt();return n1(e,t,a)},useTransition:function(){var t=ns(!1);return t=qu.bind(null,E,t.queue,!0,!1),vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var l=E,n=vt();if(D){if(e===void 0)throw Error(y(407));e=e()}else{if(e=a(),j===null)throw Error(y(349));(O&124)!==0||vu(l,a,e)}n.memoizedState=e;var i={value:e,getSnapshot:a};return n.queue=i,U0(bu.bind(null,l,i,t),[t]),l.flags|=2048,Ke(9,Di(),yu.bind(null,l,i,e,a),null),e},useId:function(){var t=vt(),a=j.identifierPrefix;if(D){var e=sa,l=ca;e=(l&~(1<<32-Et(l)-1)).toString(32)+e,a="\xAB"+a+"R"+e,e=si++,0<e&&(a+="H"+e.toString(32)),a+="\xBB"}else e=uf++,a="\xAB"+a+"r"+e.toString(32)+"\xBB";return t.memoizedState=a},useHostTransitionStatus:i1,useFormState:R0,useActionState:R0,useOptimistic:function(t){var a=vt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=c1.bind(null,E,!0,e),e.dispatch=a,[t,a]},useMemoCache:a1,useCacheRefresh:function(){return vt().memoizedState=hf.bind(null,E)}},Qu={readContext:ft,use:Ri,useCallback:Du,useContext:ft,useEffect:Tu,useImperativeHandle:Ru,useInsertionEffect:Au,useLayoutEffect:Ou,useMemo:Bu,useReducer:Yn,useRef:Eu,useState:function(){return Yn(pa)},useDebugValue:l1,useDeferredValue:function(t,a){var e=P();return Uu(e,N.memoizedState,t,a)},useTransition:function(){var t=Yn(pa)[0],a=P().memoizedState;return[typeof t=="boolean"?t:cn(t),a]},useSyncExternalStore:mu,useId:Lu,useHostTransitionStatus:i1,useFormState:D0,useActionState:D0,useOptimistic:function(t,a){var e=P();return Mu(e,N,t,a)},useMemoCache:a1,useCacheRefresh:ju},mf={readContext:ft,use:Ri,useCallback:Du,useContext:ft,useEffect:Tu,useImperativeHandle:Ru,useInsertionEffect:Au,useLayoutEffect:Ou,useMemo:Bu,useReducer:mc,useRef:Eu,useState:function(){return mc(pa)},useDebugValue:l1,useDeferredValue:function(t,a){var e=P();return N===null?n1(e,t,a):Uu(e,N.memoizedState,t,a)},useTransition:function(){var t=mc(pa)[0],a=P().memoizedState;return[typeof t=="boolean"?t:cn(t),a]},useSyncExternalStore:mu,useId:Lu,useHostTransitionStatus:i1,useFormState:B0,useActionState:B0,useOptimistic:function(t,a){var e=P();return N!==null?Mu(e,N,t,a):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:a1,useCacheRefresh:ju},je=null,Vl=0;function Tn(t){var a=Vl;return Vl+=1,je===null&&(je=[]),du(je,t,a)}function fl(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function An(t,a){throw a.$$typeof===Qr?Error(y(525)):(t=Object.prototype.toString.call(a),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function q0(t){var a=t._init;return a(t._payload)}function Zu(t){function a(r,u){if(t){var f=r.deletions;f===null?(r.deletions=[u],r.flags|=16):f.push(u)}}function e(r,u){if(!t)return null;for(;u!==null;)a(r,u),u=u.sibling;return null}function l(r){for(var u=new Map;r!==null;)r.key!==null?u.set(r.key,r):u.set(r.index,r),r=r.sibling;return u}function n(r,u){return r=ra(r,u),r.index=0,r.sibling=null,r}function i(r,u,f){return r.index=f,t?(f=r.alternate,f!==null?(f=f.index,f<u?(r.flags|=67108866,u):f):(r.flags|=67108866,u)):(r.flags|=1048576,u)}function c(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function s(r,u,f,m){return u===null||u.tag!==6?(u=pc(f,r.mode,m),u.return=r,u):(u=n(u,f),u.return=r,u)}function o(r,u,f,m){var b=f.type;return b===Me?g(r,u,f.props.children,m,f.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ma&&q0(b)===u.type)?(u=n(u,f.props),fl(u,f),u.return=r,u):(u=jn(f.type,f.key,f.props,null,r.mode,m),fl(u,f),u.return=r,u)}function d(r,u,f,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=hc(f,r.mode,m),u.return=r,u):(u=n(u,f.children||[]),u.return=r,u)}function g(r,u,f,m,b){return u===null||u.tag!==7?(u=Fa(f,r.mode,m,b),u.return=r,u):(u=n(u,f),u.return=r,u)}function v(r,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=pc(""+u,r.mode,f),u.return=r,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case bn:return f=jn(u.type,u.key,u.props,null,r.mode,f),fl(f,u),f.return=r,f;case vl:return u=hc(u,r.mode,f),u.return=r,u;case Ma:var m=u._init;return u=m(u._payload),v(r,u,f)}if(yl(u)||ul(u))return u=Fa(u,r.mode,f,null),u.return=r,u;if(typeof u.then=="function")return v(r,Tn(u),f);if(u.$$typeof===ia)return v(r,kn(r,u),f);An(r,u)}return null}function p(r,u,f,m){var b=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return b!==null?null:s(r,u,""+f,m);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bn:return f.key===b?o(r,u,f,m):null;case vl:return f.key===b?d(r,u,f,m):null;case Ma:return b=f._init,f=b(f._payload),p(r,u,f,m)}if(yl(f)||ul(f))return b!==null?null:g(r,u,f,m,null);if(typeof f.then=="function")return p(r,u,Tn(f),m);if(f.$$typeof===ia)return p(r,u,kn(r,f),m);An(r,f)}return null}function h(r,u,f,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return r=r.get(f)||null,s(u,r,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bn:return r=r.get(m.key===null?f:m.key)||null,o(u,r,m,b);case vl:return r=r.get(m.key===null?f:m.key)||null,d(u,r,m,b);case Ma:var _=m._init;return m=_(m._payload),h(r,u,f,m,b)}if(yl(m)||ul(m))return r=r.get(f)||null,g(u,r,m,b,null);if(typeof m.then=="function")return h(r,u,f,Tn(m),b);if(m.$$typeof===ia)return h(r,u,f,kn(u,m),b);An(u,m)}return null}function M(r,u,f,m){for(var b=null,_=null,x=u,w=u=0,et=null;x!==null&&w<f.length;w++){x.index>w?(et=x,x=null):et=x.sibling;var C=p(r,x,f[w],m);if(C===null){x===null&&(x=et);break}t&&x&&C.alternate===null&&a(r,x),u=i(C,u,w),_===null?b=C:_.sibling=C,_=C,x=et}if(w===f.length)return e(r,x),D&&Ka(r,w),b;if(x===null){for(;w<f.length;w++)x=v(r,f[w],m),x!==null&&(u=i(x,u,w),_===null?b=x:_.sibling=x,_=x);return D&&Ka(r,w),b}for(x=l(x);w<f.length;w++)et=h(x,r,w,f[w],m),et!==null&&(t&&et.alternate!==null&&x.delete(et.key===null?w:et.key),u=i(et,u,w),_===null?b=et:_.sibling=et,_=et);return t&&x.forEach(function(va){return a(r,va)}),D&&Ka(r,w),b}function S(r,u,f,m){if(f==null)throw Error(y(151));for(var b=null,_=null,x=u,w=u=0,et=null,C=f.next();x!==null&&!C.done;w++,C=f.next()){x.index>w?(et=x,x=null):et=x.sibling;var va=p(r,x,C.value,m);if(va===null){x===null&&(x=et);break}t&&x&&va.alternate===null&&a(r,x),u=i(va,u,w),_===null?b=va:_.sibling=va,_=va,x=et}if(C.done)return e(r,x),D&&Ka(r,w),b;if(x===null){for(;!C.done;w++,C=f.next())C=v(r,C.value,m),C!==null&&(u=i(C,u,w),_===null?b=C:_.sibling=C,_=C);return D&&Ka(r,w),b}for(x=l(x);!C.done;w++,C=f.next())C=h(x,r,w,C.value,m),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?w:C.key),u=i(C,u,w),_===null?b=C:_.sibling=C,_=C);return t&&x.forEach(function(vr){return a(r,vr)}),D&&Ka(r,w),b}function R(r,u,f,m){if(typeof f=="object"&&f!==null&&f.type===Me&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case bn:t:{for(var b=f.key;u!==null;){if(u.key===b){if(b=f.type,b===Me){if(u.tag===7){e(r,u.sibling),m=n(u,f.props.children),m.return=r,r=m;break t}}else if(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ma&&q0(b)===u.type){e(r,u.sibling),m=n(u,f.props),fl(m,f),m.return=r,r=m;break t}e(r,u);break}else a(r,u);u=u.sibling}f.type===Me?(m=Fa(f.props.children,r.mode,m,f.key),m.return=r,r=m):(m=jn(f.type,f.key,f.props,null,r.mode,m),fl(m,f),m.return=r,r=m)}return c(r);case vl:t:{for(b=f.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){e(r,u.sibling),m=n(u,f.children||[]),m.return=r,r=m;break t}else{e(r,u);break}else a(r,u);u=u.sibling}m=hc(f,r.mode,m),m.return=r,r=m}return c(r);case Ma:return b=f._init,f=b(f._payload),R(r,u,f,m)}if(yl(f))return M(r,u,f,m);if(ul(f)){if(b=ul(f),typeof b!="function")throw Error(y(150));return f=b.call(f),S(r,u,f,m)}if(typeof f.then=="function")return R(r,u,Tn(f),m);if(f.$$typeof===ia)return R(r,u,kn(r,f),m);An(r,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(e(r,u.sibling),m=n(u,f),m.return=r,r=m):(e(r,u),m=pc(f,r.mode,m),m.return=r,r=m),c(r)):e(r,u)}return function(r,u,f,m){try{Vl=0;var b=R(r,u,f,m);return je=null,b}catch(x){if(x===nn||x===Ci)throw x;var _=_t(29,x,null,r.mode);return _.lanes=m,_.return=r,_}finally{}}}var Je=Zu(!0),Ku=Zu(!1),Lt=Pt(null),$t=null;function _a(t){var a=t.alternate;Q(tt,tt.current&1),Q(Lt,t),$t===null&&(a===null||Ze.current!==null||a.memoizedState!==null)&&($t=t)}function Ju(t){if(t.tag===22){if(Q(tt,tt.current),Q(Lt,t),$t===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&($t=t)}}else ka(t)}function ka(){Q(tt,tt.current),Q(Lt,Lt.current)}function ua(t){ct(Lt),$t===t&&($t=null),ct(tt)}var tt=Pt(0);function ui(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||ws(e)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function vc(t,a,e,l){a=t.memoizedState,e=e(l,a),e=e==null?a:V({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var ss={enqueueSetState:function(t,a,e){t=t._reactInternals;var l=Tt(),n=Da(l);n.payload=a,e!=null&&(n.callback=e),a=Ba(t,n,l),a!==null&&(At(a,t,l),kl(a,t,l))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var l=Tt(),n=Da(l);n.tag=1,n.payload=a,e!=null&&(n.callback=e),a=Ba(t,n,l),a!==null&&(At(a,t,l),kl(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=Tt(),l=Da(e);l.tag=2,a!=null&&(l.callback=a),a=Ba(t,l,e),a!==null&&(At(a,t,e),kl(a,t,e))}};function H0(t,a,e,l,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,c):a.prototype&&a.prototype.isPureReactComponent?!Nl(e,l)||!Nl(n,i):!0}function N0(t,a,e,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,l),a.state!==t&&ss.enqueueReplaceState(a,a.state,null)}function ie(t,a){var e=a;if("ref"in a){e={};for(var l in a)l!=="ref"&&(e[l]=a[l])}if(t=t.defaultProps){e===a&&(e=V({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}var ri=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Wu(t){ri(t)}function Fu(t){console.error(t)}function $u(t){ri(t)}function di(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function L0(t,a,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function os(t,a,e){return e=Da(e),e.tag=3,e.payload={element:null},e.callback=function(){di(t,a)},e}function Pu(t){return t=Da(t),t.tag=3,t}function Iu(t,a,e,l){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){L0(a,e,l)}}var c=e.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){L0(a,e,l),typeof n!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function vf(t,a,e,l,n){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=e.alternate,a!==null&&en(a,e,n,!0),e=Lt.current,e!==null){switch(e.tag){case 13:return $t===null?ms():e.alternate===null&&J===0&&(J=3),e.flags&=-257,e.flags|=65536,e.lanes=n,l===ts?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([l]):a.add(l),Tc(t,l,n)),!1;case 22:return e.flags|=65536,l===ts?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([l]):e.add(l)),Tc(t,l,n)),!1}throw Error(y(435,e.tag))}return Tc(t,l,n),ms(),!1}if(D)return a=Lt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Wc&&(t=Error(y(422),{cause:l}),Ll(Ht(t,e)))):(l!==Wc&&(a=Error(y(423),{cause:l}),Ll(Ht(a,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Ht(l,e),n=os(t.stateNode,l,n),gc(t,n),J!==4&&(J=2)),!1;var i=Error(y(520),{cause:l});if(i=Ht(i,e),Rl===null?Rl=[i]:Rl.push(i),J!==4&&(J=2),a===null)return!0;l=Ht(l,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=os(e.stateNode,l,t),gc(e,t),!1;case 1:if(a=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ua===null||!Ua.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Pu(n),Iu(n,t,e,l),gc(e,n),!1}e=e.return}while(e!==null);return!1}var t2=Error(y(461)),it=!1;function st(t,a,e,l){a.child=t===null?Ku(a,null,e,l):Je(a,t.child,e,l)}function j0(t,a,e,l,n){e=e.render;var i=a.ref;if("ref"in l){var c={};for(var s in l)s!=="ref"&&(c[s]=l[s])}else c=l;return le(a),l=Fs(t,a,e,c,i,n),s=$s(),t!==null&&!it?(Ps(t,a,n),ha(t,a,n)):(D&&s&&Xs(a),a.flags|=1,st(t,a,l,n),a.child)}function V0(t,a,e,l,n){if(t===null){var i=e.type;return typeof i=="function"&&!Ys(i)&&i.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=i,a2(t,a,i,l,n)):(t=jn(e.type,null,l,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!s1(t,n)){var c=i.memoizedProps;if(e=e.compare,e=e!==null?e:Nl,e(c,l)&&t.ref===a.ref)return ha(t,a,n)}return a.flags|=1,t=ra(i,l),t.ref=a.ref,t.return=a,a.child=t}function a2(t,a,e,l,n){if(t!==null){var i=t.memoizedProps;if(Nl(i,l)&&t.ref===a.ref)if(it=!1,a.pendingProps=l=i,s1(t,n))(t.flags&131072)!==0&&(it=!0);else return a.lanes=t.lanes,ha(t,a,n)}return us(t,a,e,l,n)}function e2(t,a,e){var l=a.pendingProps,n=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=i!==null?i.baseLanes|e:e,t!==null){for(n=a.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;a.childLanes=i&~l}else a.childLanes=0,a.child=null;return Y0(t,a,l,e)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vn(a,i!==null?i.cachePool:null),i!==null?A0(a,i):ls(),Ju(a);else return a.lanes=a.childLanes=536870912,Y0(t,a,i!==null?i.baseLanes|e:e,e)}else i!==null?(Vn(a,i.cachePool),A0(a,i),ka(a),a.memoizedState=null):(t!==null&&Vn(a,null),ls(),ka(a));return st(t,a,n,e),a.child}function Y0(t,a,e,l){var n=Zs();return n=n===null?null:{parent:I._currentValue,pool:n},a.memoizedState={baseLanes:e,cachePool:n},t!==null&&Vn(a,null),ls(),Ju(a),t!==null&&en(t,a,l,!0),null}function Gn(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(y(284));(t===null||t.ref!==e)&&(a.flags|=4194816)}}function us(t,a,e,l,n){return le(a),e=Fs(t,a,e,l,void 0,n),l=$s(),t!==null&&!it?(Ps(t,a,n),ha(t,a,n)):(D&&l&&Xs(a),a.flags|=1,st(t,a,e,n),a.child)}function X0(t,a,e,l,n,i){return le(a),a.updateQueue=null,e=gu(a,l,e,n),hu(t),l=$s(),t!==null&&!it?(Ps(t,a,i),ha(t,a,i)):(D&&l&&Xs(a),a.flags|=1,st(t,a,e,i),a.child)}function G0(t,a,e,l,n){if(le(a),a.stateNode===null){var i=Oe,c=e.contextType;typeof c=="object"&&c!==null&&(i=ft(c)),i=new e(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ss,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},Ks(a),c=e.contextType,i.context=typeof c=="object"&&c!==null?ft(c):Oe,i.state=a.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(vc(a,e,c,l),i.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ss.enqueueReplaceState(i,i.state,null),Tl(a,l,i,n),El(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){i=a.stateNode;var s=a.memoizedProps,o=ie(e,s);i.props=o;var d=i.context,g=e.contextType;c=Oe,typeof g=="object"&&g!==null&&(c=ft(g));var v=e.getDerivedStateFromProps;g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==c)&&N0(a,i,l,c),wa=!1;var p=a.memoizedState;i.state=p,Tl(a,l,i,n),El(),d=a.memoizedState,s||p!==d||wa?(typeof v=="function"&&(vc(a,e,v,l),d=a.memoizedState),(o=wa||H0(a,e,o,l,p,d,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=d),i.props=l,i.state=d,i.context=c,l=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,as(t,a),c=a.memoizedProps,g=ie(e,c),i.props=g,v=a.pendingProps,p=i.context,d=e.contextType,o=Oe,typeof d=="object"&&d!==null&&(o=ft(d)),s=e.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==v||p!==o)&&N0(a,i,l,o),wa=!1,p=a.memoizedState,i.state=p,Tl(a,l,i,n),El();var h=a.memoizedState;c!==v||p!==h||wa||t!==null&&t.dependencies!==null&&ni(t.dependencies)?(typeof s=="function"&&(vc(a,e,s,l),h=a.memoizedState),(g=wa||H0(a,e,g,l,p,h,o)||t!==null&&t.dependencies!==null&&ni(t.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=h),i.props=l,i.state=h,i.context=o,l=g):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),l=!1)}return i=l,Gn(t,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&l?(a.child=Je(a,t.child,null,n),a.child=Je(a,null,e,n)):st(t,a,e,n),a.memoizedState=i.state,t=a.child):t=ha(t,a,n),t}function Q0(t,a,e,l){return an(),a.flags|=256,st(t,a,e,l),a.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(t){return{baseLanes:t,cachePool:uu()}}function xc(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=Nt),t}function l2(t,a,e){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(tt.current&2)!==0),c&&(n=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,t===null){if(D){if(n?_a(a):ka(a),D){var s=K,o;if(o=s){t:{for(o=s,s=Kt;o.nodeType!==8;){if(!s){s=null;break t}if(o=Yt(o.nextSibling),o===null){s=null;break t}}s=o}s!==null?(a.memoizedState={dehydrated:s,treeContext:$a!==null?{id:ca,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},o=_t(18,null,null,0),o.stateNode=s,o.return=a,a.child=o,gt=a,K=null,o=!0):o=!1}o||ee(a)}if(s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return ws(s)?a.lanes=32:a.lanes=536870912,null;ua(a)}return s=l.children,l=l.fallback,n?(ka(a),n=a.mode,s=fi({mode:"hidden",children:s},n),l=Fa(l,n,e,null),s.return=a,l.return=a,s.sibling=l,a.child=s,n=a.child,n.memoizedState=bc(e),n.childLanes=xc(t,c,e),a.memoizedState=yc,l):(_a(a),rs(a,s))}if(o=t.memoizedState,o!==null&&(s=o.dehydrated,s!==null)){if(i)a.flags&256?(_a(a),a.flags&=-257,a=Sc(t,a,e)):a.memoizedState!==null?(ka(a),a.child=t.child,a.flags|=128,a=null):(ka(a),n=l.fallback,s=a.mode,l=fi({mode:"visible",children:l.children},s),n=Fa(n,s,e,null),n.flags|=2,l.return=a,n.return=a,l.sibling=n,a.child=l,Je(a,t.child,null,e),l=a.child,l.memoizedState=bc(e),l.childLanes=xc(t,c,e),a.memoizedState=yc,a=n);else if(_a(a),ws(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var d=c.dgst;c=d,l=Error(y(419)),l.stack="",l.digest=c,Ll({value:l,source:null,stack:null}),a=Sc(t,a,e)}else if(it||en(t,a,e,!1),c=(e&t.childLanes)!==0,it||c){if(c=j,c!==null&&(l=e&-e,l=(l&42)!==0?1:Cs(l),l=(l&(c.suspendedLanes|e))!==0?0:l,l!==0&&l!==o.retryLane))throw o.retryLane=l,al(t,l),At(c,t,l),t2;s.data==="$?"||ms(),a=Sc(t,a,e)}else s.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=o.treeContext,K=Yt(s.nextSibling),gt=a,D=!0,Pa=null,Kt=!1,t!==null&&(Bt[Ut++]=ca,Bt[Ut++]=sa,Bt[Ut++]=$a,ca=t.id,sa=t.overflow,$a=a),a=rs(a,l.children),a.flags|=4096);return a}return n?(ka(a),n=l.fallback,s=a.mode,o=t.child,d=o.sibling,l=ra(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,d!==null?n=ra(d,n):(n=Fa(n,s,e,null),n.flags|=2),n.return=a,l.return=a,l.sibling=n,a.child=l,l=n,n=a.child,s=t.child.memoizedState,s===null?s=bc(e):(o=s.cachePool,o!==null?(d=I._currentValue,o=o.parent!==d?{parent:d,pool:d}:o):o=uu(),s={baseLanes:s.baseLanes|e,cachePool:o}),n.memoizedState=s,n.childLanes=xc(t,c,e),a.memoizedState=yc,l):(_a(a),e=t.child,t=e.sibling,e=ra(e,{mode:"visible",children:l.children}),e.return=a,e.sibling=null,t!==null&&(c=a.deletions,c===null?(a.deletions=[t],a.flags|=16):c.push(t)),a.child=e,a.memoizedState=null,e)}function rs(t,a){return a=fi({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function fi(t,a){return t=_t(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Sc(t,a,e){return Je(a,t.child,null,e),t=rs(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Z0(t,a,e){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),$c(t.return,a,e)}function Mc(t,a,e,l,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:n}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=e,i.tailMode=n)}function n2(t,a,e){var l=a.pendingProps,n=l.revealOrder,i=l.tail;if(st(t,a,l.children,e),l=tt.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z0(t,e,a);else if(t.tag===19)Z0(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Q(tt,l),n){case"forwards":for(e=a.child,n=null;e!==null;)t=e.alternate,t!==null&&ui(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=a.child,a.child=null):(n=e.sibling,e.sibling=null),Mc(a,!1,n,e,i);break;case"backwards":for(e=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&ui(t)===null){a.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}Mc(a,!0,e,null,i);break;case"together":Mc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ha(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),Ya|=a.lanes,(e&a.childLanes)===0)if(t!==null){if(en(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(y(153));if(a.child!==null){for(t=a.child,e=ra(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=ra(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function s1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&ni(t)))}function yf(t,a,e){switch(a.tag){case 3:Fn(a,a.stateNode.containerInfo),za(a,I,t.memoizedState.cache),an();break;case 27:case 5:Lc(a);break;case 4:Fn(a,a.stateNode.containerInfo);break;case 10:za(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(_a(a),a.flags|=128,null):(e&a.child.childLanes)!==0?l2(t,a,e):(_a(a),t=ha(t,a,e),t!==null?t.sibling:null);_a(a);break;case 19:var n=(t.flags&128)!==0;if(l=(e&a.childLanes)!==0,l||(en(t,a,e,!1),l=(e&a.childLanes)!==0),n){if(l)return n2(t,a,e);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(tt,tt.current),l)break;return null;case 22:case 23:return a.lanes=0,e2(t,a,e);case 24:za(a,I,t.memoizedState.cache)}return ha(t,a,e)}function i2(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)it=!0;else{if(!s1(t,e)&&(a.flags&128)===0)return it=!1,yf(t,a,e);it=(t.flags&131072)!==0}else it=!1,D&&(a.flags&1048576)!==0&&su(a,li,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var l=a.elementType,n=l._init;if(l=n(l._payload),a.type=l,typeof l=="function")Ys(l)?(t=ie(l,t),a.tag=1,a=G0(null,a,l,t,e)):(a.tag=0,a=us(null,a,l,t,e));else{if(l!=null){if(n=l.$$typeof,n===Ts){a.tag=11,a=j0(null,a,l,t,e);break t}else if(n===As){a.tag=14,a=V0(null,a,l,t,e);break t}}throw a=Hc(l)||l,Error(y(306,a,""))}}return a;case 0:return us(t,a,a.type,a.pendingProps,e);case 1:return l=a.type,n=ie(l,a.pendingProps),G0(t,a,l,n,e);case 3:t:{if(Fn(a,a.stateNode.containerInfo),t===null)throw Error(y(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,as(t,a),Tl(a,l,null,e);var c=a.memoizedState;if(l=c.cache,za(a,I,l),l!==i.cache&&Pc(a,[I],e,!0),El(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Q0(t,a,l,e);break t}else if(l!==n){n=Ht(Error(y(424)),a),Ll(n),a=Q0(t,a,l,e);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(K=Yt(t.firstChild),gt=a,D=!0,Pa=null,Kt=!0,e=Ku(a,null,l,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(an(),l===n){a=ha(t,a,e);break t}st(t,a,l,e)}a=a.child}return a;case 26:return Gn(t,a),t===null?(e=fo(a.type,null,a.pendingProps,null))?a.memoizedState=e:D||(e=a.type,t=a.pendingProps,l=bi(Ra.current).createElement(e),l[dt]=a,l[xt]=t,ut(l,e,t),nt(l),a.stateNode=l):a.memoizedState=fo(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Lc(a),t===null&&D&&(l=a.stateNode=Q2(a.type,a.pendingProps,Ra.current),gt=a,Kt=!0,n=K,Ga(a.type)?(zs=n,K=Yt(l.firstChild)):K=n),st(t,a,a.pendingProps.children,e),Gn(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&D&&((n=l=K)&&(l=Gf(l,a.type,a.pendingProps,Kt),l!==null?(a.stateNode=l,gt=a,K=Yt(l.firstChild),Kt=!1,n=!0):n=!1),n||ee(a)),Lc(a),n=a.type,i=a.pendingProps,c=t!==null?t.memoizedProps:null,l=i.children,Ss(n,i)?l=null:c!==null&&Ss(n,c)&&(a.flags|=32),a.memoizedState!==null&&(n=Fs(t,a,rf,null,null,e),Ql._currentValue=n),Gn(t,a),st(t,a,l,e),a.child;case 6:return t===null&&D&&((t=e=K)&&(e=Qf(e,a.pendingProps,Kt),e!==null?(a.stateNode=e,gt=a,K=null,t=!0):t=!1),t||ee(a)),null;case 13:return l2(t,a,e);case 4:return Fn(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=Je(a,null,l,e):st(t,a,l,e),a.child;case 11:return j0(t,a,a.type,a.pendingProps,e);case 7:return st(t,a,a.pendingProps,e),a.child;case 8:return st(t,a,a.pendingProps.children,e),a.child;case 12:return st(t,a,a.pendingProps.children,e),a.child;case 10:return l=a.pendingProps,za(a,a.type,l.value),st(t,a,l.children,e),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,le(a),n=ft(n),l=l(n),a.flags|=1,st(t,a,l,e),a.child;case 14:return V0(t,a,a.type,a.pendingProps,e);case 15:return a2(t,a,a.type,a.pendingProps,e);case 19:return n2(t,a,e);case 31:return l=a.pendingProps,e=a.mode,l={mode:l.mode,children:l.children},t===null?(e=fi(l,e),e.ref=a.ref,a.child=e,e.return=a,a=e):(e=ra(t.child,l),e.ref=a.ref,a.child=e,e.return=a,a=e),a;case 22:return e2(t,a,e);case 24:return le(a),l=ft(I),t===null?(n=Zs(),n===null&&(n=j,i=Qs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),a.memoizedState={parent:l,cache:n},Ks(a),za(a,I,n)):((t.lanes&e)!==0&&(as(t,a),Tl(a,null,null,e),El()),n=t.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),za(a,I,l)):(l=i.cache,za(a,I,l),l!==n.cache&&Pc(a,[I],e,!0))),st(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(y(156,a.tag))}function ea(t){t.flags|=4}function K0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!J2(a)){if(a=Lt.current,a!==null&&((O&4194048)===O?$t!==null:(O&62914560)!==O&&(O&536870912)===0||a!==$t))throw _l=ts,ru;t.flags|=8192}}function On(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Co():536870912,t.lanes|=a,We|=a)}function pl(t,a){if(!D)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Z(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(a)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=e,a}function bf(t,a,e){var l=a.pendingProps;switch(Gs(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(a),null;case 1:return Z(a),null;case 3:return e=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),da(I),Ye(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(dl(a)?ea(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,w0())),Z(a),null;case 26:return e=a.memoizedState,t===null?(ea(a),e!==null?(Z(a),K0(a,e)):(Z(a),a.flags&=-16777217)):e?e!==t.memoizedState?(ea(a),Z(a),K0(a,e)):(Z(a),a.flags&=-16777217):(t.memoizedProps!==l&&ea(a),Z(a),a.flags&=-16777217),null;case 27:$n(a),e=Ra.current;var n=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return Z(a),null}t=Wt.current,dl(a)?S0(a,t):(t=Q2(n,l,e),a.stateNode=t,ea(a))}return Z(a),null;case 5:if($n(a),e=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return Z(a),null}if(t=Wt.current,dl(a))S0(a,t);else{switch(n=bi(Ra.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?n.createElement(e,{is:l.is}):n.createElement(e)}}t[dt]=a,t[xt]=l;t:for(n=a.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=t;t:switch(ut(t,e,l),e){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ea(a)}}return Z(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&ea(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(y(166));if(t=Ra.current,dl(a)){if(t=a.stateNode,e=a.memoizedProps,l=null,n=gt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[dt]=a,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||Y2(t.nodeValue,e)),t||ee(a)}else t=bi(t).createTextNode(l),t[dt]=a,a.stateNode=t}return Z(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=dl(a),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(y(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[dt]=a}else an(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Z(a),n=!1}else n=w0(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ua(a),a):(ua(a),null)}if(ua(a),(a.flags&128)!==0)return a.lanes=e,a;if(e=l!==null,t=t!==null&&t.memoizedState!==null,e){l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return e!==t&&e&&(a.child.flags|=8192),On(a,a.updateQueue),Z(a),null;case 4:return Ye(),t===null&&g1(a.stateNode.containerInfo),Z(a),null;case 10:return da(a.type),Z(a),null;case 19:if(ct(tt),n=a.memoizedState,n===null)return Z(a),null;if(l=(a.flags&128)!==0,i=n.rendering,i===null)if(l)pl(n,!1);else{if(J!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(i=ui(t),i!==null){for(a.flags|=128,pl(n,!1),t=i.updateQueue,a.updateQueue=t,On(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)cu(e,t),e=e.sibling;return Q(tt,tt.current&1|2),a.child}t=t.sibling}n.tail!==null&&Ft()>hi&&(a.flags|=128,l=!0,pl(n,!1),a.lanes=4194304)}else{if(!l)if(t=ui(i),t!==null){if(a.flags|=128,l=!0,t=t.updateQueue,a.updateQueue=t,On(a,t),pl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!D)return Z(a),null}else 2*Ft()-n.renderingStartTime>hi&&e!==536870912&&(a.flags|=128,l=!0,pl(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(t=n.last,t!==null?t.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=Ft(),a.sibling=null,t=tt.current,Q(tt,l?t&1|2:t&1),a):(Z(a),null);case 22:case 23:return ua(a),Js(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(e&536870912)!==0&&(a.flags&128)===0&&(Z(a),a.subtreeFlags&6&&(a.flags|=8192)):Z(a),e=a.updateQueue,e!==null&&On(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==e&&(a.flags|=2048),t!==null&&ct(Ia),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),da(I),Z(a),null;case 25:return null;case 30:return null}throw Error(y(156,a.tag))}function xf(t,a){switch(Gs(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return da(I),Ye(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return $n(a),null;case 13:if(ua(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(y(340));an()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return ct(tt),null;case 4:return Ye(),null;case 10:return da(a.type),null;case 22:case 23:return ua(a),Js(),t!==null&&ct(Ia),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return da(I),null;case 25:return null;default:return null}}function c2(t,a){switch(Gs(a),a.tag){case 3:da(I),Ye();break;case 26:case 27:case 5:$n(a);break;case 4:Ye();break;case 13:ua(a);break;case 19:ct(tt);break;case 10:da(a.type);break;case 22:case 23:ua(a),Js(),t!==null&&ct(Ia);break;case 24:da(I)}}function on(t,a){try{var e=a.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var n=l.next;e=n;do{if((e.tag&t)===t){l=void 0;var i=e.create,c=e.inst;l=i(),c.destroy=l}e=e.next}while(e!==n)}}catch(s){L(a,a.return,s)}}function Va(t,a,e){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var c=l.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=a;var o=e,d=s;try{d()}catch(g){L(n,o,g)}}}l=l.next}while(l!==i)}}catch(g){L(a,a.return,g)}}function s2(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{pu(a,e)}catch(l){L(t,t.return,l)}}}function o2(t,a,e){e.props=ie(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){L(t,a,l)}}function Ol(t,a){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(n){L(t,a,n)}}function Jt(t,a){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(n){L(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){L(t,a,n)}else e.current=null}function u2(t){var a=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(n){L(t,t.return,n)}}function wc(t,a,e){try{var l=t.stateNode;Lf(l,t.type,e,a),l[xt]=a}catch(n){L(t,t.return,n)}}function r2(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||r2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ds(t,a,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(t),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ni));else if(l!==4&&(l===27&&Ga(t.type)&&(e=t.stateNode,a=null),t=t.child,t!==null))for(ds(t,a,e),t=t.sibling;t!==null;)ds(t,a,e),t=t.sibling}function pi(t,a,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(l!==4&&(l===27&&Ga(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(pi(t,a,e),t=t.sibling;t!==null;)pi(t,a,e),t=t.sibling}function d2(t){var a=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ut(a,l,e),a[dt]=t,a[xt]=e}catch(i){L(t,t.return,i)}}var na=!1,F=!1,_c=!1,J0=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Sf(t,a){if(t=t.containerInfo,bs=wi,t=Po(t),Ls(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var c=0,s=-1,o=-1,d=0,g=0,v=t,p=null;a:for(;;){for(var h;v!==e||n!==0&&v.nodeType!==3||(s=c+n),v!==i||l!==0&&v.nodeType!==3||(o=c+l),v.nodeType===3&&(c+=v.nodeValue.length),(h=v.firstChild)!==null;)p=v,v=h;for(;;){if(v===t)break a;if(p===e&&++d===n&&(s=c),p===i&&++g===l&&(o=c),(h=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=h}e=s===-1||o===-1?null:{start:s,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for(xs={focusedElem:t,selectionRange:e},wi=!1,lt=a;lt!==null;)if(a=lt,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,lt=t;else for(;lt!==null;){switch(a=lt,i=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=a,n=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var M=ie(e.type,n,e.elementType===e.type);t=l.getSnapshotBeforeUpdate(M,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(S){L(e,e.return,S)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)Ms(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ms(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=a.sibling,t!==null){t.return=a.return,lt=t;break}lt=a.return}}function f2(t,a,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:xa(t,e),l&4&&on(5,e);break;case 1:if(xa(t,e),l&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(c){L(e,e.return,c)}else{var n=ie(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(c){L(e,e.return,c)}}l&64&&s2(e),l&512&&Ol(e,e.return);break;case 3:if(xa(t,e),l&64&&(t=e.updateQueue,t!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{pu(t,a)}catch(c){L(e,e.return,c)}}break;case 27:a===null&&l&4&&d2(e);case 26:case 5:xa(t,e),a===null&&l&4&&u2(e),l&512&&Ol(e,e.return);break;case 12:xa(t,e);break;case 13:xa(t,e),l&4&&g2(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Of.bind(null,e),Zf(t,e))));break;case 22:if(l=e.memoizedState!==null||na,!l){a=a!==null&&a.memoizedState!==null||F,n=na;var i=F;na=l,(F=a)&&!i?Sa(t,e,(e.subtreeFlags&8772)!==0):xa(t,e),na=n,F=i}break;case 30:break;default:xa(t,e)}}function p2(t){var a=t.alternate;a!==null&&(t.alternate=null,p2(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Ds(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var G=null,yt=!1;function la(t,a,e){for(e=e.child;e!==null;)h2(t,a,e),e=e.sibling}function h2(t,a,e){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Fl,e)}catch{}switch(e.tag){case 26:F||Jt(e,a),la(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:F||Jt(e,a);var l=G,n=yt;Ga(e.type)&&(G=e.stateNode,yt=!1),la(t,a,e),Bl(e.stateNode),G=l,yt=n;break;case 5:F||Jt(e,a);case 6:if(l=G,n=yt,G=null,la(t,a,e),G=l,yt=n,G!==null)if(yt)try{(G.nodeType===9?G.body:G.nodeName==="HTML"?G.ownerDocument.body:G).removeChild(e.stateNode)}catch(i){L(e,a,i)}else try{G.removeChild(e.stateNode)}catch(i){L(e,a,i)}break;case 18:G!==null&&(yt?(t=G,oo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Jl(t)):oo(G,e.stateNode));break;case 4:l=G,n=yt,G=e.stateNode.containerInfo,yt=!0,la(t,a,e),G=l,yt=n;break;case 0:case 11:case 14:case 15:F||Va(2,e,a),F||Va(4,e,a),la(t,a,e);break;case 1:F||(Jt(e,a),l=e.stateNode,typeof l.componentWillUnmount=="function"&&o2(e,a,l)),la(t,a,e);break;case 21:la(t,a,e);break;case 22:F=(l=F)||e.memoizedState!==null,la(t,a,e),F=l;break;default:la(t,a,e)}}function g2(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Jl(t)}catch(e){L(a,a.return,e)}}function Mf(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new J0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new J0),a;default:throw Error(y(435,t.tag))}}function kc(t,a){var e=Mf(t);a.forEach(function(l){var n=Cf.bind(null,t,l);e.has(l)||(e.add(l),l.then(n,n))})}function Mt(t,a){var e=a.deletions;if(e!==null)for(var l=0;l<e.length;l++){var n=e[l],i=t,c=a,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(Ga(s.type)){G=s.stateNode,yt=!1;break t}break;case 5:G=s.stateNode,yt=!1;break t;case 3:case 4:G=s.stateNode.containerInfo,yt=!0;break t}s=s.return}if(G===null)throw Error(y(160));h2(i,c,n),G=null,yt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)m2(a,t),a=a.sibling}var Vt=null;function m2(t,a){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mt(a,t),wt(t),l&4&&(Va(3,t,t.return),on(3,t),Va(5,t,t.return));break;case 1:Mt(a,t),wt(t),l&512&&(F||e===null||Jt(e,e.return)),l&64&&na&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var n=Vt;if(Mt(a,t),wt(t),l&512&&(F||e===null||Jt(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Il]||i[dt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),ut(i,l,e),i[dt]=t,nt(i),l=i;break t;case"link":var c=ho("link","href",n).get(l+(e.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){c.splice(s,1);break a}}i=n.createElement(l),ut(i,l,e),n.head.appendChild(i);break;case"meta":if(c=ho("meta","content",n).get(l+(e.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){c.splice(s,1);break a}}i=n.createElement(l),ut(i,l,e),n.head.appendChild(i);break;default:throw Error(y(468,l))}i[dt]=t,nt(i),l=i}t.stateNode=l}else go(n,t.type,t.stateNode);else t.stateNode=po(n,l,t.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?go(n,t.type,t.stateNode):po(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&wc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Mt(a,t),wt(t),l&512&&(F||e===null||Jt(e,e.return)),e!==null&&l&4&&wc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Mt(a,t),wt(t),l&512&&(F||e===null||Jt(e,e.return)),t.flags&32){n=t.stateNode;try{Ge(n,"")}catch(h){L(t,t.return,h)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,wc(t,n,e!==null?e.memoizedProps:n)),l&1024&&(_c=!0);break;case 6:if(Mt(a,t),wt(t),l&4){if(t.stateNode===null)throw Error(y(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(h){L(t,t.return,h)}}break;case 3:if(Kn=null,n=Vt,Vt=xi(a.containerInfo),Mt(a,t),Vt=n,wt(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{Jl(a.containerInfo)}catch(h){L(t,t.return,h)}_c&&(_c=!1,v2(t));break;case 4:l=Vt,Vt=xi(t.stateNode.containerInfo),Mt(a,t),wt(t),Vt=l;break;case 12:Mt(a,t),wt(t);break;case 13:Mt(a,t),wt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(f1=Ft()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,kc(t,l)));break;case 22:n=t.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,d=na,g=F;if(na=d||n,F=g||o,Mt(a,t),F=g,na=d,wt(t),l&8192)t:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(e===null||o||na||F||Ja(t)),e=null,a=t;;){if(a.tag===5||a.tag===26){if(e===null){o=e=a;try{if(i=o.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=o.stateNode;var v=o.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(h){L(o,o.return,h)}}}else if(a.tag===6){if(e===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(h){L(o,o.return,h)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,kc(t,e))));break;case 19:Mt(a,t),wt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,kc(t,l)));break;case 30:break;case 21:break;default:Mt(a,t),wt(t)}}function wt(t){var a=t.flags;if(a&2){try{for(var e,l=t.return;l!==null;){if(r2(l)){e=l;break}l=l.return}if(e==null)throw Error(y(160));switch(e.tag){case 27:var n=e.stateNode,i=zc(t);pi(t,i,n);break;case 5:var c=e.stateNode;e.flags&32&&(Ge(c,""),e.flags&=-33);var s=zc(t);pi(t,s,c);break;case 3:case 4:var o=e.stateNode.containerInfo,d=zc(t);ds(t,d,o);break;default:throw Error(y(161))}}catch(g){L(t,t.return,g)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function v2(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;v2(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function xa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)f2(t,a.alternate,a),a=a.sibling}function Ja(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Va(4,a,a.return),Ja(a);break;case 1:Jt(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&o2(a,a.return,e),Ja(a);break;case 27:Bl(a.stateNode);case 26:case 5:Jt(a,a.return),Ja(a);break;case 22:a.memoizedState===null&&Ja(a);break;case 30:Ja(a);break;default:Ja(a)}t=t.sibling}}function Sa(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=t,i=a,c=i.flags;switch(i.tag){case 0:case 11:case 15:Sa(n,i,e),on(4,i);break;case 1:if(Sa(n,i,e),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){L(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)fu(o[n],s)}catch(d){L(l,l.return,d)}}e&&c&64&&s2(i),Ol(i,i.return);break;case 27:d2(i);case 26:case 5:Sa(n,i,e),e&&l===null&&c&4&&u2(i),Ol(i,i.return);break;case 12:Sa(n,i,e);break;case 13:Sa(n,i,e),e&&c&4&&g2(n,i);break;case 22:i.memoizedState===null&&Sa(n,i,e),Ol(i,i.return);break;case 30:break;default:Sa(n,i,e)}a=a.sibling}}function o1(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&ln(e))}function u1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ln(t))}function Zt(t,a,e,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)y2(t,a,e,l),a=a.sibling}function y2(t,a,e,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(t,a,e,l),n&2048&&on(9,a);break;case 1:Zt(t,a,e,l);break;case 3:Zt(t,a,e,l),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ln(t)));break;case 12:if(n&2048){Zt(t,a,e,l),t=a.stateNode;try{var i=a.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){L(a,a.return,o)}}else Zt(t,a,e,l);break;case 13:Zt(t,a,e,l);break;case 23:break;case 22:i=a.stateNode,c=a.alternate,a.memoizedState!==null?i._visibility&2?Zt(t,a,e,l):Cl(t,a):i._visibility&2?Zt(t,a,e,l):(i._visibility|=2,xe(t,a,e,l,(a.subtreeFlags&10256)!==0)),n&2048&&o1(c,a);break;case 24:Zt(t,a,e,l),n&2048&&u1(a.alternate,a);break;default:Zt(t,a,e,l)}}function xe(t,a,e,l,n){for(n=n&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=t,c=a,s=e,o=l,d=c.flags;switch(c.tag){case 0:case 11:case 15:xe(i,c,s,o,n),on(8,c);break;case 23:break;case 22:var g=c.stateNode;c.memoizedState!==null?g._visibility&2?xe(i,c,s,o,n):Cl(i,c):(g._visibility|=2,xe(i,c,s,o,n)),n&&d&2048&&o1(c.alternate,c);break;case 24:xe(i,c,s,o,n),n&&d&2048&&u1(c.alternate,c);break;default:xe(i,c,s,o,n)}a=a.sibling}}function Cl(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,l=a,n=l.flags;switch(l.tag){case 22:Cl(e,l),n&2048&&o1(l.alternate,l);break;case 24:Cl(e,l),n&2048&&u1(l.alternate,l);break;default:Cl(e,l)}a=a.sibling}}var xl=8192;function ve(t){if(t.subtreeFlags&xl)for(t=t.child;t!==null;)b2(t),t=t.sibling}function b2(t){switch(t.tag){case 26:ve(t),t.flags&xl&&t.memoizedState!==null&&i4(Vt,t.memoizedState,t.memoizedProps);break;case 5:ve(t);break;case 3:case 4:var a=Vt;Vt=xi(t.stateNode.containerInfo),ve(t),Vt=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=xl,xl=16777216,ve(t),xl=a):ve(t));break;default:ve(t)}}function x2(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function hl(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];lt=l,M2(l,t)}x2(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S2(t),t=t.sibling}function S2(t){switch(t.tag){case 0:case 11:case 15:hl(t),t.flags&2048&&Va(9,t,t.return);break;case 3:hl(t);break;case 12:hl(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Qn(t)):hl(t);break;default:hl(t)}}function Qn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];lt=l,M2(l,t)}x2(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Va(8,a,a.return),Qn(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,Qn(a));break;default:Qn(a)}t=t.sibling}}function M2(t,a){for(;lt!==null;){var e=lt;switch(e.tag){case 0:case 11:case 15:Va(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,lt=l;else t:for(e=t;lt!==null;){l=lt;var n=l.sibling,i=l.return;if(p2(l),l===e){lt=null;break t}if(n!==null){n.return=i,lt=n;break t}lt=i}}}var wf={getCacheForType:function(t){var a=ft(I),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e}},zf=typeof WeakMap=="function"?WeakMap:Map,q=0,j=null,A=null,O=0,U=0,zt=null,Oa=!1,el=!1,r1=!1,ga=0,J=0,Ya=0,te=0,d1=0,Nt=0,We=0,Rl=null,bt=null,fs=!1,f1=0,hi=1/0,gi=null,Ua=null,ot=0,qa=null,Fe=null,Ve=0,ps=0,hs=null,w2=null,Dl=0,gs=null;function Tt(){if((q&2)!==0&&O!==0)return O&-O;if(z.T!==null){var t=Qe;return t!==0?t:h1()}return Bo()}function z2(){Nt===0&&(Nt=(O&536870912)===0||D?Oo():536870912);var t=Lt.current;return t!==null&&(t.flags|=32),Nt}function At(t,a,e){(t===j&&(U===2||U===9)||t.cancelPendingCommit!==null)&&($e(t,0),Ca(t,O,Nt,!1)),Pl(t,e),((q&2)===0||t!==j)&&(t===j&&((q&2)===0&&(te|=e),J===4&&Ca(t,O,Nt,!1)),It(t))}function _2(t,a,e){if((q&6)!==0)throw Error(y(327));var l=!e&&(a&124)===0&&(a&t.expiredLanes)===0||$l(t,a),n=l?Ef(t,a):Ec(t,a,!0),i=l;do{if(n===0){el&&!l&&Ca(t,a,0,!1);break}else{if(e=t.current.alternate,i&&!_f(e)){n=Ec(t,a,!1),i=!1;continue}if(n===2){if(i=a,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;t:{var s=t;n=Rl;var o=s.current.memoizedState.isDehydrated;if(o&&($e(s,c).flags|=256),c=Ec(s,c,!1),c!==2){if(r1&&!o){s.errorRecoveryDisabledLanes|=i,te|=i,n=4;break t}i=bt,bt=n,i!==null&&(bt===null?bt=i:bt.push.apply(bt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){$e(t,0),Ca(t,a,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(y(345));case 4:if((a&4194048)!==a)break;case 6:Ca(l,a,Nt,!Oa);break t;case 2:bt=null;break;case 3:case 5:break;default:throw Error(y(329))}if((a&62914560)===a&&(n=f1+300-Ft(),10<n)){if(Ca(l,a,Nt,!Oa),_i(l,0,!0)!==0)break t;l.timeoutHandle=G2(W0.bind(null,l,e,bt,gi,fs,a,Nt,te,We,Oa,i,2,-0,0),n);break t}W0(l,e,bt,gi,fs,a,Nt,te,We,Oa,i,0,-0,0)}}break}while(!0);It(t)}function W0(t,a,e,l,n,i,c,s,o,d,g,v,p,h){if(t.timeoutHandle=-1,v=a.subtreeFlags,(v&8192||(v&16785408)===16785408)&&(Gl={stylesheets:null,count:0,unsuspend:n4},b2(a),v=c4(),v!==null)){t.cancelPendingCommit=v($0.bind(null,t,a,i,e,l,n,c,s,o,g,1,p,h)),Ca(t,i,c,!d);return}$0(t,a,i,e,l,n,c,s,o)}function _f(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var n=e[l],i=n.getSnapshot;n=n.value;try{if(!Ot(i(),n))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ca(t,a,e,l){a&=~d1,a&=~te,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var n=a;0<n;){var i=31-Et(n),c=1<<i;l[i]=-1,n&=~c}e!==0&&Ro(t,e,a)}function Ui(){return(q&6)===0?(un(0,!1),!1):!0}function p1(){if(A!==null){if(U===0)var t=A.return;else t=A,oa=ue=null,Is(t),je=null,Vl=0,t=A;for(;t!==null;)c2(t.alternate,t),t=t.return;A=null}}function $e(t,a){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Vf(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),p1(),j=t,A=e=ra(t.current,null),O=a,U=0,zt=null,Oa=!1,el=$l(t,a),r1=!1,We=Nt=d1=te=Ya=J=0,bt=Rl=null,fs=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var n=31-Et(l),i=1<<n;a|=t[n],l&=~i}return ga=a,Ai(),e}function k2(t,a){E=null,z.H=oi,a===nn||a===Ci?(a=E0(),U=3):a===ru?(a=E0(),U=4):U=a===t2?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,zt=a,A===null&&(J=1,di(t,Ht(a,t.current)))}function E2(){var t=z.H;return z.H=oi,t===null?oi:t}function T2(){var t=z.A;return z.A=wf,t}function ms(){J=4,Oa||(O&4194048)!==O&&Lt.current!==null||(el=!0),(Ya&134217727)===0&&(te&134217727)===0||j===null||Ca(j,O,Nt,!1)}function Ec(t,a,e){var l=q;q|=2;var n=E2(),i=T2();(j!==t||O!==a)&&(gi=null,$e(t,a)),a=!1;var c=J;t:do try{if(U!==0&&A!==null){var s=A,o=zt;switch(U){case 8:p1(),c=6;break t;case 3:case 2:case 9:case 6:Lt.current===null&&(a=!0);var d=U;if(U=0,zt=null,De(t,s,o,d),e&&el){c=0;break t}break;default:d=U,U=0,zt=null,De(t,s,o,d)}}kf(),c=J;break}catch(g){k2(t,g)}while(!0);return a&&t.shellSuspendCounter++,oa=ue=null,q=l,z.H=n,z.A=i,A===null&&(j=null,O=0,Ai()),c}function kf(){for(;A!==null;)A2(A)}function Ef(t,a){var e=q;q|=2;var l=E2(),n=T2();j!==t||O!==a?(gi=null,hi=Ft()+500,$e(t,a)):el=$l(t,a);t:do try{if(U!==0&&A!==null){a=A;var i=zt;a:switch(U){case 1:U=0,zt=null,De(t,a,i,1);break;case 2:case 9:if(k0(i)){U=0,zt=null,F0(a);break}a=function(){U!==2&&U!==9||j!==t||(U=7),It(t)},i.then(a,a);break t;case 3:U=7;break t;case 4:U=5;break t;case 7:k0(i)?(U=0,zt=null,F0(a)):(U=0,zt=null,De(t,a,i,7));break;case 5:var c=null;switch(A.tag){case 26:c=A.memoizedState;case 5:case 27:var s=A;if(!c||J2(c)){U=0,zt=null;var o=s.sibling;if(o!==null)A=o;else{var d=s.return;d!==null?(A=d,qi(d)):A=null}break a}}U=0,zt=null,De(t,a,i,5);break;case 6:U=0,zt=null,De(t,a,i,6);break;case 8:p1(),J=6;break t;default:throw Error(y(462))}}Tf();break}catch(g){k2(t,g)}while(!0);return oa=ue=null,z.H=l,z.A=n,q=e,A!==null?0:(j=null,O=0,Ai(),J)}function Tf(){for(;A!==null&&!Wr();)A2(A)}function A2(t){var a=i2(t.alternate,t,ga);t.memoizedProps=t.pendingProps,a===null?qi(t):A=a}function F0(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=X0(e,a,a.pendingProps,a.type,void 0,O);break;case 11:a=X0(e,a,a.pendingProps,a.type.render,a.ref,O);break;case 5:Is(a);default:c2(e,a),a=A=cu(a,ga),a=i2(e,a,ga)}t.memoizedProps=t.pendingProps,a===null?qi(t):A=a}function De(t,a,e,l){oa=ue=null,Is(a),je=null,Vl=0;var n=a.return;try{if(vf(t,n,a,e,O)){J=1,di(t,Ht(e,t.current)),A=null;return}}catch(i){if(n!==null)throw A=n,i;J=1,di(t,Ht(e,t.current)),A=null;return}a.flags&32768?(D||l===1?t=!0:el||(O&536870912)!==0?t=!1:(Oa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),O2(a,t)):qi(a)}function qi(t){var a=t;do{if((a.flags&32768)!==0){O2(a,Oa);return}t=a.return;var e=bf(a.alternate,a,ga);if(e!==null){A=e;return}if(a=a.sibling,a!==null){A=a;return}A=a=t}while(a!==null);J===0&&(J=5)}function O2(t,a){do{var e=xf(t.alternate,t);if(e!==null){e.flags&=32767,A=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){A=t;return}A=t=e}while(t!==null);J=6,A=null}function $0(t,a,e,l,n,i,c,s,o){t.cancelPendingCommit=null;do Hi();while(ot!==0);if((q&6)!==0)throw Error(y(327));if(a!==null){if(a===t.current)throw Error(y(177));if(i=a.lanes|a.childLanes,i|=js,id(t,e,i,c,s,o),t===j&&(A=j=null,O=0),Fe=a,qa=t,Ve=e,ps=i,hs=n,w2=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Rf(Pn,function(){return U2(!0),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=B.p,B.p=2,c=q,q|=4;try{Sf(t,a,e)}finally{q=c,B.p=n,z.T=l}}ot=1,C2(),R2(),D2()}}function C2(){if(ot===1){ot=0;var t=qa,a=Fe,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var l=B.p;B.p=2;var n=q;q|=4;try{m2(a,t);var i=xs,c=Po(t.containerInfo),s=i.focusedElem,o=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&$o(s.ownerDocument.documentElement,s)){if(o!==null&&Ls(s)){var d=o.start,g=o.end;if(g===void 0&&(g=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(g,s.value.length);else{var v=s.ownerDocument||document,p=v&&v.defaultView||window;if(p.getSelection){var h=p.getSelection(),M=s.textContent.length,S=Math.min(o.start,M),R=o.end===void 0?S:Math.min(o.end,M);!h.extend&&S>R&&(c=R,R=S,S=c);var r=y0(s,S),u=y0(s,R);if(r&&u&&(h.rangeCount!==1||h.anchorNode!==r.node||h.anchorOffset!==r.offset||h.focusNode!==u.node||h.focusOffset!==u.offset)){var f=v.createRange();f.setStart(r.node,r.offset),h.removeAllRanges(),S>R?(h.addRange(f),h.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),h.addRange(f))}}}}for(v=[],h=s;h=h.parentNode;)h.nodeType===1&&v.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<v.length;s++){var m=v[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}wi=!!bs,xs=bs=null}finally{q=n,B.p=l,z.T=e}}t.current=a,ot=2}}function R2(){if(ot===2){ot=0;var t=qa,a=Fe,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var l=B.p;B.p=2;var n=q;q|=4;try{f2(t,a.alternate,a)}finally{q=n,B.p=l,z.T=e}}ot=3}}function D2(){if(ot===4||ot===3){ot=0,Fr();var t=qa,a=Fe,e=Ve,l=w2;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ot=5:(ot=0,Fe=qa=null,B2(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ua=null),Rs(e),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Fl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=z.T,n=B.p,B.p=2,z.T=null;try{for(var i=t.onRecoverableError,c=0;c<l.length;c++){var s=l[c];i(s.value,{componentStack:s.stack})}}finally{z.T=a,B.p=n}}(Ve&3)!==0&&Hi(),It(t),n=t.pendingLanes,(e&4194090)!==0&&(n&42)!==0?t===gs?Dl++:(Dl=0,gs=t):Dl=0,un(0,!1)}}function B2(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,ln(a)))}function Hi(t){return C2(),R2(),D2(),U2(t)}function U2(){if(ot!==5)return!1;var t=qa,a=ps;ps=0;var e=Rs(Ve),l=z.T,n=B.p;try{B.p=32>e?32:e,z.T=null,e=hs,hs=null;var i=qa,c=Ve;if(ot=0,Fe=qa=null,Ve=0,(q&6)!==0)throw Error(y(331));var s=q;if(q|=4,S2(i.current),y2(i,i.current,c,e),q=s,un(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Fl,i)}catch{}return!0}finally{B.p=n,z.T=l,B2(t,a)}}function P0(t,a,e){a=Ht(e,a),a=os(t.stateNode,a,2),t=Ba(t,a,2),t!==null&&(Pl(t,2),It(t))}function L(t,a,e){if(t.tag===3)P0(t,t,e);else for(;a!==null;){if(a.tag===3){P0(a,t,e);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ua===null||!Ua.has(l))){t=Ht(e,t),e=Pu(2),l=Ba(a,e,2),l!==null&&(Iu(e,l,a,t),Pl(l,2),It(l));break}}a=a.return}}function Tc(t,a,e){var l=t.pingCache;if(l===null){l=t.pingCache=new zf;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(e)||(r1=!0,n.add(e),t=Af.bind(null,t,a,e),a.then(t,t))}function Af(t,a,e){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,j===t&&(O&e)===e&&(J===4||J===3&&(O&62914560)===O&&300>Ft()-f1?(q&2)===0&&$e(t,0):d1|=e,We===O&&(We=0)),It(t)}function q2(t,a){a===0&&(a=Co()),t=al(t,a),t!==null&&(Pl(t,a),It(t))}function Of(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),q2(t,e)}function Cf(t,a){var e=0;switch(t.tag){case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(a),q2(t,e)}function Rf(t,a){return Os(t,a)}var mi=null,Se=null,vs=!1,vi=!1,Ac=!1,ae=0;function It(t){t!==Se&&t.next===null&&(Se===null?mi=Se=t:Se=Se.next=t),vi=!0,vs||(vs=!0,Bf())}function un(t,a){if(!Ac&&vi){Ac=!0;do for(var e=!1,l=mi;l!==null;){if(!a)if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-Et(42|t)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,I0(l,i))}else i=O,i=_i(l,l===j?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||$l(l,i)||(e=!0,I0(l,i));l=l.next}while(e);Ac=!1}}function Df(){H2()}function H2(){vi=vs=!1;var t=0;ae!==0&&(jf()&&(t=ae),ae=0);for(var a=Ft(),e=null,l=mi;l!==null;){var n=l.next,i=N2(l,a);i===0?(l.next=null,e===null?mi=n:e.next=n,n===null&&(Se=e)):(e=l,(t!==0||(i&3)!==0)&&(vi=!0)),l=n}un(t,!1)}function N2(t,a){for(var e=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-Et(i),s=1<<c,o=n[c];o===-1?((s&e)===0||(s&l)!==0)&&(n[c]=nd(s,a)):o<=a&&(t.expiredLanes|=s),i&=~s}if(a=j,e=O,e=_i(t,t===a?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===a&&(U===2||U===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ec(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||$l(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(l!==null&&ec(l),Rs(e)){case 2:case 8:e=To;break;case 32:e=Pn;break;case 268435456:e=Ao;break;default:e=Pn}return l=L2.bind(null,t),e=Os(e,l),t.callbackPriority=a,t.callbackNode=e,a}return l!==null&&l!==null&&ec(l),t.callbackPriority=2,t.callbackNode=null,2}function L2(t,a){if(ot!==0&&ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Hi(!0)&&t.callbackNode!==e)return null;var l=O;return l=_i(t,t===j?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(_2(t,l,a),N2(t,Ft()),t.callbackNode!=null&&t.callbackNode===e?L2.bind(null,t):null)}function I0(t,a){if(Hi())return null;_2(t,a,!0)}function Bf(){Yf(function(){(q&6)!==0?Os(Eo,Df):H2()})}function h1(){return ae===0&&(ae=Oo()),ae}function to(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hn(""+t)}function ao(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Uf(t,a,e,l,n){if(a==="submit"&&e&&e.stateNode===n){var i=to((n[xt]||null).action),c=l.submitter;c&&(a=(a=c[xt]||null)?to(a.formAction):c.getAttribute("formAction"),a!==null&&(i=a,c=null));var s=new ki("action","action",null,l,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ae!==0){var o=c?ao(n,c):new FormData(n);cs(e,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=c?ao(n,c):new FormData(n),cs(e,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(Cn=0;Cn<Jc.length;Cn++)Rn=Jc[Cn],eo=Rn.toLowerCase(),lo=Rn[0].toUpperCase()+Rn.slice(1),Xt(eo,"on"+lo);var Rn,eo,lo,Cn;Xt(tu,"onAnimationEnd");Xt(au,"onAnimationIteration");Xt(eu,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Id,"onTransitionRun");Xt(tf,"onTransitionStart");Xt(af,"onTransitionCancel");Xt(lu,"onTransitionEnd");Xe("onMouseEnter",["mouseout","mouseover"]);Xe("onMouseLeave",["mouseout","mouseover"]);Xe("onPointerEnter",["pointerout","pointerover"]);Xe("onPointerLeave",["pointerout","pointerover"]);ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ce("onBeforeInput",["compositionend","keypress","textInput","paste"]);ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function j2(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],n=l.event;l=l.listeners;t:{var i=void 0;if(a)for(var c=l.length-1;0<=c;c--){var s=l[c],o=s.instance,d=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=d;try{i(n)}catch(g){ri(g)}n.currentTarget=null,i=o}else for(c=0;c<l.length;c++){if(s=l[c],o=s.instance,d=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=d;try{i(n)}catch(g){ri(g)}n.currentTarget=null,i=o}}}}function T(t,a){var e=a[Vc];e===void 0&&(e=a[Vc]=new Set);var l=t+"__bubble";e.has(l)||(V2(a,t,2,!1),e.add(l))}function Oc(t,a,e){var l=0;a&&(l|=4),V2(e,t,l,a)}var Dn="_reactListening"+Math.random().toString(36).slice(2);function g1(t){if(!t[Dn]){t[Dn]=!0,Uo.forEach(function(e){e!=="selectionchange"&&(qf.has(e)||Oc(e,!1,t),Oc(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Dn]||(a[Dn]=!0,Oc("selectionchange",!1,a))}}function V2(t,a,e,l){switch(I2(a)){case 2:var n=u4;break;case 8:n=r4;break;default:n=b1}e=n.bind(null,a,e,t),n=void 0,!Qc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(a,e,{capture:!0,passive:n}):t.addEventListener(a,e,!0):n!==void 0?t.addEventListener(a,e,{passive:n}):t.addEventListener(a,e,!1)}function Cc(t,a,e,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var s=l.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=l.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=ze(s),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){l=i=c;continue t}s=s.parentNode}}l=l.return}Xo(function(){var d=i,g=Us(e),v=[];t:{var p=nu.get(t);if(p!==void 0){var h=ki,M=t;switch(t){case"keypress":if(Ln(e)===0)break t;case"keydown":case"keyup":h=Cd;break;case"focusin":M="focus",h=rc;break;case"focusout":M="blur",h=rc;break;case"beforeblur":case"afterblur":h=rc;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Bd;break;case tu:case au:case eu:h=Md;break;case lu:h=qd;break;case"scroll":case"scrollend":h=vd;break;case"wheel":h=Nd;break;case"copy":case"cut":case"paste":h=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=d0;break;case"toggle":case"beforetoggle":h=jd}var S=(a&4)!==0,R=!S&&(t==="scroll"||t==="scrollend"),r=S?p!==null?p+"Capture":null:p;S=[];for(var u=d,f;u!==null;){var m=u;if(f=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||f===null||r===null||(m=ql(u,r),m!=null&&S.push(Xl(u,m,f))),R)break;u=u.return}0<S.length&&(p=new h(p,M,null,e,g),v.push({event:p,listeners:S}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&e!==Gc&&(M=e.relatedTarget||e.fromElement)&&(ze(M)||M[Ie]))break t;if((h||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,h?(M=e.relatedTarget||e.toElement,h=d,M=M?ze(M):null,M!==null&&(R=Wl(M),S=M.tag,M!==R||S!==5&&S!==27&&S!==6)&&(M=null)):(h=null,M=d),h!==M)){if(S=u0,m="onMouseLeave",r="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(S=d0,m="onPointerLeave",r="onPointerEnter",u="pointer"),R=h==null?p:bl(h),f=M==null?p:bl(M),p=new S(m,u+"leave",h,e,g),p.target=R,p.relatedTarget=f,m=null,ze(g)===d&&(S=new S(r,u+"enter",M,e,g),S.target=f,S.relatedTarget=R,m=S),R=m,h&&M)a:{for(S=h,r=M,u=0,f=S;f;f=ye(f))u++;for(f=0,m=r;m;m=ye(m))f++;for(;0<u-f;)S=ye(S),u--;for(;0<f-u;)r=ye(r),f--;for(;u--;){if(S===r||r!==null&&S===r.alternate)break a;S=ye(S),r=ye(r)}S=null}else S=null;h!==null&&no(v,p,h,S,!1),M!==null&&R!==null&&no(v,R,M,S,!0)}}t:{if(p=d?bl(d):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var b=g0;else if(h0(p))if(Wo)b=Fd;else{b=Jd;var _=Kd}else h=p.nodeName,!h||h.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&Bs(d.elementType)&&(b=g0):b=Wd;if(b&&(b=b(t,d))){Jo(v,b,e,g);break t}_&&_(t,p,d),t==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&Xc(p,"number",p.value)}switch(_=d?bl(d):window,t){case"focusin":(h0(_)||_.contentEditable==="true")&&(Ee=_,Zc=d,wl=null);break;case"focusout":wl=Zc=Ee=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,b0(v,e,g);break;case"selectionchange":if(Pd)break;case"keydown":case"keyup":b0(v,e,g)}var x;if(Ns)t:{switch(t){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else ke?Zo(t,e)&&(w="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(w="onCompositionStart");w&&(Qo&&e.locale!=="ko"&&(ke||w!=="onCompositionStart"?w==="onCompositionEnd"&&ke&&(x=Go()):(Aa=g,qs="value"in Aa?Aa.value:Aa.textContent,ke=!0)),_=yi(d,w),0<_.length&&(w=new r0(w,t,null,e,g),v.push({event:w,listeners:_}),x?w.data=x:(x=Ko(e),x!==null&&(w.data=x)))),(x=Yd?Xd(t,e):Gd(t,e))&&(w=yi(d,"onBeforeInput"),0<w.length&&(_=new r0("onBeforeInput","beforeinput",null,e,g),v.push({event:_,listeners:w}),_.data=x)),Uf(v,t,d,e,g)}j2(v,a)})}function Xl(t,a,e){return{instance:t,listener:a,currentTarget:e}}function yi(t,a){for(var e=a+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ql(t,e),n!=null&&l.unshift(Xl(t,n,i)),n=ql(t,a),n!=null&&l.push(Xl(t,n,i))),t.tag===3)return l;t=t.return}return[]}function ye(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function no(t,a,e,l,n){for(var i=a._reactName,c=[];e!==null&&e!==l;){var s=e,o=s.alternate,d=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||d===null||(o=d,n?(d=ql(e,i),d!=null&&c.unshift(Xl(e,d,o))):n||(d=ql(e,i),d!=null&&c.push(Xl(e,d,o)))),e=e.return}c.length!==0&&t.push({event:a,listeners:c})}var Hf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function io(t){return(typeof t=="string"?t:""+t).replace(Hf,`
`).replace(Nf,"")}function Y2(t,a){return a=io(a),io(t)===a}function Ni(){}function H(t,a,e,l,n,i){switch(e){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ge(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ge(t,""+l);break;case"className":Mn(t,"class",l);break;case"tabIndex":Mn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(t,e,l);break;case"style":Yo(t,l,i);break;case"data":if(a!=="object"){Mn(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Hn(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(a!=="input"&&H(t,a,"name",n.name,n,null),H(t,a,"formEncType",n.formEncType,n,null),H(t,a,"formMethod",n.formMethod,n,null),H(t,a,"formTarget",n.formTarget,n,null)):(H(t,a,"encType",n.encType,n,null),H(t,a,"method",n.method,n,null),H(t,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Hn(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=Ni);break;case"onScroll":l!=null&&T("scroll",t);break;case"onScrollEnd":l!=null&&T("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(e=l.__html,e!=null){if(n.children!=null)throw Error(y(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=Hn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":T("beforetoggle",t),T("toggle",t),qn(t,"popover",l);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=gd.get(e)||e,qn(t,e,l))}}function ys(t,a,e,l,n,i){switch(e){case"style":Yo(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(e=l.__html,e!=null){if(n.children!=null)throw Error(y(60));t.innerHTML=e}}break;case"children":typeof l=="string"?Ge(t,l):(typeof l=="number"||typeof l=="bigint")&&Ge(t,""+l);break;case"onScroll":l!=null&&T("scroll",t);break;case"onScrollEnd":l!=null&&T("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),a=e.slice(2,n?e.length-7:void 0),i=t[xt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,l,n);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):qn(t,e,l)}}}function ut(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":T("error",t),T("load",t);var l=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var c=e[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:H(t,a,i,c,e,null)}}n&&H(t,a,"srcSet",e.srcSet,e,null),l&&H(t,a,"src",e.src,e,null);return;case"input":T("invalid",t);var s=i=c=n=null,o=null,d=null;for(l in e)if(e.hasOwnProperty(l)){var g=e[l];if(g!=null)switch(l){case"name":n=g;break;case"type":c=g;break;case"checked":o=g;break;case"defaultChecked":d=g;break;case"value":i=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,a));break;default:H(t,a,l,g,e,null)}}Lo(t,i,s,o,d,c,n,!1),In(t);return;case"select":T("invalid",t),l=c=i=null;for(n in e)if(e.hasOwnProperty(n)&&(s=e[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":l=s;default:H(t,a,n,s,e,null)}a=i,e=c,t.multiple=!!l,a!=null?Ue(t,!!l,a,!1):e!=null&&Ue(t,!!l,e,!0);return;case"textarea":T("invalid",t),i=n=l=null;for(c in e)if(e.hasOwnProperty(c)&&(s=e[c],s!=null))switch(c){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(91));break;default:H(t,a,c,s,e,null)}Vo(t,l,n,i),In(t);return;case"option":for(o in e)if(e.hasOwnProperty(o)&&(l=e[o],l!=null))switch(o){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:H(t,a,o,l,e,null)}return;case"dialog":T("beforetoggle",t),T("toggle",t),T("cancel",t),T("close",t);break;case"iframe":case"object":T("load",t);break;case"video":case"audio":for(l=0;l<Yl.length;l++)T(Yl[l],t);break;case"image":T("error",t),T("load",t);break;case"details":T("toggle",t);break;case"embed":case"source":case"link":T("error",t),T("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in e)if(e.hasOwnProperty(d)&&(l=e[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:H(t,a,d,l,e,null)}return;default:if(Bs(a)){for(g in e)e.hasOwnProperty(g)&&(l=e[g],l!==void 0&&ys(t,a,g,l,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(l=e[s],l!=null&&H(t,a,s,l,e,null))}function Lf(t,a,e,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,o=null,d=null,g=null;for(h in e){var v=e[h];if(e.hasOwnProperty(h)&&v!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=v;default:l.hasOwnProperty(h)||H(t,a,h,null,l,v)}}for(var p in l){var h=l[p];if(v=e[p],l.hasOwnProperty(p)&&(h!=null||v!=null))switch(p){case"type":i=h;break;case"name":n=h;break;case"checked":d=h;break;case"defaultChecked":g=h;break;case"value":c=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,a));break;default:h!==v&&H(t,a,p,h,l,v)}}Yc(t,c,s,o,d,g,i,n);return;case"select":h=c=s=p=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":h=o;default:l.hasOwnProperty(i)||H(t,a,i,null,l,o)}for(n in l)if(i=l[n],o=e[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==o&&H(t,a,n,i,l,o)}a=s,e=c,l=h,p!=null?Ue(t,!!e,p,!1):!!l!=!!e&&(a!=null?Ue(t,!!e,a,!0):Ue(t,!!e,e?[]:"",!1));return;case"textarea":h=p=null;for(s in e)if(n=e[s],e.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:H(t,a,s,null,l,n)}for(c in l)if(n=l[c],i=e[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":p=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==i&&H(t,a,c,n,l,i)}jo(t,p,h);return;case"option":for(var M in e)if(p=e[M],e.hasOwnProperty(M)&&p!=null&&!l.hasOwnProperty(M))switch(M){case"selected":t.selected=!1;break;default:H(t,a,M,null,l,p)}for(o in l)if(p=l[o],h=e[o],l.hasOwnProperty(o)&&p!==h&&(p!=null||h!=null))switch(o){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:H(t,a,o,p,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in e)p=e[S],e.hasOwnProperty(S)&&p!=null&&!l.hasOwnProperty(S)&&H(t,a,S,null,l,p);for(d in l)if(p=l[d],h=e[d],l.hasOwnProperty(d)&&p!==h&&(p!=null||h!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,a));break;default:H(t,a,d,p,l,h)}return;default:if(Bs(a)){for(var R in e)p=e[R],e.hasOwnProperty(R)&&p!==void 0&&!l.hasOwnProperty(R)&&ys(t,a,R,void 0,l,p);for(g in l)p=l[g],h=e[g],!l.hasOwnProperty(g)||p===h||p===void 0&&h===void 0||ys(t,a,g,p,l,h);return}}for(var r in e)p=e[r],e.hasOwnProperty(r)&&p!=null&&!l.hasOwnProperty(r)&&H(t,a,r,null,l,p);for(v in l)p=l[v],h=e[v],!l.hasOwnProperty(v)||p===h||p==null&&h==null||H(t,a,v,p,l,h)}var bs=null,xs=null;function bi(t){return t.nodeType===9?t:t.ownerDocument}function co(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X2(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Ss(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Rc=null;function jf(){var t=window.event;return t&&t.type==="popstate"?t===Rc?!1:(Rc=t,!0):(Rc=null,!1)}var G2=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,so=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof so<"u"?function(t){return so.resolve(null).then(t).catch(Xf)}:G2;function Xf(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function oo(t,a){var e=a,l=0,n=0;do{var i=e.nextSibling;if(t.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(0<l&&8>l){e=l;var c=t.ownerDocument;if(e&1&&Bl(c.documentElement),e&2&&Bl(c.body),e&4)for(e=c.head,Bl(e),c=e.firstChild;c;){var s=c.nextSibling,o=c.nodeName;c[Il]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&c.rel.toLowerCase()==="stylesheet"||e.removeChild(c),c=s}}if(n===0){t.removeChild(i),Jl(a);return}n--}else e==="$"||e==="$?"||e==="$!"?n++:l=e.charCodeAt(0)-48;else l=0;e=i}while(e);Jl(a)}function Ms(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ms(e),Ds(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Gf(t,a,e,l){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Il])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Yt(t.nextSibling),t===null)break}return null}function Qf(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Yt(t.nextSibling),t===null))return null;return t}function ws(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Zf(t,a){var e=t.ownerDocument;if(t.data!=="$?"||e.readyState==="complete")a();else{var l=function(){a(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Yt(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var zs=null;function uo(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(a===0)return t;a--}else e==="/$"&&a++}t=t.previousSibling}return null}function Q2(t,a,e){switch(a=bi(e),t){case"html":if(t=a.documentElement,!t)throw Error(y(452));return t;case"head":if(t=a.head,!t)throw Error(y(453));return t;case"body":if(t=a.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function Bl(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ds(t)}var jt=new Map,ro=new Set;function xi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=B.d;B.d={f:Kf,r:Jf,D:Wf,C:Ff,L:$f,m:Pf,X:t4,S:If,M:a4};function Kf(){var t=ma.f(),a=Ui();return t||a}function Jf(t){var a=tl(t);a!==null&&a.tag===5&&a.type==="form"?Nu(a):ma.r(t)}var ll=typeof document>"u"?null:document;function Z2(t,a,e){var l=ll;if(l&&typeof a=="string"&&a){var n=qt(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),ro.has(n)||(ro.add(n),t={rel:t,crossOrigin:e,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),ut(a,"link",t),nt(a),l.head.appendChild(a)))}}function Wf(t){ma.D(t),Z2("dns-prefetch",t,null)}function Ff(t,a){ma.C(t,a),Z2("preconnect",t,a)}function $f(t,a,e){ma.L(t,a,e);var l=ll;if(l&&t&&a){var n='link[rel="preload"][as="'+qt(a)+'"]';a==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+qt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+qt(e.imageSizes)+'"]')):n+='[href="'+qt(t)+'"]';var i=n;switch(a){case"style":i=Pe(t);break;case"script":i=nl(t)}jt.has(i)||(t=V({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),jt.set(i,t),l.querySelector(n)!==null||a==="style"&&l.querySelector(rn(i))||a==="script"&&l.querySelector(dn(i))||(a=l.createElement("link"),ut(a,"link",t),nt(a),l.head.appendChild(a)))}}function Pf(t,a){ma.m(t,a);var e=ll;if(e&&t){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=nl(t)}if(!jt.has(i)&&(t=V({rel:"modulepreload",href:t},a),jt.set(i,t),e.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(dn(i)))return}l=e.createElement("link"),ut(l,"link",t),nt(l),e.head.appendChild(l)}}}function If(t,a,e){ma.S(t,a,e);var l=ll;if(l&&t){var n=Be(l).hoistableStyles,i=Pe(t);a=a||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=l.querySelector(rn(i)))s.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":a},e),(e=jt.get(i))&&m1(t,e);var o=c=l.createElement("link");nt(o),ut(o,"link",t),o._p=new Promise(function(d,g){o.onload=d,o.onerror=g}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zn(c,a,l)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function t4(t,a){ma.X(t,a);var e=ll;if(e&&t){var l=Be(e).hoistableScripts,n=nl(t),i=l.get(n);i||(i=e.querySelector(dn(n)),i||(t=V({src:t,async:!0},a),(a=jt.get(n))&&v1(t,a),i=e.createElement("script"),nt(i),ut(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function a4(t,a){ma.M(t,a);var e=ll;if(e&&t){var l=Be(e).hoistableScripts,n=nl(t),i=l.get(n);i||(i=e.querySelector(dn(n)),i||(t=V({src:t,async:!0,type:"module"},a),(a=jt.get(n))&&v1(t,a),i=e.createElement("script"),nt(i),ut(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fo(t,a,e,l){var n=(n=Ra.current)?xi(n):null;if(!n)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Pe(e.href),e=Be(n).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Pe(e.href);var i=Be(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(rn(t)))&&!i._p&&(c.instance=i,c.state.loading=5),jt.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},jt.set(t,e),i||e4(n,t,e,c.state))),a&&l===null)throw Error(y(528,""));return c}if(a&&l!==null)throw Error(y(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=nl(e),e=Be(n).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function Pe(t){return'href="'+qt(t)+'"'}function rn(t){return'link[rel="stylesheet"]['+t+"]"}function K2(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function e4(t,a,e,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),ut(a,"link",e),nt(a),t.head.appendChild(a))}function nl(t){return'[src="'+qt(t)+'"]'}function dn(t){return"script[async]"+t}function po(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+qt(e.href)+'"]');if(l)return a.instance=l,nt(l),l;var n=V({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),nt(l),ut(l,"style",n),Zn(l,e.precedence,t),a.instance=l;case"stylesheet":n=Pe(e.href);var i=t.querySelector(rn(n));if(i)return a.state.loading|=4,a.instance=i,nt(i),i;l=K2(e),(n=jt.get(n))&&m1(l,n),i=(t.ownerDocument||t).createElement("link"),nt(i);var c=i;return c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),ut(i,"link",l),a.state.loading|=4,Zn(i,e.precedence,t),a.instance=i;case"script":return i=nl(e.src),(n=t.querySelector(dn(i)))?(a.instance=n,nt(n),n):(l=e,(n=jt.get(i))&&(l=V({},e),v1(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),nt(n),ut(n,"link",l),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(y(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Zn(l,e.precedence,t));return a.instance}function Zn(t,a,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var s=l[c];if(s.dataset.precedence===a)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function m1(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function v1(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Kn=null;function ho(t,a,e){if(Kn===null){var l=new Map,n=Kn=new Map;n.set(e,l)}else n=Kn,l=n.get(e),l||(l=new Map,n.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var i=e[n];if(!(i[Il]||i[dt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(a)||"";c=t+c;var s=l.get(c);s?s.push(i):l.set(c,[i])}}return l}function go(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function l4(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function J2(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Gl=null;function n4(){}function i4(t,a,e){if(Gl===null)throw Error(y(475));var l=Gl;if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Pe(e.href),i=t.querySelector(rn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Si.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=i,nt(i);return}i=t.ownerDocument||t,e=K2(e),(n=jt.get(n))&&m1(e,n),i=i.createElement("link"),nt(i);var c=i;c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),ut(i,"link",e),a.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Si.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}function c4(){if(Gl===null)throw Error(y(475));var t=Gl;return t.stylesheets&&t.count===0&&_s(t,t.stylesheets),0<t.count?function(a){var e=setTimeout(function(){if(t.stylesheets&&_s(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e)}}:null}function Si(){if(this.count--,this.count===0){if(this.stylesheets)_s(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mi=null;function _s(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mi=new Map,a.forEach(s4,t),Mi=null,Si.call(t))}function s4(t,a){if(!(a.state.loading&4)){var e=Mi.get(t);if(e)var l=e.get(null);else{e=new Map,Mi.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(e.set(c.dataset.precedence,c),l=c)}l&&e.set(null,l)}n=a.instance,c=n.getAttribute("data-precedence"),i=e.get(c)||l,i===l&&e.set(null,n),e.set(c,n),this.count++,l=Si.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var Ql={$$typeof:ia,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function o4(t,a,e,l,n,i,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.hiddenUpdates=lc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function W2(t,a,e,l,n,i,c,s,o,d,g,v){return t=new o4(t,a,e,c,s,o,d,v),a=1,i===!0&&(a|=24),i=_t(3,null,null,a),t.current=i,i.stateNode=t,a=Qs(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:a},Ks(i),t}function F2(t){return t?(t=Oe,t):Oe}function $2(t,a,e,l,n,i){n=F2(n),l.context===null?l.context=n:l.pendingContext=n,l=Da(a),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=Ba(t,l,a),e!==null&&(At(e,t,a),kl(e,t,a))}function mo(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function y1(t,a){mo(t,a),(t=t.alternate)&&mo(t,a)}function P2(t){if(t.tag===13){var a=al(t,67108864);a!==null&&At(a,t,67108864),y1(t,67108864)}}var wi=!0;function u4(t,a,e,l){var n=z.T;z.T=null;var i=B.p;try{B.p=2,b1(t,a,e,l)}finally{B.p=i,z.T=n}}function r4(t,a,e,l){var n=z.T;z.T=null;var i=B.p;try{B.p=8,b1(t,a,e,l)}finally{B.p=i,z.T=n}}function b1(t,a,e,l){if(wi){var n=ks(l);if(n===null)Cc(t,a,l,zi,e),vo(t,l);else if(f4(n,t,a,e,l))l.stopPropagation();else if(vo(t,l),a&4&&-1<d4.indexOf(t)){for(;n!==null;){var i=tl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Za(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var o=1<<31-Et(c);s.entanglements[1]|=o,c&=~o}It(i),(q&6)===0&&(hi=Ft()+500,un(0,!1))}}break;case 13:s=al(i,2),s!==null&&At(s,i,2),Ui(),y1(i,2)}if(i=ks(l),i===null&&Cc(t,a,l,zi,e),i===n)break;n=i}n!==null&&l.stopPropagation()}else Cc(t,a,l,null,e)}}function ks(t){return t=Us(t),x1(t)}var zi=null;function x1(t){if(zi=null,t=ze(t),t!==null){var a=Wl(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=wo(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return zi=t,null}function I2(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case Eo:return 2;case To:return 8;case Pn:case Pr:return 32;case Ao:return 268435456;default:return 32}default:return 32}}var Es=!1,Ha=null,Na=null,La=null,Zl=new Map,Kl=new Map,Ea=[],d4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vo(t,a){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Zl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(a.pointerId)}}function gl(t,a,e,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=tl(a),a!==null&&P2(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function f4(t,a,e,l,n){switch(a){case"focusin":return Ha=gl(Ha,t,a,e,l,n),!0;case"dragenter":return Na=gl(Na,t,a,e,l,n),!0;case"mouseover":return La=gl(La,t,a,e,l,n),!0;case"pointerover":var i=n.pointerId;return Zl.set(i,gl(Zl.get(i)||null,t,a,e,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Kl.set(i,gl(Kl.get(i)||null,t,a,e,l,n)),!0}return!1}function tr(t){var a=ze(t.target);if(a!==null){var e=Wl(a);if(e!==null){if(a=e.tag,a===13){if(a=wo(e),a!==null){t.blockedOn=a,cd(t.priority,function(){if(e.tag===13){var l=Tt();l=Cs(l);var n=al(e,l);n!==null&&At(n,e,l),y1(e,l)}});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jn(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=ks(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);Gc=l,e.target.dispatchEvent(l),Gc=null}else return a=tl(e),a!==null&&P2(a),t.blockedOn=e,!1;a.shift()}return!0}function yo(t,a,e){Jn(t)&&e.delete(a)}function p4(){Es=!1,Ha!==null&&Jn(Ha)&&(Ha=null),Na!==null&&Jn(Na)&&(Na=null),La!==null&&Jn(La)&&(La=null),Zl.forEach(yo),Kl.forEach(yo)}function Bn(t,a){t.blockedOn===a&&(t.blockedOn=null,Es||(Es=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,p4)))}var Un=null;function bo(t){Un!==t&&(Un=t,at.unstable_scheduleCallback(at.unstable_NormalPriority,function(){Un===t&&(Un=null);for(var a=0;a<t.length;a+=3){var e=t[a],l=t[a+1],n=t[a+2];if(typeof l!="function"){if(x1(l||e)===null)continue;break}var i=tl(e);i!==null&&(t.splice(a,3),a-=3,cs(i,{pending:!0,data:n,method:e.method,action:l},l,n))}}))}function Jl(t){function a(o){return Bn(o,t)}Ha!==null&&Bn(Ha,t),Na!==null&&Bn(Na,t),La!==null&&Bn(La,t),Zl.forEach(a),Kl.forEach(a);for(var e=0;e<Ea.length;e++){var l=Ea[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ea.length&&(e=Ea[0],e.blockedOn===null);)tr(e),e.blockedOn===null&&Ea.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var n=e[l],i=e[l+1],c=n[xt]||null;if(typeof i=="function")c||bo(e);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[xt]||null)s=c.formAction;else if(x1(n)!==null)continue}else s=c.action;typeof s=="function"?e[l+1]=s:(e.splice(l,3),l-=3),bo(e)}}}function S1(t){this._internalRoot=t}Li.prototype.render=S1.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(y(409));var e=a.current,l=Tt();$2(e,l,t,a,null,null)};Li.prototype.unmount=S1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;$2(t.current,2,null,t,null,null),Ui(),a[Ie]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var a=Bo();t={blockedOn:null,target:t,priority:a};for(var e=0;e<Ea.length&&a!==0&&a<Ea[e].priority;e++);Ea.splice(e,0,t),e===0&&tr(t)}};var xo=So.version;if(xo!=="19.1.1")throw Error(y(527,xo,"19.1.1"));B.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=Gr(a),t=t!==null?zo(t):null,t=t===null?null:t.stateNode,t};var h4={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ml=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ml.isDisabled&&ml.supportsFiber))try{Fl=ml.inject(h4),kt=ml}catch{}var ml;ji.createRoot=function(t,a){if(!Mo(t))throw Error(y(299));var e=!1,l="",n=Wu,i=Fu,c=$u,s=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks)),a=W2(t,1,!1,null,null,e,l,n,i,c,s,null),t[Ie]=a.current,g1(t),new S1(a)};ji.hydrateRoot=function(t,a,e){if(!Mo(t))throw Error(y(299));var l=!1,n="",i=Wu,c=Fu,s=$u,o=null,d=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks),e.formState!==void 0&&(d=e.formState)),a=W2(t,1,!0,a,e??null,l,n,i,c,s,o,d),a.context=F2(null),e=a.current,l=Tt(),l=Cs(l),n=Da(l),n.callback=null,Ba(e,n,l),e=l,a.current.lanes=e,Pl(a,e),It(a),t[Ie]=a.current,g1(t),new Li(a)};ji.version="19.1.1"});var nr=Gt((q4,lr)=>{"use strict";function er(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(er)}catch(t){console.error(t)}}er(),lr.exports=ar()});var sr=Gt(Vi=>{"use strict";var m4=Symbol.for("react.transitional.element"),v4=Symbol.for("react.fragment");function cr(t,a,e){var l=null;if(e!==void 0&&(l=""+e),a.key!==void 0&&(l=""+a.key),"key"in a){e={};for(var n in a)n!=="key"&&(e[n]=a[n])}else e=a;return a=e.ref,{$$typeof:m4,type:t,key:l,ref:a!==void 0?a:null,props:e}}Vi.Fragment=v4;Vi.jsx=cr;Vi.jsxs=cr});var fn=Gt((L4,or)=>{"use strict";or.exports=sr()});var gr=de(nr());var mt=de(vn());var ir=`<!doctype html>
<html lang="en" data-theme="dark" data-theme-mode="system">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Brand orbs \u2014 Thinking orbs for twenty-three marks</title>
<meta name="description" content="A macOS-style specimen library for twenty-three animated brand orbs.">
<script>
  (() => {
    let mode = "system";
    try { mode = localStorage.getItem("brand-orbs-theme-mode") || "system"; } catch (_) {}
    if (!/^(system|light|dark)$/.test(mode)) mode = "system";
    document.documentElement.dataset.themeMode = mode;
    document.documentElement.dataset.theme = mode === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : mode;
  })();
<\/script>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230A0B0D'/%3E%3Cg fill='%23ECE9E0'%3E%3Ccircle cx='16' cy='7' r='1.5'/%3E%3Ccircle cx='24' cy='16' r='1.5'/%3E%3Ccircle cx='16' cy='25' r='1.5'/%3E%3Ccircle cx='8' cy='16' r='1.5'/%3E%3C/g%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<style>
  :root{
    --page:#DAD7CC;
    --wall:#E4E1D7;
    --surface:#ECE9E0;
    --text:#131110;
    --muted:#57544A;
    --faint:#8B877A;
    --stroke:#232320;
    --line-1:rgba(35,35,32,.085);
    --line-2:rgba(35,35,32,.17);
    --line-3:rgba(35,35,32,.30);
    --tint:rgba(35,35,32,.035);
    --hover:rgba(35,35,32,.055);
    --card:rgba(35,35,32,.032);
    --pill-fill:#F7F4EC;
    --pill-stroke:rgba(35,35,32,.16);
    --pill-fg:#171613;
    --pill-inner:rgba(35,35,32,.025);
    --shimmer-base:rgba(19,17,16,.46);
    --shimmer-highlight:#131110;
    --orb-filter:invert(1) hue-rotate(180deg) contrast(1.04) saturate(.92);
    --app-icon-a:#F7F4EC;
    --app-icon-b:#DAD5C9;
    --app-icon-ink:#171613;
    --glass:rgba(236,233,224,.92);
    --mode-track:rgba(35,35,32,.055);
    --mode-active:#0B0B0A;
    --mode-active-fg:#ECE9E0;
    --elev:0 1px 2px rgba(35,35,32,.05),
           0 8px 18px -4px rgba(35,35,32,.08),
           0 24px 48px -12px rgba(35,35,32,.12),
           0 56px 104px -28px rgba(35,35,32,.20);
    --shimmer-band:400%;
    --shimmer-dur:2s;
    --shimmer-ease:linear;
    color-scheme:light;
  }
  :root[data-theme="dark"]{
    --page:#050608;
    --wall:#0A0B0D;
    --surface:#101113;
    --text:#F7F8F8;
    --muted:#8A8F98;
    --faint:#62666D;
    --stroke:rgba(255,255,255,.44);
    --line-1:rgba(255,255,255,.035);
    --line-2:rgba(255,255,255,.075);
    --line-3:rgba(255,255,255,.13);
    --tint:rgba(255,255,255,.026);
    --hover:rgba(255,255,255,.045);
    --card:rgba(255,255,255,.024);
    --pill-fill:rgba(5,6,8,.72);
    --pill-stroke:rgba(255,255,255,.08);
    --pill-fg:#F8F8F8;
    --pill-inner:rgba(255,255,255,.012);
    --shimmer-base:rgba(251,251,251,.5);
    --shimmer-highlight:#FFF;
    --orb-filter:none;
    --app-icon-a:#161616;
    --app-icon-b:#0B0B0B;
    --app-icon-ink:#E8E8E8;
    --glass:rgba(10,11,12,.92);
    --mode-track:rgba(255,255,255,.045);
    --mode-active:#EDEEF0;
    --mode-active-fg:#0A0B0D;
    --elev:0 1px 2px rgba(0,0,0,.55),
           0 8px 18px -4px rgba(0,0,0,.60),
           0 24px 48px -12px rgba(0,0,0,.68),
           0 56px 104px -28px rgba(0,0,0,.80);
    color-scheme:dark;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{background:var(--page);scroll-behavior:smooth}
  body{
    font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
    color:var(--text);
    background:var(--page);
    -webkit-font-smoothing:antialiased;
    min-height:100vh;
    transition:background .45s ease,color .45s ease;
  }
  button{font:inherit;color:inherit}
  button:focus-visible,a:focus-visible{outline:2px solid var(--stroke);outline-offset:3px}
  .menubar{
    position:fixed;inset:0 0 auto;z-index:20;height:28px;
    display:flex;align-items:center;gap:17px;padding:0 14px;
    background:var(--glass);border-bottom:.5px solid var(--line-2);
    -webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);
    font-size:11px;letter-spacing:.085em;color:var(--muted);
    transition:background .45s ease,border-color .45s ease;
  }
  .menu-mark{width:11px;height:11px;border-radius:3px 3px 3px 1px;background:var(--text);transform:rotate(-8deg);flex:none}
  .menu-app{color:var(--text);font-weight:700;letter-spacing:.12em}
  .menu-spacer{margin-left:auto}
  .menu-right{display:flex;align-items:center;gap:10px;min-width:0;flex:none}
  .menu-status{display:flex;align-items:center;gap:13px}
  .menu-status svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round}
  .menu-clock{color:var(--text);font-variant-numeric:tabular-nums;white-space:nowrap}
  .github-stats{
    height:25px;padding:0 7px;display:flex;align-items:center;gap:6px;flex:none;
    border:.5px solid var(--line-2);border-radius:5px;background:var(--mode-track);
    color:var(--muted);text-decoration:none;font-variant-numeric:tabular-nums;
    transition:background .2s ease,color .2s ease,border-color .2s ease;
  }
  .github-stats:hover{background:var(--hover);border-color:var(--line-3);color:var(--text)}
  .github-stats:active{transform:translateY(1px)}
  .github-mark{width:14px;height:14px;fill:currentColor;flex:none}
  .github-star{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linejoin:round;flex:none}
  .theme-switcher{
    display:grid;grid-template-columns:repeat(3,22px);gap:2px;padding:2px;
    border:.5px solid var(--line-2);border-radius:5px;background:var(--mode-track);flex:none;
  }
  .theme-option{
    width:22px;height:20px;padding:0;border:0;border-radius:3px;background:transparent;
    display:grid;place-items:center;color:var(--muted);cursor:pointer;
    transition:background .2s ease,color .2s ease,transform .12s ease;
  }
  .theme-option svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.45;stroke-linecap:round;stroke-linejoin:round}
  .theme-option .system-half{fill:currentColor;stroke:none}
  .theme-option:hover{color:var(--text);background:var(--hover)}
  .theme-option[aria-pressed="true"]{background:var(--mode-active);color:var(--mode-active-fg)}
  .theme-option:active{transform:translateY(1px)}
  .workspace{padding:68px 20px 46px}
  .app-window{
    width:min(100%,960px);margin:0 auto;background:var(--surface);
    border:.5px solid var(--line-3);border-radius:10px;overflow:hidden;
    box-shadow:var(--elev);
    transition:background .45s ease,border-color .45s ease,box-shadow .45s ease;
  }
  .window-bar{
    height:38px;display:flex;align-items:center;gap:12px;padding:0 11px;
    border-bottom:.5px solid var(--line-2);background:var(--surface);
    transition:background .45s ease,border-color .45s ease;
  }
  .traffic-lights{display:flex;gap:6px;flex:none}
  .traffic-light{width:9px;height:9px;border-radius:50%;border:.5px solid var(--stroke);opacity:.55}
  .window-title{font-size:11px;letter-spacing:.13em;color:var(--muted);white-space:nowrap}
  .window-toolbar{
    min-height:39px;display:flex;align-items:center;gap:11px;padding:0 14px;
    border-bottom:.5px solid var(--line-1);background:var(--tint);color:var(--faint);
    font-size:11px;letter-spacing:.12em;
  }
  .toolbar-nav{display:flex;gap:9px;color:var(--muted)}
  .toolbar-nav svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .toolbar-divider{width:.5px;height:15px;background:var(--line-2)}
  .toolbar-path{display:flex;align-items:center;gap:7px;color:var(--muted)}
  .toolbar-path svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linejoin:round}
  .toolbar-meta{margin-left:auto;white-space:nowrap}
  .window-content{padding:50px 48px 58px}
  .hero{display:flex;align-items:center;gap:22px;padding:2px 0 6px}
  .hero-copy{min-width:0}
  .eyebrow{display:block;margin-bottom:9px;font-size:11px;letter-spacing:.16em;color:var(--faint)}
  h1{font-size:25px;font-weight:600;letter-spacing:-.045em;line-height:1.1}
  .sub{margin-top:9px;max-width:690px;font-size:11px;line-height:1.8;color:var(--muted);text-wrap:pretty}
  .sub a{color:var(--text);text-decoration:none;border-bottom:.5px solid var(--line-3)}
  .sub a:hover{border-color:var(--text)}
  /* ---------- header ---------- */
  .app-icon{
    position:relative;width:58px;height:58px;border-radius:15px;flex:none;
    background:linear-gradient(180deg,var(--app-icon-a),var(--app-icon-b));
    box-shadow:inset 0 0 0 .5px var(--line-2),inset 0 1px 0 rgba(255,255,255,.09),0 12px 28px rgba(0,0,0,.14);
    display:flex;align-items:center;justify-content:center;
    transition:background .45s ease,box-shadow .45s ease;
  }
  .app-icon g{fill:var(--app-icon-ink);transition:fill .45s ease}
  .app-icon::after{
    content:"";position:absolute;inset:-20px;border-radius:50%;
    background:radial-gradient(closest-side,rgba(255,255,255,.05),transparent 72%);
    pointer-events:none;
  }
  /* ---------- grid ---------- */
  .grid{
    margin-top:36px;
    display:grid;grid-template-columns:repeat(2,minmax(0,412px));gap:12px;
    width:100%;
  }
  .card{
    position:relative;height:294px;border:.5px solid var(--line-1);border-radius:7px;background:var(--card);
    display:flex;align-items:center;justify-content:center;
    overflow:hidden;transition:background .2s ease,border-color .2s ease;
  }
  .card:hover{background:var(--hover);border-color:var(--line-2)}
  .brand-tag{
    position:absolute;top:17px;left:18px;
    display:flex;align-items:center;gap:8px;
    color:var(--muted);
  }
  .brand-tag svg{width:14px;height:14px;fill:currentColor;opacity:.9}
  .brand-tag span{font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase}
  .concept{
    position:absolute;bottom:16px;right:18px;
    font-size:11px;color:var(--faint);letter-spacing:.09em;text-transform:uppercase;
  }
  .section-label{
    margin-top:48px;padding-top:17px;border-top:.5px solid var(--line-1);
    font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);
  }
  .section-label+.grid{margin-top:14px}
  /* ---------- pills ---------- */
  .pill{
    display:inline-flex;align-items:center;gap:12px;
    min-width:270px;height:74px;padding:0 32px 0 9px;
    border-radius:999px;background:var(--pill-fill);
    box-shadow:inset 0 0 0 1px var(--pill-stroke),inset 0 0 50px 0 var(--pill-inner);
    color:var(--pill-fg);font-size:18px;line-height:24px;
    cursor:default;white-space:nowrap;
    transition:background .45s ease,box-shadow .45s ease,color .45s ease;
  }
  .pill canvas{width:56px;height:56px;display:block;filter:var(--orb-filter);transition:filter .45s ease}
  .minis{
    margin-top:46px;padding-top:24px;border-top:.5px solid var(--line-1);
    display:flex;flex-wrap:wrap;justify-content:flex-start;gap:8px;
  }
  .pill.mini{
    min-width:0;height:36px;padding:0 14px 0 8px;gap:8px;
    font-size:12px;line-height:14px;
  }
  .pill.mini canvas{width:20px;height:20px}
  footer{
    margin-top:42px;padding-top:18px;border-top:.5px solid var(--line-1);
    font-size:11px;color:var(--faint);text-align:left;line-height:1.8;letter-spacing:.07em;
  }
  footer a{color:var(--muted);text-decoration:none;border-bottom:.5px solid var(--line-2)}
  footer a:hover{color:var(--text);border-color:var(--text)}
  /* label shimmer \u2014 a highlight band sweeps the text, as on the reference */
  .t-shimmer{position:relative;display:inline-block;color:var(--shimmer-base)}
  .t-shimmer::before{
    content:attr(data-text);
    position:absolute;inset:0;pointer-events:none;
    background-image:linear-gradient(90deg,transparent 0%,transparent 40%,var(--shimmer-highlight) 50%,transparent 60%,transparent 100%);
    background-size:var(--shimmer-band) 100%;
    background-repeat:no-repeat;
    -webkit-background-clip:text;background-clip:text;
    color:transparent;-webkit-text-fill-color:transparent;
    animation:t-shimmer var(--shimmer-dur) var(--shimmer-ease) infinite;
  }
  @keyframes t-shimmer{0%{background-position:100% 0}to{background-position:0% 0}}
  @media (prefers-reduced-motion:reduce){.t-shimmer::before{animation:none!important}}

  /* zoom / debug mode */
  body.zoom-mode>*:not(.zoom-stage){display:none}
  .zoom-stage{display:flex;align-items:center;justify-content:center;min-height:100vh}
  @media (max-width:900px){
    .grid{grid-template-columns:minmax(0,1fr)}
    .window-content{padding:38px 28px 44px}
  }
  @media (max-width:760px){
    .menu-item{display:none}
  }
  @media (max-width:650px){
    .menu-clock{display:none}
  }
  @media (max-width:520px){
    .menubar{gap:10px}
    .menu-status{display:none}
    .workspace{padding:46px 0 0}
    .app-window{border-left:0;border-right:0;border-bottom:0;border-radius:0}
    .window-title{display:none}
    .window-toolbar{padding:0 12px}
    .toolbar-meta{display:none}
    .window-content{padding:34px 16px 40px}
    .hero{align-items:flex-start;gap:16px}
    .app-icon{width:50px;height:50px;border-radius:13px}
    .app-icon svg{width:29px;height:29px}
    h1{font-size:22px}
    .sub{font-size:11px;line-height:1.7}
    .card{height:280px}
  }
  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    *{transition-duration:.01ms!important}
  }
</style>
</head>
<body>

  <nav class="menubar" aria-label="Application menu">
    <span class="menu-mark" aria-hidden="true"></span>
    <span class="menu-app">BRAND ORBS</span>
    <span class="menu-item">FILE</span>
    <span class="menu-item">EDIT</span>
    <span class="menu-item">VIEW</span>
    <span class="menu-item">WINDOW</span>
    <span class="menu-spacer"></span>
    <span class="menu-right">
      <span class="menu-status">
        <svg viewBox="0 0 24 24" aria-label="Wi-Fi"><path d="M2.5 8.5a15 15 0 0 1 19 0M5.5 12a10.5 10.5 0 0 1 13 0M8.5 15.4a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/></svg>
        <svg viewBox="0 0 34 24" aria-label="Battery"><rect x="1.5" y="7" width="26" height="10" rx="3"/><path d="M30 11v2"/><rect x="4" y="9.4" width="16" height="5.2" rx="1.6" fill="currentColor" stroke="none"/></svg>
        <time class="menu-clock" id="menu-clock"></time>
      </span>
      <a class="github-stats" id="github-stats-link" href="https://github.com/Jakubantalik/thinking-orbs" target="_blank" rel="noopener noreferrer" aria-label="Thinking Orbs on GitHub, 2,210 stars">
        <svg class="github-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <svg class="github-star" viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2.6 2.17 4.4 4.86.71-3.52 3.43.83 4.84L10 13.7l-4.34 2.28.83-4.84-3.52-3.43L7.83 7z"/></svg>
        <span id="github-stars">2,210</span>
      </a>
      <span class="theme-switcher" role="group" aria-label="Appearance">
        <button class="theme-option" type="button" data-theme-mode="system" aria-label="Use system appearance" aria-pressed="true" title="System">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6.4"/><path class="system-half" d="M10 3.6a6.4 6.4 0 0 0 0 12.8z"/></svg>
        </button>
        <button class="theme-option" type="button" data-theme-mode="light" aria-label="Use light appearance" aria-pressed="false" title="Light">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="2.8"/><path d="M10 2.4v1.4M10 16.2v1.4M2.4 10h1.4M16.2 10h1.4M4.62 4.62l1 1M14.38 14.38l1 1M15.38 4.62l-1 1M5.62 14.38l-1 1"/></svg>
        </button>
        <button class="theme-option" type="button" data-theme-mode="dark" aria-label="Use dark appearance" aria-pressed="false" title="Dark">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.8 12.4A6.5 6.5 0 0 1 7.6 4.2 6.5 6.5 0 1 0 15.8 12.4Z"/></svg>
        </button>
      </span>
    </span>
  </nav>

  <main class="workspace">
    <section class="app-window" aria-labelledby="page-title">
      <header class="window-bar">
        <span class="traffic-lights" aria-hidden="true">
          <span class="traffic-light"></span><span class="traffic-light"></span><span class="traffic-light"></span>
        </span>
        <span class="window-title">BRAND ORBS \u2014 SPECIMEN LIBRARY</span>
      </header>
      <div class="window-toolbar" aria-hidden="true">
        <span class="toolbar-nav">
          <svg viewBox="0 0 24 24"><path d="m14 5-7 7 7 7"/></svg>
          <svg viewBox="0 0 24 24" style="opacity:.35"><path d="m10 5 7 7-7 7"/></svg>
        </span>
        <span class="toolbar-divider"></span>
        <span class="toolbar-path">
          <svg viewBox="0 0 24 24"><path d="M3 6.5h7l2-2h3l2 2h4v12H3z"/></svg>
          LIBRARY / BRAND ORBS
        </span>
        <span class="toolbar-meta">ANIMATED SPECIMENS</span>
      </div>
      <div class="window-content">

  <header class="hero">

  <div class="app-icon" aria-hidden="true">
    <svg width="34" height="34" viewBox="0 0 34 34">
      <g fill="#e8e8e8">
        <circle cx="17" cy="5.5" r="1.15"/><circle cx="22.75" cy="7.04" r="1.15"/>
        <circle cx="26.96" cy="11.25" r="1.15"/><circle cx="28.5" cy="17" r="1.15"/>
        <circle cx="26.96" cy="22.75" r="1.15"/><circle cx="22.75" cy="26.96" r="1.15"/>
        <circle cx="17" cy="28.5" r="1.15"/><circle cx="11.25" cy="26.96" r="1.15"/>
        <circle cx="7.04" cy="22.75" r="1.15"/><circle cx="5.5" cy="17" r="1.15"/>
        <circle cx="7.04" cy="11.25" r="1.15"/><circle cx="11.25" cy="7.04" r="1.15"/>
      </g>
    </svg>
  </div>

    <div class="hero-copy">
      <span class="eyebrow">SPECIMEN ARCHIVE / 01</span>
      <h1 id="page-title">Brand orbs</h1>
      <p class="sub">One orb language, twenty-three marks \u2014 each as an orb and as a book \u2014 inspired by <a href="https://orbs.jakubantalik.com/" target="_blank" rel="noopener">Thinking&nbsp;orbs</a></p>
    </div>
  </header>

  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>
        <span>Claude Code</span>
      </div>
      <div class="pill"><canvas data-mode="claude" data-size="56"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
      <div class="concept">spark burst</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
        <span>OpenAI</span>
      </div>
      <div class="pill"><canvas data-mode="openai" data-size="56"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
      <div class="concept">bloom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="8.2"/><path d="M9 8.7 12.3 12 9 15.3"/><path d="M13.7 15.3h3.5"/></svg>
        <span>Codex</span>
      </div>
      <div class="pill"><canvas data-mode="codex" data-size="56"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
      <div class="concept">prompt blob</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/></svg>
        <span>Cursor</span>
      </div>
      <div class="pill"><canvas data-mode="cursor" data-size="56"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
      <div class="concept">the cursor</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
        <span>Gemini</span>
      </div>
      <div class="pill"><canvas data-mode="gemini" data-size="56"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
      <div class="concept">twinkle</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
        <span>Figma</span>
      </div>
      <div class="pill"><canvas data-mode="figma" data-size="56"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
      <div class="concept">swatch morph</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
        <span>Framer</span>
      </div>
      <div class="pill"><canvas data-mode="framer" data-size="56"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
      <div class="concept">the f</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(120 12 12)"/></svg>
        <span>React</span>
      </div>
      <div class="pill"><canvas data-mode="react" data-size="56"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
      <div class="concept">the atom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"/></svg>
        <span>Swift</span>
      </div>
      <div class="pill"><canvas data-mode="swift" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">the bird</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 44 44" style="fill:none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z"/><path d="M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"/></svg>
        <span>DesignCode</span>
      </div>
      <div class="pill"><canvas data-mode="designcode" data-size="56"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
      <div class="concept">the monogram</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><circle cx="10.18" cy="1.93" r="0.72"/><circle cx="12.59" cy="3.53" r="0.60"/><circle cx="13.38" cy="5.12" r="0.55"/><circle cx="12.51" cy="6.86" r="0.55"/><circle cx="9.72" cy="8.27" r="0.55"/><circle cx="7.21" cy="10.06" r="0.55"/><circle cx="4.98" cy="12.02" r="0.60"/><circle cx="4.07" cy="13.71" r="0.59"/><circle cx="19.09" cy="13.43" r="0.55"/><circle cx="9.94" cy="15.30" r="0.55"/><circle cx="18.31" cy="15.16" r="0.55"/><circle cx="7.49" cy="17.12" r="0.60"/><circle cx="15.71" cy="16.85" r="0.55"/><circle cx="3.19" cy="18.74" r="0.55"/><circle cx="16.59" cy="18.54" r="0.55"/><circle cx="4.00" cy="20.44" r="0.55"/><circle cx="22.50" cy="20.24" r="0.55"/><circle cx="21.72" cy="21.98" r="0.55"/></svg>
        <span>Aura</span>
      </div>
      <div class="pill"><canvas data-mode="aura" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">the dot field</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><ellipse cx="16.40" cy="12.00" rx="4.6" ry="2.9" transform="rotate(0.0 12 12)"/><ellipse cx="14.20" cy="15.81" rx="4.6" ry="2.9" transform="rotate(60.0 12 12)"/><ellipse cx="9.80" cy="15.81" rx="4.6" ry="2.9" transform="rotate(120.0 12 12)"/><ellipse cx="7.60" cy="12.00" rx="4.6" ry="2.9" transform="rotate(180.0 12 12)"/><ellipse cx="9.80" cy="8.19" rx="4.6" ry="2.9" transform="rotate(240.0 12 12)"/><ellipse cx="14.20" cy="8.19" rx="4.6" ry="2.9" transform="rotate(300.0 12 12)"/></svg>
        <span>DreamCut</span>
      </div>
      <div class="pill"><canvas data-mode="dreamcut" data-size="56"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
      <div class="concept">petal bloom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.6" y="4" width="18.8" height="16" rx="2.2"/><path d="M2.6 8.6h18.8M9 8.6V20"/></svg>
        <span>UI</span>
      </div>
      <div class="pill"><canvas data-mode="ui" data-size="56"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
      <div class="concept">the panel</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 17.5c4 0 6-11 9-11s5 5.5 9 5.5"/><circle cx="3" cy="17.5" r="1.9"/><circle cx="12" cy="6.6" r="1.9"/><circle cx="21" cy="12" r="1.9"/></svg>
        <span>UX</span>
      </div>
      <div class="pill"><canvas data-mode="ux" data-size="56"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
      <div class="concept">the journey</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>
        <span>CSS</span>
      </div>
      <div class="pill"><canvas data-mode="css" data-size="56"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
      <div class="concept">the letters</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"/></svg>
        <span>iOS</span>
      </div>
      <div class="pill"><canvas data-mode="ios" data-size="56"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
      <div class="concept">the wordmark</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 128 128" style="fill:none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><path d="M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077"/></svg>
        <span>Neuform</span>
      </div>
      <div class="pill"><canvas data-mode="neuform" data-size="56"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
      <div class="concept">eight chevrons</div>
    </div>

  </div>

  <p class="section-label">Social</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span>GitHub</span>
      </div>
      <div class="pill"><canvas data-mode="github" data-size="56"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
      <div class="concept">the octocat</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
        <span>X</span>
      </div>
      <div class="pill"><canvas data-mode="x" data-size="56"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
      <div class="concept">the x</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        <span>Instagram</span>
      </div>
      <div class="pill"><canvas data-mode="instagram" data-size="56"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
      <div class="concept">the camera</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
        <span>Threads</span>
      </div>
      <div class="pill"><canvas data-mode="threads" data-size="56"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
      <div class="concept">the loop</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </div>
      <div class="pill"><canvas data-mode="linkedin" data-size="56"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
      <div class="concept">the in</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4"/><path d="M3.2 6.6 12 13.4l8.8-6.8"/></svg>
        <span>Email</span>
      </div>
      <div class="pill"><canvas data-mode="email" data-size="56"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
      <div class="concept">the envelope</div>
    </div>

  </div>

  <p class="section-label">Books</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>
        <span>Claude Code</span>
      </div>
      <div class="pill"><canvas data-mode="claudebook" data-size="56"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
        <span>OpenAI</span>
      </div>
      <div class="pill"><canvas data-mode="openaibook" data-size="56"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="8.2"/><path d="M9 8.7 12.3 12 9 15.3"/><path d="M13.7 15.3h3.5"/></svg>
        <span>Codex</span>
      </div>
      <div class="pill"><canvas data-mode="codexbook" data-size="56"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/></svg>
        <span>Cursor</span>
      </div>
      <div class="pill"><canvas data-mode="cursorbook" data-size="56"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
        <span>Gemini</span>
      </div>
      <div class="pill"><canvas data-mode="geminibook" data-size="56"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
        <span>Figma</span>
      </div>
      <div class="pill"><canvas data-mode="figmabook" data-size="56"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
        <span>Framer</span>
      </div>
      <div class="pill"><canvas data-mode="framerbook" data-size="56"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(120 12 12)"/></svg>
        <span>React</span>
      </div>
      <div class="pill"><canvas data-mode="reactbook" data-size="56"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"/></svg>
        <span>Swift</span>
      </div>
      <div class="pill"><canvas data-mode="swiftbook" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 44 44" style="fill:none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z"/><path d="M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"/></svg>
        <span>DesignCode</span>
      </div>
      <div class="pill"><canvas data-mode="designcodebook" data-size="56"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><circle cx="10.18" cy="1.93" r="0.72"/><circle cx="12.59" cy="3.53" r="0.60"/><circle cx="13.38" cy="5.12" r="0.55"/><circle cx="12.51" cy="6.86" r="0.55"/><circle cx="9.72" cy="8.27" r="0.55"/><circle cx="7.21" cy="10.06" r="0.55"/><circle cx="4.98" cy="12.02" r="0.60"/><circle cx="4.07" cy="13.71" r="0.59"/><circle cx="19.09" cy="13.43" r="0.55"/><circle cx="9.94" cy="15.30" r="0.55"/><circle cx="18.31" cy="15.16" r="0.55"/><circle cx="7.49" cy="17.12" r="0.60"/><circle cx="15.71" cy="16.85" r="0.55"/><circle cx="3.19" cy="18.74" r="0.55"/><circle cx="16.59" cy="18.54" r="0.55"/><circle cx="4.00" cy="20.44" r="0.55"/><circle cx="22.50" cy="20.24" r="0.55"/><circle cx="21.72" cy="21.98" r="0.55"/></svg>
        <span>Aura</span>
      </div>
      <div class="pill"><canvas data-mode="aurabook" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><ellipse cx="16.40" cy="12.00" rx="4.6" ry="2.9" transform="rotate(0.0 12 12)"/><ellipse cx="14.20" cy="15.81" rx="4.6" ry="2.9" transform="rotate(60.0 12 12)"/><ellipse cx="9.80" cy="15.81" rx="4.6" ry="2.9" transform="rotate(120.0 12 12)"/><ellipse cx="7.60" cy="12.00" rx="4.6" ry="2.9" transform="rotate(180.0 12 12)"/><ellipse cx="9.80" cy="8.19" rx="4.6" ry="2.9" transform="rotate(240.0 12 12)"/><ellipse cx="14.20" cy="8.19" rx="4.6" ry="2.9" transform="rotate(300.0 12 12)"/></svg>
        <span>DreamCut</span>
      </div>
      <div class="pill"><canvas data-mode="dreamcutbook" data-size="56"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span>GitHub</span>
      </div>
      <div class="pill"><canvas data-mode="githubbook" data-size="56"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
        <span>X</span>
      </div>
      <div class="pill"><canvas data-mode="xbook" data-size="56"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        <span>Instagram</span>
      </div>
      <div class="pill"><canvas data-mode="instagrambook" data-size="56"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
        <span>Threads</span>
      </div>
      <div class="pill"><canvas data-mode="threadsbook" data-size="56"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </div>
      <div class="pill"><canvas data-mode="linkedinbook" data-size="56"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4"/><path d="M3.2 6.6 12 13.4l8.8-6.8"/></svg>
        <span>Email</span>
      </div>
      <div class="pill"><canvas data-mode="emailbook" data-size="56"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.6" y="4" width="18.8" height="16" rx="2.2"/><path d="M2.6 8.6h18.8M9 8.6V20"/></svg>
        <span>UI</span>
      </div>
      <div class="pill"><canvas data-mode="uibook" data-size="56"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 17.5c4 0 6-11 9-11s5 5.5 9 5.5"/><circle cx="3" cy="17.5" r="1.9"/><circle cx="12" cy="6.6" r="1.9"/><circle cx="21" cy="12" r="1.9"/></svg>
        <span>UX</span>
      </div>
      <div class="pill"><canvas data-mode="uxbook" data-size="56"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>
        <span>CSS</span>
      </div>
      <div class="pill"><canvas data-mode="cssbook" data-size="56"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"/></svg>
        <span>iOS</span>
      </div>
      <div class="pill"><canvas data-mode="iosbook" data-size="56"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 128 128" style="fill:none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><path d="M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077"/></svg>
        <span>Neuform</span>
      </div>
      <div class="pill"><canvas data-mode="neuformbook" data-size="56"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

  </div>

  <p class="section-label">Studies</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.6 20.4 7.4v9.2L12 21.4 3.6 16.6V7.4z"/><path d="M12 21.4V12M3.6 7.4 12 12l8.4-4.6"/></svg>
        <span>Cube</span>
      </div>
      <div class="pill"><canvas data-mode="cube" data-size="56"></canvas><span class="t-shimmer" data-text="Compiling&hellip;">Compiling&hellip;</span></div>
      <div class="concept">face sweep</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.8"/><path d="M4.1 9.2h15.8M4.1 14.8h15.8"/></svg>
        <span>Blue orb</span>
      </div>
      <div class="pill"><canvas data-mode="orb" data-size="56"></canvas><span class="t-shimmer" data-text="Syncing&hellip;">Syncing&hellip;</span></div>
      <div class="concept">band shift</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 3.2v14.2l3.4-3 2.1 4.6 2.2-1-2.1-4.6 4.5-.4z"/></svg>
        <span>Pointer</span>
      </div>
      <div class="pill"><canvas data-mode="pointer" data-size="56"></canvas><span class="t-shimmer" data-text="Clicking&hellip;">Clicking&hellip;</span></div>
      <div class="concept">click ripple</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3.4"/><ellipse cx="12" cy="12" rx="3.4" ry="9"/></svg>
        <span>Sphere</span>
      </div>
      <div class="pill"><canvas data-mode="sphere" data-size="56"></canvas><span class="t-shimmer" data-text="Spinning&hellip;">Spinning&hellip;</span></div>
      <div class="concept">blossom knot</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.4"><ellipse cx="16.20" cy="12.00" rx="4.3" ry="2.7" transform="rotate(0 12 12)"/><ellipse cx="14.10" cy="15.64" rx="4.3" ry="2.7" transform="rotate(60 12 12)"/><ellipse cx="9.90" cy="15.64" rx="4.3" ry="2.7" transform="rotate(120 12 12)"/><ellipse cx="7.80" cy="12.00" rx="4.3" ry="2.7" transform="rotate(180 12 12)"/><ellipse cx="9.90" cy="8.36" rx="4.3" ry="2.7" transform="rotate(240 12 12)"/><ellipse cx="14.10" cy="8.36" rx="4.3" ry="2.7" transform="rotate(300 12 12)"/><circle cx="12" cy="12" r="1.2"/></svg>
        <span>Flower</span>
      </div>
      <div class="pill"><canvas data-mode="flower" data-size="56"></canvas><span class="t-shimmer" data-text="Blooming&hellip;">Blooming&hellip;</span></div>
      <div class="concept">tapered petals</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 4.6h6.4a2 2 0 0 1 2 2v12.8a1.6 1.6 0 0 0-1.6-1.6H4z"/><path d="M20 4.6h-6.4a2 2 0 0 0-2 2v12.8a1.6 1.6 0 0 1 1.6-1.6H20z"/></svg>
        <span>Book</span>
      </div>
      <div class="pill"><canvas data-mode="book" data-size="56"></canvas><span class="t-shimmer" data-text="Reading&hellip;">Reading&hellip;</span></div>
      <div class="concept">open cover</div>
    </div>


  </div>

  <div class="minis">
    <div class="pill mini"><canvas data-mode="claude" data-size="20"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="openai" data-size="20"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="codex" data-size="20"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="cursor" data-size="20"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="gemini" data-size="20"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="react" data-size="20"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="swift" data-size="20"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="figma" data-size="20"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="framer" data-size="20"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="designcode" data-size="20"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="aura" data-size="20"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="dreamcut" data-size="20"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="github" data-size="20"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="x" data-size="20"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="instagram" data-size="20"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="threads" data-size="20"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="linkedin" data-size="20"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="email" data-size="20"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ui" data-size="20"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ux" data-size="20"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="css" data-size="20"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ios" data-size="20"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="neuform" data-size="20"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
  </div>

  <footer>
    Twenty-three marks, one particle language.<br>
    Brand Orbs by <a href="https://github.com/MengTo" target="_blank" rel="noopener noreferrer">Meng To</a>. Inspired by <a href="https://orbs.jakubantalik.com/" target="_blank" rel="noopener noreferrer">Thinking Orbs</a>. <a href="https://github.com/Jakubantalik/thinking-orbs" target="_blank" rel="noopener noreferrer">View the project on GitHub</a>.
  </footer>

      </div>
    </section>
  </main>

<script>
(() => {
  "use strict";
  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll(".theme-option")];
  const systemPreference = matchMedia("(prefers-color-scheme: dark)");
  const clock = document.getElementById("menu-clock");
  const githubStars = document.getElementById("github-stars");
  const githubLink = document.getElementById("github-stats-link");

  function resolvedTheme(mode) {
    return mode === "system" ? (systemPreference.matches ? "dark" : "light") : mode;
  }

  function applyThemeMode(mode, persist = true) {
    root.dataset.themeMode = mode;
    root.dataset.theme = resolvedTheme(mode);
    themeButtons.forEach(button => button.setAttribute("aria-pressed", button.dataset.themeMode === mode ? "true" : "false"));
    if (persist) {
      try { localStorage.setItem("brand-orbs-theme-mode", mode); } catch (_) {}
    }
  }

  let saved = root.dataset.themeMode || "system";
  if (!/^(system|light|dark)$/.test(saved)) saved = "system";
  applyThemeMode(saved, false);
  themeButtons.forEach(button => button.addEventListener("click", () => applyThemeMode(button.dataset.themeMode)));
  systemPreference.addEventListener("change", () => {
    if (root.dataset.themeMode === "system") applyThemeMode("system", false);
  });

  const formatClock = () => {
    clock.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "short", day: "2-digit", month: "short",
      hour: "2-digit", minute: "2-digit", hour12: false
    }).format(new Date()).replace(",", "").toUpperCase();
  };
  formatClock();
  setInterval(formatClock, 30000);

  fetch("https://api.github.com/repos/Jakubantalik/thinking-orbs", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(repo => {
      if (!Number.isFinite(repo.stargazers_count)) return;
      const stars = new Intl.NumberFormat("en-US").format(repo.stargazers_count);
      githubStars.textContent = stars;
      githubLink.setAttribute("aria-label", \`Thinking Orbs on GitHub, \${stars} stars\`);
    })
    .catch(() => {});
})();
<\/script>

<script>
(() => {
  "use strict";
  const TAU = Math.PI * 2;
  const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const smooth = v => { v = clamp01(v); return v * v * (3 - 2 * v); };
  const lerp = (a, b, m) => a + (b - a) * m;

  /* deterministic hash noise (ported from the reference orb engine) */
  const hash = (x, y) => { const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453; return n - Math.floor(n); };
  const vnoise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    let fx = x - xi, fy = y - yi;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };

  /* fibonacci sphere point i of n \u2192 [x,y,z] on unit sphere */
  const fib = (i, n) => {
    const ga = Math.PI * (3 - Math.sqrt(5));
    const y = 1 - 2 * (i + .5) / n;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * ga;
    return [r * Math.cos(th), y, r * Math.sin(th)];
  };

  /* yaw+tilt rotation and orthographic projection: returns (x,y,z)\u2192[px,py,zdepth] */
  const proj = (yaw, tilt, cx, cy, s) => {
    const st = Math.sin(tilt), ct = Math.cos(tilt);
    const sy = Math.sin(yaw), cyw = Math.cos(yaw);
    return (x, y, z) => {
      const px = x * cyw + z * sy, pz = -x * sy + z * cyw;
      const py = y * ct - pz * st, z2 = y * st + pz * ct;
      return [cx + px * s, cy - py * s, z2];
    };
  };

  /* dot radius scale for a given canvas size (reference: (size/300)^.6) */
  const rscale = S => Math.pow(S / 300, .6);

  /* painter: z-sorted brand-tinted dots.
     dot: {x,y,z,r,v (brightness 0..1),a,c (optional [r,g,b] accent)} */
  function paint(ctx, dots, accent, sat, rMin) {
    dots.sort((a, b) => a.z - b.z);
    for (const d of dots) {
      const al = d.a ?? 1;
      if (al < .02) continue;
      const v = clamp01(d.v);
      const g = v * 255;
      const acc = d.c || accent;
      const st = d.c ? .95 : sat;
      let r = g, gg = g, b = g;
      if (acc && st) {
        const lift = Math.min(1, v * 1.12);
        r = g * (1 - st) + acc[0] * lift * st;
        gg = g * (1 - st) + acc[1] * lift * st;
        b = g * (1 - st) + acc[2] * lift * st;
      }
      if (v > .85) { const w = (v - .85) / .15 * .45; r += (255 - r) * w; gg += (255 - gg) * w; b += (255 - b) * w; }
      ctx.fillStyle = \`rgba(\${r | 0},\${gg | 0},\${b | 0},\${al})\`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, Math.max(rMin, d.r), 0, TAU);
      ctx.fill();
    }
  }

  /* ============ CLAUDE \u2014 spark burst ============ */
  function drawClaude(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const yaw = .32 * Math.sin(t * .5), tilt = .3 + .17 * Math.sin(t * .33);
    const p = proj(yaw, tilt, cx, cy, R);
    const spin = t * .17;
    const rays = o.mini ? 8 : 11;
    const perRay = o.mini ? 4 : 6;
    const dots = [];
    /* ghost silhouette ring */
    const gh = o.mini ? 10 : 22;
    for (let i = 0; i < gh; i++) {
      const a = i / gh * TAU + t * .05;
      const [x, y, z] = p(Math.cos(a), Math.sin(a), 0);
      dots.push({ x, y, z, r: .8 * rs, v: .22, a: .1 + .1 * ((z + 1) / 2) });
    }
    for (let k = 0; k < rays; k++) {
      const baseA = k / rays * TAU + (hash(k, 3.1) - .5) * .3 + spin;
      const baseL = .62 + .38 * hash(k, 7.7);
      const pulse = .5 + .5 * Math.sin(t * 1.7 - k * 1.13);
      const L = baseL * (.8 + .28 * pulse * pulse);
      for (let j = 0; j < perRay; j++) {
        const f = (j + .8) / perRay;
        const rr = .14 + f * (L - .14);
        const [x, y, z] = p(Math.cos(baseA) * rr, Math.sin(baseA) * rr, 0);
        const dep = (z + 1) / 2;
        dots.push({
          x, y, z,
          r: (.75 + 1.35 * (1 - f * .45) + .5 * dep) * rs,
          v: .38 + .38 * f + .22 * pulse * f,
          a: .55 + .45 * f
        });
      }
    }
    /* core */
    const [x0, y0, z0] = p(0, 0, 0);
    dots.push({ x: x0, y: y0, z: z0 + .01, r: 1.5 * rs, v: .92 });
    paint(ctx, dots, o.accent, .85, .3);
  }

  /* ============ SPHERE (study) \u2014 blossom knot ============ */
  function drawSphere(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(t * .26, .35 + .08 * Math.sin(t * .4), cx, cy, R);
    const rings = 6, phi = 1.13; /* ring plane tilt from vertical axis */
    const ghostN = o.mini ? 10 : 32;
    const runners = o.mini ? 1 : 2;
    const dots = [];
    for (let i = 0; i < rings; i++) {
      const a = i / rings * TAU;
      /* ring normal, arranged with 6-fold symmetry */
      const nx = Math.sin(phi) * Math.cos(a), ny = Math.cos(phi), nz = Math.sin(phi) * Math.sin(a);
      /* orthonormal basis in ring plane */
      let ux = -nz, uy = 0, uz = nx;
      const ul = Math.hypot(ux, uz) || 1; ux /= ul; uz /= ul;
      const vx = ny * uz - nz * uy, vy = nz * ux - nx * uz, vz = nx * uy - ny * ux;
      const rad = .74;
      for (let j = 0; j < ghostN; j++) {
        const th = j / ghostN * TAU;
        const gx = (ux * Math.cos(th) + vx * Math.sin(th)) * rad;
        const gy = (uy * Math.cos(th) + vy * Math.sin(th)) * rad;
        const gz = (uz * Math.cos(th) + vz * Math.sin(th)) * rad;
        const [x, y, z] = p(gx, gy, gz);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (.65 + 1 * dep) * rs, v: .4 + .45 * dep, a: .4 + .6 * dep });
      }
      for (let m = 0; m < runners; m++) {
        const th = t * (i % 2 ? -.9 : .9) + i * 1.05 + m / runners * TAU;
        const gx = (ux * Math.cos(th) + vx * Math.sin(th)) * rad;
        const gy = (uy * Math.cos(th) + vy * Math.sin(th)) * rad;
        const gz = (uz * Math.cos(th) + vz * Math.sin(th)) * rad;
        const [x, y, z] = p(gx, gy, gz);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .78 + .22 * dep });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ CURSOR \u2014 the pointer ============ */
  const mkArrow = (pts, ox, oy, sc) => pts.map(([x, y]) => [(x - ox) * sc, (y - oy) * sc]);
  /* the arrow inside the Cursor logo, traced from its own path (viewBox 24), tip first.
     two long edges (18.55 / 18.90) and two short ones (10.80 / 10.93) \u2014 the logo's own proportions */
  const ARROW_CLEAN = mkArrow([[21.207, 6.338], [12.11, 22.9], [11.95, 12.1], [2.657, 6.338]], 12, 12, .08426);
  /* the cube silhouette that frames it \u2014 same transform, so the two nest exactly as they do in the logo */
  const CURSOR_HEX = mkArrow([[12, .131], [22.528, 6.19], [22.528, 17.81], [12, 23.866], [1.471, 17.81], [1.471, 6.19]], 12, 12, .08426);
  /* study: the classic pointer, tail leg and all */
  const ARROW_LEG = mkArrow([[0, 0], [0, 17], [4, 13], [7, 19.5], [10, 18], [7, 12], [12, 12]], 5.7, 11.6, .086);
  function perimeter(pts) {
    const n = pts.length, seg = [];
    let L = 0;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      seg.push(l); L += l;
    }
    return u => {
      let d = (((u % 1) + 1) % 1) * L, i = 0;
      while (d > seg[i] && i < n - 1) { d -= seg[i]; i++; }
      const a = pts[i], b = pts[(i + 1) % n], f = seg[i] ? d / seg[i] : 0;
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
    };
  }
  const cleanPath = perimeter(ARROW_CLEAN), legPath = perimeter(ARROW_LEG), hexPath = perimeter(CURSOR_HEX);
  function inPoly(pts, x, y) {
    let hit = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }
  function drawArrowOrb(ctx, S, t, o, rot, pts, path, opt) {
    const { span, fill, wob, frame, framePath } = opt;
    const cs = Math.cos(rot), sn = Math.sin(rot);
    const rp = (x, y) => [x * cs - y * sn, x * sn + y * cs];
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const w = wob ?? 1;   /* keep the official mark close to the flat logo silhouette */
    const p = proj(.26 * w * Math.sin(t * .5), (.3 + .12 * Math.sin(t * .35)) * w, cx, cy, R);
    /* click cycle */
    const beat = 2.4, c = ((t / beat) % 1 + 1) % 1;
    const press = c < .14 ? Math.sin(c / .14 * Math.PI) : 0;
    const scale = 1 - .09 * press;
    /* one dot every fixed step of edge length, so every line is an even queue */
    let per = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      per += Math.hypot(b[0] - a[0], b[1] - a[1]);
    }
    const N = Math.max(8, Math.round(per / (o.mini ? .4 : .152)));
    const dots = [];
    const tip = rp(pts[0][0], pts[0][1]);
    for (let i = 0; i < N; i++) {
      const [ax0, ay0] = path((i + .5) / N);
      const [ax, ay] = rp(ax0, ay0);
      const [x, y, z] = p(ax * scale, -ay * scale, 0);
      const dep = (z + 1) / 2;
      const tipNear = Math.max(0, 1 - Math.hypot(ax - tip[0], ay - tip[1]) / span);
      dots.push({
        x, y, z,
        r: (.85 + 1.05 * dep + .7 * tipNear) * rs,
        v: .58 + .26 * tipNear + .14 * dep + .12 * press
      });
    }
    /* interior lattice so the mark reads as a solid pointer, not an outline */
    if (fill && !o.mini) {
      let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (const [px, py] of pts) { x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py); }
      const gap = .17;
      for (let gy = y0 + gap * .5; gy < y1; gy += gap) {
        for (let gx = x0 + gap * .5; gx < x1; gx += gap) {
          if (!inPoly(pts, gx, gy)) continue;
          const [ax, ay] = rp(gx, gy);
          const [x, y, z] = p(ax * scale, -ay * scale, .03);
          const dep = (z + 1) / 2;
          const tipNear = Math.max(0, 1 - Math.hypot(ax - tip[0], ay - tip[1]) / span);
          dots.push({ x, y, z, r: (.72 + .8 * dep) * rs, v: .43 + .16 * dep + .18 * tipNear, a: .85 });
        }
      }
    }
    /* the cube outline, its own even queue of dots, sat behind the arrow */
    if (frame) {
      let fper = 0;
      for (let i = 0; i < frame.length; i++) {
        const a = frame[i], b = frame[(i + 1) % frame.length];
        fper += Math.hypot(b[0] - a[0], b[1] - a[1]);
      }
      const FN = Math.max(6, Math.round(fper / (o.mini ? .44 : .152)));
      for (let i = 0; i < FN; i++) {
        const [fx0, fy0] = framePath((i + .5) / FN);
        const [fx, fy] = rp(fx0, fy0);
        const [x, y, z] = p(fx * scale, -fy * scale, -.05);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (.78 + .68 * dep) * rs, v: .46 + .16 * dep, a: .8 });
      }
    }
    /* click ripple expanding from the tip */
    const rip = c < .5 ? c / .5 : 0;
    if (rip > 0 && !o.mini) {
      const rr = .22 + .72 * rip, Nr = 14;
      for (let i = 0; i < Nr; i++) {
        const a = i / Nr * TAU;
        const [x, y, z] = p(tip[0] + Math.cos(a) * rr, -(tip[1] + Math.sin(a) * rr), -.05);
        dots.push({ x, y, z, r: .7 * rs, v: .62, a: (1 - rip) * .5 });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }
  /* official: pointing right and a little up, like the logo */
  function drawCursor(ctx, S, t, o) {
    drawArrowOrb(ctx, S, t, o, 0, ARROW_CLEAN, cleanPath,
      { span: 1.5, fill: true, wob: .5, frame: CURSOR_HEX, framePath: hexPath });
  }
  /* study: the original up-left pointer */
  function drawPointer(ctx, S, t, o) { drawArrowOrb(ctx, S, t, o, 0, ARROW_LEG, legPath, { span: 1.05 }); }

  /* ============ CUBE (study) \u2014 face sweep ============ */
  const CUBE_V = [];
  for (let i = 0; i < 8; i++) CUBE_V.push([(i & 1 ? 1 : -1), (i & 2 ? 1 : -1), (i & 4 ? 1 : -1)]);
  const CUBE_E = [[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];
  const CUBE_F = [[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]];
  const CUBE_PATH = [0,1,3,2,6,7,5,4]; /* gray-code loop over vertices */
  function drawCube(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.63 + t * .38, .6155 + .06 * Math.sin(t * .5), cx, cy, R);
    const h = .62;
    const perEdge = o.mini ? 4 : 8;
    /* face sweep: one face pulses at a time */
    const cyc = t * .55;
    const face = Math.floor(cyc % 6);
    const pulse = Math.sin(clamp01(cyc % 1) * Math.PI);
    const inFace = CUBE_F[face];
    const dots = [];
    for (const [a, b] of CUBE_E) {
      const hot = inFace.includes(a) && inFace.includes(b) ? pulse : 0;
      const A = CUBE_V[a], B = CUBE_V[b];
      for (let j = 0; j < perEdge; j++) {
        const f = (j + .5) / perEdge;
        const [x, y, z] = p(lerp(A[0], B[0], f) * h, lerp(A[1], B[1], f) * h, lerp(A[2], B[2], f) * h);
        const dep = (z + 1) / 2;
        dots.push({
          x, y, z,
          r: (.8 + 1.5 * dep + .5 * hot) * rs,
          v: .42 + .44 * dep + .28 * hot,
          a: .55 + .45 * dep
        });
      }
    }
    /* corner anchors */
    for (const V of CUBE_V) {
      const [x, y, z] = p(V[0] * h, V[1] * h, V[2] * h);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep });
    }
    /* the runner "cursor" walking the edges */
    const walk = t * .8;
    const seg = Math.floor(walk % 8), fseg = walk % 1;
    const A = CUBE_V[CUBE_PATH[seg]], B = CUBE_V[CUBE_PATH[(seg + 1) % 8]];
    for (let k = 0; k < 4; k++) {
      const f = clamp01(fseg - k * .09);
      const [x, y, z] = p(lerp(A[0], B[0], f) * h, lerp(A[1], B[1], f) * h, lerp(A[2], B[2], f) * h);
      dots.push({ x, y, z: z + .02, r: (1.7 - k * .3) * rs, v: .96 - k * .17, a: 1 - k * .2 });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ GEMINI \u2014 astroid twinkle ============ */
  function drawGemini(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const yaw = .3 * Math.sin(t * .45), tilt = .32 + .14 * Math.sin(t * .28);
    const p = proj(yaw, tilt, cx, cy, R);
    const rotW = .14 * Math.sin(t * .9);          /* twinkle wobble */
    const scale = .88 + .12 * Math.sin(t * 1.8);  /* twinkle breath */
    const N = o.mini ? 22 : 58;
    const dots = [];
    const cBlue = [64, 148, 255], cPurple = [176, 118, 240], cPink = [225, 118, 178];
    const grad = py => {
      /* vertical gradient: top blue \u2192 mid purple \u2192 bottom pink (screen up = +py) */
      const gpos = clamp01((1 - py) / 2);
      return gpos < .5
        ? [lerp(cBlue[0], cPurple[0], gpos * 2), lerp(cBlue[1], cPurple[1], gpos * 2), lerp(cBlue[2], cPurple[2], gpos * 2)]
        : [lerp(cPurple[0], cPink[0], gpos * 2 - 1), lerp(cPurple[1], cPink[1], gpos * 2 - 1), lerp(cPurple[2], cPink[2], gpos * 2 - 1)];
    };
    for (let i = 0; i < N; i++) {
      const th = i / N * TAU + rotW;
      const c3 = Math.cos(th), s3 = Math.sin(th);
      const px = c3 * c3 * c3 * scale, py = s3 * s3 * s3 * scale;
      const [x, y, z] = p(px, py, 0);
      const dep = (z + 1) / 2;
      const tip = Math.pow(Math.abs(px) + Math.abs(py), 1.6); /* brighter near the 4 points */
      dots.push({
        x, y, z,
        r: (.7 + 1.1 * dep + .9 * tip) * rs,
        v: .48 + .32 * tip + .2 * dep,
        c: grad(py)
      });
    }
    /* inner echo star for body */
    const Ni = o.mini ? 0 : N >> 1;
    for (let i = 0; i < Ni; i++) {
      const th = i / Ni * TAU - rotW * .6;
      const c3 = Math.cos(th), s3 = Math.sin(th);
      const px = c3 * c3 * c3 * scale * .48, py = s3 * s3 * s3 * scale * .48;
      const [x, y, z] = p(px, py, .04);
      dots.push({ x, y, z, r: .85 * rs, v: .52, a: .8, c: grad(py * 2) });
    }
    /* orbiting satellite sparkles */
    if (!o.mini) for (let k = 0; k < 3; k++) {
      const a = t * (k % 2 ? -.5 : .65) + k * 2.1;
      const rr = .95 + .1 * Math.sin(t * 1.3 + k * 2);
      const [x, y, z] = p(Math.cos(a) * rr, Math.sin(a) * rr, .25 * Math.sin(t * .7 + k * 3));
      const tw = .5 + .5 * Math.sin(t * 3 + k * 2.4);
      dots.push({ x, y, z, r: (.6 + .9 * tw) * rs, v: .85, a: .25 + .6 * tw, c: k === 0 ? cBlue : k === 1 ? cPurple : cPink });
    }
    /* core glimmer */
    const [x0, y0, z0] = p(0, 0, 0);
    dots.push({ x: x0, y: y0, z: z0 + .01, r: (1.1 + .5 * Math.sin(t * 2.2)) * rs, v: .9, c: cPurple });
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ FIGMA \u2014 swatch morph ============ */
  const FIGMA_COLS = [
    [242, 78, 30],   /* L-top  */
    [255, 114, 98],  /* R-top  */
    [162, 89, 255],  /* L-mid  */
    [26, 188, 254],  /* R-mid  */
    [10, 207, 131]   /* L-bot  */
  ];
  const FIGMA_POS = [[-.21, -.42], [.21, -.42], [-.21, 0], [.21, 0], [-.21, .42]];
  function drawFigma(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const per = o.mini ? 6 : 13;       /* dots per swatch */
    const N = per * 5;
    /* cycle: sphere \u2192 logo \u2192 sphere */
    const T = 7, u = ((t * .9) % T + T) % T;
    let m; /* 0 = sphere, 1 = logo */
    if (u < 2.8) m = 0;
    else if (u < 3.7) m = smooth((u - 2.8) / .9);
    else if (u < 5.6) m = 1;
    else if (u < 6.5) m = 1 - smooth((u - 5.6) / .9);
    else m = 0;
    const p = proj(t * .5, .32 + .1 * Math.sin(t * .35), cx, cy, R);
    const dots = [];
    for (let i = 0; i < N; i++) {
      const grp = i % 5;
      const idx = (i / 5) | 0;
      /* sphere home */
      const f = fib(i, N);
      const [sx, sy, sz] = p(f[0], f[1], f[2]);
      /* logo home: tight sunflower disc per swatch, face-on */
      const ring = .155 * Math.sqrt((idx + .5) / per);
      const ang = idx * 2.399963 + grp * 1.2;
      const bob = .008 * Math.sin(t * 1.6 + grp * 1.3);
      const lx = cx + (FIGMA_POS[grp][0] + Math.cos(ang) * ring) * R * 1.05;
      const ly = cy + (FIGMA_POS[grp][1] + bob + Math.sin(ang) * ring) * R * 1.05;
      const x = lerp(sx, lx, m), y = lerp(sy, ly, m), z = lerp(sz, grp * .05 - .1, m);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.8 + 1.4 * lerp(dep, .85, m)) * rs,
        v: lerp(.45 + .48 * dep, .85, m),
        c: FIGMA_COLS[grp]
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ REACT \u2014 the atom ============ */
  function drawReact(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.1 * Math.sin(t * .4), .12 * Math.sin(t * .33), cx, cy, R);
    const spin = t * .26, rx = .94, ry = .345;
    const per = o.mini ? 20 : 56;
    const dots = [];
    for (let k = 0; k < 3; k++) {
      const a0 = spin + k * Math.PI / 3;
      const ca = Math.cos(a0), sa = Math.sin(a0);
      const ring = th => {
        const ex = Math.cos(th) * rx, ey = Math.sin(th) * ry;
        return [ex * ca - ey * sa, ex * sa + ey * ca];
      };
      for (let i = 0; i < per; i++) {
        const th = i / per * TAU;
        const [gx, gy] = ring(th);
        const [x, y, z] = p(gx, gy, 0);
        /* a highlight travels each orbit so the flat mark still breathes */
        const ph = ((th / TAU - t * .19 - k * .33) % 1 + 1) % 1;
        const crest = Math.exp(-Math.pow(ph - .5, 2) / .022);
        dots.push({ x, y, z: z + crest * .01, r: (.95 + .6 * crest) * rs, v: .66 + .3 * crest, a: .85 + .15 * crest });
      }
      const eth = t * (k % 2 ? -1.15 : 1.3) + k * 2.1;
      const [ex2, ey2] = ring(eth);
      const [x2, y2, z2] = p(ex2, ey2, .04);
      dots.push({ x: x2, y: y2, z: z2 + .02, r: 1.9 * rs, v: .95 });
    }
    /* nucleus */
    const nN = o.mini ? 3 : 7;
    for (let i = 0; i < nN; i++) {
      const a = i / nN * TAU, rr = i ? .085 : 0;
      const [x, y, z] = p(Math.cos(a) * rr, Math.sin(a) * rr, .05);
      dots.push({ x, y, z: z + .03, r: 1.5 * rs, v: .9 });
    }
    paint(ctx, dots, o.accent, .88, .3);
  }

  /* ============ SWIFT \u2014 the bird ============ */
  const OPENAI_PATH = "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";
  const SWIFT_PATH = "M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z";
  const maskCache = new Map();
  /* sample a real logo path into a dot lattice, normalised on its own bounding box */
  function pathDots(key, d, N, vb, strokeW, inv, rc) {
    const ck = key + "-" + N + "-" + (inv || "") + (rc ? "-rc" : "");
    if (maskCache.has(ck)) return maskCache.get(ck);
    const px = 200, c = document.createElement("canvas");
    c.width = c.height = px;
    const g = c.getContext("2d");
    g.setTransform(px / (vb || 24), 0, 0, px / (vb || 24), 0, 0);
    if (strokeW) {
      g.strokeStyle = "#fff"; g.lineWidth = strokeW; g.lineJoin = "round"; g.lineCap = "round";
      g.stroke(new Path2D(d));
    } else {
      g.fillStyle = "#fff";
      g.fill(new Path2D(d));
    }
    const img = g.getImageData(0, 0, px, px).data;
    let x0 = px, x1 = -1, y0 = px, y1 = -1;
    for (let j = 0; j < px; j++) for (let i = 0; i < px; i++)
      if (img[(j * px + i) * 4 + 3] > 128) { if (i < x0) x0 = i; if (i > x1) x1 = i; if (j < y0) y0 = j; if (j > y1) y1 = j; }
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2, m = Math.max(x1 - x0, y1 - y0);
    const pts = [];
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const sx = mx + ((i + .5) / N * 2 - 1) * m / 2, sy = my + ((j + .5) / N * 2 - 1) * m / 2;
      const ix = Math.round(sx), iy = Math.round(sy);
      if (ix < 0 || iy < 0 || ix >= px || iy >= px) continue;
      const on = img[(iy * px + ix) * 4 + 3] > 128;
      const nx = (sx - mx) / (m / 2), ny = (sy - my) / (m / 2);
      if (inv) {
        /* the mark is the hole: keep empty pixels that sit inside the outer silhouette */
        if (on) continue;
        if (inv === "circle" && Math.hypot(nx, ny) > .96) continue;
        if (inv === "box" && Math.pow(Math.abs(nx), 4) + Math.pow(Math.abs(ny), 4) > Math.pow(.9, 4)) continue;
      } else if (!on) continue;
      pts.push([nx, ny]);
    }
    /* a mark carried as a hole is normalised against the outer silhouette, so it can sit
       off-centre in the frame; recentre it on its own bounds */
    if (rc && pts.length) {
      let ax0 = 1e9, ax1 = -1e9, ay0 = 1e9, ay1 = -1e9;
      for (const [qx, qy] of pts) {
        if (qx < ax0) ax0 = qx; if (qx > ax1) ax1 = qx;
        if (qy < ay0) ay0 = qy; if (qy > ay1) ay1 = qy;
      }
      const ox = (ax0 + ax1) / 2, oy = (ay0 + ay1) / 2;
      for (const q of pts) { q[0] -= ox; q[1] -= oy; }
    }
    maskCache.set(ck, pts);
    return pts;
  }

  /* ---------- marks sampled straight from each brand's own logo path ---------- */
  const MARK_PATHS = {
    github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    threads: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    css: "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63",
    ios: "M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z",
    neuform: "M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077",
    designcode: "M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"
  };
  /* one driver for every sampled mark; each brand is just a config */
  function drawMark(ctx, S, t, o, cfg) {
    const cx = S / 2, cy = S / 2, R = S / 2 * (cfg.fit ?? .88);
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .4), .13 * Math.sin(t * .31), cx, cy, R);
    const pts = pathDots(cfg.key, MARK_PATHS[cfg.key], o.mini ? (cfg.nMini ?? 12) : (cfg.n ?? 26), cfg.vb, cfg.stroke, cfg.invert, cfg.recenter);
    const wave = (((t * (cfg.speed ?? .4)) % 1 + 1) % 1) * 2.4 - 1.2;
    const dots = [];
    for (const [gx, gy] of pts) {
      let crest;
      if (cfg.motion === "scan") crest = Math.exp(-Math.pow(gy - wave, 2) / .05);
      else if (cfg.motion === "sweep") {
        const ph = ((Math.atan2(gy, gx) / TAU + .5 - t * .3) % 1 + 1) % 1;
        crest = Math.exp(-Math.pow(ph - .5, 2) / .014);
      } else crest = Math.exp(-Math.pow((gx - gy) * .5 - wave, 2) / .05);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      const d = { x, y, z, r: (.78 + .72 * dep + .45 * crest) * rs, v: (cfg.v ?? .58) + .15 * dep + .3 * crest };
      if (cfg.grad) {
        const m = clamp01((gy + 1) / 2);
        d.c = [lerp(cfg.grad[0][0], cfg.grad[1][0], m),
               lerp(cfg.grad[0][1], cfg.grad[1][1], m),
               lerp(cfg.grad[0][2], cfg.grad[1][2], m)];
      }
      dots.push(d);
    }
    paint(ctx, dots, cfg.accent ?? null, cfg.accent ? .9 : 0, .3);
  }
  const mk = cfg => (ctx, S, t, o) => drawMark(ctx, S, t, o, cfg);

  /* walk a real path at uniform arc length, so its lines come out as even dot runs */
  const walkCache = new Map();
  function pathWalk(key, d, spacing, ox, oy, sc) {
    const ck = "w" + key + "-" + spacing;
    if (walkCache.has(ck)) return walkCache.get(ck);
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.cssText = "position:absolute;left:-9999px;top:0";
    document.body.appendChild(svg);
    const pts = [];
    for (const sub of d.split(/(?=M)/)) {          /* every subpath gets its own even queue */
      if (!sub.trim()) continue;
      const el = document.createElementNS(NS, "path");
      el.setAttribute("d", sub);
      svg.appendChild(el);
      const L = el.getTotalLength();
      if (!L) continue;
      const n = Math.max(2, Math.round(L / spacing));
      for (let i = 0; i < n; i++) {
        const q = el.getPointAtLength((i + .5) / n * L);
        pts.push([(q.x - ox) * sc, (q.y - oy) * sc]);
      }
    }
    svg.remove();
    walkCache.set(ck, pts);
    return pts;
  }

  /* ============ DESIGNCODE \u2014 monogram in a dot field ============ */
  /* geometry is static, so build it once per size: the disc, minus a clearance
     around the monogram, plus the monogram itself. Normalised on the logo's own
     disc (centre 22,22 r 22 of its 44 viewBox) so the proportions are the logo's. */
  const dcCache = new Map();
  function dcGeom(mini) {
    const ck = mini ? "m" : "s";
    if (dcCache.has(ck)) return dcCache.get(ck);
    /* the monogram, walked evenly along its own outlines (logo's disc: centre 22,22 r 22 of 44) */
    const mark = pathWalk("designcode", MARK_PATHS.designcode, mini ? 3.1 : 1.5, 22, 22, 1 / 22);
    /* the disc of dots behind it, kept clear of the lines */
    const fg = mini ? .26 : .12, cl = mini ? .17 : .105, cl2 = cl * cl;
    const field = [];
    for (let gy = -1; gy <= 1; gy += fg) {
      for (let gx = -1; gx <= 1; gx += fg) {
        if (Math.hypot(gx, gy) > .97) continue;
        let near = false;
        for (const [mx2, my2] of mark) {
          const dx = gx - mx2, dy = gy - my2;
          if (dx * dx + dy * dy < cl2) { near = true; break; }
        }
        if (!near) field.push([gx, gy]);
      }
    }
    const geom = { mark, field };
    dcCache.set(ck, geom);
    return geom;
  }
  function drawDesignCode(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .82;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .38), .12 * Math.sin(t * .29), cx, cy, R);
    const { mark, field } = dcGeom(o.mini);
    const wave = (((t * .3) % 1 + 1) % 1) * 2.3 - 1.15;
    const dots = [];
    for (const [gx, gy] of field) {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.7 + .58 * dep) * rs, v: .3 + .1 * dep, a: .82 });
    }
    for (const [gx, gy] of mark) {
      const crest = Math.exp(-Math.pow(gy - wave, 2) / .06);
      const [x, y, z] = p(gx, -gy, .05);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.9 + .75 * dep + .3 * crest) * rs, v: .78 + .1 * dep + .18 * crest });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ AURA \u2014 the logo's own dot field ============ */
  /* [x, y, radius] for each circle in the Aura mark, normalised on its bounding box */
  const AURA_DOTS = [[-0.173, -0.959, 0.065], [-0.015, -0.963, 0.061], [0.138, -0.971, 0.052], [-0.264, -0.803, 0.059], [-0.103, -0.804, 0.058], [0.056, -0.807, 0.055], [0.207, -0.817, 0.044], [-0.336, -0.636, 0.064], [-0.172, -0.634, 0.067], [-0.012, -0.636, 0.064], [0.131, -0.655, 0.045], [0.284, -0.664, 0.036], [-0.417, -0.47, 0.068], [-0.291, -0.507, 0.032], [-0.143, -0.52, 0.018], [0.049, -0.49, 0.048], [0.201, -0.5, 0.038], [0.357, -0.506, 0.033], [-0.499, -0.313, 0.064], [-0.375, -0.351, 0.025], [-0.217, -0.355, 0.021], [0.131, -0.331, 0.045], [0.285, -0.339, 0.037], [0.439, -0.346, 0.03], [-0.589, -0.157, 0.058], [-0.456, -0.185, 0.03], [-0.298, -0.19, 0.025], [0.207, -0.17, 0.045], [0.361, -0.178, 0.036], [0.513, -0.187, 0.027], [-0.669, 0.002, 0.055], [-0.534, -0.024, 0.029], [0.291, -0.009, 0.043], [0.45, -0.012, 0.041], [0.598, -0.026, 0.026], [-0.755, 0.163, 0.054], [-0.611, 0.146, 0.036], [-0.457, 0.137, 0.028], [0.36, 0.145, 0.035], [0.523, 0.146, 0.036], [0.675, 0.136, 0.026], [-0.836, 0.322, 0.05], [-0.681, 0.315, 0.043], [-0.524, 0.31, 0.039], [-0.355, 0.316, 0.045], [-0.196, 0.314, 0.043], [-0.038, 0.31, 0.038], [0.117, 0.303, 0.032], [0.265, 0.289, 0.018], [0.442, 0.304, 0.032], [0.601, 0.301, 0.03], [0.759, 0.297, 0.025], [-0.924, 0.48, 0.047], [-0.765, 0.477, 0.044], [-0.588, 0.492, 0.058], [-0.43, 0.488, 0.055], [-0.3, 0.456, 0.023], [-0.118, 0.476, 0.043], [0.035, 0.468, 0.035], [0.197, 0.467, 0.034], [0.353, 0.462, 0.028], [0.516, 0.463, 0.029], [0.677, 0.462, 0.029], [0.832, 0.455, 0.022], [-1.0, 0.643, 0.048], [-0.839, 0.642, 0.047], [-0.675, 0.645, 0.05], [-0.527, 0.631, 0.035], [0.123, 0.632, 0.037], [0.277, 0.625, 0.029], [0.437, 0.623, 0.028], [0.599, 0.623, 0.028], [0.757, 0.619, 0.024], [0.918, 0.618, 0.023], [-0.92, 0.808, 0.051], [-0.762, 0.804, 0.047], [0.357, 0.79, 0.033], [0.517, 0.787, 0.03], [0.676, 0.785, 0.028], [0.835, 0.782, 0.024], [1.0, 0.785, 0.028], [-0.995, 0.971, 0.053], [-0.835, 0.97, 0.051], [0.604, 0.951, 0.033], [0.761, 0.947, 0.028], [0.926, 0.95, 0.031]];
  function drawAura(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .63;
    const rs = rscale(S) * (o.mini ? 1.7 : 1);
    const p = proj(.14 * Math.sin(t * .36), .12 * Math.sin(t * .28), cx, cy, R);
    /* an aura travels outward through the field */
    const ring = (((t * .32) % 1 + 1) % 1) * 2.2 - .2;
    const dots = [];
    const step = o.mini ? 2 : 1;
    for (let i = 0; i < AURA_DOTS.length; i += step) {
      const [gx, gy, gr] = AURA_DOTS[i];
      const d0 = Math.hypot(gx, gy);
      const glow = Math.exp(-Math.pow(d0 - ring, 2) / .045);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: Math.max(.4, gr * R * .92) + (.25 * dep + .5 * glow) * rs,
        v: .5 + .12 * dep + .36 * glow
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ FLOWER (study) \u2014 tapered petal bloom ============ */
  function drawFlower(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .34), .12 * Math.sin(t * .27), cx, cy, R);
    const petals = 6, spin = t * .15;
    const open = .9 + .1 * Math.sin(t * .8);           /* the bloom breathes */
    const a = .42, b = .335;                           /* petal half-length / half-width */
    const mid = .53 * open;                            /* petal centre, measured from the middle */
    const gap = o.mini ? .17 : .076;
    const dots = [];
    for (let k = 0; k < petals; k++) {
      const th = spin + k / petals * TAU;
      const ca = Math.cos(th), sa = Math.sin(th);
      const lean = .5 + .5 * Math.sin(t * .9 + k * 1.05);
      for (let u = -a; u <= a; u += gap) {
        /* teardrop: pinched toward the centre, full at the outer end */
        const bw = b * (.5 + .5 * (u + a) / (2 * a));
        for (let v = -bw; v <= bw; v += gap) {
          const q = Math.pow(Math.abs(u / a), 2.8) + Math.pow(Math.abs(v / bw), 2.4);
          if (q > 1) continue;
          const rad = mid + u;
          const gx = rad * ca - v * sa, gy = rad * sa + v * ca;
          const [x, y, z] = p(gx, -gy, .05 * (1 - q));
          const dep = (z + 1) / 2;
          const rim = clamp01(q);
          dots.push({
            x, y, z,
            r: (.68 + .6 * dep + .3 * rim) * rs,
            v: .48 + .13 * dep + .26 * rim + .1 * lean,
            a: .7 + .24 * rim
          });
        }
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ DREAMCUT \u2014 the blossom ============ */
  function drawDreamCut(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.11 * Math.sin(t * .33), .11 * Math.sin(t * .26), cx, cy, R);
    const petals = 6, spin = t * .14;
    const breathe = 1 + .04 * Math.sin(t * .9);
    /* six round lobes, spaced so they overlap into a scalloped blossom */
    const d = .46 * breathe, rp = .41 * breathe, hole = .11;
    const pc = [];
    for (let k = 0; k < petals; k++) {
      const th = spin + k / petals * TAU;
      pc.push([Math.cos(th) * d, Math.sin(th) * d]);
    }
    const gap = o.mini ? .2 : .1;
    const glow = (((t * .3) % 1 + 1) % 1) * TAU;      /* a highlight travels round the bloom */
    const dots = [];
    const lit = (gx, gy) => .5 + .5 * Math.cos(Math.atan2(gy, gx) - glow);
    /* dim fill: the union of the six lobes */
    for (let gy = -1; gy <= 1; gy += gap) {
      for (let gx = -1; gx <= 1; gx += gap) {
        if (Math.hypot(gx, gy) < hole) continue;       /* the dark centre */
        let bd = 9;
        for (let k = 0; k < petals; k++) {
          const dd = Math.hypot(gx - pc[k][0], gy - pc[k][1]);
          if (dd < bd) bd = dd;
        }
        if (bd > rp) continue;
        const [x, y, z] = p(gx, -gy, .03);
        const dep = (z + 1) / 2;
        const l = lit(gx, gy);
        dots.push({ x, y, z, r: (.58 + .45 * dep) * rs, v: .27 + .09 * dep + .15 * l * l, a: .66 });
      }
    }
    /* each petal's own edge, so the six lobes read as petals and not one blob */
    const per = o.mini ? 10 : 26;
    for (let k = 0; k < petals; k++) {
      for (let i = 0; i < per; i++) {
        const a = i / per * TAU;
        const gx = pc[k][0] + Math.cos(a) * rp, gy = pc[k][1] + Math.sin(a) * rp;
        if (Math.hypot(gx, gy) < hole) continue;
        const [x, y, z] = p(gx, -gy, .06);
        const dep = (z + 1) / 2;
        const l = lit(gx, gy);
        dots.push({ x, y, z, r: (.88 + .78 * dep) * rs, v: .66 + .12 * dep + .26 * l * l });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ EMAIL \u2014 the envelope, flap lifting ============ */
  function drawEmail(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.14 * Math.sin(t * .4), .14 * Math.sin(t * .3), cx, cy, R);
    /* gy runs downward here, so -h is the top edge */
    const w = .88, h = .6, r = .24;
    /* opens, holds, shuts again */
    const cyc = ((t * .3) % 1 + 1) % 1;
    const lift = smooth(Math.sin(clamp01(cyc * 1.5) * Math.PI));
    /* the letter only shows once the flap has actually lifted */
    const show = clamp01((lift - .2) / .3);
    const step = o.mini ? .28 : .128;                 /* spaced like the cube's edges */
    const dots = [];
    /* one dot, cube-weighted: bigger and brighter as it comes forward */
    const dot = (gx, gy, z0, v, mul) => {
      const [x, y, z] = p(gx, -gy, z0 || 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.82 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.62 + .38 * dep) * (mul ?? 1) });
    };
    const node = (gx, gy, z0, mul) => {              /* the cube's brighter corner anchors */
      const [x, y, z] = p(gx, -gy, z0 || 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.22 + 1.5 * dep) * rs, v: .62 + .4 * dep, a: (.68 + .32 * dep) * (mul ?? 1) });
    };
    const line = (ax, ay, bx, by, v, z0, mul) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n;
        dot(ax + (bx - ax) * f, ay + (by - ay) * f, z0, v, mul);
      }
    };
    /* rounded envelope body, walked at even spacing */
    const body = [];
    const arc = (ax, ay, a0, a1) => {
      for (let i = 0; i <= 5; i++) {
        const a = a0 + (a1 - a0) * i / 5;
        body.push([ax + Math.cos(a) * r, ay + Math.sin(a) * r]);
      }
    };
    body.push([-w + r, -h], [w - r, -h]);
    arc(w - r, -h + r, -Math.PI / 2, 0);
    body.push([w, h - r]);
    arc(w - r, h - r, 0, Math.PI / 2);
    body.push([-w + r, h]);
    arc(-w + r, h - r, Math.PI / 2, Math.PI);
    body.push([-w, -h + r]);
    arc(-w + r, -h + r, Math.PI, Math.PI * 1.5);
    let per = 0;
    for (let i = 0; i < body.length; i++) {
      const a = body[i], b = body[(i + 1) % body.length];
      per += Math.hypot(b[0] - a[0], b[1] - a[1]);
    }
    const bodyPath = perimeter(body);
    const N = Math.max(8, Math.round(per / step));
    for (let i = 0; i < N; i++) {
      const [gx, gy] = bodyPath((i + .5) / N);
      dot(gx, gy, 0, .5);
    }
    /* anchors where the four corners turn */
    const kx = w - r * .3, ky = h - r * .3;
    node(-kx, -ky); node(kx, -ky); node(kx, ky); node(-kx, ky);
    /* the letter: hidden while shut, rising into view as the flap opens */
    if (show > .02) {
      const lw = w * .6, lh = h * .62, lr = .1, lz = -.06;
      const ly = 0;                                 /* sits centred; the flap does the revealing */
      line(-lw + lr, ly - lh, lw - lr, ly - lh, .56, lz, show);
      line(-lw + lr, ly + lh, lw - lr, ly + lh, .56, lz, show);
      line(-lw, ly - lh + lr, -lw, ly + lh - lr, .56, lz, show);
      line(lw, ly - lh + lr, lw, ly + lh - lr, .56, lz, show);
      if (!o.mini) {                                  /* a couple of written lines */
        line(-lw * .55, ly - lh * .3, lw * .55, ly - lh * .3, .5, lz, show);
        line(-lw * .55, ly + lh * .12, lw * .28, ly + lh * .12, .5, lz, show);
      }
      node(-lw, ly - lh, lz, show); node(lw, ly - lh, lz, show);
    }
    /* the flap: creased along the top edge, dipping in when shut, swinging up when open */
    const apex = lerp(.34 * h, -1.5 * h, lift);
    const fx = w - r * .4, fy = -h + r * .1;
    line(-fx, fy, 0, apex, .6, .07);
    line(fx, fy, 0, apex, .6, .07);
    node(0, apex, .08);
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ OPENAI \u2014 the rosette, blooming ============ */
  function drawOpenAI(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .9;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .38), .12 * Math.sin(t * .29), cx, cy, R);
    const pts = pathDots("openai", OPENAI_PATH, o.mini ? 14 : 34);
    /* furls shut and opens again; the outer petals swirl further than the middle */
    const cyc = ((t * .28) % 1 + 1) % 1;
    const open = smooth(Math.sin(cyc * Math.PI));
    const scl = .5 + .5 * open;
    const dots = [];
    for (const [gx0, gy0] of pts) {
      const r0 = Math.hypot(gx0, gy0), th = Math.atan2(gy0, gx0);
      const a = th + (1 - open) * 1.5 * r0 + t * .1;
      const rr = r0 * scl;
      const [x, y, z] = p(Math.cos(a) * rr, -Math.sin(a) * rr, 0);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.78 + .7 * dep + .4 * r0 * open) * rs,
        v: .5 + .16 * dep + .28 * r0 * open
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ NEUFORM \u2014 eight chevrons ============ */
  function drawNeuform(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.13 * Math.sin(t * .36), .12 * Math.sin(t * .28), cx, cy, R);
    /* the mark is drawn in strokes, so walk it evenly rather than sampling a fill */
    const pts = pathWalk("neuform", MARK_PATHS.neuform, o.mini ? 6.5 : 2.9, 64, 64, 1 / 64);
    const spin = t * .12, cs = Math.cos(spin), sn = Math.sin(spin);
    /* light pushes outward through the eight arms */
    const wave = (((t * .34) % 1 + 1) % 1) * 1.55 - .1;
    const dots = [];
    for (const [gx0, gy0] of pts) {
      const gx = gx0 * cs - gy0 * sn, gy = gx0 * sn + gy0 * cs;
      const rr = Math.hypot(gx, gy);
      const crest = Math.exp(-Math.pow(rr - wave, 2) / .035);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + .7 * dep + .55 * crest) * rs, v: .48 + .14 * dep + .34 * crest });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ UI \u2014 the panel ============ */
  function drawUI(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .34), .14 * Math.sin(t * .27), cx, cy, R);
    const step = o.mini ? .3 : .13;
    const dots = [];
    const dot = (gx, gy, v, mul) => {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + 1.45 * dep) * rs, v: v + .42 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    const line = (ax, ay, bx, by, v, mul) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n;
        dot(ax + (bx - ax) * f, ay + (by - ay) * f, v, mul);
      }
    };
    const w = .84, h = .64, r = .16, bar = -h + .3, side = -w + .42;
    /* the window frame */
    line(-w + r, -h, w - r, -h, .5); line(-w + r, h, w - r, h, .5);
    line(-w, -h + r, -w, h - r, .5); line(w, -h + r, w, h - r, .5);
    for (const [ax, ay, a0] of [[w - r, -h + r, -Math.PI / 2], [w - r, h - r, 0], [-w + r, h - r, Math.PI / 2], [-w + r, -h + r, Math.PI]])
      for (let i = 0; i <= 4; i++) {
        const a = a0 + i / 4 * (Math.PI / 2);
        dot(ax + Math.cos(a) * r, ay + Math.sin(a) * r, .5);
      }
    line(-w, bar, w, bar, .46);                      /* title bar */
    line(side, bar, side, h, .42);                   /* sidebar */
    if (!o.mini) { dot(-w + .17, -h + .15, .8); dot(-w + .3, -h + .15, .8); }
    /* content rows light up in turn, like a panel filling in */
    const rows = o.mini ? 2 : 3;
    for (let i = 0; i < rows; i++) {
      const yy = bar + .22 + i * .24;
      const pulse = .5 + .5 * Math.sin(t * 1.5 - i * 1.1);
      line(side + .16, yy, w - .16 - (i === rows - 1 ? .28 : 0), yy, .36 + .3 * pulse);
    }
    /* and a nav item on the sidebar */
    if (!o.mini) for (let i = 0; i < 2; i++) {
      const yy = bar + .28 + i * .3;
      line(-w + .14, yy, side - .12, yy, .34 + .22 * (.5 + .5 * Math.sin(t * 1.5 - i * 1.1 - .6)));
    }
    paint(ctx, dots, o.accent, .86, .3);
  }

  /* ============ UX \u2014 the journey ============ */
  const uxCurve = u => [-.82 + 1.64 * u, .40 * Math.cos(u * Math.PI) - .17 * Math.sin(u * TAU)];
  function drawUX(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .86;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .33), .14 * Math.sin(t * .26), cx, cy, R);
    const dots = [];
    const dot = (gx, gy, v, size, mul) => {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: ((size ?? .8) + 1.4 * dep) * rs, v: v + .4 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    /* the path itself, evenly spaced */
    const N = o.mini ? 13 : 34;
    for (let i = 0; i <= N; i++) {
      const u = i / N, q = uxCurve(u);
      /* a traveller runs the route */
      const head = (((t * .32) % 1 + 1) % 1);
      const d = Math.abs(u - head);
      const crest = Math.exp(-d * d / .006);
      dot(q[0], q[1], .38 + .38 * crest, .78 + .5 * crest);
    }
    /* waypoints along the way */
    for (const u of (o.mini ? [.5] : [.06, .5, .94])) {
      const q = uxCurve(u);
      const ring = o.mini ? 5 : 9, rr = .13;
      for (let i = 0; i < ring; i++) {
        const a = i / ring * TAU;
        dot(q[0] + Math.cos(a) * rr, q[1] + Math.sin(a) * rr, .58, .78);
      }
    }
    /* an arrowhead where the route ends */
    if (!o.mini) {
      const e = uxCurve(1), b = uxCurve(.93);
      const ang = Math.atan2(e[1] - b[1], e[0] - b[0]);
      for (const s2 of [-1, 1]) for (let i = 1; i <= 3; i++) {
        const a = ang + Math.PI + s2 * .62, f = i / 3 * .2;
        dot(e[0] + Math.cos(a) * f, e[1] + Math.sin(a) * f, .66);
      }
    }
    paint(ctx, dots, o.accent, .86, .3);
  }

  /* ============ CODEX \u2014 prompt blob ============ */
  const CODEX_CHEV = [[-.30, -.34], [.07, 0], [-.30, .34]];   /* the '>' , y down */
  const CODEX_BAR = [[.11, .30], [.43, .30]];                 /* the '_' */
  function segDist(px, py, ax, ay, bx, by) {
    const dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy;
    let u = L2 ? ((px - ax) * dx + (py - ay) * dy) / L2 : 0;
    u = u < 0 ? 0 : u > 1 ? 1 : u;
    return Math.hypot(px - (ax + dx * u), py - (ay + dy * u));
  }
  function drawCodex(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.13 * Math.sin(t * .42), .13 * Math.sin(t * .31), cx, cy, R);
    const lobes = 6, spin = t * .2;
    const amp = .1 + .03 * Math.sin(t * 1.15);
    const rad = th => .76 * (1 + amp * Math.cos(lobes * (th - spin)));
    /* the underscore blinks like a terminal caret */
    const ph = ((t / 1.15) % 1 + 1) % 1;
    const blink = ph < .58 ? 1 : ph < .68 ? 1 - (ph - .58) / .1 : ph < .9 ? 0 : (ph - .9) / .1;
    const light = [186, 186, 252], deep = [104, 96, 246];
    const dots = [];
    const gap = o.mini ? .28 : .112;
    const clr = o.mini ? .1 : .108;
    const chevD = (x, y) => Math.min(
      segDist(x, y, CODEX_CHEV[0][0], CODEX_CHEV[0][1], CODEX_CHEV[1][0], CODEX_CHEV[1][1]),
      segDist(x, y, CODEX_CHEV[1][0], CODEX_CHEV[1][1], CODEX_CHEV[2][0], CODEX_CHEV[2][1]));
    const barD = (x, y) => segDist(x, y, CODEX_BAR[0][0], CODEX_BAR[0][1], CODEX_BAR[1][0], CODEX_BAR[1][1]);
    for (let gy = -1; gy <= 1; gy += gap) {
      for (let gx = -1; gx <= 1; gx += gap) {
        const d = Math.hypot(gx, gy);
        if (!d || d > rad(Math.atan2(gy, gx))) continue;
        if (chevD(gx, gy) < clr || barD(gx, gy) < clr * .92) continue;   /* leave room for the glyphs */
        const [x, y, z] = p(gx, -gy, 0);
        const dep = (z + 1) / 2, m = clamp01((gy + .85) / 1.7);
        dots.push({
          x, y, z, r: (.9 + 1.05 * dep) * rs, a: .95,
          v: .8 - .12 * m,
          c: [lerp(light[0], deep[0], m), lerp(light[1], deep[1], m), lerp(light[2], deep[2], m)]
        });
      }
    }
    /* the prompt itself, in white */
    const step = o.mini ? .13 : .052;
    const glyph = (ax, ay, bx, by, alpha) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n, gx = ax + (bx - ax) * f, gy = ay + (by - ay) * f;
        const [x, y, z] = p(gx, -gy, .06);
        dots.push({ x, y, z, r: (1.15 + 1.1 * ((z + 1) / 2)) * rs, v: .97, a: alpha, c: [255, 255, 255] });
      }
    };
    glyph(CODEX_CHEV[0][0], CODEX_CHEV[0][1], CODEX_CHEV[1][0], CODEX_CHEV[1][1], 1);
    glyph(CODEX_CHEV[1][0], CODEX_CHEV[1][1], CODEX_CHEV[2][0], CODEX_CHEV[2][1], 1);
    if (blink > .02) glyph(CODEX_BAR[0][0], CODEX_BAR[0][1], CODEX_BAR[1][0], CODEX_BAR[1][1], blink);
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ SWIFT \u2014 the bird ============ */
  function drawSwift(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a slow bank, as if riding an updraft */
    const p = proj(.2 * Math.sin(t * .43), .18 * Math.sin(t * .31) - .04, cx, cy, R);
    const pts = pathDots("swift", SWIFT_PATH, o.mini ? 11 : 27);
    const bob = .035 * Math.sin(t * .95);
    const wave = (((t * .4) % 1 + 1) % 1) * 2.4 - 1.2;
    const dots = [];
    for (const [gx, gy] of pts) {
      /* crest sweeps tail-to-beak along the bird's diagonal */
      const u = (gx - gy) * .5;
      const crest = Math.exp(-Math.pow(u - wave, 2) / .05);
      const [x, y, z] = p(gx, -gy + bob, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.75 + .8 * dep + .45 * crest) * rs, v: .6 + .16 * dep + .26 * crest });
    }
    paint(ctx, dots, o.accent, .92, .3);
  }

  /* ============ FRAMER \u2014 letter morph ============ */
  const FRAMER_PTS = (() => {
    /* dot fill of the logo's three sections; each one carries its own diagonal (viewBox 24) */
    const pts = [], g = 1.72;
    for (let y = .9; y <= 7.4; y += g)                    /* top: left edge runs down to (12,8) */
      for (let x = 4 + y; x <= 19.4; x += g) pts.push([x, y, 0]);
    for (let y = 8.9; y <= 15.4; y += g)                  /* middle: right edge runs out to (20,16) */
      for (let x = 4.9; x <= 12 + (y - 8); x += g) pts.push([x, y, 1]);
    for (let y = 16.9; y <= 23.4; y += g)                 /* bottom: left edge runs down to (12,24) */
      for (let x = 4 + (y - 16); x <= 11.9; x += g) pts.push([x, y, 2]);
    return pts;
  })();
  function drawFramer(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const list = o.mini ? FRAMER_PTS.filter((_, i) => i % 2 === 0) : FRAMER_PTS;
    const N = list.length;
    /* cycle: sphere -> letter -> sphere (phase-shifted against the Figma orb) */
    const T = 7, u = (((t * .9 + 3.5) % T) + T) % T;
    let m;
    if (u < 2.8) m = 0;
    else if (u < 3.7) m = smooth((u - 2.8) / .9);
    else if (u < 5.6) m = 1;
    else if (u < 6.5) m = 1 - smooth((u - 5.6) / .9);
    else m = 0;
    const p = proj(t * .5, .32 + .1 * Math.sin(t * .35), cx, cy, R);
    const dots = [];
    for (let i = 0; i < N; i++) {
      const [lx0, ly0, sec] = list[i];
      const f = fib(i, N);
      const [sx, sy, sz] = p(f[0], f[1], f[2]);
      const sway = .012 * Math.sin(t * 1.4 + sec * 2.1) * (sec === 1 ? -1 : 1);
      const lx = cx + ((lx0 - 12) / 12 * .95 + sway) * R * 1.02;
      const ly = cy + ((ly0 - 12) / 12 * .95) * R * 1.02;
      const x = lerp(sx, lx, m), y = lerp(sy, ly, m), z = lerp(sz, sec * .05 - .08, m);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.8 + 1.35 * lerp(dep, .85, m)) * rs,
        v: lerp(.42 + .48 * dep, .87, m)
      });
    }
    paint(ctx, dots, o.accent, .9, .3);
  }

  /* ============ BLUE ORB (study) \u2014 band shift ============ */
  function drawBands(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(t * .08, .35, cx, cy, R);
    const perRing = o.mini ? 14 : 22;
    const bands = [-.58, 0, .58];
    const sub = o.mini ? [0] : [-.09, 0, .09];
    /* eased 90-degree snap every few beats, alternating direction per band */
    const beat = 2.4, w = t / beat, step = Math.floor(w), f = w - step;
    const snapped = step + smooth(clamp01(f * 2.2));
    const snapPulse = Math.sin(clamp01(f * 2.2) * Math.PI);
    const dots = [];
    for (let b = 0; b < 3; b++) {
      const dir = b % 2 ? -1 : 1;
      const phase = dir * (snapped * Math.PI / 2 + t * .18) + b * .8;
      const hot = (step % 3 === b ? 1 : .25) * snapPulse;
      for (const so of sub) {
        const yy = bands[b] + so;
        const rad = Math.sqrt(Math.max(0, 1 - yy * yy)) * .96;
        for (let j = 0; j < perRing; j++) {
          const th = j / perRing * TAU + phase;
          const [x, y, z] = p(Math.cos(th) * rad, yy, Math.sin(th) * rad);
          const dep = (z + 1) / 2;
          dots.push({
            x, y, z,
            r: (.7 + 1.5 * dep + .45 * hot) * rs,
            v: .4 + .48 * dep + .16 * hot,
            a: .45 + .55 * dep
          });
        }
      }
    }
    paint(ctx, dots, o.accent, .9, .3);
  }

  /* ============ BOOK COVERS (study) \u2014 a closed book with a mark stamped on it ============ */
  /* the mark is laid onto the cover plane, so it takes the book's perspective */
  function drawBookCover(ctx, S, t, o, cfg) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .9;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a gentle three-quarter that drifts, so the cover turns through the light */
    const yaw = .55 + .13 * Math.sin(t * .28);
    const p = proj(yaw, .34 + .06 * Math.sin(t * .41), cx, cy, R);
    const w = .54, h = .72, d = .15;          /* half width / height / half thickness */
    const gapE = o.mini ? .33 : .155;         /* the cube's dot step */
    const dots = [];
    const dot = (gx, gy, gz, v, mul, col) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      const q = { x, y, z, r: (.8 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.58 + .42 * dep) * (mul ?? 1) };
      if (col) q.c = col;
      dots.push(q);
    };
    const node = (gx, gy, gz, mul) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep, a: (.62 + .38 * dep) * (mul ?? 1) });
    };
    const edge = (a, b, v, mul) => {
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const k = Math.max(2, Math.round(L / gapE));
      for (let i = 0; i < k; i++) {
        const f = (i + .5) / k;
        dot(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, v, mul);
      }
    };
    /* the closed slab */
    const V = [];
    for (const sx of [-w, w]) for (const sy of [-h, h]) for (const sz of [-d, d]) V.push([sx, sy, sz]);
    const ix = (a, b, c) => (a ? 4 : 0) + (b ? 2 : 0) + (c ? 1 : 0);
    const E = [];
    for (const a of [0, 1]) for (const b of [0, 1]) E.push([ix(a, b, 0), ix(a, b, 1)]);
    for (const a of [0, 1]) for (const c of [0, 1]) E.push([ix(a, 0, c), ix(a, 1, c)]);
    for (const b of [0, 1]) for (const c of [0, 1]) E.push([ix(0, b, c), ix(1, b, c)]);
    for (const [i, j] of E) edge(V[i], V[j], .45);
    for (const q of V) node(q[0], q[1], q[2]);
    /* page edges along the fore-edge, away from the spine */
    if (!o.mini) for (const pz of [-d * .5, 0, d * .5])
      edge([w, -h * .9, pz], [w, h * .9, pz], .34);
    /* the mark, stamped on the front cover */
    const front = d + .02, sp = w * .78;
    /* as the book turns, a highlight rakes across the cover */
    for (const [u, v, weight, col] of cfg.marks(t, o)) {
      const rake = .55 + .45 * Math.cos(u * 2.1 - yaw * 3.4);
      dot(u * sp, -v * sp, front, (cfg.base ?? .5) * weight + .26 * weight * rake, 1, col || cfg.col);
    }
    paint(ctx, dots, null, 0, .3);
  }
  /* Claude's spark burst, flattened onto the cover */
  const claudeCoverMarks = (t, o) => {
    const out = [], rays = o.mini ? 8 : 11, per = o.mini ? 3 : 5;
    for (let k = 0; k < rays; k++) {
      const a = k / rays * TAU + t * .1 + (hash(k, 3.1) - .5) * .28;
      const pulse = .5 + .5 * Math.sin(t * 1.7 - k * 1.13);
      const L = (.6 + .38 * hash(k, 7.7)) * (.82 + .24 * pulse * pulse);
      for (let j = 0; j < per; j++) {
        const f = (j + .8) / per;
        out.push([Math.cos(a) * L * f, Math.sin(a) * L * f, .62 + .3 * f + .2 * pulse]);
      }
    }
    out.push([0, 0, 1.25]);
    return out;
  };
  /* OpenAI's rosette, stamped still like a foil block */
  const openaiCoverMarks = (t, o) => {
    const pts = pathDots("openai", OPENAI_PATH, o.mini ? 10 : 17);
    const breathe = 1 + .02 * Math.sin(t * .8);
    return pts.map(([gx, gy]) => [gx * .78 * breathe, gy * .78 * breathe, .9]);
  };

  /* ---- 2-D mark geometry for the book covers: still stamps, built once and cached ---- */
  const coverCache = new Map();
  const cov = (key, build) => {
    if (!coverCache.has(key)) coverCache.set(key, build());
    return coverCache.get(key);
  };
  /* lay dots along a segment */
  const covSeg = (out, ax, ay, bx, by, step, w, col) => {
    const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
    for (let i = 0; i <= n; i++) {
      const f = i / n;
      out.push([ax + (bx - ax) * f, ay + (by - ay) * f, w, col]);
    }
  };
  /* sample a real logo path straight onto the cover */
  const covPath = (key, d, N, sc, vb, stroke, inv, rc) =>
    pathDots("cov" + key, d, N, vb, stroke, inv, rc).map(([x, y]) => [x * sc, y * sc, .92]);

  const COVER_MARKS = {
    openai: () => cov("openai", () => covPath("openai", OPENAI_PATH, 17, .78)),
    swift: () => cov("swift", () => covPath("swift", SWIFT_PATH, 16, .8)),
    github: () => cov("github", () => covPath("github", MARK_PATHS.github, 18, .8, 24, 0, "circle", 1)),
    linkedin: () => cov("linkedin", () => covPath("linkedin", MARK_PATHS.linkedin, 18, .76, 24, 0, "box", 1)),
    x: () => cov("x", () => covPath("x", MARK_PATHS.x, 16, .72)),
    instagram: () => cov("instagram", () => covPath("instagram", MARK_PATHS.instagram, 17, .78)),
    threads: () => cov("threads", () => covPath("threads", MARK_PATHS.threads, 17, .78)),
    designcode: () => cov("designcode", () =>
      pathWalk("dcCover", MARK_PATHS.designcode, 1.9, 22, 22, 1 / 22).map(([x, y]) => [x * 1.55, y * 1.55, .95])),
    framer: () => cov("framer", () =>
      FRAMER_PTS.map(([x, y]) => [(x - 12) / 12 * .78, (y - 12) / 12 * .78, .92])),
    aura: () => cov("aura", () =>
      AURA_DOTS.map(([x, y, r]) => [x * .82, y * .82, .6 + 5 * r])),
    css: () => cov("css", () => covPath("css", MARK_PATHS.css, 19, .8, 24, 0, "box", 1)),
    ios: () => cov("ios", () => covPath("ios", MARK_PATHS.ios, 20, .86)),
    neuform: () => cov("neuform", () =>
      pathWalk("nfCover", MARK_PATHS.neuform, 3.1, 64, 64, 1 / 64).map(([x, y]) => [x * .84, y * .84, .95])),
    ui: () => cov("ui", () => {
      const o = [], w = .74, h = .56, bar = -h + .26, side = -w + .36;
      covSeg(o, -w, -h, w, -h, .1, .92); covSeg(o, w, -h, w, h, .1, .92);
      covSeg(o, w, h, -w, h, .1, .92); covSeg(o, -w, h, -w, -h, .1, .92);
      covSeg(o, -w, bar, w, bar, .1, .9);
      covSeg(o, side, bar, side, h, .1, .86);
      for (let i = 0; i < 3; i++) covSeg(o, side + .14, bar + .2 + i * .2, w - .14, bar + .2 + i * .2, .1, .8);
      return o;
    }),
    ux: () => cov("ux", () => {
      const o = [];
      for (let i = 0; i <= 30; i++) { const q = uxCurve(i / 30); o.push([q[0] * .82, q[1] * .82, .9]); }
      for (const u of [.06, .5, .94]) {
        const q = uxCurve(u);
        for (let i = 0; i < 9; i++) {
          const a = i / 9 * TAU;
          o.push([(q[0] + Math.cos(a) * .13) * .82, (q[1] + Math.sin(a) * .13) * .82, 1]);
        }
      }
      return o;
    }),
    codex: () => cov("codex", () => {
      const o = [];
      covSeg(o, -.4, -.44, .1, 0, .075, .95);          /* the '>' */
      covSeg(o, .1, 0, -.4, .44, .075, .95);
      covSeg(o, .17, .4, .62, .4, .075, .95);          /* the '_' */
      return o;
    }),
    cursor: () => cov("cursor", () => {
      const o = [], P = ARROW_CLEAN;
      for (let i = 0; i < P.length; i++) {
        const a = P[i], b = P[(i + 1) % P.length];
        covSeg(o, a[0] * .58, a[1] * .58, b[0] * .58, b[1] * .58, .07, .95);
      }
      return o;
    }),
    gemini: () => cov("gemini", () => {
      const o = [], N = 44;
      for (let i = 0; i < N; i++) {
        const th = i / N * TAU, c = Math.cos(th), sn = Math.sin(th);
        o.push([c * c * c * .82, sn * sn * sn * .82, .95]);
      }
      return o;
    }),
    figma: () => cov("figma", () => {
      const o = [];
      FIGMA_POS.forEach(([px, py], g) => {
        for (let i = 0; i < 15; i++) {
          const ring = .175 * Math.sqrt((i + .5) / 15), a = i * 2.399963 + g * 1.2;
          o.push([px * 1.62 + Math.cos(a) * ring, py * 1.62 + Math.sin(a) * ring, .98, FIGMA_COLS[g]]);
        }
      });
      return o;
    }),
    react: () => cov("react", () => {
      const o = [], rx = .84, ry = .3, per = 26;
      for (let k = 0; k < 3; k++) {
        const a0 = k * Math.PI / 3, ca = Math.cos(a0), sa = Math.sin(a0);
        for (let i = 0; i < per; i++) {
          const th = i / per * TAU, ex = Math.cos(th) * rx, ey = Math.sin(th) * ry;
          o.push([ex * ca - ey * sa, ex * sa + ey * ca, .9]);
        }
      }
      o.push([0, 0, 1.15]);
      return o;
    }),
    dreamcut: () => cov("dreamcut", () => {
      const o = [], petals = 6, d = .44, rp = .39, hole = .1;
      const pc = [];
      for (let k = 0; k < petals; k++) {
        const th = k / petals * TAU;
        pc.push([Math.cos(th) * d, Math.sin(th) * d]);
      }
      for (let gy = -.9; gy <= .9; gy += .135) {          /* dim fill */
        for (let gx = -.9; gx <= .9; gx += .135) {
          if (Math.hypot(gx, gy) < hole) continue;
          let bd = 9;
          for (const q of pc) { const dd = Math.hypot(gx - q[0], gy - q[1]); if (dd < bd) bd = dd; }
          if (bd > rp) continue;
          o.push([gx, gy, .58]);
        }
      }
      for (const q of pc) {                                /* each petal's own edge */
        for (let i = 0; i < 24; i++) {
          const a = i / 24 * TAU;
          const px = q[0] + Math.cos(a) * rp, py = q[1] + Math.sin(a) * rp;
          if (Math.hypot(px, py) < hole) continue;
          o.push([px, py, 1]);
        }
      }
      return o;
    }),
    email: () => cov("email", () => {
      const o = [], w = .74, h = .5;
      covSeg(o, -w, -h, w, -h, .085, .92);
      covSeg(o, w, -h, w, h, .085, .92);
      covSeg(o, w, h, -w, h, .085, .92);
      covSeg(o, -w, h, -w, -h, .085, .92);
      covSeg(o, -w, -h, 0, h * .34, .085, .95);        /* the flap */
      covSeg(o, w, -h, 0, h * .34, .085, .95);
      return o;
    })
  };
  const COVER_COL = {
    css: [156, 116, 224], ios: [214, 214, 224], ui: [130, 200, 240], ux: [240, 190, 120],
    claude: [222, 132, 100], codex: [176, 176, 250], gemini: [186, 132, 246],
    framer: [80, 140, 255], react: [120, 224, 250], swift: [242, 118, 88],
    designcode: [180, 224, 238], instagram: [228, 118, 156], linkedin: [80, 148, 226]
  };
  /* one book per mark */
  const bookOf = key => (c, S, t, o) => drawBookCover(c, S, t, o, {
    marks: key === "claude" ? claudeCoverMarks
         : key === "openai" ? openaiCoverMarks
         : (tt, oo) => COVER_MARKS[key](tt, oo),
    col: COVER_COL[key],
    base: .5
  });

  /* ============ BOOK (study) \u2014 open book, cube-style wireframe ============ */
  function drawBook(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a three-quarter view like the cube's, drifting */
    const p = proj(.4 + .14 * Math.sin(t * .28), .66 + .05 * Math.sin(t * .44), cx, cy, R);
    const h = .58, Lp = .92;                   /* page half-height / page width, sized so edges carry the cube's dot count */
    /* the cube spaces 8 dots along a 1.24 edge; match that step so every line here is even */
    const gapE = o.mini ? .33 : .155;
    const dots = [];
    const dot = (gx, gy, gz, v, mul) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.55 + .45 * dep) * (mul ?? 1) });
    };
    const node = (gx, gy, gz, mul) => {        /* the cube's brighter corner anchors */
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    const edge = (a, b, v, mul) => {
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const k = Math.max(2, Math.round(L / gapE));   /* count follows length, so spacing stays constant */
      for (let i = 0; i < k; i++) {
        const f = (i + .5) / k;
        dot(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, v, mul);
      }
    };
    /* the two halves breathe between flat-open and tented */
    const lift = .17 + .19 * (.5 + .5 * Math.sin(t * .5));
    /* one half, standing off the spine at angle th (measured in the x-z plane) */
    const leaf = (th, v, mul) => {
      const ex = Math.cos(th) * Lp, ez = Math.sin(th) * Lp;
      edge([0, -h, 0], [ex, -h, ez], v, mul);
      edge([ex, -h, ez], [ex, h, ez], v, mul);
      edge([ex, h, ez], [0, h, 0], v, mul);
      node(ex, -h, ez, mul);
      node(ex, h, ez, mul);
    };
    leaf(lift, .42);                            /* right half */
    leaf(Math.PI - lift, .42);                  /* left half */
    /* the spine, and its anchors */
    edge([0, -h, 0], [0, h, 0], .6);
    node(0, -h, 0); node(0, h, 0);
    /* page edges stacked on each half */
    if (!o.mini) for (const f of [.4, .64, .86]) {
      for (const th of [lift, Math.PI - lift]) {
        const ex = Math.cos(th) * Lp * f, ez = Math.sin(th) * Lp * f;
        edge([ex, -h * .93, ez], [ex, h * .93, ez], .32);
      }
    }
    /* now and then a page sweeps over from one side to the other */
    const cyc = ((t * .24) % 1 + 1) % 1;
    if (cyc < .5) {
      const tau = smooth(cyc / .5);
      const th = lerp(lift, Math.PI - lift, tau);
      const fade = Math.sin(tau * Math.PI) * .55 + .45;
      leaf(th, .66, fade);
    }
    paint(ctx, dots, null, 0, .3);
  }

  const MODES = {
    claude: { draw: drawClaude, accent: [217, 119, 87], speed: 1, staticT: 1.4 },
    openai: { draw: drawOpenAI, accent: null, speed: 1, staticT: .8 },
    cursor: { draw: drawCursor, accent: null, speed: 1, staticT: 1 },
    gemini: { draw: drawGemini, accent: null, speed: 1, staticT: .9 },
    figma:  { draw: drawFigma,  accent: null, speed: 1, staticT: 5 },
    framer: { draw: drawFramer, accent: [51, 119, 255], speed: 1, staticT: 1.1 },
    codex:  { draw: drawCodex,  accent: null, speed: 1, staticT: .4 },
    react:  { draw: drawReact,  accent: [97, 218, 251], speed: 1, staticT: 1.2 },
    sphere: { draw: drawSphere, accent: null, speed: 1, staticT: .8 },
    css:    { draw: mk({ key: "css", n: 30, nMini: 13, motion: "scan", speed: .34, invert: "box", accent: [150, 110, 220], v: .66, fit: 1.02 }), accent: null, speed: 1, staticT: 1.2 },
    ios:    { draw: mk({ key: "ios", n: 30, nMini: 13, motion: "diag", fit: .78, v: .64 }), accent: null, speed: 1, staticT: 1.1 },
    neuform: { draw: drawNeuform, accent: null, speed: 1, staticT: 1.5 },
    ui:     { draw: drawUI,     accent: [130, 200, 240], speed: 1, staticT: 1.2 },
    ux:     { draw: drawUX,     accent: [240, 190, 120], speed: 1, staticT: 1.6 },
    designcode: { draw: drawDesignCode, accent: null, speed: 1, staticT: 1.3 },
    aura:   { draw: drawAura,     accent: null, speed: 1, staticT: 1.5 },
    dreamcut: { draw: drawDreamCut, accent: null, speed: 1, staticT: 1.2 },
    swift:  { draw: drawSwift,  accent: [240, 81, 56], speed: 1, staticT: .9 },
    github: { draw: mk({ key: "github", n: 30, nMini: 13, motion: "diag", invert: "circle", recenter: true, v: .62 }), accent: null, speed: 1, staticT: 1.1 },
    x:      { draw: mk({ key: "x", n: 30, nMini: 12, motion: "sweep", fit: .70, v: .64 }), accent: null, speed: 1, staticT: 1.1 },
    instagram: { draw: mk({ key: "instagram", n: 28, nMini: 13, motion: "sweep", fit: .74,
      grad: [[151, 78, 200], [250, 140, 70]], v: .68 }), accent: null, speed: 1, staticT: 1.4 },
    threads: { draw: mk({ key: "threads", n: 30, nMini: 13, motion: "sweep", fit: .74, v: .64 }), accent: null, speed: 1, staticT: 1.2 },
    linkedin: { draw: mk({ key: "linkedin", n: 30, nMini: 13, motion: "scan", speed: .38, invert: "box", accent: [40, 130, 220], v: .66 }), accent: null, speed: 1, staticT: 1.2 },
    email:  { draw: drawEmail,  accent: null, speed: 1, staticT: 1.2 },
    flower: { draw: drawFlower,  accent: null, speed: 1, staticT: 1.2 },
    book:   { draw: drawBook,    accent: null, speed: 1, staticT: .52 },
    claudebook:   { draw: bookOf("claude"), accent: null, speed: 1, staticT: 1.3 },
    openaibook:   { draw: bookOf("openai"), accent: null, speed: 1, staticT: 1.3 },
    codexbook:    { draw: bookOf("codex"), accent: null, speed: 1, staticT: 1.3 },
    cursorbook:   { draw: bookOf("cursor"), accent: null, speed: 1, staticT: 1.3 },
    geminibook:   { draw: bookOf("gemini"), accent: null, speed: 1, staticT: 1.3 },
    figmabook:    { draw: bookOf("figma"), accent: null, speed: 1, staticT: 1.3 },
    framerbook:   { draw: bookOf("framer"), accent: null, speed: 1, staticT: 1.3 },
    reactbook:    { draw: bookOf("react"), accent: null, speed: 1, staticT: 1.3 },
    swiftbook:    { draw: bookOf("swift"), accent: null, speed: 1, staticT: 1.3 },
    designcodebook: { draw: bookOf("designcode"), accent: null, speed: 1, staticT: 1.3 },
    aurabook:     { draw: bookOf("aura"), accent: null, speed: 1, staticT: 1.3 },
    dreamcutbook: { draw: bookOf("dreamcut"), accent: null, speed: 1, staticT: 1.3 },
    githubbook:   { draw: bookOf("github"), accent: null, speed: 1, staticT: 1.3 },
    xbook:        { draw: bookOf("x"), accent: null, speed: 1, staticT: 1.3 },
    instagrambook: { draw: bookOf("instagram"), accent: null, speed: 1, staticT: 1.3 },
    threadsbook:  { draw: bookOf("threads"), accent: null, speed: 1, staticT: 1.3 },
    linkedinbook: { draw: bookOf("linkedin"), accent: null, speed: 1, staticT: 1.3 },
    emailbook:    { draw: bookOf("email"), accent: null, speed: 1, staticT: 1.3 },
    uibook:       { draw: bookOf("ui"), accent: null, speed: 1, staticT: 1.3 },
    uxbook:       { draw: bookOf("ux"), accent: null, speed: 1, staticT: 1.3 },
    cssbook:      { draw: bookOf("css"), accent: null, speed: 1, staticT: 1.3 },
    iosbook:      { draw: bookOf("ios"), accent: null, speed: 1, staticT: 1.3 },
    neuformbook:  { draw: bookOf("neuform"), accent: null, speed: 1, staticT: 1.3 },
    cube:   { draw: drawCube,   accent: null, speed: 1, staticT: 2.6 },
    orb:    { draw: drawBands,  accent: [64, 122, 255], speed: 1, staticT: .5 },
    pointer:{ draw: drawPointer, accent: null, speed: 1, staticT: 1 }
  };

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dpr = Math.min(2, devicePixelRatio || 1);
  const anims = [];

  function boot(canvas) {
    const mode = MODES[canvas.dataset.mode];
    if (!mode) return;
    const S = +canvas.dataset.size || 56;
    canvas.width = Math.round(S * dpr);
    canvas.height = Math.round(S * dpr);
    const ctx = canvas.getContext("2d");
    const o = { mini: S < 32, accent: mode.accent };
    const frame = t => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, S, S);
      mode.draw(ctx, S, t * mode.speed * (o.mini ? 1.25 : 1), o);
    };
    if (reduced) { frame(mode.staticT); return; }
    anims.push({ canvas, frame, visible: true });
    frame(performance.now() / 1e3);
  }

  /* zoom/debug mode: ?zoom=claude&size=480&t=2.5 */
  const q = new URLSearchParams(location.search);
  if (q.get("zoom")) {
    document.body.classList.add("zoom-mode");
    const stage = document.createElement("div");
    stage.className = "zoom-stage";
    const c = document.createElement("canvas");
    c.dataset.mode = q.get("zoom");
    c.dataset.size = q.get("size") || 480;
    c.style.width = c.dataset.size + "px";
    c.style.height = c.dataset.size + "px";
    stage.appendChild(c);
    document.body.appendChild(stage);
    if (q.get("t")) {
      const mode = MODES[c.dataset.mode], S = +c.dataset.size;
      c.width = S * dpr; c.height = S * dpr;
      const ctx = c.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mode.draw(ctx, S, +q.get("t"), { mini: false, accent: mode.accent });
    } else boot(c);
  } else {
    document.querySelectorAll("canvas[data-mode]").forEach(boot);
  }

  if (!reduced && anims.length) {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        const a = anims.find(a => a.canvas === e.target);
        if (a) a.visible = e.isIntersecting;
      }
    });
    anims.forEach(a => io.observe(a.canvas));
    window.__orbFrames = 0;
    let usingTimer = false, timerId = 0;
    const tick = () => {
      window.__orbFrames++;
      const t = performance.now() / 1e3;
      if (document.visibilityState !== "hidden")
        for (const a of anims) if (a.visible) a.frame(t);
      if (!usingTimer) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    /* watchdog: some throttled webviews never fire rAF \u2014 fall back to a timer */
    setTimeout(() => {
      if (window.__orbFrames === 0) {
        usingTimer = true;
        timerId = setInterval(tick, 33);
      }
    }, 400);
  }
})();
<\/script>
</body>
</html>
`;var fr=de(fn()),y4=["claude","openai","codex","cursor","gemini","figma","framer","react","swift","designcode","aura","dreamcut","ui","ux","css","ios","neuform","github","x","instagram","threads","linkedin","email"],b4=["small","medium"],re={variant:"claude",size:"medium",mode:"dark",speed:1,paused:!1},x4={small:20,medium:56},rr={claude:"Claude Code",openai:"OpenAI",codex:"Codex",cursor:"Cursor",gemini:"Gemini",figma:"Figma",framer:"Framer",react:"React",swift:"Swift",designcode:"DesignCode",aura:"Aura",dreamcut:"DreamCut",ui:"UI",ux:"UX",css:"CSS",ios:"iOS",neuform:"Neuform",github:"GitHub",x:"X",instagram:"Instagram",threads:"Threads",linkedin:"LinkedIn",email:"Email"};function S4(t,a,e){return Math.min(e,Math.max(a,t))}function ur(){if(typeof document>"u"||typeof window>"u")return"dark";let t=document.documentElement.dataset.theme??document.documentElement.dataset.scheme;return t==="light"||t==="dark"?t:document.documentElement.classList.contains("light")?"light":document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function M4(t){let[a,e]=(0,mt.useState)(ur);return(0,mt.useEffect)(()=>{if(!t||typeof document>"u"||typeof window>"u")return;let l=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>e(ur()),i=new MutationObserver(n);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-scheme","data-theme"]}),l.addEventListener("change",n),n(),()=>{i.disconnect(),l.removeEventListener("change",n)}},[t]),a}function w4(t){return[...t.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].at(-1)?.[1]??""}var z4=w4(ir).replace(/<\/script/gi,"<\\/script");function _4(t,a,e){let l=e==="light"?"#dad7cc":"#050608",n=e==="light"?"invert(1) hue-rotate(180deg) contrast(1.04) saturate(.92)":"none",i=x4[a],c=JSON.stringify(t).replace(/</g,"\\u003c"),s=`<script data-brand-orbs-controls>
(function () {
  var nativeNow = performance.now.bind(performance);
  var last = nativeNow();
  var virtual = last;
  var controls = { speed: 1, paused: false };
  window.__BRAND_ORB_PAUSED = false;
  performance.now = function () {
    var real = nativeNow();
    if (!controls.paused) virtual += (real - last) * controls.speed;
    last = real;
    return virtual;
  };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'brand-orbs-controls') return;
    var next = event.data.controls || {};
    if (Number.isFinite(next.speed)) controls.speed = Math.max(.1, Math.min(3, next.speed));
    controls.paused = Boolean(next.paused);
    window.__BRAND_ORB_PAUSED = controls.paused;
  });
})();
<\/script>`,o=z4.replace('if (document.visibilityState !== "hidden")','if (document.visibilityState !== "hidden" && !window.__BRAND_ORB_PAUSED)');return`<!doctype html>
<html lang="en" data-theme="${e}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${rr[t]} Brand Orb</title>
<style>
html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; background: ${l}; }
body { display: grid; place-items: center; }
canvas { display: block; width: ${i}px; height: ${i}px; filter: ${n}; }
</style>
${s}
</head>
<body>
<canvas data-mode=${c} data-size="${i}" aria-hidden="true"></canvas>
<script>${o}<\/script>
</body>
</html>`}function dr({variant:t=re.variant,size:a=re.size,mode:e=re.mode,speed:l=re.speed,paused:n=re.paused,"aria-label":i,className:c,style:s}){let o=(0,mt.useRef)(null),[d,g]=(0,mt.useState)(!0),[v,p]=(0,mt.useState)(()=>typeof document>"u"||!document.hidden),h=M4(e==="auto"),M=e==="auto"?h:e,S=y4.includes(t)?t:re.variant,R=b4.includes(a)?a:re.size,r=S4(l,.1,3),u=n||!d||!v,f=(0,mt.useMemo)(()=>_4(S,R,M),[M,R,S]),m=M==="light"?"#dad7cc":"#050608",b=(0,mt.useCallback)(()=>{o.current?.contentWindow?.postMessage({type:"brand-orbs-controls",controls:{speed:r,paused:u}},"*")},[u,r]);return(0,mt.useEffect)(()=>{let _=o.current;if(!_||typeof IntersectionObserver>"u")return;let x=new IntersectionObserver(([w])=>g(w?.isIntersecting??!0));return x.observe(_),()=>x.disconnect()},[]),(0,mt.useEffect)(()=>{if(typeof document>"u")return;let _=()=>p(!document.hidden);return document.addEventListener("visibilitychange",_),()=>document.removeEventListener("visibilitychange",_)},[]),(0,mt.useEffect)(()=>{b()},[b,f]),(0,fr.jsx)("iframe",{ref:o,className:c,title:i??`${rr[S]} animated brand orb`,srcDoc:f,sandbox:"allow-scripts",loading:"eager",onLoad:b,style:{display:"block",width:"100%",height:"100%",border:0,background:m,...s}})}var pr=`.threeui-mount,
.terrain-plume-component,
.text-path-study,
.article-headings-component,
.animated-top-dock-component,
.typography-vortex-component,
.mechanical-keyboard,
.retro-metallic,
.landscape-scene,
.japanese-tower-landscape,
.sakura-branch-scene,
.isometric-motion-grid,
.isometric-illustration,
.tetrahedron-365,
.liquid-metal-button,
.iso-mail-lightshafts,
.spark-badge,
.hypnotic-loops,
.at-the-horizon,
.scalability-bricks,
.threeui-background {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.mechanical-keyboard {
  isolation: isolate;
  background: #090a0c;
}

.mechanical-keyboard__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #090a0c;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.mechanical-keyboard__frame.is-ready {
  opacity: 1;
}

.retro-metallic {
  isolation: isolate;
  background: #08090a;
}

.retro-metallic__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #08090a;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.retro-metallic__frame.is-ready {
  opacity: 1;
}

.japanese-tower-landscape {
  isolation: isolate;
  background: #ecdcbc;
}

.japanese-tower-landscape__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ecdcbc;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.japanese-tower-landscape__frame.is-ready {
  opacity: 1;
}

.landscape-scene {
  isolation: isolate;
  background: #ecdcbc;
}

.landscape-scene__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ecdcbc;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.landscape-scene__frame.is-ready {
  opacity: 1;
}

.sakura-branch-scene {
  isolation: isolate;
  background: #d4738a;
}

.sakura-branch-scene__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #d4738a;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.sakura-branch-scene__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .sakura-branch-scene__frame {
    transition: none;
  }
}

.isometric-motion-grid {
  isolation: isolate;
  background: #08090a;
}

.isometric-motion-grid__stage {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  height: 675px;
  transform-origin: 50% 50%;
}

.isometric-motion-grid__frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #08090a;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.isometric-motion-grid__frame.is-ready {
  opacity: 1;
}

.isometric-illustration {
  isolation: isolate;
  background: #111;
}

.isometric-illustration__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #111;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.isometric-illustration__frame.is-ready {
  opacity: 1;
}

.tetrahedron-365 {
  isolation: isolate;
  background: #000;
}

.tetrahedron-365__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.tetrahedron-365__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .tetrahedron-365__frame {
    transition: none;
  }
}

.liquid-metal-button {
  isolation: isolate;
  background: #070708;
}

.liquid-metal-button__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #070708;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.liquid-metal-button__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .liquid-metal-button__frame {
    transition: none;
  }
}

.iso-mail-lightshafts {
  isolation: isolate;
  background: #140f0b;
}

.iso-mail-lightshafts__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #140f0b;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.iso-mail-lightshafts__frame.is-ready {
  opacity: 1;
}

.spark-badge {
  isolation: isolate;
  background: #000;
}

.spark-badge__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.spark-badge__frame.is-ready {
  opacity: 1;
}

.hypnotic-loops {
  isolation: isolate;
  background: #f15a24;
}

.hypnotic-loops__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #f15a24;
  opacity: 0;
}

.hypnotic-loops__frame.is-ready {
  opacity: 1;
}

.at-the-horizon {
  isolation: isolate;
  background: #000;
}

.at-the-horizon__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.at-the-horizon__frame.is-ready {
  opacity: 1;
}

.scalability-bricks {
  isolation: isolate;
  background: #0b0b0c;
}

.scalability-bricks__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #0b0b0c;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.scalability-bricks__frame.is-ready {
  opacity: 1;
}

.text-path-study {
  isolation: isolate;
  background: #08090a;
}

.text-path-study--light {
  background: #f3f5f8;
}

.text-path-study-frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  transform-origin: 50% 50%;
}

.threeui-background {
  position: relative;
  isolation: isolate;
  background: #030304;
}

.threeui-background.condensation {
  background: transparent;
}

.threeui-background.predictive-arc--light,
.threeui-background.data-pixel-arc--light {
  background: #f3f6f1;
}

.typography-vortex-component.typography-vortex-component--light {
  background: #eef1f6;
}

.typography-vortex-component--light .typography-vortex-component__hint {
  color: rgba(28, 30, 38, 0.55);
}

.threeui-background > canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.cross-beam-canvas,
.terrain-plume-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.terrain-plume-component {
  pointer-events: none;
}

.terrain-plume-component {
  --fe-bg: #030304;
  --fe-band: clamp(260px, 52cqw, 820px);

  isolation: isolate;
  container-type: inline-size;
  background:
    linear-gradient(180deg, #050505 0%, #020202 44%, #000 100%);
}

/* Each scene keeps the same engraved grammar and only moves the ground tone the
   body fill and the reveal cover are painted with. */
.terrain-plume-component[data-terrain-scene="river"] {
  --fe-bg: #03070a;

  background:
    linear-gradient(180deg, #05090d 0%, #020507 44%, #000 100%);
}

.terrain-plume-component[data-terrain-scene="desert"] {
  --fe-bg: #0a0603;

  background:
    linear-gradient(180deg, #0d0805 0%, #060302 44%, #000 100%);
}

.terrain-plume-component[data-terrain-scene="bridge-city"] {
  --fe-bg: #03050b;

  background:
    linear-gradient(180deg, #050810 0%, #020407 44%, #000 100%);
}

/* The authored plume sits at the foot of its own canvas, where the terrain band
   buries it. Every scene keeps that exact gradient and only raises the canvas
   until the glow clears the range \u2014 stopping below the far edge of the hatch so
   the ground line the eye reads as the horizon is also where the sky starts,
   and the canvas edge itself stays behind the terrain. */
.terrain-plume-component[data-terrain-scene="river"] .terrain-plume-canvas,
.terrain-plume-component[data-terrain-scene="desert"] .terrain-plume-canvas,
.terrain-plume-component[data-terrain-scene="bridge-city"] .terrain-plume-canvas {
  top: auto;
  bottom: calc(var(--fe-band) * 0.33);
}

/* The footer vignette was tuned to bury the plume behind a range that fills the
   frame. These scenes leave far more open sky, so the same wash is lightened
   until the glow survives it. */
.terrain-plume-component[data-terrain-scene="river"]::after,
.terrain-plume-component[data-terrain-scene="desert"]::after,
.terrain-plume-component[data-terrain-scene="bridge-city"]::after {
  background:
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.07), transparent 34%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.3) 72%, rgba(0, 0, 0, 0.62));
}

.terrain-plume-component::before,
.terrain-plume-component::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  content: "";
}

.terrain-plume-component::before {
  background:
    linear-gradient(90deg, transparent calc(50% - 0.5px), rgba(255, 255, 255, 0.05) calc(50% - 0.5px) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.022) 0 1px, transparent 1px 11.5vw),
    repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 5.8rem);
  opacity: 0.74;
}

.terrain-plume-component::after {
  background:
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.09), transparent 34%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.62) 72%, rgba(0, 0, 0, 0.9));
}

.terrain-plume-canvas {
  z-index: 0;
}

.footer-engraved-terrain {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: var(--fe-band);
  pointer-events: none;
}

.footer-engraved-reveal {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.footer-engraved-grain {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
  background-size: 160px 160px;
}
.sunset-valley-scene,
.sunset-valley-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.sunset-valley-scene {
  position: relative;
  overflow: hidden;
  background: #090d16;
}

.sunset-valley-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.sunset-valley-canvas.is-ready {
  opacity: 1;
}

img.sunset-valley-fallback {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.temple-night-scene,
.temple-night-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.temple-night-scene {
  position: relative;
  overflow: hidden;
  background: #05070a;
}

.temple-night-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.temple-night-canvas.is-ready {
  opacity: 1;
}

.temple-night-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #a9b2b7;
  background: #05070a;
}

.yosemite-sunset-scene,
.yosemite-sunset-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.yosemite-sunset-scene {
  position: relative;
  overflow: hidden;
  background: #241a26;
}

.yosemite-sunset-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.yosemite-sunset-canvas.is-ready {
  opacity: 1;
}

.yosemite-sunset-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #e0c3ab;
  background: #241a26;
}

.presidio-sunset-scene,
.presidio-sunset-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.presidio-sunset-scene {
  position: relative;
  overflow: hidden;
  background: #2a1c22;
}

.presidio-sunset-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.presidio-sunset-canvas.is-ready {
  opacity: 1;
}

.presidio-sunset-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #e6c1ad;
  background: #2a1c22;
}

.lake-louise-scene,
.lake-louise-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.lake-louise-scene {
  position: relative;
  overflow: hidden;
  background: #171d2c;
}

.lake-louise-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.lake-louise-canvas.is-ready {
  opacity: 1;
}

.lake-louise-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #b9c8d6;
  background: #171d2c;
}

.bookshelf,
.bookshelf__canvas,
.sketchbook,
.sketchbook__frame {
  display: block;
  width: 100%;
  height: 100%;
}

.bookshelf {
  position: relative;
  container-type: inline-size;
  overflow: hidden;
  background: #171a24;
  outline: none;
}

.bookshelf__canvas {
  position: absolute;
  inset: 0;
  opacity: 0;
  touch-action: none;
}

.bookshelf__canvas.is-ready {
  opacity: 1;
}

.bookshelf__source-controls {
  display: none;
}

.bookshelf__unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 24px;
  color: #f4eee6;
  text-align: center;
}

.sketchbook {
  position: relative;
  overflow: hidden;
  background: #ece7dc;
}

.sketchbook__frame {
  border: 0;
  opacity: 0;
  background: #ece7dc;
}

.sketchbook__frame.is-ready {
  opacity: 1;
}

@font-face {
  font-family: "ThreeUI Fragment Mono";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./fonts/fragment-mono.woff2") format("woff2");
}

.article-headings-component,
.animated-top-dock-component,
.typography-vortex-component {
  container-type: inline-size;
  color: #ecece8;
  background: #0b0b0b;
  font-family: "Geist", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.article-headings-component {
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  padding: clamp(20px, 5.4cqw, 74px) clamp(20px, 6.2cqw, 86px);
  isolation: isolate;
}

.article-headings-component::after,
.animated-top-dock-component::after,
.typography-vortex-component::after {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  content: "";
  opacity: 0.12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E");
  mix-blend-mode: soft-light;
}

.article-headings-component__header {
  display: flex;
  justify-content: space-between;
  padding-bottom: clamp(14px, 2.6cqw, 30px);
  color: #62625e;
  font: 400 clamp(8px, 0.85cqw, 10px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.12em;
}

.article-headings-component__entry {
  display: grid;
  grid-template-columns: clamp(28px, 4cqw, 56px) minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(10px, 2.2cqw, 30px);
  border-top: 1px solid #2a2a28;
}

.article-headings-component__entry h2 {
  margin: 0;
  color: #e9e9e5;
  font-size: clamp(18px, 3.2cqw, 44px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.article-headings-component__index,
.article-headings-component__meta {
  color: #60605c;
  font: 400 clamp(8px, 0.85cqw, 10px) / 1.3 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.06em;
}

.article-headings-component__meta {
  text-align: right;
}

.article-headings-component--light {
  color: #202128;
  background: #f3f5f8;
}

.article-headings-component--light .article-headings-component__header,
.article-headings-component--light .article-headings-component__index,
.article-headings-component--light .article-headings-component__meta {
  color: #71737b;
}

.article-headings-component--light .article-headings-component__entry {
  border-color: #d9dce3;
}

.article-headings-component--light .article-headings-component__entry h2 {
  color: #1d1f26;
}

.typography-vortex-component {
  position: relative;
  isolation: isolate;
  touch-action: none;
  cursor: crosshair;
}

.typography-vortex-component canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.typography-vortex-component__hint,
.animated-top-dock-component__caption {
  position: absolute;
  z-index: 6;
  color: #62625e;
  font: 400 9px/1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.1em;
}

.typography-vortex-component__hint {
  right: 18px;
  bottom: 16px;
}

.animated-top-dock-component {
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;
  background:
    radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.035), transparent 34%),
    #080808;
}

.animated-top-dock__nav {
  position: absolute;
  top: clamp(24px, 5cqw, 46px);
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 3px;
  height: 38px;
  padding: 4px;
  overflow: visible;
  border: 1px solid #292929;
  border-radius: 11px;
  background: rgba(14, 14, 14, 0.86);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.48), inset 0 1px rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(18px) saturate(75%);
  transform: translateX(-50%);
  isolation: isolate;
}

.animated-top-dock__item {
  position: relative;
  z-index: 6;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 0;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 7px;
  outline: none;
  color: #858580;
  background: rgba(21, 21, 20, 0.9);
  font: 400 10px/1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.1em;
  white-space: nowrap;
  backdrop-filter: blur(14px) saturate(70%);
  transform-origin: 50% 0;
  transition: color 0.15s, border-color 0.18s, background 0.18s, box-shadow 0.18s;
  will-change: width, height, transform;
  cursor: pointer;
}

.animated-top-dock__item[data-dock-near="true"],
.animated-top-dock__item:focus-visible {
  z-index: 7;
  color: #ecece8;
  border-color: #41413e;
  background: rgba(27, 27, 26, 0.94);
  box-shadow: 0 7px 16px rgba(0, 0, 0, 0.26);
}

.animated-top-dock__logo {
  width: 28px;
  height: 28px;
  overflow: hidden;
  background: #e8e8e3;
}

.animated-top-dock__logo svg {
  display: block;
  width: 100%;
  height: 100%;
}

.animated-top-dock__link {
  gap: 6px;
  width: 94px;
  padding: 0 9px;
}

.animated-top-dock__link[aria-pressed="true"] {
  color: #111;
  border-color: #e8e8e3;
  background: #e8e8e3;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.28);
}

.animated-top-dock__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  opacity: 0.62;
  transition: opacity 0.16s;
}

.animated-top-dock__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.animated-top-dock__item[data-dock-near="true"] .animated-top-dock__icon,
.animated-top-dock__item:focus-visible .animated-top-dock__icon {
  opacity: 1;
}

.animated-top-dock-component__caption {
  right: 18px;
  bottom: 16px;
}

@media (max-width: 600px) {
  .article-headings-component {
    padding: 18px;
  }

  .article-headings-component__entry {
    grid-template-columns: 24px minmax(0, 1fr);
  }

  .article-headings-component__entry h2 {
    font-size: clamp(17px, 5.5vw, 26px);
  }

  .article-headings-component__meta {
    display: none;
  }

  .animated-top-dock__nav {
    top: 24px;
    gap: 2px;
    height: 36px;
  }

  .animated-top-dock__item {
    height: 26px !important;
    transform: none !important;
  }

  .animated-top-dock__logo {
    width: 26px !important;
    height: 26px !important;
  }

  .animated-top-dock__link {
    width: auto !important;
    padding: 0 7px;
    font-size: 8px;
    letter-spacing: 0.07em;
  }

  .animated-top-dock__icon {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated-top-dock__item {
    transform: none !important;
  }
}

/* \u2500\u2500 Top dock variants \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Every dimension below is a container query unit with a clamp, because these
   bars are shown at anything from a 600 px card to a 1920 px capture frame: a
   fixed 56 px bar that reads correctly in the catalogue frame becomes a thin
   strip of small type at full width. One scale block feeds all three. */

.animated-top-dock-component.atd-modern,
.animated-top-dock-component.atd-retro,
.animated-top-dock-component.atd-glass {
  --atd-top: clamp(16px, 2.6cqw, 46px);
  --atd-bar-width: min(1460px, calc(100% - clamp(24px, 4.2cqw, 96px)));
  --atd-bar-height: clamp(48px, 3.4cqw, 68px);
  --atd-bar-pad: clamp(5px, 0.42cqw, 9px);
  --atd-bar-lead: clamp(14px, 1.15cqw, 25px);
  --atd-item-height: clamp(30px, 2.2cqw, 44px);
  --atd-item-pad: clamp(10px, 0.86cqw, 18px);
  --atd-label: clamp(12px, 0.78cqw, 17px);
  --atd-icon: clamp(13px, 0.92cqw, 19px);
  --atd-gap: clamp(5px, 0.44cqw, 9px);
  --atd-brand: clamp(13px, 0.94cqw, 20px);
  --atd-mark: clamp(22px, 1.55cqw, 33px);
  --atd-action-height: clamp(34px, 2.5cqw, 50px);
  display: block;
  overflow: hidden;
}

.atd-modern__bar,
.atd-retro__bar {
  position: absolute;
  top: var(--atd-top);
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--atd-bar-width);
  height: var(--atd-bar-height);
  transform: translateX(-50%);
}

/* Command bar: the bar hugs its own content \u2014 brand, dock and actions sit in
   one flow with a gap between them rather than being pushed to the far edges of
   a full-bleed strip. That only holds because the dock's track is locked to its
   rest width (lockTrack in the controller): the spring then grows its items
   outside that track instead of widening the bar and shoving the brand and the
   actions around on every pointer move. */
.atd-modern__bar {
  /* space-between is inherited rather than centred on purpose: at its natural
     width the three groups already fill the box, and in a shell too narrow for
     them the overflow then runs off the right instead of taking the brand off
     the left as well */
  width: max-content;
  max-width: var(--atd-bar-width);
  padding: var(--atd-bar-pad) var(--atd-bar-pad) var(--atd-bar-pad) var(--atd-bar-lead);
}

.atd-modern__dock {
  display: flex;
  flex: none;
  gap: clamp(2px, 0.2cqw, 5px);
  align-items: flex-start;
  /* the track is one item tall and its rest width wide, and the row is centred
     inside it, so a growing item overflows evenly on all four sides without
     moving a single neighbour in the bar */
  justify-content: center;
  height: var(--atd-item-height);
}

.atd-modern__item,
.atd-retro__item,
.atd-glass__item {
  display: inline-flex;
  flex: none;
  gap: var(--atd-gap);
  align-items: center;
  justify-content: center;
  height: var(--atd-item-height);
  padding: 0 var(--atd-item-pad);
  outline: none;
  white-space: nowrap;
  transform-origin: 50% 0;
  will-change: width, height, transform;
  cursor: pointer;
}

.atd-modern__brand,
.atd-glass__brand,
.atd-retro__brand {
  display: inline-flex;
  flex: none;
  gap: clamp(7px, 0.6cqw, 13px);
  align-items: center;
  text-decoration: none;
}

.atd-modern__mark,
.atd-glass__mark {
  display: block;
  width: var(--atd-mark);
  height: var(--atd-mark);
  overflow: hidden;
}

.atd-modern__mark svg,
.atd-glass__mark svg {
  display: block;
  width: 100%;
  height: 100%;
}

.atd-modern__word,
.atd-glass__word {
  font-size: var(--atd-brand);
  font-weight: 600;
  letter-spacing: -0.018em;
}

.atd-modern__actions {
  display: inline-flex;
  flex: none;
  gap: clamp(4px, 0.34cqw, 8px);
  align-items: center;
}

.atd-modern__ghost {
  height: var(--atd-action-height);
  padding: 0 clamp(12px, 0.95cqw, 20px);
  border: 0;
  border-radius: 999px;
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  transition: color 0.16s, background 0.16s;
  cursor: pointer;
}

.atd-modern__cta,
.atd-glass__cta {
  height: var(--atd-action-height);
  border-radius: 999px;
  font: 600 var(--atd-label) / 1 inherit;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.18s;
  cursor: pointer;
}

/* \u2500\u2500 Modern command bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.animated-top-dock-component.atd-modern {
  /* a ceiling rather than a width: the command bar sizes itself to its own
     cluster, and only falls back to an inset strip in a shell too narrow to
     hold it */
  --atd-bar-width: min(1240px, calc(100% - clamp(24px, 5cqw, 120px)));
  background: #07080c;
}

.atd-modern__aurora {
  position: absolute;
  inset: -24% -12% auto -12%;
  z-index: 1;
  height: 82%;
  pointer-events: none;
  background:
    radial-gradient(58% 62% at 22% 36%, rgba(78, 116, 255, 0.4), transparent 68%),
    radial-gradient(46% 56% at 78% 20%, rgba(186, 96, 255, 0.3), transparent 70%),
    radial-gradient(40% 48% at 52% 6%, rgba(56, 220, 214, 0.2), transparent 72%),
    radial-gradient(34% 40% at 50% 14%, rgba(255, 255, 255, 0.07), transparent 76%);
  filter: blur(8px);
}

.atd-modern__bar {
  gap: clamp(14px, 2.4cqw, 40px);
  border: 1px solid rgba(255, 255, 255, 0.045);
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(25, 27, 36, 0.86), rgba(12, 13, 18, 0.82));
  box-shadow: 0 22px 52px -24px rgba(0, 0, 0, 0.92), inset 0 1px rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(22px) saturate(150%);
  -webkit-backdrop-filter: blur(22px) saturate(150%);
}

.atd-modern__brand {
  color: #f2f3f7;
}

.atd-modern__mark {
  /* a full circle: the shared brand mark is a rounded square, so the disc is cut
     from it by the mark box's own clip rather than by a second svg */
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.42);
}

.atd-modern__item {
  border: 1px solid transparent;
  border-radius: 999px;
  color: #9b9fae;
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  letter-spacing: -0.005em;
  transition: color 0.16s, border-color 0.18s, background 0.18s, box-shadow 0.18s, backdrop-filter 0.18s;
}

/* :hover is carried alongside the proximity flag so the glass still lands when
   the spring is off \u2014 reduced motion, a coarse pointer, a narrow viewport */
.atd-modern__item[data-dock-near="true"],
.atd-modern__item:hover,
.atd-modern__item:focus-visible {
  color: #f4f5f9;
  border-color: rgba(255, 255, 255, 0.055);
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 8px 20px -14px rgba(0, 0, 0, 0.9), inset 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
}

.atd-modern__item[aria-pressed="true"] {
  color: #0a0b10;
  border-color: transparent;
  background: linear-gradient(180deg, #ffffff, #dfe3ef);
  box-shadow: 0 10px 24px -12px rgba(120, 150, 255, 0.75), inset 0 -1px rgba(0, 0, 0, 0.14);
}

.atd-modern__icon,
.atd-glass__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: var(--atd-icon);
  height: var(--atd-icon);
  opacity: 0.72;
  transition: opacity 0.16s;
}

.atd-modern__icon svg,
.atd-glass__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-modern__item[data-dock-near="true"] .atd-modern__icon,
.atd-modern__item[aria-pressed="true"] .atd-modern__icon,
.atd-glass__item[data-dock-near="true"] .atd-glass__icon,
.atd-glass__item[aria-pressed="true"] .atd-glass__icon {
  opacity: 1;
}

.atd-modern__ghost {
  color: #a7abba;
}

.atd-modern__ghost:hover {
  color: #f0f1f6;
  background: rgba(255, 255, 255, 0.06);
}

.atd-modern__cta {
  display: inline-flex;
  gap: var(--atd-gap);
  align-items: center;
  padding: 0 var(--atd-bar-pad) 0 clamp(14px, 1.1cqw, 24px);
  border: 0;
  color: #0a0b10;
  background: linear-gradient(180deg, #ffffff, #d8ddec);
  box-shadow: 0 10px 26px -14px rgba(150, 175, 255, 0.95), inset 0 -1px rgba(0, 0, 0, 0.16);
}

.atd-modern__cta svg {
  box-sizing: border-box;
  width: calc(var(--atd-action-height) - clamp(12px, 0.9cqw, 20px));
  height: calc(var(--atd-action-height) - clamp(12px, 0.9cqw, 20px));
  padding: clamp(4px, 0.3cqw, 7px);
  border-radius: 999px;
  background: rgba(10, 11, 16, 0.1);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-modern__cta:hover {
  box-shadow: 0 16px 32px -14px rgba(150, 175, 255, 1), inset 0 -1px rgba(0, 0, 0, 0.16);
  transform: translateY(-1px);
}

.atd-modern__stage {
  position: absolute;
  top: 58%;
  left: 50%;
  z-index: 4;
  width: min(88cqw, 1120px);
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.atd-modern__eyebrow {
  margin: 0 0 clamp(8px, 0.9cqw, 18px);
  color: #7d84a0;
  font: 400 clamp(8px, 0.62cqw, 13px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.atd-modern__headline {
  /* background-clip: text paints only inside the element box, so at this size a
     1.0-ish line-height would cut the ascenders and descenders out of the fill.
     The padding buys the ink its own room back. */
  margin: 0;
  padding: 0.08em 0 0.14em;
  color: transparent;
  background: linear-gradient(180deg, #ffffff 16%, rgba(255, 255, 255, 0.3));
  background-clip: text;
  -webkit-background-clip: text;
  font-size: clamp(30px, 7.6cqw, 150px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

/* \u2500\u2500 Retro pixel terminal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The field canvas is a small drawing buffer stretched by CSS with
   nearest-neighbour sampling, so its dither pattern arrives as real square
   pixels. Every chrome edge here is square to sit on that same grid. */

.animated-top-dock-component.atd-retro {
  --atd-label: clamp(9px, 0.68cqw, 15px);
  --atd-icon: clamp(10px, 0.78cqw, 17px);
  --atd-brand: clamp(11px, 0.8cqw, 18px);
  background: #0b0819;
}

.atd-retro__field {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}

.atd-retro__vignette {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(124% 90% at 50% 34%, transparent 28%, rgba(6, 4, 16, 0.62) 100%),
    linear-gradient(180deg, rgba(6, 4, 16, 0.6) 0%, transparent 24%, transparent 62%, rgba(6, 4, 16, 0.58) 100%);
}

/* the raster runs at screen resolution, not at the field's pixel scale, so the
   line structure stays a raster instead of banding the chunky artwork */
.atd-retro::before {
  position: absolute;
  inset: 0;
  z-index: 11;
  pointer-events: none;
  content: "";
  opacity: calc(var(--atd-retro-scan, 0.32) * 1.5);
  background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0 1px, transparent 1px 3px);
}

/* Horizontal fit: the bar is one continuous strip and the menu cells own all of
   it. There are no gaps and no rounded ends \u2014 every cell is separated by a rule
   and runs the full height, and the controller renormalises the widths so
   opening one cell takes its room from the neighbours. */
.atd-retro__bar {
  gap: 0;
  padding: 0;
  overflow: hidden;
  border: 2px solid #f4e6c8;
  background: #1a1030;
  box-shadow: 6px 6px 0 rgba(6, 4, 16, 0.62);
}

.atd-retro__brand {
  height: 100%;
  padding: 0 clamp(12px, 1.1cqw, 26px);
  border-right: 2px solid #4b2f7e;
  color: #f9c74f;
  background: #150c28;
  font: 400 var(--atd-brand) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.12em;
}

.atd-retro__dock {
  display: flex;
  flex: 1 1 0;
  gap: 0;
  align-items: stretch;
  min-width: 0;
  height: 100%;
}

.atd-retro__badge {
  display: inline-flex;
  width: var(--atd-icon);
  height: var(--atd-icon);
}

.atd-retro__badge svg,
.atd-retro__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
  shape-rendering: crispEdges;
}

.atd-retro__item {
  height: 100%;
  min-width: 0;
  padding: 0 clamp(6px, 0.5cqw, 12px);
  overflow: hidden;
  border: 0;
  border-right: 2px solid #4b2f7e;
  color: #b9a7e8;
  background: #241548;
  font: 400 var(--atd-label) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.14em;
  transition: color 0.1s steps(2), background 0.1s steps(2);
}

.atd-retro__item[data-dock-near="true"],
.atd-retro__item:focus-visible {
  color: #fff4d6;
  background: #3a2170;
}

.atd-retro__item[aria-pressed="true"] {
  color: #1a1030;
  background: #f9c74f;
}

.atd-retro__icon {
  display: inline-flex;
  flex: none;
  width: var(--atd-icon);
  height: var(--atd-icon);
}

.atd-retro__cta {
  display: inline-flex;
  flex: none;
  gap: var(--atd-gap);
  align-items: center;
  height: 100%;
  padding: 0 clamp(14px, 1.2cqw, 28px);
  border: 0;
  border-left: 2px solid #f4e6c8;
  color: #1a1030;
  background: #f47b5c;
  font: 400 var(--atd-label) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.16em;
  transition: background 0.1s steps(2), color 0.1s steps(2);
  cursor: pointer;
}

.atd-retro__cta:hover {
  color: #1a1030;
  background: #f9c74f;
}

.atd-retro__readout {
  position: absolute;
  bottom: clamp(30px, 4.2cqw, 74px);
  left: 50%;
  z-index: 8;
  display: flex;
  gap: clamp(12px, 2.4cqw, 42px);
  margin: 0;
  color: #a08fd4;
  font: 400 clamp(9px, 0.62cqw, 13px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.2em;
  transform: translateX(-50%);
}

/* \u2500\u2500 Liquid glass \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Vertical fit: the dock leaves the top edge for a rail down the left side. The
   proximity field runs on the y axis, so an item grows taller and leans out to
   the right instead of widening and dropping. The rail is a real
   backdrop-filter panel over the refracting Three.js bead field, so its blur
   samples the same pixels the glass shader refracts. */

.animated-top-dock-component.atd-glass {
  --atd-rail-width: clamp(158px, 12.5cqw, 250px);
  background: #08090d;
}

.atd-glass__field {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* a scrim behind the rail: the bead field is bright enough in places to swallow
   the wordmark, and the panel's own blur cannot darken what it samples */
.atd-glass::before {
  position: absolute;
  inset: 0 auto 0 0;
  z-index: 5;
  width: 42%;
  pointer-events: none;
  content: "";
  background: linear-gradient(90deg, rgba(6, 7, 11, 0.66), rgba(6, 7, 11, 0));
}

.atd-glass__rail {
  position: absolute;
  top: 50%;
  left: clamp(20px, 3.4cqw, 68px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.5cqw, 11px);
  align-items: stretch;
  width: var(--atd-rail-width);
  padding: var(--atd-bar-pad);
  border-radius: clamp(20px, 1.7cqw, 34px);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  box-shadow:
    0 30px 64px -26px rgba(0, 0, 0, 0.92),
    inset 0 1px 0 rgba(255, 255, 255, 0.44),
    inset 0 -1px 0 rgba(255, 255, 255, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(26px) saturate(190%);
  -webkit-backdrop-filter: blur(26px) saturate(190%);
  transform: translateY(-50%);
}

.atd-glass__rail::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  border-radius: inherit;
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 76%, rgba(255, 255, 255, 0.14) 100%);
}

.atd-glass__brand {
  position: relative;
  padding: clamp(6px, 0.5cqw, 12px) clamp(8px, 0.7cqw, 15px);
  color: #fbfbfe;
}

.atd-glass__mark {
  border-radius: clamp(7px, 0.5cqw, 11px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.42), inset 0 0 0 1px rgba(255, 255, 255, 0.3);
}

.atd-glass__hairline {
  height: 1px;
  margin: clamp(2px, 0.2cqw, 5px) clamp(6px, 0.5cqw, 12px);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04));
}

.atd-glass__dock {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.2cqw, 5px);
  align-items: stretch;
}

.atd-glass__item {
  justify-content: flex-start;
  width: 100%;
  border: 1px solid transparent;
  border-radius: clamp(12px, 1cqw, 22px);
  color: rgba(255, 255, 255, 0.66);
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  letter-spacing: -0.005em;
  /* the rail grows downward from each item's own top edge */
  transform-origin: 0 50%;
  transition: color 0.18s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.atd-glass__item[data-dock-near="true"],
.atd-glass__item:focus-visible {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.24);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.07));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.46), 0 8px 18px -10px rgba(0, 0, 0, 0.8);
}

.atd-glass__item[aria-pressed="true"] {
  color: #0d0f16;
  border-color: rgba(255, 255, 255, 0.6);
  background: linear-gradient(180deg, #ffffff, #e6e9f4);
  box-shadow: 0 10px 24px -12px rgba(255, 255, 255, 0.5), inset 0 -1px rgba(0, 0, 0, 0.14);
}

.atd-glass__cta {
  display: inline-flex;
  gap: var(--atd-gap);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 clamp(12px, 1cqw, 22px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #0d0f16;
  background: linear-gradient(180deg, #ffffff, #dfe3f0);
  box-shadow: 0 12px 30px -14px rgba(255, 255, 255, 0.6), inset 0 -1px rgba(0, 0, 0, 0.16);
}

.atd-glass__cta svg {
  width: var(--atd-icon);
  height: var(--atd-icon);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-glass__cta:hover {
  box-shadow: 0 16px 34px -14px rgba(255, 255, 255, 0.75), inset 0 -1px rgba(0, 0, 0, 0.16);
  transform: translateY(-1px);
}

.atd-modern .animated-top-dock-component__caption,
.atd-glass .animated-top-dock-component__caption {
  color: rgba(255, 255, 255, 0.34);
}

.atd-retro .animated-top-dock-component__caption {
  z-index: 12;
  color: #7b6ab0;
}

@container (max-width: 900px) {
  .atd-modern__ghost {
    display: none;
  }

  .atd-modern__item span:last-child,
  .atd-retro__item span:last-child {
    display: none;
  }

  /* the bar is sized by its content now, so a shell this narrow has to give the
     content back: the call to action drops to its glyph rather than pushing the
     cluster past the bar's own max width */
  .atd-modern__cta span {
    display: none;
  }

  .atd-modern__cta {
    padding: 0 var(--atd-bar-pad);
  }

  /* the rail collapses to its icons rather than keeping a 158 px column in a
     card that is only a few hundred pixels wide */
  .animated-top-dock-component.atd-glass {
    --atd-rail-width: auto;
  }

  .atd-glass__item {
    justify-content: center;
  }

  .atd-glass__item span:last-child,
  .atd-glass__word,
  .atd-glass__cta span {
    display: none;
  }

  .atd-glass__cta {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .atd-modern__word {
    display: none;
  }

  .atd-modern__item {
    height: 28px !important;
    transform: none !important;
  }

  .atd-glass__item {
    height: auto !important;
    transform: none !important;
  }

  /* the strip keeps its full-height cells on a phone; only the spring stops */
  .atd-retro__item {
    height: 100% !important;
    transform: none !important;
  }

  .atd-modern__stage {
    top: 62%;
  }

  .atd-retro__readout {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .atd-modern__item,
  .atd-retro__item,
  .atd-glass__item {
    transform: none !important;
  }
}
`;var mr=de(fn()),E4="[data-brand-orbs-island]";function hr(){let t=document.querySelector(E4);if(!t||t.dataset.brandOrbsMounted==="true")return;let a=t.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=pr;let l=document.createElement("div");l.style.width="100%",l.style.height="100%",a.append(e,l),(0,gr.createRoot)(l).render((0,mr.jsx)(dr,{variant:"openai",size:"medium",mode:"dark",speed:1})),t.dataset.brandOrbsMounted="true"}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hr,{once:!0}):hr();})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
