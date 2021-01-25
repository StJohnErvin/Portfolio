module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "46kV":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./components/Profile.js

var __jsx = external_react_default.a.createElement;



const checkUrls = obj => {
  switch (obj.name) {
    case "github":
      return `https://github.com/${obj.userName}`;

    case "twitter":
      return `https://twitter.com/${obj.userName}`;

    case "linkedin":
      return `https://www.linkedin.com/in/${obj.userName}`;

    case "medium":
      return `https://www.medium.com/${obj.userName}`;

    default:
      return null;
  }
};

/* harmony default export */ var Profile = (({
  Config: {
    GITHUB_USER_NAME,
    NAME,
    ROLE,
    EMAIL,
    TECH_STACK,
    SOCIAL_MEDIA,
    LOCATION
  }
}) => {
  return __jsx(Fade_default.a, {
    duration: 2000
  }, __jsx("div", {
    className: "jsx-2060301164" + " " + "profile"
  }, __jsx("img", {
    src: `https://avatars1.githubusercontent.com/${GITHUB_USER_NAME}`,
    className: "jsx-2060301164"
  }), __jsx("div", {
    className: "jsx-2060301164" + " " + "info"
  }, __jsx("h3", {
    className: "jsx-2060301164"
  }, NAME), __jsx("p", {
    className: "jsx-2060301164" + " " + "location"
  }, __jsx("i", {
    style: {
      padding: "0 10px 0 5px"
    },
    className: "jsx-2060301164" + " " + "fas fa-map-marker-alt"
  }), `${LOCATION.state}, ${LOCATION.country}`), __jsx("p", {
    className: "jsx-2060301164" + " " + "email"
  }, __jsx("i", {
    className: "jsx-2060301164" + " " + "fas fa-envelope space"
  }), " ", EMAIL), __jsx("p", {
    className: "jsx-2060301164"
  }, __jsx("i", {
    className: "jsx-2060301164" + " " + "fas fa-briefcase space"
  }), ROLE), __jsx("div", {
    className: "jsx-2060301164" + " " + "tech-stack"
  }, TECH_STACK.map(i => __jsx("p", {
    className: "jsx-2060301164"
  }, __jsx("span", {
    className: "jsx-2060301164" + " " + "dot"
  }), " ", i)))), __jsx("ul", {
    className: "jsx-2060301164" + " " + "social"
  }, SOCIAL_MEDIA.map(i => __jsx("li", {
    className: "jsx-2060301164"
  }, __jsx("a", {
    href: checkUrls(i),
    target: "blank",
    className: "jsx-2060301164"
  }, __jsx("i", {
    className: "jsx-2060301164" + " " + `fab fa-${i.name}`
  })))))), __jsx(style_default.a, {
    id: "2060301164"
  }, [".profile.jsx-2060301164{position:fixed;z-index:1;padding:7px;font-size:0.9rem;text-align:center;box-shadow:rgba(0,0,0,0.12) 0px 30px 60px;background:#fff;width:250px;height:auto;border-radius:10px;}", ".tech-stack.jsx-2060301164{text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".dev-badge.jsx-2060301164{height:30px;padding:10px 0 0 0;}", ".space.jsx-2060301164{padding:0 5px;}", ".location.jsx-2060301164>i.jsx-2060301164{color:#000;}", ".email.jsx-2060301164>i.jsx-2060301164{color:#000;}", ".tech-stack.jsx-2060301164>p.jsx-2060301164{margin:10px 5px;padding:5px 10px;border-radius:20px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);background:#fdfdfd;}", ".dot.jsx-2060301164{height:10px;width:10px;background-color:#342ead;border-radius:50%;display:inline-block;margin-right:10px;}", "img.jsx-2060301164{height:180px;border-radius:10px;}", ".social.jsx-2060301164{list-style:none;padding:0;margin-top:0;}", ".social.jsx-2060301164>li.jsx-2060301164{display:inline-block;margin-right:10px;background:#40bad5;padding:8px 10px;border-radius:50%;box-shadow:0 4px 14px 0 rgba(0,118,255,0.39);}", ".social.jsx-2060301164>li.jsx-2060301164>a.jsx-2060301164{color:#fff;}", ".info.jsx-2060301164{text-align:left;padding:10px;}", "@media (max-width:800px){.profile.jsx-2060301164{position:relative;z-index:0;width:100%;height:100%;padding:0;}img.jsx-2060301164{height:120px;float:left;padding:10px;}.info.jsx-2060301164{text-align:left;padding:0;margin:0;}.info.jsx-2060301164>h3.jsx-2060301164{margin-top:6px;}.social.jsx-2060301164{padding-bottom:20px;}}"]));
});
// CONCATENATED MODULE: ./public/icons/repo.js

var repo_jsx = external_react_default.a.createElement;
/* harmony default export */ var repo = (() => repo_jsx("svg", {
  className: "octicon octicon-repo mr-2 text-gray flex-shrink-0",
  viewBox: "0 0 12 16",
  version: "1.1",
  width: "12",
  height: "16",
  "aria-hidden": "true",
  style: {
    verticalAlign: "middle"
  }
}, repo_jsx("path", {
  fillRule: "evenodd",
  d: "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
})));
// CONCATENATED MODULE: ./components/Projects.js

var Projects_jsx = external_react_default.a.createElement;



/* harmony default export */ var Projects = (({
  data
}) => {
  return (// test
    Projects_jsx("div", {
      className: "jsx-4159727729" + " " + "projects"
    }, Projects_jsx("ul", {
      className: "jsx-4159727729" + " " + "project-cards"
    }, data.slice([]).map((i, index) => Projects_jsx(Fade_default.a, {
      bottom: true,
      duration: 1500,
      delay: 100 * index,
      key: i.id
    }, Projects_jsx("li", {
      className: "jsx-4159727729" + " " + "project-card"
    }, Projects_jsx("div", {
      style: {
        marginBottom: "90px"
      },
      className: "jsx-4159727729" + " " + "about"
    }, Projects_jsx("p", {
      className: "jsx-4159727729"
    }, Projects_jsx(repo, null), " ", Projects_jsx("span", {
      className: "jsx-4159727729" + " " + "project-title"
    }, i.name)), Projects_jsx("p", {
      className: "jsx-4159727729"
    }, i.description)), Projects_jsx("div", {
      style: {
        marginBottom: "20px"
      },
      className: "jsx-4159727729" + " " + "buttons"
    }, Projects_jsx("span", {
      className: "jsx-4159727729"
    }, Projects_jsx("a", {
      href: i.html_url,
      target: "_blank",
      className: "jsx-4159727729" + " " + "btn"
    }, "Repo")), Projects_jsx("span", {
      className: "jsx-4159727729"
    }, Projects_jsx("a", {
      href: i.homepage,
      target: "_blank",
      className: "jsx-4159727729" + " " + "btn"
    }, "Demo"))))))), Projects_jsx(style_default.a, {
      id: "4159727729"
    }, [".projects.jsx-4159727729{margin-left:250px;}", ".project-cards.jsx-4159727729{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:20px;grid-column-gap:15px;list-style:none;position:relative;margin-top:2px;}", ".project-card.jsx-4159727729{position:relative;z-index:0;border-radius:10px;font-size:1rem;padding:10px 20px;box-shadow:0 0px 15px -3px rgba(0,0,0,0.1), 0 0px 6px -2px rgba(0,0,0,0.05);width:21vw;word-wrap:break-word;background:#fff;cursor:context-menu;-webkit-transition:all 0.6s;transition:all 0.6s;}", ".project-card.jsx-4159727729:hover{-webkit-transform:scale(1.09) !important;-ms-transform:scale(1.09) !important;transform:scale(1.09) !important;box-shadow:rgba(0,0,0,0.12) 0px 30px 60px;z-index:1;}", ".project-title.jsx-4159727729{margin-left:10px;font-weight:600;font-size:1.1rem;}", ".project-card.jsx-4159727729>p.jsx-4159727729:last-child{position:absolute;bottom:10px;}", ".buttons.jsx-4159727729{position:absolute;bottom:10px;left:0;width:100%;}", ".buttons.jsx-4159727729>span.jsx-4159727729{text-align:center;display:inline-block;width:50%;}", ".buttons.jsx-4159727729>span.jsx-4159727729>.btn.jsx-4159727729{-webkit-text-decoration:none;text-decoration:none;color:#fff;background:#40bad5;border-radius:20px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);padding:5px 20px;}", ".project-card.jsx-4159727729>p.jsx-4159727729:last-child>span.jsx-4159727729{margin:10px;padding:5px 12px;border-radius:20px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);}", ".dot.jsx-4159727729{height:10px;width:10px;background-color:#0070f399;border-radius:50%;display:inline-block;}", "@media (max-width:1265px){.project-card.jsx-4159727729>p.jsx-4159727729:last-child>span.jsx-4159727729{margin:0;padding:5px 5px;}}", "@media (max-width:800px){.projects.jsx-4159727729{margin-left:0;}.project-cards.jsx-4159727729{grid-template-columns:repeat(2,1fr);grid-column-gap:10px;margin-top:50px;padding:0;}.project-card.jsx-4159727729{width:100%;padding:0;}.about.jsx-4159727729{padding-left:20px;}.project-card.jsx-4159727729>p.jsx-4159727729:last-child{width:100%;text-align:center;}.project-card.jsx-4159727729>p.jsx-4159727729:last-child>span.jsx-4159727729{margin:0;margin-right:10px;}}", "@media (max-width:580px){.project-card.jsx-4159727729>p.jsx-4159727729:last-child>span.jsx-4159727729{margin:0;}}", "@media (max-width:480px){.project-cards.jsx-4159727729{grid-template-columns:repeat(1,1fr);grid-column-gap:0px;}.project-card.jsx-4159727729>p.jsx-4159727729:last-child>span.jsx-4159727729{margin:10px;}}"]))
  );
});
// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__("46kV");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js


var Meta_jsx = external_react_default.a.createElement;

/* harmony default export */ var Meta = (() => Meta_jsx("div", {
  className: "jsx-3567894086"
}, Meta_jsx(head_default.a, null, Meta_jsx("meta", {
  charSet: "UTF-8",
  className: "jsx-3567894086"
}), Meta_jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  key: "viewport",
  className: "jsx-3567894086"
}), Meta_jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "ie=edge",
  className: "jsx-3567894086"
}), Meta_jsx("link", {
  rel: "shortcut icon",
  href: "/favicon.ico",
  className: "jsx-3567894086"
}), Meta_jsx("title", {
  className: "jsx-3567894086"
}, " StJohnErvin"), Meta_jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Noto+Sans:400,600,700&display=swap",
  rel: "stylesheet",
  className: "jsx-3567894086"
}), Meta_jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
  className: "jsx-3567894086"
})), Meta_jsx(style_default.a, {
  id: "3567894086"
}, ["body{background:#00000002;background-position:0 0,25px 25px;background-size:50px 50px;margin:0;font-family:\"Noto Sans\";}"])));
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;









