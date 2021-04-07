(this["webpackJsonpedma-website"]=this["webpackJsonpedma-website"]||[]).push([[5],{81:function(e,t,n){"use strict";var r=n(2),i=n(9),a=n(1),o=(n(3),n(18));var s=n(68),c=n(32),u=n(40),l=n(23),d=n(28);function f(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var i=window.getComputedStyle(t);n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var a=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");a=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(a-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-a,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-r.top,"px)"):"translateY(-".concat(r.top+r.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var b={enter:l.b.enteringScreen,exit:l.b.leavingScreen},m=a.forwardRef((function(e,t){var n=e.children,l=e.direction,m=void 0===l?"down":l,p=e.in,h=e.onEnter,g=e.onEntered,j=e.onEntering,w=e.onExit,O=e.onExited,x=e.onExiting,v=e.style,y=e.timeout,E=void 0===y?b:y,k=e.TransitionComponent,_=void 0===k?s.e:k,T=Object(i.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=Object(u.a)(),P=a.useRef(null),A=a.useCallback((function(e){P.current=o.findDOMNode(e)}),[]),N=Object(c.a)(n.ref,A),M=Object(c.a)(N,t),S=function(e){return function(t){e&&(void 0===t?e(P.current):e(P.current,t))}},I=S((function(e,t){f(m,e),Object(d.b)(e),h&&h(e,t)})),R=S((function(e,t){var n=Object(d.a)({timeout:E,style:v},{mode:"enter"});e.style.webkitTransition=C.transitions.create("-webkit-transform",Object(r.a)({},n,{easing:C.transitions.easing.easeOut})),e.style.transition=C.transitions.create("transform",Object(r.a)({},n,{easing:C.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",j&&j(e,t)})),B=S(g),z=S(x),F=S((function(e){var t=Object(d.a)({timeout:E,style:v},{mode:"exit"});e.style.webkitTransition=C.transitions.create("-webkit-transform",Object(r.a)({},t,{easing:C.transitions.easing.sharp})),e.style.transition=C.transitions.create("transform",Object(r.a)({},t,{easing:C.transitions.easing.sharp})),f(m,e),w&&w(e)})),H=S((function(e){e.style.webkitTransition="",e.style.transition="",O&&O(e)})),J=a.useCallback((function(){P.current&&f(m,P.current)}),[m]);return a.useEffect((function(){if(!p&&"down"!==m&&"right"!==m){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=this,s=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(s,n)}return r.clear=function(){clearTimeout(t)},r}((function(){P.current&&f(m,P.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[m,p]),a.useEffect((function(){p||J()}),[p,J]),a.createElement(_,Object(r.a)({nodeRef:P,onEnter:I,onEntered:B,onEntering:R,onExit:F,onExited:H,onExiting:z,appear:!0,in:p,timeout:E},T),(function(e,t){return a.cloneElement(n,Object(r.a)({ref:M,style:Object(r.a)({visibility:"exited"!==e||p?void 0:"hidden"},v,n.props.style)},t))}))}));t.a=m},83:function(e,t,n){e.exports={Container:"AboutPage_Container__2vs4H",selfie:"AboutPage_selfie__NMWIn",AboutMe:"AboutPage_AboutMe__2gPuy",row:"AboutPage_row__2M93j",Picture:"AboutPage_Picture__1BEnt"}},95:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(77),a=n(78),o=n(79),s=n(83),c=n.n(s),u=n.p+"static/media/selfie.1e30c650.jpg",l=n(81),d=n(0);t.default=function(){return Object(r.useEffect)((function(){document.title="About Me | Edward Ma"}),[]),Object(d.jsx)(i.a,{className:c.a.Container,children:Object(d.jsxs)(a.a,{className:c.a.row,children:[Object(d.jsx)(l.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsx)(o.a,{lg:4,className:c.a.Picture,children:Object(d.jsx)("img",{src:u,alt:"i need a better pic",className:c.a.selfie})})}),Object(d.jsx)(l.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsxs)(o.a,{lg:8,className:c.a.AboutMe,children:[Object(d.jsxs)("h2",{children:["I'm Edward, a web and database developer based out of beautiful Nova Scotia, Canada, and the Co-Founder & CTO of"," ",Object(d.jsx)("a",{href:"https://Bursity.org",target:"_blank",rel:"noreferrer",children:"Bursity.org"}),"."]}),Object(d.jsx)("p",{children:"These days I spent my time expanding my knowledge of web and database development or anything tech and startup related."}),Object(d.jsxs)("p",{children:["Outside of that, you will find me serving my community with"," ",Object(d.jsx)("a",{href:"http://www.ns.sjaresponder.ca/",target:"_blank",rel:"noreferrer",children:"St. John Ambulance NS/PEI"})," ","as a Volunteer First Responder and other non-profit organizations, such as the"," ",Object(d.jsx)("a",{href:"https://www.mentalhealthns.ca/",target:"_blank",rel:"noreferrer",children:"Mental Health Foundation of Nova Scotia"}),"."]})]})})]})})}}}]);
//# sourceMappingURL=5.f85aff66.chunk.js.map