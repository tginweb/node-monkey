require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NodeMonkey=t():e.NodeMonkey=t()}(global,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/typeof")},function(e,t){e.exports=require("restify")},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("socket.io")},function(e,t){e.exports=require("tty")},function(e,t){e.exports=require("scrypt-kdf")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("events")},function(e,t){e.exports=require("keypair")},function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__),origJSON=global.JSON,JSON={};__webpack_exports__.a=JSON,"function"!=typeof JSON.decycle&&(JSON.decycle=function(e,t){var r=[],n=[];return function e(i,o){var s,a;return void 0!==t&&(i=t(i)),"object"!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(i)||null===i||i instanceof Boolean||i instanceof Date||i instanceof Number||i instanceof RegExp||i instanceof String?i:(s=r.indexOf(i))>=0?{$ref:n[s]}:(r.push(i),n.push(o),Array.isArray(i)?(a=[],i.forEach((function(t,r){a[r]=e(t,o+"["+r+"]")}))):(a={},Object.keys(i).forEach((function(t){a[t]=e(i[t],o+"["+JSON.stringify(t)+"]")}))),a)}(e,"$")}),"function"!=typeof JSON.retrocycle&&(JSON.retrocycle=function retrocycle($){var px=/^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;return function rez(value){value&&"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value)&&(Array.isArray(value)?value.forEach((function(element,i){if("object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(element)&&null!==element){var path=element.$ref;"string"==typeof path&&px.test(path)?value[i]=eval(path):rez(element)}})):Object.keys(value).forEach((function(name){var item=value[name];if("object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item)&&null!==item){var path=item.$ref;"string"==typeof path&&px.test(path)?value[name]=eval(path):rez(item)}})))}($),$}),JSON=origJSON},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("restify-cors-middleware")},function(e,t){e.exports=require("minimist")},function(e,t){e.exports=require("node-pty")},function(e,t){e.exports=require("ssh2")},function(e,t){e.exports=require("terminal-kit")},function(e,t){e.exports=require("child_process")},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return me})),r.d(t,"NodeMonkey",(function(){return he}));var n=r(0),i=r.n(n),o=r(3),s=r.n(o),a=r(4),u=r.n(a),c=r(6),l=r.n(c),f=r(1),h=r.n(f),p=r(9),d=r.n(p),m=r(5),v=r.n(m),y=r(13),_=r.n(y),g=r(14),w=(r(23),r(2)),b=r.n(w),k=r(15),S=r.n(k),x=r(16),M=r(7),C=r.n(M),O={isObject:function(e){var t=C()(e);return!!e&&("object"==t||"function"==t)},invert:function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}},N=r(17),E=r.n(N),A=Object.assign({parseCommand:function(e){var t,r=/"(.*?)"|'(.*?)'|`(.*?)`|([^\s"]+)/gi,n=[];do{null!==(t=r.exec(e))&&n.push(t[1]||t[2]||t[3]||t[4])}while(null!==t);return n},getStack:function(){var e=Error.prepareStackTrace,t=Error.stackTraceLimit;Error.prepareStackTrace=function(e,t){return t.map(E.a.wrapCallSite)},Error.stackTraceLimit=30;var r=(new Error).stack;return Error.prepareStackTrace=e,Error.stackTraceLimit=t,r.slice(1)},getPromiseObj:function(){var e={};return e.promise=new Promise((function(t,r){Object.assign(e,{resolve:t,reject:r})})),e}},O),P={trace:10,debug:20,info:30,warn:40,error:50,fatal:60},j=A.invert(P),I=r(8),L=r.n(I),T=r(18),F=r.n(T),D=r(10),U=r.n(D),q=r(19),R=r.n(q),B=function e(t){var r=this;u()(this,e),h()(this,"io",void 0),h()(this,"commands",{}),h()(this,"addCmd",(function(e,t,n){if(r.commands[e])throw new Error("'".concat(e,"' is already registered as a command"));"function"==typeof t&&(n=t,t={}),r.commands[e]={opts:t,exec:n}})),h()(this,"runCmd",function(){var e=s()(i.a.mark((function e(t,n){var o,s,a,u,c,l,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=A.parseCommand(t),s=o[0],a=r.commands[s],u=r.io,n){e.next=6;break}throw new Error("Missing user context for command '".concat(s,"'"));case 6:if(a){e.next=8;break}throw new Error("Command not found: '".concat(s,"'"));case 8:return c=R()(o.slice(1)),l=A.getPromiseObj(),f=a.exec({args:c,username:n},{write:u.write,writeLn:u.writeLn,error:u.error,prompt:u.prompt},l.resolve),e.abrupt("return",f.then?f:l.promise);case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),this.io=t},z=function(e){var t,r,n=e.userManager;return"function"==typeof e.server?t=U()(e.server):(t=U()()).attach(e.server),(r=t.of("/nm")).on("connection",(function(t){var r=null;t.emit("settings",e.clientSettings),t.emit("auth"),t.on("auth",(function(r){n.verifyUser(r.username,r.password).then((function(n){t.emit("authResponse",n,n?void 0:"Incorrect password"),n&&(t.username=r.username,t.join("authed"),e.onAuth&&e.onAuth(t))})).catch((function(e){t.emit("authResponse",!1,e)}))})),t.on("cmd",(function(n,i){t.username?(r||(r=function(e,t){var r=0,n={},i={writeLn:null,write:function(e,r){e&&t.emit("console",{method:"log",args:[e]})},error:function(e,r){e&&t.emit("console",{method:"error",args:[e]})},prompt:function(e,i,o){"function"==typeof i&&(o=i,i=void 0),i||(i={});var s=r++;t.emit("prompt",s,e,i),n[s]=o}};return i.writeLn=i.write,t.on("promptResponse",(function(e,t){n[e]&&n[e](null,t)})),e.bindI(i)}(e.cmdManager,t)),r.runCmd(i,t.username).then((function(e){t.emit("cmdResponse",n,null,e)})).catch((function(e){t.emit("cmdResponse",n,e&&e.message||e,null)}))):t.emit("cmdResponse",n,"You are not authorized to run commands")}))})),b.a.each(e.handlers,(function(e,r){t.on(r,e)})),r};var H=r(11),J=r.n(H),K=r(20),W=r.n(K),$=r(21),V=r.n($),Y=r(22),Z=r.n(Y);function G(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=function(){function e(t){u()(this,e),h()(this,"options",{host:"127.0.0.1",port:50501,title:"Node Monkey",prompt:"Node Monkey:",silent:!1}),h()(this,"server",void 0),h()(this,"clients",new Set),t=Object.assign(this.options,t),this.server=new V.a.Server({hostKeys:t.hostKeys.map((function(e){return v.a.readFileSync(e)}))},this.onClient.bind(this));var r=this.options.monkey;this.server.listen(t.port,t.host,(function(){t.silent||r.local.log("SSH listening on ".concat(this.address().port))}))}return l()(e,[{key:"shutdown",value:function(){var e,t=G(this.clients);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.write("\nShutting down"),r.close()}}catch(e){t.e(e)}finally{t.f()}}},{key:"onClient",value:function(e){var t=this,r=this.options,n=r.cmdManager,i=r.userManager,o=r.title,s=r.prompt;this.clients.add(new ee({client:e,cmdManager:n,userManager:i,title:o,prompt:s,onClose:function(){return t.clients.delete(e)}}))}}]),e}(),ee=function(){function e(t){u()(this,e),this.options=t,this.client=t.client,this.cmdMan=null,this.userManager=t.userManager,this.session=null,this.stream=null,this.pty=null,this.term=null,this.ptyInfo=null,this.title=t.title,this.promptTxt="".concat(t.prompt," "),this.inputActive=!1,this.cmdHistory=[],this.username=null,this.client.on("authentication",this.onAuth.bind(this)),this.client.on("ready",this.onReady.bind(this)),this.client.on("end",this.onClose.bind(this))}return l()(e,[{key:"_initCmdMan",value:function(){var e=this,t={writeLn:null,write:function(t,r){r||(r={}),t||(t=""),r.bold?e.term.bold(t):e.term(t),r.newline&&e.term.nextLine()},error:function(t,r){r||(r={}),e.term.red(t),r.newline&&e.term.nextLine()},prompt:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;"function"==typeof r&&(n=r,r=void 0),r||(r={});var i={};r.hideInput&&(i.echo=!1),e.term(t),e.term.inputField(i,n)}};t.writeLn=function(e,r){r||(r={}),r.newline=!0,t.write(e,r)},this.cmdMan=this.options.cmdManager.bindI(t)}},{key:"write",value:function(e,t){var r=t.style,n=void 0===r?void 0:r;this.term&&(n?this.term[n](e):this.term(e))}},{key:"close",value:function(){this.stream&&this.stream.end(),this.onClose()}},{key:"onAuth",value:function(e){var t=this;"password"==e.method?this.userManager.verifyUser(e.username,e.password).then((function(r){r?(t.username=e.username,e.accept()):e.reject()})).catch((function(t){e.reject()})):(e.method,e.reject())}},{key:"onReady",value:function(){var e=this;this.client.on("session",(function(t,r){e.session=t(),e.session.once("pty",(function(t,r,n){e.ptyInfo=n,t&&t()})).on("window-change",(function(t,r,n){Object.assign(e.ptyInfo,n),e._resize(),t&&t()})).once("shell",(function(t,r){e.stream=t(),e._initCmdMan(),e._initStream(),e._initPty(),e._initTerm()}))}))}},{key:"onClose",value:function(){var e=this.options.onClose;e&&e()}},{key:"onKey",value:function(e,t,r){var n=this;if("CTRL_L"===e)this.clearScreen();else if("CTRL_C"===e)this.inputActive=!1,this.inputField.abort(),this.term("\n^^C\n"),this.prompt();else if("CTRL_D"===e){this.inputField.getInput().length||(this.term.nextLine(),setTimeout((function(){n.close()}),0))}}},{key:"_resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,t=e.term;t&&t.stdout.emit("resize")}},{key:"_initStream",value:function(){var e=this.stream;e.name=this.title,e.isTTY=!0,e.setRawMode=function(){},e.on("error",(function(e){console.error("SSH stream error:",e.message)}))}},{key:"_initPty",value:function(){var e=this,t=W.a.native.open(this.ptyInfo.cols,this.ptyInfo.rows);this.pty={master_fd:t.master,slave_fd:t.slave,master:new J.a.WriteStream(t.master),slave:new J.a.ReadStream(t.slave)},this.pty.slave.getWindowSize=function(){return[e.ptyInfo.cols,e.ptyInfo.rows]},this.stream.stdin.pipe(this.pty.master),this.pty.master.pipe(this.stream.stdout)}},{key:"_initTerm",value:function(){var e=this.term=Z.a.createTerminal({stdin:this.pty.slave,stdout:this.pty.slave,stderr:this.pty.slave,generic:this.ptyInfo.term,appName:this.title});e.on("key",this.onKey.bind(this)),e.windowTitle(this._interpolate(this.title)),this.clearScreen()}},{key:"_interpolate",value:function(e){for(var t,r=/{@(.+?)}/g,n={username:this.username};t=r.exec(e);)n[t[1]]&&(e=e.replace(t[0],n[t[1]]));return e}},{key:"clearScreen",value:function(){this.term.clear(),this.prompt()}},{key:"prompt",value:function(){var e=this,t=this.term;t.windowTitle(this._interpolate(this.title)),t.bold(this._interpolate(this.promptTxt)),this.inputActive||(this.inputActive=!0,this.inputField=t.inputField({history:this.cmdHistory,autoComplete:Object.keys(this.cmdMan.commands),autoCompleteMenu:!0},(function(r,n){return e.inputActive=!1,t.nextLine(),r?t.error(r.message||r):n?(" "!==n[0]&&e.cmdHistory.push(n),void("exit"===n?setTimeout(e.close.bind(e)):"clear"===n?e.clearScreen():n?e.cmdMan.runCmd(n,e.username).then((function(t){"string"!=typeof t&&(t=JSON.stringify(t,null,"  ")),e.term(t),e.term.nextLine(),e.prompt()})).catch((function(t){"string"!=typeof t&&(t=t.message||JSON.stringify(t,null,"  ")),e.term.red.error(t),e.term.nextLine(),e.prompt()})):e.prompt())):e.prompt()})))}}]),e}(),te=Q,re=r(12),ne=r.n(re),ie=function(){function e(t){u()(this,e),h()(this,"userFile",void 0),h()(this,"userFileCache",null),h()(this,"userFileCreated",!1),this.userFile=t.userFile,t.silent||this.getUsers().then((function(e){var t=Object.keys(e);t.length?1===t.length&&"guest"===t[0]&&console.warn("[WARN] No users detected. You can login with default user 'guest' and password 'guest' when prompted.\nThis user will be disabled when you create a user account.\n"):"production"===process.env.NODE_ENV?console.warn("No users have been created and you are running in production mode so you will not be able to login.\n"):console.warn("It seems there are no users and you are not running in production mode so you will not be able to login. This is probably a bug. Please report it!\n")}))}var t,r,n,o,a,c,f,p;return l()(e,[{key:"getUsers",value:(p=s()(i.a.mark((function e(){var t,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.userFileCache){e.next=2;break}return e.abrupt("return",this.userFileCache);case 2:if(e.prev=2,this.userFile){e.next=7;break}throw(t=new Error("No user file specified")).code="ENOENT",t;case 7:return this.userFileCache=JSON.parse(v.a.readFileSync(this.userFile).toString("base64")),this.userFileCreated=!0,setTimeout((function(){r.userFileCache=null}),5e3),e.abrupt("return",this.userFileCache);case 13:if(e.prev=13,e.t0=e.catch(2),"ENOENT"!==e.t0.code){e.next=17;break}return e.abrupt("return","production"===process.env.NODE_ENV?{}:{guest:{password:"c2NyeXB0AA8AAAAIAAAAAc8D4r96lep3aBQSBeAqf0a+9MX6KyB6zKTF9Nk3ruTPIXrzy8IM7vjSLpIKuVZMNTZZ72CMqKp/PQmnyXmf7wGup1bWBGSwoV5ymA72ZzZg"}});case 17:throw e.t0;case 18:case"end":return e.stop()}}),e,this,[[2,13]])}))),function(){return p.apply(this,arguments)})},{key:"_writeFile",value:function(e){this.userFileCache=null,v.a.writeFileSync(this.userFile,JSON.stringify(e,null,"  ")),this.userFileCreated=!0}},{key:"_hashPassword",value:(f=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.kdf(t,{logN:15,r:8,p:1});case 2:return e.abrupt("return",e.sent.toString("base64"));case 3:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"_verifyPassword",value:(c=s()(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne.a.verify(Buffer.from(t,"base64"),r));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)})},{key:"createUser",value:(a=s()(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.userFile){e.next=2;break}throw new Error("No user file found. Did you forget to set the 'dataDir' option?");case 2:return e.next=4,this.getUsers();case 4:if(!(n=e.sent)[t]){e.next=7;break}throw new Error("User '".concat(t,"' already exists"));case 7:return this.userFileCreated||delete n.guest,e.next=10,this._hashPassword(r);case 10:e.t0=e.sent,n[t]={password:e.t0},this._writeFile(n);case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"deleteUser",value:(o=s()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.userFile){e.next=2;break}throw new Error("No user file found. Did you forget to set the 'dataDir' option?");case 2:return e.next=4,this.getUsers();case 4:if((r=e.sent)[t]){e.next=7;break}throw new Error("User '".concat(t,"' does not exist"));case 7:if(this.userFileCreated){e.next=9;break}throw new Error("User file has not been created");case 9:delete r[t],this._writeFile(r);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"setPassword",value:(n=s()(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.userFile){e.next=2;break}throw new Error("No user file found. Did you forget to set the 'dataDir' option?");case 2:return e.next=4,this.getUsers();case 4:return n=e.sent,e.next=7,this._hashPassword(r);case 7:n[t].password=e.sent,this._writeFile(n);case 9:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"getUserData",value:(r=s()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUsers();case 2:if((r=e.sent)[t]){e.next=5;break}throw new Error("User '".concat(t,"' does not exist"));case 5:return e.abrupt("return",r[t]);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"verifyUser",value:(t=s()(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserData(t);case 2:return n=e.sent,e.abrupt("return",this._verifyPassword(n.password,r));case 4:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}();function oe(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ae=process.env.NODE_ENV,ue=b.a.mapValues(console),ce=new g.EventEmitter,le=["log","info","warn","error","dir"],fe=0,he=function(){function e(t){var r;u()(this,e),h()(this,"msgBuffer",[]),h()(this,"BUNYAN_STREAM",(r=this,{write:function(e){e=JSON.parse(e),r._sendMessage({method:j[e.level]||"info",args:[e.msg,e]})}})),h()(this,"_attached",!1),h()(this,"_typeHandlers",{});var n=this.options=b.a.merge({server:{server:null,host:"0.0.0.0",port:50500,silent:!1,bufferSize:50,attachOnStart:!0,disableLocalOutput:!1},client:{showCallerInfo:"production"!==ae,convertStyles:!0},ssh:{enabled:!1,host:"0.0.0.0",port:50501,title:"Node Monkey on ".concat(d.a.hostname()),prompt:"[Node Monkey] {@username}@".concat(d.a.hostname(),":")},dataDir:null},t);this._createLocal(),this._createRemote(),this._setupCmdMan(),this._setupUserManager(),this._setupServer(),this._setupSSH(),n.server.attachOnStart&&this.attachConsole(),console.local=b.a.mapValues(this.local,(function(e,t){var r=function(){return e.apply(void 0,arguments)};return Object.defineProperty(r,"name",{value:t}),r})),console.remote=b.a.mapValues(this.remote,(function(e,t){var r=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(void 0,[{callerStackDistance:2}].concat(r))};return Object.defineProperty(r,"name",{value:t}),r}))}return l()(e,[{key:"_getServerProtocol",value:function(e){return e._events&&e._events.tlsClientError?"https":"http"}},{key:"getServerPaths",value:function(){return{basePath:_.a.normalize("".concat(__dirname,"/../dist")),client:"monkey.js",index:"index.html"}}},{key:"_displayServerWelcome",value:function(){if(!this.options.server.silent){var e=this.options.server.server;if(e.listening){var t=this._getServerProtocol(e),r=e.address(),n=r.address,i=r.port;this.local.log("Node Monkey listening at ".concat(t,"://").concat(n,":").concat(i))}else e.on("listening",this._displayServerWelcome.bind(this))}}},{key:"_setupCmdMan",value:function(){this._cmdMan=new B({write:function(e,t){console.log(e)},writeLn:function(e,t){console.log(e)},error:function(e,t){console.error(e)},prompt:function(e,t,r){"function"==typeof t&&(t,t=void 0),t||(t={}),console.warn("Prompt not implemented")}}),this.addCmd=this._cmdMan.addCmd,this.runCmd=this._cmdMan.runCmd}},{key:"_setupUserManager",value:function(){var e=this.options.dataDir,t=this.userManager=new ie({userFile:e?"".concat(e,"/users.json"):void 0,silent:this.options.server.silent});this.addCmd("showusers",function(){var e=s()(i.a.mark((function e(r,n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUsers();case 2:o=e.sent,n.writeLn(Object.keys(o).join("\n"));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),this.addCmd("adduser",(function(e,r,n){var i=e.args._[0];if(!i)return r.error("You must specify a username"),n();r.prompt("Password: ",{hideInput:!0},(function(e,o){r.writeLn(),r.prompt("Again: ",{hideInput:!0},(function(e,s){r.writeLn(),o===s?t.createUser(i,o).then((function(){return r.write("Created user '".concat(i,"'"))})).catch(r.error).then(n):(r.error("Passwords do not match"),n())}))}))})),this.addCmd("deluser",(function(e,r,n){var i=e.args._[0];if(!i)return r.error("You must specify a username"),n();t.deleteUser(i).then((function(){return r.write("Deleted user '".concat(i,"'"))})).catch(r.error).then(n)})),this.addCmd("passwd",(function(e,r,n){e.args;var i=e.username;r.prompt("Current password: ",{hideInput:!0},(function(e,o){r.writeLn(),t.verifyUser(i,o).then((function(e){e?r.prompt("Password: ",{hideInput:!0},(function(e,o){r.writeLn(),r.prompt("Again: ",{hideInput:!0},(function(e,s){r.writeLn(),o===s?t.setPassword(i,o).then((function(){return r.write("Updated password for ".concat(i))})).catch(r.error).then(n):(r.error("Passwords do not match"),n())}))})):(r.error("Incorrect password"),n())}))}))}))}},{key:"_setupServer",value:function(){var e=this.options,t=e.server.server;if(!t){var r=function(e){var t=L.a.createServer(),r=F()({origins:[/https?:\/\/.+/],allowHeaders:[],exposeHeaders:[],credentials:!0});return t.pre(L.a.pre.userAgentConnection()),t.pre(r.preflight),t.use(L.a.plugins.gzipResponse()),t.use(r.actual),t.get("*",L.a.plugins.serveStatic({directory:__dirname,default:"index.html"})),t}();t=this.options.server.server=r.server;var n=e.server,i=n.host,o=n.port;r.listen(o,i)}this._displayServerWelcome(),this.serverApp=t,this.remoteClients=z({server:t.server||t,cmdManager:this._cmdMan,userManager:this.userManager,onAuth:this._sendMessages.bind(this),clientSettings:e.client})}},{key:"_setupSSH",value:function(){var e=this.options.ssh;if(e.enabled){var t=this.options.dataDir;if(!t)throw new Error("Options 'dataDir' is required to enable SSH");var r,n=/\.key$/,i=[],o=oe(v.a.readdirSync(t));try{for(o.s();!(r=o.n()).done;){var s=r.value;n.test(s)&&i.push("".concat(t,"/").concat(s))}}catch(e){o.e(e)}finally{o.f()}if(!i.length){console.log("No SSH host key found. Generating new host key...");var a=S()();v.a.writeFileSync("".concat(t,"/rsa.key"),a.private),v.a.writeFileSync("".concat(t,"/rsa.key.pub"),a.public),i=["".concat(t,"/rsa.key")]}this.SSHMan=new te({monkey:this,cmdManager:this._cmdMan,userManager:this.userManager,silent:this.options.server.silent,host:e.host,port:e.port,title:b.a.result(e,"title"),prompt:b.a.result(e,"prompt"),hostKeys:i})}}},{key:"_getCallerInfo",value:function(e){if(this.options.client.showCallerInfo){var t=A.getStack().map((function(e){return{functionName:e.getFunctionName(),methodName:e.getMethodName(),fileName:e.getFileName(),lineNumber:e.getLineNumber(),columnNumber:e.getColumnNumber()}})),r=t.find((function(e,t,r){var n=r[t-2],i=r[t-4];return!(!n||"Logger._emit"!==n.functionName||!/\/bunyan\.js$/.test(n.fileName))||(!(!n||!i||"emit"!==n.methodName||"_sendMessage"!==i.methodName)||void 0)}));if(r||"number"!=typeof e||(r=t[e]),r)return{caller:r.functionName||r.methodName,file:r.fileName,line:r.lineNumber,column:r.columnNumber}}}},{key:"_sendMessage",value:function(e,t){this.msgBuffer.push({method:e.method,args:e.args,callerInfo:e.callerInfo||this._getCallerInfo(t+1)}),this.msgBuffer.length>this.options.server.bufferSize&&this.msgBuffer.shift(),this._sendMessages()}},{key:"_sendMessages",value:function(){var e=this.remoteClients;b.a.size(e.adapter.rooms.authed)&&(b.a.each(this.msgBuffer,(function(t){e.to("authed").emit("console",x.a.decycle(t))})),this.msgBuffer=[])}},{key:"_createLocal",value:function(){this.local=ue}},{key:"_createRemote",value:function(){var e=this,t=this.remote={};le.forEach((function(r){e.remote[r]=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var o=n[0]&&n[0].callerStackDistance;e._sendMessage({method:r,args:o?n.slice(1):n},o?o+1:2)},Object.defineProperty(t[r],"name",{value:r})}))}},{key:"attachConsole",value:function(e){var t=this;if(!this._attached){if(!fe){var r=0;le.forEach((function(e){console[e]=function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var s;if(r)return(s=t.local)[e].apply(s,i);++r,ce.emit.apply(ce,[e].concat(i)),--r},Object.defineProperty(console[e],"name",{value:e})}))}++fe;var n=this.options.server;e=void 0!==e?e:n.disableLocalOutput,b.a.each(this.remote,(function(r,n){var i=t._typeHandlers[n]=function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];var a;(r.apply(void 0,[{callerStackDistance:4}].concat(o)),e)||(a=t.local)[n].apply(a,o)};Object.defineProperty(i,"name",{value:n}),ce.on(n,i)})),this._attached=!0}}},{key:"detachConsole",value:function(){var e=this;Object.assign(console,this.local),this._attached=!1,--fe,le.forEach((function(t){ce.removeListener(t,e._typeHandlers[t]),delete e._typeHandlers[t]}))}}]),e}(),pe={},de=50499;function me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if("string"==typeof e&&(t=e,e=void 0),!pe[t]){e||(e={});var r=b.a.get(e,"server.port");r?de=+r:(b.a.set(e,"server.port",++de),b.a.set(e,"ssh.port",++de)),pe[t]=new he(e)}return pe[t]}}]).default}));
//# sourceMappingURL=server.js.map