!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"9p9yL":"index.605127a1.js","2dPzb":"amazon.3c3f1cde.webp","82OGy":"amazon.b0a6f23c.png","glj45":"apple.78ef44cc.webp","cKFxX":"apple.34efda77.png","kLXsS":"bookshop.bf5b4137.webp","jA3cI":"bookshop.11f8a97b.png","bBRCa":"shopping-list.5f3f2636.js"}'));var a={};function i(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}};var c={},s=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function y(){}function m(){}function g(){}var b={};s(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(O([])));w&&w!==n&&r.call(w,a)&&(b=w);var L=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return m.prototype=g,s(L,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(H),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),H(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;H(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var l=o("hrrt1");var u;u=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("2dPzb");var d;d=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("82OGy");var f;f=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("glj45");var p;p=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("cKFxX");var h;h=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("kLXsS");var v;v=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("jA3cI");var y=o("4LMMA"),m=(l=o("hrrt1"),o("i9Oqj")),g=new(0,l.SwaggerAPI),b=document.querySelector(".backdrop"),k=document.querySelector(".modal-close-btn"),w=document.querySelector(".modal-btn"),L=document.querySelector(".modal-info"),E=document.querySelector(".modal-book"),x={};function _(){document.querySelectorAll(".book-link").forEach((function(t){return t.addEventListener("click",S)}))}function S(t){return H.apply(this,arguments)}function H(){return(H=t(a)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),document.body.style.overflow="hidden",b.classList.toggle("is-hidden"),b.addEventListener("click",C),window.addEventListener("keydown",R),k.addEventListener("click",N),t.prev=6,g.bookId=n.currentTarget.dataset.id,t.next=10,g.fetchBookById();case 10:r=t.sent,x=r.data,console.log(x),B(x),j(x),w.addEventListener("click",O),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6);case 21:case"end":return t.stop()}}),e,null,[[6,18]])})))).apply(this,arguments)}function j(t){var e=y.default.load("bookList");if(e&&0!==e.length){var n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){if(book=a.value,book.title===t.title)return void A();q()}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}else q()}function O(){var t=y.default.load("bookList"),e=document.querySelector(".modal-book-name").textContent;"add to shopping list"===w.textContent?(y.default.addBookToStorage(x),A(),(0,m.countBook)()):(t.forEach((function(t,n,r){if(t.title===e)return r.splice(n,1)})),y.default.save("bookList",t),0===t.length&&y.default.remove("bookList"),(0,m.countBook)(),q())}function q(){w.textContent="add to shopping list",L.style.display="none"}function A(){w.textContent="remove from the shopping list",L.style.display="block"}function B(e){var n='<img\nclass="modal-img"\nsrc='.concat(e.book_image,'\nalt="Book cover"\n/>\n<div class="modal-info-container">\n<p class="modal-book-name">').concat(e.title,'</p>\n<p class="modal-book-author">').concat(e.author,'</p>\n<p class="modal-list-name is-hidden">').concat(e.list_name,'</p>\n<p class="modal-book-desc">').concat(e.description,'\n</p>\n<div class="modal-icons-container">\n  <a href="').concat(e.buy_links[0].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(t(u),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(t(d),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(t(d),'"\n        alt="Amazon"\n      /> </picture\n  ></a>\n  <a href="').concat(e.buy_links[1].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(t(f),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(t(p),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(t(p),'"\n        alt="Apple Books"\n      /> </picture\n  ></a>\n  <a href="').concat(e.buy_links[4].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(t(h),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(t(v),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(t(v),'"\n        alt="Bookshop"\n      /></picture\n  ></a>\n</div>\n</div>');E.innerHTML=n}function R(t){"Escape"===t.key&&N()}function C(t){t.target===b&&N()}function N(){b.classList.toggle("is-hidden"),document.body.style.overflow="visible",b.removeEventListener("click",C),window.removeEventListener("keydown",R),k.removeEventListener("click",N)}var T,F=document.querySelector(".aside-list"),P=document.querySelector(".aside-title"),M=document.querySelector(".main-content"),I=new(0,l.SwaggerAPI),G=(T=t(a)(t(c).mark((function e(){var n,r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.fetchBooksCategoryList();case 3:n=t.sent.data,r=n.map((function(t){return'<a class="aside-link" ><li class="aside-item">'.concat(t.list_name,"</li></a>")})).join(""),F.innerHTML=r,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])}))),function(){return T.apply(this,arguments)});G();var U=null;F.addEventListener("click",(function(e){var n=e.target.textContent;I.categoryName=n,U&&U.classList.remove("active"),(U=e.target).classList.add("active"),P.classList.remove("active");var r=function(){var e=t(a)(t(c).mark((function e(){var r,o,a,i,s,l;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.fetchBooksByCategory(n);case 3:r=t.sent.data,console.log(r),o=r[0].list_name,a=o.split(" "),i=a[a.length-1],s=a.slice(0,a.length-1).join(" "),l="".concat(s,' <span class="categories-title-decor">').concat(i,"</span>"),M.innerHTML='<h1 class="categories-title">'.concat(l,'</h1> <ul class="categories-item">').concat(r.map((function(t){var e=t.book_image,n=t.description,r=t.title,o=t.author,a=t._id;return'\n\n<li class="category-list-item">\n<a class="book-link" href="" data-id = "'.concat(a,'">\n<div class="book-thumb">\n<img class="book-image" src="').concat(e,'" alt="').concat(n,'" />\n<div class="book-overlay">\n<p class="book-overlay-text">quick view</p>\n</div>\n</div>\n<div class="book-card-content">\n<h2 class="book-title">').concat(r,'</h2>\n<p class="book-author">').concat(o,"</p>\n</div>\n</a>\n</li>")})).join(""),"</ul>"),_(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();r()})),o("71ZRj");var J=document.getElementById("mobile-menu-modal"),z=document.querySelector(".js-open-menu-burger"),D=document.querySelector(".close-mobile-modal-btn");z.addEventListener("click",(function(){J.style.display="block",z.classList.add("hidden"),D.classList.remove("hidden"),document.body.classList.add("modal-open")})),D.addEventListener("click",(function(){J.style.display="none",z.classList.remove("hidden"),D.classList.add("hidden"),document.body.classList.remove("modal-open")})),window.addEventListener("DOMContentLoaded",(function(){J.style.display="none",D.classList.add("hidden")})),o("i8Q71");l=o("hrrt1");function X(t){return t.map((function(t){var e=t.book_image,n=t.description,r=t.title,o=t.author,a=t._id;return'<li class="books-list-item">\n                 <a class="book-link" href="" data-id="'.concat(a,'">\n                    <div class="book-thumb">\n                      <img class="book-image" src="').concat(e,'" alt="').concat(n,'" />\n\n                        <div class="book-overlay">\n                       <p class="book-overlay-text">quick view</p>\n                       </div>\n                       </div>                     \n                     <div class="book-card-content">\n                     <h2 class="book-title">').concat(r,'</h2>\n                     <p class="book-author">').concat(o,"</p>\n                     </div>\n                 </a>                    \n              </li>")})).join("")}var K=document.querySelector(".category-list"),Y=document.querySelector(".home-title"),Q=new(0,l.SwaggerAPI),W=0;function Z(){return(Z=t(a)(t(c).mark((function e(){var n,r,o,a,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.fetchTopBooks();case 3:for(n=t.sent.data,r=0;r<4;r++)o=n[r].books,a=0,W<=767&&(a=1),W>=768&&W<1440&&(a=3),W>=1440&&(a=5),i='<li class="category-list-item top-list-item">\n        <p class="category-name" data-category-name="'.concat(o[0].list_name,'">').concat(o[0].list_name,'</p>\n        <ul class="books-list">\n          ').concat(X(o.slice(0,a)),'\n        </ul>\n       <button class="category-list-button">see more</button>  \n      </li>'),K.insertAdjacentHTML("beforeend",i),V();t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:_();case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function V(){document.querySelectorAll(".category-list-button").forEach((function(t){t.addEventListener("click",$)}))}function $(t){return tt.apply(this,arguments)}function tt(){return(tt=t(a)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n.target.previousElementSibling.previousElementSibling.textContent,Q.categoryName=r,t.next=5,Q.fetchBooksByCategory();case 5:o=t.sent.data,Y.innerHTML=et(r),K.classList.add("category-list-click"),K.innerHTML=X(o),nt(r),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function et(t){var e=t.split(" "),n=e[e.length-1],r=e.slice(0,e.length-1).join(" ");return'<span class="home-title-decor">'.concat(r," </span>").concat(n)}function nt(t){var e=document.querySelectorAll(".aside-item"),n=document.querySelector(".aside-title");e.forEach((function(e){t===e.textContent&&(n.classList.toggle("active"),e.classList.toggle("active"))}))}onload=function(t){W=t.target.body.clientWidth},function(){Z.apply(this,arguments)}(),o("b3EoS")}();
//# sourceMappingURL=index.605127a1.js.map