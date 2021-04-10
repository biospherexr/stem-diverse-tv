(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),O=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=O(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),d=O(a),u=n,j=d["".concat(l,".").concat(u)]||d[u]||m[u]||b;return a?r.a.createElement(j,c(c({ref:e},i),{},{components:a})):r.a.createElement(j,c({ref:e},i))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return p})),a.d(e,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(112)),l={title:"Database Design",slug:"/Backend/database_design"},c={unversionedId:"database_design",id:"database_design",isDocsHomePage:!1,title:"Database Design",description:"VIDEOS TABLE",source:"@site/docs/database_design.md",slug:"/Backend/database_design",permalink:"/stem-diverse-tv/docs/Backend/database_design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/database_design.md",version:"current",sidebar:"docs",previous:{title:"Setup backend",permalink:"/stem-diverse-tv/docs/Guidelines/setup_backend"},next:{title:"Client Expected Payload",permalink:"/stem-diverse-tv/docs/Backend/client_expected_payload"}},p=[],i={toc:p};function O(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"VIDEOS TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"URL"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"TITLE"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"PUBLISHED"),Object(b.b)("td",{parentName:"tr",align:null},"int(date)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"SOURCE"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CHANNEL"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"DURATION"),Object(b.b)("td",{parentName:"tr",align:null},"int")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ARCHIVED"),Object(b.b)("td",{parentName:"tr",align:null},"bool")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"FREE_TO_REUSE"),Object(b.b)("td",{parentName:"tr",align:null},"bool")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"AUTHORISED_TO_REUSE"),Object(b.b)("td",{parentName:"tr",align:null},"bool")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"AUTHOR TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"NAME"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"PROFILE_IMAGE"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"VIDEO_AUTHOR TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"VIDEO_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"AUTHOR_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"SECTION TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"TITLE"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CATEGORY TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"TITLE"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"SECTION_VIDEO TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"SECTION_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"VIDEO_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CATEGORY_SECTION TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"unique id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CATEGORY_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"SECTION_ID"),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"USERS TABLE")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"id"),Object(b.b)("td",{parentName:"tr",align:null},"INTEGER")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"name"),Object(b.b)("td",{parentName:"tr",align:null},"VARCHAR(30)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"username"),Object(b.b)("td",{parentName:"tr",align:null},"VARCHAR(30)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"email"),Object(b.b)("td",{parentName:"tr",align:null},"VARCHAR(30)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"password_hash"),Object(b.b)("td",{parentName:"tr",align:null},"VARCHAR(100)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"registration_date"),Object(b.b)("td",{parentName:"tr",align:null},"INT")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"terms_and_conditions_checked"),Object(b.b)("td",{parentName:"tr",align:null},"BOOLEAN")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"access_rights"),Object(b.b)("td",{parentName:"tr",align:null},"INT")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"is_email_verified"),Object(b.b)("td",{parentName:"tr",align:null},"BOOLEAN")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"email_verification_date"),Object(b.b)("td",{parentName:"tr",align:null},"INT")))))}O.isMDXComponent=!0}}]);