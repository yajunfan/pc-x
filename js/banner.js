var banner=document.getElementById("banner");
var oPicture=banner.getElementsByTagName("div")[0];
var oDiv=oPicture.getElementsByTagName("div");
var oUl=banner.getElementsByTagName("ul")[0];

var aLis=oUl.getElementsByTagName("li");
var aLeft=banner.getElementsByTagName("a")[0];
var aRight=banner.getElementsByTagName("a")[1];
var timer=null;
var step=0;
var interval=2000;

//动态添加一个div

//设置一个定时器，让div每隔1秒向左移动1000px；
clearTimeout(timer);
timer=setInterval(autoMove,interval);
function autoMove(){
        if(step>=oDiv.length-1){
            step=0;
            utils.css(oPicture,"left",-step*1000)
        }
        step++;
    zhufengAnimate(oPicture,{left:-step*1000},1000);
    bannerTip();
}
function bannerTip(){
    var tmpStep=step>=aLis.length?0:step;
    for(var i=0; i<aLis.length; i++){
     aLis[i].className=i===tmpStep?"first":"";
    }
}
//鼠标移入事件
outIn();
function outIn(){
    banner.onmouseover=function(){
        clearTimeout(timer);
        aLeft.style.display=aRight.style.display="block";
    }
    banner.onmouseout=function(){
        timer=setInterval(autoMove,interval);
        aLeft.style.display=aRight.style.display="none";
    }
}

//实现点击按钮切换--前提是要鼠标上去的时候先关掉定时器，所以要先写鼠标上去的事件
handleChange();
function handleChange(){
    for(var i=0;i<aLis.length;i++){
        aLis[i].index=i;
        aLis[i].onclick=function(){
            step=this.index;
            zhufengAnimate(oPicture,{left:-step*1000},1000);
            bannerTip()
        }
    }
}
//点击a切换
btn();
function btn(){
    aLeft.onclick=function(){
        if(step<=0){
            step=oDiv.length-1;
            utils.css(oPicture,"left",-step*1000);
        }
        step--;
        zhufengAnimate(oPicture,{left:-step*1000},1000);
        bannerTip()

    }
    aRight.onclick=autoMove;
}


