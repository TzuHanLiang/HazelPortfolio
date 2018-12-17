(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box; }\n\ninput:focus {\n  outline: none; }\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus {\n  box-shadow: 0 0 0 50px #eaf0ed inset;\n  -webkit-text-fill-color: #3f5d45; }\n\n::-moz-selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\n::selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\nbody {\n  font-family: \"PingFang TC\", \"Helvetica Neue\", Times, sans-serif;\n  font-weight: 400;\n  /*font-size: 16px;*/\n  line-height: 1.7;\n  color: #3f5d45;\n  display: inline-block; }\n\nul {\n  list-style: none; }\n\n.heading-primary--large-g {\n  font-weight: bold;\n  font-size: 4.8rem;\n  font-family: Times; }\n\n.heading-primary--large {\n  font-weight: 600;\n  font-size: 3.6rem;\n  color: #eaf0ed; }\n\n.heading-primary--medium {\n  font-weight: 600;\n  font-size: 2.4rem; }\n  .heading-primary--medium--lightest {\n    color: #eaf0ed; }\n  .heading-primary--medium--light--light {\n    color: #8da291;\n    font-weight: 300; }\n\n.heading-primary--sm {\n  font-size: 2rem;\n  font-weight: 600; }\n  .heading-primary--sm--light {\n    font-size: 2rem;\n    font-weight: 600; }\n  .heading-primary--sm--light--lightest {\n    font-size: 2rem;\n    font-weight: 400;\n    color: #eaf0ed; }\n\n.heading-primary--xs {\n  font-weight: 400;\n  font-size: 1.6rem; }\n  .heading-primary--xs--b {\n    font-size: 1.6rem;\n    font-weight: 600; }\n    .heading-primary--xs--b--lightest {\n      font-weight: 400;\n      font-size: 1.6rem;\n      color: #eaf0ed; }\n    .heading-primary--xs--b--light {\n      font-weight: 400;\n      font-size: 1.6rem;\n      color: #8da291; }\n  .heading-primary--xs--light {\n    font-weight: 400;\n    font-size: 1.6rem;\n    color: #eaf0ed; }\n\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #8da291, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 0.2rem;\n  transition: all 0.2s; }\n  @media only screen and (max-width: 56.25em) {\n    .heading-secondary {\n      font-size: 3rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  .heading-secondary:hover {\n    -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);\n            transform: skewY(2deg) skewX(15deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.paragraph {\n  font-size: 1.6rem; }\n  .paragraph:not(:last-child) {\n    margin-bottom: 3rem; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 2.4rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 4.8rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8ƒrem !important; } }\n\n.u-margin-top-sm {\n  margin-top: 3.4rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n.h-flex-row {\n  flex-direction: row !important; }\n\n.h-flex-column {\n  flex-direction: column !important; }\n\n.h-flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.h-flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.h-flex-wrap {\n  flex-wrap: wrap !important; }\n\n.h-flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.h-flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.h-flex-fill {\n  flex: 1 1 auto !important; }\n\n.h-flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.h-flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.h-flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.h-flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.h-justify-content-start {\n  justify-content: flex-start !important; }\n\n.h-justify-content-end {\n  justify-content: flex-end !important; }\n\n.h-justify-content-center {\n  justify-content: center !important; }\n\n.h-justify-content-between {\n  justify-content: space-between !important; }\n\n.h-justify-content-around {\n  justify-content: space-around !important; }\n\n.h-align-items-start {\n  align-items: flex-start !important; }\n\n.h-align-items-end {\n  align-items: flex-end !important; }\n\n.h-align-items-center {\n  align-items: center !important; }\n\n.h-align-items-baseline {\n  align-items: baseline !important; }\n\n.h-align-items-stretch {\n  align-items: stretch !important; }\n\n.h-align-content-start {\n  align-content: flex-start !important; }\n\n.h-align-content-end {\n  align-content: flex-end !important; }\n\n.h-align-content-center {\n  align-content: center !important; }\n\n.h-align-content-between {\n  align-content: space-between !important; }\n\n.h-align-content-around {\n  align-content: space-around !important; }\n\n.h-align-content-stretch {\n  align-content: stretch !important; }\n\n.h-align-self-auto {\n  align-self: auto !important; }\n\n.h-align-self-start {\n  align-self: flex-start !important; }\n\n.h-align-self-end {\n  align-self: flex-end !important; }\n\n.h-align-self-center {\n  align-self: center !important; }\n\n.h-align-self-baseline {\n  align-self: baseline !important; }\n\n.h-align-self-stretch {\n  align-self: stretch !important; }\n\n@media (max-width: 1023px) {\n  .h-flex-lg-row {\n    flex-direction: row !important; }\n  .h-flex-lg-column {\n    flex-direction: column !important; }\n  .h-flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .h-flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .h-flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .h-flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .h-flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .h-flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .h-flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .h-flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .h-flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .h-flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .h-justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .h-justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .h-justify-content-lg-center {\n    justify-content: center !important; }\n  .h-justify-content-lg-between {\n    justify-content: space-between !important; }\n  .h-justify-content-lg-around {\n    justify-content: space-around !important; }\n  .h-align-items-lg-start {\n    align-items: flex-start !important; }\n  .h-align-items-lg-end {\n    align-items: flex-end !important; }\n  .h-align-items-lg-center {\n    align-items: center !important; }\n  .h-align-items-lg-baseline {\n    align-items: baseline !important; }\n  .h-align-items-lg-stretch {\n    align-items: stretch !important; }\n  .h-align-content-lg-start {\n    align-content: flex-start !important; }\n  .h-align-content-lg-end {\n    align-content: flex-end !important; }\n  .h-align-content-lg-center {\n    align-content: center !important; }\n  .h-align-content-lg-between {\n    align-content: space-between !important; }\n  .h-align-content-lg-around {\n    align-content: space-around !important; }\n  .h-align-content-lg-stretch {\n    align-content: stretch !important; }\n  .h-align-self-lg-auto {\n    align-self: auto !important; }\n  .h-align-self-lg-start {\n    align-self: flex-start !important; }\n  .h-align-self-lg-end {\n    align-self: flex-end !important; }\n  .h-align-self-lg-center {\n    align-self: center !important; }\n  .h-align-self-lg-baseline {\n    align-self: baseline !important; }\n  .h-align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (max-width: 767px) {\n  .h-flex-md-row {\n    flex-direction: row !important; }\n  .h-flex-md-column {\n    flex-direction: column !important; }\n  .h-flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .h-flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .h-flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .h-flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .h-flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .h-flex-md-fill {\n    flex: 1 1 auto !important; }\n  .h-flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .h-flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .h-flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .h-flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .h-justify-content-md-start {\n    justify-content: flex-start !important; }\n  .h-justify-content-md-end {\n    justify-content: flex-end !important; }\n  .h-justify-content-md-center {\n    justify-content: center !important; }\n  .h-justify-content-md-between {\n    justify-content: space-between !important; }\n  .h-justify-content-md-around {\n    justify-content: space-around !important; }\n  .h-align-items-md-start {\n    align-items: flex-start !important; }\n  .h-align-items-md-end {\n    align-items: flex-end !important; }\n  .h-align-items-md-center {\n    align-items: center !important; }\n  .h-align-items-md-baseline {\n    align-items: baseline !important; }\n  .h-align-items-md-stretch {\n    align-items: stretch !important; }\n  .h-align-content-md-start {\n    align-content: flex-start !important; }\n  .h-align-content-md-end {\n    align-content: flex-end !important; }\n  .h-align-content-md-center {\n    align-content: center !important; }\n  .h-align-content-md-between {\n    align-content: space-between !important; }\n  .h-align-content-md-around {\n    align-content: space-around !important; }\n  .h-align-content-md-stretch {\n    align-content: stretch !important; }\n  .h-align-self-md-auto {\n    align-self: auto !important; }\n  .h-align-self-md-start {\n    align-self: flex-start !important; }\n  .h-align-self-md-end {\n    align-self: flex-end !important; }\n  .h-align-self-md-center {\n    align-self: center !important; }\n  .h-align-self-md-baseline {\n    align-self: baseline !important; }\n  .h-align-self-md-stretch {\n    align-self: stretch !important; } }\n\n.h-m-0 {\n  margin: 0 !important; }\n\n.h-mt-0,\n.h-my-0 {\n  margin-top: 0 !important; }\n\n.h-mr-0,\n.h-mx-0 {\n  margin-right: 0 !important; }\n\n.h-mb-0,\n.h-my-0 {\n  margin-bottom: 0 !important; }\n\n.h-ml-0,\n.h-mx-0 {\n  margin-left: 0 !important; }\n\n.h-m-1 {\n  margin: 0.4rem !important; }\n\n.h-mt-1,\n.h-my-1 {\n  margin-top: 0.4rem !important; }\n\n.h-mr-1,\n.h-mx-1 {\n  margin-right: 0.4rem !important; }\n\n.h-mb-1,\n.h-my-1 {\n  margin-bottom: 0.4rem !important; }\n\n.h-ml-1,\n.h-mx-1 {\n  margin-left: 0.4rem !important; }\n\n.h-m-2 {\n  margin: 0.8rem !important; }\n\n.h-mt-2,\n.h-my-2 {\n  margin-top: 0.8rem !important; }\n\n.h-mr-2,\n.h-mx-2 {\n  margin-right: 0.8rem !important; }\n\n.h-mb-2,\n.h-my-2 {\n  margin-bottom: 0.8rem !important; }\n\n.h-ml-2,\n.h-mx-2 {\n  margin-left: 0.8rem !important; }\n\n.h-m-3 {\n  margin: 1.6rem !important; }\n\n.h-mt-3,\n.h-my-3 {\n  margin-top: 1.6rem !important; }\n\n.h-mr-3,\n.h-mx-3 {\n  margin-right: 1.6rem !important; }\n\n.h-mb-3,\n.h-my-3 {\n  margin-bottom: 1.6rem !important; }\n\n.h-ml-3,\n.h-mx-3 {\n  margin-left: 1.6rem !important; }\n\n.h-m-4 {\n  margin: 2.4rem !important; }\n\n.h-mt-4,\n.h-my-4 {\n  margin-top: 2.4rem !important; }\n\n.h-mr-4,\n.h-mx-4 {\n  margin-right: 2.4rem !important; }\n\n.h-mb-4,\n.h-my-4 {\n  margin-bottom: 2.4rem !important; }\n\n.h-ml-4,\n.h-mx-4 {\n  margin-left: 2.4rem !important; }\n\n.h-m-5 {\n  margin: 4.8rem !important; }\n\n.h-mt-5,\n.h-my-5 {\n  margin-top: 4.8rem !important; }\n\n.h-mr-5,\n.h-mx-5 {\n  margin-right: 4.8rem !important; }\n\n.h-mb-5,\n.h-my-5 {\n  margin-bottom: 4.8rem !important; }\n\n.h-mb-8ƒrem,\n.h-my-8ƒrem {\n  margin-bottom: 8ƒrem !important; }\n\n.h-ml-5,\n.h-mx-5 {\n  margin-left: 4.8rem !important; }\n\n.h-p-0 {\n  padding: 0 !important; }\n\n.h-pt-0,\n.h-py-0 {\n  padding-top: 0 !important; }\n\n.h-pr-0,\n.h-px-0 {\n  padding-right: 0 !important; }\n\n.h-pb-0,\n.h-py-0 {\n  padding-bottom: 0 !important; }\n\n.h-pl-0,\n.h-px-0 {\n  padding-left: 0 !important; }\n\n.h-p-1 {\n  padding: 0.4rem !important; }\n\n.h-pt-1,\n.h-py-1 {\n  padding-top: 0.4rem !important; }\n\n.h-pr-1,\n.h-px-1 {\n  padding-right: 0.4rem !important; }\n\n.h-pb-1,\n.h-py-1 {\n  padding-bottom: 0.4rem !important; }\n\n.h-pl-1,\n.h-px-1 {\n  padding-left: 0.4rem !important; }\n\n.h-p-2 {\n  padding: 0.8rem !important; }\n\n.h-pt-2,\n.h-py-2 {\n  padding-top: 0.8rem !important; }\n\n.h-pr-2,\n.h-px-2 {\n  padding-right: 0.8rem !important; }\n\n.h-pb-2,\n.h-py-2 {\n  padding-bottom: 0.8rem !important; }\n\n.h-pl-2,\n.h-px-2 {\n  padding-left: 0.8rem !important; }\n\n.h-p-3 {\n  padding: 1.6rem !important; }\n\n.h-pt-3,\n.h-py-3 {\n  padding-top: 1.6rem !important; }\n\n.h-pr-3,\n.h-px-3 {\n  padding-right: 1.6rem !important; }\n\n.h-pb-3,\n.h-py-3 {\n  padding-bottom: 1.6rem !important; }\n\n.h-pl-3,\n.h-px-3 {\n  padding-left: 1.6rem !important; }\n\n.h-p-4 {\n  padding: 2.4rem !important; }\n\n.h-pt-4,\n.h-py-4 {\n  padding-top: 2.4rem !important; }\n\n.h-pr-4,\n.h-px-4 {\n  padding-right: 2.4rem !important; }\n\n.h-pb-4,\n.h-py-4 {\n  padding-bottom: 2.4rem !important; }\n\n.h-pl-4,\n.h-px-4 {\n  padding-left: 2.4rem !important; }\n\n.h-p-5 {\n  padding: 4.8rem !important; }\n\n.h-pt-5,\n.h-py-5 {\n  padding-top: 4.8rem !important; }\n\n.h-pr-5,\n.h-px-5 {\n  padding-right: 4.8rem !important; }\n\n.h-pb-5,\n.h-py-5 {\n  padding-bottom: 4.8rem !important; }\n\n.h-pl-5,\n.h-px-5 {\n  padding-left: 4.8rem !important; }\n\n.h-m-auto {\n  margin: auto !important; }\n\n.h-mt-auto,\n.h-my-auto {\n  margin-top: auto !important; }\n\n.h-mr-auto,\n.h-mx-auto {\n  margin-right: auto !important; }\n\n.h-mb-auto,\n.h-my-auto {\n  margin-bottom: auto !important; }\n\n.h-ml-auto,\n.h-mx-auto {\n  margin-left: auto !important; }\n\n@media (max-width: 1023px) {\n  .h-m-lg-0 {\n    margin: 0 !important; }\n  .h-mt-lg-0,\n  .h-my-lg-0 {\n    margin-top: 0 !important; }\n  .h-mr-lg-0,\n  .h-mx-lg-0 {\n    margin-right: 0 !important; }\n  .h-mb-lg-0,\n  .h-my-lg-0 {\n    margin-bottom: 0 !important; }\n  .h-ml-lg-0,\n  .h-mx-lg-0 {\n    margin-left: 0 !important; }\n  .h-m-lg-1 {\n    margin: 0.4rem !important; }\n  .h-mt-lg-1,\n  .h-my-lg-1 {\n    margin-top: 0.4rem !important; }\n  .h-mr-lg-1,\n  .h-mx-lg-1 {\n    margin-right: 0.4rem !important; }\n  .h-mb-lg-1,\n  .h-my-lg-1 {\n    margin-bottom: 0.4rem !important; }\n  .h-ml-lg-1,\n  .h-mx-lg-1 {\n    margin-left: 0.4rem !important; }\n  .h-m-lg-2 {\n    margin: 0.8rem !important; }\n  .h-mt-lg-2,\n  .h-my-lg-2 {\n    margin-top: 0.8rem !important; }\n  .h-mr-lg-2,\n  .h-mx-lg-2 {\n    margin-right: 0.8rem !important; }\n  .h-mb-lg-2,\n  .h-my-lg-2 {\n    margin-bottom: 0.8rem !important; }\n  .h-ml-lg-2,\n  .h-mx-lg-2 {\n    margin-left: 0.8rem !important; }\n  .h-m-lg-3 {\n    margin: 1.6rem !important; }\n  .h-mt-lg-3,\n  .h-my-lg-3 {\n    margin-top: 1.6rem !important; }\n  .h-mr-lg-3,\n  .h-mx-lg-3 {\n    margin-right: 1.6rem !important; }\n  .h-mb-lg-3,\n  .h-my-lg-3 {\n    margin-bottom: 1.6rem !important; }\n  .h-ml-lg-3,\n  .h-mx-lg-3 {\n    margin-left: 1.6rem !important; }\n  .h-m-lg-4 {\n    margin: 2.4rem !important; }\n  .h-mt-lg-4,\n  .h-my-lg-4 {\n    margin-top: 2.4rem !important; }\n  .h-mr-lg-4,\n  .h-mx-lg-4 {\n    margin-right: 2.4rem !important; }\n  .h-mb-lg-4,\n  .h-my-lg-4 {\n    margin-bottom: 2.4rem !important; }\n  .h-ml-lg-4,\n  .h-mx-lg-4 {\n    margin-left: 2.4rem !important; }\n  .h-m-lg-5 {\n    margin: 4.8rem !important; }\n  .h-mt-lg-5,\n  .h-my-lg-5 {\n    margin-top: 4.8rem !important; }\n  .h-mr-lg-5,\n  .h-mx-lg-5 {\n    margin-right: 4.8rem !important; }\n  .h-mb-lg-5,\n  .h-my-lg-5 {\n    margin-bottom: 4.8rem !important; }\n  .h-ml-lg-5,\n  .h-mx-lg-5 {\n    margin-left: 4.8rem !important; }\n  .h-p-lg-0 {\n    padding: 0 !important; }\n  .h-pt-lg-0,\n  .h-py-lg-0 {\n    padding-top: 0 !important; }\n  .h-pr-lg-0,\n  .h-px-lg-0 {\n    padding-right: 0 !important; }\n  .h-pb-lg-0,\n  .h-py-lg-0 {\n    padding-bottom: 0 !important; }\n  .h-pl-lg-0,\n  .h-px-lg-0 {\n    padding-left: 0 !important; }\n  .h-p-lg-1 {\n    padding: 0.4rem !important; }\n  .h-pt-lg-1,\n  .h-py-lg-1 {\n    padding-top: 0.4rem !important; }\n  .h-pr-lg-1,\n  .h-px-lg-1 {\n    padding-right: 0.4rem !important; }\n  .h-pb-lg-1,\n  .h-py-lg-1 {\n    padding-bottom: 0.4rem !important; }\n  .h-pl-lg-1,\n  .h-px-lg-1 {\n    padding-left: 0.4rem !important; }\n  .h-p-lg-2 {\n    padding: 0.8rem !important; }\n  .h-pt-lg-2,\n  .h-py-lg-2 {\n    padding-top: 0.8rem !important; }\n  .h-pr-lg-2,\n  .h-px-lg-2 {\n    padding-right: 0.8rem !important; }\n  .h-pb-lg-2,\n  .h-py-lg-2 {\n    padding-bottom: 0.8rem !important; }\n  .h-pl-lg-2,\n  .h-px-lg-2 {\n    padding-left: 0.8rem !important; }\n  .h-p-lg-3 {\n    padding: 1.6rem !important; }\n  .h-pt-lg-3,\n  .h-py-lg-3 {\n    padding-top: 1.6rem !important; }\n  .h-pr-lg-3,\n  .h-px-lg-3 {\n    padding-right: 1.6rem !important; }\n  .h-pb-lg-3,\n  .h-py-lg-3 {\n    padding-bottom: 1.6rem !important; }\n  .h-pl-lg-3,\n  .h-px-lg-3 {\n    padding-left: 1.6rem !important; }\n  .h-p-lg-4 {\n    padding: 2.4rem !important; }\n  .h-pt-lg-4,\n  .h-py-lg-4 {\n    padding-top: 2.4rem !important; }\n  .h-pr-lg-4,\n  .h-px-lg-4 {\n    padding-right: 2.4rem !important; }\n  .h-pb-lg-4,\n  .h-py-lg-4 {\n    padding-bottom: 2.4rem !important; }\n  .h-pl-lg-4,\n  .h-px-lg-4 {\n    padding-left: 2.4rem !important; }\n  .h-p-lg-5 {\n    padding: 4.8rem !important; }\n  .h-pt-lg-5,\n  .h-py-lg-5 {\n    padding-top: 4.8rem !important; }\n  .h-pr-lg-5,\n  .h-px-lg-5 {\n    padding-right: 4.8rem !important; }\n  .h-pb-lg-5,\n  .h-py-lg-5 {\n    padding-bottom: 4.8rem !important; }\n  .h-pl-lg-5,\n  .h-px-lg-5 {\n    padding-left: 4.8rem !important; }\n  .h-m-lg-auto {\n    margin: auto !important; }\n  .h-mt-lg-auto,\n  .h-my-lg-auto {\n    margin-top: auto !important; }\n  .h-mr-lg-auto,\n  .h-mx-lg-auto {\n    margin-right: auto !important; }\n  .h-mb-lg-auto,\n  .h-my-lg-auto {\n    margin-bottom: auto !important; }\n  .h-ml-lg-auto,\n  .h-mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (max-width: 768px) {\n  .h-m-md-0 {\n    margin: 0 !important; }\n  .h-mt-md-0,\n  .h-my-md-0 {\n    margin-top: 0 !important; }\n  .h-mr-md-0,\n  .h-mx-md-0 {\n    margin-right: 0 !important; }\n  .h-mb-md-0,\n  .h-my-md-0 {\n    margin-bottom: 0 !important; }\n  .h-ml-md-0,\n  .h-mx-md-0 {\n    margin-left: 0 !important; }\n  .h-m-md-1 {\n    margin: 0.4rem !important; }\n  .h-mt-md-1,\n  .h-my-md-1 {\n    margin-top: 0.4rem !important; }\n  .h-mr-md-1,\n  .h-mx-md-1 {\n    margin-right: 0.4rem !important; }\n  .h-mb-md-1,\n  .h-my-md-1 {\n    margin-bottom: 0.4rem !important; }\n  .h-ml-md-1,\n  .h-mx-md-1 {\n    margin-left: 0.4rem !important; }\n  .h-m-md-2 {\n    margin: 0.8rem !important; }\n  .h-mt-md-2,\n  .h-my-md-2 {\n    margin-top: 0.8rem !important; }\n  .h-mr-md-2,\n  .h-mx-md-2 {\n    margin-right: 0.8rem !important; }\n  .h-mb-md-2,\n  .h-my-md-2 {\n    margin-bottom: 0.8rem !important; }\n  .h-ml-md-2,\n  .h-mx-md-2 {\n    margin-left: 0.8rem !important; }\n  .h-m-md-3 {\n    margin: 1.6rem !important; }\n  .h-mt-md-3,\n  .h-my-md-3 {\n    margin-top: 1.6rem !important; }\n  .h-mr-md-3,\n  .h-mx-md-3 {\n    margin-right: 1.6rem !important; }\n  .h-mb-md-3,\n  .h-my-md-3 {\n    margin-bottom: 1.6rem !important; }\n  .h-ml-md-3,\n  .h-mx-md-3 {\n    margin-left: 1.6rem !important; }\n  .h-m-md-4 {\n    margin: 2.4rem !important; }\n  .h-mt-md-4,\n  .h-my-md-4 {\n    margin-top: 2.4rem !important; }\n  .h-mr-md-4,\n  .h-mx-md-4 {\n    margin-right: 2.4rem !important; }\n  .h-mb-md-4,\n  .h-my-md-4 {\n    margin-bottom: 2.4rem !important; }\n  .h-ml-md-4,\n  .h-mx-md-4 {\n    margin-left: 2.4rem !important; }\n  .h-m-md-5 {\n    margin: 4.8rem !important; }\n  .h-mt-md-5,\n  .h-my-md-5 {\n    margin-top: 4.8rem !important; }\n  .h-mr-md-5,\n  .h-mx-md-5 {\n    margin-right: 4.8rem !important; }\n  .h-mb-md-5,\n  .h-my-md-5 {\n    margin-bottom: 4.8rem !important; }\n  .h-ml-md-5,\n  .h-mx-md-5 {\n    margin-left: 4.8rem !important; }\n  .h-p-md-0 {\n    padding: 0 !important; }\n  .h-pt-md-0,\n  .h-py-md-0 {\n    padding-top: 0 !important; }\n  .h-pr-md-0,\n  .h-px-md-0 {\n    padding-right: 0 !important; }\n  .h-pb-md-0,\n  .h-py-md-0 {\n    padding-bottom: 0 !important; }\n  .h-pl-md-0,\n  .h-px-md-0 {\n    padding-left: 0 !important; }\n  .h-p-md-1 {\n    padding: 0.4rem !important; }\n  .h-pt-md-1,\n  .h-py-md-1 {\n    padding-top: 0.4rem !important; }\n  .h-pr-md-1,\n  .h-px-md-1 {\n    padding-right: 0.4rem !important; }\n  .h-pb-md-1,\n  .h-py-md-1 {\n    padding-bottom: 0.4rem !important; }\n  .h-pl-md-1,\n  .h-px-md-1 {\n    padding-left: 0.4rem !important; }\n  .h-p-md-2 {\n    padding: 0.8rem !important; }\n  .h-pt-md-2,\n  .h-py-md-2 {\n    padding-top: 0.8rem !important; }\n  .h-pr-md-2,\n  .h-px-md-2 {\n    padding-right: 0.8rem !important; }\n  .h-pb-md-2,\n  .h-py-md-2 {\n    padding-bottom: 0.8rem !important; }\n  .h-pl-md-2,\n  .h-px-md-2 {\n    padding-left: 0.8rem !important; }\n  .h-p-md-3 {\n    padding: 1.6rem !important; }\n  .h-pt-md-3,\n  .h-py-md-3 {\n    padding-top: 1.6rem !important; }\n  .h-pr-md-3,\n  .h-px-md-3 {\n    padding-right: 1.6rem !important; }\n  .h-pb-md-3,\n  .h-py-md-3 {\n    padding-bottom: 1.6rem !important; }\n  .h-pl-md-3,\n  .h-px-md-3 {\n    padding-left: 1.6rem !important; }\n  .h-p-md-4 {\n    padding: 2.4rem !important; }\n  .h-pt-md-4,\n  .h-py-md-4 {\n    padding-top: 2.4rem !important; }\n  .h-pr-md-4,\n  .h-px-md-4 {\n    padding-right: 2.4rem !important; }\n  .h-pb-md-4,\n  .h-py-md-4 {\n    padding-bottom: 2.4rem !important; }\n  .h-pl-md-4,\n  .h-px-md-4 {\n    padding-left: 2.4rem !important; }\n  .h-p-md-5 {\n    padding: 4.8rem !important; }\n  .h-pt-md-5,\n  .h-py-md-5 {\n    padding-top: 4.8rem !important; }\n  .h-pr-md-5,\n  .h-px-md-5 {\n    padding-right: 4.8rem !important; }\n  .h-pb-md-5,\n  .h-py-md-5 {\n    padding-bottom: 4.8rem !important; }\n  .h-pl-md-5,\n  .h-px-md-5 {\n    padding-left: 4.8rem !important; }\n  .h-m-md-auto {\n    margin: auto !important; }\n  .h-mt-md-auto,\n  .h-my-md-auto {\n    margin-top: auto !important; }\n  .h-mr-md-auto,\n  .h-mx-md-auto {\n    margin-right: auto !important; }\n  .h-mb-md-auto,\n  .h-my-md-auto {\n    margin-bottom: auto !important; }\n  .h-ml-md-auto,\n  .h-mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (max-width: 576px) {\n  .h-m-sm-0 {\n    margin: 0 !important; }\n  .h-mt-sm-0,\n  .h-my-sm-0 {\n    margin-top: 0 !important; }\n  .h-mr-sm-0,\n  .h-mx-sm-0 {\n    margin-right: 0 !important; }\n  .h-mb-sm-0,\n  .h-my-sm-0 {\n    margin-bottom: 0 !important; }\n  .h-ml-sm-0,\n  .h-mx-sm-0 {\n    margin-left: 0 !important; }\n  .h-m-sm-1 {\n    margin: 0.4rem !important; }\n  .h-mt-sm-1,\n  .h-my-sm-1 {\n    margin-top: 0.4rem !important; }\n  .h-mr-sm-1,\n  .h-mx-sm-1 {\n    margin-right: 0.4rem !important; }\n  .h-mb-sm-1,\n  .h-my-sm-1 {\n    margin-bottom: 0.4rem !important; }\n  .h-ml-sm-1,\n  .h-mx-sm-1 {\n    margin-left: 0.4rem !important; }\n  .h-m-sm-2 {\n    margin: 0.8rem !important; }\n  .h-mt-sm-2,\n  .h-my-sm-2 {\n    margin-top: 0.8rem !important; }\n  .h-mr-sm-2,\n  .h-mx-sm-2 {\n    margin-right: 0.8rem !important; }\n  .h-mb-sm-2,\n  .h-my-sm-2 {\n    margin-bottom: 0.8rem !important; }\n  .h-ml-sm-2,\n  .h-mx-sm-2 {\n    margin-left: 0.8rem !important; }\n  .h-m-sm-3 {\n    margin: 1.6rem !important; }\n  .h-mt-sm-3,\n  .h-my-sm-3 {\n    margin-top: 1.6rem !important; }\n  .h-mr-sm-3,\n  .h-mx-sm-3 {\n    margin-right: 1.6rem !important; }\n  .h-mb-sm-3,\n  .h-my-sm-3 {\n    margin-bottom: 1.6rem !important; }\n  .h-ml-sm-3,\n  .h-mx-sm-3 {\n    margin-left: 1.6rem !important; }\n  .h-m-sm-4 {\n    margin: 2.4rem !important; }\n  .h-mt-sm-4,\n  .h-my-sm-4 {\n    margin-top: 2.4rem !important; }\n  .h-mr-sm-4,\n  .h-mx-sm-4 {\n    margin-right: 2.4rem !important; }\n  .h-mb-sm-4,\n  .h-my-sm-4 {\n    margin-bottom: 2.4rem !important; }\n  .h-ml-sm-4,\n  .h-mx-sm-4 {\n    margin-left: 2.4rem !important; }\n  .h-m-sm-5 {\n    margin: 4.8rem !important; }\n  .h-mt-sm-5,\n  .h-my-sm-5 {\n    margin-top: 4.8rem !important; }\n  .h-mr-sm-5,\n  .h-mx-sm-5 {\n    margin-right: 4.8rem !important; }\n  .h-mb-sm-5,\n  .h-my-sm-5 {\n    margin-bottom: 4.8rem !important; }\n  .h-ml-sm-5,\n  .h-mx-sm-5 {\n    margin-left: 4.8rem !important; }\n  .h-p-sm-0 {\n    padding: 0 !important; }\n  .h-pt-sm-0,\n  .h-py-sm-0 {\n    padding-top: 0 !important; }\n  .h-pr-sm-0,\n  .h-px-sm-0 {\n    padding-right: 0 !important; }\n  .h-pb-sm-0,\n  .h-py-sm-0 {\n    padding-bottom: 0 !important; }\n  .h-pl-sm-0,\n  .h-px-sm-0 {\n    padding-left: 0 !important; }\n  .h-p-sm-1 {\n    padding: 0.4rem !important; }\n  .h-pt-sm-1,\n  .h-py-sm-1 {\n    padding-top: 0.4rem !important; }\n  .h-pr-sm-1,\n  .h-px-sm-1 {\n    padding-right: 0.4rem !important; }\n  .h-pb-sm-1,\n  .h-py-sm-1 {\n    padding-bottom: 0.4rem !important; }\n  .h-pl-sm-1,\n  .h-px-sm-1 {\n    padding-left: 0.4rem !important; }\n  .h-p-sm-2 {\n    padding: 0.8rem !important; }\n  .h-pt-sm-2,\n  .h-py-sm-2 {\n    padding-top: 0.8rem !important; }\n  .h-pr-sm-2,\n  .h-px-sm-2 {\n    padding-right: 0.8rem !important; }\n  .h-pb-sm-2,\n  .h-py-sm-2 {\n    padding-bottom: 0.8rem !important; }\n  .h-pl-sm-2,\n  .h-px-sm-2 {\n    padding-left: 0.8rem !important; }\n  .h-p-sm-3 {\n    padding: 1.6rem !important; }\n  .h-pt-sm-3,\n  .h-py-sm-3 {\n    padding-top: 1.6rem !important; }\n  .h-pr-sm-3,\n  .h-px-sm-3 {\n    padding-right: 1.6rem !important; }\n  .h-pb-sm-3,\n  .h-py-sm-3 {\n    padding-bottom: 1.6rem !important; }\n  .h-pl-sm-3,\n  .h-px-sm-3 {\n    padding-left: 1.6rem !important; }\n  .h-p-sm-4 {\n    padding: 2.4rem !important; }\n  .h-pt-sm-4,\n  .h-py-sm-4 {\n    padding-top: 2.4rem !important; }\n  .h-pr-sm-4,\n  .h-px-sm-4 {\n    padding-right: 2.4rem !important; }\n  .h-pb-sm-4,\n  .h-py-sm-4 {\n    padding-bottom: 2.4rem !important; }\n  .h-pl-sm-4,\n  .h-px-sm-4 {\n    padding-left: 2.4rem !important; }\n  .h-p-sm-5 {\n    padding: 4.8rem !important; }\n  .h-pt-sm-5,\n  .h-py-sm-5 {\n    padding-top: 4.8rem !important; }\n  .h-pr-sm-5,\n  .h-px-sm-5 {\n    padding-right: 4.8rem !important; }\n  .h-pb-sm-5,\n  .h-py-sm-5 {\n    padding-bottom: 4.8rem !important; }\n  .h-pl-sm-5,\n  .h-px-sm-5 {\n    padding-left: 4.8rem !important; }\n  .h-m-sm-auto {\n    margin: auto !important; }\n  .h-mt-sm-auto,\n  .h-my-sm-auto {\n    margin-top: auto !important; }\n  .h-mr-sm-auto,\n  .h-mx-sm-auto {\n    margin-right: auto !important; }\n  .h-mb-sm-auto,\n  .h-my-sm-auto {\n    margin-bottom: auto !important; }\n  .h-ml-sm-auto,\n  .h-mx-sm-auto {\n    margin-left: auto !important; } }\n\n.h-hideText {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.h-none {\n  display: none !important; }\n\n.h-inline {\n  display: inline !important; }\n\n.h-inline-block {\n  display: inline-block !important; }\n\n.h-block {\n  display: block !important; }\n\n.h-table {\n  display: table !important; }\n\n.h-table-row {\n  display: table-row !important; }\n\n.h-table-cell {\n  display: table-cell !important; }\n\n.h-flex {\n  display: flex !important; }\n\n.h-inline-flex {\n  display: inline-flex !important; }\n\n@media (max-width: 1023px) {\n  .h-lg-none {\n    display: none !important; }\n  .h-lg-inline {\n    display: inline !important; }\n  .h-lg-inline-block {\n    display: inline-block !important; }\n  .h-lg-block {\n    display: block !important; }\n  .h-lg-table {\n    display: table !important; }\n  .h-lg-table-row {\n    display: table-row !important; }\n  .h-lg-table-cell {\n    display: table-cell !important; }\n  .h-lg-flex {\n    display: flex !important; }\n  .h-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (max-width: 767px) {\n  .h-md-none {\n    display: none !important; }\n  .h-md-inline {\n    display: inline !important; }\n  .h-md-inline-block {\n    display: inline-block !important; }\n  .h-md-block {\n    display: block !important; }\n  .h-md-table {\n    display: table !important; }\n  .h-md-table-row {\n    display: table-row !important; }\n  .h-md-table-cell {\n    display: table-cell !important; }\n  .h-md-flex {\n    display: flex !important; }\n  .h-md-inline-flex {\n    display: inline-flex !important; } }\n\n.btn, .btn:link, .btn:visited {\n  text-decoration: none;\n  padding: 1.6rem;\n  transition: all 0.2s;\n  position: relative;\n  text-align: center;\n  display: block;\n  width: 100%;\n  color: #3f5d45;\n  cursor: pointer; }\n\n.btn:active, .btn:focus {\n  background-color: #ccdbd4;\n  outline: none; }\n\n.btn--light {\n  background-color: #eaf0ed;\n  color: #3f5d45;\n  border: none;\n  border-bottom: 1px solid #ccdbd4; }\n  .btn--light:hover {\n    background-color: #ccdbd4; }\n\n.btn--green {\n  background-color: #3f5d45;\n  color: #fff; }\n  .btn--green::after {\n    background-color: #3f5d45; }\n\n.btn--yellow {\n  background-color: #ffe180;\n  color: #3f5d45;\n  border: none; }\n  .btn--yellow:active, .btn--yellow:focus {\n    background-color: #ffb949;\n    outline: none; }\n\n.btn--yellow-b {\n  border: 1px solid #3f5d45;\n  color: #3f5d45; }\n  .btn--yellow-b:hover {\n    border: 1px solid #ffe180;\n    background-color: #ffb949;\n    color: #3f5d45; }\n  .btn--yellow-b.active {\n    border: 1px solid #ffe180;\n    background-color: #ffe180;\n    color: #3f5d45; }\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s; }\n\n.btn--animated {\n  -webkit-animation: moveInBottom 0.5s ease-out 0.75s;\n          animation: moveInBottom 0.5s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards; }\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #3f5d45;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid #3f5d45;\n  padding: 3px;\n  transition: all 0.2s; }\n\n.btn-text:hover {\n  background-color: #3f5d45;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px); }\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.product {\n  width: 100%;\n  margin: 0 auto; }\n  .product__card {\n    width: 30rem;\n    margin-top: 4rem;\n    margin-left: 2rem;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n    float: left; }\n    @media only screen and (max-width: 56.25em) {\n      .product__card {\n        margin-left: 0;\n        width: 100%; } }\n    .product__card__img-box {\n      position: relative;\n      height: 30rem; }\n      @media only screen and (max-width: 56.25em) {\n        .product__card__img-box {\n          width: 100%;\n          overflow: hidden; } }\n    .product__card__img {\n      height: 30rem;\n      width: 30rem;\n      position: relative;\n      background-size: cover;\n      background-position: center; }\n      @media only screen and (max-width: 56.25em) {\n        .product__card__img {\n          width: 100%;\n          height: auto;\n          -webkit-transform: translateY(-30%);\n                  transform: translateY(-30%); } }\n    .product__card__info div {\n      float: left;\n      width: 50%;\n      text-align: center;\n      padding: 1rem 0; }\n      .product__card__info div:not(:last-child) {\n        border-right: 1px solid #ccdbd4; }\n    .product__card__tag {\n      position: absolute;\n      top: 0;\n      left: 2rem;\n      color: #fff;\n      background-color: #3f5d45;\n      -webkit-writing-mode: vertical-lr;\n              writing-mode: vertical-lr;\n      padding: 2.56rem 1rem;\n      letter-spacing: 0.5rem;\n      font-size: 1.6rem; }\n  .product__sideDrawer {\n    position: fixed;\n    width: 32rem;\n    max-width: 70%;\n    height: 100%;\n    right: 0;\n    top: 0;\n    z-index: 1502;\n    background-color: #fff;\n    padding: 3.2rem 1.6rem;\n    box-sizing: border-box;\n    transition: all 0.3s ease-out;\n    overflow: scroll; }\n    .product__sideDrawer--open {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1; }\n    .product__sideDrawer--close {\n      -webkit-transform: translateX(30rem);\n              transform: translateX(30rem);\n      opacity: 0; }\n  .product__aside {\n    margin-top: 4rem;\n    float: right;\n    width: 80%; }\n    @media only screen and (max-width: 56.25em) {\n      .product__aside {\n        margin-top: 0;\n        width: 100%; } }\n    .product__aside__title {\n      background: #3f5d45;\n      color: #fff;\n      text-align: center;\n      padding: 2rem; }\n  .product__cart-item {\n    border-bottom: 1px solid grey;\n    position: relative;\n    margin-top: 2.5rem; }\n    .product__cart-item__img {\n      width: 15rem;\n      height: 15.75rem; }\n    .product__cart-item__price {\n      position: absolute;\n      bottom: 1rem;\n      right: 1rem; }\n    .product__cart-item__description-box {\n      position: absolute;\n      left: 58%;\n      top: 0; }\n\n.cart-toggle {\n  position: fixed;\n  top: 15rem;\n  right: 10rem;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n  z-index: 1502;\n  cursor: pointer;\n  transition: 0.3s all;\n  border-radius: 1rem; }\n  @media only screen and (max-width: 56.25em) {\n    .cart-toggle {\n      right: 2rem;\n      top: 1rem; } }\n  @media only screen and (max-width: 75em) {\n    .cart-toggle {\n      right: 5rem; } }\n  .cart-toggle__icon {\n    color: #3f5d45;\n    display: block;\n    font-weight: bold;\n    line-height: 8rem;\n    height: 8rem;\n    padding-left: 2.5rem;\n    padding-right: 1.5rem;\n    padding-top: 1rem; }\n    .cart-toggle__icon:hover, .cart-toggle__icon:active {\n      background: #3f5d45;\n      color: #fff;\n      border-radius: 1rem; }\n    .cart-toggle__icon i {\n      font-size: 2.4rem; }\n  .cart-toggle__title {\n    color: white;\n    background-color: red;\n    font-size: 1.4rem;\n    position: relative;\n    padding: 2px 6px;\n    top: -1.8rem;\n    right: 0.8rem;\n    border-radius: 50%; }\n\n.l-registered {\n  background: #3f5d45;\n  margin-top: 6rem; }\n\n.l-registered .col-row {\n  width: 83%;\n  margin: 0 auto; }\n\n.l-registered__title img {\n  margin-right: 2.4rem; }\n\n.l-registered__title h3 {\n  font-size: 2.4rem;\n  color: #eaf0ed;\n  font-family: Helvetica Neue, Regular; }\n\n.l-registered__form {\n  background: #eaf0ed;\n  height: 6rem;\n  max-width: 38rem;\n  position: relative;\n  flex-grow: 1; }\n\n@media (max-width: 1023px) {\n  .l-registered__form {\n    max-width: 100%; } }\n\n.l-registered__form__icon {\n  font-size: 2.4rem;\n  position: absolute;\n  top: 1.6rem;\n  left: 1.6rem; }\n\n.l-registered__form_small .l-registered__form__icon {\n  font-size: 2.4rem;\n  top: 2rem; }\n\n.l-registered__form__text {\n  font-size: 2.4rem;\n  color: #8da291;\n  border: none;\n  background: none;\n  margin-left: 4.8rem;\n  width: 26.8rem; }\n  .l-registered__form__text--invalid {\n    border: 2px solid #ffb949;\n    border-radius: 3px;\n    padding: 1.8rem; }\n\n@media (max-width: 1023px) {\n  .l-registered__form__text {\n    width: 100%; } }\n\n.l-registered__form_small .l-registered__form__text {\n  font-size: 2rem;\n  color: #3f5d45; }\n\n.l-registered__form__submit {\n  background: #ffe180;\n  width: 6.4rem;\n  cursor: pointer;\n  border: none; }\n\n.l-registered__form__submit:hover,\n.l-registered__form__submit:active {\n  background: #ffd54d; }\n\n.footer {\n  padding: 10rem 0; }\n  @media only screen and (max-width: 56.25em) {\n    .footer {\n      padding: 8rem 0; } }\n  .footer__subscribe {\n    background: #3f5d45;\n    margin-top: 3.75rem; }\n  .footer__register-title {\n    display: flex !important;\n    margin-bottom: 2.4rem !important;\n    align-items: center !important; }\n  .footer__logo-box--1 {\n    margin-right: 2rem;\n    width: 4rem;\n    height: auto; }\n    @media only screen and (max-width: 56.25em) {\n      .footer__logo-box--1 {\n        margin-bottom: 6rem; } }\n  .footer__logo--1 {\n    width: 4rem;\n    height: 4rem; }\n  .footer__register-form {\n    background: #eaf0ed;\n    height: 6rem;\n    position: relative;\n    flex-grow: 1; }\n  .footer__email-icon {\n    display: inline-block;\n    line-height: 1;\n    font-size: 2.4rem;\n    font-weight: 900;\n    position: absolute;\n    top: 1.6rem;\n    left: 1.6rem;\n    color: #3f5d45; }\n  .footer__email-text {\n    width: calc(100% - 64px);\n    margin: 0;\n    padding: 16px 20px 16px 64px;\n    line-height: 24px;\n    background-color: #eaf0ed;\n    border: 0;\n    border-radius: 0; }\n  .footer__arrow-icon {\n    margin: 0;\n    padding: 2rem 2.4rem 2rem;\n    color: #3f5d45;\n    font-size: 1.6rem;\n    border: none;\n    background-color: #ffe180; }\n\n.l-footer {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  background: #eaf0ed; }\n\n.l-footer .col-row {\n  width: 83%;\n  margin: 0 auto; }\n\n.l-footer__contact__logo {\n  margin-bottom: 12rem; }\n\n.l-footer__contact__content a {\n  font-family: Helvetica Neue, Regular;\n  text-decoration: none;\n  color: #3f5d45;\n  font-size: 1.6rem; }\n\n.l-footer__social li {\n  margin-right: 0.8rem; }\n\n.l-footer__copyright {\n  font-family: Times, Regular;\n  font-size: 1.5rem; }\n\n.row {\n  max-width: 114rem;\n  margin: 0 auto; }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media only screen and (max-width: 56.25em) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 4rem; }\n      @media only screen and (max-width: 56.25em) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0; } }\n    @media only screen and (max-width: 56.25em) {\n      .row [class^=\"col-\"] {\n        width: 100% !important; } }\n  .row .col-1-of-2 {\n    width: calc((100% - 4rem) / 2); }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 4rem) / 3); }\n  .row .col-2-of-3 {\n    width: calc( 2 * ((100% - 2 * 4rem) / 3) + 4rem); }\n  .row .col-1-of-4 {\n    width: calc((100% - 3 * 4rem) / 4); }\n  .row .col-2-of-4 {\n    width: calc( 2 * ((100% - 3 * 4rem) / 4) + 4rem); }\n  .row .col-3-of-4 {\n    width: calc( 3 * ((100% - 3 * 4rem) / 4) + 2 * 4rem); }\n\n.col-container {\n  max-width: 940px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.col-row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.header-image {\n  max-width: 940px;\n  margin-right: auto;\n  margin-left: auto; }\n  .header-image ul li img {\n    height: 49.6rem; }\n  .header-image__container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .header-image__img {\n    height: 49.6rem;\n    width: 100%;\n    background-position: center center;\n    background-size: cover; }\n    @media only screen and (max-width: 56.25em) {\n      .header-image__img {\n        height: auto;\n        min-height: 17rem; } }\n    @media only screen and (max-width: 37.5em) {\n      .header-image__img {\n        width: auto;\n        min-height: 10rem; } }\n\n.Navigation__header {\n  position: fixed;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  top: 0%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  z-index: 1500;\n  display: block;\n  background-color: #fff;\n  height: 10rem; }\n\n.Navigation__nav {\n  float: right;\n  margin-right: 16rem;\n  height: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__nav {\n      display: none; } }\n\n.Navigation__logo-box {\n  position: fixed;\n  top: 3.5rem;\n  left: 16rem;\n  width: 24rem;\n  display: block;\n  z-index: 1501; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__logo-box {\n      position: fixed;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%); } }\n\n.Navigation__list {\n  list-style: none;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 0;\n  width: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__list {\n      flex-flow: column; } }\n  @media only screen and (max-width: 37.5em) {\n    .Navigation__list {\n      flex-flow: column; } }\n\n.Navigation__item {\n  padding: 1.5rem 0;\n  text-align: center; }\n  .Navigation__item a {\n    margin: 2rem;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    align-items: center; }\n  .Navigation__item a:hover,\n  .Navigation__item a:active {\n    background: #3f5d45;\n    color: #fff; }\n  .Navigation__item a.active {\n    border-bottom: 1px solid #3f5d45; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__item {\n      margin: 0;\n      width: 80%;\n      height: 8rem; }\n      .Navigation__item:not(:last-child) {\n        border-bottom: 1px solid #8da291; }\n      .Navigation__item a.active {\n        background-color: #3f5d45;\n        color: #fff; }\n      .Navigation__item a {\n        margin: 0 auto;\n        width: 30%;\n        height: 100%; } }\n\n.Navigation__link, .Navigation__link:link, .Navigation__link:visited {\n  text-decoration: none;\n  transition: all 0.3s;\n  position: relative;\n  color: #3f5d45;\n  display: block;\n  font-weight: bold;\n  text-align: -webkit-match-parent;\n  padding: 1rem;\n  height: 5rem;\n  font-size: 2.4rem;\n  width: 100%;\n  cursor: pointer; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__link, .Navigation__link:link, .Navigation__link:visited {\n      text-align: center; } }\n\n@media only screen and (max-width: 56.25em) {\n  .Navigation__button {\n    background-color: #3f5d45;\n    height: 6rem;\n    width: 6rem;\n    position: fixed;\n    top: 2rem;\n    left: 2.5rem;\n    border-radius: 3px;\n    z-index: 1550;\n    text-align: center;\n    cursor: pointer; } }\n\n.Navigation__icon {\n  position: relative;\n  margin-top: 3rem;\n  z-index: 2; }\n  .Navigation__icon, .Navigation__icon::before, .Navigation__icon::after {\n    width: 3rem;\n    height: 2px;\n    background-color: #fff;\n    display: inline-block; }\n  .Navigation__icon::before, .Navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all 0.2s; }\n  .Navigation__icon::before {\n    top: -0.8rem; }\n  .Navigation__icon::after {\n    top: 0.8rem; }\n\n.Navigation__Drawer {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: -8rem;\n  padding-top: 8rem;\n  z-index: 1501;\n  background-color: #eaf0ed;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out; }\n  .Navigation__Drawer--open {\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 1; }\n  .Navigation__Drawer--close {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0; }\n\n.h-hero {\n  position: relative; }\n\n.h-hero__bg {\n  height: 496px;\n  width: 100%;\n  background-position: center center;\n  background-size: cover; }\n\n@media (max-width: 767px) {\n  .h-hero__bg {\n    height: auto;\n    min-height: 27.2rem; } }\n\n.h-hero__list {\n  max-width: 82.97872%;\n  flex: 0 0 82.97872%;\n  margin: 0 auto;\n  top: -9rem;\n  position: relative;\n  margin-bottom: -8rem; }\n\n@media (max-width: 767px) {\n  .h-hero__list {\n    top: 0;\n    max-width: 100%;\n    flex: 0 0 100%; } }\n\n.h-hero__list ul {\n  width: 100%; }\n\n.h-hero__list li {\n  width: 33.33333%;\n  height: 256px; }\n\n.h-hero__list li a {\n  display: block;\n  width: 100%;\n  position: relative;\n  height: 256px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: 0.3s all;\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  text-decoration: none; }\n\n.h-hero__list li a:hover .h-hero__list__block__img {\n  -webkit-filter: blur(0);\n          filter: blur(0); }\n\n.h-hero__list__block {\n  font-size: 2.4rem; }\n\n.h-hero__list__block__img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: cover;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  transition: 0.3s all;\n  background-position: center center; }\n\n.h-hero__list__block__bg {\n  background: #3f5d45;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.8; }\n\n.h-hero__list__block__word {\n  position: relative;\n  text-align: center;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  width: 100%;\n  color: #fff;\n  letter-spacing: 0.8rem; }\n\n.h-hero__list__block-today {\n  color: #3f5d45; }\n\n.h-hero__list__block-today .h-hero__list__block__bg {\n  background: #ffe180; }\n\n.h-hero__list__block-today .h-hero__list__block__img {\n  background-position: center center; }\n\n.h-hero__list__block-today .h-hero__list__block__word {\n  color: #3f5d45; }\n\n.h-hero__list__block-new .h-hero__list__block__img {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.order {\n  margin: 8rem 14rem;\n  text-align: center; }\n  @media only screen and (max-width: 75em) {\n    .order {\n      margin: 8rem 6rem; } }\n  @media only screen and (max-width: 75em) {\n    .order {\n      margin: 0; } }\n  .order__productList {\n    background-color: #ccdbd4;\n    text-align: center;\n    padding: 1.6rem;\n    margin-bottom: 2rem; }\n    @media only screen and (max-width: 56.25em) {\n      .order__productList {\n        margin: 0;\n        width: 100%; } }\n  .order__product {\n    width: 100%;\n    height: 19rem;\n    padding: 2rem 0;\n    border-bottom: 1px solid #ccdbd4;\n    position: relative; }\n  .order__product-img {\n    float: left; }\n    .order__product-img img {\n      height: 15rem;\n      width: 15rem;\n      background-size: contain; }\n  .order__product-info {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 37%;\n    text-align: left;\n    width: 10rem; }\n    @media only screen and (max-width: 37.5em) {\n      .order__product-info {\n        left: 45%; } }\n  .order__product-count {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 60%;\n    border: 1px solid #ccdbd4;\n    background-color: transparent; }\n    .order__product-count button {\n      padding: 1.6rem;\n      color: #3f5d45;\n      font-size: 1.6rem;\n      cursor: pointer;\n      background-color: transparent;\n      border: 1px none; }\n    .order__product-count span {\n      padding: 1.4rem 1.8rem;\n      border-right: 1px solid #ccdbd4;\n      border-left: 1px solid #ccdbd4; }\n    @media only screen and (max-width: 37.5em) {\n      .order__product-count {\n        left: 74%; } }\n  .order__product-price {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 84%;\n    width: 10rem;\n    text-align: left; }\n    @media only screen and (max-width: 37.5em) {\n      .order__product-price {\n        top: 80%;\n        left: 45%; } }\n  .order__product-delete {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 98%; }\n    @media only screen and (max-width: 37.5em) {\n      .order__product-delete {\n        top: 80%; } }\n    .order__product-delete button {\n      border: 1px none;\n      cursor: pointer;\n      background-color: transparent; }\n      .order__product-delete button i {\n        font-size: 2.4rem;\n        color: #3f5d45;\n        padding: 2rem; }\n  .order__summary {\n    background-color: #3f5d45; }\n  .order__summary-title {\n    border-bottom: 1px solid #eaf0ed;\n    text-align: center;\n    margin-bottom: 1.6rem;\n    margin-right: 1.6rem;\n    margin-left: 1.6rem;\n    padding: 1.6rem; }\n  .order__summary-detail {\n    margin-right: 1.6rem;\n    margin-left: 1.6rem; }\n    .order__summary-detail li {\n      margin-bottom: 0.8rem;\n      display: flex !important;\n      justify-content: space-between !important; }\n  .order__summary-submit {\n    background: #ffe180; }\n\n.checkout {\n  max-width: 94rem;\n  margin: 10rem auto; }\n  .checkout::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .checkout__success {\n    position: relative; }\n    .checkout__success__title {\n      width: 38rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      position: absolute;\n      top: 55%;\n      right: 50%;\n      text-align: center; }\n    .checkout__success__progress {\n      width: 20rem;\n      margin: 2rem auto; }\n      .checkout__success__progress li {\n        font-size: 2rem; }\n    .checkout__success__btnGroup {\n      margin: 3rem; }\n  .checkout__cancel {\n    position: absolute;\n    font-size: 2.4rem;\n    top: 20%;\n    right: 16%;\n    z-index: 1500;\n    color: #3f5d45; }\n    @media only screen and (max-width: 75em) {\n      .checkout__cancel {\n        top: 20%;\n        right: 5%; } }\n    @media only screen and (max-width: 56.25em) {\n      .checkout__cancel {\n        top: 18%;\n        right: 5%; } }\n  .checkout__form {\n    background-color: #3f5d45;\n    width: 54rem;\n    position: relative;\n    float: left; }\n    @media only screen and (max-width: 56.25em) {\n      .checkout__form {\n        width: 50%;\n        margin-left: 5%;\n        float: left; } }\n    @media only screen and (max-width: 37.5em) {\n      .checkout__form {\n        width: 100%;\n        margin-left: 0;\n        margin-top: 3rem; } }\n  .checkout__form-section {\n    padding: 3rem; }\n    @media only screen and (max-width: 37.5em) {\n      .checkout__form-section {\n        width: 100%; } }\n  .checkout__form-title {\n    height: 7.2rem;\n    display: inline-block; }\n  .checkout__form-progress {\n    display: inline-block;\n    position: absolute;\n    top: 1.5rem;\n    right: 2rem; }\n  .checkout__progress-step {\n    color: #eaf0ed;\n    font-size: 1.6rem;\n    display: list-item;\n    z-index: 2;\n    float: left;\n    margin: 3rem; }\n  .checkout__form__btnGroup {\n    margin: 0 0.6rem; }\n    .checkout__form__btnGroup button {\n      float: left;\n      width: 50%;\n      border: 1px solid #eaf0ed; }\n  .checkout__input-box {\n    display: block;\n    width: 100%; }\n    .checkout__input-box::after {\n      content: \"\";\n      display: table;\n      clear: both; }\n  .checkout__input {\n    padding: 0 0.4rem;\n    margin-bottom: 1.6rem; }\n    .checkout__input label {\n      display: inline-block; }\n  .checkout__input-float {\n    float: left;\n    width: 50%; }\n\n.e-form__control {\n  display: block;\n  width: 100%;\n  padding: 2rem;\n  background-color: #eaf0ed;\n  background-clip: padding-box;\n  border: none;\n  border-radius: 0;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  font-weight: 400;\n  font-size: 2rem;\n  color: #3f5d45; }\n  .e-form__control--invalid {\n    border: 2px solid #ffb949;\n    border-radius: 3px;\n    padding: 1.8rem; }\n  .e-form__control:focus {\n    outline: none;\n    background-color: #fff; }\n\n.p-checkout__orderDetail__order {\n  float: right;\n  width: 40%; }\n  @media only screen and (max-width: 56.25em) {\n    .p-checkout__orderDetail__order {\n      width: 35%;\n      margin-right: 5%;\n      float: right; } }\n  @media only screen and (max-width: 37.5em) {\n    .p-checkout__orderDetail__order {\n      display: none; } }\n\n.p-checkout__orderDetail__section__title {\n  font-size: 2.4rem;\n  background: #eaf0ed;\n  border-bottom: 1px solid #eaf0ed;\n  text-align: center;\n  padding-top: 1.6rem; }\n\n.p-checkout__orderDetail__section__detail {\n  border: 1px solid #eaf0ed;\n  margin-bottom: 1.6rem;\n  padding-top: 1.6rem;\n  padding-left: 1.6rem;\n  padding-right: 1.6rem; }\n  .p-checkout__orderDetail__section__detail li {\n    margin-bottom: 0.8rem; }\n    .p-checkout__orderDetail__section__detail li:not(:last-child) {\n      font-size: 1.6rem; }\n  .p-checkout__orderDetail__section__detail__totalPrice {\n    font-weight: bold;\n    margin-top: 1.6rem;\n    font-size: 2rem; }\n\n.p-checkout__orderDetail__section__productList {\n  border: 1px solid #eaf0ed; }\n\n.p-checkout__orderDetail__section__productList__img {\n  flex: 0.9 1;\n  background-position: center center;\n  background-size: cover; }\n\n.p-story {\n  margin-top: 8rem; }\n\n@media (max-width: 1023px) {\n  .p-story {\n    margin-top: 4.8rem; } }\n\n@media (max-width: 767px) {\n  .p-story {\n    margin-top: 12.8rem; } }\n\n.p-story__section {\n  background: #eaf0ed;\n  margin-bottom: 12.8rem; }\n\n@media (max-width: 1023px) {\n  .p-story__section {\n    margin-bottom: 0rem; } }\n\n.p-story__section-mobile {\n  display: none;\n  max-width: 50%;\n  margin: 0 auto; }\n\n.p-story__section__img {\n  max-width: 48.93617%;\n  flex: 0 0 48.93617%;\n  position: relative;\n  margin-top: -2.4rem;\n  margin-bottom: -2.4rem; }\n\n@media (max-width: 1023px) {\n  .p-story__section__img {\n    margin: 0;\n    margin-bottom: 0;\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n.p-story__section__img__pic {\n  height: 100%;\n  background-position: center center;\n  background-size: cover; }\n\n@media (max-width: 1023px) {\n  .p-story__section__img__pic {\n    height: 25rem; } }\n\n.p-story__section__content {\n  max-width: 31.91489%;\n  flex: 0 0 31.91489%;\n  position: relative; }\n\n@media (max-width: 1023px) {\n  .p-story__section__content {\n    max-width: 100%;\n    flex: 0 0 100%; } }\n\n.p-story__section__content__p {\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  height: 48rem;\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n  line-height: 2.5; }\n\n@media (max-width: 1023px) {\n  .p-story__section__content__p {\n    -webkit-writing-mode: inherit;\n            writing-mode: inherit;\n    height: auto;\n    line-height: 1.5;\n    padding-top: 1.6rem;\n    padding-bottom: 1.6rem; } }\n\n.p-story__section__content__p p {\n  margin-bottom: 3.2rem;\n  margin-left: 3.2rem;\n  color: #8da291;\n  font-size: 1.6rem; }\n\n@media (max-width: 1023px) {\n  .p-story__section__content__p p {\n    margin-right: 1.6rem;\n    margin-left: 1.6rem;\n    margin-bottom: 1.6rem; } }\n\n.p-story__section__title {\n  max-width: 14.89362%;\n  flex: 0 0 14.89362%;\n  position: relative;\n  margin-top: -2.4rem;\n  text-align: right; }\n\n@media (max-width: 1023px) {\n  .p-story__section__title {\n    display: none; } }\n\n.p-story__section-need .p-story__section__title {\n  margin-right: 3.2rem; }\n\n@media (max-width: 1023px) {\n  .p-story__section-need .p-story__section__img {\n    order: 1; }\n  .p-story__section-need .p-story__section__content {\n    order: 2; } }\n\n.p-story__section__whyNeed__desktopTitle {\n  display: none;\n  margin-top: -3.2rem;\n  margin-bottom: 8rem; }\n\n@media (max-width: 1023px) {\n  .p-story__section__whyNeed__desktopTitle {\n    display: none !important; } }\n\n.p-login {\n  max-width: 82.97872%;\n  flex: 0 0 82.97872%;\n  margin: 3rem auto 0; }\n\n@media (max-width: 1023px) {\n  .p-login {\n    max-width: 100%;\n    flex: 0 0 100%; } }\n\n@media (max-width: 767px) {\n  .p-login {\n    margin-bottom: -6rem;\n    margin-top: 0; } }\n\n.p-login__account {\n  max-width: 50%;\n  flex: 0 0 50%;\n  background: #3f5d45; }\n\n@media (max-width: 767px) {\n  .p-login__account {\n    max-width: 100%;\n    flex: 0 0 100%;\n    order: 2; } }\n\n.p-login__account__block {\n  padding-right: 3rem;\n  padding-left: 3rem; }\n\n@media (max-width: 767px) {\n  .p-login__account__block {\n    padding-right: 0;\n    padding-left: 0; } }\n\n.p-login__account__block__title {\n  font-size: 3.6rem;\n  color: #eaf0ed;\n  text-align: center;\n  margin-top: 4rem;\n  margin-bottom: 4rem; }\n\n@media (max-width: 767px) {\n  .p-login__account__block__title {\n    margin-top: 3rem;\n    margin-bottom: 3rem; } }\n\n.p-login__account__block__checkbox {\n  color: #eaf0ed; }\n\n.p-login__account__submit {\n  display: block;\n  background: #ffe180;\n  color: #3f5d45;\n  font-size: 2.4rem;\n  font-weight: bold;\n  text-align: center; }\n\n.p-login__account__submit:hover {\n  background: #ffd54d; }\n\n.p-login__community {\n  max-width: 50%;\n  flex: 0 0 50%;\n  background: #eaf0ed;\n  margin-top: 1.6rem;\n  margin-bottom: 1.6rem;\n  padding-left: 3rem;\n  padding-right: 3rem; }\n\n@media (max-width: 767px) {\n  .p-login__community {\n    order: 1;\n    max-width: 100%;\n    flex: 0 0 100%;\n    padding: 0; } }\n\n.p-login__community__title {\n  color: #8da291;\n  font-size: 2.4rem;\n  text-align: center;\n  margin-top: 4rem;\n  margin-bottom: 4rem; }\n\n@media (max-width: 767px) {\n  .p-login__community__title {\n    display: none; } }\n\n@media (max-width: 767px) {\n  .p-login__community__list {\n    background: #eaf0ed; }\n  .p-login__community__list + .l-registered__form {\n    margin-top: 1.6rem; } }\n\n@media (max-width: 767px) {\n  .p-login__community__list li {\n    width: 33.333333%; } }\n\n.p-login__community__list a {\n  display: flex;\n  height: 56px;\n  align-items: center;\n  justify-content: center;\n  background: #fff; }\n\n.p-login__community__list a:hover,\n.p-login__community__list a:active,\n.p-login__community__list a:focus {\n  background: #e6e6e6; }\n\n@media (max-width: 767px) {\n  .p-login__community__list a img {\n    max-width: 80%; } }\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 16px; }\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 30px; }\n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 13.5px;\n    width: 13.5px;\n    left: 1px;\n    bottom: 1px;\n    border-radius: 50%;\n    background-color: white;\n    transition: 0.4s; }\n\ninput:checked + .slider {\n  background-color: #ffb949; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #ffe180; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  transform: translateX(20px); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UI/Backdrop/Backdrop.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Backdrop_Backdrop__2yCwV {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 1501;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", ""]);

// exports
exports.locals = {
	"Backdrop": "Backdrop_Backdrop__2yCwV"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Modal/Modal.module.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UI/Modal/Modal.module.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Modal_Modal__2i59I {\n  position: fixed;\n  z-index: 1503;\n  background-color: white;\n  width: 70%;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px black;\n  padding: 16px;\n  left: 15%;\n  top: 30%;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n  font-size: 1.6rem;\n}\n\n@media (min-width: 600px) {\n  .Modal_Modal__2i59I {\n    width: 500px;\n    left: calc(50% - 250px);\n  }\n}\n", ""]);

// exports
exports.locals = {
	"Modal": "Modal_Modal__2i59I"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UI/Spinner/Spinner.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Spinner_Loader__3Omw5 {\n  color: #3f5d45;\n  font-size: 20px;\n  margin: 100px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: Spinner_load4__2450_ 1.3s infinite linear;\n  animation: Spinner_load4__2450_ 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes Spinner_load4__2450_ {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes Spinner_load4__2450_ {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n", ""]);

// exports
exports.locals = {
	"Loader": "Spinner_Loader__3Omw5",
	"load4": "Spinner_load4__2450_"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actions/index */ "./src/store/actions/index.js");
/* harmony import */ var _hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hoc/asyncComponent/asyncComponent */ "./src/hoc/asyncComponent/asyncComponent.js");
/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hoc/Layout/Layout */ "./src/hoc/Layout/Layout.js");
/* harmony import */ var _components_Layout_FooterModify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Layout/FooterModify */ "./src/components/Layout/FooterModify.js");
/* harmony import */ var _containers_Auth_Logout_Logout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/Auth/Logout/Logout */ "./src/containers/Auth/Logout/Logout.js");
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/Products/Products */ "./src/containers/Products/Products.js");
/* harmony import */ var _containers_Home_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/Home/Home */ "./src/containers/Home/Home.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/App.js";




 //layout


 //containers (pages)





