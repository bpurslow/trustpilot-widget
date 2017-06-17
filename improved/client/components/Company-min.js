"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Company=void 0;var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_utils=require("../utils/utils"),React=require("react"),Company=exports.Company=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=a._getCompany("1");return a.state={company:r},a}return _inherits(t,e),_createClass(t,[{key:"render",value:function e(){var t=require("../img/trustpilot.svg");return React.createElement("section",{className:"widget__wrapper__rating"},React.createElement("section",{className:"rating"},React.createElement("img",{className:"rating__logo",src:t}),React.createElement("div",{className:"rating__companyTitle"},this.state.company.companyTitle),React.createElement("div",{className:"rating__score"},this.state.company.trustscore),React.createElement("div",{className:"rating__reviewTotal"},"Based on ",this.state.company.totalReviews," R"),React.createElement("img",{className:"rating__stars",style:{width:"100%"},src:(0,_utils.getStarImage)(this.state.company.starRating)})))}},{key:"_getCompany",value:function e(t){var a="Fake Company LTD",r=(0,_utils.randomInt)(0,10),n=Math.floor((0,_utils.randomInt)(1,3e3)),o=Math.ceil(r/2);return{companyTitle:"Fake Company LTD",trustscore:r.toFixed(1),totalReviews:n,starRating:o.toString()}}}]),t}(React.Component);exports.default=Company;