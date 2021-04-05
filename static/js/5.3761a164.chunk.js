/*! For license information please see 5.3761a164.chunk.js.LICENSE.txt */
(this["webpackJsonpedma-website"]=this["webpackJsonpedma-website"]||[]).push([[5],{52:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},59:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var c=a(52),l=a.n(c),o=r.a.createContext({});o.Consumer,o.Provider;function d(e,t){var a=Object(n.useContext)(o);return e||a[t]||t}var u=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,c=e.as,o=void 0===c?"div":c,u=e.className,j=s(e,["bsPrefix","fluid","as","className"]),h=d(a,"container"),b="string"===typeof n?"-"+n:"-fluid";return r.a.createElement(o,i({ref:t},j,{className:l()(u,n?""+h+b:h)}))}));u.displayName="Container",u.defaultProps={fluid:!1};var j=u,h=["xl","lg","md","sm","xs"],b=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.noGutters,o=e.as,u=void 0===o?"div":o,j=s(e,["bsPrefix","className","noGutters","as"]),b=d(a,"row"),f=b+"-cols",m=[];return h.forEach((function(e){var t,a=j[e];delete j[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&m.push(""+f+n+"-"+t)})),r.a.createElement(u,i({ref:t},j,{className:l.a.apply(void 0,[n,b,c&&"no-gutters"].concat(m))}))}));b.displayName="Row",b.defaultProps={noGutters:!1};var f=b,m=["xl","lg","md","sm","xs"],x=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.as,o=void 0===c?"div":c,u=s(e,["bsPrefix","className","as"]),j=d(a,"col"),h=[],b=[];return m.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+j+s:""+j+s+"-"+t),null!=n&&b.push("order"+s+"-"+n),null!=a&&b.push("offset"+s+"-"+a)})),h.length||h.push(j),r.a.createElement(o,i({},u,{ref:t,className:l.a.apply(void 0,[n].concat(h,b))}))}));x.displayName="Col";var p=x,v=/-(.)/g;var O=function(e){return e[0].toUpperCase()+(t=e,t.replace(v,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function g(e,t){var a=void 0===t?{}:t,n=a.displayName,c=void 0===n?O(e):n,o=a.Component,u=a.defaultProps,j=r.a.forwardRef((function(t,a){var n=t.className,c=t.bsPrefix,u=t.as,j=void 0===u?o||"div":u,h=s(t,["className","bsPrefix","as"]),b=d(c,e);return r.a.createElement(j,i({ref:a,className:l()(n,b)},h))}));return j.defaultProps=u,j.displayName=c,j}var y=function(e){return r.a.forwardRef((function(t,a){return r.a.createElement("div",i({},t,{ref:a,className:l()(t.className,e)}))}))},S=r.a.createContext(null);S.displayName="CardContext";var w=S,P=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,o=e.as,u=void 0===o?"img":o,j=s(e,["bsPrefix","className","variant","as"]),h=d(a,"card-img");return r.a.createElement(u,i({ref:t,className:l()(c?h+"-"+c:h,n)},j))}));P.displayName="CardImg",P.defaultProps={variant:null};var C=P,N=y("h5"),k=y("h6"),D=g("card-body"),E=g("card-title",{Component:N}),A=g("card-subtitle",{Component:k}),M=g("card-link",{Component:"a"}),B=g("card-text",{Component:"p"}),L=g("card-header"),R=g("card-footer"),T=g("card-img-overlay"),I=r.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.bg,u=e.text,j=e.border,h=e.body,b=e.children,f=e.as,m=void 0===f?"div":f,x=s(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=d(a,"card"),v=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return r.a.createElement(w.Provider,{value:v},r.a.createElement(m,i({ref:t},x,{className:l()(c,p,o&&"bg-"+o,u&&"text-"+u,j&&"border-"+j)}),h?r.a.createElement(D,null,b):b))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=C,I.Title=E,I.Subtitle=A,I.Body=D,I.Link=M,I.Text=B,I.Header=L,I.Footer=R,I.ImgOverlay=T;var F=I,z=a(69),U=(a(59),a(11)),G=a(0);t.default=function(){return Object(n.useEffect)((function(){console.log("[useEffect] - /work"),document.title="Work Experience - Edward Ma"}),[]),Object(G.jsx)(z.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(G.jsxs)(j,{children:[Object(G.jsxs)(f,{children:[Object(G.jsx)(p,{lg:4,children:Object(G.jsx)("h1",{children:"Work Experience"})}),Object(G.jsxs)(p,{lg:8,children:[Object(G.jsx)(f,{children:Object(G.jsx)(F,{children:Object(G.jsxs)(F.Body,{children:[Object(G.jsx)(F.Title,{children:"Co-Founder & CTO"}),Object(G.jsxs)(F.Subtitle,{children:[Object(G.jsx)(F.Link,{href:"https://Bursity.org",target:"_blank",children:"Bursity.org"})," ","- Halifax, Nova Scotia"]}),Object(G.jsx)(F.Subtitle,{children:"August 2018 - Present"}),Object(G.jsx)(F.Text,{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"Co-developing in the creation of System Analysis and Design with Co-Founder and CEO"}),Object(G.jsx)("li",{children:"Design, develop and documenting System Flow Diagram, Development timeline, Entity Relation Diagram, and Data Dictionary"}),Object(G.jsx)("li",{children:"Design and Prototype product UI, UX, and creation of product demo"}),Object(G.jsx)("li",{children:"Perform AWS administration and DevOps. Ex: Amazon Workspace, RDS with MariaDB, CodeCommit, CodePipeline and WP with LightSail"}),Object(G.jsx)("li",{children:"Overseeing and managing the development of MVP with a team of 3 summer students"}),Object(G.jsx)("li",{children:"Successfully launched student-facing MVP of over 49k financial awards valued at over $450M, leading to helping over 300 marginalized students across Canada and the US"})]})})]})})}),Object(G.jsx)(f,{children:Object(G.jsx)(F,{children:Object(G.jsxs)(F.Body,{children:[Object(G.jsx)(F.Title,{children:"Software Developer"}),Object(G.jsxs)(F.Subtitle,{children:[Object(G.jsx)(F.Link,{href:"https://www.vmo.aero/",target:"_blank",children:"VMO Solution"})," ","- Halifax, Nova Scotia"]}),Object(G.jsx)(F.Subtitle,{children:"Nov 2019 - Jan 2020"}),Object(G.jsx)(F.Text,{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"Built RESTful API within React to connect to MongoDB using AWS Serverless and Lambda Functions"}),Object(G.jsx)("li",{children:"Developing specialized module using React, utilizing Formik for form building, Material-UI Framework"})]})})]})})}),Object(G.jsx)(f,{children:Object(G.jsx)(F,{children:Object(G.jsxs)(F.Body,{children:[Object(G.jsx)(F.Title,{children:"Analytic Developer"}),Object(G.jsxs)(F.Subtitle,{children:[Object(G.jsx)(F.Link,{href:"https://www.verbinteractive.com/",target:"_blank",children:"VERB Interactive"})," ","- Halifax, Nova Scotia"]}),Object(G.jsx)(F.Subtitle,{children:"Mar 2019 - Jul 2020"}),Object(G.jsx)(F.Text,{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"Set up full analytics tracking (Page Data, eCommerce, UX) using Google Tag Manager and Google Analytics"}),Object(G.jsx)("li",{children:"Partnered with Analytics Reporters and Account Managers to troubleshoot and develop analytics requirements"}),Object(G.jsx)("li",{children:"Utilized JavaScript and jQuery to monitor DOM interaction and react to them for analytic purposes"}),Object(G.jsx)("li",{children:"Used Google Optimize for A/B testing to change elements on a page"}),Object(G.jsx)("li",{children:"Implemented third-party tracking requirements and platforms, such as Facebook Pixel, to measure Facebook Ads results"}),Object(G.jsx)("li",{children:"Communicated technical needs with internal and external stakeholders"})]})})]})})}),Object(G.jsx)(f,{children:Object(G.jsx)(F,{children:Object(G.jsxs)(F.Body,{children:[Object(G.jsx)(F.Title,{children:"Application Developer"}),Object(G.jsxs)(F.Subtitle,{children:[Object(G.jsx)(F.Link,{href:"https://getguild.co/",target:"_blank",children:"Guild Software Inc."})," ","- Bedford, Nova Scotia"]}),Object(G.jsx)(F.Subtitle,{children:"Jun 2018 - Mar 2019"}),Object(G.jsx)(F.Text,{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"Utilized MySQL Stored Procedures for ETL and Data Migration"}),Object(G.jsx)("li",{children:"Designed and implemented specialized reporting modules with Laravel, Eloquent, and PHP based on the client\u2019s business and technical requirements"}),Object(G.jsx)("li",{children:"Developed Front-End Web Application with Joomla, JavaScript(jQuery), HTML5, CSS3 (LESS), and Bootstrap"}),Object(G.jsx)("li",{children:"Partnered with a graphic designer and completed an e-commerce website using LemonStand while simultaneously learning the ZURB Foundation Framework"}),Object(G.jsx)("li",{children:"Continuingly implemented new features, improvements and provided support to existing web applications"})]})})]})})}),Object(G.jsx)(f,{children:Object(G.jsx)(F,{children:Object(G.jsxs)(F.Body,{children:[Object(G.jsx)(F.Title,{children:"Business Analyst Intern"}),Object(G.jsxs)(F.Subtitle,{children:[Object(G.jsx)(F.Link,{href:"https://novascotia.ca/",target:"_blank",children:"Government of Nova Scotia"})," ","- Halifax, Nova Scotia"]}),Object(G.jsx)(F.Subtitle,{children:"May 2017 - Aug 2017"}),Object(G.jsx)(F.Text,{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"Collaborated with a Sr. Business Analyst and Information Architect to develop a Business Case for the Corporate Data as a Service Project by analyzing the business process"}),Object(G.jsx)("li",{children:"Contributed to the development of Conceptual Data Analytic Reference Architecture, Data & Analytics Service Model, and Organizational Structure"}),Object(G.jsx)("li",{children:"Investigated and attained an understanding of Master Data Management, Metadata Management, Data Quality, and Data Governance"}),Object(G.jsx)("li",{children:"Achieved basic knowledge of Kimball Methodology for Dimensional Modeling, Data Integration, Data Virtualization, Data Lake, and Kimball & Inmon Data Warehouse Architecture"})]})})]})})})]})]}),Object(G.jsxs)("h3",{children:["Like what you see? ",Object(G.jsx)(U.Link,{to:"/contact",children:"Let's Chat!"})]})]})})}}}]);
//# sourceMappingURL=5.3761a164.chunk.js.map