var asyncCheckoutSuccess = Object(_hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./containers/Checkout/CheckoutSuccess */ "./src/containers/Checkout/CheckoutSuccess.js"));
});
var asyncContactData = Object(_hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./containers/Checkout/ContactData/ContactData */ "./src/containers/Checkout/ContactData/ContactData.js"));
});
var asyncCheckout = Object(_hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./containers/Checkout/Checkout */ "./src/containers/Checkout/Checkout.js"));
});
var asyncOrders = Object(_hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./containers/Orders/Orders */ "./src/containers/Orders/Orders.js"));
});
var asyncAuth = Object(_hoc_asyncComponent_asyncComponent__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./containers/Auth/Auth */ "./src/containers/Auth/Auth.js"));
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onTryAutoSignup();
    }
  }, {
    key: "render",
    value: function render() {
      var routes = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/checkout",
        component: asyncCheckout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/products",
        component: _containers_Products_Products__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/auth",
        component: asyncAuth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _containers_Home_Home__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }));

      if (this.props.isAuthenticated) {
        routes = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/logout",
          component: _containers_Auth_Logout_Logout__WEBPACK_IMPORTED_MODULE_12__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/checkout-success",
          component: asyncCheckoutSuccess,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/contact-data",
          component: asyncContactData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/checkout",
          component: asyncCheckout,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/products",
          component: _containers_Products_Products__WEBPACK_IMPORTED_MODULE_13__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/orders",
          component: asyncOrders,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/",
          exact: true,
          component: _containers_Home_Home__WEBPACK_IMPORTED_MODULE_14__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), this.props.isCartEmpty ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
          to: "/products",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
          to: "/checkout",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, routes, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout_FooterModify__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token !== null,
    isCartEmpty: state.products.cart.length === 0
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTryAutoSignup: function onTryAutoSignup() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_8__["authCheckState"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./src/assets/img/footer__title.svg":
/*!******************************************!*\
  !*** ./src/assets/img/footer__title.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/footer__title.b435e6f7.svg";

/***/ }),

