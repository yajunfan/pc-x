var box=document.getElementById("box");
var content=document.getElementById("content");
var title=document.getElementById("title");
var tCenter=document.getElementById("tCenter");
var oError=document.getElementById("error");
var aInput=document.getElementById("txt");
var List=document.getElementById("List");
var local=document.getElementById("local");
var lDiv=utils.getByClass(local,"hot-list");
var lLi=local.getElementsByTagName("li");
var selector=utils.getByClass(content,"selector")[0];
var oSpan=selector.getElementsByTagName("span");
var chengShi=utils.getByClass(content,"chengshi")[0];
var oDivs=utils.getChildren(chengShi);
var aLis=List.getElementsByTagName("li");
var hotSearch=utils.getByClass(tCenter,"hot-search")[0];
var Group=utils.getByClass(tCenter,"follow-group")[0];
var follow=utils.getByClass(title,"follow")[0];
//侧边栏经过事件
var item=document.getElementById("item");
var itemLeft=utils.getByClass(item,"item-left")[0];
var oUl=itemLeft.getElementsByTagName("ul")[0];
var oLis=oUl.getElementsByTagName("li");
//猜你喜欢的选项卡事件
var thinkHeader=document.getElementById("think-header");
var h2=thinkHeader.getElementsByTagName("h2")[0];
var h2A=h2.getElementsByTagName("a");
var tDiv=utils.getByClass(thinkHeader,"selescterd");
var numPic=utils.getByClass(thinkHeader,"num_1");



//城市选项卡事件
select();
function select(){
    for(var i=0;i<oSpan.length;i++){
        oSpan[i].index=i;
        oSpan[i].onclick=function(){
            var siDiv= utils.siblings(oDivs[this.index]);
            for(var j=0;j<oSpan.length;j++){
                oSpan[j].className="";
                oDivs[j].style.display="none";
                siDiv[0].style.display="none"
            }
            oSpan[this.index].className="selector_s";
            oDivs[this.index].style.display="block";
            siDiv[0].style.display="none"

        }
    }
}

//猜你喜欢的选项卡事件
selecter();
function selecter(){
    for(var i=0;i<h2A.length;i++){
        h2A[i].index=i;
        h2A[i].onmouseenter=function(){
            for(var j=0;j<h2A.length;j++){
                h2A[j].className="";
                utils.removeClass(tDiv[j],"blo")
            }
            h2A[this.index].className="selsectera";
            utils.addClass(tDiv[this.index],"blo")
        }
    }
}
//遮罩事件
function mark(){

}

//大展示区的选项卡事件
selectDa("leave-line");
selectDa("short-line");
selectDa("outline-line");
selectDa("zhou-line");
function selectDa(idName){
    var Line=document.getElementById(idName);
    var dUl=Line.getElementsByTagName("ul")[0];
    var dLis=dUl.getElementsByTagName("li");
    var dDiv=utils.getByClass(Line,"item");

    for(var i=0;i<dLis.length;i++){
        dLis[i].index=i;
        dLis[i].onclick=function(){
            for(var j= 0,len=dLis.length;j<len;j++){
                dLis[j].className="";
                utils.removeClass( dDiv[j],"selectDiv")
            }
            dLis[this.index].className="select";
            utils.addClass( dDiv[this.index],"selectDiv")
        }
    }

}
//遮罩事件
getArray("leave-line");
getArray("short-line");
getArray("outline-line");
getArray("zhou-line");
function getArray(curPar) {
    var cur = document.getElementById(curPar);
    var curParent = utils.getByClass(cur, "item-right");
    for(var i=0;i<curParent.length;i++){
        var item=curParent[i];
        var mDiv = utils.getChildren(item);
        for (var j =0; j<mDiv.length; j++) {
            mDiv[j].index=j;
            mDiv[j].onmouseenter = function () {
                var oMark=utils.getByClass(this,"mark")[0];
                oMark.style.display = "block";
            };
            mDiv[j].onmouseleave = function () {
                var oMark=utils.getByClass(this,"mark")[0];
                oMark.style.display = "none";
            }

        }

    }


}

//input框事件
mouse(Group,follow);
function mouse(idName,curEle){
    idName.onmouseover=function(e){
        e=e||window.event;
        curEle.style.display="block";
    };
    idName.onmouseout=function(){
        curEle.style.display="none";
    };
}

// 标题列表栏事件
mouseAll(aLis);
function mouseAll(idName){
    for(var i=1;i< idName.length;i++){
        idName[i].index=i;
        var aDivs=null;
            idName[i].onmouseenter=function(){
            aDivs=utils.getChildren(idName[this.index],"div")[0];
                aDivs.style.display="block";
            };
                   idName[i].onmouseleave=function(){
                       aDivs=utils.getChildren(idName[this.index],"div")[0];
                       aDivs.style.display="none";
                   };
        }
}

//网站地图的事件
mouseUl(lLi,lDiv);
function mouseUl(mainName,showName){
    for(var i= 0,len=mainName.length;i<len;i++){
        mainName[i].index=i;
        var sibDiv=utils.siblings(showName[i]);
        mainName[i].onmouseover=function(){
            showName[this.index].style.display="block";
        };
        mainName[i].onmouseout=function(){
            showName[this.index].style.display="none";
        };
    }
}
//点击叉号隐藏
aInput.onfocus=function(){
    hotSearch.style.display="block";
    if(aInput.value.length>0){
        console.log(aInput.value);
        aInput.value="";
    }
};
aError();
function aError(){
    oError.onclick=function(){
        hotSearch.style.display="none";
    }
}

//点击侧边栏地点偏移事件  使用transform属性
function move(){
    for(var i=0;i<oLis.length;i++){
        oLis[i].index=i;
        oLis[i].onmouseenter=function(){
            oLis[this.index].style.left=-5+"px";
        };
        oLis[i].onmouseleave=function(){
            oLis[this.index].style.left=0+"px";
        }
    }
}

//回到顶部
toTop();
function toTop(){
    var oDiv=document.getElementById('toTop');
    var timer=null;
    oDiv.onclick=function(){
        var target=utils.win('scrollTop');
        var duration=500;
        var interval=30;
        var step=target/duration*interval;
        timer=setInterval(function(){
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
        },interval)
    }
}

//多张图片的延迟加载
//lazyImgs()
function lazyImgs(){
    var aImg=document.getElementsByTagName('img');
    console.log(aImg);
    window.onscroll=function(){
        var scrollBottom=utils.win('scrollTop')+utils.win('clientHeight');
        for(var i=0; i<aImg.length; i++){
            var imgPosition=utils.offset(aImg[i]).top+utils.getCss(aImg[i],'height');
            if(imgPosition<=scrollBottom){
                lazyImg(aImg[i]);
            }
        }
    }
    function lazyImg(img){
        if(img.loaded){
            return;
        }
        var tmpImg=new Image;
        tmpImg.src=img.getAttribute('realImg');
        tmpImg.onload=function(){
            img.src=this.src;
            tmpImg=null;
            img.loaded=true;
        };
        tmpImg.onerror=function(){
            tmpImg=null;
            img.loaded=true;
        }
    }

}






