/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_c__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_c__ = __webpack_require__(5);
__webpack_require__(1);
__webpack_require__(2);



Object(__WEBPACK_IMPORTED_MODULE_0__header_c__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_1__footer_c__["a" /* default */])().then(() => console.log("初始化完成"));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_m__ = __webpack_require__(4);
/*这个部分完成页面header部分的逻辑*/



let navlist = Array.from(document.getElementsByClassName('webs'));
let detail = document.getElementById('detail');

function openDetail() {
  //打开二级菜单
  detail.style.display = "block";
  detail.className += " animated zoomIn";
  console.log();
}
function closeDetail() {
  //关闭二级菜单
  detail.style.display = "none";
  detail.className = "detail";
}
function overflow() {
  //用于head函数中标记当前二级菜单是第几个按钮下面的
  for (let web of navlist) {
    web.open = false;
  }
}
function head() {
  //点击效果
  for (let web of navlist) {
    web.addEventListener("click", function () {
      if (detail.style.display === "block" && web.open === true) {
        closeDetail();
        web.open = false;
      } else {
        overflow();
        web.open = true;
        openDetail();
        filla(event.target.innerHTML, "default");
        fillLis(event.target.innerHTML);
      }
    });
  }
}
var fillLis = function (name) {
  //填充二级菜单
  let names = Object.keys(__WEBPACK_IMPORTED_MODULE_0__header_m__["a" /* default */][name]);
  let ul = document.getElementById('detail_ul');
  ul.innerHTML = "";
  for (let n of names) {
    if (n !== "default") {
      let li = document.createElement("li");
      li.innerHTML = n;
      ul.appendChild(li);
      li.addEventListener('click', () => filla(name, n));
    }
  }
};
function filla(name, n) {
  //点击后或者调用，填充三级菜单
  let websites = __WEBPACK_IMPORTED_MODULE_0__header_m__["a" /* default */][name][n];
  let as = document.getElementById('website');
  as.innerHTML = "";
  var adda = function (name, src) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        let a = document.createElement("a");
        a.innerHTML = name;
        a.setAttribute("href", src);
        as.appendChild(a);
        a.className = "animated fadeIn";
        resolve();
      }, 100);
    });
  };
  var addlink = async function () {
    for (let { name, src } of websites) {
      await adda(name, src);
    }
  };
  addlink();
}

//处理nav中搜索
let searchbtn = document.getElementById("search").getElementsByTagName('button')[0];
let ifo = document.getElementsByName("window")[0];
searchbtn.onclick = function () {
  //搜索点击效果
  let input = document.getElementById('searchText');
  if (input.value !== "") {
    ifo.style.display = "block";
    closeDetail();
  }
};
//home点击回到主页面和清除一些操作
let homebtn = document.getElementById('home');
homebtn.onclick = function () {
  //home点击控制
  ifo.setAttribute("src", "");
  ifo.style.display = "none";
  overflow();
  closeDetail();
};

/* harmony default export */ __webpack_exports__["a"] = (head);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*这个文件存放header所要使用数据*/
'use static';

