import{_ as mo}from"./vite-entry._obyVcBE.js";import{hi as ho,br as m,P as E,y as To,gL as yo,q as R,hj as wo}from"./index.C2yHLfvu.js";import{P as e}from"./branding-preferences.BK0OOdhM.js";import{B as f,L as $,P as B}from"./branding-preferences-constants.DS4oUUu0.js";import"./userstore-constants.BvZwhv9M.js";const L=D=>ho(D).toHex8String(),_={buttons:{externalConnection:{base:{background:{backgroundColor:"#24292e"},border:{borderRadius:"4px"},font:{color:"#ffffff"}}},primary:{base:{border:{borderRadius:"4px"},font:{color:"#ffffff"}}},secondary:{base:{border:{borderRadius:"4px"},font:{color:"#000000"}}}},colors:{alerts:{error:{contrastText:"",dark:"",inverted:"",light:"",main:"#ff000054"},info:{contrastText:"",dark:"#01579b",inverted:"",light:"#03a9f4",main:"#1971c233"},neutral:{contrastText:"",dark:"",inverted:"",light:"",main:"#343a4033"},warning:{contrastText:"",dark:"",inverted:"",light:"",main:"#f08c0033"}},background:{body:{contrastText:"",dark:"",inverted:"",light:"",main:"#17191a"},surface:{contrastText:"",dark:"#1e2021",inverted:"#17191a",light:"#2b2d2e",main:"#242627"}},illustrations:{accent1:{contrastText:"",dark:"",inverted:"",light:"",main:"#3865B5"},accent2:{contrastText:"",dark:"",inverted:"",light:"",main:"#19BECE"},accent3:{contrastText:"",dark:"",inverted:"",light:"",main:"#FFFFFF"},primary:{contrastText:"",dark:"",inverted:"",light:"",main:"#FF7300"},secondary:{contrastText:"",dark:"",inverted:"",light:"",main:"#E0E1E2"}},outlined:{default:"#3f4042"},primary:{contrastText:"",dark:"",inverted:"",light:"",main:"#FF7300"},secondary:{contrastText:"",dark:"",inverted:"",light:"",main:"#ffffff"},text:{primary:"#EBEBEF",secondary:"#B9B9C6"}},footer:{border:{borderColor:""},font:{color:""}},images:{favicon:{imgURL:void 0},logo:{altText:void 0,imgURL:void 0},myAccountLogo:{altText:void 0,imgURL:void 0,title:"Account"}},inputs:{base:{background:{backgroundColor:"#000000"},border:{borderColor:"",borderRadius:"4px"},font:{color:""},labels:{font:{color:""}}}},loginBox:{background:{backgroundColor:""},border:{borderColor:"",borderRadius:"12px",borderWidth:"1px"},font:{color:""}},loginPage:{background:{backgroundColor:""},font:{color:""}},typography:{font:{fontFamily:f.DEFAULT_FONT_FROM_THEME},heading:{font:{color:""}}}},P={buttons:{externalConnection:{base:{background:{backgroundColor:"#FFFFFF"},border:{borderRadius:"4px"},font:{color:L("rgba(0, 0, 0, 0.87)")}}},primary:{base:{border:{borderRadius:"4px"},font:{color:L("rgba(255, 255, 255, 0.9)")}}},secondary:{base:{border:{borderRadius:"4px"},font:{color:L("rgba(0, 0, 0, 0.87)")}}}},colors:{alerts:{error:{contrastText:"",dark:"",inverted:"",light:"",main:"#ffd8d8"},info:{contrastText:"",dark:"",inverted:"",light:"",main:"#eff7fd"},neutral:{contrastText:"",dark:"",inverted:"",light:"",main:"#f8f8f9"},warning:{contrastText:"",dark:"",inverted:"",light:"",main:"#fff6e7"}},background:{body:{contrastText:"",dark:"",inverted:"",light:"",main:"#fbfbfb"},surface:{contrastText:"",dark:"#F6F4F2",inverted:"#212a32",light:"#f9fafb",main:"#ffffff"}},illustrations:{accent1:{contrastText:"",dark:"",inverted:"",light:"",main:"#3865B5"},accent2:{contrastText:"",dark:"",inverted:"",light:"",main:"#19BECE"},accent3:{contrastText:"",dark:"",inverted:"",light:"",main:"#FFFFFF"},primary:{contrastText:"",dark:"",inverted:"",light:"",main:"#FF7300"},secondary:{contrastText:"",dark:"",inverted:"",light:"",main:"#E0E1E2"}},outlined:{default:"#dadce0"},primary:{contrastText:"",dark:"",inverted:"",light:"",main:"#FF7300"},secondary:{contrastText:"",dark:"",inverted:"",light:"",main:"#E0E1E2"},text:{primary:L("rgba(0,0,0,.87)"),secondary:L("rgba(0,0,0,.4)")}},footer:{border:{borderColor:""},font:{color:""}},images:{favicon:{imgURL:void 0},logo:{altText:void 0,imgURL:void 0},myAccountLogo:{altText:void 0,imgURL:void 0,title:"Account"}},inputs:{base:{background:{backgroundColor:"#FFFFFF"},border:{borderColor:"",borderRadius:"4px"},font:{color:""},labels:{font:{color:""}}}},loginBox:{background:{backgroundColor:""},border:{borderColor:"",borderRadius:"12px",borderWidth:"1px"},font:{color:""}},loginPage:{background:{backgroundColor:""},font:{color:""}},typography:{font:{fontFamily:f.DEFAULT_FONT_FROM_THEME},heading:{font:{color:""}}}},Co={[e.LIGHT]:P,[e.DARK]:_},vo={[e.LIGHT]:{colors:{headerBackground:"#f8f8fa",headerBorderColor:"#e9e9e9",pageBackground:P.colors.background.body.main,primary:P.colors.primary,secondary:P.colors.secondary},displayName:"Light",type:e.LIGHT},[e.DARK]:{colors:{headerBackground:"#121016",headerBorderColor:"#3c3c3c",pageBackground:_.colors.background.body.main,primary:_.colors.primary,secondary:_.colors.secondary},displayName:"Dark",type:e.DARK}};class ko{constructor(){}static getBrandingPreferenceInternalFallbacks(o){var a,i,n,c,l,s,u,t,d,g,p,b,v,k,x,h,T,w,C,A;const r=F=>To(F,`${window.AppUtils.getConfig().clientOrigin}/${yo.removeSlashesFromPath(window.AppUtils.getConfig().appBase)!==""?yo.removeSlashesFromPath(window.AppUtils.getConfig().appBase)+"/":""}libs/themes/${o}`);return{organizationDetails:{},theme:{[e.LIGHT]:{images:{favicon:{imgURL:r(((n=(i=(a=window.AppUtils)==null?void 0:a.getConfig())==null?void 0:i.ui)==null?void 0:n.appFaviconPath)??"")},logo:{imgURL:r(((s=(l=(c=window.AppUtils)==null?void 0:c.getConfig())==null?void 0:l.ui)==null?void 0:s.appLogoPath)??"")},myAccountLogo:{imgURL:r(((g=(d=(t=(u=window.AppUtils)==null?void 0:u.getConfig())==null?void 0:t.ui)==null?void 0:d.appLogo)==null?void 0:g.defaultLogoPath)??window.AppUtils.getConfig().ui.appLogoPath??"")}}},[e.DARK]:{images:{favicon:{imgURL:r(((v=(b=(p=window.AppUtils)==null?void 0:p.getConfig())==null?void 0:b.ui)==null?void 0:v.appFaviconPath)??"")},logo:{imgURL:r(((h=(x=(k=window.AppUtils)==null?void 0:k.getConfig())==null?void 0:x.ui)==null?void 0:h.appWhiteLogoPath)??"")},myAccountLogo:{imgURL:r(((A=(C=(w=(T=window.AppUtils)==null?void 0:T.getConfig())==null?void 0:w.ui)==null?void 0:C.appLogo)==null?void 0:A.defaultWhiteLogoPath)??window.AppUtils.getConfig().ui.appWhiteLogoPath??"")}}}}}}static getThemeSwatchConfigs(o){const r="#f8f8fa",a="#e9e9e9",i="#F5F6F6",n="#FF7300",c="#616161";return Object.prototype.hasOwnProperty.call(vo,o)?vo[o]:{colors:{headerBackground:r,headerBorderColor:a,pageBackground:i,primary:{main:n},secondary:{main:c}},displayName:"Light",type:e.LIGHT}}static getThemes(){return m(Co)}static getLayouts(){return m($)}static getWebSafeFonts(){return["Arial","Arial Black","Verdana","Tahoma","Trebuchet MS","Impact","Times New Roman","Didot","Georgia","American Typewriter","Andalé Mono","Courier","Lucida Console ","Monaco","Bradley Hand","Brush Script MT","Luminari","Comic Sans MS",f.DEFAULT_FONT_FROM_THEME]}static getThemeSkeleton(o){var l,s,u,t,d,g,p,b,v,k,x,h,T,w,C,A,F,I,M,S,H,U,O,N,G,W,K,j,V,z,Y,q,J,Q,X,Z,oo,ro,ao,eo,to,io,no,co,lo,so,uo,go,po,bo,fo;if(!o)return;const r=E(o[o.activeTheme].footer.font.color)?"inherit":o[o.activeTheme].footer.font.color,a=E(o[o.activeTheme].typography.heading.font.color)?"inherit":o[o.activeTheme].typography.heading.font.color,i=E(o[o.activeTheme].loginBox.font.color)?"inherit":o[o.activeTheme].loginBox.font.color,n=E(o[o.activeTheme].inputs.base.font.color)?"inherit":o[o.activeTheme].inputs.base.font.color,c=E(o[o.activeTheme].inputs.base.labels.font.color)?"inherit":o[o.activeTheme].inputs.base.labels.font.color;return`
        ${o[o.activeTheme].typography.font.importURL?`@import url(${o[o.activeTheme].typography.font.importURL});`:""}

        :root {
        --asg-colors-primary-main: ${o[o.activeTheme].colors.primary.main};
        --asg-colors-secondary-main: ${o[o.activeTheme].colors.secondary.main};
        --asg-colors-background-body-main: ${(s=(l=o[o.activeTheme].colors.background)==null?void 0:l.body)==null?void 0:s.main};
        --asg-colors-background-surface-main: ${(t=(u=o[o.activeTheme].colors.background)==null?void 0:u.surface)==null?void 0:t.main};
        --asg-colors-background-surface-light: ${(g=(d=o[o.activeTheme].colors.background)==null?void 0:d.surface)==null?void 0:g.light};
        --asg-colors-background-surface-dark: ${(b=(p=o[o.activeTheme].colors.background)==null?void 0:p.surface)==null?void 0:b.dark};
        --asg-colors-background-surface-inverted: ${(k=(v=o[o.activeTheme].colors.background)==null?void 0:v.surface)==null?void 0:k.inverted};
        --asg-colors-outlined-default: ${(x=o[o.activeTheme].colors.outlined)==null?void 0:x.default};
        --asg-colors-text-primary: ${(h=o[o.activeTheme].colors.text)==null?void 0:h.primary};
        --asg-colors-text-secondary: ${(T=o[o.activeTheme].colors.text)==null?void 0:T.secondary};
        --asg-colors-alerts-error-main: ${(C=(w=o[o.activeTheme].colors.alerts)==null?void 0:w.error)==null?void 0:C.main};
        --asg-colors-alerts-neutral-main: ${(F=(A=o[o.activeTheme].colors.alerts)==null?void 0:A.neutral)==null?void 0:F.main};
        --asg-colors-alerts-info-main: ${(M=(I=o[o.activeTheme].colors.alerts)==null?void 0:I.info)==null?void 0:M.main};
        --asg-colors-alerts-warning-main: ${(H=(S=o[o.activeTheme].colors.alerts)==null?void 0:S.warning)==null?void 0:H.main};
        --asg-colors-illustrations-primary-main: ${(O=(U=o[o.activeTheme].colors.illustrations)==null?void 0:U.primary)==null?void 0:O.main};
        --asg-colors-illustrations-secondary-main: ${(G=(N=o[o.activeTheme].colors.illustrations)==null?void 0:N.secondary)==null?void 0:G.main};
        --asg-colors-illustrations-accent1-main: ${(K=(W=o[o.activeTheme].colors.illustrations)==null?void 0:W.accent1)==null?void 0:K.main};
        --asg-colors-illustrations-accent2-main: ${(V=(j=o[o.activeTheme].colors.illustrations)==null?void 0:j.accent2)==null?void 0:V.main};
        --asg-colors-illustrations-accent3-main: ${(Y=(z=o[o.activeTheme].colors.illustrations)==null?void 0:z.accent3)==null?void 0:Y.main};

        /* Components */
        --asg-footer-text-color: ${r};
        --asg-footer-border-color: ${((J=(q=o[o.activeTheme].footer)==null?void 0:q.border)==null?void 0:J.borderColor)||"var(--asg-colors-outlined-default)"};
        --asg-primary-font-family: ${o[o.activeTheme].typography.font.fontFamily};
        --asg-heading-text-color: ${a};
        --asg-primary-button-base-text-color: ${o[o.activeTheme].buttons.primary.base.font.color};
        --asg-primary-button-base-border-radius: ${o[o.activeTheme].buttons.primary.base.border.borderRadius};
        --asg-secondary-button-base-text-color: ${o[o.activeTheme].buttons.secondary.base.font.color};
        --asg-secondary-button-base-border-radius: ${o[o.activeTheme].buttons.secondary.base.border.borderRadius};
        --asg-external-login-button-base-background-color: ${o[o.activeTheme].buttons.externalConnection.base.background.backgroundColor};
        --asg-external-login-button-base-text-color: ${o[o.activeTheme].buttons.externalConnection.base.font.color};
        --asg-external-login-button-base-border-radius: ${o[o.activeTheme].buttons.externalConnection.base.border.borderRadius};
        --asg-login-box-background-color: ${((X=(Q=o[o.activeTheme].loginBox)==null?void 0:Q.background)==null?void 0:X.backgroundColor)||"var(--asg-colors-background-surface-main)"};
        --asg-login-box-border-color: ${((oo=(Z=o[o.activeTheme].loginBox)==null?void 0:Z.border)==null?void 0:oo.borderColor)||"var(--asg-colors-outlined-default)"};
        --asg-login-box-border-width: ${o[o.activeTheme].loginBox.border.borderWidth};
        --asg-login-box-border-style: solid;
        --asg-login-box-border-radius: ${o[o.activeTheme].loginBox.border.borderRadius};
        --asg-login-box-text-color: ${i};
        --asg-login-page-background-color: ${((ao=(ro=o[o.activeTheme].loginPage)==null?void 0:ro.background)==null?void 0:ao.backgroundColor)||"var(--asg-colors-background-body-main)"};
        --asg-login-page-font-color: ${((to=(eo=o[o.activeTheme].loginPage)==null?void 0:eo.font)==null?void 0:to.color)||"var(--asg-colors-text-primary)"};
        --asg-input-field-base-text-color: ${n||"var(--asg-colors-text-primary)"};
        --asg-input-field-base-background-color: ${o[o.activeTheme].inputs.base.background.backgroundColor};
        --asg-input-field-base-label-text-color: ${c};
        --asg-input-field-base-border-color: ${o[o.activeTheme].inputs.base.border.borderColor||"var(--asg-colors-outlined-default)"};
        --asg-input-field-base-border-radius: ${o[o.activeTheme].inputs.base.border.borderRadius};
        --language-selector-background-color: var(--asg-login-page-background-color) !important;
        --language-selector-text-color: var(--asg-footer-text-color) !important;
        --language-selector-border-color: var(--asg-colors-primary-main) !important;

        --oxygen-palette-customComponents-AppShell-Main-background: ${(no=(io=o[o.activeTheme].colors.background)==null?void 0:io.body)==null?void 0:no.main};
        --oxygen-palette-customComponents-AppShell-MainWrapper-background: ${(lo=(co=o[o.activeTheme].colors.background)==null?void 0:co.surface)==null?void 0:lo.dark};
        --oxygen-palette-background-paper: ${(uo=(so=o[o.activeTheme].colors.background)==null?void 0:so.surface)==null?void 0:uo.main};
        --oxygen-palette-AppBar-defaultBg: ${(po=(go=o[o.activeTheme].colors.background)==null?void 0:go.surface)==null?void 0:po.dark};
        --oxygen-palette-customComponents-Navbar-background: ${(fo=(bo=o[o.activeTheme].colors.background)==null?void 0:bo.surface)==null?void 0:fo.dark};
        --oxygen-palette-primary-main: ${o[o.activeTheme].colors.primary.main};
        --oxygen-palette-primary-light: ${o[o.activeTheme].colors.primary.light};
        --oxygen-palette-primary-dark: ${o[o.activeTheme].colors.primary.dark};
        --oxygen-palette-action-selected: ${o.activeTheme===e.DARK?"rgba(255, 255, 255, 0.16)":"rgba(0, 0, 0, 0.08)"};
    }

    body {
        color: var(--asg-colors-text-primary);
        background: var(--asg-colors-background-body-main);
    }

    /*-----------------------------
            Anchor Tags
    ------------------------------*/

    /* Anchor Tags */
    a {
        color: var(--asg-colors-primary-main);
    }

    a:hover, a:focus, a:active {
        color: var(--asg-colors-primary-main);
        filter: brightness(0.85);
    }

    /*-----------------------------
             Pre Loader
    ------------------------------*/

    .pre-loader-wrapper {
        background: var(--asg-colors-background-body-main);
    }

    .ui.inverted.dimmer {
        background: var(--asg-colors-background-body-main);
    }

    /*-----------------------------
                Messages
    ------------------------------*/

    /* TODO: Remove the background color from .totp-tooltip */
    .ui.message, .ui.message.totp-tooltip {
        background-color: var(--asg-colors-alerts-neutral-main);
        color: var(--asg-colors-text-primary) !important;
    }

    .backup-code-label.info {
        background-color: var(--asg-colors-alerts-info-main) !important;
        color: var(--asg-colors-text-primary) !important;
    }

    .ui.message.info {
        background-color: var(--asg-colors-alerts-info-main) !important;
    }

    .ui.message.warning {
        background-color: var(--asg-colors-alerts-warning-main) !important;
    }

    .ui.message.error, .ui.negative.message {
        background-color: var(--asg-colors-alerts-error-main) !important;
    }

    /*-----------------------------
                Alert
    ------------------------------*/

    .alert-wrapper .notifications-wrapper .notification {
        background: var(--asg-colors-background-surface-main) !important;
        color: var(--asg-colors-text-primary) !important;
        border: 1px solid var(--asg-colors-outlined-default) !important;
    }

    .alert-wrapper .notifications-wrapper .notification .notification-message .alert-message .description {
        color: var(--asg-colors-text-secondary);
    }

    .alert-wrapper .notifications-wrapper .notification .notification-dismiss {
        color: var(--asg-colors-text-primary) !important;
    }

    /*-----------------------------
                Card
    ------------------------------*/

    .ui.card, .ui.cards>.card {
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.card, .ui.card.settings-card {
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.card>.extra, .ui.cards>.card>.extra, .ui.card.settings-card .extra-content {
        background: var(--asg-colors-background-surface-light);
    }

    .ui.card>.content, .ui.cards>.card>.content {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.card .meta, .ui.cards>.card .meta {
        color: var(--asg-colors-text-secondary);
    }

    /* Security Page Active Sessions Terminate panel */
    .ui.card.settings-card .top-action-panel {
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-input-field-base-border-color);
    }

    /* Card Actions */
    .ui.card.settings-card .extra-content .action-button .action-button-text {
        color: var(--asg-colors-primary-main);
    }

    .ui.card.basic-card {
        border-color: var(--asg-colors-outlined-default);
    }

    /*-----------------------------
                Dropdown
    ------------------------------*/

    /* Avatar Modal Inner */
    .ui.dropdown .menu {
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-colors-outlined-default);
        color: var(--asg-colors-text-primary);
    }
    .ui.dropdown .menu .selected.item, .ui.dropdown.selected {
        color: var(--asg-colors-text-primary);
    }

    /*-----------------------------
                Menu
    ------------------------------*/

    .ui.menu, .ui.vertical.menu {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.menu .dropdown.item .menu {
        background: var(--asg-colors-background-surface-main);
    }

    /*-----------------------------
                Modal
    ------------------------------*/

    .ui.modal, .ui.modal>.content {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.modal>.actions {
        background: var(--asg-colors-background-surface-light);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.modal>.header {
        color: var(--asg-colors-text-primary);
        background: var(--asg-colors-background-surface-light);
    }

    /*-----------------------------
                Segment
    ------------------------------*/

    .ui.segment {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.segment.edit-segment {
        background: var(--asg-colors-background-surface-light);
    }

    .ui.segment.emphasized.placeholder-container {
        background: var(--asg-colors-background-surface-main);
    }

    /*-----------------------------
                Icons
    ------------------------------*/

    /* Primary Icons */
    i.icon.primary {
        color: var(--asg-colors-primary-main);
    }

    .theme-icon
        background: var(--asg-colors-background-surface-light);
    }

    .theme-icon.bordered {
        border-color: var(--asg-colors-outlined-default);
    }

    .theme-icon.two-tone svg.icon .lighten-1 {
        filter: brightness(1.08);
    }

    .theme-icon.two-tone svg.icon .lighten-2 {
        filter: brightness(1.16);
    }

    .theme-icon.two-tone svg.icon .darken-1 {
        filter: brightness(0.9);
    }

    .theme-icon.two-tone svg.icon .darken-2 {
        filter: brightness(0.7);
    }

    .theme-icon.two-tone svg.icon .opacity-80 {
        opacity: 0.8;
    }

    .theme-icon.two-tone svg.icon .opacity-60 {
        opacity: 0.6;
    }

    .theme-icon.two-tone svg.icon .fill.primary, .theme-icon.two-tone svg.icon .fill-primary {
        fill: var(--asg-colors-illustrations-primary-main);
    }

    .theme-icon.two-tone svg.icon .stroke.primary, .theme-icon.two-tone svg.icon .stroke-primary {
        stroke: var(--asg-colors-illustrations-primary-main);
    }

    .theme-icon.two-tone svg.icon .fill.secondary, .theme-icon.two-tone svg.icon .fill-secondary {
        fill: var(--asg-colors-illustrations-secondary-main);
    }

    .theme-icon.two-tone svg.icon .stroke.secondary, .theme-icon.two-tone svg.icon .stroke-secondary {
        stroke: var(--asg-colors-illustrations-secondary-main);
    }

    .theme-icon.two-tone svg.icon .fill.accent1, .theme-icon.two-tone svg.icon .fill-accent1 {
        fill: var(--asg-colors-illustrations-accent1-main);
    }

    .theme-icon.two-tone svg.icon .stroke.accent1, .theme-icon.two-tone svg.icon .stroke-accent1 {
        stroke: var(--asg-colors-illustrations-accent1-main);
    }

    .theme-icon.two-tone svg.icon .fill.accent2, .theme-icon.two-tone svg.icon .fill-accent2 {
        fill: var(--asg-colors-illustrations-accent2-main);
    }

    .theme-icon.two-tone svg.icon .stroke.accent2, .theme-icon.two-tone svg.icon .stroke-accent2 {
        stroke: var(--asg-colors-illustrations-accent2-main);
    }

    .theme-icon.two-tone svg.icon .fill.accent3, .theme-icon.two-tone svg.icon .fill-accent3 {
        fill: var(--asg-colors-illustrations-accent3-main);
    }

    .theme-icon.two-tone svg.icon .stroke.accent3, .theme-icon.two-tone svg.icon .stroke-accent3 {
        stroke: var(--asg-colors-illustrations-accent3-main);
    }

    /*-----------------------------
             Placeholder
    ------------------------------*/

    .ui.placeholder, .ui.placeholder .image.header:after, .ui.placeholder .line, .ui.placeholder .line:after, .ui.placeholder>:before {
        background-color: var(--asg-colors-background-surface-main);
    }

    /*-----------------------------
                Typography
    ------------------------------*/

    /* ------  Font Family ------ */

    /* Body */
    body {
        font-family: var(--asg-primary-font-family);
    }

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: var(--asg-primary-font-family);
    }

    .ui.header {
        font-family: var(--asg-primary-font-family);
    }

    /* Inputs */
    .ui.form input:not([type]),
    .ui.form input[type="date"],
    .ui.form input[type="datetime-local"],
    .ui.form input[type="email"],
    .ui.form input[type="number"],
    .ui.form input[type="password"],
    .ui.form input[type="search"],
    .ui.form input[type="tel"],
    .ui.form input[type="time"],
    .ui.form input[type="text"],
    .ui.form input[type="file"],
    .ui.form input[type="url"] {

        font-family: var(--asg-primary-font-family);
    }

    .ui.input > input {
        font-family: var(--asg-primary-font-family);
    }

    /* Search */
    .ui.search > .results .result .title {
        font-family: var(--asg-primary-font-family);
    }

    .ui.search > .results > .message .header {
        font-family: var(--asg-primary-font-family);
    }

    .ui.category.search > .results .category > .name {
        font-family: var(--asg-primary-font-family);
    }

    /* Menus */
    .ui.menu {
        font-family: var(--asg-primary-font-family);
    }

    /* Message */
    .ui.message .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Table */
    .ui.sortable.table thead th:after {
        font-family: var(--asg-primary-font-family);
    }

    /* Button */
    .ui.button {
        font-family: var(--asg-primary-font-family);
    }

    /* Text Container */
    .ui.text.container {
        font-family: var(--asg-primary-font-family);
    }

    /* List */
    .ui.list .list > .item .header,
    .ui.list > .item .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Steps */
    .ui.steps .step .title {
        font-family: var(--asg-primary-font-family);
    }

    /* Accordion */
    .ui.accordion .title:not(.ui) {
        font-family: var(--asg-primary-font-family);
    }

    /* Modal */
    .ui.modal > .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Popup */
    .ui.popup > .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Cards */
    .ui.cards > .card > .content > .header,
    .ui.card > .content > .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Items */
    .ui.items > .item > .content > .header {
        font-family: var(--asg-primary-font-family);
    }

    /* Statistics */
    .ui.statistics .statistic > .value,
    .ui.statistic > .value {
        font-family: var(--asg-primary-font-family);
    }

    /* ------  Font Colors ------ */

    .ui.table {
        color: var(--asg-colors-text-primary);
    }

    /* My Account session table */
    .ui.table.session-table {
        color: var(--asg-colors-text-secondary);
    }

    .ui.header .sub.header {
        color: var(--asg-colors-text-secondary);
    }

    .ui.list .list>.item .description, .ui.list>.item .description {
        color: var(--asg-colors-text-secondary);
    }

    .text-typography {
        color: var(--asg-colors-text-primary);
    }

    .ui.menu .item {
        color: var(--asg-colors-text-primary);
    }

    .ui.items>.item>.content>.description {
        color: var(--asg-colors-text-primary);
    }

    /* '!important' is used from Semantic UI's side */
    .ui.menu .ui.dropdown .menu>.item {
        color: var(--asg-colors-text-primary) !important;
    }

    .ui.menu .ui.dropdown .menu>.item:hover {
        color: var(--asg-colors-text-primary) !important;
    }

    .ui.vertical.menu.side-panel .side-panel-item .route-name {
        color: var(--asg-colors-text-primary);
    }

    .empty-placeholder .subtitle {
        color: var(--asg-colors-text-secondary);
    }

    .ui.list .list>.item .header, .ui.list>.item .header {
        color: var(--asg-colors-text-primary);
    }

    .ui.header {
        color: var(--asg-heading-text-color);
    }

    /* Primary Text */
    .text-typography.primary {
        color: var(--asg-colors-primary-main);
    }

    .hint-description {
        color: var(--asg-colors-text-secondary) !important;
    }

    .ui.items>.item.application-list-item .text-content-container .item-description {
        color: var(--asg-colors-text-secondary);
    }

    .ui.card.application-card.recent .application-content .text-content-container .application-name {
        color: var(--asg-colors-text-primary);
    }

    .ui.card.application-card.recent .application-content .text-content-container .application-description {
        color: var(--asg-colors-text-secondary);
    }

    /*-----------------------------
                Buttons
    ------------------------------*/

    /* Primary */
    .ui.primary.button:not(.basic) {
        background: var(--asg-colors-primary-main) !important;
        color: var(--asg-primary-button-base-text-color);
        border-radius: var(--asg-primary-button-base-border-radius);
    }

    .ui.primary.button:not(.basic):hover,
    .ui.primary.button:not(.basic):focus,
    .ui.primary.button:not(.basic):active {
        background: var(--asg-colors-primary-main) !important;
        filter: brightness(0.85);
    }

    /* Secondary */
    .ui.secondary.button {
        background: var(--asg-colors-secondary-main);
        color: var(--asg-secondary-button-base-text-color);
        border-radius: var(--asg-secondary-button-base-border-radius);
    }

    .ui.secondary.button:hover, .ui.secondary.button:focus, .ui.secondary.button:active {
        background: var(--asg-colors-secondary-main);
        filter: brightness(0.85);
    }

    /* Basic Button */
    .ui.basic.button, .ui.basic.buttons .button {
        color: var(--asg-colors-text-primary) !important;
        background: transparent !important;
    }

    .ui.basic.button:hover, .ui.basic.button:focus, .ui.basic.button:active, .ui.basic.buttons .button:hover, .ui.basic.buttons .button:active, .ui.basic.buttons .button:focus {
        color: var(--asg-colors-text-primary) !important;
        background: transparent !important;
    }

    .ui.basic.button.show-more-button {
        box-shadow: 0 0 0 1px var(--asg-colors-outlined-default) inset;
    }

    .ui.basic.button.show-more-button .arrow.down.icon {
        border-left: 1px solid var(--asg-colors-outlined-default);
    }

    .ui.basic.primary.button, .ui.basic.primary.buttons .button {
        color: var(--asg-colors-primary-main) !important;
        border-radius: var(--asg-primary-button-base-border-radius);
    }

    .ui.basic.primary.button:hover, .ui.basic.primary.buttons .button:hover {
        color: var(--asg-colors-primary-main) !important;
        filter: brightness(0.85);
    }

    /* External Connections */
    .login-portal.layout .center-segment>.ui.container>.ui.segment .social-login .ui.button {
        background: var(--asg-external-login-button-base-background-color);
        color: var(--asg-external-login-button-base-text-color);
        border-radius: var(--asg-external-login-button-base-border-radius);
    }

    .login-portal.layout .center-segment>.ui.container>.ui.segment .social-login .ui.button:hover,
    .login-portal.layout .center-segment>.ui.container>.ui.segment .social-login .ui.button:focus,
    .login-portal.layout .center-segment>.ui.container>.ui.segment .social-login .ui.button:active {
        background: var(--asg-external-login-button-base-background-color);
        filter: brightness(0.85);
    }

    /*-----------------------------
                Inputs
    ------------------------------*/

    /* Input */
    .ui.form input:not([type]), .ui.form input[type=date], .ui.form input[type=datetime-local], .ui.form input[type=email], .ui.form input[type=file], .ui.form input[type=number], .ui.form input[type=password], .ui.form input[type=search], .ui.form input[type=tel], .ui.form input[type=text], .ui.form input[type=time], .ui.form input[type=url],
    .ui.form .field.error input:not([type]), .ui.form .field.error input[type=date], .ui.form .field.error input[type=datetime-local], .ui.form .field.error input[type=email], .ui.form .field.error input[type=file], .ui.form .field.error input[type=number], .ui.form .field.error input[type=password], .ui.form .field.error input[type=search], .ui.form .field.error input[type=tel], .ui.form .field.error input[type=text], .ui.form .field.error input[type=time], .ui.form .field.error input[type=url], .ui.form .field.error select, .ui.form .field.error textarea, .ui.form .fields.error .field input:not([type]), .ui.form .fields.error .field input[type=date], .ui.form .fields.error .field input[type=datetime-local], .ui.form .fields.error .field input[type=email], .ui.form .fields.error .field input[type=file], .ui.form .fields.error .field input[type=number], .ui.form .fields.error .field input[type=password], .ui.form .fields.error .field input[type=search], .ui.form .fields.error .field input[type=tel], .ui.form .fields.error .field input[type=text], .ui.form .fields.error .field input[type=time], .ui.form .fields.error .field input[type=url], .ui.form .fields.error .field select, .ui.form .fields.error .field textarea,
    .ui.form .field.error input:not([type]):focus, .ui.form .field.error input[type=date]:focus, .ui.form .field.error input[type=datetime-local]:focus, .ui.form .field.error input[type=email]:focus, .ui.form .field.error input[type=file]:focus, .ui.form .field.error input[type=number]:focus, .ui.form .field.error input[type=password]:focus, .ui.form .field.error input[type=search]:focus, .ui.form .field.error input[type=tel]:focus, .ui.form .field.error input[type=text]:focus, .ui.form .field.error input[type=time]:focus, .ui.form .field.error input[type=url]:focus, .ui.form .field.error select:focus, .ui.form .field.error textarea:focus,
    .ui.form input:not([type]):focus, .ui.form input[type=date]:focus, .ui.form input[type=datetime-local]:focus, .ui.form input[type=email]:focus, .ui.form input[type=file]:focus, .ui.form input[type=number]:focus, .ui.form input[type=password]:focus, .ui.form input[type=search]:focus, .ui.form input[type=tel]:focus, .ui.form input[type=text]:focus, .ui.form input[type=time]:focus, .ui.form input[type=url]:focus,
    .ui.input.addon-wrapper,
    .ui.input.addon-wrapper:focus-within,
    .ui.selection.dropdown,
    .ui.selection.dropdown:hover {
        color: var(--asg-input-field-base-text-color);
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
        border-radius: var(--asg-input-field-base-border-radius);
    }

    /* Autofilled */
    .ui.form .field.field input:-webkit-autofill {
        color: var(--asg-input-field-base-text-color) !important;
        -webkit-text-fill-color: var(--asg-input-field-base-text-color) !important;
        box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        -webkit-box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        border-color: var(--asg-input-field-base-border-color) !important;
    }

    /* Autofilled:Focus */
    .ui.form .field.field input:-webkit-autofill:focus {
        color: var(--asg-input-field-base-text-color) !important;
        -webkit-text-fill-color: var(--asg-input-field-base-text-color) !important;
        box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        -webkit-box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        border-color: var(--asg-input-field-base-border-color) !important;
    }

    /* Autofilled:Error */
    .ui.form .error.error input:-webkit-autofill {
        color: var(--asg-input-field-base-text-color) !important;
        -webkit-text-fill-color: var(--asg-input-field-base-text-color) !important;
        box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        -webkit-box-shadow: 0 0 0 100px var(--asg-input-field-base-background-color) inset!important;
        border-color: var(--asg-input-field-base-border-color) !important;
    }

    /* Input Labels */
    .ui.form .field>label {
        color: var(--asg-input-field-base-label-text-color);
    }

    /* Input Addon Icons */
    .ui.form .field .ui.input {
        color: var(--asg-input-field-base-text-color);
    }

    /* Input calendar icon */
    .ui.calendar .ui.input.left.icon .calendar.icon {
        color: var(--asg-input-field-base-text-color);
    }

    /* Input Readonly */
    .ui.form input[readonly] {
        background: var(--asg-input-field-base-background-color) !important;
        filter: brightness(0.85);
    }

    /* Dropdowns */
    .ui.selection.active.dropdown .menu {
        background: var(--asg-input-field-base-border-color);
    }

    .ui.selection.dropdown .menu>.item {
        color: var(--asg-input-field-base-text-color);
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    /* Checkbox */
    .ui.checkbox .box:before, .ui.checkbox label:before {
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.checkbox input:focus~.box:before, .ui.checkbox input:focus~label:before {
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.checkbox input:checked:focus~.box:before, .ui.checkbox input:checked:focus~label:before, .ui.checkbox input:not([type=radio]):indeterminate:focus~.box:before, .ui.checkbox input:not([type=radio]):indeterminate:focus~label:before {
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.checkbox input:checked~label:before {
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.checkbox .box:hover::before, .ui.checkbox label:hover::before {
        background: var(--asg-input-field-base-background-color);
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.checkbox input:checked~.box:after, .ui.checkbox input:checked~label:after {
        color: var(--asg-input-field-base-text-color);
    }

    .ui.checkbox input:checked:focus~.box:after, .ui.checkbox input:checked:focus~label:after, .ui.checkbox input:not([type=radio]):indeterminate:focus~.box:after, .ui.checkbox input:not([type=radio]):indeterminate:focus~label:after {
        color: var(--asg-input-field-base-text-color);
    }

    .ui.checkbox label, .ui.checkbox+label {
        color: var(--asg-input-field-base-label-text-color);
    }

    .ui.checkbox label:hover, .ui.checkbox+label:hover {
        color: var(--asg-input-field-base-label-text-color);
    }

    .ui.checkbox input:focus~label {
        color: var(--asg-input-field-base-label-text-color);
    }

    /* Input Addons */
    .addon-field-wrapper .ui.input {
        border-color: var(--asg-input-field-base-border-color);
    }

    .addon-field-wrapper .ui.input:focus-within {
        border-color: var(--asg-input-field-base-border-color);
    }

    .ui.input>input {
        color: var(--asg-input-field-base-text-color);
    }

    .advanced-search-wrapper .ui.input.advanced-search {
        color: var(--asg-input-field-base-text-color);
    }

    .advanced-search-wrapper.fill-white .ui.input.advanced-search.with-add-on {
        border-color: var(--asg-input-field-base-border-color);
    }

    .advanced-search-wrapper.fill-white .ui.input.advanced-search.with-add-on input {
        color: var(--asg-input-field-base-text-color);
        background: var(--asg-input-field-base-background-color);
        border-radius: var(--asg-input-field-base-border-radius);
    }

    .advanced-search-wrapper.fill-white .ui.input.advanced-search.with-add-on .input-add-on {
        background: var(--asg-input-field-base-background-color) !important;
        border: 1px solid transparent;
    }

    .ui.input.advanced-search.with-add-on .ui.icon.input>i.icon {
        color: var(--asg-input-field-base-text-color);
    }

    .advanced-search-wrapper.fill-white .ui.input.advanced-search.with-add-on .input-add-on:active {
        background: var(--asg-input-field-base-background-color) !important;
    }

    /* Labeled Inputs */
    .ui.labeled.input>.label {
        background: var(--asg-input-field-base-background-color);
        color: var(--asg-colors-text-secondary);
        border: 1px solid var(--asg-input-field-base-border-color);
    }

    .ui[class*="right labeled"].input>input:focus {
        border-color: var(--asg-input-field-base-border-color) !important;;
    }

    /* Error Labels */
    .ui.form .field .prompt.label {
        color: var(--asg-colors-text-primary);
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-colors-outlined-default);
    }

    /*-----------------------------
                Popup
    ------------------------------*/

    .ui.popup {
        color: var(--asg-colors-text-primary);
        background: var(--asg-colors-background-surface-main);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.bottom.popup:before, .ui.top.popup:before, .ui.left.popup:before, .ui.right.popup:before, .ui.left.center.popup:before, .ui.right.center.popup:before {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.popup:before {
        box-shadow: 1px 1px 0 0 var(--asg-colors-outlined-default);
    }

    .ui.bottom.left.popup:before, .ui.bottom.center.popup:before, .ui.bottom.right.popup:before {
        box-shadow: -1px -1px 0 0 var(--asg-colors-outlined-default);
    }

    .ui.left.center.popup:before {
        box-shadow: 1px -1px 0 0 var(--asg-colors-outlined-default);
    }

    .ui.right.center.popup:before {
        box-shadow: -1px 1px 0 0 var(--asg-colors-outlined-default);
    }

    /*-----------------------------
            Login Screens
    ------------------------------*/

    /* ------  Login Page ------ */

    /* Default Page */
    .login-portal.layout {
        color: var(--asg-login-page-font-color);
        background: var(--asg-login-page-background-color);
    }

    /* Default Page with Blurred Patch */
    .login-portal.layout .page-wrapper {
        background: var(--asg-login-page-background-color);
    }

    /* Error, Success Pages */
    .login-portal.layout .page-wrapper.success-page, .login-portal.layout .page-wrapper.error-page {
        background: var(--asg-login-page-background-color);
    }

    /* ------  Login Box ------ */

    .login-portal.layout .center-segment>.ui.container>.ui.segment {
        background: var(--asg-login-box-background-color);
        border-width: var(--asg-login-box-border-width) !important;
        border-color: var(--asg-login-box-border-color);
        border-style: var(--asg-login-box-border-style);
        border-radius: var(--asg-login-box-border-radius);
        color: var(--asg-login-box-text-color);
    }

    .login-portal.layout .external-link-container.text-small {
       color: var(--asg-login-box-text-color);
    }

    .login-portal.layout .center-segment>.ui.container>.ui.segment .ui.checkbox label,
    .login-portal.layout .center-segment>.ui.container>.ui.segment .ui.checkbox+label {
        color: var(--asg-input-field-base-label-text-color);
    }

    .login-portal.layout .center-segment>.ui.container> .ui.bottom.attached.message {
        border-bottom-right-radius: var(--asg-login-box-border-radius);
        border-bottom-left-radius: var(--asg-login-box-border-radius);
    }

    /* Login Box Links */
    .login-portal.layout .clickable-link {
        color: var(--asg-colors-primary-main);
    }

    /* Misc Text */
    .ui.divider {
        color: var(--asg-login-box-text-color);
    }

    .login-portal.layout .portal-tagline-description {
        color: var(--asg-login-box-text-color);
    }

    .login-portal.layout .center-segment>.ui.container>.ui.segment .ui.list .list > .item .header, .ui.list > .item .header {
        color: var(--asg-login-box-text-color);
    }

    .login-portal.layout .center-segment>.ui.container>.ui.segment .login-portal-app-consent-request {
        color: var(--asg-login-box-text-color);
    }

    /* ------  Login Footer ------ */

    .login-portal.layout .footer {
        border-color: var(--asg-footer-border-color);
    }

    .login-portal.layout .footer .ui.text.menu .item {
        color: var(--asg-footer-text-color);
    }

    .login-portal.layout .footer .ui.text.menu .item:not(.no-hover):hover {
        color: var(--asg-colors-primary-main);
    }

    /*-----------------------------
              My Account
    ------------------------------*/

    .recovery-options-muted-header {
        background: var(--asg-colors-background-surface-dark);
        color: var(--asg-colors-text-secondary);
    }

    /* ------  My Account Side Panel ------ */

    .ui.vertical.menu.side-panel {
        background: var(--asg-colors-background-body-main);
    }

    /* ------  My Account Header ------ */

    .ui.menu.app-header {
        background: var(--asg-colors-background-surface-inverted);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.pointing.dropdown>.menu:after {
        background: var(--asg-colors-background-surface-main);
        box-shadow: -1px -1px 0 0 var(--asg-colors-outlined-default);
    }

    .ui.menu .user-dropdown .user-dropdown-menu .organization-label {
        background: var(--asg-colors-alerts-info-main);
        color: var(--asg-colors-text-secondary);
    }

    /* ------  My Account Footer ------ */

    .ui.menu.app-footer {
        background: var(--asg-colors-background-body-main);
        border-color: var(--asg-colors-outlined-default);
    }

    .ui.menu.app-footer {
        color: var(--asg-colors-text-secondary);
    }

    .ui.menu.app-footer .ui.menu .item.copyright {
        color: var(--asg-colors-text-secondary);
    }

    .ui.segment.cookie-consent-banner.inverted {
        border: 1px solid var(--asg-colors-outlined-default);
        background: var(--asg-colors-background-surface-inverted);
    }

    .ui.menu.app-footer .footer-dropdown .dropdown-trigger.link, .ui.menu.app-footer .footer-link {
        color: var(--asg-colors-text-primary);
    }

    .ui.menu.app-footer .footer-dropdown .dropdown.icon {
        color: var(--asg-colors-text-primary);
    }

    /* ------  My Account Applications ------ */

    .ui.items>.item.application-list-item {
        background: var(--asg-colors-background-surface-main);
    }

    .ui.items>.item.application-list-item .text-content-container .item-header {
        color: var(--asg-colors-text-primary);
    }

    .ui.image.app-image.app-avatar.default-app-icon .initials {
        color: var(--asg-colors-primary-main);
    }

    .ui.card.application-card.recent .application-image.default {
        background: var(--asg-colors-background-surface-light);
    }

    .ui.items>.item.application-list-item {
        border-color: var(--asg-colors-outlined-default);
    }`}static getStylesToDisablePointerEvents(){return`
            .login-portal.layout .center-segment {
                pointer-events: none;
            }

            .login-portal.layout .footer {
                pointer-events: none;
            }

            .login-portal.layout label, .login-portal.layout input {
                pointer-events: none;
            }
        `}}const y=class y{constructor(){}static getDefaultBrandingPreference(o){return R(f.DEFAULT_PREFERENCE,o)}static isLayoutPreviewTrimmed(o,r){switch(o){case B.LEFT_ALIGNED:case B.RIGHT_ALIGNED:return r<f.BRANDING_PREVIEW_MIN_WIDTH_SIDE_ALIGNED;case B.LEFT_IMAGE:case B.RIGHT_IMAGE:return r<f.BRANDING_PREVIEW_MIN_WIDTH_SIDE_IMAGE;default:return!1}}};y.migrateThemePreference=(o,r)=>{var i,n,c,l,s,u;const a=m(o);!o.theme&&r.theme&&(a.theme=r.theme);for(const t in e){o.images&&(a.theme[e[t]].images=o.images);const d=a.theme[e[t]].colors.primary;typeof d=="string"&&(delete a.theme[e[t]].colors.primary,a.theme[e[t]].colors.primary={main:d});const g=a.theme[e[t]].colors.secondary;if(typeof g=="string"&&(delete a.theme[e[t]].colors.secondary,a.theme[e[t]].colors.secondary={main:g}),a.theme[e[t]].page){const p=(n=(i=a.theme[e[t]].page)==null?void 0:i.background)==null?void 0:n.backgroundColor;!((c=a.theme[e[t]].colors)!=null&&c.background)&&p&&(a.theme[e[t]].colors.background={body:{main:p}});const b=(s=(l=a.theme[e[t]].page)==null?void 0:l.font)==null?void 0:s.color;!((u=a.theme[e[t]].colors)!=null&&u.text)&&b&&(a.theme[e[t]].colors.text={primary:b}),a.theme[e[t]].loginPage=a.theme[e[t]].page,delete a.theme[e[t]].page}a.theme[e[t]]=R(ko.getThemes()[t],a.theme[e[t]])}return"removeAsgardeoBranding"in a.configs&&(a.configs.removeDefaultBranding=a.configs.removeAsgardeoBranding,delete a.configs.removeAsgardeoBranding),a},y.migrateLayoutPreference=(o,r)=>{const a=m(o),i=m(r.layout),n=m($);if(!o.layout&&r.layout)a.layout=i;else if(o.layout&&r.layout)R(i,a.layout),a.layout=i;else if(o.layout&&!r.layout){const c=R(n,a.layout);a.layout=c}else a.layout={activeLayout:f.DEFAULT_LAYOUT,...$};return a},y.getPredefinedThemePreferences=o=>wo(Object.assign({"../../themes/default/theme-variables.json":()=>mo(()=>import("./theme-variables.BJ-FhzMT.js"),[]),"../../themes/wso2is/theme-variables.json":()=>mo(()=>import("./theme-variables.BDK-78tu.js"),[])}),`../../themes/${o}/theme-variables.json`,5).then(r=>Promise.resolve({activeTheme:f.DEFAULT_THEME,...R(ko.getThemes(),{[e.LIGHT]:{buttons:{externalConnection:{base:{background:{backgroundColor:r.loginPortalExternalConnectionButtonBackgroundColor},border:{borderRadius:r.buttonBorderRadius}}},primary:{base:{border:{borderRadius:r.buttonBorderRadius}}},secondary:{base:{border:{borderRadius:r.buttonBorderRadius}}}},colors:{background:{body:{main:r.pageBackground},surface:{inverted:r.asgardeoBlack}},illustrations:{accent1:{main:r.accentColor1},accent2:{main:r.accentColor2},accent3:{main:r.accentColor3},primary:{main:r.primaryColor},secondary:{main:r.secondaryColor}},primary:{main:r.primaryColor},secondary:{main:r.secondaryColor}},inputs:{base:{background:{backgroundColor:r.inputBackground},border:{borderRadius:r.defaultBorderRadius}}},loginBox:{border:{borderRadius:r.loginPortalLoginCardBorderRadius}}},[e.DARK]:{buttons:{externalConnection:{base:{border:{borderRadius:r.buttonBorderRadius}}},primary:{base:{border:{borderRadius:r.buttonBorderRadius}}},secondary:{base:{border:{borderRadius:r.buttonBorderRadius}}}},colors:{illustrations:{accent1:{main:r.accentColor1},accent2:{main:r.accentColor2},accent3:{main:r.accentColor3},primary:{main:r.primaryColor},secondary:{main:r.secondaryColor}},primary:{main:r.primaryColor},secondary:{main:r.secondaryColor}},inputs:{base:{border:{borderRadius:r.defaultBorderRadius}}},loginBox:{border:{borderRadius:r.loginPortalLoginCardBorderRadius}}}})})).catch(r=>Promise.reject(r)),y.isContentWithinMaxSize=(o,r)=>!o||!r?!0:new TextEncoder().encode(o).length<=r;let xo=y;export{xo as B,ko as a};