/***/ "./src/assets/img/ic-facebook.svg":
/*!****************************************!*\
  !*** ./src/assets/img/ic-facebook.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ic-facebook.3d7755ce.svg";

/***/ }),

/***/ "./src/assets/img/ic-line@.svg":
/*!*************************************!*\
  !*** ./src/assets/img/ic-line@.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ic-line@.b101abfd.svg";

/***/ }),

/***/ "./src/assets/img/lg-想吃甜點是不需要理由的.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/lg-想吃甜點是不需要理由的.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lg-想吃甜點是不需要理由的.bd7d1813.svg";

/***/ }),

/***/ "./src/assets/img/lg-為什麼一定要吃甜點.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/lg-為什麼一定要吃甜點.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lg-為什麼一定要吃甜點.0bd653f6.svg";

/***/ }),

/***/ "./src/assets/img/lg-為什麼選擇了做甜點.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/lg-為什麼選擇了做甜點.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lg-為什麼選擇了做甜點.f251823a.svg";

/***/ }),

/***/ "./src/assets/img/logo-all-dark.svg":
/*!******************************************!*\
  !*** ./src/assets/img/logo-all-dark.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-all-dark.6734d368.svg";

/***/ }),

/***/ "./src/assets/img/logo-light.svg":
/*!***************************************!*\
  !*** ./src/assets/img/logo-light.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-light.c0a6f030.svg";

/***/ }),