var webs = {
  "前端": {
    "工具": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }, {
      name: "创新设计",
      src: "https://dribbble.com/shots?sort=recent"
    }, {
      name: "七牛云",
      src: "https://portal.qiniu.com/signin"
    }, {
      name: "极简图床",
      src: "http://jiantuku.com/#/"
    }, {
      name: "缓冲图标",
      src: "https://preloaders.net/"
    }, {
      name: "缓冲图标",
      src: "https://loading.io/"
    }, {
      name: "代码兼容",
      src: "https://autoprefixer.github.io/"
    }, {
      name: "jsLint",
      src: "http://www.jslint.com/"
    }, {
      name: "fontico",
      src: "http://fontawesome.io/icons/"
    }, {
      name: "can i use",
      src: "https://caniuse.com/"
    }, {
      name: "图片压缩",
      src: "https://tinypng.com/"
    }, {
      name: "REGEX TEST",
      src: "http://www.regexpal.com/"
    }, {
      name: "HTML to jade",
      src: "http://html2jade.vida.io/"
    }],
    "知识点": [{
      name: "深入理解js",
      src: "http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html"
    }, {
      name: "排序算法",
      src: "http://www.cnblogs.com/wangfupeng1988/archive/2011/12/26/2302216.html"
    }, {
      name: "ie8+兼容",
      src: "http://www.cnblogs.com/eaysun/p/4252491.html"
    }, {
      name: "渲染原理",
      src: "https://news.cnblogs.com/n/178402/"
    }, {
      name: "浏览器工作原理",
      src: "https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/"
    }, {
      name: "7个css单位",
      src: "https://github.com/simaQ/cssfun/issues/1"
    }, {
      name: "前端解耦",
      src: "https://tonydeng.github.io/2015/01/05/frontend-decoupling-principle/"
    }, {
      name: "git教程",
      src: "https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/"
    }, {
      name: "深赋值和浅赋值",
      src: "http://jerryzou.com/posts/dive-into-deep-clone-in-javascript/"
    }],
    "文档": [{
      name: "MDN",
      src: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"
    }, {
      name: "Node文档",
      src: "http://nodejs.cn/api/"
    }, {
      name: "express文档",
      src: "http://www.expressjs.com.cn/4x/api.html"
    }, {
      name: "ES6文档",
      src: "http://es6.ruanyifeng.com/"
    }],
    "学习网站": [{
      name: "w3cplus",
      src: "http://www.w3cplus.com/"
    }, {
      name: "前端观察",
      src: "https://www.qianduan.net/"
    }, {
      name: "前端乱炖",
      src: "http://www.html-js.com/"
    }, {
      name: "前端书籍合集",
      src: "https://github.com/jobbole/awesome-web-dev-books"
    }, {
      name: "掘金",
      src: "https://juejin.im/timeline"
    }, {
      name: "知乎",
      src: "https://www.zhihu.com/explore"
    }, {
      name: "百度技术学院",
      src: "http://ife.baidu.com/"
    }],
    "社区": [{
      name: "cNode",
      src: "https://cnodejs.org/"
    }],
    "default": [{
      name: "cNode",
      src: "https://cnodejs.org/"
    }, {
      name: "百度技术学院",
      src: "http://ife.baidu.com/"
    }, {
      name: "掘金",
      src: "https://juejin.im/timeline"
    }, {
      name: "知乎",
      src: "https://www.zhihu.com/explore"
    }, {
      name: "前端乱炖",
      src: "http://www.html-js.com/"
    }, {
      name: "w3cplus",
      src: "http://www.w3cplus.com/"
    }, {
      name: "MDN",
      src: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"
    }, {
      name: "极简图床",
      src: "http://jiantuku.com/#/"
    }, {
      name: "git教程",
      src: "https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/"
    }]
  },
  "博客": {
    "朋blog": [{
      name: "huangchongqing",
      src: "http://huangchongqing.com/"
    }],
    "css": [{
      name: "张鑫",
      src: "http://www.zhangxinxu.com/"
    }],
    "大神": [{
      name: "司徒正美",
      src: "http://www.cnblogs.com/rubylouvre"
    }, {
      name: "王福朋",
      src: "http://www.cnblogs.com/wangfupeng1988/"
    }, {
      name: "阮一峰",
      src: "http://www.ruanyifeng.com/blog/"
    }, {
      name: "汤姆大叔",
      src: "http://www.cnblogs.com/TomXu/"
    }, {
      name: "十年踪迹",
      src: "https://www.h5jun.com/post/to-be-a-good-frontend-engineer.html"
    }, {
      name: "人人都是产品经理",
      src: "http://www.woshipm.com/"
    }],
    "default": [{
      name: "张鑫",
      src: "http://www.zhangxinxu.com/"
    }, {
      name: "人人都是产品经理",
      src: "http://www.woshipm.com/"
    }, {
      name: "司徒正美",
      src: "http://www.cnblogs.com/rubylouvre"
    }, {
      name: "王福朋",
      src: "http://www.cnblogs.com/wangfupeng1988/"
    }, {
      name: "阮一峰",
      src: "http://www.ruanyifeng.com/blog/"
    }, {
      name: "汤姆大叔",
      src: "http://www.cnblogs.com/TomXu/"
    }, {
      name: "十年踪迹",
      src: "https://www.h5jun.com/post/to-be-a-good-frontend-engineer.html"
    }]
  },
  "框架": {
    "集合网": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }],
    "知识点": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }],
    "文档": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }],
    "学习网站": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }],
    "勤奋峰": [{
      name: "网站配色",
      src: "http://stylifyme.com/?stylify=www.baidu.com"
    }]
  },
  "娱乐": {
    "视频": [{
      name: "影视搜索",
      src: "http://ifkdy.com/"
    }, {
      name: "视频解析",
      src: "http://ifkjx.com/"
    }, {
      name: "电影天堂",
      src: "http://www.dygod.net/"
    }, {
      name: "飘花电影",
      src: "http://www.piaohua.com/"
    }, {
      name: "私人影院",
      src: "http://tool.mkblog.cn/movie/"
    }],
    "资源": [{
      name: "去转盘网",
      src: "http://www.quzhuanpan.com/"
    }, {
      name: "胖次搜索",
      src: "https://www.panc.cc/"
    }, {
      name: "盘多多",
      src: "http://www.panduoduo.net/"
    }],
    "软件": [{
      name: "胡萝卜",
      src: "http://www.carrotchou.blog/"
    }],
    "设计素材": [{
      name: "免费高清图",
      src: "https://pixabay.com/"
    }, {
      name: "千图网",
      src: "http://www.58pic.com/"
    }, {
      name: "千库网",
      src: "http://588ku.com/"
    }, {
      name: "太空壁纸",
      src: "https://psiupuxa.com/"
    }],
    "Mv音乐": [{
      name: "音乐台",
      src: "http://www.yinyuetai.com/"
    }, {
      name: "音乐台-mv解析",
      src: "http://tool.mkblog.cn/yinyuetai/"
    }, {
      name: "170MV",
      src: "http://www.170mv.com/"
    }, {
      name: "",
      src: ""
    }, {
      name: "",
      src: ""
    }, {
      name: "",
      src: ""
    }],
    "default": [{
      name: "影视搜索",
      src: "http://ifkdy.com/"
    }, {
      name: "视频解析",
      src: "http://ifkjx.com/"
    }, {
      name: "电影天堂",
      src: "http://www.dygod.net/"
    }, {
      name: "音乐台",
      src: "http://www.yinyuetai.com/"
    }, {
      name: "音乐台-mv解析",
      src: "http://tool.mkblog.cn/yinyuetai/"
    }, {
      name: "胖次搜索",
      src: "https://www.panc.cc/"
    }, {
      name: "盘多多",
      src: "http://www.panduoduo.net/"
    }]
  }
};

