"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97080],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"contributing",title:"Contributing"},l=void 0,s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"We follow a code of conduct when participating in the community. Please read it before you make any contributions.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/contributing.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1649406315,formattedLastUpdatedAt:"4/8/2022",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"someSidebar",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"FAQ",permalink:"/docs/faq"}},c=[{value:"Running in development mode",id:"running-in-development-mode",children:[{value:"Starting the packages you work in watch mode",id:"starting-the-packages-you-work-in-watch-mode",children:[],level:3},{value:"Starting documentation in watch mode",id:"starting-documentation-in-watch-mode",children:[],level:3}],level:2},{value:"Running tests",id:"running-tests",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We follow a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating in the community. Please read it before you make any contributions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,o.kt)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,o.kt)("li",{parentName:"ul"},"Ask for help in our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),".")),(0,o.kt)("h2",{id:"running-in-development-mode"},"Running in development mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node")," version 16 is required."),(0,o.kt)("p",null,"This project has multiple packages and uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," to manage packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/"),"."),(0,o.kt)("p",null,"First, install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,o.kt)("p",null,"From now on, depending on the packages you plan to work on, (they are located under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/")," directories - see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/lerna.json"},"lerna.json"),") you will need to bootstrap them and start them in watch mode. Instead of running ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," directly, read on to see how ",(0,o.kt)("strong",{parentName:"p"},"refine")," team handles it."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about it. ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/#command-bootstrap"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"lerna bootstrap"),". ","\u2192")),(0,o.kt)("h3",{id:"starting-the-packages-you-work-in-watch-mode"},"Starting the packages you work in watch mode"),(0,o.kt)("p",null,"You can either bootstrap all packages or only the packages you plan to work on."),(0,o.kt)("p",null,"To bootstrap all packages (all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples")," and under ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages")," whose names start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*"),"), you should run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run bootstrap\n")),(0,o.kt)("p",null,"To bootstrap the specific packages/examples only (all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages")," whose names start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*")," and specified packages):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run bootstrap -- --scope refine-use-select-example\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/core/filter-options/README.md#--scope-glob"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"scope")," flag. ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run bootstrap")," command bootstraps all packages whose name start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*")," and all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples"),". If you add filters with ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," flag, you can avoid bootstrapping all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples"),"."),(0,o.kt)("p",null,"At this point, all/required packages are bootstrapped. Now you can start the packages you plan to work on in development mode. If you don't want to start all packages in development mode, you should filter them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run start -- --scope @pankod/refine-core --scope @pankod/refine-antd --scope refine-use-select-example\n")),(0,o.kt)("p",null,"This command starts the example named ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-use-select-example")," in dev mode. The value of the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," is the name that is defined in it's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," flag should be used for every package that should be filtered. If you should start two packages:"),(0,o.kt)("p",null,"Now all filtered packages are running in watch mode. They should re-compile when you make a change in any of them."),(0,o.kt)("h3",{id:"starting-documentation-in-watch-mode"},"Starting documentation in watch mode"),(0,o.kt)("p",null,"Our documentation is built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To start it in development mode, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd documentation\nnpm install\nnpm run start\n")),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," command runs tests for all packages. If you're working on a package (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core"),"), you can run tests only for that package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/core\nnpm run test\n")),(0,o.kt)("p",null,"Or you can do it for a specific file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Also, to run a specific file's tests in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --watch /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Get coverage report for that file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --coverage /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"When you run the command that produces coverage report, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/coverage/lcov-report/index.html")," file to see coverage results. If you run this command in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core")," directory, then coverage report will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core/coverage"),"."),(0,o.kt)("p",null,"Please make sure you contribute well tested code."))}d.isMDXComponent=!0}}]);