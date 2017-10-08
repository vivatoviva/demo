/*这个部分完成页面header部分的逻辑*/

import  webs from "./header-m";


let navlist  = Array.from(document.getElementsByClassName('webs'));
let detail = document.getElementById('detail');

function openDetail(){
  //打开二级菜单
  detail.style.display = "block";
  detail.className += " animated zoomIn"
  console.log();
}
function closeDetail(){
  //关闭二级菜单
  detail.style.display = "none";
  detail.className = "detail";
}
function overflow(){
  //用于head函数中标记当前二级菜单是第几个按钮下面的
  for(let web of navlist){
    web.open = false;
  }
}
function head(){
  //点击效果
  for(let web of navlist){
    web.addEventListener("click",function(){
      if(detail.style.display === "block" && web.open === true){
        closeDetail();
        web.open = false;
      }else{
        overflow();
        web.open=true;
        openDetail();
        filla(event.target.innerHTML,"default");
        fillLis(event.target.innerHTML);
      }
    })
  }
}
var fillLis = function(name){
  //填充二级菜单
  let names = Object.keys(webs[name]);
  let ul = document.getElementById('detail_ul');
  ul.innerHTML = "";
  for(let n of names){
    if(n!=="default"){
      let li = document.createElement("li");
      li.innerHTML = n;
      ul.appendChild(li);
      li.addEventListener('click',()=>filla(name,n))
    }
  }

}
function filla(name,n){
  //点击后或者调用，填充三级菜单
  let websites = webs[name][n];
  let as = document.getElementById('website');
  as.innerHTML = "";
  var adda = function(name,src){
    return new Promise(function(resolve){
      setTimeout(function(){
        let a = document.createElement("a");
        a.innerHTML = name;
        a.setAttribute("href",src);
        as.appendChild(a);
        a.className = "animated fadeIn";
        resolve();
      },100)
    })
  }
  var addlink = async function (){
    for(let {name,src} of websites){
      await adda(name,src)
    }
  }
  addlink()
}

//处理nav中搜索
let searchbtn = document.getElementById("search").getElementsByTagName('button')[0];
let ifo = document.getElementsByName("window")[0];
searchbtn.onclick = function(){
  //搜索点击效果
  let input = document.getElementById('searchText');
  if(input.value!==""){
    ifo.style.display = "block";
    closeDetail();
  }
}
//home点击回到主页面和清除一些操作
let homebtn = document.getElementById('home');
homebtn.onclick = function(){//home点击控制
  ifo.setAttribute("src","");
  ifo.style.display = "none";
  overflow();
  closeDetail();
}

export default head;