/***/ "./src/assets/img/logotype-lg-dark.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/logotype-lg-dark.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logotype-lg-dark.d63fce88.svg";

/***/ }),

/***/ "./src/assets/img/macaron.jpeg":
/*!*************************************!*\
  !*** ./src/assets/img/macaron.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/macaron.508ee437.jpeg";

/***/ }),

/***/ "./src/assets/img/pancake.jpeg":
/*!*************************************!*\
  !*** ./src/assets/img/pancake.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pancake.ccbebf0e.jpeg";

/***/ }),

/***/ "./src/assets/img/popsicle.jpeg":
/*!**************************************!*\
  !*** ./src/assets/img/popsicle.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/popsicle.9ef9acbf.jpeg";

/***/ }),

/***/ "./src/assets/img/poundCake.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/poundCake.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/poundCake.c8cdd337.jpeg";

/***/ }),

/***/ "./src/assets/img/sm-橫式-想吃甜點是不需要理由的.svg":
/*!**********************************************!*\
  !*** ./src/assets/img/sm-橫式-想吃甜點是不需要理由的.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sm-橫式-想吃甜點是不需要理由的.211312f2.svg";

/***/ }),

/***/ "./src/assets/img/sm-橫式-為什麼一定要吃甜點.svg":
/*!********************************************!*\
  !*** ./src/assets/img/sm-橫式-為什麼一定要吃甜點.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sm-橫式-為什麼一定要吃甜點.a3477b03.svg";

/***/ }),

