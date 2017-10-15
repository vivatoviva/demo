/*完成foote部分对页面图片的切换*/

/*
* 接口为http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1

* 1、format，非必要。我理解为输出格式，不存在或者不等于js，即为xml格式，等于js时，输出json格式；

* 2、idx，非必要。不存在或者等于0时，输出当天的图片，-1为已经预备用于明天显示的信息，1则为昨天的图片，idx最多获取到之前16天的图片信息；*

* 3、n，必要。这是输出信息的数量，比如n=1，即为1条，以此类推，至多输出8条；*
 */
var img = require('./img/46201453_3.gif');

img = "../" + img;//因为我将output中filename设置为js/,所以中间的图片都是相对于上一级进行插入

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

function createXML(){
  //用于ajax兼容问题
  if(typeof XMLHttpRequest!="undefined"){
    return new XMLHttpRequest();
  }else if(typeof ActiveXObject!="undefined"){
    if(typeof arguments.callee.activeXString!="string"){
       var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
           i,len;
       for(i=0,len=versions.length;i<len;i++){
         try{
           new ActiveXObject(versions[i]);
           arguments.callee.activeXString=versions[i];
           break;
         }catch(ex){

         }
       }
    }
     return new ActiveXObject(arguments.callee.activeXString);
  }else{
    throw new Error("NO XHR object available");
  }
 }

function getData(){
  //初始调用，获得以后用到数据和进行第一次渲染函数调用
  return new Promise(function(resolve){

    /*jsonp进行跨域请求，这个接口不支持jsonp格式
    var script = document.createElement('script');

    script.src = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${id}&n=${n}&callback=handleResponse`;

    document.body.insertBefore(script, document.body.firstChild);

    function handleResponse(response){

    }
    */

    var xml = createXML();
    xml.onreadystatechange = function(){
      if(xml.readyState==4 && xml.status==200){
        data = JSON.parse(xml.responseText)["showapi_res_body"]["list"];

        photo()
        .then(function(){
          filldata();
          resolve(data);
        });
      }
    }
    //有个跨域请求问题
    //xml.open("GET",`https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${id}&n=${n}`);
    //xml.setRequestHeader("Access-Control-Allow-Origin", "*");
    xml.open("GET","http://route.showapi.com/1377-1?showapi_appid=47374&showapi_sign=f4eb9bc5ea1847e99f6aaa931a36b0d7");

    xml.send();
  })
}
function photo(){
  return new Promise(function(resolve){
    let pics = [];
    let index = 0;
    for(let {pic} of data){
      pics.push(pic);
    }
    //根据data得到图片的地址
    for(let pic of pics){
      var a = new Image();
      a.onload = function() {
        index++;
        if(index==pics.length){
          resolve();
        }
      }
      a.src = pic;
    }
    //加载实现全部加载后改变背景
  })
}

var filldata = function(){
  //根据点击填充数据，比如时间，日期，已经缓冲的图片
  var {pic,day,title,city} = data[id];
  city = city || "这像是一个城市吗☺";
  dateText.innerHTML = day;
  titleText.innerHTML = title;
  addtText.innerHTML = city;

  section.className+=" animated fadeIn";
  section.style.backgroundImage = `url("${pic}")`;
  setTimeout(()=>section.className = "ph",500);
}



prevbtn.onclick = function(){
    if(id!==0){
      id--;
      filldata();
    }else{
      alert("今天最新的bing美图，就在你的眼前！")
    }
  };
nextbtn.onclick = function(){
    if(id!==4){
      id++;
      filldata();
    }else{
      alert("已经是最后一张图片，伤心！正在建立仓库，马上就可以看到好久以前的了耶(＾－＾)V")
    }
}
async function init(){
    section.style.backgroundImage = "url(img/"+img+")";
    await getData();
}

export default init;