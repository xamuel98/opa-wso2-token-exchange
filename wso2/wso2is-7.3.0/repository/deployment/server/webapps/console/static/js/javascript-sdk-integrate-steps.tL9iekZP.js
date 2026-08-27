import{j as e,r as d,$ as t,ac as i,ad as r,aG as a,af as l}from"./index.C2yHLfvu.js";import{V as x}from"./vertical-stepper.CuDciSdl.js";import"./userstore-constants.BvZwhv9M.js";import{S as u}from"./meta.BIC2Ffyg.js";import"./vite-entry._obyVcBE.js";const y=s=>{const o=()=>{var n;return`[ ${(n=s==null?void 0:s.scope)==null?void 0:n.map(c=>`"${c}"`)} ]`};return`<script>
    var auth = AsgardeoAuth.AsgardeoSPAClient.getInstance();

    auth.initialize({
        signInRedirectURL: "${s.signInRedirectURL}",
        signOutRedirectURL: "${s.signOutRedirectURL}",
        clientID: "${s.clientID}",
        baseUrl: "${s.baseUrl}",
        scope: ${o()}
    });
<\/script>`},v=()=>'<button onClick="auth.signIn()">Log In</button>',f=()=>`<div>
    <!-- Authenticated View --->
    <div id="authenticated-view" style="display: none;">
        <ul>
            <li id="username"></li>
        </ul>
        <button onClick="auth.signOut()">Log Out</button>
    </div>
    <!-- Un-Authenticated View --->
    <div id="unauthenticated-view" style="display: none;">
        <button onClick="auth.signIn()">Log In</button>
    </div>
</div>

<script>
    (async () => {
        let user = undefined;

        // If there are auth search params i.e code, session_state, automatically trigger login.
        // Else, try to see if there's a session.
        if (AsgardeoAuth.SPAUtils.hasAuthSearchParamsInURL()) {
            user = await auth.signIn({ callOnlyOnRedirect: true });
        } else {
            user = await auth.trySignInSilently();
        }

        // Update the UI accordingly.
        if (user) {
            document.getElementById("authenticated-view").style.display = "block";
            document.getElementById("unauthenticated-view").style.display = "none";
            document.getElementById("username").innerHTML = user.username;
        } else {
            document.getElementById("authenticated-view").style.display = "none";
            document.getElementById("unauthenticated-view").style.display = "block";
        }
    })();
<\/script>`,I=s=>{const{configurationOptions:o,sdkConfig:n,["data-componentid"]:c}=s,h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["There are two ways that you can integrate the ",e.jsx(t,{children:"@asgardeo/auth-spa"})," SDK to your"," ","JavaScript application. Pick one of the following approaches based on your requirement."]}),e.jsx(r,{as:"h4",children:"Load from a CDN"}),e.jsxs(i,{children:["You can pull down the ",e.jsx(t,{children:"@asgardeo/auth-spa"})," SDK from the ",e.jsx(t,{children:"unpkg"})," ","content delivery network (CDN)."]}),e.jsx("div",{className:"code-segment",children:e.jsx(a,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"htmlmixed",sourceCode:`<script src="${u.javascript.cdn}"><\/script>`})}),e.jsx(r,{as:"h4",children:"Install using a package manager"}),e.jsxs(i,{children:["You can also install the ",e.jsx(t,{children:"@asgardeo/auth-spa"})," package from ",e.jsx(t,{children:"npm"})," or"," ",e.jsx(t,{children:"yarn"})," package manager."]}),e.jsx("div",{className:"code-segment",children:e.jsx(a,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"javascript",sourceCode:u.javascript.npmInstallCommand})})]}),p=()=>{if(!n)return null;const j=()=>o(e.jsxs(i,{children:["To initialize the SDK, use the ",e.jsx(t,{children:"getInstance()"})," function in the SDK and pass in"," ","the required configurations to the ",e.jsx(t,{children:"auth.initialize()"})," function."]}));return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Copy and use the following code within the root file of your project"," ",e.jsx(t,{children:"E.g., index.html"})," to configure ",e.jsx(t,{children:"AsgardeoSPAClient"})," for your application."]}),e.jsx(l,{hidden:!0}),j(),e.jsx(l,{hidden:!0}),e.jsx("div",{className:"code-segment",children:e.jsx(a,{height:"100%",showLineNumbers:!0,withClipboardCopy:!0,language:"javascript",sourceCode:y({baseUrl:n==null?void 0:n.baseUrl,clientID:n.clientID,scope:n.scope,signInRedirectURL:n.signInRedirectURL,signOutRedirectURL:n.signOutRedirectURL}),options:{lineWrapping:!0},theme:"dark",readOnly:!0})})]})},g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["The created instance of the SDK could be used to access the session state that contains"," ","information such as the email address of the authenticated user and the methods that are"," ","required for implementing authentication."]}),e.jsx(r,{as:"h4",children:"Add a Login Button"}),e.jsxs(i,{children:["We can call the ",e.jsx(t,{children:"signIn()"})," function using the created instance to easily"," ","implement a ",e.jsx("strong",{children:"login button"}),"."]}),e.jsx("div",{className:"code-segment",children:e.jsx(a,{oneLiner:!0,readOnly:!0,withClipboardCopy:!0,language:"javascript",sourceCode:v()})}),e.jsxs(i,{spaced:"top",children:["Similarly to the above step, we can use the ",e.jsx(t,{children:"signOut()"})," function to implement a"," ",e.jsx("strong",{children:"logout button"}),"."]}),e.jsx(r,{as:"h4",children:"Show Authenticated User's Information"}),e.jsxs(i,{children:["The following code snippet demonstrates the process of accesing the authenticated user's"," ","information together with other functions from the SDK."]}),e.jsx("div",{className:"code-segment",children:e.jsx(a,{height:"100%",showLineNumbers:!0,withClipboardCopy:!0,language:"javascript",sourceCode:f(),options:{lineWrapping:!0},theme:"dark",readOnly:!0})})]}),m=[{stepContent:h(),stepTitle:"Install SDK"},{stepContent:p(),stepTitle:e.jsxs(d.Fragment,{children:["Configure ",e.jsx(t,{children:"AsgardeoSPAClient"})]})},{stepContent:g(),stepTitle:"Use API"}];return e.jsx(d.Fragment,{children:e.jsx(x,{alwaysOpen:!0,isSidePanelOpen:!0,isNextEnabled:!0,stepContent:m,"data-testid":`${c}-vertical-stepper`})})};I.defaultProps={"data-componentid":"react-sdk-integrate-steps"};export{I as JavaScriptSDKIntegrateSteps};