/***/ "./src/assets/img/sm-橫式-為什麼選擇了做甜點.svg":
/*!********************************************!*\
  !*** ./src/assets/img/sm-橫式-為什麼選擇了做甜點.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sm-橫式-為什麼選擇了做甜點.b5dd91e2.svg";

/***/ }),

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://sweet-taste.firebaseio.com"
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/components/Layout/FooterModify.js":
/*!***********************************************!*\
  !*** ./src/components/Layout/FooterModify.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/logo-light.svg */ "./src/assets/img/logo-light.svg");
/* harmony import */ var _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/logotype-lg-dark.svg */ "./src/assets/img/logotype-lg-dark.svg");
/* harmony import */ var _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/ic-line@.svg */ "./src/assets/img/ic-line@.svg");
/* harmony import */ var _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/ic-facebook.svg */ "./src/assets/img/ic-facebook.svg");
/* harmony import */ var _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/footer__title.svg */ "./src/assets/img/footer__title.svg");
/* harmony import */ var _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Layout/FooterModify.js";







var footerModify = function footerModify() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-registered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-row h-flex-lg-column h-pt-4 h-pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-registered__title h-flex h-align-items-center h-mb-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    width: "40",
    height: "40",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u8A02\u95B1\u4F60\u6211\u7684\u751C\u871C\u90F5\u4EF6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/",
    className: "l-registered__form h-flex h-align-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-envelope l-registered__form__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "l-registered__form__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "l-registered__form__submit h-ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      fontSize: "20px",
      color: "#3F5D45"
    },
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-row h-mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-footer__contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-footer__contact__logo h-mb-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: "171",
    height: "26",
    alt: "LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "l-footer__contact__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+0712345678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, " 02-1234-5678")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:sweetaste@email.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "sweetaste@email.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.google.com.tw/maps/place/Da%E2%80%99an+District,+Taipei+City/@25.0263064,121.5263363,14z/data=!3m1!4b1!4m5!3m4!1s0x3442aa2c1969f84d:0x6ea0b5cbf2d9955d!8m2!3d25.0261583!4d121.5427093",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "106 \u53F0\u5317\u5E02\u5927\u5B89\u5340\u5E78\u798F\u8DEF 59 \u865F")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-footer__title h-md-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    witdt: "59",
    height: "218",
    alt: "LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-row h-align-items-end h-align-items-md-start h-flex-md-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "l-footer__social h-flex h-mb-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/hazel_1_2/?hl=en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: "32",
    height: "32",
    alt: "IG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/Crocos0102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    width: "32",
    height: "32",
    alt: "FB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "l-footer__copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\xA92018 Sweetaste* All Rights Reserved")))));
};

