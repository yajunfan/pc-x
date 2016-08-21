/**
 * Created by Administrator on 2016/8/9.
 */
selectDa("loading");
function selectDa(idName){
    var Line=document.getElementById(idName);
    var dUl=Line.getElementsByTagName("ul")[0];
    var dLis=dUl.getElementsByTagName("li");
    var dDiv=utils.getByClass(Line,"item");
    var ob=Line.getElementsByTagName("b");
    for(var i=0;i<dLis.length;i++){
        dLis[i].index=i;
        dLis[i].onclick=function(){
            for(var j= 0,len=dLis.length;j<len;j++){
                dLis[j].className="";
                utils.removeClass( dDiv[j],"selectDiv");
                utils.removeClass( ob[j],"selectOb")
        }
            dLis[this.index].className="select";
            utils.addClass( dDiv[this.index],"selectDiv");
            utils.addClass( ob[this.index],"selectOb");
        }
    }
}
var dUl=document.getElementById("seleUl");
var dLis=dUl.getElementsByTagName("li");
var ob=dUl.getElementsByTagName("b");
//mark(dLis,ob );
function mark(zEle,bEle ){
    for(var i=0;i<zEle.length;i++){
        zEle[i].index=i;
        zEle[i].onmouseenter=function(){
            bEle[this.index].style.display="block";
        }
        zEle[i].onmouseleave=function(){
            bEle[this.index].style.display="none";
        }
    }
}