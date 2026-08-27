import{aV as p}from"./index.C2yHLfvu.js";import"./userstore-constants.BvZwhv9M.js";const L=()=>`<dependency>
    <groupId>io.asgardeo.tomcat.saml.agent</groupId>
    <artifactId>io.asgardeo.tomcat.saml.agent</artifactId>
    <version>0.1.31</version>
</dependency>`,g=()=>`<repositories>
    <repository>
        <id>wso2.releases</id>
        <name>WSO2 internal Repository</name>
        <url>http://maven.wso2.org/nexus/content/repositories/releases/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
            <checksumPolicy>ignore</checksumPolicy>
        </releases>
    </repository>
</repositories>`,d=(e,t)=>{var o;if(!e)return"";const a=t&&t!==""?t:"<YOUR_APP_PATH>",s=e.enableResponseSigning!==void 0?e.enableResponseSigning:!1,r=e.enableRequestSigning!==void 0?e.enableRequestSigning:!1,i=e.enableSLO!==void 0?e.enableSLO:!0,n=e.enableAssertionEncryption!==void 0?e.enableAssertionEncryption:!1;return`SAML2.AssertionConsumerURL=${e.acsURL}
SAML2.SPEntityId=${e.samlIssuer}
SAML2.IdPEntityId=${e.issuer}
SAML2.IdPURL=${e.ssoUrl}
SkipURIs=${a}/index.html
SAML2SSOURL=samlsso
IndexPage=index.html
ErrorPage=/error.jsp
EnableSAML2SSOLogin=true
SAML2.EnableSLO=${i}
SAML2.SLOURL=logout
SAML2.EnableResponseSigning=${s}
SAML2.EnableAssertionSigning=false
SAML2.EnableAssertionEncryption=${n}
SAML2.EnableRequestSigning=${r}
SAML2.IsPassiveAuthn=false
IdPPublicCert=${(o=e.certificate)==null?void 0:o.replace(/(\r\n|\n|\r)/gm,"")}
KeyStorePassword=<PASSWORD>
PrivateKeyAlias=<ALIAS>
IdPPublicCertAlias=wso2carbon
PrivateKeyPassword=wso2carbon`},c=()=>`<filter>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <filter-class>io.asgardeo.tomcat.saml.agent.SAML2SSOAgentFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>*.jsp</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>*.html</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>/samlsso</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>/logout</url-pattern>
</filter-mapping>

<listener>
    <listener-class>io.asgardeo.tomcat.saml.agent.SSOAgentContextEventListener</listener-class>
</listener>
<context-param>
    <param-name>property-file</param-name>
    <param-value>sample-app.properties</param-value>
</context-param>
<context-param>
    <param-name>certificate-file</param-name>
    <param-value>KEYSTORE_FILE_NAME</param-value>
</context-param>`,b=()=>`<form action="home.jsp" method="post">
    <input type="submit" value="log in">
</form>`,M=()=>`<form action="logout?SAML2.HTTPBinding=HTTP-POST" method="get">
    <input type="submit" value="Log Out">
</form>`,P=e=>{var n;const t=e.tomcatHost&&e.tomcatHost!==""?e.tomcatHost:"<TOMCAT_HOST>",a=e.enableResponseSigning!==void 0?e.enableResponseSigning:!1,s=e.enableRequestSigning!==void 0?e.enableRequestSigning:!1,r=e.enableSLO!==void 0?e.enableSLO:!0,i=e.enableAssertionEncryption!==void 0?e.enableAssertionEncryption:!1;return`SAML2.AssertionConsumerURL=${t}/sample-app/home.jsp
SAML2.SPEntityId=${e.samlIssuer}
SAML2.IdPEntityId=${e.issuer}
SAML2.IdPURL=${e.ssoUrl}
SAML2SSOURL=samlsso
EnableSAML2SSOLogin=true
SAML2.EnableSLO=${r}
SAML2.SLOURL=logout
SkipURIs=/sample-app/index.html
IndexPage=index.html
ErrorPage=/error.jsp
SAML2.EnableResponseSigning=${a}
SAML2.EnableAssertionSigning=false
SAML2.EnableAssertionEncryption=${i}
SAML2.EnableRequestSigning=${s}
SAML2.IsPassiveAuthn=false
IdPPublicCert=${(n=e.certificate)==null?void 0:n.replace(/(\r\n|\n|\r)/gm,"")}
KeyStorePassword=wso2carbon
PrivateKeyAlias=wso2carbon
IdPPublicCertAlias=wso2carbon
PrivateKeyPassword=wso2carbon`};var l,S;const E=(S=(l=p)==null?void 0:l.quickstart)==null?void 0:S.samlWeb;var m=(e=>(e.JAVA_EE="Java EE",e))(m||{});export{m as S,E as a,d as b,c,b as d,M as e,P as f,L as t,g as w};
