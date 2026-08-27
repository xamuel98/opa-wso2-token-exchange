import{e as y,r as h,u as g,b5 as S,j as e,ac as r,Z as o,aK as f,ab as c,aG as v,aA as a,aW as w,ad as A}from"./index.C2yHLfvu.js";import{A as C}from"./application-selection-modal.rl4ucIBf.js";import{V as L}from"./vertical-stepper.CuDciSdl.js";import"./userstore-constants.BvZwhv9M.js";import"./vite-entry._obyVcBE.js";import"./application-list.Su51iiox.js";import"./confirmationModal-alert.f4fbu09_.js";const b="/console/static/media/build-login-flow-01.18AH1CJn.png",k="/console/static/media/build-login-flow-02.CsZXTFSO.png",P="/console/static/media/build-login-flow-03.BE_rFpHz.png",q="/console/static/media/conditional-auth.CCu8lRZz.png",U=x=>{const{["data-componentid"]:l}=x,{t:n}=y(),[d,p]=h.useState(!1),i=g(t=>t.config.ui.features),u=g(t=>{var s;return(s=t==null?void 0:t.auth)==null?void 0:s.allowedScopes}),m=h.useMemo(()=>{var t,s;return S(i==null?void 0:i.applications,(s=(t=i==null?void 0:i.applications)==null?void 0:t.scopes)==null?void 0:s.read,u)},[i,u]),j=[{stepContent:e.jsx(r,{children:e.jsxs(o,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectApplication.content",children:["Choose the ",m?e.jsx(f,{external:!1,onClick:()=>p(!0),children:"application "}):"application","for which you want to set up HYPR login."]})}),stepTitle:n("extensions:develop.identityProviders.hypr.quickStart.steps.selectApplication.heading")},{stepContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(o,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectDefaultConfig.content",children:["Go to ",e.jsx("strong",{children:"Login Flow"})," tab and click on the ",e.jsx("strong",{children:"Add Sign In Option"}),"button inside the login box. And select a HYPR connection."]})}),e.jsx(c,{inline:!0,transparent:!0,icon:b,size:"huge"}),e.jsx(c,{inline:!0,transparent:!0,icon:k,size:"huge"}),e.jsx(c,{inline:!0,transparent:!0,icon:P,size:"huge"})]}),stepTitle:e.jsxs(o,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectDefaultConfig.heading",children:["Add a ",e.jsx("strong",{children:"HYPR"})," connection"]})},{stepContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(o,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.conditionalAuth",children:["Turn on ",e.jsx("strong",{children:"Conditional Authentication"})," by switching the toggle and add the following conditional authentication script."]})}),e.jsx("div",{className:"connection-code-segment",children:e.jsx(v,{height:"100%",readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:`var onLoginRequest = function onLoginRequest(context) {

        var fedUser;
        executeStep(1,
            {
                onSuccess: function (context) {
                    var idpName = context.steps[1].idp;

                    if (idpName === "HYPR") {
                        fedUser = context.currentKnownSubject;

                        var associatedUser = getAssociatedLocalUser(fedUser);
                        if (associatedUser == null) {
                            var claimMap = {};
                            claimMap["http://wso2.org/claims/username"] = fedUser.username;
                            var storedLocalUser = getUniqueUserWithClaimValues(claimMap, context);
                            if (storedLocalUser !== null) {
                                doAssociationWithLocalUser(fedUser, storedLocalUser.username,
                                    storedLocalUser.tenantDomain, storedLocalUser.userStoreDomain);
                            }
                        }
                    }
                }
            });
    };`})}),e.jsx(r,{children:e.jsxs(o,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.update",children:["Click ",e.jsx("strong",{children:"Update"})," to confirm."]})}),e.jsx(c,{inline:!0,transparent:!0,icon:q,size:"huge"})]}),stepTitle:n("extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.heading")}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{"data-testid":l,className:"authenticator-quickstart-content",children:[e.jsx(a.Row,{textAlign:"left",children:e.jsxs(a.Column,{width:16,children:[e.jsx(w,{className:"mb-2",title:n("extensions:develop.identityProviders.hypr.quickStart.heading"),imageSpaced:!1,bottomMargin:!1}),e.jsx(A,{subHeading:!0,as:"h6",children:n("extensions:develop.identityProviders.hypr.quickStart.subHeading")})]})}),e.jsx(a.Row,{textAlign:"left",children:e.jsx(a.Column,{width:16,children:e.jsx(L,{alwaysOpen:!0,isSidePanelOpen:!0,stepContent:j,isNextEnabled:!0})})})]}),d&&e.jsx(C,{"data-testid":`${l}-application-selection-modal`,open:d,onClose:()=>p(!1),heading:n("extensions:develop.identityProviders.hypr.quickStart.addLoginModal.heading"),subHeading:n("extensions:develop.identityProviders.hypr.quickStart.addLoginModal.subHeading")})]})};U.defaultProps={"data-componentid":"hypr-authenticator-quick-start"};export{U as default};
