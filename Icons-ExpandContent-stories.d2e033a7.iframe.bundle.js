"use strict";(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[223],{"./stories/Icons/ExpandContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExpandContent:()=>ExpandContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_packages_react_src_icons_material_MdIconExpandContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icons-material/MdIconExpandContent.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Icons/Expand content",component:_packages_react_src_icons_material_MdIconExpandContent__WEBPACK_IMPORTED_MODULE_1__.m,parameters:{docs:{description:{component:"Expand content icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconExpandContent } from '@miljodirektoratet/md-react'`"}}},argTypes:{large:{description:"Use large version of icon. Best suited if displaying large icons.",table:{type:{summary:"boolean"}},control:"boolean"},className:{description:"Classes for svg icon",table:{type:{summary:"text"}},control:"text"},color:{description:"Set color of parent (for example purposes)",table:{type:{summary:"text"}},control:"color"}}},ExpandContent=(args=>{const style={width:"32px",height:"32px",color:args.color};return args.large&&(style.height="64px",style.width="64px"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_packages_react_src_icons_material_MdIconExpandContent__WEBPACK_IMPORTED_MODULE_1__.m,args))}).bind({});ExpandContent.args={large:!1,className:"",color:"#005e5d"};const __namedExportsOrder=["ExpandContent"];ExpandContent.parameters={...ExpandContent.parameters,docs:{...ExpandContent.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const style = {\n    width: '32px',\n    height: '32px',\n    color: args.color\n  };\n  if (args.large) {\n    style.height = '64px';\n    style.width = '64px';\n  }\n  return <div style={style}>\n      <MdIconExpandContent {...args} />\n    </div>;\n}",...ExpandContent.parameters?.docs?.source}}}},"./packages/react/src/icons-material/MdIconExpandContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>MdIconExpandContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconExpandContent=_ref=>{let{className,large=!1,...otherProps}=_ref;return large?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M220-220v-220h45.39v174.61H440V-220H220Zm474.61-300v-174.61H520V-740h220v220h-45.39Z"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M260-260v-220h52v168h168v52H260Zm388-220v-168H480v-52h220v220h-52Z"}))}}}]);