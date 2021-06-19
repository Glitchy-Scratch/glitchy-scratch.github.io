webpackJsonp(
  [37],
  {
    10: function (e, n, t) {
      "use strict";
      function r(e) {
        switch (Object.prototype.toString.call(e)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return e instanceof Error;
        }
      }
      function o(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e);
      }
      function a(e) {
        return "[object DOMException]" === Object.prototype.toString.call(e);
      }
      function s(e) {
        return void 0 === e;
      }
      function c(e) {
        return "function" == typeof e;
      }
      function l(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function u(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function p(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function d(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      function f(e) {
        return e !== e;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isError = r),
        (n.isErrorEvent = o),
        (n.isDOMError = i),
        (n.isDOMException = a),
        (n.isUndefined = s),
        (n.isFunction = c),
        (n.isString = l),
        (n.isArray = u),
        (n.isPlainObject = p),
        (n.isRegExp = d),
        (n.isNaN = f);
    },
    100: function (e, n, t) {
      "use strict";
      var r = t(4).injectIntl,
        o = t(1),
        i = t(0),
        a = t(12),
        s = t(23);
      t(130);
      var c = function (e) {
        return i.createElement(
          s,
          { className: "warning-banner" },
          i.createElement(
            a,
            { className: "warning-banner-container" },
            i.createElement("p", { className: "title-banner-p" }, e.children)
          )
        );
      };
      (c.propTypes = { children: o.node }), (e.exports = r(c));
    },
    101: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          ".crash-container {\n  /* UI Primary Colors */\n  /* #FF661A */\n  /* UI Secondary Colors */\n  /* 3.0 colors */\n  /* Using www naming convention for now, should be consistent with gui */\n  /* #CF63CF Sounds Primary */\n  /* modals */\n  /* Overlay UI Gray Colors */\n  /* Typography Colors */\n  /* Down Deep */\n  /*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n  /* Media Queries */\n  /* Width */\n  /*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n  /* Height */\n  margin: 3rem auto;\n  border: 1px solid #d9d9d9;\n  border-radius: 10px;\n  background-color: #fcfcfc;\n  width: 60%;\n  overflow: hidden;\n  text-align: center; }\n  @media only screen and (max-width: 479px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 100%; } }\n  @media only screen and (min-width: 480px) and (max-width: 767px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 480px; } }\n  @media only screen and (min-width: 768px) and (max-width: 941px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 768px; } }\n  @media only screen and (min-width: 942px) {\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 942px; } }\n  .crash-container img {\n    width: 100%; }\n  .crash-container .crash-message {\n    margin: 2rem; }\n",
          "",
        ]);
    },
    102: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.dropdown {\n  display: none;\n  position: absolute;\n  right: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 5px 5px;\n  background-color: #4d97ff;\n  padding: 10px;\n  min-width: 9rem;\n  max-width: 16.25rem;\n  overflow: visible;\n  color: white;\n  font-size: .8125rem;\n  font-weight: normal; }\n  .dropdown.staging {\n    background-color: #ffab1a; }\n  .dropdown.open {\n    display: block; }\n  .dropdown a:link, .dropdown a:visited, .dropdown a:active {\n    background-color: transparent;\n    color: white; }\n  .dropdown input {\n    margin-bottom: 12px;\n    width: calc(100% - 30px); }\n  .dropdown label {\n    display: block;\n    margin-bottom: 5px; }\n  .dropdown > li {\n    display: block;\n    line-height: 30px; }\n    .dropdown > li.divider {\n      margin-top: 10px;\n      border-top: 1px solid rgba(0, 0, 0, 0.1); }\n    .dropdown > li a {\n      display: block;\n      padding: 0 10px; }\n      .dropdown > li a:hover {\n        background-color: rgba(0, 0, 0, 0.1);\n        text-decoration: none; }\n  .dropdown.with-arrow {\n    margin-top: 14px;\n    border-radius: 5px;\n    overflow: visible; }\n    .dropdown.with-arrow:before {\n      display: block;\n      position: absolute;\n      top: -7px;\n      right: 10%;\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      border-left: 1px solid rgba(0, 0, 0, 0.1);\n      border-radius: 5px;\n      background-color: #4d97ff;\n      width: 14px;\n      height: 14px;\n      content: ""; }\n',
          "",
        ]);
    },
    103: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#footer .lists {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  #footer .lists dl {\n    display: inline-block;\n    vertical-align: top;\n    text-align: left;\n    font-size: .8rem; }\n  #footer .lists dt {\n    display: block;\n    margin-bottom: 8px; }\n  #footer .lists dd {\n    display: block;\n    margin: 5px 0;\n    line-height: 1.2rem; }\n    #footer .lists dd a {\n      font-weight: 400; }\n\n#footer .copyright {\n  display: block;\n  width: 100%;\n  text-align: center; }\n  #footer .copyright p {\n    font-size: .7rem; }\n\n#footer .language-chooser {\n  text-align: center; }\n",
          "",
        ]);
    },
    104: function (e, n, t) {
      (n = e.exports = t(2)()), n.push([e.i, "", ""]);
    },
    105: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.login {\n  padding: 10px;\n  width: 200px;\n  line-height: 1.5rem;\n  white-space: normal;\n  color: white;\n  font-size: .8125rem; }\n  .login .button {\n    padding: .75em; }\n  .login .row {\n    margin-bottom: 1.25rem; }\n  .login .input {\n    margin-bottom: 12px;\n    width: calc(100% - 30px);\n    height: 2.25rem; }\n  .login label {\n    padding-top: 5px;\n    font-weight: bold; }\n  .login .spinner {\n    margin: 0 .8rem;\n    width: 1rem;\n    vertical-align: middle; }\n  .login .submit-row {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .login .submit-button {\n    margin-top: 5px; }\n  .login a {\n    margin: auto 0;\n    color: white; }\n    .login a:link, .login a:visited, .login a:active {\n      color: white; }\n    .login a:hover {\n      background-color: transparent; }\n  .login .error {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    background-color: #ffab1a;\n    padding: .75em 1em; }\n",
          "",
        ]);
    },
    106: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.overflow-hidden {\n  /* to avoid double scroll bars this\n    gets added to body while modal is open */\n  overflow: hidden; }\n\n.modal-content {\n  position: relative;\n  margin: 3.75rem auto;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.15);\n  background-color: white;\n  padding: 0;\n  width: 48.75rem; }\n  .modal-content:focus {\n    outline: none; }\n  @media only screen and (max-width: 941px) {\n    .modal-content {\n      margin-top: 0;\n      width: 100%;\n      overflow: auto; } }\n  @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n    .modal-content {\n      border-radius: 0;\n      box-shadow: none;\n      height: 100%; } }\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 510;\n  background-color: rgba(77, 151, 255, 0.7); }\n\n.modal-content-close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  text-align: center;\n  line-height: 2rem; }\n\n.modal-content-close-img {\n  padding-top: 0.5rem; }\n\n/* Close button, Submit button, etc. */\n.action-buttons {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1.125rem .8275rem .9375rem .8275rem;\n  line-height: 1.5rem;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n  @media only screen and (max-width: 941px) {\n    .action-buttons {\n      -webkit-justify-content: center !important;\n          -ms-flex-pack: center !important;\n              justify-content: center !important;\n      -webkit-flex-direction: row !important;\n          -ms-flex-direction: row !important;\n              flex-direction: row !important; } }\n\n/* setting overall modal to contain overflow looks good, but isn't\ncompatible with elements (like validation popups) that need to bleed\npast modal boundary. This class can be used to force modal button\nrow to appear to contain overflow. */\n.action-buttons-overflow-fix {\n  margin-bottom: .9375rem; }\n\n/* For action button row where left/right margin is handled by parent element */\n.action-buttons.action-buttons-no-inset {\n  margin-left: 0;\n  margin-right: 0; }\n\n.action-button {\n  margin: 0 0 0 .54625rem;\n  border-radius: .25rem;\n  padding: 6px 1.25rem 14px 1.25rem;\n  height: 36px; }\n\n.action-button.close-button {\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.action-button-text {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.action-button.disabled {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.error-text {\n  display: block;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #ffab1a;\n  padding: 1rem;\n  min-height: 1rem;\n  overflow: visible;\n  color: white; }\n\n.modal-sizes * {\n  box-sizing: border-box; }\n\n.modal-sizes {\n  margin: 100px auto;\n  outline: none;\n  padding: 0;\n  max-width: 36.25rem;\n  /* 580px; */\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  @media only screen and (min-width: 480px) and (max-width: 767px), only screen and (min-height: 480px) and (max-height: 767px) {\n    .modal-sizes {\n      margin: 40px auto; } }\n  @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n    .modal-sizes {\n      margin: 0 auto;\n      width: auto; } }\n  .modal-sizes .modal-header {\n    padding-top: .75rem;\n    width: 100%;\n    height: 3rem; }\n    @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n      .modal-sizes .modal-header {\n        border-radius: 0; } }\n  .modal-sizes .modal-content {\n    font-size: .875rem; }\n",
          "",
        ]);
    },
    107: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.modal-content-iframe {\n  border: 0; }\n",
          "",
        ]);
    },
    108: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.account-nav .user-info {\n  display: inline-block;\n  padding: 14px 15px 4px 15px;\n  max-width: 260px;\n  height: 33px;\n  overflow: hidden;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: white;\n  font-size: .8125rem;\n  font-weight: normal; }\n  .account-nav .user-info .avatar {\n    margin-right: 10px;\n    border-radius: 3px;\n    width: 24px;\n    height: 24px;\n    vertical-align: middle; }\n  .account-nav .user-info:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .account-nav .user-info.open {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .account-nav .user-info:after {\n    display: inline-block;\n    margin-left: 8px;\n    background-image: url("/images/dropdown.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50%;\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n    content: " "; }\n\n.account-nav .dropdown {\n  top: 50px;\n  padding: 0;\n  padding-top: 5px;\n  width: 100%;\n  box-sizing: border-box; }\n\n@media only screen and (max-width: 479px) {\n  .account-nav {\n    margin-left: 0; }\n    .account-nav .user-info .avatar {\n      margin-right: 0; }\n    .account-nav .user-info:after {\n      display: none; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .account-nav {\n    margin-left: 0; }\n    .account-nav .user-info .avatar {\n      margin-right: 0; }\n    .account-nav .user-info:after {\n      display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  .account-nav {\n    margin-left: 0; } }\n',
          "",
        ]);
    },
    109: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#navigation.staging .messages .message-count {\n  display: none; }\n  #navigation.staging .messages .message-count.show {\n    background-color: #4d97ff; }\n\n#navigation .logo {\n  margin-right: 10px; }\n  #navigation .logo a {\n    display: block;\n    transition: .15s ease all;\n    margin: 0 6px 0 0;\n    border: 0;\n    background-image: url("/images/logo_sm.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 95%;\n    width: 81px;\n    height: 50px; }\n    #navigation .logo a:hover {\n      transition: .15s ease all;\n      background-size: 100%; }\n\n#navigation .inner > ul > li.search {\n  margin: 0 20px;\n  border-right: 0;\n  color: white;\n  -webkit-flex-grow: 3;\n      -ms-flex-positive: 3;\n          flex-grow: 3; }\n  .ie9 #navigation .inner > ul > li.search {\n    width: 100%; }\n  #navigation .inner > ul > li.search .form {\n    margin: 0; }\n  #navigation .inner > ul > li.search .row .help-block {\n    display: none; }\n  #navigation .inner > ul > li.search .input,\n  #navigation .inner > ul > li.search .button {\n    display: inline-block;\n    margin-top: 5px;\n    outline: none;\n    border: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    height: 14px; }\n    #navigation .inner > ul > li.search .input[type=text],\n    #navigation .inner > ul > li.search .button[type=text] {\n      transition: .15s ease background-color;\n      padding: 0;\n      padding-right: 10px;\n      padding-left: 40px;\n      width: calc(100% - 50px);\n      height: 40px;\n      color: white;\n      font-size: .85em; }\n      #navigation .inner > ul > li.search .input[type=text]::-webkit-input-placeholder,\n      #navigation .inner > ul > li.search .button[type=text]::-webkit-input-placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]:-ms-input-placeholder,\n      #navigation .inner > ul > li.search .button[type=text]:-ms-input-placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]::placeholder,\n      #navigation .inner > ul > li.search .button[type=text]::placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]:focus,\n      #navigation .inner > ul > li.search .button[type=text]:focus {\n        transition: .15s ease background-color;\n        background-color: rgba(0, 0, 0, 0.2); }\n      .ie9 #navigation .inner > ul > li.search .input[type=text], .ie9\n      #navigation .inner > ul > li.search .button[type=text] {\n        width: 70px; }\n  #navigation .inner > ul > li.search .btn-search {\n    position: absolute;\n    box-shadow: none;\n    background-color: transparent;\n    background-image: url("/images/nav-search-glass.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 14px 14px;\n    width: 40px;\n    height: 40px; }\n    #navigation .inner > ul > li.search .btn-search:hover {\n      box-shadow: none; }\n\n#navigation .messages > a,\n#navigation .mystuff > a {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 45%;\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 30px;\n  overflow: hidden;\n  text-indent: 50px;\n  white-space: nowrap; }\n  #navigation .messages > a:hover,\n  #navigation .mystuff > a:hover {\n    background-size: 50%; }\n\n#navigation .messages > a {\n  background-image: url("/images/nav-notifications.png"); }\n\n#navigation .messages .message-count {\n  display: none; }\n  #navigation .messages .message-count.show {\n    display: block;\n    position: absolute;\n    top: .5rem;\n    right: .25rem;\n    border-radius: 1rem;\n    background-color: #ffab1a;\n    padding: 0 .25rem;\n    text-indent: 0;\n    line-height: 1rem;\n    color: white;\n    font-size: .7rem;\n    font-weight: bold; }\n\n#navigation .mystuff > a {\n  background-image: url("/images/mystuff.png"); }\n\n@media only screen and (max-width: 479px) {\n  #navigation .inner {\n    width: 18.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .create,\n    #navigation .inner .discuss,\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .help,\n    #navigation .inner .mystuff,\n    #navigation .inner .profile-name {\n      display: none; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #navigation .inner {\n    width: 28.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .discuss,\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .mystuff,\n    #navigation .inner .profile-name {\n      display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #navigation .inner {\n    width: 38.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .mystuff {\n      display: none; } }\n',
          "",
        ]);
    },
    11: function (e, n, t) {
      "use strict";
      (function (e, r) {
        function o(e, n) {
          return e.require(n);
        }
        function i() {
          return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0);
        }
        function a() {
          return i() ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
        }
        function s() {
          var e = a(),
            n = e.crypto || e.msCrypto;
          if (void 0 !== n && n.getRandomValues) {
            var t = new Uint16Array(8);
            n.getRandomValues(t), (t[3] = (4095 & t[3]) | 16384), (t[4] = (16383 & t[4]) | 32768);
            var r = function (e) {
              for (var n = e.toString(16); n.length < 4; ) n = "0" + n;
              return n;
            };
            return r(t[0]) + r(t[1]) + r(t[2]) + r(t[3]) + r(t[4]) + r(t[5]) + r(t[6]) + r(t[7]);
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var n = (16 * Math.random()) | 0;
            return ("x" === e ? n : (3 & n) | 8).toString(16);
          });
        }
        function c(e) {
          for (
            var n, t = e, r = [], o = 0, i = 0, a = " > ".length;
            t && o++ < 5 && !("html" === (n = l(t)) || (o > 1 && i + r.length * a + n.length >= 80));

          )
            r.push(n), (i += n.length), (t = t.parentNode);
          return r.reverse().join(" > ");
        }
        function l(e) {
          var n,
            t,
            r,
            o,
            i,
            a = [];
          if (!e || !e.tagName) return "";
          if ((a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (n = e.className) && f.isString(n)))
            for (t = n.split(/\s+/), i = 0; i < t.length; i++) a.push("." + t[i]);
          var s = ["type", "name", "title", "alt"];
          for (i = 0; i < s.length; i++) (r = s[i]), (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
          return a.join("");
        }
        function u(e) {
          if (!e) return {};
          var n = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
          if (!n) return {};
          var t = n[6] || "",
            r = n[8] || "";
          return {
            host: n[4],
            path: n[5],
            protocol: n[2],
            relative: n[5] + t + r,
          };
        }
        function p(e) {
          if (e.message) return e.message;
          if (e.exception && e.exception.values && e.exception.values[0]) {
            var n = e.exception.values[0];
            return n.type && n.value ? n.type + ": " + n.value : n.type || n.value || e.event_id || "<unknown>";
          }
          return e.event_id || "<unknown>";
        }
        function d(e) {
          var n = a(),
            t = ["debug", "info", "warn", "error", "log"];
          if (!("console" in n)) return e();
          var r = n.console,
            o = {};
          t.forEach(function (e) {
            e in n.console && r[e].__sentry__ && ((o[e] = r[e].__sentry_wrapped__), (r[e] = r[e].__sentry_original__));
          });
          var i = e();
          return (
            Object.keys(o).forEach(function (e) {
              r[e] = o[e];
            }),
            i
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var f = t(10);
        (n.dynamicRequire = o),
          (n.isNodeEnv = i),
          (n.getGlobalObject = a),
          (n.uuid4 = s),
          (n.htmlTreeAsString = c),
          (n.htmlElementAsString = l),
          (n.parseUrl = u),
          (n.getEventDescription = p),
          (n.consoleSandbox = d);
      }.call(n, t(25), t(21)));
    },
    110: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#donor {\n  color: #575e75;\n  font-size: .875rem;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  padding-bottom: 2.5rem;\n  padding-top: 1rem; }\n  #donor #donor-text {\n    text-align: center;\n    width: 58.75em;\n    margin: 0 auto; }\n\n@media only screen and (min-width: 768px) and (max-width: 942px) {\n  #donor #donor-text {\n    width: 53.75em; } }\n\n@media only screen and (min-width: 480px) and (max-width: 768px) {\n  #donor #donor-text {\n    width: 28.75em; } }\n\n@media only screen and (max-width: 480px) {\n  #donor #donor-text {\n    width: 18.75em; } }\n",
          "",
        ]);
    },
    111: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.modal-content.mod-registration {\n  width: 38.125rem;\n  overflow: hidden; }\n\n.modal-content-iframe.mod-registration {\n  width: 38.125rem;\n  min-height: 27.375rem; }\n\n.modal-content.recaptcha-open {\n  min-height: 500px; }\n\n.modal-content-iframe.recaptcha-open {\n  min-height: 500px; }\n\n@media only screen and (max-width: 941px) {\n  .modal-content.mod-registration {\n    width: 100%;\n    overflow: scroll; }\n  .modal-content-iframe.mod-registration {\n    height: 27.375rem; } }\n",
          "",
        ]);
    },
    112: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.warning-banner {\n  background-color: #ff661a;\n  margin-bottom: 0; }\n  .warning-banner .warning-banner-container {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n",
          "",
        ]);
    },
    113: function (e, n, t) {
      var r; /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
      !(function () {
        "use strict";
        var o = !("undefined" == typeof window || !window.document || !window.document.createElement),
          i = {
            canUseDOM: o,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen,
          };
        void 0 !==
          (r = function () {
            return i;
          }.call(n, t, n, e)) && (e.exports = r);
      })();
    },
    114: function (e, n, t) {
      "use strict";
      function r() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null !== e && void 0 !== e && this.setState(e);
      }
      function o(e) {
        function n(n) {
          var t = this.constructor.getDerivedStateFromProps(e, n);
          return null !== t && void 0 !== t ? t : null;
        }
        this.setState(n.bind(this));
      }
      function i(e, n) {
        try {
          var t = this.props,
            r = this.state;
          (this.props = e),
            (this.state = n),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(t, r));
        } finally {
          (this.props = t), (this.state = r);
        }
      }
      function a(e) {
        var n = e.prototype;
        if (!n || !n.isReactComponent) throw new Error("Can only polyfill class components");
        if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof n.getSnapshotBeforeUpdate) return e;
        var t = null,
          a = null,
          s = null;
        if (
          ("function" == typeof n.componentWillMount
            ? (t = "componentWillMount")
            : "function" == typeof n.UNSAFE_componentWillMount && (t = "UNSAFE_componentWillMount"),
          "function" == typeof n.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof n.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof n.componentWillUpdate
            ? (s = "componentWillUpdate")
            : "function" == typeof n.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"),
          null !== t || null !== a || null !== s)
        ) {
          var c = e.displayName || e.name,
            l =
              "function" == typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              c +
              " uses " +
              l +
              " but also contains the following legacy lifecycles:" +
              (null !== t ? "\n  " + t : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== s ? "\n  " + s : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" == typeof e.getDerivedStateFromProps &&
            ((n.componentWillMount = r), (n.componentWillReceiveProps = o)),
          "function" == typeof n.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof n.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          n.componentWillUpdate = i;
          var u = n.componentDidUpdate;
          n.componentDidUpdate = function (e, n, t) {
            var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : t;
            u.call(this, e, n, r);
          };
        }
        return e;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        t.d(n, "polyfill", function () {
          return a;
        }),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    },
    115: function (e, n, t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function i(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function a(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      function s(e) {
        return e();
      }
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.bodyOpenClassName = n.portalClassName = void 0);
      var c =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        l = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        u = t(0),
        p = r(u),
        d = t(39),
        f = r(d),
        m = t(1),
        h = r(m),
        g = t(116),
        v = r(g),
        y = t(33),
        b = (function (e) {
          if (e && e.__esModule) return e;
          var n = {};
          if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
          return (n.default = e), n;
        })(y),
        w = t(20),
        x = r(w),
        _ = t(114),
        E = (n.portalClassName = "ReactModalPortal"),
        O = (n.bodyOpenClassName = "ReactModal__Body--open"),
        k = void 0 !== f.default.createPortal,
        S = function () {
          return k ? f.default.createPortal : f.default.unstable_renderSubtreeIntoContainer;
        },
        C = (function (e) {
          function n() {
            var e, t, r, a;
            o(this, n);
            for (var l = arguments.length, u = Array(l), d = 0; d < l; d++) u[d] = arguments[d];
            return (
              (t = r = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(u)))),
              (r.removePortal = function () {
                !k && f.default.unmountComponentAtNode(r.node), s(r.props.parentSelector).removeChild(r.node);
              }),
              (r.portalRef = function (e) {
                r.portal = e;
              }),
              (r.renderPortal = function (e) {
                var t = S(),
                  o = t(r, p.default.createElement(v.default, c({ defaultStyles: n.defaultStyles }, e)), r.node);
                r.portalRef(o);
              }),
              (a = t),
              i(r, a)
            );
          }
          return (
            a(n, e),
            l(
              n,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (w.canUseDOM) {
                      k || (this.node = document.createElement("div")),
                        (this.node.className = this.props.portalClassName);
                      s(this.props.parentSelector).appendChild(this.node), !k && this.renderPortal(this.props);
                    }
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (e) {
                    return {
                      prevParent: s(e.parentSelector),
                      nextParent: s(this.props.parentSelector),
                    };
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, n, t) {
                    if (w.canUseDOM) {
                      var r = this.props,
                        o = r.isOpen,
                        i = r.portalClassName;
                      e.portalClassName !== i && (this.node.className = i);
                      var a = t.prevParent,
                        s = t.nextParent;
                      s !== a && (a.removeChild(this.node), s.appendChild(this.node)),
                        (e.isOpen || o) && !k && this.renderPortal(this.props);
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if (w.canUseDOM && this.node && this.portal) {
                      var e = this.portal.state,
                        n = Date.now(),
                        t = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || n + this.props.closeTimeoutMS);
                      t
                        ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, t - n))
                        : this.removePortal();
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return w.canUseDOM && k
                      ? (!this.node && k && (this.node = document.createElement("div")),
                        S()(
                          p.default.createElement(
                            v.default,
                            c(
                              {
                                ref: this.portalRef,
                                defaultStyles: n.defaultStyles,
                              },
                              this.props
                            )
                          ),
                          this.node
                        ))
                      : null;
                  },
                },
              ],
              [
                {
                  key: "setAppElement",
                  value: function (e) {
                    b.setElement(e);
                  },
                },
              ]
            ),
            n
          );
        })(u.Component);
      (C.propTypes = {
        isOpen: h.default.bool.isRequired,
        style: h.default.shape({
          content: h.default.object,
          overlay: h.default.object,
        }),
        portalClassName: h.default.string,
        bodyOpenClassName: h.default.string,
        htmlOpenClassName: h.default.string,
        className: h.default.oneOfType([
          h.default.string,
          h.default.shape({
            base: h.default.string.isRequired,
            afterOpen: h.default.string.isRequired,
            beforeClose: h.default.string.isRequired,
          }),
        ]),
        overlayClassName: h.default.oneOfType([
          h.default.string,
          h.default.shape({
            base: h.default.string.isRequired,
            afterOpen: h.default.string.isRequired,
            beforeClose: h.default.string.isRequired,
          }),
        ]),
        appElement: h.default.instanceOf(x.default),
        onAfterOpen: h.default.func,
        onRequestClose: h.default.func,
        closeTimeoutMS: h.default.number,
        ariaHideApp: h.default.bool,
        shouldFocusAfterRender: h.default.bool,
        shouldCloseOnOverlayClick: h.default.bool,
        shouldReturnFocusAfterClose: h.default.bool,
        parentSelector: h.default.func,
        aria: h.default.object,
        data: h.default.object,
        role: h.default.string,
        contentLabel: h.default.string,
        shouldCloseOnEsc: h.default.bool,
        overlayRef: h.default.func,
        contentRef: h.default.func,
      }),
        (C.defaultProps = {
          isOpen: !1,
          portalClassName: E,
          bodyOpenClassName: O,
          role: "dialog",
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          parentSelector: function () {
            return document.body;
          },
        }),
        (C.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }),
        (0, _.polyfill)(C),
        (n.default = C);
    },
    116: function (e, n, t) {
      "use strict";
      function r(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return (n.default = e), n;
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function a(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function s(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var c =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        u = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        p = t(0),
        d = o(p),
        f = t(1),
        m = o(f),
        h = t(118),
        g = r(h),
        v = t(119),
        y = o(v),
        b = t(33),
        w = r(b),
        x = t(117),
        _ = r(x),
        E = t(20),
        O = o(E),
        k = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
        S = 9,
        C = 27,
        j = 0,
        I = (function (e) {
          function n(e) {
            i(this, n);
            var t = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (
              (t.setOverlayRef = function (e) {
                (t.overlay = e), t.props.overlayRef && t.props.overlayRef(e);
              }),
              (t.setContentRef = function (e) {
                (t.content = e), t.props.contentRef && t.props.contentRef(e);
              }),
              (t.afterClose = function () {
                var e = t.props,
                  n = e.appElement,
                  r = e.ariaHideApp,
                  o = e.htmlOpenClassName,
                  i = e.bodyOpenClassName;
                i && _.remove(document.body, i),
                  o && _.remove(document.getElementsByTagName("html")[0], o),
                  r && j > 0 && 0 === (j -= 1) && w.show(n),
                  t.props.shouldFocusAfterRender &&
                    (t.props.shouldReturnFocusAfterClose
                      ? (g.returnFocus(), g.teardownScopedFocus())
                      : g.popWithoutFocus()),
                  t.props.onAfterClose && t.props.onAfterClose();
              }),
              (t.open = function () {
                t.beforeOpen(),
                  t.state.afterOpen && t.state.beforeClose
                    ? (clearTimeout(t.closeTimer), t.setState({ beforeClose: !1 }))
                    : (t.props.shouldFocusAfterRender && (g.setupScopedFocus(t.node), g.markForFocusLater()),
                      t.setState({ isOpen: !0 }, function () {
                        t.setState({ afterOpen: !0 }),
                          t.props.isOpen &&
                            t.props.onAfterOpen &&
                            t.props.onAfterOpen({
                              overlayEl: t.overlay,
                              contentEl: t.content,
                            });
                      }));
              }),
              (t.close = function () {
                t.props.closeTimeoutMS > 0 ? t.closeWithTimeout() : t.closeWithoutTimeout();
              }),
              (t.focusContent = function () {
                return t.content && !t.contentHasFocus() && t.content.focus();
              }),
              (t.closeWithTimeout = function () {
                var e = Date.now() + t.props.closeTimeoutMS;
                t.setState({ beforeClose: !0, closesAt: e }, function () {
                  t.closeTimer = setTimeout(t.closeWithoutTimeout, t.state.closesAt - Date.now());
                });
              }),
              (t.closeWithoutTimeout = function () {
                t.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null,
                  },
                  t.afterClose
                );
              }),
              (t.handleKeyDown = function (e) {
                e.keyCode === S && (0, y.default)(t.content, e),
                  t.props.shouldCloseOnEsc && e.keyCode === C && (e.stopPropagation(), t.requestClose(e));
              }),
              (t.handleOverlayOnClick = function (e) {
                null === t.shouldClose && (t.shouldClose = !0),
                  t.shouldClose &&
                    t.props.shouldCloseOnOverlayClick &&
                    (t.ownerHandlesClose() ? t.requestClose(e) : t.focusContent()),
                  (t.shouldClose = null);
              }),
              (t.handleContentOnMouseUp = function () {
                t.shouldClose = !1;
              }),
              (t.handleOverlayOnMouseDown = function (e) {
                t.props.shouldCloseOnOverlayClick || e.target != t.overlay || e.preventDefault();
              }),
              (t.handleContentOnClick = function () {
                t.shouldClose = !1;
              }),
              (t.handleContentOnMouseDown = function () {
                t.shouldClose = !1;
              }),
              (t.requestClose = function (e) {
                return t.ownerHandlesClose() && t.props.onRequestClose(e);
              }),
              (t.ownerHandlesClose = function () {
                return t.props.onRequestClose;
              }),
              (t.shouldBeClosed = function () {
                return !t.state.isOpen && !t.state.beforeClose;
              }),
              (t.contentHasFocus = function () {
                return document.activeElement === t.content || t.content.contains(document.activeElement);
              }),
              (t.buildClassName = function (e, n) {
                var r =
                    "object" === (void 0 === n ? "undefined" : l(n))
                      ? n
                      : {
                          base: k[e],
                          afterOpen: k[e] + "--after-open",
                          beforeClose: k[e] + "--before-close",
                        },
                  o = r.base;
                return (
                  t.state.afterOpen && (o = o + " " + r.afterOpen),
                  t.state.beforeClose && (o = o + " " + r.beforeClose),
                  "string" == typeof n && n ? o + " " + n : o
                );
              }),
              (t.attributesFromObject = function (e, n) {
                return Object.keys(n).reduce(function (t, r) {
                  return (t[e + "-" + r] = n[r]), t;
                }, {});
              }),
              (t.state = { afterOpen: !1, beforeClose: !1 }),
              (t.shouldClose = null),
              (t.moveFromContentToOverlay = null),
              t
            );
          }
          return (
            s(n, e),
            u(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isOpen && this.open();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, n) {
                  this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(),
                    this.props.shouldFocusAfterRender && this.state.isOpen && !n.isOpen && this.focusContent();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer);
                },
              },
              {
                key: "beforeOpen",
                value: function () {
                  var e = this.props,
                    n = e.appElement,
                    t = e.ariaHideApp,
                    r = e.htmlOpenClassName,
                    o = e.bodyOpenClassName;
                  o && _.add(document.body, o),
                    r && _.add(document.getElementsByTagName("html")[0], r),
                    t && ((j += 1), w.hide(n));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.id,
                    t = e.className,
                    r = e.overlayClassName,
                    o = e.defaultStyles,
                    i = t ? {} : o.content,
                    a = r ? {} : o.overlay;
                  return this.shouldBeClosed()
                    ? null
                    : d.default.createElement(
                        "div",
                        {
                          ref: this.setOverlayRef,
                          className: this.buildClassName("overlay", r),
                          style: c({}, a, this.props.style.overlay),
                          onClick: this.handleOverlayOnClick,
                          onMouseDown: this.handleOverlayOnMouseDown,
                        },
                        d.default.createElement(
                          "div",
                          c(
                            {
                              id: n,
                              ref: this.setContentRef,
                              style: c({}, i, this.props.style.content),
                              className: this.buildClassName("content", t),
                              tabIndex: "-1",
                              onKeyDown: this.handleKeyDown,
                              onMouseDown: this.handleContentOnMouseDown,
                              onMouseUp: this.handleContentOnMouseUp,
                              onClick: this.handleContentOnClick,
                              role: this.props.role,
                              "aria-label": this.props.contentLabel,
                            },
                            this.attributesFromObject("aria", this.props.aria || {}),
                            this.attributesFromObject("data", this.props.data || {}),
                            { "data-testid": this.props.testId }
                          ),
                          this.props.children
                        )
                      );
                },
              },
            ]),
            n
          );
        })(p.Component);
      (I.defaultProps = {
        style: { overlay: {}, content: {} },
        defaultStyles: {},
      }),
        (I.propTypes = {
          isOpen: m.default.bool.isRequired,
          defaultStyles: m.default.shape({
            content: m.default.object,
            overlay: m.default.object,
          }),
          style: m.default.shape({
            content: m.default.object,
            overlay: m.default.object,
          }),
          className: m.default.oneOfType([m.default.string, m.default.object]),
          overlayClassName: m.default.oneOfType([m.default.string, m.default.object]),
          bodyOpenClassName: m.default.string,
          htmlOpenClassName: m.default.string,
          ariaHideApp: m.default.bool,
          appElement: m.default.instanceOf(O.default),
          onAfterOpen: m.default.func,
          onAfterClose: m.default.func,
          onRequestClose: m.default.func,
          closeTimeoutMS: m.default.number,
          shouldFocusAfterRender: m.default.bool,
          shouldCloseOnOverlayClick: m.default.bool,
          shouldReturnFocusAfterClose: m.default.bool,
          role: m.default.string,
          contentLabel: m.default.string,
          aria: m.default.object,
          data: m.default.object,
          children: m.default.node,
          shouldCloseOnEsc: m.default.bool,
          overlayRef: m.default.func,
          contentRef: m.default.func,
          id: m.default.string,
          testId: m.default.string,
        }),
        (n.default = I),
        (e.exports = n.default);
    },
    117: function (e, n, t) {
      "use strict";
      function r() {}
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.dumpClassLists = r);
      var o = {},
        i = {},
        a = function (e, n) {
          return e[n] || (e[n] = 0), (e[n] += 1), n;
        },
        s = function (e, n) {
          return e[n] && (e[n] -= 1), n;
        },
        c = function (e, n, t) {
          t.forEach(function (t) {
            a(n, t), e.add(t);
          });
        },
        l = function (e, n, t) {
          t.forEach(function (t) {
            s(n, t), 0 === n[t] && e.remove(t);
          });
        };
      (n.add = function (e, n) {
        return c(e.classList, "html" == e.nodeName.toLowerCase() ? o : i, n.split(" "));
      }),
        (n.remove = function (e, n) {
          return l(e.classList, "html" == e.nodeName.toLowerCase() ? o : i, n.split(" "));
        });
    },
    118: function (e, n, t) {
      "use strict";
      function r() {
        m = !0;
      }
      function o() {
        if (m) {
          if (((m = !1), !f)) return;
          setTimeout(function () {
            if (!f.contains(document.activeElement)) {
              ((0, p.default)(f)[0] || f).focus();
            }
          }, 0);
        }
      }
      function i() {
        d.push(document.activeElement);
      }
      function a() {
        var e = null;
        try {
          return void (0 !== d.length && ((e = d.pop()), e.focus()));
        } catch (n) {
          console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "));
        }
      }
      function s() {
        d.length > 0 && d.pop();
      }
      function c(e) {
        (f = e),
          window.addEventListener
            ? (window.addEventListener("blur", r, !1), document.addEventListener("focus", o, !0))
            : (window.attachEvent("onBlur", r), document.attachEvent("onFocus", o));
      }
      function l() {
        (f = null),
          window.addEventListener
            ? (window.removeEventListener("blur", r), document.removeEventListener("focus", o))
            : (window.detachEvent("onBlur", r), document.detachEvent("onFocus", o));
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.handleBlur = r),
        (n.handleFocus = o),
        (n.markForFocusLater = i),
        (n.returnFocus = a),
        (n.popWithoutFocus = s),
        (n.setupScopedFocus = c),
        (n.teardownScopedFocus = l);
      var u = t(34),
        p = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        d = [],
        f = null,
        m = !1;
    },
    119: function (e, n, t) {
      "use strict";
      function r(e, n) {
        var t = (0, i.default)(e);
        if (!t.length) return void n.preventDefault();
        var r = n.shiftKey,
          o = t[0],
          a = t[t.length - 1];
        if (e === document.activeElement) {
          if (!r) return;
          s = a;
        }
        var s;
        if ((a !== document.activeElement || r || (s = o), o === document.activeElement && r && (s = a), s))
          return n.preventDefault(), void s.focus();
        var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        if (null != c && "Chrome" != c[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
          var l = t.indexOf(document.activeElement);
          if ((l > -1 && (l += r ? -1 : 1), void 0 === t[l]))
            return n.preventDefault(), (s = r ? a : o), void s.focus();
          n.preventDefault(), t[l].focus();
        }
      }
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = r);
      var o = t(34),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      e.exports = n.default;
    },
    12: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(1),
        i = t(0);
      t(48);
      var a = function (e) {
        return i.createElement(e.as, { className: r("flex-row", e.className) }, e.children);
      };
      (a.propTypes = { children: o.node, className: o.string }), (a.defaultProps = { as: "div" }), (e.exports = a);
    },
    120: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(115),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      (n.default = o.default), (e.exports = n.default);
    },
    121: function (e, n, t) {
      var r = t(101);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    122: function (e, n, t) {
      var r = t(102);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    123: function (e, n, t) {
      var r = t(103);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    124: function (e, n, t) {
      var r = t(105);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    125: function (e, n, t) {
      var r = t(106);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    126: function (e, n, t) {
      var r = t(107);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    127: function (e, n, t) {
      var r = t(108);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    128: function (e, n, t) {
      var r = t(109);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    129: function (e, n, t) {
      var r = t(110);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    130: function (e, n, t) {
      var r = t(112);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    131: function (e, n, t) {
      "use strict";
      var r = function () {};
      e.exports = r;
    },
    15: function (e, n, t) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        o = t(5),
        i = t(13),
        a = t(1),
        s = t(0);
      t(27);
      var c = function (e) {
        var n = o("button", e.className);
        return s.createElement("button", r({ className: n }, i(e, ["className", "children"])), e.children);
      };
      (c.propTypes = { children: a.node, className: a.string }), (e.exports = c);
    },
    17: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(10),
        i = t(19),
        a = t(18),
        s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        c = (function () {
          function e(e) {
            "string" == typeof e ? this.fromString(e) : this.fromComponents(e), this.validate();
          }
          return (
            (e.prototype.toString = function (e) {
              void 0 === e && (e = !1);
              var n = this,
                t = n.host,
                r = n.path,
                o = n.pass,
                i = n.port,
                a = n.projectId;
              return (
                n.protocol +
                "://" +
                n.user +
                (e && o ? ":" + o : "") +
                "@" +
                t +
                (i ? ":" + i : "") +
                "/" +
                (r ? r + "/" : r) +
                a
              );
            }),
            (e.prototype.fromString = function (e) {
              var n = s.exec(e);
              if (!n) throw new a.SentryError("Invalid Dsn");
              var t = r.__read(n.slice(1), 6),
                o = t[0],
                c = t[1],
                l = t[2],
                u = void 0 === l ? "" : l,
                p = t[3],
                d = t[4],
                f = void 0 === d ? "" : d,
                m = t[5],
                h = "",
                g = m,
                v = g.split("/");
              v.length > 1 && ((h = v.slice(0, -1).join("/")), (g = v.pop())),
                i.assign(this, {
                  host: p,
                  pass: u,
                  path: h,
                  projectId: g,
                  port: f,
                  protocol: o,
                  user: c,
                });
            }),
            (e.prototype.fromComponents = function (e) {
              (this.protocol = e.protocol),
                (this.user = e.user),
                (this.pass = e.pass || ""),
                (this.host = e.host),
                (this.port = e.port || ""),
                (this.path = e.path || ""),
                (this.projectId = e.projectId);
            }),
            (e.prototype.validate = function () {
              var e, n;
              try {
                for (
                  var t = r.__values(["protocol", "user", "host", "projectId"]), i = t.next();
                  !i.done;
                  i = t.next()
                ) {
                  var s = i.value;
                  if (!this[s]) throw new a.SentryError("Invalid Dsn: Missing " + s);
                }
              } catch (n) {
                e = { error: n };
              } finally {
                try {
                  i && !i.done && (n = t.return) && n.call(t);
                } finally {
                  if (e) throw e.error;
                }
              }
              if ("http" !== this.protocol && "https" !== this.protocol)
                throw new a.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
              if (this.port && o.isNaN(parseInt(this.port, 10)))
                throw new a.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"');
            }),
            e
          );
        })();
      n.Dsn = c;
    },
    18: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = (function (e) {
          function n(n) {
            var t = this.constructor,
              r = e.call(this, n) || this;
            return (r.message = n), (r.name = t.prototype.constructor.name), Object.setPrototypeOf(r, t.prototype), r;
          }
          return r.__extends(n, e), n;
        })(Error);
      n.SentryError = o;
    },
    19: function (e, n, t) {
      "use strict";
      (function (e) {
        function r(e) {
          return JSON.stringify(e);
        }
        function o(e) {
          return JSON.parse(e);
        }
        function i(e) {
          return o(r(e));
        }
        function a(e, n, t) {
          if (n in e && !e[n].__sentry__) {
            var r = e[n],
              o = t(r);
            (o.__sentry__ = !0), (o.__sentry_original__ = r), (o.__sentry_wrapped__ = o), (e[n] = o);
          }
        }
        function s(e) {
          return Object.keys(e)
            .map(function (n) {
              return encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
            })
            .join("&");
        }
        function c(e) {
          return ~-encodeURI(e).split(/%..|./).length;
        }
        function l(e) {
          return c(JSON.stringify(e));
        }
        function u(e) {
          if ("string" == typeof e) return e.length <= 40 ? e : e.substr(0, 39) + "…";
          if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
          if (b.isNaN(e)) return "[NaN]";
          if (b.isUndefined(e)) return "[undefined]";
          var n = Object.prototype.toString.call(e);
          if ("[object Object]" === n) return "[Object]";
          if ("[object Array]" === n) return "[Array]";
          if ("[object Function]" === n) {
            var t = e.name;
            return t ? "[Function: " + t + "]" : "[Function]";
          }
          return e;
        }
        function p(e, n) {
          if (0 === n) return u(e);
          if (b.isPlainObject(e)) {
            var t = {},
              r = e;
            return (
              Object.keys(r).forEach(function (e) {
                t[e] = p(r[e], n - 1);
              }),
              t
            );
          }
          if (Array.isArray(e)) {
            return e.map(function (e) {
              return p(e, n - 1);
            });
          }
          return u(e);
        }
        function d(e, n, t) {
          void 0 === n && (n = w), void 0 === t && (t = x);
          var o = p(e, n);
          return l(r(o)) > t ? d(e, n - 1) : o;
        }
        function f(e, n) {
          if ((void 0 === n && (n = _), !e.length)) return "[object has no keys]";
          if (e[0].length >= n) return e[0];
          for (var t = e.length; t > 0; t--) {
            var r = e.slice(0, t).join(", ");
            if (!(r.length > n)) return t === e.length ? r : r + "…";
          }
          return "";
        }
        function m(e) {
          for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
          if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
          for (var r = Object(e), o = 0; o < n.length; o++) {
            var i = n[o];
            if (null !== i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
          }
          return r;
        }
        function h(e) {
          var n = { message: e.message, name: e.name, stack: e.stack };
          for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
          return n;
        }
        function g(n, t) {
          return "domain" === t && "object" == typeof n && n._events
            ? "[Domain]"
            : "domainEmitter" === t
            ? "[DomainEmitter]"
            : void 0 !== e && n === e
            ? "[Global]"
            : "undefined" != typeof window && n === window
            ? "[Window]"
            : "undefined" != typeof document && n === document
            ? "[Document]"
            : n instanceof Date
            ? "[Date] " + n
            : n instanceof Error
            ? h(n)
            : b.isNaN(n)
            ? "[NaN]"
            : b.isUndefined(n)
            ? "[undefined]"
            : "function" == typeof n
            ? "[Function] " + (n.name || "<unknown-function-name>")
            : n;
        }
        function v() {
          function e(e, r) {
            return n[0] === r ? "[Circular ~]" : "[Circular ~." + t.slice(0, n.indexOf(r)).join(".") + "]";
          }
          var n = [],
            t = [];
          return function (r, o) {
            if (n.length > 0) {
              var i = n.indexOf(this);
              -1 === i ? (n.push(this), t.push(r)) : (n.splice(i + 1), t.splice(i, 1 / 0, r)),
                -1 !== n.indexOf(o) && (o = e.call(this, r, o));
            } else n.push(o);
            return g(o, r);
          };
        }
        function y(e) {
          try {
            return JSON.parse(JSON.stringify(e, v()));
          } catch (e) {
            return "**non-serializable**";
          }
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var b = t(10);
        (n.serialize = r), (n.deserialize = o), (n.clone = i), (n.fill = a), (n.urlEncode = s);
        var w = 3,
          x = 102400,
          _ = 40;
        (n.serializeObject = p),
          (n.limitObjectDepthToSize = d),
          (n.serializeKeysToEventMessage = f),
          (n.assign = m),
          (n.safeNormalize = y);
      }.call(n, t(21)));
    },
    20: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.canUseDOM = void 0);
      var r = t(113),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = o.default,
        a = i.canUseDOM ? window.HTMLElement : {};
      n.canUseDOM = i.canUseDOM;
      n.default = a;
    },
    23: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(1),
        i = t(0);
      t(54);
      var a = function (e) {
        return i.createElement("div", { className: r("title-banner", e.className) }, e.children);
      };
      (a.propTypes = { children: o.node, className: o.string }), (e.exports = a);
    },
    24: function (e, n, t) {
      "use strict";
      function r(e, n) {
        var t = {};
        for (var r in e) n.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]));
        return t;
      }
      var o =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        i = t(5),
        a = t(66).Input,
        s = t(13),
        c = t(1),
        l = t(0),
        u = t(63).defaultValidationHOC,
        p = t(94);
      t(59), t(61);
      var d = function (e) {
        var n = e.className,
          t = e.label,
          c = r(e, ["className", "label"]);
        return l.createElement(
          a,
          o(
            {
              className: "input",
              label: t,
              rowClassName: i(n, { "no-label": void 0 === t }),
            },
            s(c, ["className"])
          )
        );
      };
      (d.propTypes = { className: c.string, label: c.string }), (e.exports = p(u(d)));
    },
    25: function (e, n) {
      function t() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === t || !u) && setTimeout) return (u = setTimeout), setTimeout(e, 0);
        try {
          return u(e, 0);
        } catch (n) {
          try {
            return u.call(null, e, 0);
          } catch (n) {
            return u.call(this, e, 0);
          }
        }
      }
      function i(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === r || !p) && clearTimeout) return (p = clearTimeout), clearTimeout(e);
        try {
          return p(e);
        } catch (n) {
          try {
            return p.call(null, e);
          } catch (n) {
            return p.call(this, e);
          }
        }
      }
      function a() {
        h && f && ((h = !1), f.length ? (m = f.concat(m)) : (g = -1), m.length && s());
      }
      function s() {
        if (!h) {
          var e = o(a);
          h = !0;
          for (var n = m.length; n; ) {
            for (f = m, m = []; ++g < n; ) f && f[g].run();
            (g = -1), (n = m.length);
          }
          (f = null), (h = !1), i(e);
        }
      }
      function c(e, n) {
        (this.fun = e), (this.array = n);
      }
      function l() {}
      var u,
        p,
        d = (e.exports = {});
      !(function () {
        try {
          u = "function" == typeof setTimeout ? setTimeout : t;
        } catch (e) {
          u = t;
        }
        try {
          p = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          p = r;
        }
      })();
      var f,
        m = [],
        h = !1,
        g = -1;
      (d.nextTick = function (e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        m.push(new c(e, n)), 1 !== m.length || h || o(s);
      }),
        (c.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (d.title = "browser"),
        (d.browser = !0),
        (d.env = {}),
        (d.argv = []),
        (d.version = ""),
        (d.versions = {}),
        (d.on = l),
        (d.addListener = l),
        (d.once = l),
        (d.off = l),
        (d.removeListener = l),
        (d.removeAllListeners = l),
        (d.emit = l),
        (d.prependListener = l),
        (d.prependOnceListener = l),
        (d.listeners = function (e) {
          return [];
        }),
        (d.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (d.cwd = function () {
          return "/";
        }),
        (d.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (d.umask = function () {
          return 0;
        });
    },
    26: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        s = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        c = t(9),
        l = t(5),
        u = t(13),
        p = t(1),
        d = t(0),
        f = t(120);
      t(125), f.setAppElement(document.getElementById("app"));
      var m = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return c(t, ["handleRequestClose"]), t;
        }
        return (
          i(n, e),
          s(n, [
            {
              key: "handleRequestClose",
              value: function () {
                return this.modal.portal.requestClose();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = this.props.useStandardSizes ? { bodyOpenClassName: l("overflow-hidden") } : {};
                return d.createElement(
                  f,
                  a(
                    { appElement: document.getElementById("app") },
                    n,
                    {
                      className: {
                        base: l("modal-content", this.props.className, {
                          "modal-sizes": this.props.useStandardSizes,
                        }),
                        afterOpen: l("modal-content", this.props.className),
                        beforeClose: l("modal-content", this.props.className),
                      },
                      overlayClassName: {
                        base: l("modal-overlay", this.props.overlayClassName),
                        afterOpen: l("modal-overlay", this.props.overlayClassName),
                        beforeClose: l("modal-overlay", this.props.overlayClassName),
                      },
                      ref: function (n) {
                        e.modal = n;
                      },
                    },
                    u(this.props, ["className", "overlayClassName"])
                  ),
                  this.props.showCloseButton &&
                    d.createElement(
                      "div",
                      {
                        className: "modal-content-close",
                        onClick: this.handleRequestClose,
                      },
                      d.createElement("img", {
                        alt: "close-icon",
                        className: "modal-content-close-img",
                        draggable: "false",
                        src: "/svgs/modal/close-x.svg",
                      })
                    ),
                  this.props.children
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      (m.propTypes = {
        children: p.node,
        className: p.string,
        overlayClassName: p.string,
        showCloseButton: p.bool,
        useStandardSizes: p.bool,
      }),
        (m.defaultProps = { showCloseButton: !0 }),
        (e.exports = m);
    },
    27: function (e, n, t) {
      var r = t(38);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    28: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(1),
        i = t(0),
        a = t(98),
        s = t(93),
        c = t(99),
        l = t(64),
        u = t(100),
        p = function (e) {
          var n = e.children,
            t = e.className,
            o = e.showDonorRecognition;
          return i.createElement(
            l,
            { componentName: "Page" },
            i.createElement(
              "div",
              { className: r("page", t) },
              i.createElement("div", { className: r({ staging: !1 }), id: "navigation" }, i.createElement(a, null)),
              i.createElement(
                "div",
                { id: "view" },
                Date.now() >= 15787188e5 &&
                  Date.now() < 15787476e5 &&
                  i.createElement(
                    u,
                    null,
                    "We are experiencing a disruption with email delivery. If you are not receiving emails from us, please try after 8am EST."
                  ),
                n
              ),
              i.createElement("div", { id: "footer" }, i.createElement(s, null)),
              o && i.createElement("div", { id: "donor" }, i.createElement(c, null))
            )
          );
        };
      (p.propTypes = {
        children: o.node,
        className: o.string,
        showDonorRecognition: o.bool,
      }),
        (e.exports = p);
    },
    29: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = (function () {
          function e() {
            this.buffer = [];
          }
          return (
            (e.prototype.add = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                var n = this;
                return r.__generator(this, function (t) {
                  return (
                    -1 === this.buffer.indexOf(e) && this.buffer.push(e),
                    e
                      .then(function () {
                        return r.__awaiter(n, void 0, void 0, function () {
                          return r.__generator(this, function (n) {
                            return [2, this.remove(e)];
                          });
                        });
                      })
                      .catch(function () {
                        return r.__awaiter(n, void 0, void 0, function () {
                          return r.__generator(this, function (n) {
                            return [2, this.remove(e)];
                          });
                        });
                      }),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                var n;
                return r.__generator(this, function (t) {
                  return (n = this.buffer.splice(this.buffer.indexOf(e), 1)[0]), [2, n];
                });
              });
            }),
            (e.prototype.length = function () {
              return this.buffer.length;
            }),
            (e.prototype.drain = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                var n = this;
                return r.__generator(this, function (t) {
                  return [
                    2,
                    new Promise(function (t) {
                      var r = setTimeout(function () {
                        e && e > 0 && t(!1);
                      }, e);
                      Promise.all(n.buffer)
                        .then(function () {
                          clearTimeout(r), t(!0);
                        })
                        .catch(function () {
                          t(!0);
                        });
                    }),
                  ];
                });
              });
            }),
            e
          );
        })();
      n.RequestBuffer = o;
    },
    30: function (e, n, t) {
      "use strict";
      function r() {
        var e = a.getGlobalObject();
        return (
          (e.__SENTRY__ = e.__SENTRY__ || {}),
          (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []),
          e.__SENTRY__.globalEventProcessors
        );
      }
      function o(e) {
        r().push(e);
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = t(6),
        a = t(11),
        s = t(19),
        c = (function () {
          function e() {
            (this.notifyingListeners = !1),
              (this.scopeListeners = []),
              (this.eventProcessors = []),
              (this.breadcrumbs = []),
              (this.user = {}),
              (this.tags = {}),
              (this.extra = {});
          }
          return (
            (e.prototype.addScopeListener = function (e) {
              this.scopeListeners.push(e);
            }),
            (e.prototype.addEventProcessor = function (e) {
              return this.eventProcessors.push(e), this;
            }),
            (e.prototype.notifyScopeListeners = function () {
              var e = this;
              this.notifyingListeners ||
                ((this.notifyingListeners = !0),
                setTimeout(function () {
                  e.scopeListeners.forEach(function (n) {
                    n(e);
                  }),
                    (e.notifyingListeners = !1);
                }, 0));
            }),
            (e.prototype.notifyEventProcessors = function (e, n) {
              return i.__awaiter(this, void 0, void 0, function () {
                var t, o, a, s, c, l, u, p;
                return i.__generator(this, function (d) {
                  switch (d.label) {
                    case 0:
                      (a = e), (d.label = 1);
                    case 1:
                      d.trys.push([1, 8, 9, 10]),
                        (s = i.__values(i.__spread(r(), this.eventProcessors))),
                        (c = s.next()),
                        (d.label = 2);
                    case 2:
                      if (c.done) return [3, 7];
                      (l = c.value), (d.label = 3);
                    case 3:
                      return d.trys.push([3, 5, , 6]), [4, l(i.__assign({}, a), n)];
                    case 4:
                      return (a = d.sent()), null === a ? [2, null] : [3, 6];
                    case 5:
                      return (u = d.sent()), [3, 6];
                    case 6:
                      return (c = s.next()), [3, 2];
                    case 7:
                      return [3, 10];
                    case 8:
                      return (p = d.sent()), (t = { error: p }), [3, 10];
                    case 9:
                      try {
                        c && !c.done && (o = s.return) && o.call(s);
                      } finally {
                        if (t) throw t.error;
                      }
                      return [7];
                    case 10:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.setUser = function (e) {
              return (this.user = s.safeNormalize(e)), this.notifyScopeListeners(), this;
            }),
            (e.prototype.setTag = function (e, n) {
              var t;
              return (
                (this.tags = i.__assign({}, this.tags, ((t = {}), (t[e] = s.safeNormalize(n)), t))),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setExtra = function (e, n) {
              var t;
              return (
                (this.extra = i.__assign({}, this.extra, ((t = {}), (t[e] = s.safeNormalize(n)), t))),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setFingerprint = function (e) {
              return (this.fingerprint = s.safeNormalize(e)), this.notifyScopeListeners(), this;
            }),
            (e.prototype.setLevel = function (e) {
              return (this.level = s.safeNormalize(e)), this.notifyScopeListeners(), this;
            }),
            (e.clone = function (n) {
              var t = new e();
              return (
                s.assign(t, n, { scopeListeners: [] }),
                n &&
                  ((t.extra = s.assign(n.extra)),
                  (t.tags = s.assign(n.tags)),
                  (t.breadcrumbs = i.__spread(n.breadcrumbs)),
                  (t.eventProcessors = i.__spread(n.eventProcessors))),
                t
              );
            }),
            (e.prototype.clear = function () {
              (this.breadcrumbs = []),
                (this.tags = {}),
                (this.extra = {}),
                (this.user = {}),
                (this.level = void 0),
                (this.fingerprint = void 0),
                this.notifyScopeListeners();
            }),
            (e.prototype.addBreadcrumb = function (e, n) {
              (this.breadcrumbs =
                void 0 !== n && n >= 0
                  ? i.__spread(this.breadcrumbs, [s.safeNormalize(e)]).slice(-n)
                  : i.__spread(this.breadcrumbs, [s.safeNormalize(e)])),
                this.notifyScopeListeners();
            }),
            (e.prototype.applyFingerprint = function (e) {
              (e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
                this.fingerprint
                  ? (e.fingerprint = e.fingerprint.concat(this.fingerprint))
                  : e.message && (e.fingerprint = e.fingerprint.concat(e.message)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
            }),
            (e.prototype.applyToEvent = function (e, n, t) {
              return i.__awaiter(this, void 0, void 0, function () {
                var r;
                return i.__generator(this, function (o) {
                  return (
                    this.extra && Object.keys(this.extra).length && (e.extra = i.__assign({}, this.extra, e.extra)),
                    this.tags && Object.keys(this.tags).length && (e.tags = i.__assign({}, this.tags, e.tags)),
                    this.user && Object.keys(this.user).length && (e.user = i.__assign({}, this.user, e.user)),
                    this.level && (e.level = this.level),
                    this.applyFingerprint(e),
                    (r = !e.breadcrumbs || 0 === e.breadcrumbs.length),
                    r &&
                      this.breadcrumbs.length > 0 &&
                      (e.breadcrumbs = void 0 !== t && t >= 0 ? this.breadcrumbs.slice(-t) : this.breadcrumbs),
                    [2, this.notifyEventProcessors(e, n)]
                  );
                });
              });
            }),
            e
          );
        })();
      (n.Scope = c), (n.addGlobalEventProcessor = o);
    },
    31: function (e, n, t) {
      "use strict";
      function r(e, n) {
        return void 0 === n && (n = 0), 0 !== n && s.isString(e) ? (e.length <= n ? e : e.substr(0, n) + "…") : e;
      }
      function o(e, n) {
        var t = e,
          r = t.length;
        if (r <= 150) return t;
        n > r && (n = r);
        var o = Math.max(n - 60, 0);
        o < 5 && (o = 0);
        var i = Math.min(o + 140, r);
        return (
          i > r - 5 && (i = r),
          i === r && (o = Math.max(i - 140, 0)),
          (t = t.slice(o, i)),
          o > 0 && (t = "'{snip} " + t),
          i < r && (t += " {snip}"),
          t
        );
      }
      function i(e, n) {
        if (!Array.isArray(e)) return "";
        for (var t = [], r = 0; r < e.length; r++) {
          var o = e[r];
          try {
            t.push(String(o));
          } catch (e) {
            t.push("[value cannot be serialized]");
          }
        }
        return t.join(n);
      }
      function a(e, n) {
        return !(n.length > e.length) && -1 !== e.indexOf(n);
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var s = t(10);
      (n.truncate = r), (n.snipLine = o), (n.safeJoin = i), (n.includes = a);
    },
    32: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(9),
        c = t(5),
        l = t(58).default,
        u = t(1),
        p = t(0);
      t(122);
      var d = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return s(t, ["handleClickOutside"]), t;
        }
        return (
          i(n, e),
          a(n, [
            {
              key: "handleClickOutside",
              value: function () {
                this.props.isOpen && this.props.onRequestClose();
              },
            },
            {
              key: "render",
              value: function () {
                return p.createElement(
                  this.props.as,
                  {
                    className: c("dropdown", this.props.className, {
                      open: this.props.isOpen,
                    }),
                  },
                  this.props.children
                );
              },
            },
          ]),
          n
        );
      })(p.Component);
      (d.propTypes = {
        children: u.node,
        className: u.string,
        isOpen: u.bool,
        onRequestClose: u.func.isRequired,
      }),
        (d.defaultProps = { as: "div", isOpen: !1 }),
        (e.exports = l(d));
    },
    33: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + n + ".");
      }
      function o(e) {
        var n = e;
        if ("string" == typeof n && d.canUseDOM) {
          var t = document.querySelectorAll(n);
          r(t, n), (n = "length" in t ? t[0] : t);
        }
        return (f = n || f);
      }
      function i(e) {
        return (
          !(!e && !f) ||
          ((0, p.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`.",
            ].join(" ")
          ),
          !1)
        );
      }
      function a(e) {
        i(e) && (e || f).setAttribute("aria-hidden", "true");
      }
      function s(e) {
        i(e) && (e || f).removeAttribute("aria-hidden");
      }
      function c() {
        f = null;
      }
      function l() {
        f = null;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.assertNodeList = r),
        (n.setElement = o),
        (n.validateElement = i),
        (n.hide = a),
        (n.show = s),
        (n.documentNotReadyOrSSRTesting = c),
        (n.resetForTesting = l);
      var u = t(131),
        p = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        d = t(20),
        f = null;
    },
    34: function (e, n, t) {
      "use strict";
      function r(e) {
        var n = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (n && !e.innerHTML) return !0;
        var t = window.getComputedStyle(e);
        return n
          ? "visible" !== t.getPropertyValue("overflow") || (e.scrollWidth <= 0 && e.scrollHeight <= 0)
          : "none" == t.getPropertyValue("display");
      }
      function o(e) {
        for (var n = e; n && n !== document.body; ) {
          if (r(n)) return !1;
          n = n.parentNode;
        }
        return !0;
      }
      function i(e, n) {
        var t = e.nodeName.toLowerCase();
        return ((c.test(t) && !e.disabled) || ("a" === t ? e.href || n : n)) && o(e);
      }
      function a(e) {
        var n = e.getAttribute("tabindex");
        null === n && (n = void 0);
        var t = isNaN(n);
        return (t || n >= 0) && i(e, !t);
      }
      function s(e) {
        return [].slice.call(e.querySelectorAll("*"), 0).filter(a);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = s);
      /*!
       * Adapted from jQuery UI core
       *
       * http://jqueryui.com
       *
       * Copyright 2014 jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       *
       * http://api.jqueryui.com/category/ui-core/
       */
      var c = /input|select|textarea|button|object/;
      e.exports = n.default;
    },
    35: function (e, n, t) {
      var r = t(104);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    36: function (e, n) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    38: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.button {\n  display: inline-block;\n  margin: .5em 0;\n  border: 0;\n  border-radius: .5rem;\n  background-color: #4d97ff;\n  cursor: pointer;\n  padding: 1em 1.25em;\n  color: white;\n  font-size: .8rem;\n  font-weight: bold;\n  /* USER BUTTON STATES */\n  /* DATA BUTTON STATES */ }\n  .button:focus {\n    outline: none; }\n  .button.white {\n    background-color: white;\n    color: #4d97ff; }\n  .button.pass {\n    background-color: #0fbd8c; }\n  .button.fail {\n    background-color: #ffab1a; }\n  .button:disabled {\n    box-shadow: none; }\n  .button.large {\n    border-radius: .25rem;\n    font-size: 1rem;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    padding: .75rem 1.25rem .8125rem; }\n  .button.icon-right img {\n    height: 1.25rem;\n    margin-bottom: -.25rem;\n    margin-left: .5rem;\n    margin-right: -.25rem; }\n',
          "",
        ]);
    },
    40: function (e, n, t) {
      "use strict";
      var r = t(0),
        o = t(1),
        i = t(5);
      t(60);
      var a = function (e) {
        var n = e.className,
          t = e.color;
        return r.createElement("img", {
          alt: "loading animation",
          className: i("studio-status-icon-spinner", n),
          src: "/svgs/modal/spinner-" + t + ".svg",
        });
      };
      (a.defaultProps = { color: "white" }),
        (a.propTypes = {
          className: o.string,
          color: o.oneOf(["white", "blue", "transparent-gray"]),
        }),
        (e.exports = a);
    },
    41: function (e, n, t) {
      "use strict";
      var r = t(1),
        o = t(0);
      t(49);
      var i = function (e) {
        return o.createElement("div", { className: "inner" }, e.children);
      };
      (i.propTypes = { children: r.node }), (e.exports = i);
    },
    42: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(9),
        c = t(5),
        l = t(1),
        u = t(0),
        p = t(136),
        d = t(137).default,
        f = t(22),
        m = t(134);
      t(50);
      var h = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return s(t, ["handleSetLanguage"]), t;
        }
        return (
          i(n, e),
          a(n, [
            {
              key: "handleSetLanguage",
              value: function (e, n) {
                var t = {};
                "localhost" !== window.location.hostname && (t = { domain: "." + window.location.hostname }),
                  p.set("scratchlanguage", n, t),
                  window.location.reload();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = Object.keys(this.props.languages).map(function (n) {
                    return { value: n, label: e.props.languages[n].name };
                  });
                return u.createElement(
                  f,
                  { className: c("language-chooser", this.props.className) },
                  u.createElement(m, {
                    required: !0,
                    name: "language",
                    options: n,
                    value: this.props.locale,
                    onChange: this.handleSetLanguage,
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Component);
      (h.propTypes = {
        className: l.string,
        languages: l.object,
        locale: l.string,
      }),
        (h.defaultProps = { languages: d, locale: "en" }),
        (e.exports = h);
    },
    43: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(1),
        i = t(0);
      t(51);
      var a = function (e) {
        return i.createElement("div", { className: r("inner", e.className) }, e.children);
      };
      (a.propTypes = { children: o.node, className: o.string }), (e.exports = a);
    },
    44: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.flex-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .flex-row.column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .flex-row.uneven {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start; }\n    .flex-row.uneven .short {\n      width: 13.75em; }\n    .flex-row.uneven .long {\n      width: 38.75em;\n      text-align: left; }\n  @media only screen and (max-width: 767px) {\n    .flex-row {\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .flex-row.uneven .short,\n      .flex-row.uneven .long {\n        margin: auto;\n        width: 90%; } }\n",
          "",
        ]);
    },
    45: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n#footer {\n  display: block;\n  background-color: #f2f2f2;\n  padding: 10px 0;\n  color: #575e75;\n  font-size: .85rem; }\n",
          "",
        ]);
    },
    46: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.language-chooser .select select {\n  width: 13.75rem;\n  /* 3 columns */ }\n",
          "",
        ]);
    },
    47: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n#navigation {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n  background-color: #4d97ff;\n  width: 100%;\n  /* NOTE: Height should match offset settings in main.scss file */\n  height: 50px; }\n  #navigation.staging {\n    background-color: #ffab1a; }\n  .ie9 #navigation {\n    display: table;\n    table-layout: fixed; }\n  #navigation .inner > ul {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    height: 50px;\n    list-style: none;\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .ie9 #navigation .inner > ul {\n      display: table-row; }\n    #navigation .inner > ul > li {\n      display: inline-block;\n      position: relative;\n      float: left;\n      margin: 0;\n      height: 100%;\n      -webkit-align-self: flex-start;\n          -ms-flex-item-align: start;\n              align-self: flex-start; }\n      #navigation .inner > ul > li.right {\n        float: right;\n        margin-left: auto;\n        -webkit-align-self: flex-end;\n            -ms-flex-item-align: end;\n                align-self: flex-end; }\n        .ie9 #navigation .inner > ul > li.right {\n          float: none; }\n        #navigation .inner > ul > li.right a:hover {\n          background-color: rgba(0, 0, 0, 0.1); }\n      .ie9 #navigation .inner > ul > li {\n        display: table-cell;\n        float: none;\n        height: 50px;\n        vertical-align: bottom; }\n  #navigation .link > a {\n    display: block;\n    padding: 13px 15px 4px 15px;\n    height: 33px;\n    text-decoration: none;\n    white-space: nowrap;\n    color: white;\n    font-size: .85rem;\n    font-weight: bold; }\n    #navigation .link > a:hover {\n      background-color: rgba(0, 0, 0, 0.1); }\n",
          "",
        ]);
    },
    48: function (e, n, t) {
      var r = t(44);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    49: function (e, n, t) {
      var r = t(45);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    50: function (e, n, t) {
      var r = t(46);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    51: function (e, n, t) {
      var r = t(47);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    52: function (e, n, t) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          },
        o = t(5),
        i = t(13),
        a = t(1),
        s = t(0),
        c = function (e) {
          return s.createElement("img", r({ className: o("avatar", e.className) }, i(e, ["className"])));
        };
      (c.propTypes = { className: a.string, src: a.string }),
        (c.defaultProps = {
          src: "//cdn2.scratch.mit.edu/get_image/user/2584924_24x24.png?v=1438702210.96",
        }),
        (e.exports = c);
    },
    53: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.title-banner {\n  transition: background-image .5s ease, background-color .5s ease;\n  margin-bottom: 40px;\n  background-color: #0fbd8c;\n  background-position: center;\n  background-size: cover;\n  padding: 20px 0;\n  width: 100%; }\n\n.title-banner-h1,\n.title-banner-p {\n  margin: 0 auto;\n  padding: 5px 0;\n  text-align: center;\n  color: white; }\n\n.title-banner-p {\n  max-width: 500px; }\n\n.title-banner-strong {\n  font-weight: 700; }\n\n.title-banner.mod-blue-bg {\n  background-color: #4d97ff; }\n  .title-banner.mod-blue-bg a {\n    color: white; }\n  .title-banner.mod-blue-bg a.mod-underline {\n    text-decoration: underline; }\n",
          "",
        ]);
    },
    54: function (e, n, t) {
      var r = t(53);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    55: function (e, n, t) {
      "use strict";
      var r = {
        desktop: 942,
        mobileIntermediate: 640,
        tabletPortrait: 768,
        mobile: 480,
      };
      e.exports = r;
    },
    56: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.row label {\n  font-weight: 500; }\n\n.input {\n  transition: all .5s ease;\n  margin-bottom: .75rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #fafafa;\n  padding: 0 1rem;\n  height: 3rem;\n  color: #575e75;\n  font-size: .875rem;\n  /* IE10/11-specific style resets */ }\n  .input:focus {\n    transition: all .5s ease;\n    outline: none;\n    border: 1px solid #4d97ff; }\n  .input.fail {\n    border: 1px solid #ffab1a; }\n  .input.pass {\n    border: 1px solid #0fbd8c; }\n  .input::-ms-reveal, .input::-ms-clear {\n    display: none; }\n",
          "",
        ]);
    },
    57: function (e, n, t) {
      (n = e.exports = t(2)()),
        n.push([
          e.i,
          ".studio-status-icon-spinner {\n  /* This class can be used on an icon that should spin.\n    It first plays the intro animation, then spins forever. */\n  -webkit-animation-name: intro, spin;\n          animation-name: intro, spin;\n  -webkit-animation-duration: .25s, 1s;\n          animation-duration: .25s, 1s;\n  -webkit-animation-timing-function: cubic-bezier(0.3, -3, 0.6, 3), cubic-bezier(0.4, 0.1, 0.4, 1);\n          animation-timing-function: cubic-bezier(0.3, -3, 0.6, 3), cubic-bezier(0.4, 0.1, 0.4, 1);\n  -webkit-animation-delay: 0s, .25s;\n          animation-delay: 0s, .25s;\n  -webkit-animation-iteration-count: 1, infinite;\n          animation-iteration-count: 1, infinite;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  width: 1.4rem;\n  /* standard is 1.4 rem but can be overwritten by parent */\n  height: 1.4rem;\n  -webkit-transform-origin: center;\n      -ms-transform-origin: center;\n          transform-origin: center; }\n\n@-webkit-keyframes intro {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes intro {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n",
          "",
        ]);
    },
    58: function (e, n, t) {
      "use strict";
      function r(e, n) {
        (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), (e.__proto__ = n);
      }
      function o(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
        }
        return o;
      }
      function i(e, n, t) {
        return (
          e === n || (e.correspondingElement ? e.correspondingElement.classList.contains(t) : e.classList.contains(t))
        );
      }
      function a(e, n, t) {
        if (e === n) return !0;
        for (; e.parentNode; ) {
          if (i(e, n, t)) return !0;
          e = e.parentNode;
        }
        return e;
      }
      function s(e) {
        return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;
      }
      function c(e, n) {
        var t = null;
        return -1 !== v.indexOf(n) && u && (t = { passive: !e.props.preventDefault }), t;
      }
      function l(e, n) {
        var i, l;
        return (
          (l = i =
            (function (i) {
              function l(e) {
                var n;
                return (
                  (n = i.call(this, e) || this),
                  (n.__outsideClickHandler = function (e) {
                    if ("function" == typeof n.__clickOutsideHandlerProp) return void n.__clickOutsideHandlerProp(e);
                    var t = n.getInstance();
                    if ("function" == typeof t.props.handleClickOutside) return void t.props.handleClickOutside(e);
                    if ("function" == typeof t.handleClickOutside) return void t.handleClickOutside(e);
                    throw new Error(
                      "WrappedComponent lacks a handleClickOutside(event) function for processing outside click events."
                    );
                  }),
                  (n.enableOnClickOutside = function () {
                    if ("undefined" != typeof document && !g[n._uid]) {
                      void 0 === u && (u = f()), (g[n._uid] = !0);
                      var e = n.props.eventTypes;
                      e.forEach || (e = [e]),
                        (h[n._uid] = function (e) {
                          if (
                            !n.props.disableOnClickOutside &&
                            null !== n.componentNode &&
                            (n.props.preventDefault && e.preventDefault(),
                            n.props.stopPropagation && e.stopPropagation(),
                            !n.props.excludeScrollbar || !s(e))
                          ) {
                            a(e.target, n.componentNode, n.props.outsideClickIgnoreClass) === document &&
                              n.__outsideClickHandler(e);
                          }
                        }),
                        e.forEach(function (e) {
                          document.addEventListener(e, h[n._uid], c(n, e));
                        });
                    }
                  }),
                  (n.disableOnClickOutside = function () {
                    delete g[n._uid];
                    var e = h[n._uid];
                    if (e && "undefined" != typeof document) {
                      var t = n.props.eventTypes;
                      t.forEach || (t = [t]),
                        t.forEach(function (t) {
                          return document.removeEventListener(t, e, c(n, t));
                        }),
                        delete h[n._uid];
                    }
                  }),
                  (n.getRef = function (e) {
                    return (n.instanceRef = e);
                  }),
                  (n._uid = m()),
                  n
                );
              }
              r(l, i);
              var v = l.prototype;
              return (
                (v.getInstance = function () {
                  if (!e.prototype.isReactComponent) return this;
                  var n = this.instanceRef;
                  return n.getInstance ? n.getInstance() : n;
                }),
                (v.componentDidMount = function () {
                  if ("undefined" != typeof document && document.createElement) {
                    var e = this.getInstance();
                    if (
                      n &&
                      "function" == typeof n.handleClickOutside &&
                      ((this.__clickOutsideHandlerProp = n.handleClickOutside(e)),
                      "function" != typeof this.__clickOutsideHandlerProp)
                    )
                      throw new Error(
                        "WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option."
                      );
                    (this.componentNode = t.i(d.findDOMNode)(this.getInstance())), this.enableOnClickOutside();
                  }
                }),
                (v.componentDidUpdate = function () {
                  this.componentNode = t.i(d.findDOMNode)(this.getInstance());
                }),
                (v.componentWillUnmount = function () {
                  this.disableOnClickOutside();
                }),
                (v.render = function () {
                  var n = this.props,
                    r = (n.excludeScrollbar, o(n, ["excludeScrollbar"]));
                  return (
                    e.prototype.isReactComponent ? (r.ref = this.getRef) : (r.wrappedRef = this.getRef),
                    (r.disableOnClickOutside = this.disableOnClickOutside),
                    (r.enableOnClickOutside = this.enableOnClickOutside),
                    t.i(p.createElement)(e, r)
                  );
                }),
                l
              );
            })(p.Component)),
          (i.displayName = "OnClickOutside(" + (e.displayName || e.name || "Component") + ")"),
          (i.defaultProps = {
            eventTypes: ["mousedown", "touchstart"],
            excludeScrollbar: (n && n.excludeScrollbar) || !1,
            outsideClickIgnoreClass: y,
            preventDefault: !1,
            stopPropagation: !1,
          }),
          (i.getClass = function () {
            return e.getClass ? e.getClass() : e;
          }),
          l
        );
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        t.d(n, "IGNORE_CLASS_NAME", function () {
          return y;
        });
      var u,
        p = t(0),
        d = (t.n(p), t(39)),
        f =
          (t.n(d),
          function () {
            if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
              var e = !1,
                n = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                }),
                t = function () {};
              return (
                window.addEventListener("testPassiveEventSupport", t, n),
                window.removeEventListener("testPassiveEventSupport", t, n),
                e
              );
            }
          }),
        m = (function (e) {
          return (
            void 0 === e && (e = 0),
            function () {
              return ++e;
            }
          );
        })(),
        h = {},
        g = {},
        v = ["touchstart", "touchmove"],
        y = "ignore-react-onclickoutside";
      n.default = l;
    },
    59: function (e, n, t) {
      var r = t(56);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    6: function (e, n, t) {
      "use strict";
      function r(e, n) {
        function t() {
          this.constructor = e;
        }
        _(e, n), (e.prototype = null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
      }
      function o(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
        return t;
      }
      function i(e, n, t, r) {
        var o,
          i = arguments.length,
          a = i < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, t)) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, n, t, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(n, t, a) : o(n, t)) || a);
        return i > 3 && a && Object.defineProperty(n, t, a), a;
      }
      function a(e, n) {
        return function (t, r) {
          n(t, r, e);
        };
      }
      function s(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n);
      }
      function c(e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : new t(function (n) {
                  n(e.value);
                }).then(a, s);
          }
          c((r = r.apply(e, n || [])).next());
        });
      }
      function l(e, n) {
        function t(e) {
          return function (n) {
            return r([e, n]);
          };
        }
        function r(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c; )
            try {
              if (
                ((o = 1),
                i &&
                  (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
                  !(a = a.call(i, t[1])).done)
              )
                return a;
              switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                case 0:
                case 1:
                  a = t;
                  break;
                case 4:
                  return c.label++, { value: t[1], done: !1 };
                case 5:
                  c.label++, (i = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (((a = c.trys), !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0]))) {
                    c = 0;
                    continue;
                  }
                  if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                    c.label = t[1];
                    break;
                  }
                  if (6 === t[0] && c.label < a[1]) {
                    (c.label = a[1]), (a = t);
                    break;
                  }
                  if (a && c.label < a[2]) {
                    (c.label = a[2]), c.ops.push(t);
                    break;
                  }
                  a[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              t = n.call(e, c);
            } catch (e) {
              (t = [6, e]), (i = 0);
            } finally {
              o = a = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        }
        var o,
          i,
          a,
          s,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: t(0), throw: t(1), return: t(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
      }
      function u(e, n) {
        for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t]);
      }
      function p(e) {
        var n = "function" == typeof Symbol && e[Symbol.iterator],
          t = 0;
        return n
          ? n.call(e)
          : {
              next: function () {
                return e && t >= e.length && (e = void 0), { value: e && e[t++], done: !e };
              },
            };
      }
      function d(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r,
          o,
          i = t.call(e),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; ) a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function f() {
        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(d(arguments[n]));
        return e;
      }
      function m() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        for (var r = Array(e), o = 0, n = 0; n < t; n++)
          for (var i = arguments[n], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r;
      }
      function h(e) {
        return this instanceof h ? ((this.v = e), this) : new h(e);
      }
      function g(e, n, t) {
        function r(e) {
          u[e] &&
            (l[e] = function (n) {
              return new Promise(function (t, r) {
                p.push([e, n, t, r]) > 1 || o(e, n);
              });
            });
        }
        function o(e, n) {
          try {
            i(u[e](n));
          } catch (e) {
            c(p[0][3], e);
          }
        }
        function i(e) {
          e.value instanceof h ? Promise.resolve(e.value.v).then(a, s) : c(p[0][2], e);
        }
        function a(e) {
          o("next", e);
        }
        function s(e) {
          o("throw", e);
        }
        function c(e, n) {
          e(n), p.shift(), p.length && o(p[0][0], p[0][1]);
        }
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var l,
          u = t.apply(e, n || []),
          p = [];
        return (
          (l = {}),
          r("next"),
          r("throw"),
          r("return"),
          (l[Symbol.asyncIterator] = function () {
            return this;
          }),
          l
        );
      }
      function v(e) {
        function n(n, o) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r) ? { value: h(e[n](t)), done: "return" === n } : o ? o(t) : t;
              }
            : o;
        }
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
      }
      function y(e) {
        function n(n) {
          r[n] =
            e[n] &&
            function (r) {
              return new Promise(function (o, i) {
                (r = e[n](r)), t(o, i, r.done, r.value);
              });
            };
        }
        function t(e, n, t, r) {
          Promise.resolve(r).then(function (n) {
            e({ value: n, done: t });
          }, n);
        }
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = e[Symbol.asyncIterator];
        return o
          ? o.call(e)
          : ((e = "function" == typeof p ? p(e) : e[Symbol.iterator]()),
            (r = {}),
            n("next"),
            n("throw"),
            n("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r);
      }
      function b(e, n) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: n }) : (e.raw = n), e;
      }
      function w(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e) for (var t in e) Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return (n.default = e), n;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.__extends = r),
        t.d(n, "__assign", function () {
          return E;
        }),
        (n.__rest = o),
        (n.__decorate = i),
        (n.__param = a),
        (n.__metadata = s),
        (n.__awaiter = c),
        (n.__generator = l),
        (n.__exportStar = u),
        (n.__values = p),
        (n.__read = d),
        (n.__spread = f),
        (n.__spreadArrays = m),
        (n.__await = h),
        (n.__asyncGenerator = g),
        (n.__asyncDelegator = v),
        (n.__asyncValues = y),
        (n.__makeTemplateObject = b),
        (n.__importStar = w),
        (n.__importDefault = x); /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var _ = function (e, n) {
          return (_ =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, n) {
                e.__proto__ = n;
              }) ||
            function (e, n) {
              for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
            })(e, n);
        },
        E = function () {
          return (
            (E =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++) {
                  n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
            E.apply(this, arguments)
          );
        };
    },
    60: function (e, n, t) {
      var r = t(57);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    62: function (e, n, t) {
      !(function (n, r) {
        e.exports = r(t(0));
      })(0, function (e) {
        return (function (e) {
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          var t = {};
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, n) {
              return Object.prototype.hasOwnProperty.call(e, n);
            }),
            (n.p = ""),
            n((n.s = 7))
          );
        })([
          function (e, n, t) {
            var r = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
              o = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === r;
              };
            e.exports = t(9)(o, !0);
          },
          function (e, n, t) {
            "use strict";
            function r(e) {
              return function () {
                return e;
              };
            }
            var o = function () {};
            (o.thatReturns = r),
              (o.thatReturnsFalse = r(!1)),
              (o.thatReturnsTrue = r(!0)),
              (o.thatReturnsNull = r(null)),
              (o.thatReturnsThis = function () {
                return this;
              }),
              (o.thatReturnsArgument = function (e) {
                return e;
              }),
              (e.exports = o);
          },
          function (e, n, t) {
            "use strict";
            function r(e, n, t, r, i, a, s, c) {
              if ((o(n), !e)) {
                var l;
                if (void 0 === n)
                  l = new Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var u = [t, r, i, a, s, c],
                    p = 0;
                  (l = new Error(
                    n.replace(/%s/g, function () {
                      return u[p++];
                    })
                  )),
                    (l.name = "Invariant Violation");
                }
                throw ((l.framesToPop = 1), l);
              }
            }
            var o = function (e) {};
            (o = function (e) {
              if (void 0 === e) throw new Error("invariant requires an error message argument");
            }),
              (e.exports = r);
          },
          function (e, n, t) {
            "use strict";
            var r = t(1),
              o = r,
              i = function (e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                var o = 0,
                  i =
                    "Warning: " +
                    e.replace(/%s/g, function () {
                      return t[o++];
                    });
                "undefined" != typeof console && console.error(i);
                try {
                  throw new Error(i);
                } catch (e) {}
              };
            (o = function (e, n) {
              if (void 0 === n)
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
              if (0 !== n.indexOf("Failed Composite propType: ") && !e) {
                for (var t = arguments.length, r = Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
                i.apply(void 0, [n].concat(r));
              }
            }),
              (e.exports = o);
          },
          function (e, n, t) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function (e, n, t) {
            "use strict";
            function r(e) {
              return e in a ? a[e] : (a[e] = e.replace(o, "-$&").toLowerCase().replace(i, "-ms-"));
            }
            var o = /[A-Z]/g,
              i = /^ms-/,
              a = {};
            e.exports = r;
          },
          function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r =
                Object.assign ||
                function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  }
                  return e;
                },
              o = t(0),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(o),
              a = i.default.oneOfType([i.default.string, i.default.number]),
              s = {
                orientation: i.default.oneOf(["portrait", "landscape"]),
                scan: i.default.oneOf(["progressive", "interlace"]),
                aspectRatio: i.default.string,
                deviceAspectRatio: i.default.string,
                height: a,
                deviceHeight: a,
                width: a,
                deviceWidth: a,
                color: i.default.bool,
                colorIndex: i.default.bool,
                monochrome: i.default.bool,
                resolution: a,
              },
              c = r(
                {
                  minAspectRatio: i.default.string,
                  maxAspectRatio: i.default.string,
                  minDeviceAspectRatio: i.default.string,
                  maxDeviceAspectRatio: i.default.string,
                  minHeight: a,
                  maxHeight: a,
                  minDeviceHeight: a,
                  maxDeviceHeight: a,
                  minWidth: a,
                  maxWidth: a,
                  minDeviceWidth: a,
                  maxDeviceWidth: a,
                  minColor: i.default.number,
                  maxColor: i.default.number,
                  minColorIndex: i.default.number,
                  maxColorIndex: i.default.number,
                  minMonochrome: i.default.number,
                  maxMonochrome: i.default.number,
                  minResolution: a,
                  maxResolution: a,
                },
                s
              ),
              l = {
                all: i.default.bool,
                grid: i.default.bool,
                aural: i.default.bool,
                braille: i.default.bool,
                handheld: i.default.bool,
                print: i.default.bool,
                projection: i.default.bool,
                screen: i.default.bool,
                tty: i.default.bool,
                tv: i.default.bool,
                embossed: i.default.bool,
              },
              u = r({}, l, c);
            (s.type = Object.keys(l)),
              (n.default = { all: u, types: l, matchers: s, features: c }),
              (e.exports = n.default);
          },
          function (e, n, t) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function o(e, n) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }
            function i(e, n) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
            }
            function a(e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError("Super expression must either be null or a function, not " + typeof n);
              (e.prototype = Object.create(n && n.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
            }
            function s(e, n) {
              var t = l({}, e);
              return (
                n.forEach(function (e) {
                  return delete t[e];
                }),
                t
              );
            }
            Object.defineProperty(n, "__esModule", { value: !0 }), (n.toQuery = n.default = void 0);
            var c = (function () {
                function e(e, n) {
                  for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (n, t, r) {
                  return t && e(n.prototype, t), r && e(n, r), n;
                };
              })(),
              l =
                Object.assign ||
                function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  }
                  return e;
                },
              u = t(8),
              p = r(u),
              d = t(0),
              f = r(d),
              m = t(12),
              h = r(m),
              g = t(5),
              v = r(g),
              y = t(6),
              b = r(y),
              w = t(14),
              x = r(w),
              _ = {
                component: f.default.node,
                query: f.default.string,
                values: f.default.shape(b.default.matchers),
                children: f.default.oneOfType([f.default.node, f.default.func]),
                onChange: f.default.func,
                onBeforeChange: f.default.func,
              },
              E = Object.keys(b.default.all),
              O = Object.keys(_),
              k = O.concat(E),
              S = (function (e) {
                function n() {
                  var e, t, r, a;
                  o(this, n);
                  for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                  return (
                    (t = r = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(c)))),
                    (r.state = { matches: !1 }),
                    (r.updateMatches = function () {
                      r._mql.matches !== r.state.matches && r.setState({ matches: r._mql.matches });
                    }),
                    (r.removeMql = function () {
                      r._mql && (r._mql.removeListener(r.updateMatches), r._mql.dispose());
                    }),
                    (a = t),
                    i(r, a)
                  );
                }
                return (
                  a(n, e),
                  c(n, [
                    {
                      key: "componentWillMount",
                      value: function () {
                        this.updateQuery(this.props);
                      },
                    },
                    {
                      key: "componentWillReceiveProps",
                      value: function (e) {
                        this.updateQuery(e);
                      },
                    },
                    {
                      key: "updateQuery",
                      value: function (e) {
                        var n = void 0;
                        if ((e.query ? (this.query = e.query) : (this.query = (0, x.default)(s(e, O))), !this.query))
                          throw new Error("Invalid or missing MediaQuery!");
                        e.values &&
                          (n = Object.keys(e.values).reduce(function (n, t) {
                            return (n[(0, v.default)(t)] = e.values[t]), n;
                          }, {})),
                          this.removeMql(),
                          (this._mql = (0, h.default)(this.query, n)),
                          this._mql.addListener(this.updateMatches),
                          this.updateMatches();
                      },
                    },
                    {
                      key: "componentWillUpdate",
                      value: function (e, n) {
                        this.props.onBeforeChange &&
                          this.state.matches !== n.matches &&
                          this.props.onBeforeChange(this.state.matches);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e, n) {
                        this.props.onChange &&
                          n.matches !== this.state.matches &&
                          this.props.onChange(this.state.matches);
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.removeMql();
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        if ("function" == typeof this.props.children) return this.props.children(this.state.matches);
                        if (!1 === this.state.matches) return null;
                        var e = s(this.props, k),
                          n = Object.keys(e).length > 0,
                          t = p.default.Children.count(this.props.children);
                        return this.props.component ||
                          t > 1 ||
                          "string" == typeof this.props.children ||
                          (Array.isArray(this.props.children) && 1 == t) ||
                          void 0 === this.props.children
                          ? p.default.createElement(this.props.component || "div", e, this.props.children)
                          : n
                          ? p.default.cloneElement(this.props.children, e)
                          : t
                          ? this.props.children
                          : null;
                      },
                    },
                  ]),
                  n
                );
              })(p.default.Component);
            (S.displayName = "MediaQuery"), (S.defaultProps = { values: {} }), (n.default = S), (n.toQuery = x.default);
          },
          function (n, t) {
            n.exports = e;
          },
          function (e, n, t) {
            "use strict";
            var r = t(1),
              o = t(2),
              i = t(3),
              a = t(10),
              s = t(4),
              c = t(11);
            e.exports = function (e, n) {
              function t(e) {
                var n = e && ((S && e[S]) || e[C]);
                if ("function" == typeof n) return n;
              }
              function l(e, n) {
                return e === n ? 0 !== e || 1 / e == 1 / n : e !== e && n !== n;
              }
              function u(e) {
                (this.message = e), (this.stack = "");
              }
              function p(e) {
                function t(t, c, l, p, d, f, m) {
                  if (((p = p || j), (f = f || l), m !== s))
                    if (n)
                      o(
                        !1,
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                    else if ("undefined" != typeof console) {
                      var h = p + ":" + l;
                      !r[h] &&
                        a < 3 &&
                        (i(
                          !1,
                          "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                          f,
                          p
                        ),
                        (r[h] = !0),
                        a++);
                    }
                  return null == c[l]
                    ? t
                      ? new u(
                          null === c[l]
                            ? "The " + d + " `" + f + "` is marked as required in `" + p + "`, but its value is `null`."
                            : "The " +
                              d +
                              " `" +
                              f +
                              "` is marked as required in `" +
                              p +
                              "`, but its value is `undefined`."
                        )
                      : null
                    : e(c, l, p, d, f);
                }
                var r = {},
                  a = 0,
                  c = t.bind(null, !1);
                return (c.isRequired = t.bind(null, !0)), c;
              }
              function d(e) {
                function n(n, t, r, o, i, a) {
                  var s = n[t];
                  if (_(s) !== e)
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        E(s) +
                        "` supplied to `" +
                        r +
                        "`, expected `" +
                        e +
                        "`."
                    );
                  return null;
                }
                return p(n);
              }
              function f(e) {
                function n(n, t, r, o, i) {
                  if ("function" != typeof e)
                    return new u(
                      "Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf."
                    );
                  var a = n[t];
                  if (!Array.isArray(a)) {
                    return new u(
                      "Invalid " + o + " `" + i + "` of type `" + _(a) + "` supplied to `" + r + "`, expected an array."
                    );
                  }
                  for (var c = 0; c < a.length; c++) {
                    var l = e(a, c, r, o, i + "[" + c + "]", s);
                    if (l instanceof Error) return l;
                  }
                  return null;
                }
                return p(n);
              }
              function m(e) {
                function n(n, t, r, o, i) {
                  if (!(n[t] instanceof e)) {
                    var a = e.name || j;
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        k(n[t]) +
                        "` supplied to `" +
                        r +
                        "`, expected instance of `" +
                        a +
                        "`."
                    );
                  }
                  return null;
                }
                return p(n);
              }
              function h(e) {
                function n(n, t, r, o, i) {
                  for (var a = n[t], s = 0; s < e.length; s++) if (l(a, e[s])) return null;
                  return new u(
                    "Invalid " +
                      o +
                      " `" +
                      i +
                      "` of value `" +
                      a +
                      "` supplied to `" +
                      r +
                      "`, expected one of " +
                      JSON.stringify(e) +
                      "."
                  );
                }
                return Array.isArray(e)
                  ? p(n)
                  : (i(!1, "Invalid argument supplied to oneOf, expected an instance of array."), r.thatReturnsNull);
              }
              function g(e) {
                function n(n, t, r, o, i) {
                  if ("function" != typeof e)
                    return new u(
                      "Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf."
                    );
                  var a = n[t],
                    c = _(a);
                  if ("object" !== c)
                    return new u(
                      "Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected an object."
                    );
                  for (var l in a)
                    if (a.hasOwnProperty(l)) {
                      var p = e(a, l, r, o, i + "." + l, s);
                      if (p instanceof Error) return p;
                    }
                  return null;
                }
                return p(n);
              }
              function v(e) {
                function n(n, t, r, o, i) {
                  for (var a = 0; a < e.length; a++) {
                    if (null == (0, e[a])(n, t, r, o, i, s)) return null;
                  }
                  return new u("Invalid " + o + " `" + i + "` supplied to `" + r + "`.");
                }
                if (!Array.isArray(e))
                  return (
                    i(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), r.thatReturnsNull
                  );
                for (var t = 0; t < e.length; t++) {
                  var o = e[t];
                  if ("function" != typeof o)
                    return (
                      i(
                        !1,
                        "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                        O(o),
                        t
                      ),
                      r.thatReturnsNull
                    );
                }
                return p(n);
              }
              function y(e) {
                function n(n, t, r, o, i) {
                  var a = n[t],
                    c = _(a);
                  if ("object" !== c)
                    return new u(
                      "Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected `object`."
                    );
                  for (var l in e) {
                    var p = e[l];
                    if (p) {
                      var d = p(a, l, r, o, i + "." + l, s);
                      if (d) return d;
                    }
                  }
                  return null;
                }
                return p(n);
              }
              function b(e) {
                function n(n, t, r, o, i) {
                  var c = n[t],
                    l = _(c);
                  if ("object" !== l)
                    return new u(
                      "Invalid " + o + " `" + i + "` of type `" + l + "` supplied to `" + r + "`, expected `object`."
                    );
                  var p = a({}, n[t], e);
                  for (var d in p) {
                    var f = e[d];
                    if (!f)
                      return new u(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` key `" +
                          d +
                          "` supplied to `" +
                          r +
                          "`.\nBad object: " +
                          JSON.stringify(n[t], null, "  ") +
                          "\nValid keys: " +
                          JSON.stringify(Object.keys(e), null, "  ")
                      );
                    var m = f(c, d, r, o, i + "." + d, s);
                    if (m) return m;
                  }
                  return null;
                }
                return p(n);
              }
              function w(n) {
                switch (typeof n) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !n;
                  case "object":
                    if (Array.isArray(n)) return n.every(w);
                    if (null === n || e(n)) return !0;
                    var r = t(n);
                    if (!r) return !1;
                    var o,
                      i = r.call(n);
                    if (r !== n.entries) {
                      for (; !(o = i.next()).done; ) if (!w(o.value)) return !1;
                    } else
                      for (; !(o = i.next()).done; ) {
                        var a = o.value;
                        if (a && !w(a[1])) return !1;
                      }
                    return !0;
                  default:
                    return !1;
                }
              }
              function x(e, n) {
                return (
                  "symbol" === e ||
                  "Symbol" === n["@@toStringTag"] ||
                  ("function" == typeof Symbol && n instanceof Symbol)
                );
              }
              function _(e) {
                var n = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : x(n, e) ? "symbol" : n;
              }
              function E(e) {
                if (void 0 === e || null === e) return "" + e;
                var n = _(e);
                if ("object" === n) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp";
                }
                return n;
              }
              function O(e) {
                var n = E(e);
                switch (n) {
                  case "array":
                  case "object":
                    return "an " + n;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + n;
                  default:
                    return n;
                }
              }
              function k(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : j;
              }
              var S = "function" == typeof Symbol && Symbol.iterator,
                C = "@@iterator",
                j = "<<anonymous>>",
                I = {
                  array: d("array"),
                  bool: d("boolean"),
                  func: d("function"),
                  number: d("number"),
                  object: d("object"),
                  string: d("string"),
                  symbol: d("symbol"),
                  any: (function () {
                    return p(r.thatReturnsNull);
                  })(),
                  arrayOf: f,
                  element: (function () {
                    function n(n, t, r, o, i) {
                      var a = n[t];
                      if (!e(a)) {
                        return new u(
                          "Invalid " +
                            o +
                            " `" +
                            i +
                            "` of type `" +
                            _(a) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        );
                      }
                      return null;
                    }
                    return p(n);
                  })(),
                  instanceOf: m,
                  node: (function () {
                    function e(e, n, t, r, o) {
                      return w(e[n])
                        ? null
                        : new u("Invalid " + r + " `" + o + "` supplied to `" + t + "`, expected a ReactNode.");
                    }
                    return p(e);
                  })(),
                  objectOf: g,
                  oneOf: h,
                  oneOfType: v,
                  shape: y,
                  exact: b,
                };
              return (u.prototype = Error.prototype), (I.checkPropTypes = c), (I.PropTypes = I), I;
            };
          },
          function (e, n, t) {
            "use strict";
            function r(e) {
              if (null === e || void 0 === e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(e);
            } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
            var o = Object.getOwnPropertySymbols,
              i = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable;
            e.exports = (function () {
              try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(n)
                    .map(function (e) {
                      return n[e];
                    })
                    .join("")
                )
                  return !1;
                var r = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e;
                  }),
                  "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                );
              } catch (e) {
                return !1;
              }
            })()
              ? Object.assign
              : function (e, n) {
                  for (var t, s, c = r(e), l = 1; l < arguments.length; l++) {
                    t = Object(arguments[l]);
                    for (var u in t) i.call(t, u) && (c[u] = t[u]);
                    if (o) {
                      s = o(t);
                      for (var p = 0; p < s.length; p++) a.call(t, s[p]) && (c[s[p]] = t[s[p]]);
                    }
                  }
                  return c;
                };
          },
          function (e, n, t) {
            "use strict";
            function r(e, n, t, r, c) {
              for (var l in e)
                if (e.hasOwnProperty(l)) {
                  var u;
                  try {
                    o(
                      "function" == typeof e[l],
                      "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",
                      r || "React class",
                      t,
                      l,
                      typeof e[l]
                    ),
                      (u = e[l](n, l, r, t, null, a));
                  } catch (e) {
                    u = e;
                  }
                  if (
                    (i(
                      !u || u instanceof Error,
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      r || "React class",
                      t,
                      l,
                      typeof u
                    ),
                    u instanceof Error && !(u.message in s))
                  ) {
                    s[u.message] = !0;
                    var p = c ? c() : "";
                    i(!1, "Failed %s type: %s%s", t, u.message, null != p ? p : "");
                  }
                }
            }
            var o = t(2),
              i = t(3),
              a = t(4),
              s = {};
            e.exports = r;
          },
          function (e, n, t) {
            "use strict";
            function r(e, n) {
              function t(e) {
                l && l.addListener(e);
              }
              function r(e) {
                l && l.removeListener(e);
              }
              function o(e) {
                (c.matches = e.matches), (c.media = e.media);
              }
              function s() {
                l && l.removeListener(o);
              }
              var c = this;
              if (a) {
                var l = a.call(window, e);
                (this.matches = l.matches), (this.media = l.media), l.addListener(o);
              } else (this.matches = i(e, n)), (this.media = e);
              (this.addListener = t), (this.removeListener = r), (this.dispose = s);
            }
            function o(e, n) {
              return new r(e, n);
            }
            var i = t(13).match,
              a = "undefined" != typeof window ? window.matchMedia : null;
            e.exports = o;
          },
          function (e, n, t) {
            "use strict";
            function r(e, n) {
              return o(e).some(function (e) {
                var t = e.inverse,
                  r = "all" === e.type || n.type === e.type;
                if ((r && t) || (!r && !t)) return !1;
                var o = e.expressions.every(function (e) {
                  var t = e.feature,
                    r = e.modifier,
                    o = e.value,
                    c = n[t];
                  if (!c) return !1;
                  switch (t) {
                    case "orientation":
                    case "scan":
                      return c.toLowerCase() === o.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      (o = s(o)), (c = s(c));
                      break;
                    case "resolution":
                      (o = a(o)), (c = a(c));
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case "device-pixel-ratio":
                      (o = i(o)), (c = i(c));
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      (o = parseInt(o, 10) || 1), (c = parseInt(c, 10) || 0);
                  }
                  switch (r) {
                    case "min":
                      return c >= o;
                    case "max":
                      return c <= o;
                    default:
                      return c === o;
                  }
                });
                return (o && !t) || (!o && t);
              });
            }
            function o(e) {
              return e.split(",").map(function (e) {
                e = e.trim();
                var n = e.match(c),
                  t = n[1],
                  r = n[2],
                  o = n[3] || "",
                  i = {};
                return (
                  (i.inverse = !!t && "not" === t.toLowerCase()),
                  (i.type = r ? r.toLowerCase() : "all"),
                  (o = o.match(/\([^\)]+\)/g) || []),
                  (i.expressions = o.map(function (e) {
                    var n = e.match(l),
                      t = n[1].toLowerCase().match(u);
                    return { modifier: t[1], feature: t[2], value: n[2] };
                  })),
                  i
                );
              });
            }
            function i(e) {
              var n,
                t = Number(e);
              return t || ((n = e.match(/^(\d+)\s*\/\s*(\d+)$/)), (t = n[1] / n[2])), t;
            }
            function a(e) {
              var n = parseFloat(e);
              switch (String(e).match(d)[1]) {
                case "dpcm":
                  return n / 2.54;
                case "dppx":
                  return 96 * n;
                default:
                  return n;
              }
            }
            function s(e) {
              var n = parseFloat(e);
              switch (String(e).match(p)[1]) {
                case "em":
                case "rem":
                  return 16 * n;
                case "cm":
                  return (96 * n) / 2.54;
                case "mm":
                  return (96 * n) / 2.54 / 10;
                case "in":
                  return 96 * n;
                case "pt":
                  return 72 * n;
                case "pc":
                  return (72 * n) / 12;
                default:
                  return n;
              }
            }
            (n.match = r), (n.parse = o);
            var c = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
              l = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
              u = /^(?:(min|max)-)?(.+)/,
              p = /(em|rem|px|cm|mm|in|pt|pc)?$/,
              d = /(dpi|dpcm|dppx)?$/;
          },
          function (e, n, t) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function o(e, n) {
              var t = (0, s.default)(e);
              return "number" == typeof n && (n += "px"), !0 === n ? e : !1 === n ? u(e) : "(" + t + ": " + n + ")";
            }
            function i(e) {
              return e.join(" and ");
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.default = function (e) {
                var n = [];
                return (
                  Object.keys(l.default.all).forEach(function (t) {
                    var r = e[t];
                    null != r && n.push(o(t, r));
                  }),
                  i(n)
                );
              });
            var a = t(5),
              s = r(a),
              c = t(6),
              l = r(c),
              u = function (e) {
                return "not " + e;
              };
            e.exports = n.default;
          },
        ]);
      });
    },
    64: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(138),
        c = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        l = t(1),
        u = t(0),
        p = t(65),
        d = t(92),
        f = (function (e) {
          function n(e) {
            r(this, n);
            var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.state = { hasError: !1, errorId: null }), t;
          }
          return (
            i(n, e),
            a(n, [
              {
                key: "componentDidCatch",
                value: function (e, n) {
                  var t = this;
                  p.withScope(function (r) {
                    r.setTag("project", "scratch-www"),
                      t.props.componentName && r.setTag("component", t.props.componentName),
                      Object.keys(n).forEach(function (e) {
                        r.setExtra(e, n[e]);
                      }),
                      p.captureException(e);
                  }),
                    this.setState({ hasError: !0, errorId: p.lastEventId() }),
                    c.default.error("Unhandled Error: " + e + ", info: " + n);
                },
              },
              {
                key: "handleBack",
                value: function () {
                  window.history.back();
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.hasError
                    ? u.createElement(d, {
                        eventId: this.state.errorId,
                        onBack: this.handleBack,
                      })
                    : this.props.children;
                },
              },
            ]),
            n
          );
        })(u.Component);
      (f.propTypes = { children: l.node, componentName: l.string }), (e.exports = f);
    },
    65: function (e, n, t) {
      "use strict";
      (function (e, r) {
        function o(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        }
        function i(e, n) {
          return (n = { exports: {} }), e(n, n.exports), n.exports;
        }
        function a(e, n) {
          var t = (65535 & e) + (65535 & n);
          return (((e >> 16) + (n >> 16) + (t >> 16)) << 16) | (65535 & t);
        }
        function s(e, n) {
          return (e << n) | (e >>> (32 - n));
        }
        function c(e, n, t, r, o, i) {
          return a(s(a(a(n, e), a(r, i)), o), t);
        }
        function l(e, n, t, r, o, i, a) {
          return c((n & t) | (~n & r), e, n, o, i, a);
        }
        function u(e, n, t, r, o, i, a) {
          return c((n & r) | (t & ~r), e, n, o, i, a);
        }
        function p(e, n, t, r, o, i, a) {
          return c(n ^ t ^ r, e, n, o, i, a);
        }
        function d(e, n, t, r, o, i, a) {
          return c(t ^ (n | ~r), e, n, o, i, a);
        }
        function f(e, n) {
          (e[n >> 5] |= 128 << n % 32), (e[14 + (((n + 64) >>> 9) << 4)] = n);
          var t,
            r,
            o,
            i,
            s,
            c = 1732584193,
            f = -271733879,
            m = -1732584194,
            h = 271733878;
          for (t = 0; t < e.length; t += 16)
            (r = c),
              (o = f),
              (i = m),
              (s = h),
              (c = l(c, f, m, h, e[t], 7, -680876936)),
              (h = l(h, c, f, m, e[t + 1], 12, -389564586)),
              (m = l(m, h, c, f, e[t + 2], 17, 606105819)),
              (f = l(f, m, h, c, e[t + 3], 22, -1044525330)),
              (c = l(c, f, m, h, e[t + 4], 7, -176418897)),
              (h = l(h, c, f, m, e[t + 5], 12, 1200080426)),
              (m = l(m, h, c, f, e[t + 6], 17, -1473231341)),
              (f = l(f, m, h, c, e[t + 7], 22, -45705983)),
              (c = l(c, f, m, h, e[t + 8], 7, 1770035416)),
              (h = l(h, c, f, m, e[t + 9], 12, -1958414417)),
              (m = l(m, h, c, f, e[t + 10], 17, -42063)),
              (f = l(f, m, h, c, e[t + 11], 22, -1990404162)),
              (c = l(c, f, m, h, e[t + 12], 7, 1804603682)),
              (h = l(h, c, f, m, e[t + 13], 12, -40341101)),
              (m = l(m, h, c, f, e[t + 14], 17, -1502002290)),
              (f = l(f, m, h, c, e[t + 15], 22, 1236535329)),
              (c = u(c, f, m, h, e[t + 1], 5, -165796510)),
              (h = u(h, c, f, m, e[t + 6], 9, -1069501632)),
              (m = u(m, h, c, f, e[t + 11], 14, 643717713)),
              (f = u(f, m, h, c, e[t], 20, -373897302)),
              (c = u(c, f, m, h, e[t + 5], 5, -701558691)),
              (h = u(h, c, f, m, e[t + 10], 9, 38016083)),
              (m = u(m, h, c, f, e[t + 15], 14, -660478335)),
              (f = u(f, m, h, c, e[t + 4], 20, -405537848)),
              (c = u(c, f, m, h, e[t + 9], 5, 568446438)),
              (h = u(h, c, f, m, e[t + 14], 9, -1019803690)),
              (m = u(m, h, c, f, e[t + 3], 14, -187363961)),
              (f = u(f, m, h, c, e[t + 8], 20, 1163531501)),
              (c = u(c, f, m, h, e[t + 13], 5, -1444681467)),
              (h = u(h, c, f, m, e[t + 2], 9, -51403784)),
              (m = u(m, h, c, f, e[t + 7], 14, 1735328473)),
              (f = u(f, m, h, c, e[t + 12], 20, -1926607734)),
              (c = p(c, f, m, h, e[t + 5], 4, -378558)),
              (h = p(h, c, f, m, e[t + 8], 11, -2022574463)),
              (m = p(m, h, c, f, e[t + 11], 16, 1839030562)),
              (f = p(f, m, h, c, e[t + 14], 23, -35309556)),
              (c = p(c, f, m, h, e[t + 1], 4, -1530992060)),
              (h = p(h, c, f, m, e[t + 4], 11, 1272893353)),
              (m = p(m, h, c, f, e[t + 7], 16, -155497632)),
              (f = p(f, m, h, c, e[t + 10], 23, -1094730640)),
              (c = p(c, f, m, h, e[t + 13], 4, 681279174)),
              (h = p(h, c, f, m, e[t], 11, -358537222)),
              (m = p(m, h, c, f, e[t + 3], 16, -722521979)),
              (f = p(f, m, h, c, e[t + 6], 23, 76029189)),
              (c = p(c, f, m, h, e[t + 9], 4, -640364487)),
              (h = p(h, c, f, m, e[t + 12], 11, -421815835)),
              (m = p(m, h, c, f, e[t + 15], 16, 530742520)),
              (f = p(f, m, h, c, e[t + 2], 23, -995338651)),
              (c = d(c, f, m, h, e[t], 6, -198630844)),
              (h = d(h, c, f, m, e[t + 7], 10, 1126891415)),
              (m = d(m, h, c, f, e[t + 14], 15, -1416354905)),
              (f = d(f, m, h, c, e[t + 5], 21, -57434055)),
              (c = d(c, f, m, h, e[t + 12], 6, 1700485571)),
              (h = d(h, c, f, m, e[t + 3], 10, -1894986606)),
              (m = d(m, h, c, f, e[t + 10], 15, -1051523)),
              (f = d(f, m, h, c, e[t + 1], 21, -2054922799)),
              (c = d(c, f, m, h, e[t + 8], 6, 1873313359)),
              (h = d(h, c, f, m, e[t + 15], 10, -30611744)),
              (m = d(m, h, c, f, e[t + 6], 15, -1560198380)),
              (f = d(f, m, h, c, e[t + 13], 21, 1309151649)),
              (c = d(c, f, m, h, e[t + 4], 6, -145523070)),
              (h = d(h, c, f, m, e[t + 11], 10, -1120210379)),
              (m = d(m, h, c, f, e[t + 2], 15, 718787259)),
              (f = d(f, m, h, c, e[t + 9], 21, -343485551)),
              (c = a(c, r)),
              (f = a(f, o)),
              (m = a(m, i)),
              (h = a(h, s));
          return [c, f, m, h];
        }
        function m(e) {
          var n,
            t = "",
            r = 32 * e.length;
          for (n = 0; n < r; n += 8) t += String.fromCharCode((e[n >> 5] >>> n % 32) & 255);
          return t;
        }
        function h(e) {
          var n,
            t = [];
          for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
          var r = 8 * e.length;
          for (n = 0; n < r; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
          return t;
        }
        function g(e) {
          return m(f(h(e), 8 * e.length));
        }
        function v(e, n) {
          var t,
            r,
            o = h(e),
            i = [],
            a = [];
          for (i[15] = a[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), t = 0; t < 16; t += 1)
            (i[t] = 909522486 ^ o[t]), (a[t] = 1549556828 ^ o[t]);
          return (r = f(i.concat(h(n)), 512 + 8 * n.length)), m(f(a.concat(r), 640));
        }
        function y(e) {
          var n,
            t,
            r = "0123456789abcdef",
            o = "";
          for (t = 0; t < e.length; t += 1) (n = e.charCodeAt(t)), (o += r.charAt((n >>> 4) & 15) + r.charAt(15 & n));
          return o;
        }
        function b(e) {
          return unescape(encodeURIComponent(e));
        }
        function w(e) {
          return g(b(e));
        }
        function x(e) {
          return y(w(e));
        }
        function _(e, n) {
          return v(b(e), b(n));
        }
        function E(e, n) {
          return y(_(e, n));
        }
        function O(e, n, t) {
          return n ? (t ? _(n, e) : E(n, e)) : t ? w(e) : x(e);
        }
        function k(e, n) {
          return Object.prototype.hasOwnProperty.call(e, n);
        }
        function S() {
          return "undefined" == typeof document || null == document.location ? "" : document.location.href;
        }
        function C() {
          return "undefined" == typeof document || null == document.location
            ? ""
            : document.location.origin
            ? document.location.origin
            : document.location.protocol +
              "//" +
              document.location.hostname +
              (document.location.port ? ":" + document.location.port : "");
        }
        function j(e) {
          var n = T(e.stack),
            t = { stacktrace: { frames: n }, type: e.name, value: e.message };
          return void 0 === t.type && "" === t.value && (t.value = "Unrecoverable error caught"), t;
        }
        function I(e, n) {
          var t = Object.keys(e).sort(),
            r = {
              extra: { __serialized__: Ee(e) },
              fingerprint: [O(t.join(""))],
              message: "Non-Error exception captured with keys: " + Oe(t),
            };
          if (n) {
            var o = He(n),
              i = T(o.stack);
            r.stacktrace = { frames: i };
          }
          return r;
        }
        function P(e) {
          return { exception: { values: [j(e)] } };
        }
        function T(e) {
          if (!e || !e.length) return [];
          var n = e,
            t = n[0].func || "",
            r = n[n.length - 1].func || "";
          return (
            (Ce(t, "captureMessage") || Ce(t, "captureException")) && (n = n.slice(1)),
            Ce(r, "sentryWrapped") && (n = n.slice(0, -1)),
            n
              .map(function (e) {
                return {
                  colno: e.column,
                  filename: e.url || n[0].url,
                  function: e.func || "?",
                  in_app: !0,
                  lineno: e.line,
                };
              })
              .slice(0, Be)
              .reverse()
          );
        }
        function N() {
          return Ze > 0;
        }
        function M() {
          (Ze += 1),
            setTimeout(function () {
              Ze -= 1;
            });
        }
        function R(e, n, t) {
          if ((void 0 === n && (n = {}), !ne(e))) return e;
          try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
          } catch (n) {
            return e;
          }
          var r = function () {
            var r = this;
            t && ne(t) && t.apply(this, arguments);
            var o = Array.prototype.slice.call(arguments);
            try {
              var i = o.map(function (e) {
                return R(e, n);
              });
              return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i);
            } catch (e) {
              throw (
                (M(),
                z.withScope(function (t) {
                  return W.__awaiter(r, void 0, void 0, function () {
                    var r = this;
                    return W.__generator(this, function (i) {
                      return (
                        t.addEventProcessor(function (e) {
                          return W.__awaiter(r, void 0, void 0, function () {
                            var t;
                            return W.__generator(this, function (r) {
                              return (
                                (t = W.__assign({}, e)),
                                n.mechanism &&
                                  ((t.exception = t.exception || {}), (t.exception.mechanism = n.mechanism)),
                                (t.extra = W.__assign({}, t.extra, {
                                  arguments: _e(o, 2),
                                })),
                                [2, t]
                              );
                            });
                          });
                        }),
                        z.captureException(e),
                        [2]
                      );
                    });
                  });
                }),
                e)
              );
            }
          };
          try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
          } catch (e) {}
          return (
            (r.prototype = e.prototype), (e.__sentry_wrapped__ = r), (r.__sentry__ = !0), (r.__sentry_original__ = e), r
          );
        }
        function F(e) {
          return function (n) {
            if (((Me = void 0), Re !== n)) {
              Re = n;
              var t;
              try {
                t = ae(n.target);
              } catch (e) {
                t = "<unknown>";
              }
              z.getCurrentHub().addBreadcrumb({ category: "ui." + e, message: t }, { event: n, name: e });
            }
          };
        }
        function D() {
          return function (e) {
            var n;
            try {
              n = e.target;
            } catch (e) {
              return;
            }
            var t = n && n.tagName;
            t &&
              ("INPUT" === t || "TEXTAREA" === t || n.isContentEditable) &&
              (Me || F("input")(e),
              clearTimeout(Me),
              (Me = setTimeout(function () {
                Me = void 0;
              }, Xe)));
          };
        }
        function U(e) {
          try {
            var n = we(e);
            rn.addBreadcrumb(
              {
                category: "sentry",
                event_id: n.event_id,
                level: n.level || J.fromString("error"),
                message: ce(n),
              },
              { event: n }
            );
          } catch (e) {
            ue.error("Error while adding sentry type breadcrumb");
          }
        }
        function A(e) {
          void 0 === e && (e = {}),
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = mn),
            z.initAndBind(Qe, e);
        }
        function L(e) {
          void 0 === e && (e = {}),
            e.eventId || (e.eventId = z.getCurrentHub().lastEventId()),
            z.getCurrentHub().getClient().showReportDialog(e);
        }
        function H() {
          return z.getCurrentHub().lastEventId();
        }
        function B() {}
        function q(e) {
          e();
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var W = t(6),
          z = t(75),
          G = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
          $ = i(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 });
            !(function (e) {
              (e.Fatal = "fatal"),
                (e.Error = "error"),
                (e.Warning = "warning"),
                (e.Log = "log"),
                (e.Info = "info"),
                (e.Debug = "debug"),
                (e.Critical = "critical");
            })(n.Severity || (n.Severity = {})),
              (function (e) {
                function n(n) {
                  switch (n) {
                    case "debug":
                      return e.Debug;
                    case "info":
                      return e.Info;
                    case "warn":
                    case "warning":
                      return e.Warning;
                    case "error":
                      return e.Error;
                    case "fatal":
                      return e.Fatal;
                    case "critical":
                      return e.Critical;
                    case "log":
                    default:
                      return e.Log;
                  }
                }
                e.fromString = n;
              })(n.Severity || (n.Severity = {}));
            !(function (e) {
              (e.Unknown = "unknown"),
                (e.Skipped = "skipped"),
                (e.Success = "success"),
                (e.RateLimit = "rate_limit"),
                (e.Invalid = "invalid"),
                (e.Failed = "failed");
            })(n.Status || (n.Status = {})),
              (function (e) {
                function n(n) {
                  return n >= 200 && n < 300
                    ? e.Success
                    : 429 === n
                    ? e.RateLimit
                    : n >= 400 && n < 500
                    ? e.Invalid
                    : n >= 500
                    ? e.Failed
                    : e.Unknown;
                }
                e.fromHttpCode = n;
              })(n.Status || (n.Status = {}));
          });
        o($);
        var J = $.Severity,
          V = $.Status,
          K = i(function (e, n) {
            function t(e) {
              switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                  return !0;
                default:
                  return e instanceof Error;
              }
            }
            function r(e) {
              return "[object ErrorEvent]" === Object.prototype.toString.call(e);
            }
            function o(e) {
              return "[object DOMError]" === Object.prototype.toString.call(e);
            }
            function i(e) {
              return "[object DOMException]" === Object.prototype.toString.call(e);
            }
            function a(e) {
              return void 0 === e;
            }
            function s(e) {
              return "function" == typeof e;
            }
            function c(e) {
              return "[object String]" === Object.prototype.toString.call(e);
            }
            function l(e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }
            function u(e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            }
            function p(e) {
              return "[object RegExp]" === Object.prototype.toString.call(e);
            }
            function d(e) {
              return e !== e;
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.isError = t),
              (n.isErrorEvent = r),
              (n.isDOMError = o),
              (n.isDOMException = i),
              (n.isUndefined = a),
              (n.isFunction = s),
              (n.isString = c),
              (n.isArray = l),
              (n.isPlainObject = u),
              (n.isRegExp = p),
              (n.isNaN = d);
          });
        o(K);
        var Y = K.isError,
          Q = K.isErrorEvent,
          X = K.isDOMError,
          Z = K.isDOMException,
          ee = K.isUndefined,
          ne = K.isFunction,
          te = K.isString,
          re = (K.isArray, K.isPlainObject),
          oe =
            (K.isRegExp,
            K.isNaN,
            i(function (e, n) {
              function t(e, n) {
                return e.require(n);
              }
              function o() {
                return "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0);
              }
              function i() {
                return o() ? G : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
              }
              function a() {
                var e = i(),
                  n = e.crypto || e.msCrypto;
                if (void 0 !== n && n.getRandomValues) {
                  var t = new Uint16Array(8);
                  n.getRandomValues(t), (t[3] = (4095 & t[3]) | 16384), (t[4] = (16383 & t[4]) | 32768);
                  var r = function (e) {
                    for (var n = e.toString(16); n.length < 4; ) n = "0" + n;
                    return n;
                  };
                  return r(t[0]) + r(t[1]) + r(t[2]) + r(t[3]) + r(t[4]) + r(t[5]) + r(t[6]) + r(t[7]);
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                  var n = (16 * Math.random()) | 0;
                  return ("x" === e ? n : (3 & n) | 8).toString(16);
                });
              }
              function s(e) {
                for (
                  var n, t = e, r = [], o = 0, i = 0, a = " > ".length;
                  t && o++ < 5 && !("html" === (n = c(t)) || (o > 1 && i + r.length * a + n.length >= 80));

                )
                  r.push(n), (i += n.length), (t = t.parentNode);
                return r.reverse().join(" > ");
              }
              function c(e) {
                var n,
                  t,
                  r,
                  o,
                  i,
                  a = [];
                if (!e || !e.tagName) return "";
                if ((a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (n = e.className) && K.isString(n)))
                  for (t = n.split(/\s+/), i = 0; i < t.length; i++) a.push("." + t[i]);
                var s = ["type", "name", "title", "alt"];
                for (i = 0; i < s.length; i++) (r = s[i]), (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                return a.join("");
              }
              function l(e) {
                if (!e) return {};
                var n = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!n) return {};
                var t = n[6] || "",
                  r = n[8] || "";
                return {
                  host: n[4],
                  path: n[5],
                  protocol: n[2],
                  relative: n[5] + t + r,
                };
              }
              function u(e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                  var n = e.exception.values[0];
                  return n.type && n.value ? n.type + ": " + n.value : n.type || n.value || e.event_id || "<unknown>";
                }
                return e.event_id || "<unknown>";
              }
              function p(e) {
                var n = i(),
                  t = ["debug", "info", "warn", "error", "log"];
                if (!("console" in n)) return e();
                var r = n.console,
                  o = {};
                t.forEach(function (e) {
                  e in n.console &&
                    r[e].__sentry__ &&
                    ((o[e] = r[e].__sentry_wrapped__), (r[e] = r[e].__sentry_original__));
                });
                var a = e();
                return (
                  Object.keys(o).forEach(function (e) {
                    r[e] = o[e];
                  }),
                  a
                );
              }
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.dynamicRequire = t),
                (n.isNodeEnv = o),
                (n.getGlobalObject = i),
                (n.uuid4 = a),
                (n.htmlTreeAsString = s),
                (n.htmlElementAsString = c),
                (n.parseUrl = l),
                (n.getEventDescription = u),
                (n.consoleSandbox = p);
            }));
        o(oe);
        var ie = (oe.dynamicRequire, oe.isNodeEnv, oe.getGlobalObject),
          ae = (oe.uuid4, oe.htmlTreeAsString),
          se = (oe.htmlElementAsString, oe.parseUrl),
          ce = oe.getEventDescription,
          le =
            (oe.consoleSandbox,
            i(function (e, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              var t = oe.getGlobalObject(),
                r = (function () {
                  function e() {
                    this.enabled = !1;
                  }
                  return (
                    (e.prototype.disable = function () {
                      this.enabled = !1;
                    }),
                    (e.prototype.enable = function () {
                      this.enabled = !0;
                    }),
                    (e.prototype.log = function () {
                      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                      this.enabled &&
                        oe.consoleSandbox(function () {
                          t.console.log("Sentry Logger [Log]: " + e.join(" "));
                        });
                    }),
                    (e.prototype.warn = function () {
                      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                      this.enabled &&
                        oe.consoleSandbox(function () {
                          t.console.warn("Sentry Logger [Warn]: " + e.join(" "));
                        });
                    }),
                    (e.prototype.error = function () {
                      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                      this.enabled &&
                        oe.consoleSandbox(function () {
                          t.console.error("Sentry Logger [Error]: " + e.join(" "));
                        });
                    }),
                    e
                  );
                })(),
                o = new r();
              n.logger = o;
            }));
        o(le);
        var ue = le.logger,
          pe = i(function (e, n) {
            function t() {
              try {
                return new ErrorEvent(""), !0;
              } catch (e) {
                return !1;
              }
            }
            function r() {
              try {
                return new DOMError(""), !0;
              } catch (e) {
                return !1;
              }
            }
            function o() {
              try {
                return new DOMException(""), !0;
              } catch (e) {
                return !1;
              }
            }
            function i() {
              if (!("fetch" in oe.getGlobalObject())) return !1;
              try {
                return new Headers(), new Request(""), new Response(), !0;
              } catch (e) {
                return !1;
              }
            }
            function a() {
              return !!i() && -1 !== oe.getGlobalObject().fetch.toString().indexOf("native");
            }
            function s() {
              var e = oe.getGlobalObject();
              return "navigator" in e && "sendBeacon" in e.navigator;
            }
            function c() {
              return "ReportingObserver" in oe.getGlobalObject();
            }
            function l() {
              if (!i()) return !1;
              try {
                return new Request("pickleRick", { referrerPolicy: "origin" }), !0;
              } catch (e) {
                return !1;
              }
            }
            function u() {
              var e = oe.getGlobalObject(),
                n = e.chrome,
                t = n && n.app && n.app.runtime,
                r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
              return !t && r;
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.supportsErrorEvent = t),
              (n.supportsDOMError = r),
              (n.supportsDOMException = o),
              (n.supportsFetch = i),
              (n.supportsNativeFetch = a),
              (n.supportsBeacon = s),
              (n.supportsReportingObserver = c),
              (n.supportsReferrerPolicy = l),
              (n.supportsHistory = u);
          });
        o(pe);
        var de = (pe.supportsErrorEvent, pe.supportsDOMError, pe.supportsDOMException, pe.supportsFetch),
          fe = pe.supportsNativeFetch,
          me = pe.supportsBeacon,
          he = pe.supportsReportingObserver,
          ge = pe.supportsReferrerPolicy,
          ve = pe.supportsHistory,
          ye = i(function (e, n) {
            function t(e) {
              return JSON.stringify(e);
            }
            function r(e) {
              return JSON.parse(e);
            }
            function o(e) {
              return r(t(e));
            }
            function i(e, n, t) {
              if (n in e && !e[n].__sentry__) {
                var r = e[n],
                  o = t(r);
                (o.__sentry__ = !0), (o.__sentry_original__ = r), (o.__sentry_wrapped__ = o), (e[n] = o);
              }
            }
            function a(e) {
              return Object.keys(e)
                .map(function (n) {
                  return encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
                })
                .join("&");
            }
            function s(e) {
              return ~-encodeURI(e).split(/%..|./).length;
            }
            function c(e) {
              return s(JSON.stringify(e));
            }
            function l(e) {
              if ("string" == typeof e) return e.length <= 40 ? e : e.substr(0, 39) + "…";
              if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
              if (K.isNaN(e)) return "[NaN]";
              if (K.isUndefined(e)) return "[undefined]";
              var n = Object.prototype.toString.call(e);
              if ("[object Object]" === n) return "[Object]";
              if ("[object Array]" === n) return "[Array]";
              if ("[object Function]" === n) {
                var t = e.name;
                return t ? "[Function: " + t + "]" : "[Function]";
              }
              return e;
            }
            function u(e, n) {
              if (0 === n) return l(e);
              if (K.isPlainObject(e)) {
                var t = {},
                  r = e;
                return (
                  Object.keys(r).forEach(function (e) {
                    t[e] = u(r[e], n - 1);
                  }),
                  t
                );
              }
              if (Array.isArray(e)) {
                return e.map(function (e) {
                  return u(e, n - 1);
                });
              }
              return l(e);
            }
            function p(e, n, r) {
              void 0 === n && (n = y), void 0 === r && (r = b);
              var o = u(e, n);
              return c(t(o)) > r ? p(e, n - 1) : o;
            }
            function d(e, n) {
              if ((void 0 === n && (n = w), !e.length)) return "[object has no keys]";
              if (e[0].length >= n) return e[0];
              for (var t = e.length; t > 0; t--) {
                var r = e.slice(0, t).join(", ");
                if (!(r.length > n)) return t === e.length ? r : r + "…";
              }
              return "";
            }
            function f(e) {
              for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
              if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
              for (var r = Object(e), o = 0; o < n.length; o++) {
                var i = n[o];
                if (null !== i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
              }
              return r;
            }
            function m(e) {
              var n = { message: e.message, name: e.name, stack: e.stack };
              for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
              return n;
            }
            function h(e, n) {
              return "domain" === n && "object" == typeof e && e._events
                ? "[Domain]"
                : "domainEmitter" === n
                ? "[DomainEmitter]"
                : void 0 !== G && e === G
                ? "[Global]"
                : "undefined" != typeof window && e === window
                ? "[Window]"
                : "undefined" != typeof document && e === document
                ? "[Document]"
                : e instanceof Date
                ? "[Date] " + e
                : e instanceof Error
                ? m(e)
                : K.isNaN(e)
                ? "[NaN]"
                : K.isUndefined(e)
                ? "[undefined]"
                : "function" == typeof e
                ? "[Function] " + (e.name || "<unknown-function-name>")
                : e;
            }
            function g() {
              function e(e, r) {
                return n[0] === r ? "[Circular ~]" : "[Circular ~." + t.slice(0, n.indexOf(r)).join(".") + "]";
              }
              var n = [],
                t = [];
              return function (r, o) {
                if (n.length > 0) {
                  var i = n.indexOf(this);
                  -1 === i ? (n.push(this), t.push(r)) : (n.splice(i + 1), t.splice(i, 1 / 0, r)),
                    -1 !== n.indexOf(o) && (o = e.call(this, r, o));
                } else n.push(o);
                return h(o, r);
              };
            }
            function v(e) {
              try {
                return JSON.parse(JSON.stringify(e, g()));
              } catch (e) {
                return "**non-serializable**";
              }
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.serialize = t),
              (n.deserialize = r),
              (n.clone = o),
              (n.fill = i),
              (n.urlEncode = a);
            var y = 3,
              b = 102400,
              w = 40;
            (n.serializeObject = u),
              (n.limitObjectDepthToSize = p),
              (n.serializeKeysToEventMessage = d),
              (n.assign = f),
              (n.safeNormalize = v);
          });
        o(ye);
        var be = ye.serialize,
          we = ye.deserialize,
          xe = (ye.clone, ye.fill),
          _e = (ye.urlEncode, ye.serializeObject),
          Ee = ye.limitObjectDepthToSize,
          Oe = ye.serializeKeysToEventMessage,
          ke =
            (ye.assign,
            ye.safeNormalize,
            i(function (e, n) {
              function t(e, n) {
                return (
                  void 0 === n && (n = 0), 0 !== n && K.isString(e) ? (e.length <= n ? e : e.substr(0, n) + "…") : e
                );
              }
              function r(e, n) {
                var t = e,
                  r = t.length;
                if (r <= 150) return t;
                n > r && (n = r);
                var o = Math.max(n - 60, 0);
                o < 5 && (o = 0);
                var i = Math.min(o + 140, r);
                return (
                  i > r - 5 && (i = r),
                  i === r && (o = Math.max(i - 140, 0)),
                  (t = t.slice(o, i)),
                  o > 0 && (t = "'{snip} " + t),
                  i < r && (t += " {snip}"),
                  t
                );
              }
              function o(e, n) {
                if (!Array.isArray(e)) return "";
                for (var t = [], r = 0; r < e.length; r++) {
                  var o = e[r];
                  try {
                    t.push(String(o));
                  } catch (e) {
                    t.push("[value cannot be serialized]");
                  }
                }
                return t.join(n);
              }
              function i(e, n) {
                return !(n.length > e.length) && -1 !== e.indexOf(n);
              }
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.truncate = t),
                (n.snipLine = r),
                (n.safeJoin = o),
                (n.includes = i);
            }));
        o(ke);
        var Se = (ke.truncate, ke.snipLine, ke.safeJoin),
          Ce = ke.includes,
          je = ie(),
          Ie = {
            wrap: function () {
              return function () {};
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1,
          },
          Pe = [].slice,
          Te = "?",
          Ne =
            /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        (Ie.wrap = function (e) {
          function n() {
            try {
              return e.apply(this, arguments);
            } catch (e) {
              throw (Ie.report(e), e);
            }
          }
          return n;
        }),
          (Ie.report = (function () {
            function e(e) {
              h.push(e);
            }
            function n(e) {
              for (var n = h.length - 1; n >= 0; --n) h[n] === e && h.splice(n, 1);
              0 === h.length && (a(), c());
            }
            function t(e, n, t) {
              var r = null;
              if (!n || Ie.collectWindowErrors) {
                for (var o in h)
                  if (k(h, o))
                    try {
                      h[o](e, n, t);
                    } catch (e) {
                      r = e;
                    }
                if (r) throw r;
              }
            }
            function r(e, n, r, o, i) {
              var a = null;
              if (((i = Q(i) ? i.error : i), (e = Q(e) ? e.message : e), v))
                Ie.computeStackTrace.augmentStackTraceWithInitialElement(v, n, r, e), l();
              else if (i && Y(i)) (a = Ie.computeStackTrace(i)), (a.mechanism = "onerror"), t(a, !0, i);
              else {
                var s,
                  c = { url: n, line: r, column: o },
                  u = e;
                if ("[object String]" === {}.toString.call(e)) {
                  var d = e.match(Ne);
                  d && ((s = d[1]), (u = d[2]));
                }
                (c.func = Ie.computeStackTrace.guessFunctionName(c.url, c.line)),
                  (c.context = Ie.computeStackTrace.gatherContext(c.url, c.line)),
                  (a = {
                    name: s,
                    message: u,
                    mode: "onerror",
                    mechanism: "onerror",
                    stack: [W.__assign({}, c, { url: c.url || S() })],
                  }),
                  t(a, !0, null);
              }
              return !!p && p.apply(this, arguments);
            }
            function o(e) {
              var n = (e && (e.detail ? e.detail.reason : e.reason)) || e,
                r = Ie.computeStackTrace(n);
              (r.mechanism = "onunhandledrejection"), t(r, !0, n);
            }
            function i() {
              !0 !== d && ((p = je.onerror), (je.onerror = r), (d = !0));
            }
            function a() {
              d && ((je.onerror = p), (d = !1));
            }
            function s() {
              !0 !== m && ((f = je.onunhandledrejection), (je.onunhandledrejection = o), (m = !0));
            }
            function c() {
              m && ((je.onerror = f), (m = !1));
            }
            function l() {
              var e = v,
                n = g;
              (v = null), (g = null), t(e, !1, n);
            }
            function u(e) {
              if (v) {
                if (g === e) return;
                l();
              }
              var n = Ie.computeStackTrace(e);
              throw (
                ((v = n),
                (g = e),
                setTimeout(
                  function () {
                    g === e && l();
                  },
                  n.incomplete ? 2e3 : 0
                ),
                e)
              );
            }
            var p,
              d,
              f,
              m,
              h = [],
              g = null,
              v = null;
            return (
              (u.subscribe = e),
              (u.unsubscribe = n),
              (u.installGlobalHandler = i),
              (u.installGlobalUnhandledRejectionHandler = s),
              u
            );
          })()),
          (Ie.computeStackTrace = (function () {
            function e(e) {
              if (!Ie.remoteFetching) return "";
              try {
                var n = (function () {
                  try {
                    return new je.XMLHttpRequest();
                  } catch (e) {
                    return new je.ActiveXObject("Microsoft.XMLHTTP");
                  }
                })();
                return n.open("GET", e, !1), n.send(""), n.responseText;
              } catch (e) {
                return "";
              }
            }
            function n(n) {
              if ("string" != typeof n) return [];
              if (!k(v, n)) {
                var t = "",
                  r = "";
                try {
                  r = je.document.domain;
                } catch (e) {}
                var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(n);
                o && o[2] === r && (t = e(n)), (v[n] = t ? t.split("\n") : []);
              }
              return v[n];
            }
            function t(e, t) {
              var r,
                o = /function ([^(]*)\(([^)]*)\)/,
                i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                a = "",
                s = n(e);
              if (!s.length) return Te;
              for (var c = 0; c < 10; ++c)
                if (((a = s[t - c] + a), !ee(a))) {
                  if ((r = i.exec(a))) return r[1];
                  if ((r = o.exec(a))) return r[1];
                }
              return Te;
            }
            function r(e, t) {
              var r = n(e);
              if (!r.length) return null;
              var o = [],
                i = Math.floor(Ie.linesOfContext / 2),
                a = i + (Ie.linesOfContext % 2),
                s = Math.max(0, t - i - 1),
                c = Math.min(r.length, t + a - 1);
              t -= 1;
              for (var l = s; l < c; ++l) ee(r[l]) || o.push(r[l]);
              return o.length > 0 ? o : null;
            }
            function o(e) {
              return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
            }
            function i(e) {
              return o(e)
                .replace("<", "(?:<|&lt;)")
                .replace(">", "(?:>|&gt;)")
                .replace("&", "(?:&|&amp;)")
                .replace('"', '(?:"|&quot;)')
                .replace(/\s+/g, "\\s+");
            }
            function a(e, t) {
              for (var r, o, i = 0, a = t.length; i < a; ++i)
                if ((r = n(t[i])).length && ((r = r.join("\n")), (o = e.exec(r))))
                  return {
                    url: t[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1,
                  };
              return null;
            }
            function s(e, t, r) {
              var i,
                a = n(t),
                s = new RegExp("\\b" + o(e) + "\\b");
              return (r -= 1), a && a.length > r && (i = s.exec(a[r])) ? i.index : null;
            }
            function c(e) {
              if (!ee(je && je.document)) {
                for (
                  var n,
                    t,
                    r,
                    s,
                    c = [S()],
                    l = je.document.getElementsByTagName("script"),
                    u = "" + e,
                    p = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                    d = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                    f = 0;
                  f < l.length;
                  ++f
                ) {
                  var m = l[f];
                  m.src && c.push(m.src);
                }
                if ((r = p.exec(u))) {
                  var h = r[1] ? "\\s+" + r[1] : "",
                    g = r[2].split(",").join("\\s*,\\s*");
                  (n = o(r[3]).replace(/;$/, ";?")),
                    (t = new RegExp("function" + h + "\\s*\\(\\s*" + g + "\\s*\\)\\s*{\\s*" + n + "\\s*}"));
                } else t = new RegExp(o(u).replace(/\s+/g, "\\s+"));
                if ((s = a(t, c))) return s;
                if ((r = d.exec(u))) {
                  var v = r[1];
                  if (
                    ((n = i(r[2])),
                    (t = new RegExp("on" + v + "=[\\'\"]\\s*" + n + "\\s*[\\'\"]", "i")),
                    (s = a(t, c[0])))
                  )
                    return s;
                  if (((t = new RegExp(n)), (s = a(t, c)))) return s;
                }
                return null;
              }
            }
            function l(e) {
              if (!e.stack) return null;
              for (
                var n,
                  o,
                  i,
                  a,
                  c =
                    /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                  l =
                    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                  u =
                    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                  p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                  d = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                  f = e.stack.split("\n"),
                  m = [],
                  h = /^(.*) is undefined$/.exec(e.message),
                  g = 0,
                  v = f.length;
                g < v;
                ++g
              ) {
                if ((i = c.exec(f[g]))) {
                  var y = i[2] && 0 === i[2].indexOf("native");
                  (n = i[2] && 0 === i[2].indexOf("eval")),
                    n && (o = d.exec(i[2])) && (i[2] = o[1]),
                    (a = {
                      url: y ? null : i[2],
                      func: i[1] || Te,
                      args: y ? [i[2]] : [],
                      line: i[3] ? +i[3] : null,
                      column: i[4] ? +i[4] : null,
                    });
                } else if ((i = u.exec(f[g])))
                  a = {
                    url: i[2],
                    func: i[1] || Te,
                    args: [],
                    line: +i[3],
                    column: i[4] ? +i[4] : null,
                  };
                else {
                  if (!(i = l.exec(f[g]))) continue;
                  (n = i[3] && i[3].indexOf(" > eval") > -1),
                    n && (o = p.exec(i[3]))
                      ? (i[3] = o[1])
                      : 0 !== g || i[5] || ee(e.columnNumber) || (m[0].column = e.columnNumber + 1),
                    (a = {
                      url: i[3],
                      func: i[1] || Te,
                      args: i[2] ? i[2].split(",") : [],
                      line: i[4] ? +i[4] : null,
                      column: i[5] ? +i[5] : null,
                    });
                }
                if (
                  (!a.func && a.line && (a.func = t(a.url, a.line)),
                  Ie.remoteFetching && a.url && "blob:" === a.url.substr(0, 5))
                ) {
                  var b = new XMLHttpRequest();
                  if ((b.open("GET", a.url, !1), b.send(""), 200 === b.status)) {
                    var w = b.responseText || "";
                    w = w.slice(-300);
                    var x = w.match(/\/\/# sourceMappingURL=(.*)$/);
                    if (x) {
                      var _ = x[1];
                      "~" === _.charAt(0) && (_ = C() + _.slice(1)), (a.url = _.slice(0, -4));
                    }
                  }
                }
                (a.context = a.line ? r(a.url, a.line) : null), m.push(a);
              }
              return m.length
                ? (m[0] && m[0].line && !m[0].column && h && (m[0].column = s(h[1], m[0].url, m[0].line)),
                  { mode: "stack", name: e.name, message: e.message, stack: m })
                : null;
            }
            function u(e) {
              var n = e.stacktrace;
              if (n) {
                for (
                  var o,
                    i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                    a =
                      / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                    s = n.split("\n"),
                    c = [],
                    l = 0;
                  l < s.length;
                  l += 2
                ) {
                  var u = null;
                  if (
                    ((o = i.exec(s[l]))
                      ? (u = {
                          url: o[2],
                          line: +o[1],
                          column: null,
                          func: o[3],
                          args: [],
                        })
                      : (o = a.exec(s[l])) &&
                        (u = {
                          url: o[6],
                          line: +o[1],
                          column: +o[2],
                          func: o[3] || o[4],
                          args: o[5] ? o[5].split(",") : [],
                        }),
                    u)
                  ) {
                    if ((!u.func && u.line && (u.func = t(u.url, u.line)), u.line))
                      try {
                        u.context = r(u.url, u.line);
                      } catch (e) {}
                    u.context || (u.context = [s[l + 1]]), c.push(u);
                  }
                }
                return c.length
                  ? {
                      mode: "stacktrace",
                      name: e.name,
                      message: e.message,
                      stack: c,
                    }
                  : null;
              }
            }
            function p(e) {
              var o = e.message.split("\n");
              if (o.length < 4) return null;
              var s,
                c = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                l = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                u = /^\s*Line (\d+) of function script\s*$/i,
                p = [],
                d = je && je.document && je.document.getElementsByTagName("script"),
                f = [];
              for (var m in d) k(d, m) && !d[m].src && f.push(d[m]);
              for (var h = 2; h < o.length; h += 2) {
                var g = null;
                if ((s = c.exec(o[h])))
                  g = {
                    url: s[2],
                    func: s[3],
                    args: [],
                    line: +s[1],
                    column: null,
                  };
                else if ((s = l.exec(o[h]))) {
                  g = {
                    url: s[3],
                    func: s[4],
                    args: [],
                    line: +s[1],
                    column: null,
                  };
                  var v = +s[1],
                    y = f[s[2] - 1];
                  if (y) {
                    var b = n(g.url);
                    if (b) {
                      b = b.join("\n");
                      var w = b.indexOf(y.innerText);
                      w >= 0 && (g.line = v + b.substring(0, w).split("\n").length);
                    }
                  }
                } else if ((s = u.exec(o[h]))) {
                  var x = S().replace(/#.*$/, ""),
                    _ = new RegExp(i(o[h + 1])),
                    E = a(_, [x]);
                  g = {
                    url: x,
                    func: "",
                    args: [],
                    line: E ? E.line : s[1],
                    column: null,
                  };
                }
                if (g) {
                  g.func || (g.func = t(g.url, g.line));
                  var O = r(g.url, g.line),
                    C = O ? O[Math.floor(O.length / 2)] : null;
                  O && C.replace(/^\s*/, "") === o[h + 1].replace(/^\s*/, "")
                    ? (g.context = O)
                    : (g.context = [o[h + 1]]),
                    p.push(g);
                }
              }
              return p.length ? { mode: "multiline", name: e.name, message: o[0], stack: p } : null;
            }
            function d(e, n, o, i) {
              var a = { url: n, line: o };
              if (a.url && a.line) {
                (e.incomplete = !1), a.func || (a.func = t(a.url, a.line)), a.context || (a.context = r(a.url, a.line));
                var c = / '([^']+)' /.exec(i);
                if ((c && (a.column = s(c[1], a.url, a.line)), e.stack.length > 0 && e.stack[0].url === a.url)) {
                  if (e.stack[0].line === a.line) return !1;
                  if (!e.stack[0].line && e.stack[0].func === a.func)
                    return (e.stack[0].line = a.line), (e.stack[0].context = a.context), !1;
                }
                return e.stack.unshift(a), (e.partial = !0), !0;
              }
              return (e.incomplete = !0), !1;
            }
            function f(e, n) {
              for (
                var r,
                  o,
                  i,
                  a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                  l = [],
                  u = {},
                  p = !1,
                  h = f.caller;
                h && !p;
                h = h.caller
              )
                if (h !== m && h !== Ie.report) {
                  if (
                    ((o = {
                      url: null,
                      func: Te,
                      args: [],
                      line: null,
                      column: null,
                    }),
                    h.name ? (o.func = h.name) : (r = a.exec(h.toString())) && (o.func = r[1]),
                    void 0 === o.func)
                  )
                    try {
                      o.func = r.input.substring(0, r.input.indexOf("{"));
                    } catch (e) {}
                  if ((i = c(h))) {
                    (o.url = i.url), (o.line = i.line), o.func === Te && (o.func = t(o.url, o.line));
                    var g = / '([^']+)' /.exec(e.message || e.description);
                    g && (o.column = s(g[1], i.url, i.line));
                  }
                  u["" + h] ? (p = !0) : (u["" + h] = !0), l.push(o);
                }
              n && l.splice(0, n);
              var v = {
                mode: "callers",
                name: e.name,
                message: e.message,
                stack: l,
              };
              return d(v, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), v;
            }
            function m(e, n) {
              var t = null;
              n = null == n ? 0 : +n;
              try {
                if ((t = u(e))) return t;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((t = l(e))) return t;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((t = p(e))) return t;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((t = f(e, n + 1))) return t;
              } catch (e) {
                if (g) throw e;
              }
              return { name: e.name, message: e.message, mode: "failed" };
            }
            function h(e) {
              e = 1 + (null == e ? 0 : +e);
              try {
                throw new Error();
              } catch (n) {
                return m(n, e + 1);
              }
            }
            var g = !1,
              v = {};
            return (
              (m.augmentStackTraceWithInitialElement = d),
              (m.computeStackTraceFromStackProp = l),
              (m.guessFunctionName = t),
              (m.gatherContext = r),
              (m.ofCaller = h),
              (m.getSource = n),
              m
            );
          })()),
          (Ie.extendToAsynchronousCallbacks = function () {
            var e = function (e) {
              var n = je[e];
              je[e] = function () {
                var e = Pe.call(arguments),
                  t = e[0];
                return "function" == typeof t && (e[0] = Ie.wrap(t)), n.apply ? n.apply(this, e) : n(e[0], e[1]);
              };
            };
            e("setTimeout"), e("setInterval");
          }),
          (Ie.remoteFetching = !1),
          (Ie.collectWindowErrors = !0),
          (Ie.linesOfContext = 11);
        var Me,
          Re,
          Fe,
          De,
          Ue = Ie.report.subscribe,
          Ae = Ie.report.installGlobalHandler,
          Le = Ie.report.installGlobalUnhandledRejectionHandler,
          He = Ie.computeStackTrace,
          Be = 50,
          qe = (function () {
            function e(e) {
              (this.options = e), (this.url = new z.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth());
            }
            return (
              (e.prototype.captureEvent = function (e) {
                return W.__awaiter(this, void 0, void 0, function () {
                  return W.__generator(this, function (e) {
                    throw new z.SentryError("Transport Class has to implement `captureEvent` method");
                  });
                });
              }),
              e
            );
          })(),
          We = ie(),
          ze = (function (e) {
            function n() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              W.__extends(n, e),
              (n.prototype.captureEvent = function (e) {
                return W.__awaiter(this, void 0, void 0, function () {
                  var n, t;
                  return W.__generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (n = {
                            body: be(e),
                            method: "POST",
                            referrerPolicy: ge() ? "origin" : "",
                          }),
                          [4, We.fetch(this.url, n)]
                        );
                      case 1:
                        return (t = r.sent()), [2, { status: V.fromHttpCode(t.status) }];
                    }
                  });
                });
              }),
              n
            );
          })(qe),
          Ge = (function (e) {
            function n() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              W.__extends(n, e),
              (n.prototype.captureEvent = function (e) {
                return W.__awaiter(this, void 0, void 0, function () {
                  var n = this;
                  return W.__generator(this, function (t) {
                    return [
                      2,
                      new Promise(function (t, r) {
                        var o = new XMLHttpRequest();
                        (o.onreadystatechange = function () {
                          4 === o.readyState && (200 === o.status && t({ status: V.fromHttpCode(o.status) }), r(o));
                        }),
                          o.open("POST", n.url),
                          o.send(be(e));
                      }),
                    ];
                  });
                });
              }),
              n
            );
          })(qe),
          $e = ie(),
          Je = (function (e) {
            function n() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              W.__extends(n, e),
              (n.prototype.captureEvent = function (e) {
                return W.__awaiter(this, void 0, void 0, function () {
                  var n, t;
                  return W.__generator(this, function (r) {
                    return (
                      (n = be(e)), (t = $e.navigator.sendBeacon(this.url, n)), [2, { status: t ? V.Success : V.Failed }]
                    );
                  });
                });
              }),
              n
            );
          })(qe),
          Ve = Object.freeze({
            BaseTransport: qe,
            FetchTransport: ze,
            XHRTransport: Ge,
            BeaconTransport: Je,
          }),
          Ke = (function (e) {
            function n() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              W.__extends(n, e),
              (n.prototype.install = function () {
                if (!this.options.dsn)
                  throw new z.SentryError("Invariant exception: install() must not be called when disabled");
                return (Error.stackTraceLimit = 50), !0;
              }),
              (n.prototype.eventFromException = function (e, n) {
                return W.__awaiter(this, void 0, void 0, function () {
                  var t, r, r, o, i, r, r;
                  return W.__generator(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return Q(e) && e.error ? ((r = e), (e = r.error), (t = P(He(e))), [3, 7]) : [3, 1];
                      case 1:
                        return X(e) || Z(e)
                          ? ((r = e),
                            (o = r.name || (X(r) ? "DOMError" : "DOMException")),
                            (i = r.message ? o + ": " + r.message : o),
                            [4, this.eventFromMessage(i, void 0, n)])
                          : [3, 3];
                      case 2:
                        return (t = a.sent()), [3, 7];
                      case 3:
                        return Y(e) ? ((t = P(He(e))), [3, 7]) : [3, 4];
                      case 4:
                        return re(e) && n && n.syntheticException
                          ? ((r = e), (t = I(r, n.syntheticException)), [3, 7])
                          : [3, 5];
                      case 5:
                        return (r = e), [4, this.eventFromMessage(r, void 0, n)];
                      case 6:
                        (t = a.sent()), (a.label = 7);
                      case 7:
                        return (
                          (t = W.__assign({}, t, {
                            event_id: n && n.event_id,
                            exception: W.__assign({}, t.exception, {
                              mechanism: { handled: !0, type: "generic" },
                            }),
                          })),
                          [2, t]
                        );
                    }
                  });
                });
              }),
              (n.prototype.eventFromMessage = function (e, n, t) {
                return (
                  void 0 === n && (n = J.Info),
                  W.__awaiter(this, void 0, void 0, function () {
                    var r, o, i;
                    return W.__generator(this, function (a) {
                      return (
                        (r = {
                          event_id: t && t.event_id,
                          level: n,
                          message: e,
                        }),
                        this.options.attachStacktrace &&
                          t &&
                          t.syntheticException &&
                          ((o = He(t.syntheticException)), (i = T(o.stack)), (r.stacktrace = { frames: i })),
                        [2, r]
                      );
                    });
                  })
                );
              }),
              (n.prototype.sendEvent = function (e) {
                return W.__awaiter(this, void 0, void 0, function () {
                  var n;
                  return W.__generator(this, function (t) {
                    return this.options.dsn
                      ? (this.transport ||
                          ((n = this.options.transportOptions
                            ? this.options.transportOptions
                            : { dsn: this.options.dsn }),
                          this.options.transport
                            ? (this.transport = new this.options.transport({
                                dsn: this.options.dsn,
                              }))
                            : me()
                            ? (this.transport = new Je(n))
                            : de()
                            ? (this.transport = new ze(n))
                            : (this.transport = new Ge(n))),
                        [2, this.transport.captureEvent(e)])
                      : (ue.warn("Event has been skipped because no Dsn is configured."),
                        [
                          2,
                          {
                            status: V.Skipped,
                            reason: "Event has been skipped because no Dsn is configured.",
                          },
                        ]);
                  });
                });
              }),
              n
            );
          })(z.BaseBackend),
          Ye = "sentry.javascript.browser",
          Qe = (function (e) {
            function n(n) {
              return e.call(this, Ke, n) || this;
            }
            return (
              W.__extends(n, e),
              (n.prototype.prepareEvent = function (n, t, r) {
                return W.__awaiter(this, void 0, void 0, function () {
                  return W.__generator(this, function (o) {
                    return (
                      (n.platform = n.platform || "javascript"),
                      (n.sdk = W.__assign({}, n.sdk, {
                        name: Ye,
                        packages: W.__spread((n.sdk && n.sdk.packages) || [], [
                          { name: "npm:@sentry/browser", version: "4.4.2" },
                        ]),
                        version: "4.4.2",
                      })),
                      [2, e.prototype.prepareEvent.call(this, n, t, r)]
                    );
                  });
                });
              }),
              (n.prototype.showReportDialog = function (e) {
                void 0 === e && (e = {});
                var n = ie().document;
                if (n) {
                  var t = e.dsn || this.getDsn();
                  if (!e.eventId) throw new z.SentryError("Missing `eventId` option in showReportDialog call");
                  if (!t) throw new z.SentryError("Missing `Dsn` option in showReportDialog call");
                  var r = n.createElement("script");
                  (r.async = !0), (r.src = new z.API(t).getReportDialogEndpoint(e)), (n.head || n.body).appendChild(r);
                }
              }),
              n
            );
          })(z.BaseClient),
          Xe = 1e3,
          Ze = 0,
          en = (function () {
            function e(n) {
              (this.name = e.id), (this.options = W.__assign({ onerror: !0, onunhandledrejection: !0 }, n));
            }
            return (
              (e.prototype.setupOnce = function () {
                Ue(function (n, t, r) {
                  if (!N()) {
                    var o = z.getCurrentHub().getIntegration(e);
                    o &&
                      z.getCurrentHub().captureEvent(o.eventFromGlobalHandler(n), {
                        originalException: r,
                        data: { stack: n },
                      });
                  }
                }),
                  this.options.onerror && (ue.log("Global Handler attached: onerror"), Ae()),
                  this.options.onunhandledrejection && (ue.log("Global Handler attached: onunhandledrejection"), Le());
              }),
              (e.prototype.eventFromGlobalHandler = function (e) {
                var n = P(e);
                return W.__assign({}, n, {
                  exception: W.__assign({}, n.exception, {
                    mechanism: {
                      data: { mode: e.mode },
                      handled: !1,
                      type: e.mechanism,
                    },
                  }),
                });
              }),
              (e.id = "GlobalHandlers"),
              e
            );
          })(),
          nn = (function () {
            function e() {
              (this.ignoreOnError = 0), (this.name = e.id);
            }
            return (
              (e.prototype.wrapTimeFunction = function (e) {
                return function () {
                  for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                  var r = n[0];
                  return (
                    (n[0] = R(r, {
                      mechanism: {
                        data: { function: e.name || "<anonymous>" },
                        handled: !0,
                        type: "instrument",
                      },
                    })),
                    e.apply(this, n)
                  );
                };
              }),
              (e.prototype.wrapRAF = function (e) {
                return function (n) {
                  return e(
                    R(n, {
                      mechanism: {
                        data: {
                          function: "requestAnimationFrame",
                          handler: (e && e.name) || "<anonymous>",
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    })
                  );
                };
              }),
              (e.prototype.wrapEventTarget = function (e) {
                var n = ie(),
                  t = n[e] && n[e].prototype;
                t &&
                  t.hasOwnProperty &&
                  t.hasOwnProperty("addEventListener") &&
                  (xe(t, "addEventListener", function (n) {
                    return function (t, r, o) {
                      try {
                        r.handleEvent = R(r.handleEvent.bind(r), {
                          mechanism: {
                            data: {
                              function: "handleEvent",
                              handler: (r && r.name) || "<anonymous>",
                              target: e,
                            },
                            handled: !0,
                            type: "instrument",
                          },
                        });
                      } catch (e) {}
                      var i, a, s;
                      return (
                        ("EventTarget" !== e && "Node" !== e) ||
                          ((a = F("click")),
                          (s = D()),
                          (i = function (e) {
                            if (e) {
                              var n;
                              try {
                                n = e.type;
                              } catch (e) {
                                return;
                              }
                              return "click" === n ? a(e) : "keypress" === n ? s(e) : void 0;
                            }
                          })),
                        n.call(
                          this,
                          t,
                          R(
                            r,
                            {
                              mechanism: {
                                data: {
                                  function: "addEventListener",
                                  handler: (r && r.name) || "<anonymous>",
                                  target: e,
                                },
                                handled: !0,
                                type: "instrument",
                              },
                            },
                            i
                          ),
                          o
                        )
                      );
                    };
                  }),
                  xe(t, "removeEventListener", function (e) {
                    return function (n, t, r) {
                      var o = t;
                      try {
                        o = o && (o.__sentry_wrapped__ || o);
                      } catch (e) {}
                      return e.call(this, n, o, r);
                    };
                  }));
              }),
              (e.prototype.setupOnce = function () {
                this.ignoreOnError = this.ignoreOnError;
                var e = ie();
                xe(e, "setTimeout", this.wrapTimeFunction.bind(this)),
                  xe(e, "setInterval", this.wrapTimeFunction.bind(this)),
                  xe(e, "requestAnimationFrame", this.wrapRAF.bind(this)),
                  [
                    "EventTarget",
                    "Window",
                    "Node",
                    "ApplicationCache",
                    "AudioTrackList",
                    "ChannelMergerNode",
                    "CryptoOperation",
                    "EventSource",
                    "FileReader",
                    "HTMLUnknownElement",
                    "IDBDatabase",
                    "IDBRequest",
                    "IDBTransaction",
                    "KeyOperation",
                    "MediaController",
                    "MessagePort",
                    "ModalWindow",
                    "Notification",
                    "SVGElementInstance",
                    "Screen",
                    "TextTrack",
                    "TextTrackCue",
                    "TextTrackList",
                    "WebSocket",
                    "WebSocketWorker",
                    "Worker",
                    "XMLHttpRequest",
                    "XMLHttpRequestEventTarget",
                    "XMLHttpRequestUpload",
                  ].forEach(this.wrapEventTarget.bind(this));
              }),
              (e.id = "TryCatch"),
              e
            );
          })(),
          tn = ie(),
          rn = (function () {
            function e(n) {
              (this.name = e.id),
                (this.options = W.__assign(
                  {
                    beacon: !0,
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0,
                  },
                  n
                ));
            }
            return (
              (e.prototype.instrumentBeacon = function () {
                function n(n) {
                  return function () {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    var o = t[0],
                      i = t[1],
                      a = n.apply(this, t),
                      s = z.getCurrentHub().getClient(),
                      c = s && s.getDsn();
                    if (c) {
                      var l = new z.API(c).getStoreEndpoint();
                      if (l && Ce(o, l)) return U(i), a;
                    }
                    var u = { category: "beacon", data: i, type: "http" };
                    return a || (u.level = J.Error), e.addBreadcrumb(u, { input: t, result: a }), a;
                  };
                }
                me() && xe(tn.navigator, "sendBeacon", n);
              }),
              (e.prototype.instrumentConsole = function () {
                "console" in tn &&
                  ["debug", "info", "warn", "error", "log"].forEach(function (n) {
                    n in tn.console &&
                      xe(tn.console, n, function (t) {
                        return function () {
                          for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                          var i = {
                            category: "console",
                            data: {
                              extra: { arguments: _e(r, 2) },
                              logger: "console",
                            },
                            level: J.fromString(n),
                            message: Se(r, " "),
                          };
                          "assert" === n &&
                            !1 === r[0] &&
                            ((i.message = "Assertion failed: " + (Se(r.slice(1), " ") || "console.assert")),
                            (i.data.extra.arguments = _e(r.slice(1), 2))),
                            e.addBreadcrumb(i, { input: r, level: n }),
                            t && Function.prototype.apply.call(t, tn.console, r);
                        };
                      });
                  });
              }),
              (e.prototype.instrumentDOM = function () {
                "document" in tn &&
                  (tn.document.addEventListener("click", F("click"), !1),
                  tn.document.addEventListener("keypress", D(), !1));
              }),
              (e.prototype.instrumentFetch = function () {
                fe() &&
                  xe(tn, "fetch", function (n) {
                    return function () {
                      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                      var o,
                        i = t[0],
                        a = "GET";
                      "string" == typeof i
                        ? (o = i)
                        : "Request" in tn && i instanceof Request
                        ? ((o = i.url), i.method && (a = i.method))
                        : (o = String(i)),
                        t[1] && t[1].method && (a = t[1].method);
                      var s = z.getCurrentHub().getClient(),
                        c = s && s.getDsn();
                      if (c) {
                        var l = new z.API(c).getStoreEndpoint();
                        if (l && Ce(o, l)) return "POST" === a && t[1] && t[1].body && U(t[1].body), n.apply(tn, t);
                      }
                      var u = { method: a, url: o };
                      return n
                        .apply(tn, t)
                        .then(function (n) {
                          return (
                            (u.status_code = n.status),
                            e.addBreadcrumb({ category: "fetch", data: u, type: "http" }, { input: t, response: n }),
                            n
                          );
                        })
                        .catch(function (n) {
                          throw (
                            (e.addBreadcrumb(
                              {
                                category: "fetch",
                                data: u,
                                level: J.Error,
                                type: "http",
                              },
                              { error: n, input: t }
                            ),
                            n)
                          );
                        });
                    };
                  });
              }),
              (e.prototype.instrumentHistory = function () {
                function n(e) {
                  return function () {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    var o = n.length > 2 ? n[2] : void 0;
                    return o && r(Fe, String(o)), e.apply(this, n);
                  };
                }
                var t = this;
                if (ve()) {
                  var r = function (n, t) {
                      var r = se(tn.location.href),
                        o = se(t),
                        i = se(n);
                      i.path || (i = r),
                        (Fe = t),
                        r.protocol === o.protocol && r.host === o.host && (t = o.relative),
                        r.protocol === i.protocol && r.host === i.host && (n = i.relative),
                        e.addBreadcrumb({
                          category: "navigation",
                          data: { from: n, to: t },
                        });
                    },
                    o = tn.onpopstate;
                  (tn.onpopstate = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var i = tn.location.href;
                    if ((r(Fe, i), o)) return o.apply(t, e);
                  }),
                    xe(tn.history, "pushState", n),
                    xe(tn.history, "replaceState", n);
                }
              }),
              (e.prototype.instrumentXHR = function () {
                function n(e, n) {
                  e in n &&
                    ne(n[e]) &&
                    xe(n, e, function (n) {
                      return R(n, {
                        mechanism: {
                          data: {
                            function: e,
                            handler: (n && n.name) || "<anonymous>",
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      });
                    });
                }
                if ("XMLHttpRequest" in tn) {
                  var t = XMLHttpRequest.prototype;
                  xe(t, "open", function (e) {
                    return function () {
                      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                      var r = n[1];
                      this.__sentry_xhr__ = { method: n[0], url: n[1] };
                      var o = z.getCurrentHub().getClient(),
                        i = o && o.getDsn();
                      if (i) {
                        var a = new z.API(i).getStoreEndpoint();
                        te(r) && a && Ce(r, a) && (this.__sentry_own_request__ = !0);
                      }
                      return e.apply(this, n);
                    };
                  }),
                    xe(t, "send", function (t) {
                      return function () {
                        function r() {
                          if (4 === a.readyState) {
                            if (a.__sentry_own_request__) return;
                            try {
                              a.__sentry_xhr__ && (a.__sentry_xhr__.status_code = a.status);
                            } catch (e) {}
                            e.addBreadcrumb(
                              {
                                category: "xhr",
                                data: a.__sentry_xhr__,
                                type: "http",
                              },
                              { xhr: a }
                            );
                          }
                        }
                        for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                        var a = this;
                        return (
                          a.__sentry_own_request__ && U(o[0]),
                          ["onload", "onerror", "onprogress"].forEach(function (e) {
                            n(e, a);
                          }),
                          "onreadystatechange" in a && ne(a.onreadystatechange)
                            ? xe(a, "onreadystatechange", function (e) {
                                return R(
                                  e,
                                  {
                                    mechanism: {
                                      data: {
                                        function: "onreadystatechange",
                                        handler: (e && e.name) || "<anonymous>",
                                      },
                                      handled: !0,
                                      type: "instrument",
                                    },
                                  },
                                  r
                                );
                              })
                            : (a.onreadystatechange = r),
                          t.apply(this, o)
                        );
                      };
                    });
                }
              }),
              (e.addBreadcrumb = function (n, t) {
                z.getCurrentHub().getIntegration(e) && z.getCurrentHub().addBreadcrumb(n, t);
              }),
              (e.prototype.setupOnce = function () {
                this.options.console && this.instrumentConsole(),
                  this.options.dom && this.instrumentDOM(),
                  this.options.xhr && this.instrumentXHR(),
                  this.options.fetch && this.instrumentFetch(),
                  this.options.beacon && this.instrumentBeacon(),
                  this.options.history && this.instrumentHistory();
              }),
              (e.id = "Breadcrumbs"),
              e
            );
          })(),
          on = "cause",
          an = 5,
          sn = (function () {
            function e(n) {
              void 0 === n && (n = {}), (this.name = e.id), (this.key = n.key || on), (this.limit = n.limit || an);
            }
            return (
              (e.prototype.setupOnce = function () {
                var n = this;
                z.addGlobalEventProcessor(function (t, r) {
                  return W.__awaiter(n, void 0, void 0, function () {
                    var n;
                    return W.__generator(this, function (o) {
                      return (n = z.getCurrentHub().getIntegration(e)), n ? [2, n.handler(t, r)] : [2, t];
                    });
                  });
                });
              }),
              (e.prototype.handler = function (e, n) {
                if (!(e.exception && e.exception.values && n && n.originalException instanceof Error)) return e;
                var t = this.walkErrorTree(n.originalException, this.key);
                return (e.exception.values = W.__spread(t, e.exception.values)), e;
              }),
              (e.prototype.walkErrorTree = function (e, n, t) {
                if ((void 0 === t && (t = []), !(e[n] instanceof Error) || t.length + 1 >= this.limit)) return t;
                var r = He(e[n]),
                  o = j(r);
                return this.walkErrorTree(e[n], n, W.__spread([o], t));
              }),
              (e.id = "LinkedErrors"),
              e
            );
          })(),
          cn = ie(),
          ln = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function () {
                var n = this;
                z.addGlobalEventProcessor(function (t) {
                  return W.__awaiter(n, void 0, void 0, function () {
                    var n;
                    return W.__generator(this, function (r) {
                      return z.getCurrentHub().getIntegration(e) && cn.navigator && cn.location
                        ? ((n = t.request || {}),
                          (n.url = n.url || cn.location.href),
                          (n.headers = n.headers || {}),
                          (n.headers["User-Agent"] = cn.navigator.userAgent),
                          [2, W.__assign({}, t, { request: n })])
                        : [2, t];
                    });
                  });
                });
              }),
              (e.id = "UserAgent"),
              e
            );
          })(),
          un = (function () {
            function e(n) {
              void 0 === n && (n = {}), (this.name = e.id), (this.Ember = n.Ember || ie().Ember);
            }
            return (
              (e.prototype.setupOnce = function () {
                var n = this;
                if (this.Ember) {
                  var t = this.Ember.onerror;
                  (this.Ember.onerror = function (r) {
                    if (
                      (z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function (e) {
                          n.addIntegrationToSdkInfo(e), z.captureException(r);
                        }),
                      "function" == typeof t)
                    )
                      t.call(n.Ember, r);
                    else if (n.Ember.testing) throw r;
                  }),
                    this.Ember.RSVP.on("error", function (t) {
                      z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function (e) {
                          t instanceof Error
                            ? (e.setExtra("context", "Unhandled Promise error detected"),
                              n.addIntegrationToSdkInfo(e),
                              z.captureException(t))
                            : (e.setExtra("reason", t),
                              n.addIntegrationToSdkInfo(e),
                              z.captureMessage("Unhandled Promise error detected"));
                        });
                    });
                }
              }),
              (e.prototype.addIntegrationToSdkInfo = function (e) {
                var n = this;
                e.addEventProcessor(function (e) {
                  return W.__awaiter(n, void 0, void 0, function () {
                    var n;
                    return W.__generator(this, function (t) {
                      return (
                        e.sdk &&
                          ((n = e.sdk.integrations || []),
                          (e.sdk = W.__assign({}, e.sdk, {
                            integrations: W.__spread(n, ["ember"]),
                          }))),
                        [2, e]
                      );
                    });
                  });
                });
              }),
              (e.id = "Ember"),
              e
            );
          })(),
          pn = (function () {
            function e(n) {
              void 0 === n && (n = {}), (this.name = e.id), (this.Vue = n.Vue || ie().Vue);
            }
            return (
              (e.prototype.formatComponentName = function (e) {
                if (e.$root === e) return "root instance";
                var n = e._isVue ? e.$options.name || e.$options._componentTag : e.name;
                return (
                  (n ? "component <" + n + ">" : "anonymous component") +
                  (e._isVue && e.$options.__file ? " at " + e.$options.__file : "")
                );
              }),
              (e.prototype.setupOnce = function () {
                var n = this;
                if (this.Vue && this.Vue.config) {
                  var t = this.Vue.config.errorHandler;
                  this.Vue.config.errorHandler = function (r, o, i) {
                    var a = {};
                    re(o) && ((a.componentName = n.formatComponentName(o)), (a.propsData = o.$options.propsData)),
                      ee(i) || (a.lifecycleHook = i),
                      z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function (e) {
                          Object.keys(a).forEach(function (n) {
                            e.setExtra(n, a[n]);
                          }),
                            e.addEventProcessor(function (e) {
                              return W.__awaiter(n, void 0, void 0, function () {
                                var n;
                                return W.__generator(this, function (t) {
                                  return (
                                    e.sdk &&
                                      ((n = e.sdk.integrations || []),
                                      (e.sdk = W.__assign({}, e.sdk, {
                                        integrations: W.__spread(n, ["vue"]),
                                      }))),
                                    [2, e]
                                  );
                                });
                              });
                            }),
                            z.captureException(r);
                        }),
                      "function" == typeof t && t.call(n.Vue, r, o, i);
                  };
                }
              }),
              (e.id = "Vue"),
              e
            );
          })();
        !(function (e) {
          (e.Crash = "crash"), (e.Deprecation = "deprecation"), (e.Intervention = "intervention");
        })(De || (De = {}));
        var dn = (function () {
            function e(n) {
              void 0 === n && (n = { types: [De.Crash, De.Deprecation, De.Intervention] }),
                (this.options = n),
                (this.name = e.id);
            }
            return (
              (e.prototype.setupOnce = function () {
                if (he()) {
                  new (ie().ReportingObserver)(this.handler.bind(this), {
                    buffered: !0,
                    types: this.options.types,
                  }).observe();
                }
              }),
              (e.prototype.handler = function (n) {
                var t, r;
                if (z.getCurrentHub().getIntegration(e)) {
                  try {
                    for (var o = W.__values(n), i = o.next(); !i.done; i = o.next()) {
                      var a = i.value;
                      !(function (e) {
                        z.withScope(function (n) {
                          n.setExtra("url", e.url);
                          var t = "ReportingObserver [" + e.type + "]",
                            r = "No details available";
                          if (e.body) {
                            var o = {};
                            for (var i in e.body) o[i] = e.body[i];
                            if ((n.setExtra("body", o), e.type === De.Crash)) {
                              var a = e.body;
                              r = [a.crashId || "", a.reason || ""].join(" ").trim() || r;
                            } else {
                              var a = e.body;
                              r = a.message || r;
                            }
                          }
                          z.captureMessage(t + ": " + r);
                        });
                      })(a);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.id = "ReportingObserver"),
              e
            );
          })(),
          fn = Object.freeze({
            GlobalHandlers: en,
            TryCatch: nn,
            Breadcrumbs: rn,
            LinkedErrors: sn,
            UserAgent: ln,
            Ember: un,
            Vue: pn,
            ReportingObserver: dn,
          }),
          mn = [
            new z.Integrations.Dedupe(),
            new z.Integrations.InboundFilters(),
            new z.Integrations.FunctionToString(),
            new z.Integrations.ExtraErrorData(),
            new nn(),
            new rn(),
            new en(),
            new sn(),
            new ln(),
          ],
          hn = W.__assign({}, z.Integrations, fn);
        (n.addGlobalEventProcessor = z.addGlobalEventProcessor),
          (n.addBreadcrumb = z.addBreadcrumb),
          (n.captureException = z.captureException),
          (n.captureEvent = z.captureEvent),
          (n.captureMessage = z.captureMessage),
          (n.configureScope = z.configureScope),
          (n.withScope = z.withScope),
          (n.getHubFromCarrier = z.getHubFromCarrier),
          (n.getCurrentHub = z.getCurrentHub),
          (n.Hub = z.Hub),
          (n.Scope = z.Scope),
          (n.Integrations = hn),
          (n.Transports = Ve),
          (n.Severity = J),
          (n.Status = V),
          (n.BrowserBackend = Ke),
          (n.BrowserClient = Qe),
          (n.defaultIntegrations = mn),
          (n.forceLoad = B),
          (n.init = A),
          (n.lastEventId = H),
          (n.onLoad = q),
          (n.showReportDialog = L),
          (n.SDK_NAME = Ye),
          (n.SDK_VERSION = "4.4.2");
      }.call(n, t(21), t(25)));
    },
    67: function (e, n, t) {
      var r = t(111);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      t(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    68: function (e, n, t) {
      "use strict";
      var r = t(0),
        o = t(14).connect,
        i = t(4).FormattedMessage,
        a = t(1),
        s = t(4).injectIntl,
        c = t(4).intlShape,
        l = t(16),
        u = t(26),
        p = function (e) {
          var n = e.canceledDeletionOpen,
            t = e.handleCloseCanceledDeletion,
            o = e.intl;
          return r.createElement(
            u,
            {
              isOpen: n,
              style: { content: { padding: 15 } },
              onRequestClose: t,
            },
            r.createElement("h4", null, r.createElement(i, { id: "general.noDeletionTitle" })),
            r.createElement(
              "p",
              null,
              r.createElement(i, {
                id: "general.noDeletionDescription",
                values: {
                  resetLink: r.createElement(
                    "a",
                    { href: "/accounts/password_reset/" },
                    o.formatMessage({ id: "general.noDeletionLink" })
                  ),
                },
              })
            )
          );
        };
      p.propTypes = {
        canceledDeletionOpen: a.bool,
        handleCloseCanceledDeletion: a.func,
        intl: c,
      };
      var d = function (e) {
          return {
            canceledDeletionOpen: e.navigation && e.navigation.canceledDeletionOpen,
          };
        },
        f = function (e) {
          return {
            handleCloseCanceledDeletion: function () {
              e(l.setCanceledDeletionOpen(!1));
            },
          };
        },
        m = o(d, f)(p);
      e.exports = s(m);
    },
    69: function (e, n, t) {
      "use strict";
      var r = t(1),
        o = t(0),
        i = t(14).connect,
        a = t(96);
      t(35);
      var s = function (e) {
        var n = e.error,
          t = e.onLogIn;
        return o.createElement(a, {
          error: n,
          key: "login-dropdown-presentation",
          onLogIn: t,
        });
      };
      s.propTypes = { error: r.string, onLogIn: r.func };
      var c = function (e) {
          return { error: e.navigation && e.navigation.loginError };
        },
        l = function () {
          return {};
        };
      e.exports = i(c, l)(s);
    },
    7: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(11),
        o = r.getGlobalObject(),
        i = (function () {
          function e() {
            this.enabled = !1;
          }
          return (
            (e.prototype.disable = function () {
              this.enabled = !1;
            }),
            (e.prototype.enable = function () {
              this.enabled = !0;
            }),
            (e.prototype.log = function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              this.enabled &&
                r.consoleSandbox(function () {
                  o.console.log("Sentry Logger [Log]: " + e.join(" "));
                });
            }),
            (e.prototype.warn = function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              this.enabled &&
                r.consoleSandbox(function () {
                  o.console.warn("Sentry Logger [Warn]: " + e.join(" "));
                });
            }),
            (e.prototype.error = function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              this.enabled &&
                r.consoleSandbox(function () {
                  o.console.error("Sentry Logger [Error]: " + e.join(" "));
                });
            }),
            e
          );
        })(),
        a = new i();
      n.logger = a;
    },
    70: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(13),
        i = t(1),
        a = t(0),
        s = t(26);
      t(126);
      var c = function (e) {
        return a.createElement(
          s,
          o(e, ["src"]),
          a.createElement("iframe", {
            className: r("modal-content-iframe", e.className),
            ref: e.componentRef,
            src: e.src,
          })
        );
      };
      (c.propTypes = {
        className: i.string,
        componentRef: i.func,
        isOpen: i.bool,
        onRequestClose: i.func,
        src: i.string,
      }),
        (e.exports = c);
    },
    71: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(9),
        c = t(5),
        l = t(1),
        u = t(0),
        p = t(14).connect,
        d = t(70),
        f = t(16);
      t(67);
      var m = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return s(t, ["handleMessage", "toggleMessageListener"]), (t.state = { recaptchaOpen: !1 }), t;
        }
        return (
          i(n, e),
          a(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.isOpen && this.toggleMessageListener(!0);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.isOpen && !e.isOpen && this.toggleMessageListener(!0),
                  !this.props.isOpen && e.isOpen && this.toggleMessageListener(!1);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.toggleMessageListener(!1);
              },
            },
            {
              key: "handleMessage",
              value: function (e) {
                e.origin === window.location.origin &&
                  e.source === this.registrationIframe.contentWindow &&
                  ("registration-done" === e.data && this.props.handleCompleteRegistration(),
                  "registration-relaunch" === e.data && this.registrationIframe.contentWindow.location.reload(),
                  "recaptcha-opened" === e.data && this.setState({ recaptchaOpen: !0 }),
                  "recaptcha-closed" === e.data && this.setState({ recaptchaOpen: !1 }));
              },
            },
            {
              key: "toggleMessageListener",
              value: function (e) {
                e
                  ? window.addEventListener("message", this.handleMessage)
                  : window.removeEventListener("message", this.handleMessage);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return u.createElement(d, {
                  className: c("mod-registration", {
                    "recaptcha-open": this.state.recaptchaOpen,
                  }),
                  componentRef: function (n) {
                    e.registrationIframe = n;
                  },
                  isOpen: this.props.isOpen,
                  src: "/accounts/standalone-registration/",
                  onRequestClose: this.props.handleCloseRegistration,
                });
              },
            },
          ]),
          n
        );
      })(u.Component);
      m.propTypes = {
        handleCloseRegistration: l.func,
        handleCompleteRegistration: l.func,
        isOpen: l.bool,
      };
      var h = function (e) {
          return { isOpen: e.navigation.registrationOpen };
        },
        g = function (e) {
          return {
            handleCloseRegistration: function () {
              e(f.setRegistrationOpen(!1));
            },
            handleCompleteRegistration: function () {
              e(f.handleCompleteRegistration());
            },
          };
        };
      e.exports = p(h, g)(m);
    },
    72: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(19),
        o = t(17),
        i = (function () {
          function e(e) {
            (this.dsn = e), (this.dsnObject = new o.Dsn(e));
          }
          return (
            (e.prototype.getDsn = function () {
              return this.dsnObject;
            }),
            (e.prototype.getStoreEndpoint = function () {
              return "" + this.getBaseUrl() + this.getStoreEndpointPath();
            }),
            (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
              var e = this.dsnObject,
                n = { sentry_key: e.user, sentry_version: "7" };
              return this.getStoreEndpoint() + "?" + r.urlEncode(n);
            }),
            (e.prototype.getBaseUrl = function () {
              var e = this.dsnObject,
                n = e.protocol ? e.protocol + ":" : "",
                t = e.port ? ":" + e.port : "";
              return n + "//" + e.host + t;
            }),
            (e.prototype.getStoreEndpointPath = function () {
              var e = this.dsnObject;
              return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
            }),
            (e.prototype.getRequestHeaders = function (e, n) {
              var t = this.dsnObject,
                r = ["Sentry sentry_version=7"];
              return (
                r.push("sentry_timestamp=" + new Date().getTime()),
                r.push("sentry_client=" + e + "/" + n),
                r.push("sentry_key=" + t.user),
                t.pass && r.push("sentry_secret=" + t.pass),
                {
                  "Content-Type": "application/json",
                  "X-Sentry-Auth": r.join(", "),
                }
              );
            }),
            (e.prototype.getReportDialogEndpoint = function (e) {
              void 0 === e && (e = {});
              var n = this.dsnObject,
                t = this.getBaseUrl() + (n.path ? "/" + n.path : "") + "/api/embed/error-page/",
                r = [];
              r.push("dsn=" + n.toString());
              for (var o in e)
                if ("user" === o) {
                  if (!e.user) continue;
                  e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
                    e.user.email && r.push("email=" + encodeURIComponent(e.user.email));
                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
              return r.length ? t + "?" + r.join("&") : t;
            }),
            e
          );
        })();
      n.API = i;
    },
    73: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(7),
        i = t(18),
        a = t(29),
        s = (function () {
          function e(e) {
            (this.buffer = new a.RequestBuffer()),
              (this.options = e),
              this.options.dsn || o.logger.warn("No DSN provided, backend will not do anything.");
          }
          return (
            (e.prototype.eventFromException = function (e, n) {
              return r.__awaiter(this, void 0, void 0, function () {
                return r.__generator(this, function (e) {
                  throw new i.SentryError("Backend has to implement `eventFromException` method");
                });
              });
            }),
            (e.prototype.eventFromMessage = function (e, n, t) {
              return r.__awaiter(this, void 0, void 0, function () {
                return r.__generator(this, function (e) {
                  throw new i.SentryError("Backend has to implement `eventFromMessage` method");
                });
              });
            }),
            (e.prototype.sendEvent = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                return r.__generator(this, function (e) {
                  throw new i.SentryError("Backend has to implement `sendEvent` method");
                });
              });
            }),
            (e.prototype.storeBreadcrumb = function (e) {
              return !0;
            }),
            (e.prototype.storeScope = function (e) {}),
            (e.prototype.getBuffer = function () {
              return this.buffer;
            }),
            e
          );
        })();
      n.BaseBackend = s;
    },
    74: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(89),
        i = t(90),
        a = t(7),
        s = t(11),
        c = t(31),
        l = t(17),
        u = t(76),
        p = (function () {
          function e(e, n) {
            (this.backend = new e(n)),
              (this.options = n),
              n.dsn && (this.dsn = new l.Dsn(n.dsn)),
              (this.integrations = u.setupIntegrations(this.options));
          }
          return (
            (e.prototype.install = function () {
              if (!this.isEnabled()) return (this.installed = !1);
              var e = this.getBackend();
              return !this.installed && e.install && e.install(), (this.installed = !0);
            }),
            (e.prototype.buffer = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                return r.__generator(this, function (n) {
                  return [2, this.getBackend().getBuffer().add(e)];
                });
              });
            }),
            (e.prototype.captureException = function (e, n, t) {
              return r.__awaiter(this, void 0, void 0, function () {
                var o = this;
                return r.__generator(this, function (i) {
                  return [
                    2,
                    this.buffer(
                      (function () {
                        return r.__awaiter(o, void 0, void 0, function () {
                          var o;
                          return r.__generator(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, this.getBackend().eventFromException(e, n)];
                              case 1:
                                return (o = r.sent()), [2, this.captureEvent(o, n, t)];
                            }
                          });
                        });
                      })()
                    ),
                  ];
                });
              });
            }),
            (e.prototype.captureMessage = function (e, n, t, o) {
              return r.__awaiter(this, void 0, void 0, function () {
                var i = this;
                return r.__generator(this, function (a) {
                  return [
                    2,
                    this.buffer(
                      (function () {
                        return r.__awaiter(i, void 0, void 0, function () {
                          var i;
                          return r.__generator(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, this.getBackend().eventFromMessage(e, n, t)];
                              case 1:
                                return (i = r.sent()), [2, this.captureEvent(i, t, o)];
                            }
                          });
                        });
                      })()
                    ),
                  ];
                });
              });
            }),
            (e.prototype.captureEvent = function (e, n, t) {
              return r.__awaiter(this, void 0, void 0, function () {
                var o = this;
                return r.__generator(this, function (i) {
                  return [
                    2,
                    this.buffer(
                      (function () {
                        return r.__awaiter(o, void 0, void 0, function () {
                          var o = this;
                          return r.__generator(this, function (i) {
                            return [
                              2,
                              this.processEvent(
                                e,
                                function (e) {
                                  return r.__awaiter(o, void 0, void 0, function () {
                                    return r.__generator(this, function (n) {
                                      return [2, this.getBackend().sendEvent(e)];
                                    });
                                  });
                                },
                                n,
                                t
                              ),
                            ];
                          });
                        });
                      })()
                    ),
                  ];
                });
              });
            }),
            (e.prototype.addBreadcrumb = function (e, n, t) {
              var o = this.getOptions(),
                i = o.beforeBreadcrumb,
                a = o.maxBreadcrumbs,
                c = void 0 === a ? 30 : a;
              if (!(c <= 0)) {
                var l = new Date().getTime() / 1e3,
                  u = r.__assign({ timestamp: l }, e),
                  p = i
                    ? s.consoleSandbox(function () {
                        return i(u, n);
                      })
                    : u;
                null !== p && this.getBackend().storeBreadcrumb(p) && t && t.addBreadcrumb(p, Math.min(c, 100));
              }
            }),
            (e.prototype.getDsn = function () {
              return this.dsn;
            }),
            (e.prototype.getOptions = function () {
              return this.options;
            }),
            (e.prototype.getBackend = function () {
              return this.backend;
            }),
            (e.prototype.isEnabled = function () {
              return !1 !== this.getOptions().enabled && void 0 !== this.dsn;
            }),
            (e.prototype.prepareEvent = function (e, n, t) {
              return r.__awaiter(this, void 0, void 0, function () {
                var o, i, a, l, u, p, d, f, m;
                return r.__generator(this, function (h) {
                  return (
                    (o = this.getOptions()),
                    (i = o.environment),
                    (a = o.maxBreadcrumbs),
                    (l = void 0 === a ? 30 : a),
                    (u = o.release),
                    (p = o.dist),
                    (d = r.__assign({}, e)),
                    void 0 === d.environment && void 0 !== i && (d.environment = i),
                    void 0 === d.release && void 0 !== u && (d.release = u),
                    void 0 === d.dist && void 0 !== p && (d.dist = p),
                    d.message && (d.message = c.truncate(d.message, 250)),
                    (f = d.exception && d.exception.values && d.exception.values[0]),
                    f && f.value && (f.value = c.truncate(f.value, 250)),
                    (m = d.request),
                    m && m.url && (m.url = c.truncate(m.url, 250)),
                    void 0 === d.event_id && (d.event_id = s.uuid4()),
                    n ? [2, n.applyToEvent(d, t, Math.min(l, 100))] : [2, d]
                  );
                });
              });
            }),
            (e.prototype.processEvent = function (e, n, t, s) {
              return r.__awaiter(this, void 0, void 0, function () {
                var c, l, u, p, d, f, m, h;
                return r.__generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.isEnabled()
                        ? ((c = this.getOptions()),
                          (l = c.beforeSend),
                          (u = c.sampleRate),
                          "number" == typeof u && Math.random() > u
                            ? [2, { status: o.Status.Skipped }]
                            : [4, this.prepareEvent(e, s, t)])
                        : [2, { status: o.Status.Skipped }];
                    case 1:
                      if (null === (p = r.sent())) return [2, { status: o.Status.Skipped }];
                      (d = p), (r.label = 2);
                    case 2:
                      return (
                        r.trys.push([2, 5, , 6]),
                        (f = t && t.data && !0 === t.data.__sentry__),
                        f || !l ? [3, 4] : [4, l(p, t)]
                      );
                    case 3:
                      (d = r.sent()),
                        void 0 === d && a.logger.error("`beforeSend` method has to return `null` or a valid event"),
                        (r.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      return (
                        (m = r.sent()),
                        i.forget(
                          this.captureException(m, {
                            data: { __sentry__: !0 },
                            originalException: m,
                          })
                        ),
                        [
                          2,
                          {
                            reason: "Event processing in beforeSend method threw an exception",
                            status: o.Status.Invalid,
                          },
                        ]
                      );
                    case 6:
                      return null === d
                        ? [
                            2,
                            {
                              reason: "Event dropped due to being discarded by beforeSend method",
                              status: o.Status.Skipped,
                            },
                          ]
                        : [4, n(d)];
                    case 7:
                      return (h = r.sent()), (h.event = d), h.status, o.Status.RateLimit, [2, h];
                  }
                });
              });
            }),
            (e.prototype.close = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                return r.__generator(this, function (n) {
                  return [2, this.getBackend().getBuffer().drain(e)];
                });
              });
            }),
            (e.prototype.getIntegrations = function () {
              return this.integrations || {};
            }),
            (e.prototype.getIntegration = function (e) {
              try {
                return this.integrations[e.id] || null;
              } catch (n) {
                return a.logger.warn("Cannot retrieve integration " + e.id + " from the current Client"), null;
              }
            }),
            e
          );
        })();
      n.BaseClient = p;
    },
    75: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(88);
      (n.addBreadcrumb = r.addBreadcrumb),
        (n.captureException = r.captureException),
        (n.captureEvent = r.captureEvent),
        (n.captureMessage = r.captureMessage),
        (n.configureScope = r.configureScope),
        (n.withScope = r.withScope);
      var o = t(8);
      (n.addGlobalEventProcessor = o.addGlobalEventProcessor),
        (n.getCurrentHub = o.getCurrentHub),
        (n.Hub = o.Hub),
        (n.getHubFromCarrier = o.getHubFromCarrier),
        (n.Scope = o.Scope);
      var i = t(72);
      n.API = i.API;
      var a = t(74);
      n.BaseClient = a.BaseClient;
      var s = t(73);
      n.BaseBackend = s.BaseBackend;
      var c = t(17);
      n.Dsn = c.Dsn;
      var l = t(18);
      n.SentryError = l.SentryError;
      var u = t(29);
      n.RequestBuffer = u.RequestBuffer;
      var p = t(85);
      n.LogLevel = p.LogLevel;
      var d = t(86);
      n.initAndBind = d.initAndBind;
      var f = t(81);
      n.Integrations = f;
    },
    76: function (e, n, t) {
      "use strict";
      function r(e) {
        var n,
          t,
          r,
          o,
          i = (e.defaultIntegrations && s.__spread(e.defaultIntegrations)) || [],
          c = e.integrations,
          l = [];
        if (Array.isArray(c)) {
          var u = c.map(function (e) {
              return e.name;
            }),
            p = [];
          try {
            for (var d = s.__values(i), f = d.next(); !f.done; f = d.next()) {
              var m = f.value;
              -1 === u.indexOf(a(m)) && -1 === p.indexOf(a(m)) && (l.push(m), p.push(a(m)));
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              f && !f.done && (t = d.return) && t.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
          try {
            for (var h = s.__values(c), g = h.next(); !g.done; g = h.next()) {
              var v = g.value;
              -1 === p.indexOf(a(v)) && (l.push(v), p.push(a(v)));
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              g && !g.done && (o = h.return) && o.call(h);
            } finally {
              if (r) throw r.error;
            }
          }
        } else {
          if ("function" != typeof c) return s.__spread(i);
          (l = c(i)), (l = Array.isArray(l) ? l : [l]);
        }
        return l;
      }
      function o(e, t) {
        if (-1 === n.installedIntegrations.indexOf(a(e))) {
          try {
            e.setupOnce();
          } catch (n) {
            c.logger.warn("Integration " + a(e) + ': The install method is deprecated. Use "setupOnce".'),
              e.install && e.install(t);
          }
          n.installedIntegrations.push(a(e)), c.logger.log("Integration installed: " + a(e));
        }
      }
      function i(e) {
        var n = {};
        return (
          r(e).forEach(function (t) {
            (n[a(t)] = t), o(t, e);
          }),
          n
        );
      }
      function a(e) {
        return e.constructor.id || e.name;
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var s = t(6),
        c = t(7);
      (n.installedIntegrations = []),
        (n.getIntegrationsToSetup = r),
        (n.setupIntegration = o),
        (n.setupIntegrations = i);
    },
    77: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(8),
        i = t(7),
        a = t(11),
        s = (function () {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function () {
              var n = this;
              o.addGlobalEventProcessor(function (t) {
                return r.__awaiter(n, void 0, void 0, function () {
                  var n;
                  return r.__generator(this, function (r) {
                    if ((n = o.getCurrentHub().getIntegration(e))) {
                      try {
                        if (n.shouldDropEvent(t, n.previousEvent)) return [2, null];
                      } catch (e) {
                        return [2, (n.previousEvent = t)];
                      }
                      return [2, (n.previousEvent = t)];
                    }
                    return [2, t];
                  });
                });
              });
            }),
            (e.prototype.shouldDropEvent = function (e, n) {
              return (
                !!n &&
                (this.isSameMessageEvent(e, n)
                  ? (i.logger.warn(
                      "Event dropped due to being a duplicate of previous event (same message).\nEvent: " +
                        a.getEventDescription(e)
                    ),
                    !0)
                  : !!this.isSameExceptionEvent(e, n) &&
                    (i.logger.warn(
                      "Event dropped due to being a duplicate of previous event (same exception).\nEvent: " +
                        a.getEventDescription(e)
                    ),
                    !0))
              );
            }),
            (e.prototype.isSameMessageEvent = function (e, n) {
              var t = e.message,
                r = n.message;
              return (
                !(!t && !r) &&
                !((t && !r) || (!t && r)) &&
                t === r &&
                !!this.isSameFingerprint(e, n) &&
                !!this.isSameStacktrace(e, n)
              );
            }),
            (e.prototype.getFramesFromEvent = function (e) {
              var n = e.exception;
              if (!n) return e.stacktrace ? e.stacktrace.frames : void 0;
              try {
                return n.values[0].stacktrace.frames;
              } catch (e) {
                return;
              }
            }),
            (e.prototype.isSameStacktrace = function (e, n) {
              var t = this.getFramesFromEvent(e),
                r = this.getFramesFromEvent(n);
              if (!t && !r) return !0;
              if ((t && !r) || (!t && r)) return !1;
              if (((t = t), (r = r), r.length !== t.length)) return !1;
              for (var o = 0; o < r.length; o++) {
                var i = r[o],
                  a = t[o];
                if (
                  i.filename !== a.filename ||
                  i.lineno !== a.lineno ||
                  i.colno !== a.colno ||
                  i.function !== a.function
                )
                  return !1;
              }
              return !0;
            }),
            (e.prototype.getExceptionFromEvent = function (e) {
              return e.exception && e.exception.values && e.exception.values[0];
            }),
            (e.prototype.isSameExceptionEvent = function (e, n) {
              var t = this.getExceptionFromEvent(n),
                r = this.getExceptionFromEvent(e);
              return (
                !(!t || !r) &&
                t.type === r.type &&
                t.value === r.value &&
                !!this.isSameFingerprint(e, n) &&
                !!this.isSameStacktrace(e, n)
              );
            }),
            (e.prototype.isSameFingerprint = function (e, n) {
              var t = e.fingerprint,
                r = n.fingerprint;
              if (!t && !r) return !0;
              if ((t && !r) || (!t && r)) return !1;
              (t = t), (r = r);
              try {
                return !(t.join("") !== r.join(""));
              } catch (e) {
                return !1;
              }
            }),
            (e.id = "Dedupe"),
            e
          );
        })();
      n.Dedupe = s;
    },
    78: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(8),
        i = t(10),
        a = t(7),
        s = (function () {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function () {
              var n = this;
              o.addGlobalEventProcessor(function (t, i) {
                return r.__awaiter(n, void 0, void 0, function () {
                  var n;
                  return r.__generator(this, function (r) {
                    return (
                      (n = o.getCurrentHub().getIntegration(e)),
                      n && i && i.originalException
                        ? [2, this.enhanceEventWithErrorData(t, i.originalException)]
                        : [2, t]
                    );
                  });
                });
              });
            }),
            (e.prototype.enhanceEventWithErrorData = function (e, n) {
              var t = this.extractErrorData(n);
              return t ? r.__assign({}, e, { extra: r.__assign({}, e.extra, t) }) : e;
            }),
            (e.prototype.extractErrorData = function (e) {
              var n, t, o;
              try {
                var s = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber"],
                  c = e.name || e.constructor.name,
                  l = Object.keys(e).filter(function (e) {
                    return -1 === s.indexOf(e);
                  });
                if (l.length) {
                  var u = {};
                  try {
                    for (var p = r.__values(l), d = p.next(); !d.done; d = p.next()) {
                      var f = d.value,
                        m = e[f];
                      i.isError(m) && (m = m.name || m.constructor.name), (u[f] = m);
                    }
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      d && !d.done && (t = p.return) && t.call(p);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  return (o = {}), (o[c] = u), o;
                }
                return null;
              } catch (e) {
                return a.logger.error("Unable to extract extra data from the Error object:", e), null;
              }
            }),
            (e.id = "ExtraErrorData"),
            e
          );
        })();
      n.ExtraErrorData = s;
    },
    79: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r,
        o = (function () {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function () {
              (r = Function.prototype.toString),
                (Function.prototype.toString = function () {
                  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                  var t = this.__sentry__ ? this.__sentry_original__ : this;
                  return r.apply(t, e);
                });
            }),
            (e.id = "FunctionToString"),
            e
          );
        })();
      n.FunctionToString = o;
    },
    8: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(30);
      (n.addGlobalEventProcessor = r.addGlobalEventProcessor), (n.Scope = r.Scope);
      var o = t(87);
      (n.getCurrentHub = o.getCurrentHub),
        (n.getHubFromCarrier = o.getHubFromCarrier),
        (n.getMainCarrier = o.getMainCarrier),
        (n.Hub = o.Hub),
        (n.setHubOnCarrier = o.setHubOnCarrier);
    },
    80: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(8),
        i = t(10),
        a = t(7),
        s = t(11),
        c = t(31),
        l = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        u = (function () {
          function e(n) {
            void 0 === n && (n = {}), (this.options = n), (this.name = e.id);
          }
          return (
            (e.prototype.setupOnce = function () {
              var n = this;
              o.addGlobalEventProcessor(function (t) {
                return r.__awaiter(n, void 0, void 0, function () {
                  var n, i, a, s, c;
                  return r.__generator(this, function (r) {
                    return (n = o.getCurrentHub())
                      ? ((i = n.getIntegration(e)),
                        i &&
                        ((a = n.getClient()),
                        (s = a ? a.getOptions() : {}),
                        (c = i.mergeOptions(s)),
                        i.shouldDropEvent(t, c))
                          ? [2, null]
                          : [2, t])
                      : [2, t];
                  });
                });
              });
            }),
            (e.prototype.shouldDropEvent = function (e, n) {
              return this.isSentryError(e, n)
                ? (a.logger.warn(
                    "Event dropped due to being internal Sentry Error.\nEvent: " + s.getEventDescription(e)
                  ),
                  !0)
                : this.isIgnoredError(e, n)
                ? (a.logger.warn(
                    "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + s.getEventDescription(e)
                  ),
                  !0)
                : this.isBlacklistedUrl(e, n)
                ? (a.logger.warn(
                    "Event dropped due to being matched by `blacklistUrls` option.\nEvent: " +
                      s.getEventDescription(e) +
                      ".\nUrl: " +
                      this.getEventFilterUrl(e)
                  ),
                  !0)
                : !this.isWhitelistedUrl(e, n) &&
                  (a.logger.warn(
                    "Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " +
                      s.getEventDescription(e) +
                      ".\nUrl: " +
                      this.getEventFilterUrl(e)
                  ),
                  !0);
            }),
            (e.prototype.isSentryError = function (e, n) {
              if ((void 0 === n && (n = {}), !n.ignoreInternal)) return !1;
              try {
                return "SentryError" === e.exception.values[0].type;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.isIgnoredError = function (e, n) {
              var t = this;
              return (
                void 0 === n && (n = {}),
                !(!n.ignoreErrors || !n.ignoreErrors.length) &&
                  this.getPossibleEventMessages(e).some(function (e) {
                    return n.ignoreErrors.some(function (n) {
                      return t.isMatchingPattern(e, n);
                    });
                  })
              );
            }),
            (e.prototype.isBlacklistedUrl = function (e, n) {
              var t = this;
              if ((void 0 === n && (n = {}), !n.blacklistUrls || !n.blacklistUrls.length)) return !1;
              var r = this.getEventFilterUrl(e);
              return (
                !!r &&
                n.blacklistUrls.some(function (e) {
                  return t.isMatchingPattern(r, e);
                })
              );
            }),
            (e.prototype.isWhitelistedUrl = function (e, n) {
              var t = this;
              if ((void 0 === n && (n = {}), !n.whitelistUrls || !n.whitelistUrls.length)) return !0;
              var r = this.getEventFilterUrl(e);
              return (
                !r ||
                n.whitelistUrls.some(function (e) {
                  return t.isMatchingPattern(r, e);
                })
              );
            }),
            (e.prototype.mergeOptions = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  blacklistUrls: r.__spread(this.options.blacklistUrls || [], e.blacklistUrls || []),
                  ignoreErrors: r.__spread(this.options.ignoreErrors || [], e.ignoreErrors || [], l),
                  ignoreInternal: void 0 === this.options.ignoreInternal || this.options.ignoreInternal,
                  whitelistUrls: r.__spread(this.options.whitelistUrls || [], e.whitelistUrls || []),
                }
              );
            }),
            (e.prototype.isMatchingPattern = function (e, n) {
              return i.isRegExp(n) ? n.test(e) : "string" == typeof n && c.includes(e, n);
            }),
            (e.prototype.getPossibleEventMessages = function (e) {
              if (e.message) return [e.message];
              if (!e.exception) return [];
              try {
                var n = e.exception.values[0],
                  t = n.type,
                  r = n.value;
                return ["" + r, t + ": " + r];
              } catch (n) {
                return a.logger.error("Cannot extract message for event " + s.getEventDescription(e)), [];
              }
            }),
            (e.prototype.getEventFilterUrl = function (e) {
              try {
                return e.stacktrace
                  ? e.stacktrace.frames[0].filename
                  : e.exception
                  ? e.exception.values[0].stacktrace.frames[0].filename
                  : null;
              } catch (n) {
                return a.logger.error("Cannot extract url for event " + s.getEventDescription(e)), null;
              }
            }),
            (e.id = "InboundFilters"),
            e
          );
        })();
      n.InboundFilters = u;
    },
    81: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(77);
      n.Dedupe = r.Dedupe;
      var o = t(79);
      n.FunctionToString = o.FunctionToString;
      var i = t(84);
      n.SDKInformation = i.SDKInformation;
      var a = t(80);
      n.InboundFilters = a.InboundFilters;
      var s = t(78);
      n.ExtraErrorData = s.ExtraErrorData;
      var c = t(82);
      n.Debug = c.Debug;
      var l = t(83);
      n.RewriteFrames = l.RewriteFrames;
    },
    82: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(8),
        i = (function () {
          function e(n) {
            (this.name = e.id), (this.options = r.__assign({ debugger: !1, stringify: !1 }, n));
          }
          return (
            (e.prototype.setupOnce = function () {
              var n = this;
              o.addGlobalEventProcessor(function (t, i) {
                return r.__awaiter(n, void 0, void 0, function () {
                  var n;
                  return r.__generator(this, function (r) {
                    return (
                      (n = o.getCurrentHub().getIntegration(e)),
                      n &&
                        (n.options.debugger,
                        n.options.stringify
                          ? (console.log(JSON.stringify(t, null, 2)), i && console.log(JSON.stringify(i, null, 2)))
                          : (console.log(t), i && console.log(i))),
                      [2, t]
                    );
                  });
                });
              });
            }),
            (e.id = "Debug"),
            e
          );
        })();
      n.Debug = i;
    },
    83: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(6),
        o = t(8),
        i = t(91),
        a = (function () {
          function e(n) {
            void 0 === n && (n = {});
            var t = this;
            (this.name = e.id),
              (this.iteratee = function (e) {
                return r.__awaiter(t, void 0, void 0, function () {
                  var n;
                  return r.__generator(this, function (t) {
                    return (
                      e.filename &&
                        e.filename.startsWith("/") &&
                        ((n = this.root ? i.relative(this.root, e.filename) : i.basename(e.filename)),
                        (e.filename = "app:///" + n)),
                      [2, e]
                    );
                  });
                });
              }),
              n.root && (this.root = n.root),
              n.iteratee && (this.iteratee = n.iteratee);
          }
          return (
            (e.prototype.setupOnce = function () {
              var n = this;
              o.addGlobalEventProcessor(function (t) {
                return r.__awaiter(n, void 0, void 0, function () {
                  var n;
                  return r.__generator(this, function (r) {
                    return (n = o.getCurrentHub().getIntegration(e)), n ? [2, n.process(t)] : [2, t];
                  });
                });
              });
            }),
            (e.prototype.process = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                var n, t, o, i, a, s, c;
                return r.__generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!(n = this.getFramesFromEvent(e))) return [3, 4];
                      t = [];
                      for (o in n) t.push(o);
                      (i = 0), (r.label = 1);
                    case 1:
                      return i < t.length ? ((a = t[i]), (s = n), (c = a), [4, this.iteratee(n[a])]) : [3, 4];
                    case 2:
                      (s[c] = r.sent()), (r.label = 3);
                    case 3:
                      return i++, [3, 1];
                    case 4:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.getFramesFromEvent = function (e) {
              var n = e.exception;
              if (!n) return e.stacktrace ? e.stacktrace.frames : void 0;
              try {
                return n.values[0].stacktrace.frames;
              } catch (e) {
                return;
              }
            }),
            (e.id = "RewriteFrames"),
            e
          );
        })();
      n.RewriteFrames = a;
    },
    84: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(7),
        o = (function () {
          function e() {
            this.name = "SDKInformation";
          }
          return (
            (e.prototype.setupOnce = function () {
              r.logger.warn(
                "SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core."
              );
            }),
            e
          );
        })();
      n.SDKInformation = o;
    },
    85: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Debug = 2)] = "Debug"),
          (e[(e.Verbose = 3)] = "Verbose");
      })(n.LogLevel || (n.LogLevel = {}));
    },
    86: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if ((!0 === n.debug && i.logger.enable(), !o.getCurrentHub().getClient())) {
          var t = new e(n);
          o.getCurrentHub().bindClient(t), t.install();
        }
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = t(8),
        i = t(7);
      n.initAndBind = r;
    },
    87: function (e, n, t) {
      "use strict";
      (function (e) {
        function r() {
          var e = p.getGlobalObject();
          return (e.__SENTRY__ = e.__SENTRY__ || { hub: void 0 }), e;
        }
        function o(e) {
          var n = r(),
            t = s(n);
          return c(n, e), t;
        }
        function i() {
          var t = r();
          (a(t) && !s(t).isOlderThan(n.API_VERSION)) || c(t, new f());
          try {
            var o = p.dynamicRequire(e, "domain"),
              i = o.active;
            if (!i) return s(t);
            if (!a(i) || s(i).isOlderThan(n.API_VERSION)) {
              var l = s(t).getStackTop();
              c(i, new f(l.client, d.Scope.clone(l.scope)));
            }
            return s(i);
          } catch (e) {
            return s(t);
          }
        }
        function a(e) {
          return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
        }
        function s(e) {
          return e && e.__SENTRY__ && e.__SENTRY__.hub
            ? e.__SENTRY__.hub
            : ((e.__SENTRY__ = {}), (e.__SENTRY__.hub = new f()), e.__SENTRY__.hub);
        }
        function c(e, n) {
          return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = n), !0);
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = t(6),
          u = t(7),
          p = t(11),
          d = t(30);
        n.API_VERSION = 3;
        var f = (function () {
          function e(e, t, r) {
            void 0 === t && (t = new d.Scope()),
              void 0 === r && (r = n.API_VERSION),
              (this.version = r),
              (this.stack = []),
              this.stack.push({ client: e, scope: t });
          }
          return (
            (e.prototype.invokeClient = function (e) {
              for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
              var r,
                o = this.getStackTop();
              o && o.client && o.client[e] && (r = o.client)[e].apply(r, l.__spread(n, [o.scope]));
            }),
            (e.prototype.invokeClientAsync = function (e) {
              for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
              var r,
                o = this.getStackTop();
              o &&
                o.client &&
                o.client[e] &&
                (r = o.client)[e].apply(r, l.__spread(n, [o.scope])).catch(function (e) {
                  u.logger.error(e);
                });
            }),
            (e.prototype.isOlderThan = function (e) {
              return this.version < e;
            }),
            (e.prototype.bindClient = function (e) {
              var n = this.getStackTop();
              (n.client = e),
                n &&
                  n.scope &&
                  e &&
                  n.scope.addScopeListener(function (n) {
                    if (e.getBackend)
                      try {
                        e.getBackend().storeScope(n);
                      } catch (e) {}
                  });
            }),
            (e.prototype.pushScope = function () {
              var e = this.getStack(),
                n = e.length > 0 ? e[e.length - 1].scope : void 0,
                t = d.Scope.clone(n);
              return this.getStack().push({ client: this.getClient(), scope: t }), t;
            }),
            (e.prototype.popScope = function () {
              return void 0 !== this.getStack().pop();
            }),
            (e.prototype.withScope = function (e) {
              var n = this.pushScope();
              try {
                e(n);
              } finally {
                this.popScope();
              }
            }),
            (e.prototype.getClient = function () {
              return this.getStackTop().client;
            }),
            (e.prototype.getScope = function () {
              return this.getStackTop().scope;
            }),
            (e.prototype.getStack = function () {
              return this.stack;
            }),
            (e.prototype.getStackTop = function () {
              return this.stack[this.stack.length - 1];
            }),
            (e.prototype.captureException = function (e, n) {
              var t = (this._lastEventId = p.uuid4());
              return this.invokeClientAsync("captureException", e, l.__assign({}, n, { event_id: t })), t;
            }),
            (e.prototype.captureMessage = function (e, n, t) {
              var r = (this._lastEventId = p.uuid4());
              return this.invokeClientAsync("captureMessage", e, n, l.__assign({}, t, { event_id: r })), r;
            }),
            (e.prototype.captureEvent = function (e, n) {
              var t = (this._lastEventId = p.uuid4());
              return this.invokeClientAsync("captureEvent", e, l.__assign({}, n, { event_id: t })), t;
            }),
            (e.prototype.lastEventId = function () {
              return this._lastEventId;
            }),
            (e.prototype.addBreadcrumb = function (e, n) {
              this.invokeClient("addBreadcrumb", e, l.__assign({}, n));
            }),
            (e.prototype.configureScope = function (e) {
              var n = this.getStackTop();
              n.scope && n.client && e(n.scope);
            }),
            (e.prototype.run = function (e) {
              var n = o(this);
              try {
                e(this);
              } finally {
                o(n);
              }
            }),
            (e.prototype.getIntegration = function (e) {
              try {
                return this.getClient().getIntegration(e);
              } catch (n) {
                return u.logger.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null;
              }
            }),
            e
          );
        })();
        (n.Hub = f),
          (n.getMainCarrier = r),
          (n.makeMain = o),
          (n.getCurrentHub = i),
          (n.hasHubOnCarrier = a),
          (n.getHubFromCarrier = s),
          (n.setHubOnCarrier = c);
      }.call(n, t(36)(e)));
    },
    88: function (e, n, t) {
      "use strict";
      function r(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        var r = d.getCurrentHub();
        if (r && r[e]) return r[e].apply(r, p.__spread(n));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
      }
      function o(e) {
        var n;
        try {
          throw new Error("Sentry syntheticException");
        } catch (e) {
          n = e;
        }
        return r("captureException", e, {
          originalException: e,
          syntheticException: n,
        });
      }
      function i(e, n) {
        var t;
        try {
          throw new Error(e);
        } catch (e) {
          t = e;
        }
        return r("captureMessage", e, n, {
          originalException: e,
          syntheticException: t,
        });
      }
      function a(e) {
        return r("captureEvent", e);
      }
      function s(e) {
        r("addBreadcrumb", e);
      }
      function c(e) {
        r("configureScope", e);
      }
      function l(e) {
        r("withScope", e);
      }
      function u(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        r.apply(void 0, p.__spread(["invokeClient", e], n));
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var p = t(6),
        d = t(8);
      (n.captureException = o),
        (n.captureMessage = i),
        (n.captureEvent = a),
        (n.addBreadcrumb = s),
        (n.configureScope = c),
        (n.withScope = l),
        (n._callOnClient = u);
    },
    89: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      !(function (e) {
        (e.Fatal = "fatal"),
          (e.Error = "error"),
          (e.Warning = "warning"),
          (e.Log = "log"),
          (e.Info = "info"),
          (e.Debug = "debug"),
          (e.Critical = "critical");
      })(n.Severity || (n.Severity = {})),
        (function (e) {
          function n(n) {
            switch (n) {
              case "debug":
                return e.Debug;
              case "info":
                return e.Info;
              case "warn":
              case "warning":
                return e.Warning;
              case "error":
                return e.Error;
              case "fatal":
                return e.Fatal;
              case "critical":
                return e.Critical;
              case "log":
              default:
                return e.Log;
            }
          }
          e.fromString = n;
        })(n.Severity || (n.Severity = {}));
      !(function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed");
      })(n.Status || (n.Status = {})),
        (function (e) {
          function n(n) {
            return n >= 200 && n < 300
              ? e.Success
              : 429 === n
              ? e.RateLimit
              : n >= 400 && n < 500
              ? e.Invalid
              : n >= 500
              ? e.Failed
              : e.Unknown;
          }
          e.fromHttpCode = n;
        })(n.Status || (n.Status = {}));
    },
    90: function (e, n, t) {
      "use strict";
      function r(e) {
        e.catch(function (e) {
          console.error(e);
        });
      }
      function o(e, n, t) {
        return i.__awaiter(this, void 0, void 0, function () {
          var r;
          return i.__generator(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Promise.all(e.map(n, t))];
              case 1:
                return (
                  (r = o.sent()),
                  [
                    2,
                    e.filter(function (e, n) {
                      return r[n];
                    }),
                  ]
                );
            }
          });
        });
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = t(6);
      (n.forget = r), (n.filterAsync = o);
    },
    91: function (e, n, t) {
      "use strict";
      function r(e, n) {
        for (var t = 0, r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), t++) : t && (e.splice(r, 1), t--);
        }
        if (n) for (; t--; t) e.unshift("..");
        return e;
      }
      function o(e) {
        var n = f.exec(e);
        return n ? n.slice(1) : [];
      }
      function i() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        for (var t = "", o = !1, i = e.length - 1; i >= -1 && !o; i--) {
          var a = i >= 0 ? e[i] : "/";
          a && ((t = a + "/" + t), (o = "/" === a.charAt(0)));
        }
        return (
          (t = r(
            t.split("/").filter(function (e) {
              return !!e;
            }),
            !o
          ).join("/")),
          (o ? "/" : "") + t || "."
        );
      }
      function a(e) {
        for (var n = 0; n < e.length && "" === e[n]; n++);
        for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
        return n > t ? [] : e.slice(n, t - n + 1);
      }
      function s(e, n) {
        (e = i(e).substr(1)), (n = i(n).substr(1));
        for (var t = a(e.split("/")), r = a(n.split("/")), o = Math.min(t.length, r.length), s = o, c = 0; c < o; c++)
          if (t[c] !== r[c]) {
            s = c;
            break;
          }
        for (var l = [], c = s; c < t.length; c++) l.push("..");
        return (l = l.concat(r.slice(s))), l.join("/");
      }
      function c(e) {
        var n = l(e),
          t = "/" === e.substr(-1),
          o = r(
            e.split("/").filter(function (e) {
              return !!e;
            }),
            !n
          ).join("/");
        return o || n || (o = "."), o && t && (o += "/"), (n ? "/" : "") + o;
      }
      function l(e) {
        return "/" === e.charAt(0);
      }
      function u() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return c(e.join("/"));
      }
      function p(e) {
        var n = o(e),
          t = n[0],
          r = n[1];
        return t || r ? (r && (r = r.substr(0, r.length - 1)), t + r) : ".";
      }
      function d(e, n) {
        var t = o(e)[2];
        return n && t.substr(-1 * n.length) === n && (t = t.substr(0, t.length - n.length)), t;
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var f = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      (n.resolve = i),
        (n.relative = s),
        (n.normalize = c),
        (n.isAbsolute = l),
        (n.join = u),
        (n.dirname = p),
        (n.basename = d);
    },
    92: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(1),
        i = t(0),
        a = t(4).FormattedMessage,
        s = t(15);
      t(121);
      var c = function (e) {
        return i.createElement(
          "div",
          { className: r(["crash-container", e.className]) },
          i.createElement("img", {
            className: "",
            src: "/images/unhandled.png",
          }),
          i.createElement(
            "div",
            { className: "crash-message" },
            i.createElement("h2", null, i.createElement(a, { id: "general.error" })),
            i.createElement("p", null, i.createElement(a, { id: "general.unhandledError" })),
            e.eventId &&
              i.createElement(
                "p",
                null,
                i.createElement(a, {
                  id: "general.errorIdentifier",
                  values: { errorId: e.eventId },
                })
              ),
            i.createElement(s, { className: "", onClick: e.onBack }, i.createElement(a, { id: "general.back" }))
          )
        );
      };
      (c.propTypes = {
        className: o.string,
        eventId: o.string,
        onBack: o.func,
      }),
        (e.exports = c);
    },
    922: function (e, n, t) {
      "use strict";
      var r = t(0),
        o = t(37),
        i = t(28),
        a = function () {
          return r.createElement(
            "div",
            { className: "inner" },
            r.createElement("h2", null, "Community Blocks Beta Tester Interviews"),
            r.createElement("br", null),
            r.createElement("p", null, "Hello Scratchers!"),
            r.createElement(
              "p",
              null,
              "I am Sayamindu Dasgupta (",
              r.createElement(
                "a",
                {
                  href: "/users/sdg1/",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                "sdg1"
              ),
              " on Scratch) and I am a member of the ",
              r.createElement(
                "a",
                {
                  href: "/info/credits",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                "MIT Scratch Team"
              ),
              "."
            ),
            r.createElement(
              "p",
              null,
              "One of our projects on the MIT Scratch Team is to understand how people use Scratch, the Scratch Community Blocks, and participate in the Scratch community. To do this, we are talking to Scratchers who have been particapting the Community Blocks beta testing program directly through interviews. In the interview, we would talk for an hour, asking about your Scratch experience (by phone or a service like Skype)."
            ),
            r.createElement(
              "p",
              null,
              "Thank you for indicating in the beta invitation survey that you are willing to be interviewed. If you are still interested, please do the following steps:"
            ),
            r.createElement(
              "ul",
              null,
              r.createElement(
                "li",
                null,
                r.createElement("b", null, "Complete the consent forms:"),
                " If you are under 18 years old, please download and complete these two forms (",
                r.createElement(
                  "a",
                  { href: "/pdfs/interviews/communityblocks/assent_form.pdf" },
                  "one for you to sign"
                ),
                "  and ",
                r.createElement(
                  "a",
                  {
                    href: "/pdfs/interviews/communityblocks/consent_for_parent.pdf",
                  },
                  "another for your parent to sign"
                ),
                "). If you are 18 years old and over, please complete ",
                r.createElement(
                  "a",
                  {
                    href: "/pdfs/interviews/communityblocks/consent_for_over_18.pdf",
                  },
                  "this form"
                ),
                "."
              ),
              r.createElement(
                "li",
                null,
                r.createElement("b", null, "Send the forms:"),
                " You can send me the forms in two ways: (1) by email (",
                r.createElement(
                  "a",
                  {
                    href: "mailto:sayamindu@media.mit.edu",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  "sayamindu@media.mit.edu"
                ),
                ") by taking a picture or scanning the forms, or (2) send it through snail mail to Sayamindu Dasgupta, 77 Massachusetts Ave E14-464A, Cambridge, MA 02139"
              ),
              r.createElement(
                "li",
                null,
                r.createElement("b", null, "Schedule a time to talk:"),
                " Send me an email (",
                r.createElement(
                  "a",
                  {
                    href: "mailto:sayamindu@media.mit.edu",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  "sayamindu@media.mit.edu"
                ),
                ") with a possible time where we can talk for about an hour."
              ),
              r.createElement(
                "li",
                null,
                "If you have any questions, please do not hesitate to contact me by sending me an email at ",
                r.createElement("a", { href: "mailto:sayamindu@media.mit.edu" }, "sayamindu@media.mit.edu"),
                "."
              )
            ),
            r.createElement("p", null, "Thank you and I look forward to speaking with you. Scratch on!"),
            "Sayamindu"
          );
        };
      o(r.createElement(i, null, r.createElement(a, null)), document.getElementById("app"));
    },
    93: function (e, n, t) {
      "use strict";
      var r = t(4).FormattedMessage,
        o = t(4).injectIntl,
        i = t(4).intlShape,
        a = t(62).default,
        s = t(0),
        c = t(41),
        l = t(42),
        u = t(55);
      t(123);
      var p = function (e) {
        return s.createElement(
          c,
          null,
          s.createElement(
            a,
            { maxWidth: u.mobileIntermediate - 1 },
            s.createElement(
              "div",
              { className: "lists" },
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/about" }, s.createElement(r, { id: "general.aboutScratch" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "https://www.scratchfoundation.org/opportunities" },
                    s.createElement(r, { id: "general.jobs" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/contact-us/" }, s.createElement(r, { id: "general.contactUs" }))
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/terms_of_use" }, s.createElement(r, { id: "general.termsOfUse" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/privacy_policy" }, s.createElement(r, { id: "general.privacyPolicy" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/community_guidelines" },
                    s.createElement(r, { id: "general.guidelines" })
                  )
                )
              )
            )
          ),
          s.createElement(
            a,
            { minWidth: u.mobileIntermediate },
            s.createElement(
              "div",
              { className: "lists" },
              s.createElement(
                "dl",
                null,
                s.createElement("dt", null, s.createElement(r, { id: "general.about" })),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/about" }, s.createElement(r, { id: "general.aboutScratch" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/parents/" }, s.createElement(r, { id: "general.forParents" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/educators" }, s.createElement(r, { id: "general.forEducators" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/developers" }, s.createElement(r, { id: "general.forDevelopers" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/credits" }, s.createElement(r, { id: "general.credits" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "https://www.scratchfoundation.org/opportunities" },
                    s.createElement(r, { id: "general.jobs" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "https://www.scratchfoundation.org/media-kit/" },
                    s.createElement(r, { id: "general.press" })
                  )
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement("dt", null, s.createElement(r, { id: "general.community" })),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/community_guidelines" },
                    s.createElement(r, { id: "general.guidelines" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/discuss/" }, s.createElement(r, { id: "footer.discuss" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "https://en.scratch-wiki.info/" },
                    s.createElement(r, { id: "general.wiki" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/statistics/" }, s.createElement(r, { id: "general.statistics" }))
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement("dt", null, s.createElement(r, { id: "general.support" })),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/ideas" }, s.createElement(r, { id: "general.ideas" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/info/faq" }, s.createElement(r, { id: "general.faq" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/download" }, s.createElement(r, { id: "general.download" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/contact-us/" }, s.createElement(r, { id: "general.contactUs" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/store" }, s.createElement(r, { id: "general.scratchStore" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    {
                      href: "https://secure.donationpay.org/scratchfoundation/",
                    },
                    s.createElement(r, { id: "general.donate" })
                  )
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement("dt", null, s.createElement(r, { id: "general.legal" })),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/terms_of_use" }, s.createElement(r, { id: "general.termsOfUse" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/privacy_policy" }, s.createElement(r, { id: "general.privacyPolicy" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/DMCA" }, s.createElement(r, { id: "general.dmca" }))
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement("dt", null, s.createElement(r, { id: "footer.scratchFamily" })),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "http://scratched.gse.harvard.edu/" },
                    s.createElement(r, { id: "general.scratchEd" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "https://www.scratchjr.org/" },
                    s.createElement(r, { id: "general.scratchJr" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "http://day.scratch.mit.edu/" }, "Scratch Day")
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement("a", { href: "/conference" }, s.createElement(r, { id: "general.scratchConference" }))
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "http://www.scratchfoundation.org/" },
                    s.createElement(r, { id: "general.scratchFoundation" })
                  )
                )
              )
            )
          ),
          s.createElement(l, { locale: e.intl.locale })
        );
      };
      (p.propTypes = { intl: i.isRequired }), (e.exports = o(p));
    },
    95: function (e, n, t) {
      "use strict";
      var r = t(1),
        o = t(0),
        i = t(14).connect,
        a = t(16),
        s = t(32),
        c = t(69);
      t(35);
      var l = function (e) {
        var n = e.isOpen,
          t = e.onClose,
          r = e.onLogIn;
        return o.createElement(
          s,
          {
            className: "with-arrow",
            isOpen: n,
            key: "login-dropdown",
            onRequestClose: t,
          },
          o.createElement(c, { onLogIn: r })
        );
      };
      l.propTypes = { isOpen: r.bool, onClose: r.func, onLogIn: r.func };
      var u = function (e) {
          return { isOpen: e.navigation && e.navigation.loginOpen };
        },
        p = function (e) {
          return {
            onClose: function () {
              e(a.setLoginOpen(!1));
            },
            onLogIn: function (n, t) {
              e(a.handleLogIn(n, t));
            },
          };
        };
      e.exports = i(u, p)(l);
    },
    96: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(9),
        c = t(4).FormattedMessage,
        l = t(1),
        u = t(0),
        p = t(22),
        d = t(24),
        f = t(15),
        m = t(40),
        h = t(12);
      t(124);
      var g = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return s(t, ["handleSubmit"]), (t.state = { waiting: !1 }), t;
        }
        return (
          i(n, e),
          a(n, [
            {
              key: "handleSubmit",
              value: function (e) {
                var n = this;
                this.setState({ waiting: !0 }),
                  this.props.onLogIn(e, function () {
                    n.setState({ waiting: !1 });
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = void 0;
                return (
                  this.props.error && (e = u.createElement("div", { className: "error" }, this.props.error)),
                  u.createElement(
                    "div",
                    { className: "login" },
                    u.createElement(
                      p,
                      { onSubmit: this.handleSubmit },
                      u.createElement(
                        "label",
                        { htmlFor: "username", key: "usernameLabel" },
                        u.createElement(c, { id: "general.username" })
                      ),
                      u.createElement(d, {
                        required: !0,
                        key: "usernameInput",
                        maxLength: "30",
                        name: "username",
                        type: "text",
                      }),
                      u.createElement(
                        "label",
                        { htmlFor: "password", key: "passwordLabel" },
                        u.createElement(c, { id: "general.password" })
                      ),
                      u.createElement(d, {
                        required: !0,
                        key: "passwordInput",
                        name: "password",
                        type: "password",
                      }),
                      u.createElement(
                        h,
                        { className: "submit-row" },
                        this.state.waiting
                          ? [
                              u.createElement(
                                f,
                                {
                                  className: "submit-button white",
                                  disabled: "disabled",
                                  key: "submitButton",
                                  type: "submit",
                                },
                                u.createElement(m, {
                                  className: "spinner",
                                  color: "blue",
                                })
                              ),
                            ]
                          : [
                              u.createElement(
                                f,
                                {
                                  className: "submit-button white",
                                  key: "submitButton",
                                  type: "submit",
                                },
                                u.createElement(c, { id: "general.signIn" })
                              ),
                            ],
                        u.createElement(
                          "a",
                          {
                            href: "/accounts/password_reset/",
                            key: "passwordResetLink",
                          },
                          u.createElement(c, { id: "login.needHelp" })
                        )
                      ),
                      e
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(u.Component);
      (g.propTypes = { error: l.string, onLogIn: l.func }), (e.exports = g);
    },
    97: function (e, n, t) {
      "use strict";
      var r = t(5),
        o = t(4).FormattedMessage,
        i = t(4).injectIntl,
        a = t(1),
        s = t(0),
        c = t(52),
        l = t(32);
      t(127);
      var u = function (e) {
        var n = e.classroomId,
          t = e.isEducator,
          i = e.isOpen,
          a = e.isStudent,
          u = e.profileUrl,
          p = e.thumbnailUrl,
          d = e.username,
          f = e.onClick,
          m = e.onClickLogout,
          h = e.onClose;
        return s.createElement(
          "div",
          { className: "account-nav" },
          s.createElement(
            "a",
            {
              className: r(["ignore-react-onclickoutside", "user-info", { open: i }]),
              href: "#",
              onClick: f,
            },
            s.createElement(c, { alt: "", src: p }),
            s.createElement("span", { className: "profile-name" }, d)
          ),
          s.createElement(
            l,
            { as: "ul", className: "production", isOpen: i, onRequestClose: h },
            s.createElement(
              "li",
              null,
              s.createElement("a", { href: u }, s.createElement(o, { id: "general.profile" }))
            ),
            s.createElement(
              "li",
              null,
              s.createElement("a", { href: "/mystuff/" }, s.createElement(o, { id: "general.myStuff" }))
            ),
            t
              ? [
                  s.createElement(
                    "li",
                    { key: "my-classes-li" },
                    s.createElement(
                      "a",
                      { href: "/educators/classes/" },
                      s.createElement(o, { id: "general.myClasses" })
                    )
                  ),
                ]
              : [],
            a
              ? [
                  s.createElement(
                    "li",
                    { key: "my-class-li" },
                    s.createElement("a", { href: "/classes/" + n + "/" }, s.createElement(o, { id: "general.myClass" }))
                  ),
                ]
              : [],
            s.createElement(
              "li",
              null,
              s.createElement(
                "a",
                { href: "/accounts/settings/" },
                s.createElement(o, { id: "general.accountSettings" })
              )
            ),
            s.createElement(
              "li",
              { className: "divider" },
              s.createElement("a", { href: "#", onClick: m }, s.createElement(o, { id: "navigation.signOut" }))
            )
          )
        );
      };
      (u.propTypes = {
        classroomId: a.string,
        isEducator: a.bool,
        isOpen: a.bool,
        isStudent: a.bool,
        onClick: a.func,
        onClickLogout: a.func,
        onClose: a.func,
        profileUrl: a.string,
        thumbnailUrl: a.string,
        username: a.string,
      }),
        (e.exports = i(u));
    },
    98: function (e, n, t) {
      "use strict";
      function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function o(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
      }
      function i(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
      }
      var a = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n;
          };
        })(),
        s = t(9),
        c = t(5),
        l = t(14).connect,
        u = t(4).FormattedMessage,
        p = t(4).injectIntl,
        d = t(4).intlShape,
        f = t(1),
        m = t(0),
        h = t(142),
        g = t(16),
        v = t(135),
        y = t(15),
        b = t(22),
        w = t(24),
        x = t(95),
        _ = t(68),
        E = t(43),
        O = t(71),
        k = t(97);
      t(128);
      var S = (function (e) {
        function n(e) {
          r(this, n);
          var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return s(t, ["getProfileUrl", "handleSearchSubmit"]), (t.state = { messageCountIntervalId: -1 }), t;
        }
        return (
          i(n, e),
          a(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                if (this.props.user) {
                  var n = setInterval(function () {
                    e.props.getMessageCount(e.props.user.username);
                  }, 12e4);
                  this.setState({ messageCountIntervalId: n });
                }
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var n = this;
                if (e.user !== this.props.user)
                  if ((this.props.handleCloseAccountNav(), this.props.user)) {
                    var t = setInterval(function () {
                      n.props.getMessageCount(n.props.user.username);
                    }, 12e4);
                    this.setState({ messageCountIntervalId: t });
                  } else
                    clearInterval(this.state.messageCountIntervalId),
                      this.props.setMessageCount(0),
                      this.setState({ messageCountIntervalId: -1 });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                -1 !== this.state.messageCountIntervalId &&
                  (clearInterval(this.state.messageCountIntervalId),
                  this.props.setMessageCount(0),
                  this.setState({ messageCountIntervalId: -1 }));
              },
            },
            {
              key: "getProfileUrl",
              value: function () {
                if (this.props.user) return "/users/" + this.props.user.username + "/";
              },
            },
            {
              key: "handleSearchSubmit",
              value: function (e) {
                var n = "/search/projects";
                e.q && (n += "?q=" + encodeURIComponent(e.q)), (window.location.href = n);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.user ? "/projects/editor/" : "/projects/editor/?tutorial=getStarted";
                return m.createElement(
                  E,
                  { className: c({ "logged-in": this.props.user }) },
                  m.createElement(
                    "ul",
                    null,
                    m.createElement(
                      "li",
                      { className: "logo" },
                      m.createElement("a", {
                        "aria-label": "Scratch",
                        href: "/",
                      })
                    ),
                    m.createElement(
                      "li",
                      { className: "link create" },
                      m.createElement("a", { href: e }, m.createElement(u, { id: "general.create" }))
                    ),
                    m.createElement(
                      "li",
                      { className: "link explore" },
                      m.createElement(
                        "a",
                        { href: "/explore/projects/all" },
                        m.createElement(u, { id: "general.explore" })
                      )
                    ),
                    m.createElement(
                      "li",
                      { className: "link ideas" },
                      m.createElement("a", { href: "/ideas" }, m.createElement(u, { id: "general.ideas" }))
                    ),
                    m.createElement(
                      "li",
                      { className: "link about" },
                      m.createElement("a", { href: "/about" }, m.createElement(u, { id: "general.about" }))
                    ),
                    m.createElement(
                      "li",
                      { className: "search" },
                      m.createElement(
                        b,
                        { onSubmit: this.handleSearchSubmit },
                        m.createElement(y, {
                          className: "btn-search",
                          type: "submit",
                        }),
                        m.createElement(w, {
                          "aria-label": this.props.intl.formatMessage({
                            id: "general.search",
                          }),
                          name: "q",
                          placeholder: this.props.intl.formatMessage({
                            id: "general.search",
                          }),
                          type: "text",
                          value: this.props.searchTerm,
                        })
                      )
                    ),
                    this.props.session.status === v.Status.FETCHED
                      ? this.props.user
                        ? [
                            m.createElement(
                              "li",
                              {
                                className: "link right messages",
                                key: "messages",
                              },
                              m.createElement(
                                "a",
                                {
                                  href: "/messages/",
                                  title: this.props.intl.formatMessage({
                                    id: "general.messages",
                                  }),
                                },
                                m.createElement(
                                  "span",
                                  {
                                    className: c({
                                      "message-count": !0,
                                      show: this.props.unreadMessageCount > 0,
                                    }),
                                  },
                                  this.props.unreadMessageCount,
                                  " "
                                ),
                                m.createElement(u, { id: "general.messages" })
                              )
                            ),
                            m.createElement(
                              "li",
                              {
                                className: "link right mystuff",
                                key: "mystuff",
                              },
                              m.createElement(
                                "a",
                                {
                                  href: "/mystuff/",
                                  title: this.props.intl.formatMessage({
                                    id: "general.myStuff",
                                  }),
                                },
                                m.createElement(u, { id: "general.myStuff" })
                              )
                            ),
                            m.createElement(
                              "li",
                              {
                                className: "link right account-nav",
                                key: "account-nav",
                              },
                              m.createElement(k, {
                                classroomId: this.props.user.classroomId,
                                isEducator: this.props.permissions.educator,
                                isOpen: this.props.accountNavOpen,
                                isStudent: this.props.permissions.student,
                                profileUrl: this.getProfileUrl(),
                                thumbnailUrl: this.props.user.thumbnailUrl,
                                username: this.props.user.username,
                                onClick: this.props.handleToggleAccountNav,
                                onClickLogout: this.props.handleLogOut,
                                onClose: this.props.handleCloseAccountNav,
                              })
                            ),
                          ]
                        : [
                            m.createElement(
                              "li",
                              { className: "link right join", key: "join" },
                              m.createElement(
                                "a",
                                {
                                  className: "registrationLink",
                                  href: "#",
                                  onClick: this.props.handleClickRegistration,
                                },
                                m.createElement(u, {
                                  id: "general.joinScratch",
                                })
                              )
                            ),
                            m.createElement(
                              "li",
                              {
                                className: "link right login-item",
                                key: "login",
                              },
                              m.createElement(
                                "a",
                                {
                                  className: "ignore-react-onclickoutside",
                                  href: "#",
                                  key: "login-link",
                                  onClick: this.props.handleToggleLoginOpen,
                                },
                                m.createElement(u, { id: "general.signIn" })
                              ),
                              m.createElement(x, { key: "login-dropdown" })
                            ),
                          ]
                      : [],
                    this.props.registrationOpen &&
                      !this.props.useScratch3Registration &&
                      m.createElement(O, { key: "registration" })
                  ),
                  m.createElement(_, null)
                );
              },
            },
          ]),
          n
        );
      })(m.Component);
      (S.propTypes = {
        accountNavOpen: f.bool,
        getMessageCount: f.func,
        handleClickRegistration: f.func,
        handleCloseAccountNav: f.func,
        handleLogOut: f.func,
        handleToggleAccountNav: f.func,
        handleToggleLoginOpen: f.func,
        intl: d,
        permissions: f.shape({
          admin: f.bool,
          social: f.bool,
          educator: f.bool,
          educator_invitee: f.bool,
          student: f.bool,
        }),
        registrationOpen: f.bool,
        searchTerm: f.string,
        session: f.shape({ status: f.string }),
        setMessageCount: f.func,
        unreadMessageCount: f.oneOfType([f.number, f.string]),
        useScratch3Registration: f.bool,
        user: f.shape({
          classroomId: f.oneOfType([f.number, f.string]),
          thumbnailUrl: f.string,
          username: f.string,
        }),
      }),
        (S.defaultProps = {
          session: {},
          unreadMessageCount: 0,
          searchTerm: "",
        });
      var C = function (e) {
          return {
            accountNavOpen: e.navigation && e.navigation.accountNavOpen,
            session: e.session,
            permissions: e.permissions,
            registrationOpen: e.navigation.registrationOpen,
            searchTerm: e.navigation.searchTerm,
            unreadMessageCount: e.messageCount.messageCount,
            user: e.session && e.session.session && e.session.session.user,
            useScratch3Registration: e.navigation.useScratch3Registration,
          };
        },
        j = function (e) {
          return {
            getMessageCount: function (n) {
              e(h.getCount(n));
            },
            handleToggleAccountNav: function (n) {
              n.preventDefault(), e(g.handleToggleAccountNav());
            },
            handleCloseAccountNav: function () {
              e(g.setAccountNavOpen(!1));
            },
            handleClickRegistration: function (n) {
              n.preventDefault(), e(g.handleRegistrationRequested());
            },
            handleLogOut: function (n) {
              n.preventDefault(), e(g.handleLogOut());
            },
            handleToggleLoginOpen: function (n) {
              n.preventDefault(), e(g.toggleLoginOpen());
            },
            setMessageCount: function (n) {
              e(h.setCount(n));
            },
          };
        },
        I = function (e, n, t) {
          return Object.assign({}, e, n, t);
        },
        P = l(C, j, I)(S);
      e.exports = p(P);
    },
    99: function (e, n, t) {
      "use strict";
      var r = t(4).FormattedMessage,
        o = t(4).injectIntl,
        i = t(0);
      t(129);
      var a = function () {
        return i.createElement(
          "div",
          { id: "donor-text" },
          i.createElement(
            "div",
            null,
            i.createElement(r, {
              id: "footer.donorRecognition",
              values: {
                donorLink: i.createElement(
                  "a",
                  { href: "/credits#donors" },
                  i.createElement(r, { id: "footer.donors" })
                ),
              },
            })
          ),
          i.createElement(
            "div",
            null,
            i.createElement(r, {
              id: "footer.donorList",
              values: {
                donor1: "Massachusetts Institute of Technology",
                donor2: "National Science Foundation",
                donor3: "Siegel Family Endowment",
              },
            })
          )
        );
      };
      e.exports = o(a);
    },
  },
  [922]
);
