import{hy as w,r as y,al as R}from"./index.C2yHLfvu.js";var V={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=y,p=w;function z(r,u){return r===u&&(r!==0||1/r===1/u)||r!==r&&u!==u}var D=typeof Object.is=="function"?Object.is:z,M=p.useSyncExternalStore,h=c.useRef,x=c.useEffect,O=c.useMemo,C=c.useDebugValue;j.useSyncExternalStoreWithSelector=function(r,u,v,n,f){var o=h(null);if(o.current===null){var t={hasValue:!1,value:null};o.current=t}else t=o.current;o=O(function(){function m(e){if(!d){if(d=!0,i=e,e=n(e),f!==void 0&&t.hasValue){var a=t.value;if(f(a,e))return s=a}return s=e}if(a=s,D(i,e))return a;var b=n(e);return f!==void 0&&f(a,b)?(i=e,a):(i=e,s=b)}var d=!1,i,s,E=v===void 0?null:v;return[function(){return m(u())},E===null?void 0:function(){return m(E())}]},[u,v,n,f]);var l=M(r,o[0],o[1]);return x(function(){t.hasValue=!0,t.value=l},[l]),C(l),l};V.exports=j;var F=V.exports;const I=R(F);export{I as u,F as w};