/* harmony default export */ __webpack_exports__["default"] = (footerModify);

/***/ }),

/***/ "./src/components/Layout/HeaderImage.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/HeaderImage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Layout/HeaderImage.js";


var headerImage = function headerImage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-image__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.img,
    alt: "Header",
    className: "header-image__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (headerImage);

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/logo-all-dark.svg */ "./src/assets/img/logo-all-dark.svg");
/* harmony import */ var _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Logo/Logo.js";




var logo = function logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Navigation__logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    className: "Navigation__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./src/components/Navigation/NavDrawer/NavDrawer.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/NavDrawer/NavDrawer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationList/NavigationList */ "./src/components/Navigation/NavigationList/NavigationList.js");
/* harmony import */ var _components_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/UI/Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Navigation/NavDrawer/NavDrawer.js";




var navDrawer = function navDrawer(props) {
  var show = props.show,
      closed = props.closed;
  var attachedClasses = show ? ["Navigation__Drawer", "Navigation__Drawer--open"] : ["Navigation__Drawer", "Navigation__Drawer--close"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: show,
    clicked: closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: attachedClasses.join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closed: closed,
    isAuth: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (navDrawer);

/***/ }),

/***/ "./src/components/Navigation/NavToggle/NavToggle.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/NavToggle/NavToggle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Navigation/NavToggle/NavToggle.js";


var navToggle = function navToggle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation__toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation__button",
    onClick: props.toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Navigation__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (navToggle);

/***/ }),

/***/ "./src/components/Navigation/Navbar/Navbar.js":
/*!****************************************************!*\
  !*** ./src/components/Navigation/Navbar/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationList/NavigationList */ "./src/components/Navigation/NavigationList/NavigationList.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Navigation/Navbar/Navbar.js";



var NavigationNavbar = function NavigationNavbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Navigation__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "Navigation__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isAuth: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationNavbar);

/***/ }),

/***/ "./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js":
/*!***********************************************************************************!*\
  !*** ./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js";



var navigationItem = function navigationItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "Navigation__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: props.link,
    exact: true,
    className: "Navigation__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItem);

/***/ }),

/***/ "./src/components/Navigation/NavigationList/NavigationList.js":
/*!********************************************************************!*\
  !*** ./src/components/Navigation/NavigationList/NavigationList.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Navigation/NavigationList/NavigationList.js";



var navigationItems = function navigationItems(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "Navigation__list",
    onClick: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u9996\u9801"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u751C\u9EDE"), props.isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u767B\u51FA")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u767B\u5165/\u8A3B\u518A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItems);

/***/ }),

/***/ "./src/components/Product/CartItem/CartItem.js":
/*!*****************************************************!*\
  !*** ./src/components/Product/CartItem/CartItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Product/CartItem/CartItem.js";


var cartItem = function cartItem(props) {
  var product = props.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item__img-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: product.img,
    alt: "Item",
    className: "product__cart-item__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item__description-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading-primary--sm heading-primary--sm--light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading-primary--xs ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u8CFC\u8CB7\u6578\u91CF: ", product.count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item__price heading-primary--sm ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "NT$ ", product.price * product.count))));
};

/* harmony default export */ __webpack_exports__["default"] = (cartItem);

/***/ }),

/***/ "./src/components/Product/CartSideDrawer/CartSideDrawer.js":
/*!*****************************************************************!*\
  !*** ./src/components/Product/CartSideDrawer/CartSideDrawer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Product/CartSideDrawer/CartSideDrawer.js";

 // import { Link } from "react-router-dom";

var cartSideDrawer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(cartSideDrawer, _Component);

  function cartSideDrawer() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, cartSideDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(cartSideDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return nextProps.show !== _this.props.show || nextProps.children !== _this.props.children;
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(cartSideDrawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          closed = _this$props.closed,
          children = _this$props.children,
          totalPrice = _this$props.totalPrice;
      var attachedClasses = ["product__sideDrawer", "product__sideDrawer--close"];

      if (show) {
        attachedClasses = ["product__sideDrawer", "product__sideDrawer--open"];
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
        show: show,
        clicked: closed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: attachedClasses.join(" "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        onClick: closed,
        className: "heading-primary--medium",
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u8CFC\u7269\u8ECA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          margin: "2.5rem 0"
        },
        className: "heading-primary--medium ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u7E3D\u8A08: NT$ ", totalPrice), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn--light heading-primary--medium",
        onClick: this.props.continue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\b\u6AA2\u8996\u8CFC\u7269\u8ECA")));
    }
  }]);

  return cartSideDrawer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (cartSideDrawer);

/***/ }),

/***/ "./src/components/Product/CartToggle/CartToggle.js":
/*!*********************************************************!*\
  !*** ./src/components/Product/CartToggle/CartToggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Product/CartToggle/CartToggle.js";


var cartToggle = function cartToggle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-toggle",
    onClick: props.toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-toggle__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cart-toggle__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.count)));
};

/* harmony default export */ __webpack_exports__["default"] = (cartToggle); // https://yanoon.com.tw/shop/products.html

/***/ }),

/***/ "./src/components/Product/ProductCard/ProductCard.js":
/*!***********************************************************!*\
  !*** ./src/components/Product/ProductCard/ProductCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Product/ProductCard/ProductCard.js";



var productCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(productCard, _Component);

  function productCard() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, productCard);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(productCard).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(productCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          clicked = _this$props.clicked;
      var tag = product.tag ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__tag ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, product.tag) : null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: product.img,
        alt: "Item",
        className: "product__card__img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), tag), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__title heading-primary--sm heading-primary--sm--light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, product.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__price heading-primary--sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "NT$ ", product.price)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn--light heading-primary--medium",
        onClick: function onClick() {
          return clicked(product);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u52A0\u5230\u8CFC\u7269\u8ECA"));
    }
  }]);

  return productCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

productCard.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (productCard);

/***/ }),

/***/ "./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js":
/*!*********************************************************************************!*\
  !*** ./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js";


var productMenusList = function productMenusList(props) {
  var filters = ["所有甜點", "本日精選", "人氣精選", "新品上市"];
  var menus = filters.map(function (filter, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: i,
      onClick: function onClick() {
        return props.filter(filter);
      },
      className: "btn btn--light heading-primary--medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, filter);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__aside ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__aside__title heading-primary--medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u751C\u9EDE\u985E\u5225"), menus);
};

/* harmony default export */ __webpack_exports__["default"] = (productMenusList); // eslint-disable-next-line no-lone-blocks

{
  /* <div className="product__aside">
        <div className="product__aside__title">甜點類別</div>
        <ul className="product__aside__list">
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              所有甜點
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              本日精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              人氣精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              新品上市
            </a>
          </li>
        </ul>
      </div> */
}

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.js":
/*!************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.module.css */ "./src/components/UI/Backdrop/Backdrop.module.css");
/* harmony import */ var _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/UI/Backdrop/Backdrop.js";



var backdrop = function backdrop(props) {
  return props.show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Backdrop,
    onClick: props.clicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.module.css":
/*!********************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/UI/Modal/Modal.js":
/*!******************************************!*\
  !*** ./src/components/UI/Modal/Modal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal.module.css */ "./src/components/UI/Modal/Modal.module.css");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/UI/Modal/Modal.js";
// rafc




var Modal =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      // I am not checking if the modalClosed props were changed in here
      // and I did not use PureComponent in here, because it run more check
      // than I need to do.
      return nextProps.show !== _this.props.show || nextProps.children !== _this.props.children;
    };

    _this.componentWillUpdate = function (nextProps, nextState) {
      console.log("[Modal] will update");
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
        show: this.props.show,
        clicked: this.props.modalClosed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.Modal,
        style: {
          transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/UI/Modal/Modal.module.css":
/*!**************************************************!*\
  !*** ./src/components/UI/Modal/Modal.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Modal.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Modal/Modal.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Modal.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Modal/Modal.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Modal.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Modal/Modal.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/UI/Spinner/Spinner.js":
/*!**********************************************!*\
  !*** ./src/components/UI/Spinner/Spinner.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.module.css */ "./src/components/UI/Spinner/Spinner.module.css");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/components/UI/Spinner/Spinner.js";



var spinner = function spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Loader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Loading...");
};