const Home = ({
  data
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const override = core_["css"]`
    margin: auto;
    margin-top: 20%;
  `;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Meta, null), isLoading ? pages_jsx("div", {
    style: {
      height: "640px"
    }
  }, pages_jsx(external_react_spinners_["GridLoader"], {
    css: override,
    size: 38
  })) : pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    style: {
      overflow: "hidden"
    },
    className: "jsx-1055232609" + " " + "container"
  }, pages_jsx(Profile, {
    Config: config_default.a
  }), pages_jsx(Projects, {
    data: data
  })), pages_jsx(style_default.a, {
    id: "1055232609"
  }, [".container.jsx-1055232609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:20px;overflow-x:hidden;}", "@media (max-width:800px){.container.jsx-1055232609{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"])));
}; // Home.getInitialProps = async () => {


async function getServerSideProps() {
  const res = await external_isomorphic_unfetch_default()(`https://api.github.com/users/${config_default.a.GITHUB_USER_NAME}/repos?`);
  const data = await res.json();
  const filtered = data.filter(i => !i.fork && i.description != null);
  return {
    props: {
      data: filtered
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rOcY":
/***/ (function(module, exports) {

module.exports = {
  GITHUB_USER_NAME: "StJohnErvin",
  NAME: "John Ervin Ceriola",
  ROLE: "Full Stack Developer",
  EMAIL: "johnervin.ceriola@outlook.com",
  LOCATION: {
    state: "Manila",
    country: "Philippines"
  },
  TECH_STACK: ["Javascript", "NextJs", "MERN Stack", "Firebase", "GraphQL", "AWS"],
  SOCIAL_MEDIA: [{
    name: "github",
    userName: "StJohnErvin"
  }, {
    name: "twitter",
    userName: "JohnErv39143379"
  }, {
    name: "linkedin",
    userName: "john-ervin-ceriola-882abb1a1"
  }, {
    name: "medium",
    userName: "@johnjamero007"
  }]
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });