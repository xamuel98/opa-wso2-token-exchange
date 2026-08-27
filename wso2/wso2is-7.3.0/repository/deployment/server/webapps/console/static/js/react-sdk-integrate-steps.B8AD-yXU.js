import{j as e,r as c,$ as t,ac as n,aG as s,aI as l,af as u,ae as d,ad as p}from"./index.C2yHLfvu.js";import{V as A}from"./vertical-stepper.CuDciSdl.js";import"./userstore-constants.BvZwhv9M.js";import{S as i}from"./meta.BIC2Ffyg.js";import{S as b}from"./models.BfPBW2ux.js";import{Prerequisites as v}from"./prerequisites.C2XLAzfa.js";import"./vite-entry._obyVcBE.js";const R=()=>'import { AuthProvider } from "@asgardeo/auth-react";',w=()=>'import { useAuthContext } from "@asgardeo/auth-react";',I=o=>{const h=()=>{var a;return`[ ${(a=o==null?void 0:o.scope)==null?void 0:a.map(r=>`"${r}"`)} ]`};return`import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
    <AuthProvider
        config={ {
            signInRedirectURL: "${o.signInRedirectURL}",
            signOutRedirectURL: "${o.signOutRedirectURL}",
            clientID: "${o.clientID}",
            baseUrl: "${o.baseUrl}",
            scope: ${h()}
        } }
    >
        { /* Rest of your application.  */ }
    </AuthProvider>
);

render((<Index />), document.getElementById("root"));`},L=()=>"const { state, signIn, signOut } = useAuthContext();",k=()=>"<button onClick={ () => signIn() }>Login</button>",O=()=>`import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";

function App() {

  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                <li>{state.username}</li>
              </ul>

              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button onClick={() => signIn()}>Login</button>
      }
    </div>
  );
}

export default App;`,S=o=>{const{configurationOptions:h,productName:a,sdkConfig:r,["data-componentid"]:m}=o,x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["Run the following command to install ",e.jsx(t,{children:"@asgardeo/auth-react"})," from the npm registry."]}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"htmlmixed",sourceCode:i.react.npmInstallCommand})})]}),g=()=>{if(!r)return null;const f=()=>h(e.jsxs(n,{children:[e.jsx(t,{children:"AuthProvider"})," takes a config object as a prop that can be used to initialize the"," ","SDK instance. Pass the relevant configurations to get the SDK to work with your application."]}));return e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["Asgardeo React SDK exposes the ",e.jsx(t,{children:"AuthProvider"})," component, which helps you"," ","easily integrate ",a," to your application."]}),e.jsxs(n,{children:["First, import the ",e.jsx(t,{children:"AuthProvider"})," component from ",e.jsx(t,{children:"@asgardeo/auth-react"})," ","in the file which containing the ",e.jsx("strong",{children:"root component"}),"."]}),e.jsx(l,{type:"info",content:e.jsxs(n,{className:"message-info-text",children:["Typically, the ",e.jsx("strong",{children:"root component"})," of a React application is located in"," ","the ",e.jsx(t,{children:"index.*"})," file."]})}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:R()})}),e.jsxs(n,{spaced:"top",children:["Then, wrap your ",e.jsx("strong",{children:"root component"})," with the ",e.jsx(t,{children:"AuthProvider"}),"."]}),e.jsx(u,{hidden:!0}),f(),e.jsx(u,{hidden:!0}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{height:"100%",showLineNumbers:!0,withClipboardCopy:!0,language:"typescript",sourceCode:I({baseUrl:r==null?void 0:r.baseUrl,clientID:r.clientID,scope:r.scope,signInRedirectURL:r.signInRedirectURL,signOutRedirectURL:r.signOutRedirectURL}),options:{lineWrapping:!0},theme:"dark",readOnly:!0})}),e.jsxs(n,{spaced:"top",children:["Go to our ",e.jsx(d,{link:i.react.links.reactClientConfig,showEmptyLinkText:!0,children:"documentation"})," to learn"," ","more about other configurations supported by the SDK."]})]})},j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["The ",e.jsx(t,{children:"useAuthContext()"})," hook provided by the SDK could be used to access the"," ","session state that contains information such as the email address of the authenticated user"," ","and the methods that are required for implementing authentication."]}),e.jsx(l,{type:"info",content:e.jsxs(n,{className:"message-info-text",children:["Since ",e.jsx(t,{children:"AuthProvider"})," wraps the root component of the"," ","application, ",e.jsx(t,{children:"useAuthContext()"})," hook can be imported and used with any"," ","React component in the application."]})}),e.jsxs(n,{children:["Import the ",e.jsx(t,{children:"useAuthContext()"})," hook from ",e.jsx(t,{children:"@asgardeo/auth-react"}),"."]}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:w()})}),e.jsx(n,{spaced:"top",children:"And then inside your components, you can access the context as follows."}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:L()})}),e.jsx(p,{as:"h4",children:"Add a Login Button"}),e.jsxs(n,{children:["We can use the ",e.jsx(t,{children:"signIn()"})," method from ",e.jsx(t,{children:"useContext()"})," to easily"," ","implement a ",e.jsx("strong",{children:"login button"}),"."]}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:k()})}),e.jsxs(n,{spaced:"top",children:["Similarly to the above step, we can use the ",e.jsx(t,{children:"signOut()"})," method from"," ",e.jsx(t,{children:"useContext()"})," to implement a ",e.jsx("strong",{children:"logout button"}),"."]}),e.jsx(p,{as:"h4",children:"Show Authenticated User's Information"}),e.jsxs(n,{children:["The following code snippet demonstrates the usage of the ",e.jsx(t,{children:"state"})," object together"," ","with other methods from the context."]}),e.jsx("div",{className:"code-segment",children:e.jsx(s,{height:"100%",showLineNumbers:!0,withClipboardCopy:!0,language:"typescript",options:{lineWrapping:!0},theme:"dark",sourceCode:O()})}),e.jsx(u,{hidden:!0}),e.jsxs(n,{spaced:"top",children:["Go to our ",e.jsx(d,{link:i.react.links.useContextDocumentation,showEmptyLinkText:!0,children:"documentation"})," ","to read more about all the available states and methods of the ",e.jsx(t,{children:"useAuthContext()"})," ","hook API."]})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["The Asgardeo React SDK provides several options to secure routes in your application."," "]}),e.jsxs(n,{children:["For more information, read our ",e.jsx(d,{link:i.react.links.routingOptions,showEmptyLinkText:!0,children:"documentation"}),". And also checkout the ",e.jsx(d,{link:i.react.samples.routing.repository,showEmptyLinkText:!0,children:"sample"})," ","and go through the source code."]})]}),y=[{stepContent:x(),stepTitle:"Install SDK"},{stepContent:g(),stepTitle:e.jsxs(c.Fragment,{children:["Configure the ",e.jsx(t,{children:"AuthProvider"})]})},{stepContent:j(),stepTitle:e.jsx(c.Fragment,{children:"Use API"})},{stepContent:C(),stepTitle:e.jsx(c.Fragment,{children:"Add Routing (Optional)"})}];return e.jsxs(c.Fragment,{children:[e.jsx(v,{technology:b.REACT}),e.jsx(A,{alwaysOpen:!0,isSidePanelOpen:!0,isNextEnabled:!0,stepContent:y,"data-testid":`${m}-vertical-stepper`})]})};S.defaultProps={"data-componentid":"react-sdk-integrate-steps"};export{S as ReactSDKIntegrateSteps};
