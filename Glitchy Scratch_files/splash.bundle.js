webpackJsonp(
  [6],
  {
    10: function(e, t, n) {
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
      function l(e) {
        return "function" == typeof e;
      }
      function c(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function u(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function d(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function p(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      function f(e) {
        return e !== e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isError = r),
        (t.isErrorEvent = o),
        (t.isDOMError = i),
        (t.isDOMException = a),
        (t.isUndefined = s),
        (t.isFunction = l),
        (t.isString = c),
        (t.isArray = u),
        (t.isPlainObject = d),
        (t.isRegExp = p),
        (t.isNaN = f);
    },
    100: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.mod-cats {\n  min-height: 15rem;\n  max-height: calc(100% - 5rem);\n  overflow: hidden; }\n\n.cats-modal-header {\n  box-shadow: inset 0 -1px 0 0 #4280d7;\n  background-color: #4d97ff; }\n\n.cats-modal-content {\n  margin: 0 auto;\n  box-shadow: none;\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 50px; }\n\n.cats-modal-content img {\n  width: 400px; }\n  @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n    .cats-modal-content img {\n      width: 100%; } }\n",
          ""
        ]);
    },
    101: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          ".crash-container {\n  /* UI Primary Colors */\n  /* #FF661A */\n  /* UI Secondary Colors */\n  /* 3.0 colors */\n  /* Using www naming convention for now, should be consistent with gui */\n  /* #CF63CF Sounds Primary */\n  /* modals */\n  /* Overlay UI Gray Colors */\n  /* Typography Colors */\n  /* Down Deep */\n  /*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n  /* Media Queries */\n  /* Width */\n  /*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n  /* Height */\n  margin: 3rem auto;\n  border: 1px solid #d9d9d9;\n  border-radius: 10px;\n  background-color: #fcfcfc;\n  width: 60%;\n  overflow: hidden;\n  text-align: center; }\n  @media only screen and (max-width: 479px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 100%; } }\n  @media only screen and (min-width: 480px) and (max-width: 767px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 480px; } }\n  @media only screen and (min-width: 768px) and (max-width: 941px) {\n    .crash-container #view {\n      text-align: center; }\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 768px; } }\n  @media only screen and (min-width: 942px) {\n    .crash-container .inner {\n      margin: 0 auto;\n      width: 942px; } }\n  .crash-container img {\n    width: 100%; }\n  .crash-container .crash-message {\n    margin: 2rem; }\n",
          ""
        ]);
    },
    1013: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.banner {\n  position: fixed;\n  top: 50px;\n  z-index: 9;\n  box-shadow: 0 1px 1px #b3b3b3;\n  background-color: #ffab1a;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  line-height: 50px; }\n  .banner,\n  .banner a {\n    color: white; }\n  .banner a {\n    text-decoration: underline; }\n  .banner .close {\n    float: right;\n    margin-top: 12.5px;\n    border-radius: 12.5px;\n    background-color: rgba(0, 0, 0, 0.25);\n    width: 25px;\n    height: 25px;\n    text-decoration: none;\n    text-shadow: none;\n    line-height: 25px;\n    color: white;\n    font-weight: normal; }\n  .banner.warning {\n    background-color: #ffab1a; }\n",
          ""
        ]);
    },
    1018: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.intro-banner {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  padding: 0;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  /* flex: column */ }\n  .intro-banner .intro-container {\n    min-height: 24rem;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    background-color: #4d97ff;\n    background-size: auto;\n    background-repeat: no-repeat;\n    background-position: right;\n    background-image: url("/svgs/intro/background-cropped.svg"); }\n  .intro-banner .intro-content {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n    margin-left: 5%;\n    min-height: 20rem; }\n  .intro-banner .intro-video-container {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-flex: 0 0 29rem;\n        -ms-flex: 0 0 29rem;\n            flex: 0 0 29rem; }\n    .intro-banner .intro-video-container .intro-video {\n      margin-right: 4rem; }\n    .intro-banner .intro-video-container .video-image {\n      position: relative;\n      cursor: pointer;\n      margin-right: 4rem; }\n      .intro-banner .intro-video-container .video-image .watch-button {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        -webkit-transform: translate(-50%, 50%);\n            -ms-transform: translate(-50%, 50%);\n                transform: translate(-50%, 50%);\n        border-radius: 4px;\n        background-color: rgba(0, 0, 0, 0.15);\n        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);\n        color: white;\n        padding: .625rem .75rem;\n        font-size: 1rem; }\n    .intro-banner .intro-video-container:after {\n      display: block;\n      position: absolute;\n      bottom: .75rem;\n      right: 10%;\n      background-image: url("/svgs/intro/hat-block.svg");\n      background-repeat: no-repeat;\n      width: 122px;\n      height: 81px;\n      content: ""; }\n  .intro-banner .intro-header {\n    margin-bottom: .75rem;\n    font-size: 2rem;\n    color: white;\n    line-height: 1.5em; }\n  .intro-banner .intro-button {\n    border-radius: 4px;\n    background-color: white;\n    color: #4d97ff;\n    padding: .625rem .75rem;\n    font-size: 1rem;\n    margin-right: .75rem; }\n    .intro-banner .intro-button.create-button:before {\n      display: inline-block;\n      margin-right: .5rem;\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: contain;\n      background-image: url("/svgs/intro/create.svg");\n      width: 1.5rem;\n      height: 1.5rem;\n      vertical-align: -.35rem;\n      content: ""; }\n    .intro-banner .intro-button.join-button:before {\n      display: inline-block;\n      margin-right: .5rem;\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: contain;\n      background-image: url("/svgs/intro/join.svg");\n      width: 1.5rem;\n      height: 1.5rem;\n      vertical-align: -.35rem;\n      content: ""; }\n  .intro-banner .intro-subnav {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: rgba(77, 151, 255, 0.1); }\n    .intro-banner .intro-subnav .subnav-button {\n      margin: .625rem .5rem;\n      padding: .5rem 1.5rem;\n      border-radius: 1.5rem; }\n\n@media only screen and (min-width: 900px) and (max-width: 1023px) {\n  .intro-banner .intro-header {\n    max-width: 22rem;\n    text-align: left; } }\n\n@media only screen and (min-width: 480px) and (max-width: 899px) {\n  .intro-banner {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .intro-banner .intro-header {\n      margin-top: 1.75rem;\n      font-size: 1.5rem; }\n    .intro-banner .intro-container {\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      background-position: bottom 32px right 50%;\n      background-size: 40rem;\n      background-image: url("/svgs/intro/background.svg"); }\n      .intro-banner .intro-container .intro-content {\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                    -ms-grid-row-align: center;\n                align-items: center;\n        min-height: 8rem;\n        margin: 0; }\n    .intro-banner .intro-video-container {\n      -webkit-flex: 0 0 24rem;\n          -ms-flex: 0 0 24rem;\n              flex: 0 0 24rem; }\n      .intro-banner .intro-video-container .video-image,\n      .intro-banner .intro-video-container .video-player {\n        margin: 0; }\n      .intro-banner .intro-video-container:after {\n        display: none; } }\n\n@media only screen and (max-width: 767px) {\n  .intro-buttons,\n  .intro-subnav {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row; } }\n\n@media only screen and (max-width: 479px) {\n  .intro-banner .intro-container {\n    background-image: none; }\n    .intro-banner .intro-container .intro-content.column {\n      margin: auto 5%;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n                  -ms-grid-row-align: center;\n              align-items: center; }\n    .intro-banner .intro-container .intro-header {\n      font-size: 1.5rem; }\n    .intro-banner .intro-container .intro-video-container {\n      display: none; } }\n',
          ""
        ]);
    },
    102: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.dropdown {\n  display: none;\n  position: absolute;\n  right: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 5px 5px;\n  background-color: #4d97ff;\n  padding: 10px;\n  min-width: 9rem;\n  max-width: 16.25rem;\n  overflow: visible;\n  color: white;\n  font-size: .8125rem;\n  font-weight: normal; }\n  .dropdown.staging {\n    background-color: #ffab1a; }\n  .dropdown.open {\n    display: block; }\n  .dropdown a:link, .dropdown a:visited, .dropdown a:active {\n    background-color: transparent;\n    color: white; }\n  .dropdown input {\n    margin-bottom: 12px;\n    width: calc(100% - 30px); }\n  .dropdown label {\n    display: block;\n    margin-bottom: 5px; }\n  .dropdown > li {\n    display: block;\n    line-height: 30px; }\n    .dropdown > li.divider {\n      margin-top: 10px;\n      border-top: 1px solid rgba(0, 0, 0, 0.1); }\n    .dropdown > li a {\n      display: block;\n      padding: 0 10px; }\n      .dropdown > li a:hover {\n        background-color: rgba(0, 0, 0, 0.1);\n        text-decoration: none; }\n  .dropdown.with-arrow {\n    margin-top: 14px;\n    border-radius: 5px;\n    overflow: visible; }\n    .dropdown.with-arrow:before {\n      display: block;\n      position: absolute;\n      top: -7px;\n      right: 10%;\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      border-left: 1px solid rgba(0, 0, 0, 0.1);\n      border-radius: 5px;\n      background-color: #4d97ff;\n      width: 14px;\n      height: 14px;\n      content: ""; }\n',
          ""
        ]);
    },
    1028: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.news ul {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.news li {\n  display: block;\n  clear: both;\n  margin: 0;\n  padding: 12px 0;\n  min-height: 53px; }\n  .news li a {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    text-decoration: none;\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .news li a:hover {\n      text-decoration: none; }\n  .news li img {\n    margin-right: 12px;\n    width: initial; }\n  .news li h4 {\n    display: block;\n    color: #4d97ff;\n    font-size: .85rem; }\n  .news li p {\n    display: block;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #575e75;\n    font-size: .85rem; }\n  .news li:nth-child(even) {\n    border-top: 1px solid #d9d9d9;\n    border-bottom: 1px solid #d9d9d9; }\n",
          ""
        ]);
    },
    1029: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.teacher-banner {\n  background-color: #9966ff;\n  min-height: 65px; }\n  .teacher-banner.title-banner {\n    transition: none;\n    margin-bottom: 0;\n    text-align: left; }\n    .teacher-banner.title-banner h3,\n    .teacher-banner.title-banner p {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      text-align: left; }\n  .teacher-banner h3 {\n    color: white; }\n  .teacher-banner .flex-row.inner {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .teacher-banner .button {\n    margin-left: 10px;\n    background-color: white;\n    padding: 13px 20px;\n    color: #4d97ff; }\n",
          ""
        ]);
    },
    103: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#footer .lists {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  #footer .lists dl {\n    display: inline-block;\n    vertical-align: top;\n    text-align: left;\n    font-size: .8rem; }\n  #footer .lists dt {\n    display: block;\n    margin-bottom: 8px; }\n  #footer .lists dd {\n    display: block;\n    margin: 5px 0;\n    line-height: 1.2rem; }\n    #footer .lists dd a {\n      font-weight: 400; }\n\n#footer .copyright {\n  display: block;\n  width: 100%;\n  text-align: center; }\n  #footer .copyright p {\n    font-size: .7rem; }\n\n#footer .language-chooser {\n  text-align: center; }\n",
          ""
        ]);
    },
    1032: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.welcome .box-content {\n  padding: 0; }\n\n.welcome .welcome-col {\n  display: inline-block;\n  margin: 10px 15px;\n  width: 150px;\n  height: 253px; }\n  .welcome .welcome-col h4 {\n    margin-top: 12px;\n    padding: 0;\n    font-weight: 200; }\n  .welcome .welcome-col > a {\n    display: block;\n    margin-top: 20px;\n    margin-bottom: 35px;\n    height: 100px; }\n  .welcome .welcome-col h4:before, .welcome .welcome-col > a:after {\n    display: block;\n    margin: 10px 0;\n    border-radius: 5px;\n    width: 100%;\n    height: 10px;\n    content: ""; }\n  .welcome .welcome-col.blue h4:before, .welcome .welcome-col.blue > a:after {\n    background-color: #4d97ff; }\n  .welcome .welcome-col.blue a {\n    color: #4d97ff; }\n  .welcome .welcome-col.green h4:before, .welcome .welcome-col.green > a:after {\n    background-color: #0fbd8c; }\n  .welcome .welcome-col.green a {\n    color: #0fbd8c; }\n  .welcome .welcome-col.pink h4:before, .welcome .welcome-col.pink > a:after {\n    background-color: #9966ff; }\n  .welcome .welcome-col.pink a {\n    color: #9966ff; }\n',
          ""
        ]);
    },
    104: function(e, t, n) {
      (t = e.exports = n(2)()), t.push([e.i, "", ""]);
    },
    105: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.login {\n  padding: 10px;\n  width: 200px;\n  line-height: 1.5rem;\n  white-space: normal;\n  color: white;\n  font-size: .8125rem; }\n  .login .button {\n    padding: .75em; }\n  .login .row {\n    margin-bottom: 1.25rem; }\n  .login .input {\n    margin-bottom: 12px;\n    width: calc(100% - 30px);\n    height: 2.25rem; }\n  .login label {\n    padding-top: 5px;\n    font-weight: bold; }\n  .login .spinner {\n    margin: 0 .8rem;\n    width: 1rem;\n    vertical-align: middle; }\n  .login .submit-row {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .login .submit-button {\n    margin-top: 5px; }\n  .login a {\n    margin: auto 0;\n    color: white; }\n    .login a:link, .login a:visited, .login a:active {\n      color: white; }\n    .login a:hover {\n      background-color: transparent; }\n  .login .error {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    background-color: #ffab1a;\n    padding: .75em 1em; }\n",
          ""
        ]);
    },
    106: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.modal-title {\n  box-sizing: border-box;\n  text-align: center;\n  color: white;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: bold; }\n',
          ""
        ]);
    },
    1067: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.hoc-banner {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  background-color: #0fbd8c;\n  background-image: url("/images/hoc/bg-pattern.png");\n  background-size: cover;\n  padding: 0;\n  height: 25rem;\n  overflow: hidden;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .hoc-banner.mod-middle-banner {\n    background-color: #cf63cf; }\n  .hoc-banner .hoc-container {\n    margin: auto;\n    width: 942px;\n    height: 25rem;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .hoc-banner .hoc-container .hoc-title-container {\n      margin: 1.5rem 0;\n      width: 100%;\n      -webkit-justify-content: space-between;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .hoc-banner .hoc-banner-images {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 942px;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .hoc-banner .hoc-banner-image {\n    border: 2px solid #0fbd8c;\n    border-radius: 16px;\n    background-color: white;\n    width: 18.75em;\n    height: 244px;\n    overflow: hidden;\n    box-sizing: border-box;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .hoc-banner .hoc-banner-image.mod-middle-image {\n      border: 2px solid #cf63cf; }\n    .hoc-banner .hoc-banner-image img {\n      width: 18.75em;\n      height: auto; }\n    .hoc-banner .hoc-banner-image .hoc-image-text {\n      margin: auto auto;\n      color: #4d97ff;\n      font-size: 1rem;\n      font-weight: bold; }\n  .hoc-banner .hoc-header {\n    color: white; }\n  .hoc-banner .hoc-header {\n    font-size: 2rem; }\n  .hoc-banner .hoc-more-activities {\n    border-radius: 10px;\n    background-color: white;\n    padding: .5rem 1rem .75rem 1rem;\n    color: #4d97ff;\n    font-size: .75rem;\n    font-weight: bold; }\n    .hoc-banner .hoc-more-activities img {\n      margin-right: .25rem;\n      width: 20px;\n      height: 20px;\n      vertical-align: text-bottom; }\n\n@media only screen and (min-width: 768px) and (max-width: 942px) {\n  .hoc-banner {\n    height: 23.5rem; }\n    .hoc-banner .hoc-container {\n      bottom: 4rem;\n      width: 768px; }\n    .hoc-banner .hoc-banner-images {\n      width: 768px; }\n    .hoc-banner .hoc-banner-image {\n      width: 18.75em; }\n  .hoc-hideable {\n    display: none; } }\n',
          ""
        ]);
    },
    1068: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#view {\n  padding: 0; }\n\n.inner.mod-splash {\n  margin-top: 20px; }\n\n.splash .splash-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .ie9 .splash .splash-header {\n    display: table;\n    margin: 0 -20px 20px -20px;\n    min-width: 100%;\n    border-spacing: 20px 0; }\n  .splash .splash-header .box {\n    display: inline-block;\n    width: calc(60% - 20px); }\n    .ie9 .splash .splash-header .box {\n      display: table-cell;\n      vertical-align: top; }\n  .splash .splash-header .news {\n    width: 40%; }\n    .splash .splash-header .news img {\n      -webkit-flex-shrink: 0;\n          -ms-flex-negative: 0;\n              flex-shrink: 0; }\n\n.splash .box {\n  margin-bottom: 20px; }\n\n.splash-admin-panel dl {\n  list-style: none; }\n  .splash-admin-panel dl dt {\n    margin: 2rem 0 1rem 0;\n    border-bottom: 1px solid #b3b3b3;\n    font-size: large;\n    font-weight: 700; }\n  .splash-admin-panel dl dd {\n    margin-left: 0; }\n\n.splash-admin-panel ul {\n  padding: 0; }\n  .splash-admin-panel ul li {\n    margin: 0;\n    list-style: none; }\n\n.modal-content.mod-confirmation {\n  width: 31.25rem; }\n\n.modal-content-iframe.mod-confirmation {\n  border-radius: 1rem;\n  width: 31.25rem;\n  min-height: 20.625rem; }\n\n.activity-ul {\n  margin: 0;\n  padding: 0; }\n\n.activity-li {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: .75rem 0;\n  list-style: none;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-row.mod-social-message {\n  line-height: 1.25rem;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.social-message {\n  border: 0;\n  padding: 0; }\n\n.activity-img {\n  padding-right: .825rem;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: middle; }\n\n.social-message-content {\n  font-size: .9rem; }\n\n.social-message-date {\n  color: #b3b3b3;\n  font-size: .65rem; }\n\n@media only screen and (max-width: 479px) {\n  .splash .splash-header {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .splash .splash-header .box {\n      width: 18.75em; }\n  .modal-content.mod-confirmation {\n    width: 100%;\n    overflow: scroll; }\n  .modal-content-iframe.mod-confirmation {\n    border-radius: 0; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .splash .splash-header {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .splash .splash-header .box {\n      width: 28.75em; }\n  .modal-content.mod-confirmation {\n    width: 100%;\n    overflow: scroll; }\n  .modal-content-iframe.mod-confirmation {\n    border-radius: 0;\n    width: 639px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  .splash .splash-header {\n    margin: 0 auto;\n    width: 38.75em; } }\n",
          ""
        ]);
    },
    107: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.overflow-hidden {\n  /* to avoid double scroll bars this\n    gets added to body while modal is open */\n  overflow: hidden; }\n\n.modal-content {\n  position: relative;\n  margin: 3.75rem auto;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.15);\n  background-color: white;\n  padding: 0;\n  width: 48.75rem; }\n  .modal-content:focus {\n    outline: none; }\n  @media only screen and (max-width: 941px) {\n    .modal-content {\n      margin-top: 0;\n      width: 100%;\n      overflow: auto; } }\n  @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n    .modal-content {\n      border-radius: 0;\n      box-shadow: none;\n      height: 100%; } }\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 510;\n  background-color: rgba(77, 151, 255, 0.7); }\n\n.modal-content-close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  text-align: center;\n  line-height: 2rem; }\n\n.modal-content-close-img {\n  padding-top: 0.5rem; }\n\n/* Close button, Submit button, etc. */\n.action-buttons {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1.125rem .8275rem .9375rem .8275rem;\n  line-height: 1.5rem;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n  @media only screen and (max-width: 941px) {\n    .action-buttons {\n      -webkit-justify-content: center !important;\n          -ms-flex-pack: center !important;\n              justify-content: center !important;\n      -webkit-flex-direction: row !important;\n          -ms-flex-direction: row !important;\n              flex-direction: row !important; } }\n\n/* setting overall modal to contain overflow looks good, but isn't\ncompatible with elements (like validation popups) that need to bleed\npast modal boundary. This class can be used to force modal button\nrow to appear to contain overflow. */\n.action-buttons-overflow-fix {\n  margin-bottom: .9375rem; }\n\n/* For action button row where left/right margin is handled by parent element */\n.action-buttons.action-buttons-no-inset {\n  margin-left: 0;\n  margin-right: 0; }\n\n.action-button {\n  margin: 0 0 0 .54625rem;\n  border-radius: .25rem;\n  padding: 6px 1.25rem 14px 1.25rem;\n  height: 36px; }\n\n.action-button.close-button {\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.action-button-text {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.action-button.disabled {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.error-text {\n  display: block;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #ffab1a;\n  padding: 1rem;\n  min-height: 1rem;\n  overflow: visible;\n  color: white; }\n\n.modal-sizes * {\n  box-sizing: border-box; }\n\n.modal-sizes {\n  margin: 100px auto;\n  outline: none;\n  padding: 0;\n  max-width: 36.25rem;\n  /* 580px; */\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  @media only screen and (min-width: 480px) and (max-width: 767px), only screen and (min-height: 480px) and (max-height: 767px) {\n    .modal-sizes {\n      margin: 40px auto; } }\n  @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n    .modal-sizes {\n      margin: 0 auto;\n      width: auto; } }\n  .modal-sizes .modal-header {\n    padding-top: .75rem;\n    width: 100%;\n    height: 3rem; }\n    @media only screen and (max-width: 479px), only screen and (max-height: 479px) {\n      .modal-sizes .modal-header {\n        border-radius: 0; } }\n  .modal-sizes .modal-content {\n    font-size: .875rem; }\n",
          ""
        ]);
    },
    108: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.modal-content-iframe {\n  border: 0; }\n",
          ""
        ]);
    },
    109: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.account-nav .user-info {\n  display: inline-block;\n  padding: 14px 15px 4px 15px;\n  max-width: 260px;\n  height: 33px;\n  overflow: hidden;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: white;\n  font-size: .8125rem;\n  font-weight: normal; }\n  .account-nav .user-info .avatar {\n    margin-right: 10px;\n    border-radius: 3px;\n    width: 24px;\n    height: 24px;\n    vertical-align: middle; }\n  .account-nav .user-info:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .account-nav .user-info.open {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .account-nav .user-info:after {\n    display: inline-block;\n    margin-left: 8px;\n    background-image: url("/images/dropdown.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50%;\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n    content: " "; }\n\n.account-nav .dropdown {\n  top: 50px;\n  padding: 0;\n  padding-top: 5px;\n  width: 100%;\n  box-sizing: border-box; }\n\n@media only screen and (max-width: 479px) {\n  .account-nav {\n    margin-left: 0; }\n    .account-nav .user-info .avatar {\n      margin-right: 0; }\n    .account-nav .user-info:after {\n      display: none; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .account-nav {\n    margin-left: 0; }\n    .account-nav .user-info .avatar {\n      margin-right: 0; }\n    .account-nav .user-info:after {\n      display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  .account-nav {\n    margin-left: 0; } }\n',
          ""
        ]);
    },
    11: function(e, t, n) {
      "use strict";
      (function(e, r) {
        function o(e, t) {
          return e.require(t);
        }
        function i() {
          return (
            "[object process]" ===
            Object.prototype.toString.call(void 0 !== e ? e : 0)
          );
        }
        function a() {
          return i()
            ? r
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {};
        }
        function s() {
          var e = a(),
            t = e.crypto || e.msCrypto;
          if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n),
              (n[3] = (4095 & n[3]) | 16384),
              (n[4] = (16383 & n[4]) | 32768);
            var r = function(e) {
              for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
              return t;
            };
            return (
              r(n[0]) +
              r(n[1]) +
              r(n[2]) +
              r(n[3]) +
              r(n[4]) +
              r(n[5]) +
              r(n[6]) +
              r(n[7])
            );
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(
            e
          ) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }
        function l(e) {
          for (
            var t, n = e, r = [], o = 0, i = 0, a = " > ".length;
            n &&
            o++ < 5 &&
            !(
              "html" === (t = c(n)) ||
              (o > 1 && i + r.length * a + t.length >= 80)
            );

          )
            r.push(t), (i += t.length), (n = n.parentNode);
          return r.reverse().join(" > ");
        }
        function c(e) {
          var t,
            n,
            r,
            o,
            i,
            a = [];
          if (!e || !e.tagName) return "";
          if (
            (a.push(e.tagName.toLowerCase()),
            e.id && a.push("#" + e.id),
            (t = e.className) && f.isString(t))
          )
            for (n = t.split(/\s+/), i = 0; i < n.length; i++)
              a.push("." + n[i]);
          var s = ["type", "name", "title", "alt"];
          for (i = 0; i < s.length; i++)
            (r = s[i]),
              (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
          return a.join("");
        }
        function u(e) {
          if (!e) return {};
          var t = e.match(
            /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
          );
          if (!t) return {};
          var n = t[6] || "",
            r = t[8] || "";
          return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
          };
        }
        function d(e) {
          if (e.message) return e.message;
          if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value
              ? t.type + ": " + t.value
              : t.type || t.value || e.event_id || "<unknown>";
          }
          return e.event_id || "<unknown>";
        }
        function p(e) {
          var t = a(),
            n = ["debug", "info", "warn", "error", "log"];
          if (!("console" in t)) return e();
          var r = t.console,
            o = {};
          n.forEach(function(e) {
            e in t.console &&
              r[e].__sentry__ &&
              ((o[e] = r[e].__sentry_wrapped__),
              (r[e] = r[e].__sentry_original__));
          });
          var i = e();
          return (
            Object.keys(o).forEach(function(e) {
              r[e] = o[e];
            }),
            i
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var f = n(10);
        (t.dynamicRequire = o),
          (t.isNodeEnv = i),
          (t.getGlobalObject = a),
          (t.uuid4 = s),
          (t.htmlTreeAsString = l),
          (t.htmlElementAsString = c),
          (t.parseUrl = u),
          (t.getEventDescription = d),
          (t.consoleSandbox = p);
      }.call(t, n(25), n(22)));
    },
    110: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#navigation.staging .messages .message-count {\n  display: none; }\n  #navigation.staging .messages .message-count.show {\n    background-color: #4d97ff; }\n\n#navigation .logo {\n  margin-right: 10px; }\n  #navigation .logo a {\n    display: block;\n    transition: .15s ease all;\n    margin: 0 6px 0 0;\n    border: 0;\n    background-image: url("/images/logo_sm.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 95%;\n    width: 81px;\n    height: 50px; }\n    #navigation .logo a:hover {\n      transition: .15s ease all;\n      background-size: 100%; }\n\n#navigation .inner > ul > li.search {\n  margin: 0 20px;\n  border-right: 0;\n  color: white;\n  -webkit-flex-grow: 3;\n      -ms-flex-positive: 3;\n          flex-grow: 3; }\n  .ie9 #navigation .inner > ul > li.search {\n    width: 100%; }\n  #navigation .inner > ul > li.search .form {\n    margin: 0; }\n  #navigation .inner > ul > li.search .row .help-block {\n    display: none; }\n  #navigation .inner > ul > li.search .input,\n  #navigation .inner > ul > li.search .button {\n    display: inline-block;\n    margin-top: 5px;\n    outline: none;\n    border: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    height: 14px; }\n    #navigation .inner > ul > li.search .input[type=text],\n    #navigation .inner > ul > li.search .button[type=text] {\n      transition: .15s ease background-color;\n      padding: 0;\n      padding-right: 10px;\n      padding-left: 40px;\n      width: calc(100% - 50px);\n      height: 40px;\n      color: white;\n      font-size: .85em; }\n      #navigation .inner > ul > li.search .input[type=text]::-webkit-input-placeholder,\n      #navigation .inner > ul > li.search .button[type=text]::-webkit-input-placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]:-ms-input-placeholder,\n      #navigation .inner > ul > li.search .button[type=text]:-ms-input-placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]::placeholder,\n      #navigation .inner > ul > li.search .button[type=text]::placeholder {\n        color: rgba(255, 255, 255, 0.75); }\n      #navigation .inner > ul > li.search .input[type=text]:focus,\n      #navigation .inner > ul > li.search .button[type=text]:focus {\n        transition: .15s ease background-color;\n        background-color: rgba(0, 0, 0, 0.2); }\n      .ie9 #navigation .inner > ul > li.search .input[type=text], .ie9\n      #navigation .inner > ul > li.search .button[type=text] {\n        width: 70px; }\n  #navigation .inner > ul > li.search .btn-search {\n    position: absolute;\n    box-shadow: none;\n    background-color: transparent;\n    background-image: url("/images/nav-search-glass.png");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 14px 14px;\n    width: 40px;\n    height: 40px; }\n    #navigation .inner > ul > li.search .btn-search:hover {\n      box-shadow: none; }\n\n#navigation .messages > a,\n#navigation .mystuff > a {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 45%;\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 30px;\n  overflow: hidden;\n  text-indent: 50px;\n  white-space: nowrap; }\n  #navigation .messages > a:hover,\n  #navigation .mystuff > a:hover {\n    background-size: 50%; }\n\n#navigation .messages > a {\n  background-image: url("/images/nav-notifications.png"); }\n\n#navigation .messages .message-count {\n  display: none; }\n  #navigation .messages .message-count.show {\n    display: block;\n    position: absolute;\n    top: .5rem;\n    right: .25rem;\n    border-radius: 1rem;\n    background-color: #ffab1a;\n    padding: 0 .25rem;\n    text-indent: 0;\n    line-height: 1rem;\n    color: white;\n    font-size: .7rem;\n    font-weight: bold; }\n\n#navigation .mystuff > a {\n  background-image: url("/images/mystuff.png"); }\n\n@media only screen and (max-width: 479px) {\n  #navigation .inner {\n    width: 18.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .create,\n    #navigation .inner .discuss,\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .help,\n    #navigation .inner .mystuff,\n    #navigation .inner .profile-name {\n      display: none; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #navigation .inner {\n    width: 28.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .discuss,\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .mystuff,\n    #navigation .inner .profile-name {\n      display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #navigation .inner {\n    width: 38.75em; }\n    #navigation .inner > ul > li.login-item {\n      margin-left: 0; }\n    #navigation .inner .explore,\n    #navigation .inner .search,\n    #navigation .inner .mystuff {\n      display: none; } }\n',
          ""
        ]);
    },
    111: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n#donor {\n  color: #575e75;\n  font-size: .875rem;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  padding-bottom: 2.5rem;\n  padding-top: 1rem; }\n  #donor #donor-text {\n    text-align: center;\n    width: 58.75em;\n    margin: 0 auto; }\n\n@media only screen and (min-width: 768px) and (max-width: 942px) {\n  #donor #donor-text {\n    width: 53.75em; } }\n\n@media only screen and (min-width: 480px) and (max-width: 768px) {\n  #donor #donor-text {\n    width: 28.75em; } }\n\n@media only screen and (max-width: 480px) {\n  #donor #donor-text {\n    width: 18.75em; } }\n",
          ""
        ]);
    },
    112: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.modal-content.mod-registration {\n  width: 38.125rem;\n  overflow: hidden; }\n\n.modal-content-iframe.mod-registration {\n  width: 38.125rem;\n  min-height: 27.375rem; }\n\n.modal-content.recaptcha-open {\n  min-height: 500px; }\n\n.modal-content-iframe.recaptcha-open {\n  min-height: 500px; }\n\n@media only screen and (max-width: 941px) {\n  .modal-content.mod-registration {\n    width: 100%;\n    overflow: scroll; }\n  .modal-content-iframe.mod-registration {\n    height: 27.375rem; } }\n",
          ""
        ]);
    },
    113: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.warning-banner {\n  background-color: #ff661a;\n  margin-bottom: 0; }\n  .warning-banner .warning-banner-container {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n",
          ""
        ]);
    },
    114: function(e, t, n) {
      var r; /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
      !(function() {
        "use strict";
        var o = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          i = {
            canUseDOM: o,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen
          };
        void 0 !==
          (r = function() {
            return i;
          }.call(t, n, t, e)) && (e.exports = r);
      })();
    },
    115: function(e, t, n) {
      "use strict";
      function r() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function o(e) {
        function t(t) {
          var n = this.constructor.getDerivedStateFromProps(e, t);
          return null !== n && void 0 !== n ? n : null;
        }
        this.setState(t.bind(this));
      }
      function i(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      function a(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" != typeof e.getDerivedStateFromProps &&
          "function" != typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var n = null,
          a = null,
          s = null;
        if (
          ("function" == typeof t.componentWillMount
            ? (n = "componentWillMount")
            : "function" == typeof t.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" == typeof t.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof t.componentWillUpdate
            ? (s = "componentWillUpdate")
            : "function" == typeof t.UNSAFE_componentWillUpdate &&
              (s = "UNSAFE_componentWillUpdate"),
          null !== n || null !== a || null !== s)
        ) {
          var l = e.displayName || e.name,
            c =
              "function" == typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              l +
              " uses " +
              c +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== s ? "\n  " + s : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" == typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = r), (t.componentWillReceiveProps = o)),
          "function" == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = i;
          var u = t.componentDidUpdate;
          t.componentDidUpdate = function(e, t, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            u.call(this, e, t, r);
          };
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n.d(t, "polyfill", function() {
          return a;
        }),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    },
    116: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function s(e) {
        return e();
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bodyOpenClassName = t.portalClassName = void 0);
      var l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        c = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        u = n(0),
        d = r(u),
        p = n(39),
        f = r(p),
        h = n(1),
        m = r(h),
        g = n(117),
        A = r(g),
        v = n(32),
        y = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(v),
        b = n(21),
        w = r(b),
        x = n(115),
        E = (t.portalClassName = "ReactModalPortal"),
        k = (t.bodyOpenClassName = "ReactModal__Body--open"),
        C = void 0 !== f.default.createPortal,
        S = function() {
          return C
            ? f.default.createPortal
            : f.default.unstable_renderSubtreeIntoContainer;
        },
        _ = (function(e) {
          function t() {
            var e, n, r, a;
            o(this, t);
            for (var c = arguments.length, u = Array(c), p = 0; p < c; p++)
              u[p] = arguments[p];
            return (
              (n = r = i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(u)
                )
              )),
              (r.removePortal = function() {
                !C && f.default.unmountComponentAtNode(r.node),
                  s(r.props.parentSelector).removeChild(r.node);
              }),
              (r.portalRef = function(e) {
                r.portal = e;
              }),
              (r.renderPortal = function(e) {
                var n = S(),
                  o = n(
                    r,
                    d.default.createElement(
                      A.default,
                      l({ defaultStyles: t.defaultStyles }, e)
                    ),
                    r.node
                  );
                r.portalRef(o);
              }),
              (a = n),
              i(r, a)
            );
          }
          return (
            a(t, e),
            c(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function() {
                    if (b.canUseDOM) {
                      C || (this.node = document.createElement("div")),
                        (this.node.className = this.props.portalClassName);
                      s(this.props.parentSelector).appendChild(this.node),
                        !C && this.renderPortal(this.props);
                    }
                  }
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function(e) {
                    return {
                      prevParent: s(e.parentSelector),
                      nextParent: s(this.props.parentSelector)
                    };
                  }
                },
                {
                  key: "componentDidUpdate",
                  value: function(e, t, n) {
                    if (b.canUseDOM) {
                      var r = this.props,
                        o = r.isOpen,
                        i = r.portalClassName;
                      e.portalClassName !== i && (this.node.className = i);
                      var a = n.prevParent,
                        s = n.nextParent;
                      s !== a &&
                        (a.removeChild(this.node), s.appendChild(this.node)),
                        (e.isOpen || o) && !C && this.renderPortal(this.props);
                    }
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    if (b.canUseDOM && this.node && this.portal) {
                      var e = this.portal.state,
                        t = Date.now(),
                        n =
                          e.isOpen &&
                          this.props.closeTimeoutMS &&
                          (e.closesAt || t + this.props.closeTimeoutMS);
                      n
                        ? (e.beforeClose || this.portal.closeWithTimeout(),
                          setTimeout(this.removePortal, n - t))
                        : this.removePortal();
                    }
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return b.canUseDOM && C
                      ? (!this.node &&
                          C &&
                          (this.node = document.createElement("div")),
                        S()(
                          d.default.createElement(
                            A.default,
                            l(
                              {
                                ref: this.portalRef,
                                defaultStyles: t.defaultStyles
                              },
                              this.props
                            )
                          ),
                          this.node
                        ))
                      : null;
                  }
                }
              ],
              [
                {
                  key: "setAppElement",
                  value: function(e) {
                    y.setElement(e);
                  }
                }
              ]
            ),
            t
          );
        })(u.Component);
      (_.propTypes = {
        isOpen: m.default.bool.isRequired,
        style: m.default.shape({
          content: m.default.object,
          overlay: m.default.object
        }),
        portalClassName: m.default.string,
        bodyOpenClassName: m.default.string,
        htmlOpenClassName: m.default.string,
        className: m.default.oneOfType([
          m.default.string,
          m.default.shape({
            base: m.default.string.isRequired,
            afterOpen: m.default.string.isRequired,
            beforeClose: m.default.string.isRequired
          })
        ]),
        overlayClassName: m.default.oneOfType([
          m.default.string,
          m.default.shape({
            base: m.default.string.isRequired,
            afterOpen: m.default.string.isRequired,
            beforeClose: m.default.string.isRequired
          })
        ]),
        appElement: m.default.instanceOf(w.default),
        onAfterOpen: m.default.func,
        onRequestClose: m.default.func,
        closeTimeoutMS: m.default.number,
        ariaHideApp: m.default.bool,
        shouldFocusAfterRender: m.default.bool,
        shouldCloseOnOverlayClick: m.default.bool,
        shouldReturnFocusAfterClose: m.default.bool,
        parentSelector: m.default.func,
        aria: m.default.object,
        data: m.default.object,
        role: m.default.string,
        contentLabel: m.default.string,
        shouldCloseOnEsc: m.default.bool,
        overlayRef: m.default.func,
        contentRef: m.default.func
      }),
        (_.defaultProps = {
          isOpen: !1,
          portalClassName: E,
          bodyOpenClassName: k,
          role: "dialog",
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          parentSelector: function() {
            return document.body;
          }
        }),
        (_.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
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
            padding: "20px"
          }
        }),
        (0, x.polyfill)(_),
        (t.default = _);
    },
    117: function(e, t, n) {
      "use strict";
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        u = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        d = n(0),
        p = o(d),
        f = n(1),
        h = o(f),
        m = n(119),
        g = r(m),
        A = n(120),
        v = o(A),
        y = n(32),
        b = r(y),
        w = n(118),
        x = r(w),
        E = n(21),
        k = o(E),
        C = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
        S = 9,
        _ = 27,
        O = 0,
        I = (function(e) {
          function t(e) {
            i(this, t);
            var n = a(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (
              (n.setOverlayRef = function(e) {
                (n.overlay = e), n.props.overlayRef && n.props.overlayRef(e);
              }),
              (n.setContentRef = function(e) {
                (n.content = e), n.props.contentRef && n.props.contentRef(e);
              }),
              (n.afterClose = function() {
                var e = n.props,
                  t = e.appElement,
                  r = e.ariaHideApp,
                  o = e.htmlOpenClassName,
                  i = e.bodyOpenClassName;
                i && x.remove(document.body, i),
                  o && x.remove(document.getElementsByTagName("html")[0], o),
                  r && O > 0 && 0 === (O -= 1) && b.show(t),
                  n.props.shouldFocusAfterRender &&
                    (n.props.shouldReturnFocusAfterClose
                      ? (g.returnFocus(), g.teardownScopedFocus())
                      : g.popWithoutFocus()),
                  n.props.onAfterClose && n.props.onAfterClose();
              }),
              (n.open = function() {
                n.beforeOpen(),
                  n.state.afterOpen && n.state.beforeClose
                    ? (clearTimeout(n.closeTimer),
                      n.setState({ beforeClose: !1 }))
                    : (n.props.shouldFocusAfterRender &&
                        (g.setupScopedFocus(n.node), g.markForFocusLater()),
                      n.setState({ isOpen: !0 }, function() {
                        n.setState({ afterOpen: !0 }),
                          n.props.isOpen &&
                            n.props.onAfterOpen &&
                            n.props.onAfterOpen({
                              overlayEl: n.overlay,
                              contentEl: n.content
                            });
                      }));
              }),
              (n.close = function() {
                n.props.closeTimeoutMS > 0
                  ? n.closeWithTimeout()
                  : n.closeWithoutTimeout();
              }),
              (n.focusContent = function() {
                return n.content && !n.contentHasFocus() && n.content.focus();
              }),
              (n.closeWithTimeout = function() {
                var e = Date.now() + n.props.closeTimeoutMS;
                n.setState({ beforeClose: !0, closesAt: e }, function() {
                  n.closeTimer = setTimeout(
                    n.closeWithoutTimeout,
                    n.state.closesAt - Date.now()
                  );
                });
              }),
              (n.closeWithoutTimeout = function() {
                n.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null
                  },
                  n.afterClose
                );
              }),
              (n.handleKeyDown = function(e) {
                e.keyCode === S && (0, v.default)(n.content, e),
                  n.props.shouldCloseOnEsc &&
                    e.keyCode === _ &&
                    (e.stopPropagation(), n.requestClose(e));
              }),
              (n.handleOverlayOnClick = function(e) {
                null === n.shouldClose && (n.shouldClose = !0),
                  n.shouldClose &&
                    n.props.shouldCloseOnOverlayClick &&
                    (n.ownerHandlesClose()
                      ? n.requestClose(e)
                      : n.focusContent()),
                  (n.shouldClose = null);
              }),
              (n.handleContentOnMouseUp = function() {
                n.shouldClose = !1;
              }),
              (n.handleOverlayOnMouseDown = function(e) {
                n.props.shouldCloseOnOverlayClick ||
                  e.target != n.overlay ||
                  e.preventDefault();
              }),
              (n.handleContentOnClick = function() {
                n.shouldClose = !1;
              }),
              (n.handleContentOnMouseDown = function() {
                n.shouldClose = !1;
              }),
              (n.requestClose = function(e) {
                return n.ownerHandlesClose() && n.props.onRequestClose(e);
              }),
              (n.ownerHandlesClose = function() {
                return n.props.onRequestClose;
              }),
              (n.shouldBeClosed = function() {
                return !n.state.isOpen && !n.state.beforeClose;
              }),
              (n.contentHasFocus = function() {
                return (
                  document.activeElement === n.content ||
                  n.content.contains(document.activeElement)
                );
              }),
              (n.buildClassName = function(e, t) {
                var r =
                    "object" === (void 0 === t ? "undefined" : c(t))
                      ? t
                      : {
                          base: C[e],
                          afterOpen: C[e] + "--after-open",
                          beforeClose: C[e] + "--before-close"
                        },
                  o = r.base;
                return (
                  n.state.afterOpen && (o = o + " " + r.afterOpen),
                  n.state.beforeClose && (o = o + " " + r.beforeClose),
                  "string" == typeof t && t ? o + " " + t : o
                );
              }),
              (n.attributesFromObject = function(e, t) {
                return Object.keys(t).reduce(function(n, r) {
                  return (n[e + "-" + r] = t[r]), n;
                }, {});
              }),
              (n.state = { afterOpen: !1, beforeClose: !1 }),
              (n.shouldClose = null),
              (n.moveFromContentToOverlay = null),
              n
            );
          }
          return (
            s(t, e),
            u(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.isOpen && this.open();
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e, t) {
                  this.props.isOpen && !e.isOpen
                    ? this.open()
                    : !this.props.isOpen && e.isOpen && this.close(),
                    this.props.shouldFocusAfterRender &&
                      this.state.isOpen &&
                      !t.isOpen &&
                      this.focusContent();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.state.isOpen && this.afterClose(),
                    clearTimeout(this.closeTimer);
                }
              },
              {
                key: "beforeOpen",
                value: function() {
                  var e = this.props,
                    t = e.appElement,
                    n = e.ariaHideApp,
                    r = e.htmlOpenClassName,
                    o = e.bodyOpenClassName;
                  o && x.add(document.body, o),
                    r && x.add(document.getElementsByTagName("html")[0], r),
                    n && ((O += 1), b.hide(t));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.className,
                    r = e.overlayClassName,
                    o = e.defaultStyles,
                    i = n ? {} : o.content,
                    a = r ? {} : o.overlay;
                  return this.shouldBeClosed()
                    ? null
                    : p.default.createElement(
                        "div",
                        {
                          ref: this.setOverlayRef,
                          className: this.buildClassName("overlay", r),
                          style: l({}, a, this.props.style.overlay),
                          onClick: this.handleOverlayOnClick,
                          onMouseDown: this.handleOverlayOnMouseDown
                        },
                        p.default.createElement(
                          "div",
                          l(
                            {
                              id: t,
                              ref: this.setContentRef,
                              style: l({}, i, this.props.style.content),
                              className: this.buildClassName("content", n),
                              tabIndex: "-1",
                              onKeyDown: this.handleKeyDown,
                              onMouseDown: this.handleContentOnMouseDown,
                              onMouseUp: this.handleContentOnMouseUp,
                              onClick: this.handleContentOnClick,
                              role: this.props.role,
                              "aria-label": this.props.contentLabel
                            },
                            this.attributesFromObject(
                              "aria",
                              this.props.aria || {}
                            ),
                            this.attributesFromObject(
                              "data",
                              this.props.data || {}
                            ),
                            { "data-testid": this.props.testId }
                          ),
                          this.props.children
                        )
                      );
                }
              }
            ]),
            t
          );
        })(d.Component);
      (I.defaultProps = {
        style: { overlay: {}, content: {} },
        defaultStyles: {}
      }),
        (I.propTypes = {
          isOpen: h.default.bool.isRequired,
          defaultStyles: h.default.shape({
            content: h.default.object,
            overlay: h.default.object
          }),
          style: h.default.shape({
            content: h.default.object,
            overlay: h.default.object
          }),
          className: h.default.oneOfType([h.default.string, h.default.object]),
          overlayClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
          ]),
          bodyOpenClassName: h.default.string,
          htmlOpenClassName: h.default.string,
          ariaHideApp: h.default.bool,
          appElement: h.default.instanceOf(k.default),
          onAfterOpen: h.default.func,
          onAfterClose: h.default.func,
          onRequestClose: h.default.func,
          closeTimeoutMS: h.default.number,
          shouldFocusAfterRender: h.default.bool,
          shouldCloseOnOverlayClick: h.default.bool,
          shouldReturnFocusAfterClose: h.default.bool,
          role: h.default.string,
          contentLabel: h.default.string,
          aria: h.default.object,
          data: h.default.object,
          children: h.default.node,
          shouldCloseOnEsc: h.default.bool,
          overlayRef: h.default.func,
          contentRef: h.default.func,
          id: h.default.string,
          testId: h.default.string
        }),
        (t.default = I),
        (e.exports = t.default);
    },
    118: function(e, t, n) {
      "use strict";
      function r() {}
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dumpClassLists = r);
      var o = {},
        i = {},
        a = function(e, t) {
          return e[t] || (e[t] = 0), (e[t] += 1), t;
        },
        s = function(e, t) {
          return e[t] && (e[t] -= 1), t;
        },
        l = function(e, t, n) {
          n.forEach(function(n) {
            a(t, n), e.add(n);
          });
        },
        c = function(e, t, n) {
          n.forEach(function(n) {
            s(t, n), 0 === t[n] && e.remove(n);
          });
        };
      (t.add = function(e, t) {
        return l(
          e.classList,
          "html" == e.nodeName.toLowerCase() ? o : i,
          t.split(" ")
        );
      }),
        (t.remove = function(e, t) {
          return c(
            e.classList,
            "html" == e.nodeName.toLowerCase() ? o : i,
            t.split(" ")
          );
        });
    },
    119: function(e, t, n) {
      "use strict";
      function r() {
        h = !0;
      }
      function o() {
        if (h) {
          if (((h = !1), !f)) return;
          setTimeout(function() {
            if (!f.contains(document.activeElement)) {
              ((0, d.default)(f)[0] || f).focus();
            }
          }, 0);
        }
      }
      function i() {
        p.push(document.activeElement);
      }
      function a() {
        var e = null;
        try {
          return void (0 !== p.length && ((e = p.pop()), e.focus()));
        } catch (t) {
          console.warn(
            [
              "You tried to return focus to",
              e,
              "but it is not in the DOM anymore"
            ].join(" ")
          );
        }
      }
      function s() {
        p.length > 0 && p.pop();
      }
      function l(e) {
        (f = e),
          window.addEventListener
            ? (window.addEventListener("blur", r, !1),
              document.addEventListener("focus", o, !0))
            : (window.attachEvent("onBlur", r),
              document.attachEvent("onFocus", o));
      }
      function c() {
        (f = null),
          window.addEventListener
            ? (window.removeEventListener("blur", r),
              document.removeEventListener("focus", o))
            : (window.detachEvent("onBlur", r),
              document.detachEvent("onFocus", o));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleBlur = r),
        (t.handleFocus = o),
        (t.markForFocusLater = i),
        (t.returnFocus = a),
        (t.popWithoutFocus = s),
        (t.setupScopedFocus = l),
        (t.teardownScopedFocus = c);
      var u = n(33),
        d = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        p = [],
        f = null,
        h = !1;
    },
    12: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(47);
      var a = function(e) {
        return i.createElement(
          e.as,
          { className: r("flex-row", e.className) },
          e.children
        );
      };
      (a.propTypes = { children: o.node, className: o.string }),
        (a.defaultProps = { as: "div" }),
        (e.exports = a);
    },
    120: function(e, t, n) {
      "use strict";
      function r(e, t) {
        var n = (0, i.default)(e);
        if (!n.length) return void t.preventDefault();
        var r = t.shiftKey,
          o = n[0],
          a = n[n.length - 1];
        if (e === document.activeElement) {
          if (!r) return;
          s = a;
        }
        var s;
        if (
          (a !== document.activeElement || r || (s = o),
          o === document.activeElement && r && (s = a),
          s)
        )
          return t.preventDefault(), void s.focus();
        var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        if (
          null != l &&
          "Chrome" != l[1] &&
          null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
        ) {
          var c = n.indexOf(document.activeElement);
          if ((c > -1 && (c += r ? -1 : 1), void 0 === n[c]))
            return t.preventDefault(), (s = r ? a : o), void s.focus();
          t.preventDefault(), n[c].focus();
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
      var o = n(33),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      e.exports = t.default;
    },
    121: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(116),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      (t.default = o.default), (e.exports = t.default);
    },
    122: function(e, t, n) {
      var r = n(100);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    123: function(e, t, n) {
      var r = n(101);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    124: function(e, t, n) {
      var r = n(102);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    125: function(e, t, n) {
      var r = n(103);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    126: function(e, t, n) {
      var r = n(105);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    127: function(e, t, n) {
      var r = n(106);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    128: function(e, t, n) {
      var r = n(107);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    129: function(e, t, n) {
      var r = n(108);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    130: function(e, t, n) {
      var r = n(109);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    131: function(e, t, n) {
      var r = n(110);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    132: function(e, t, n) {
      var r = n(111);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    133: function(e, t, n) {
      var r = n(113);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    134: function(e, t, n) {
      "use strict";
      var r = function() {};
      e.exports = r;
    },
    1365: function(e, t, n) {
      var r = n(1013);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1368: function(e, t, n) {
      var r = n(1018);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1376: function(e, t, n) {
      var r = n(1028);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1377: function(e, t, n) {
      var r = n(1029);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1380: function(e, t, n) {
      var r = n(1032);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1389: function(e, t, n) {
      var r = n(1068);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    1401: function(e, t) {
      e.exports = [
        {
          id: 128283902498,
          headline: "Update to Scratch Offline Editor",
          copy:
            "We’ve released an update to Offline Editor which fixed bugs affecting Windows users.",
          url: "https://scratch.mit.edu/news#128283902498",
          image:
            "https://33.media.tumblr.com/695b93f4ab74c68feaef1fe03baebdd5/tumblr_inline_n0xubtT0vU1szpavb.png"
        },
        {
          id: 127476896298,
          headline: "Scratch Video Update: Ep 10",
          copy:
            "Check out a special Scratch Conference edition of the Scratch Video Update!",
          url: "https://scratch.mit.edu/news#127476896298",
          image:
            "https://40.media.tumblr.com/0b5814b2eafa94b3594a36ad84bbcae4/tumblr_inline_nmyxdgwxzU1szpavb_540.png"
        },
        {
          id: 126445521858,
          headline: "New Scratch Design Studio!",
          copy:
            "In this new Scratch Design Studio, use Custom Blocks to open up more possiblities in Scratch!",
          url: "https://scratch.mit.edu/news#126445521858",
          image:
            "https://31.media.tumblr.com/d99a1da959f7d077d266580842a8d3f4/tumblr_inline_n6jlk1ULuG1szpavb.png"
        }
      ];
    },
    15: function(e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(5),
        i = n(13),
        a = n(1),
        s = n(0);
      n(35);
      var l = function(e) {
        var t = o("button", e.className);
        return s.createElement(
          "button",
          r({ className: t }, i(e, ["className", "children"])),
          e.children
        );
      };
      (l.propTypes = { children: a.node, className: a.string }),
        (e.exports = l);
    },
    17: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        s = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        l = n(8),
        c = n(5),
        u = n(13),
        d = n(1),
        p = n(0),
        f = n(121);
      n(128), f.setAppElement(document.getElementById("app"));
      var h = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return l(n, ["handleRequestClose"]), n;
        }
        return (
          i(t, e),
          s(t, [
            {
              key: "handleRequestClose",
              value: function() {
                return this.modal.portal.requestClose();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.useStandardSizes
                    ? { bodyOpenClassName: c("overflow-hidden") }
                    : {};
                return p.createElement(
                  f,
                  a(
                    { appElement: document.getElementById("app") },
                    t,
                    {
                      className: {
                        base: c("modal-content", this.props.className, {
                          "modal-sizes": this.props.useStandardSizes
                        }),
                        afterOpen: c("modal-content", this.props.className),
                        beforeClose: c("modal-content", this.props.className)
                      },
                      overlayClassName: {
                        base: c("modal-overlay", this.props.overlayClassName),
                        afterOpen: c(
                          "modal-overlay",
                          this.props.overlayClassName
                        ),
                        beforeClose: c(
                          "modal-overlay",
                          this.props.overlayClassName
                        )
                      },
                      ref: function(t) {
                        e.modal = t;
                      }
                    },
                    u(this.props, ["className", "overlayClassName"])
                  ),
                  this.props.showCloseButton &&
                    p.createElement(
                      "div",
                      {
                        className: "modal-content-close",
                        onClick: this.handleRequestClose
                      },
                      p.createElement("img", {
                        alt: "close-icon",
                        className: "modal-content-close-img",
                        draggable: "false",
                        src: "/svgs/modal/close-x.svg"
                      })
                    ),
                  this.props.children
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      (h.propTypes = {
        children: d.node,
        className: d.string,
        overlayClassName: d.string,
        showCloseButton: d.bool,
        useStandardSizes: d.bool
      }),
        (h.defaultProps = { showCloseButton: !0 }),
        (e.exports = h);
    },
    176: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedRelative,
        i = n(1),
        a = n(0),
        s = n(12);
      n(731);
      var l = function(e) {
        return a.createElement(
          e.as,
          { className: r("social-message", e.className) },
          a.createElement(
            s,
            { className: "mod-social-message" },
            a.createElement(
              "div",
              { className: "social-message-content" },
              void 0 === e.iconSrc
                ? []
                : [
                    a.createElement("img", {
                      alt: e.iconAlt,
                      className: r("social-message-icon", e.imgClassName),
                      key: "social-message-icon",
                      src: e.iconSrc
                    })
                  ],
              a.createElement("div", null, e.children)
            ),
            a.createElement(
              "span",
              { className: "social-message-date" },
              a.createElement(o, { value: new Date(e.datetime) })
            )
          )
        );
      };
      (l.propTypes = {
        as: i.string,
        children: i.node,
        className: i.string,
        datetime: i.string.isRequired,
        iconAlt: i.string,
        iconSrc: i.string,
        imgClassName: i.string
      }),
        (l.defaultProps = { as: "li" }),
        (e.exports = l);
    },
    18: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(10),
        i = n(20),
        a = n(19),
        s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        l = (function() {
          function e(e) {
            "string" == typeof e ? this.fromString(e) : this.fromComponents(e),
              this.validate();
          }
          return (
            (e.prototype.toString = function(e) {
              void 0 === e && (e = !1);
              var t = this,
                n = t.host,
                r = t.path,
                o = t.pass,
                i = t.port,
                a = t.projectId;
              return (
                t.protocol +
                "://" +
                t.user +
                (e && o ? ":" + o : "") +
                "@" +
                n +
                (i ? ":" + i : "") +
                "/" +
                (r ? r + "/" : r) +
                a
              );
            }),
            (e.prototype.fromString = function(e) {
              var t = s.exec(e);
              if (!t) throw new a.SentryError("Invalid Dsn");
              var n = r.__read(t.slice(1), 6),
                o = n[0],
                l = n[1],
                c = n[2],
                u = void 0 === c ? "" : c,
                d = n[3],
                p = n[4],
                f = void 0 === p ? "" : p,
                h = n[5],
                m = "",
                g = h,
                A = g.split("/");
              A.length > 1 && ((m = A.slice(0, -1).join("/")), (g = A.pop())),
                i.assign(this, {
                  host: d,
                  pass: u,
                  path: m,
                  projectId: g,
                  port: f,
                  protocol: o,
                  user: l
                });
            }),
            (e.prototype.fromComponents = function(e) {
              (this.protocol = e.protocol),
                (this.user = e.user),
                (this.pass = e.pass || ""),
                (this.host = e.host),
                (this.port = e.port || ""),
                (this.path = e.path || ""),
                (this.projectId = e.projectId);
            }),
            (e.prototype.validate = function() {
              var e, t;
              try {
                for (
                  var n = r.__values(["protocol", "user", "host", "projectId"]),
                    i = n.next();
                  !i.done;
                  i = n.next()
                ) {
                  var s = i.value;
                  if (!this[s])
                    throw new a.SentryError("Invalid Dsn: Missing " + s);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              if ("http" !== this.protocol && "https" !== this.protocol)
                throw new a.SentryError(
                  'Invalid Dsn: Unsupported protocol "' + this.protocol + '"'
                );
              if (this.port && o.isNaN(parseInt(this.port, 10)))
                throw new a.SentryError(
                  'Invalid Dsn: Invalid port number "' + this.port + '"'
                );
            }),
            e
          );
        })();
      t.Dsn = l;
    },
    19: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = (function(e) {
          function t(t) {
            var n = this.constructor,
              r = e.call(this, t) || this;
            return (
              (r.message = t),
              (r.name = n.prototype.constructor.name),
              Object.setPrototypeOf(r, n.prototype),
              r
            );
          }
          return r.__extends(t, e), t;
        })(Error);
      t.SentryError = o;
    },
    20: function(e, t, n) {
      "use strict";
      (function(e) {
        function r(e) {
          return JSON.stringify(e);
        }
        function o(e) {
          return JSON.parse(e);
        }
        function i(e) {
          return o(r(e));
        }
        function a(e, t, n) {
          if (t in e && !e[t].__sentry__) {
            var r = e[t],
              o = n(r);
            (o.__sentry__ = !0),
              (o.__sentry_original__ = r),
              (o.__sentry_wrapped__ = o),
              (e[t] = o);
          }
        }
        function s(e) {
          return Object.keys(e)
            .map(function(t) {
              return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
            })
            .join("&");
        }
        function l(e) {
          return ~-encodeURI(e).split(/%..|./).length;
        }
        function c(e) {
          return l(JSON.stringify(e));
        }
        function u(e) {
          if ("string" == typeof e)
            return e.length <= 40 ? e : e.substr(0, 39) + "…";
          if ("number" == typeof e || "boolean" == typeof e || void 0 === e)
            return e;
          if (y.isNaN(e)) return "[NaN]";
          if (y.isUndefined(e)) return "[undefined]";
          var t = Object.prototype.toString.call(e);
          if ("[object Object]" === t) return "[Object]";
          if ("[object Array]" === t) return "[Array]";
          if ("[object Function]" === t) {
            var n = e.name;
            return n ? "[Function: " + n + "]" : "[Function]";
          }
          return e;
        }
        function d(e, t) {
          if (0 === t) return u(e);
          if (y.isPlainObject(e)) {
            var n = {},
              r = e;
            return (
              Object.keys(r).forEach(function(e) {
                n[e] = d(r[e], t - 1);
              }),
              n
            );
          }
          if (Array.isArray(e)) {
            return e.map(function(e) {
              return d(e, t - 1);
            });
          }
          return u(e);
        }
        function p(e, t, n) {
          void 0 === t && (t = b), void 0 === n && (n = w);
          var o = d(e, t);
          return c(r(o)) > n ? p(e, t - 1) : o;
        }
        function f(e, t) {
          if ((void 0 === t && (t = x), !e.length))
            return "[object has no keys]";
          if (e[0].length >= t) return e[0];
          for (var n = e.length; n > 0; n--) {
            var r = e.slice(0, n).join(", ");
            if (!(r.length > t)) return n === e.length ? r : r + "…";
          }
          return "";
        }
        function h(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if (null === e || void 0 === e)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var r = Object(e), o = 0; o < t.length; o++) {
            var i = t[o];
            if (null !== i)
              for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
          }
          return r;
        }
        function m(e) {
          var t = { message: e.message, name: e.name, stack: e.stack };
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        }
        function g(t, n) {
          return "domain" === n && "object" == typeof t && t._events
            ? "[Domain]"
            : "domainEmitter" === n
            ? "[DomainEmitter]"
            : void 0 !== e && t === e
            ? "[Global]"
            : "undefined" != typeof window && t === window
            ? "[Window]"
            : "undefined" != typeof document && t === document
            ? "[Document]"
            : t instanceof Date
            ? "[Date] " + t
            : t instanceof Error
            ? m(t)
            : y.isNaN(t)
            ? "[NaN]"
            : y.isUndefined(t)
            ? "[undefined]"
            : "function" == typeof t
            ? "[Function] " + (t.name || "<unknown-function-name>")
            : t;
        }
        function A() {
          function e(e, r) {
            return t[0] === r
              ? "[Circular ~]"
              : "[Circular ~." + n.slice(0, t.indexOf(r)).join(".") + "]";
          }
          var t = [],
            n = [];
          return function(r, o) {
            if (t.length > 0) {
              var i = t.indexOf(this);
              -1 === i
                ? (t.push(this), n.push(r))
                : (t.splice(i + 1), n.splice(i, 1 / 0, r)),
                -1 !== t.indexOf(o) && (o = e.call(this, r, o));
            } else t.push(o);
            return g(o, r);
          };
        }
        function v(e) {
          try {
            return JSON.parse(JSON.stringify(e, A()));
          } catch (e) {
            return "**non-serializable**";
          }
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var y = n(10);
        (t.serialize = r),
          (t.deserialize = o),
          (t.clone = i),
          (t.fill = a),
          (t.urlEncode = s);
        var b = 3,
          w = 102400,
          x = 40;
        (t.serializeObject = d),
          (t.limitObjectDepthToSize = p),
          (t.serializeKeysToEventMessage = f),
          (t.assign = h),
          (t.safeNormalize = v);
      }.call(t, n(22)));
    },
    21: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = void 0);
      var r = n(114),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = o.default,
        a = i.canUseDOM ? window.HTMLElement : {};
      t.canUseDOM = i.canUseDOM;
      t.default = a;
    },
    217: function(e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      function o(e, t, n) {
        function o(e, t) {
          var n = v.hasOwnProperty(t) ? v[t] : null;
          x.hasOwnProperty(t) &&
            s(
              "OVERRIDE_BASE" === n,
              "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
              t
            ),
            e &&
              s(
                "DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n,
                "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                t
              );
        }
        function c(e, n) {
          if (n) {
            s(
              "function" != typeof n,
              "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
            ),
              s(
                !t(n),
                "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
              );
            var r = e.prototype,
              i = r.__reactAutoBindPairs;
            n.hasOwnProperty(l) && y.mixins(e, n.mixins);
            for (var a in n)
              if (n.hasOwnProperty(a) && a !== l) {
                var c = n[a],
                  u = r.hasOwnProperty(a);
                if ((o(u, a), y.hasOwnProperty(a))) y[a](e, c);
                else {
                  var d = v.hasOwnProperty(a),
                    h = "function" == typeof c,
                    m = h && !d && !u && !1 !== n.autobind;
                  if (m) i.push(a, c), (r[a] = c);
                  else if (u) {
                    var g = v[a];
                    s(
                      d && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g),
                      "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                      g,
                      a
                    ),
                      "DEFINE_MANY_MERGED" === g
                        ? (r[a] = p(r[a], c))
                        : "DEFINE_MANY" === g && (r[a] = f(r[a], c));
                  } else r[a] = c;
                }
              }
          } else;
        }
        function u(e, t) {
          if (t)
            for (var n in t) {
              var r = t[n];
              if (t.hasOwnProperty(n)) {
                var o = n in y;
                s(
                  !o,
                  'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                  n
                );
                var i = n in e;
                s(
                  !i,
                  "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                  n
                ),
                  (e[n] = r);
              }
            }
        }
        function d(e, t) {
          s(
            e && t && "object" == typeof e && "object" == typeof t,
            "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
          );
          for (var n in t)
            t.hasOwnProperty(n) &&
              (s(
                void 0 === e[n],
                "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
                n
              ),
              (e[n] = t[n]));
          return e;
        }
        function p(e, t) {
          return function() {
            var n = e.apply(this, arguments),
              r = t.apply(this, arguments);
            if (null == n) return r;
            if (null == r) return n;
            var o = {};
            return d(o, n), d(o, r), o;
          };
        }
        function f(e, t) {
          return function() {
            e.apply(this, arguments), t.apply(this, arguments);
          };
        }
        function h(e, t) {
          var n = t.bind(e);
          return n;
        }
        function m(e) {
          for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
            var r = t[n],
              o = t[n + 1];
            e[r] = h(e, o);
          }
        }
        function g(e) {
          var t = r(function(e, r, o) {
            this.__reactAutoBindPairs.length && m(this),
              (this.props = e),
              (this.context = r),
              (this.refs = a),
              (this.updater = o || n),
              (this.state = null);
            var i = this.getInitialState ? this.getInitialState() : null;
            s(
              "object" == typeof i && !Array.isArray(i),
              "%s.getInitialState(): must return an object or null",
              t.displayName || "ReactCompositeComponent"
            ),
              (this.state = i);
          });
          (t.prototype = new E()),
            (t.prototype.constructor = t),
            (t.prototype.__reactAutoBindPairs = []),
            A.forEach(c.bind(null, t)),
            c(t, b),
            c(t, e),
            c(t, w),
            t.getDefaultProps && (t.defaultProps = t.getDefaultProps()),
            s(
              t.prototype.render,
              "createClass(...): Class specification must implement a `render` method."
            );
          for (var o in v) t.prototype[o] || (t.prototype[o] = null);
          return t;
        }
        var A = [],
          v = {
            mixins: "DEFINE_MANY",
            statics: "DEFINE_MANY",
            propTypes: "DEFINE_MANY",
            contextTypes: "DEFINE_MANY",
            childContextTypes: "DEFINE_MANY",
            getDefaultProps: "DEFINE_MANY_MERGED",
            getInitialState: "DEFINE_MANY_MERGED",
            getChildContext: "DEFINE_MANY_MERGED",
            render: "DEFINE_ONCE",
            componentWillMount: "DEFINE_MANY",
            componentDidMount: "DEFINE_MANY",
            componentWillReceiveProps: "DEFINE_MANY",
            shouldComponentUpdate: "DEFINE_ONCE",
            componentWillUpdate: "DEFINE_MANY",
            componentDidUpdate: "DEFINE_MANY",
            componentWillUnmount: "DEFINE_MANY",
            updateComponent: "OVERRIDE_BASE"
          },
          y = {
            displayName: function(e, t) {
              e.displayName = t;
            },
            mixins: function(e, t) {
              if (t) for (var n = 0; n < t.length; n++) c(e, t[n]);
            },
            childContextTypes: function(e, t) {
              e.childContextTypes = i({}, e.childContextTypes, t);
            },
            contextTypes: function(e, t) {
              e.contextTypes = i({}, e.contextTypes, t);
            },
            getDefaultProps: function(e, t) {
              e.getDefaultProps
                ? (e.getDefaultProps = p(e.getDefaultProps, t))
                : (e.getDefaultProps = t);
            },
            propTypes: function(e, t) {
              e.propTypes = i({}, e.propTypes, t);
            },
            statics: function(e, t) {
              u(e, t);
            },
            autobind: function() {}
          },
          b = {
            componentDidMount: function() {
              this.__isMounted = !0;
            }
          },
          w = {
            componentWillUnmount: function() {
              this.__isMounted = !1;
            }
          },
          x = {
            replaceState: function(e, t) {
              this.updater.enqueueReplaceState(this, e, t);
            },
            isMounted: function() {
              return !!this.__isMounted;
            }
          },
          E = function() {};
        return i(E.prototype, e.prototype, x), g;
      }
      var i = n(158),
        a = n(283),
        s = n(318),
        l = "mixins";
      e.exports = o;
    },
    218: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = n(217);
      if (void 0 === r)
        throw Error(
          "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
        );
      var i = new r.Component().updater;
      e.exports = o(r.Component, r.isValidElement, i);
    },
    24: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(53);
      var a = function(e) {
        return i.createElement(
          "div",
          { className: r("title-banner", e.className) },
          e.children
        );
      };
      (a.propTypes = { children: o.node, className: o.string }),
        (e.exports = a);
    },
    25: function(e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout)
          return (u = setTimeout), setTimeout(e, 0);
        try {
          return u(e, 0);
        } catch (t) {
          try {
            return u.call(null, e, 0);
          } catch (t) {
            return u.call(this, e, 0);
          }
        }
      }
      function i(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout)
          return (d = clearTimeout), clearTimeout(e);
        try {
          return d(e);
        } catch (t) {
          try {
            return d.call(null, e);
          } catch (t) {
            return d.call(this, e);
          }
        }
      }
      function a() {
        m &&
          f &&
          ((m = !1), f.length ? (h = f.concat(h)) : (g = -1), h.length && s());
      }
      function s() {
        if (!m) {
          var e = o(a);
          m = !0;
          for (var t = h.length; t; ) {
            for (f = h, h = []; ++g < t; ) f && f[g].run();
            (g = -1), (t = h.length);
          }
          (f = null), (m = !1), i(e);
        }
      }
      function l(e, t) {
        (this.fun = e), (this.array = t);
      }
      function c() {}
      var u,
        d,
        p = (e.exports = {});
      !(function() {
        try {
          u = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          u = n;
        }
        try {
          d = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          d = r;
        }
      })();
      var f,
        h = [],
        m = !1,
        g = -1;
      (p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || m || o(s);
      }),
        (l.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (p.title = "browser"),
        (p.browser = !0),
        (p.env = {}),
        (p.argv = []),
        (p.version = ""),
        (p.versions = {}),
        (p.on = c),
        (p.addListener = c),
        (p.once = c),
        (p.off = c),
        (p.removeListener = c),
        (p.removeAllListeners = c),
        (p.emit = c),
        (p.prependListener = c),
        (p.prependOnceListener = c),
        (p.listeners = function(e) {
          return [];
        }),
        (p.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (p.cwd = function() {
          return "/";
        }),
        (p.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (p.umask = function() {
          return 0;
        });
    },
    26: function(e, t, n) {
      "use strict";
      function r(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(5),
        a = n(136).Input,
        s = n(13),
        l = n(1),
        c = n(0),
        u = n(135).defaultValidationHOC,
        d = n(137);
      n(59), n(65);
      var p = function(e) {
        var t = e.className,
          n = e.label,
          l = r(e, ["className", "label"]);
        return c.createElement(
          a,
          o(
            {
              className: "input",
              label: n,
              rowClassName: i(t, { "no-label": void 0 === n })
            },
            s(l, ["className"])
          )
        );
      };
      (p.propTypes = { className: l.string, label: l.string }),
        (e.exports = d(u(p)));
    },
    263: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(281);
      var a = function(e) {
        var t = [],
          n = [];
        e.loves &&
          e.showLoves &&
          t.push(
            i.createElement(
              "div",
              {
                className: "thumbnail-loves",
                key: "loves",
                title: e.loves + " loves"
              },
              e.loves
            )
          ),
          e.favorites &&
            e.showFavorites &&
            t.push(
              i.createElement(
                "div",
                {
                  className: "thumbnail-favorites",
                  key: "favorites",
                  title: e.favorites + " favorites"
                },
                e.favorites
              )
            ),
          e.remixes &&
            e.showRemixes &&
            t.push(
              i.createElement(
                "div",
                {
                  className: "thumbnail-remixes",
                  key: "remixes",
                  title: e.remixes + " remixes"
                },
                e.remixes
              )
            ),
          e.views &&
            e.showViews &&
            t.push(
              i.createElement(
                "div",
                {
                  className: "thumbnail-views",
                  key: "views",
                  title: e.views + " views"
                },
                e.views
              )
            );
        var o = void 0,
          a = void 0,
          s = void 0;
        return (
          e.linkTitle
            ? ((o = i.createElement(
                "a",
                {
                  className: "thumbnail-image",
                  href: e.href,
                  key: "imgElement"
                },
                i.createElement("img", { alt: e.alt, src: e.src })
              )),
              (a = i.createElement(
                "a",
                { href: e.href, key: "titleElement", title: e.title },
                e.title
              )))
            : ((o = i.createElement("img", { src: e.src })), (a = e.title)),
          n.push(a),
          e.creator &&
            n.push(
              i.createElement(
                "div",
                { className: "thumbnail-creator", key: "creator" },
                i.createElement(
                  "a",
                  { href: "/users/" + e.creator + "/" },
                  e.creator
                )
              )
            ),
          e.avatar &&
            e.showAvatar &&
            (s = i.createElement(
              "a",
              { className: "creator-image", href: "/users/" + e.creator + "/" },
              i.createElement("img", { alt: e.creator, src: e.avatar })
            )),
          i.createElement(
            "div",
            { className: r("thumbnail", e.type, e.className) },
            o,
            i.createElement(
              "div",
              { className: "thumbnail-info" },
              s,
              i.createElement("div", { className: "thumbnail-title" }, n)
            ),
            t
          )
        );
      };
      (a.propTypes = {
        alt: o.string,
        avatar: o.string,
        className: o.string,
        creator: o.string,
        favorites: o.oneOfType([o.number, o.string]),
        href: o.string,
        linkTitle: o.bool,
        loves: o.oneOfType([o.number, o.string]),
        remixes: o.oneOfType([o.number, o.string]),
        showAvatar: o.bool,
        showFavorites: o.bool,
        showLoves: o.bool,
        showRemixes: o.bool,
        showViews: o.bool,
        src: o.string,
        title: o.string,
        type: o.string,
        views: o.oneOfType([o.number, o.string])
      }),
        (a.defaultProps = {
          alt: "",
          avatar: "",
          href: "#",
          linkTitle: !0,
          showAvatar: !1,
          showFavorites: !1,
          showLoves: !1,
          showRemixes: !1,
          showViews: !1,
          src: "",
          title: "Project",
          type: "project"
        }),
        (e.exports = a);
    },
    27: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0),
        a = n(97),
        s = n(93),
        l = n(98),
        c = n(63),
        u = n(99),
        d = function(e) {
          var t = e.children,
            n = e.className,
            o = e.showDonorRecognition;
          return i.createElement(
            c,
            { componentName: "Page" },
            i.createElement(
              "div",
              { className: r("page", n) },
              i.createElement(
                "div",
                { className: r({ staging: !1 }), id: "navigation" },
                i.createElement(a, null)
              ),
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
                t
              ),
              i.createElement(
                "div",
                { id: "footer" },
                i.createElement(s, null)
              ),
              o &&
                i.createElement(
                  "div",
                  { id: "donor" },
                  i.createElement(l, null)
                )
            )
          );
        };
      (d.propTypes = {
        children: o.node,
        className: o.string,
        showDonorRecognition: o.bool
      }),
        (e.exports = d);
    },
    272: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.thumbnail .thumbnail-image {\n  display: block; }\n  .thumbnail .thumbnail-image img {\n    margin-bottom: 2px;\n    border: 1px solid #d9d9d9; }\n\n.thumbnail .thumbnail-title,\n.thumbnail .thumbnail-creator, .thumbnail .thumbnail-loves, .thumbnail .thumbnail-favorites, .thumbnail .thumbnail-remixes, .thumbnail .thumbnail-views {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2em;\n  white-space: nowrap;\n  word-wrap: break-word; }\n\n.thumbnail .thumbnail-title {\n  margin-bottom: 1px;\n  font-size: .923em;\n  font-weight: 800; }\n  .thumbnail .thumbnail-title a {\n    display: block; }\n\n.thumbnail .thumbnail-creator, .thumbnail .thumbnail-loves, .thumbnail .thumbnail-favorites, .thumbnail .thumbnail-remixes, .thumbnail .thumbnail-views {\n  color: #575e75;\n  font-size: .8462em; }\n  .thumbnail .thumbnail-creator a, .thumbnail .thumbnail-loves a, .thumbnail .thumbnail-favorites a, .thumbnail .thumbnail-remixes a, .thumbnail .thumbnail-views a {\n    display: inline; }\n\n.thumbnail .thumbnail-loves,\n.thumbnail .thumbnail-favorites,\n.thumbnail .thumbnail-remixes,\n.thumbnail .thumbnail-views {\n  display: inline;\n  margin-right: 10px; }\n  .thumbnail .thumbnail-loves:before,\n  .thumbnail .thumbnail-favorites:before,\n  .thumbnail .thumbnail-remixes:before,\n  .thumbnail .thumbnail-views:before {\n    display: inline-block;\n    margin-right: .1rem;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: contain;\n    width: .93rem;\n    height: .93rem;\n    vertical-align: text-top;\n    content: ""; }\n\n.thumbnail .thumbnail-loves:before {\n  background-image: url("/svgs/love/love_type-gray.svg"); }\n\n.thumbnail .thumbnail-favorites:before {\n  background-image: url("/svgs/favorite/favorite_type-gray.svg"); }\n\n.thumbnail .thumbnail-remixes:before {\n  background-image: url("/svgs/remix/remix_type-gray.svg"); }\n\n.thumbnail .thumbnail-views:before {\n  background-image: url("/svgs/view/view_type-gray.svg"); }\n\n.thumbnail.project {\n  width: 144px; }\n  .thumbnail.project .thumbnail-image img {\n    width: 144px;\n    height: 108px; }\n\n.thumbnail.gallery {\n  width: 170px; }\n  .thumbnail.gallery img {\n    width: 170px;\n    height: 100px; }\n',
          ""
        ]);
    },
    28: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = (function() {
          function e() {
            this.buffer = [];
          }
          return (
            (e.prototype.add = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                var t = this;
                return r.__generator(this, function(n) {
                  return (
                    -1 === this.buffer.indexOf(e) && this.buffer.push(e),
                    e
                      .then(function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                          return r.__generator(this, function(t) {
                            return [2, this.remove(e)];
                          });
                        });
                      })
                      .catch(function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                          return r.__generator(this, function(t) {
                            return [2, this.remove(e)];
                          });
                        });
                      }),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.remove = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(n) {
                  return (
                    (t = this.buffer.splice(this.buffer.indexOf(e), 1)[0]),
                    [2, t]
                  );
                });
              });
            }),
            (e.prototype.length = function() {
              return this.buffer.length;
            }),
            (e.prototype.drain = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                var t = this;
                return r.__generator(this, function(n) {
                  return [
                    2,
                    new Promise(function(n) {
                      var r = setTimeout(function() {
                        e && e > 0 && n(!1);
                      }, e);
                      Promise.all(t.buffer)
                        .then(function() {
                          clearTimeout(r), n(!0);
                        })
                        .catch(function() {
                          n(!0);
                        });
                    })
                  ];
                });
              });
            }),
            e
          );
        })();
      t.RequestBuffer = o;
    },
    281: function(e, t, n) {
      var r = n(272);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    282: function(e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(5),
        i = n(1),
        a = n(0);
      n(504);
      var s = function(e) {
        return a.createElement(
          "div",
          { className: o("box", e.className) },
          a.createElement(
            "div",
            { className: "box-header" },
            a.createElement("h4", null, e.title),
            a.createElement("h5", null, e.subtitle),
            a.createElement(
              "p",
              null,
              a.createElement(
                "a",
                r({ href: e.moreHref }, e.moreProps),
                e.moreTitle
              )
            )
          ),
          a.createElement("div", { className: "box-content" }, e.children)
        );
      };
      (s.propTypes = {
        children: i.node,
        className: i.string,
        moreHref: i.string,
        moreProps: i.object,
        moreTitle: i.string,
        subtitle: i.string,
        title: i.string.isRequired
      }),
        (e.exports = s);
    },
    29: function(e, t, n) {
      "use strict";
      function r() {
        var e = a.getGlobalObject();
        return (
          (e.__SENTRY__ = e.__SENTRY__ || {}),
          (e.__SENTRY__.globalEventProcessors =
            e.__SENTRY__.globalEventProcessors || []),
          e.__SENTRY__.globalEventProcessors
        );
      }
      function o(e) {
        r().push(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(6),
        a = n(11),
        s = n(20),
        l = (function() {
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
            (e.prototype.addScopeListener = function(e) {
              this.scopeListeners.push(e);
            }),
            (e.prototype.addEventProcessor = function(e) {
              return this.eventProcessors.push(e), this;
            }),
            (e.prototype.notifyScopeListeners = function() {
              var e = this;
              this.notifyingListeners ||
                ((this.notifyingListeners = !0),
                setTimeout(function() {
                  e.scopeListeners.forEach(function(t) {
                    t(e);
                  }),
                    (e.notifyingListeners = !1);
                }, 0));
            }),
            (e.prototype.notifyEventProcessors = function(e, t) {
              return i.__awaiter(this, void 0, void 0, function() {
                var n, o, a, s, l, c, u, d;
                return i.__generator(this, function(p) {
                  switch (p.label) {
                    case 0:
                      (a = e), (p.label = 1);
                    case 1:
                      p.trys.push([1, 8, 9, 10]),
                        (s = i.__values(i.__spread(r(), this.eventProcessors))),
                        (l = s.next()),
                        (p.label = 2);
                    case 2:
                      if (l.done) return [3, 7];
                      (c = l.value), (p.label = 3);
                    case 3:
                      return (
                        p.trys.push([3, 5, , 6]), [4, c(i.__assign({}, a), t)]
                      );
                    case 4:
                      return (a = p.sent()), null === a ? [2, null] : [3, 6];
                    case 5:
                      return (u = p.sent()), [3, 6];
                    case 6:
                      return (l = s.next()), [3, 2];
                    case 7:
                      return [3, 10];
                    case 8:
                      return (d = p.sent()), (n = { error: d }), [3, 10];
                    case 9:
                      try {
                        l && !l.done && (o = s.return) && o.call(s);
                      } finally {
                        if (n) throw n.error;
                      }
                      return [7];
                    case 10:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.setUser = function(e) {
              return (
                (this.user = s.safeNormalize(e)),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setTag = function(e, t) {
              var n;
              return (
                (this.tags = i.__assign(
                  {},
                  this.tags,
                  ((n = {}), (n[e] = s.safeNormalize(t)), n)
                )),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setExtra = function(e, t) {
              var n;
              return (
                (this.extra = i.__assign(
                  {},
                  this.extra,
                  ((n = {}), (n[e] = s.safeNormalize(t)), n)
                )),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setFingerprint = function(e) {
              return (
                (this.fingerprint = s.safeNormalize(e)),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.prototype.setLevel = function(e) {
              return (
                (this.level = s.safeNormalize(e)),
                this.notifyScopeListeners(),
                this
              );
            }),
            (e.clone = function(t) {
              var n = new e();
              return (
                s.assign(n, t, { scopeListeners: [] }),
                t &&
                  ((n.extra = s.assign(t.extra)),
                  (n.tags = s.assign(t.tags)),
                  (n.breadcrumbs = i.__spread(t.breadcrumbs)),
                  (n.eventProcessors = i.__spread(t.eventProcessors))),
                n
              );
            }),
            (e.prototype.clear = function() {
              (this.breadcrumbs = []),
                (this.tags = {}),
                (this.extra = {}),
                (this.user = {}),
                (this.level = void 0),
                (this.fingerprint = void 0),
                this.notifyScopeListeners();
            }),
            (e.prototype.addBreadcrumb = function(e, t) {
              (this.breadcrumbs =
                void 0 !== t && t >= 0
                  ? i.__spread(this.breadcrumbs, [s.safeNormalize(e)]).slice(-t)
                  : i.__spread(this.breadcrumbs, [s.safeNormalize(e)])),
                this.notifyScopeListeners();
            }),
            (e.prototype.applyFingerprint = function(e) {
              (e.fingerprint = e.fingerprint
                ? Array.isArray(e.fingerprint)
                  ? e.fingerprint
                  : [e.fingerprint]
                : []),
                this.fingerprint
                  ? (e.fingerprint = e.fingerprint.concat(this.fingerprint))
                  : e.message &&
                    (e.fingerprint = e.fingerprint.concat(e.message)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
            }),
            (e.prototype.applyToEvent = function(e, t, n) {
              return i.__awaiter(this, void 0, void 0, function() {
                var r;
                return i.__generator(this, function(o) {
                  return (
                    this.extra &&
                      Object.keys(this.extra).length &&
                      (e.extra = i.__assign({}, this.extra, e.extra)),
                    this.tags &&
                      Object.keys(this.tags).length &&
                      (e.tags = i.__assign({}, this.tags, e.tags)),
                    this.user &&
                      Object.keys(this.user).length &&
                      (e.user = i.__assign({}, this.user, e.user)),
                    this.level && (e.level = this.level),
                    this.applyFingerprint(e),
                    (r = !e.breadcrumbs || 0 === e.breadcrumbs.length),
                    r &&
                      this.breadcrumbs.length > 0 &&
                      (e.breadcrumbs =
                        void 0 !== n && n >= 0
                          ? this.breadcrumbs.slice(-n)
                          : this.breadcrumbs),
                    [2, this.notifyEventProcessors(e, t)]
                  );
                });
              });
            }),
            e
          );
        })();
      (t.Scope = l), (t.addGlobalEventProcessor = o);
    },
    30: function(e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = 0),
          0 !== t && s.isString(e)
            ? e.length <= t
              ? e
              : e.substr(0, t) + "…"
            : e
        );
      }
      function o(e, t) {
        var n = e,
          r = n.length;
        if (r <= 150) return n;
        t > r && (t = r);
        var o = Math.max(t - 60, 0);
        o < 5 && (o = 0);
        var i = Math.min(o + 140, r);
        return (
          i > r - 5 && (i = r),
          i === r && (o = Math.max(i - 140, 0)),
          (n = n.slice(o, i)),
          o > 0 && (n = "'{snip} " + n),
          i < r && (n += " {snip}"),
          n
        );
      }
      function i(e, t) {
        if (!Array.isArray(e)) return "";
        for (var n = [], r = 0; r < e.length; r++) {
          var o = e[r];
          try {
            n.push(String(o));
          } catch (e) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(t);
      }
      function a(e, t) {
        return !(t.length > e.length) && -1 !== e.indexOf(t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(10);
      (t.truncate = r), (t.snipLine = o), (t.safeJoin = i), (t.includes = a);
    },
    31: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(5),
        c = n(58).default,
        u = n(1),
        d = n(0);
      n(124);
      var p = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return s(n, ["handleClickOutside"]), n;
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "handleClickOutside",
              value: function() {
                this.props.isOpen && this.props.onRequestClose();
              }
            },
            {
              key: "render",
              value: function() {
                return d.createElement(
                  this.props.as,
                  {
                    className: l("dropdown", this.props.className, {
                      open: this.props.isOpen
                    })
                  },
                  this.props.children
                );
              }
            }
          ]),
          t
        );
      })(d.Component);
      (p.propTypes = {
        children: u.node,
        className: u.string,
        isOpen: u.bool,
        onRequestClose: u.func.isRequired
      }),
        (p.defaultProps = { as: "div", isOpen: !1 }),
        (e.exports = c(p));
    },
    32: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!e || !e.length)
          throw new Error(
            "react-modal: No elements were found for selector " + t + "."
          );
      }
      function o(e) {
        var t = e;
        if ("string" == typeof t && p.canUseDOM) {
          var n = document.querySelectorAll(t);
          r(n, t), (t = "length" in n ? n[0] : n);
        }
        return (f = t || f);
      }
      function i(e) {
        return (
          !(!e && !f) ||
          ((0, d.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`."
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
      function l() {
        f = null;
      }
      function c() {
        f = null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNodeList = r),
        (t.setElement = o),
        (t.validateElement = i),
        (t.hide = a),
        (t.show = s),
        (t.documentNotReadyOrSSRTesting = l),
        (t.resetForTesting = c);
      var u = n(134),
        d = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        p = n(21),
        f = null;
    },
    33: function(e, t, n) {
      "use strict";
      function r(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var n = window.getComputedStyle(e);
        return t
          ? "visible" !== n.getPropertyValue("overflow") ||
              (e.scrollWidth <= 0 && e.scrollHeight <= 0)
          : "none" == n.getPropertyValue("display");
      }
      function o(e) {
        for (var t = e; t && t !== document.body; ) {
          if (r(t)) return !1;
          t = t.parentNode;
        }
        return !0;
      }
      function i(e, t) {
        var n = e.nodeName.toLowerCase();
        return (
          ((l.test(n) && !e.disabled) || ("a" === n ? e.href || t : t)) && o(e)
        );
      }
      function a(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && i(e, !n);
      }
      function s(e) {
        return [].slice.call(e.querySelectorAll("*"), 0).filter(a);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = s);
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
      var l = /input|select|textarea|button|object/;
      e.exports = t.default;
    },
    330: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(0),
        a = r(i),
        s = n(39),
        l = r(s),
        c = n(503),
        u = n(158),
        d = r(u),
        p = {
          initialize: function(e) {
            var t,
              n = l.default.findDOMNode(this.list),
              r = a.default.Children.count(e.children),
              o = this.getWidth(n),
              i = this.getWidth(l.default.findDOMNode(this.track));
            if (e.vertical) t = this.getWidth(l.default.findDOMNode(this));
            else {
              var s = e.centerMode && 2 * parseInt(e.centerPadding);
              t =
                (this.getWidth(l.default.findDOMNode(this)) - s) /
                e.slidesToShow;
            }
            var u = this.getHeight(n.querySelector('[data-index="0"]')),
              p = u * e.slidesToShow,
              f = e.rtl ? r - 1 - e.initialSlide : e.initialSlide;
            this.setState(
              {
                slideCount: r,
                slideWidth: t,
                listWidth: o,
                trackWidth: i,
                currentSlide: f,
                slideHeight: u,
                listHeight: p
              },
              function() {
                var t = (0, c.getTrackLeft)(
                    (0, d.default)(
                      {
                        slideIndex: this.state.currentSlide,
                        trackRef: this.track
                      },
                      e,
                      this.state
                    )
                  ),
                  n = (0, c.getTrackCSS)(
                    (0, d.default)({ left: t }, e, this.state)
                  );
                this.setState({ trackStyle: n }), this.autoPlay();
              }
            );
          },
          update: function(e) {
            var t,
              n = l.default.findDOMNode(this.list),
              r = a.default.Children.count(e.children),
              o = this.getWidth(n),
              i = this.getWidth(l.default.findDOMNode(this.track));
            if (e.vertical) t = this.getWidth(l.default.findDOMNode(this));
            else {
              var s = e.centerMode && 2 * parseInt(e.centerPadding);
              t =
                (this.getWidth(l.default.findDOMNode(this)) - s) /
                e.slidesToShow;
            }
            var u = this.getHeight(n.querySelector('[data-index="0"]')),
              p = u * e.slidesToShow;
            e.autoplay ? this.autoPlay() : this.pause(),
              this.setState(
                {
                  slideCount: r,
                  slideWidth: t,
                  listWidth: o,
                  trackWidth: i,
                  slideHeight: u,
                  listHeight: p
                },
                function() {
                  var t = (0, c.getTrackLeft)(
                      (0, d.default)(
                        {
                          slideIndex: this.state.currentSlide,
                          trackRef: this.track
                        },
                        e,
                        this.state
                      )
                    ),
                    n = (0, c.getTrackCSS)(
                      (0, d.default)({ left: t }, e, this.state)
                    );
                  this.setState({ trackStyle: n });
                }
              );
          },
          getWidth: function(e) {
            return (
              (e && (e.getBoundingClientRect().width || e.offsetWidth)) || 0
            );
          },
          getHeight: function(e) {
            return (
              (e && (e.getBoundingClientRect().height || e.offsetHeight)) || 0
            );
          },
          adaptHeight: function() {
            if (this.props.adaptiveHeight) {
              var e = '[data-index="' + this.state.currentSlide + '"]';
              if (this.list) {
                var t = l.default.findDOMNode(this.list);
                t.style.height = t.querySelector(e).offsetHeight + "px";
              }
            }
          },
          canGoNext: function(e) {
            var t = !0;
            return (
              e.infinite ||
                (e.centerMode
                  ? e.currentSlide >= e.slideCount - 1 && (t = !1)
                  : (e.slideCount <= e.slidesToShow ||
                      e.currentSlide >= e.slideCount - e.slidesToShow) &&
                    (t = !1)),
              t
            );
          },
          slideHandler: function(e) {
            var t,
              n,
              r,
              o,
              i,
              a = this;
            if (!this.props.waitForAnimate || !this.state.animating) {
              if (this.props.fade) {
                if (
                  ((n = this.state.currentSlide),
                  !1 === this.props.infinite &&
                    (e < 0 || e >= this.state.slideCount))
                )
                  return;
                return (
                  (t =
                    e < 0
                      ? e + this.state.slideCount
                      : e >= this.state.slideCount
                      ? e - this.state.slideCount
                      : e),
                  this.props.lazyLoad &&
                    this.state.lazyLoadedList.indexOf(t) < 0 &&
                    this.setState({
                      lazyLoadedList: this.state.lazyLoadedList.concat(t)
                    }),
                  (i = function() {
                    a.setState({ animating: !1 }),
                      a.props.afterChange && a.props.afterChange(t),
                      delete a.animationEndCallback;
                  }),
                  this.setState({ animating: !0, currentSlide: t }, function() {
                    this.animationEndCallback = setTimeout(i, this.props.speed);
                  }),
                  this.props.beforeChange &&
                    this.props.beforeChange(this.state.currentSlide, t),
                  void this.autoPlay()
                );
              }
              if (
                ((t = e),
                (n =
                  t < 0
                    ? !1 === this.props.infinite
                      ? 0
                      : this.state.slideCount % this.props.slidesToScroll != 0
                      ? this.state.slideCount -
                        (this.state.slideCount % this.props.slidesToScroll)
                      : this.state.slideCount + t
                    : t >= this.state.slideCount
                    ? !1 === this.props.infinite
                      ? this.state.slideCount - this.props.slidesToShow
                      : this.state.slideCount % this.props.slidesToScroll != 0
                      ? 0
                      : t - this.state.slideCount
                    : t),
                (r = (0, c.getTrackLeft)(
                  (0, d.default)(
                    { slideIndex: t, trackRef: this.track },
                    this.props,
                    this.state
                  )
                )),
                (o = (0, c.getTrackLeft)(
                  (0, d.default)(
                    { slideIndex: n, trackRef: this.track },
                    this.props,
                    this.state
                  )
                )),
                !1 === this.props.infinite && (r = o),
                this.props.beforeChange &&
                  this.props.beforeChange(this.state.currentSlide, n),
                this.props.lazyLoad)
              ) {
                for (
                  var s = !0, l = [], u = t;
                  u < t + this.props.slidesToShow;
                  u++
                )
                  (s = s && this.state.lazyLoadedList.indexOf(u) >= 0) ||
                    l.push(u);
                s ||
                  this.setState({
                    lazyLoadedList: this.state.lazyLoadedList.concat(l)
                  });
              }
              if (!1 === this.props.useCSS)
                this.setState(
                  {
                    currentSlide: n,
                    trackStyle: (0, c.getTrackCSS)(
                      (0, d.default)({ left: o }, this.props, this.state)
                    )
                  },
                  function() {
                    this.props.afterChange && this.props.afterChange(n);
                  }
                );
              else {
                var p = {
                  animating: !1,
                  currentSlide: n,
                  trackStyle: (0, c.getTrackCSS)(
                    (0, d.default)({ left: o }, this.props, this.state)
                  ),
                  swipeLeft: null
                };
                (i = function() {
                  a.setState(p),
                    a.props.afterChange && a.props.afterChange(n),
                    delete a.animationEndCallback;
                }),
                  this.setState(
                    {
                      animating: !0,
                      currentSlide: n,
                      trackStyle: (0, c.getTrackAnimateCSS)(
                        (0, d.default)({ left: r }, this.props, this.state)
                      )
                    },
                    function() {
                      this.animationEndCallback = setTimeout(
                        i,
                        this.props.speed
                      );
                    }
                  );
              }
              this.autoPlay();
            }
          },
          swipeDirection: function(e) {
            var t, n, r, o;
            return (
              (t = e.startX - e.curX),
              (n = e.startY - e.curY),
              (r = Math.atan2(n, t)),
              (o = Math.round((180 * r) / Math.PI)),
              o < 0 && (o = 360 - Math.abs(o)),
              (o <= 45 && o >= 0) || (o <= 360 && o >= 315)
                ? !1 === this.props.rtl
                  ? "left"
                  : "right"
                : o >= 135 && o <= 225
                ? !1 === this.props.rtl
                  ? "right"
                  : "left"
                : !0 === this.props.verticalSwiping
                ? o >= 35 && o <= 135
                  ? "down"
                  : "up"
                : "vertical"
            );
          },
          play: function() {
            var e;
            if (!this.state.mounted) return !1;
            if (this.props.rtl)
              e = this.state.currentSlide - this.props.slidesToScroll;
            else {
              if (!this.canGoNext(o({}, this.props, this.state))) return !1;
              e = this.state.currentSlide + this.props.slidesToScroll;
            }
            this.slideHandler(e);
          },
          autoPlay: function() {
            this.state.autoPlayTimer && clearTimeout(this.state.autoPlayTimer),
              this.props.autoplay &&
                this.setState({
                  autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
                });
          },
          pause: function() {
            this.state.autoPlayTimer &&
              (clearTimeout(this.state.autoPlayTimer),
              this.setState({ autoPlayTimer: null }));
          }
        };
      t.default = p;
    },
    34: function(e, t, n) {
      var r = n(104);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    35: function(e, t, n) {
      var r = n(38);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    37: function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    38: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.button {\n  display: inline-block;\n  margin: .5em 0;\n  border: 0;\n  border-radius: .5rem;\n  background-color: #4d97ff;\n  cursor: pointer;\n  padding: 1em 1.25em;\n  color: white;\n  font-size: .8rem;\n  font-weight: bold;\n  /* USER BUTTON STATES */\n  /* DATA BUTTON STATES */ }\n  .button:focus {\n    outline: none; }\n  .button.white {\n    background-color: white;\n    color: #4d97ff; }\n  .button.pass {\n    background-color: #0fbd8c; }\n  .button.fail {\n    background-color: #ffab1a; }\n  .button:disabled {\n    box-shadow: none; }\n  .button.large {\n    border-radius: .25rem;\n    font-size: 1rem;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    padding: .75rem 1.25rem .8125rem; }\n  .button.icon-right img {\n    height: 1.25rem;\n    margin-bottom: -.25rem;\n    margin-left: .5rem;\n    margin-right: -.25rem; }\n',
          ""
        ]);
    },
    40: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0);
      n(48);
      var i = function(e) {
        return o.createElement("div", { className: "inner" }, e.children);
      };
      (i.propTypes = { children: r.node }), (e.exports = i);
    },
    41: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(5),
        c = n(1),
        u = n(0),
        d = n(141),
        p = n(143).default,
        f = n(23),
        h = n(139);
      n(49);
      var m = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return s(n, ["handleSetLanguage"]), n;
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "handleSetLanguage",
              value: function(e, t) {
                var n = {};
                "localhost" !== window.location.hostname &&
                  (n = { domain: "." + window.location.hostname }),
                  d.set("scratchlanguage", t, n),
                  window.location.reload();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = Object.keys(this.props.languages).map(function(t) {
                    return { value: t, label: e.props.languages[t].name };
                  });
                return u.createElement(
                  f,
                  { className: l("language-chooser", this.props.className) },
                  u.createElement(h, {
                    required: !0,
                    name: "language",
                    options: t,
                    value: this.props.locale,
                    onChange: this.handleSetLanguage
                  })
                );
              }
            }
          ]),
          t
        );
      })(u.Component);
      (m.propTypes = {
        className: c.string,
        languages: c.object,
        locale: c.string
      }),
        (m.defaultProps = { languages: p, locale: "en" }),
        (e.exports = m);
    },
    42: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(50);
      var a = function(e) {
        return i.createElement(
          "div",
          { className: r("inner", e.className) },
          e.children
        );
      };
      (a.propTypes = { children: o.node, className: o.string }),
        (e.exports = a);
    },
    43: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.flex-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .flex-row.column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .flex-row.uneven {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start; }\n    .flex-row.uneven .short {\n      width: 13.75em; }\n    .flex-row.uneven .long {\n      width: 38.75em;\n      text-align: left; }\n  @media only screen and (max-width: 767px) {\n    .flex-row {\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .flex-row.uneven .short,\n      .flex-row.uneven .long {\n        margin: auto;\n        width: 90%; } }\n",
          ""
        ]);
    },
    44: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n#footer {\n  display: block;\n  background-color: #f2f2f2;\n  padding: 10px 0;\n  color: #575e75;\n  font-size: .85rem; }\n",
          ""
        ]);
    },
    45: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.language-chooser .select select {\n  width: 13.75rem;\n  /* 3 columns */ }\n",
          ""
        ]);
    },
    46: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n#navigation {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n  background-color: #4d97ff;\n  width: 100%;\n  /* NOTE: Height should match offset settings in main.scss file */\n  height: 50px; }\n  #navigation.staging {\n    background-color: #ffab1a; }\n  .ie9 #navigation {\n    display: table;\n    table-layout: fixed; }\n  #navigation .inner > ul {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    height: 50px;\n    list-style: none;\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .ie9 #navigation .inner > ul {\n      display: table-row; }\n    #navigation .inner > ul > li {\n      display: inline-block;\n      position: relative;\n      float: left;\n      margin: 0;\n      height: 100%;\n      -webkit-align-self: flex-start;\n          -ms-flex-item-align: start;\n              align-self: flex-start; }\n      #navigation .inner > ul > li.right {\n        float: right;\n        margin-left: auto;\n        -webkit-align-self: flex-end;\n            -ms-flex-item-align: end;\n                align-self: flex-end; }\n        .ie9 #navigation .inner > ul > li.right {\n          float: none; }\n        #navigation .inner > ul > li.right a:hover {\n          background-color: rgba(0, 0, 0, 0.1); }\n      .ie9 #navigation .inner > ul > li {\n        display: table-cell;\n        float: none;\n        height: 50px;\n        vertical-align: bottom; }\n  #navigation .link > a {\n    display: block;\n    padding: 13px 15px 4px 15px;\n    height: 33px;\n    text-decoration: none;\n    white-space: nowrap;\n    color: white;\n    font-size: .85rem;\n    font-weight: bold; }\n    #navigation .link > a:hover {\n      background-color: rgba(0, 0, 0, 0.1); }\n",
          ""
        ]);
    },
    47: function(e, t, n) {
      var r = n(43);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    475: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.box {\n  display: inline-block;\n  border: 1px solid #d9d9d9;\n  border-radius: 10px 10px 0 0;\n  background-color: white;\n  width: 100%; }\n  @media only screen and (max-width: 479px) {\n    .box {\n      width: 18.75em; }\n      .box .box-header h4,\n      .box .box-header h5 {\n        line-height: .9rem;\n        font-size: .9rem; } }\n  @media only screen and (min-width: 480px) and (max-width: 767px) {\n    .box {\n      width: 28.75em; }\n      .box .box-header h4,\n      .box .box-header h5 {\n        line-height: 1rem;\n        font-size: 1rem; } }\n  @media only screen and (min-width: 768px) and (max-width: 941px) {\n    .box {\n      width: 38.75em; }\n      .box .box-header h4,\n      .box .box-header h5 {\n        line-height: 1.1rem;\n        font-size: 1.1rem; } }\n  @media only screen and (min-width: 942px) {\n    .box {\n      width: 58.75em; }\n      .box .box-header h4,\n      .box .box-header h5 {\n        line-height: 1.1rem;\n        font-size: 1.1rem; } }\n  .box .box-header {\n    display: block;\n    clear: both;\n    margin: 0;\n    border-top: 1px solid white;\n    border-bottom: 1px solid #d9d9d9;\n    border-radius: 10px 10px 0 0;\n    background-color: #f2f2f2;\n    padding: 8px 20px;\n    height: 20px;\n    overflow: hidden; }\n    .box .box-header h4,\n    .box .box-header h5 {\n      display: inline-block;\n      float: left; }\n    .box .box-header h5 {\n      margin: 0;\n      padding-left: 5px;\n      text-transform: none;\n      letter-spacing: normal;\n      font-weight: normal; }\n    .box .box-header p {\n      display: inline-block;\n      float: right;\n      margin: 1px 0 0 0;\n      padding: 0;\n      font-size: .85rem; }\n  .box .box-content {\n    display: block;\n    clear: both;\n    background-color: white;\n    padding: 8px 20px; }\n  .box .empty {\n    margin-top: 20px; }\n",
          ""
        ]);
    },
    476: function(e, t) {
      function n(e, t) {
        var n = 0,
          r = e.length;
        for (n; n < r && !1 !== t(e[n], n); n++);
      }
      function r(e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      }
      function o(e) {
        return "function" == typeof e;
      }
      e.exports = { isFunction: o, isArray: r, each: n };
    },
    48: function(e, t, n) {
      var r = n(44);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    49: function(e, t, n) {
      var r = n(45);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    50: function(e, t, n) {
      var r = n(46);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    502: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = {
          className: "",
          accessibility: !0,
          adaptiveHeight: !1,
          arrows: !0,
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(e) {
            return o.default.createElement("button", null, e + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: !1,
          pauseOnHover: !0,
          responsive: null,
          rtl: !1,
          slide: "div",
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          variableWidth: !1,
          vertical: !1,
          waitForAnimate: !0,
          afterChange: null,
          beforeChange: null,
          edgeEvent: null,
          init: null,
          swipeEvent: null,
          nextArrow: null,
          prevArrow: null
        };
      e.exports = i;
    },
    503: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0),
        (t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = void 0);
      var o = n(39),
        i = r(o),
        a = n(158),
        s = r(a),
        l = function(e, t) {
          return t.reduce(function(t, n) {
            return t && e.hasOwnProperty(n);
          }, !0)
            ? null
            : console.error("Keys Missing", e);
        },
        c = (t.getTrackCSS = function(e) {
          l(e, [
            "left",
            "variableWidth",
            "slideCount",
            "slidesToShow",
            "slideWidth"
          ]);
          var t,
            n,
            r = e.slideCount + 2 * e.slidesToShow;
          e.vertical
            ? (n = r * e.slideHeight)
            : (t = e.variableWidth
                ? (e.slideCount + 2 * e.slidesToShow) * e.slideWidth
                : e.centerMode
                ? (e.slideCount + 2 * (e.slidesToShow + 1)) * e.slideWidth
                : (e.slideCount + 2 * e.slidesToShow) * e.slideWidth);
          var o = {
            opacity: 1,
            WebkitTransform: e.vertical
              ? "translate3d(0px, " + e.left + "px, 0px)"
              : "translate3d(" + e.left + "px, 0px, 0px)",
            transform: e.vertical
              ? "translate3d(0px, " + e.left + "px, 0px)"
              : "translate3d(" + e.left + "px, 0px, 0px)",
            transition: "",
            WebkitTransition: "",
            msTransform: e.vertical
              ? "translateY(" + e.left + "px)"
              : "translateX(" + e.left + "px)"
          };
          return (
            t && (0, s.default)(o, { width: t }),
            n && (0, s.default)(o, { height: n }),
            window &&
              !window.addEventListener &&
              window.attachEvent &&
              (e.vertical
                ? (o.marginTop = e.left + "px")
                : (o.marginLeft = e.left + "px")),
            o
          );
        });
      (t.getTrackAnimateCSS = function(e) {
        l(e, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth",
          "speed",
          "cssEase"
        ]);
        var t = c(e);
        return (
          (t.WebkitTransition =
            "-webkit-transform " + e.speed + "ms " + e.cssEase),
          (t.transition = "transform " + e.speed + "ms " + e.cssEase),
          t
        );
      }),
        (t.getTrackLeft = function(e) {
          l(e, [
            "slideIndex",
            "trackRef",
            "infinite",
            "centerMode",
            "slideCount",
            "slidesToShow",
            "slidesToScroll",
            "slideWidth",
            "listWidth",
            "variableWidth",
            "slideHeight"
          ]);
          var t,
            n,
            r = 0,
            o = 0;
          if (e.fade) return 0;
          if (e.infinite)
            e.slideCount >= e.slidesToShow &&
              ((r = e.slideWidth * e.slidesToShow * -1),
              (o = e.slideHeight * e.slidesToShow * -1)),
              e.slideCount % e.slidesToScroll != 0 &&
                e.slideIndex + e.slidesToScroll > e.slideCount &&
                e.slideCount > e.slidesToShow &&
                (e.slideIndex > e.slideCount
                  ? ((r =
                      (e.slidesToShow - (e.slideIndex - e.slideCount)) *
                      e.slideWidth *
                      -1),
                    (o =
                      (e.slidesToShow - (e.slideIndex - e.slideCount)) *
                      e.slideHeight *
                      -1))
                  : ((r =
                      (e.slideCount % e.slidesToScroll) * e.slideWidth * -1),
                    (o =
                      (e.slideCount % e.slidesToScroll) * e.slideHeight * -1)));
          else if (
            e.slideCount % e.slidesToScroll != 0 &&
            e.slideIndex + e.slidesToScroll > e.slideCount &&
            e.slideCount > e.slidesToShow
          ) {
            var a = e.slidesToShow - (e.slideCount % e.slidesToScroll);
            r = a * e.slideWidth;
          }
          if (
            (e.centerMode &&
              (e.infinite
                ? (r += e.slideWidth * Math.floor(e.slidesToShow / 2))
                : (r = e.slideWidth * Math.floor(e.slidesToShow / 2))),
            (t = e.vertical
              ? e.slideIndex * e.slideHeight * -1 + o
              : e.slideIndex * e.slideWidth * -1 + r),
            !0 === e.variableWidth)
          ) {
            var s;
            e.slideCount <= e.slidesToShow || !1 === e.infinite
              ? (n = i.default.findDOMNode(e.trackRef).childNodes[e.slideIndex])
              : ((s = e.slideIndex + e.slidesToShow),
                (n = i.default.findDOMNode(e.trackRef).childNodes[s])),
              (t = n ? -1 * n.offsetLeft : 0),
              !0 === e.centerMode &&
                (n =
                  !1 === e.infinite
                    ? i.default.findDOMNode(e.trackRef).children[e.slideIndex]
                    : i.default.findDOMNode(e.trackRef).children[
                        e.slideIndex + e.slidesToShow + 1
                      ]) &&
                (t = -1 * n.offsetLeft + (e.listWidth - n.offsetWidth) / 2);
          }
          return t;
        });
    },
    504: function(e, t, n) {
      var r = n(475);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    506: function(e, t) {
      e.exports =
        "data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=";
    },
    51: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = n(1),
        i = n(5);
      n(60);
      var a = function(e) {
        var t = e.className,
          n = e.color;
        return r.createElement("img", {
          alt: "loading animation",
          className: i("studio-status-icon-spinner", t),
          src: "/svgs/modal/spinner-" + n + ".svg"
        });
      };
      (a.defaultProps = { color: "white" }),
        (a.propTypes = {
          className: o.string,
          color: o.oneOf(["white", "blue", "transparent-gray"])
        }),
        (e.exports = a);
    },
    52: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.title-banner {\n  transition: background-image .5s ease, background-color .5s ease;\n  margin-bottom: 40px;\n  background-color: #0fbd8c;\n  background-position: center;\n  background-size: cover;\n  padding: 20px 0;\n  width: 100%; }\n\n.title-banner-h1,\n.title-banner-p {\n  margin: 0 auto;\n  padding: 5px 0;\n  text-align: center;\n  color: white; }\n\n.title-banner-p {\n  max-width: 500px; }\n\n.title-banner-strong {\n  font-weight: 700; }\n\n.title-banner.mod-blue-bg {\n  background-color: #4d97ff; }\n  .title-banner.mod-blue-bg a {\n    color: white; }\n  .title-banner.mod-blue-bg a.mod-underline {\n    text-decoration: underline; }\n",
          ""
        ]);
    },
    521: function(e, t, n) {
      "use strict";
      e.exports = n(708);
    },
    524: function(e, t, n) {
      var r = n(571);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    525: function(e, t, n) {
      var r = n(572);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    526: function(e, t, n) {
      var r = n(574);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    528: function(e, t) {
      e.exports = [
        {
          id: 1,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        },
        {
          id: 2,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        },
        {
          id: 3,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        },
        {
          id: 4,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        },
        {
          id: 5,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        },
        {
          id: 6,
          type: "project",
          title: "Project",
          thumbnailUrl: "",
          creator: "",
          href: "#"
        }
      ];
    },
    529: function(e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(5),
        i = n(213),
        a = n(1),
        s = n(0),
        l = n(521).default,
        c = n(263),
        u = n(55);
      n(525), n(524), n(526);
      var d = function(e) {
        i(e.settings, {
          centerMode: !1,
          dots: !1,
          infinite: !1,
          lazyLoad: !0,
          slidesToShow: 5,
          slidesToScroll: 5,
          variableWidth: !0,
          responsive: [
            {
              breakpoint: u.mobile,
              settings: {
                arrows: !0,
                slidesToScroll: 1,
                slidesToShow: 1,
                centerMode: !0
              }
            },
            {
              breakpoint: u.mobileIntermediate,
              settings: { slidesToScroll: 2, slidesToShow: 2 }
            },
            {
              breakpoint: u.desktop,
              settings: { slidesToScroll: 4, slidesToShow: 4 }
            }
          ]
        });
        var t = e.items.length > e.settings.slidesToShow;
        return s.createElement(
          l,
          r({ arrows: t, className: o("carousel", e.className) }, e.settings),
          e.items.map(function(t) {
            var n = "";
            switch (e.type) {
              case "gallery":
                n = "/studios/" + t.id + "/";
                break;
              case "project":
                n = "/projects/" + t.id + "/";
                break;
              default:
                n = "/" + t.type + "/" + t.id + "/";
            }
            return s.createElement(c, {
              creator: t.author.username,
              href: n,
              key: [e.type, t.id].join("."),
              loves: t.stats.loves,
              remixes: t.stats.remixes,
              showLoves: e.showLoves,
              showRemixes: e.showRemixes,
              src: t.image,
              title: t.title,
              type: e.type
            });
          })
        );
      };
      (d.propTypes = {
        className: a.string,
        items: a.arrayOf(a.any),
        settings: a.shape({
          centerMode: a.bool,
          dots: a.bool,
          infinite: a.bool,
          lazyLoad: a.bool,
          slidesToShow: a.number,
          slidesToScroll: a.number,
          variableWidth: a.bool,
          responsive: a.array
        }),
        showLoves: a.bool,
        showRemixes: a.bool,
        type: a.string
      }),
        (d.defaultProps = {
          items: n(528),
          settings: {},
          showRemixes: !1,
          showLoves: !1,
          type: "project"
        }),
        (e.exports = d);
    },
    53: function(e, t, n) {
      var r = n(52);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    531: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0),
        i = n(5);
      n(733);
      var a = function(e) {
        return o.createElement(
          "div",
          { className: i("video-player", e.className) },
          o.createElement("iframe", {
            allowFullScreen: !0,
            frameBorder: "0",
            height: e.height,
            scrolling: "no",
            src:
              "https://fast.wistia.net/embed/iframe/" +
              e.videoId +
              "?seo=false&videoFoam=true",
            title: e.title,
            width: e.width
          }),
          o.createElement("script", {
            async: !0,
            src: "https://fast.wistia.net/assets/external/E-v1.js"
          })
        );
      };
      (a.defaultProps = { height: "225", title: "", width: "400" }),
        (a.propTypes = {
          className: r.string,
          height: r.string.isRequired,
          title: r.string.isRequired,
          videoId: r.string.isRequired,
          width: r.string.isRequired
        }),
        (e.exports = a);
    },
    54: function(e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(5),
        i = n(13),
        a = n(1),
        s = n(0),
        l = function(e) {
          return s.createElement(
            "img",
            r({ className: o("avatar", e.className) }, i(e, ["className"]))
          );
        };
      (l.propTypes = { className: a.string, src: a.string }),
        (l.defaultProps = {
          src:
            "//cdn2.scratch.mit.edu/get_image/user/2584924_24x24.png?v=1438702210.96"
        }),
        (e.exports = l);
    },
    549: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(717);
      var a = function(e) {
        var t = e.className,
          n = e.children,
          o = e.isOpen,
          a = e.onOpen,
          s = e.onClose;
        return i.createElement(
          "div",
          { className: r("admin-panel", t, { hidden: !o }) },
          o
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "span",
                  { className: "toggle", onClick: s },
                  "x"
                ),
                i.createElement(
                  "div",
                  { className: "admin-header" },
                  i.createElement("h3", null, "Admin Panel")
                ),
                i.createElement("div", { className: "admin-content" }, n)
              )
            : i.createElement("span", { className: "toggle", onClick: a }, ">")
        );
      };
      (a.propTypes = {
        children: o.node,
        className: o.string,
        isOpen: o.bool,
        onClose: o.func,
        onOpen: o.func
      }),
        (e.exports = a);
    },
    55: function(e, t, n) {
      "use strict";
      var r = {
        desktop: 942,
        mobileIntermediate: 640,
        tabletPortrait: 768,
        mobile: 480
      };
      e.exports = r;
    },
    56: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.row label {\n  font-weight: 500; }\n\n.input {\n  transition: all .5s ease;\n  margin-bottom: .75rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #fafafa;\n  padding: 0 1rem;\n  height: 3rem;\n  color: #575e75;\n  font-size: .875rem;\n  /* IE10/11-specific style resets */ }\n  .input:focus {\n    transition: all .5s ease;\n    outline: none;\n    border: 1px solid #4d97ff; }\n  .input.fail {\n    border: 1px solid #ffab1a; }\n  .input.pass {\n    border: 1px solid #0fbd8c; }\n  .input::-ms-reveal, .input::-ms-clear {\n    display: none; }\n",
          ""
        ]);
    },
    565: function(e, t) {
      var n = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = n;
    },
    57: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          ".studio-status-icon-spinner {\n  /* This class can be used on an icon that should spin.\n    It first plays the intro animation, then spins forever. */\n  -webkit-animation-name: intro, spin;\n          animation-name: intro, spin;\n  -webkit-animation-duration: .25s, 1s;\n          animation-duration: .25s, 1s;\n  -webkit-animation-timing-function: cubic-bezier(0.3, -3, 0.6, 3), cubic-bezier(0.4, 0.1, 0.4, 1);\n          animation-timing-function: cubic-bezier(0.3, -3, 0.6, 3), cubic-bezier(0.4, 0.1, 0.4, 1);\n  -webkit-animation-delay: 0s, .25s;\n          animation-delay: 0s, .25s;\n  -webkit-animation-iteration-count: 1, infinite;\n          animation-iteration-count: 1, infinite;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  width: 1.4rem;\n  /* standard is 1.4 rem but can be overwritten by parent */\n  height: 1.4rem;\n  -webkit-transform-origin: center;\n      -ms-transform-origin: center;\n          transform-origin: center; }\n\n@-webkit-keyframes intro {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes intro {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n",
          ""
        ]);
    },
    571: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '@charset "UTF-8";\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(' +
            n(737) +
            ') center center no-repeat; }\n\n/* Icons */\n@font-face {\n  font-family: "slick";\n  src: url(' +
            n(506) +
            ");\n  src: url(" +
            n(506) +
            '?#iefix) format("embedded-opentype"), url(' +
            n(740) +
            ') format("woff"), url(' +
            n(739) +
            ') format("truetype"), url(' +
            n(738) +
            '#slick) format("svg");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none; }\n  .slick-prev:hover, .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    outline: none;\n    background: transparent;\n    color: transparent; }\n    .slick-prev:hover:before, .slick-prev:focus:before,\n    .slick-next:hover:before,\n    .slick-next:focus:before {\n      opacity: 1; }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25; }\n  .slick-prev:before,\n  .slick-next:before {\n    font-family: "slick";\n    font-size: 20px;\n    line-height: 1;\n    color: white;\n    opacity: 0.75;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.slick-prev {\n  left: -25px; }\n  [dir="rtl"] .slick-prev {\n    left: auto;\n    right: -25px; }\n  .slick-prev:before {\n    content: "\\2190"; }\n    [dir="rtl"] .slick-prev:before {\n      content: "\\2192"; }\n\n.slick-next {\n  right: -25px; }\n  [dir="rtl"] .slick-next {\n    left: -25px;\n    right: auto; }\n  .slick-next:before {\n    content: "\\2192"; }\n    [dir="rtl"] .slick-next:before {\n      content: "\\2190"; }\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px; }\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n  .slick-dots li {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    margin: 0 5px;\n    padding: 0;\n    cursor: pointer; }\n    .slick-dots li button {\n      border: 0;\n      background: transparent;\n      display: block;\n      height: 20px;\n      width: 20px;\n      outline: none;\n      line-height: 0px;\n      font-size: 0px;\n      color: transparent;\n      padding: 5px;\n      cursor: pointer; }\n      .slick-dots li button:hover, .slick-dots li button:focus {\n        outline: none; }\n        .slick-dots li button:hover:before, .slick-dots li button:focus:before {\n          opacity: 1; }\n      .slick-dots li button:before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: "\\2022";\n        width: 20px;\n        height: 20px;\n        font-family: "slick";\n        font-size: 6px;\n        line-height: 20px;\n        text-align: center;\n        color: black;\n        opacity: 0.25;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n    .slick-dots li.slick-active button:before {\n      color: black;\n      opacity: 0.75; }\n',
          ""
        ]);
    },
    572: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block; }\n  .slick-track:before, .slick-track:after {\n    content: "";\n    display: table; }\n  .slick-track:after {\n    clear: both; }\n  .slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n  [dir="rtl"] .slick-slide {\n    float: right; }\n  .slick-slide img {\n    display: block; }\n  .slick-slide.slick-loading img {\n    display: none; }\n  .slick-slide.dragging img {\n    pointer-events: none; }\n  .slick-initialized .slick-slide {\n    display: block; }\n  .slick-loading .slick-slide {\n    visibility: hidden; }\n  .slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n',
          ""
        ]);
    },
    573: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.admin-panel {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  border: 1px solid #f2f2f2;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  background-color: #f2f2f2;\n  padding: 1rem;\n  width: 230px;\n  height: 100%;\n  overflow: scroll;\n  text-shadow: none; }\n  .admin-panel.hidden {\n    width: 10px; }\n  .admin-panel .toggle {\n    float: right;\n    cursor: pointer; }\n  .admin-panel .button-row {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: small;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .admin-panel .button-row .button {\n      padding: .5rem 1rem; }\n      .admin-panel .button-row .button.inprogress {\n        background-color: #b3b3b3;\n        color: #575e75; }\n",
          ""
        ]);
    },
    574: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          '/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n.carousel {\n  margin-bottom: 0;\n  padding: 12px 45px; }\n  .box-content .carousel {\n    padding: 12px 25px; }\n  .carousel .slick-next,\n  .carousel .slick-prev {\n    margin-top: -20px;\n    width: 40px;\n    height: 40px; }\n    .carousel .slick-next:before,\n    .carousel .slick-prev:before {\n      display: block;\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: 70%;\n      width: 40px;\n      height: 40px;\n      font-size: 40px;\n      content: ""; }\n    .carousel .slick-next.slick-disabled:before,\n    .carousel .slick-prev.slick-disabled:before {\n      opacity: 1; }\n  .carousel .slick-prev {\n    left: 0; }\n    .carousel .slick-prev:before {\n      background-image: url("/svgs/carousel/prev_ui-dark-gray.svg"); }\n      .carousel .slick-prev:before:hover {\n        background-image: url("/svgs/carousel/prev_ui-blue.svg");\n        background-size: 90%; }\n    .box-content .carousel .slick-prev {\n      left: -20px; }\n  .carousel .slick-next {\n    right: 0; }\n    .carousel .slick-next:before {\n      background-image: url("/svgs/carousel/next_ui-dark-gray.svg"); }\n      .carousel .slick-next:before:hover {\n        background-image: url("/svgs/carousel/next_ui-blue.svg");\n        background-size: 90%; }\n    .box-content .carousel .slick-next {\n      right: -20px; }\n  .carousel .slick-slide {\n    padding-right: 30px; }\n',
          ""
        ]);
    },
    58: function(e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function i(e, t, n) {
        return (
          e === t ||
          (e.correspondingElement
            ? e.correspondingElement.classList.contains(n)
            : e.classList.contains(n))
        );
      }
      function a(e, t, n) {
        if (e === t) return !0;
        for (; e.parentNode; ) {
          if (i(e, t, n)) return !0;
          e = e.parentNode;
        }
        return e;
      }
      function s(e) {
        return (
          document.documentElement.clientWidth <= e.clientX ||
          document.documentElement.clientHeight <= e.clientY
        );
      }
      function l(e, t) {
        var n = null;
        return (
          -1 !== A.indexOf(t) &&
            u &&
            (n = { passive: !e.props.preventDefault }),
          n
        );
      }
      function c(e, t) {
        var i, c;
        return (
          (c = i = (function(i) {
            function c(e) {
              var t;
              return (
                (t = i.call(this, e) || this),
                (t.__outsideClickHandler = function(e) {
                  if ("function" == typeof t.__clickOutsideHandlerProp)
                    return void t.__clickOutsideHandlerProp(e);
                  var n = t.getInstance();
                  if ("function" == typeof n.props.handleClickOutside)
                    return void n.props.handleClickOutside(e);
                  if ("function" == typeof n.handleClickOutside)
                    return void n.handleClickOutside(e);
                  throw new Error(
                    "WrappedComponent lacks a handleClickOutside(event) function for processing outside click events."
                  );
                }),
                (t.enableOnClickOutside = function() {
                  if ("undefined" != typeof document && !g[t._uid]) {
                    void 0 === u && (u = f()), (g[t._uid] = !0);
                    var e = t.props.eventTypes;
                    e.forEach || (e = [e]),
                      (m[t._uid] = function(e) {
                        if (
                          !t.props.disableOnClickOutside &&
                          null !== t.componentNode &&
                          (t.props.preventDefault && e.preventDefault(),
                          t.props.stopPropagation && e.stopPropagation(),
                          !t.props.excludeScrollbar || !s(e))
                        ) {
                          a(
                            e.target,
                            t.componentNode,
                            t.props.outsideClickIgnoreClass
                          ) === document && t.__outsideClickHandler(e);
                        }
                      }),
                      e.forEach(function(e) {
                        document.addEventListener(e, m[t._uid], l(t, e));
                      });
                  }
                }),
                (t.disableOnClickOutside = function() {
                  delete g[t._uid];
                  var e = m[t._uid];
                  if (e && "undefined" != typeof document) {
                    var n = t.props.eventTypes;
                    n.forEach || (n = [n]),
                      n.forEach(function(n) {
                        return document.removeEventListener(n, e, l(t, n));
                      }),
                      delete m[t._uid];
                  }
                }),
                (t.getRef = function(e) {
                  return (t.instanceRef = e);
                }),
                (t._uid = h()),
                t
              );
            }
            r(c, i);
            var A = c.prototype;
            return (
              (A.getInstance = function() {
                if (!e.prototype.isReactComponent) return this;
                var t = this.instanceRef;
                return t.getInstance ? t.getInstance() : t;
              }),
              (A.componentDidMount = function() {
                if ("undefined" != typeof document && document.createElement) {
                  var e = this.getInstance();
                  if (
                    t &&
                    "function" == typeof t.handleClickOutside &&
                    ((this.__clickOutsideHandlerProp = t.handleClickOutside(e)),
                    "function" != typeof this.__clickOutsideHandlerProp)
                  )
                    throw new Error(
                      "WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option."
                    );
                  (this.componentNode = n.i(p.findDOMNode)(this.getInstance())),
                    this.enableOnClickOutside();
                }
              }),
              (A.componentDidUpdate = function() {
                this.componentNode = n.i(p.findDOMNode)(this.getInstance());
              }),
              (A.componentWillUnmount = function() {
                this.disableOnClickOutside();
              }),
              (A.render = function() {
                var t = this.props,
                  r = (t.excludeScrollbar, o(t, ["excludeScrollbar"]));
                return (
                  e.prototype.isReactComponent
                    ? (r.ref = this.getRef)
                    : (r.wrappedRef = this.getRef),
                  (r.disableOnClickOutside = this.disableOnClickOutside),
                  (r.enableOnClickOutside = this.enableOnClickOutside),
                  n.i(d.createElement)(e, r)
                );
              }),
              c
            );
          })(d.Component)),
          (i.displayName =
            "OnClickOutside(" + (e.displayName || e.name || "Component") + ")"),
          (i.defaultProps = {
            eventTypes: ["mousedown", "touchstart"],
            excludeScrollbar: (t && t.excludeScrollbar) || !1,
            outsideClickIgnoreClass: v,
            preventDefault: !1,
            stopPropagation: !1
          }),
          (i.getClass = function() {
            return e.getClass ? e.getClass() : e;
          }),
          c
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n.d(t, "IGNORE_CLASS_NAME", function() {
          return v;
        });
      var u,
        d = n(0),
        p = (n.n(d), n(39)),
        f =
          (n.n(p),
          function() {
            if (
              "undefined" != typeof window &&
              "function" == typeof window.addEventListener
            ) {
              var e = !1,
                t = Object.defineProperty({}, "passive", {
                  get: function() {
                    e = !0;
                  }
                }),
                n = function() {};
              return (
                window.addEventListener("testPassiveEventSupport", n, t),
                window.removeEventListener("testPassiveEventSupport", n, t),
                e
              );
            }
          }),
        h = (function(e) {
          return (
            void 0 === e && (e = 0),
            function() {
              return ++e;
            }
          );
        })(),
        m = {},
        g = {},
        A = ["touchstart", "touchmove"],
        v = "ignore-react-onclickoutside";
      t.default = c;
    },
    589: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.social-message {\n  margin: 0;\n  border-bottom: 1px solid #d9d9d9;\n  padding: 1rem;\n  list-style-type: none; }\n\n.social-message-icon {\n  opacity: .25; }\n\n.social-message.mod-unread {\n  background-color: rgba(77, 151, 255, 0.1); }\n\n.social-message.mod-unread .social-message-icon {\n  opacity: 1; }\n\n.flex-row.mod-social-message {\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n              -ms-grid-row-align: flex-start;\n          align-items: flex-start; }\n\n.social-message-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 38.75rem;\n  text-align: left;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.social-message-icon {\n  margin: .2rem 1rem 0 0;\n  min-width: 1.25rem; }\n\na.social-messages-profile-link {\n  color: #575e75; }\n  a.social-messages-profile-link:hover {\n    color: #4d97ff; }\n\n.flex-row.mod-comment-message {\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.comment-text {\n  margin-left: 1.5rem; }\n\n@media only screen and (max-width: 479px) {\n  .social-message {\n    text-align: left; }\n  .social-message-date {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end; }\n  .social-message-content {\n    max-width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .social-message {\n    text-align: left; }\n  .social-message-date {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end; }\n  .social-message-content {\n    max-width: 100%; } }\n",
          ""
        ]);
    },
    59: function(e, t, n) {
      var r = n(56);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    591: function(e, t, n) {
      (t = e.exports = n(2)()),
        t.push([
          e.i,
          "/* UI Primary Colors */\n/* #FF661A */\n/* UI Secondary Colors */\n/* 3.0 colors */\n/* Using www naming convention for now, should be consistent with gui */\n/* #CF63CF Sounds Primary */\n/* modals */\n/* Overlay UI Gray Colors */\n/* Typography Colors */\n/* Down Deep */\n/*\n    Frameless           <http://framelessgrid.com/>\n    by Joni Korpi       <http://jonikorpi.com/>\n    licensed under CC0  <http://creativecommons.org/publicdomain/zero/1.0/>\n*/\n/* Media Queries */\n/* Width */\n/*\n* ... small | medium     | intermediate | big ...\n* ... medium-and-smaller |\n*          ... intermediate-and-smaller |\n*/\n/* Height */\n@media only screen and (max-width: 479px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 100%; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 480px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 941px) {\n  #view {\n    text-align: center; }\n  .inner {\n    margin: 0 auto;\n    width: 768px; } }\n\n@media only screen and (min-width: 942px) {\n  .inner {\n    margin: 0 auto;\n    width: 942px; } }\n\n.video-player {\n  border: 0.25rem solid rgba(0, 0, 0, 0.15);\n  border-radius: .75rem;\n  height: 225px;\n  overflow: hidden; }\n",
          ""
        ]);
    },
    598: function(e, t, n) {
      function r(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var n = this;
        (this.listener = function(e) {
          (n.mql = e.currentTarget || e), n.assess();
        }),
          this.mql.addListener(this.listener);
      }
      var o = n(600),
        i = n(476).each;
      (r.prototype = {
        constuctor: r,
        addHandler: function(e) {
          var t = new o(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function(e) {
          var t = this.handlers;
          i(t, function(n, r) {
            if (n.equals(e)) return n.destroy(), !t.splice(r, 1);
          });
        },
        matches: function() {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
          i(this.handlers, function(e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function() {
          var e = this.matches() ? "on" : "off";
          i(this.handlers, function(t) {
            t[e]();
          });
        }
      }),
        (e.exports = r);
    },
    599: function(e, t, n) {
      function r() {
        if (!window.matchMedia)
          throw new Error(
            "matchMedia not present, legacy browsers require a polyfill"
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia("only all").matches);
      }
      var o = n(598),
        i = n(476),
        a = i.each,
        s = i.isFunction,
        l = i.isArray;
      (r.prototype = {
        constructor: r,
        register: function(e, t, n) {
          var r = this.queries,
            i = n && this.browserIsIncapable;
          return (
            r[e] || (r[e] = new o(e, i)),
            s(t) && (t = { match: t }),
            l(t) || (t = [t]),
            a(t, function(t) {
              s(t) && (t = { match: t }), r[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function(e, t) {
          var n = this.queries[e];
          return (
            n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
            this
          );
        }
      }),
        (e.exports = r);
    },
    6: function(e, t, n) {
      "use strict";
      function r(e, t) {
        function n() {
          this.constructor = e;
        }
        x(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function o(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function i(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function a(e, t) {
        return function(n, r) {
          t(n, r, e);
        };
      }
      function s(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            e.done
              ? o(e.value)
              : new n(function(t) {
                  t(e.value);
                }).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        function n(e) {
          return function(t) {
            return r([e, t]);
          };
        }
        function r(n) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; l; )
            try {
              if (
                ((o = 1),
                i &&
                  (a =
                    2 & n[0]
                      ? i.return
                      : n[0]
                      ? i.throw || ((a = i.return) && a.call(i), 0)
                      : i.next) &&
                  !(a = a.call(i, n[1])).done)
              )
                return a;
              switch (((i = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                case 0:
                case 1:
                  a = n;
                  break;
                case 4:
                  return l.label++, { value: n[1], done: !1 };
                case 5:
                  l.label++, (i = n[1]), (n = [0]);
                  continue;
                case 7:
                  (n = l.ops.pop()), l.trys.pop();
                  continue;
                default:
                  if (
                    ((a = l.trys),
                    !(a = a.length > 0 && a[a.length - 1]) &&
                      (6 === n[0] || 2 === n[0]))
                  ) {
                    l = 0;
                    continue;
                  }
                  if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                    l.label = n[1];
                    break;
                  }
                  if (6 === n[0] && l.label < a[1]) {
                    (l.label = a[1]), (a = n);
                    break;
                  }
                  if (a && l.label < a[2]) {
                    (l.label = a[2]), l.ops.push(n);
                    break;
                  }
                  a[2] && l.ops.pop(), l.trys.pop();
                  continue;
              }
              n = t.call(e, l);
            } catch (e) {
              (n = [6, e]), (i = 0);
            } finally {
              o = a = 0;
            }
          if (5 & n[0]) throw n[1];
          return { value: n[0] ? n[1] : void 0, done: !0 };
        }
        var o,
          i,
          a,
          s,
          l = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          };
        return (
          (s = { next: n(0), throw: n(1), return: n(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function() {
              return this;
            }),
          s
        );
      }
      function u(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function() {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              }
            };
      }
      function p(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function f() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(p(arguments[t]));
        return e;
      }
      function h() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            r[o] = i[a];
        return r;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function g(e, t, n) {
        function r(e) {
          u[e] &&
            (c[e] = function(t) {
              return new Promise(function(n, r) {
                d.push([e, t, n, r]) > 1 || o(e, t);
              });
            });
        }
        function o(e, t) {
          try {
            i(u[e](t));
          } catch (e) {
            l(d[0][3], e);
          }
        }
        function i(e) {
          e.value instanceof m
            ? Promise.resolve(e.value.v).then(a, s)
            : l(d[0][2], e);
        }
        function a(e) {
          o("next", e);
        }
        function s(e) {
          o("throw", e);
        }
        function l(e, t) {
          e(t), d.shift(), d.length && o(d[0][0], d[0][1]);
        }
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var c,
          u = n.apply(e, t || []),
          d = [];
        return (
          (c = {}),
          r("next"),
          r("throw"),
          r("return"),
          (c[Symbol.asyncIterator] = function() {
            return this;
          }),
          c
        );
      }
      function A(e) {
        function t(t, o) {
          n[t] = e[t]
            ? function(n) {
                return (r = !r)
                  ? { value: m(e[t](n)), done: "return" === t }
                  : o
                  ? o(n)
                  : n;
              }
            : o;
        }
        var n, r;
        return (
          (n = {}),
          t("next"),
          t("throw", function(e) {
            throw e;
          }),
          t("return"),
          (n[Symbol.iterator] = function() {
            return this;
          }),
          n
        );
      }
      function v(e) {
        function t(t) {
          r[t] =
            e[t] &&
            function(r) {
              return new Promise(function(o, i) {
                (r = e[t](r)), n(o, i, r.done, r.value);
              });
            };
        }
        function n(e, t, n, r) {
          Promise.resolve(r).then(function(t) {
            e({ value: t, done: n });
          }, t);
        }
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = e[Symbol.asyncIterator];
        return o
          ? o.call(e)
          : ((e = "function" == typeof d ? d(e) : e[Symbol.iterator]()),
            (r = {}),
            t("next"),
            t("throw"),
            t("return"),
            (r[Symbol.asyncIterator] = function() {
              return this;
            }),
            r);
      }
      function y(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function b(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function w(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.__extends = r),
        n.d(t, "__assign", function() {
          return E;
        }),
        (t.__rest = o),
        (t.__decorate = i),
        (t.__param = a),
        (t.__metadata = s),
        (t.__awaiter = l),
        (t.__generator = c),
        (t.__exportStar = u),
        (t.__values = d),
        (t.__read = p),
        (t.__spread = f),
        (t.__spreadArrays = h),
        (t.__await = m),
        (t.__asyncGenerator = g),
        (t.__asyncDelegator = A),
        (t.__asyncValues = v),
        (t.__makeTemplateObject = y),
        (t.__importStar = b),
        (t.__importDefault = w); /*! *****************************************************************************
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
      var x = function(e, t) {
          return (x =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        },
        E = function() {
          return (
            (E =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                  t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
            E.apply(this, arguments)
          );
        };
    },
    60: function(e, t, n) {
      var r = n(57);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    600: function(e, t) {
      function n(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      (n.prototype = {
        constructor: n,
        setup: function() {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function() {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function() {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function() {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function(e) {
          return this.options === e || this.options.match === e;
        }
      }),
        (e.exports = n);
    },
    601: function(e, t, n) {
      var r = n(599);
      e.exports = new r();
    },
    609: function(e, t, n) {
      var r = n(716),
        o = function(e) {
          return /[height|width]$/.test(e);
        },
        i = function(e) {
          var t = "",
            n = Object.keys(e);
          return (
            n.forEach(function(i, a) {
              var s = e[i];
              (i = r(i)),
                o(i) && "number" == typeof s && (s += "px"),
                (t +=
                  !0 === s
                    ? i
                    : !1 === s
                    ? "not " + i
                    : "(" + i + ": " + s + ")"),
                a < n.length - 1 && (t += " and ");
            }),
            t
          );
        },
        a = function(e) {
          var t = "";
          return "string" == typeof e
            ? e
            : e instanceof Array
            ? (e.forEach(function(n, r) {
                (t += i(n)), r < e.length - 1 && (t += ", ");
              }),
              t)
            : i(e);
        };
      e.exports = a;
    },
    61: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(127);
      var a = function(e) {
        var t = e.className,
          n = e.title;
        return i.createElement("div", { className: r("modal-title", t) }, n);
      };
      (a.propTypes = {
        className: o.string,
        title: o.oneOfType([o.string, o.node])
      }),
        (e.exports = a);
    },
    62: function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n(0));
      })(0, function(e) {
        return (function(e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.d = function(e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: r
                });
            }),
            (t.n = function(e) {
              var n =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return t.d(n, "a", n), n;
            }),
            (t.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 7))
          );
        })([
          function(e, t, n) {
            var r =
                ("function" == typeof Symbol &&
                  Symbol.for &&
                  Symbol.for("react.element")) ||
                60103,
              o = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r;
              };
            e.exports = n(9)(o, !0);
          },
          function(e, t, n) {
            "use strict";
            function r(e) {
              return function() {
                return e;
              };
            }
            var o = function() {};
            (o.thatReturns = r),
              (o.thatReturnsFalse = r(!1)),
              (o.thatReturnsTrue = r(!0)),
              (o.thatReturnsNull = r(null)),
              (o.thatReturnsThis = function() {
                return this;
              }),
              (o.thatReturnsArgument = function(e) {
                return e;
              }),
              (e.exports = o);
          },
          function(e, t, n) {
            "use strict";
            function r(e, t, n, r, i, a, s, l) {
              if ((o(t), !e)) {
                var c;
                if (void 0 === t)
                  c = new Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var u = [n, r, i, a, s, l],
                    d = 0;
                  (c = new Error(
                    t.replace(/%s/g, function() {
                      return u[d++];
                    })
                  )),
                    (c.name = "Invariant Violation");
                }
                throw ((c.framesToPop = 1), c);
              }
            }
            var o = function(e) {};
            (o = function(e) {
              if (void 0 === e)
                throw new Error("invariant requires an error message argument");
            }),
              (e.exports = r);
          },
          function(e, t, n) {
            "use strict";
            var r = n(1),
              o = r,
              i = function(e) {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                var o = 0,
                  i =
                    "Warning: " +
                    e.replace(/%s/g, function() {
                      return n[o++];
                    });
                "undefined" != typeof console && console.error(i);
                try {
                  throw new Error(i);
                } catch (e) {}
              };
            (o = function(e, t) {
              if (void 0 === t)
                throw new Error(
                  "`warning(condition, format, ...args)` requires a warning message argument"
                );
              if (0 !== t.indexOf("Failed Composite propType: ") && !e) {
                for (
                  var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
                  o < n;
                  o++
                )
                  r[o - 2] = arguments[o];
                i.apply(void 0, [t].concat(r));
              }
            }),
              (e.exports = o);
          },
          function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function(e, t, n) {
            "use strict";
            function r(e) {
              return e in a
                ? a[e]
                : (a[e] = e
                    .replace(o, "-$&")
                    .toLowerCase()
                    .replace(i, "-ms-"));
            }
            var o = /[A-Z]/g,
              i = /^ms-/,
              a = {};
            e.exports = r;
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                },
              o = n(0),
              i = (function(e) {
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
                resolution: a
              },
              l = r(
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
                  maxResolution: a
                },
                s
              ),
              c = {
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
                embossed: i.default.bool
              },
              u = r({}, c, l);
            (s.type = Object.keys(c)),
              (t.default = { all: u, types: c, matchers: s, features: l }),
              (e.exports = t.default);
          },
          function(e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function o(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function i(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            }
            function a(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            }
            function s(e, t) {
              var n = c({}, e);
              return (
                t.forEach(function(e) {
                  return delete n[e];
                }),
                n
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.toQuery = t.default = void 0);
            var l = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })(),
              c =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                },
              u = n(8),
              d = r(u),
              p = n(0),
              f = r(p),
              h = n(12),
              m = r(h),
              g = n(5),
              A = r(g),
              v = n(6),
              y = r(v),
              b = n(14),
              w = r(b),
              x = {
                component: f.default.node,
                query: f.default.string,
                values: f.default.shape(y.default.matchers),
                children: f.default.oneOfType([f.default.node, f.default.func]),
                onChange: f.default.func,
                onBeforeChange: f.default.func
              },
              E = Object.keys(y.default.all),
              k = Object.keys(x),
              C = k.concat(E),
              S = (function(e) {
                function t() {
                  var e, n, r, a;
                  o(this, t);
                  for (
                    var s = arguments.length, l = Array(s), c = 0;
                    c < s;
                    c++
                  )
                    l[c] = arguments[c];
                  return (
                    (n = r = i(
                      this,
                      (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                        e,
                        [this].concat(l)
                      )
                    )),
                    (r.state = { matches: !1 }),
                    (r.updateMatches = function() {
                      r._mql.matches !== r.state.matches &&
                        r.setState({ matches: r._mql.matches });
                    }),
                    (r.removeMql = function() {
                      r._mql &&
                        (r._mql.removeListener(r.updateMatches),
                        r._mql.dispose());
                    }),
                    (a = n),
                    i(r, a)
                  );
                }
                return (
                  a(t, e),
                  l(t, [
                    {
                      key: "componentWillMount",
                      value: function() {
                        this.updateQuery(this.props);
                      }
                    },
                    {
                      key: "componentWillReceiveProps",
                      value: function(e) {
                        this.updateQuery(e);
                      }
                    },
                    {
                      key: "updateQuery",
                      value: function(e) {
                        var t = void 0;
                        if (
                          (e.query
                            ? (this.query = e.query)
                            : (this.query = (0, w.default)(s(e, k))),
                          !this.query)
                        )
                          throw new Error("Invalid or missing MediaQuery!");
                        e.values &&
                          (t = Object.keys(e.values).reduce(function(t, n) {
                            return (t[(0, A.default)(n)] = e.values[n]), t;
                          }, {})),
                          this.removeMql(),
                          (this._mql = (0, m.default)(this.query, t)),
                          this._mql.addListener(this.updateMatches),
                          this.updateMatches();
                      }
                    },
                    {
                      key: "componentWillUpdate",
                      value: function(e, t) {
                        this.props.onBeforeChange &&
                          this.state.matches !== t.matches &&
                          this.props.onBeforeChange(this.state.matches);
                      }
                    },
                    {
                      key: "componentDidUpdate",
                      value: function(e, t) {
                        this.props.onChange &&
                          t.matches !== this.state.matches &&
                          this.props.onChange(this.state.matches);
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function() {
                        this.removeMql();
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        if ("function" == typeof this.props.children)
                          return this.props.children(this.state.matches);
                        if (!1 === this.state.matches) return null;
                        var e = s(this.props, C),
                          t = Object.keys(e).length > 0,
                          n = d.default.Children.count(this.props.children);
                        return this.props.component ||
                          n > 1 ||
                          "string" == typeof this.props.children ||
                          (Array.isArray(this.props.children) && 1 == n) ||
                          void 0 === this.props.children
                          ? d.default.createElement(
                              this.props.component || "div",
                              e,
                              this.props.children
                            )
                          : t
                          ? d.default.cloneElement(this.props.children, e)
                          : n
                          ? this.props.children
                          : null;
                      }
                    }
                  ]),
                  t
                );
              })(d.default.Component);
            (S.displayName = "MediaQuery"),
              (S.defaultProps = { values: {} }),
              (t.default = S),
              (t.toQuery = w.default);
          },
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            "use strict";
            var r = n(1),
              o = n(2),
              i = n(3),
              a = n(10),
              s = n(4),
              l = n(11);
            e.exports = function(e, t) {
              function n(e) {
                var t = e && ((S && e[S]) || e[_]);
                if ("function" == typeof t) return t;
              }
              function c(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
              }
              function u(e) {
                (this.message = e), (this.stack = "");
              }
              function d(e) {
                function n(n, l, c, d, p, f, h) {
                  if (((d = d || O), (f = f || c), h !== s))
                    if (t)
                      o(
                        !1,
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                    else if ("undefined" != typeof console) {
                      var m = d + ":" + c;
                      !r[m] &&
                        a < 3 &&
                        (i(
                          !1,
                          "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                          f,
                          d
                        ),
                        (r[m] = !0),
                        a++);
                    }
                  return null == l[c]
                    ? n
                      ? new u(
                          null === l[c]
                            ? "The " +
                              p +
                              " `" +
                              f +
                              "` is marked as required in `" +
                              d +
                              "`, but its value is `null`."
                            : "The " +
                              p +
                              " `" +
                              f +
                              "` is marked as required in `" +
                              d +
                              "`, but its value is `undefined`."
                        )
                      : null
                    : e(l, c, d, p, f);
                }
                var r = {},
                  a = 0,
                  l = n.bind(null, !1);
                return (l.isRequired = n.bind(null, !0)), l;
              }
              function p(e) {
                function t(t, n, r, o, i, a) {
                  var s = t[n];
                  if (x(s) !== e)
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
                return d(t);
              }
              function f(e) {
                function t(t, n, r, o, i) {
                  if ("function" != typeof e)
                    return new u(
                      "Property `" +
                        i +
                        "` of component `" +
                        r +
                        "` has invalid PropType notation inside arrayOf."
                    );
                  var a = t[n];
                  if (!Array.isArray(a)) {
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        x(a) +
                        "` supplied to `" +
                        r +
                        "`, expected an array."
                    );
                  }
                  for (var l = 0; l < a.length; l++) {
                    var c = e(a, l, r, o, i + "[" + l + "]", s);
                    if (c instanceof Error) return c;
                  }
                  return null;
                }
                return d(t);
              }
              function h(e) {
                function t(t, n, r, o, i) {
                  if (!(t[n] instanceof e)) {
                    var a = e.name || O;
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        C(t[n]) +
                        "` supplied to `" +
                        r +
                        "`, expected instance of `" +
                        a +
                        "`."
                    );
                  }
                  return null;
                }
                return d(t);
              }
              function m(e) {
                function t(t, n, r, o, i) {
                  for (var a = t[n], s = 0; s < e.length; s++)
                    if (c(a, e[s])) return null;
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
                  ? d(t)
                  : (i(
                      !1,
                      "Invalid argument supplied to oneOf, expected an instance of array."
                    ),
                    r.thatReturnsNull);
              }
              function g(e) {
                function t(t, n, r, o, i) {
                  if ("function" != typeof e)
                    return new u(
                      "Property `" +
                        i +
                        "` of component `" +
                        r +
                        "` has invalid PropType notation inside objectOf."
                    );
                  var a = t[n],
                    l = x(a);
                  if ("object" !== l)
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        l +
                        "` supplied to `" +
                        r +
                        "`, expected an object."
                    );
                  for (var c in a)
                    if (a.hasOwnProperty(c)) {
                      var d = e(a, c, r, o, i + "." + c, s);
                      if (d instanceof Error) return d;
                    }
                  return null;
                }
                return d(t);
              }
              function A(e) {
                function t(t, n, r, o, i) {
                  for (var a = 0; a < e.length; a++) {
                    if (null == (0, e[a])(t, n, r, o, i, s)) return null;
                  }
                  return new u(
                    "Invalid " + o + " `" + i + "` supplied to `" + r + "`."
                  );
                }
                if (!Array.isArray(e))
                  return (
                    i(
                      !1,
                      "Invalid argument supplied to oneOfType, expected an instance of array."
                    ),
                    r.thatReturnsNull
                  );
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  if ("function" != typeof o)
                    return (
                      i(
                        !1,
                        "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                        k(o),
                        n
                      ),
                      r.thatReturnsNull
                    );
                }
                return d(t);
              }
              function v(e) {
                function t(t, n, r, o, i) {
                  var a = t[n],
                    l = x(a);
                  if ("object" !== l)
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        l +
                        "` supplied to `" +
                        r +
                        "`, expected `object`."
                    );
                  for (var c in e) {
                    var d = e[c];
                    if (d) {
                      var p = d(a, c, r, o, i + "." + c, s);
                      if (p) return p;
                    }
                  }
                  return null;
                }
                return d(t);
              }
              function y(e) {
                function t(t, n, r, o, i) {
                  var l = t[n],
                    c = x(l);
                  if ("object" !== c)
                    return new u(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        c +
                        "` supplied to `" +
                        r +
                        "`, expected `object`."
                    );
                  var d = a({}, t[n], e);
                  for (var p in d) {
                    var f = e[p];
                    if (!f)
                      return new u(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` key `" +
                          p +
                          "` supplied to `" +
                          r +
                          "`.\nBad object: " +
                          JSON.stringify(t[n], null, "  ") +
                          "\nValid keys: " +
                          JSON.stringify(Object.keys(e), null, "  ")
                      );
                    var h = f(l, p, r, o, i + "." + p, s);
                    if (h) return h;
                  }
                  return null;
                }
                return d(t);
              }
              function b(t) {
                switch (typeof t) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !t;
                  case "object":
                    if (Array.isArray(t)) return t.every(b);
                    if (null === t || e(t)) return !0;
                    var r = n(t);
                    if (!r) return !1;
                    var o,
                      i = r.call(t);
                    if (r !== t.entries) {
                      for (; !(o = i.next()).done; ) if (!b(o.value)) return !1;
                    } else
                      for (; !(o = i.next()).done; ) {
                        var a = o.value;
                        if (a && !b(a[1])) return !1;
                      }
                    return !0;
                  default:
                    return !1;
                }
              }
              function w(e, t) {
                return (
                  "symbol" === e ||
                  ("Symbol" === t["@@toStringTag"] ||
                    ("function" == typeof Symbol && t instanceof Symbol))
                );
              }
              function x(e) {
                var t = typeof e;
                return Array.isArray(e)
                  ? "array"
                  : e instanceof RegExp
                  ? "object"
                  : w(t, e)
                  ? "symbol"
                  : t;
              }
              function E(e) {
                if (void 0 === e || null === e) return "" + e;
                var t = x(e);
                if ("object" === t) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp";
                }
                return t;
              }
              function k(e) {
                var t = E(e);
                switch (t) {
                  case "array":
                  case "object":
                    return "an " + t;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + t;
                  default:
                    return t;
                }
              }
              function C(e) {
                return e.constructor && e.constructor.name
                  ? e.constructor.name
                  : O;
              }
              var S = "function" == typeof Symbol && Symbol.iterator,
                _ = "@@iterator",
                O = "<<anonymous>>",
                I = {
                  array: p("array"),
                  bool: p("boolean"),
                  func: p("function"),
                  number: p("number"),
                  object: p("object"),
                  string: p("string"),
                  symbol: p("symbol"),
                  any: (function() {
                    return d(r.thatReturnsNull);
                  })(),
                  arrayOf: f,
                  element: (function() {
                    function t(t, n, r, o, i) {
                      var a = t[n];
                      if (!e(a)) {
                        return new u(
                          "Invalid " +
                            o +
                            " `" +
                            i +
                            "` of type `" +
                            x(a) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        );
                      }
                      return null;
                    }
                    return d(t);
                  })(),
                  instanceOf: h,
                  node: (function() {
                    function e(e, t, n, r, o) {
                      return b(e[t])
                        ? null
                        : new u(
                            "Invalid " +
                              r +
                              " `" +
                              o +
                              "` supplied to `" +
                              n +
                              "`, expected a ReactNode."
                          );
                    }
                    return d(e);
                  })(),
                  objectOf: g,
                  oneOf: m,
                  oneOfType: A,
                  shape: v,
                  exact: y
                };
              return (
                (u.prototype = Error.prototype),
                (I.checkPropTypes = l),
                (I.PropTypes = I),
                I
              );
            };
          },
          function(e, t, n) {
            "use strict";
            function r(e) {
              if (null === e || void 0 === e)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(e);
            } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
            var o = Object.getOwnPropertySymbols,
              i = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable;
            e.exports = (function() {
              try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                  return !1;
                for (var t = {}, n = 0; n < 10; n++)
                  t["_" + String.fromCharCode(n)] = n;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(t)
                    .map(function(e) {
                      return t[e];
                    })
                    .join("")
                )
                  return !1;
                var r = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                  }),
                  "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, r)).join("")
                );
              } catch (e) {
                return !1;
              }
            })()
              ? Object.assign
              : function(e, t) {
                  for (var n, s, l = r(e), c = 1; c < arguments.length; c++) {
                    n = Object(arguments[c]);
                    for (var u in n) i.call(n, u) && (l[u] = n[u]);
                    if (o) {
                      s = o(n);
                      for (var d = 0; d < s.length; d++)
                        a.call(n, s[d]) && (l[s[d]] = n[s[d]]);
                    }
                  }
                  return l;
                };
          },
          function(e, t, n) {
            "use strict";
            function r(e, t, n, r, l) {
              for (var c in e)
                if (e.hasOwnProperty(c)) {
                  var u;
                  try {
                    o(
                      "function" == typeof e[c],
                      "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",
                      r || "React class",
                      n,
                      c,
                      typeof e[c]
                    ),
                      (u = e[c](t, c, r, n, null, a));
                  } catch (e) {
                    u = e;
                  }
                  if (
                    (i(
                      !u || u instanceof Error,
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      r || "React class",
                      n,
                      c,
                      typeof u
                    ),
                    u instanceof Error && !(u.message in s))
                  ) {
                    s[u.message] = !0;
                    var d = l ? l() : "";
                    i(
                      !1,
                      "Failed %s type: %s%s",
                      n,
                      u.message,
                      null != d ? d : ""
                    );
                  }
                }
            }
            var o = n(2),
              i = n(3),
              a = n(4),
              s = {};
            e.exports = r;
          },
          function(e, t, n) {
            "use strict";
            function r(e, t) {
              function n(e) {
                c && c.addListener(e);
              }
              function r(e) {
                c && c.removeListener(e);
              }
              function o(e) {
                (l.matches = e.matches), (l.media = e.media);
              }
              function s() {
                c && c.removeListener(o);
              }
              var l = this;
              if (a) {
                var c = a.call(window, e);
                (this.matches = c.matches),
                  (this.media = c.media),
                  c.addListener(o);
              } else (this.matches = i(e, t)), (this.media = e);
              (this.addListener = n),
                (this.removeListener = r),
                (this.dispose = s);
            }
            function o(e, t) {
              return new r(e, t);
            }
            var i = n(13).match,
              a = "undefined" != typeof window ? window.matchMedia : null;
            e.exports = o;
          },
          function(e, t, n) {
            "use strict";
            function r(e, t) {
              return o(e).some(function(e) {
                var n = e.inverse,
                  r = "all" === e.type || t.type === e.type;
                if ((r && n) || (!r && !n)) return !1;
                var o = e.expressions.every(function(e) {
                  var n = e.feature,
                    r = e.modifier,
                    o = e.value,
                    l = t[n];
                  if (!l) return !1;
                  switch (n) {
                    case "orientation":
                    case "scan":
                      return l.toLowerCase() === o.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      (o = s(o)), (l = s(l));
                      break;
                    case "resolution":
                      (o = a(o)), (l = a(l));
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case "device-pixel-ratio":
                      (o = i(o)), (l = i(l));
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      (o = parseInt(o, 10) || 1), (l = parseInt(l, 10) || 0);
                  }
                  switch (r) {
                    case "min":
                      return l >= o;
                    case "max":
                      return l <= o;
                    default:
                      return l === o;
                  }
                });
                return (o && !n) || (!o && n);
              });
            }
            function o(e) {
              return e.split(",").map(function(e) {
                e = e.trim();
                var t = e.match(l),
                  n = t[1],
                  r = t[2],
                  o = t[3] || "",
                  i = {};
                return (
                  (i.inverse = !!n && "not" === n.toLowerCase()),
                  (i.type = r ? r.toLowerCase() : "all"),
                  (o = o.match(/\([^\)]+\)/g) || []),
                  (i.expressions = o.map(function(e) {
                    var t = e.match(c),
                      n = t[1].toLowerCase().match(u);
                    return { modifier: n[1], feature: n[2], value: t[2] };
                  })),
                  i
                );
              });
            }
            function i(e) {
              var t,
                n = Number(e);
              return (
                n || ((t = e.match(/^(\d+)\s*\/\s*(\d+)$/)), (n = t[1] / t[2])),
                n
              );
            }
            function a(e) {
              var t = parseFloat(e);
              switch (String(e).match(p)[1]) {
                case "dpcm":
                  return t / 2.54;
                case "dppx":
                  return 96 * t;
                default:
                  return t;
              }
            }
            function s(e) {
              var t = parseFloat(e);
              switch (String(e).match(d)[1]) {
                case "em":
                case "rem":
                  return 16 * t;
                case "cm":
                  return (96 * t) / 2.54;
                case "mm":
                  return (96 * t) / 2.54 / 10;
                case "in":
                  return 96 * t;
                case "pt":
                  return 72 * t;
                case "pc":
                  return (72 * t) / 12;
                default:
                  return t;
              }
            }
            (t.match = r), (t.parse = o);
            var l = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
              c = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
              u = /^(?:(min|max)-)?(.+)/,
              d = /(em|rem|px|cm|mm|in|pt|pc)?$/,
              p = /(dpi|dpcm|dppx)?$/;
          },
          function(e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function o(e, t) {
              var n = (0, s.default)(e);
              return (
                "number" == typeof t && (t += "px"),
                !0 === t ? e : !1 === t ? u(e) : "(" + n + ": " + t + ")"
              );
            }
            function i(e) {
              return e.join(" and ");
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function(e) {
                var t = [];
                return (
                  Object.keys(c.default.all).forEach(function(n) {
                    var r = e[n];
                    null != r && t.push(o(n, r));
                  }),
                  i(t)
                );
              });
            var a = n(5),
              s = r(a),
              l = n(6),
              c = r(l),
              u = function(e) {
                return "not " + e;
              };
            e.exports = t.default;
          }
        ]);
      });
    },
    63: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(144),
        l = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        c = n(1),
        u = n(0),
        d = n(64),
        p = n(92),
        f = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (n.state = { hasError: !1, errorId: null }), n;
          }
          return (
            i(t, e),
            a(t, [
              {
                key: "componentDidCatch",
                value: function(e, t) {
                  var n = this;
                  d.withScope(function(r) {
                    r.setTag("project", "scratch-www"),
                      n.props.componentName &&
                        r.setTag("component", n.props.componentName),
                      Object.keys(t).forEach(function(e) {
                        r.setExtra(e, t[e]);
                      }),
                      d.captureException(e);
                  }),
                    this.setState({ hasError: !0, errorId: d.lastEventId() }),
                    l.default.error("Unhandled Error: " + e + ", info: " + t);
                }
              },
              {
                key: "handleBack",
                value: function() {
                  window.history.back();
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.hasError
                    ? u.createElement(p, {
                        eventId: this.state.errorId,
                        onBack: this.handleBack
                      })
                    : this.props.children;
                }
              }
            ]),
            t
          );
        })(u.Component);
      (f.propTypes = { children: c.node, componentName: c.string }),
        (e.exports = f);
    },
    64: function(e, t, n) {
      "use strict";
      (function(e, r) {
        function o(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e;
        }
        function i(e, t) {
          return (t = { exports: {} }), e(t, t.exports), t.exports;
        }
        function a(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function s(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function l(e, t, n, r, o, i) {
          return a(s(a(a(t, e), a(r, i)), o), n);
        }
        function c(e, t, n, r, o, i, a) {
          return l((t & n) | (~t & r), e, t, o, i, a);
        }
        function u(e, t, n, r, o, i, a) {
          return l((t & r) | (n & ~r), e, t, o, i, a);
        }
        function d(e, t, n, r, o, i, a) {
          return l(t ^ n ^ r, e, t, o, i, a);
        }
        function p(e, t, n, r, o, i, a) {
          return l(n ^ (t | ~r), e, t, o, i, a);
        }
        function f(e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var n,
            r,
            o,
            i,
            s,
            l = 1732584193,
            f = -271733879,
            h = -1732584194,
            m = 271733878;
          for (n = 0; n < e.length; n += 16)
            (r = l),
              (o = f),
              (i = h),
              (s = m),
              (l = c(l, f, h, m, e[n], 7, -680876936)),
              (m = c(m, l, f, h, e[n + 1], 12, -389564586)),
              (h = c(h, m, l, f, e[n + 2], 17, 606105819)),
              (f = c(f, h, m, l, e[n + 3], 22, -1044525330)),
              (l = c(l, f, h, m, e[n + 4], 7, -176418897)),
              (m = c(m, l, f, h, e[n + 5], 12, 1200080426)),
              (h = c(h, m, l, f, e[n + 6], 17, -1473231341)),
              (f = c(f, h, m, l, e[n + 7], 22, -45705983)),
              (l = c(l, f, h, m, e[n + 8], 7, 1770035416)),
              (m = c(m, l, f, h, e[n + 9], 12, -1958414417)),
              (h = c(h, m, l, f, e[n + 10], 17, -42063)),
              (f = c(f, h, m, l, e[n + 11], 22, -1990404162)),
              (l = c(l, f, h, m, e[n + 12], 7, 1804603682)),
              (m = c(m, l, f, h, e[n + 13], 12, -40341101)),
              (h = c(h, m, l, f, e[n + 14], 17, -1502002290)),
              (f = c(f, h, m, l, e[n + 15], 22, 1236535329)),
              (l = u(l, f, h, m, e[n + 1], 5, -165796510)),
              (m = u(m, l, f, h, e[n + 6], 9, -1069501632)),
              (h = u(h, m, l, f, e[n + 11], 14, 643717713)),
              (f = u(f, h, m, l, e[n], 20, -373897302)),
              (l = u(l, f, h, m, e[n + 5], 5, -701558691)),
              (m = u(m, l, f, h, e[n + 10], 9, 38016083)),
              (h = u(h, m, l, f, e[n + 15], 14, -660478335)),
              (f = u(f, h, m, l, e[n + 4], 20, -405537848)),
              (l = u(l, f, h, m, e[n + 9], 5, 568446438)),
              (m = u(m, l, f, h, e[n + 14], 9, -1019803690)),
              (h = u(h, m, l, f, e[n + 3], 14, -187363961)),
              (f = u(f, h, m, l, e[n + 8], 20, 1163531501)),
              (l = u(l, f, h, m, e[n + 13], 5, -1444681467)),
              (m = u(m, l, f, h, e[n + 2], 9, -51403784)),
              (h = u(h, m, l, f, e[n + 7], 14, 1735328473)),
              (f = u(f, h, m, l, e[n + 12], 20, -1926607734)),
              (l = d(l, f, h, m, e[n + 5], 4, -378558)),
              (m = d(m, l, f, h, e[n + 8], 11, -2022574463)),
              (h = d(h, m, l, f, e[n + 11], 16, 1839030562)),
              (f = d(f, h, m, l, e[n + 14], 23, -35309556)),
              (l = d(l, f, h, m, e[n + 1], 4, -1530992060)),
              (m = d(m, l, f, h, e[n + 4], 11, 1272893353)),
              (h = d(h, m, l, f, e[n + 7], 16, -155497632)),
              (f = d(f, h, m, l, e[n + 10], 23, -1094730640)),
              (l = d(l, f, h, m, e[n + 13], 4, 681279174)),
              (m = d(m, l, f, h, e[n], 11, -358537222)),
              (h = d(h, m, l, f, e[n + 3], 16, -722521979)),
              (f = d(f, h, m, l, e[n + 6], 23, 76029189)),
              (l = d(l, f, h, m, e[n + 9], 4, -640364487)),
              (m = d(m, l, f, h, e[n + 12], 11, -421815835)),
              (h = d(h, m, l, f, e[n + 15], 16, 530742520)),
              (f = d(f, h, m, l, e[n + 2], 23, -995338651)),
              (l = p(l, f, h, m, e[n], 6, -198630844)),
              (m = p(m, l, f, h, e[n + 7], 10, 1126891415)),
              (h = p(h, m, l, f, e[n + 14], 15, -1416354905)),
              (f = p(f, h, m, l, e[n + 5], 21, -57434055)),
              (l = p(l, f, h, m, e[n + 12], 6, 1700485571)),
              (m = p(m, l, f, h, e[n + 3], 10, -1894986606)),
              (h = p(h, m, l, f, e[n + 10], 15, -1051523)),
              (f = p(f, h, m, l, e[n + 1], 21, -2054922799)),
              (l = p(l, f, h, m, e[n + 8], 6, 1873313359)),
              (m = p(m, l, f, h, e[n + 15], 10, -30611744)),
              (h = p(h, m, l, f, e[n + 6], 15, -1560198380)),
              (f = p(f, h, m, l, e[n + 13], 21, 1309151649)),
              (l = p(l, f, h, m, e[n + 4], 6, -145523070)),
              (m = p(m, l, f, h, e[n + 11], 10, -1120210379)),
              (h = p(h, m, l, f, e[n + 2], 15, 718787259)),
              (f = p(f, h, m, l, e[n + 9], 21, -343485551)),
              (l = a(l, r)),
              (f = a(f, o)),
              (h = a(h, i)),
              (m = a(m, s));
          return [l, f, h, m];
        }
        function h(e) {
          var t,
            n = "",
            r = 32 * e.length;
          for (t = 0; t < r; t += 8)
            n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return n;
        }
        function m(e) {
          var t,
            n = [];
          for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
            n[t] = 0;
          var r = 8 * e.length;
          for (t = 0; t < r; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return n;
        }
        function g(e) {
          return h(f(m(e), 8 * e.length));
        }
        function A(e, t) {
          var n,
            r,
            o = m(e),
            i = [],
            a = [];
          for (
            i[15] = a[15] = void 0,
              o.length > 16 && (o = f(o, 8 * e.length)),
              n = 0;
            n < 16;
            n += 1
          )
            (i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]);
          return (
            (r = f(i.concat(m(t)), 512 + 8 * t.length)), h(f(a.concat(r), 640))
          );
        }
        function v(e) {
          var t,
            n,
            r = "0123456789abcdef",
            o = "";
          for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
              (o += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
          return o;
        }
        function y(e) {
          return unescape(encodeURIComponent(e));
        }
        function b(e) {
          return g(y(e));
        }
        function w(e) {
          return v(b(e));
        }
        function x(e, t) {
          return A(y(e), y(t));
        }
        function E(e, t) {
          return v(x(e, t));
        }
        function k(e, t, n) {
          return t ? (n ? x(t, e) : E(t, e)) : n ? b(e) : w(e);
        }
        function C(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function S() {
          return "undefined" == typeof document || null == document.location
            ? ""
            : document.location.href;
        }
        function _() {
          return "undefined" == typeof document || null == document.location
            ? ""
            : document.location.origin
            ? document.location.origin
            : document.location.protocol +
              "//" +
              document.location.hostname +
              (document.location.port ? ":" + document.location.port : "");
        }
        function O(e) {
          var t = j(e.stack),
            n = { stacktrace: { frames: t }, type: e.name, value: e.message };
          return (
            void 0 === n.type &&
              "" === n.value &&
              (n.value = "Unrecoverable error caught"),
            n
          );
        }
        function I(e, t) {
          var n = Object.keys(e).sort(),
            r = {
              extra: { __serialized__: Ee(e) },
              fingerprint: [k(n.join(""))],
              message: "Non-Error exception captured with keys: " + ke(n)
            };
          if (t) {
            var o = Le(t),
              i = j(o.stack);
            r.stacktrace = { frames: i };
          }
          return r;
        }
        function M(e) {
          return { exception: { values: [O(e)] } };
        }
        function j(e) {
          if (!e || !e.length) return [];
          var t = e,
            n = t[0].func || "",
            r = t[t.length - 1].func || "";
          return (
            (_e(n, "captureMessage") || _e(n, "captureException")) &&
              (t = t.slice(1)),
            _e(r, "sentryWrapped") && (t = t.slice(0, -1)),
            t
              .map(function(e) {
                return {
                  colno: e.column,
                  filename: e.url || t[0].url,
                  function: e.func || "?",
                  in_app: !0,
                  lineno: e.line
                };
              })
              .slice(0, He)
              .reverse()
          );
        }
        function T() {
          return $e > 0;
        }
        function N() {
          ($e += 1),
            setTimeout(function() {
              $e -= 1;
            });
        }
        function D(e, t, n) {
          if ((void 0 === t && (t = {}), !te(e))) return e;
          try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
          } catch (t) {
            return e;
          }
          var r = function() {
            var r = this;
            n && te(n) && n.apply(this, arguments);
            var o = Array.prototype.slice.call(arguments);
            try {
              var i = o.map(function(e) {
                return D(e, t);
              });
              return e.handleEvent
                ? e.handleEvent.apply(this, i)
                : e.apply(this, i);
            } catch (e) {
              throw (N(),
              z.withScope(function(n) {
                return G.__awaiter(r, void 0, void 0, function() {
                  var r = this;
                  return G.__generator(this, function(i) {
                    return (
                      n.addEventProcessor(function(e) {
                        return G.__awaiter(r, void 0, void 0, function() {
                          var n;
                          return G.__generator(this, function(r) {
                            return (
                              (n = G.__assign({}, e)),
                              t.mechanism &&
                                ((n.exception = n.exception || {}),
                                (n.exception.mechanism = t.mechanism)),
                              (n.extra = G.__assign({}, n.extra, {
                                arguments: xe(o, 2)
                              })),
                              [2, n]
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
              e);
            }
          };
          try {
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
          } catch (e) {}
          return (
            (r.prototype = e.prototype),
            (e.__sentry_wrapped__ = r),
            (r.__sentry__ = !0),
            (r.__sentry_original__ = e),
            r
          );
        }
        function F(e) {
          return function(t) {
            if (((Ne = void 0), De !== t)) {
              De = t;
              var n;
              try {
                n = ae(t.target);
              } catch (e) {
                n = "<unknown>";
              }
              z.getCurrentHub().addBreadcrumb(
                { category: "ui." + e, message: n },
                { event: t, name: e }
              );
            }
          };
        }
        function R() {
          return function(e) {
            var t;
            try {
              t = e.target;
            } catch (e) {
              return;
            }
            var n = t && t.tagName;
            n &&
              ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) &&
              (Ne || F("input")(e),
              clearTimeout(Ne),
              (Ne = setTimeout(function() {
                Ne = void 0;
              }, Xe)));
          };
        }
        function B(e) {
          try {
            var t = be(e);
            rt.addBreadcrumb(
              {
                category: "sentry",
                event_id: t.event_id,
                level: t.level || Y.fromString("error"),
                message: le(t)
              },
              { event: t }
            );
          } catch (e) {
            ue.error("Error while adding sentry type breadcrumb");
          }
        }
        function P(e) {
          void 0 === e && (e = {}),
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = ft),
            z.initAndBind(Ze, e);
        }
        function U(e) {
          void 0 === e && (e = {}),
            e.eventId || (e.eventId = z.getCurrentHub().lastEventId()),
            z
              .getCurrentHub()
              .getClient()
              .showReportDialog(e);
        }
        function L() {
          return z.getCurrentHub().lastEventId();
        }
        function H() {}
        function Q(e) {
          e();
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var G = n(6),
          z = n(74),
          W =
            "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {},
          q = i(function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            !(function(e) {
              (e.Fatal = "fatal"),
                (e.Error = "error"),
                (e.Warning = "warning"),
                (e.Log = "log"),
                (e.Info = "info"),
                (e.Debug = "debug"),
                (e.Critical = "critical");
            })(t.Severity || (t.Severity = {})),
              (function(e) {
                function t(t) {
                  switch (t) {
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
                e.fromString = t;
              })(t.Severity || (t.Severity = {}));
            !(function(e) {
              (e.Unknown = "unknown"),
                (e.Skipped = "skipped"),
                (e.Success = "success"),
                (e.RateLimit = "rate_limit"),
                (e.Invalid = "invalid"),
                (e.Failed = "failed");
            })(t.Status || (t.Status = {})),
              (function(e) {
                function t(t) {
                  return t >= 200 && t < 300
                    ? e.Success
                    : 429 === t
                    ? e.RateLimit
                    : t >= 400 && t < 500
                    ? e.Invalid
                    : t >= 500
                    ? e.Failed
                    : e.Unknown;
                }
                e.fromHttpCode = t;
              })(t.Status || (t.Status = {}));
          });
        o(q);
        var Y = q.Severity,
          J = q.Status,
          K = i(function(e, t) {
            function n(e) {
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
              return (
                "[object ErrorEvent]" === Object.prototype.toString.call(e)
              );
            }
            function o(e) {
              return "[object DOMError]" === Object.prototype.toString.call(e);
            }
            function i(e) {
              return (
                "[object DOMException]" === Object.prototype.toString.call(e)
              );
            }
            function a(e) {
              return void 0 === e;
            }
            function s(e) {
              return "function" == typeof e;
            }
            function l(e) {
              return "[object String]" === Object.prototype.toString.call(e);
            }
            function c(e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }
            function u(e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            }
            function d(e) {
              return "[object RegExp]" === Object.prototype.toString.call(e);
            }
            function p(e) {
              return e !== e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isError = n),
              (t.isErrorEvent = r),
              (t.isDOMError = o),
              (t.isDOMException = i),
              (t.isUndefined = a),
              (t.isFunction = s),
              (t.isString = l),
              (t.isArray = c),
              (t.isPlainObject = u),
              (t.isRegExp = d),
              (t.isNaN = p);
          });
        o(K);
        var V = K.isError,
          Z = K.isErrorEvent,
          X = K.isDOMError,
          $ = K.isDOMException,
          ee = K.isUndefined,
          te = K.isFunction,
          ne = K.isString,
          re = (K.isArray, K.isPlainObject),
          oe =
            (K.isRegExp,
            K.isNaN,
            i(function(e, t) {
              function n(e, t) {
                return e.require(t);
              }
              function o() {
                return (
                  "[object process]" ===
                  Object.prototype.toString.call(void 0 !== r ? r : 0)
                );
              }
              function i() {
                return o()
                  ? W
                  : "undefined" != typeof window
                  ? window
                  : "undefined" != typeof self
                  ? self
                  : {};
              }
              function a() {
                var e = i(),
                  t = e.crypto || e.msCrypto;
                if (void 0 !== t && t.getRandomValues) {
                  var n = new Uint16Array(8);
                  t.getRandomValues(n),
                    (n[3] = (4095 & n[3]) | 16384),
                    (n[4] = (16383 & n[4]) | 32768);
                  var r = function(e) {
                    for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
                    return t;
                  };
                  return (
                    r(n[0]) +
                    r(n[1]) +
                    r(n[2]) +
                    r(n[3]) +
                    r(n[4]) +
                    r(n[5]) +
                    r(n[6]) +
                    r(n[7])
                  );
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function(e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                  }
                );
              }
              function s(e) {
                for (
                  var t, n = e, r = [], o = 0, i = 0, a = " > ".length;
                  n &&
                  o++ < 5 &&
                  !(
                    "html" === (t = l(n)) ||
                    (o > 1 && i + r.length * a + t.length >= 80)
                  );

                )
                  r.push(t), (i += t.length), (n = n.parentNode);
                return r.reverse().join(" > ");
              }
              function l(e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = [];
                if (!e || !e.tagName) return "";
                if (
                  (a.push(e.tagName.toLowerCase()),
                  e.id && a.push("#" + e.id),
                  (t = e.className) && K.isString(t))
                )
                  for (n = t.split(/\s+/), i = 0; i < n.length; i++)
                    a.push("." + n[i]);
                var s = ["type", "name", "title", "alt"];
                for (i = 0; i < s.length; i++)
                  (r = s[i]),
                    (o = e.getAttribute(r)) &&
                      a.push("[" + r + '="' + o + '"]');
                return a.join("");
              }
              function c(e) {
                if (!e) return {};
                var t = e.match(
                  /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
                );
                if (!t) return {};
                var n = t[6] || "",
                  r = t[8] || "";
                return {
                  host: t[4],
                  path: t[5],
                  protocol: t[2],
                  relative: t[5] + n + r
                };
              }
              function u(e) {
                if (e.message) return e.message;
                if (
                  e.exception &&
                  e.exception.values &&
                  e.exception.values[0]
                ) {
                  var t = e.exception.values[0];
                  return t.type && t.value
                    ? t.type + ": " + t.value
                    : t.type || t.value || e.event_id || "<unknown>";
                }
                return e.event_id || "<unknown>";
              }
              function d(e) {
                var t = i(),
                  n = ["debug", "info", "warn", "error", "log"];
                if (!("console" in t)) return e();
                var r = t.console,
                  o = {};
                n.forEach(function(e) {
                  e in t.console &&
                    r[e].__sentry__ &&
                    ((o[e] = r[e].__sentry_wrapped__),
                    (r[e] = r[e].__sentry_original__));
                });
                var a = e();
                return (
                  Object.keys(o).forEach(function(e) {
                    r[e] = o[e];
                  }),
                  a
                );
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.dynamicRequire = n),
                (t.isNodeEnv = o),
                (t.getGlobalObject = i),
                (t.uuid4 = a),
                (t.htmlTreeAsString = s),
                (t.htmlElementAsString = l),
                (t.parseUrl = c),
                (t.getEventDescription = u),
                (t.consoleSandbox = d);
            }));
        o(oe);
        var ie = (oe.dynamicRequire, oe.isNodeEnv, oe.getGlobalObject),
          ae = (oe.uuid4, oe.htmlTreeAsString),
          se = (oe.htmlElementAsString, oe.parseUrl),
          le = oe.getEventDescription,
          ce =
            (oe.consoleSandbox,
            i(function(e, t) {
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = oe.getGlobalObject(),
                r = (function() {
                  function e() {
                    this.enabled = !1;
                  }
                  return (
                    (e.prototype.disable = function() {
                      this.enabled = !1;
                    }),
                    (e.prototype.enable = function() {
                      this.enabled = !0;
                    }),
                    (e.prototype.log = function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      this.enabled &&
                        oe.consoleSandbox(function() {
                          n.console.log("Sentry Logger [Log]: " + e.join(" "));
                        });
                    }),
                    (e.prototype.warn = function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      this.enabled &&
                        oe.consoleSandbox(function() {
                          n.console.warn(
                            "Sentry Logger [Warn]: " + e.join(" ")
                          );
                        });
                    }),
                    (e.prototype.error = function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      this.enabled &&
                        oe.consoleSandbox(function() {
                          n.console.error(
                            "Sentry Logger [Error]: " + e.join(" ")
                          );
                        });
                    }),
                    e
                  );
                })(),
                o = new r();
              t.logger = o;
            }));
        o(ce);
        var ue = ce.logger,
          de = i(function(e, t) {
            function n() {
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
              return (
                !!i() &&
                -1 !==
                  oe
                    .getGlobalObject()
                    .fetch.toString()
                    .indexOf("native")
              );
            }
            function s() {
              var e = oe.getGlobalObject();
              return "navigator" in e && "sendBeacon" in e.navigator;
            }
            function l() {
              return "ReportingObserver" in oe.getGlobalObject();
            }
            function c() {
              if (!i()) return !1;
              try {
                return (
                  new Request("pickleRick", { referrerPolicy: "origin" }), !0
                );
              } catch (e) {
                return !1;
              }
            }
            function u() {
              var e = oe.getGlobalObject(),
                t = e.chrome,
                n = t && t.app && t.app.runtime,
                r =
                  "history" in e &&
                  !!e.history.pushState &&
                  !!e.history.replaceState;
              return !n && r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.supportsErrorEvent = n),
              (t.supportsDOMError = r),
              (t.supportsDOMException = o),
              (t.supportsFetch = i),
              (t.supportsNativeFetch = a),
              (t.supportsBeacon = s),
              (t.supportsReportingObserver = l),
              (t.supportsReferrerPolicy = c),
              (t.supportsHistory = u);
          });
        o(de);
        var pe =
            (de.supportsErrorEvent,
            de.supportsDOMError,
            de.supportsDOMException,
            de.supportsFetch),
          fe = de.supportsNativeFetch,
          he = de.supportsBeacon,
          me = de.supportsReportingObserver,
          ge = de.supportsReferrerPolicy,
          Ae = de.supportsHistory,
          ve = i(function(e, t) {
            function n(e) {
              return JSON.stringify(e);
            }
            function r(e) {
              return JSON.parse(e);
            }
            function o(e) {
              return r(n(e));
            }
            function i(e, t, n) {
              if (t in e && !e[t].__sentry__) {
                var r = e[t],
                  o = n(r);
                (o.__sentry__ = !0),
                  (o.__sentry_original__ = r),
                  (o.__sentry_wrapped__ = o),
                  (e[t] = o);
              }
            }
            function a(e) {
              return Object.keys(e)
                .map(function(t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&");
            }
            function s(e) {
              return ~-encodeURI(e).split(/%..|./).length;
            }
            function l(e) {
              return s(JSON.stringify(e));
            }
            function c(e) {
              if ("string" == typeof e)
                return e.length <= 40 ? e : e.substr(0, 39) + "…";
              if ("number" == typeof e || "boolean" == typeof e || void 0 === e)
                return e;
              if (K.isNaN(e)) return "[NaN]";
              if (K.isUndefined(e)) return "[undefined]";
              var t = Object.prototype.toString.call(e);
              if ("[object Object]" === t) return "[Object]";
              if ("[object Array]" === t) return "[Array]";
              if ("[object Function]" === t) {
                var n = e.name;
                return n ? "[Function: " + n + "]" : "[Function]";
              }
              return e;
            }
            function u(e, t) {
              if (0 === t) return c(e);
              if (K.isPlainObject(e)) {
                var n = {},
                  r = e;
                return (
                  Object.keys(r).forEach(function(e) {
                    n[e] = u(r[e], t - 1);
                  }),
                  n
                );
              }
              if (Array.isArray(e)) {
                return e.map(function(e) {
                  return u(e, t - 1);
                });
              }
              return c(e);
            }
            function d(e, t, r) {
              void 0 === t && (t = v), void 0 === r && (r = y);
              var o = u(e, t);
              return l(n(o)) > r ? d(e, t - 1) : o;
            }
            function p(e, t) {
              if ((void 0 === t && (t = b), !e.length))
                return "[object has no keys]";
              if (e[0].length >= t) return e[0];
              for (var n = e.length; n > 0; n--) {
                var r = e.slice(0, n).join(", ");
                if (!(r.length > t)) return n === e.length ? r : r + "…";
              }
              return "";
            }
            function f(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              if (null === e || void 0 === e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var r = Object(e), o = 0; o < t.length; o++) {
                var i = t[o];
                if (null !== i)
                  for (var a in i)
                    Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
              }
              return r;
            }
            function h(e) {
              var t = { message: e.message, name: e.name, stack: e.stack };
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }
            function m(e, t) {
              return "domain" === t && "object" == typeof e && e._events
                ? "[Domain]"
                : "domainEmitter" === t
                ? "[DomainEmitter]"
                : void 0 !== W && e === W
                ? "[Global]"
                : "undefined" != typeof window && e === window
                ? "[Window]"
                : "undefined" != typeof document && e === document
                ? "[Document]"
                : e instanceof Date
                ? "[Date] " + e
                : e instanceof Error
                ? h(e)
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
                return t[0] === r
                  ? "[Circular ~]"
                  : "[Circular ~." + n.slice(0, t.indexOf(r)).join(".") + "]";
              }
              var t = [],
                n = [];
              return function(r, o) {
                if (t.length > 0) {
                  var i = t.indexOf(this);
                  -1 === i
                    ? (t.push(this), n.push(r))
                    : (t.splice(i + 1), n.splice(i, 1 / 0, r)),
                    -1 !== t.indexOf(o) && (o = e.call(this, r, o));
                } else t.push(o);
                return m(o, r);
              };
            }
            function A(e) {
              try {
                return JSON.parse(JSON.stringify(e, g()));
              } catch (e) {
                return "**non-serializable**";
              }
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.serialize = n),
              (t.deserialize = r),
              (t.clone = o),
              (t.fill = i),
              (t.urlEncode = a);
            var v = 3,
              y = 102400,
              b = 40;
            (t.serializeObject = u),
              (t.limitObjectDepthToSize = d),
              (t.serializeKeysToEventMessage = p),
              (t.assign = f),
              (t.safeNormalize = A);
          });
        o(ve);
        var ye = ve.serialize,
          be = ve.deserialize,
          we = (ve.clone, ve.fill),
          xe = (ve.urlEncode, ve.serializeObject),
          Ee = ve.limitObjectDepthToSize,
          ke = ve.serializeKeysToEventMessage,
          Ce =
            (ve.assign,
            ve.safeNormalize,
            i(function(e, t) {
              function n(e, t) {
                return (
                  void 0 === t && (t = 0),
                  0 !== t && K.isString(e)
                    ? e.length <= t
                      ? e
                      : e.substr(0, t) + "…"
                    : e
                );
              }
              function r(e, t) {
                var n = e,
                  r = n.length;
                if (r <= 150) return n;
                t > r && (t = r);
                var o = Math.max(t - 60, 0);
                o < 5 && (o = 0);
                var i = Math.min(o + 140, r);
                return (
                  i > r - 5 && (i = r),
                  i === r && (o = Math.max(i - 140, 0)),
                  (n = n.slice(o, i)),
                  o > 0 && (n = "'{snip} " + n),
                  i < r && (n += " {snip}"),
                  n
                );
              }
              function o(e, t) {
                if (!Array.isArray(e)) return "";
                for (var n = [], r = 0; r < e.length; r++) {
                  var o = e[r];
                  try {
                    n.push(String(o));
                  } catch (e) {
                    n.push("[value cannot be serialized]");
                  }
                }
                return n.join(t);
              }
              function i(e, t) {
                return !(t.length > e.length) && -1 !== e.indexOf(t);
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.truncate = n),
                (t.snipLine = r),
                (t.safeJoin = o),
                (t.includes = i);
            }));
        o(Ce);
        var Se = (Ce.truncate, Ce.snipLine, Ce.safeJoin),
          _e = Ce.includes,
          Oe = ie(),
          Ie = {
            wrap: function() {
              return function() {};
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1
          },
          Me = [].slice,
          je = "?",
          Te = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        (Ie.wrap = function(e) {
          function t() {
            try {
              return e.apply(this, arguments);
            } catch (e) {
              throw (Ie.report(e), e);
            }
          }
          return t;
        }),
          (Ie.report = (function() {
            function e(e) {
              m.push(e);
            }
            function t(e) {
              for (var t = m.length - 1; t >= 0; --t)
                m[t] === e && m.splice(t, 1);
              0 === m.length && (a(), l());
            }
            function n(e, t, n) {
              var r = null;
              if (!t || Ie.collectWindowErrors) {
                for (var o in m)
                  if (C(m, o))
                    try {
                      m[o](e, t, n);
                    } catch (e) {
                      r = e;
                    }
                if (r) throw r;
              }
            }
            function r(e, t, r, o, i) {
              var a = null;
              if (((i = Z(i) ? i.error : i), (e = Z(e) ? e.message : e), A))
                Ie.computeStackTrace.augmentStackTraceWithInitialElement(
                  A,
                  t,
                  r,
                  e
                ),
                  c();
              else if (i && V(i))
                (a = Ie.computeStackTrace(i)),
                  (a.mechanism = "onerror"),
                  n(a, !0, i);
              else {
                var s,
                  l = { url: t, line: r, column: o },
                  u = e;
                if ("[object String]" === {}.toString.call(e)) {
                  var p = e.match(Te);
                  p && ((s = p[1]), (u = p[2]));
                }
                (l.func = Ie.computeStackTrace.guessFunctionName(
                  l.url,
                  l.line
                )),
                  (l.context = Ie.computeStackTrace.gatherContext(
                    l.url,
                    l.line
                  )),
                  (a = {
                    name: s,
                    message: u,
                    mode: "onerror",
                    mechanism: "onerror",
                    stack: [G.__assign({}, l, { url: l.url || S() })]
                  }),
                  n(a, !0, null);
              }
              return !!d && d.apply(this, arguments);
            }
            function o(e) {
              var t = (e && (e.detail ? e.detail.reason : e.reason)) || e,
                r = Ie.computeStackTrace(t);
              (r.mechanism = "onunhandledrejection"), n(r, !0, t);
            }
            function i() {
              !0 !== p && ((d = Oe.onerror), (Oe.onerror = r), (p = !0));
            }
            function a() {
              p && ((Oe.onerror = d), (p = !1));
            }
            function s() {
              !0 !== h &&
                ((f = Oe.onunhandledrejection),
                (Oe.onunhandledrejection = o),
                (h = !0));
            }
            function l() {
              h && ((Oe.onerror = f), (h = !1));
            }
            function c() {
              var e = A,
                t = g;
              (A = null), (g = null), n(e, !1, t);
            }
            function u(e) {
              if (A) {
                if (g === e) return;
                c();
              }
              var t = Ie.computeStackTrace(e);
              throw ((A = t),
              (g = e),
              setTimeout(
                function() {
                  g === e && c();
                },
                t.incomplete ? 2e3 : 0
              ),
              e);
            }
            var d,
              p,
              f,
              h,
              m = [],
              g = null,
              A = null;
            return (
              (u.subscribe = e),
              (u.unsubscribe = t),
              (u.installGlobalHandler = i),
              (u.installGlobalUnhandledRejectionHandler = s),
              u
            );
          })()),
          (Ie.computeStackTrace = (function() {
            function e(e) {
              if (!Ie.remoteFetching) return "";
              try {
                var t = (function() {
                  try {
                    return new Oe.XMLHttpRequest();
                  } catch (e) {
                    return new Oe.ActiveXObject("Microsoft.XMLHTTP");
                  }
                })();
                return t.open("GET", e, !1), t.send(""), t.responseText;
              } catch (e) {
                return "";
              }
            }
            function t(t) {
              if ("string" != typeof t) return [];
              if (!C(A, t)) {
                var n = "",
                  r = "";
                try {
                  r = Oe.document.domain;
                } catch (e) {}
                var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);
                o && o[2] === r && (n = e(t)), (A[t] = n ? n.split("\n") : []);
              }
              return A[t];
            }
            function n(e, n) {
              var r,
                o = /function ([^(]*)\(([^)]*)\)/,
                i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                a = "",
                s = t(e);
              if (!s.length) return je;
              for (var l = 0; l < 10; ++l)
                if (((a = s[n - l] + a), !ee(a))) {
                  if ((r = i.exec(a))) return r[1];
                  if ((r = o.exec(a))) return r[1];
                }
              return je;
            }
            function r(e, n) {
              var r = t(e);
              if (!r.length) return null;
              var o = [],
                i = Math.floor(Ie.linesOfContext / 2),
                a = i + (Ie.linesOfContext % 2),
                s = Math.max(0, n - i - 1),
                l = Math.min(r.length, n + a - 1);
              n -= 1;
              for (var c = s; c < l; ++c) ee(r[c]) || o.push(r[c]);
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
            function a(e, n) {
              for (var r, o, i = 0, a = n.length; i < a; ++i)
                if (
                  (r = t(n[i])).length &&
                  ((r = r.join("\n")), (o = e.exec(r)))
                )
                  return {
                    url: n[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1
                  };
              return null;
            }
            function s(e, n, r) {
              var i,
                a = t(n),
                s = new RegExp("\\b" + o(e) + "\\b");
              return (
                (r -= 1),
                a && a.length > r && (i = s.exec(a[r])) ? i.index : null
              );
            }
            function l(e) {
              if (!ee(Oe && Oe.document)) {
                for (
                  var t,
                    n,
                    r,
                    s,
                    l = [S()],
                    c = Oe.document.getElementsByTagName("script"),
                    u = "" + e,
                    d = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                    p = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                    f = 0;
                  f < c.length;
                  ++f
                ) {
                  var h = c[f];
                  h.src && l.push(h.src);
                }
                if ((r = d.exec(u))) {
                  var m = r[1] ? "\\s+" + r[1] : "",
                    g = r[2].split(",").join("\\s*,\\s*");
                  (t = o(r[3]).replace(/;$/, ";?")),
                    (n = new RegExp(
                      "function" +
                        m +
                        "\\s*\\(\\s*" +
                        g +
                        "\\s*\\)\\s*{\\s*" +
                        t +
                        "\\s*}"
                    ));
                } else n = new RegExp(o(u).replace(/\s+/g, "\\s+"));
                if ((s = a(n, l))) return s;
                if ((r = p.exec(u))) {
                  var A = r[1];
                  if (
                    ((t = i(r[2])),
                    (n = new RegExp(
                      "on" + A + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]",
                      "i"
                    )),
                    (s = a(n, l[0])))
                  )
                    return s;
                  if (((n = new RegExp(t)), (s = a(n, l)))) return s;
                }
                return null;
              }
            }
            function c(e) {
              if (!e.stack) return null;
              for (
                var t,
                  o,
                  i,
                  a,
                  l = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                  c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                  u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                  d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                  p = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                  f = e.stack.split("\n"),
                  h = [],
                  m = /^(.*) is undefined$/.exec(e.message),
                  g = 0,
                  A = f.length;
                g < A;
                ++g
              ) {
                if ((i = l.exec(f[g]))) {
                  var v = i[2] && 0 === i[2].indexOf("native");
                  (t = i[2] && 0 === i[2].indexOf("eval")),
                    t && (o = p.exec(i[2])) && (i[2] = o[1]),
                    (a = {
                      url: v ? null : i[2],
                      func: i[1] || je,
                      args: v ? [i[2]] : [],
                      line: i[3] ? +i[3] : null,
                      column: i[4] ? +i[4] : null
                    });
                } else if ((i = u.exec(f[g])))
                  a = {
                    url: i[2],
                    func: i[1] || je,
                    args: [],
                    line: +i[3],
                    column: i[4] ? +i[4] : null
                  };
                else {
                  if (!(i = c.exec(f[g]))) continue;
                  (t = i[3] && i[3].indexOf(" > eval") > -1),
                    t && (o = d.exec(i[3]))
                      ? (i[3] = o[1])
                      : 0 !== g ||
                        i[5] ||
                        ee(e.columnNumber) ||
                        (h[0].column = e.columnNumber + 1),
                    (a = {
                      url: i[3],
                      func: i[1] || je,
                      args: i[2] ? i[2].split(",") : [],
                      line: i[4] ? +i[4] : null,
                      column: i[5] ? +i[5] : null
                    });
                }
                if (
                  (!a.func && a.line && (a.func = n(a.url, a.line)),
                  Ie.remoteFetching && a.url && "blob:" === a.url.substr(0, 5))
                ) {
                  var y = new XMLHttpRequest();
                  if (
                    (y.open("GET", a.url, !1), y.send(""), 200 === y.status)
                  ) {
                    var b = y.responseText || "";
                    b = b.slice(-300);
                    var w = b.match(/\/\/# sourceMappingURL=(.*)$/);
                    if (w) {
                      var x = w[1];
                      "~" === x.charAt(0) && (x = _() + x.slice(1)),
                        (a.url = x.slice(0, -4));
                    }
                  }
                }
                (a.context = a.line ? r(a.url, a.line) : null), h.push(a);
              }
              return h.length
                ? (h[0] &&
                    h[0].line &&
                    !h[0].column &&
                    m &&
                    (h[0].column = s(m[1], h[0].url, h[0].line)),
                  { mode: "stack", name: e.name, message: e.message, stack: h })
                : null;
            }
            function u(e) {
              var t = e.stacktrace;
              if (t) {
                for (
                  var o,
                    i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                    a = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                    s = t.split("\n"),
                    l = [],
                    c = 0;
                  c < s.length;
                  c += 2
                ) {
                  var u = null;
                  if (
                    ((o = i.exec(s[c]))
                      ? (u = {
                          url: o[2],
                          line: +o[1],
                          column: null,
                          func: o[3],
                          args: []
                        })
                      : (o = a.exec(s[c])) &&
                        (u = {
                          url: o[6],
                          line: +o[1],
                          column: +o[2],
                          func: o[3] || o[4],
                          args: o[5] ? o[5].split(",") : []
                        }),
                    u)
                  ) {
                    if (
                      (!u.func && u.line && (u.func = n(u.url, u.line)), u.line)
                    )
                      try {
                        u.context = r(u.url, u.line);
                      } catch (e) {}
                    u.context || (u.context = [s[c + 1]]), l.push(u);
                  }
                }
                return l.length
                  ? {
                      mode: "stacktrace",
                      name: e.name,
                      message: e.message,
                      stack: l
                    }
                  : null;
              }
            }
            function d(e) {
              var o = e.message.split("\n");
              if (o.length < 4) return null;
              var s,
                l = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                c = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                u = /^\s*Line (\d+) of function script\s*$/i,
                d = [],
                p =
                  Oe &&
                  Oe.document &&
                  Oe.document.getElementsByTagName("script"),
                f = [];
              for (var h in p) C(p, h) && !p[h].src && f.push(p[h]);
              for (var m = 2; m < o.length; m += 2) {
                var g = null;
                if ((s = l.exec(o[m])))
                  g = {
                    url: s[2],
                    func: s[3],
                    args: [],
                    line: +s[1],
                    column: null
                  };
                else if ((s = c.exec(o[m]))) {
                  g = {
                    url: s[3],
                    func: s[4],
                    args: [],
                    line: +s[1],
                    column: null
                  };
                  var A = +s[1],
                    v = f[s[2] - 1];
                  if (v) {
                    var y = t(g.url);
                    if (y) {
                      y = y.join("\n");
                      var b = y.indexOf(v.innerText);
                      b >= 0 &&
                        (g.line = A + y.substring(0, b).split("\n").length);
                    }
                  }
                } else if ((s = u.exec(o[m]))) {
                  var w = S().replace(/#.*$/, ""),
                    x = new RegExp(i(o[m + 1])),
                    E = a(x, [w]);
                  g = {
                    url: w,
                    func: "",
                    args: [],
                    line: E ? E.line : s[1],
                    column: null
                  };
                }
                if (g) {
                  g.func || (g.func = n(g.url, g.line));
                  var k = r(g.url, g.line),
                    _ = k ? k[Math.floor(k.length / 2)] : null;
                  k && _.replace(/^\s*/, "") === o[m + 1].replace(/^\s*/, "")
                    ? (g.context = k)
                    : (g.context = [o[m + 1]]),
                    d.push(g);
                }
              }
              return d.length
                ? { mode: "multiline", name: e.name, message: o[0], stack: d }
                : null;
            }
            function p(e, t, o, i) {
              var a = { url: t, line: o };
              if (a.url && a.line) {
                (e.incomplete = !1),
                  a.func || (a.func = n(a.url, a.line)),
                  a.context || (a.context = r(a.url, a.line));
                var l = / '([^']+)' /.exec(i);
                if (
                  (l && (a.column = s(l[1], a.url, a.line)),
                  e.stack.length > 0 && e.stack[0].url === a.url)
                ) {
                  if (e.stack[0].line === a.line) return !1;
                  if (!e.stack[0].line && e.stack[0].func === a.func)
                    return (
                      (e.stack[0].line = a.line),
                      (e.stack[0].context = a.context),
                      !1
                    );
                }
                return e.stack.unshift(a), (e.partial = !0), !0;
              }
              return (e.incomplete = !0), !1;
            }
            function f(e, t) {
              for (
                var r,
                  o,
                  i,
                  a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                  c = [],
                  u = {},
                  d = !1,
                  m = f.caller;
                m && !d;
                m = m.caller
              )
                if (m !== h && m !== Ie.report) {
                  if (
                    ((o = {
                      url: null,
                      func: je,
                      args: [],
                      line: null,
                      column: null
                    }),
                    m.name
                      ? (o.func = m.name)
                      : (r = a.exec(m.toString())) && (o.func = r[1]),
                    void 0 === o.func)
                  )
                    try {
                      o.func = r.input.substring(0, r.input.indexOf("{"));
                    } catch (e) {}
                  if ((i = l(m))) {
                    (o.url = i.url),
                      (o.line = i.line),
                      o.func === je && (o.func = n(o.url, o.line));
                    var g = / '([^']+)' /.exec(e.message || e.description);
                    g && (o.column = s(g[1], i.url, i.line));
                  }
                  u["" + m] ? (d = !0) : (u["" + m] = !0), c.push(o);
                }
              t && c.splice(0, t);
              var A = {
                mode: "callers",
                name: e.name,
                message: e.message,
                stack: c
              };
              return (
                p(
                  A,
                  e.sourceURL || e.fileName,
                  e.line || e.lineNumber,
                  e.message || e.description
                ),
                A
              );
            }
            function h(e, t) {
              var n = null;
              t = null == t ? 0 : +t;
              try {
                if ((n = u(e))) return n;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((n = c(e))) return n;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((n = d(e))) return n;
              } catch (e) {
                if (g) throw e;
              }
              try {
                if ((n = f(e, t + 1))) return n;
              } catch (e) {
                if (g) throw e;
              }
              return { name: e.name, message: e.message, mode: "failed" };
            }
            function m(e) {
              e = 1 + (null == e ? 0 : +e);
              try {
                throw new Error();
              } catch (t) {
                return h(t, e + 1);
              }
            }
            var g = !1,
              A = {};
            return (
              (h.augmentStackTraceWithInitialElement = p),
              (h.computeStackTraceFromStackProp = c),
              (h.guessFunctionName = n),
              (h.gatherContext = r),
              (h.ofCaller = m),
              (h.getSource = t),
              h
            );
          })()),
          (Ie.extendToAsynchronousCallbacks = function() {
            var e = function(e) {
              var t = Oe[e];
              Oe[e] = function() {
                var e = Me.call(arguments),
                  n = e[0];
                return (
                  "function" == typeof n && (e[0] = Ie.wrap(n)),
                  t.apply ? t.apply(this, e) : t(e[0], e[1])
                );
              };
            };
            e("setTimeout"), e("setInterval");
          }),
          (Ie.remoteFetching = !1),
          (Ie.collectWindowErrors = !0),
          (Ie.linesOfContext = 11);
        var Ne,
          De,
          Fe,
          Re,
          Be = Ie.report.subscribe,
          Pe = Ie.report.installGlobalHandler,
          Ue = Ie.report.installGlobalUnhandledRejectionHandler,
          Le = Ie.computeStackTrace,
          He = 50,
          Qe = (function() {
            function e(e) {
              (this.options = e),
                (this.url = new z.API(
                  this.options.dsn
                ).getStoreEndpointWithUrlEncodedAuth());
            }
            return (
              (e.prototype.captureEvent = function(e) {
                return G.__awaiter(this, void 0, void 0, function() {
                  return G.__generator(this, function(e) {
                    throw new z.SentryError(
                      "Transport Class has to implement `captureEvent` method"
                    );
                  });
                });
              }),
              e
            );
          })(),
          Ge = ie(),
          ze = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              G.__extends(t, e),
              (t.prototype.captureEvent = function(e) {
                return G.__awaiter(this, void 0, void 0, function() {
                  var t, n;
                  return G.__generator(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (t = {
                            body: ye(e),
                            method: "POST",
                            referrerPolicy: ge() ? "origin" : ""
                          }),
                          [4, Ge.fetch(this.url, t)]
                        );
                      case 1:
                        return (
                          (n = r.sent()),
                          [2, { status: J.fromHttpCode(n.status) }]
                        );
                    }
                  });
                });
              }),
              t
            );
          })(Qe),
          We = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              G.__extends(t, e),
              (t.prototype.captureEvent = function(e) {
                return G.__awaiter(this, void 0, void 0, function() {
                  var t = this;
                  return G.__generator(this, function(n) {
                    return [
                      2,
                      new Promise(function(n, r) {
                        var o = new XMLHttpRequest();
                        (o.onreadystatechange = function() {
                          4 === o.readyState &&
                            (200 === o.status &&
                              n({ status: J.fromHttpCode(o.status) }),
                            r(o));
                        }),
                          o.open("POST", t.url),
                          o.send(ye(e));
                      })
                    ];
                  });
                });
              }),
              t
            );
          })(Qe),
          qe = ie(),
          Ye = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              G.__extends(t, e),
              (t.prototype.captureEvent = function(e) {
                return G.__awaiter(this, void 0, void 0, function() {
                  var t, n;
                  return G.__generator(this, function(r) {
                    return (
                      (t = ye(e)),
                      (n = qe.navigator.sendBeacon(this.url, t)),
                      [2, { status: n ? J.Success : J.Failed }]
                    );
                  });
                });
              }),
              t
            );
          })(Qe),
          Je = Object.freeze({
            BaseTransport: Qe,
            FetchTransport: ze,
            XHRTransport: We,
            BeaconTransport: Ye
          }),
          Ke = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              G.__extends(t, e),
              (t.prototype.install = function() {
                if (!this.options.dsn)
                  throw new z.SentryError(
                    "Invariant exception: install() must not be called when disabled"
                  );
                return (Error.stackTraceLimit = 50), !0;
              }),
              (t.prototype.eventFromException = function(e, t) {
                return G.__awaiter(this, void 0, void 0, function() {
                  var n, r, r, o, i, r, r;
                  return G.__generator(this, function(a) {
                    switch (a.label) {
                      case 0:
                        return Z(e) && e.error
                          ? ((r = e), (e = r.error), (n = M(Le(e))), [3, 7])
                          : [3, 1];
                      case 1:
                        return X(e) || $(e)
                          ? ((r = e),
                            (o =
                              r.name || (X(r) ? "DOMError" : "DOMException")),
                            (i = r.message ? o + ": " + r.message : o),
                            [4, this.eventFromMessage(i, void 0, t)])
                          : [3, 3];
                      case 2:
                        return (n = a.sent()), [3, 7];
                      case 3:
                        return V(e) ? ((n = M(Le(e))), [3, 7]) : [3, 4];
                      case 4:
                        return re(e) && t && t.syntheticException
                          ? ((r = e), (n = I(r, t.syntheticException)), [3, 7])
                          : [3, 5];
                      case 5:
                        return (
                          (r = e), [4, this.eventFromMessage(r, void 0, t)]
                        );
                      case 6:
                        (n = a.sent()), (a.label = 7);
                      case 7:
                        return (
                          (n = G.__assign({}, n, {
                            event_id: t && t.event_id,
                            exception: G.__assign({}, n.exception, {
                              mechanism: { handled: !0, type: "generic" }
                            })
                          })),
                          [2, n]
                        );
                    }
                  });
                });
              }),
              (t.prototype.eventFromMessage = function(e, t, n) {
                return (
                  void 0 === t && (t = Y.Info),
                  G.__awaiter(this, void 0, void 0, function() {
                    var r, o, i;
                    return G.__generator(this, function(a) {
                      return (
                        (r = {
                          event_id: n && n.event_id,
                          level: t,
                          message: e
                        }),
                        this.options.attachStacktrace &&
                          n &&
                          n.syntheticException &&
                          ((o = Le(n.syntheticException)),
                          (i = j(o.stack)),
                          (r.stacktrace = { frames: i })),
                        [2, r]
                      );
                    });
                  })
                );
              }),
              (t.prototype.sendEvent = function(e) {
                return G.__awaiter(this, void 0, void 0, function() {
                  var t;
                  return G.__generator(this, function(n) {
                    return this.options.dsn
                      ? (this.transport ||
                          ((t = this.options.transportOptions
                            ? this.options.transportOptions
                            : { dsn: this.options.dsn }),
                          this.options.transport
                            ? (this.transport = new this.options.transport({
                                dsn: this.options.dsn
                              }))
                            : he()
                            ? (this.transport = new Ye(t))
                            : pe()
                            ? (this.transport = new ze(t))
                            : (this.transport = new We(t))),
                        [2, this.transport.captureEvent(e)])
                      : (ue.warn(
                          "Event has been skipped because no Dsn is configured."
                        ),
                        [
                          2,
                          {
                            status: J.Skipped,
                            reason:
                              "Event has been skipped because no Dsn is configured."
                          }
                        ]);
                  });
                });
              }),
              t
            );
          })(z.BaseBackend),
          Ve = "sentry.javascript.browser",
          Ze = (function(e) {
            function t(t) {
              return e.call(this, Ke, t) || this;
            }
            return (
              G.__extends(t, e),
              (t.prototype.prepareEvent = function(t, n, r) {
                return G.__awaiter(this, void 0, void 0, function() {
                  return G.__generator(this, function(o) {
                    return (
                      (t.platform = t.platform || "javascript"),
                      (t.sdk = G.__assign({}, t.sdk, {
                        name: Ve,
                        packages: G.__spread((t.sdk && t.sdk.packages) || [], [
                          { name: "npm:@sentry/browser", version: "4.4.2" }
                        ]),
                        version: "4.4.2"
                      })),
                      [2, e.prototype.prepareEvent.call(this, t, n, r)]
                    );
                  });
                });
              }),
              (t.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {});
                var t = ie().document;
                if (t) {
                  var n = e.dsn || this.getDsn();
                  if (!e.eventId)
                    throw new z.SentryError(
                      "Missing `eventId` option in showReportDialog call"
                    );
                  if (!n)
                    throw new z.SentryError(
                      "Missing `Dsn` option in showReportDialog call"
                    );
                  var r = t.createElement("script");
                  (r.async = !0),
                    (r.src = new z.API(n).getReportDialogEndpoint(e)),
                    (t.head || t.body).appendChild(r);
                }
              }),
              t
            );
          })(z.BaseClient),
          Xe = 1e3,
          $e = 0,
          et = (function() {
            function e(t) {
              (this.name = e.id),
                (this.options = G.__assign(
                  { onerror: !0, onunhandledrejection: !0 },
                  t
                ));
            }
            return (
              (e.prototype.setupOnce = function() {
                Be(function(t, n, r) {
                  if (!T()) {
                    var o = z.getCurrentHub().getIntegration(e);
                    o &&
                      z
                        .getCurrentHub()
                        .captureEvent(o.eventFromGlobalHandler(t), {
                          originalException: r,
                          data: { stack: t }
                        });
                  }
                }),
                  this.options.onerror &&
                    (ue.log("Global Handler attached: onerror"), Pe()),
                  this.options.onunhandledrejection &&
                    (ue.log("Global Handler attached: onunhandledrejection"),
                    Ue());
              }),
              (e.prototype.eventFromGlobalHandler = function(e) {
                var t = M(e);
                return G.__assign({}, t, {
                  exception: G.__assign({}, t.exception, {
                    mechanism: {
                      data: { mode: e.mode },
                      handled: !1,
                      type: e.mechanism
                    }
                  })
                });
              }),
              (e.id = "GlobalHandlers"),
              e
            );
          })(),
          tt = (function() {
            function e() {
              (this.ignoreOnError = 0), (this.name = e.id);
            }
            return (
              (e.prototype.wrapTimeFunction = function(e) {
                return function() {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t[0];
                  return (
                    (t[0] = D(r, {
                      mechanism: {
                        data: { function: e.name || "<anonymous>" },
                        handled: !0,
                        type: "instrument"
                      }
                    })),
                    e.apply(this, t)
                  );
                };
              }),
              (e.prototype.wrapRAF = function(e) {
                return function(t) {
                  return e(
                    D(t, {
                      mechanism: {
                        data: {
                          function: "requestAnimationFrame",
                          handler: (e && e.name) || "<anonymous>"
                        },
                        handled: !0,
                        type: "instrument"
                      }
                    })
                  );
                };
              }),
              (e.prototype.wrapEventTarget = function(e) {
                var t = ie(),
                  n = t[e] && t[e].prototype;
                n &&
                  n.hasOwnProperty &&
                  n.hasOwnProperty("addEventListener") &&
                  (we(n, "addEventListener", function(t) {
                    return function(n, r, o) {
                      try {
                        r.handleEvent = D(r.handleEvent.bind(r), {
                          mechanism: {
                            data: {
                              function: "handleEvent",
                              handler: (r && r.name) || "<anonymous>",
                              target: e
                            },
                            handled: !0,
                            type: "instrument"
                          }
                        });
                      } catch (e) {}
                      var i, a, s;
                      return (
                        ("EventTarget" !== e && "Node" !== e) ||
                          ((a = F("click")),
                          (s = R()),
                          (i = function(e) {
                            if (e) {
                              var t;
                              try {
                                t = e.type;
                              } catch (e) {
                                return;
                              }
                              return "click" === t
                                ? a(e)
                                : "keypress" === t
                                ? s(e)
                                : void 0;
                            }
                          })),
                        t.call(
                          this,
                          n,
                          D(
                            r,
                            {
                              mechanism: {
                                data: {
                                  function: "addEventListener",
                                  handler: (r && r.name) || "<anonymous>",
                                  target: e
                                },
                                handled: !0,
                                type: "instrument"
                              }
                            },
                            i
                          ),
                          o
                        )
                      );
                    };
                  }),
                  we(n, "removeEventListener", function(e) {
                    return function(t, n, r) {
                      var o = n;
                      try {
                        o = o && (o.__sentry_wrapped__ || o);
                      } catch (e) {}
                      return e.call(this, t, o, r);
                    };
                  }));
              }),
              (e.prototype.setupOnce = function() {
                this.ignoreOnError = this.ignoreOnError;
                var e = ie();
                we(e, "setTimeout", this.wrapTimeFunction.bind(this)),
                  we(e, "setInterval", this.wrapTimeFunction.bind(this)),
                  we(e, "requestAnimationFrame", this.wrapRAF.bind(this)),
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
                    "XMLHttpRequestUpload"
                  ].forEach(this.wrapEventTarget.bind(this));
              }),
              (e.id = "TryCatch"),
              e
            );
          })(),
          nt = ie(),
          rt = (function() {
            function e(t) {
              (this.name = e.id),
                (this.options = G.__assign(
                  {
                    beacon: !0,
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                  },
                  t
                ));
            }
            return (
              (e.prototype.instrumentBeacon = function() {
                function t(t) {
                  return function() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                      n[r] = arguments[r];
                    var o = n[0],
                      i = n[1],
                      a = t.apply(this, n),
                      s = z.getCurrentHub().getClient(),
                      l = s && s.getDsn();
                    if (l) {
                      var c = new z.API(l).getStoreEndpoint();
                      if (c && _e(o, c)) return B(i), a;
                    }
                    var u = { category: "beacon", data: i, type: "http" };
                    return (
                      a || (u.level = Y.Error),
                      e.addBreadcrumb(u, { input: n, result: a }),
                      a
                    );
                  };
                }
                he() && we(nt.navigator, "sendBeacon", t);
              }),
              (e.prototype.instrumentConsole = function() {
                "console" in nt &&
                  ["debug", "info", "warn", "error", "log"].forEach(function(
                    t
                  ) {
                    t in nt.console &&
                      we(nt.console, t, function(n) {
                        return function() {
                          for (var r = [], o = 0; o < arguments.length; o++)
                            r[o] = arguments[o];
                          var i = {
                            category: "console",
                            data: {
                              extra: { arguments: xe(r, 2) },
                              logger: "console"
                            },
                            level: Y.fromString(t),
                            message: Se(r, " ")
                          };
                          "assert" === t &&
                            !1 === r[0] &&
                            ((i.message =
                              "Assertion failed: " +
                              (Se(r.slice(1), " ") || "console.assert")),
                            (i.data.extra.arguments = xe(r.slice(1), 2))),
                            e.addBreadcrumb(i, { input: r, level: t }),
                            n &&
                              Function.prototype.apply.call(n, nt.console, r);
                        };
                      });
                  });
              }),
              (e.prototype.instrumentDOM = function() {
                "document" in nt &&
                  (nt.document.addEventListener("click", F("click"), !1),
                  nt.document.addEventListener("keypress", R(), !1));
              }),
              (e.prototype.instrumentFetch = function() {
                fe() &&
                  we(nt, "fetch", function(t) {
                    return function() {
                      for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                      var o,
                        i = n[0],
                        a = "GET";
                      "string" == typeof i
                        ? (o = i)
                        : "Request" in nt && i instanceof Request
                        ? ((o = i.url), i.method && (a = i.method))
                        : (o = String(i)),
                        n[1] && n[1].method && (a = n[1].method);
                      var s = z.getCurrentHub().getClient(),
                        l = s && s.getDsn();
                      if (l) {
                        var c = new z.API(l).getStoreEndpoint();
                        if (c && _e(o, c))
                          return (
                            "POST" === a && n[1] && n[1].body && B(n[1].body),
                            t.apply(nt, n)
                          );
                      }
                      var u = { method: a, url: o };
                      return t
                        .apply(nt, n)
                        .then(function(t) {
                          return (
                            (u.status_code = t.status),
                            e.addBreadcrumb(
                              { category: "fetch", data: u, type: "http" },
                              { input: n, response: t }
                            ),
                            t
                          );
                        })
                        .catch(function(t) {
                          throw (e.addBreadcrumb(
                            {
                              category: "fetch",
                              data: u,
                              level: Y.Error,
                              type: "http"
                            },
                            { error: t, input: n }
                          ),
                          t);
                        });
                    };
                  });
              }),
              (e.prototype.instrumentHistory = function() {
                function t(e) {
                  return function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    var o = t.length > 2 ? t[2] : void 0;
                    return o && r(Fe, String(o)), e.apply(this, t);
                  };
                }
                var n = this;
                if (Ae()) {
                  var r = function(t, n) {
                      var r = se(nt.location.href),
                        o = se(n),
                        i = se(t);
                      i.path || (i = r),
                        (Fe = n),
                        r.protocol === o.protocol &&
                          r.host === o.host &&
                          (n = o.relative),
                        r.protocol === i.protocol &&
                          r.host === i.host &&
                          (t = i.relative),
                        e.addBreadcrumb({
                          category: "navigation",
                          data: { from: t, to: n }
                        });
                    },
                    o = nt.onpopstate;
                  (nt.onpopstate = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    var i = nt.location.href;
                    if ((r(Fe, i), o)) return o.apply(n, e);
                  }),
                    we(nt.history, "pushState", t),
                    we(nt.history, "replaceState", t);
                }
              }),
              (e.prototype.instrumentXHR = function() {
                function t(e, t) {
                  e in t &&
                    te(t[e]) &&
                    we(t, e, function(t) {
                      return D(t, {
                        mechanism: {
                          data: {
                            function: e,
                            handler: (t && t.name) || "<anonymous>"
                          },
                          handled: !0,
                          type: "instrument"
                        }
                      });
                    });
                }
                if ("XMLHttpRequest" in nt) {
                  var n = XMLHttpRequest.prototype;
                  we(n, "open", function(e) {
                    return function() {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      var r = t[1];
                      this.__sentry_xhr__ = { method: t[0], url: t[1] };
                      var o = z.getCurrentHub().getClient(),
                        i = o && o.getDsn();
                      if (i) {
                        var a = new z.API(i).getStoreEndpoint();
                        ne(r) &&
                          a &&
                          _e(r, a) &&
                          (this.__sentry_own_request__ = !0);
                      }
                      return e.apply(this, t);
                    };
                  }),
                    we(n, "send", function(n) {
                      return function() {
                        function r() {
                          if (4 === a.readyState) {
                            if (a.__sentry_own_request__) return;
                            try {
                              a.__sentry_xhr__ &&
                                (a.__sentry_xhr__.status_code = a.status);
                            } catch (e) {}
                            e.addBreadcrumb(
                              {
                                category: "xhr",
                                data: a.__sentry_xhr__,
                                type: "http"
                              },
                              { xhr: a }
                            );
                          }
                        }
                        for (var o = [], i = 0; i < arguments.length; i++)
                          o[i] = arguments[i];
                        var a = this;
                        return (
                          a.__sentry_own_request__ && B(o[0]),
                          ["onload", "onerror", "onprogress"].forEach(function(
                            e
                          ) {
                            t(e, a);
                          }),
                          "onreadystatechange" in a && te(a.onreadystatechange)
                            ? we(a, "onreadystatechange", function(e) {
                                return D(
                                  e,
                                  {
                                    mechanism: {
                                      data: {
                                        function: "onreadystatechange",
                                        handler: (e && e.name) || "<anonymous>"
                                      },
                                      handled: !0,
                                      type: "instrument"
                                    }
                                  },
                                  r
                                );
                              })
                            : (a.onreadystatechange = r),
                          n.apply(this, o)
                        );
                      };
                    });
                }
              }),
              (e.addBreadcrumb = function(t, n) {
                z.getCurrentHub().getIntegration(e) &&
                  z.getCurrentHub().addBreadcrumb(t, n);
              }),
              (e.prototype.setupOnce = function() {
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
          ot = "cause",
          it = 5,
          at = (function() {
            function e(t) {
              void 0 === t && (t = {}),
                (this.name = e.id),
                (this.key = t.key || ot),
                (this.limit = t.limit || it);
            }
            return (
              (e.prototype.setupOnce = function() {
                var t = this;
                z.addGlobalEventProcessor(function(n, r) {
                  return G.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return G.__generator(this, function(o) {
                      return (
                        (t = z.getCurrentHub().getIntegration(e)),
                        t ? [2, t.handler(n, r)] : [2, n]
                      );
                    });
                  });
                });
              }),
              (e.prototype.handler = function(e, t) {
                if (
                  !(
                    e.exception &&
                    e.exception.values &&
                    t &&
                    t.originalException instanceof Error
                  )
                )
                  return e;
                var n = this.walkErrorTree(t.originalException, this.key);
                return (
                  (e.exception.values = G.__spread(n, e.exception.values)), e
                );
              }),
              (e.prototype.walkErrorTree = function(e, t, n) {
                if (
                  (void 0 === n && (n = []),
                  !(e[t] instanceof Error) || n.length + 1 >= this.limit)
                )
                  return n;
                var r = Le(e[t]),
                  o = O(r);
                return this.walkErrorTree(e[t], t, G.__spread([o], n));
              }),
              (e.id = "LinkedErrors"),
              e
            );
          })(),
          st = ie(),
          lt = (function() {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function() {
                var t = this;
                z.addGlobalEventProcessor(function(n) {
                  return G.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return G.__generator(this, function(r) {
                      return z.getCurrentHub().getIntegration(e) &&
                        st.navigator &&
                        st.location
                        ? ((t = n.request || {}),
                          (t.url = t.url || st.location.href),
                          (t.headers = t.headers || {}),
                          (t.headers["User-Agent"] = st.navigator.userAgent),
                          [2, G.__assign({}, n, { request: t })])
                        : [2, n];
                    });
                  });
                });
              }),
              (e.id = "UserAgent"),
              e
            );
          })(),
          ct = (function() {
            function e(t) {
              void 0 === t && (t = {}),
                (this.name = e.id),
                (this.Ember = t.Ember || ie().Ember);
            }
            return (
              (e.prototype.setupOnce = function() {
                var t = this;
                if (this.Ember) {
                  var n = this.Ember.onerror;
                  (this.Ember.onerror = function(r) {
                    if (
                      (z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function(e) {
                          t.addIntegrationToSdkInfo(e), z.captureException(r);
                        }),
                      "function" == typeof n)
                    )
                      n.call(t.Ember, r);
                    else if (t.Ember.testing) throw r;
                  }),
                    this.Ember.RSVP.on("error", function(n) {
                      z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function(e) {
                          n instanceof Error
                            ? (e.setExtra(
                                "context",
                                "Unhandled Promise error detected"
                              ),
                              t.addIntegrationToSdkInfo(e),
                              z.captureException(n))
                            : (e.setExtra("reason", n),
                              t.addIntegrationToSdkInfo(e),
                              z.captureMessage(
                                "Unhandled Promise error detected"
                              ));
                        });
                    });
                }
              }),
              (e.prototype.addIntegrationToSdkInfo = function(e) {
                var t = this;
                e.addEventProcessor(function(e) {
                  return G.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return G.__generator(this, function(n) {
                      return (
                        e.sdk &&
                          ((t = e.sdk.integrations || []),
                          (e.sdk = G.__assign({}, e.sdk, {
                            integrations: G.__spread(t, ["ember"])
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
          ut = (function() {
            function e(t) {
              void 0 === t && (t = {}),
                (this.name = e.id),
                (this.Vue = t.Vue || ie().Vue);
            }
            return (
              (e.prototype.formatComponentName = function(e) {
                if (e.$root === e) return "root instance";
                var t = e._isVue
                  ? e.$options.name || e.$options._componentTag
                  : e.name;
                return (
                  (t ? "component <" + t + ">" : "anonymous component") +
                  (e._isVue && e.$options.__file
                    ? " at " + e.$options.__file
                    : "")
                );
              }),
              (e.prototype.setupOnce = function() {
                var t = this;
                if (this.Vue && this.Vue.config) {
                  var n = this.Vue.config.errorHandler;
                  this.Vue.config.errorHandler = function(r, o, i) {
                    var a = {};
                    re(o) &&
                      ((a.componentName = t.formatComponentName(o)),
                      (a.propsData = o.$options.propsData)),
                      ee(i) || (a.lifecycleHook = i),
                      z.getCurrentHub().getIntegration(e) &&
                        z.withScope(function(e) {
                          Object.keys(a).forEach(function(t) {
                            e.setExtra(t, a[t]);
                          }),
                            e.addEventProcessor(function(e) {
                              return G.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return G.__generator(this, function(n) {
                                  return (
                                    e.sdk &&
                                      ((t = e.sdk.integrations || []),
                                      (e.sdk = G.__assign({}, e.sdk, {
                                        integrations: G.__spread(t, ["vue"])
                                      }))),
                                    [2, e]
                                  );
                                });
                              });
                            }),
                            z.captureException(r);
                        }),
                      "function" == typeof n && n.call(t.Vue, r, o, i);
                  };
                }
              }),
              (e.id = "Vue"),
              e
            );
          })();
        !(function(e) {
          (e.Crash = "crash"),
            (e.Deprecation = "deprecation"),
            (e.Intervention = "intervention");
        })(Re || (Re = {}));
        var dt = (function() {
            function e(t) {
              void 0 === t &&
                (t = { types: [Re.Crash, Re.Deprecation, Re.Intervention] }),
                (this.options = t),
                (this.name = e.id);
            }
            return (
              (e.prototype.setupOnce = function() {
                if (me()) {
                  new (ie()).ReportingObserver(this.handler.bind(this), {
                    buffered: !0,
                    types: this.options.types
                  }).observe();
                }
              }),
              (e.prototype.handler = function(t) {
                var n, r;
                if (z.getCurrentHub().getIntegration(e)) {
                  try {
                    for (
                      var o = G.__values(t), i = o.next();
                      !i.done;
                      i = o.next()
                    ) {
                      var a = i.value;
                      !(function(e) {
                        z.withScope(function(t) {
                          t.setExtra("url", e.url);
                          var n = "ReportingObserver [" + e.type + "]",
                            r = "No details available";
                          if (e.body) {
                            var o = {};
                            for (var i in e.body) o[i] = e.body[i];
                            if ((t.setExtra("body", o), e.type === Re.Crash)) {
                              var a = e.body;
                              r =
                                [a.crashId || "", a.reason || ""]
                                  .join(" ")
                                  .trim() || r;
                            } else {
                              var a = e.body;
                              r = a.message || r;
                            }
                          }
                          z.captureMessage(n + ": " + r);
                        });
                      })(a);
                    }
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              }),
              (e.id = "ReportingObserver"),
              e
            );
          })(),
          pt = Object.freeze({
            GlobalHandlers: et,
            TryCatch: tt,
            Breadcrumbs: rt,
            LinkedErrors: at,
            UserAgent: lt,
            Ember: ct,
            Vue: ut,
            ReportingObserver: dt
          }),
          ft = [
            new z.Integrations.Dedupe(),
            new z.Integrations.InboundFilters(),
            new z.Integrations.FunctionToString(),
            new z.Integrations.ExtraErrorData(),
            new tt(),
            new rt(),
            new et(),
            new at(),
            new lt()
          ],
          ht = G.__assign({}, z.Integrations, pt);
        (t.addGlobalEventProcessor = z.addGlobalEventProcessor),
          (t.addBreadcrumb = z.addBreadcrumb),
          (t.captureException = z.captureException),
          (t.captureEvent = z.captureEvent),
          (t.captureMessage = z.captureMessage),
          (t.configureScope = z.configureScope),
          (t.withScope = z.withScope),
          (t.getHubFromCarrier = z.getHubFromCarrier),
          (t.getCurrentHub = z.getCurrentHub),
          (t.Hub = z.Hub),
          (t.Scope = z.Scope),
          (t.Integrations = ht),
          (t.Transports = Je),
          (t.Severity = Y),
          (t.Status = J),
          (t.BrowserBackend = Ke),
          (t.BrowserClient = Ze),
          (t.defaultIntegrations = ft),
          (t.forceLoad = H),
          (t.init = P),
          (t.lastEventId = L),
          (t.onLoad = Q),
          (t.showReportDialog = U),
          (t.SDK_NAME = Ve),
          (t.SDK_VERSION = "4.4.2");
      }.call(t, n(22), n(25)));
    },
    66: function(e, t, n) {
      var r = n(112);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    67: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = n(14).connect,
        i = n(4).FormattedMessage,
        a = n(1),
        s = n(4).injectIntl,
        l = n(4).intlShape,
        c = n(16),
        u = n(17),
        d = function(e) {
          var t = e.canceledDeletionOpen,
            n = e.handleCloseCanceledDeletion,
            o = e.intl;
          return r.createElement(
            u,
            {
              isOpen: t,
              style: { content: { padding: 15 } },
              onRequestClose: n
            },
            r.createElement(
              "h4",
              null,
              r.createElement(i, { id: "general.noDeletionTitle" })
            ),
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
                  )
                }
              })
            )
          );
        };
      d.propTypes = {
        canceledDeletionOpen: a.bool,
        handleCloseCanceledDeletion: a.func,
        intl: l
      };
      var p = function(e) {
          return {
            canceledDeletionOpen:
              e.navigation && e.navigation.canceledDeletionOpen
          };
        },
        f = function(e) {
          return {
            handleCloseCanceledDeletion: function() {
              e(c.setCanceledDeletionOpen(!1));
            }
          };
        },
        h = o(p, f)(d);
      e.exports = s(h);
    },
    68: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0),
        i = n(14).connect,
        a = n(95);
      n(34);
      var s = function(e) {
        var t = e.error,
          n = e.onLogIn;
        return o.createElement(a, {
          error: t,
          key: "login-dropdown-presentation",
          onLogIn: n
        });
      };
      s.propTypes = { error: r.string, onLogIn: r.func };
      var l = function(e) {
          return { error: e.navigation && e.navigation.loginError };
        },
        c = function() {
          return {};
        };
      e.exports = i(l, c)(s);
    },
    69: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(13),
        i = n(1),
        a = n(0),
        s = n(17);
      n(129);
      var l = function(e) {
        return a.createElement(
          s,
          o(e, ["src"]),
          a.createElement("iframe", {
            className: r("modal-content-iframe", e.className),
            ref: e.componentRef,
            src: e.src
          })
        );
      };
      (l.propTypes = {
        className: i.string,
        componentRef: i.func,
        isOpen: i.bool,
        onRequestClose: i.func,
        src: i.string
      }),
        (e.exports = l);
    },
    7: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(11),
        o = r.getGlobalObject(),
        i = (function() {
          function e() {
            this.enabled = !1;
          }
          return (
            (e.prototype.disable = function() {
              this.enabled = !1;
            }),
            (e.prototype.enable = function() {
              this.enabled = !0;
            }),
            (e.prototype.log = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                r.consoleSandbox(function() {
                  o.console.log("Sentry Logger [Log]: " + e.join(" "));
                });
            }),
            (e.prototype.warn = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                r.consoleSandbox(function() {
                  o.console.warn("Sentry Logger [Warn]: " + e.join(" "));
                });
            }),
            (e.prototype.error = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                r.consoleSandbox(function() {
                  o.console.error("Sentry Logger [Error]: " + e.join(" "));
                });
            }),
            e
          );
        })(),
        a = new i();
      t.logger = a;
    },
    70: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(5),
        c = n(1),
        u = n(0),
        d = n(14).connect,
        p = n(69),
        f = n(16);
      n(66);
      var h = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            s(n, ["handleMessage", "toggleMessageListener"]),
            (n.state = { recaptchaOpen: !1 }),
            n
          );
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "componentDidMount",
              value: function() {
                this.props.isOpen && this.toggleMessageListener(!0);
              }
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                this.props.isOpen &&
                  !e.isOpen &&
                  this.toggleMessageListener(!0),
                  !this.props.isOpen &&
                    e.isOpen &&
                    this.toggleMessageListener(!1);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.toggleMessageListener(!1);
              }
            },
            {
              key: "handleMessage",
              value: function(e) {
                e.origin === window.location.origin &&
                  e.source === this.registrationIframe.contentWindow &&
                  ("registration-done" === e.data &&
                    this.props.handleCompleteRegistration(),
                  "registration-relaunch" === e.data &&
                    this.registrationIframe.contentWindow.location.reload(),
                  "recaptcha-opened" === e.data &&
                    this.setState({ recaptchaOpen: !0 }),
                  "recaptcha-closed" === e.data &&
                    this.setState({ recaptchaOpen: !1 }));
              }
            },
            {
              key: "toggleMessageListener",
              value: function(e) {
                e
                  ? window.addEventListener("message", this.handleMessage)
                  : window.removeEventListener("message", this.handleMessage);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return u.createElement(p, {
                  className: l("mod-registration", {
                    "recaptcha-open": this.state.recaptchaOpen
                  }),
                  componentRef: function(t) {
                    e.registrationIframe = t;
                  },
                  isOpen: this.props.isOpen,
                  src: "/accounts/standalone-registration/",
                  onRequestClose: this.props.handleCloseRegistration
                });
              }
            }
          ]),
          t
        );
      })(u.Component);
      h.propTypes = {
        handleCloseRegistration: c.func,
        handleCompleteRegistration: c.func,
        isOpen: c.bool
      };
      var m = function(e) {
          return { isOpen: e.navigation.registrationOpen };
        },
        g = function(e) {
          return {
            handleCloseRegistration: function() {
              e(f.setRegistrationOpen(!1));
            },
            handleCompleteRegistration: function() {
              e(f.handleCompleteRegistration());
            }
          };
        };
      e.exports = d(m, g)(h);
    },
    703: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      (t.__esModule = !0), (t.NextArrow = t.PrevArrow = void 0);
      var s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        l = n(0),
        c = r(l),
        u = n(5),
        d = r(u),
        p = n(330),
        f = r(p);
      (t.PrevArrow = (function(e) {
        function t() {
          return o(this, t), i(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.clickHandler = function(e, t) {
            t && t.preventDefault(), this.props.clickHandler(e, t);
          }),
          (t.prototype.render = function() {
            var e = { "slick-arrow": !0, "slick-prev": !0 },
              t = this.clickHandler.bind(this, { message: "previous" });
            !this.props.infinite &&
              (0 === this.props.currentSlide ||
                this.props.slideCount <= this.props.slidesToShow) &&
              ((e["slick-disabled"] = !0), (t = null));
            var n = {
                key: "0",
                "data-role": "none",
                className: (0, d.default)(e),
                style: { display: "block" },
                onClick: t
              },
              r = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
              };
            return this.props.prevArrow
              ? c.default.cloneElement(this.props.prevArrow, s({}, n, r))
              : c.default.createElement(
                  "button",
                  s({ key: "0", type: "button" }, n),
                  " Previous"
                );
          }),
          t
        );
      })(c.default.Component)),
        (t.NextArrow = (function(e) {
          function t() {
            return o(this, t), i(this, e.apply(this, arguments));
          }
          return (
            a(t, e),
            (t.prototype.clickHandler = function(e, t) {
              t && t.preventDefault(), this.props.clickHandler(e, t);
            }),
            (t.prototype.render = function() {
              var e = { "slick-arrow": !0, "slick-next": !0 },
                t = this.clickHandler.bind(this, { message: "next" });
              f.default.canGoNext(this.props) ||
                ((e["slick-disabled"] = !0), (t = null));
              var n = {
                  key: "1",
                  "data-role": "none",
                  className: (0, d.default)(e),
                  style: { display: "block" },
                  onClick: t
                },
                r = {
                  currentSlide: this.props.currentSlide,
                  slideCount: this.props.slideCount
                };
              return this.props.nextArrow
                ? c.default.cloneElement(this.props.nextArrow, s({}, n, r))
                : c.default.createElement(
                    "button",
                    s({ key: "1", type: "button" }, n),
                    " Next"
                  );
            }),
            t
          );
        })(c.default.Component));
    },
    704: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      (t.__esModule = !0), (t.Dots = void 0);
      var s = n(0),
        l = r(s),
        c = n(5),
        u = r(c),
        d = function(e) {
          return Math.ceil(e.slideCount / e.slidesToScroll);
        };
      t.Dots = (function(e) {
        function t() {
          return o(this, t), i(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.clickHandler = function(e, t) {
            t.preventDefault(), this.props.clickHandler(e);
          }),
          (t.prototype.render = function() {
            var e = this,
              t = d({
                slideCount: this.props.slideCount,
                slidesToScroll: this.props.slidesToScroll
              }),
              n = Array.apply(
                null,
                Array(t + 1)
                  .join("0")
                  .split("")
              ).map(function(t, n) {
                var r = n * e.props.slidesToScroll,
                  o = n * e.props.slidesToScroll + (e.props.slidesToScroll - 1),
                  i = (0, u.default)({
                    "slick-active":
                      e.props.currentSlide >= r && e.props.currentSlide <= o
                  }),
                  a = {
                    message: "dots",
                    index: n,
                    slidesToScroll: e.props.slidesToScroll,
                    currentSlide: e.props.currentSlide
                  },
                  s = e.clickHandler.bind(e, a);
                return l.default.createElement(
                  "li",
                  { key: n, className: i },
                  l.default.cloneElement(e.props.customPaging(n), {
                    onClick: s
                  })
                );
              });
            return l.default.createElement(
              "ul",
              { className: this.props.dotsClass, style: { display: "block" } },
              n
            );
          }),
          t
        );
      })(l.default.Component);
    },
    705: function(e, t, n) {
      "use strict";
      var r = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        listWidth: null,
        listHeight: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        slideHeight: null,
        swiping: !1,
        swipeLeft: null,
        touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
        lazyLoadedList: [],
        initialized: !1,
        edgeDragged: !1,
        swiped: !1,
        trackStyle: {},
        trackWidth: 0
      };
      e.exports = r;
    },
    706: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0), (t.InnerSlider = void 0);
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(0),
        a = r(i),
        s = n(707),
        l = r(s),
        c = n(330),
        u = r(c),
        d = n(705),
        p = r(d),
        f = n(502),
        h = r(f),
        m = n(218),
        g = r(m),
        A = n(5),
        v = r(A),
        y = n(158),
        b = r(y),
        w = n(709),
        x = n(704),
        E = n(703);
      t.InnerSlider = (0, g.default)({
        displayName: "InnerSlider",
        mixins: [u.default, l.default],
        list: null,
        track: null,
        listRefHandler: function(e) {
          this.list = e;
        },
        trackRefHandler: function(e) {
          this.track = e;
        },
        getInitialState: function() {
          return o({}, p.default, { currentSlide: this.props.initialSlide });
        },
        getDefaultProps: function() {
          return h.default;
        },
        componentWillMount: function() {
          this.props.init && this.props.init(), this.setState({ mounted: !0 });
          for (
            var e = [], t = 0;
            t < a.default.Children.count(this.props.children);
            t++
          )
            t >= this.state.currentSlide &&
              t < this.state.currentSlide + this.props.slidesToShow &&
              e.push(t);
          this.props.lazyLoad &&
            0 === this.state.lazyLoadedList.length &&
            this.setState({ lazyLoadedList: e });
        },
        componentDidMount: function() {
          this.initialize(this.props),
            this.adaptHeight(),
            window &&
              (window.addEventListener
                ? window.addEventListener("resize", this.onWindowResized)
                : window.attachEvent("onresize", this.onWindowResized));
        },
        componentWillUnmount: function() {
          this.animationEndCallback && clearTimeout(this.animationEndCallback),
            window.addEventListener
              ? window.removeEventListener("resize", this.onWindowResized)
              : window.detachEvent("onresize", this.onWindowResized),
            this.state.autoPlayTimer && clearInterval(this.state.autoPlayTimer);
        },
        componentWillReceiveProps: function(e) {
          this.props.slickGoTo != e.slickGoTo
            ? this.changeSlide({
                message: "index",
                index: e.slickGoTo,
                currentSlide: this.state.currentSlide
              })
            : this.state.currentSlide >= e.children.length
            ? (this.update(e),
              this.changeSlide({
                message: "index",
                index: e.children.length - e.slidesToShow,
                currentSlide: this.state.currentSlide
              }))
            : this.update(e);
        },
        componentDidUpdate: function() {
          this.adaptHeight();
        },
        onWindowResized: function() {
          this.update(this.props),
            this.setState({ animating: !1 }),
            clearTimeout(this.animationEndCallback),
            delete this.animationEndCallback;
        },
        slickPrev: function() {
          this.changeSlide({ message: "previous" });
        },
        slickNext: function() {
          this.changeSlide({ message: "next" });
        },
        slickGoTo: function(e) {
          (e = Number(e)),
            !isNaN(e) &&
              this.changeSlide({
                message: "index",
                index: e,
                currentSlide: this.state.currentSlide
              });
        },
        render: function() {
          var e,
            t = (0, v.default)(
              "slick-initialized",
              "slick-slider",
              this.props.className,
              { "slick-vertical": this.props.vertical }
            ),
            n = {
              fade: this.props.fade,
              cssEase: this.props.cssEase,
              speed: this.props.speed,
              infinite: this.props.infinite,
              centerMode: this.props.centerMode,
              focusOnSelect: this.props.focusOnSelect
                ? this.selectHandler
                : null,
              currentSlide: this.state.currentSlide,
              lazyLoad: this.props.lazyLoad,
              lazyLoadedList: this.state.lazyLoadedList,
              rtl: this.props.rtl,
              slideWidth: this.state.slideWidth,
              slidesToShow: this.props.slidesToShow,
              slidesToScroll: this.props.slidesToScroll,
              slideCount: this.state.slideCount,
              trackStyle: this.state.trackStyle,
              variableWidth: this.props.variableWidth
            };
          if (
            !0 === this.props.dots &&
            this.state.slideCount >= this.props.slidesToShow
          ) {
            var r = {
              dotsClass: this.props.dotsClass,
              slideCount: this.state.slideCount,
              slidesToShow: this.props.slidesToShow,
              currentSlide: this.state.currentSlide,
              slidesToScroll: this.props.slidesToScroll,
              clickHandler: this.changeSlide,
              children: this.props.children,
              customPaging: this.props.customPaging
            };
            e = a.default.createElement(x.Dots, r);
          }
          var i,
            s,
            l = {
              infinite: this.props.infinite,
              centerMode: this.props.centerMode,
              currentSlide: this.state.currentSlide,
              slideCount: this.state.slideCount,
              slidesToShow: this.props.slidesToShow,
              prevArrow: this.props.prevArrow,
              nextArrow: this.props.nextArrow,
              clickHandler: this.changeSlide
            };
          this.props.arrows &&
            ((i = a.default.createElement(E.PrevArrow, l)),
            (s = a.default.createElement(E.NextArrow, l)));
          var c = null;
          this.props.vertical && (c = { height: this.state.listHeight });
          var u = null;
          !1 === this.props.vertical
            ? !0 === this.props.centerMode &&
              (u = { padding: "0px " + this.props.centerPadding })
            : !0 === this.props.centerMode &&
              (u = { padding: this.props.centerPadding + " 0px" });
          var d = (0, b.default)({}, c, u);
          return a.default.createElement(
            "div",
            {
              className: t,
              onMouseEnter: this.onInnerSliderEnter,
              onMouseLeave: this.onInnerSliderLeave,
              onMouseOver: this.onInnerSliderOver
            },
            i,
            a.default.createElement(
              "div",
              {
                ref: this.listRefHandler,
                className: "slick-list",
                style: d,
                onMouseDown: this.swipeStart,
                onMouseMove: this.state.dragging ? this.swipeMove : null,
                onMouseUp: this.swipeEnd,
                onMouseLeave: this.state.dragging ? this.swipeEnd : null,
                onTouchStart: this.swipeStart,
                onTouchMove: this.state.dragging ? this.swipeMove : null,
                onTouchEnd: this.swipeEnd,
                onTouchCancel: this.state.dragging ? this.swipeEnd : null,
                onKeyDown: this.props.accessibility ? this.keyHandler : null
              },
              a.default.createElement(
                w.Track,
                o({ ref: this.trackRefHandler }, n),
                this.props.children
              )
            ),
            s,
            e
          );
        }
      });
    },
    707: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var o = n(503),
        i = n(330),
        a = (r(i), n(158)),
        s = r(a),
        l = n(39),
        c = r(l),
        u = {
          changeSlide: function(e) {
            var t,
              n,
              r,
              o,
              i,
              a = this.props,
              s = a.slidesToScroll,
              l = a.slidesToShow,
              c = this.state,
              u = c.slideCount,
              d = c.currentSlide;
            if (
              ((o = u % s != 0),
              (t = o ? 0 : (u - d) % s),
              "previous" === e.message)
            )
              (r = 0 === t ? s : l - t),
                (i = d - r),
                this.props.lazyLoad &&
                  ((n = d - r), (i = -1 === n ? u - 1 : n));
            else if ("next" === e.message)
              (r = 0 === t ? s : t),
                (i = d + r),
                this.props.lazyLoad && (i = ((d + s) % u) + t);
            else if ("dots" === e.message || "children" === e.message) {
              if ((i = e.index * e.slidesToScroll) === e.currentSlide) return;
            } else if (
              "index" === e.message &&
              (i = Number(e.index)) === e.currentSlide
            )
              return;
            this.slideHandler(i);
          },
          keyHandler: function(e) {
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
              (37 === e.keyCode && !0 === this.props.accessibility
                ? this.changeSlide({
                    message: !0 === this.props.rtl ? "next" : "previous"
                  })
                : 39 === e.keyCode &&
                  !0 === this.props.accessibility &&
                  this.changeSlide({
                    message: !0 === this.props.rtl ? "previous" : "next"
                  }));
          },
          selectHandler: function(e) {
            this.changeSlide(e);
          },
          swipeStart: function(e) {
            var t, n;
            !1 === this.props.swipe ||
              ("ontouchend" in document && !1 === this.props.swipe) ||
              (!1 === this.props.draggable && -1 !== e.type.indexOf("mouse")) ||
              ((t = void 0 !== e.touches ? e.touches[0].pageX : e.clientX),
              (n = void 0 !== e.touches ? e.touches[0].pageY : e.clientY),
              this.setState({
                dragging: !0,
                touchObject: { startX: t, startY: n, curX: t, curY: n }
              }));
          },
          swipeMove: function(e) {
            if (!this.state.dragging) return void e.preventDefault();
            if (!this.state.scrolling) {
              if (this.state.animating) return void e.preventDefault();
              this.props.vertical &&
                this.props.swipeToSlide &&
                this.props.verticalSwiping &&
                e.preventDefault();
              var t,
                n,
                r,
                i = this.state.touchObject;
              (n = (0, o.getTrackLeft)(
                (0, s.default)(
                  { slideIndex: this.state.currentSlide, trackRef: this.track },
                  this.props,
                  this.state
                )
              )),
                (i.curX = e.touches ? e.touches[0].pageX : e.clientX),
                (i.curY = e.touches ? e.touches[0].pageY : e.clientY),
                (i.swipeLength = Math.round(
                  Math.sqrt(Math.pow(i.curX - i.startX, 2))
                ));
              var a = Math.round(Math.sqrt(Math.pow(i.curY - i.startY, 2)));
              if (!this.props.verticalSwiping && !this.state.swiping && a > 4)
                return void this.setState({ scrolling: !0 });
              this.props.verticalSwiping && (i.swipeLength = a),
                (r =
                  (!1 === this.props.rtl ? 1 : -1) *
                  (i.curX > i.startX ? 1 : -1)),
                this.props.verticalSwiping && (r = i.curY > i.startY ? 1 : -1);
              var l = this.state.currentSlide,
                c = Math.ceil(
                  this.state.slideCount / this.props.slidesToScroll
                ),
                u = this.swipeDirection(this.state.touchObject),
                d = i.swipeLength;
              !1 === this.props.infinite &&
                ((0 === l && "right" === u) || (l + 1 >= c && "left" === u)) &&
                ((d = i.swipeLength * this.props.edgeFriction),
                !1 === this.state.edgeDragged &&
                  this.props.edgeEvent &&
                  (this.props.edgeEvent(u),
                  this.setState({ edgeDragged: !0 }))),
                !1 === this.state.swiped &&
                  this.props.swipeEvent &&
                  (this.props.swipeEvent(u), this.setState({ swiped: !0 })),
                (t = this.props.vertical
                  ? n + d * (this.state.listHeight / this.state.listWidth) * r
                  : n + d * r),
                this.props.verticalSwiping && (t = n + d * r),
                this.setState({
                  touchObject: i,
                  swipeLeft: t,
                  trackStyle: (0, o.getTrackCSS)(
                    (0, s.default)({ left: t }, this.props, this.state)
                  )
                }),
                Math.abs(i.curX - i.startX) <
                  0.8 * Math.abs(i.curY - i.startY) ||
                  (i.swipeLength > 4 &&
                    (this.setState({ swiping: !0 }), e.preventDefault()));
            }
          },
          getNavigableIndexes: function() {
            var e = void 0,
              t = 0,
              n = 0,
              r = [];
            for (
              this.props.infinite
                ? ((t = -1 * this.props.slidesToShow),
                  (n = -1 * this.props.slidesToShow),
                  (e = 2 * this.state.slideCount))
                : (e = this.state.slideCount);
              t < e;

            )
              r.push(t),
                (t = n + this.props.slidesToScroll),
                (n +=
                  this.props.slidesToScroll <= this.props.slidesToShow
                    ? this.props.slidesToScroll
                    : this.props.slidesToShow);
            return r;
          },
          checkNavigable: function(e) {
            var t = this.getNavigableIndexes(),
              n = 0;
            if (e > t[t.length - 1]) e = t[t.length - 1];
            else
              for (var r in t) {
                if (e < t[r]) {
                  e = n;
                  break;
                }
                n = t[r];
              }
            return e;
          },
          getSlideCount: function() {
            var e = this,
              t = this.props.centerMode
                ? this.state.slideWidth *
                  Math.floor(this.props.slidesToShow / 2)
                : 0;
            if (this.props.swipeToSlide) {
              var n = void 0,
                r = c.default.findDOMNode(this.list),
                o = r.querySelectorAll(".slick-slide");
              Array.from(o).every(function(r) {
                if (e.props.vertical) {
                  if (r.offsetTop + e.getHeight(r) / 2 > -1 * e.state.swipeLeft)
                    return (n = r), !1;
                } else if (r.offsetLeft - t + e.getWidth(r) / 2 > -1 * e.state.swipeLeft) return (n = r), !1;
                return !0;
              });
              return Math.abs(n.dataset.index - this.state.currentSlide) || 1;
            }
            return this.props.slidesToScroll;
          },
          swipeEnd: function(e) {
            if (!this.state.dragging)
              return void (this.props.swipe && e.preventDefault());
            var t = this.state.touchObject,
              n = this.state.listWidth / this.props.touchThreshold,
              r = this.swipeDirection(t);
            this.props.verticalSwiping &&
              (n = this.state.listHeight / this.props.touchThreshold);
            var i = this.state.scrolling;
            if (
              (this.setState({
                dragging: !1,
                edgeDragged: !1,
                scrolling: !1,
                swiping: !1,
                swiped: !1,
                swipeLeft: null,
                touchObject: {}
              }),
              !i && t.swipeLength)
            )
              if (t.swipeLength > n) {
                e.preventDefault();
                var a = void 0,
                  l = void 0;
                switch (r) {
                  case "left":
                  case "down":
                    (l = this.state.currentSlide + this.getSlideCount()),
                      (a = this.props.swipeToSlide
                        ? this.checkNavigable(l)
                        : l),
                      (this.state.currentDirection = 0);
                    break;
                  case "right":
                  case "up":
                    (l = this.state.currentSlide - this.getSlideCount()),
                      (a = this.props.swipeToSlide
                        ? this.checkNavigable(l)
                        : l),
                      (this.state.currentDirection = 1);
                    break;
                  default:
                    a = this.state.currentSlide;
                }
                this.slideHandler(a);
              } else {
                var c = (0, o.getTrackLeft)(
                  (0, s.default)(
                    {
                      slideIndex: this.state.currentSlide,
                      trackRef: this.track
                    },
                    this.props,
                    this.state
                  )
                );
                this.setState({
                  trackStyle: (0, o.getTrackAnimateCSS)(
                    (0, s.default)({ left: c }, this.props, this.state)
                  )
                });
              }
          },
          onInnerSliderEnter: function(e) {
            this.props.autoplay && this.props.pauseOnHover && this.pause();
          },
          onInnerSliderOver: function(e) {
            this.props.autoplay && this.props.pauseOnHover && this.pause();
          },
          onInnerSliderLeave: function(e) {
            this.props.autoplay && this.props.pauseOnHover && this.autoPlay();
          }
        };
      t.default = u;
    },
    708: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        l = n(0),
        c = r(l),
        u = n(706),
        d = n(158),
        p = r(d),
        f = n(609),
        h = r(f),
        m = n(502),
        g = r(m),
        A = n(565),
        v = r(A),
        y = v.default && n(601),
        b = (function(e) {
          function t(n) {
            o(this, t);
            var r = i(this, e.call(this, n));
            return (
              (r.state = { breakpoint: null }),
              (r._responsiveMediaHandlers = []),
              (r.innerSliderRefHandler = r.innerSliderRefHandler.bind(r)),
              r
            );
          }
          return (
            a(t, e),
            (t.prototype.innerSliderRefHandler = function(e) {
              this.innerSlider = e;
            }),
            (t.prototype.media = function(e, t) {
              y.register(e, t),
                this._responsiveMediaHandlers.push({ query: e, handler: t });
            }),
            (t.prototype.componentWillMount = function() {
              var e = this;
              if (this.props.responsive) {
                var t = this.props.responsive.map(function(e) {
                  return e.breakpoint;
                });
                t.sort(function(e, t) {
                  return e - t;
                }),
                  t.forEach(function(n, r) {
                    var o;
                    (o =
                      0 === r
                        ? (0, h.default)({ minWidth: 0, maxWidth: n })
                        : (0, h.default)({ minWidth: t[r - 1], maxWidth: n })),
                      v.default &&
                        e.media(o, function() {
                          e.setState({ breakpoint: n });
                        });
                  });
                var n = (0, h.default)({ minWidth: t.slice(-1)[0] });
                v.default &&
                  this.media(n, function() {
                    e.setState({ breakpoint: null });
                  });
              }
            }),
            (t.prototype.componentWillUnmount = function() {
              this._responsiveMediaHandlers.forEach(function(e) {
                y.unregister(e.query, e.handler);
              });
            }),
            (t.prototype.slickPrev = function() {
              this.innerSlider.slickPrev();
            }),
            (t.prototype.slickNext = function() {
              this.innerSlider.slickNext();
            }),
            (t.prototype.slickGoTo = function(e) {
              this.innerSlider.slickGoTo(e);
            }),
            (t.prototype.render = function() {
              var e,
                t,
                n = this;
              this.state.breakpoint
                ? ((t = this.props.responsive.filter(function(e) {
                    return e.breakpoint === n.state.breakpoint;
                  })),
                  (e =
                    "unslick" === t[0].settings
                      ? "unslick"
                      : (0, p.default)({}, this.props, t[0].settings)))
                : (e = (0, p.default)({}, g.default, this.props));
              var r = this.props.children;
              return (
                Array.isArray(r) || (r = [r]),
                (r = r.filter(function(e) {
                  return !!e;
                })),
                "unslick" === e
                  ? c.default.createElement(
                      "div",
                      { className: this.props.className + " unslicked" },
                      r
                    )
                  : c.default.createElement(
                      u.InnerSlider,
                      s({ ref: this.innerSliderRefHandler }, e),
                      r
                    )
              );
            }),
            t
          );
        })(c.default.Component);
      t.default = b;
    },
    709: function(e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      (t.__esModule = !0), (t.Track = void 0);
      var s = n(0),
        l = r(s),
        c = n(158),
        u = r(c),
        d = n(5),
        p = r(d),
        f = function(e) {
          var t, n, r, o, i;
          return (
            (i = e.rtl ? e.slideCount - 1 - e.index : e.index),
            (r = i < 0 || i >= e.slideCount),
            e.centerMode
              ? ((o = Math.floor(e.slidesToShow / 2)),
                (n = (i - e.currentSlide) % e.slideCount == 0),
                i > e.currentSlide - o - 1 &&
                  i <= e.currentSlide + o &&
                  (t = !0))
              : (t =
                  e.currentSlide <= i && i < e.currentSlide + e.slidesToShow),
            (0, p.default)({
              "slick-slide": !0,
              "slick-active": t,
              "slick-center": n,
              "slick-cloned": r
            })
          );
        },
        h = function(e) {
          var t = {};
          return (
            (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
              (t.width = e.slideWidth),
            e.fade &&
              ((t.position = "relative"),
              (t.left = -e.index * e.slideWidth),
              (t.opacity = e.currentSlide === e.index ? 1 : 0),
              (t.transition = "opacity " + e.speed + "ms " + e.cssEase),
              (t.WebkitTransition = "opacity " + e.speed + "ms " + e.cssEase)),
            t
          );
        },
        m = function(e, t) {
          return null === e.key || void 0 === e.key ? t : e.key;
        },
        g = function(e) {
          var t,
            n = [],
            r = [],
            o = [],
            i = l.default.Children.count(e.children);
          return (
            l.default.Children.forEach(e.children, function(a, s) {
              var c = void 0,
                d = {
                  message: "children",
                  index: s,
                  slidesToScroll: e.slidesToScroll,
                  currentSlide: e.currentSlide
                };
              c =
                !e.lazyLoad | (e.lazyLoad && e.lazyLoadedList.indexOf(s) >= 0)
                  ? a
                  : l.default.createElement("div", null);
              var g = h((0, u.default)({}, e, { index: s })),
                A = c.props.className || "",
                v = function(t) {
                  c.props && c.props.onClick && c.props.onClick(t),
                    e.focusOnSelect && e.focusOnSelect(d);
                };
              if (
                (n.push(
                  l.default.cloneElement(c, {
                    key: "original" + m(c, s),
                    "data-index": s,
                    className: (0, p.default)(
                      f((0, u.default)({ index: s }, e)),
                      A
                    ),
                    tabIndex: "-1",
                    style: (0, u.default)(
                      { outline: "none" },
                      c.props.style || {},
                      g
                    ),
                    onClick: v
                  })
                ),
                e.infinite && !1 === e.fade)
              ) {
                var y = e.variableWidth ? e.slidesToShow + 1 : e.slidesToShow;
                s >= i - y &&
                  ((t = -(i - s)),
                  r.push(
                    l.default.cloneElement(c, {
                      key: "precloned" + m(c, t),
                      "data-index": t,
                      className: (0, p.default)(
                        f((0, u.default)({ index: t }, e)),
                        A
                      ),
                      style: (0, u.default)({}, c.props.style || {}, g),
                      onClick: v
                    })
                  )),
                  s < y &&
                    ((t = i + s),
                    o.push(
                      l.default.cloneElement(c, {
                        key: "postcloned" + m(c, t),
                        "data-index": t,
                        className: (0, p.default)(
                          f((0, u.default)({ index: t }, e)),
                          A
                        ),
                        style: (0, u.default)({}, c.props.style || {}, g),
                        onClick: v
                      })
                    ));
              }
            }),
            e.rtl ? r.concat(n, o).reverse() : r.concat(n, o)
          );
        };
      t.Track = (function(e) {
        function t() {
          return o(this, t), i(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = g.call(this, this.props);
            return l.default.createElement(
              "div",
              { className: "slick-track", style: this.props.trackStyle },
              e
            );
          }),
          t
        );
      })(l.default.Component);
    },
    71: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(20),
        o = n(18),
        i = (function() {
          function e(e) {
            (this.dsn = e), (this.dsnObject = new o.Dsn(e));
          }
          return (
            (e.prototype.getDsn = function() {
              return this.dsnObject;
            }),
            (e.prototype.getStoreEndpoint = function() {
              return "" + this.getBaseUrl() + this.getStoreEndpointPath();
            }),
            (e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
              var e = this.dsnObject,
                t = { sentry_key: e.user, sentry_version: "7" };
              return this.getStoreEndpoint() + "?" + r.urlEncode(t);
            }),
            (e.prototype.getBaseUrl = function() {
              var e = this.dsnObject,
                t = e.protocol ? e.protocol + ":" : "",
                n = e.port ? ":" + e.port : "";
              return t + "//" + e.host + n;
            }),
            (e.prototype.getStoreEndpointPath = function() {
              var e = this.dsnObject;
              return (
                (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
              );
            }),
            (e.prototype.getRequestHeaders = function(e, t) {
              var n = this.dsnObject,
                r = ["Sentry sentry_version=7"];
              return (
                r.push("sentry_timestamp=" + new Date().getTime()),
                r.push("sentry_client=" + e + "/" + t),
                r.push("sentry_key=" + n.user),
                n.pass && r.push("sentry_secret=" + n.pass),
                {
                  "Content-Type": "application/json",
                  "X-Sentry-Auth": r.join(", ")
                }
              );
            }),
            (e.prototype.getReportDialogEndpoint = function(e) {
              void 0 === e && (e = {});
              var t = this.dsnObject,
                n =
                  this.getBaseUrl() +
                  (t.path ? "/" + t.path : "") +
                  "/api/embed/error-page/",
                r = [];
              r.push("dsn=" + t.toString());
              for (var o in e)
                if ("user" === o) {
                  if (!e.user) continue;
                  e.user.name &&
                    r.push("name=" + encodeURIComponent(e.user.name)),
                    e.user.email &&
                      r.push("email=" + encodeURIComponent(e.user.email));
                } else
                  r.push(
                    encodeURIComponent(o) + "=" + encodeURIComponent(e[o])
                  );
              return r.length ? n + "?" + r.join("&") : n;
            }),
            e
          );
        })();
      t.API = i;
    },
    716: function(e, t) {
      var n = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return "-" + e.toLowerCase();
          })
          .toLowerCase();
      };
      e.exports = n;
    },
    717: function(e, t, n) {
      var r = n(573);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    72: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(7),
        i = n(19),
        a = n(28),
        s = (function() {
          function e(e) {
            (this.buffer = new a.RequestBuffer()),
              (this.options = e),
              this.options.dsn ||
                o.logger.warn("No DSN provided, backend will not do anything.");
          }
          return (
            (e.prototype.eventFromException = function(e, t) {
              return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(e) {
                  throw new i.SentryError(
                    "Backend has to implement `eventFromException` method"
                  );
                });
              });
            }),
            (e.prototype.eventFromMessage = function(e, t, n) {
              return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(e) {
                  throw new i.SentryError(
                    "Backend has to implement `eventFromMessage` method"
                  );
                });
              });
            }),
            (e.prototype.sendEvent = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(e) {
                  throw new i.SentryError(
                    "Backend has to implement `sendEvent` method"
                  );
                });
              });
            }),
            (e.prototype.storeBreadcrumb = function(e) {
              return !0;
            }),
            (e.prototype.storeScope = function(e) {}),
            (e.prototype.getBuffer = function() {
              return this.buffer;
            }),
            e
          );
        })();
      t.BaseBackend = s;
    },
    73: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(88),
        i = n(89),
        a = n(7),
        s = n(11),
        l = n(30),
        c = n(18),
        u = n(75),
        d = (function() {
          function e(e, t) {
            (this.backend = new e(t)),
              (this.options = t),
              t.dsn && (this.dsn = new c.Dsn(t.dsn)),
              (this.integrations = u.setupIntegrations(this.options));
          }
          return (
            (e.prototype.install = function() {
              if (!this.isEnabled()) return (this.installed = !1);
              var e = this.getBackend();
              return (
                !this.installed && e.install && e.install(),
                (this.installed = !0)
              );
            }),
            (e.prototype.buffer = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(t) {
                  return [
                    2,
                    this.getBackend()
                      .getBuffer()
                      .add(e)
                  ];
                });
              });
            }),
            (e.prototype.captureException = function(e, t, n) {
              return r.__awaiter(this, void 0, void 0, function() {
                var o = this;
                return r.__generator(this, function(i) {
                  return [
                    2,
                    this.buffer(
                      (function() {
                        return r.__awaiter(o, void 0, void 0, function() {
                          var o;
                          return r.__generator(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return [
                                  4,
                                  this.getBackend().eventFromException(e, t)
                                ];
                              case 1:
                                return (
                                  (o = r.sent()),
                                  [2, this.captureEvent(o, t, n)]
                                );
                            }
                          });
                        });
                      })()
                    )
                  ];
                });
              });
            }),
            (e.prototype.captureMessage = function(e, t, n, o) {
              return r.__awaiter(this, void 0, void 0, function() {
                var i = this;
                return r.__generator(this, function(a) {
                  return [
                    2,
                    this.buffer(
                      (function() {
                        return r.__awaiter(i, void 0, void 0, function() {
                          var i;
                          return r.__generator(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return [
                                  4,
                                  this.getBackend().eventFromMessage(e, t, n)
                                ];
                              case 1:
                                return (
                                  (i = r.sent()),
                                  [2, this.captureEvent(i, n, o)]
                                );
                            }
                          });
                        });
                      })()
                    )
                  ];
                });
              });
            }),
            (e.prototype.captureEvent = function(e, t, n) {
              return r.__awaiter(this, void 0, void 0, function() {
                var o = this;
                return r.__generator(this, function(i) {
                  return [
                    2,
                    this.buffer(
                      (function() {
                        return r.__awaiter(o, void 0, void 0, function() {
                          var o = this;
                          return r.__generator(this, function(i) {
                            return [
                              2,
                              this.processEvent(
                                e,
                                function(e) {
                                  return r.__awaiter(
                                    o,
                                    void 0,
                                    void 0,
                                    function() {
                                      return r.__generator(this, function(t) {
                                        return [
                                          2,
                                          this.getBackend().sendEvent(e)
                                        ];
                                      });
                                    }
                                  );
                                },
                                t,
                                n
                              )
                            ];
                          });
                        });
                      })()
                    )
                  ];
                });
              });
            }),
            (e.prototype.addBreadcrumb = function(e, t, n) {
              var o = this.getOptions(),
                i = o.beforeBreadcrumb,
                a = o.maxBreadcrumbs,
                l = void 0 === a ? 30 : a;
              if (!(l <= 0)) {
                var c = new Date().getTime() / 1e3,
                  u = r.__assign({ timestamp: c }, e),
                  d = i
                    ? s.consoleSandbox(function() {
                        return i(u, t);
                      })
                    : u;
                null !== d &&
                  this.getBackend().storeBreadcrumb(d) &&
                  n &&
                  n.addBreadcrumb(d, Math.min(l, 100));
              }
            }),
            (e.prototype.getDsn = function() {
              return this.dsn;
            }),
            (e.prototype.getOptions = function() {
              return this.options;
            }),
            (e.prototype.getBackend = function() {
              return this.backend;
            }),
            (e.prototype.isEnabled = function() {
              return !1 !== this.getOptions().enabled && void 0 !== this.dsn;
            }),
            (e.prototype.prepareEvent = function(e, t, n) {
              return r.__awaiter(this, void 0, void 0, function() {
                var o, i, a, c, u, d, p, f, h;
                return r.__generator(this, function(m) {
                  return (
                    (o = this.getOptions()),
                    (i = o.environment),
                    (a = o.maxBreadcrumbs),
                    (c = void 0 === a ? 30 : a),
                    (u = o.release),
                    (d = o.dist),
                    (p = r.__assign({}, e)),
                    void 0 === p.environment &&
                      void 0 !== i &&
                      (p.environment = i),
                    void 0 === p.release && void 0 !== u && (p.release = u),
                    void 0 === p.dist && void 0 !== d && (p.dist = d),
                    p.message && (p.message = l.truncate(p.message, 250)),
                    (f =
                      p.exception &&
                      p.exception.values &&
                      p.exception.values[0]),
                    f && f.value && (f.value = l.truncate(f.value, 250)),
                    (h = p.request),
                    h && h.url && (h.url = l.truncate(h.url, 250)),
                    void 0 === p.event_id && (p.event_id = s.uuid4()),
                    t ? [2, t.applyToEvent(p, n, Math.min(c, 100))] : [2, p]
                  );
                });
              });
            }),
            (e.prototype.processEvent = function(e, t, n, s) {
              return r.__awaiter(this, void 0, void 0, function() {
                var l, c, u, d, p, f, h, m;
                return r.__generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return this.isEnabled()
                        ? ((l = this.getOptions()),
                          (c = l.beforeSend),
                          (u = l.sampleRate),
                          "number" == typeof u && Math.random() > u
                            ? [2, { status: o.Status.Skipped }]
                            : [4, this.prepareEvent(e, s, n)])
                        : [2, { status: o.Status.Skipped }];
                    case 1:
                      if (null === (d = r.sent()))
                        return [2, { status: o.Status.Skipped }];
                      (p = d), (r.label = 2);
                    case 2:
                      return (
                        r.trys.push([2, 5, , 6]),
                        (f = n && n.data && !0 === n.data.__sentry__),
                        f || !c ? [3, 4] : [4, c(d, n)]
                      );
                    case 3:
                      (p = r.sent()),
                        void 0 === p &&
                          a.logger.error(
                            "`beforeSend` method has to return `null` or a valid event"
                          ),
                        (r.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      return (
                        (h = r.sent()),
                        i.forget(
                          this.captureException(h, {
                            data: { __sentry__: !0 },
                            originalException: h
                          })
                        ),
                        [
                          2,
                          {
                            reason:
                              "Event processing in beforeSend method threw an exception",
                            status: o.Status.Invalid
                          }
                        ]
                      );
                    case 6:
                      return null === p
                        ? [
                            2,
                            {
                              reason:
                                "Event dropped due to being discarded by beforeSend method",
                              status: o.Status.Skipped
                            }
                          ]
                        : [4, t(p)];
                    case 7:
                      return (
                        (m = r.sent()),
                        (m.event = p),
                        m.status,
                        o.Status.RateLimit,
                        [2, m]
                      );
                  }
                });
              });
            }),
            (e.prototype.close = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(t) {
                  return [
                    2,
                    this.getBackend()
                      .getBuffer()
                      .drain(e)
                  ];
                });
              });
            }),
            (e.prototype.getIntegrations = function() {
              return this.integrations || {};
            }),
            (e.prototype.getIntegration = function(e) {
              try {
                return this.integrations[e.id] || null;
              } catch (t) {
                return (
                  a.logger.warn(
                    "Cannot retrieve integration " +
                      e.id +
                      " from the current Client"
                  ),
                  null
                );
              }
            }),
            e
          );
        })();
      t.BaseClient = d;
    },
    731: function(e, t, n) {
      var r = n(589);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    733: function(e, t, n) {
      var r = n(591);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    737: function(e, t) {
      e.exports =
        "data:image/gif;base64,R0lGODlhIAAgAPUAAP///wAAAPr6+sTExOjo6PDw8NDQ0H5+fpqamvb29ubm5vz8/JKSkoaGhuLi4ri4uKCgoOzs7K6urtzc3D4+PlZWVmBgYHx8fKioqO7u7kpKSmxsbAwMDAAAAM7OzsjIyNjY2CwsLF5eXh4eHkxMTLCwsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAIAAgAAAG/0CAcEgkFjgcR3HJJE4SxEGnMygKmkwJxRKdVocFBRRLfFAoj6GUOhQoFAVysULRjNdfQFghLxrODEJ4Qm5ifUUXZwQAgwBvEXIGBkUEZxuMXgAJb1dECWMABAcHDEpDEGcTBQMDBQtvcW0RbwuECKMHELEJF5NFCxm1AAt7cH4NuAOdcsURy0QCD7gYfcWgTQUQB6Zkr66HoeDCSwIF5ucFz3IC7O0CC6zx8YuHhW/3CvLyfPX4+OXozKnDssBdu3G/xIHTpGAgOUPrZimAJCfDPYfDin2TQ+xeBnWbHi37SC4YIYkQhdy7FvLdpwWvjA0JyU/ISyIx4xS6sgfkNS4me2rtVKkgw0JCb8YMZdjwqMQ2nIY8BbcUQNVCP7G4MQq1KRivR7tiDEuEFrggACH5BAAKAAEALAAAAAAgACAAAAb/QIBwSCQmNBpCcckkEgREA4ViKA6azM8BEZ1Wh6LOBls0HA5fgJQ6HHQ6InKRcWhA1d5hqMMpyIkOZw9Ca18Qbwd/RRhnfoUABRwdI3IESkQFZxB4bAdvV0YJQwkDAx9+bWcECQYGCQ5vFEQCEQoKC0ILHqUDBncCGA5LBiHCAAsFtgqoQwS8Aw64f8m2EXdFCxO8INPKomQCBgPMWAvL0n/ff+jYAu7vAuxy8O/myvfX8/f7/Arq+v0W0HMnr9zAeE0KJlQkJIGCfE0E+PtDq9qfDMogDkGmrIBCbNQUZIDosNq1kUsEZJBW0dY/b0ZsLViQIMFMW+RKKgjFzp4fNokPIdki+Y8JNVxA79jKwHAI0G9JGw5tCqDWTiFRhVhtmhVA16cMJTJ1OnVIMo1cy1KVI5NhEAAh+QQACgACACwAAAAAIAAgAAAG/0CAcEgkChqNQnHJJCYWRMfh4CgamkzFwBOdVocNCgNbJAwGhKGUOjRQKA1y8XOGAtZfgIWiSciJBWcTQnhCD28Qf0UgZwJ3XgAJGhQVcgKORmdXhRBvV0QMY0ILCgoRmIRnCQIODgIEbxtEJSMdHZ8AGaUKBXYLIEpFExZpAG62HRRFArsKfn8FIsgjiUwJu8FkJLYcB9lMCwUKqFgGHSJ5cnZ/uEULl/CX63/x8KTNu+RkzPj9zc/0/Cl4V0/APDIE6x0csrBJwybX9DFhBhCLgAilIvzRVUriKHGlev0JtyuDvmsZUZlcIiCDnYu7KsZ0UmrBggRP7n1DqcDJEzciOgHwcwTyZEUmIKEMFVIqgyIjpZ4tjdTxqRCMPYVMBYDV6tavUZ8yczpkKwBxHsVWtaqo5tMgACH5BAAKAAMALAAAAAAgACAAAAb/QIBwSCQuBgNBcck0FgvIQtHRZCYUGSJ0IB2WDo9qUaBQKIXbLsBxOJTExUh5mB4iDo0zXEhWJNBRQgZtA3tPZQsAdQINBwxwAnpCC2VSdQNtVEQSEkOUChGSVwoLCwUFpm0QRAMVFBQTQxllCqh0kkIECF0TG68UG2O0foYJDb8VYVa0alUXrxoQf1WmZnsTFA0EhgCJhrFMC5Hjkd57W0jpDsPDuFUDHfHyHRzstNN78PPxHOLk5dwcpBuoaYk5OAfhXHG3hAy+KgLkgNozqwzDbgWYJQyXsUwGXKNA6fnYMIO3iPeIpBwyqlSCBKUqEQk5E6YRmX2UdAT5kEnHKkQ5hXjkNqTPtKAARl1sIrGoxSFNuSEFMNWoVCxEpiqyRlQY165wEHELAgAh+QQACgAEACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0GxwFwmFJlnlAgaTKpFqEIqFJMBhcEABC5GjkPz0KN2tsvHBH4sJKgdd1NHSXILah9tAmdCC0dUcg5qVEQfiIxHEYtXSACKnWoGXAwHBwRDGUcKBXYFi0IJHmQEEKQHEGGpCnp3AiW1DKFWqZNgGKQNA65FCwV8bQQHJcRtds9MC4rZitVgCQbf4AYEubnKTAYU6eoUGuSpu3fo6+ka2NrbgQAE4eCmS9xVAOW7Yq7IgA4Hpi0R8EZBhDshOnTgcOtfM0cAlTigILFDiAFFNjk8k0GZgAxOBozouIHIOyKbFixIkECmIyIHOEiEWbPJTTQ5FxcVOMCgzUVCWwAcyZJvzy45ADYVZNIwTlIAVfNB7XRVDLxEWLQ4E9JsKq+rTdsMyhcEACH5BAAKAAUALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUYKQ4YKEYSKfVKPaUMZHwMDeQBxh04ABYSFGU4JBpsDBmFHdXMLIKofBEyKCpdgspsOoUsLXaRLCQMgwky+YJ1FC4POg8lVAg7U1Q5drtnHSw4H3t8HDdnZy2Dd4N4Nzc/QeqLW1bnM7rXuV9tEBhQQ5UoCbJDmWKBAQcMDZNhwRVNCYANBChZYEbkVCZOwASEcCDFQ4SEDIq6WTVqQIMECBx06iCACQQPBiSabHDqzRUTKARMhSFCDrc+WNQIcOoRw5+ZIHj8ADqSEQBQAwKKLhIzowEEeGKQ0owIYkPKjHihZoBKi0KFE01b4zg7h4y4IACH5BAAKAAYALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUUJeQCGChGEin1SkGlubEhDcYdOAAWEhRlOC12HYUd1eqeRokOKCphgrY5MpotqhgWfunqPt4PCg71gpgXIyWSqqq9MBQPR0tHMzM5L0NPSC8PCxVUCyeLX38+/AFfXRA4HA+pjmoFqCAcHDQa3rbxzBRD1BwgcMFIlidMrAxYICHHA4N8DIqpsUWJ3wAEBChQaEBnQoB6RRr0uARjQocMAAA0w4nMz4IOaU0lImkSngYKFc3ZWyTwJAALGK4fnNA3ZOaQCBQ22wPgRQlSIAYwSfkHJMrQkTyEbKFzFydQq15ccOAjUEwQAIfkEAAoABwAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVD29K/AFfRRQUDDt1PmoFqHgPtBLetvMwG7QMes0KxkkIFIQNKDhBgKvCh3gQiqmxt6NDBAAEIEAgUOHCgBBEH9Yg06uWAIQUABihQMACgBEUHTRwoUEOBIcqQI880OIDgm5ABDA8IgUkSwAAyij1/jejAARPPIQwONBCnBAJDCEOOCnFA8cOvEh1CEJEqBMIBEDaLcA3LJIEGDe/0BAEAIfkEAAoACAAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVDDti/BQccA8yrYBAjHR0jc53LRQYU6R0UBnO4RxmiG/IjJUIJFuoVKeCBigBN5QCk43BgFgMKFCYUGDAgFEUQRGIRYbCh2xACEDcAcHDgQDcQFGf9s7VkA0QCI0t2W0DRw68h8ChAEELSJE8xijBvVqCgIU9PjwA+UNzG5AHEB9xkDpk4QMGvARQsEDlKxMCALDeLcA0rqEEDlWCCAAAh+QQACgAJACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0FRylQmFJlnlFhQJKrTrRCqoALIBXAxchySzZm2Wusdi8nfOfeYfAuPEWoCZkILR2l+V2VFCXkAhgoRhIp9UpBpbmxIQ3GHTgAFhIUZTgtdh2FHdXqnkaJDigqYYK2OTKaLaoYFn7p6j0wOA8PEAw6/Z4PKUhwdzs8dEL9kqqrN0M7SetTVCsLFw8d6C8vKvUQEv+dVCRAaBnNQtkwPFRQUFXOduUoTG/cUNkyYg+tIBlEMAFYYMAaBuCekxmhaJeSeBgiOHhw4QECAAwcCLhGJRUQCg3RDCmyUVmBYmlOiGqmBsPGlyz9YkAlxsJEhqCubABS9AsPgQAMqLQfM0oTMwEZ4QpLOwvMLxAEEXIBG5aczqtaut4YNXRIEACH5BAAKAAoALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RahAQRQtHaX5XZUUJeQAGHR0jA0SKfVKGCmlubEhCBSGRHSQOQwVmQwsZTgtdh0UQHKIHm2quChGophuiJHO3jkwOFB2UaoYFTnMGegDKRQQG0tMGBM1nAtnaABoU3t8UD81kR+UK3eDe4nrk5grR1NLWegva9s9czfhVAgMNpWqgBGNigMGBAwzmxBGjhACEgwcgzAPTqlwGXQ8gMgAhZIGHWm5WjelUZ8jBBgPMTBgwIMGCRgsygVSkgMiHByD7DWDmx5WuMkZqDLCU4gfAq2sACrAEWFSRLjUfWDopCqDTNQIsJ1LF0yzDAA90UHV5eo0qUjB8mgUBACH5BAAKAAsALAAAAAAgACAAAAb/QIBwSCwqFIuickk0FIiCo6A4ZSoZnRBUSiwoEtYipNOBDKOKKgD9DBNHHU4brc4c3cUBeSOk949geEQUZA5rXABHEW4PD0UOZBSHaQAJiEMJgQATFBQVBkQHZKACUwtHbX0RR0mVFp0UFwRCBSQDSgsZrQteqEUPGrAQmmG9ChFqRAkMsBd4xsRLBBsUoG6nBa14E4IA2kUFDuLjDql4peilAA0H7e4H1udH8/Ps7+3xbmj0qOTj5mEWpEP3DUq3glYWOBgAcEmUaNI+DBjwAY+dS0USGJg4wABEXMYyJNvE8UOGISKVCNClah4xjg60WUKyINOCUwrMzVRARMGENWQ4n/jpNTKTm15J/CTK2e0MoD+UKmHEs4onVDVVmyqdpAbNR4cKTjqNSots07EjzzJh1S0IADsAAAAAAAAAAAA=";
    },
    738: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5HZW5lcmF0ZWQgYnkgRm9udGFzdGljLm1lPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJzbGljayIgaG9yaXotYWR2LXg9IjUxMiI+Cjxmb250LWZhY2UgZm9udC1mYW1pbHk9InNsaWNrIiB1bml0cy1wZXItZW09IjUxMiIgYXNjZW50PSI0ODAiIGRlc2NlbnQ9Ii0zMiIvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iNTEyIiAvPgoKPGdseXBoIHVuaWNvZGU9IiYjODU5NDsiIGQ9Ik0yNDEgMTEzbDEzMCAxMzBjNCA0IDYgOCA2IDEzIDAgNS0yIDktNiAxM2wtMTMwIDEzMGMtMyAzLTcgNS0xMiA1LTUgMC0xMC0yLTEzLTVsLTI5LTMwYy00LTMtNi03LTYtMTIgMC01IDItMTAgNi0xM2w4Ny04OC04Ny04OGMtNC0zLTYtOC02LTEzIDAtNSAyLTkgNi0xMmwyOS0zMGMzLTMgOC01IDEzLTUgNSAwIDkgMiAxMiA1eiBtMjM0IDE0M2MwLTQwLTktNzctMjktMTEwLTIwLTM0LTQ2LTYwLTgwLTgwLTMzLTIwLTcwLTI5LTExMC0yOS00MCAwLTc3IDktMTEwIDI5LTM0IDIwLTYwIDQ2LTgwIDgwLTIwIDMzLTI5IDcwLTI5IDExMCAwIDQwIDkgNzcgMjkgMTEwIDIwIDM0IDQ2IDYwIDgwIDgwIDMzIDIwIDcwIDI5IDExMCAyOSA0MCAwIDc3LTkgMTEwLTI5IDM0LTIwIDYwLTQ2IDgwLTgwIDIwLTMzIDI5LTcwIDI5LTExMHoiLz4KPGdseXBoIHVuaWNvZGU9IiYjODU5MjsiIGQ9Ik0yOTYgMTEzbDI5IDMwYzQgMyA2IDcgNiAxMiAwIDUtMiAxMC02IDEzbC04NyA4OCA4NyA4OGM0IDMgNiA4IDYgMTMgMCA1LTIgOS02IDEybC0yOSAzMGMtMyAzLTggNS0xMyA1LTUgMC05LTItMTItNWwtMTMwLTEzMGMtNC00LTYtOC02LTEzIDAtNSAyLTkgNi0xM2wxMzAtMTMwYzMtMyA3LTUgMTItNSA1IDAgMTAgMiAxMyA1eiBtMTc5IDE0M2MwLTQwLTktNzctMjktMTEwLTIwLTM0LTQ2LTYwLTgwLTgwLTMzLTIwLTcwLTI5LTExMC0yOS00MCAwLTc3IDktMTEwIDI5LTM0IDIwLTYwIDQ2LTgwIDgwLTIwIDMzLTI5IDcwLTI5IDExMCAwIDQwIDkgNzcgMjkgMTEwIDIwIDM0IDQ2IDYwIDgwIDgwIDMzIDIwIDcwIDI5IDExMCAyOSA0MCAwIDc3LTkgMTEwLTI5IDM0LTIwIDYwLTQ2IDgwLTgwIDIwLTMzIDI5LTcwIDI5LTExMHoiLz4KPGdseXBoIHVuaWNvZGU9IiYjODIyNjsiIGQ9Ik00NzUgMjU2YzAtNDAtOS03Ny0yOS0xMTAtMjAtMzQtNDYtNjAtODAtODAtMzMtMjAtNzAtMjktMTEwLTI5LTQwIDAtNzcgOS0xMTAgMjktMzQgMjAtNjAgNDYtODAgODAtMjAgMzMtMjkgNzAtMjkgMTEwIDAgNDAgOSA3NyAyOSAxMTAgMjAgMzQgNDYgNjAgODAgODAgMzMgMjAgNzAgMjkgMTEwIDI5IDQwIDAgNzctOSAxMTAtMjkgMzQtMjAgNjAtNDYgODAtODAgMjAtMzMgMjktNzAgMjktMTEweiIvPgo8Z2x5cGggdW5pY29kZT0iJiM5NzsiIGQ9Ik00NzUgNDM5bDAtMTI4YzAtNS0xLTktNS0xMy00LTQtOC01LTEzLTVsLTEyOCAwYy04IDAtMTMgMy0xNyAxMS0zIDctMiAxNCA0IDIwbDQwIDM5Yy0yOCAyNi02MiAzOS0xMDAgMzktMjAgMC0zOS00LTU3LTExLTE4LTgtMzMtMTgtNDYtMzItMTQtMTMtMjQtMjgtMzItNDYtNy0xOC0xMS0zNy0xMS01NyAwLTIwIDQtMzkgMTEtNTcgOC0xOCAxOC0zMyAzMi00NiAxMy0xNCAyOC0yNCA0Ni0zMiAxOC03IDM3LTExIDU3LTExIDIzIDAgNDQgNSA2NCAxNSAyMCA5IDM4IDIzIDUxIDQyIDIgMSA0IDMgNyAzIDMgMCA1LTEgNy0zbDM5LTM5YzItMiAzLTMgMy02IDAtMi0xLTQtMi02LTIxLTI1LTQ2LTQ1LTc2LTU5LTI5LTE0LTYwLTIwLTkzLTIwLTMwIDAtNTggNS04NSAxNy0yNyAxMi01MSAyNy03MCA0Ny0yMCAxOS0zNSA0My00NyA3MC0xMiAyNy0xNyA1NS0xNyA4NSAwIDMwIDUgNTggMTcgODUgMTIgMjcgMjcgNTEgNDcgNzAgMTkgMjAgNDMgMzUgNzAgNDcgMjcgMTIgNTUgMTcgODUgMTcgMjggMCA1NS01IDgxLTE1IDI2LTExIDUwLTI2IDcwLTQ1bDM3IDM3YzYgNiAxMiA3IDIwIDQgOC00IDExLTkgMTEtMTd6Ii8+CjwvZm9udD48L2RlZnM+PC9zdmc+Cg==";
    },
    739: function(e, t) {
      e.exports =
        "data:font/ttf;base64,AAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=";
    },
    74: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(87);
      (t.addBreadcrumb = r.addBreadcrumb),
        (t.captureException = r.captureException),
        (t.captureEvent = r.captureEvent),
        (t.captureMessage = r.captureMessage),
        (t.configureScope = r.configureScope),
        (t.withScope = r.withScope);
      var o = n(9);
      (t.addGlobalEventProcessor = o.addGlobalEventProcessor),
        (t.getCurrentHub = o.getCurrentHub),
        (t.Hub = o.Hub),
        (t.getHubFromCarrier = o.getHubFromCarrier),
        (t.Scope = o.Scope);
      var i = n(71);
      t.API = i.API;
      var a = n(73);
      t.BaseClient = a.BaseClient;
      var s = n(72);
      t.BaseBackend = s.BaseBackend;
      var l = n(18);
      t.Dsn = l.Dsn;
      var c = n(19);
      t.SentryError = c.SentryError;
      var u = n(28);
      t.RequestBuffer = u.RequestBuffer;
      var d = n(84);
      t.LogLevel = d.LogLevel;
      var p = n(85);
      t.initAndBind = p.initAndBind;
      var f = n(80);
      t.Integrations = f;
    },
    740: function(e, t) {
      e.exports =
        "data:font/woff;base64,d09GRk9UVE8AAAVkAAsAAAAAB1wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAi4AAAKbH/pWDkZGVE0AAAM4AAAAGgAAABxt0civR0RFRgAAA1QAAAAcAAAAIAAyAARPUy8yAAADcAAAAFIAAABgUBj/rmNtYXAAAAPEAAAAUAAAAWIiC0SwaGVhZAAABBQAAAAuAAAANgABMftoaGVhAAAERAAAABwAAAAkA+UCA2htdHgAAARgAAAADgAAAA4ESgBKbWF4cAAABHAAAAAGAAAABgAFUABuYW1lAAAEeAAAANwAAAFuBSeBwnBvc3QAAAVUAAAAEAAAACAAAwABeJw9ks9vEkEUx2cpWyeUoFYgNkHi2Wt7N3rVm3cTs3UVLC4LxIWEQvi1P3i7O1tYLJDAmlgKGEhQrsajf0j7J3jYTXrQWUrMJG+++b55n5e8NwwKBhHDMLv5kxT3ATEBxKBn3qOAl9zxHgb1MAPhHQgHkyF08Gr/L8B/Eb6zWnmCJ7AJVLubQOheArXvJ1A4EXi6j4I+Zg9F0QFKvsnlBCmXeve+sFEnb/nCptdtQ4QYhVFRAT1HrF8UQK/RL/SbmUbclsvGVFXRZKDHUE38cc4qpkbAAsuwiImvro+ufcfaOIQ6szlrmjRJDaKZKnbjN3GWKIbiIzRFUfCffuxxKOL+3LDlDVvx2TdxN84qZEsnhNBa6pgm2dAsnzbLsETdsmRFxUeHV4e+I2/ptN8TyqV8T3Dt29t7EYOuajVIw2y1Wy3M86w0zg/Fz2IvawmQAUHOVrPVfLkoScVynsqsTG0MGUs4z55nh3mnOJa+li+rl9WpPIcFfDubDeaDC+fLBdYN3QADzLauGfj4B6sZmq6CCpqmtSvF0qlUl2qf5AJIUCSlTqlb7lUG+LRfGzZGzZEyBgccMu6MuqPecNDvD4Y9Kjtj4gD+DsvKVMTcMdtqtZtmkzQstQvYje7Syep0PDSAhSOeHYXYWThEF//A/0YvYV1fSQtpKU5STtrhbQ444OtpKSWJIg3pOg8cBs7maTY1EZf07aq+hjWs7IWzdCYTGhb2CtZ47x+Uhx28AAB4nGNgYGBkAIJz765vANHnCyvqYTQAWnkHswAAeJxjYGRgYOADYgkGEGBiYARCFjAG8RgABHYAN3icY2BmYmCcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwcjKAQQMDAyOQUmCAgoA01xQGB4ZExUmMD/4/YNBjvP3/NgNEDQPjbbBKBQZGADfLDgsAAHicY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQzMCQqKClOUJz0/z9YHRLv/+L7D+8V3cuHmgAHjGwM6ELUByxUMIOZCmbgAAA5LQ8XeJxjYGRgYABiO68w73h+m68M3EwMIHC+sKIeTqsyqDLeZrwN5HIwgKUB/aYJUgAAeJxjYGRgYLzNwMCgx8QAAkA2IwMqYAIAMGIB7QIAAAACAAAlACUAJQAlAAAAAFAAAAUAAHicbY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV4nGNgZkAGjAxoAAAAjgAF";
    },
    75: function(e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r,
          o,
          i =
            (e.defaultIntegrations && s.__spread(e.defaultIntegrations)) || [],
          l = e.integrations,
          c = [];
        if (Array.isArray(l)) {
          var u = l.map(function(e) {
              return e.name;
            }),
            d = [];
          try {
            for (var p = s.__values(i), f = p.next(); !f.done; f = p.next()) {
              var h = f.value;
              -1 === u.indexOf(a(h)) &&
                -1 === d.indexOf(a(h)) &&
                (c.push(h), d.push(a(h)));
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              f && !f.done && (n = p.return) && n.call(p);
            } finally {
              if (t) throw t.error;
            }
          }
          try {
            for (var m = s.__values(l), g = m.next(); !g.done; g = m.next()) {
              var A = g.value;
              -1 === d.indexOf(a(A)) && (c.push(A), d.push(a(A)));
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              g && !g.done && (o = m.return) && o.call(m);
            } finally {
              if (r) throw r.error;
            }
          }
        } else {
          if ("function" != typeof l) return s.__spread(i);
          (c = l(i)), (c = Array.isArray(c) ? c : [c]);
        }
        return c;
      }
      function o(e, n) {
        if (-1 === t.installedIntegrations.indexOf(a(e))) {
          try {
            e.setupOnce();
          } catch (t) {
            l.logger.warn(
              "Integration " +
                a(e) +
                ': The install method is deprecated. Use "setupOnce".'
            ),
              e.install && e.install(n);
          }
          t.installedIntegrations.push(a(e)),
            l.logger.log("Integration installed: " + a(e));
        }
      }
      function i(e) {
        var t = {};
        return (
          r(e).forEach(function(n) {
            (t[a(n)] = n), o(n, e);
          }),
          t
        );
      }
      function a(e) {
        return e.constructor.id || e.name;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(6),
        l = n(7);
      (t.installedIntegrations = []),
        (t.getIntegrationsToSetup = r),
        (t.setupIntegration = o),
        (t.setupIntegrations = i);
    },
    76: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(9),
        i = n(7),
        a = n(11),
        s = (function() {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function() {
              var t = this;
              o.addGlobalEventProcessor(function(n) {
                return r.__awaiter(t, void 0, void 0, function() {
                  var t;
                  return r.__generator(this, function(r) {
                    if ((t = o.getCurrentHub().getIntegration(e))) {
                      try {
                        if (t.shouldDropEvent(n, t.previousEvent))
                          return [2, null];
                      } catch (e) {
                        return [2, (t.previousEvent = n)];
                      }
                      return [2, (t.previousEvent = n)];
                    }
                    return [2, n];
                  });
                });
              });
            }),
            (e.prototype.shouldDropEvent = function(e, t) {
              return (
                !!t &&
                (this.isSameMessageEvent(e, t)
                  ? (i.logger.warn(
                      "Event dropped due to being a duplicate of previous event (same message).\nEvent: " +
                        a.getEventDescription(e)
                    ),
                    !0)
                  : !!this.isSameExceptionEvent(e, t) &&
                    (i.logger.warn(
                      "Event dropped due to being a duplicate of previous event (same exception).\nEvent: " +
                        a.getEventDescription(e)
                    ),
                    !0))
              );
            }),
            (e.prototype.isSameMessageEvent = function(e, t) {
              var n = e.message,
                r = t.message;
              return (
                !(!n && !r) &&
                (!((n && !r) || (!n && r)) &&
                  (n === r &&
                    (!!this.isSameFingerprint(e, t) &&
                      !!this.isSameStacktrace(e, t))))
              );
            }),
            (e.prototype.getFramesFromEvent = function(e) {
              var t = e.exception;
              if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
              try {
                return t.values[0].stacktrace.frames;
              } catch (e) {
                return;
              }
            }),
            (e.prototype.isSameStacktrace = function(e, t) {
              var n = this.getFramesFromEvent(e),
                r = this.getFramesFromEvent(t);
              if (!n && !r) return !0;
              if ((n && !r) || (!n && r)) return !1;
              if (((n = n), (r = r), r.length !== n.length)) return !1;
              for (var o = 0; o < r.length; o++) {
                var i = r[o],
                  a = n[o];
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
            (e.prototype.getExceptionFromEvent = function(e) {
              return e.exception && e.exception.values && e.exception.values[0];
            }),
            (e.prototype.isSameExceptionEvent = function(e, t) {
              var n = this.getExceptionFromEvent(t),
                r = this.getExceptionFromEvent(e);
              return (
                !(!n || !r) &&
                (n.type === r.type &&
                  n.value === r.value &&
                  (!!this.isSameFingerprint(e, t) &&
                    !!this.isSameStacktrace(e, t)))
              );
            }),
            (e.prototype.isSameFingerprint = function(e, t) {
              var n = e.fingerprint,
                r = t.fingerprint;
              if (!n && !r) return !0;
              if ((n && !r) || (!n && r)) return !1;
              (n = n), (r = r);
              try {
                return !(n.join("") !== r.join(""));
              } catch (e) {
                return !1;
              }
            }),
            (e.id = "Dedupe"),
            e
          );
        })();
      t.Dedupe = s;
    },
    77: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(9),
        i = n(10),
        a = n(7),
        s = (function() {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function() {
              var t = this;
              o.addGlobalEventProcessor(function(n, i) {
                return r.__awaiter(t, void 0, void 0, function() {
                  var t;
                  return r.__generator(this, function(r) {
                    return (
                      (t = o.getCurrentHub().getIntegration(e)),
                      t && i && i.originalException
                        ? [
                            2,
                            this.enhanceEventWithErrorData(
                              n,
                              i.originalException
                            )
                          ]
                        : [2, n]
                    );
                  });
                });
              });
            }),
            (e.prototype.enhanceEventWithErrorData = function(e, t) {
              var n = this.extractErrorData(t);
              return n
                ? r.__assign({}, e, { extra: r.__assign({}, e.extra, n) })
                : e;
            }),
            (e.prototype.extractErrorData = function(e) {
              var t, n, o;
              try {
                var s = [
                    "name",
                    "message",
                    "stack",
                    "line",
                    "column",
                    "fileName",
                    "lineNumber",
                    "columnNumber"
                  ],
                  l = e.name || e.constructor.name,
                  c = Object.keys(e).filter(function(e) {
                    return -1 === s.indexOf(e);
                  });
                if (c.length) {
                  var u = {};
                  try {
                    for (
                      var d = r.__values(c), p = d.next();
                      !p.done;
                      p = d.next()
                    ) {
                      var f = p.value,
                        h = e[f];
                      i.isError(h) && (h = h.name || h.constructor.name),
                        (u[f] = h);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      p && !p.done && (n = d.return) && n.call(d);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return (o = {}), (o[l] = u), o;
                }
                return null;
              } catch (e) {
                return (
                  a.logger.error(
                    "Unable to extract extra data from the Error object:",
                    e
                  ),
                  null
                );
              }
            }),
            (e.id = "ExtraErrorData"),
            e
          );
        })();
      t.ExtraErrorData = s;
    },
    78: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function() {
              (r = Function.prototype.toString),
                (Function.prototype.toString = function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = this.__sentry__ ? this.__sentry_original__ : this;
                  return r.apply(n, e);
                });
            }),
            (e.id = "FunctionToString"),
            e
          );
        })();
      t.FunctionToString = o;
    },
    79: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(9),
        i = n(10),
        a = n(7),
        s = n(11),
        l = n(30),
        c = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/
        ],
        u = (function() {
          function e(t) {
            void 0 === t && (t = {}), (this.options = t), (this.name = e.id);
          }
          return (
            (e.prototype.setupOnce = function() {
              var t = this;
              o.addGlobalEventProcessor(function(n) {
                return r.__awaiter(t, void 0, void 0, function() {
                  var t, i, a, s, l;
                  return r.__generator(this, function(r) {
                    return (t = o.getCurrentHub())
                      ? ((i = t.getIntegration(e)),
                        i &&
                        ((a = t.getClient()),
                        (s = a ? a.getOptions() : {}),
                        (l = i.mergeOptions(s)),
                        i.shouldDropEvent(n, l))
                          ? [2, null]
                          : [2, n])
                      : [2, n];
                  });
                });
              });
            }),
            (e.prototype.shouldDropEvent = function(e, t) {
              return this.isSentryError(e, t)
                ? (a.logger.warn(
                    "Event dropped due to being internal Sentry Error.\nEvent: " +
                      s.getEventDescription(e)
                  ),
                  !0)
                : this.isIgnoredError(e, t)
                ? (a.logger.warn(
                    "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                      s.getEventDescription(e)
                  ),
                  !0)
                : this.isBlacklistedUrl(e, t)
                ? (a.logger.warn(
                    "Event dropped due to being matched by `blacklistUrls` option.\nEvent: " +
                      s.getEventDescription(e) +
                      ".\nUrl: " +
                      this.getEventFilterUrl(e)
                  ),
                  !0)
                : !this.isWhitelistedUrl(e, t) &&
                  (a.logger.warn(
                    "Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " +
                      s.getEventDescription(e) +
                      ".\nUrl: " +
                      this.getEventFilterUrl(e)
                  ),
                  !0);
            }),
            (e.prototype.isSentryError = function(e, t) {
              if ((void 0 === t && (t = {}), !t.ignoreInternal)) return !1;
              try {
                return "SentryError" === e.exception.values[0].type;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.isIgnoredError = function(e, t) {
              var n = this;
              return (
                void 0 === t && (t = {}),
                !(!t.ignoreErrors || !t.ignoreErrors.length) &&
                  this.getPossibleEventMessages(e).some(function(e) {
                    return t.ignoreErrors.some(function(t) {
                      return n.isMatchingPattern(e, t);
                    });
                  })
              );
            }),
            (e.prototype.isBlacklistedUrl = function(e, t) {
              var n = this;
              if (
                (void 0 === t && (t = {}),
                !t.blacklistUrls || !t.blacklistUrls.length)
              )
                return !1;
              var r = this.getEventFilterUrl(e);
              return (
                !!r &&
                t.blacklistUrls.some(function(e) {
                  return n.isMatchingPattern(r, e);
                })
              );
            }),
            (e.prototype.isWhitelistedUrl = function(e, t) {
              var n = this;
              if (
                (void 0 === t && (t = {}),
                !t.whitelistUrls || !t.whitelistUrls.length)
              )
                return !0;
              var r = this.getEventFilterUrl(e);
              return (
                !r ||
                t.whitelistUrls.some(function(e) {
                  return n.isMatchingPattern(r, e);
                })
              );
            }),
            (e.prototype.mergeOptions = function(e) {
              return (
                void 0 === e && (e = {}),
                {
                  blacklistUrls: r.__spread(
                    this.options.blacklistUrls || [],
                    e.blacklistUrls || []
                  ),
                  ignoreErrors: r.__spread(
                    this.options.ignoreErrors || [],
                    e.ignoreErrors || [],
                    c
                  ),
                  ignoreInternal:
                    void 0 === this.options.ignoreInternal ||
                    this.options.ignoreInternal,
                  whitelistUrls: r.__spread(
                    this.options.whitelistUrls || [],
                    e.whitelistUrls || []
                  )
                }
              );
            }),
            (e.prototype.isMatchingPattern = function(e, t) {
              return i.isRegExp(t)
                ? t.test(e)
                : "string" == typeof t && l.includes(e, t);
            }),
            (e.prototype.getPossibleEventMessages = function(e) {
              if (e.message) return [e.message];
              if (!e.exception) return [];
              try {
                var t = e.exception.values[0],
                  n = t.type,
                  r = t.value;
                return ["" + r, n + ": " + r];
              } catch (t) {
                return (
                  a.logger.error(
                    "Cannot extract message for event " +
                      s.getEventDescription(e)
                  ),
                  []
                );
              }
            }),
            (e.prototype.getEventFilterUrl = function(e) {
              try {
                return e.stacktrace
                  ? e.stacktrace.frames[0].filename
                  : e.exception
                  ? e.exception.values[0].stacktrace.frames[0].filename
                  : null;
              } catch (t) {
                return (
                  a.logger.error(
                    "Cannot extract url for event " + s.getEventDescription(e)
                  ),
                  null
                );
              }
            }),
            (e.id = "InboundFilters"),
            e
          );
        })();
      t.InboundFilters = u;
    },
    80: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(76);
      t.Dedupe = r.Dedupe;
      var o = n(78);
      t.FunctionToString = o.FunctionToString;
      var i = n(83);
      t.SDKInformation = i.SDKInformation;
      var a = n(79);
      t.InboundFilters = a.InboundFilters;
      var s = n(77);
      t.ExtraErrorData = s.ExtraErrorData;
      var l = n(81);
      t.Debug = l.Debug;
      var c = n(82);
      t.RewriteFrames = c.RewriteFrames;
    },
    81: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(9),
        i = (function() {
          function e(t) {
            (this.name = e.id),
              (this.options = r.__assign({ debugger: !1, stringify: !1 }, t));
          }
          return (
            (e.prototype.setupOnce = function() {
              var t = this;
              o.addGlobalEventProcessor(function(n, i) {
                return r.__awaiter(t, void 0, void 0, function() {
                  var t;
                  return r.__generator(this, function(r) {
                    return (
                      (t = o.getCurrentHub().getIntegration(e)),
                      t &&
                        (t.options.debugger,
                        t.options.stringify
                          ? (console.log(JSON.stringify(n, null, 2)),
                            i && console.log(JSON.stringify(i, null, 2)))
                          : (console.log(n), i && console.log(i))),
                      [2, n]
                    );
                  });
                });
              });
            }),
            (e.id = "Debug"),
            e
          );
        })();
      t.Debug = i;
    },
    818: function(e, t, n) {
      var r = n(1067);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(3)(r, {});
      r.locals && (e.exports = r.locals);
    },
    82: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6),
        o = n(9),
        i = n(90),
        a = (function() {
          function e(t) {
            void 0 === t && (t = {});
            var n = this;
            (this.name = e.id),
              (this.iteratee = function(e) {
                return r.__awaiter(n, void 0, void 0, function() {
                  var t;
                  return r.__generator(this, function(n) {
                    return (
                      e.filename &&
                        e.filename.startsWith("/") &&
                        ((t = this.root
                          ? i.relative(this.root, e.filename)
                          : i.basename(e.filename)),
                        (e.filename = "app:///" + t)),
                      [2, e]
                    );
                  });
                });
              }),
              t.root && (this.root = t.root),
              t.iteratee && (this.iteratee = t.iteratee);
          }
          return (
            (e.prototype.setupOnce = function() {
              var t = this;
              o.addGlobalEventProcessor(function(n) {
                return r.__awaiter(t, void 0, void 0, function() {
                  var t;
                  return r.__generator(this, function(r) {
                    return (
                      (t = o.getCurrentHub().getIntegration(e)),
                      t ? [2, t.process(n)] : [2, n]
                    );
                  });
                });
              });
            }),
            (e.prototype.process = function(e) {
              return r.__awaiter(this, void 0, void 0, function() {
                var t, n, o, i, a, s, l;
                return r.__generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      if (!(t = this.getFramesFromEvent(e))) return [3, 4];
                      n = [];
                      for (o in t) n.push(o);
                      (i = 0), (r.label = 1);
                    case 1:
                      return i < n.length
                        ? ((a = n[i]),
                          (s = t),
                          (l = a),
                          [4, this.iteratee(t[a])])
                        : [3, 4];
                    case 2:
                      (s[l] = r.sent()), (r.label = 3);
                    case 3:
                      return i++, [3, 1];
                    case 4:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.getFramesFromEvent = function(e) {
              var t = e.exception;
              if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
              try {
                return t.values[0].stacktrace.frames;
              } catch (e) {
                return;
              }
            }),
            (e.id = "RewriteFrames"),
            e
          );
        })();
      t.RewriteFrames = a;
    },
    83: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(7),
        o = (function() {
          function e() {
            this.name = "SDKInformation";
          }
          return (
            (e.prototype.setupOnce = function() {
              r.logger.warn(
                "SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core."
              );
            }),
            e
          );
        })();
      t.SDKInformation = o;
    },
    832: function(e, t, n) {
      "use strict";
      var r = n(226),
        o = n(148),
        i = n(144);
      (e.exports.Status = r({
        FETCHED: null,
        NOT_FETCHED: null,
        FETCHING: null,
        ERROR: null
      })),
        (e.exports.getInitialState = function() {
          return {
            activity: { status: e.exports.Status.NOT_FETCHED, rows: [] },
            featured: { status: e.exports.Status.NOT_FETCHED, rows: {} },
            shared: { status: e.exports.Status.NOT_FETCHED, rows: [] },
            loved: { status: e.exports.Status.NOT_FETCHED, rows: [] },
            studios: { status: e.exports.Status.NOT_FETCHED, rows: [] }
          };
        }),
        (e.exports.splashReducer = function(t, n) {
          switch ((void 0 === t && (t = e.exports.getInitialState()), n.type)) {
            case "SET_ROWS":
              return (
                (t = JSON.parse(JSON.stringify(t))),
                (t[n.rowType].rows = n.rows),
                t
              );
            case "SET_FETCH_STATUS":
              return (
                (t = JSON.parse(JSON.stringify(t))),
                (t[n.rowType].status = n.status),
                t
              );
            case "ERROR":
              return i.error(n.error), t;
            default:
              return t;
          }
        }),
        (e.exports.setError = function(e) {
          return { type: "ERROR", error: e };
        }),
        (e.exports.setRows = function(e, t) {
          return { type: "SET_ROWS", rowType: e, rows: t };
        }),
        (e.exports.setFetchStatus = function(e, t) {
          return { type: "SET_FETCH_STATUS", rowType: e, status: t };
        }),
        (e.exports.getActivity = function(t, n) {
          return function(r) {
            r(e.exports.setFetchStatus("activity", e.exports.Status.FETCHING)),
              o(
                {
                  uri: "/users/" + t + "/following/users/activity?limit=5",
                  authentication: n
                },
                function(t, n, o) {
                  return t
                    ? (r(
                        e.exports.setFetchStatus(
                          "activity",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(e.exports.setError(t)))
                    : void 0 === n || 200 !== o.statusCode
                    ? (r(
                        e.exports.setFetchStatus(
                          "activity",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(
                        e.exports.setError(
                          "getActivity: request failed or response had no content"
                        )
                      ))
                    : (r(
                        e.exports.setFetchStatus(
                          "activity",
                          e.exports.Status.FETCHED
                        )
                      ),
                      void r(e.exports.setRows("activity", n)));
                }
              );
          };
        }),
        (e.exports.getFeaturedGlobal = function() {
          return function(t) {
            t(e.exports.setFetchStatus("featured", e.exports.Status.FETCHING)),
              o({ uri: "/proxy/featured" }, function(n, r, o) {
                return n
                  ? (t(
                      e.exports.setFetchStatus(
                        "featured",
                        e.exports.Status.ERROR
                      )
                    ),
                    void t(e.exports.setError(n)))
                  : void 0 === r || 200 !== o.statusCode
                  ? (t(
                      e.exports.setFetchStatus(
                        "featured",
                        e.exports.Status.ERROR
                      )
                    ),
                    void t(
                      e.exports.setError(
                        "getFeaturedGlobal: request failed or response had no content"
                      )
                    ))
                  : (t(
                      e.exports.setFetchStatus(
                        "featured",
                        e.exports.Status.FETCHED
                      )
                    ),
                    void t(e.exports.setRows("featured", r)));
              });
          };
        }),
        (e.exports.getSharedByFollowing = function(t, n) {
          return function(r) {
            r(e.exports.setFetchStatus("shared", e.exports.Status.FETCHING)),
              o(
                {
                  uri: "/users/" + t + "/following/users/projects",
                  authentication: n
                },
                function(t, n, o) {
                  return t
                    ? (r(
                        e.exports.setFetchStatus(
                          "shared",
                          e.exports.Status.Status.ERROR
                        )
                      ),
                      void r(e.exports.setError(t)))
                    : void 0 === n || 200 !== o.statusCode
                    ? (r(
                        e.exports.setFetchStatus(
                          "shared",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(
                        e.exports.setError(
                          "getSharedByFollowing: request failed or response had no content"
                        )
                      ))
                    : (r(
                        e.exports.setFetchStatus(
                          "shared",
                          e.exports.Status.FETCHED
                        )
                      ),
                      void r(e.exports.setRows("shared", n)));
                }
              );
          };
        }),
        (e.exports.getInStudiosFollowing = function(t, n) {
          return function(r) {
            r(e.exports.setFetchStatus("studios", e.exports.Status.FETCHING)),
              o(
                {
                  uri: "/users/" + t + "/following/studios/projects",
                  authentication: n
                },
                function(t, n, o) {
                  return t
                    ? (r(
                        e.exports.setFetchStatus(
                          "studios",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(e.exports.setError(t)))
                    : void 0 === n || 200 !== o.statusCode
                    ? (r(
                        e.exports.setFetchStatus(
                          "studios",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(
                        e.exports.setError(
                          "getInStudiosFollowing: request failed or response had no content"
                        )
                      ))
                    : (r(
                        e.exports.setFetchStatus(
                          "studios",
                          e.exports.Status.FETCHED
                        )
                      ),
                      void r(e.exports.setRows("studios", n)));
                }
              );
          };
        }),
        (e.exports.getLovedByFollowing = function(t, n) {
          return function(r) {
            r(e.exports.setFetchStatus("loved", e.exports.Status.FETCHING)),
              o(
                {
                  uri: "/users/" + t + "/following/users/loves",
                  authentication: n
                },
                function(t, n, o) {
                  return t
                    ? (r(
                        e.exports.setFetchStatus(
                          "loved",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(e.exports.setError(t)))
                    : void 0 === n || 200 !== o.statusCode
                    ? (r(
                        e.exports.setFetchStatus(
                          "loved",
                          e.exports.Status.ERROR
                        )
                      ),
                      void r(
                        e.exports.setError(
                          "getLovedByFollowing: request failed or response had no content"
                        )
                      ))
                    : (r(
                        e.exports.setFetchStatus(
                          "loved",
                          e.exports.Status.FETCHED
                        )
                      ),
                      void r(e.exports.setRows("loved", n)));
                }
              );
          };
        });
    },
    836: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(4).FormattedMessage,
        c = n(4).injectIntl,
        u = n(4).intlShape,
        d = n(62).default,
        p = n(1),
        f = n(0),
        h = n(55),
        m = n(140),
        g = n(911).shuffle,
        A = n(549),
        v = n(282),
        y = n(15),
        b = n(529),
        w = n(885),
        x = n(69),
        E = n(890),
        k = n(883),
        C = n(905),
        S = n(906),
        _ = n(907),
        O = n(976),
        I = n(977),
        M = n(978),
        j = n(979),
        T = n(980),
        N = n(981),
        D = n(982),
        F = n(984),
        R = n(983);
      n(1389);
      var B = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return s(n, ["getComponentForMessage"]), n;
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "getComponentForMessage",
              value: function(e) {
                var t = e.type + "_" + e.datetime_created;
                switch (e.type) {
                  case "followuser":
                    return f.createElement(j, {
                      followDateTime: e.datetime_created,
                      followeeId: e.followed_username,
                      followerUsername: e.actor_username,
                      key: t
                    });
                  case "followstudio":
                    return f.createElement(j, {
                      followDateTime: e.datetime_created,
                      followeeId: e.gallery_id,
                      followeeTitle: e.title,
                      followerUsername: e.actor_username,
                      key: t
                    });
                  case "loveproject":
                    return f.createElement(T, {
                      actorUsername: e.actor_username,
                      key: t,
                      loveDateTime: e.datetime_created,
                      projectId: e.project_id,
                      projectTitle: e.title
                    });
                  case "favoriteproject":
                    return f.createElement(M, {
                      actorUsername: e.actor_username,
                      favoriteDateTime: e.datetime_created,
                      key: t,
                      projectId: e.project_id,
                      projectTitle: e.project_title
                    });
                  case "remixproject":
                    return f.createElement(N, {
                      actorUsername: e.actor_username,
                      key: t,
                      parentId: e.parent_id,
                      parentTitle: e.parent_title,
                      projectId: e.project_id,
                      projectTitle: e.title,
                      remixDate: e.datetime_created
                    });
                  case "becomecurator":
                    return f.createElement(O, {
                      actorUsername: e.actor_username,
                      datetimePromoted: e.datetime_created,
                      key: t,
                      studioId: e.gallery_id,
                      studioTitle: e.title
                    });
                  case "becomeownerstudio":
                    return f.createElement(I, {
                      datetimePromoted: e.datetime_created,
                      key: t,
                      recipientUsername: e.recipient_username,
                      studioId: e.gallery_id,
                      studioTitle: e.gallery_title
                    });
                  case "shareproject":
                    return f.createElement(D, {
                      actorUsername: e.actor_username,
                      key: t,
                      loveDateTime: e.datetime_created,
                      projectId: e.project_id,
                      projectTitle: e.title
                    });
                }
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return f.createElement(
                  v,
                  {
                    className: "activity",
                    title: this.props.intl.formatMessage({
                      id: "general.whatsHappening"
                    })
                  },
                  this.props.items && this.props.items.length > 0
                    ? [
                        f.createElement(
                          "ul",
                          { className: "activity-ul", key: "activity-ul" },
                          this.props.items.map(function(t) {
                            var n = "/users/" + t.actor_username + "/",
                              r =
                                "//uploads.scratch.mit.edu/users/avatars/" +
                                t.actor_id +
                                ".png";
                            return (
                              "becomeownerstudio" === t.type &&
                                ((n = "/users/" + t.recipient_username + "/"),
                                (r =
                                  "//uploads.scratch.mit.edu/users/avatars/" +
                                  t.recipient_id +
                                  ".png")),
                              f.createElement(
                                "li",
                                {
                                  className: "activity-li",
                                  key: t.type + "_" + t.datetime_created
                                },
                                f.createElement(
                                  "a",
                                  { href: n },
                                  f.createElement("img", {
                                    alt: "",
                                    className: "activity-img",
                                    src: r
                                  })
                                ),
                                e.getComponentForMessage(t)
                              )
                            );
                          })
                        )
                      ]
                    : [
                        f.createElement(
                          "div",
                          { className: "empty", key: "activity-empty" },
                          f.createElement(
                            "h4",
                            null,
                            f.createElement(l, {
                              defaultMessage:
                                "This is where you will see updates from Scratchers you follow",
                              id: "activity.seeUpdates"
                            })
                          ),
                          f.createElement(
                            "a",
                            { href: "/studios/146521/" },
                            f.createElement(l, {
                              defaultMessage:
                                "Check out some Scratchers you might like to follow",
                              id: "activity.checkOutScratchers"
                            })
                          )
                        )
                      ]
                );
              }
            }
          ]),
          t
        );
      })(f.Component);
      B.propTypes = { intl: u, items: p.arrayOf(p.object) };
      var P = c(B),
        U = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return s(n, ["handleMessage", "renderHomepageRows"]), n;
          }
          return (
            i(t, e),
            a(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.shouldShowEmailConfirmation &&
                    window.addEventListener("message", this.handleMessage);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  window.removeEventListener("message", this.handleMessage);
                }
              },
              {
                key: "handleMessage",
                value: function(e) {
                  if (
                    e.origin === window.location.origin &&
                    e.source === this.emailConfirmationiFrame.contentWindow
                  )
                    if ("resend-done" === e.data)
                      this.props.onHideEmailConfirmationModal();
                    else {
                      var t = JSON.parse(e.data);
                      "leave-page" === t.action &&
                        (window.location.href = t.uri);
                    }
                }
              },
              {
                key: "renderHomepageRows",
                value: function() {
                  var e = [
                    f.createElement(
                      v,
                      {
                        key: "community_featured_projects",
                        title: this.props.intl.formatMessage({
                          id: "splash.featuredProjects"
                        })
                      },
                      f.createElement(k, {
                        items: this.props.featuredGlobal
                          .community_featured_projects
                      })
                    ),
                    f.createElement(
                      v,
                      {
                        key: "community_featured_studios",
                        title: this.props.intl.formatMessage({
                          id: "splash.featuredStudios"
                        })
                      },
                      f.createElement(k, {
                        items: this.props.featuredGlobal
                          .community_featured_studios,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          lazyLoad: !1
                        }
                      })
                    )
                  ];
                  if (
                    this.props.featuredGlobal.curator_top_projects &&
                    this.props.featuredGlobal.curator_top_projects.length > 4
                  ) {
                    var t = this.props.featuredGlobal.curator_top_projects[0]
                      .curator_name;
                    e.push(
                      f.createElement(
                        v,
                        {
                          key: "curator_top_projects",
                          moreHref: "/studios/386359/",
                          moreTitle: this.props.intl.formatMessage({
                            id: "general.learnMore"
                          }),
                          title: this.props.intl.formatMessage(
                            { id: "splash.projectsCuratedBy" },
                            { curatorId: t }
                          )
                        },
                        f.createElement(k, {
                          items: this.props.featuredGlobal.curator_top_projects
                        })
                      )
                    );
                  }
                  if (
                    this.props.featuredGlobal.scratch_design_studio &&
                    this.props.featuredGlobal.scratch_design_studio.length > 4
                  ) {
                    var n = this.props.featuredGlobal.scratch_design_studio[0]
                      .gallery_title;
                    e.push(
                      f.createElement(
                        v,
                        {
                          key: "scratch_design_studio",
                          moreHref:
                            "/studios/" +
                            this.props.featuredGlobal.scratch_design_studio[0]
                              .gallery_id +
                            "/",
                          moreTitle: this.props.intl.formatMessage({
                            id: "splash.visitTheStudio"
                          }),
                          title:
                            this.props.intl.formatMessage({
                              id: "splash.scratchDesignStudioTitle"
                            }) +
                            " - " +
                            n
                        },
                        f.createElement(k, {
                          items: this.props.featuredGlobal.scratch_design_studio
                        })
                      )
                    );
                  }
                  return (
                    this.props.sharedByFollowing &&
                      this.props.sharedByFollowing.length > 0 &&
                      e.push(
                        f.createElement(
                          v,
                          {
                            key: "custom_projects_by_following",
                            title: this.props.intl.formatMessage({
                              id: "splash.projectsByScratchersFollowing"
                            })
                          },
                          f.createElement(b, {
                            items: this.props.sharedByFollowing
                          })
                        )
                      ),
                    this.props.lovedByFollowing &&
                      this.props.lovedByFollowing.length > 0 &&
                      e.push(
                        f.createElement(
                          v,
                          {
                            key: "custom_projects_loved_by_following",
                            title: this.props.intl.formatMessage({
                              id: "splash.projectsLovedByScratchersFollowing"
                            })
                          },
                          f.createElement(b, {
                            items: this.props.lovedByFollowing
                          })
                        )
                      ),
                    this.props.inStudiosFollowing &&
                      this.props.inStudiosFollowing.length > 0 &&
                      e.push(
                        f.createElement(
                          v,
                          {
                            key: "custom_projects_in_studios_following",
                            title: this.props.intl.formatMessage({
                              id: "splash.projectsInStudiosFollowing"
                            })
                          },
                          f.createElement(b, {
                            items: this.props.inStudiosFollowing
                          })
                        )
                      ),
                    e.push(
                      f.createElement(
                        v,
                        {
                          key: "community_most_remixed_projects",
                          title: this.props.intl.formatMessage({
                            id: "splash.communityRemixing"
                          })
                        },
                        f.createElement(k, {
                          showRemixes: !0,
                          items: g(
                            this.props.featuredGlobal
                              .community_most_remixed_projects
                          )
                        })
                      ),
                      f.createElement(
                        v,
                        {
                          key: "community_most_loved_projects",
                          title: this.props.intl.formatMessage({
                            id: "splash.communityLoving"
                          })
                        },
                        f.createElement(k, {
                          showLoves: !0,
                          items: g(
                            this.props.featuredGlobal
                              .community_most_loved_projects
                          )
                        })
                      )
                    ),
                    e
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.renderHomepageRows(),
                    n = this.props.intl.formatHTMLMessage,
                    r = this.props.intl.formatMessage,
                    o = {
                      "general.viewAll": r({ id: "general.viewAll" }),
                      "news.scratchNews": r({ id: "news.scratchNews" }),
                      "welcome.welcomeToScratch": r({
                        id: "welcome.welcomeToScratch"
                      }),
                      "welcome.learn": r({ id: "welcome.learn" }),
                      "welcome.tryOut": r({ id: "welcome.tryOut" }),
                      "welcome.connect": r({ id: "welcome.connect" }),
                      "intro.aboutScratch": r({ id: "intro.aboutScratch" }),
                      "intro.forEducators": r({ id: "intro.forEducators" }),
                      "intro.forParents": r({ id: "intro.forParents" }),
                      "intro.join": r({ id: "intro.join" }),
                      "intro.startCreating": r({ id: "intro.startCreating" }),
                      "intro.tagLine1": n({ id: "intro.tagLine1" }),
                      "intro.tagLine2": n({ id: "intro.tagLine2" }),
                      "intro.watchVideo": r({ id: "intro.watchVideo" }),
                      "teacherbanner.greeting": r({
                        id: "teacherbanner.greeting"
                      }),
                      "teacherbanner.subgreeting": r({
                        id: "teacherbanner.subgreeting"
                      }),
                      "teacherbanner.classesButton": r({
                        id: "teacherbanner.classesButton"
                      }),
                      "teacherbanner.resourcesButton": r({
                        id: "general.resourcesTitle"
                      }),
                      "teacherbanner.faqButton": r({
                        id: "teacherbanner.faqButton"
                      })
                    };
                  return f.createElement(
                    "div",
                    { className: "splash" },
                    this.props.shouldShowEmailConfirmation
                      ? [
                          f.createElement(
                            w,
                            {
                              className: "warning",
                              key: "confirmedEmail",
                              onRequestDismiss: function() {
                                e.props.onDismiss("confirmed_email");
                              }
                            },
                            f.createElement(
                              "a",
                              {
                                href: "#",
                                onClick: this.props.onShowEmailConfirmationModal
                              },
                              "Confirm your email"
                            ),
                            " ",
                            "to enable sharing.",
                            " ",
                            f.createElement(
                              "a",
                              { href: "/info/faq/#accounts" },
                              "Having trouble?"
                            )
                          ),
                          f.createElement(x, {
                            className: "mod-confirmation",
                            componentRef: function(t) {
                              e.emailConfirmationiFrame = t;
                            },
                            isOpen: this.props.emailConfirmationModalOpen,
                            key: "iframe-modal",
                            src: "/accounts/email_resend_standalone/",
                            onRequestClose: this.props
                              .onHideEmailConfirmationModal
                          })
                        ]
                      : [],
                    this.props.isEducator
                      ? [
                          f.createElement(S, {
                            key: "teacherbanner",
                            messages: o
                          })
                        ]
                      : [],
                    this.props.sessionStatus === m.Status.FETCHED &&
                      0 === Object.keys(this.props.user).length &&
                      (Date.now() >= 15752628e5 && Date.now() < 15770772e5
                        ? f.createElement(
                            d,
                            {
                              key: "frameless-tablet",
                              minWidth: h.tabletPortrait
                            },
                            f.createElement(F, null)
                          )
                        : f.createElement(E, { key: "intro", messages: o })),
                    f.createElement(
                      "div",
                      { className: "inner mod-splash", key: "inner" },
                      this.props.sessionStatus === m.Status.FETCHED &&
                        Object.keys(this.props.user).length > 0 &&
                        f.createElement(
                          "div",
                          { className: "splash-header", key: "header" },
                          this.props.shouldShowWelcome
                            ? [
                                f.createElement(_, {
                                  key: "welcome",
                                  messages: o,
                                  onDismiss: function() {
                                    e.props.onDismiss("welcome");
                                  }
                                })
                              ]
                            : [
                                f.createElement(P, {
                                  items: this.props.activity,
                                  key: "activity"
                                })
                              ],
                          f.createElement(C, {
                            items: this.props.news,
                            messages: o
                          })
                        ),
                      t.shift(),
                      t.shift()
                    ),
                    this.props.sessionStatus === m.Status.FETCHED &&
                      0 !== Object.keys(this.props.user).length &&
                      Date.now() >= 15752628e5 &&
                      Date.now() < 15770772e5 &&
                      f.createElement(
                        d,
                        {
                          key: "frameless-desktop",
                          minWidth: h.tabletPortrait
                        },
                        f.createElement(R, null)
                      ),
                    f.createElement(
                      "div",
                      { className: "inner mod-splash", key: "inner2" },
                      t,
                      this.props.isAdmin &&
                        f.createElement(
                          A,
                          {
                            className: "splash-admin-panel",
                            isOpen: this.props.adminPanelOpen,
                            onClose: this.props.onCloseAdminPanel,
                            onOpen: this.props.onOpenAdminPanel
                          },
                          f.createElement(
                            "dl",
                            null,
                            f.createElement("dt", null, "Tools"),
                            f.createElement(
                              "dd",
                              null,
                              f.createElement(
                                "ul",
                                null,
                                f.createElement(
                                  "li",
                                  null,
                                  f.createElement(
                                    "a",
                                    { href: "/scratch_admin/tickets" },
                                    "Ticket Queue"
                                  )
                                ),
                                f.createElement(
                                  "li",
                                  null,
                                  f.createElement(
                                    "a",
                                    { href: "/scratch_admin/ip-search/" },
                                    "IP Search"
                                  )
                                ),
                                f.createElement(
                                  "li",
                                  null,
                                  f.createElement(
                                    "a",
                                    { href: "/scratch_admin/email-search/" },
                                    "Email Search"
                                  )
                                )
                              )
                            ),
                            f.createElement("dt", null, "Homepage Cache"),
                            f.createElement(
                              "dd",
                              null,
                              f.createElement(
                                "ul",
                                { className: "cache-list" },
                                f.createElement(
                                  "li",
                                  null,
                                  f.createElement(
                                    "div",
                                    { className: "button-row" },
                                    f.createElement(
                                      "span",
                                      null,
                                      "Refresh row data:"
                                    ),
                                    f.createElement(
                                      y,
                                      {
                                        className: this.props.refreshCacheStatus
                                          .status,
                                        disabled: this.props.refreshCacheStatus
                                          .disabled,
                                        onClick: this.props
                                          .onRefreshHomepageCache
                                      },
                                      f.createElement(
                                        "span",
                                        null,
                                        this.props.refreshCacheStatus.content
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            f.createElement("dt", null, "Page Cache"),
                            f.createElement(
                              "dd",
                              null,
                              f.createElement(
                                "ul",
                                { className: "cache-list" },
                                f.createElement(
                                  "li",
                                  null,
                                  f.createElement(
                                    "form",
                                    {
                                      action:
                                        "/scratch_admin/page/clear-anon-cache/",
                                      method: "post"
                                    },
                                    f.createElement("input", {
                                      name: "path",
                                      type: "hidden",
                                      value: "/"
                                    }),
                                    f.createElement(
                                      "div",
                                      { className: "button-row" },
                                      f.createElement(
                                        "span",
                                        null,
                                        "For anonymous users:"
                                      ),
                                      f.createElement(
                                        y,
                                        { type: "submit" },
                                        f.createElement("span", null, "Clear")
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.Component);
      (U.propTypes = {
        activity: p.arrayOf(p.object),
        adminPanelOpen: p.bool,
        emailConfirmationModalOpen: p.bool.isRequired,
        featuredGlobal: p.shape({
          community_featured_projects: p.array,
          community_featured_studios: p.array,
          curator_top_projects: p.array,
          scratch_design_studio: p.array,
          community_most_remixed_projects: p.array,
          community_most_loved_projects: p.array
        }),
        inStudiosFollowing: p.arrayOf(p.object),
        intl: u,
        isAdmin: p.bool.isRequired,
        isEducator: p.bool.isRequired,
        lovedByFollowing: p.arrayOf(p.object),
        news: p.arrayOf(p.object),
        onCloseAdminPanel: p.func.isRequired,
        onDismiss: p.func.isRequired,
        onHideEmailConfirmationModal: p.func.isRequired,
        onOpenAdminPanel: p.func.isRequired,
        onRefreshHomepageCache: p.func.isRequired,
        onShowEmailConfirmationModal: p.func.isRequired,
        refreshCacheStatus: p.object.isRequired,
        sessionStatus: p.string.isRequired,
        sharedByFollowing: p.arrayOf(p.object),
        shouldShowEmailConfirmation: p.bool.isRequired,
        shouldShowWelcome: p.bool.isRequired,
        user: p.object.isRequired
      }),
        (U.defaultProps = {
          activity: [],
          featuredGlobal: {},
          inStudiosFollowing: [],
          lovedByFollowing: [],
          news: [],
          sharedByFollowing: []
        }),
        (e.exports = c(U));
    },
    84: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function(e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Debug = 2)] = "Debug"),
          (e[(e.Verbose = 3)] = "Verbose");
      })(t.LogLevel || (t.LogLevel = {}));
    },
    85: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (
          (!0 === t.debug && i.logger.enable(), !o.getCurrentHub().getClient())
        ) {
          var n = new e(t);
          o.getCurrentHub().bindClient(n), n.install();
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(9),
        i = n(7);
      t.initAndBind = r;
    },
    86: function(e, t, n) {
      "use strict";
      (function(e) {
        function r() {
          var e = d.getGlobalObject();
          return (e.__SENTRY__ = e.__SENTRY__ || { hub: void 0 }), e;
        }
        function o(e) {
          var t = r(),
            n = s(t);
          return l(t, e), n;
        }
        function i() {
          var n = r();
          (a(n) && !s(n).isOlderThan(t.API_VERSION)) || l(n, new f());
          try {
            var o = d.dynamicRequire(e, "domain"),
              i = o.active;
            if (!i) return s(n);
            if (!a(i) || s(i).isOlderThan(t.API_VERSION)) {
              var c = s(n).getStackTop();
              l(i, new f(c.client, p.Scope.clone(c.scope)));
            }
            return s(i);
          } catch (e) {
            return s(n);
          }
        }
        function a(e) {
          return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
        }
        function s(e) {
          return e && e.__SENTRY__ && e.__SENTRY__.hub
            ? e.__SENTRY__.hub
            : ((e.__SENTRY__ = {}),
              (e.__SENTRY__.hub = new f()),
              e.__SENTRY__.hub);
        }
        function l(e, t) {
          return (
            !!e &&
            ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var c = n(6),
          u = n(7),
          d = n(11),
          p = n(29);
        t.API_VERSION = 3;
        var f = (function() {
          function e(e, n, r) {
            void 0 === n && (n = new p.Scope()),
              void 0 === r && (r = t.API_VERSION),
              (this.version = r),
              (this.stack = []),
              this.stack.push({ client: e, scope: n });
          }
          return (
            (e.prototype.invokeClient = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r,
                o = this.getStackTop();
              o &&
                o.client &&
                o.client[e] &&
                (r = o.client)[e].apply(r, c.__spread(t, [o.scope]));
            }),
            (e.prototype.invokeClientAsync = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r,
                o = this.getStackTop();
              o &&
                o.client &&
                o.client[e] &&
                (r = o.client)[e]
                  .apply(r, c.__spread(t, [o.scope]))
                  .catch(function(e) {
                    u.logger.error(e);
                  });
            }),
            (e.prototype.isOlderThan = function(e) {
              return this.version < e;
            }),
            (e.prototype.bindClient = function(e) {
              var t = this.getStackTop();
              (t.client = e),
                t &&
                  t.scope &&
                  e &&
                  t.scope.addScopeListener(function(t) {
                    if (e.getBackend)
                      try {
                        e.getBackend().storeScope(t);
                      } catch (e) {}
                  });
            }),
            (e.prototype.pushScope = function() {
              var e = this.getStack(),
                t = e.length > 0 ? e[e.length - 1].scope : void 0,
                n = p.Scope.clone(t);
              return (
                this.getStack().push({ client: this.getClient(), scope: n }), n
              );
            }),
            (e.prototype.popScope = function() {
              return void 0 !== this.getStack().pop();
            }),
            (e.prototype.withScope = function(e) {
              var t = this.pushScope();
              try {
                e(t);
              } finally {
                this.popScope();
              }
            }),
            (e.prototype.getClient = function() {
              return this.getStackTop().client;
            }),
            (e.prototype.getScope = function() {
              return this.getStackTop().scope;
            }),
            (e.prototype.getStack = function() {
              return this.stack;
            }),
            (e.prototype.getStackTop = function() {
              return this.stack[this.stack.length - 1];
            }),
            (e.prototype.captureException = function(e, t) {
              var n = (this._lastEventId = d.uuid4());
              return (
                this.invokeClientAsync(
                  "captureException",
                  e,
                  c.__assign({}, t, { event_id: n })
                ),
                n
              );
            }),
            (e.prototype.captureMessage = function(e, t, n) {
              var r = (this._lastEventId = d.uuid4());
              return (
                this.invokeClientAsync(
                  "captureMessage",
                  e,
                  t,
                  c.__assign({}, n, { event_id: r })
                ),
                r
              );
            }),
            (e.prototype.captureEvent = function(e, t) {
              var n = (this._lastEventId = d.uuid4());
              return (
                this.invokeClientAsync(
                  "captureEvent",
                  e,
                  c.__assign({}, t, { event_id: n })
                ),
                n
              );
            }),
            (e.prototype.lastEventId = function() {
              return this._lastEventId;
            }),
            (e.prototype.addBreadcrumb = function(e, t) {
              this.invokeClient("addBreadcrumb", e, c.__assign({}, t));
            }),
            (e.prototype.configureScope = function(e) {
              var t = this.getStackTop();
              t.scope && t.client && e(t.scope);
            }),
            (e.prototype.run = function(e) {
              var t = o(this);
              try {
                e(this);
              } finally {
                o(t);
              }
            }),
            (e.prototype.getIntegration = function(e) {
              try {
                return this.getClient().getIntegration(e);
              } catch (t) {
                return (
                  u.logger.warn(
                    "Cannot retrieve integration " +
                      e.id +
                      " from the current Hub"
                  ),
                  null
                );
              }
            }),
            e
          );
        })();
        (t.Hub = f),
          (t.getMainCarrier = r),
          (t.makeMain = o),
          (t.getCurrentHub = i),
          (t.hasHubOnCarrier = a),
          (t.getHubFromCarrier = s),
          (t.setHubOnCarrier = l);
      }.call(t, n(37)(e)));
    },
    87: function(e, t, n) {
      "use strict";
      function r(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = p.getCurrentHub();
        if (r && r[e]) return r[e].apply(r, d.__spread(t));
        throw new Error(
          "No hub defined or " +
            e +
            " was not found on the hub, please open a bug report."
        );
      }
      function o(e) {
        var t;
        try {
          throw new Error("Sentry syntheticException");
        } catch (e) {
          t = e;
        }
        return r("captureException", e, {
          originalException: e,
          syntheticException: t
        });
      }
      function i(e, t) {
        var n;
        try {
          throw new Error(e);
        } catch (e) {
          n = e;
        }
        return r("captureMessage", e, t, {
          originalException: e,
          syntheticException: n
        });
      }
      function a(e) {
        return r("captureEvent", e);
      }
      function s(e) {
        r("addBreadcrumb", e);
      }
      function l(e) {
        r("configureScope", e);
      }
      function c(e) {
        r("withScope", e);
      }
      function u(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        r.apply(void 0, d.__spread(["invokeClient", e], t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(6),
        p = n(9);
      (t.captureException = o),
        (t.captureMessage = i),
        (t.captureEvent = a),
        (t.addBreadcrumb = s),
        (t.configureScope = l),
        (t.withScope = c),
        (t._callOnClient = u);
    },
    88: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function(e) {
        (e.Fatal = "fatal"),
          (e.Error = "error"),
          (e.Warning = "warning"),
          (e.Log = "log"),
          (e.Info = "info"),
          (e.Debug = "debug"),
          (e.Critical = "critical");
      })(t.Severity || (t.Severity = {})),
        (function(e) {
          function t(t) {
            switch (t) {
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
          e.fromString = t;
        })(t.Severity || (t.Severity = {}));
      !(function(e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed");
      })(t.Status || (t.Status = {})),
        (function(e) {
          function t(t) {
            return t >= 200 && t < 300
              ? e.Success
              : 429 === t
              ? e.RateLimit
              : t >= 400 && t < 500
              ? e.Invalid
              : t >= 500
              ? e.Failed
              : e.Unknown;
          }
          e.fromHttpCode = t;
        })(t.Status || (t.Status = {}));
    },
    883: function(e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(5),
        i = n(213),
        a = n(1),
        s = n(0),
        l = n(521).default,
        c = n(263),
        u = n(55);
      n(525), n(524), n(526);
      var d = function(e) {
        i(e.settings, {
          centerMode: !1,
          dots: !1,
          infinite: !1,
          lazyLoad: !0,
          slidesToShow: 5,
          slidesToScroll: 5,
          variableWidth: !0,
          responsive: [
            {
              breakpoint: u.mobile,
              settings: {
                arrows: !0,
                slidesToScroll: 1,
                slidesToShow: 1,
                centerMode: !0
              }
            },
            {
              breakpoint: u.mobileIntermediate,
              settings: { slidesToScroll: 2, slidesToShow: 2 }
            },
            {
              breakpoint: u.desktop,
              settings: { slidesToScroll: 4, slidesToShow: 4 }
            }
          ]
        });
        var t = e.items.length > e.settings.slidesToShow;
        return s.createElement(
          l,
          r({ arrows: t, className: o("carousel", e.className) }, e.settings),
          e.items.map(function(t) {
            var n = "";
            switch (t.type) {
              case "gallery":
                n = "/studios/" + t.id + "/";
                break;
              case "project":
                n = "/projects/" + t.id + "/";
                break;
              default:
                n = "/" + t.type + "/" + t.id + "/";
            }
            return s.createElement(c, {
              creator: t.creator,
              href: n,
              key: [e.type, t.id].join("."),
              loves: t.love_count,
              remixes: t.remixers_count,
              showLoves: e.showLoves,
              showRemixes: e.showRemixes,
              src: t.thumbnail_url,
              title: t.title,
              type: t.type
            });
          })
        );
      };
      (d.propTypes = {
        className: a.string,
        items: a.arrayOf(a.any),
        settings: a.shape({
          centerMode: a.bool,
          dots: a.bool,
          infinite: a.bool,
          lazyLoad: a.bool,
          slidesToShow: a.number,
          slidesToScroll: a.number,
          variableWidth: a.bool,
          responsive: a.array
        }),
        showLoves: a.bool,
        showRemixes: a.bool,
        type: a.string
      }),
        (d.defaultProps = {
          items: n(528),
          settings: {},
          showRemixes: !1,
          showLoves: !1,
          type: "project"
        }),
        (e.exports = d);
    },
    885: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0);
      n(1365);
      var a = function(e) {
        return i.createElement(
          "div",
          { className: r("banner", e.className) },
          i.createElement(
            "div",
            { className: "inner" },
            e.children,
            e.onRequestDismiss
              ? [
                  i.createElement(
                    "a",
                    {
                      className: "close",
                      href: "#",
                      key: "close",
                      onClick: e.onRequestDismiss
                    },
                    "x"
                  )
                ]
              : []
          )
        );
      };
      (a.propTypes = {
        children: o.node,
        className: o.string,
        onRequestDismiss: o.func
      }),
        (e.exports = a);
    },
    89: function(e, t, n) {
      "use strict";
      function r(e) {
        e.catch(function(e) {
          console.error(e);
        });
      }
      function o(e, t, n) {
        return i.__awaiter(this, void 0, void 0, function() {
          var r;
          return i.__generator(this, function(o) {
            switch (o.label) {
              case 0:
                return [4, Promise.all(e.map(t, n))];
              case 1:
                return (
                  (r = o.sent()),
                  [
                    2,
                    e.filter(function(e, t) {
                      return r[t];
                    })
                  ]
                );
            }
          });
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(6);
      (t.forget = r), (t.filterAsync = o);
    },
    890: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(14).connect,
        c = n(1),
        u = n(0),
        d = n(16),
        p = n(531),
        f = n(12),
        h = n(24);
      n(1368);
      var m = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return s(n, ["handleShowVideo"]), (n.state = { videoOpen: !1 }), n;
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "handleShowVideo",
              value: function() {
                this.setState({ videoOpen: !0 });
              }
            },
            {
              key: "render",
              value: function() {
                return u.createElement(
                  h,
                  { className: "intro-banner" },
                  u.createElement(
                    f,
                    { className: "intro-container" },
                    u.createElement(
                      f,
                      { className: "intro-content column" },
                      u.createElement(
                        "h1",
                        { className: "intro-header" },
                        u.createElement(
                          "span",
                          null,
                          this.props.messages["intro.tagLine1"]
                        ),
                        u.createElement("br", null),
                        u.createElement(
                          "span",
                          null,
                          this.props.messages["intro.tagLine2"]
                        )
                      ),
                      u.createElement(
                        f,
                        { className: "intro-buttons" },
                        u.createElement(
                          "a",
                          {
                            className: "intro-button create-button button",
                            href: "/create"
                          },
                          this.props.messages["intro.startCreating"]
                        ),
                        u.createElement(
                          "a",
                          {
                            className: "intro-button join-button button",
                            href: "#",
                            onClick: this.props.handleClickRegistration
                          },
                          this.props.messages["intro.join"]
                        )
                      )
                    ),
                    u.createElement(
                      f,
                      { className: "intro-video-container" },
                      this.state.videoOpen
                        ? u.createElement(p, {
                            className: "intro-video",
                            videoId: "joal01i8b1"
                          })
                        : u.createElement(
                            "div",
                            {
                              className: "video-image",
                              onClick: this.handleShowVideo
                            },
                            u.createElement("img", {
                              src: "/svgs/intro/video-image.svg"
                            }),
                            u.createElement(
                              "a",
                              { href: "#", onClick: this.handleShowVideo },
                              u.createElement(
                                "div",
                                { className: "watch-button button" },
                                this.props.messages["intro.watchVideo"]
                              )
                            )
                          )
                    )
                  ),
                  u.createElement(
                    f,
                    { className: "intro-subnav" },
                    u.createElement(
                      "a",
                      { href: "/about" },
                      u.createElement(
                        "div",
                        { className: "subnav-button button" },
                        this.props.messages["intro.aboutScratch"]
                      )
                    ),
                    u.createElement(
                      "a",
                      { href: "/parents" },
                      u.createElement(
                        "div",
                        { className: "subnav-button button" },
                        this.props.messages["intro.forParents"]
                      )
                    ),
                    u.createElement(
                      "a",
                      { href: "/educators" },
                      u.createElement(
                        "div",
                        { className: "subnav-button button" },
                        this.props.messages["intro.forEducators"]
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(u.Component);
      (m.propTypes = {
        handleClickRegistration: c.func,
        messages: c.shape({
          "intro.aboutScratch": c.string,
          "intro.forEducators": c.string,
          "intro.forParents": c.string,
          "intro.join": c.string,
          "intro.startCreating": c.string,
          "intro.tagLine1": c.string,
          "intro.tagLine2": c.string,
          "intro.watchVideo": c.string
        })
      }),
        (m.defaultProps = {
          messages: {
            "intro.aboutScratch": "About Scratch",
            "intro.forEducators": "For Educators",
            "intro.forParents": "For Parents",
            "intro.join": "Join",
            "intro.startCreating": "Start Creating",
            "intro.tagLine1": "Create stories, games, and animations",
            "intro.tagLine2": "Share with others around the world",
            "intro.watchVideo": "Watch Video"
          },
          session: {}
        });
      var g = function(e) {
          return { session: e.session };
        },
        A = function(e) {
          return {
            handleClickRegistration: function(t) {
              t.preventDefault(), e(d.handleRegistrationRequested());
            }
          };
        },
        v = l(g, A)(m);
      e.exports = v;
    },
    9: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(29);
      (t.addGlobalEventProcessor = r.addGlobalEventProcessor),
        (t.Scope = r.Scope);
      var o = n(86);
      (t.getCurrentHub = o.getCurrentHub),
        (t.getHubFromCarrier = o.getHubFromCarrier),
        (t.getMainCarrier = o.getMainCarrier),
        (t.Hub = o.Hub),
        (t.setHubOnCarrier = o.setHubOnCarrier);
    },
    90: function(e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0, r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          "." === o
            ? e.splice(r, 1)
            : ".." === o
            ? (e.splice(r, 1), n++)
            : n && (e.splice(r, 1), n--);
        }
        if (t) for (; n--; n) e.unshift("..");
        return e;
      }
      function o(e) {
        var t = f.exec(e);
        return t ? t.slice(1) : [];
      }
      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = "", o = !1, i = e.length - 1; i >= -1 && !o; i--) {
          var a = i >= 0 ? e[i] : "/";
          a && ((n = a + "/" + n), (o = "/" === a.charAt(0)));
        }
        return (
          (n = r(
            n.split("/").filter(function(e) {
              return !!e;
            }),
            !o
          ).join("/")),
          (o ? "/" : "") + n || "."
        );
      }
      function a(e) {
        for (var t = 0; t < e.length && "" === e[t]; t++);
        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1);
      }
      function s(e, t) {
        (e = i(e).substr(1)), (t = i(t).substr(1));
        for (
          var n = a(e.split("/")),
            r = a(t.split("/")),
            o = Math.min(n.length, r.length),
            s = o,
            l = 0;
          l < o;
          l++
        )
          if (n[l] !== r[l]) {
            s = l;
            break;
          }
        for (var c = [], l = s; l < n.length; l++) c.push("..");
        return (c = c.concat(r.slice(s))), c.join("/");
      }
      function l(e) {
        var t = c(e),
          n = "/" === e.substr(-1),
          o = r(
            e.split("/").filter(function(e) {
              return !!e;
            }),
            !t
          ).join("/");
        return o || t || (o = "."), o && n && (o += "/"), (t ? "/" : "") + o;
      }
      function c(e) {
        return "/" === e.charAt(0);
      }
      function u() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return l(e.join("/"));
      }
      function d(e) {
        var t = o(e),
          n = t[0],
          r = t[1];
        return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
      }
      function p(e, t) {
        var n = o(e)[2];
        return (
          t &&
            n.substr(-1 * t.length) === t &&
            (n = n.substr(0, n.length - t.length)),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      (t.resolve = i),
        (t.relative = s),
        (t.normalize = l),
        (t.isAbsolute = c),
        (t.join = u),
        (t.dirname = d),
        (t.basename = p);
    },
    905: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0),
        i = n(282);
      n(1376);
      var a = function(e) {
        return o.createElement(
          i,
          {
            className: "news",
            moreHref: "/discuss/5/",
            moreTitle: e.messages["general.viewAll"],
            title: e.messages["news.scratchNews"]
          },
          o.createElement(
            "ul",
            null,
            e.items.map(function(e) {
              return o.createElement(
                "li",
                { key: e.id },
                o.createElement(
                  "a",
                  { href: e.url },
                  o.createElement("img", {
                    alt: "",
                    className: "news-image",
                    height: "53",
                    src: e.image,
                    width: "53"
                  }),
                  o.createElement(
                    "div",
                    { className: "news-description" },
                    o.createElement("h4", null, e.headline),
                    o.createElement("p", null, e.copy)
                  )
                )
              );
            })
          )
        );
      };
      (a.propTypes = {
        items: r.arrayOf(r.object),
        messages: r.shape({
          "general.viewAll": r.string,
          "news.scratchNews": r.string
        })
      }),
        (a.defaultProps = {
          items: n(1401),
          messages: {
            "general.viewAll": "View All",
            "news.scratchNews": "Scratch News"
          }
        }),
        (e.exports = a);
    },
    906: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(14).connect,
        i = n(1),
        a = n(0),
        s = n(140),
        l = n(24),
        c = n(15),
        u = n(12);
      n(1377);
      var d = function(e) {
        return a.createElement(
          l,
          { className: r("teacher-banner", e.className) },
          a.createElement(
            u,
            { className: "inner" },
            a.createElement(
              "div",
              { className: "welcome" },
              e.sessionStatus === s.Status.FETCHED && e.user
                ? [
                    a.createElement(
                      "h3",
                      { key: "greeting" },
                      e.messages["teacherbanner.greeting"],
                      ",",
                      " ",
                      e.user.username
                    ),
                    a.createElement(
                      "p",
                      { className: "title-banner-p", key: "subgreeting" },
                      e.messages["teacherbanner.subgreeting"]
                    )
                  ]
                : []
            ),
            a.createElement(
              u,
              { className: "quick-links" },
              e.sessionStatus === s.Status.FETCHED && e.user
                ? [
                    a.createElement(
                      "a",
                      { href: "/educators/classes", key: "classes-button" },
                      a.createElement(
                        c,
                        null,
                        e.messages["teacherbanner.classesButton"]
                      )
                    ),
                    a.createElement(
                      "a",
                      { href: "/info/educators", key: "resources-button" },
                      a.createElement(
                        c,
                        null,
                        e.messages["teacherbanner.resourcesButton"]
                      )
                    ),
                    a.createElement(
                      "a",
                      { href: "/educators/faq", key: "faq-button" },
                      a.createElement(
                        c,
                        null,
                        e.messages["teacherbanner.faqButton"]
                      )
                    )
                  ]
                : []
            )
          )
        );
      };
      (d.propTypes = {
        className: i.string,
        messages: i.shape({
          "teacherbanner.greeting": i.string,
          "teacherbanner.subgreeting": i.string,
          "teacherbanner.classesButton": i.string,
          "teacherbanner.resourcesButton": i.string,
          "teacherbanner.faqButton": i.string
        }),
        sessionStatus: i.string,
        user: i.shape({ username: i.string })
      }),
        (d.defaultProps = {
          messages: {
            "teacherbanner.greeting": "Hi",
            "teacherbanner.subgreeting": "Teacher Account",
            "teacherbanner.classesButton": "My Classes",
            "teacherbanner.resourcesButton": "Educator Resources",
            "teacherbanner.faqButton": "Teacher Account FAQ"
          },
          user: {}
        });
      var p = function(e) {
          return {
            sessionStatus: e.session.status,
            user: e.session.session.user
          };
        },
        f = o(p)(d);
      e.exports = f;
    },
    907: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0),
        i = n(282);
      n(1380);
      var a = function(e) {
        return o.createElement(
          i,
          {
            className: "welcome",
            moreHref: "#",
            moreProps: {
              className: "close",
              title: "Dismiss",
              onClick: e.onDismiss
            },
            moreTitle: "x",
            title: e.messages["welcome.welcomeToScratch"]
          },
          o.createElement(
            "div",
            { className: "welcome-col blue" },
            o.createElement(
              "h4",
              null,
              o.createElement(
                "a",
                { href: "/projects/editor/?tutorial=getStarted" },
                e.messages["welcome.learn"]
              )
            ),
            o.createElement(
              "a",
              { href: "/projects/editor/?tutorial=getStarted" },
              o.createElement("img", {
                alt: "Get Started",
                src: "/images/welcome-learn.png"
              })
            )
          ),
          o.createElement(
            "div",
            { className: "welcome-col green" },
            o.createElement(
              "h4",
              null,
              o.createElement(
                "a",
                { href: "/starter_projects/" },
                e.messages["welcome.tryOut"]
              )
            ),
            o.createElement(
              "a",
              { href: "/starter_projects/" },
              o.createElement("img", {
                alt: "Starter Projects",
                src: "/images/welcome-try.png"
              })
            )
          ),
          o.createElement(
            "div",
            { className: "welcome-col pink" },
            o.createElement(
              "h4",
              null,
              o.createElement(
                "a",
                { href: "/studios/146521/" },
                e.messages["welcome.connect"]
              )
            ),
            o.createElement(
              "a",
              { href: "/studios/146521/" },
              o.createElement("img", {
                alt: "Connect",
                src: "/images/welcome-connect.png"
              })
            )
          )
        );
      };
      (a.propTypes = {
        messages: r.shape({
          "welcome.welcomeToScratch": r.string,
          "welcome.learn": r.string,
          "welcome.tryOut": r.string,
          "welcome.connect": r.string
        }),
        onDismiss: r.func
      }),
        (a.defaultProps = {
          messages: {
            "welcome.welcomeToScratch": "Welcome to Scratch!",
            "welcome.learn": "Learn how to make a project in Scratch",
            "welcome.tryOut": "Try out starter projects",
            "welcome.connect": "Connect with other Scratchers"
          }
        }),
        (e.exports = a);
    },
    91: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(0),
        l = n(8),
        c = n(17),
        u = n(61);
      n(122);
      var d = [
          "/images/cats/IMG_9775.jpg",
          "/images/cats/IMG_9766.jpg",
          "/images/cats/IMG_9587.jpg",
          "/images/cats/IMG_6558.jpg",
          "/images/cats/IMG_6521.jpg",
          "/images/cats/IMG_6020.jpg",
          "/images/cats/IMG_5880.jpg",
          "/images/cats/IMG_3218.jpg",
          "/images/cats/IMG_2776.jpg",
          "/images/cats/IMG_2775.jpg",
          "/images/cats/IMG_2681.jpg",
          "/images/cats/IMG_1092.jpg",
          "/images/cats/IMG_0684.jpg",
          "/images/cats/IMG_0698.jpg",
          "/images/cats/IMG_0504.jpg",
          "/images/cats/IMG_0288.jpg",
          "/images/cats/IMG_0122.jpg",
          "/images/cats/IMG_2507.jpg",
          "/images/cats/IMG_1977.jpg",
          "/images/cats/IMG_1696.jpg",
          "/images/cats/IMG_1463.jpg",
          "/images/cats/IMG_1157.jpg",
          "/images/cats/IMG_0681.jpg",
          "/images/cats/IMG_0135.jpg",
          "/images/cats/IMG_0071.jpg",
          "/images/cats/1.jpg",
          "/images/cats/2.jpg",
          "/images/cats/3.jpg",
          "/images/cats/4.jpg",
          "/images/cats/Cat1.jpg",
          "/images/cats/Cat2.jpg",
          "/images/cats/Cat3.jpg",
          "/images/cats/Cat4.jpg",
          "/images/cats/Cat5.jpg",
          "/images/cats/Cat6.png",
          "/images/cats/Cat7.jpg",
          "/images/cats/Cat8.jpg",
          "/images/cats/Cat9.jpg",
          "/images/cats/Cat10.png",
          "/images/cats/Cat11.png",
          "/images/cats/Cat12.png",
          "/images/cats/IMG_2167.jpg",
          "/images/cats/IMG_4316.jpg",
          "/images/cats/IMG_5396.jpg"
        ],
        p = [
          "How small can they make a t-shirt?",
          "Why do hotdogs come in packages of 8?",
          "Who let the dogs out?",
          "Why are cats so cute?",
          "Where is the other sock?",
          "Why is the sky blue?",
          "Why does everyday end in y?",
          "How many licks does it take to get to the center of a lollipop? ",
          "How many bites does it take to get to the center of a corndog?",
          "How many hours can a cat sleep in one day?",
          "Am I hungry?",
          "What should I eat?",
          "Who will make me a sandwich?",
          "Where are my glasses?",
          "Why did I walk into this room?",
          "Where is the bathroom?",
          "Where is the mop?",
          "Why are ants so strong?",
          "Why do I wake up before my alarm goes off?",
          "Where do almonds come from?",
          "When is the sky blue?",
          "Wherefore art thou Romeo?",
          "What was the Scratch Cat like as a kitten?",
          "What is the plural of Moose?",
          "Whose chair is that?",
          "Who paid for that floor?",
          "What is my cat's favorite color?",
          "What is that cat's favorite color?",
          'Does the "close door" button on an elevator really work?'
        ],
        f = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (
              l(n, ["handleCatsClick", "handleClose", "pickRandomFact"]),
              (n.state = { open: !1 }),
              n
            );
          }
          return (
            i(t, e),
            a(t, [
              {
                key: "handleCatsClick",
                value: function() {
                  this.setState({ open: !0 });
                }
              },
              {
                key: "handleClose",
                value: function() {
                  this.setState({ open: !1 });
                }
              },
              {
                key: "pickRandomFact",
                value: function() {
                  var e = Math.floor(Math.random() * (p.length - 1));
                  return p[e];
                }
              },
              {
                key: "pickRandomCatImage",
                value: function() {
                  var e = Math.floor(Math.random() * (d.length - 1));
                  return d[e];
                }
              },
              {
                key: "render",
                value: function() {
                  return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "div",
                      { onClick: this.handleCatsClick },
                      s.createElement("a", null, " ", "Mystery", " ")
                    ),
                    s.createElement(
                      c,
                      {
                        useStandardSizes: !0,
                        className: "mod-cats",
                        isOpen: this.state.open,
                        onRequestClose: this.handleClose
                      },
                      s.createElement(
                        "div",
                        { className: "cats-modal-header modal-header" },
                        s.createElement(u, { title: "Hmmm... 🤔" })
                      ),
                      s.createElement(
                        "div",
                        { className: "cats-modal-content modal-content" },
                        s.createElement(
                          "p",
                          null,
                          " ",
                          this.pickRandomFact(),
                          " "
                        ),
                        s.createElement("img", {
                          src: this.pickRandomCatImage()
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      e.exports = f;
    },
    911: function(e, t, n) {
      "use strict";
      e.exports.shuffle = function(e) {
        var t = 0,
          n = 0,
          r = null;
        if (e) {
          var o = e.slice(0);
          for (t = e.length - 1; t > 0; t -= 1)
            (n = Math.floor(Math.random() * (t + 1))),
              (r = o[t]),
              (o[t] = o[n]),
              (o[n] = r);
          return o;
        }
        return e;
      };
    },
    92: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(0),
        a = n(4).FormattedMessage,
        s = n(15);
      n(123);
      var l = function(e) {
        return i.createElement(
          "div",
          { className: r(["crash-container", e.className]) },
          i.createElement("img", {
            className: "",
            src: "/images/unhandled.png"
          }),
          i.createElement(
            "div",
            { className: "crash-message" },
            i.createElement(
              "h2",
              null,
              i.createElement(a, { id: "general.error" })
            ),
            i.createElement(
              "p",
              null,
              i.createElement(a, { id: "general.unhandledError" })
            ),
            e.eventId &&
              i.createElement(
                "p",
                null,
                i.createElement(a, {
                  id: "general.errorIdentifier",
                  values: { errorId: e.eventId }
                })
              ),
            i.createElement(
              s,
              { className: "", onClick: e.onBack },
              i.createElement(a, { id: "general.back" })
            )
          )
        );
      };
      (l.propTypes = {
        className: o.string,
        eventId: o.string,
        onBack: o.func
      }),
        (e.exports = l);
    },
    93: function(e, t, n) {
      "use strict";
      var r = n(4).FormattedMessage,
        o = n(4).injectIntl,
        i = n(4).intlShape,
        a = n(62).default,
        s = n(0),
        l = n(40),
        c = n(41),
        u = n(91),
        d = n(55);
      n(125);
      var p = function(e) {
        return s.createElement(
          l,
          null,
          s.createElement(
            a,
            { maxWidth: d.mobileIntermediate - 1 },
            s.createElement(
              "div",
              { className: "lists" },
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/about" },
                    s.createElement(r, { id: "general.aboutScratch" })
                  )
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
                    { href: "/contact-us/" },
                    s.createElement(r, { id: "general.contactUs" })
                  )
                ),
                s.createElement("dd", null, s.createElement(u, null))
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/terms_of_use" },
                    s.createElement(r, { id: "general.termsOfUse" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/privacy_policy" },
                    s.createElement(r, { id: "general.privacyPolicy" })
                  )
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
            { minWidth: d.mobileIntermediate },
            s.createElement(
              "div",
              { className: "lists" },
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dt",
                  null,
                  s.createElement(r, { id: "general.about" })
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/about" },
                    s.createElement(r, { id: "general.aboutScratch" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/parents/" },
                    s.createElement(r, { id: "general.forParents" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/educators" },
                    s.createElement(r, { id: "general.forEducators" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/developers" },
                    s.createElement(r, { id: "general.forDevelopers" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/credits" },
                    s.createElement(r, { id: "general.credits" })
                  )
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
                ),
                s.createElement("dd", null, s.createElement(u, null))
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dt",
                  null,
                  s.createElement(r, { id: "general.community" })
                ),
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
                  s.createElement(
                    "a",
                    { href: "/discuss/" },
                    s.createElement(r, { id: "footer.discuss" })
                  )
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
                  s.createElement(
                    "a",
                    { href: "/statistics/" },
                    s.createElement(r, { id: "general.statistics" })
                  )
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dt",
                  null,
                  s.createElement(r, { id: "general.support" })
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/ideas" },
                    s.createElement(r, { id: "general.ideas" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/info/faq" },
                    s.createElement(r, { id: "general.faq" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/download" },
                    s.createElement(r, { id: "general.download" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/contact-us/" },
                    s.createElement(r, { id: "general.contactUs" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/store" },
                    s.createElement(r, { id: "general.scratchStore" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    {
                      href: "https://secure.donationpay.org/scratchfoundation/"
                    },
                    s.createElement(r, { id: "general.donate" })
                  )
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dt",
                  null,
                  s.createElement(r, { id: "general.legal" })
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/terms_of_use" },
                    s.createElement(r, { id: "general.termsOfUse" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/privacy_policy" },
                    s.createElement(r, { id: "general.privacyPolicy" })
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/DMCA" },
                    s.createElement(r, { id: "general.dmca" })
                  )
                )
              ),
              s.createElement(
                "dl",
                null,
                s.createElement(
                  "dt",
                  null,
                  s.createElement(r, { id: "footer.scratchFamily" })
                ),
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
                  s.createElement(
                    "a",
                    { href: "http://day.scratch.mit.edu/" },
                    "Scratch Day"
                  )
                ),
                s.createElement(
                  "dd",
                  null,
                  s.createElement(
                    "a",
                    { href: "/conference" },
                    s.createElement(r, { id: "general.scratchConference" })
                  )
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
          s.createElement(c, { locale: e.intl.locale })
        );
      };
      (p.propTypes = { intl: i.isRequired }), (e.exports = o(p));
    },
    94: function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(0),
        i = n(14).connect,
        a = n(16),
        s = n(31),
        l = n(68);
      n(34);
      var c = function(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = e.onLogIn;
        return o.createElement(
          s,
          {
            className: "with-arrow",
            isOpen: t,
            key: "login-dropdown",
            onRequestClose: n
          },
          o.createElement(l, { onLogIn: r })
        );
      };
      c.propTypes = { isOpen: r.bool, onClose: r.func, onLogIn: r.func };
      var u = function(e) {
          return { isOpen: e.navigation && e.navigation.loginOpen };
        },
        d = function(e) {
          return {
            onClose: function() {
              e(a.setLoginOpen(!1));
            },
            onLogIn: function(t, n) {
              e(a.handleLogIn(t, n));
            }
          };
        };
      e.exports = i(u, d)(c);
    },
    95: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(4).FormattedMessage,
        c = n(1),
        u = n(0),
        d = n(23),
        p = n(26),
        f = n(15),
        h = n(51),
        m = n(12);
      n(126);
      var g = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return s(n, ["handleSubmit"]), (n.state = { waiting: !1 }), n;
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "handleSubmit",
              value: function(e) {
                var t = this;
                this.setState({ waiting: !0 }),
                  this.props.onLogIn(e, function() {
                    t.setState({ waiting: !1 });
                  });
              }
            },
            {
              key: "render",
              value: function() {
                var e = void 0;
                return (
                  this.props.error &&
                    (e = u.createElement(
                      "div",
                      { className: "error" },
                      this.props.error
                    )),
                  u.createElement(
                    "div",
                    { className: "login" },
                    u.createElement(
                      d,
                      { onSubmit: this.handleSubmit },
                      u.createElement(
                        "label",
                        { htmlFor: "username", key: "usernameLabel" },
                        u.createElement(l, { id: "general.username" })
                      ),
                      u.createElement(p, {
                        required: !0,
                        key: "usernameInput",
                        maxLength: "30",
                        name: "username",
                        type: "text"
                      }),
                      u.createElement(
                        "label",
                        { htmlFor: "password", key: "passwordLabel" },
                        u.createElement(l, { id: "general.password" })
                      ),
                      u.createElement(p, {
                        required: !0,
                        key: "passwordInput",
                        name: "password",
                        type: "password"
                      }),
                      u.createElement(
                        m,
                        { className: "submit-row" },
                        this.state.waiting
                          ? [
                              u.createElement(
                                f,
                                {
                                  className: "submit-button white",
                                  disabled: "disabled",
                                  key: "submitButton",
                                  type: "submit"
                                },
                                u.createElement(h, {
                                  className: "spinner",
                                  color: "blue"
                                })
                              )
                            ]
                          : [
                              u.createElement(
                                f,
                                {
                                  className: "submit-button white",
                                  key: "submitButton",
                                  type: "submit"
                                },
                                u.createElement(l, { id: "general.signIn" })
                              )
                            ],
                        u.createElement(
                          "a",
                          {
                            href: "/accounts/password_reset/",
                            key: "passwordResetLink"
                          },
                          u.createElement(l, { id: "login.needHelp" })
                        )
                      ),
                      e
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(u.Component);
      (g.propTypes = { error: c.string, onLogIn: c.func }), (e.exports = g);
    },
    96: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(4).injectIntl,
        a = n(1),
        s = n(0),
        l = n(54),
        c = n(31);
      n(130);
      var u = function(e) {
        var t = e.classroomId,
          n = e.isEducator,
          i = e.isOpen,
          a = e.isStudent,
          u = e.profileUrl,
          d = e.thumbnailUrl,
          p = e.username,
          f = e.onClick,
          h = e.onClickLogout,
          m = e.onClose;
        return s.createElement(
          "div",
          { className: "account-nav" },
          s.createElement(
            "a",
            {
              className: r([
                "ignore-react-onclickoutside",
                "user-info",
                { open: i }
              ]),
              href: "#",
              onClick: f
            },
            s.createElement(l, { alt: "", src: d }),
            s.createElement("span", { className: "profile-name" }, p)
          ),
          s.createElement(
            c,
            { as: "ul", className: "production", isOpen: i, onRequestClose: m },
            s.createElement(
              "li",
              null,
              s.createElement(
                "a",
                { href: u },
                s.createElement(o, { id: "general.profile" })
              )
            ),
            s.createElement(
              "li",
              null,
              s.createElement(
                "a",
                { href: "/mystuff/" },
                s.createElement(o, { id: "general.myStuff" })
              )
            ),
            n
              ? [
                  s.createElement(
                    "li",
                    { key: "my-classes-li" },
                    s.createElement(
                      "a",
                      { href: "/educators/classes/" },
                      s.createElement(o, { id: "general.myClasses" })
                    )
                  )
                ]
              : [],
            a
              ? [
                  s.createElement(
                    "li",
                    { key: "my-class-li" },
                    s.createElement(
                      "a",
                      { href: "/classes/" + t + "/" },
                      s.createElement(o, { id: "general.myClass" })
                    )
                  )
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
              s.createElement(
                "a",
                { href: "#", onClick: h },
                s.createElement(o, { id: "navigation.signOut" })
              )
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
        username: a.string
      }),
        (e.exports = i(u));
    },
    97: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(5),
        c = n(14).connect,
        u = n(4).FormattedMessage,
        d = n(4).injectIntl,
        p = n(4).intlShape,
        f = n(1),
        h = n(0),
        m = n(146),
        g = n(16),
        A = n(140),
        v = n(15),
        y = n(23),
        b = n(26),
        w = n(94),
        x = n(67),
        E = n(42),
        k = n(70),
        C = n(96);
      n(131);
      var S = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            s(n, ["getProfileUrl", "handleSearchSubmit"]),
            (n.state = { messageCountIntervalId: -1 }),
            n
          );
        }
        return (
          i(t, e),
          a(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this;
                if (this.props.user) {
                  var t = setInterval(function() {
                    e.props.getMessageCount(e.props.user.username);
                  }, 12e4);
                  this.setState({ messageCountIntervalId: t });
                }
              }
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                var t = this;
                if (e.user !== this.props.user)
                  if ((this.props.handleCloseAccountNav(), this.props.user)) {
                    var n = setInterval(function() {
                      t.props.getMessageCount(t.props.user.username);
                    }, 12e4);
                    this.setState({ messageCountIntervalId: n });
                  } else
                    clearInterval(this.state.messageCountIntervalId),
                      this.props.setMessageCount(0),
                      this.setState({ messageCountIntervalId: -1 });
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                -1 !== this.state.messageCountIntervalId &&
                  (clearInterval(this.state.messageCountIntervalId),
                  this.props.setMessageCount(0),
                  this.setState({ messageCountIntervalId: -1 }));
              }
            },
            {
              key: "getProfileUrl",
              value: function() {
                if (this.props.user)
                  return "/users/" + this.props.user.username + "/";
              }
            },
            {
              key: "handleSearchSubmit",
              value: function(e) {
                var t = "/search/projects";
                e.q && (t += "?q=" + encodeURIComponent(e.q)),
                  (window.location.href = t);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.user
                  ? "/projects/editor/"
                  : "/projects/editor/?tutorial=getStarted";
                return h.createElement(
                  E,
                  { className: l({ "logged-in": this.props.user }) },
                  h.createElement(
                    "ul",
                    null,
                    h.createElement(
                      "li",
                      { className: "logo" },
                      h.createElement("a", {
                        "aria-label": "Scratch",
                        href: "/"
                      })
                    ),
                    h.createElement(
                      "li",
                      { className: "link create" },
                      h.createElement(
                        "a",
                        { href: e },
                        h.createElement(u, { id: "general.create" })
                      )
                    ),
                    h.createElement(
                      "li",
                      { className: "link explore" },
                      h.createElement(
                        "a",
                        { href: "/explore/projects/all" },
                        h.createElement(u, { id: "general.explore" })
                      )
                    ),
                    h.createElement(
                      "li",
                      { className: "link ideas" },
                      h.createElement(
                        "a",
                        { href: "/ideas" },
                        h.createElement(u, { id: "general.ideas" })
                      )
                    ),
                    h.createElement(
                      "li",
                      { className: "link about" },
                      h.createElement(
                        "a",
                        { href: "/about" },
                        h.createElement(u, { id: "general.about" })
                      )
                    ),
                    h.createElement(
                      "li",
                      { className: "search" },
                      h.createElement(
                        y,
                        { onSubmit: this.handleSearchSubmit },
                        h.createElement(v, {
                          className: "btn-search",
                          type: "submit"
                        }),
                        h.createElement(b, {
                          "aria-label": this.props.intl.formatMessage({
                            id: "general.search"
                          }),
                          name: "q",
                          placeholder: this.props.intl.formatMessage({
                            id: "general.search"
                          }),
                          type: "text",
                          value: this.props.searchTerm
                        })
                      )
                    ),
                    this.props.session.status === A.Status.FETCHED
                      ? this.props.user
                        ? [
                            h.createElement(
                              "li",
                              {
                                className: "link right messages",
                                key: "messages"
                              },
                              h.createElement(
                                "a",
                                {
                                  href: "/messages/",
                                  title: this.props.intl.formatMessage({
                                    id: "general.messages"
                                  })
                                },
                                h.createElement(
                                  "span",
                                  {
                                    className: l({
                                      "message-count": !0,
                                      show: this.props.unreadMessageCount > 0
                                    })
                                  },
                                  this.props.unreadMessageCount,
                                  " "
                                ),
                                h.createElement(u, { id: "general.messages" })
                              )
                            ),
                            h.createElement(
                              "li",
                              {
                                className: "link right mystuff",
                                key: "mystuff"
                              },
                              h.createElement(
                                "a",
                                {
                                  href: "/mystuff/",
                                  title: this.props.intl.formatMessage({
                                    id: "general.myStuff"
                                  })
                                },
                                h.createElement(u, { id: "general.myStuff" })
                              )
                            ),
                            h.createElement(
                              "li",
                              {
                                className: "link right account-nav",
                                key: "account-nav"
                              },
                              h.createElement(C, {
                                classroomId: this.props.user.classroomId,
                                isEducator: this.props.permissions.educator,
                                isOpen: this.props.accountNavOpen,
                                isStudent: this.props.permissions.student,
                                profileUrl: this.getProfileUrl(),
                                thumbnailUrl: this.props.user.thumbnailUrl,
                                username: this.props.user.username,
                                onClick: this.props.handleToggleAccountNav,
                                onClickLogout: this.props.handleLogOut,
                                onClose: this.props.handleCloseAccountNav
                              })
                            )
                          ]
                        : [
                            h.createElement(
                              "li",
                              { className: "link right join", key: "join" },
                              h.createElement(
                                "a",
                                {
                                  className: "registrationLink",
                                  href: "#",
                                  onClick: this.props.handleClickRegistration
                                },
                                h.createElement(u, {
                                  id: "general.joinScratch"
                                })
                              )
                            ),
                            h.createElement(
                              "li",
                              {
                                className: "link right login-item",
                                key: "login"
                              },
                              h.createElement(
                                "a",
                                {
                                  className: "ignore-react-onclickoutside",
                                  href: "#",
                                  key: "login-link",
                                  onClick: this.props.handleToggleLoginOpen
                                },
                                h.createElement(u, { id: "general.signIn" })
                              ),
                              h.createElement(w, { key: "login-dropdown" })
                            )
                          ]
                      : [],
                    this.props.registrationOpen &&
                      !this.props.useScratch3Registration &&
                      h.createElement(k, { key: "registration" })
                  ),
                  h.createElement(x, null)
                );
              }
            }
          ]),
          t
        );
      })(h.Component);
      (S.propTypes = {
        accountNavOpen: f.bool,
        getMessageCount: f.func,
        handleClickRegistration: f.func,
        handleCloseAccountNav: f.func,
        handleLogOut: f.func,
        handleToggleAccountNav: f.func,
        handleToggleLoginOpen: f.func,
        intl: p,
        permissions: f.shape({
          admin: f.bool,
          social: f.bool,
          educator: f.bool,
          educator_invitee: f.bool,
          student: f.bool
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
          username: f.string
        })
      }),
        (S.defaultProps = {
          session: {},
          unreadMessageCount: 0,
          searchTerm: ""
        });
      var _ = function(e) {
          return {
            accountNavOpen: e.navigation && e.navigation.accountNavOpen,
            session: e.session,
            permissions: e.permissions,
            registrationOpen: e.navigation.registrationOpen,
            searchTerm: e.navigation.searchTerm,
            unreadMessageCount: e.messageCount.messageCount,
            user: e.session && e.session.session && e.session.session.user,
            useScratch3Registration: e.navigation.useScratch3Registration
          };
        },
        O = function(e) {
          return {
            getMessageCount: function(t) {
              e(m.getCount(t));
            },
            handleToggleAccountNav: function(t) {
              t.preventDefault(), e(g.handleToggleAccountNav());
            },
            handleCloseAccountNav: function() {
              e(g.setAccountNavOpen(!1));
            },
            handleClickRegistration: function(t) {
              t.preventDefault(), e(g.handleRegistrationRequested());
            },
            handleLogOut: function(t) {
              t.preventDefault(), e(g.handleLogOut());
            },
            handleToggleLoginOpen: function(t) {
              t.preventDefault(), e(g.toggleLoginOpen());
            },
            setMessageCount: function(t) {
              e(m.setCount(t));
            }
          };
        },
        I = function(e, t, n) {
          return Object.assign({}, e, t, n);
        },
        M = c(_, O, I)(S);
      e.exports = d(M);
    },
    976: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-become-curator", e.className),
              datetime: e.datetimePromoted
            },
            a.createElement(o, {
              id: "messages.becomeCuratorText",
              values: {
                username: a.createElement(
                  "a",
                  { href: "/users/" + e.actorUsername + "/" },
                  e.actorUsername
                ),
                studio: a.createElement(
                  "a",
                  { href: "/studios/" + e.studioId + "/" },
                  e.studioTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        actorUsername: i.string.isRequired,
        className: i.string,
        datetimePromoted: i.string.isRequired,
        studioId: i.number.isRequired,
        studioTitle: i.string.isRequired
      }),
        (e.exports = l);
    },
    977: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-become-manager", e.className),
              datetime: e.datetimePromoted
            },
            a.createElement(o, {
              id: "messages.becomeManagerText",
              values: {
                username: a.createElement(
                  "a",
                  { href: "/users/" + e.recipientUsername + "/" },
                  e.recipientUsername
                ),
                studio: a.createElement(
                  "a",
                  { href: "/studios/" + e.studioId + "/" },
                  e.studioTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        className: i.string,
        datetimePromoted: i.string.isRequired,
        recipientUsername: i.string.isRequired,
        studioId: i.number.isRequired,
        studioTitle: i.string.isRequired
      }),
        (e.exports = l);
    },
    978: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-love-favorite", e.className),
              datetime: e.favoriteDateTime
            },
            a.createElement(o, {
              id: "messages.favoriteText",
              values: {
                profileLink: a.createElement(
                  "a",
                  { href: "/users/" + e.actorUsername },
                  e.actorUsername
                ),
                projectLink: a.createElement(
                  "a",
                  { href: "/projects/" + e.projectId },
                  e.projectTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        actorUsername: i.string.isRequired,
        className: i.string,
        favoriteDateTime: i.string.isRequired,
        projectId: i.number.isRequired,
        projectTitle: i.string.isRequired
      }),
        (e.exports = l);
    },
    979: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          var t = "",
            n = "";
          return (
            void 0 === e.followeeTitle
              ? ((t = "/users/" + e.followeeId), (n = e.followeeId))
              : ((t = "/studios/" + e.followeeId), (n = e.followeeTitle)),
            a.createElement(
              s,
              {
                as: "div",
                className: r("mod-follow-user", e.className),
                datetime: e.followDateTime
              },
              a.createElement(o, {
                id: "messages.followText",
                values: {
                  profileLink: a.createElement(
                    "a",
                    { href: "/users/" + e.followerUsername + "/" },
                    e.followerUsername
                  ),
                  followeeLink: a.createElement("a", { href: t }, n)
                }
              })
            )
          );
        };
      (l.propTypes = {
        className: i.string,
        followDateTime: i.string.isRequired,
        followeeId: i.string.isRequired,
        followeeTitle: i.string,
        followerUsername: i.string.isRequired
      }),
        (e.exports = l);
    },
    98: function(e, t, n) {
      "use strict";
      var r = n(4).FormattedMessage,
        o = n(4).injectIntl,
        i = n(0);
      n(132);
      var a = function() {
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
                )
              }
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
                donor3: "Siegel Family Endowment"
              }
            })
          )
        );
      };
      e.exports = o(a);
    },
    980: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-love-project", e.className),
              datetime: e.loveDateTime
            },
            a.createElement(o, {
              id: "messages.loveText",
              values: {
                profileLink: a.createElement(
                  "a",
                  { href: "/users/" + e.actorUsername },
                  e.actorUsername
                ),
                projectLink: a.createElement(
                  "a",
                  { href: "/projects/" + e.projectId },
                  e.projectTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        actorUsername: i.string.isRequired,
        className: i.string,
        loveDateTime: i.string.isRequired,
        projectId: i.number.isRequired,
        projectTitle: i.string.isRequired
      }),
        (e.exports = l);
    },
    981: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-remix-project", e.className),
              datetime: e.remixDate
            },
            a.createElement(o, {
              id: "messages.remixText",
              values: {
                profileLink: a.createElement(
                  "a",
                  { href: "/users/" + e.actorUsername },
                  e.actorUsername
                ),
                projectLink: a.createElement(
                  "a",
                  { href: "/projects/" + e.projectId },
                  e.projectTitle
                ),
                remixedProjectLink: a.createElement(
                  "a",
                  { href: "/projects/" + e.parentId },
                  e.parentTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        actorUsername: i.string.isRequired,
        className: i.string,
        parentId: i.number.isRequired,
        parentTitle: i.string.isRequired,
        projectId: i.number.isRequired,
        projectTitle: i.string.isRequired,
        remixDate: i.string.isRequired
      }),
        (e.exports = l);
    },
    982: function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(4).FormattedMessage,
        i = n(1),
        a = n(0),
        s = n(176),
        l = function(e) {
          return a.createElement(
            s,
            {
              as: "div",
              className: r("mod-love-project", e.className),
              datetime: e.loveDateTime
            },
            a.createElement(o, {
              id: "messages.shareText",
              values: {
                profileLink: a.createElement(
                  "a",
                  { href: "/users/" + e.actorUsername },
                  e.actorUsername
                ),
                projectLink: a.createElement(
                  "a",
                  { href: "/projects/" + e.projectId },
                  e.projectTitle
                )
              }
            })
          );
        };
      (l.propTypes = {
        actorUsername: i.string.isRequired,
        className: i.string,
        loveDateTime: i.string.isRequired,
        projectId: i.number.isRequired,
        projectTitle: i.string.isRequired
      }),
        (e.exports = l);
    },
    983: function(e, t, n) {
      "use strict";
      var r = n(4).FormattedMessage,
        o = n(4).injectIntl,
        i = n(0),
        a = n(62).default,
        s = n(55),
        l = n(12),
        c = n(24);
      n(818);
      var u = function() {
        return i.createElement(
          c,
          { className: "hoc-banner mod-middle-banner" },
          i.createElement(
            l,
            { className: "hoc-container column" },
            i.createElement(
              l,
              { className: "hoc-title-container" },
              i.createElement(
                "h1",
                { className: "hoc-header" },
                i.createElement(r, { id: "hocbanner.title" })
              ),
              i.createElement(
                "a",
                {
                  className: "hoc-more-activities button",
                  href: "/projects/editor?tutorial=all"
                },
                i.createElement("img", { src: "/svgs/tutorials.svg" }),
                i.createElement(r, { id: "hocbanner.moreActivities" })
              )
            ),
            i.createElement(
              l,
              { className: "hoc-banner-images" },
              i.createElement(
                "a",
                { href: "/projects/editor?tutorial=imagine" },
                i.createElement(
                  l,
                  { className: "hoc-banner-image mod-middle-image column" },
                  i.createElement("img", { src: "/images/hoc/imagine.jpg" }),
                  i.createElement(
                    "div",
                    { className: "hoc-image-text" },
                    i.createElement(r, { id: "hocbanner.imagine" })
                  )
                )
              ),
              i.createElement(
                "a",
                { href: "/projects/331474033/editor?tutorial=code-cartoon" },
                i.createElement(
                  l,
                  { className: "hoc-banner-image mod-middle-image column" },
                  i.createElement("img", {
                    src: "/images/hoc/code-a-cartoon.jpg"
                  }),
                  i.createElement(
                    "div",
                    { className: "hoc-image-text" },
                    i.createElement(r, { id: "hocbanner.codeACartoon" })
                  )
                )
              ),
              i.createElement(
                a,
                { key: "frameless-desktop", minWidth: s.desktop },
                i.createElement(
                  "a",
                  { href: "/projects/editor?tutorial=talking" },
                  i.createElement(
                    l,
                    { className: "hoc-banner-image mod-middle-image column" },
                    i.createElement("img", { src: "/images/hoc/talking.png" }),
                    i.createElement(
                      "div",
                      { className: "hoc-image-text" },
                      i.createElement(r, { id: "hocbanner.talking" })
                    )
                  )
                )
              )
            )
          )
        );
      };
      e.exports = o(u);
    },
    984: function(e, t, n) {
      "use strict";
      var r = n(4).FormattedMessage,
        o = n(4).injectIntl,
        i = n(0),
        a = n(62).default,
        s = n(55),
        l = n(12),
        c = n(24);
      n(818);
      var u = function() {
        return i.createElement(
          c,
          { className: "hoc-banner" },
          i.createElement(
            l,
            { className: "hoc-container column" },
            i.createElement(
              l,
              { className: "hoc-title-container" },
              i.createElement(
                "h1",
                { className: "hoc-header" },
                i.createElement(r, { id: "hocbanner.title" })
              ),
              i.createElement(
                "a",
                {
                  className: "hoc-more-activities button",
                  href: "/projects/editor?tutorial=all"
                },
                i.createElement("img", { src: "/svgs/tutorials.svg" }),
                i.createElement(r, { id: "hocbanner.moreActivities" })
              )
            ),
            i.createElement(
              l,
              { className: "hoc-banner-images" },
              i.createElement(
                a,
                { key: "frameless-desktop", minWidth: s.desktop },
                i.createElement(
                  "a",
                  { href: "/projects/editor?tutorial=imagine" },
                  i.createElement(
                    l,
                    { className: "hoc-banner-image column" },
                    i.createElement("img", { src: "/images/hoc/imagine.jpg" }),
                    i.createElement(
                      "div",
                      { className: "hoc-image-text" },
                      i.createElement(r, { id: "hocbanner.imagine" })
                    )
                  )
                )
              ),
              i.createElement(
                "a",
                { href: "/projects/331474033/editor?tutorial=code-cartoon" },
                i.createElement(
                  l,
                  { className: "hoc-banner-image column" },
                  i.createElement("img", {
                    src: "/images/hoc/code-a-cartoon.jpg"
                  }),
                  i.createElement(
                    "div",
                    { className: "hoc-image-text" },
                    i.createElement(r, { id: "hocbanner.codeACartoon" })
                  )
                )
              ),
              i.createElement(
                "a",
                { href: "/projects/editor?tutorial=talking" },
                i.createElement(
                  l,
                  { className: "hoc-banner-image column" },
                  i.createElement("img", { src: "/images/hoc/talking.png" }),
                  i.createElement(
                    "div",
                    { className: "hoc-image-text" },
                    i.createElement(r, { id: "hocbanner.talking" })
                  )
                )
              )
            )
          )
        );
      };
      e.exports = o(u);
    },
    985: function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(8),
        l = n(14).connect,
        c = n(1),
        u = n(0),
        d = n(148),
        p = n(144),
        f = n(36),
        h = n(140),
        m = n(832),
        g = n(27),
        A = n(836),
        v = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (
              s(n, [
                "getNews",
                "handleRefreshHomepageCache",
                "getHomepageRefreshStatus",
                "handleShowEmailConfirmationModal",
                "handleHideEmailConfirmationModal",
                "handleCloseAdminPanel",
                "handleOpenAdminPanel",
                "handleDismiss",
                "shouldShowWelcome",
                "shouldShowEmailConfirmation"
              ]),
              (n.state = {
                adminPanelOpen: !1,
                news: [],
                emailConfirmationModalOpen: !1,
                refreshCacheStatus: "notrequested"
              }),
              n
            );
          }
          return (
            i(t, e),
            a(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.getFeaturedGlobal(),
                    this.props.user.username &&
                      (this.props.getActivity(
                        this.props.user.username,
                        this.props.user.token
                      ),
                      this.props.getSharedByFollowing(
                        this.props.user.username,
                        this.props.user.token
                      ),
                      this.props.getInStudiosFollowing(
                        this.props.user.username,
                        this.props.user.token
                      ),
                      this.props.getLovedByFollowing(
                        this.props.user.username,
                        this.props.user.token
                      ),
                      this.getNews());
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.user.username !== e.user.username &&
                    (this.props.user.username
                      ? (this.props.getActivity(
                          this.props.user.username,
                          this.props.user.token
                        ),
                        this.props.getSharedByFollowing(
                          this.props.user.username,
                          this.props.user.token
                        ),
                        this.props.getInStudiosFollowing(
                          this.props.user.username,
                          this.props.user.token
                        ),
                        this.props.getLovedByFollowing(
                          this.props.user.username,
                          this.props.user.token
                        ),
                        this.getNews())
                      : (this.props.setRows("shared", []),
                        this.props.setRows("loved", []),
                        this.props.setRows("studios", []),
                        this.props.setRows("activity", []),
                        this.setState({ news: [] })),
                    this.shouldShowEmailConfirmation()
                      ? window.addEventListener("message", this.onMessage)
                      : window.removeEventListener("message", this.onMessage));
                }
              },
              {
                key: "getNews",
                value: function() {
                  var e = this;
                  d({ uri: "/news?limit=3" }, function(t, n, r) {
                    return 200 !== r.statusCode
                      ? p.error(
                          "Unexpected status code " +
                            r.statusCode +
                            " received from news request"
                        )
                      : n
                      ? t
                        ? void 0
                        : e.setState({ news: n })
                      : p.error("No response body");
                  });
                }
              },
              {
                key: "handleRefreshHomepageCache",
                value: function() {
                  var e = this;
                  d(
                    {
                      host: "",
                      uri: "/scratch_admin/homepage/clear-cache/",
                      method: "post",
                      useCsrf: !0
                    },
                    function(t, n) {
                      return t
                        ? e.setState({ refreshCacheStatus: "fail" })
                        : n
                        ? n.success
                          ? e.setState({ refreshCacheStatus: "pass" })
                          : e.setState({ refreshCacheStatus: "inprogress" })
                        : p.error("No response body");
                    }
                  );
                }
              },
              {
                key: "getHomepageRefreshStatus",
                value: function() {
                  var e = {
                    status: this.state.refreshCacheStatus,
                    disabled: !1,
                    content: "Refresh"
                  };
                  return (
                    "inprogress" === this.state.refreshCacheStatus
                      ? ((e.disabled = !0), (e.content = "In Progress"))
                      : "pass" === this.state.refreshCacheStatus
                      ? ((e.disabled = !0), (e.content = "Requested"))
                      : "fail" === this.state.refreshCacheStatus &&
                        ((e.disabled = !1), (e.content = "Error")),
                    e
                  );
                }
              },
              {
                key: "handleCloseAdminPanel",
                value: function() {
                  this.setState({ adminPanelOpen: !1 });
                }
              },
              {
                key: "handleOpenAdminPanel",
                value: function() {
                  this.setState({ adminPanelOpen: !0 });
                }
              },
              {
                key: "handleShowEmailConfirmationModal",
                value: function() {
                  this.setState({ emailConfirmationModalOpen: !0 });
                }
              },
              {
                key: "handleHideEmailConfirmationModal",
                value: function() {
                  this.setState({ emailConfirmationModalOpen: !1 });
                }
              },
              {
                key: "handleDismiss",
                value: function(e) {
                  var t = this;
                  d(
                    {
                      host: "",
                      uri: "/site-api/users/set-template-cue/",
                      method: "post",
                      useCsrf: !0,
                      json: { cue: e, value: !1 }
                    },
                    function(e) {
                      e || t.props.refreshSession();
                    }
                  );
                }
              },
              {
                key: "shouldShowWelcome",
                value: function() {
                  return (
                    !(!this.props.user || !this.props.flags.show_welcome) &&
                    new Date(this.props.user.dateJoined) >
                      new Date(new Date() - 12096e5)
                  );
                }
              },
              {
                key: "shouldShowEmailConfirmation",
                value: function() {
                  return (
                    this.props.user &&
                    this.props.flags.has_outstanding_email_confirmation &&
                    this.props.flags.confirm_email_banner
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.shouldShowEmailConfirmation() || !1,
                    t = this.shouldShowWelcome(),
                    n = this.getHomepageRefreshStatus();
                  return u.createElement(A, {
                    activity: this.props.activity,
                    adminPanelOpen: this.state.adminPanelOpen,
                    emailConfirmationModalOpen: this.state
                      .emailConfirmationModalOpen,
                    featuredGlobal: this.props.featured,
                    inStudiosFollowing: this.props.studios,
                    isAdmin: this.props.isAdmin,
                    isEducator: this.props.isEducator,
                    lovedByFollowing: this.props.loved,
                    news: this.state.news,
                    refreshCacheStatus: n,
                    sessionStatus: this.props.sessionStatus,
                    sharedByFollowing: this.props.shared,
                    shouldShowEmailConfirmation: e,
                    shouldShowWelcome: t,
                    user: this.props.user,
                    onCloseAdminPanel: this.handleCloseAdminPanel,
                    onDismiss: this.handleDismiss,
                    onHideEmailConfirmationModal: this
                      .handleHideEmailConfirmationModal,
                    onOpenAdminPanel: this.handleOpenAdminPanel,
                    onRefreshHomepageCache: this.handleRefreshHomepageCache,
                    onShowEmailConfirmationModal: this
                      .handleShowEmailConfirmationModal
                  });
                }
              }
            ]),
            t
          );
        })(u.Component);
      (v.propTypes = {
        activity: c.arrayOf(c.object).isRequired,
        featured: c.shape({
          community_featured_projects: c.array,
          community_featured_studios: c.array,
          curator_top_projects: c.array,
          scratch_design_studio: c.array,
          community_most_remixed_projects: c.array,
          community_most_loved_projects: c.array
        }),
        flags: c.shape({
          must_reset_password: c.bool,
          must_complete_registration: c.bool,
          has_outstanding_email_confirmation: c.bool,
          show_welcome: c.bool,
          confirm_email_banner: c.bool,
          unsupported_browser_banner: c.bool
        }),
        getActivity: c.func.isRequired,
        getFeaturedGlobal: c.func.isRequired,
        getInStudiosFollowing: c.func.isRequired,
        getLovedByFollowing: c.func.isRequired,
        getSharedByFollowing: c.func.isRequired,
        isAdmin: c.bool,
        isEducator: c.bool,
        loved: c.arrayOf(c.object).isRequired,
        refreshSession: c.func.isRequired,
        sessionStatus: c.string,
        setRows: c.func.isRequired,
        shared: c.arrayOf(c.object).isRequired,
        studios: c.arrayOf(c.object).isRequired,
        user: c.shape({
          id: c.number,
          banned: c.bool,
          username: c.string,
          token: c.string,
          thumbnailUrl: c.string,
          dateJoined: c.string,
          email: c.string,
          classroomId: c.string
        })
      }),
        (v.defaultProps = {
          flags: {},
          isAdmin: !1,
          isEducator: !1,
          sessionStatus: h.Status.NOT_FETCHED,
          user: {}
        });
      var y = function(e) {
          return {
            activity: e.splash.activity.rows,
            featured: e.splash.featured.rows,
            flags: e.session.session.flags,
            isAdmin: e.permissions.admin,
            isEducator: e.permissions.educator,
            loved: e.splash.loved.rows,
            sessionStatus: e.session.status,
            shared: e.splash.shared.rows,
            studios: e.splash.studios.rows,
            user: e.session.session.user
          };
        },
        b = function(e) {
          return {
            getFeaturedGlobal: function() {
              e(m.getFeaturedGlobal());
            },
            getActivity: function(t, n) {
              e(m.getActivity(t, n));
            },
            getSharedByFollowing: function(t, n) {
              e(m.getSharedByFollowing(t, n));
            },
            getInStudiosFollowing: function(t, n) {
              e(m.getInStudiosFollowing(t, n));
            },
            getLovedByFollowing: function(t, n) {
              e(m.getLovedByFollowing(t, n));
            },
            refreshSession: function() {
              e(h.refreshSession());
            },
            setRows: function(t, n) {
              e(m.setRows(t, n));
            }
          };
        },
        w = l(y, b)(v);
      f(
        u.createElement(
          g,
          { showDonorRecognition: !0 },
          u.createElement(w, null)
        ),
        document.getElementById("app"),
        { splash: m.splashReducer }
      );
    },
    99: function(e, t, n) {
      "use strict";
      var r = n(4).injectIntl,
        o = n(1),
        i = n(0),
        a = n(12),
        s = n(24);
      n(133);
      var l = function(e) {
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
      (l.propTypes = { children: o.node }), (e.exports = r(l));
    }
  },
  [985]
);
