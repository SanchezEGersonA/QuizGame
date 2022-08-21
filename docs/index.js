/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={85:function(t,n,r){var e,o,i;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}i=function(){var t="1.13.4",n="object"==("undefined"==typeof self?"undefined":u(self))&&self.self===self&&self||"object"==(void 0===r.g?"undefined":u(r.g))&&r.g.global===r.g&&r.g||Function("return this")()||{},e=Array.prototype,o=Object.prototype,i="undefined"!=typeof Symbol?Symbol.prototype:null,a=e.push,c=e.slice,l=o.toString,f=o.hasOwnProperty,s="undefined"!=typeof ArrayBuffer,p="undefined"!=typeof DataView,h=Array.isArray,d=Object.keys,v=Object.create,y=s&&ArrayBuffer.isView,m=isNaN,g=isFinite,b=!{toString:null}.propertyIsEnumerable("toString"),w=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],x=Math.pow(2,53)-1;function E(t,n){return n=null==n?t.length-1:+n,function(){for(var r=Math.max(arguments.length-n,0),e=Array(r),o=0;o<r;o++)e[o]=arguments[o+n];switch(n){case 0:return t.call(this,e);case 1:return t.call(this,arguments[0],e);case 2:return t.call(this,arguments[0],arguments[1],e)}var i=Array(n+1);for(o=0;o<n;o++)i[o]=arguments[o];return i[n]=e,t.apply(this,i)}}function j(t){var n=u(t);return"function"===n||"object"===n&&!!t}function S(t){return void 0===t}function _(t){return!0===t||!1===t||"[object Boolean]"===l.call(t)}function A(t){var n="[object "+t+"]";return function(t){return l.call(t)===n}}var L=A("String"),O=A("Number"),q=A("Date"),T=A("RegExp"),C=A("Error"),N=A("Symbol"),k=A("ArrayBuffer"),M=A("Function"),I=n.document&&n.document.childNodes;"object"!=("undefined"==typeof Int8Array?"undefined":u(Int8Array))&&"function"!=typeof I&&(M=function(t){return"function"==typeof t||!1});var z=M,B=A("Object"),F=p&&B(new DataView(new ArrayBuffer(8))),P="undefined"!=typeof Map&&B(new Map),D=A("DataView"),Q=F?function(t){return null!=t&&z(t.getInt8)&&k(t.buffer)}:D,R=h||A("Array");function G(t,n){return null!=t&&f.call(t,n)}var V=A("Arguments");!function(){V(arguments)||(V=function(t){return G(t,"callee")})}();var U=V;function W(t){return O(t)&&m(t)}function H(t){return function(){return t}}function $(t){return function(n){var r=t(n);return"number"==typeof r&&r>=0&&r<=x}}function K(t){return function(n){return null==n?void 0:n[t]}}var Y=K("byteLength"),J=$(Y),X=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,Z=s?function(t){return y?y(t)&&!Q(t):J(t)&&X.test(l.call(t))}:H(!1),tt=K("length");function nt(t,n){n=function(t){for(var n={},r=t.length,e=0;e<r;++e)n[t[e]]=!0;return{contains:function(t){return!0===n[t]},push:function(r){return n[r]=!0,t.push(r)}}}(n);var r=w.length,e=t.constructor,i=z(e)&&e.prototype||o,u="constructor";for(G(t,u)&&!n.contains(u)&&n.push(u);r--;)(u=w[r])in t&&t[u]!==i[u]&&!n.contains(u)&&n.push(u)}function rt(t){if(!j(t))return[];if(d)return d(t);var n=[];for(var r in t)G(t,r)&&n.push(r);return b&&nt(t,n),n}function et(t,n){var r=rt(n),e=r.length;if(null==t)return!e;for(var o=Object(t),i=0;i<e;i++){var u=r[i];if(n[u]!==o[u]||!(u in o))return!1}return!0}function ot(t){return t instanceof ot?t:this instanceof ot?void(this._wrapped=t):new ot(t)}function it(t){return new Uint8Array(t.buffer||t,t.byteOffset||0,Y(t))}ot.VERSION=t,ot.prototype.value=function(){return this._wrapped},ot.prototype.valueOf=ot.prototype.toJSON=ot.prototype.value,ot.prototype.toString=function(){return String(this._wrapped)};var ut="[object DataView]";function at(t,n,r,e){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return!1;if(t!=t)return n!=n;var o=u(t);return("function"===o||"object"===o||"object"==u(n))&&function t(n,r,e,o){n instanceof ot&&(n=n._wrapped),r instanceof ot&&(r=r._wrapped);var a=l.call(n);if(a!==l.call(r))return!1;if(F&&"[object Object]"==a&&Q(n)){if(!Q(r))return!1;a=ut}switch(a){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return i.valueOf.call(n)===i.valueOf.call(r);case"[object ArrayBuffer]":case ut:return t(it(n),it(r),e,o)}var c="[object Array]"===a;if(!c&&Z(n)){if(Y(n)!==Y(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;c=!0}if(!c){if("object"!=u(n)||"object"!=u(r))return!1;var f=n.constructor,s=r.constructor;if(f!==s&&!(z(f)&&f instanceof f&&z(s)&&s instanceof s)&&"constructor"in n&&"constructor"in r)return!1}o=o||[];for(var p=(e=e||[]).length;p--;)if(e[p]===n)return o[p]===r;if(e.push(n),o.push(r),c){if((p=n.length)!==r.length)return!1;for(;p--;)if(!at(n[p],r[p],e,o))return!1}else{var h,d=rt(n);if(p=d.length,rt(r).length!==p)return!1;for(;p--;)if(!G(r,h=d[p])||!at(n[h],r[h],e,o))return!1}return e.pop(),o.pop(),!0}(t,n,r,e)}function ct(t){if(!j(t))return[];var n=[];for(var r in t)n.push(r);return b&&nt(t,n),n}function lt(t){var n=tt(t);return function(r){if(null==r)return!1;var e=ct(r);if(tt(e))return!1;for(var o=0;o<n;o++)if(!z(r[t[o]]))return!1;return t!==dt||!z(r[ft])}}var ft="forEach",st=["clear","delete"],pt=["get","has","set"],ht=st.concat(ft,pt),dt=st.concat(pt),vt=["add"].concat(st,ft,"has"),yt=P?lt(ht):A("Map"),mt=P?lt(dt):A("WeakMap"),gt=P?lt(vt):A("Set"),bt=A("WeakSet");function wt(t){for(var n=rt(t),r=n.length,e=Array(r),o=0;o<r;o++)e[o]=t[n[o]];return e}function xt(t){for(var n={},r=rt(t),e=0,o=r.length;e<o;e++)n[t[r[e]]]=r[e];return n}function Et(t){var n=[];for(var r in t)z(t[r])&&n.push(r);return n.sort()}function jt(t,n){return function(r){var e=arguments.length;if(n&&(r=Object(r)),e<2||null==r)return r;for(var o=1;o<e;o++)for(var i=arguments[o],u=t(i),a=u.length,c=0;c<a;c++){var l=u[c];n&&void 0!==r[l]||(r[l]=i[l])}return r}}var St=jt(ct),_t=jt(rt),At=jt(ct,!0);function Lt(t){if(!j(t))return{};if(v)return v(t);var n=function(){};n.prototype=t;var r=new n;return n.prototype=null,r}function Ot(t){return R(t)?t:[t]}function qt(t){return ot.toPath(t)}function Tt(t,n){for(var r=n.length,e=0;e<r;e++){if(null==t)return;t=t[n[e]]}return r?t:void 0}function Ct(t,n,r){var e=Tt(t,qt(n));return S(e)?r:e}function Nt(t){return t}function kt(t){return t=_t({},t),function(n){return et(n,t)}}function Mt(t){return t=qt(t),function(n){return Tt(n,t)}}function It(t,n,r){if(void 0===n)return t;switch(null==r?3:r){case 1:return function(r){return t.call(n,r)};case 3:return function(r,e,o){return t.call(n,r,e,o)};case 4:return function(r,e,o,i){return t.call(n,r,e,o,i)}}return function(){return t.apply(n,arguments)}}function zt(t,n,r){return null==t?Nt:z(t)?It(t,n,r):j(t)&&!R(t)?kt(t):Mt(t)}function Bt(t,n){return zt(t,n,1/0)}function Ft(t,n,r){return ot.iteratee!==Bt?ot.iteratee(t,n):zt(t,n,r)}function Pt(){}function Dt(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))}ot.toPath=Ot,ot.iteratee=Bt;var Qt=Date.now||function(){return(new Date).getTime()};function Rt(t){var n=function(n){return t[n]},r="(?:"+rt(t).join("|")+")",e=RegExp(r),o=RegExp(r,"g");return function(t){return t=null==t?"":""+t,e.test(t)?t.replace(o,n):t}}var Gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Vt=Rt(Gt),Ut=Rt(xt(Gt)),Wt=ot.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Ht=/(.)^/,$t={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Kt=/\\|'|\r|\n|\u2028|\u2029/g;function Yt(t){return"\\"+$t[t]}var Jt=/^\s*(\w|\$)+\s*$/,Xt=0;function Zt(t,n,r,e,o){if(!(e instanceof n))return t.apply(r,o);var i=Lt(t.prototype),u=t.apply(i,o);return j(u)?u:i}var tn=E((function(t,n){var r=tn.placeholder;return function e(){for(var o=0,i=n.length,u=Array(i),a=0;a<i;a++)u[a]=n[a]===r?arguments[o++]:n[a];for(;o<arguments.length;)u.push(arguments[o++]);return Zt(t,e,this,this,u)}}));tn.placeholder=ot;var nn=E((function(t,n,r){if(!z(t))throw new TypeError("Bind must be called on a function");var e=E((function(o){return Zt(t,e,n,this,r.concat(o))}));return e})),rn=$(tt);function en(t,n,r,e){if(e=e||[],n||0===n){if(n<=0)return e.concat(t)}else n=1/0;for(var o=e.length,i=0,u=tt(t);i<u;i++){var a=t[i];if(rn(a)&&(R(a)||U(a)))if(n>1)en(a,n-1,r,e),o=e.length;else for(var c=0,l=a.length;c<l;)e[o++]=a[c++];else r||(e[o++]=a)}return e}var on=E((function(t,n){var r=(n=en(n,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=n[r];t[e]=nn(t[e],t)}return t})),un=E((function(t,n,r){return setTimeout((function(){return t.apply(null,r)}),n)})),an=tn(un,ot,1);function cn(t){return function(){return!t.apply(this,arguments)}}function ln(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}}var fn=tn(ln,2);function sn(t,n,r){n=Ft(n,r);for(var e,o=rt(t),i=0,u=o.length;i<u;i++)if(n(t[e=o[i]],e,t))return e}function pn(t){return function(n,r,e){r=Ft(r,e);for(var o=tt(n),i=t>0?0:o-1;i>=0&&i<o;i+=t)if(r(n[i],i,n))return i;return-1}}var hn=pn(1),dn=pn(-1);function vn(t,n,r,e){for(var o=(r=Ft(r,e,1))(n),i=0,u=tt(t);i<u;){var a=Math.floor((i+u)/2);r(t[a])<o?i=a+1:u=a}return i}function yn(t,n,r){return function(e,o,i){var u=0,a=tt(e);if("number"==typeof i)t>0?u=i>=0?i:Math.max(i+a,u):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return e[i=r(e,o)]===o?i:-1;if(o!=o)return(i=n(c.call(e,u,a),W))>=0?i+u:-1;for(i=t>0?u:a-1;i>=0&&i<a;i+=t)if(e[i]===o)return i;return-1}}var mn=yn(1,hn,vn),gn=yn(-1,dn);function bn(t,n,r){var e=(rn(t)?hn:sn)(t,n,r);if(void 0!==e&&-1!==e)return t[e]}function wn(t,n,r){var e,o;if(n=It(n,r),rn(t))for(e=0,o=t.length;e<o;e++)n(t[e],e,t);else{var i=rt(t);for(e=0,o=i.length;e<o;e++)n(t[i[e]],i[e],t)}return t}function xn(t,n,r){n=Ft(n,r);for(var e=!rn(t)&&rt(t),o=(e||t).length,i=Array(o),u=0;u<o;u++){var a=e?e[u]:u;i[u]=n(t[a],a,t)}return i}function En(t){var n=function(n,r,e,o){var i=!rn(n)&&rt(n),u=(i||n).length,a=t>0?0:u-1;for(o||(e=n[i?i[a]:a],a+=t);a>=0&&a<u;a+=t){var c=i?i[a]:a;e=r(e,n[c],c,n)}return e};return function(t,r,e,o){var i=arguments.length>=3;return n(t,It(r,o,4),e,i)}}var jn=En(1),Sn=En(-1);function _n(t,n,r){var e=[];return n=Ft(n,r),wn(t,(function(t,r,o){n(t,r,o)&&e.push(t)})),e}function An(t,n,r){n=Ft(n,r);for(var e=!rn(t)&&rt(t),o=(e||t).length,i=0;i<o;i++){var u=e?e[i]:i;if(!n(t[u],u,t))return!1}return!0}function Ln(t,n,r){n=Ft(n,r);for(var e=!rn(t)&&rt(t),o=(e||t).length,i=0;i<o;i++){var u=e?e[i]:i;if(n(t[u],u,t))return!0}return!1}function On(t,n,r,e){return rn(t)||(t=wt(t)),("number"!=typeof r||e)&&(r=0),mn(t,n,r)>=0}var qn=E((function(t,n,r){var e,o;return z(n)?o=n:(n=qt(n),e=n.slice(0,-1),n=n[n.length-1]),xn(t,(function(t){var i=o;if(!i){if(e&&e.length&&(t=Tt(t,e)),null==t)return;i=t[n]}return null==i?i:i.apply(t,r)}))}));function Tn(t,n){return xn(t,Mt(n))}function Cn(t,n,r){var e,o,i=-1/0,a=-1/0;if(null==n||"number"==typeof n&&"object"!=u(t[0])&&null!=t)for(var c=0,l=(t=rn(t)?t:wt(t)).length;c<l;c++)null!=(e=t[c])&&e>i&&(i=e);else n=Ft(n,r),wn(t,(function(t,r,e){((o=n(t,r,e))>a||o===-1/0&&i===-1/0)&&(i=t,a=o)}));return i}var Nn=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function kn(t){return t?R(t)?c.call(t):L(t)?t.match(Nn):rn(t)?xn(t,Nt):wt(t):[]}function Mn(t,n,r){if(null==n||r)return rn(t)||(t=wt(t)),t[Dt(t.length-1)];var e=kn(t),o=tt(e);n=Math.max(Math.min(n,o),0);for(var i=o-1,u=0;u<n;u++){var a=Dt(u,i),c=e[u];e[u]=e[a],e[a]=c}return e.slice(0,n)}function In(t,n){return function(r,e,o){var i=n?[[],[]]:{};return e=Ft(e,o),wn(r,(function(n,o){var u=e(n,o,r);t(i,n,u)})),i}}var zn=In((function(t,n,r){G(t,r)?t[r].push(n):t[r]=[n]})),Bn=In((function(t,n,r){t[r]=n})),Fn=In((function(t,n,r){G(t,r)?t[r]++:t[r]=1})),Pn=In((function(t,n,r){t[r?0:1].push(n)}),!0);function Dn(t,n,r){return n in r}var Qn=E((function(t,n){var r={},e=n[0];if(null==t)return r;z(e)?(n.length>1&&(e=It(e,n[1])),n=ct(t)):(e=Dn,n=en(n,!1,!1),t=Object(t));for(var o=0,i=n.length;o<i;o++){var u=n[o],a=t[u];e(a,u,t)&&(r[u]=a)}return r})),Rn=E((function(t,n){var r,e=n[0];return z(e)?(e=cn(e),n.length>1&&(r=n[1])):(n=xn(en(n,!1,!1),String),e=function(t,r){return!On(n,r)}),Qn(t,e,r)}));function Gn(t,n,r){return c.call(t,0,Math.max(0,t.length-(null==n||r?1:n)))}function Vn(t,n,r){return null==t||t.length<1?null==n||r?void 0:[]:null==n||r?t[0]:Gn(t,t.length-n)}function Un(t,n,r){return c.call(t,null==n||r?1:n)}var Wn=E((function(t,n){return n=en(n,!0,!0),_n(t,(function(t){return!On(n,t)}))})),Hn=E((function(t,n){return Wn(t,n)}));function $n(t,n,r,e){_(n)||(e=r,r=n,n=!1),null!=r&&(r=Ft(r,e));for(var o=[],i=[],u=0,a=tt(t);u<a;u++){var c=t[u],l=r?r(c,u,t):c;n&&!r?(u&&i===l||o.push(c),i=l):r?On(i,l)||(i.push(l),o.push(c)):On(o,c)||o.push(c)}return o}var Kn=E((function(t){return $n(en(t,!0,!0))}));function Yn(t){for(var n=t&&Cn(t,tt).length||0,r=Array(n),e=0;e<n;e++)r[e]=Tn(t,e);return r}var Jn=E(Yn);function Xn(t,n){return t._chain?ot(n).chain():n}function Zn(t){return wn(Et(t),(function(n){var r=ot[n]=t[n];ot.prototype[n]=function(){var t=[this._wrapped];return a.apply(t,arguments),Xn(this,r.apply(ot,t))}})),ot}wn(["pop","push","reverse","shift","sort","splice","unshift"],(function(t){var n=e[t];ot.prototype[t]=function(){var r=this._wrapped;return null!=r&&(n.apply(r,arguments),"shift"!==t&&"splice"!==t||0!==r.length||delete r[0]),Xn(this,r)}})),wn(["concat","join","slice"],(function(t){var n=e[t];ot.prototype[t]=function(){var t=this._wrapped;return null!=t&&(t=n.apply(t,arguments)),Xn(this,t)}}));var tr=Zn({__proto__:null,VERSION:t,restArguments:E,isObject:j,isNull:function(t){return null===t},isUndefined:S,isBoolean:_,isElement:function(t){return!(!t||1!==t.nodeType)},isString:L,isNumber:O,isDate:q,isRegExp:T,isError:C,isSymbol:N,isArrayBuffer:k,isDataView:Q,isArray:R,isFunction:z,isArguments:U,isFinite:function(t){return!N(t)&&g(t)&&!isNaN(parseFloat(t))},isNaN:W,isTypedArray:Z,isEmpty:function(t){if(null==t)return!0;var n=tt(t);return"number"==typeof n&&(R(t)||L(t)||U(t))?0===n:0===tt(rt(t))},isMatch:et,isEqual:function(t,n){return at(t,n)},isMap:yt,isWeakMap:mt,isSet:gt,isWeakSet:bt,keys:rt,allKeys:ct,values:wt,pairs:function(t){for(var n=rt(t),r=n.length,e=Array(r),o=0;o<r;o++)e[o]=[n[o],t[n[o]]];return e},invert:xt,functions:Et,methods:Et,extend:St,extendOwn:_t,assign:_t,defaults:At,create:function(t,n){var r=Lt(t);return n&&_t(r,n),r},clone:function(t){return j(t)?R(t)?t.slice():St({},t):t},tap:function(t,n){return n(t),t},get:Ct,has:function(t,n){for(var r=(n=qt(n)).length,e=0;e<r;e++){var o=n[e];if(!G(t,o))return!1;t=t[o]}return!!r},mapObject:function(t,n,r){n=Ft(n,r);for(var e=rt(t),o=e.length,i={},u=0;u<o;u++){var a=e[u];i[a]=n(t[a],a,t)}return i},identity:Nt,constant:H,noop:Pt,toPath:Ot,property:Mt,propertyOf:function(t){return null==t?Pt:function(n){return Ct(t,n)}},matcher:kt,matches:kt,times:function(t,n,r){var e=Array(Math.max(0,t));n=It(n,r,1);for(var o=0;o<t;o++)e[o]=n(o);return e},random:Dt,now:Qt,escape:Vt,unescape:Ut,templateSettings:Wt,template:function(t,n,r){!n&&r&&(n=r),n=At({},n,ot.templateSettings);var e=RegExp([(n.escape||Ht).source,(n.interpolate||Ht).source,(n.evaluate||Ht).source].join("|")+"|$","g"),o=0,i="__p+='";t.replace(e,(function(n,r,e,u,a){return i+=t.slice(o,a).replace(Kt,Yt),o=a+n.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),n})),i+="';\n";var u,a=n.variable;if(a){if(!Jt.test(a))throw new Error("variable is not a bare identifier: "+a)}else i="with(obj||{}){\n"+i+"}\n",a="obj";i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{u=new Function(a,"_",i)}catch(t){throw t.source=i,t}var c=function(t){return u.call(this,t,ot)};return c.source="function("+a+"){\n"+i+"}",c},result:function(t,n,r){var e=(n=qt(n)).length;if(!e)return z(r)?r.call(t):r;for(var o=0;o<e;o++){var i=null==t?void 0:t[n[o]];void 0===i&&(i=r,o=e),t=z(i)?i.call(t):i}return t},uniqueId:function(t){var n=++Xt+"";return t?t+n:n},chain:function(t){var n=ot(t);return n._chain=!0,n},iteratee:Bt,partial:tn,bind:nn,bindAll:on,memoize:function(t,n){var r=function r(e){var o=r.cache,i=""+(n?n.apply(this,arguments):e);return G(o,i)||(o[i]=t.apply(this,arguments)),o[i]};return r.cache={},r},delay:un,defer:an,throttle:function(t,n,r){var e,o,i,u,a=0;r||(r={});var c=function(){a=!1===r.leading?0:Qt(),e=null,u=t.apply(o,i),e||(o=i=null)},l=function(){var l=Qt();a||!1!==r.leading||(a=l);var f=n-(l-a);return o=this,i=arguments,f<=0||f>n?(e&&(clearTimeout(e),e=null),a=l,u=t.apply(o,i),e||(o=i=null)):e||!1===r.trailing||(e=setTimeout(c,f)),u};return l.cancel=function(){clearTimeout(e),a=0,e=o=i=null},l},debounce:function(t,n,r){var e,o,i,u,a,c=function c(){var l=Qt()-o;n>l?e=setTimeout(c,n-l):(e=null,r||(u=t.apply(a,i)),e||(i=a=null))},l=E((function(l){return a=this,i=l,o=Qt(),e||(e=setTimeout(c,n),r&&(u=t.apply(a,i))),u}));return l.cancel=function(){clearTimeout(e),e=i=a=null},l},wrap:function(t,n){return tn(n,t)},negate:cn,compose:function(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}},after:function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},before:ln,once:fn,findKey:sn,findIndex:hn,findLastIndex:dn,sortedIndex:vn,indexOf:mn,lastIndexOf:gn,find:bn,detect:bn,findWhere:function(t,n){return bn(t,kt(n))},each:wn,forEach:wn,map:xn,collect:xn,reduce:jn,foldl:jn,inject:jn,reduceRight:Sn,foldr:Sn,filter:_n,select:_n,reject:function(t,n,r){return _n(t,cn(Ft(n)),r)},every:An,all:An,some:Ln,any:Ln,contains:On,includes:On,include:On,invoke:qn,pluck:Tn,where:function(t,n){return _n(t,kt(n))},max:Cn,min:function(t,n,r){var e,o,i=1/0,a=1/0;if(null==n||"number"==typeof n&&"object"!=u(t[0])&&null!=t)for(var c=0,l=(t=rn(t)?t:wt(t)).length;c<l;c++)null!=(e=t[c])&&e<i&&(i=e);else n=Ft(n,r),wn(t,(function(t,r,e){((o=n(t,r,e))<a||o===1/0&&i===1/0)&&(i=t,a=o)}));return i},shuffle:function(t){return Mn(t,1/0)},sample:Mn,sortBy:function(t,n,r){var e=0;return n=Ft(n,r),Tn(xn(t,(function(t,r,o){return{value:t,index:e++,criteria:n(t,r,o)}})).sort((function(t,n){var r=t.criteria,e=n.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return t.index-n.index})),"value")},groupBy:zn,indexBy:Bn,countBy:Fn,partition:Pn,toArray:kn,size:function(t){return null==t?0:rn(t)?t.length:rt(t).length},pick:Qn,omit:Rn,first:Vn,head:Vn,take:Vn,initial:Gn,last:function(t,n,r){return null==t||t.length<1?null==n||r?void 0:[]:null==n||r?t[t.length-1]:Un(t,Math.max(0,t.length-n))},rest:Un,tail:Un,drop:Un,compact:function(t){return _n(t,Boolean)},flatten:function(t,n){return en(t,n,!1)},without:Hn,uniq:$n,unique:$n,union:Kn,intersection:function(t){for(var n=[],r=arguments.length,e=0,o=tt(t);e<o;e++){var i=t[e];if(!On(n,i)){var u;for(u=1;u<r&&On(arguments[u],i);u++);u===r&&n.push(i)}}return n},difference:Wn,unzip:Yn,transpose:Yn,zip:Jn,object:function(t,n){for(var r={},e=0,o=tt(t);e<o;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r},range:function(t,n,r){null==n&&(n=t||0,t=0),r||(r=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/r),0),o=Array(e),i=0;i<e;i++,t+=r)o[i]=t;return o},chunk:function(t,n){if(null==n||n<1)return[];for(var r=[],e=0,o=t.length;e<o;)r.push(c.call(t,e,e+=n));return r},mixin:Zn,default:ot});return tr._=tr,tr},"object"==u(n)?t.exports=i():void 0===(o="function"==typeof(e=i)?e.call(n,r,n,t):e)||(t.exports=o)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){n=function(){return r};var r={},e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var o=n&&n.prototype instanceof h?n:h,i=Object.create(o.prototype),u=new _(e||[]);return i._invoke=function(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=E(u,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var c=s(t,n,r);if("normal"===c.type){if(e=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(e="completed",r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function s(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p={};function h(){}function d(){}function v(){}var y={};l(y,u,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(A([])));g&&g!==e&&o.call(g,u)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(n,r){function e(i,u,a,c){var l=s(n[i],n,u);if("throw"!==l.type){var f=l.arg,p=f.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(p).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(l.arg)}var i;this._invoke=function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}}function E(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var e=s(r,t.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,p;var o=e.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,e=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return e.next=e}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v,l(b,"constructor",v),l(v,"constructor",d),d.displayName=l(v,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,(function(){return this})),r.AsyncIterator=x,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var u=new x(f(t,n,e,o),i);return r.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(b),l(b,c,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},r.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,e){return u.type="throw",u.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function e(t,n,r,e,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?n(c):Promise.resolve(c).then(e,o)}function o(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}a(void 0)}))}}var i="https://the-trivia-api.com/api",u=function(){var t=o(n().mark((function t(){var r,e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/categories"),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}});case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=o(n().mark((function t(r){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().then(function(){var t=o(n().mark((function t(o){var u,a,c;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=o[r],a=u[u.length-1],t.next=4,fetch("".concat(i,"/questions?").concat(a,"&limit=10"));case 4:return c=t.sent,t.next=7,c.json();case 7:e=t.sent;case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch(console.log);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),c=r(85);function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f,s,p=document.querySelector("section"),h={},d=1,v=function(t){var n,r=!1,e="",o=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return l(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}(document.querySelectorAll("#Question".concat(t)));try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.checked){e=i.value,h["Question".concat(t)].answer===e&&(r=!0);break}}}catch(t){o.e(t)}finally{o.f()}h["Question".concat(t)].userAnswer=e,h["Question".concat(t)].isCorrect=r},y=function(t){t.addEventListener("click",(function(){document.querySelectorAll(".quiz-body")[d-1].style.display="none",t.disabled=!0,t.style.display="none";var n=document.querySelector(".quiz-slide"),r=document.createElement("div");r.classList.add("quiz-result");var e=document.createElement("table");e.innerHTML="\n            <thead>\n                <tr>\n                    <th>Order</th>\n                    <th>Question</th>\n                    <th>Correct Answer</th>\n                    <th>User Answer</th>\n                </tr>\n            </thead>    \n        ";var o=0,i=document.createElement("tbody");for(var u in h){o+=1;var a=document.createElement("tr");h[u].isCorrect?a.classList.add("correct"):a.classList.add("incorrect");var c=document.createElement("td");c.innerText=o;var l=document.createElement("td");l.innerText=h[u].question;var f=document.createElement("td");f.innerText=h[u].answer;var s=document.createElement("td");s.innerText=h[u].userAnswer,a.appendChild(c),a.appendChild(l),a.appendChild(f),a.appendChild(s),i.appendChild(a),console.log(h[u])}e.appendChild(i),r.appendChild(e),n.appendChild(r);var p=document.createElement("div");p.classList.add("quiz-again");var v=document.createElement("a");v.classList.add("again-button"),v.innerText="Try Again",v.setAttribute("href","./index.html"),p.appendChild(v),n.appendChild(p)}))};!function(){p.innerHTML='\n        <div class="quiz-category">\n            <label for="category">Category</label>\n        </div>\n    ';var t=document.querySelector(".quiz-category");(f=document.createElement("select")).name="category";var n=document.createElement("option");n.value="0",n.innerText="",f.appendChild(n),u().then((function(t){var n=Object.keys(t);for(var r in n){var e=document.createElement("option");e.value=n[r],e.innerText=n[r],f.appendChild(e)}})).catch(console.error),t.appendChild(f)}(),(s=f).addEventListener("change",(function(){var t=s.value;if(t&&""!==t&&null!==t){s.disabled=!0;var n=document.createElement("div");n.classList.add("quiz-slide"),a(t).then((function(t){var r=function(r){var e=document.createElement("div");e.classList.add("quiz-body");var o=document.createElement("div");o.classList.add("quiz-question"),o.id="q".concat(Number(r)+1),o.innerHTML="<p>".concat(t[r].question,"</p>");var i=document.createElement("div");i.classList.add("quiz-answers"),i.id="a".concat(Number(r)+1);var u=t[r].incorrectAnswers;u.push(t[r].correctAnswer),(u=c._.shuffle(u)).map((function(t){var n=document.createElement("input");n.type="radio",n.name="Question".concat(Number(r)+1),n.id="Question".concat(Number(r)+1),n.value=t;var e=document.createElement("label");e.setAttribute("for","Question".concat(Number(r)+1)),e.innerText=t;var o=document.createElement("br");i.appendChild(n),i.appendChild(e),i.appendChild(o)})),e.appendChild(o),e.appendChild(i),n.appendChild(e),h["Question".concat(Number(r)+1)]={question:t[r].question,answer:t[r].correctAnswer}};for(var e in t)r(e);var o=document.createElement("div");o.classList.add("quiz-button");var i=document.createElement("button");i.classList.add("next-button"),i.innerHTML="Next &#10095;",o.appendChild(i),n.appendChild(o),p.appendChild(n),function(t){t.addEventListener("click",(function(){var t=document.querySelectorAll(".quiz-body");if(d!==t.length)t[d-1].style.display="none",t[d].style.display="flex",v(d),d+=1;else{var n=document.querySelector(".next-button");n.disabled=!0,n.style.display="none";var r=document.querySelector(".quiz-button"),e=document.createElement("button");e.innerText="Submit",e.classList.add("submit-button"),r.appendChild(e),v(d),y(e)}}))}(i)})).catch(console.error)}}))})()})();