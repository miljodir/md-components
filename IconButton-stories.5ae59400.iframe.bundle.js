/*! For license information please see IconButton-stories.5ae59400.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[4844],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./stories/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Border:()=>Border,Filled:()=>Filled,Plain:()=>Plain,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js");var MdIconButton=__webpack_require__("./packages/react/src/iconButton/MdIconButton.tsx"),MdIconDownload=__webpack_require__("./packages/react/src/icons-material/MdIconDownload.tsx");const IconButton_stories={title:"Components/IconButton",component:MdIconButton.l,parameters:{docs:{page:()=>react.createElement(react.Fragment,null,react.createElement(addon_docs_dist.hE,null),react.createElement(addon_docs_dist.Pd,null),react.createElement(addon_docs_dist.VY,null),react.createElement(addon_docs_dist.Tn,null),react.createElement(addon_docs_dist.H2,null),react.createElement(addon_docs_dist.oz,null,'# Structure\n\nTo use the `Button` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<button class="md-icon-button [md-icon-button--border, md-icon-button--plain]">\n  <div class="md-icon-button__icon">ICON</div>\n</button>\n```\n'.toString())),description:{component:"An icon button component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Button element.<br/><br/>`import { MdIconButton } from '@miljodirektoratet/md-react'`"}}},argTypes:{theme:{description:"Selected theme for icon button",table:{type:{summary:"text"}},options:["filled","border","plain"],control:{type:"inline-radio"},if:{arg:"theme",exists:!0}},children:{description:"Icon to place inside button",table:{defaultValue:{summary:"null"},type:{summary:"ReactNode | image"}}},"aria-label":{description:"The aria label for the tooltip",table:{type:{summary:"string"}},control:{type:"text"}},showTooltip:{description:"Show tooltip on hover",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{description:"Is button disabled?",table:{type:{summary:"boolean"}},control:{type:"boolean"}},loading:{description:"Add loading indicator to button",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},Template=args=>react.createElement(MdIconButton.l,{"aria-label":args["aria-label"],showTooltip:args.showTooltip,onClick:(0,dist.XI)(args.theme||""),disabled:args.disabled,theme:args.theme,loading:args.loading},react.createElement(MdIconDownload.T,null)),Filled=Template.bind({});Filled.args={theme:"filled","aria-label":"Last ned filen",showTooltip:!0,disabled:!1,loading:!1};const Border=Template.bind({});Border.args={theme:"border","aria-label":"Last ned filen",showTooltip:!0,disabled:!1,loading:!1};const Plain=Template.bind({});Plain.args={theme:"plain","aria-label":"Last ned filen",showTooltip:!0,disabled:!1,loading:!1};const __namedExportsOrder=["Filled","Border","Plain"];Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"(args: MdIconButtonProps) => {\n  return <MdIconButton aria-label={args['aria-label']} showTooltip={args.showTooltip} onClick={action(args.theme || '')} disabled={args.disabled} theme={args.theme} loading={args.loading}>\n      <MdIconDownload />\n    </MdIconButton>;\n}",...Filled.parameters?.docs?.source}}},Border.parameters={...Border.parameters,docs:{...Border.parameters?.docs,source:{originalSource:"(args: MdIconButtonProps) => {\n  return <MdIconButton aria-label={args['aria-label']} showTooltip={args.showTooltip} onClick={action(args.theme || '')} disabled={args.disabled} theme={args.theme} loading={args.loading}>\n      <MdIconDownload />\n    </MdIconButton>;\n}",...Border.parameters?.docs?.source}}},Plain.parameters={...Plain.parameters,docs:{...Plain.parameters?.docs,source:{originalSource:"(args: MdIconButtonProps) => {\n  return <MdIconButton aria-label={args['aria-label']} showTooltip={args.showTooltip} onClick={action(args.theme || '')} disabled={args.disabled} theme={args.theme} loading={args.loading}>\n      <MdIconDownload />\n    </MdIconButton>;\n}",...Plain.parameters?.docs?.source}}}},"./packages/react/src/iconButton/MdIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>MdIconButton});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_loadingSpinner_MdLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/loadingSpinner/MdLoadingSpinner.tsx"),_tooltip_MdTooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/tooltip/MdTooltip.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconButton=_ref=>{let{theme="filled",children,showTooltip=!1,disabled,type="button",className,"aria-label":ariaLabel,loading=!1,...otherProps}=_ref;const classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-icon-button",{"md-icon-button--border":"border"===theme,"md-icon-button--plain":"plain"===theme},className),button=react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_extends({"aria-label":ariaLabel,type,disabled,className:classNames},otherProps),children&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{"aria-hidden":"true",className:"md-icon-button__icon"},loading?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_loadingSpinner_MdLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__.A,null):children));return showTooltip&&!disabled?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tooltip_MdTooltip__WEBPACK_IMPORTED_MODULE_3__.A,{tooltipContent:ariaLabel,"aria-label":ariaLabel},button):button},__WEBPACK_DEFAULT_EXPORT__=MdIconButton},"./packages/react/src/icons-material/MdIconDownload.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,T:()=>MdIconDownload});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdIconDownload=_ref=>{let{className,large=!1,...otherProps}=_ref;return large?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M480-323.39 314.31-489.08l32.61-32.23 110.39 110V-780h45.38v368.69l110.39-110 32.61 32.23L480-323.39ZM180-180v-183h45.39v137.61h509.22V-363H780v183H180Z"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",className},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M480-344.46 317.23-507.23l37.16-36.38L454-444v-352h52v352l99.61-99.61 37.16 36.38L480-344.46ZM212-212v-124.77h52V-264h432v-72.77h52V-212H212Z"}))},__WEBPACK_DEFAULT_EXPORT__=MdIconDownload},"./packages/react/src/loadingSpinner/MdLoadingSpinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>MdLoadingSpinner,A:()=>loadingSpinner_MdLoadingSpinner});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const icons_material_MdIconLoadingSpinner=_ref=>{let{className,width=100,height=100,...otherProps}=_ref;return react.createElement("svg",_extends({viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className,width,height},otherProps),react.createElement("circle",{cx:"50",cy:"90",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"90",cy:"50",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"10",cy:"50",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"78",cy:"78",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"22",cy:"78",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"50",cy:"10",r:"10",fill:"#005E5D"}),react.createElement("circle",{cx:"78",cy:"22",r:"10",fill:"#CCDFDE"}),react.createElement("circle",{cx:"22",cy:"22",r:"10",fill:"#CCDFDE"}))};function MdLoadingSpinner_extends(){return MdLoadingSpinner_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},MdLoadingSpinner_extends.apply(null,arguments)}const MdLoadingSpinner=_ref=>{let{size,position="",className="",...otherProps}=_ref;const classNames=classnames_default()("md-loading-spinner__container",{"md-loading-spinner__container--left":"left"===position,"md-loading-spinner__container--right":"right"===position},className);return react.createElement("div",MdLoadingSpinner_extends({"aria-label":"Laster",className:classNames},otherProps),react.createElement(icons_material_MdIconLoadingSpinner,{className:"md-loading-spinner",width:size,height:size}))},loadingSpinner_MdLoadingSpinner=MdLoadingSpinner},"./packages/react/src/tooltip/MdTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,R:()=>MdTooltip});var _ariakit_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/tooltip/tooltip-provider.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MdTooltip=_ref=>{let{tooltipContent,children,position="bottom",timeout=250,mode="medium",anchorClassName="",tooltipClassName="",...otherProps}=_ref;const classNames=`md-tooltip md-tooltip--${mode} ${tooltipClassName}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ariakit_react__WEBPACK_IMPORTED_MODULE_1__.B,{placement:position,timeout},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ariakit_react__WEBPACK_IMPORTED_MODULE_2__.f,_extends({"aria-label":tooltipContent,className:`md-tooltip__anchor ${anchorClassName}`},otherProps),children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ariakit_react__WEBPACK_IMPORTED_MODULE_3__.m,{className:classNames},tooltipContent))},__WEBPACK_DEFAULT_EXPORT__=MdTooltip},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);