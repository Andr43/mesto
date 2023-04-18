(()=>{"use strict";var e=document.querySelector(".profile__button_edit"),t=document.querySelector(".profile__button_add"),r=document.querySelector(".profile__name"),n=document.querySelector(".profile__job"),o=document.querySelector(".profile__image"),i=document.querySelector(".profile__background"),u=document.querySelector(".profile__button_edit-image"),a=(document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_add"),document.querySelector(".popup-image"),document.forms.edit),c=(document.forms.add,document.querySelector(".popup__field_name")),l=document.querySelector(".popup__field_job"),s=(document.querySelector(".popup__field_heading"),document.querySelector(".popup__field_source"),document.querySelector(".popup-image__image"),document.querySelector(".popup-image__heading"),document.querySelector(".elements__list"),document.querySelector(".card"),document.querySelector(".card__element"),document.querySelector(".card__image"),document.querySelector(".card__heading"),{});function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function e(t,r,n,o){var i=o.handleCardClick,u=o.handlePopupDeleteOpen,a=o.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._userId=n.id,this._cardOwnerId=t.owner._id,this._likesObject=t.likes,this._templateSelector=r,this._handleCardClick=i,this._handlePopupDeleteOpen=u,this._handleLikeClick=a}var t,r;return t=e,(r=[{key:"_createCard",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._createCard(),this._heading=this._element.querySelector(".card__heading"),this._image=this._element.querySelector(".card__image"),this._likes=this._element.querySelector(".card__likes"),this._deleteButton=this._element.querySelector(".card__button_delete"),this._likeButton=this._element.querySelector(".card__button_like"),this._deleteButton.classList.add("visible"),this._heading.textContent=this._name,this._image.alt=this._name,this._image.src=this._link,this._likes.textContent=this._likesObject.length,this._userCheck(),this._setEventListeners(),this._handlePutLikeClick(),this._element}},{key:"deleteElement",value:function(){this._element.remove(),this._element=null}},{key:"_isLiked",value:function(){var e=this;return this._likesObject.some((function(t){return t._id===e._userId}))}},{key:"_handlePutLikeClick",value:function(){this._isLiked()&&this.toggleLikeButton()}},{key:"getLikesFromServer",value:function(e){this._likesObject=e,this._likes.textContent=e.length}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("card__button_like_active")}},{key:"_userCheck",value:function(){this._cardOwnerId===this._userId?this._deleteButton.classList.add("visible"):this._deleteButton.classList.remove("visible")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handlePopupDeleteOpen(e)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._isLiked())})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"!==e.key&&"Esc"!==e.key||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("visible")||t.target.classList.contains("popup__button_close"))&&e.close()}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=S(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},b.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var r,n=t.setCardData;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._setCardData=n,r._form=r._popup.querySelector(".popup__form"),r._fieldList=r._form.querySelectorAll(".popup__field"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._fieldList.forEach((function(t){e[t.id]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._setCardData(e._getInputValues()),t.preventDefault(),e.close()}))}},{key:"close",value:function(){b(w(u.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var O=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this.elementsContainer=document.querySelector(r)}var t,r;return t=e,(r=[{key:"generateCard",value:function(e){var t=this;e.reverse().forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){this.elementsContainer.prepend(this._renderer(e))}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var q=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=r}var t,r;return t=e,(r=[{key:"_showFieldError",value:function(e,t){var r=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),r.textContent=t,r.classList.add(this._errorClass)}},{key:"_hideFieldError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?(this._hideFieldError(e),this._toggleButtonState()):(this._showFieldError(e,e.validationMessage),this._toggleButtonState())}},{key:"_hasInvalidField",value:function(){return this._fieldList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidField(this._fieldList)?this.disableButton():(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._fieldList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._fieldList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t)}))}))}},{key:"disableButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._fieldList.forEach((function(t){e._hideFieldError(t)}))}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var B=function(){function e(t){var r=t.nameSelector,n=t.jobSelector,o=t.avatarSelector,i=t.avatarImageSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._job=document.querySelector(n),this._avatar=document.querySelector(o),this._avatarImage=document.querySelector(i)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.fieldName,r=e.fieldJob;this._name.textContent=t,this._job.textContent=r}},{key:"setImageSource",value:function(e){var t=e.fieldSource;this._avatarImage.src=t}},{key:"hoverUserImage",value:function(e,t){this._avatar.addEventListener("mouseover",(function(){e.classList.add("visible"),t.classList.add("visible")})),this._avatar.addEventListener("mouseout",(function(){e.classList.remove("visible"),t.classList.remove("visible")}))}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=z(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},x.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function U(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(n);if(o){var r=F(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return U(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).popupImage=t._popup.querySelector(".popup-image__image"),t.popupHeading=t._popup.querySelector(".popup-image__heading"),t}return t=u,(r=[{key:"open",value:function(e){this.popupImage.src=e.link,this.popupImage.alt=e.name,this.popupHeading.textContent=e.name,x(F(u.prototype),"open",this).call(this)}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===N(o)?o:String(o)),n)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=M(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},H.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function G(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(n);if(o){var r=K(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return G(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._form=r._popup.querySelector(".popup__form"),r._handleDeleteSubmit=t,r}return t=u,(r=[{key:"open",value:function(e){H(K(u.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;H(K(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleDeleteSubmit(e._card),e.close()}))}}])&&J(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==W(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===W(o)?o:String(o)),n)}var o}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Z=new(function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._authorizationCode=t,this._url=r}var t,r;return t=e,(r=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status,". Проверьте правильность указанного URL-адреса."))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:{authorization:this._authorizationCode}}).then(this._checkStatus)}},{key:"getCards",value:function(){return fetch(this._url+"/cards",{headers:{authorization:this._authorizationCode}}).then(this._checkStatus)}},{key:"updateUserInfo",value:function(e,t){return fetch(this._url+"/users/me",{method:"PATCH",headers:{authorization:this._authorizationCode,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._checkStatus)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:{authorization:this._authorizationCode,"Content-Type":"application/json"},body:JSON.stringify({name:e.heading,link:e.source})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:{authorization:this._authorizationCode}}).then(this._checkStatus)}},{key:"putLike",value:function(e){return fetch(this._url+"/cards/"+e+"/likes",{method:"PUT",headers:{authorization:this._authorizationCode}}).then(this._checkStatus)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/"+e+"/likes",{method:"DELETE",headers:{authorization:this._authorizationCode}}).then(this._checkStatus)}},{key:"updateUserImage",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorizationCode,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkStatus)}}])&&X(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())("61a5c5ab-9b62-4552-b9af-3bc710596f3a","https://nomoreparties.co/v1/cohort-59");Promise.all([Z.getUserInfo(),Z.getCards()]).then((function(e){var t,i,u=(i=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,i)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],l=u[1];r.textContent=c.name,n.textContent=c.about,o.src=c.avatar,a.id=c._id,se.generateCard(l)})).catch((function(e){oe(e)}));var ee=new B({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar",avatarImageSelector:".profile__image"});ee.hoverUserImage(i,u);var te=new V(".popup-image");te.setEventListeners();var re=new Q(".popup_type_delete",(function(e){Z.deleteCard(e._id).then((function(){e.deleteElement()})).catch((function(e){oe(e)}))}));function ne(e){re.open(e)}function oe(e){console.error(e)}function ie(e,t,r){document.querySelector(t).textContent=e?"Сохранение...":r}re.setEventListeners();var ue=new j(".popup_type_edit",{setCardData:function(e){ie(!0,".popup__button_save_edit"),ee.setUserInfo({fieldName:e.name,fieldJob:e.job}),Z.updateUserInfo(e.name,e.job).catch((function(e){oe(e)})).finally((function(){ie(!1,".popup__button_save_edit","Сохранить")}))}});ue.setEventListeners();var ae=new j(".popup_type_add",{setCardData:function(e){ie(!0,".popup__button_save_add"),Z.addNewCard(e).then((function(e){se.addItem(e)})).catch((function(e){oe(e)})).finally((function(){ie(!1,".popup__button_save_add","Создать")}))}});ae.setEventListeners();var ce=new j(".popup_type_edit-avatar",{setCardData:function(e){ie(!0,".popup__button_save_edit-avatar"),ee.setImageSource({fieldSource:e.avatar}),Z.updateUserImage(e.avatar).catch((function(e){oe(e)})).finally((function(){ie(!1,".popup__button_save_edit-avatar","Сохранить")}))}});ce.setEventListeners();var le,se=new O({renderer:function(e){var t=new y(e,".card",a,{handleCardClick:function(){te.open(e)},handlePopupDeleteOpen:ne,handleLikeClick:function(r){r?Z.deleteLike(e._id).then((function(e){t.toggleLikeButton(),t.getLikesFromServer(e.likes)})).catch((function(e){oe(e)})):Z.putLike(e._id).then((function(e){t.toggleLikeButton(),t.getLikesFromServer(e.likes)})).catch((function(e){oe(e)}))}});return t.generateCard()}},".elements__list");e.addEventListener("click",(function(){ue.open();var e=ee.getUserInfo(),t=e.job,r=e.name;c.value=r,l.value=t,s.edit.resetValidation()})),t.addEventListener("click",(function(){ae.open(),s.add.resetValidation()})),u.addEventListener("click",(function(){ce.open(),s["edit-avatar"].resetValidation()})),le={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button_save",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__field_error",errorClass:"popup__error_active"},Array.from(document.querySelectorAll(le.formSelector)).forEach((function(e){var t=new q(le,e),r=e.getAttribute("name");s[r]=t,t.enableValidation()}))})();