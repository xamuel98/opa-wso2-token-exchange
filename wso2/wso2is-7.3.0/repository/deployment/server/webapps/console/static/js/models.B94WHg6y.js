import{aV as n}from"./index.C2yHLfvu.js";var o,a;const i=(a=(o=n)==null?void 0:o.quickstart)==null?void 0:a.oidcWeb,u=()=>`<dependency>
    <groupId>io.asgardeo.tomcat.oidc.agent</groupId>
    <artifactId>io.asgardeo.tomcat.oidc.agent</artifactId>
    <version>0.1.8</version>
</dependency>`,p=()=>`<repositories>
    <repository>
        <id>wso2.releases</id>
        <name>WSO2 internal Repository</name>
        <url>https://maven.wso2.org/nexus/content/repositories/releases/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
            <checksumPolicy>ignore</checksumPolicy>
        </releases>
    </repository>
    <repository>
        <id>wso2-nexus</id>
        <name>WSO2 internal Repository</name>
        <url>https://maven.wso2.org/nexus/content/groups/wso2-public/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
            <checksumPolicy>ignore</checksumPolicy>
        </releases>
    </repository>
</repositories>`,d=(e,t)=>{if(!e)return null;const r=t&&t!==""?t:"<YOUR_APP_PATH>";return`consumerKey=${e.clientID}
consumerSecret=${e.clientSecret}
scope=${e==null?void 0:e.scope.join(",")}

callBackURL=${r}${i.tomcatOIDCAgent.integrate.defaultCallbackContext}

issuer=${e.serverOrigin}/oauth2/token
authorizeEndpoint=${e.serverOrigin}/oauth2/authorize
logoutEndpoint=${e.serverOrigin}/oidc/logout
tokenEndpoint=${e.serverOrigin}/oauth2/token
jwksEndpoint=${e.serverOrigin}/oauth2/jwks

skipURIs=${r}/index.html
logoutURL=logout`},c=()=>`<filter>
    <filter-name>OIDCAgentFilter</filter-name>
    <filter-class>io.asgardeo.tomcat.oidc.agent.OIDCAgentFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>/logout</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>/oauth2client</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>*.jsp</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>*.html</url-pattern>
</filter-mapping>
<listener>
    <listener-class>io.asgardeo.tomcat.oidc.agent.SSOAgentContextEventListener</listener-class>
</listener>
<context-param>
    <param-name>app-property-file</param-name>
    <param-value>oidc-sample-app.properties</param-value>
</context-param>
<listener>
    <listener-class>io.asgardeo.tomcat.oidc.agent.JKSLoader</listener-class>
</listener>`,m=()=>`<form action="<HOME_PAGE>" method="post">
    <input type="submit" value="Log In">
</form>`,g=()=>`<form action="logout" method="get">
    <input type="submit" value="Log Out">
</form>`,h=(e,t)=>{if(!e)return null;const r=t&&t!==""?t:"<TOMCAT_HOST>";return`consumerKey=${e.clientID}
consumerSecret=${e.clientSecret}
scope=openid,address,email,profile

callBackURL=${r}/oidc-sample-app/oauth2client
trustedAudience=${r}/oidc-sample-app

issuer=${e.serverOrigin}/oauth2/token
authorizeEndpoint=${e.serverOrigin}/oauth2/authorize
logoutEndpoint=${e.serverOrigin}/oidc/logout
tokenEndpoint=${e.serverOrigin}/oauth2/token
jwksEndpoint=${e.serverOrigin}/oauth2/jwks
#sessionIFrameEndpoint=${e.serverOrigin}/oidc/checksession

skipURIs=/oidc-sample-app/index.html
indexPage=index.html
logoutURL=logout
errorPage=error.jsp`},k=()=>"Install-Package Asgardeo.OIDC.SDK -Version 0.1.1",v=e=>e?`<configuration>
    <appSettings>
        <add key="ClientId" value="${e.clientID}" />
        <add key="ClientSecret" value="${e.clientSecret}" />
        <add key="AuthorizationEndpoint" value="${e.serverOrigin}/oauth2/authorize" />
        <add key="TokenEndpoint" value="${e.serverOrigin}/oauth2/token" />
        <add key="UserInfoEndpoint" value="${e.serverOrigin}/oauth2/userinfo" />
        <add key="LogoutEndpoint" value="${e.serverOrigin}/oidc/logout" />
        <add key="RedirectURI" value="http://localhost:8080/pickup-manager/callback/" />
        <add key="PostLogoutRedirectURI" value="http://localhost:8080/pickup-manager/postlogout/" />
        <add key="ClientSettingsProvider.ServiceUri" value="" />
    </appSettings>
</configuration>`:null,O=e=>e?`Client ID - ${e.clientID}
Client Secret - ${e.clientSecret}
Authorization Endpoint - ${e.serverOrigin}/oauth2/authorize
Token Endpoint - ${e.serverOrigin}/oauth2/token
Userinfo Endpoint - ${e.serverOrigin}/oauth2/userinfo
Logout Endpoint - ${e.serverOrigin}/oidc/logout
Redirect URI - http://localhost:8080/pickup-manager/callback/
PostLogout Redirect URI - http://localhost:8080/pickup-manager/postlogout/`:null,C=()=>`readonly AuthenticationHelper authenticationHelper = new AuthenticationHelper();
await authenticationHelper.Login();
var accessToken = authenticationHelper.AccessToken;`,I=()=>`await authenticationHelper.Logout(accessToken);
var request = authenticationHelper.Request;`;var s=(e=>(e.JAVA_EE="Java EE",e.DOT_NET=".NET",e))(s||{});export{s as S,i as a,d as b,c,k as d,v as e,m as f,C as g,g as h,I as i,h as j,O as k,u as t,p as w};
