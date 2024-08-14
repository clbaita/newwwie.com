(()=>{"use strict";var e,t={400:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>v,Fragment:()=>y,cloneElement:()=>B,createContext:()=>O,createElement:()=>_,createRef:()=>g,h:()=>_,hydrate:()=>E,isValidElement:()=>r,options:()=>s,render:()=>z,toChildArray:()=>j});var o,s,i,r,a,l,c,u={},p=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n){var s,i,r,a={};for(r in t)"key"==r?s=t[r]:"ref"==r?i=t[r]:a[r]=t[r];if(arguments.length>2&&(a.children=arguments.length>3?o.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===a[r]&&(a[r]=e.defaultProps[r]);return f(e,a,s,i,null)}function f(e,t,n,o,r){var a={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++i:r};return null==r&&null!=s.vnode&&s.vnode(a),a}function g(){return{current:null}}function y(e){return e.children}function v(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function k(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return k(e)}}function b(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!x.__r++||l!==s.debounceRendering)&&((l=s.debounceRendering)||setTimeout)(x)}function x(){for(var e;x.__r=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,n,o,s,i,r;e.__d&&(i=(s=(t=e).__v).__e,(r=t.__P)&&(n=[],(o=d({},s)).__v=s.__v+1,H(r,s,o,t.__n,void 0!==r.ownerSVGElement,null!=s.__h?[i]:null,n,null==i?w(s):i,s.__h),I(n,s),s.__e!=i&&k(s)))}))}function T(e,t,n,o,s,i,r,a,l,c){var h,d,m,_,g,v,k,b=o&&o.__k||p,x=b.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(_=n.__k[h]=null==(_=t[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?f(null,_,null,null,_):Array.isArray(_)?f(y,{children:_},null,null,null):_.__b>0?f(_.type,_.props,_.key,null,_.__v):_)){if(_.__=n,_.__b=n.__b+1,null===(m=b[h])||m&&_.key==m.key&&_.type===m.type)b[h]=void 0;else for(d=0;d<x;d++){if((m=b[d])&&_.key==m.key&&_.type===m.type){b[d]=void 0;break}m=null}H(e,_,m=m||u,s,i,r,a,l,c),g=_.__e,(d=_.ref)&&m.ref!=d&&(k||(k=[]),m.ref&&k.push(m.ref,null,_),k.push(d,_.__c||g,_)),null!=g?(null==v&&(v=g),"function"==typeof _.type&&_.__k===m.__k?_.__d=l=S(_,l,e):l=D(e,_,m,b,g,l),"function"==typeof n.type&&(n.__d=l)):l&&m.__e==l&&l.parentNode!=e&&(l=w(m))}for(n.__e=v,h=x;h--;)null!=b[h]&&("function"==typeof n.type&&null!=b[h].__e&&b[h].__e==n.__d&&(n.__d=w(o,h+1)),M(b[h],b[h]));if(k)for(h=0;h<k.length;h++)L(k[h],k[++h],k[++h])}function S(e,t,n){for(var o,s=e.__k,i=0;s&&i<s.length;i++)(o=s[i])&&(o.__=e,t="function"==typeof o.type?S(o,t,n):D(n,o,o,s,o.__e,t));return t}function j(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){j(e,t)})):t.push(e)),t}function D(e,t,n,o,s,i){var r,a,l;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||s!=i||null==s.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(s),r=null;else{for(a=i,l=0;(a=a.nextSibling)&&l<o.length;l+=2)if(a==s)break e;e.insertBefore(s,i),r=i}return void 0!==r?r:s.nextSibling}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||h.test(t)?n:n+"px"}function N(e,t,n,o,s){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||C(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||C(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?U:P,i):e.removeEventListener(t,i?U:P,i);else if("dangerouslySetInnerHTML"!==t){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function P(e){this.l[e.type+!1](s.event?s.event(e):e)}function U(e){this.l[e.type+!0](s.event?s.event(e):e)}function H(e,t,n,o,i,r,a,l,c){var u,p,h,m,_,f,g,w,k,b,x,S,j,D=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,l=t.__e=n.__e,t.__h=null,r=[l]),(u=s.__b)&&u(t);try{e:if("function"==typeof D){if(w=t.props,k=(u=D.contextType)&&o[u.__c],b=u?k?k.props.value:u.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in D&&D.prototype.render?t.__c=p=new D(w,b):(t.__c=p=new v(w,b),p.constructor=D,p.render=A),k&&k.sub(p),p.props=w,p.state||(p.state={}),p.context=b,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=D.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,D.getDerivedStateFromProps(w,p.__s))),m=p.props,_=p.state,h)null==D.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==D.getDerivedStateFromProps&&w!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,b),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,b)||t.__v===n.__v){p.props=w,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&a.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,b),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,_,f)}))}if(p.context=b,p.props=w,p.__v=t,p.__P=e,x=s.__r,S=0,"prototype"in D&&D.prototype.render)p.state=p.__s,p.__d=!1,x&&x(t),u=p.render(p.props,p.state,p.context);else do{p.__d=!1,x&&x(t),u=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++S<25);p.state=p.__s,null!=p.getChildContext&&(o=d(d({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(f=p.getSnapshotBeforeUpdate(m,_)),j=null!=u&&u.type===y&&null==u.key?u.props.children:u,T(e,Array.isArray(j)?j:[j],t,n,o,i,r,a,l,c),p.base=t.__e,t.__h=null,p.__h.length&&a.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==r&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=W(n.__e,t,n,o,i,r,a,c);(u=s.diffed)&&u(t)}catch(e){t.__v=null,(c||null!=r)&&(t.__e=l,t.__h=!!c,r[r.indexOf(l)]=null),s.__e(e,t,n)}}function I(e,t){s.__c&&s.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){s.__e(e,t.__v)}}))}function W(e,t,n,s,i,r,a,l){var c,p,h,d=n.props,_=t.props,f=t.type,g=0;if("svg"===f&&(i=!0),null!=r)for(;g<r.length;g++)if((c=r[g])&&"setAttribute"in c==!!f&&(f?c.localName===f:3===c.nodeType)){e=c,r[g]=null;break}if(null==e){if(null===f)return document.createTextNode(_);e=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,_.is&&_),r=null,l=!1}if(null===f)d===_||l&&e.data===_||(e.data=_);else{if(r=r&&o.call(e.childNodes),p=(d=n.props||u).dangerouslySetInnerHTML,h=_.dangerouslySetInnerHTML,!l){if(null!=r)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(function(e,t,n,o,s){var i;for(i in n)"children"===i||"key"===i||i in t||N(e,i,null,n[i],o);for(i in t)s&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||N(e,i,t[i],n[i],o)}(e,_,d,i,l),h)t.__k=[];else if(g=t.props.children,T(e,Array.isArray(g)?g:[g],t,n,s,i&&"foreignObject"!==f,r,a,r?r[0]:n.__k&&w(n,0),l),null!=r)for(g=r.length;g--;)null!=r[g]&&m(r[g]);l||("value"in _&&void 0!==(g=_.value)&&(g!==e.value||"progress"===f&&!g||"option"===f&&g!==d.value)&&N(e,"value",g,d.value,!1),"checked"in _&&void 0!==(g=_.checked)&&g!==e.checked&&N(e,"checked",g,d.checked,!1))}return e}function L(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){s.__e(e,n)}}function M(e,t,n){var o,i;if(s.unmount&&s.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||L(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){s.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&M(o[i],t,"function"!=typeof e.type);n||null==e.__e||m(e.__e),e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function z(e,t,n){var i,r,a;s.__&&s.__(e,t),r=(i="function"==typeof n)?null:n&&n.__k||t.__k,a=[],H(t,e=(!i&&n||t).__k=_(y,null,[e]),r||u,u,void 0!==t.ownerSVGElement,!i&&n?[n]:r?null:t.firstChild?o.call(t.childNodes):null,a,!i&&n?n:r?r.__e:t.firstChild,i),I(a,e)}function E(e,t){z(e,t,E)}function B(e,t,n){var s,i,r,a=d({},e.props);for(r in t)"key"==r?s=t[r]:"ref"==r?i=t[r]:a[r]=t[r];return arguments.length>2&&(a.children=arguments.length>3?o.call(arguments,2):n),f(e.type,a,s||e.key,i||e.ref,null)}function O(e,t){var n={__c:t="__cC"+c++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(b)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}o=p.slice,s={__e:function(e,t,n,o){for(var s,i,r;t=t.__;)if((s=t.__c)&&!s.__)try{if((i=s.constructor)&&null!=i.getDerivedStateFromError&&(s.setState(i.getDerivedStateFromError(e)),r=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e,o||{}),r=s.__d),r)return s.__E=s}catch(t){e=t}throw e}},i=0,r=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=y,a=[],x.__r=0,c=0},584:(e,t,n)=>{n.r(t),n.d(t,{Fragment:()=>o.Fragment,jsx:()=>i,jsxDEV:()=>i,jsxs:()=>i});var o=n(400),s=0;function i(e,t,n,i,r){var a,l,c={};for(l in t)"ref"==l?a=t[l]:c[l]=t[l];var u={type:e,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--s,__source:r,__self:i};if("function"==typeof e&&(a=e.defaultProps))for(l in a)void 0===c[l]&&(c[l]=a[l]);return o.options.vnode&&o.options.vnode(u),u}},198:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Communities=void 0;var o=n(584),s=n(400),i=n(839),r=n(403);t.Communities=function(){return r.CommunityData.map((function(e){return(0,o.jsx)(i.CommunityCard,{data:e})}))},(0,s.render)((0,o.jsx)(t.Communities,{}),document.getElementById("groups"))},839:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityCard=void 0;var o=n(584);t.CommunityCard=function(e){var t=e.data,n=t.name,s=t.location,i=t.period,r=i.interval,a=i.day,l=i.weekDay,c=t.links,u=c.twitter,p=c.facebook,h=c.website,d=c.meetUp,m=c.linkedIn,_=t.demographic,f=t.format;return(0,o.jsxs)("div",{class:"card",children:[(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:h||d,children:n})}),(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Links:"}),(0,o.jsx)("dd",{children:(0,o.jsxs)("ul",{children:[m?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:m,rel:"external",children:"LinkedIn"})}):"",p?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:p,rel:"external",children:"Facebook"})}):"",d?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:d,rel:"external",children:"MeetUp"})}):"",u?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:u,rel:"external",children:"Twitter"})}):""]})}),(0,o.jsx)("dt",{children:"When:"}),(0,o.jsxs)("dd",{children:[r,", ",l," ",a]}),(0,o.jsx)("dt",{children:"Where:"}),(0,o.jsx)("dd",{children:s}),(0,o.jsx)("dt",{children:"Who:"}),(0,o.jsx)("dd",{children:_}),(0,o.jsx)("dt",{children:"Format:"}),(0,o.jsx)("dd",{children:f})]})]})}},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityData=void 0,t.CommunityData=[{name:"Newcastle Coders Group",location:"ICT Building, University of Newcastle",period:{interval:"Monthly",day:"2nd",weekDay:"Wed"},links:{twitter:"https://twitter.com/ncgau",facebook:"https://www.facebook.com/groups/ncgau/",website:"http://ncg.asn.au/",meetUp:"http://www.meetup.com/Newcastle-Coders-Group/"},demographic:"Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",format:"Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."},{name:"Newcastle Women and Gender Diverse People in Tech",location:"NewyTechPeople Office",period:{interval:"Monthly",day:"2nd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"},demographic:"Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",format:"The format varies but will often include networking/socialising and a presentation."},{name:"Newcastle Cybersecurity Group",location:"University of Newcastle I2N Hub Honeysuckle",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{linkedIn:"https://www.linkedin.com/company/newcastlecybersecuritygroup/",meetUp:"https://www.meetup.com/Newcastle-Cyber-Security-Group/"},demographic:"Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",format:"You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."},{name:"Newcatle IoT Pioneers",location:"Stag and Hunter, Mayfield",period:{interval:"Monthly",day:"1st",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Newcastle-IoT-Pioneers/"},demographic:"In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",format:"Organised presentations"},{name:"Hunter Data Analytics",location:"Check meetup event details (but usually at University of Newcastle City Campus)",period:{interval:"Monthly",day:"3rd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Hunter-Data-Analytics/",linkedIn:"https://www.linkedin.com/company/hunter-data-analytics/",twitter:"https://twitter.com/hunteranalytics"},demographic:"Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",format:"Networking/chats, followed by organised presentations, followed by pub."}]},105:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Meetup=void 0;var o=n(584),s=n(400),i=n(822),r=function(){function e(){this.render(i.events)}return e.prototype.render=function(e){e.length>0?(0,s.render)(this.renderList(e),document.getElementById("meetupEvents")):(0,s.render)((0,o.jsx)("li",{children:(0,o.jsx)("p",{children:"It appears there are no upcoming events. Check back soon."})}),document.getElementById("meetupEvents"))},e.prototype.renderList=function(e){var t=this;return e.map((function(e,n){var s=e.event,i=e.group,r=new Date(s.dateTime),a=t.niceDay(r.getDay()),l=t.niceMonth(r.getMonth()),c=t.niceTime(r);return(0,o.jsxs)("li",{class:"eventItem",children:[(0,o.jsxs)("div",{class:"eventItem-left",children:[t.renderImage(i,s.photoUrl),(0,o.jsxs)("div",{class:"eventItem-start",children:[(0,o.jsx)("span",{class:"eventItem-start_day",children:a}),(0,o.jsx)("span",{class:"eventItem-start_time",children:c}),(0,o.jsxs)("span",{class:"eventItem-start_month",children:[r.getDate()," ",l]}),(0,o.jsx)("span",{class:"eventItem-start_year",children:r.getFullYear()})]})]}),(0,o.jsxs)("div",{class:"eventItem-right",children:[(0,o.jsx)("p",{class:"eventItem-title",children:s.title}),(0,o.jsxs)("p",{class:"eventItem-group",children:["Hosted by: ",(0,o.jsx)("a",{href:"https://meetup.com/".concat(i.urlname),children:i.name})]}),(0,o.jsxs)("p",{class:"eventItem-description",children:[s.description.substring(0,240),"..."]}),(0,o.jsxs)("ul",{class:"eventItem-stats",children:[(0,o.jsxs)("li",{class:"eventItem-stats_rsvp",title:"Number of people who have RSVP'd vs. the total number of spots",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 482.9 482.9",style:"enable-background:new 0 0 482.9 482.9;",children:(0,o.jsx)("g",{children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"}),(0,o.jsx)("path",{d:"M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z"})]})})}),s.going," / ",s.maxTickets?s.maxTickets:"∞"]}),(0,o.jsxs)("li",{class:"eventItem-stats_duration",title:"Duration of the event",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 60 60",style:"enable-background:new 0 0 60 60;",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"}),(0,o.jsx)("path",{d:"M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"})]})}),t.parseIsoDuration(s.duration)]}),(0,o.jsxs)("li",{class:"eventItem-stats_location",title:"Location of the event",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 54.757 54.757",style:"enable-background:new 0 0 54.757 54.757;",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"}),(0,o.jsx)("path",{d:"M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031C45.576,13.08,46.321,24.468,41.099,31.431z"})]})}),t.renderLocationLink(s.venue)]})]})]}),(0,o.jsx)("a",{class:"button",href:s.eventUrl,children:"More info"})]})}))},e.prototype.renderImage=function(e,t){var n="",s="eventItem-image";return e.groupPhoto?n=(0,o.jsx)("img",{src:this.renderImageLink(e.groupPhoto),alt:e.name,class:"eventItem-groupPhoto"}):t?n=(0,o.jsx)("img",{src:t,alt:e.name,class:"eventItem-image_photo"}):s+=" eventItem-image_notSupplied",(0,o.jsx)("div",{class:s,children:n})},e.prototype.renderLocationLink=function(e){return e?e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?(0,o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURIComponent(e.name),"/@").concat(e.lat,",").concat(e.lng,",16z"),target:"_blank",children:[(0,o.jsxs)("span",{children:[e.address,", ",e.city," -"," "]}),"View on Google"]}):(0,o.jsxs)("em",{children:[(0,o.jsxs)("span",{children:[e.address,","]})," ",e.city]}):(0,o.jsx)("em",{children:"Not specified"})},e.prototype.renderImageLink=function(e,t){return void 0===t&&(t="676x380"),"".concat(e.baseUrl).concat(e.id,"/").concat(t,".webp")},e.prototype.niceTime=function(e){try{return e.toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"2-digit"})}catch(n){var t=this.niceHours(e.getHours());return"".concat(t,":").concat(e.getMinutes())}},e.prototype.niceHours=function(e){return(e+24)%12||12},e.prototype.niceDay=function(e,t){void 0===t&&(t=!0);var n={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.niceMonth=function(e,t){void 0===t&&(t=!0);var n={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.parseIsoDuration=function(e){var t=e.match(/P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/).groups;return Object.keys(t).reduce((function(e,n){return t[n]?e+"".concat(t[n]," ").concat(n):e}),"")},e}();t.Meetup=r},822:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.events=void 0,t.events=[{event:{title:"data.AUG <- Painting with numbers: Newcastle’s Tech Community",description:"Painting with numbers: Newcastle’s Tech Community\n\n🗣️**Talk Description**:\nIn this presentation, we’ll be taking a look at the data behind the Newcastle tech community. Many of these insights will be taken from Sarah’s latest project, NTP’s Salary Guide for 2024-25, complemented by insights from LinkedIn’s Data Dashboard, data collected from SEEK and more. We’ll take a walk through what some of these numbers mean for the future of tech in Newcastle, how we can collectively keep nudging the dial in the right direction and listen to Sarah furiously defend her choice to use pie charts.\n\n🎙️**Speaker Bio**:\nSarah Frazer is passionate about gathering way too much specific knowledge on everything from Neopet’s store prices to DNS structures to Australian spider species. She’s the Head of Operations at NewyTechPeople, Newcastle’s specialist tech recruitment agency, co-founder of Coded Diversity, a not-for-profit focused on making the technology industry more sustainable for women and gender-diverse people, and Chair of /NEW, Newcastle’s largest technology conference. She has been described as a huge nerd by many social circles, and they’re right.\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.",dateTime:"2024-08-15T17:30+10:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848981",going:26,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/522373841/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"NCSG August 2024 | Placeholder Event",description:"This event is a placeholder event\n\n**Event details:**\n\nDate: **WEDNESDAY** August 28th\n\nTime: 18:00-20:00\n\nVenue: 16 Honeysuckle Drive, Newcastle (The University of Newcastle 'Q Building') - second floor\n\nFood: PIZZAS Provided, please inform us of dietary requirements when RSVPing\n\nDrink: Non-alcoholic provided, come and grab a few with us at the pub after if you'd like!\n\n**Getting there/parking/public transport:**\n\n* Event location is [here](https://goo.gl/maps/rCqoDx8MbjqyeHTMA) \\- please use the western door\\. UoN requires us to keep this door closed for safety\\, so there will be someone there to let you in\\.\n* Please try and get in the door before 6:10pm. We check occasionally but you might get stuck outside in the cold for a while.\n* The [car park behind the building](https://goo.gl/maps/FzNNQfbAxxW38GNr7) is free after 5PM, and generally has plenty of room.\n* The closest public transport point is [Honeysuckle Light Rail Station](https://goo.gl/maps/3P2BpkiMaCeZ8isk9), which will take you to Newcastle Interchange and beyond every \\~7min or so. Walk along Honeysuckle Drive for a better-lit pathway.\n\n**The rest:**\n\nIf you’re experiencing any symptoms representative of COVID-19, please don’t attend. We’ll miss you, but the health/safety of attendees is paramount.\n\nNCSG is a community group determined to improve and uplift the Newcastle cybersecurity community. We meet monthly (on the last Wednesday of each month) and have a bunch of interesting speakers, from local legends to heavy hitters in the enterprise world.\n\n**Want to learn more?** Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/newcastlecybersecuritygroup/) or visit newwwie.com, join the community and come and chat in the #security channel.\n\n**Keen on speaking? Reach out at the event, or message us here.**",dateTime:"2024-08-28T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-cyber-security-group/events/298927283",going:7,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/483205216/676x380.webp",venue:null},group:{name:"Newcastle Cyber Security Group",urlname:"Newcastle-Cyber-Security-Group",groupPhoto:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.SEP <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-09-19T17:30+10:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848984",going:3,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972268/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.OCT <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-10-17T17:30+11:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848989",going:4,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972291/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.NOV <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-11-21T17:30+11:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301849003",going:2,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521973471/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}}]}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=o(198),new(o(105).Meetup),new e.Communities})();