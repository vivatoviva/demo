require('./css/animate.min.css');
require('./css/style.css');

import head from "./header-c";
import init from "./footer-c"
head();
init().then(()=>console.log("初始化完成"));
