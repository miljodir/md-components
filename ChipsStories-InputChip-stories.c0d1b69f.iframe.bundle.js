/*! For license information please see ChipsStories-InputChip-stories.c0d1b69f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[4098,8735],{"./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.renderElement)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.unmountElement)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oz,vD:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.vD});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PRSJUHPQ.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs"),__webpack_require__("storybook/internal/preview-api");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./stories/ChipsStories/InputChip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputChip:()=>InputChip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("storybook/internal/preview-api"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_packages_css_src_chips_README_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/css/src/chips/README.md"),_packages_react_src_chips_MdInputChip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/chips/MdInputChip.tsx"),_packages_react_src_icons_material_MdIconAccountCircle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icons-material/MdIconAccountCircle.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Chips/InputChip",component:_packages_react_src_chips_MdInputChip__WEBPACK_IMPORTED_MODULE_4__.U,parameters:{docs:{page:()=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,null),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,null),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,null),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,null),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,null),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.oz,null,_packages_css_src_chips_README_md__WEBPACK_IMPORTED_MODULE_3__.toString())),description:{component:"A chip component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Button element. In this example clicks toggle active state.<br/><br/>`import { MdInputChip } from '@miljodirektoratet/md-react'`"}}},argTypes:{label:{description:"The chips label",table:{type:{summary:"text"}},control:"text"},id:{description:"Id for the chip. If not set, uses a random uuid",table:{defaultValue:{summary:"useId()"},type:{summary:"text"}},control:"text"},disabled:{description:"Toggle disabled state on/off",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},active:{description:"Apply active state to chip",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},hideCloseIcon:{description:"Set this to `true` to hide the close icon (X) in the chip",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},prefixIcon:{type:{name:"ReactNode"},description:"Prefix icon to apply before chip label. Will render a 16px x 16px container with icon passed.",table:{defaultValue:{summary:"null"},type:{summary:"DomElement | image | ReactNode"}},control:{type:"boolean"}},solid:{description:"Set this to `true` to keep background color on all states",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},onClick:{type:{name:"function"},description:"Callback for click handling.",table:{defaultValue:{summary:"function"},type:{summary:null}}}}},InputChip=(args=>{const[,updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)();return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_packages_react_src_chips_MdInputChip__WEBPACK_IMPORTED_MODULE_4__.U,_extends({},args,{prefixIcon:args.prefixIcon?react__WEBPACK_IMPORTED_MODULE_2__.createElement(_packages_react_src_icons_material_MdIconAccountCircle__WEBPACK_IMPORTED_MODULE_5__.C,null):null,onClick:()=>{updateArgs({...args,active:!args.active})}}))}).bind({});InputChip.args={label:"Label",disabled:!1,active:!1,hideCloseIcon:!1,prefixIcon:!1,solid:!1};const __namedExportsOrder=["InputChip"];InputChip.parameters={...InputChip.parameters,docs:{...InputChip.parameters?.docs,source:{originalSource:"(args: MdInputChipProps) => {\n  const [, updateArgs] = useArgs();\n  const handleClick = () => {\n    updateArgs({\n      ...args,\n      active: !args.active\n    });\n  };\n  return <MdInputChip {...args} prefixIcon={args.prefixIcon ? <MdIconAccountCircle /> : null} onClick={() => {\n    handleClick();\n  }} />;\n}",...InputChip.parameters?.docs?.source}}}},"./node_modules/@storybook/react-dom-shim/dist/react-18.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{renderElement:()=>renderElement,unmountElement:()=>unmountElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithCallback,{callback:resolve},node)),promise},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=react_dom_client__WEBPACK_IMPORTED_MODULE_1__.H(el,rootOptions),nodes.set(el,root)),root}},"./packages/react/src/chips/MdInputChip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,U:()=>MdInputChip});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_icons_material_MdIconClose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icons-material/MdIconClose.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdInputChip=_ref=>{let{label,id,active=!1,disabled=!1,prefixIcon=null,className="",hideCloseIcon=!1,solid=!1,...otherProps}=_ref;const uuid=(0,react__WEBPACK_IMPORTED_MODULE_1__.useId)(),chipId=id&&""!==id?id:uuid,buttonClassNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-chip",className,{"md-chip--active":!!active,"md-chip--disabled":!!disabled,"md-chip--solid":!!solid});return react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_extends({type:"button",className:buttonClassNames,id:chipId||void 0,disabled},otherProps),prefixIcon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{"aria-hidden":"true",className:"md-chip__left-icon"},prefixIcon),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"md-chip__label"},label),!hideCloseIcon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{"aria-hidden":"true",className:"md-chip__right-icon"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons_material_MdIconClose__WEBPACK_IMPORTED_MODULE_2__.A,null)))},__WEBPACK_DEFAULT_EXPORT__=MdInputChip},"./packages/react/src/icons-material/MdIconAccountCircle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>MdIconAccountCircle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconAccountCircle=_ref=>{let{className,large=!1,...otherProps}=_ref;return large?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M232-253.08q59.92-41.3 119.23-64.03 59.31-22.74 128.77-22.74 69.46 0 129.08 22.74 59.61 22.73 119.53 64.03 43.62-50.53 64.81-106.72 21.19-56.19 21.19-120.2 0-141.54-96.53-238.08-96.54-96.53-238.08-96.53-141.54 0-238.08 96.53-96.53 96.54-96.53 238.08 0 64.01 21.5 120.2T232-253.08Zm247.78-204.23q-53.93 0-90.74-37.02-36.81-37.03-36.81-90.96 0-53.94 37.03-90.75 37.02-36.81 90.96-36.81 53.93 0 90.74 37.03 36.81 37.02 36.81 90.96 0 53.94-37.03 90.74-37.02 36.81-90.96 36.81Zm.69 357.31q-79.01 0-148.24-29.77-69.24-29.77-120.96-81.58-51.73-51.8-81.5-120.72-29.77-68.92-29.77-148T129.77-628q29.77-68.85 81.58-120.65 51.8-51.81 120.72-81.58 68.92-29.77 148-29.77T628-830.23q68.85 29.77 120.65 81.58 51.81 51.8 81.58 120.68Q860-559.09 860-480.47q0 79.01-29.77 148.24-29.77 69.24-81.58 120.96-51.8 51.73-120.68 81.5Q559.09-100 480.47-100Zm-.47-45.39q55.77 0 110-17.73t102.15-57.34q-47.92-35.23-101.5-54.62-53.57-19.38-110.65-19.38-57.08 0-110.85 19.19-53.77 19.19-100.92 54.81 47.54 39.61 101.77 57.34 54.23 17.73 110 17.73Zm.05-357.3q35.87 0 59.1-23.29 23.24-23.28 23.24-59.15t-23.29-59.1q-23.28-23.23-59.15-23.23t-59.1 23.28q-23.24 23.29-23.24 59.16t23.29 59.1q23.28 23.23 59.15 23.23Zm-.05-82.39Zm0 365.16Z"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M243.92-277.31q54-36.84 112.62-54.77Q415.15-350 480-350t123.46 17.92q58.62 17.93 112.62 54.77 37.3-41 56.61-92.92Q792-422.15 792-480q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 57.85 19.31 109.77 19.31 51.92 56.61 92.92ZM480.01-418q-55.78 0-94.89-39.1Q346-496.21 346-551.99t39.1-94.89Q424.21-686 479.99-686t94.89 39.1Q614-607.79 614-552.01t-39.1 94.89Q535.79-418 480.01-418Zm.27 302q-75.43 0-141.78-28.27t-116.15-78.08q-49.81-49.8-78.08-116.11-28.27-66.3-28.27-142 0-75.69 28.27-141.54t78.08-115.65q49.8-49.81 116.11-78.08 66.3-28.27 142-28.27 75.69 0 141.54 28.27t115.65 78.08q49.81 49.8 78.08 115.87Q844-555.7 844-480.28q0 75.43-28.27 141.78t-78.08 116.15q-49.8 49.81-115.87 78.08Q555.7-116 480.28-116Zm-.28-52q53.15 0 104.42-18.42 51.27-18.43 93.27-52.73-43-28.16-93.11-43.5Q534.46-298 480-298t-105.27 14.65q-50.81 14.66-92.42 44.2 42 34.3 93.27 52.73Q426.85-168 480-168Zm0-302q33.85 0 57.92-24.08Q562-518.15 562-552t-24.08-57.92Q513.85-634 480-634t-57.92 24.08Q398-585.85 398-552t24.08 57.92Q446.15-470 480-470Zm0-82Zm0 314Z"}))}},"./packages/react/src/icons-material/MdIconClose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,J:()=>MdIconClose});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconClose=_ref=>{let{className,large=!1,...otherProps}=_ref;return large?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m250.92-218.92-32-32L448-480 218.92-709.08l32-32L480-512l229.08-229.08 32 32L512-480l229.08 229.08-32 32L480-448 250.92-218.92Z"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M291-253.85 253.85-291l189-189-189-189L291-706.15l189 189 189-189L706.15-669l-189 189 189 189L669-253.85l-189-189-189 189Z"}))},__WEBPACK_DEFAULT_EXPORT__=MdIconClose},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("./node_modules/react-dom/index.js");exports.H=m.createRoot,m.hydrateRoot},"./packages/css/src/chips/README.md":module=>{"use strict";module.exports='# Structure\n\nTo use the `Chips` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<button class="md-chip [md-chip--active, md-chip--disabled, md-chip--solid]">\n  <div class="md-chip__left-icon">{leftIcon}</div>\n\n  <div class="md-chip__label">{label}</div>\n\n  <div class="md-chip__right-icon">{rightIcon}</div>\n</button>\n```\n'}}]);