/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./src/components/UI/Spinner/Spinner.module.css":
/*!******************************************************!*\
  !*** ./src/components/UI/Spinner/Spinner.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Auth/Logout/Logout.js":
/*!**********************************************!*\
  !*** ./src/containers/Auth/Logout/Logout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/index */ "./src/store/actions/index.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/containers/Auth/Logout/Logout.js";



 // 負責登出以及re-direct

var Logout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Logout, _Component);

  function Logout() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logout);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logout).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onLogout();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    }
  }]);

  return Logout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_8__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(Logout));

/***/ }),

/***/ "./src/containers/Home/Home.js":
/*!*************************************!*\
  !*** ./src/containers/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_pancake_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/pancake.jpeg */ "./src/assets/img/pancake.jpeg");
/* harmony import */ var _assets_img_pancake_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_pancake_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_popsicle_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/popsicle.jpeg */ "./src/assets/img/popsicle.jpeg");
/* harmony import */ var _assets_img_popsicle_jpeg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_popsicle_jpeg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_img_macaron_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/macaron.jpeg */ "./src/assets/img/macaron.jpeg");
/* harmony import */ var _assets_img_macaron_jpeg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_img_macaron_jpeg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_poundCake_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/poundCake.jpeg */ "./src/assets/img/poundCake.jpeg");
/* harmony import */ var _assets_img_poundCake_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_poundCake_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/lg-為什麼選擇了做甜點.svg */ "./src/assets/img/lg-為什麼選擇了做甜點.svg");
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/sm-橫式-為什麼選擇了做甜點.svg */ "./src/assets/img/sm-橫式-為什麼選擇了做甜點.svg");
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/lg-為什麼一定要吃甜點.svg */ "./src/assets/img/lg-為什麼一定要吃甜點.svg");
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/sm-橫式-為什麼一定要吃甜點.svg */ "./src/assets/img/sm-橫式-為什麼一定要吃甜點.svg");
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/img/lg-想吃甜點是不需要理由的.svg */ "./src/assets/img/lg-想吃甜點是不需要理由的.svg");
/* harmony import */ var _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/img/sm-橫式-想吃甜點是不需要理由的.svg */ "./src/assets/img/sm-橫式-想吃甜點是不需要理由的.svg");
/* harmony import */ var _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Product/ProductCard/ProductCard */ "./src/components/Product/ProductCard/ProductCard.js");
/* harmony import */ var _hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hoc/withErrorHandler/withErrorHandler */ "./src/hoc/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../store/actions/index */ "./src/store/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/containers/Home/Home.js";
 // import HeaderSlider from "../../components/Layout/HeaderSlider";


 // import lemonPie from "../../assets/img/lemonpie.jpeg";
// import donuts from "../../assets/img/donuts.jpeg";
















var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //因為這一頁與products page 都會使用, 只需要initializes 一次就好了
      if (!this.props.pds) {
        this.props.initProducts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var menuList = [{
        img: _assets_img_pancake_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
        title: "本日精選",
        a: "h-hero__list__block-today"
      }, {
        img: _assets_img_macaron_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a,
        title: "人氣推薦",
        a: "h-hero__list__block-popular"
      }, {
        img: _assets_img_popsicle_jpeg__WEBPACK_IMPORTED_MODULE_7___default.a,
        title: "新品上市",
        a: "h-hero__list__block-today"
      }];
      var products = null;

      if (this.props.pds) {
        products = this.props.pds.slice(0, 3).map(function (product) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col-1-of-3",
            key: product.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
            product: product,
            clicked: _this.props.addToCart,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "h-hero col-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_assets_img_poundCake_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a, ")")
        },
        className: "h-hero__bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-row h-hero__list justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "h-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, menuList.map(function (menuItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "h-hero__list__block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__["NavLink"], {
          to: {
            pathname: "/products",
            search: "?tag=".concat(menuItem.title)
          },
          className: menuItem.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            backgroundImage: "url(".concat(menuItem.img, ")")
          },
          className: "h-hero__list__block__img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "h-hero__list__block__bg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "h-hero__list__block__word",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, menuItem.title)));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section-mobile h-lg-block h-mt-lg-5 h-mb-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "\u70BA\u4EC0\u9EBC\u9078\u64C7\u4E86\u505A\u751C\u9EDE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundImage: "url(\"https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=2712a33fe9b13532f0682ac4e1e749b8&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80\")"
        },
        className: "p-story__section__img__pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__content h-flex h-justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__content__p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u9752\u5C71\u4F9D\u820A\u5728\uFF0C\u5E7E\u5EA6\u5915\u967D\u7D05\u3002\u6163\u770B\u79CB\u6708\u6625\u98A8\u3002\u4E00\u58FA\u6FC1\u9152\u559C\u76F8\u9022\uFF0C\u6D6A\u82B1\u6DD8\u76E1\u82F1\u96C4\u3002\u662F\u975E\u6210\u6557\u8F49\u982D\u7A7A\uFF0C\u6EFE\u6EFE\u9577\u6C5F\u6771\u901D\u6C34\uFF0C\u767D\u9AEE\u6F01\u6A35\u6C5F\u6E1A\u4E0A\uFF0C\u53E4\u4ECA\u591A\u5C11\u4E8B\uFF0C\u90FD\u4ED8\u7B11\u8AC7\u4E2D\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u662F\u975E\u6210\u6557\u8F49\u982D\u7A7A\uFF0C\u6EFE\u6EFE\u9577\u6C5F\u6771\u901D\u6C34\uFF0C\u767D\u9AEE\u6F01\u6A35\u6C5F\u6E1A\u4E0A\uFF0C\u53E4\u4ECA\u591A\u5C11\u4E8B\uFF0C\u90FD\u4ED8\u7B11\u8AC7\u4E2D\u3002"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "\u70BA\u4EC0\u9EBC\u9078\u64C7\u4E86\u505A\u751C\u9EDE",
        style: {
          width: "89px",
          height: "307px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section-mobile h-none h-lg-block h-mt-lg-5 h-mb-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "\u70BA\u4EC0\u9EBC\u4E00\u5B9A\u8981\u5403\u751C\u9EDE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section p-story__section-need h-mb-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__content h-flex h-justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__content__p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "\u9752\u5C71\u4F9D\u820A\u5728\uFF0C\u5E7E\u5EA6\u5915\u967D\u7D05\u3002\u6163\u770B\u79CB\u6708\u6625\u98A8\u3002\u4E00\u58FA\u6FC1\u9152\u559C\u76F8\u9022\uFF0C\u6D6A\u82B1\u6DD8\u76E1\u82F1\u96C4\u3002\u662F\u975E\u6210\u6557\u8F49\u982D\u7A7A\uFF0C\u6EFE\u6EFE\u9577\u6C5F\u6771\u901D\u6C34\uFF0C\u767D\u9AEE\u6F01\u6A35\u6C5F\u6E1A\u4E0A\uFF0C\u53E4\u4ECA\u591A\u5C11\u4E8B\uFF0C\u90FD\u4ED8\u7B11\u8AC7\u4E2D\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "\u662F\u975E\u6210\u6557\u8F49\u982D\u7A7A\uFF0C\u6EFE\u6EFE\u9577\u6C5F\u6771\u901D\u6C34\uFF0C\u767D\u9AEE\u6F01\u6A35\u6C5F\u6E1A\u4E0A\uFF0C\u53E4\u4ECA\u591A\u5C11\u4E8B\uFF0C\u90FD\u4ED8\u7B11\u8AC7\u4E2D\u3002"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "\u70BA\u4EC0\u9EBC\u4E00\u5B9A\u8981\u5403\u751C\u9EDE",
        style: {
          width: "89px",
          height: "307px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section__img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundImage: "url(\"https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ce7267675921fc7e41b5610f49750a40&amp;auto=format&amp;fit=crop&amp;w=685&amp;q=80\")"
        },
        className: "p-story__section__img__pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "h-flex h-justify-content-center p-story__section__whyNeed__desktopTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_lg_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        style: {
          width: "89px",
          height: "327px"
        },
        alt: "\u60F3\u5403\u751C\u9EDE\u662F\u4E0D\u9700\u8981\u7406\u7531\u7684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-story__section-mobile h-lg-block h-mt-lg-5 h-mb-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_img_sm_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "\u60F3\u5403\u751C\u9EDE\u662F\u4E0D\u9700\u8981\u7406\u7531\u7684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, products)));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pds: state.products.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initProducts: function initProducts() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_20__["initProducts"]());
    },
    addToCart: function addToCart(product) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_20__["addProduct"](product));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_17__["default"])(Home, _axios__WEBPACK_IMPORTED_MODULE_18__["default"])));

/***/ }),

/***/ "./src/containers/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/containers/Products/Products.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/index */ "./src/store/actions/index.js");
/* harmony import */ var _components_Layout_HeaderImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout/HeaderImage */ "./src/components/Layout/HeaderImage.js");
/* harmony import */ var _components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Product/ProductCard/ProductCard */ "./src/components/Product/ProductCard/ProductCard.js");
/* harmony import */ var _components_Product_ProductMenu_ProductMenusList_ProductMenusList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Product/ProductMenu/ProductMenusList/ProductMenusList */ "./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js");
/* harmony import */ var _components_Product_CartSideDrawer_CartSideDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Product/CartSideDrawer/CartSideDrawer */ "./src/components/Product/CartSideDrawer/CartSideDrawer.js");
/* harmony import */ var _components_Product_CartToggle_CartToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Product/CartToggle/CartToggle */ "./src/components/Product/CartToggle/CartToggle.js");
/* harmony import */ var _components_Product_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Product/CartItem/CartItem */ "./src/components/Product/CartItem/CartItem.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hoc/withErrorHandler/withErrorHandler */ "./src/hoc/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");






var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/containers/Products/Products.js";













var Products =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      products: [],
      showOrderSummary: false,
      showNavigation: false,
      tag: null
    };

    _this.orderSummaryToggledHandler = function () {
      _this.setState(function (preState) {
        return {
          showOrderSummary: !preState.showOrderSummary // showNavigation: false //這是之前cartsidedrawer放在layout的那一層寫的,希望cartsidedrawer打開時,navigationbar就會關起來

        };
      });
    };

    _this.orderSummaryClosedHandler = function () {
      _this.setState(function () {
        return {
          showOrderSummary: false
        };
      });
    };

    _this.productListHandler = function (tag) {
      var totalProducts = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.props.pds);

      if (tag === "所有甜點") {
        _this.setState({
          products: totalProducts
        });
      } else {
        var updateProducts = totalProducts.filter(function (product) {
          return product.tag === tag;
        });

        _this.setState({
          products: updateProducts
        });
      }
    };

    _this.purchasingContinueHandler = function () {
      _this.props.history.push("/checkout");
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Products, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.pds) {
        this.props.initProducts();
      }

      var tag = new URLSearchParams(this.props.location.search).get("tag");
      this.setState({
        products: this.props.pds,
        tag: tag
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.props.error ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          fontSize: "16px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Products can't be loaded") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      });

      if (this.props.pds) {
        products = this.props.pds.map(function (product) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: product.id,
            product: product,
            clicked: _this2.props.addToCart,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          });
        });
      }

      if (this.state.products) {
        products = this.state.products.map(function (product) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: product.id,
            product: product,
            clicked: _this2.props.addToCart,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          });
        });
      }

      var cart = this.props.cart.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: item.id + i,
          product: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout_HeaderImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: "https://bit.ly/2Qodh3Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartToggle_CartToggle__WEBPACK_IMPORTED_MODULE_13__["default"], {
        toggle: this.orderSummaryToggledHandler,
        show: true,
        count: this.props.count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartSideDrawer_CartSideDrawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        show: this.state.showOrderSummary,
        closed: this.orderSummaryClosedHandler,
        totalPrice: this.props.totalPrice,
        continue: this.purchasingContinueHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, cart), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-1-of-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_ProductMenu_ProductMenusList_ProductMenusList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        filter: this.productListHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-2-of-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, products))));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // NOTE: mapStateToProps holds a function which receives the state automatically and which returns a javascript object where we define which property should hold which slice of the state.


var mapStateToProps = function mapStateToProps(state) {
  return {
    pds: state.products.products,
    error: state.products.error,
    cart: state.products.cart,
    count: state.products.count,
    totalPrice: state.products.totalPrice
  };
}; // NOTE: mapDispatchToProps receives a function or holds a function which receives the dispatch function as an argument and then also the returns object with props function mappings


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initProducts: function initProducts() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_8__["initProducts"]());
    },
    addToCart: function addToCart(product) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_8__["addProduct"](product));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_16__["default"])(Products, _axios__WEBPACK_IMPORTED_MODULE_17__["default"])));

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navigation/Navbar/Navbar */ "./src/components/Navigation/Navbar/Navbar.js");
/* harmony import */ var _components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Navigation/NavDrawer/NavDrawer */ "./src/components/Navigation/NavDrawer/NavDrawer.js");
/* harmony import */ var _components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Navigation/NavToggle/NavToggle */ "./src/components/Navigation/NavToggle/NavToggle.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/hoc/Layout/Layout.js";







var layout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(layout, _Component);

  function layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(layout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showNavigation: false,
      showOrderSummary: false // 用來控制cartSideDrawer的開關

    };

    _this.navigationClosedHandler = function () {
      _this.setState({
        showNavigation: false
      });
    };

    _this.navigationToggledHandler = function () {
      _this.setState(function (preState) {
        return {
          showNavigation: !preState.showNavigation,
          showOrderSummary: false
        };
      });
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        toggle: this.navigationToggledHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAuth: this.props.isAuthenticated,
        show: this.state.showNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isAuth: this.props.isAuthenticated,
        show: this.state.showNavigation,
        closed: this.navigationClosedHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        style: {
          marginTop: "10rem",
          width: "100vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(layout));

/***/ }),

