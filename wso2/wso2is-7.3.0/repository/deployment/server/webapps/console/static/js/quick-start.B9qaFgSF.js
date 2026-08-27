import{e as p,r as u,j as e,ac as n,Z as i,aK as h,ab as o,aG as g,aA as s,aW as x,ad as m}from"./index.C2yHLfvu.js";import{A as y}from"./application-selection-modal.rl4ucIBf.js";import{V as f}from"./vertical-stepper.CuDciSdl.js";import"./userstore-constants.BvZwhv9M.js";import"./vite-entry._obyVcBE.js";import"./application-list.Su51iiox.js";import"./confirmationModal-alert.f4fbu09_.js";const j="/console/static/media/build-login-flow.B6XgCJ_R.png",v="/console/static/media/conditional-auth.CCu8lRZz.png",S="/console/static/media/customize-steps.DiqIz39Q.png",C=c=>{const{["data-componentid"]:r}=c,{t}=p(),[a,d]=u.useState(!1),l=[{stepContent:e.jsx(n,{children:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectApplication.content",children:["Choose the",e.jsx(h,{external:!1,onClick:()=>d(!0),children:" application"}),"for which you want to set up HYPR login."]})}),stepTitle:t("extensions:develop.identityProviders.hypr.quickStart.steps.selectApplication.heading")},{stepContent:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectDefaultConfig.content",children:["Go to the ",e.jsx("strong",{children:"Login Flow"})," tab and click on ",e.jsx("strong",{children:"Start with default configuration"}),"."]})}),e.jsx(o,{inline:!0,transparent:!0,icon:j,size:"huge"})]}),stepTitle:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.selectDefaultConfig.heading",children:["Select ",e.jsx("strong",{children:"Start with default configuration"})]})},{stepContent:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.addHypr",children:["Add HYPR authenticator to step 1 by clicking on the ",e.jsx("strong",{children:"Add Authentication"})," button."]})}),e.jsx(o,{inline:!0,transparent:!0,icon:S,size:"huge"}),e.jsx(n,{children:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.conditionalAuth",children:["Turn on ",e.jsx("strong",{children:"Conditional Authentication"})," by switching the toggle and add the following conditional authentication script."]})}),e.jsx("div",{className:"connection-code-segment",children:e.jsx(g,{height:"100%",readOnly:!0,withClipboardCopy:!0,language:"typescript",sourceCode:`var onLoginRequest = function onLoginRequest(context) {

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
    };`})}),e.jsx(n,{children:e.jsxs(i,{i18nKey:"extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.update",children:["Click ",e.jsx("strong",{children:"Update"})," to confirm."]})}),e.jsx(o,{inline:!0,transparent:!0,icon:v,size:"huge"})]}),stepTitle:t("extensions:develop.identityProviders.hypr.quickStart.steps.configureLogin.heading")}];return e.jsxs(e.Fragment,{children:[e.jsxs(s,{"data-testid":r,className:"authenticator-quickstart-content",children:[e.jsx(s.Row,{textAlign:"left",children:e.jsxs(s.Column,{width:16,children:[e.jsx(x,{className:"mb-2",title:t("extensions:develop.identityProviders.hypr.quickStart.heading"),imageSpaced:!1,bottomMargin:!1}),e.jsx(m,{subHeading:!0,as:"h6",children:t("extensions:develop.identityProviders.hypr.quickStart.subHeading")})]})}),e.jsx(s.Row,{textAlign:"left",children:e.jsx(s.Column,{width:16,children:e.jsx(f,{alwaysOpen:!0,isSidePanelOpen:!0,stepContent:l,isNextEnabled:!0})})})]}),a&&e.jsx(y,{"data-testid":`${r}-application-selection-modal`,open:a,onClose:()=>d(!1),heading:t("extensions:develop.identityProviders.hypr.quickStart.addLoginModal.heading"),subHeading:t("extensions:develop.identityProviders.hypr.quickStart.addLoginModal.subHeading")})]})};C.defaultProps={"data-componentid":"hypr-authenticator-quick-start"};export{C as default};
