"use strict";(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[1887],{"./stories/Icons/Person.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Person:()=>Person,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_packages_react_src_icons_material_MdIconPerson__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icons-material/MdIconPerson.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Icons/Person",component:_packages_react_src_icons_material_MdIconPerson__WEBPACK_IMPORTED_MODULE_1__.S,parameters:{docs:{description:{component:"Person icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconPerson } from '@miljodirektoratet/md-react'`"}}},argTypes:{large:{description:"Use large version of icon. Best suited if displaying large icons.",table:{type:{summary:"boolean"}},control:"boolean"},className:{description:"Classes for svg icon",table:{type:{summary:"text"}},control:"text"},color:{description:"Set color of parent (for example purposes)",table:{type:{summary:"text"}},control:"color"}}},Person=(args=>{const style={width:"32px",height:"32px",color:args.color};return args.large&&(style.height="64px",style.width="64px"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_packages_react_src_icons_material_MdIconPerson__WEBPACK_IMPORTED_MODULE_1__.S,args))}).bind({});Person.args={large:!1,className:"",color:"#005e5d"};const __namedExportsOrder=["Person"];Person.parameters={...Person.parameters,docs:{...Person.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const style = {\n    width: '32px',\n    height: '32px',\n    color: args.color\n  };\n  if (args.large) {\n    style.height = '64px';\n    style.width = '64px';\n  }\n  return <div style={style}>\n      <MdIconPerson {...args} />\n    </div>;\n}",...Person.parameters?.docs?.source}}}},"./packages/react/src/icons-material/MdIconPerson.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>MdIconPerson});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconPerson=_ref=>{let{className,large=!1,...otherProps}=_ref;return large?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M480-492.92q-57.75 0-95.22-37.47-37.47-37.48-37.47-95.42 0-57.94 37.47-95.22T480-758.31q57.75 0 95.22 37.28t37.47 95.22q0 57.94-37.47 95.42-37.47 37.47-95.22 37.47ZM180-187.69v-75.93q0-32.23 17.08-56.15t44.38-36.77q63.16-28.07 121.76-42.31 58.6-14.23 116.77-14.23 58.16 0 116.47 14.54t121.21 42.27q28.38 12.82 45.35 36.62Q780-295.85 780-263.62v75.93H180Zm45.39-45.39h509.22v-30.54q0-15.61-9.88-29.92-9.88-14.31-25.81-22.46-59-28.69-111.3-40.19-52.3-11.5-107.62-11.5-55.32 0-108.43 11.5-53.11 11.5-111.11 40.19-15.92 8.15-25.5 22.46-9.57 14.31-9.57 29.92v30.54ZM480-538.31q37.46 0 62.38-24.92 24.93-24.92 24.93-62.38 0-37.47-24.93-62.39-24.92-24.92-62.38-24.92T417.62-688q-24.93 24.92-24.93 62.39 0 37.46 24.93 62.38 24.92 24.92 62.38 24.92Zm0-87.3Zm0 392.53Z"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M480-492.31q-51.75 0-87.87-36.12Q356-564.56 356-616.31q0-51.75 36.13-87.87 36.12-36.13 87.87-36.13 51.75 0 87.87 36.13Q604-668.06 604-616.31q0 51.75-36.13 87.88-36.12 36.12-87.87 36.12ZM212-219.69v-72.93q0-18.38 10.96-35.42 10.96-17.04 30.66-29.5 52.3-30.07 109.94-46.11t116.23-16.04q58.59 0 116.44 16.04 57.85 16.04 110.15 46.11 19.7 11.46 30.66 29T748-292.62v72.93H212Zm52-52h432v-20.93q0-6.33-4.56-11.91-4.57-5.58-12.59-9.47-43.7-26.46-94.42-40.08Q533.7-367.69 480-367.69q-53.7 0-104.43 13.61-50.72 13.62-94.42 40.08-8.07 5.54-12.61 10.61-4.54 5.07-4.54 10.77v20.93Zm216.21-272.62q29.79 0 50.79-21.21t21-51q0-29.79-21.21-50.79t-51-21q-29.79 0-50.79 21.22-21 21.21-21 51 0 29.78 21.21 50.78t51 21Zm-.21-72Zm0 344.62Z"}))}}}]);