/***/ "./src/hoc/asyncComponent/asyncComponent.js":
/*!**************************************************!*\
  !*** ./src/hoc/asyncComponent/asyncComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/hoc/asyncComponent/asyncComponent.js";


var asyncComponent = function asyncComponent(importComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          component: null
        };
        return _this;
      }

      Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          importComponent().then(function (cmp) {
            _this2.setState({
              component: cmp.default
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var C = this.state.component;
          return C ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(C, Object.assign({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          })) : null;
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_5__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (asyncComponent);

/***/ }),

/***/ "./src/hoc/withErrorHandler/withErrorHandler.js":
/*!******************************************************!*\
  !*** ./src/hoc/withErrorHandler/withErrorHandler.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/hoc/withErrorHandler/withErrorHandler.js";



var withErrorHandle = function withErrorHandle(WrappedComponent, axios) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          error: null
        };

        _this.errorConfirmedHandler = function () {
          _this.setState({
            error: null
          });
        };

        return _this;
      }

      Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          var _this2 = this;

          //Now I have to state property already I can simply add new properties. So for that I will simply create a new property on the fly by using this, the this keyword to refer to the class.
          this.reqInterceptor = axios.interceptors.request.use(function (req) {
            _this2.setState({
              error: null
            });

            return req;
          });
          this.resInterceptor = axios.interceptors.response.use(function (res) {
            return res;
          }, function (error) {
            _this2.setState({
              error: error
            });
          });
        } //Now as the name suggests, this is a lifecycle method which is executed at the point of time a component isn't required anymore.

      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          axios.interceptors.request.eject(this.reqInterceptor);
          axios.interceptors.response.eject(this.resInterceptor);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            show: this.state.error,
            modalClosed: this.errorConfirmedHandler,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, this.state.error ? this.state.error.message : null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, Object.assign({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          })));
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_5__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (withErrorHandle); // <WrappedComponent {...props} /> is equivalent to React.createElement(WrappedComponent, props, null)
//Now keep in mind, this withErrorHandle function is not a functional component, it's a normal javascript function which expects one argument which then returns a function which qualifies as a functional component, this one here.

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _store_reducers_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers/products */ "./src/store/reducers/products.js");
/* harmony import */ var _store_reducers_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducers/order */ "./src/store/reducers/order.js");
/* harmony import */ var _store_reducers_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/reducers/auth */ "./src/store/reducers/auth.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/index.js";












var composeEnhancers =  true ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined;
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  products: _store_reducers_products__WEBPACK_IMPORTED_MODULE_9__["default"],
  order: _store_reducers_order__WEBPACK_IMPORTED_MODULE_10__["default"],
  auth: _store_reducers_auth__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(rootReducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"])));
var app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(app, document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_8__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/actions/actionTypes.js":
/*!******************************************!*\
  !*** ./src/store/actions/actionTypes.js ***!
  \******************************************/
/*! exports provided: ADD_PRODUCT, REMOVE_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS, FETCH_PRODUCTS_FAILED, HANDLE_PRODUCTS_LIST, PURCHASE_PRODUCTS_START, PURCHASE_PRODUCTS_SUCCESS, PURCHASE_PRODUCTS_FAIL, PURCHASE_INIT, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUCT", function() { return REMOVE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT", function() { return DELETE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PRODUCTS", function() { return SET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_FAILED", function() { return FETCH_PRODUCTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_PRODUCTS_LIST", function() { return HANDLE_PRODUCTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_PRODUCTS_START", function() { return PURCHASE_PRODUCTS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_PRODUCTS_SUCCESS", function() { return PURCHASE_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_PRODUCTS_FAIL", function() { return PURCHASE_PRODUCTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_INIT", function() { return PURCHASE_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_START", function() { return FETCH_ORDERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_SUCCESS", function() { return FETCH_ORDERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_FAIL", function() { return FETCH_ORDERS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
var ADD_PRODUCT = "ADD_PRODUCT"; // addCartItemHander(add product to cart)

var REMOVE_PRODUCT = "REMOVE_PRODUCT"; // removeCartItemHander(remove product from cart)

var DELETE_PRODUCT = "DELETE_PRODUCT"; // deleteCartItemHander(delete product from cart)

var SET_PRODUCTS = "SET_PRODUCTS";
var FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED";
var HANDLE_PRODUCTS_LIST = "HANDLE_PRODUCTS_LIST"; //還沒做好

var PURCHASE_PRODUCTS_START = "PURCHASE_PRODUCTS_START";
var PURCHASE_PRODUCTS_SUCCESS = "PURCHASE_PRODUCTS_SUCCESS";
var PURCHASE_PRODUCTS_FAIL = "PURCHASE_PRODUCTS_FAIL";
var PURCHASE_INIT = "PURCHASE_INIT";
var FETCH_ORDERS_START = "FETCH_ORDERS_START";
var FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
var FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";
var AUTH_START = "AUTH_START";
var AUTH_SUCCESS = "AUTH_SUCCESS";
var AUTH_FAIL = "AUTH_FAIL";
var AUTH_LOGOUT = "AUTH_LOGOUT";

/***/ }),

/***/ "./src/store/actions/auth.js":
/*!***********************************!*\
  !*** ./src/store/actions/auth.js ***!
  \***********************************/
/*! exports provided: authStart, authSuccess, authFail, logout, checkAuthTimeout, auth, authCheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStart", function() { return authStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFail", function() { return authFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthTimeout", function() { return checkAuthTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return authCheckState; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");


var authStart = function authStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_START"]
  };
};
var authSuccess = function authSuccess(token, userId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_SUCCESS"],
    idToken: token,
    userId: userId
  };
};
var authFail = function authFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_FAIL"],
    error: err
  };
};
var logout = function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGOUT"]
  };
};
var checkAuthTimeout = function checkAuthTimeout(expirationTime) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
var auth = function auth(email, password, isSignup) {
  return function (dispatch) {
    dispatch(authStart());
    var authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    var url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBVppb02ujQkffW6V0B73u1Czz3MptxKyA";

    if (!isSignup) {
      url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBVppb02ujQkffW6V0B73u1Czz3MptxKyA";
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, authData).then(function (res) {
      var expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
      localStorage.setItem("token", res.data.idToken);
      localStorage.setItem("userId", res.data.localId);
      localStorage.setItem("expirationDate", expirationDate);
      dispatch(authSuccess(res.data.idToken, res.data.localId));
      dispatch(checkAuthTimeout(res.data.expiresIn));
    }).catch(function (err) {
      dispatch(authFail(err.response.data.error));
    });
  };
};
var authCheckState = function authCheckState() {
  return function (dispatch) {
    var token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      var expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate > new Date()) {
        var userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      } else {
        dispatch(logout());
      }
    }
  };
};

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: initProducts, addProduct, removeProduct, deleteProduct, handleProductsList, purchaseProducts, purchaseInit, fetchOrders, auth, logout, authCheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/store/actions/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["initProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["addProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["removeProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["deleteProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleProductsList", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["handleProductsList"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/store/actions/order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseProducts", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["purchaseProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseInit", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["purchaseInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["fetchOrders"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/store/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["auth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["authCheckState"]; });





/***/ }),

/***/ "./src/store/actions/order.js":
/*!************************************!*\
  !*** ./src/store/actions/order.js ***!
  \************************************/
/*! exports provided: purchaseProductsSuccess, purchaseProductsFail, purchaseProductsStart, purchaseProducts, purchaseInit, fetchOrdersSuccess, fetchOrdersFail, fetchOrdersStart, fetchOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseProductsSuccess", function() { return purchaseProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseProductsFail", function() { return purchaseProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseProductsStart", function() { return purchaseProductsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseProducts", function() { return purchaseProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseInit", function() { return purchaseInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersSuccess", function() { return fetchOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersFail", function() { return fetchOrdersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersStart", function() { return fetchOrdersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return fetchOrders; });
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");



var purchaseProductsSuccess = function purchaseProductsSuccess(id, order) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_SUCCESS"],
    orderId: id,
    orderData: order
  };
};
var purchaseProductsFail = function purchaseProductsFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_FAIL"],
    error: error
  };
};
var purchaseProductsStart = function purchaseProductsStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_START"]
  };
};
var purchaseProducts = function purchaseProducts(order, token) {
  return function (dispatch) {
    dispatch(purchaseProductsStart());
    _axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/orders.json?auth=" + token, order).then(function (res) {
      dispatch(purchaseProductsSuccess(res.data.name, order));
    }).catch(function (error) {
      dispatch(purchaseProductsFail(error));
    });
  };
};
var purchaseInit = function purchaseInit() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_INIT"]
  };
};
var fetchOrdersSuccess = function fetchOrdersSuccess(orders) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_SUCCESS"],
    orders: orders
  };
};
var fetchOrdersFail = function fetchOrdersFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_FAIL"],
    error: error
  };
};
var fetchOrdersStart = function fetchOrdersStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_START"]
  };
};
var fetchOrders = function fetchOrders(token, userId) {
  return function (dispatch) {
    dispatch(fetchOrdersStart());
    var queryParams = "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    _axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/orders.json" + queryParams).then(function (res) {
      var fetchedOrders = [];

      for (var key in res.data) {
        fetchedOrders.push(Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, res.data[key], {
          id: key
        }));
      }

      dispatch(fetchOrdersSuccess(fetchedOrders));
    }).catch(function (err) {
      dispatch(fetchOrdersFail(err));
    });
  };
};

/***/ }),

/***/ "./src/store/actions/products.js":
/*!***************************************!*\
  !*** ./src/store/actions/products.js ***!
  \***************************************/
/*! exports provided: addProduct, removeProduct, deleteProduct, setProducts, fetchedProductsFailed, initProducts, handleProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProduct", function() { return removeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProducts", function() { return setProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchedProductsFailed", function() { return fetchedProductsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProducts", function() { return initProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleProductsList", function() { return handleProductsList; });
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");



var addProduct = function addProduct(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_PRODUCT"],
    product: product
  };
};
var removeProduct = function removeProduct(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PRODUCT"],
    product: product
  };
};
var deleteProduct = function deleteProduct(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["DELETE_PRODUCT"],
    product: product
  };
};
var setProducts = function setProducts(products) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_PRODUCTS"],
    products: products
  };
};
var fetchedProductsFailed = function fetchedProductsFailed() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_FAILED"]
  };
}; // by using redux-thunk

var initProducts = function initProducts() {
  return function (dispatch) {
    _axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/products.json").then(function (res) {
      var fetchedProducts = [];

      for (var key in res.data) {
        fetchedProducts.push(Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, res.data[key], {
          productNo: key
        }));
      }

      dispatch(setProducts(fetchedProducts));
    }).catch(function (error) {
      return dispatch(fetchedProductsFailed());
    });
  };
};
var handleProductsList = function handleProductsList(tag) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["HANDLE_PRODUCTS_LIST"],
    tag: tag
  };
};

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");


var initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_START"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        loading: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_SUCCESS"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_FAIL"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: action.error,
        loading: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGOUT"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: null,
        userId: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/reducers/order.js":
/*!*************************************!*\
  !*** ./src/store/reducers/order.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");


var initialState = {
  orders: [],
  loading: false,
  purchased: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_INIT"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        purchased: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_START"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_SUCCESS"]:
      var newOrder = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.orderData, {
        id: action.orderId
      });

      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_PRODUCTS_FAIL"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_START"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_SUCCESS"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        orders: action.orders,
        loading: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_FAIL"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/reducers/products.js":
/*!****************************************!*\
  !*** ./src/store/reducers/products.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");



var initialState = {
  products: null,
  //totalProducts
  productsList: null,
  //products show on the page
  error: false,
  cart: [],
  count: 0,
  totalPrice: 0,
  shippingFee: 200
};

var addProduct = function addProduct(state, action) {
  return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    products: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["products"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product);
    }),
    cart: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["cart"]).find(function (product) {
      return product.id === action.product.id;
    }) ? Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["cart"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product, {
        count: product.id === action.product.id ? product.count + 1 : product.count
      });
    }) : Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["cart"]).concat(Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.product, {
      count: 1
    })),
    count: state["count"] + 1,
    totalPrice: state["totalPrice"] + action.product["price"]
  });
};

var removeProduct = function removeProduct(state, action) {
  return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    products: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["products"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product);
    }),
    cart: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["cart"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product, {
        count: product.id === action.product.id ? product.count - 1 : product.count
      });
    }),
    count: state["count"] - 1,
    totalPrice: state["totalPrice"] - action.product["price"]
  });
};

var deleteProduct = function deleteProduct(state, action) {
  var updateState = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    products: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["products"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product);
    }),
    cart: Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state["cart"]).map(function (product) {
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, product);
    })
  });

  var updateCart = updateState["cart"];
  var productIndex = updateCart.findIndex(function (product) {
    return product.id === action.product.id;
  });
  updateCart.splice(productIndex, 1);
  updateState.cart = updateCart;
  updateState.count = updateCart.reduce(function (acc, item) {
    return acc += item.count;
  }, 0);
  updateState.totalPrice = updateCart.reduce(function (acc, item) {
    return acc += item.price;
  }, 0);
  return updateState;
};

var setProducts = function setProducts(state, action) {
  return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    products: action.products,
    productsList: action.products,
    error: false,
    cart: [],
    count: 0,
    totalPrice: 0
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_PRODUCT"]:
      return addProduct(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PRODUCT"]:
      return removeProduct(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["DELETE_PRODUCT"]:
      return deleteProduct(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_PRODUCTS"]:
      return setProducts(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCTS_FAILED"]:
      return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        error: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",5]]]);
//# sourceMappingURL=main.chunk.js.map