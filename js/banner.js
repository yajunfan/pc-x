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

//��̬���һ��div

//����һ����ʱ������divÿ��1�������ƶ�1000px��
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
//��������¼�
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

//ʵ�ֵ����ť�л�--ǰ����Ҫ�����ȥ��ʱ���ȹص���ʱ��������Ҫ��д�����ȥ���¼�
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
//���a�л�
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