/* harmony default export */ __webpack_exports__["a"] = (webs);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*完成foote部分对页面图片的切换*/

/*
* 接口为http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1

* 1、format，非必要。我理解为输出格式，不存在或者不等于js，即为xml格式，等于js时，输出json格式；

* 2、idx，非必要。不存在或者等于0时，输出当天的图片，-1为已经预备用于明天显示的信息，1则为昨天的图片，idx最多获取到之前16天的图片信息；*

* 3、n，必要。这是输出信息的数量，比如n=1，即为1条，以此类推，至多输出8条；*
 */
var img = __webpack_require__(6);

img = "../" + img; //因为我将output中filename设置为js/,所以中间的图片都是相对于上一级进行插入

let prevbtn = document.getElementById('prev');
let nextbtn = document.getElementById('next');
let id = 0;
let section = document.getElementsByTagName('section')[0];
let shelter = document.getElementById('shelter');
let dateText = document.getElementById('date');
let addtText = document.getElementById('address');
let titleText = document.getElementById('title');
let data = "";
let btn = document.getElementById('btn');

function createXML() {
  //用于ajax兼容问题
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
          i,
          len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex) {}
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error("NO XHR object available");
  }
}

function getData() {
  //初始调用，获得以后用到数据和进行第一次渲染函数调用
  return new Promise(function (resolve) {

    /*jsonp进行跨域请求，这个接口不支持jsonp格式
    var script = document.createElement('script');
      script.src = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${id}&n=${n}&callback=handleResponse`;
      document.body.insertBefore(script, document.body.firstChild);
      function handleResponse(response){
      }
    */

    var xml = createXML();
    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        data = JSON.parse(xml.responseText)["showapi_res_body"]["list"];

        photo().then(function () {
          filldata();
          resolve(data);
        });
      }
    };
    //有个跨域请求问题
    //xml.open("GET",`https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${id}&n=${n}`);
    //xml.setRequestHeader("Access-Control-Allow-Origin", "*");
    xml.open("GET", "http://route.showapi.com/1377-1?showapi_appid=47374&showapi_sign=f4eb9bc5ea1847e99f6aaa931a36b0d7");

    xml.send();
  });
}
function photo() {
  return new Promise(function (resolve) {
    let pics = [];
    let index = 0;
    for (let { pic } of data) {
      pics.push(pic);
    }
    //根据data得到图片的地址
    for (let pic of pics) {
      var a = new Image();
      a.onload = function () {
        index++;
        if (index == pics.length) {
          resolve();
        }
      };
      a.src = pic;
    }
    //加载实现全部加载后改变背景
  });
}

var filldata = function () {
  //根据点击填充数据，比如时间，日期，已经缓冲的图片
  var { pic, day, title, city } = data[id];
  city = city || "这像是一个城市吗☺";
  dateText.innerHTML = day;
  titleText.innerHTML = title;
  addtText.innerHTML = city;

  section.className += " animated fadeIn";
  section.style.backgroundImage = `url("${pic}")`;
  setTimeout(() => section.className = "ph", 500);
};

prevbtn.onclick = function () {
  if (id !== 0) {
    id--;
    filldata();
  } else {
    alert("今天最新的bing美图，就在你的眼前！");
  }
};
nextbtn.onclick = function () {
  if (id !== 4) {
    id++;
    filldata();
  } else {
    alert("已经是最后一张图片，伤心！正在建立仓库，马上就可以看到好久以前的了耶(＾－＾)V");
  }
};
async function init() {
  section.style.backgroundImage = "url(img/" + img + ")";
  await getData();
}

/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0e8edbcaef3e22718de6334626ed6d25.gif";

/***/ })
/******/ ]);