import{r as c,di as p,j as m,hk as f,dj as g}from"./index.C2yHLfvu.js";const C={A:0,B:60,C:120,D:180,E:240,F:300},l={},u=e=>{if(l[e])return l[e];if(typeof e!="string"||e.trim()==="")return null;const t=e.split("").reduce((d,h)=>d+h.charCodeAt(0),0)%360,n=e[0].toUpperCase(),s=C[n]||t,o=Math.random()*10+70,a=Math.random()*10+90,i=`hsl(${s} 80% ${o}% / ${a}%)`;return l[e]=i,i},y=e=>{const[r,t]=c.useState(e),[n,s]=c.useState(u(e));return c.useEffect(()=>{s(u(r))},[r]),{color:n,updateText:a=>{t(a)}}},w=c.forwardRef((e,r)=>{var{className:t,children:n,randomBackgroundColor:s,backgroundColorRandomizer:o}=e,a=p(e,["className","children","randomBackgroundColor","backgroundColorRandomizer"]);const i=c.useMemo(()=>o||(typeof n=="string"?n:""),[n,o]),{color:d}=y(i);return m.jsx(f,Object.assign({ref:r,className:g("oxygen-avatar","OxygenAvatar-root",t),sx:{bgcolor:s?d:void 0}},a,{children:n}))});function A(e){var r=document.getElementsByTagName("head")[0],t=document.createElement("style");t.setAttribute("type","text/css"),t.appendChild(document.createTextNode(e)),r.appendChild(t)}A(`/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
.OxygenAvatar-root {
  text-transform: capitalize;
}`);export{w as A};
